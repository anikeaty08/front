import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full fixed top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="font-heading text-xl md:text-2xl font-medium tracking-tight text-[#333333]">
                GLOBAL CARE WIZ
            </div>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center justify-center rounded-full bg-[#E0F4F2] text-[#00A699] px-6 py-2.5 text-base font-normal transition-colors hover:bg-[#cbeae6]" href="#form">
<i className="w-4 h-4 mr-2" data-lucide="file-text" strokeWidth="1.5"></i>
                    資料請求
                </a>
<a className="hidden md:inline-flex items-center justify-center rounded-full bg-[#2EAA55] text-white px-6 py-2.5 text-base font-normal transition-colors hover:bg-[#258a44]" href="#form">
                    無料相談
                </a>
</div>
</div>
</header>

<section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-[#F9F8F6] overflow-hidden">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 text-center md:text-left z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E85656]/20 text-[#E85656] text-sm font-normal mb-6 shadow-sm">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
                    施設長・管理者様 必見
                </div>
<h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug text-[#333333] mb-6">
                    外国人スタッフ採用の<br/>
<span className="text-[#E85656]">「不安」</span>と<span className="text-[#E85656]">「複雑な手続き」</span>、<br/>
                    この1冊でクリアに。
                </h1>
<p className="text-lg md:text-xl leading-relaxed text-[#666666] mb-10">
                    言葉の壁、文化の違い、煩雑なビザ申請…。<br className="hidden md:block"/>
                    現場の負担を減らし、心つながるケアを実現するための<br className="hidden md:block"/>
                    実践的ノウハウを凝縮したガイドブックを無料配布中。
                </p>
<div className="flex flex-col items-center md:items-start gap-4">
<a className="w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#2EAA55] text-white px-8 py-5 text-lg font-medium transition-all hover:bg-[#258a44] shadow-md hover:shadow-lg" href="#form">
<i className="w-6 h-6" data-lucide="download" strokeWidth="1.5"></i>
                        ガイドブックを無料ダウンロード
                        <i className="w-5 h-5 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="flex-1 relative w-full max-w-md mx-auto perspective-1000 mt-8 md:mt-0">
<div className="relative w-full aspect-[3/4] bg-white rounded-r-xl rounded-l-sm shadow-xl border border-gray-100 border-l-8 border-l-[#2EAA55] p-8 flex flex-col justify-between transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out z-10">
<div>
<div className="text-[#E85656] text-sm font-normal mb-3">完全無料レポート</div>
<h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#333333] leading-tight mb-6">特定技能ビザ<br/>導入・定着<br/>パーフェクトガイド</h2>
<div className="w-16 h-1 bg-[#2EAA55] rounded-full mb-6"></div>
<p className="text-base text-[#666666] leading-relaxed">複雑な手続きから、現場での異文化コミュニケーションまで、施設長が知るべきすべてを網羅。</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-gray-100 py-12 relative -mt-8 z-20 max-w-5xl mx-auto rounded-3xl shadow-sm mx-6 md:mx-auto">
<div className="px-6 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="flex flex-col items-center gap-2 pt-6 md:pt-0 w-full md:w-auto">
<span className="text-base text-[#666666] font-normal">地方介護施設での</span>
<div className="flex items-end gap-1 text-[#333333]">
<span className="text-2xl md:text-3xl font-heading font-medium tracking-tight">導入実績多数</span>
</div>
</div>
<div className="flex flex-col items-center gap-2 pt-6 md:pt-0 pl-0 md:pl-16 w-full md:w-auto">
<span className="text-base text-[#666666] font-normal">複雑な行政手続きを</span>
<div className="flex items-end gap-1 text-[#333333]">
<span className="text-2xl md:text-3xl font-heading font-medium tracking-tight">専門家が監修</span>
</div>
</div>
<div className="flex flex-col items-center gap-2 pt-6 md:pt-0 pl-0 md:pl-16 w-full md:w-auto">
<span className="text-base text-[#666666] font-normal">実践ノウハウ収録の</span>
<div className="flex items-end gap-1 text-[#333333]">
<span className="text-2xl md:text-3xl font-heading font-medium tracking-tight">満足度</span>
<span className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-[#E85656]">95</span>
<span className="text-xl font-medium pb-1">%</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-14">
<h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-[#333333]">こんなお悩み、抱えていませんか？</h2>
<div className="w-12 h-1 bg-[#E85656] mx-auto mt-6"></div>
</div>
<div className="bg-[#F9F8F6] rounded-3xl p-8 md:p-14 relative">
<ul className="space-y-6">
<li className="flex items-start gap-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
<i className="w-8 h-8 text-[#E85656] flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<p className="text-lg md:text-xl text-[#333333] leading-relaxed pt-0.5">言葉や文化の壁で、高齢者との<strong className="font-medium text-[#E85656]">コミュニケーションがうまくいくか不安</strong></p>
</li>
<li className="flex items-start gap-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
<i className="w-8 h-8 text-[#E85656] flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<p className="text-lg md:text-xl text-[#333333] leading-relaxed pt-0.5">ビザ取得や雇用契約の<strong className="font-medium text-[#E85656]">手続きが複雑</strong>すぎて、何から手をつければいいか分からない</p>
</li>
<li className="flex items-start gap-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
<i className="w-8 h-8 text-[#E85656] flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<p className="text-lg md:text-xl text-[#333333] leading-relaxed pt-0.5">現場のスタッフに負担がかかり、<strong className="font-medium text-[#E85656]">職場の雰囲気が悪くならないか心配</strong></p>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F9F8F6]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-[#333333] mb-5">その不安、このガイドブックがすべて解消します</h2>
<p className="text-[#666666] text-lg">実践的ですぐに現場で活かせる内容を収録しました</p>
<div className="w-12 h-1 bg-[#2EAA55] mx-auto mt-6"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="inline-block px-4 py-1.5 bg-[#FDECEE] text-[#E85656] text-sm font-normal rounded-full mb-6">収録内容 1</div>
<h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-[#333333] mb-4">ゼロから分かる！<br/>特定技能ビザ取得ロードマップ</h3>
<p className="text-base text-[#666666] leading-relaxed">複雑な行政手続きを図解でわかりやすく解説。法律の知識がなくても迷わず進められます。</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="inline-block px-4 py-1.5 bg-[#FDECEE] text-[#E85656] text-sm font-normal rounded-full mb-6">収録内容 2</div>
<h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-[#333333] mb-4">現場が笑顔になる<br/>異文化コミュニケーション術</h3>
<p className="text-base text-[#666666] leading-relaxed">高齢者との心のつながりを育むための、実践的な声かけのコツや研修プログラム案を収録。</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="inline-block px-4 py-1.5 bg-[#FDECEE] text-[#E85656] text-sm font-normal rounded-full mb-6">収録内容 3</div>
<h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-[#333333] mb-4">失敗しないための<br/>「受け入れ体制」チェックリスト</h3>
<p className="text-base text-[#666666] leading-relaxed">採用前に準備すべきこと、既存スタッフへの周知方法など、スムーズな定着を促すリスト。</p>
</div>
</div>

<div className="mt-20 text-center">
<div className="inline-block bg-[#FDECEE] rounded-3xl p-8 md:p-10 md:px-16">
<p className="text-[#E85656] mb-6 text-lg font-normal">今すぐ現場の課題を解決する情報を手に入れる</p>
<a className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2EAA55] text-white px-10 py-5 text-lg font-medium transition-all hover:bg-[#258a44] shadow-md hover:shadow-lg" href="#form">
<i className="w-6 h-6" data-lucide="download" strokeWidth="1.5"></i>
                        無料で資料をダウンロードする
                        <i className="w-5 h-5 ml-2" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden relative">
<div className="max-w-5xl mx-auto relative">
<div className="text-center mb-16 relative">
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[120px] font-heading text-gray-50 tracking-widest pointer-events-none">VOICE</span>
<h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-[#333333] relative z-10 pt-4 md:pt-8">他施設での成功事例</h2>
</div>
<div className="max-w-3xl mx-auto">
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#F9F8F6] flex items-center justify-center border-4 border-white shadow-sm z-10 -mb-12 relative">
<i className="w-10 h-10 text-[#2EAA55]" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div className="bg-white rounded-3xl p-10 pt-20 shadow-lg border border-gray-100 w-full relative">
<i className="w-10 h-10 text-[#E85656]/10 absolute top-8 left-8" data-lucide="quote" strokeWidth="1.5"></i>
<h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#2EAA55] mb-6 relative z-10">
                            言葉の壁は、思いやりで越えられました
                        </h3>
<p className="text-lg leading-relaxed text-[#666666] mb-8 text-left md:text-center">
                            最初は「高齢者とうまくコミュニケーションが取れるだろうか」と不安でした。しかし、ガイドブックを参考に事前の研修を行い、現場でのフォロー体制を整えたことで、彼らの持つ「お年寄りを敬う文化」が素晴らしい形で発揮されています。今では、施設に欠かせない笑顔の源です。
                        </p>
<div className="inline-flex items-center justify-center px-6 py-2 border border-[#E85656]/30 rounded-full text-base text-[#E85656] bg-white">
                            特定非営利活動法人あじさい様 / 特別養護老人ホーム 施設長
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F9F8F6]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20">
<span className="text-[#E85656] text-lg font-normal mb-3 block">サポート体制</span>
<h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-[#333333]">採用して終わりではありません</h2>
<p className="text-lg text-[#666666] mt-5">専門家による万全の伴走サポートで、定着までしっかりフォローします。</p>
</div>
<div className="space-y-12">

<div className="bg-white rounded-3xl p-10 md:p-14 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
<div className="absolute -right-6 -top-12 text-[180px] font-heading font-medium text-[#F9F8F6] leading-none pointer-events-none">01</div>
<div className="md:w-1/3 flex justify-center z-10">
<div className="w-36 h-36 rounded-full bg-[#E0F4F2] flex items-center justify-center">
<i className="w-16 h-16 text-[#00A699]" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
</div>
<div className="md:w-2/3 z-10 text-center md:text-left">
<h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#333333] mb-4">ビザ申請手続きの完全代行</h3>
<p className="text-lg text-[#666666] leading-relaxed">複雑な書類作成から行政機関への提出まで、専門の行政書士ネットワークを活用してすべて代行。施設長の手間を最小限に抑えます。</p>
</div>
</div>

<div className="bg-white rounded-3xl p-10 md:p-14 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col md:flex-row-reverse items-center gap-10">
<div className="absolute -left-6 -top-12 text-[180px] font-heading font-medium text-[#F9F8F6] leading-none pointer-events-none">02</div>
<div className="md:w-1/3 flex justify-center z-10">
<div className="w-36 h-36 rounded-full bg-[#FDECEE] flex items-center justify-center">
<i className="w-16 h-16 text-[#E85656]" data-lucide="handshake" strokeWidth="1.5"></i>
</div>
</div>
<div className="md:w-2/3 z-10 text-center md:text-left">
<h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#333333] mb-4">定期的な定着支援ミーティング</h3>
<p className="text-lg text-[#666666] leading-relaxed">外国人スタッフのメンタルケアや、日本人スタッフとの橋渡しを行う定期面談を実施。小さなほころびを早期に解決します。</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-gray-100">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-[#333333]">よくあるご質問ランキング</h2>
</div>
<div className="space-y-6">

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
<div className="p-8 flex items-start gap-6 relative">
<div className="absolute -top-3 -left-3 w-12 h-12 bg-[#E85656] text-white rounded flex items-center justify-center font-heading text-2xl font-medium transform rotate-[-5deg] shadow-sm">1</div>
<div className="flex-1 ml-6">
<h4 className="font-medium text-xl text-[#333333] mb-5 tracking-tight">法律やビザの知識が全くなくても大丈夫ですか？</h4>
<div className="bg-[#F9F8F6] rounded-xl p-6">
<p className="text-lg text-[#666666] leading-relaxed">はい、全く問題ありません。ガイドブックでは専門用語を極力避け、図解でわかりやすく解説しています。また、実際の申請時には専門家がフルサポートする体制もご用意しております。</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
<div className="p-8 flex items-start gap-6 relative">
<div className="absolute -top-3 -left-3 w-12 h-12 bg-[#E85656]/90 text-white rounded flex items-center justify-center font-heading text-2xl font-medium transform rotate-[-5deg] shadow-sm">2</div>
<div className="flex-1 ml-6">
<h4 className="font-medium text-xl text-[#333333] mb-5 tracking-tight">日本語レベルはどの程度の人材が来るのでしょうか？</h4>
<div className="bg-[#F9F8F6] rounded-xl p-6">
<p className="text-lg text-[#666666] leading-relaxed">特定技能ビザを取得するためには、日常会話程度の日本語能力（N4相当以上）と、介護に関する専門的な日本語テストに合格している必要があります。挨拶や基本的な業務指示の理解は可能なレベルです。</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FDECEE]" id="form">
<div className="max-w-3xl mx-auto">

<div className="bg-white rounded-t-[2rem] p-10 md:p-14 text-center border-b border-gray-100">
<div className="inline-block px-5 py-2 rounded-full bg-[#E85656] text-white text-sm font-normal mb-6">
                    期間限定 特典
                </div>
<h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#333333] mb-5">
                    「外国人スタッフ受け入れ」無料オンライン相談
                </h3>
<p className="text-lg text-[#666666] leading-relaxed">
                    本ページから資料をご請求いただいた施設長様限定で、専門家による個別相談（30分）を無料でご案内しております。
                </p>
</div>

<div className="bg-white rounded-b-[2rem] shadow-sm p-10 md:p-14">
<div className="text-center mb-10">
<h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#333333] mb-3">資料ダウンロードフォーム</h2>
<p className="text-base text-[#666666]">たった1分で入力完了。ご入力いただいたメールアドレス宛に資料をお送りします。</p>
</div>
<form className="space-y-6">
<div>
<label className="block text-lg font-medium text-[#333333] mb-2" htmlFor="facility">法人名・施設名 <span className="bg-[#E85656] text-white text-xs px-2 py-1 rounded ml-2 font-normal">必須</span></label>
<input className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-[#F9F8F6] focus:bg-white focus:ring-2 focus:ring-[#2EAA55]/20 focus:border-[#2EAA55] outline-none transition-colors text-lg" id="facility" name="facility" placeholder="例：社会福祉法人ひまわり会" required="" type="text"/>
</div>
<div>
<label className="block text-lg font-medium text-[#333333] mb-2" htmlFor="name">ご担当者様名 <span className="bg-[#E85656] text-white text-xs px-2 py-1 rounded ml-2 font-normal">必須</span></label>
<input className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-[#F9F8F6] focus:bg-white focus:ring-2 focus:ring-[#2EAA55]/20 focus:border-[#2EAA55] outline-none transition-colors text-lg" id="name" name="name" placeholder="例：佐藤 翔太" required="" type="text"/>
</div>
<div>
<label className="block text-lg font-medium text-[#333333] mb-2" htmlFor="email">メールアドレス <span className="bg-[#E85656] text-white text-xs px-2 py-1 rounded ml-2 font-normal">必須</span></label>
<input className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-[#F9F8F6] focus:bg-white focus:ring-2 focus:ring-[#2EAA55]/20 focus:border-[#2EAA55] outline-none transition-colors text-lg" id="email" name="email" placeholder="例：info@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-lg font-medium text-[#333333] mb-2" htmlFor="phone">電話番号 <span className="bg-[#E85656] text-white text-xs px-2 py-1 rounded ml-2 font-normal">必須</span></label>
<input className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-[#F9F8F6] focus:bg-white focus:ring-2 focus:ring-[#2EAA55]/20 focus:border-[#2EAA55] outline-none transition-colors text-lg" id="phone" name="phone" placeholder="例：03-1234-5678" required="" type="tel"/>
</div>
<div className="pt-8">
<button className="w-full flex justify-center items-center gap-3 rounded-full bg-[#2EAA55] text-white px-8 py-5 text-xl font-medium transition-all hover:bg-[#258a44] shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2EAA55]/20" type="submit">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
                            無料でガイドブックを受け取る
                            <i className="w-5 h-5 ml-2" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
<p className="text-center text-sm text-[#666666] mt-6">
                        ご入力いただいた個人情報は、プライバシーポリシーに基づき厳重に管理いたします。
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-white py-16 border-t border-gray-200">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="font-heading text-2xl font-medium tracking-tight text-[#333333] mb-8">GLOBAL CARE WIZ</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base text-[#666666] mb-10">
<a className="hover:text-[#2EAA55] transition-colors" href="#">運営会社</a>
<a className="hover:text-[#2EAA55] transition-colors" href="#">プライバシーポリシー</a>
<a className="hover:text-[#2EAA55] transition-colors" href="#">特定商取引法に基づく表示</a>
<a className="hover:text-[#2EAA55] transition-colors" href="#">お問い合わせ</a>
</div>
<p className="text-xs text-[#999999]">© GLOBAL CARE WIZ. All Rights Reserved.</p>
</div>
</footer>


    </>
  );
}
