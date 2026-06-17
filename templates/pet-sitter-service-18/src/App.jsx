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
      

<header className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-md z-50 border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-lg font-medium tracking-widest text-stone-900">
                ORUSUNOTOMO
            </div>
<a className="hidden md:inline-flex items-center justify-center bg-stone-900 text-stone-50 text-sm font-medium px-6 py-3 rounded-full transition-colors hover:bg-stone-800" href="#">
                ご依頼・お問い合わせ
            </a>
</div>
</header>

<section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-6xl mx-auto text-center">
<span className="inline-block py-1.5 px-4 rounded-full bg-stone-200 text-stone-700 text-xs font-medium tracking-widest mb-6 uppercase">
                オーダーメイドのペットシッターサービス
            </span>
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 font-serif leading-tight">
                いつものおうちで、<br className="md:hidden"/>いつも通りのぬくもりを。
            </h1>
<p className="mt-8 text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
                ご旅行や出張、お仕事で忙しい日も。経験豊富な専任シッターが<br className="hidden md:block"/>ご自宅へ伺い、ペットの個性に合わせたオーダーメイドのお世話をいたします。
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-stone-900 text-stone-50 text-base font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-sm" href="#">
                    まずは無料面談を予約する
                    <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-stone-900 text-base font-medium px-8 py-4 rounded-full border border-stone-200 transition-colors hover:bg-stone-50 shadow-sm" href="#services">
                    サービス内容を見る
                </a>
</div>
<div className="mt-20 md:mt-28 relative rounded-3xl overflow-hidden bg-stone-200 shadow-sm border border-stone-200/50">
<img alt="日差しの入る窓辺で猫と遊ぶ女性" className="w-full h-auto block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ad03f0d-af11-4888-a1ab-b015144a588d_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white px-6">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-100 shadow-sm relative">
<img alt="籐の椅子に座るロングコートチワワ" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/408eccf8-c298-4074-ac0d-44fc9216fd0a_800w.jpg"/>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-serif mb-12 leading-tight">
                    愛するペットのお留守番、<br className="hidden md:block"/>こんなお悩みはありませんか？
                </h2>
<div className="space-y-4">
<div className="flex items-start gap-5 p-6 rounded-2xl bg-stone-50 border border-stone-100">
<iconify-icon className="text-2xl text-stone-400 mt-0.5 shrink-0" icon="solar:sad-circle-linear"></iconify-icon>
<div>
<h4 className="text-base text-stone-900 font-medium mb-1">環境の変化に弱い</h4>
<p className="text-sm text-stone-500 leading-relaxed">ペットホテルに預けると体調を崩したり、ストレスを感じてしまう。</p>
</div>
</div>
<div className="flex items-start gap-5 p-6 rounded-2xl bg-stone-50 border border-stone-100">
<iconify-icon className="text-2xl text-stone-400 mt-0.5 shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<h4 className="text-base text-stone-900 font-medium mb-1">仕事が忙しく時間が取れない</h4>
<p className="text-sm text-stone-500 leading-relaxed">十分なお散歩や遊ぶ時間を確保できず、運動不足が心配。</p>
</div>
</div>
<div className="flex items-start gap-5 p-6 rounded-2xl bg-stone-50 border border-stone-100">
<iconify-icon className="text-2xl text-stone-400 mt-0.5 shrink-0" icon="solar:heart-angle-linear"></iconify-icon>
<div>
<h4 className="text-base text-stone-900 font-medium mb-1">シニアペットの介護が必要</h4>
<p className="text-sm text-stone-500 leading-relaxed">高齢で特別なケアが必要なため、日中の見守りやお世話をお願いしたい。</p>
</div>
</div>
</div>
<p className="mt-10 text-base text-stone-500 leading-relaxed">
                    おるすのともは、事前の綿密なカウンセリングを通じて、普段と同じ環境・同じペースでのお世話をお約束します。
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-stone-50" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 md:mb-24">
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4 block">Our Services</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-serif">
                    経験豊富なプロが支える、安心のお留守番サポート
                </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-24">
<div className="group flex flex-col">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-stone-200">
<img alt="サロンで犬を受け取る女性" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90b5eae8-d7a3-4659-a89d-02693afec70e_800w.jpg"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 font-serif mb-4 flex items-center gap-3">
<iconify-icon className="text-2xl text-stone-400" icon="solar:home-smile-linear"></iconify-icon>
                        無料の事前面談でカルテ作成
                    </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        事前にご自宅へ伺い、ペットの性格、健康状態、ごはんの量や隠れ場所まで丁寧にヒアリング。専用のお世話カルテを作成します。
                    </p>
</div>
<div className="group flex flex-col">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-stone-200">
<img alt="犬を見つめる女性" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd382a53-7a32-4ec2-a2a6-d111bc099c72_800w.jpg"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 font-serif mb-4 flex items-center gap-3">
<iconify-icon className="text-2xl text-stone-400" icon="solar:diploma-verified-linear"></iconify-icon>
                        経験豊富なプロのシッター
                    </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        ペットに関する資格や豊富な経験を持つスタッフのみが在籍。シニアや持病のある子のご相談も承ります。
                    </p>
</div>
<div className="group flex flex-col">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-stone-200">
<img alt="紙袋に入った猫を撮影する様子" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9995ecc4-6aab-480a-b348-ac43019e3e34_800w.jpg"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 font-serif mb-4 flex items-center gap-3">
<iconify-icon className="text-2xl text-stone-400" icon="solar:chat-line-linear"></iconify-icon>
                        写真と動画で詳細レポート
                    </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        お世話終了後、ごはんの完食状況やトイレの様子、遊んでいる姿などを写真や動画を添えて詳細にメッセージでご報告します。
                    </p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-stone-100">
<h3 className="text-2xl font-medium tracking-tight text-stone-900 font-serif mb-10 text-center">基本のお世話内容</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 border border-stone-100">
<iconify-icon className="text-xl text-stone-600" icon="solar:cup-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 mb-2">お食事・お水のご用意</h4>
<p className="text-sm text-stone-500 leading-relaxed">いつもの器で、ご指定の量や温め方でご用意。お薬の投薬もご相談ください。</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 border border-stone-100">
<iconify-icon className="text-xl text-stone-600" icon="solar:sparkles-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 mb-2">トイレのお掃除</h4>
<p className="text-sm text-stone-500 leading-relaxed">排泄物の状態を確認し健康チェック。トイレ周りも清潔に保ちます。</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 border border-stone-100">
<iconify-icon className="text-xl text-stone-600" icon="solar:routing-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 mb-2">お散歩・室内遊び</h4>
<p className="text-sm text-stone-500 leading-relaxed">いつものお散歩コースを歩きます。猫ちゃんは大好きなおもちゃで遊びます。</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 border border-stone-100">
<iconify-icon className="text-xl text-stone-600" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 mb-2">ブラッシング・お手入れ</h4>
<p className="text-sm text-stone-500 leading-relaxed">スキンシップを図りながら、被毛のケアや目元・口元のお手入れを行います。</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 border border-stone-100">
<iconify-icon className="text-xl text-stone-600" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 mb-2">シニア・要介護ケア</h4>
<p className="text-sm text-stone-500 leading-relaxed">歩行補助、食事介助、おむつ交換など、負担の少ないケアをご提案します。</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 border border-stone-100">
<iconify-icon className="text-xl text-stone-600" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 mb-2">簡易的な家事代行</h4>
<p className="text-sm text-stone-500 leading-relaxed">ご希望に応じて、郵便物の取り込みや植木の水やり等も無料で承ります。</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 md:mb-24">
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4 block">Case Study</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-serif">
                    こんな時にご利用いただいています
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-[2rem] bg-stone-50 border border-stone-100">
<div className="w-full md:w-2/5 aspect-square rounded-2xl overflow-hidden shrink-0 bg-stone-200">
<img alt="屋外でミニチュアダックスフンドと遊ぶ女の子" className="w-full h-full object-cover object-[30%_30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8643b56-2d82-4e0c-b473-d9f8ddeb6215_800w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 mb-3 bg-white px-3 py-1.5 rounded-full w-max border border-stone-200">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon> 小型犬・1匹／40代女性
                        </span>
<h3 className="text-lg font-medium text-stone-900 mb-3">プロの方にお願いできて本当に助かりました！</h3>
<div className="text-sm text-stone-500 leading-relaxed space-y-3">
<p>出張が多く長時間家を空けることが心配でしたが、経験豊富なシッターさんが担当してくださり安心してお願いできました。</p>
<p>毎回のレポートがとても丁寧で、写真だけでなく動画も送っていただけたので、離れていても様子がよくわかって安心でした📷<br/>細かい変化にも気づいて報告していただけたのが特にありがたかったです。</p>
<p>今では安心してお任せできる存在です！</p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-[2rem] bg-stone-50 border border-stone-100">
<div className="w-full md:w-2/5 aspect-square rounded-2xl overflow-hidden shrink-0 bg-stone-200">
<img alt="ソファで寄り添う2匹の猫" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edf25274-144e-4d37-a9c8-4afdb22099b6_800w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 mb-3 bg-white px-3 py-1.5 rounded-full w-max border border-stone-200">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon> 猫・2匹／30代女性
                        </span>
<h3 className="text-lg font-medium text-stone-900 mb-3">旅行中も安心して過ごせました！</h3>
<div className="text-sm text-stone-500 leading-relaxed space-y-3">
<p>はじめてペットシッターをお願いしたので少し不安もありましたが、事前面談でとても丁寧に話を聞いてくださり、うちの子の性格や注意点までしっかりカルテにまとめてもらえて安心できました。</p>
<p>お世話の様子も写真や動画で詳しく送っていただけて、「ちゃんとごはん食べてる」「リラックスしてる」様子がわかり、本当にお願いしてよかったです✨<br/>次の旅行のときもぜひお願いしたいと思っています！</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-900 text-stone-50 px-6">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-700/50 rounded-[2rem] overflow-hidden border border-stone-700/50">

<div className="bg-stone-800 p-12 md:p-16 flex flex-col justify-center items-center text-center">
<iconify-icon className="text-4xl text-stone-400 mb-8" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs text-stone-400 font-medium tracking-widest mb-3 uppercase">Service Area</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight font-serif">対応エリア</h3>
<p className="mt-6 text-xl md:text-2xl font-medium text-stone-200">
                        東京都23区内
                    </p>
<p className="mt-6 text-sm text-stone-400 leading-relaxed">
                        地域密着で、移動やトラブルにも迅速に対応。<br/>シニア・急なご依頼にも寄り添います。
                    </p>
</div>

<div className="bg-stone-800 p-12 md:p-16 flex flex-col justify-center items-center text-center">
<iconify-icon className="text-4xl text-stone-400 mb-8" icon="solar:wallet-linear"></iconify-icon>
<span className="text-xs text-stone-400 font-medium tracking-widest mb-3 uppercase">Pricing</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight font-serif">基本料金</h3>
<div className="mt-6 flex items-baseline justify-center gap-2">
<span className="text-lg text-stone-300">1時間</span>
<span className="text-3xl md:text-4xl font-medium tracking-tight text-white font-serif">4,000円</span>
</div>
<p className="mt-3 text-sm text-stone-400">＋ 交通費</p>
<p className="mt-8 text-xs text-stone-500 leading-relaxed">
                        ※多頭飼いや長時間利用の割引、事前面談（初回無料）についてはお気軽にお問い合わせください。
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-stone-50">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 md:mb-28">
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4 block">Flow</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-serif">
                    ご利用の流れ
                </h2>
<p className="mt-6 text-sm text-stone-500">初めての方は、必ず事前の無料カウンセリングをお願いしております。</p>
</div>
<div className="relative">
<div className="hidden lg:block absolute top-[40px] left-0 w-full h-px bg-stone-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm relative z-10">
<iconify-icon className="text-3xl text-stone-400" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-3">Step 1</span>
<h3 className="text-lg font-medium tracking-tight text-stone-900 font-serif mb-3">お問い合わせ</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">
                            WEBフォームより、ご希望の日程やペットの情報をお知らせください。
                        </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm relative z-10">
<iconify-icon className="text-3xl text-stone-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-3">Step 2</span>
<h3 className="text-lg font-medium tracking-tight text-stone-900 font-serif mb-3">事前面談（無料）</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">
                            シッターがご自宅へ伺い、お世話内容の確認や相性チェックを行います。
                        </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm relative z-10">
<iconify-icon className="text-3xl text-stone-400" icon="solar:key-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-3">Step 3</span>
<h3 className="text-lg font-medium tracking-tight text-stone-900 font-serif mb-3">ご契約・鍵のお預かり</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">
                            内容にご納得いただけましたらご契約となり、合鍵をお預かりします。
                        </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-stone-900 text-white flex items-center justify-center mb-6 shadow-sm relative z-10">
<iconify-icon className="text-3xl" icon="solar:home-smile-angle-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-widest text-stone-900 uppercase mb-3">Step 4</span>
<h3 className="text-lg font-medium tracking-tight text-stone-900 font-serif mb-3">お世話当日・ご報告</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">
                            心を込めてお世話を行い、終了後は写真付きのレポートをお送りします。
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 md:px-6 bg-white">
<div className="max-w-5xl mx-auto bg-stone-100/80 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-stone-200/50">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-70"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900 font-serif mb-8 leading-tight">
                    愛する家族に、<br className="md:hidden"/>最高のおるすばんを。
                </h2>
<p className="text-base md:text-lg text-stone-500 mb-12">
                    まずは事前面談（無料）にて、お悩みやご要望をお聞かせください。
                </p>
<a className="inline-flex items-center justify-center bg-stone-900 text-stone-50 text-base font-medium px-10 py-5 rounded-full transition-all hover:bg-stone-800 hover:scale-105 active:scale-95 shadow-md" href="#">
                    無料面談を予約する
                    <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="text-lg font-medium tracking-widest text-stone-300 mb-4">
                ORUSUNOTOMO
            </div>
<p className="text-sm mb-8">東京都限定 ご自宅への訪問型ペットシッターサービス</p>
<div className="flex items-center justify-center gap-6 text-sm mb-12">
<a className="hover:text-stone-200 transition-colors" href="#">運営会社</a>
<a className="hover:text-stone-200 transition-colors" href="#">利用規約</a>
<a className="hover:text-stone-200 transition-colors" href="#">プライバシーポリシー</a>
</div>
<p className="text-xs tracking-wider">© ORUSUNOTOMO All rights reserved.</p>
</div>
</footer>

    </>
  );
}
