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



        // --- 1. Loading Screen Logic ---
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('loader-hidden');
                loader.addEventListener('transitionend', () => {
                    if (loader.parentNode) loader.parentNode.removeChild(loader);
                });
            }, 800);
        });

        // --- 2. Scroll Reveal Logic (IntersectionObserver) ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section h2, section p, .group').forEach((el) => {
            if (!el.classList.contains('animate-fade-in')) {
                el.style.opacity = "0";
                el.style.transform = "translateY(20px)";
                el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
                observer.observe(el);
            }
        });

        // --- 3. Canvas Animation (Referenced VST Style adapted for Corporate Blue) ---
        const canvas = document.getElementById('heroCanvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            let width, height;
            let time = 0;
            let particles = [];
            
            // Branding Colors (Blue/Slate) instead of Neon
            const colors = ['#2563eb', '#64748b', '#93c5fd']; 

            function resize() {
                const rect = canvas.parentElement.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
                width = canvas.width;
                height = canvas.height;
            }
            window.addEventListener('resize', resize);
            resize();

            // Particle Class (Background movement like reference)
            class Particle {
                constructor() {
                    this.reset();
                }
                reset() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                    this.vy = (Math.random() - 0.5) * 0.5;
                    this.size = Math.random() * 2 + 0.5;
                    this.alpha = Math.random() * 0.5 + 0.1;
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                }
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    // Wrap around
                    if (this.x < 0) this.x = width;
                    if (this.x > width) this.x = 0;
                    if (this.y < 0) this.y = height;
                    if (this.y > height) this.y = 0;
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = this.alpha;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            }

            // Init particles
            for(let i = 0; i < 50; i++) particles.push(new Particle());

            function drawWave(yOffset, amplitude, frequency, speed, color, thickness) {
                ctx.beginPath();
                ctx.lineWidth = thickness;
                ctx.strokeStyle = color;
                
                for (let x = 0; x < width; x++) {
                    let y = height / 2 + yOffset;
                    // Smooth Sine Wave
                    y += Math.sin(x * frequency + time * speed) * amplitude;
                    // Secondary Wave modulation
                    y += Math.cos(x * frequency * 0.5 + time * speed * 0.5) * (amplitude * 0.5);
                    
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);
                time += 0.01;

                // Draw Particles
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });

                // Draw Waves (Flowing data/connectivity metaphor)
                // Back wave (faint)
                drawWave(50, 40, 0.003, 1, 'rgba(148, 163, 184, 0.2)', 1); // Slate-400
                // Middle wave (blue)
                drawWave(0, 60, 0.005, 1.5, 'rgba(37, 99, 235, 0.15)', 2); // Blue-600
                // Front wave (accent)
                drawWave(-30, 30, 0.007, 2, 'rgba(59, 130, 246, 0.1)', 1); // Blue-500

                requestAnimationFrame(animate);
            }
            animate();
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
      

<div className="fixed inset-0 z-50 bg-white flex items-center justify-center" id="loader">
<div className="flex flex-col items-center">
<div className="relative w-16 h-16">
<div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
<div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
</div>
<div className="mt-4 text-blue-900 text-sm font-semibold tracking-widest uppercase animate-pulse">Kizuna JV Corp</div>
</div>
</div>

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-700/20 group-hover:scale-105 transition-transform duration-300">K</div>
<div className="flex flex-col">
<span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">KIZUNA</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Ready Service Factory</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#about">Về Kizuna</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#locations">Vị trí chiến lược</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#models">Mô hình nhà xưởng</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#ecosystem">Hệ sinh thái</a>
</div>

<div className="hidden md:flex items-center gap-4">
<span className="text-xs font-medium text-slate-400">VN | EN | JP | KR</span>
<a className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 hover:-translate-y-0.5 flex items-center gap-2" href="#contact">
<span>Liên hệ ngay</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<button className="md:hidden text-slate-600">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<canvas className="absolute inset-0 -z-10 w-full h-full opacity-60" id="heroCanvas"></canvas>

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-slate-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative pointer-events-none"> 
<div className="max-w-3xl pointer-events-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-6 animate-fade-in shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
                    Giải pháp nhà xưởng xây sẵn toàn diện
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8 animate-fade-in delay-100 drop-shadow-sm">
                    Nền tảng vững chắc cho <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 animate-gradient-x">Sản xuất bền vững</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10 animate-fade-in delay-200 glass-panel p-4 rounded-xl border-transparent bg-white/40">
                    Kizuna cung cấp hệ thống Nhà xưởng Dịch vụ Xây sẵn tối ưu, minh bạch pháp lý và hệ sinh thái hỗ trợ toàn diện, giúp doanh nghiệp FDI nhanh chóng ổn định sản xuất tại Việt Nam.
                </p>
<div className="flex flex-wrap gap-4 animate-fade-in delay-300">
<a className="px-7 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-200 hover:-translate-y-1 hover:shadow-2xl" href="#tour">
<span className="iconify" data-icon="lucide:video" data-width="18"></span>
                        Xem Virtual Tour 360°
                    </a>
<a className="px-7 py-3.5 bg-white/80 backdrop-blur text-slate-700 border border-slate-200 font-medium rounded-lg hover:bg-white transition-all flex items-center gap-2 hover:-translate-y-1 shadow-sm hover:shadow-md" href="#contact">
<span className="iconify" data-icon="lucide:download" data-width="18"></span>
                        Tải Brochure
                    </a>
</div>
</div>

<div className="hidden lg:block absolute top-20 right-0 w-[500px] h-[600px] animate-fade-in delay-300 pointer-events-auto">
<div className="relative w-full h-full">

<div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl border border-white/50 transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out hover:scale-[1.02]">
<img alt="Kizuna Factory" className="w-full h-full object-cover opacity-90 mix-blend-overlay" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute top-12 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 animate-[float_6s_ease-in-out_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-500 font-medium">Pháp lý minh bạch</div>
<div className="text-slate-900 font-bold">100% Rõ ràng</div>
</div>
</div>
</div>

<div className="absolute bottom-20 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 animate-[float_7s_ease-in-out_infinite_1s]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-500 font-medium">Cộng đồng DN</div>
<div className="text-slate-900 font-bold">300+ FDI</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-slate-200 bg-white/50 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-1 group-hover:text-blue-700 transition-colors duration-300">12+</div>
<div className="text-sm text-slate-500 font-medium">Năm kinh nghiệm</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-1 group-hover:text-blue-700 transition-colors duration-300">500+</div>
<div className="text-sm text-slate-500 font-medium">Khách hàng quốc tế</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-1 group-hover:text-blue-700 transition-colors duration-300">300k</div>
<div className="text-sm text-slate-500 font-medium">Diện tích m² sàn</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-1 group-hover:text-blue-700 transition-colors duration-300">98%</div>
<div className="text-sm text-slate-500 font-medium">Tỷ lệ tái ký hợp đồng</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="about">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Tại sao chọn Kizuna?</h2>
<p className="text-slate-500">Chúng tôi không chỉ cho thuê nhà xưởng, chúng tôi cung cấp một môi trường sản xuất an toàn và hiệu quả.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-blue-200">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
<span className="iconify" data-icon="lucide:check-circle" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Minh bạch &amp; Uy tín</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Hồ sơ pháp lý rõ ràng, thủ tục hành chính được hỗ trợ trọn gói miễn phí. Cam kết không có chi phí ẩn.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-blue-200">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
<span className="iconify" data-icon="lucide:layout-template" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Hạ tầng đồng bộ</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Hệ thống điện 2 nguồn (EVN &amp; Solar), nước sạch, xử lý thải đạt chuẩn, IT hạ tầng cao cấp sẵn sàng sử dụng.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-blue-200">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
<span className="iconify" data-icon="lucide:headphones" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Dịch vụ hỗ trợ 24/7</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Đội ngũ nhân sự đa ngôn ngữ (Nhật, Hàn, Anh, Việt) hỗ trợ kế toán, nhân sự, bảo trì và pháp lý.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden relative" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/3 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide mb-4">
                        Long An, Vietnam
                    </div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Vị trí chiến lược kết nối giao thương</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Nằm tại cửa ngõ TP.HCM, kết nối trực tiếp với các cảng biển và sân bay quốc tế, tối ưu hóa chi phí logistics cho doanh nghiệp xuất nhập khẩu.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-slate-100 hover:shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
<span className="iconify" data-icon="lucide:plane" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sân bay Tân Sơn Nhất</div>
<div className="text-xs text-slate-500">24 km (45 phút)</div>
</div>
</li>
<li className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-slate-100 hover:shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
<span className="iconify" data-icon="lucide:anchor" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Cảng Cát Lái</div>
<div className="text-xs text-slate-500">26 km (50 phút)</div>
</div>
</li>
<li className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-slate-100 hover:shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
<span className="iconify" data-icon="lucide:building-2" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Trung tâm TP.HCM</div>
<div className="text-xs text-slate-500">19 km (35 phút)</div>
</div>
</li>
</ul>
</div>

<div className="lg:w-2/3 w-full h-[500px] relative bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">

<style>
                            .dash-line {
                                stroke-dasharray: 8;
                                animation: dash 30s linear infinite;
                            }
                            @keyframes dash {
                                to { stroke-dashoffset: -1000; }
                            }
                        </style>
<path className="dash-line" d="M400,250 L200,100" stroke="#cbd5e1" strokeWidth="2"></path>
<path className="dash-line" d="M400,250 L600,120" stroke="#cbd5e1" strokeWidth="2"></path>
<path className="dash-line" d="M400,250 L500,400" stroke="#cbd5e1" strokeWidth="2"></path>
</svg>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-300">
<div className="relative w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-xl pulse-dot flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="mt-3 px-4 py-1.5 bg-white/90 backdrop-blur border border-blue-100 shadow-xl rounded-full text-xs font-bold text-blue-700 whitespace-nowrap">KIZUNA JV</div>
</div>


<div className="absolute top-[20%] left-[20%] z-10 flex flex-col items-center transition-all hover:-translate-y-1">
<div className="w-5 h-5 bg-white rounded-full border-4 border-slate-300 shadow-sm"></div>
<span className="mt-2 text-[10px] font-semibold text-slate-600 bg-white/90 px-2 py-0.5 rounded shadow-sm">Sân Bay TSN</span>
</div>

<div className="absolute top-[25%] right-[20%] z-10 flex flex-col items-center transition-all hover:-translate-y-1">
<div className="w-5 h-5 bg-white rounded-full border-4 border-slate-300 shadow-sm"></div>
<span className="mt-2 text-[10px] font-semibold text-slate-600 bg-white/90 px-2 py-0.5 rounded shadow-sm">Cảng Cát Lái</span>
</div>

<div className="absolute bottom-[20%] right-[30%] z-10 flex flex-col items-center transition-all hover:-translate-y-1">
<div className="w-5 h-5 bg-white rounded-full border-4 border-slate-300 shadow-sm"></div>
<span className="mt-2 text-[10px] font-semibold text-slate-600 bg-white/90 px-2 py-0.5 rounded shadow-sm">Phú Mỹ Hưng</span>
</div>

<div className="absolute w-2 h-2 bg-blue-500 rounded-full top-[50%] left-[50%] animate-[ping_3s_linear_infinite] opacity-50"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="models">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Mô hình nhà xưởng</h2>
<p className="text-slate-500 mt-2">Đa dạng diện tích, phù hợp mọi quy mô sản xuất</p>
</div>
<a className="hidden md:flex items-center gap-1 text-blue-700 font-medium hover:gap-2 transition-all group" href="#">
                    Xem tất cả <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group cursor-pointer hover:-translate-y-2">
<div className="h-48 bg-slate-200 relative overflow-hidden">
<img alt="Small Factory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-2 py-1 rounded shadow-lg">240m² - 1000m²</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Nhà xưởng quy mô nhỏ</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Lý tưởng cho doanh nghiệp khởi nghiệp, công nghiệp hỗ trợ hoặc phòng thí nghiệm.</p>
<div className="flex items-center gap-4 text-xs text-slate-400 font-medium border-t border-slate-100 pt-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:maximize"></span> Nhỏ gọn</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:zap"></span> Điện sẵn sàng</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group cursor-pointer hover:-translate-y-2">
<div className="h-48 bg-slate-200 relative overflow-hidden">
<img alt="Medium Factory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-2 py-1 rounded shadow-lg">1000m² - 5000m²</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Nhà xưởng liền kề</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Thiết kế không gian mở, dễ dàng mở rộng, tối ưu hóa dây chuyền sản xuất.</p>
<div className="flex items-center gap-4 text-xs text-slate-400 font-medium border-t border-slate-100 pt-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:layers"></span> Linh hoạt</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:truck"></span> Xe tải vào tận nơi</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group cursor-pointer hover:-translate-y-2">
<div className="h-48 bg-slate-200 relative overflow-hidden">
<img alt="High Rise Factory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">Mới</div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-2 py-1 rounded shadow-lg">2000m² +</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Nhà xưởng cao tầng</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Giải pháp hiện đại cho công nghiệp nhẹ, công nghệ cao, tối ưu chi phí vận hành.</p>
<div className="flex items-center gap-4 text-xs text-slate-400 font-medium border-t border-slate-100 pt-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:arrow-up-circle"></span> Thang hàng tải trọng lớn</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="ecosystem">
<div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Hệ sinh thái dịch vụ toàn diện</h2>
<p className="text-slate-500 mb-8">
                        Kizuna không chỉ cho thuê không gian, chúng tôi đồng hành cùng sự phát triển của bạn thông qua 7 nhóm dịch vụ chính, giúp bạn tập trung hoàn toàn vào sản xuất kinh doanh.
                    </p>
<div className="space-y-4">
<div className="flex gap-4 items-start group hover:bg-slate-50 p-2 rounded-lg transition-colors">
<div className="mt-1 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Pháp lý khởi tạo</h4>
<p className="text-xs text-slate-500 mt-1">Đăng ký kinh doanh, giấy phép đầu tư, môi trường.</p>
</div>
</div>
<div className="flex gap-4 items-start group hover:bg-slate-50 p-2 rounded-lg transition-colors">
<div className="mt-1 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Hành chính &amp; Nhân sự</h4>
<p className="text-xs text-slate-500 mt-1">Tuyển dụng, tính lương, BHXH, visa cho chuyên gia.</p>
</div>
</div>
<div className="flex gap-4 items-start group hover:bg-slate-50 p-2 rounded-lg transition-colors">
<div className="mt-1 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">3</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Kế toán &amp; Tài chính</h4>
<p className="text-xs text-slate-500 mt-1">Hỗ trợ báo cáo thuế, kế toán trưởng.</p>
</div>
</div>
</div>
</div>
<div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-lg font-semibold text-slate-900 mb-6 relative z-10">Cam kết dịch vụ</h3>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-green-500 mb-2" data-icon="lucide:clock" data-width="24"></span>
<span className="text-sm font-medium text-slate-900">Phản hồi nhanh</span>
<span className="text-xs text-slate-400">Trong vòng 24h</span>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-blue-500 mb-2" data-icon="lucide:languages" data-width="24"></span>
<span className="text-sm font-medium text-slate-900">Đa ngôn ngữ</span>
<span className="text-xs text-slate-400">EN - JP - KR - VN</span>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-purple-500 mb-2" data-icon="lucide:file-check" data-width="24"></span>
<span className="text-sm font-medium text-slate-900">Chính xác</span>
<span className="text-xs text-slate-400">Tuân thủ pháp luật</span>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-orange-500 mb-2" data-icon="lucide:shield" data-width="24"></span>
<span className="text-sm font-medium text-slate-900">Bảo mật</span>
<span className="text-xs text-slate-400">Thông tin khách hàng</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-2xl font-semibold text-slate-900 mb-12">Đối tác tin cậy của 500+ doanh nghiệp FDI</h2>
<div className="flex flex-wrap justify-center gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold text-slate-400 tracking-tight hover:text-slate-600 transition-colors cursor-default">SUMITOMO</div>
<div className="text-xl font-bold text-slate-400 tracking-tight hover:text-slate-600 transition-colors cursor-default">SAMSUNG</div>
<div className="text-xl font-bold text-slate-400 tracking-tight hover:text-slate-600 transition-colors cursor-default">LG CHEM</div>
<div className="text-xl font-bold text-slate-400 tracking-tight hover:text-slate-600 transition-colors cursor-default">NINTENDO</div>
<div className="text-xl font-bold text-slate-400 tracking-tight hover:text-slate-600 transition-colors cursor-default">PANASONIC</div>
</div>
<div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative hover:shadow-lg transition-all duration-300">
<span className="absolute top-4 right-4 text-6xl text-slate-100 font-serif leading-none">"</span>
<p className="text-slate-600 text-sm leading-relaxed mb-4 relative z-10">
                        Kizuna giúp chúng tôi tiết kiệm được 6 tháng chuẩn bị so với việc tự xây dựng nhà xưởng. Đội ngũ pháp lý hỗ trợ rất chuyên nghiệp.
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="Avatar" src="https://ui-avatars.com/api/?name=Mr+Tanaka&amp;background=0D8ABC&amp;color=fff"/>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Mr. Tanaka</div>
<div className="text-xs text-slate-500">General Manager, Japan Electronics Co.</div>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative hover:shadow-lg transition-all duration-300">
<span className="absolute top-4 right-4 text-6xl text-slate-100 font-serif leading-none">"</span>
<p className="text-slate-600 text-sm leading-relaxed mb-4 relative z-10">
                        Môi trường xanh, sạch và an ninh tốt. Đây là nơi lý tưởng để đặt cơ sở sản xuất thực phẩm của chúng tôi.
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="Avatar" src="https://ui-avatars.com/api/?name=Ms+Lee&amp;background=random&amp;color=fff"/>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Ms. Lee Ji-Eun</div>
<div className="text-xs text-slate-500">Director, K-Food International</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-slate-900"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Sẵn sàng bắt đầu sản xuất?</h2>
<p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Liên hệ với Kizuna ngay hôm nay để nhận báo giá chi tiết và tham quan nhà xưởng thực tế.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 hover:scale-105" href="#">
<span className="iconify" data-icon="lucide:phone-call" data-width="18"></span>
                    (+84) 272 3733 333
                </a>
<a className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium rounded-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 hover:scale-105" href="#">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
                    Gửi yêu cầu tư vấn
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-xs">K</div>
<span className="font-bold text-slate-900 tracking-tight">KIZUNA JV CORPORATION</span>
</div>
<p className="text-slate-500 mb-6 max-w-xs">Giải pháp nhà xưởng dịch vụ hàng đầu tại Việt Nam. Uy tín, Chất lượng, Hiệu quả.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-700 transition-colors transform hover:scale-110" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-slate-400 hover:text-blue-700 transition-colors transform hover:scale-110" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-slate-400 hover:text-blue-700 transition-colors transform hover:scale-110" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Về Kizuna</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-blue-700 transition-colors" href="#">Giới thiệu</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Đội ngũ quản lý</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Tin tức &amp; Sự kiện</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Tuyển dụng</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Dịch vụ</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-blue-700 transition-colors" href="#">Thuê nhà xưởng</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Hỗ trợ pháp lý</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Hỗ trợ nhân sự</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Kizuna Hub</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Liên hệ</h4>
<ul className="space-y-2 text-slate-500">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 flex-shrink-0" data-icon="lucide:map-pin" data-width="14"></span>
                            Long An, Vietnam
                        </li>
<li className="flex items-center gap-2">
<span className="iconify flex-shrink-0" data-icon="lucide:mail" data-width="14"></span>
                            sales@kizuna.vn
                        </li>
<li className="flex items-center gap-2">
<span className="iconify flex-shrink-0" data-icon="lucide:phone" data-width="14"></span>
                            (+84) 272 3733 333
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<div>© 2023 Kizuna JV Corporation. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Điều khoản sử dụng</a>
<a className="hover:text-slate-600" href="#">Chính sách bảo mật</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
