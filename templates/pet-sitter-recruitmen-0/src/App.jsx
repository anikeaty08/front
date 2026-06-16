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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-[#FFFDF9]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:cat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-semibold tracking-tighter text-orange-600">
            orusunotomo
          </span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#benefits">
            働くメリット
          </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#tasks">
            業務内容
          </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#flow">
            採用フロー
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm shadow-orange-500/20 active:scale-95" href="https://forms.gle/LgvVMsXkffo1ZVLv9" target="_blank">
            先行登録する
          </a>
</div>
</div>
</header>
<main className="">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<img alt="" className="absolute inset-0 w-full h-full object-cover object-right opacity-25" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4feba64f-83fb-447a-8956-3418f9beac5f_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FFFDF9] to-transparent"></div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<span className="block text-lg md:text-xl text-orange-600 font-semibold mb-5 tracking-tight">
            動物への愛情を、誰かの安心に。
          </span>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-800 max-w-4xl" style="line-height: 1.6
;">
            世田谷・目黒・渋谷・港・品川で、
            <br className="hidden md:block"/>
            ペットシッターを募集しています
          </h1>
<p className="mt-6 text-base md:text-lg text-stone-600 max-w-2xl">
            資格をお持ちなら、ベテランの方も、これから実績を作りたい方も歓迎です。Orusunotomoの立ち上げ期に参加いただける登録済みシッターを、先行登録シッターとして優先的にご紹介します。
          </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 group hover:scale-105" href="https://forms.gle/LgvVMsXkffo1ZVLv9" target="_blank">
              先行登録する
              <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 px-8 py-3.5 rounded-full text-base font-medium transition-all flex items-center justify-center" href="#benefits">
              働き方を見る
            </a>
</div>

<div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
<div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col items-center justify-center h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-orange-300"></div>
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-800 mb-2 text-center">
                手数料 10%
              </span>
<span className="text-sm text-stone-500 font-medium text-center">
                成約時のみ課金（初期費用なし）
              </span>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col items-center justify-center h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-orange-300"></div>
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-800 mb-2 text-center">
                掲載料 0円
              </span>
<span className="text-sm text-stone-500 font-medium text-center">
                月額・登録費用も無料
              </span>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col items-center justify-center h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-orange-300"></div>
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-800 mb-2 text-center">
                対象 5エリア
              </span>
<span className="text-sm text-stone-500 font-medium text-center">
                世田谷・目黒・渋谷・港・品川
              </span>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white relative border-b border-stone-100" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-stone-800" style={{lineHeight: '1.6'}}>
              Orusunotomoは、ペットシッターと飼い主を
              <br className="hidden sm:block"/>
              つなぐマッチングサービスです
            </h2>
<p className="mt-6 text-sm md:text-base text-stone-600 leading-relaxed text-left md:text-center">
              あなたは登録するだけ。集客や飼い主探しは運営が担い、エリア内の依頼をあなたにお届けします。
            </p>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-20 relative w-full max-w-4xl mx-auto">
<div className="hidden md:block absolute top-[40%] md:top-[42%] left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-orange-300 z-0"></div>
<div className="md:hidden absolute top-[20%] bottom-[20%] left-1/2 w-0.5 border-l-2 border-dashed border-orange-300 -translate-x-1/2 z-0"></div>
<div className="flex flex-col items-center gap-3 relative z-10 w-48">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md relative bg-stone-100">
<img alt="飼い主・ペット" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0e4c241-75de-4796-ba36-8f3a551ce451_800w.png"/>
<div className="absolute inset-0 bg-stone-900/5"></div>
</div>
<div className="bg-white px-5 py-2 rounded-full border border-stone-200 shadow-sm text-sm font-semibold text-stone-700 whitespace-nowrap">
                飼い主・ペット
              </div>
</div>
<div className="flex flex-col items-center gap-2 relative z-10 my-4 md:my-0">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg border-4 border-white relative z-10">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:hand-shake-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-xs md:text-sm font-bold text-orange-600 tracking-wider bg-[#FFFDF9] px-2 whitespace-nowrap">
                Orusunotomoがつなぐ
              </div>
</div>
<div className="flex flex-col items-center gap-3 relative z-10 w-48 md:-translate-y-2">
<div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-orange-100 shadow-xl relative ring-4 ring-white bg-stone-100">
<img alt="あなた（ペットシッター）" className="w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05df018f-221d-40e5-8d75-73735fed97cf_800w.jpg"/>
<div className="absolute inset-0 bg-orange-500/5"></div>
</div>
<div className="bg-orange-50 px-6 py-2.5 rounded-full border-2 border-orange-400 shadow-md text-sm font-bold text-orange-700 whitespace-nowrap">
                あなた（ペットシッター）
              </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 border border-orange-100/50">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-stone-800 mb-2">
                審査制で安心のシッター環境
              </h4>
<p className="text-sm text-stone-600 leading-relaxed">
                資格や実務経験を重視した審査を通過したシッターのみが登録。質の高いシッターが集まる安心の場です。
              </p>
</div>
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 border border-orange-100/50">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-stone-800 mb-2">
                事前カルテでミスマッチ防止
              </h4>
<p className="text-sm text-stone-600 leading-relaxed">
                事前面談で作成する「お世話カルテ」で依頼内容が事前に分かるから、安心して引き受けられます。
              </p>
</div>
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 border border-orange-100/50">
<iconify-icon className="text-2xl" icon="solar:chat-round-check-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-stone-800 mb-2">
                運営による徹底サポート
              </h4>
<p className="text-sm text-stone-600 leading-relaxed">
                万一のトラブル時も運営が責任を持って対応。契約からお世話当日まで、きめ細やかにサポートします。
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/30 relative" id="anxieties">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800" style={{lineHeight: '1.6'}}>
              シッターさんが抱える不安に、すべてお答えします
            </h2>
<p className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed">
              ペットシッターとして働く上での不安や手間を、Orusunotomoがひとつずつ解決しました。
            </p>
</div>
<div className="w-full space-y-10">
<div className="flex flex-col gap-6 md:gap-4 max-w-3xl mx-auto mb-16">

<div className="flex flex-col gap-4">
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%]">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 border border-stone-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-stone-400 font-medium ml-2 mb-1 tracking-wide">
                      シッター
                    </span>
<div className="bg-white border border-stone-200 px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm md:text-base text-stone-700 font-medium leading-relaxed">
                      手数料が高そう…
                    </div>
</div>
</div>
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%] self-end flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:headphones-round-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col items-end">
<span className="text-[11px] text-orange-500 font-medium mr-2 mb-1 tracking-wide">
                      Orusunotomo運営
                    </span>
<div className="bg-orange-50 border border-orange-100 px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-sm text-sm md:text-base text-stone-800 font-medium leading-relaxed">
                      初期費用・月額は0円。費用がかかるのは成約したときだけです。先行登録なら、初期3ヶ月または初回10件まで手数料10%です。
                    </div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%]">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 border border-stone-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-stone-400 font-medium ml-2 mb-1 tracking-wide">
                      シッター
                    </span>
<div className="bg-white border border-stone-200 px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm md:text-base text-stone-700 font-medium leading-relaxed">
                      変な飼い主が来たらどうしよう…
                    </div>
</div>
</div>
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%] self-end flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:headphones-round-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col items-end">
<span className="text-[11px] text-orange-500 font-medium mr-2 mb-1 tracking-wide">
                      Orusunotomo運営
                    </span>
<div className="bg-orange-50 border border-orange-100 px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-sm text-sm md:text-base text-stone-800 font-medium leading-relaxed">
                      事前のペットカルテと面談で依頼内容を把握。運営スタッフがサポートします。
                    </div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%]">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 border border-stone-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-stone-400 font-medium ml-2 mb-1 tracking-wide">
                      シッター
                    </span>
<div className="bg-white border border-stone-200 px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm md:text-base text-stone-700 font-medium leading-relaxed">
                      直前キャンセルが嫌だな…
                    </div>
</div>
</div>
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%] self-end flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:headphones-round-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col items-end">
<span className="text-[11px] text-orange-500 font-medium mr-2 mb-1 tracking-wide">
                      Orusunotomo運営
                    </span>
<div className="bg-orange-50 border border-orange-100 px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-sm text-sm md:text-base text-stone-800 font-medium leading-relaxed">
                      キャンセル料のルールを設定し、直前キャンセルにも対応します。
                    </div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%]">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 border border-stone-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-stone-400 font-medium ml-2 mb-1 tracking-wide">
                      シッター
                    </span>
<div className="bg-white border border-stone-200 px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm md:text-base text-stone-700 font-medium leading-relaxed">
                      鍵や留守宅を預かるのが怖い…
                    </div>
</div>
</div>
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%] self-end flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:headphones-round-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col items-end">
<span className="text-[11px] text-orange-500 font-medium mr-2 mb-1 tracking-wide">
                      Orusunotomo運営
                    </span>
<div className="bg-orange-50 border border-orange-100 px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-sm text-sm md:text-base text-stone-800 font-medium leading-relaxed">
                      鍵の受け渡しルールと記録の仕組みで、責任の所在を明確にします。
                    </div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%]">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 border border-stone-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-stone-400 font-medium ml-2 mb-1 tracking-wide">
                      シッター
                    </span>
<div className="bg-white border border-stone-200 px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm md:text-base text-stone-700 font-medium leading-relaxed">
                      口コミで悪く書かれたら困る…
                    </div>
</div>
</div>
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%] self-end flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:headphones-round-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col items-end">
<span className="text-[11px] text-orange-500 font-medium mr-2 mb-1 tracking-wide">
                      Orusunotomo運営
                    </span>
<div className="bg-orange-50 border border-orange-100 px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-sm text-sm md:text-base text-stone-800 font-medium leading-relaxed">
                      レビュー運用ルールを整備。不当な口コミには通報・異議申立てができます。
                    </div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%]">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 border border-stone-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-stone-400 font-medium ml-2 mb-1 tracking-wide">
                      シッター
                    </span>
<div className="bg-white border border-stone-200 px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm md:text-base text-stone-700 font-medium leading-relaxed">
                      本当に依頼が来るか不安…
                    </div>
</div>
</div>
<div className="flex items-start gap-3 max-w-[90%] md:max-w-[80%] self-end flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200 shadow-sm mt-5">
<iconify-icon className="text-xl" icon="solar:headphones-round-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col items-end">
<span className="text-[11px] text-orange-500 font-medium mr-2 mb-1 tracking-wide">
                      Orusunotomo運営
                    </span>
<div className="bg-orange-50 border border-orange-100 px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-sm text-sm md:text-base text-stone-800 font-medium leading-relaxed">
                      集客は運営が担当。飼い主向けLPやSNSで紹介し、エリア内の依頼を優先的にご案内します。
                    </div>
</div>
</div>
</div>
</div>
<div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-orange-100 shadow-sm text-center">
<h4 className="font-semibold tracking-tight text-stone-800 mb-6 flex items-center justify-center gap-2 text-xl md:text-2xl">
                働きやすさを支える仕組み
              </h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
<div className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
<iconify-icon className="text-xl text-orange-400 shrink-0" icon="solar:smartphone-update-linear"></iconify-icon>
<p className="text-sm text-stone-700 font-medium">
                    写真付きの報告テンプレートで、報告もスマホで簡単
                  </p>
</div>
<div className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
<iconify-icon className="text-xl text-orange-400 shrink-0" icon="solar:calendar-date-linear"></iconify-icon>
<p className="text-sm text-stone-700 font-medium">
                    カレンダー・メッセージ・決済をまとめて管理
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white relative" id="benefits">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full tracking-wider mb-4 border border-orange-200">
              今だけの先行登録特典
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800">
              先行登録シッターだけの、特別な優遇
            </h2>
<p className="mt-4 text-sm md:text-base text-stone-500">
              いま先行登録いただいた方には、後から登録する方にはない優遇をご用意しています。早く登録するほど、有利にスタートできます。
            </p>
</div>
<div className="space-y-16 w-full">

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
<div className="flex flex-col">
<h3 className="text-xl md:text-2xl font-semibold text-stone-800 mb-8 text-left tracking-tight">
                  いちばんのメリット
                </h3>
<div className="flex flex-col gap-4">
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 md:gap-5">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-100/50">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-stone-800 mb-1.5">
                        手数料優遇
                      </h4>
<p className="text-sm text-stone-500 leading-relaxed">
                        初期3ヶ月または初回10件まで、手数料10%
                      </p>
</div>
</div>
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 md:gap-5">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-100/50">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-stone-800 mb-1.5">
                        月額・掲載料0円
                      </h4>
<p className="text-sm text-stone-500 leading-relaxed">
                        登録・掲載は無料。費用がかかるのは成約時のみ
                      </p>
</div>
</div>
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 md:gap-5">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-100/50">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-stone-800 mb-1.5">
                        優先掲載
                      </h4>
<p className="text-sm text-stone-500 leading-relaxed">
                        飼い主への紹介で、先行登録シッターが優先的に掲載されます
                      </p>
</div>
</div>
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 md:gap-5">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-100/50">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-stone-800 mb-1.5">
                        エリア内の依頼を優先案内
                      </h4>
<p className="text-sm text-stone-500 leading-relaxed">
                        対象5区の依頼を、優先的にご案内します
                      </p>
</div>
</div>
</div>
</div>
<div className="w-full h-[300px] sm:h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-sm border border-stone-100 relative">
<img alt="ペットシッターのイメージ" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0e4c241-75de-4796-ba36-8f3a551ce451_800w.png"/>
</div>
</div>

<div className="">
<h3 className="text-base md:text-lg font-semibold text-stone-500 mb-8 text-center flex items-center justify-center gap-4">
<span className="h-px bg-stone-200 w-8 md:w-16"></span>
                登録後のサポートも充実
                <span className="h-px bg-stone-200 w-8 md:w-16"></span>
</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-stone-50/50 rounded-2xl p-5 border border-stone-100 flex flex-col items-center text-center hover:bg-stone-50 transition-colors">
<div className="h-12 w-12 rounded-xl bg-white text-stone-600 shadow-sm flex items-center justify-center mb-4 border border-stone-100">
<iconify-icon className="text-xl" icon="solar:user-id-linear"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-800 mb-2">
                    プロフィール作成サポート
                  </h5>
<p className="text-xs text-stone-500 leading-relaxed">
                    写真撮影やプロフィール文章の作成をサポート
                  </p>
</div>

<div className="bg-stone-50/50 rounded-2xl p-5 border border-stone-100 flex flex-col items-center text-center hover:bg-stone-50 transition-colors">
<div className="h-12 w-12 rounded-xl bg-white text-stone-600 shadow-sm flex items-center justify-center mb-4 border border-stone-100">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-800 mb-2">
                    Google検索に強い個別ページ
                  </h5>
<p className="text-xs text-stone-500 leading-relaxed">
                    検索に強い専用プロフィールページを用意
                  </p>
</div>

<div className="bg-stone-50/50 rounded-2xl p-5 border border-stone-100 flex flex-col items-center text-center hover:bg-stone-50 transition-colors">
<div className="h-12 w-12 rounded-xl bg-white text-stone-600 shadow-sm flex items-center justify-center mb-4 border border-stone-100">
<iconify-icon className="text-xl" icon="solar:star-linear"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-800 mb-2">
                    初期レビュー獲得支援
                  </h5>
<p className="text-xs text-stone-500 leading-relaxed">
                    最初の実績づくりを運営がサポート
                  </p>
</div>

<div className="bg-stone-50/50 rounded-2xl p-5 border border-stone-100 flex flex-col items-center text-center hover:bg-stone-50 transition-colors">
<div className="h-12 w-12 rounded-xl bg-white text-stone-600 shadow-sm flex items-center justify-center mb-4 border border-stone-100">
<iconify-icon className="text-xl" icon="solar:speaker-linear"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-800 mb-2">
                    飼い主向けLP・SNSで紹介
                  </h5>
<p className="text-xs text-stone-500 leading-relaxed">
                    飼い主向けの発信で、あなたを紹介
                  </p>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 group hover:scale-105 w-full sm:w-auto" href="https://forms.gle/LgvVMsXkffo1ZVLv9" target="_blank">
              先行登録する
              <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 bg-[#FFFDF9] relative border-t border-stone-100" id="how-requests-come">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800 mb-6">
              集客は運営が担うので安心
            </h2>
<p className="text-sm md:text-base text-stone-600 leading-relaxed">
              依頼があなたのもとに届くまでの流れを、ご紹介します。
            </p>
</div>
<div className="flex flex-col md:flex-row gap-3 lg:gap-4 w-full max-w-5xl mx-auto mb-20 items-center md:items-stretch">
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col items-center text-center w-full md:flex-1">
<span className="text-[11px] font-bold text-orange-500 tracking-wider mb-3">
                STEP 1
              </span>
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 border border-orange-100/50 shrink-0">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-800 mb-2">
                運営が集客
              </h3>
<p className="text-xs text-stone-500 leading-relaxed">
                飼い主向けLP・SNS・Google検索で、Orusunotomoが飼い主を集めます。
              </p>
</div>
<div className="flex items-center justify-center text-stone-300 shrink-0">
<iconify-icon className="text-2xl md:hidden" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-2xl hidden md:block" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col items-center text-center w-full md:flex-1">
<span className="text-[11px] font-bold text-orange-500 tracking-wider mb-3">
                STEP 2
              </span>
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 border border-orange-100/50 shrink-0">
<iconify-icon className="text-2xl" icon="solar:user-id-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-800 mb-2">
                あなたを紹介
              </h3>
<p className="text-xs text-stone-500 leading-relaxed">
                対象エリアの飼い主に、あなたのプロフィールページを紹介します。
              </p>
</div>
<div className="flex items-center justify-center text-stone-300 shrink-0">
<iconify-icon className="text-2xl md:hidden" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-2xl hidden md:block" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col items-center text-center w-full md:flex-1">
<span className="text-[11px] font-bold text-orange-500 tracking-wider mb-3">
                STEP 3
              </span>
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 border border-orange-100/50 shrink-0">
<iconify-icon className="text-2xl" icon="solar:bell-bing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-800 mb-2">
                依頼が届く
              </h3>
<p className="text-xs text-stone-500 leading-relaxed">
                条件に合う依頼を、エリア内で優先的にご案内します。
              </p>
</div>
<div className="flex items-center justify-center text-stone-300 shrink-0">
<iconify-icon className="text-2xl md:hidden" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-2xl hidden md:block" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col items-center text-center w-full md:flex-1">
<span className="text-[11px] font-bold text-orange-500 tracking-wider mb-3">
                STEP 4
              </span>
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 border border-orange-100/50 shrink-0">
<iconify-icon className="text-2xl" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-800 mb-2">
                お世話に集中
              </h3>
<p className="text-xs text-stone-500 leading-relaxed">
                あなたは営業せず、ペットのお世話に集中できます。
              </p>
</div>
</div>
<div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-stone-200 shadow-sm mb-16">
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-stone-800 mb-4 text-center">
              なぜ、世田谷・目黒・渋谷・港・品川なのか
            </h3>
<p className="text-sm md:text-base text-stone-600 leading-relaxed text-center">
              これらのエリアは、共働き世帯や単身世帯が多く、ペットのお留守番ニーズが高い都心エリアです。Orusunotomoは需要の見込めるエリアに絞って、依頼とシッターを丁寧にマッチングします。
            </p>
</div>
<div className="text-center">
<p className="text-lg md:text-xl font-semibold tracking-tight text-stone-800 leading-relaxed">
              だから、登録したあとの
              <span className="text-orange-600">「どうやって依頼を取ろう」</span>
              を、
              <br className="hidden sm:block"/>
              あなたが考える必要はありません。
            </p>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="tasks">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800">
              お任せするのは、ペットとの大切な時間
            </h2>
<p className="mt-4 text-sm md:text-base text-stone-500">
              飼い主様のご自宅を訪問し、普段と同じ環境でペットが安心してお留守番できるようサポートします。
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
<img alt="お食事・お水の用意" className="w-full h-32 object-cover rounded-xl mb-4 shadow-sm" src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=300"/>
<h3 className="text-base font-semibold tracking-tight text-stone-800 mb-2">
                お食事・お水の用意
              </h3>
<p className="text-xs text-stone-600">
                普段食べ慣れているごはんと、新鮮なお水を用意します。食器の洗浄も行います。
              </p>
</div>
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
<img alt="トイレのお掃除" className="w-full h-32 object-cover rounded-xl mb-4 shadow-sm" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=300"/>
<h3 className="text-base font-semibold tracking-tight text-stone-800 mb-2">
                トイレのお掃除
              </h3>
<p className="text-xs text-stone-600">
                排泄物の処理や猫砂の入れ替えなど、清潔なトイレ環境を整えます。
              </p>
</div>
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
<img alt="遊び・スキンシップ" className="w-full h-32 object-cover object-right rounded-xl mb-4 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d448683-4dcd-4619-83f3-7ca55b1b5bd2_800w.png"/>
<h3 className="text-base font-semibold tracking-tight text-stone-800 mb-2">
                遊び・スキンシップ
              </h3>
<p className="text-xs text-stone-600">
                お気に入りのおもちゃで遊んだり、ブラッシングをしてストレス解消を促します。
              </p>
</div>
<div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
<img alt="ご報告" className="w-full h-32 object-cover rounded-xl mb-4 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dadd19f4-588f-44b4-ae12-f07407efdf3a_800w.jpg"/>
<h3 className="text-base font-semibold tracking-tight text-stone-800 mb-2">
                ご報告
              </h3>
<p className="text-xs text-stone-600">
                お世話の様子を写真や動画とともに飼い主様へ報告します。スマホで簡単に完了します。
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="flow">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800">
              登録から、お仕事開始までの流れ
            </h2>
<p className="mt-4 text-sm md:text-base text-stone-500">
              オンラインで完結。最短でスピーディーに活動を始められます。
            </p>
</div>
<div className="relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-stone-200 -translate-y-1/2 z-0"></div>
<div className="grid gap-6 relative z-10 md:grid-cols-4">

<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm relative flex flex-col items-center text-center">
<div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-medium text-sm mb-4 ring-4 ring-white shadow-sm">
                  1
                </div>
<h3 className="text-base font-semibold tracking-tight text-stone-800 mb-2">
                  Webで先行登録
                </h3>
<p className="text-xs text-stone-500">
                  フォームから基本情報を入力。1分で完了します。
                </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm relative flex flex-col items-center text-center">
<div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-medium text-sm mb-4 ring-4 ring-white shadow-sm">
                  2
                </div>
<h3 className="text-base font-semibold tracking-tight text-stone-800 mb-2">
                  オンライン面談
                </h3>
<p className="text-xs text-stone-500">
                  ご希望の働き方や、動物への想いをお聞かせください。
                </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm relative flex flex-col items-center text-center">
<div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-medium text-sm mb-4 ring-4 ring-white shadow-sm">
                  3
                </div>
<h3 className="text-base font-semibold tracking-tight text-stone-800 mb-2">
                  プロフィール作成・掲載準備
                </h3>
<p className="text-xs text-stone-500">
                  プロフィールの作成をサポートし、掲載の準備を整えます。
                </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm relative flex flex-col items-center text-center">
<div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-medium text-sm mb-4 ring-4 ring-white shadow-sm">
                  4
                </div>
<h3 className="text-base font-semibold tracking-tight text-stone-800 mb-2">
                  掲載開始・依頼の受付
                </h3>
<p className="text-xs text-stone-500">
                  最短翌日から掲載開始。先行登録なら優先的に掲載されます。
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="requirements">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800 mb-6">
                私たちが求めている方
              </h2>
<p className="text-base text-stone-600 mb-8">
                ペットシッター資格をお持ちで、動物を愛する心と責任感のある方を募集しています。ベテランの方も、これから実績を作りたい方も歓迎です。
              </p>
<div className="bg-white p-6 rounded-xl border border-stone-200/60 shadow-sm space-y-5">
<div className="flex gap-4">
<iconify-icon className="text-xl text-orange-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-medium text-stone-800">
                      動物を心から愛し、責任感を持って接することができる
                    </h4>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-xl text-orange-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-medium text-stone-800">
                      パソコンまたはスマートフォンでの簡単な操作・連絡ができる
                    </h4>
<p className="text-xs text-stone-500 mt-1">
                      ※報告書の作成などに使用します
                    </p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-xl text-orange-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-medium text-stone-800">
                      下記いずれかの資格を保有している
                    </h4>
<p className="text-xs text-stone-500 mt-1">
                      愛玩動物飼養管理士（1・2級）／認定ペットシッター／ペットシッター士／愛犬飼育管理士／家庭動物管理士
                      等
                    </p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-xl text-orange-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-medium text-stone-800">
                      対象5区（世田谷・目黒・渋谷・港・品川）でシッター業務が可能
                    </h4>
</div>
</div>
</div>
<div className="mt-8 p-5 rounded-xl bg-orange-50 border border-orange-100">
<h4 className="text-xs font-semibold text-orange-800 mb-2 tracking-tight">
                  その他の歓迎資格（必須ではありません）
                </h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-white border border-orange-200 text-xs text-orange-700">
                    動物看護師
                  </span>
<span className="px-2.5 py-1 rounded-md bg-white border border-orange-200 text-xs text-orange-700">
                    ドッグトレーナー
                  </span>
</div>
</div>
</div>
<div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-xl shadow-stone-200/50 flex items-center justify-center group">
<img alt="ペットとシッターの様子" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05df018f-221d-40e5-8d75-73735fed97cf_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-stone-800 text-white relative overflow-hidden" id="apply">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            あなたの「好き」を、
            <br className="hidden sm:block"/>
            素晴らしい仕事に。
          </h2>
<p className="text-sm md:text-base text-stone-300 mb-10 max-w-2xl mx-auto">
            Orusunotomoは、世田谷・目黒・渋谷・港・品川で先行登録シッターを募集しています。先行登録の特別な優遇は、立ち上げ期の今だけ。あなたの資格と動物への想いを、ここで活かしませんか？
          </p>
<div className="flex justify-center mt-4">
<a className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 group w-full sm:w-auto" href="https://forms.gle/LgvVMsXkffo1ZVLv9" target="_blank">
              先行登録する
              <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<p className="mt-4 text-xs text-stone-400">
            ※先行登録の優遇は予告なく終了する場合があります
          </p>
</div>
</section>
</main>

<footer className="bg-[#FFFDF9] border-t border-stone-200 py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-stone-400 text-xl" icon="solar:cat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-semibold tracking-tighter text-stone-600">
                orusunotomo
              </span>
</div>
<p className="text-xs text-stone-500">
              ペットと飼い主の豊かな暮らしをサポートする
            </p>
</div>
<div className="flex gap-6 text-sm">
<a className="text-stone-500 hover:text-stone-900 transition-colors" href="https://portament.jp" target="_blank">
              運営会社
            </a>
<a className="text-stone-500 hover:text-stone-900 transition-colors" href="https://www.portament.jp/privacy-policy" target="_blank">
              プライバシーポリシー
            </a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-xs text-stone-400">
            © 2025 orusunotomo All rights reserved.
          </p>
</div>
</div>
</footer>

    </>
  );
}
