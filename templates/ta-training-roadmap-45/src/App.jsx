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
      

<div className="flex w-full">

<aside className="hidden lg:flex lg:flex-col border-r border-slate-800 bg-slate-950/80 backdrop-blur-md w-64 shrink-0">
<div className="flex items-center gap-2 border-b border-slate-800 px-4 py-4">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-tight">
            TA
          </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">
              TA Training
            </span>
<span className="text-xs text-slate-400">
              6-session roadmap
            </span>
</div>
</div>
<nav className="flex-1 overflow-y-auto px-3 py-4 text-sm">
<div className="mb-4">
<p className="mb-2 text-xs font-medium uppercase tracking-tight text-slate-500">
              Lộ trình
            </p>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800/70" data-page="dashboard">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span>Tổng quan lộ trình</span>
</button>
</div>
<div className="mb-4">
<p className="mb-2 text-xs font-medium uppercase tracking-tight text-slate-500">
              Buổi học
            </p>
<div className="space-y-1">
<button className="nav-link flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-1">
<span className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                    1
                  </span>
<span>TA Mindset</span>
</span>
<span className="rounded-full bg-emerald-500/10 px-2 text-[0.625rem] font-medium text-emerald-400">
                  Core
                </span>
</button>
<button className="nav-link flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-2">
<span className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                    2
                  </span>
<span>Cambridge YL</span>
</span>
</button>
<button className="nav-link flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-3">
<span className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                    3
                  </span>
<span>SOP TA</span>
</span>
</button>
<button className="nav-link flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-4">
<span className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                    4
                  </span>
<span>Lesson Plan</span>
</span>
</button>
<button className="nav-link flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-5">
<span className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                    5
                  </span>
<span>Classroom Mgmt</span>
</span>
</button>
<button className="nav-link flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-6">
<span className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                    6
                  </span>
<span>Assessment</span>
</span>
</button>
</div>
</div>
<div className="mb-4">
<p className="mb-2 text-xs font-medium uppercase tracking-tight text-slate-500">
              Công cụ
            </p>
<div className="space-y-1">
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="checklists">
<i className="h-4 w-4" data-lucide="check-square"></i>
<span>Checklist &amp; SOP</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="activities">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Hoạt động &amp; Microteaching</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="assessment">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span>Assessment &amp; Report</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="resources">
<i className="h-4 w-4" data-lucide="folder-open"></i>
<span>Tài liệu</span>
</button>
</div>
</div>
</nav>
<div className="border-t border-slate-800 px-4 py-3 text-xs text-slate-500">
<div className="flex items-center justify-between">
<span>Version 1.0</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 px-2 py-1 text-[0.625rem] text-slate-300 hover:border-slate-500 hover:text-slate-50">
<i className="h-3 w-3" data-lucide="help-circle"></i>
              Hướng dẫn
            </button>
</div>
</div>
</aside>

<main className="flex-1 bg-slate-950/90">

<header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-950/95 px-4 py-3 lg:hidden">
<div className="flex items-center gap-2">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 text-slate-200" id="mobileMenuBtn">
<i className="h-4 w-4" data-lucide="menu"></i>
</button>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">
                TA Training
              </span>
<span className="text-xs text-slate-400">6-session roadmap</span>
</div>
</div>
<a className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300" href="#">
<i className="h-3 w-3" data-lucide="play-circle"></i>
            Quick Quiz
          </a>
</header>

<div className="fixed inset-y-0 left-0 z-30 hidden w-64 bg-slate-950 border-r border-slate-800" id="mobileDrawer">
<div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-tight">
                TA
              </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">
                  TA Training
                </span>
<span className="text-xs text-slate-400">
                  6-session roadmap
                </span>
</div>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 text-slate-300" id="mobileClose">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="overflow-y-auto px-3 py-4 text-sm">
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800/70" data-page="dashboard">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span>Tổng quan lộ trình</span>
</button>
<div className="mt-4 space-y-1">
<p className="mb-1 text-xs font-medium uppercase tracking-tight text-slate-500">
                Buổi học
              </p>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-1">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                  1
                </span>
<span>Buổi 1 – TA Mindset</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                  2
                </span>
<span>Buổi 2 – Cambridge YL</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-3">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                  3
                </span>
<span>Buổi 3 – SOP TA</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-4">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                  4
                </span>
<span>Buổi 4 – Lesson Plan</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-5">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                  5
                </span>
<span>Buổi 5 – Classroom Mgmt</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="session-6">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-[0.625rem] font-medium text-sky-400">
                  6
                </span>
<span>Buổi 6 – Assessment</span>
</button>
</div>
<div className="mt-5 space-y-1">
<p className="mb-1 text-xs font-medium uppercase tracking-tight text-slate-500">
                Công cụ
              </p>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="checklists">
<i className="h-4 w-4" data-lucide="check-square"></i>
<span>Checklist &amp; SOP</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="activities">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Hoạt động &amp; Microteaching</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="assessment">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span>Assessment &amp; Report</span>
</button>
<button className="nav-link flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/70" data-page="resources">
<i className="h-4 w-4" data-lucide="folder-open"></i>
<span>Tài liệu</span>
</button>
</div>
</div>
</div>

<div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 lg:px-8 lg:py-8">

<section className="page" id="page-dashboard">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-50">
                  Lộ trình Training Trợ giảng (06 buổi)
                </h1>
<p className="mt-1 text-sm text-slate-300">
                  60 phút/buổi – kết hợp lý thuyết và thực hành. Xem tổng quan và truy cập nhanh quiz cho từng buổi.
                </p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-slate-700/80 bg-slate-900 px-3 py-2 text-sm text-slate-200 hover:border-slate-500" href="#">
<i className="h-4 w-4" data-lucide="folder-open"></i>
                  Tài liệu tổng hợp
                </a>
<a className="inline-flex items-center gap-1 rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
                  Ngân hàng Quizizz
                </a>
</div>
</div>
<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">


<article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<header className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-xs font-medium text-sky-400">
                      1
                    </span>
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Buổi 1 – TA Mindset
                      </h2>
<p className="text-xs text-slate-400">
                        Vai trò &amp; tư duy trợ giảng trong lớp ESL trẻ em.
                      </p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[0.625rem] font-medium text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Đang học
                  </span>
</header>
<ul className="mt-3 space-y-1 text-sm text-slate-300">
<li>• Hiểu rõ vai trò TA trong lớp offline trẻ em.</li>
<li>• Xác định thái độ – kỹ năng cần có.</li>
<li>• Nhận diện lỗi phổ biến của TA mới.</li>
</ul>
<div className="mt-4 flex flex-wrap gap-2">
<button className="nav-link inline-flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-50 hover:bg-slate-700" data-page="session-1">
<i className="h-3 w-3" data-lucide="file-text"></i>
                    Chi tiết buổi 1
                  </button>
<a className="inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                    Quiz TA Mindset
                  </a>
</div>
</article>

<article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<header className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-xs font-medium text-sky-400">
                      2
                    </span>
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Buổi 2 – Cambridge YL &amp; Giáo trình
                      </h2>
<p className="text-xs text-slate-400">
                        Nắm khung Starters–Movers–Flyers, F&amp;F, Fun For, Authentic.
                      </p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.625rem] text-slate-300">
                    Chưa học
                  </span>
</header>
<ul className="mt-3 space-y-1 text-sm text-slate-300">
<li>• Hiểu structure skills &amp; task types.</li>
<li>• Biết đọc course outline &amp; timetable.</li>
<li>• Không bị “mù nội dung” mỗi tuần.</li>
</ul>
<div className="mt-4 flex flex-wrap gap-2">
<button className="nav-link inline-flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-50 hover:bg-slate-700" data-page="session-2">
<i className="h-3 w-3" data-lucide="file-text"></i>
                    Chi tiết buổi 2
                  </button>
<a className="inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                    Quiz Cambridge YL
                  </a>
</div>
</article>

<article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<header className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-xs font-medium text-sky-400">
                      3
                    </span>
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Buổi 3 – Quy trình SOP TA
                      </h2>
<p className="text-xs text-slate-400">
                        Chuẩn hóa Before – During – After class.
                      </p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.625rem] text-slate-300">
                    Chưa học
                  </span>
</header>
<ul className="mt-3 space-y-1 text-sm text-slate-300">
<li>• Thuộc quy trình chuẩn mỗi ca dạy.</li>
<li>• Before: setup lớp, homework, LP.</li>
<li>• During / After: hỗ trợ, báo cáo.</li>
</ul>
<div className="mt-4 flex flex-wrap gap-2">
<button className="nav-link inline-flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-50 hover:bg-slate-700" data-page="session-3">
<i className="h-3 w-3" data-lucide="file-text"></i>
                    Chi tiết buổi 3
                  </button>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 hover:border-emerald-400" data-page="checklists">
<i className="h-3 w-3" data-lucide="check-square"></i>
                    Checklist SOP
                  </button>
</div>
</article>

<article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<header className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-xs font-medium text-sky-400">
                      4
                    </span>
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Buổi 4 – Lesson Plan Fundamentals
                      </h2>
<p className="text-xs text-slate-400">
                        Đọc LP, hỗ trợ đúng thời điểm trong PPP.
                      </p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.625rem] text-slate-300">
                    Chưa học
                  </span>
</header>
<ul className="mt-3 space-y-1 text-sm text-slate-300">
<li>• Nắm cấu trúc 01 lesson ESL.</li>
<li>• Checklist hỗ trợ theo từng phase.</li>
<li>• Retention cho trẻ 6–11 tuổi.</li>
</ul>
<div className="mt-4 flex flex-wrap gap-2">
<button className="nav-link inline-flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-50 hover:bg-slate-700" data-page="session-4">
<i className="h-3 w-3" data-lucide="file-text"></i>
                    Chi tiết buổi 4
                  </button>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 hover:border-emerald-400" data-page="checklists">
<i className="h-3 w-3" data-lucide="check-square"></i>
                    Checklist Lesson Plan
                  </button>
</div>
</article>

<article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<header className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-xs font-medium text-sky-400">
                      5
                    </span>
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Buổi 5 – Classroom Management &amp; Microteaching
                      </h2>
<p className="text-xs text-slate-400">
                        Làm chủ lớp 4–6 HS, xử lý tình huống thật.
                      </p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.625rem] text-slate-300">
                    Chưa học
                  </span>
</header>
<ul className="mt-3 space-y-1 text-sm text-slate-300">
<li>• Voice, signals, eye contact, positioning.</li>
<li>• Call-back, attention grabber, rewards.</li>
<li>• Microteaching 2 phút + feedback.</li>
</ul>
<div className="mt-4 flex flex-wrap gap-2">
<button className="nav-link inline-flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-50 hover:bg-slate-700" data-page="session-5">
<i className="h-3 w-3" data-lucide="file-text"></i>
                    Chi tiết buổi 5
                  </button>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" data-page="activities">
<i className="h-3 w-3" data-lucide="sparkles"></i>
                    Microteaching bank
                  </button>
</div>
</article>

<article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<header className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-xs font-medium text-sky-400">
                      6
                    </span>
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Buổi 6 – Assessment, Reporting &amp; Communication
                      </h2>
<p className="text-xs text-slate-400">
                        Đánh giá cơ bản, báo cáo 3 dòng, giao tiếp GV &amp; phụ huynh.
                      </p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.625rem] text-slate-300">
                    Chưa học
                  </span>
</header>
<ul className="mt-3 space-y-1 text-sm text-slate-300">
<li>• Phân loại strong / average / weak.</li>
<li>• Báo cáo nhanh 3 dòng.</li>
<li>• Communication chuẩn trung tâm.</li>
</ul>
<div className="mt-4 flex flex-wrap gap-2">
<button className="nav-link inline-flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-50 hover:bg-slate-700" data-page="session-6">
<i className="h-3 w-3" data-lucide="file-text"></i>
                    Chi tiết buổi 6
                  </button>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 hover:border-emerald-400" data-page="assessment">
<i className="h-3 w-3" data-lucide="file-text"></i>
                    Assessment Helper
                  </button>
</div>
</article>
</div>

<div className="mt-8 grid gap-4 md:grid-cols-3">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                  Công cụ nhanh
                </h3>
<p className="mt-1 text-sm text-slate-300">
                  Truy cập quiz và template hay dùng của TA.
                </p>
<div className="mt-3 flex flex-col gap-2 text-xs">
<a className="inline-flex items-center justify-between rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sky-100 hover:border-sky-400" href="#" target="_blank">
<span className="flex items-center gap-2">
<i className="h-3 w-3" data-lucide="external-link"></i>
                      Quizizz – TA Core Mindset
                    </span>
<span className="text-[0.625rem] text-sky-200/80">10 câu</span>
</a>
<a className="inline-flex items-center justify-between rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sky-100 hover:border-sky-400" href="#" target="_blank">
<span className="flex items-center gap-2">
<i className="h-3 w-3" data-lucide="external-link"></i>
                      Quizizz – Cambridge YL Basics
                    </span>
<span className="text-[0.625rem] text-sky-200/80">12 câu</span>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                  Template quan trọng
                </h3>
<p className="mt-1 text-sm text-slate-300">
                  Dùng chung cho toàn bộ 6 buổi training.
                </p>
<div className="mt-3 space-y-2 text-xs">
<a className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 hover:border-slate-600" href="#">
<span className="flex items-center gap-2">
<i className="h-3 w-3" data-lucide="file-text"></i>
                      Template Lesson Plan (PDF)
                    </span>
<i className="h-3 w-3 text-slate-400" data-lucide="download"></i>
</a>
<a className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 hover:border-slate-600" href="#">
<span className="flex items-center gap-2">
<i className="h-3 w-3" data-lucide="file-text"></i>
                      Mẫu báo cáo 3 dòng
                    </span>
<i className="h-3 w-3 text-slate-400" data-lucide="download"></i>
</a>
<a className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 hover:border-slate-600" href="#">
<span className="flex items-center gap-2">
<i className="h-3 w-3" data-lucide="file-text"></i>
                      Rubric Feedback TA
                    </span>
<i className="h-3 w-3 text-slate-400" data-lucide="download"></i>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                  Tiến độ cá nhân (demo)
                </h3>
<p className="mt-1 text-sm text-slate-300">
                  Đánh dấu hoàn thành sau mỗi buổi để theo dõi.
                </p>
<div className="mt-3 space-y-2 text-xs text-slate-200">
<div className="flex items-center justify-between">
<span>Buổi 1 – TA Mindset</span>
<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.625rem] text-emerald-300">
                      Done
                    </span>
</div>
<div className="flex items-center justify-between">
<span>Buổi 2 – Cambridge YL</span>
<span className="rounded-full bg-slate-800 px-2 py-0.5 text-[0.625rem] text-slate-300">
                      Next
                    </span>
</div>
<div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-1/6 rounded-full bg-emerald-500"></div>
</div>
<p className="mt-1 text-[0.625rem] text-slate-400">
                    1 / 6 buổi đã hoàn thành
                  </p>
</div>
</div>
</div>
</section>


<section className="page hidden" id="page-session-1">
<div className="flex flex-wrap items-center justify-between gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-50">
                  Buổi 1 – Giới thiệu vai trò &amp; mindset của trợ giảng
                </h1>
<p className="mt-1 text-sm text-slate-300">
                  TA Mindset – hiểu rõ vai trò, thái độ, kỹ năng và lỗi thường gặp.
                </p>
</div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                  Quizizz TA Mindset
                </a>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-slate-700/80 bg-slate-900 px-3 py-2 text-xs text-slate-200 hover:border-slate-500" data-page="dashboard">
<i className="h-3 w-3" data-lucide="arrow-left"></i>
                  Về lộ trình
                </button>
</div>
</div>
<div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Mục tiêu buổi học
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Hiểu rõ vai trò của TA trong lớp offline trẻ em.</li>
<li>• Xác định thái độ – kỹ năng cần có.</li>
<li>• Nhận diện các lỗi phổ biến của TA mới.</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Nội dung chính
                  </h2>
<div className="mt-3 space-y-3 text-sm text-slate-200">
<div>
<h3 className="text-xs font-medium text-slate-300">
                        1. Vai trò TA trong lớp ESL YL
                      </h3>
<ul className="mt-1 space-y-1 text-sm text-slate-300">
<li>• Hỗ trợ giáo viên – không thay giáo viên.</li>
<li>• Hỗ trợ học sinh – duy trì engagement.</li>
<li>• Cầu nối giữa giáo viên &amp; phụ huynh.</li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium text-slate-300">
                        2. 5 nguyên tắc vàng của TA
                      </h3>
<p className="mt-1 text-sm text-slate-300">
                        Quan sát – Dự đoán – Chủ động – Linh hoạt – Kết nối.
                      </p>
</div>
<div>
<h3 className="text-xs font-medium text-slate-300">
                        3. Những điều TA không nên làm
                      </h3>
<ul className="mt-1 space-y-1 text-sm text-slate-300">
<li>• Nói tiếng Việt quá nhiều.</li>
<li>• Gây mất tập trung.</li>
<li>• Không theo quy trình lớp học.</li>
</ul>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Mini activity – Phân tích video
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    Xem 2 clip lớp học, ghi chú TA làm đúng/sai theo checklist.
                  </p>
<div className="mt-3 space-y-2 text-xs">
<a className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 hover:border-slate-600" href="#" target="_blank">
<span className="flex items-center gap-2">
<i className="h-3 w-3" data-lucide="play"></i>
                        Clip 1 – TA hỗ trợ hiệu quả
                      </span>
<i className="h-3 w-3 text-slate-400" data-lucide="external-link"></i>
</a>
<a className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 hover:border-slate-600" href="#" target="_blank">
<span className="flex items-center gap-2">
<i className="h-3 w-3" data-lucide="play"></i>
                        Clip 2 – TA mắc lỗi phổ biến
                      </span>
<i className="h-3 w-3 text-slate-400" data-lucide="external-link"></i>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Output mong đợi
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    Sau buổi 1, TA:
                  </p>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Hiểu rõ vai trò và ranh giới công việc.</li>
<li>• Biết 5 nguyên tắc vàng cần áp dụng hằng buổi.</li>
<li>• Tránh được các lỗi “chết người” khi mới vào nghề.</li>
</ul>
<a className="mt-3 inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 hover:border-emerald-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                    Quiz check cuối buổi
                  </a>
</div>
</div>
</div>
</section>

<section className="page hidden" id="page-session-2">
<div className="flex flex-wrap items-center justify-between gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-50">
                  Buổi 2 – Khung Cambridge YL &amp; Giáo trình chính/phụ
                </h1>
<p className="mt-1 text-sm text-slate-300">
                  Starters–Movers–Flyers, F&amp;F, Fun For…, Authentic Tests và course outline.
                </p>
</div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                  Quizizz Cambridge YL
                </a>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-slate-700/80 bg-slate-900 px-3 py-2 text-xs text-slate-200 hover:border-slate-500" data-page="dashboard">
<i className="h-3 w-3" data-lucide="arrow-left"></i>
                  Về lộ trình
                </button>
</div>
</div>
<div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Mục tiêu
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Nắm cấu trúc Starters–Movers–Flyers (skills – task types).</li>
<li>• Hiểu giáo trình đang dùng: Family &amp; Friends / Fun for… / Exam Authentic.</li>
<li>• Biết cách xem course outline và timetable.</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Tổng quan Cambridge YL
                  </h2>
<div className="mt-2 space-y-2 text-sm text-slate-300">
<p>• Skills: Listening / Reading &amp; Writing / Speaking.</p>
<p>• Dạng bài phổ biến: match, listen and tick, colouring, etc.</p>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Giáo trình chính – phụ
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-300">
<li>• Family &amp; Friends: 8 units – phonics – skills.</li>
<li>• Fun for…: review &amp; exam-focus.</li>
<li>• Authentic: exam-style test.</li>
<li>• Tài liệu phụ: Grammar Friends – Home Fun Booklet.</li>
</ul>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Course Outline &amp; Timetable
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    TA cần biết “lớp đang học gì” mỗi tuần:
                  </p>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Unit – Lesson – Skills – Homework.</li>
<li>• Từ vựng &amp; ngữ pháp trọng tâm của tuần.</li>
</ul>
<a className="mt-3 inline-flex items-center gap-1 rounded-md border border-slate-700/80 bg-slate-950 px-3 py-2 text-xs text-slate-200 hover:border-slate-500" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                    Mở Course Outline mẫu
                  </a>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Mini task – Đọc 1 tuần học
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    TA đọc 1 tuần trong outline và xác định:
                  </p>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Mục tiêu bài.</li>
<li>• Từ vựng trọng tâm.</li>
<li>• Grammar chính.</li>
</ul>
<a className="mt-3 inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                    Quiz đọc Course Outline
                  </a>
<button className="nav-link mt-2 inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 hover:border-emerald-400" data-page="resources">
<i className="h-3 w-3" data-lucide="folder-open"></i>
                    Tài liệu Cambridge YL
                  </button>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Output
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    TA biết chính xác lớp đang học gì mỗi tuần, không bị mù nội dung.
                  </p>
</div>
</div>
</div>
</section>

<section className="page hidden" id="page-session-3">
<div className="flex flex-wrap items-center justify-between gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-50">
                  Buổi 3 – Quy trình làm việc TA (SOP TA)
                </h1>
<p className="mt-1 text-sm text-slate-300">
                  Chuẩn hóa quy trình Before – During – After class cho mỗi ca dạy.
                </p>
</div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                  Quizizz SOP TA
                </a>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-slate-700/80 bg-slate-900 px-3 py-2 text-xs text-slate-200 hover:border-slate-500" data-page="dashboard">
<i className="h-3 w-3" data-lucide="arrow-left"></i>
                  Về lộ trình
                </button>
</div>
</div>
<div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Before class
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Chuẩn bị classroom (flashcards, markers, speakers…).</li>
<li>• Check attendance list.</li>
<li>• Nắm lesson plan (warm-up, input, practice, production).</li>
<li>• Review previous homework.</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    During class
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Hỗ trợ GV khi presentation, drilling, activities.</li>
<li>• Classroom management: vị trí đứng, xử lý nói chuyện, kỷ luật.</li>
<li>• Hỗ trợ học sinh yếu.</li>
<li>• Ghi chú hành vi học sinh.</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    After class
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Support giải thích homework.</li>
<li>• Feedback nhanh cho GV.</li>
<li>• Gửi báo cáo học tập nếu có.</li>
</ul>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Mini practice – Before-class setting
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    TA đóng vai, thực hành quy trình chuẩn bị lớp trong 3 phút.
                  </p>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Set up bàn ghế, tài liệu, thiết bị.</li>
<li>• Kiểm tra attendance &amp; homework list.</li>
</ul>
<button className="nav-link mt-3 inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 hover:border-emerald-400" data-page="checklists">
<i className="h-3 w-3" data-lucide="check-square"></i>
                    Mở Checklist SOP TA
                  </button>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Output
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    TA thuộc lòng và áp dụng SOP trong mọi ca dạy, giảm lỗi quên việc.
                  </p>
</div>
</div>
</div>
</section>

<section className="page hidden" id="page-session-4">
<div className="flex flex-wrap items-center justify-between gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-50">
                  Buổi 4 – Lesson Plan Fundamentals
                </h1>
<p className="mt-1 text-sm text-slate-300">
                  Cấu trúc lesson ESL chuẩn, TA đọc LP và hỗ trợ đúng thời điểm.
                </p>
</div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                  Quizizz Lesson Plan
                </a>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-slate-700/80 bg-slate-900 px-3 py-2 text-xs text-slate-200 hover:border-slate-500" data-page="dashboard">
<i className="h-3 w-3" data-lucide="arrow-left"></i>
                  Về lộ trình
                </button>
</div>
</div>
<div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Cấu trúc 1 lesson ESL tiêu chuẩn
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Warm-up.</li>
<li>• Presentation (PPP).</li>
<li>• Practice: Controlled → Guided → Free.</li>
<li>• Production.</li>
<li>• Wrap-up &amp; Homework.</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Checklist hỗ trợ GV theo từng giai đoạn
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Warm-up: hỗ trợ tổ chức game.</li>
<li>• Presentation: đưa flashcard, model câu.</li>
<li>• Controlled practice: kèm HS yếu.</li>
<li>• Free practice: quản lý nhóm.</li>
</ul>
<button className="nav-link mt-3 inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 hover:border-emerald-400" data-page="checklists">
<i className="h-3 w-3" data-lucide="check-square"></i>
                    Checklist Lesson Plan
                  </button>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Retention principles cho trẻ 6–11 tuổi
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• TPR, drilling, short bursts.</li>
<li>• Reward system rõ ràng.</li>
</ul>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Mini practice – Đọc 1 lesson plan thật
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    TA đánh dấu “TA cần làm gì” trong mỗi phần của LP.
                  </p>
<a className="mt-3 inline-flex items-center gap-1 rounded-md border border-slate-700/80 bg-slate-950 px-3 py-2 text-xs text-slate-200 hover:border-slate-500" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                    Lesson Plan mẫu
                  </a>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Output
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    TA nắm được logic bài dạy và biết chính xác thời điểm cần xuất hiện.
                  </p>
</div>
</div>
</div>
</section>

<section className="page hidden" id="page-session-5">
<div className="flex flex-wrap items-center justify-between gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-50">
                  Buổi 5 – Classroom Management &amp; TA Microteaching
                </h1>
<p className="mt-1 text-sm text-slate-300">
                  TA làm chủ lớp 4–6 học sinh, xử lý tình huống thật, microteaching.
                </p>
</div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                  Quizizz Classroom Issues
                </a>
<button className="nav-link inline-flex items-center gap-1 rounded-md border border-slate-700/80 bg-slate-900 px-3 py-2 text-xs text-slate-200 hover:border-slate-500" data-page="dashboard">
<i className="h-3 w-3" data-lucide="arrow-left"></i>
                  Về lộ trình
                </button>
</div>
</div>
<div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Classroom management fundamentals
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Voice – Signals – Eye contact – Positioning.</li>
<li>• 3 rules, reward system.</li>
<li>• Kỹ thuật call-back, attention grabber.</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Handling common issues
                  </h2>
<ul className="mt-2 space-y-1 text-sm text-slate-200">
<li>• Học sinh quá hiếu động.</li>
<li>• Không chịu làm bài.</li>
<li>• Không nói tiếng Anh.</li>
<li>• Tranh cãi trong group work.</li>
</ul>
<a className="mt-3 inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-200 hover:border-sky-400" href="#" target="_blank">
<i className="h-3 w-3" data-lucide="external-link"></i>
                    Quiz tình huống thực tế
                  </a>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Microteaching 1 – 2 phút warm-up
                  </h2>
<p className="mt-1 text-sm text-slate-300">
                    Mỗi TA đứng lớp 2 phút với một warm-up nhỏ, nhận feedback theo</p></div></div></div></section></div></main></div>
    </>
  );
}
