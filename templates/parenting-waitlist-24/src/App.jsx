import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



const target = new Date('2026-05-15T20:00:00');
function pad(n){return String(n).padStart(2,'0');}
function tick(){
  const d=target-new Date();
  if(d<=0){['days','hours','mins','secs'].forEach(id=>document.getElementById(id).textContent='00');return;}
  document.getElementById('days').textContent=pad(Math.floor(d/86400000));
  document.getElementById('hours').textContent=pad(Math.floor((d%86400000)/3600000));
  document.getElementById('mins').textContent=pad(Math.floor((d%3600000)/60000));
  document.getElementById('secs').textContent=pad(Math.floor((d%60000)/1000));
}
tick();setInterval(tick,1000);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="">
<div className="wrap">
<div className="logo-wrap">
</div>
<div className="badge"><span className="dot"></span> ويبينار مجاني مباشر · مقاعد محدودة</div>
</div>
</header>
<main className="">
<div className="wrap">

<div className="hero">
<h1 className="">انسخ نظامي لبناء<br/><span className="hl">براند مربح من الصفر</span><br/>خلال 90 يوماً</h1>
<p className="">النظام الذي استخدمته بالضبط — والذي يمكنك استنساخه اليوم للبدء في جني الأرباح، حتى لو بدون أي خبرة سابقة</p>
<div className="date-pill">
<span>📅</span>
<span>15 مايو 2026 · الساعة 8 مساءً بتوقيت السعودية</span>
</div>
</div>

<div className="form-card" id="booking">
<h2>احجز مقعدك المجاني الآن</h2>
<p className="sub">المقاعد محدودة — سجّل قبل امتلاء الأماكن</p>
<div className="form-row">
<input placeholder="الاسم الكامل" type="text"/>
</div>
<div className="form-row">
<input placeholder="البريد الإلكتروني" type="email"/>
</div>
<div className="form-row">
<input placeholder="رقم الواتساب (اختياري)" type="tel"/>
</div>
<button className="cta-btn">🔒 احجز مقعدي المجاني ←</button>
<p className="privacy-note">مجاني 100% · لا بريد مزعج · يمكنك إلغاء الاشتراك في أي وقت</p>
</div>

<div className="countdown-section">
<p className="countdown-label">ينتهي التسجيل خلال</p>
<div className="countdown-grid">
<div className="count-block">
<span className="count-num" id="days">14</span>
<span className="count-lbl">أيام</span>
</div>
<div className="count-sep">:</div>
<div className="count-block">
<span className="count-num" id="hours">23</span>
<span className="count-lbl">ساعات</span>
</div>
<div className="count-sep">:</div>
<div className="count-block">
<span className="count-num" id="mins">43</span>
<span className="count-lbl">دقائق</span>
</div>
<div className="count-sep">:</div>
<div className="count-block">
<span className="count-num" id="secs">44</span>
<span className="count-lbl">ثواني</span>
</div>
</div>
</div>

<div className="learn-section">
<div className="section-divider">
<span></span>
<h3>ماذا ستتعلم في الويبينار</h3>
<span></span>
</div>
<div className="learn-grid">
<div className="learn-item">
<div className="learn-num">01</div>
<h5>معادلة اختيار المنتج</h5>
<p className="">المعايير الدقيقة التي تفصل بين المنتجات الرابحة والخاسرة — قبل أن تنفق دولاراً واحداً</p>
</div>
<div className="learn-item">
<div className="learn-num">02</div>
<h5>بناء الهوية البصرية</h5>
<p>كيف تبني هوية براند احترافية تجعل عملاءك يثقون بك من اللحظة الأولى</p>
</div>
<div className="learn-item">
<div className="learn-num">03</div>
<h5>متجر يحقق المبيعات</h5>
<p>خطوة بخطوة لبناء متجر مبسط يحوّل الزوار العاديين إلى عملاء يدفعون</p>
</div>
</div>
</div>

<div className="fit-section">
<div className="section-divider">
<span></span>
<h3>هل هذا الويبينار مناسب لك؟</h3>
<span></span>
</div>
<div className="fit-grid">
<div className="fit-card yes">
<div className="fit-card-head">
<div className="fit-icon yes">✅</div>
<h4>هذا لك إذا كنت…</h4>
</div>
<ul className="fit-list">
<li><span className="chk" style={{color: '#22C55E'}}>✓</span> تريد بناء براند مربح لكن لا تعرف من أين تبدأ</li>
<li><span className="chk" style={{color: '#22C55E'}}>✓</span> مبتدئ ولا تملك خبرة في التجارة الإلكترونية</li>
<li><span className="chk" style={{color: '#22C55E'}}>✓</span> تريد نظاماً عملياً قابلاً للتطبيق فوراً</li>
<li><span className="chk" style={{color: '#22C55E'}}>✓</span> مستعد للعمل والتطبيق خطوة بخطوة</li>
<li><span className="chk" style={{color: '#22C55E'}}>✓</span> تحلم بتحقيق دخل حقيقي من الإنترنت</li>
</ul>
</div>
<div className="fit-card no">
<div className="fit-card-head">
<div className="fit-icon no">🚫</div>
<h4>هذا ليس لك إذا كنت…</h4>
</div>
<ul className="fit-list">
<li><span className="chk" style={{color: '#F87171'}}>✗</span> تبحث عن ثروة سريعة بدون أي جهد</li>
<li><span className="chk" style={{color: '#F87171'}}>✗</span> غير مستعد للتغيير أو تعلم أشياء جديدة</li>
<li><span className="chk" style={{color: '#F87171'}}>✗</span> تريد نتائج بدون أي استثمار في الوقت</li>
<li><span className="chk" style={{color: '#F87171'}}>✗</span> لديك براند ناجح بالفعل ولا تحتاج مساعدة</li>
<li><span className="chk" style={{color: '#F87171'}}>✗</span> تريد مجرد نصائح نظرية بدون خطة عملية</li>
</ul>
</div>
</div>
</div>

<div className="bottom-cta">
<h2>جاهز تبني براند أحلامك؟</h2>
<p>انضم لمئات المبتدئين الذين حجزوا مقعدهم بالفعل</p>
<button className="cta-btn" onclick="document.getElementById('booking').scrollIntoView({behavior:'smooth'})">
        🔒 احجز مقعدي المجاني الآن ←
      </button>
</div>
</div>
</main>
<footer>
  © 2026 Dream To Brand · جميع الحقوق محفوظة · هذا الويبينار مجاني 100%
</footer>


    </>
  );
}
