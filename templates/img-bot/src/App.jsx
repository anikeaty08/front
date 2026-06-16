import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-sm tracking-tight font-semibold">RA</span>
</div>
<div className="flex flex-col">
<h1 className="text-xl md:text-2xl tracking-tight font-semibold">منصّة إدارة الحملات والبوت المتكامل</h1>
<p className="text-xs text-neutral-400">فيسبوك · إنستغرام · واتساب</p>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white hover:underline underline-offset-4" href="#platform">المنصة</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#apis">الـAPIs</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#webhooks">الويب هوكس</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#code">كود البداية</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#infra">البنية</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#oss">أدوات مفتوحة</a>
</nav>

<button aria-label="القائمة" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="menuBtn">

<svg className="icon-menu h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>

<svg className="icon-x h-4 w-4 text-neutral-300 hidden" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="bg-amber-500/5 border-t border-b border-amber-500/20">
<div className="mx-auto max-w-7xl px-4 py-2 flex items-center gap-2 text-xs text-amber-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="font-medium">وضع التحضير:</span>
<span className="text-amber-300/90">يمكن تشغيل المنظومة بالكامل محلياً ببيانات وهمية حتى جمع مفاتيح API.</span>
<button aria-label="إخفاء الشريط" className="ml-auto inline-flex items-center justify-center h-6 w-6 rounded-md hover:bg-amber-500/10 ring-1 ring-amber-400/20" id="prepDismiss">
<svg className="h-3.5 w-3.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-b border-white/10 bg-neutral-950/95 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4">
<nav className="grid gap-2 text-sm text-neutral-300">
<a className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-white" href="#platform">المنصة</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-white" href="#apis">الـAPIs</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-white" href="#webhooks">الويب هوكس</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-white" href="#code">كود البداية</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-white" href="#infra">البنية</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-white" href="#oss">أدوات مفتوحة</a>
</nav>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">نظام بوت ذكي لإدارة الرسائل والتعليقات والجدولة وجمع البيانات</h2>
<p className="mt-3 text-neutral-300 leading-7">
              بنية قابلة للتوسّع عبر FastAPI + Celery + Redis + Postgres، متصلة مباشرة بواجهات Meta الرسمية. يشمل الردود التلقائية،
              إدارة التعليقات والرسائل، جدولة منشورات، وتخزين بيانات العملاء والـLeads.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<span className="px-3 py-1 rounded-md bg-white/5 ring-1 ring-white/10 text-xs text-neutral-300">Dark · Tech</span>
<span className="px-3 py-1 rounded-md bg-white/5 ring-1 ring-white/10 text-xs text-neutral-300">Production-ready</span>
<span className="px-3 py-1 rounded-md bg-white/5 ring-1 ring-white/10 text-xs text-neutral-300">Meta Graph</span>
</div>

<div className="mt-6 flex items-center gap-3">
<a className="px-4 py-2 rounded-md bg-indigo-500/90 hover:bg-indigo-400 text-sm font-medium text-white ring-1 ring-white/10" href="#platform">افتح المنصة</a>
<a className="px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-sm font-medium text-neutral-200 ring-1 ring-white/10" href="#code">ابدأ الآن</a>
<a className="px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-sm font-medium text-neutral-200 ring-1 ring-white/10" href="#infra">تشغيل محلي</a>
</div>
</div>
<div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-cover bg-center min-h-[220px] md:min_h-[280px] bg-[url(default)]">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<div className="absolute bottom-4 right-4 left-4 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 transition-colors hover:bg-white/[0.07] hover:ring-white/20">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
</svg>
<span className="text-xs text-neutral-300">ردود تلقائية</span>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 transition-colors hover:bg-white/[0.07] hover:ring-white/20">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4M8 2v4M3 10h18"></path><path d="M12 14v4l2 1"></path>
</svg>
<span className="text-xs text-neutral-300">جدولة منشورات</span>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 transition-colors hover:bg-white/[0.07] hover:ring-white/20">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5"></path><path d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6"></path>
</svg>
<span className="text-xs text-neutral-300">تحليلات وبيانات</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-xl border border-white/10 p-5">
<h3 className="text-xl tracking-tight font-semibold">الهيكلية المقترحة</h3>
<p className="mt-2 text-neutral-400 text-sm">مكونات قابلة للتوسّع، مع عزل للوظائف الحساسة وتوجيه أحداث الويب هوكس.</p>
<div className="mt-5 grid md:grid-cols-4 gap-4">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 transition-colors hover:bg-white/[0.06] hover:ring-white/20">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="18" x="3" y="4"></rect><rect height="8" rx="2" width="18" x="3" y="12"></rect><path d="M7 8h.01M7 16h.01"></path></svg>
<span className="text-sm font-medium text-neutral-200">FastAPI Webhooks</span>
</div>
<p className="mt-2 text-xs text-neutral-400">نقطة دخول موحدة لفيسبوك/إنستغرام وواتساب، مع تحقق HMAC.</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 transition-colors hover:bg-white/[0.06] hover:ring-white/20">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><path d="M6 9v3a6 6 0 0 0 6 6h3"></path></svg>
<span className="text-sm font-medium text-neutral-200">Workers &amp; Queue</span>
</div>
<p className="mt-2 text-xs text-neutral-400">Celery + Redis للمهام المؤجلة: الردود، الجدولة، الاستدعاءات البطيئة.</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 transition-colors hover:bg-white/[0.06] hover:ring-white/20">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5"></path><path d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6"></path></svg>
<span className="text-sm font-medium text-neutral-200">Postgres</span>
</div>
<p className="mt-2 text-xs text-neutral-400">نماذج: جهة اتصال، محادثة، رسالة، تعليق، Lead، منشور، جدول.</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 transition-colors hover:bg-white/[0.06] hover:ring-white/20">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span className="text-sm font-medium text-neutral-200">أمان وسياسات</span>
</div>
<p className="mt-2 text-xs text-neutral-400">حماية التوكينات، تشفير الأسرار، وسياسات المراسلة 24 ساعة في واتساب.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-10 border-t border-white/10" id="platform">
<div className="flex items-center justify-between">
<div>
<h3 className="text-xl tracking-tight font-semibold">المنصة — لوحة الإدارة الموحّدة</h3>
<p className="mt-1 text-neutral-400 text-sm">إدارة الرسائل والتعليقات والمواعيد والـLeads في مكان واحد.</p>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-xs text-neutral-200" id="btnNewTask">
<svg className="h-3.5 w-3.5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
            إجراء سريع
          </button>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-indigo-500/90 hover:bg-indigo-400 ring-1 ring-white/10 text-xs font-medium text-white" href="#infra">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 4.27 4.5 2.67 4.5-2.67"></path><path d="M3 7l9 5 9-5"></path></svg>
            تشغيل سريع
          </a>
</div>
</div>

<div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
<span className="text-xs text-neutral-300">الرسائل اليوم</span>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">38</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v4H3z"></path><path d="M3 13h18v8H3z"></path><path d="M7 13v8"></path></svg>
<span className="text-xs text-neutral-300">تعليقات مفتوحة</span>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">14</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="text-xs text-neutral-300">مواعيد مجدولة</span>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">7</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01M3 12h.01M3 18h.01"></path></svg>
<span className="text-xs text-neutral-300">Leads جديدة</span>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">9</div>
</div>
</div>

<div className="mt-6 rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex flex-col md:flex-row md:items-center gap-3">

<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">القناة:</span>
<div className="flex items-center gap-1">
<button className="platform-channel px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 ring-1 ring-white/10 text-xs" data-channel="all">الكل</button>
<button className="platform-channel px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-xs text-neutral-300" data-channel="fb">Facebook</button>
<button className="platform-channel px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-xs text-neutral-300" data-channel="ig">Instagram</button>
<button className="platform-channel px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-xs text-neutral-300" data-channel="wa">WhatsApp</button>
</div>
</div>

<div className="md:ms-auto flex items-center gap-2 min-w-[220px] md:min-w-[280px]">
<div className="relative flex-1">
<svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full rounded-md bg-neutral-900/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 px-8 py-1.5 text-xs placeholder:text-neutral-500" id="platformSearch" placeholder="ابحث بالاسم أو النص..." type="text"/>
</div>
<button className="px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-[11px] text-neutral-300" id="platformClear">مسح</button>
</div>
</div>

<div className="mt-4 flex items-center gap-2 text-xs">
<button className="platform-tab-btn px-3 py-1.5 rounded-md bg-white/10 ring-1 ring-white/10 text-neutral-100" data-platform-tab="inbox">الكل</button>
<button className="platform-tab-btn px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-neutral-300" data-platform-tab="messages">الرسائل</button>
<button className="platform-tab-btn px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-neutral-300" data-platform-tab="comments">التعليقات</button>
<button className="platform-tab-btn px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-neutral-300" data-platform-tab="leads">Leads</button>
<button className="platform-tab-btn px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-neutral-300" data-platform-tab="schedule">الجدولة</button>
</div>
</div>

<div className="mt-4 grid md:grid-cols-5 gap-4">

<div className="md:col-span-3 rounded-lg bg-white/5 ring-1 ring-white/10 overflow-hidden">

<div className="platform-tab" id="tab-inbox">
<div className="divide-y divide-white/10" id="inboxList">

<button className="w-full text-right px-4 py-3 hover:bg-white/5 transition-colors" data-channel="wa" data-item="" data-name="محمد علي" data-snippet="السلام عليكم، حاب أعرف أسعار الشقق في مشروع النخيل." data-title="واتساب — استفسار الأسعار">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded bg-emerald-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-200 tracking-tight">محمد علي</span>
</div>
<span className="text-[11px] text-neutral-400">قبل 5 د</span>
</div>
<div className="mt-1 text-xs text-neutral-300">واتساب — استفسار الأسعار · السلام عليكم، حاب أعرف أسعار الشقق في مشروع النخيل.</div>
</button>
<button className="w-full text-right px-4 py-3 hover:bg-white/5 transition-colors" data-channel="fb" data-item="" data-name="Sara FB" data-snippet="هل متاح تقسيط على 36 شهر؟" data-title="فيسبوك — تعليق جديد">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded bg-blue-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V4.6A2.6 2.6 0 0 1 6.6 2H20z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-200 tracking-tight">Sara FB</span>
</div>
<span className="text-[11px] text-neutral-400">قبل 12 د</span>
</div>
<div className="mt-1 text-xs text-neutral-300">فيسبوك — تعليق جديد · هل متاح تقسيط على 36 شهر؟</div>
</button>
<button className="w-full text-right px-4 py-3 hover:bg-white/5 transition-colors" data-channel="ig" data-item="" data-name="ahmad.ig" data-snippet="مرحبا، هل في شقق 3 غرف متاحة للتسليم الفوري؟" data-title="إنستغرام — رسالة واردة">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded bg-pink-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-pink-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-200 tracking-tight">ahmad.ig</span>
</div>
<span className="text-[11px] text-neutral-400">قبل 25 د</span>
</div>
<div className="mt-1 text-xs text-neutral-300">إنستغرام — رسالة واردة · مرحبا، هل في شقق 3 غرف متاحة للتسليم الفوري؟</div>
</button>
<button className="w-full text-right px-4 py-3 hover:bg-white/5 transition-colors" data-channel="fb" data-item="" data-name="Omar" data-snippet="أرغب بحجز موعد زيارة يوم الخميس." data-title="فيسبوك — رسالة ماسنجر">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded bg-blue-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-200 tracking-tight">Omar</span>
</div>
<span className="text-[11px] text-neutral-400">قبل 40 د</span>
</div>
<div className="mt-1 text-xs text-neutral-300">فيسبوك — رسالة ماسنجر · أرغب بحجز موعد زيارة يوم الخميس.</div>
</button>
</div>
</div>

<div className="platform-tab hidden" id="tab-messages">
<div className="divide-y divide-white/10">
<div className="px-4 py-3 text-xs text-neutral-300">تم تصفية الرسائل المباشرة فقط (FB/IG/WA).</div>

<button className="w-full text-right px-4 py-3 hover:bg-white/5 transition-colors" data-channel="wa" data-item="" data-name="Rana" data-snippet="أكّد الموعد يوم الأحد الساعة 4 مساءً." data-title="واتساب — متابعة الموعد">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded bg-emerald-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-200 tracking-tight">Rana</span>
</div>
<span className="text-[11px] text-neutral-400">اليوم</span>
</div>
<div className="mt-1 text-xs text-neutral-300">واتساب — متابعة الموعد · أكّد الموعد يوم الأحد الساعة 4 مساءً.</div>
</button>
</div>
</div>

<div className="platform-tab hidden" id="tab-comments">
<div className="divide-y divide-white/10">
<div className="px-4 py-3 text-xs text-neutral-300">تعليقات المنشورات المفتوحة.</div>
<button className="w-full text-right px-4 py-3 hover:bg-white/5 transition-colors" data-channel="fb" data-item="" data-name="Mona" data-snippet="موقع المشروع وين بالضبط؟" data-title="تعليق منشور — مشروع البحر">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded bg-blue-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V4.6A2.6 2.6 0 0 1 6.6 2H20z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-200 tracking-tight">Mona</span>
</div>
<span className="text-[11px] text-neutral-400">أمس</span>
</div>
<div className="mt-1 text-xs text-neutral-300">تعليق منشور — مشروع البحر · موقع المشروع وين بالضبط؟</div>
</button>
</div>
</div>

<div className="platform-tab hidden" id="tab-leads">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white/5 text-neutral-300">
<tr>
<th className="px-4 py-2 text-right font-medium">الاسم</th>
<th className="px-4 py-2 text-right font-medium">الهاتف</th>
<th className="px-4 py-2 text-right font-medium">الحملة</th>
<th className="px-4 py-2 text-right font-medium">الحالة</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/5">
<td className="px-4 py-2">Khaled</td>
<td className="px-4 py-2">+96650000000</td>
<td className="px-4 py-2">LeadGen · الساحل</td>
<td className="px-4 py-2">
<span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 ring-1 ring-white/10 text-xs">جديد</span>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-2">Noura</td>
<td className="px-4 py-2">+97150000000</td>
<td className="px-4 py-2">LeadGen · العيون</td>
<td className="px-4 py-2">
<span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 ring-1 ring-white/10 text-xs">متواصل</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="platform-tab hidden" id="tab-schedule">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white/5 text-neutral-300">
<tr>
<th className="px-4 py-2 text-right font-medium">المحتوى</th>
<th className="px-4 py-2 text-right font-medium">القناة</th>
<th className="px-4 py-2 text-right font-medium">التاريخ</th>
<th className="px-4 py-2 text-right font-medium">الحالة</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/5">
<td className="px-4 py-2">منشور — عروض الصيف</td>
<td className="px-4 py-2">Facebook</td>
<td className="px-4 py-2">2025-06-21 14:00</td>
<td className="px-4 py-2">
<span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 ring-1 ring-white/10 text-xs">Scheduled</span>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-2">Reel — جولة بالشقة</td>
<td className="px-4 py-2">Instagram</td>
<td className="px-4 py-2">2025-06-22 09:30</td>
<td className="px-4 py-2">
<span className="px-2 py-0.5 rounded bg-neutral-500/10 text-neutral-300 ring-1 ring-white/10 text-xs">Draft</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
<h4 className="font-semibold tracking-tight">التفاصيل</h4>
</div>
<div className="mt-3 text-sm text-neutral-400" id="detailEmpty">اختر عنصراً من القائمة لمعاينة التفاصيل والرد السريع.</div>
<div className="hidden" id="detailPane">
<div className="mt-4 rounded-md bg-neutral-900/70 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight text-neutral-100" id="detailTitle">—</div>
<div className="text-xs text-neutral-400 mt-0.5" id="detailSubtitle">—</div>
</div>
<span className="px-2 py-0.5 rounded text-xs ring-1 ring-white/10 bg-white/5 text-neutral-300" id="detailChannel">—</span>
</div>
</div>
<div className="mt-4 space-y-2">
<button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-indigo-500/90 hover:bg-indigo-400 text-xs font-medium text-white ring-1 ring-white/10" id="quickReply">
<svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                رد سريع
              </button>
<div className="grid grid-cols-2 gap-2">
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-xs text-neutral-200 ring-1 ring-white/10" id="markTask">
<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                  تحديد كمهام
                </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-xs text-neutral-200 ring-1 ring-white/10" id="scheduleFollow">
<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                  جدولة متابعة
                </button>
</div>
<div className="mt-3">
<label className="text-xs text-neutral-400">ملاحظة داخلية</label>
<textarea className="mt-1 w-full rounded-md bg-neutral-900/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-xs placeholder:text-neutral-500" id="internalNote" placeholder="اكتب ملاحظة للفريق..." rows="3"></textarea>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-10 border-t border-white/10" id="infra">
<h3 className="text-xl tracking-tight font-semibold">البنية التشغيلية الجاهزة حتى جمع المفاتيح</h3>
<p className="mt-2 text-neutral-400 text-sm">تشغيل المنظومة محلياً أو على خادم واحد مع أوضاع وهمية دون الحاجة لأي مفاتيح إلى أن تصبح متاحة.</p>

<div className="mt-6 rounded-lg border border-white/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 bg-white/5">
<div className="flex items-center gap-2 text-xs text-neutral-300">

<svg className="h-4 w-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4.27 12 6.94l4.5-2.67"></path><path d="M3 7l9 5 9-5"></path><path d="M3 17l9 5 9-5"></path><path d="M3 12l9 5 9-5"></path>
</svg>
            docker-compose.yml
          </div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-neutral-400">API + Worker + Redis + Postgres</span>
<button aria-label="نسخ" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-neutral-300 hover:text-white hover:bg-white/10 ring-1 ring-white/10" data-copy-target="#code-docker">
<svg className="icon-copy h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
<svg className="icon-check h-3.5 w-3.5 hidden text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
              نسخ
            </button>
</div>
</div>
<pre className="bg-neutral-900 p-4 overflow-x-auto text-[12px] leading-6 text-neutral-200" id="code-docker"><code>version: "3.9"
services:
  api:
    image: python:3.11-slim
    working_dir: /app
    command: bash -lc "pip install -r requirements.txt &amp;&amp; uvicorn main:app --host 0.0.0.0 --port 8000"
    ports: ["8000:8000"]
    volumes:
      - ./:/app
    env_file: [.env]
    environment:
      - MOCK_MODE=true
    depends_on: [db, redis]

  worker:
    image: python:3.11-slim
    working_dir: /app
    command: bash -lc "pip install -r requirements.txt &amp;&amp; celery -A tasks.worker worker --loglevel=INFO"
    volumes:
      - ./:/app
    env_file: [.env]
    environment:
      - MOCK_MODE=true
    depends_on: [redis, db]

  scheduler:
    image: python:3.11-slim
    working_dir: /app
    command: bash -lc "pip install -r requirements.txt &amp;&amp; python scheduler.py"
    volumes:
      - ./:/app
    env_file: [.env]
    environment:
      - MOCK_MODE=true
    depends_on: [api]

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app
    ports: ["5432:5432"]
    volumes:
      - dbdata:/var/lib/postgresql/data

volumes:
  dbdata: {}</code></pre>
</div>

<div className="mt-4 rounded-lg border border-white/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 bg-white/5">
<div className="flex items-center gap-2 text-xs text-neutral-300">

<svg className="h-4 w-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path>
</svg>
            .env.example
          </div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-neutral-400">انسخها إلى .env وعدّل عند توفر المفاتيح</span>
<button aria-label="نسخ" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-neutral-300 hover:text-white hover:bg-white/10 ring-1 ring-white/10" data-copy-target="#code-env-example">
<svg className="icon-copy h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
<svg className="icon-check h-3.5 w-3.5 hidden text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
              نسخ
            </button>
</div>
</div>
<pre className="bg-neutral-900 p-4 overflow-x-auto text-[12px] leading-6 text-neutral-200" id="code-env-example"><code># Prep / Mock
MOCK_MODE=true

# Meta App (اتركها فارغة حتى يتوفر لديك)
FB_APP_ID=
FB_APP_SECRET=
FB_PAGE_ID=
FB_PAGE_TOKEN=
IG_USER_ID=

# WhatsApp Cloud
WABA_PHONE_NUMBER_ID=
WABA_TOKEN=

# Webhooks
VERIFY_TOKEN=dev-verify-token

# Database / Queue
DATABASE_URL=postgresql+psycopg2://app:app@db:5432/app
REDIS_URL=redis://redis:6379/0

# CORS
ALLOW_ORIGINS=*</code></pre>
</div>

<div className="mt-4 rounded-lg border border-white/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 bg-white/5">
<div className="flex items-center gap-2 text-xs text-neutral-300">

<svg className="h-4 w-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m4 17 6-6-6-6"></path><path d="M12 19h8"></path>
</svg>
            Makefile
          </div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-neutral-400">أوامر تشغيل سريعة</span>
<button aria-label="نسخ" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-neutral-300 hover:text-white hover:bg-white/10 ring-1 ring-white/10" data-copy-target="#code-makefile">
<svg className="icon-copy h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
<svg className="icon-check h-3.5 w-3.5 hidden text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
              نسخ
            </button>
</div>
</div>
<pre className="bg-neutral-900 p-4 overflow-x-auto text-[12px] leading-6 text-neutral-200" id="code-makefile"><code>.PHONY: up down logs restart
up:     ## تشغيل كل الخدمات
\tdocker compose up -d --build
down:   ## إيقاف وحذف
\tdocker compose down -v
logs:   ## عرض السجلات
\tdocker compose logs -f --tail=200
restart: ## إعادة تشغيل
\tdocker compose down; docker compose up -d
health: ## فحص صحة API
\tcurl -fsS http://localhost:8000/health || true</code></pre>
</div>

<div className="mt-4 rounded-lg border border-white/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 bg-white/5">
<div className="flex items-center gap-2 text-xs text-neutral-300">

<svg className="h-4 w-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              &lt;

You have reached your daily limit of 5 prompts and have no credits available. Purchase credits to continue or upgrade to Pro (120 prompts/month).</svg></div></div></div></section>
    </>
  );
}
