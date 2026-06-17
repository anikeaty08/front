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
      
<div className="min-h-screen flex flex-col" id="app">

<header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-sm font-semibold tracking-tight">
<span>P</span>
</div>
<div className="flex flex-col">
<span className="text-sm sm:text-base font-semibold tracking-tight">
                PLEXIS
              </span>
<span className="text-[0.7rem] sm:text-xs text-slate-400 tracking-tight">
                Grow &amp; Glow Distribution
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<button className="text-slate-300 hover:text-slate-50 transition-colors" data-nav-target="#san-pham">
              Sản phẩm
            </button>
<button className="text-slate-300 hover:text-slate-50 transition-colors" data-nav-target="#thong-tin-san-pham">
              Thông tin sản phẩm
            </button>
<button className="text-slate-300 hover:text-slate-50 transition-colors" data-nav-target="#loi-ich">
              Công nghệ uốn phục hồi
            </button>
<button className="text-slate-300 hover:text-slate-50 transition-colors" data-nav-target="#quy-trinh">
              Dành cho salon
            </button>
<button className="text-slate-300 hover:text-slate-50 transition-colors" data-nav-target="#faq">
              Hỏi đáp
            </button>
<button className="text-slate-300 hover:text-slate-50 transition-colors" data-nav-target="#lien-he">
              Liên hệ
            </button>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-md border border-sky-400/40 bg-sky-500/90 hover:bg-sky-400 text-xs sm:text-sm font-medium tracking-tight text-slate-950 px-3 sm:px-4 py-1.5 transition-colors" data-nav-target="#lien-he">
              Đăng ký tư vấn
            </button>
<button className="hidden sm:inline-flex items-center justify-center rounded-md border border-slate-700 hover:border-slate-500 text-xs sm:text-sm text-slate-200 px-3 sm:px-4 py-1.5 tracking-tight" data-route-link="/auth/login">
              Đăng nhập
            </button>

<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-700 hover:border-slate-500" id="mobile-menu-toggle">

<svg className="h-4 w-4 text-slate-200" fill="none" id="icon-menu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>

<svg className="h-4 w-4 text-slate-200 hidden" fill="none" id="icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-md" id="mobile-menu">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-1 text-sm">
<button className="text-slate-200 py-2 text-left" data-nav-target="#san-pham">
              Sản phẩm
            </button>
<button className="text-slate-200 py-2 text-left" data-nav-target="#thong-tin-san-pham">
              Thông tin sản phẩm
            </button>
<button className="text-slate-200 py-2 text-left" data-nav-target="#loi-ich">
              Công nghệ uốn phục hồi
            </button>
<button className="text-slate-200 py-2 text-left" data-nav-target="#quy-trinh">
              Dành cho salon
            </button>
<button className="text-slate-200 py-2 text-left" data-nav-target="#faq">
              Hỏi đáp
            </button>
<button className="text-slate-200 py-2 text-left" data-nav-target="#lien-he">
              Liên hệ
            </button>
<div className="flex items-center gap-2 pt-2">
<button className="flex-1 inline-flex items-center justify-center rounded-md border border-sky-400/40 bg-sky-500/90 hover:bg-sky-400 text-xs font-medium tracking-tight text-slate-950 px-3 py-1.5" data-nav-target="#lien-he">
                Đăng ký tư vấn
              </button>
<button className="flex-1 inline-flex items-center justify-center rounded-md border border-slate-700 hover:border-slate-500 text-xs text-slate-200 px-3 py-1.5 tracking-tight" data-route-link="/auth/login">
                Đăng nhập
              </button>
</div>
</div>
</div>
</header>

<main className="flex-1">

<div className="route-view" data-route="/">

<section className="relative overflow-hidden border-b border-slate-900/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" id="top">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-32 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"></div>
<div className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-20 relative">
<div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-slate-900/80 px-3 py-1 mb-4">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs font-medium tracking-tight text-sky-100">
                      Thuốc uốn – phục hồi chuyên nghiệp từ Hàn Quốc
                    </span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
                    PLEXIS – Hệ thống uốn phục hồi cho salon cao cấp
                  </h1>
<p className="text-base sm:text-lg text-slate-300 mb-6 max-w-xl">
                    Tăng giá trị dịch vụ uốn &amp; phục hồi tại salon của bạn
                    với công nghệ Plexis từ Hàn Quốc: kiểm soát độ hư tổn, giữ
                    nếp lâu, hạn chế mùi hóa chất và hỗ trợ đào tạo kỹ thuật
                    trọn gói.
                  </p>
<ul className="space-y-2 mb-7 text-sm sm:text-base text-slate-200">
<li className="flex items-start gap-2">

<svg className="h-4 w-4 text-emerald-400 mt-[0.15rem]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span>
                        Line sản phẩm uốn &amp; phục hồi tối ưu cho tóc tẩy, tóc
                        yếu, tóc hư tổn.
                      </span>
</li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-emerald-400 mt-[0.15rem]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span>
                        Được đào tạo trực tiếp bởi đội ngũ kỹ thuật – có demo
                        thực tế tại salon.
                      </span>
</li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-emerald-400 mt-[0.15rem]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span>
                        Hỗ trợ marketing, xây menu dịch vụ &amp; chính sách dành
                        riêng cho salon.
                      </span>
</li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-emerald-400 mt-[0.15rem]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span>
                        Sẵn sàng tích hợp AI tư vấn kỹ thuật, gợi ý gói dịch vụ
                        &amp; FAQ thông minh.
                      </span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
<button className="inline-flex items-center justify-center rounded-md border border-sky-400/40 bg-sky-500/90 hover:bg-sky-400 text-sm font-medium tracking-tight text-slate-950 px-4 sm:px-5 py-2" data-nav-target="#lien-he">
                      Đăng ký làm đại lý
                    </button>
<button className="inline-flex items-center justify-center rounded-md border border-slate-700 hover:border-slate-500 text-sm font-medium tracking-tight text-slate-50 px-4 sm:px-5 py-2" data-nav-target="#thong-tin-san-pham">
                      Xem thông tin sản phẩm
                    </button>
</div>
<p className="text-xs text-slate-400">
                    Dành cho: chủ salon, thợ chính, nhà phân phối – đội ngũ
                    Plexis Việt Nam sẽ liên hệ trong vòng 24–48h.
                  </p>
</div>

<div className="relative">
<div className="aspect-[4/3] sm:aspect-[5/4] rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(8,47,73,0.45)]">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_55%)] opacity-70"></div>
<div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-950/60 px-3 py-1">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 3h15"></path>
<path d="M6 3v9.5a6.5 6.5 0 1 0 12 0V3"></path>
<path d="M6 14h12"></path>
</svg>
<span className="text-xs font-medium tracking-tight text-sky-100">
                          Công thức Hàn Quốc – tối ưu cho tóc Việt
                        </span>
</div>
<div className="flex items-end gap-3">
<div className="h-28 sm:h-32 w-8 rounded-t-full bg-gradient-to-t from-slate-900 via-sky-600 to-sky-300 shadow-lg shadow-sky-900/50"></div>
<div className="h-32 sm:h-40 w-10 rounded-t-full bg-gradient-to-t from-slate-900 via-cyan-500 to-sky-200 shadow-lg shadow-cyan-900/60"></div>
<div className="h-24 sm:h-28 w-8 rounded-t-full bg-gradient-to-t from-slate-900 via-sky-500 to-cyan-200 shadow-lg shadow-sky-900/40"></div>
</div>
<p className="text-sm sm:text-base text-slate-100 text-center max-w-xs">
                        Hệ thống Plexis hỗ trợ uốn nóng, uốn lạnh và phục hồi
                        chuyên sâu, giảm tối đa rủi ro cháy nát tóc.
                      </p>
<p className="text-[0.7rem] sm:text-xs text-slate-400 text-center">
                        Hình ảnh sản phẩm thực tế sẽ được cập nhật trong thời
                        gian tới.
                      </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/70 bg-slate-950" id="san-pham">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                    Vì sao hơn 100+ salon tin dùng Plexis?
                  </h2>
<p className="text-base text-slate-300">
                    Được kiểm chứng qua các ca tóc tẩy, tóc yếu và các salon
                    chuyên dịch vụ uốn – phục hồi cao cấp.
                  </p>
</div>
<div className="text-xs text-slate-400">
                  Danh sách salon đối tác sẽ được cập nhật.
                </div>
</div>

<div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
<div className="h-8 rounded-full border border-slate-800/80 bg-slate-900/80 px-3 flex items-center text-xs text-slate-300 tracking-tight">
                  Salon A.
                </div>
<div className="h-8 rounded-full border border-slate-800/80 bg-slate-900/80 px-3 flex items-center text-xs text-slate-300 tracking-tight">
                  Hair Studio B.
                </div>
<div className="h-8 rounded-full border border-slate-800/80 bg-slate-900/80 px-3 flex items-center text-xs text-slate-300 tracking-tight">
                  Premium C.
                </div>
<div className="h-8 rounded-full border border-slate-800/80 bg-slate-900/80 px-3 flex items-center text-xs text-slate-300 tracking-tight">
                  &amp; hơn nữa...
                </div>
</div>

<div className="grid gap-4 md:grid-cols-3" id="testimonial-list">

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex flex-col justify-between">
<p className="text-sm sm:text-base text-slate-200 mb-4">
                    “Từ khi dùng Plexis, các ca tóc tẩy uốn lạnh ở salon mình
                    giảm hẳn tình trạng đứt gãy. Khách quay lại khen tóc giữ nếp
                    lâu mà vẫn mềm.”
                  </p>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-100">
                      HT
                    </div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-50">
                        H. Trinh
                      </div>
<div className="text-xs text-slate-400">
                        Chủ salon, Q.3 – TP.HCM
                      </div>
</div>
</div>
</article>

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex flex-col justify-between">
<p className="text-sm sm:text-base text-slate-200 mb-4">
                    “Ưu điểm lớn nhất là đội ngũ kỹ thuật kèm rất sát, hỗ trợ
                    build menu dịch vụ, giải thích kỹ cho thợ nên anh em trong
                    tiệm bắt nhịp rất nhanh.”
                  </p>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-100">
                      KL
                    </div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-50">
                        K. Long
                      </div>
<div className="text-xs text-slate-400">
                        Thợ chính, Bình Dương
                      </div>
</div>
</div>
</article>

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex flex-col justify-between">
<p className="text-sm sm:text-base text-slate-200 mb-4">
                    “Plexis cho tụi mình thêm line dịch vụ premium, biên lợi
                    nhuận tốt hơn mà khách vẫn dễ chấp nhận. Đặc biệt là phân
                    khúc khách tóc yếu sau sinh.”
                  </p>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-100">
                      NN
                    </div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-50">
                        N. Ngân
                      </div>
<div className="text-xs text-slate-400">
                        Salon quận 7 – TP.HCM
                      </div>
</div>
</div>
</article>
</div>

<div className="hidden mt-4 text-xs text-slate-400" id="testimonial-empty">
                Chưa có chia sẻ nào, đang cập nhật…
              </div>
</div>
</section>

<section className="border-b border-slate-900/70 bg-slate-950" id="thong-tin-san-pham">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="max-w-3xl mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                  Toàn bộ thông tin sản phẩm Plexis
                </h2>
<p className="text-base text-slate-300">
                  Trích xuất đầy đủ – chi tiết – chuẩn hóa từ Catalog Plexis –
                  New T10.2025, tối ưu để dùng cho landing page, chatbot và đào
                  tạo salon.
                </p>
</div>
<div className="space-y-8">

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 p-4 sm:p-5">
<div className="flex items-center gap-2 mb-3">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<path d="M20.78 8a8.91 8.91 0 0 1 .22 2 9 9 0 0 1-9 9 8.91 8.91 0 0 1-2-.22"></path>
<path d="M6 18.94A8.94 8.94 0 0 1 3 10a8.94 8.94 0 0 1 9-9 8.94 8.94 0 0 1 8.94 7"></path>
<path d="M7.21 4.08a9 9 0 0 0 0 15.84"></path>
<path d="M16.79 4.08a9 9 0 0 1 0 15.84"></path>
</svg>
<h3 className="text-lg font-medium tracking-tight text-slate-50">
                      1) Công nghệ cốt lõi Plexis
                    </h3>
</div>
<p className="text-sm text-slate-300 mb-3">
                    Nền tảng công nghệ Plexis giúp giảm hư tổn, bảo vệ cấu trúc
                    tóc và tối ưu hiệu quả cho các dịch vụ uốn – ép – phục hồi.
                  </p>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-2">
<h4 className="text-sm font-medium tracking-tight text-slate-100">
                        Công nghệ nền tảng
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>
                          •
                          <span className="font-medium">
                            4th Generation Softening Agent
                          </span>
                          – chất mềm hóa thế hệ thứ 4: an toàn hơn, ổn định hơn,
                          giảm hư tổn so với thế hệ cũ.
                        </li>
<li>
                          •
                          <span className="font-medium">
                            Complex Protein Care System
                          </span>
                          – tổ hợp protein &amp; chiết xuất tự nhiên: protein
                          ngô, chiết xuất hạt yến mạch, quả yuzu, men yến mạch,
                          tảo chlorella, nhân sâm.
                        </li>
</ul>
</div>
<div className="space-y-2">
<h4 className="text-sm font-medium tracking-tight text-slate-100">
                        Bảo vệ cấu trúc tóc
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>
                          • Công nghệ bảo vệ lớp lõi tóc (Cortex Protection).
                        </li>
<li>
                          • Công nghệ Protein thủy phân (Hydrolyzed Protein).
                        </li>
<li>
                          • Công nghệ phục hồi CMC (Cell Membrane Complex).
                        </li>
</ul>
</div>
</div>
<div className="mt-3 border-t border-slate-800/80 pt-3">
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                      Tác dụng chung
                    </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>• Giảm hư tổn, tăng liên kết sợi tóc.</li>
<li>
                        • Cân bằng pH tối ưu trong suốt quá trình làm dịch vụ.
                      </li>
<li>• Tăng độ bóng, độ mềm, độ đàn hồi.</li>
<li>• Giữ nếp lâu, tóc bóng như phủ bóng nước.</li>
</ul>
</div>
</article>

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 p-4 sm:p-5">
<div className="flex items-center justify-between gap-3 mb-3">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9s2-2 4-2 3 2 5 2 3-2 5-2 4 2 4 2"></path>
<path d="M2 15s2-2 4-2 3 2 5 2 3-2 5-2 4 2 4 2"></path>
</svg>
<h3 className="text-lg font-medium tracking-tight text-slate-50">
                        2) Plexis Aqua Gloss Curl — Uốn nóng (Digital Perm)
                      </h3>
</div>
<div className="text-xs text-sky-300">
                      498.000 – 598.000 VNĐ / cặp
                    </div>
</div>
<p className="text-sm text-slate-300 mb-3">
                    Dòng uốn nóng chuyên nghiệp, kiểm soát pH đa cấp, phù hợp
                    nhiều mức độ hư tổn khác nhau.
                  </p>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Thành phần / công nghệ chính
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>
                          •
                          <span className="font-medium">Thio Glycolic Acid</span>
                          thế hệ mới.
                        </li>
<li>
                          •
                          <span className="font-medium">Cysteamine</span>
                          thế hệ 4.
                        </li>
<li>• Hệ thống kiểm soát pH đa cấp.</li>
<li>• Protein phục hồi tăng mềm, bóng, đàn hồi.</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Độ pH theo từng sản phẩm (dạng gói)
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>• pH 9.5 → tóc khỏe.</li>
<li>• pH 9.0 → tóc khỏe – trung bình.</li>
<li>• pH 8.0 → tóc trung bình – yếu.</li>
<li>• pH 7.0 → tóc yếu.</li>
<li>• pH 6.0 → tóc rất yếu / cần phục hồi.</li>
</ul>
</div>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Gợi ý chọn pH theo mức độ tóc
                      </h4>
<div className="overflow-x-auto">
<table className="min-w-full text-xs text-slate-200 border border-slate-800/80 rounded-lg overflow-hidden">
<thead className="bg-slate-900/90">
<tr>
<th className="text-left font-medium tracking-tight px-3 py-2 border-b border-slate-800/80">
                                Mức độ tóc
                              </th>
<th className="text-left font-medium tracking-tight px-3 py-2 border-b border-slate-800/80">
                                pH khuyến nghị
                              </th>
</tr>
</thead>
<tbody className="bg-slate-950/60">
<tr>
<td className="px-3 py-1.5 border-b border-slate-900/80">
                                Tóc khỏe
                              </td>
<td className="px-3 py-1.5 border-b border-slate-900/80">
                                9.5 – 9.0
                              </td>
</tr>
<tr>
<td className="px-3 py-1.5 border-b border-slate-900/80">
                                Tóc trung bình
                              </td>
<td className="px-3 py-1.5 border-b border-slate-900/80">
                                9.0 – 8.0
                              </td>
</tr>
<tr>
<td className="px-3 py-1.5 border-b border-slate-900/80">
                                Tóc yếu
                              </td>
<td className="px-3 py-1.5 border-b border-slate-900/80">
                                8.0 – 7.0
                              </td>
</tr>
<tr>
<td className="px-3 py-1.5 border-b border-slate-900/80">
                                Tóc rất yếu
                              </td>
<td className="px-3 py-1.5 border-b border-slate-900/80">
                                7.0 – 6.0
                              </td>
</tr>
<tr>
<td className="px-3 py-1.5">Tóc hư tổn nặng</td>
<td className="px-3 py-1.5">EX + PPT</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="space-y-3">
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                          Cách dùng thuốc số 1 (Softening)
                        </h4>
<p className="text-xs text-slate-400 mb-1">
                          Thời gian xử lý tổng: 5 – 45 phút tùy chất tóc.
                        </p>
<ul className="text-sm text-slate-300 space-y-1">
<li>• EX / pH 9.5 → 5–15 phút.</li>
<li>• pH 9.0 → 5–15 phút.</li>
<li>• pH 8.0 → 10–20 phút.</li>
<li>• pH 7.0 → 10–25 phút.</li>
<li>
                            • pH 6.0 → tóc yếu – rất yếu, có thể tăng thời gian
                            nhẹ.
                          </li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                          Cách dùng thuốc số 2 (Neutralizer)
                        </h4>
<p className="text-sm text-slate-300">
                          Thời gian: 7–10 phút.
                        </p>
</div>
</div>
</div>
<div className="mt-4 border-t border-slate-800/80 pt-3">
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                      Quy trình uốn nóng (tóm tắt)
                    </h4>
<ol className="text-sm text-slate-300 space-y-1 list-decimal list-inside">
<li>Gội đầu.</li>
<li>Xịt PPT Keratin.</li>
<li>Thoa thuốc số 1.</li>
<li>Test độ giãn sợi tóc.</li>
<li>Rửa sạch + sấy ẩm.</li>
<li>Uốn định hình bằng máy.</li>
<li>Thoa thuốc số 2.</li>
<li>Treatment phục hồi.</li>
<li>Hoàn thiện nếp tóc.</li>
</ol>
</div>
</article>

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 p-4 sm:p-5">
<div className="flex items-center justify-between gap-3 mb-3">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<path d="m12 2-2 3 2 3 2-3-2-3Z"></path>
<path d="m12 16-2 3 2 3 2-3-2-3Z"></path>
<path d="m5 4 2.5 1.5L9 4 7.5 2.5 5 4Z"></path>
<path d="m5 20 2.5-1.5L9 20l-1.5 1.5L5 20Z"></path>
<path d="m19 4-2.5 1.5L15 4l1.5-1.5L19 4Z"></path>
<path d="m19 20-2.5-1.5L15 20l1.5 1.5L19 20Z"></path>
</svg>
<h3 className="text-lg font-medium tracking-tight text-slate-50">
                        3) Plexis Aqua Gloss — Uốn lạnh (Cold Perm)
                      </h3>
</div>
<div className="text-xs text-sky-300">310.000 VNĐ / cặp</div>
</div>
<p className="text-sm text-slate-300 mb-3">
                    Dòng uốn lạnh sử dụng Cysteamine Free Base thế hệ 4, nhẹ
                    nhàng cho tóc yếu – trung bình – cực yếu và dễ gãy rụng.
                  </p>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Đối tượng tóc phù hợp
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>• Tóc yếu.</li>
<li>• Tóc trung bình.</li>
<li>• Tóc cực yếu.</li>
<li>• Tóc dễ gãy rụng.</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Công nghệ Cysteamine Free Base
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>• Không chứa Ammonium → ít hư tổn hơn.</li>
<li>• Mùi dễ chịu hơn, không nồng.</li>
<li>• Độ thẩm thấu cao, ngấm nhanh vào tóc.</li>
<li>• An toàn, nhẹ nhàng với tóc yếu.</li>
<li>• Giảm tổn thương lớp biểu bì.</li>
</ul>
</div>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-2">
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Cách dùng thuốc số 1 — làm mềm
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>• Tóc khỏe → 10–15 phút.</li>
<li>• Tóc trung bình → 10–20 phút.</li>
<li>• Tóc yếu → 15–25 phút.</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Cách dùng thuốc số 2 — định hình
                      </h4>
<p className="text-sm text-slate-300">
                        Thời gian: 7–10 phút.
                      </p>
</div>
</div>
<div className="mt-4 border-t border-slate-800/80 pt-3">
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                      Quy trình uốn lạnh (tóm tắt)
                    </h4>
<ol className="text-sm text-slate-300 space-y-1 list-decimal list-inside">
<li>Gội đầu.</li>
<li>Xịt PPT Keratin.</li>
<li>Thoa thuốc số 1.</li>
<li>Xả kỹ + sấy ẩm.</li>
<li>Quấn ống.</li>
<li>Bôi thuốc số 2.</li>
<li>Treatment.</li>
</ol>
</div>
</article>

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 p-4 sm:p-5">
<div className="flex items-center justify-between gap-3 mb-3">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M5 12h14"></path>
<path d="M7 18h10"></path>
</svg>
<h3 className="text-lg font-medium tracking-tight text-slate-50">
                        4) Plexis Aqua Down Fit — Ép side / Ép phục hồi
                      </h3>
</div>
<div className="text-xs text-sky-300">390.000 VNĐ / túi</div>
</div>
<p className="text-sm text-slate-300 mb-3">
                    Dòng ép phục hồi giúp giảm xù, giảm khô và cải thiện độ
                    thẳng – mượt tự nhiên cho nhiều nền tóc khác nhau.
                  </p>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        3 phiên bản
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>
                          •
                          <span className="font-medium">EX</span>
                          → dành cho tóc hư tổn.
                        </li>
<li>
                          •
                          <span className="font-medium">N</span>
                          → dành cho tóc thường.
                        </li>
<li>
                          •
                          <span className="font-medium">H</span>
                          → dành cho tóc khỏe.
                        </li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Công dụng chính
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>
                          • Giảm hư tổn, tăng liên kết (Keratin, Protein, Silk;
                          hạn chế gãy rụng).
                        </li>
<li>
                          • Làm ẩm &amp; tạo màng bảo vệ (CMC, Ceramide; giảm
                          khô – giảm xù).
                        </li>
<li>
                          • Làm mượt, chống xù, cải thiện độ thẳng mượt tự
                          nhiên.
                        </li>
<li>• Chống oxy hóa, tăng đàn hồi, bảo vệ biểu bì.</li>
</ul>
</div>
</div>
<div className="mt-4 border-t border-slate-800/80 pt-3">
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                      Quy trình ép phục hồi (tóm tắt)
                    </h4>
<ol className="text-sm text-slate-300 space-y-1 list-decimal list-inside">
<li>Gội đầu.</li>
<li>Thoa thuốc (10–15 phút).</li>
<li>Bình hơi / kéo dẹt.</li>
<li>Xả sạch.</li>
<li>Sấy &amp; hoàn thiện.</li>
</ol>
</div>
</article>

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 p-4 sm:p-5">
<div className="flex items-center justify-between gap-3 mb-3">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.69 7.05 7.64a7 7 0 1 0 9.9 0Z"></path>
</svg>
<h3 className="text-lg font-medium tracking-tight text-slate-50">
                        5) Plexis Enhancer Treatment — Phục hồi chuyên sâu
                      </h3>
</div>
<div className="text-xs text-sky-300">690.000 VNĐ / chai</div>
</div>
<p className="text-sm text-slate-300 mb-3">
                    Treatment phục hồi chuyên sâu, tập trung vào biểu bì và lõi
                    tóc, giúp tóc yếu lấy lại độ đàn hồi và bóng mượt.
                  </p>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Thành phần nổi bật
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>• 22 loại axit amin.</li>
<li>• Keratin thủy phân.</li>
<li>• Collagen thủy phân.</li>
<li>• Peptide phục hồi.</li>
<li>
                          • Chiết xuất: Ginseng, Olive, Trà xanh, Galactomyces.
                        </li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Công dụng chính
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>• Hồi phục biểu bì &amp; lõi tóc.</li>
<li>• Tăng độ đàn hồi, giảm xơ rối.</li>
<li>• Tăng bóng mượt, mềm mại.</li>
<li>• Nuôi dưỡng &amp; bảo vệ tóc yếu.</li>
</ul>
</div>
</div>
<div className="mt-4 border-t border-slate-800/80 pt-3">
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                      Cách dùng (rút gọn)
                    </h4>
<ol className="text-sm text-slate-300 space-y-1 list-decimal list-inside">
<li>Gội đầu.</li>
<li>Thoa Plexis Treatment lên tóc ẩm.</li>
<li>Massage đều.</li>
<li>Ủ 5–10 phút.</li>
<li>Xả sạch &amp; hoàn thiện.</li>
</ol>
</div>
</article>

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 p-4 sm:p-5">
<div className="flex items-center justify-between gap-3 mb-3">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v7.31"></path>
<path d="M14 9.3V1.99"></path>
<path d="M8.5 2h7"></path>
<path d="M5.52 8.65 4 10.18a2.54 2.54 0 0 0 0 3.59L8.23 18 12 22l3.77-4 4.23-4.23a2.54 2.54 0 0 0 0-3.59L18.48 8.65"></path>
<path d="M5.52 8.65 10 9.3h4l4.48-.65"></path>
</svg>
<h3 className="text-lg font-medium tracking-tight text-slate-50">
                        6) Plexis Keraplex PPT — Phục hồi protein siêu sâu
                      </h3>
</div>
<div className="text-xs text-sky-300 text-right">
                      1L: 990.000 VNĐ
                      <br/>
                      300ml: 490.000 VNĐ
                    </div>
</div>
<p className="text-sm text-slate-300 mb-3">
                    Sản phẩm PPT đa năng, dùng được trước – trong – sau dịch vụ
                    hóa chất để bổ sung protein và bảo vệ tóc hư tổn.
                  </p>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Công dụng chính
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>
                          • Phục hồi protein sâu, tăng cường liên kết tóc hư
                          tổn.
                        </li>
<li>
                          • Cung cấp 22 loại axit amin, tăng sức khỏe sợi tóc.
                        </li>
<li>
                          • Thành phần hút ẩm thiên nhiên, ngăn mất nước, giữ độ
                          mềm.
                        </li>
<li>
                          • Tăng sức đề kháng cho tóc trước/ sau uốn – ép –
                          nhuộm.
                        </li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-slate-100 mb-1">
                        Cách dùng (linh hoạt)
                      </h4>
<ul className="text-sm text-slate-300 space-y-1">
<li>• Pha trực tiếp vào thuốc uốn / nhuộm.</li>
<li>
                          • Dùng trước khi uốn / nhuộm để bảo vệ phần hư tổn.
                        </li>
<li>• Dùng như treatment siêu phục hồi độc lập.</li>
</ul>
<p className="text-xs text-slate-400 mt-2">
                        Gợi ý khi nhuộm: pha PPT theo tỷ lệ 1:2 với thuốc, bôi
                        lên phần tóc hư tổn để hạn chế “bùng xù” trong quá trình
                        nhuộm.
                      </p>
</div>
</div>
</article>

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 p-4 sm:p-5">
<div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
<div>
<div className="flex items-center gap-2 mb-2">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"></path>
<path d="M12 17h.01"></path>
</svg>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                          7) Q&amp;A chính hãng Plexis (tóm tắt chủ đề)
                        </h3>
</div>
<p className="text-sm text-slate-300 mb-2">
                        Một số câu hỏi nổi bật trong phần Q&amp;A chính hãng:
                      </p>
<ul className="text-sm text-slate-300 space-y-1">
<li>• Vì sao Plexis sử dụng 9 loại protein?</li>
<li>
                          • Plexis Treatment khác gì sản phẩm thông thường?
                        </li>
<li>• Vì sao tóc sau uốn bằng Plexis mềm hơn?</li>
<li>• Plexis có uốn được cả tóc tẩy không?</li>
<li>• Khác biệt giữa pH Plexis và sản phẩm khác?</li>
<li>• Plexis chọn thành phần theo tiêu chí nào?</li>
<li>• Vì sao nên chọn Plexis thay vì sản phẩm khác?</li>
</ul>
<p className="text-xs text-slate-400 mt-2">
                        Phần chi tiết từng câu hỏi – đáp có thể dùng để huấn
                        luyện chatbot kỹ thuật hoặc tài liệu đào tạo nội bộ
                        salon.
                      </p>
</div>
<div className="border border-slate-800/80 rounded-xl bg-slate-950/80 p-3 sm:p-4">
<div className="flex items-center gap-2 mb-1.5">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"></path>
<path d="M6 18h12"></path>
<path d="M10 6h4"></path>
<path d="M10 10h4"></path>
<path d="M10 14h4"></path>
</svg>
<h3 className="text-sm font-medium tracking-tight text-slate-50">
                          8) Thông tin nhà phân phối
                        </h3>
</div>
<p className="text-sm text-slate-300">
<span className="font-medium">
                          CÔNG TY TNHH GROW &amp; GLOW DISTRIBUTION
                        </span>
<br/>
                        Địa chỉ: 14 Lê Thị Riêng, P. Phạm Ngũ Lão, Q1, TP.HCM
                      </p>
<p className="text-sm text-slate-300 mt-1">
                        Website:
                        <a className="text-sky-300 hover:text-sky-200" href="https://www.plexis.vn" rel="noreferrer" target="_blank">
                          www.plexis.vn
                        </a>
<br/>
                        Email:
                        <a className="text-sky-300 hover:text-sky-200" href="mailto:grow.glow.distribution@gmail.com">
                          grow.glow.distribution@gmail.com
                        </a>
</p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-900/70 bg-slate-950" id="loi-ich">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="max-w-2xl mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                  Lợi ích khi salon chọn Plexis
                </h2>
<p className="text-base text-slate-300">
                  Không chỉ là một bộ thuốc, Plexis là cả một hệ thống hỗ trợ kỹ
                  thuật, kinh doanh và marketing cho salon.
                </p>
</div>

<div className="hidden text-sm text-slate-400 mb-4" id="benefit-empty">
                Thông tin lợi ích sẽ được cập nhật. Vui lòng liên hệ Zalo
                <span className="font-medium text-sky-300">0796 886 868</span>
                để được tư vấn nhanh.
              </div>
<div className="grid gap-4 sm:gap-6 md:grid-cols-2" id="benefit-grid">

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex gap-3">
<div className="mt-1">

<svg className="h-5 w-5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v4"></path>
<path d="M10 3h4"></path>
<path d="M16 7l-1.5 2.5L12 11l-2.5-1.5L8 7l1.5-2.5L12 3l2.5 1.5L16 7Z"></path>
<path d="M5 16v2"></path>
<path d="M4 17h2"></path>
<path d="M19 16v2"></path>
<path d="M18 17h2"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50 mb-1">
                      Tối ưu cho tóc hư tổn, tóc tẩy
                    </h3>
<p className="text-sm text-slate-300">
                      Công thức cân bằng giữa độ mềm và độ giữ nếp, hạn chế cháy
                      – đứt – rít trong các ca tóc yếu, tóc đã xử lý hoá chất
                      nhiều lần.
                    </p>
</div>
</article>

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex gap-3">
<div className="mt-1">

<svg className="h-5 w-5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10 12 4 2 10l10 6 10-6Z"></path>
<path d="M6 12v5c0 .4.2.8.6 1.1C8.1 19 10 20 12 20s3.9-1 5.4-1.9c.4-.3.6-.7.6-1.1v-5"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50 mb-1">
                      Đào tạo kỹ thuật sát sao
                    </h3>
<p className="text-sm text-slate-300">
                      Hỗ trợ training trực tiếp tại salon hoặc online, cập nhật
                      giáo trình uốn – phục hồi, giúp đội ngũ thợ dễ dàng áp
                      dụng.
                    </p>
</div>
</article>

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex gap-3">
<div className="mt-1">

<svg className="h-5 w-5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-4 4"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50 mb-1">
                      Tăng biên lợi nhuận dịch vụ
                    </h3>
<p className="text-sm text-slate-300">
                      Xây dựng gói dịch vụ từ phổ thông đến cao cấp, giữ chi phí
                      sản phẩm hợp lý, tối ưu lợi nhuận trên từng đầu dịch vụ.
                    </p>
</div>
</article>

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex gap-3">
<div className="mt-1">

<svg className="h-5 w-5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M9 13v2"></path>
<path d="M15 13v2"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50 mb-1">
                      Sẵn sàng cho kỷ nguyên AI tại salon
                    </h3>
<p className="text-sm text-slate-300">
                      Tích hợp AI tư vấn kỹ thuật, gợi ý bảng giá &amp; nội dung
                      marketing, giúp bạn chăm sóc khách hàng bài bản hơn.
                    </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-900/70 bg-slate-950" id="quy-trinh">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="max-w-2xl mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                  Plexis đồng hành cùng salon như thế nào?
                </h2>
<p className="text-base text-slate-300">
                  Từ lúc bạn để lại thông tin đến khi dịch vụ vận hành ổn định,
                  đội ngũ Plexis luôn đi cùng salon.
                </p>
</div>

<div className="hidden text-sm text-slate-400 mb-4" id="steps-empty">
                Quy trình hợp tác sẽ được tư vấn chi tiết sau khi bạn để lại
                thông tin.
              </div>

<div className="grid gap-4 sm:gap-6 md:grid-cols-4" id="steps-grid">

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="h-6 w-6 rounded-full bg-sky-500/90 text-slate-950 text-xs font-medium flex items-center justify-center tracking-tight">
                      1
                    </div>

<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="18" x="3" y="6"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50 mb-1">
                    Đăng ký thông tin
                  </h3>
<p className="text-sm text-slate-300">
                    Bạn để lại thông tin salon, nhu cầu dịch vụ và khu vực để
                    đội ngũ Plexis sắp xếp tư vấn phù hợp.
                  </p>
</article>

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="h-6 w-6 rounded-full bg-sky-500/90 text-slate-950 text-xs font-medium flex items-center justify-center tracking-tight">
                      2
                    </div>

<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v4"></path>
<path d="M14 2v4"></path>
<path d="M8 6h8"></path>
<path d="M9 6 4.5 18.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5L15 6"></path>
</svg>
</div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50 mb-1">
                    Tư vấn &amp; demo sản phẩm
                  </h3>
<p className="text-sm text-slate-300">
                    Kỹ thuật viên trao đổi trực tiếp, phân tích tệp khách và
                    demo quy trình trên tóc thật hoặc manocanh.
                  </p>
</article>

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="h-6 w-6 rounded-full bg-sky-500/90 text-slate-950 text-xs font-medium flex items-center justify-center tracking-tight">
                      3
                    </div>

<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50 mb-1">
                    Đào tạo kỹ thuật
                  </h3>
<p className="text-sm text-slate-300">
                    Hướng dẫn chi tiết từng bước uốn, phục hồi, xử lý ca khó;
                    kèm tài liệu &amp; video để thợ ôn luyện.
                  </p>
</article>

<article className="border border-slate-800/80 rounded-xl bg-slate-900/80 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="h-6 w-6 rounded-full bg-sky-500/90 text-slate-950 text-xs font-medium flex items-center justify-center tracking-tight">
                      4
                    </div>

<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18v-6a9 9 0 1 1 18 0v6"></path>
<path d="M21 18a3 3 0 0 1-3 3h-1"></path>
<path d="M3 18a3 3 0 0 0 3 3h1"></path>
<path d="M7 13h1v4H7Z"></path>
<path d="M16 13h1v4h-1Z"></path>
</svg>
</div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50 mb-1">
                    Hỗ trợ sau triển khai
                  </h3>
<p className="text-sm text-slate-300">
                    Đồng hành xử lý case thực tế, tối ưu menu &amp; giá, hỗ trợ
                    marketing và chuẩn bị nền tảng AI cho salon.
                  </p>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-900/70 bg-slate-950" id="case-study">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                    Câu chuyện từ các salon đối tác
                  </h2>
<p className="text-base text-slate-300">
                    Một vài case study tiêu biểu về việc ứng dụng Plexis trong
                    dịch vụ uốn – phục hồi hàng ngày.
                  </p>
</div>
</div>

<div className="grid gap-4 sm:gap-6 md:grid-cols-2" id="case-grid">

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 overflow-hidden flex flex-col">
<div className="aspect-[16/9] bg-gradient-to-tr from-slate-900 via-sky-700/40 to-slate-900 flex items-center justify-center">
<div className="text-xs text-slate-200">
                      Hình salon A – demo uốn lạnh cho tóc tẩy
                    </div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between mb-2">
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                          Salon A – Chuyên tóc tẩy &amp; tóc màu
                        </h3>
<p className="text-xs text-slate-400">Quận 1, TP.HCM</p>
</div>
</div>
<p className="text-sm text-slate-300">
                      Trước khi dùng Plexis, salon rất dè chừng với các ca tóc
                      tẩy muốn uốn lơi. Sau khi test line Plexis ở vài khách
                      thân quen, tỷ lệ tóc hư tổn nặng giảm rõ, khách quay lại
                      đánh giá cao độ mềm &amp; bóng, nhờ đó salon tự tin đưa
                      vào menu dịch vụ chính với mức giá cao hơn.
                    </p>
</div>
</article>

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 overflow-hidden flex flex-col">
<div className="aspect-[16/9] bg-gradient-to-tr from-slate-900 via-cyan-700/40 to-slate-900 flex items-center justify-center">
<div className="text-xs text-slate-200">
                      Hình salon B – phục hồi trước &amp; sau
                    </div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between mb-2">
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                          Salon B – Phục hồi &amp; uốn setting
                        </h3>
<p className="text-xs text-slate-400">Biên Hoà, Đồng Nai</p>
</div>
</div>
<p className="text-sm text-slate-300">
                      Nhờ kết hợp combo phục hồi + uốn cùng Plexis, salon xây
                      được gói dịch vụ cao cấp cho khách văn phòng. Chỉ sau 2
                      tháng, doanh thu mảng uốn – phục hồi tăng hơn 30% với số
                      buổi training kỹ thuật khá gọn, không ảnh hưởng lịch làm
                      việc chính.
                    </p>
</div>
</article>

<article className="border border-slate-800/80 rounded-2xl bg-slate-900/80 overflow-hidden flex flex-col md:col-span-2">
<div className="aspect-[16/9] bg-gradient-to-tr from-slate-900 via-slate-700/30 to-slate-900 flex items-center justify-center">
<div className="text-xs text-slate-200">
                      Salon C – góc chụp tổng thể không gian &amp; đội ngũ
                    </div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between mb-2">
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                          Salon C – Chuỗi salon khu vực tỉnh
                        </h3>
<p className="text-xs text-slate-400">Miền Tây</p>
</div>
</div>
<p className="text-sm text-slate-300">
                      Chuỗi salon C cần một thương hiệu có thể triển khai đồng
                      nhất cho nhiều chi nhánh. Plexis hỗ trợ training tập trung
                      cho đội ngũ trưởng nhóm, sau đó chuẩn hoá quy trình để các
                      chi nhánh còn lại áp dụng. Kết quả là khách hàng được trải
                      nghiệm chất lượng tương đồng, trong khi chủ chuỗi kiểm
                      soát tốt chi phí sản phẩm và hiệu quả từng dịch vụ.
                    </p>
</div>
</article>
</div>

<div className="hidden mt-4 text-sm text-slate-400" id="case-empty">
                Case study đang được cập nhật. Liên hệ để xem demo hiệu quả thực
                tế tại các salon đối tác.
              </div>
</div>
</section>

<section className="border-b border-slate-900/70 bg-slate-950" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                    Câu hỏi thường gặp
                  </h2>
<p className="text-base text-slate-300">
                    Một số thắc mắc phổ biến về sản phẩm, kỹ thuật và chính sách
                    khi hợp tác cùng Plexis Việt Nam.
                  </p>
</div>

<div className="border border-sky-500/30 bg-slate-900/80 rounded-xl p-4 flex gap-3 max-w-sm">
<div className="mt-0.5">

<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"></path>
</svg>
</div>
<div>
<div className="text-xs font-medium tracking-tight text-sky-100 mb-1">
                      Hướng dẫn xuất bản (publish) landing page
                    </div>
<p className="text-xs text-slate-300 mb-1">
                      Cách publish sẽ tuỳ nền tảng bạn dùng (WordPress, Webflow,
                      Wix, code tự host,…).
                    </p>
<ul className="text-xs text-slate-300 space-y-1">
<li>
                        • Nếu dùng
                        <span className="font-medium">WordPress</span>
                        : tạo trang mới → bật chế độ
                        <span className="font-medium">HTML</span>
                        / "Code editor" → dán toàn bộ mã này → nhấn
                        <span className="font-medium">Đăng / Publish</span>
                        .
                      </li>
<li>
                        • Nếu dùng
                        <span className="font-medium">
                          Webflow / Wix / nền tảng kéo thả
                        </span>
                        : chèn một khối
                        <span className="font-medium">Embed / Custom code</span>
                        rồi dán HTML, sau đó bấm
                        <span className="font-medium">Publish</span>
                        .
                      </li>
<li>
                        • Nếu bạn có
                        <span className="font-medium">hosting riêng</span>
                        : lưu mã này thành file
                        <span className="font-medium">index.html</span>
                        → upload lên hosting (cPanel/FTP) hoặc deploy qua
                        Netlify/Vercel.
                      </li>
</ul>
<p className="text-[0.65rem] text-slate-400 mt-2">
                      Nếu bạn cho biết đang dùng nền tảng nào (VD: WordPress,
                      Haravan, Ladipage, v.v.), đội ngũ Plexis có thể hướng dẫn
                      chi tiết hơn từng bước.
                    </p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

    </>
  );
}
