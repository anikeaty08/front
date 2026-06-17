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
      
lucide.createIcons({attrs:{stroke:'currentColor','stroke-width':1.5}});

const langBtns=document.querySelectorAll('[data-lang-select]');
function updateLang(active){
  document.body.setAttribute('data-lang',active);
  langBtns.forEach(b=>{b.classList.toggle('lang-toggle-active',b.dataset.langSelect===active)});
}
langBtns.forEach(btn=>btn.addEventListener('click',()=>updateLang(btn.dataset.langSelect)));
updateLang('en');

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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/twistcopy-CPActtgUfoQoOToZfH4Pt18Q" width="100%"></iframe></div>

<div className="fixed top-4 right-4 z-50 flex gap-2">
<button className="lang-btn text-sm border rounded-md pt-1 pr-4 pb-1 pl-4 lang-toggle-active border-slate-300" data-lang-select="en">EN</button>
<button className="lang-btn text-sm border rounded-md pt-1 pr-4 pb-1 pl-4 border-slate-300" data-lang-select="jp">日本語</button>
</div>

<section className="relative h-[80vh] flex items-center justify-center">
<div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div><img alt="Signature painting" className="absolute inset-0 w-full h-full object-center object-cover" src="https://aura.build/editor/default"/>

<div className="relative z-10 text-center px-6 space-y-6 max-w-3xl mx-auto">
<h1 className="section-title text-4xl md:text-6xl font-semibold tracking-tight">
      Ryo Shiotani <span className="mx-1 text-slate-400">/</span> 塩谷亮
    </h1>
<h2 className="section-title text-2xl md:text-3xl font-medium tracking-tight">
<span className="lang-en">“Toki wo Egaku Realism”</span>
<span className="lang-jp">刻を描くリアリズム</span>
</h2>
<p className="md:text-xl lang-en text-lg text-slate-700">
      A solo exhibition contemplating time, silence, and presence through realism
    </p>
<p className="text-lg md:text-xl lang-jp text-slate-700">
      時間・静けさ・存在を写実を通じて問いかける個展
    </p>
<p className="text-slate-600">
<span className="lang-en">Jan 12– Feb 15, 2026 • Sato Museum of Art</span>
<span className="lang-jp">2026 年1 月8 日（木）～ 2 月15 日（日） • 佐藤美術館（東京）</span>
</p>
<div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-8 justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-md transition bg-slate-900 text-white hover:bg-slate-800" href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=Ryo+Shiotani+%2F+%E5%A1%A9%E8%B0%B7%E4%BA%AE+%E2%80%93+Koku+wo+Egaku+Realism&amp;dates=20260110/20260122&amp;details=Solo+exhibition+featuring+oil+paintings+by+Ryo+Shiotani.+A+meditation+on+silence+and+time+through+realism.&amp;location=Spiral+Garden%2C+Tokyo" target="_blank">
<span className="lang-en">Add to Google Calendar</span>
<span className="lang-jp">Googleカレンダーに追加</span>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 border rounded-md transition border-slate-300 hover:bg-slate-100" href="#visit">
<span className="lang-en">Plan Your Visit</span>
<span className="lang-jp">来場計画</span>
</a>
</div>
</div>
</section>
<div className="border-t border-slate-200"></div>

<section className="max-w-3xl mx-auto px-6 py-16">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-4">
<span className="lang-en">Exhibition Overview</span>
<span className="lang-jp text-slate-500">展覧会ステートメント</span>
</h2>
<p className="leading-relaxed lang-en text-slate-700">
    This exhibition invites viewers into moments suspended in time — portraits, still lifes, and intimate interiors that
    evoke quietude and depth. Shiotani’s realism doesn’t aim to replicate, but to awaken presence. Each brushstroke is a
    meditation on absence, memory, and the subtle flow of time.
  </p>
<p className="leading-relaxed lang-jp text-slate-700">
    本展は、時間が静止したような瞬間へと鑑賞者を誘います。肖像画、静物画、親密な室内風景を通じて、静けさと深みを呼び覚ます塩谷の写実は、再現を目的とせず、存在感を浮かび上がらせます。一筆一筆が不在や記憶、微細な時間の流れへの瞑想です。
  </p>
</section>

<section className="max-w-3xl mx-auto px-6 py-16">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-4">
<span className="lang-en">Chapter 1: The Presence of Being</span>
<span className="lang-jp text-slate-500">第1章：存在の気配</span>
</h2>
<p className="leading-relaxed lang-en text-slate-700">
    Exploring subtle gestures and fleeting expressions, these works reveal the intangible aura that surrounds every
    subject — a quiet testimony to existence itself.
  </p>
<p className="leading-relaxed lang-jp text-slate-700">
    かすかな身振りや一瞬の表情を描き、被写体を包む不可視のオーラを浮き彫りにします。静かに存在そのものを証言する章です。
  </p>
</section>

<section className="max-w-3xl mx-auto px-6 py-16">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-4">
<span className="lang-en">Chapter 2: Time in Silence</span>
<span className="lang-jp text-slate-500">第2章：沈黙の時間</span>
</h2>
<p className="leading-relaxed lang-en text-slate-700">
    Stillness becomes a vessel for time. Through muted palettes and restrained compositions, Shiotani captures moments
    where sound recedes and the passing of seconds can almost be felt.
  </p>
<p className="leading-relaxed lang-jp text-slate-700">
    静寂が時間を受け止める器となり、抑制された色彩と構図によって音が遠のき、秒針の進みさえ感じられる瞬間を捉えます。
  </p>
</section>

<section className="max-w-3xl mx-auto px-6 py-16">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-4">
<span className="lang-en">Chapter 3: On Seeing</span>
<span className="lang-jp text-slate-500">第3章：見るということ</span>
</h2>
<p className="leading-relaxed lang-en text-slate-700">
    What does it mean to truly see? These pieces investigate perception itself, inviting viewers to slow down, linger,
    and let the image reveal itself layer by layer.
  </p>
<p className="leading-relaxed lang-jp text-slate-700">
    「見る」とは何か。知覚そのものを探求する作品群は、鑑賞者に立ち止まり、ゆっくりと層を開くイメージに身を委ねることを促します。
  </p>
</section>

<section className="max-w-3xl mx-auto px-6 py-16">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-4">
<span className="lang-en">Chapter 4: On Painting</span>
<span className="lang-jp text-slate-500">第4章：描くということ</span>
</h2>
<p className="leading-relaxed lang-en text-slate-700">
    A meditation on the act of painting, this chapter foregrounds texture, brushwork, and the tactile dialogue between
    painter and canvas — a record of gestures, breaths, and intent.
  </p>
<p className="leading-relaxed lang-jp text-slate-700">
    絵を描く行為そのものへの瞑想。質感や筆致、画家とキャンバスの触覚的対話を前面に出し、所作や呼吸、意図の記録として提示します。
  </p>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-8">
<span className="lang-en">Featured Works</span>
<span className="lang-jp">主要作品</span>
</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

</div>
</section>

<section className="py-16 bg-slate-50/70">
<div className="max-w-3xl mx-auto px-6">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-4">
<span className="lang-en">About the Artist</span>
<span className="lang-jp text-slate-500">プロフィール</span>
</h2>
<p className="leading-relaxed lang-en text-slate-700">
      Ryo Shiotani / 塩谷亮 (b.1975) is a Japanese realist painter whose emotionally evocative style bridges classical
      technique with contemporary silence. His work has been featured in international museums and sold-out exhibitions
      across Japan and abroad. <a className="underline text-slate-900" href="#">View full profile</a>
</p>
<p className="leading-relaxed lang-jp text-slate-700">
      塩谷亮（1975年生）は、日本の写実画家。伝統的技法と現代的な静寂を融合させた情感豊かな作風で知られ、国内外の美術館や個展で高い評価を受ける。<a className="underline text-slate-900" href="#">プロフィールを見る</a>
</p>
</div>
</section>

<section className="py-16 bg-slate-50/70" id="visit">
<div className="max-w-4xl mx-auto px-6 space-y-10">
<h2 className="section-title text-2xl font-semibold tracking-tight">
<span className="lang-en">Visit Information</span>
<span className="lang-jp text-slate-500">アクセス・日時</span>
</h2>
<div className="grid md:grid-cols-2 gap-10">

<div>
<h3 className="section-title text-xl font-medium tracking-tight mb-3">
<span className="lang-en">Exhibition Period</span>
<span className="lang-jp">会期</span>
</h3>
<p className="text-slate-700">
<span className="lang-en">January 10–21, 202611:00 – 20:00 (free entry)</span>
<span className="lang-jp">2026年1月10日–21日11:00–20:00（入場無料）</span>
</p>
</div>

<div className="">
<h3 className="section-title text-xl font-medium tracking-tight mb-3">
<span className="lang-en">Venue</span>
<span className="lang-jp">会場</span>
</h3>
<p className="text-slate-700">
<span className="lang-en">Spiral Garden (Spiral 1F)5-6-23 Minami-Aoyama, Minato-ku, Tokyo</span>
<span className="lang-jp">スパイラルガーデン（Spiral 1F）東京都港区南青山5-6-23</span>
</p>
<h4 className="mt-4 font-medium">
<span className="lang-en">Access</span>
<span className="lang-jp">アクセス</span>
</h4>
<p className="text-slate-700">
<span className="lang-en">3 mins from Omotesando Station (Exit B1)</span>
<span className="lang-jp">表参道駅B1出口より徒歩3分</span>
<a className="underline text-slate-900" href="https://maps.app.goo.gl/xyz" target="_blank">
<span className="lang-en">View on Google Maps</span>
<span className="lang-jp">Googleマップで見る</span>
</a>
</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border rounded-md transition border-slate-300 hover:bg-slate-100" href="https://maps.app.goo.gl/xyz" target="_blank">
<span className="lang-en">Get Directions</span>
<span className="lang-jp">ルート案内</span>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-md transition bg-slate-900 text-white hover:bg-slate-800" href="mailto:press@example.com">
<span className="lang-en">Contact Us</span>
<span className="lang-jp">お問い合わせ</span>
</a>
</div>
</div>
</section>

<section className="py-16 bg-slate-50/70" id="contact">
<div className="max-w-4xl mx-auto px-6 space-y-6">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-4">
<span className="lang-en">Contact</span>
<span className="lang-jp text-slate-500">お問合せ</span>
</h2>
<p className="leading-relaxed lang-en text-slate-700">
      For press or exhibition inquiries, please contact the Sato Museum of Art:<br/><br/>
      Sato Museum of Art<br/>
      31-10 Daikyo-cho, Shinjuku-ku, Tokyo 160-0015<br/>
      Tel: +81-3-3358-6021<br/>
      Email: <a className="underline text-slate-900" href="mailto:Sato-museum@nifty.com">Sato-museum@nifty.com</a><br/>
      Website: <a className="underline text-slate-900" href="http://sato-museum.la.coocan.jp/" target="_blank">sato-museum.la.coocan.jp</a>
</p>
<p className="leading-relaxed lang-jp text-slate-700">
      取材・展覧会に関するお問い合わせは下記までご連絡ください。<br/><br/>
      佐藤美術館<br/>
      〒160-0015 東京都新宿区大京町31-10<br/>
      電話: 03-3358-6021<br/>
      メール: <a className="underline text-slate-900" href="mailto:Sato-museum@nifty.com">Sato-museum@nifty.com</a><br/>
      ウェブサイト: <a className="underline text-slate-900" href="http://sato-museum.la.coocan.jp/" target="_blank">sato-museum.la.coocan.jp</a>
</p>
</div>
</section>

<section className="py-16 bg-slate-50/70">
<div className="max-w-4xl mx-auto px-6">
<h2 className="section-title text-2xl font-semibold tracking-tight mb-6">
<span className="lang-en">Social Sharing</span>
<span className="lang-jp">SNS共有</span>
</h2>
<div className="flex gap-3">
<button aria-label="Share on X" className="p-3 border rounded-md transition border-slate-300 hover:bg-slate-100">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
</div>
</div>
</section>

<footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-200">
<span className="lang-en">January 10–21, 2026 • Spiral Garden, Tokyo • info@example.com</span>
<span className="lang-jp">2026年1月10日–21日 • スパイラルガーデン（東京）• info@example.com</span><br/>
  © 2024 Ryo Shiotani / 塩谷亮
</footer>


    </>
  );
}
