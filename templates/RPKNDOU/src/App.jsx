import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="animate-fade-in rounded-lg mx-2 mt-2 shadow-sm" style={{backgroundColor: 'var(--color-global-white)', border: '1px solid var(--color-global-border)'}}>
<div className="max-w-4xl mx-auto px-3">
<div className="flex justify-between items-center h-10">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{backgroundColor: 'var(--color-light-blue)'}}>
<i className="w-3 h-3" data-lucide="bar-chart-3" style={{color: 'var(--color-main-primary)'}}></i>
</div>
<h1 className="text-xs font-semibold" style={{color: 'var(--color-global-black)'}}>営業日報要約</h1>
</div>
<div className="flex items-center space-x-2">
<span className="text-xs px-2 py-1 rounded-md" style={{color: 'var(--color-global-passive)', backgroundColor: 'var(--color-global-bright)'}}>2024年3月15日</span>
<button className="px-3 py-1 text-xs font-medium rounded-md transition-all" onmouseout="this.style.backgroundColor='var(--color-main-primary)'" onmouseover="this.style.backgroundColor='var(--color-main-secondary)'" style={{backgroundColor: 'var(--color-main-primary)', color: 'var(--color-global-white)'}}>
                            レポート出力
                        </button>
</div>
</div>
</div>
</header>
<main className="max-w-4xl mx-auto px-3 py-2">

<section className="mb-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<div className="animate-slide-up stagger-1 bg-white rounded-lg p-3 shadow-sm border" style={{borderColor: 'var(--color-global-border)'}}>
<div className="text-lg font-semibold mb-0.5" style={{color: 'var(--color-global-black)'}}>12</div>
<div className="text-xs" style={{color: 'var(--color-global-passive)'}}>総営業活動</div>
</div>
<div className="animate-slide-up stagger-2 rounded-lg p-3 shadow-sm border" style={{backgroundColor: 'var(--color-light-green)', borderColor: 'var(--color-main-success)'}}>
<div className="text-lg font-semibold mb-0.5" style={{color: 'var(--color-main-success)'}}>3</div>
<div className="text-xs" style={{color: 'var(--color-global-passive)'}}>受注件数</div>
</div>
<div className="animate-slide-up stagger-3 bg-white rounded-lg p-3 shadow-sm border" style={{borderColor: 'var(--color-global-border)'}}>
<div className="text-sm font-semibold mb-0.5" style={{color: 'var(--color-global-black)'}}>¥285万</div>
<div className="text-xs" style={{color: 'var(--color-global-passive)'}}>受注金額</div>
</div>
<div className="animate-slide-up stagger-4 bg-white rounded-lg p-3 shadow-sm border" style={{borderColor: 'var(--color-global-border)'}}>
<div className="text-lg font-semibold mb-0.5" style={{color: 'var(--color-global-black)'}}>8</div>
<div className="text-xs" style={{color: 'var(--color-global-passive)'}}>パイプライン</div>
</div>
</div>
</section>

<section className="animate-slide-up stagger-5 mb-4">
<h2 className="text-xs font-semibold mb-3" style={{color: 'var(--color-global-black)'}}>営業活動サマリー</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="bg-white p-3 rounded-lg section-hover transition-all shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex items-start justify-between mb-1">
<div className="flex items-center space-x-1.5">
<div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-main-success)'}}></div>
<h3 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>ABC商事 - 提案プレゼン</h3>
</div>
<span className="text-xs px-1.5 py-0.5 rounded-md" style={{color: 'var(--color-main-success)', backgroundColor: 'var(--color-light-green)'}}>高確度</span>
</div>
<p className="text-xs mb-1.5 leading-relaxed" style={{color: 'var(--color-global-unselected)'}}>システム導入の最終提案実施。好感触、予算承認待ち。</p>
<div className="flex items-center justify-between text-xs" style={{color: 'var(--color-global-passive)'}}>
<span>成約可能性: 85%</span>
<span>次回: 3/20</span>
</div>
</div>
<div className="bg-white p-3 rounded-lg section-hover transition-all shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex items-start justify-between mb-1">
<div className="flex items-center space-x-1.5">
<div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-main-warning)'}}></div>
<h3 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>XYZ株式会社 - 初回商談</h3>
</div>
<span className="text-xs px-1.5 py-0.5 rounded-md" style={{color: 'var(--color-main-warning)', backgroundColor: 'var(--color-light-orange)'}}>中確度</span>
</div>
<p className="text-xs mb-1.5 leading-relaxed" style={{color: 'var(--color-global-unselected)'}}>課題ヒアリング実施。コスト削減への関心高く、提案資料依頼。</p>
<div className="flex items-center justify-between text-xs" style={{color: 'var(--color-global-passive)'}}>
<span>成約可能性: 60%</span>
<span>次回: 3/18</span>
</div>
</div>
<div className="bg-white p-3 rounded-lg section-hover transition-all shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex items-start justify-between mb-1">
<div className="flex items-center space-x-1.5">
<div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-main-primary)'}}></div>
<h3 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>PQR会社 - フォローアップ</h3>
</div>
<span className="text-xs px-1.5 py-0.5 rounded-md" style={{color: 'var(--color-main-primary)', backgroundColor: 'var(--color-light-blue)'}}>検討中</span>
</div>
<p className="text-xs mb-1.5 leading-relaxed" style={{color: 'var(--color-global-unselected)'}}>追加機能の詳細確認。カスタマイズ要望の検討。</p>
<div className="flex items-center justify-between text-xs" style={{color: 'var(--color-global-passive)'}}>
<span>成約可能性: 45%</span>
<span>次回: 3/22</span>
</div>
</div>
<div className="bg-white p-3 rounded-lg section-hover transition-all shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex items-start justify-between mb-1">
<div className="flex items-center space-x-1.5">
<div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-main-error)'}}></div>
<h3 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>RST商事 - 予算超過</h3>
</div>
<span className="text-xs px-1.5 py-0.5 rounded-md" style={{color: 'var(--color-main-error)', backgroundColor: 'var(--color-light-red)'}}>課題</span>
</div>
<p className="text-xs mb-1.5 leading-relaxed" style={{color: 'var(--color-global-unselected)'}}>提案金額が予算を超過。機能削減での再提案を検討。</p>
<div className="flex items-center justify-between text-xs" style={{color: 'var(--color-global-passive)'}}>
<span>成約可能性: 25%</span>
<span>次回: 3/25</span>
</div>
</div>
</div>
</section>

<section className="animate-slide-up stagger-6 mb-4">
<h2 className="text-xs font-semibold mb-3" style={{color: 'var(--color-global-black)'}}>パイプライン案件</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="bg-white p-3 rounded-lg section-hover transition-all shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex justify-between items-start mb-1">
<h4 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>デジタル化推進</h4>
<span className="text-xs font-semibold" style={{color: 'var(--color-main-success)'}}>¥120万</span>
</div>
<p className="text-xs mb-2" style={{color: 'var(--color-global-unselected)'}}>ABC商事</p>
<div className="flex items-center justify-between">
<span className="text-xs px-1.5 py-0.5 rounded-md" style={{backgroundColor: 'var(--color-label-blue)', color: 'var(--color-point-blue)'}}>契約交渉</span>
<div className="flex items-center space-x-1">
<div className="w-8 h-1 rounded-full" style={{backgroundColor: 'var(--color-global-border)'}}>
<div className="h-1 rounded-full" style={{width: '85%', backgroundColor: 'var(--color-main-success)'}}></div>
</div>
<span className="text-xs" style={{color: 'var(--color-global-passive)'}}>85%</span>
</div>
</div>
</div>
<div className="bg-white p-3 rounded-lg section-hover transition-all shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex justify-between items-start mb-1">
<h4 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>業務効率化</h4>
<span className="text-xs font-semibold" style={{color: 'var(--color-global-unselected)'}}>¥80万</span>
</div>
<p className="text-xs mb-2" style={{color: 'var(--color-global-unselected)'}}>XYZ株式会社</p>
<div className="flex items-center justify-between">
<span className="text-xs px-1.5 py-0.5 rounded-md" style={{backgroundColor: 'var(--color-label-orange)', color: 'var(--color-point-orange)'}}>提案中</span>
<div className="flex items-center space-x-1">
<div className="w-8 h-1 rounded-full" style={{backgroundColor: 'var(--color-global-border)'}}>
<div className="h-1 rounded-full" style={{width: '60%', backgroundColor: 'var(--color-main-warning)'}}></div>
</div>
<span className="text-xs" style={{color: 'var(--color-global-passive)'}}>60%</span>
</div>
</div>
</div>
<div className="bg-white p-3 rounded-lg section-hover transition-all shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex justify-between items-start mb-1">
<h4 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>DXソリューション</h4>
<span className="text-xs font-semibold" style={{color: 'var(--color-global-unselected)'}}>¥200万</span>
</div>
<p className="text-xs mb-2" style={{color: 'var(--color-global-unselected)'}}>MNO株式会社</p>
<div className="flex items-center justify-between">
<span className="text-xs px-1.5 py-0.5 rounded-md" style={{backgroundColor: 'var(--color-label-green)', color: 'var(--color-point-green)'}}>ヒアリング</span>
<div className="flex items-center space-x-1">
<div className="w-8 h-1 rounded-full" style={{backgroundColor: 'var(--color-global-border)'}}>
<div className="h-1 rounded-full" style={{width: '30%', backgroundColor: 'var(--color-main-primary)'}}></div>
</div>
<span className="text-xs" style={{color: 'var(--color-global-passive)'}}>30%</span>
</div>
</div>
</div>
</div>
</section>

<section className="animate-slide-up stagger-7 mb-4">
<h2 className="text-xs font-semibold mb-3" style={{color: 'var(--color-global-black)'}}>受注・失注</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="p-3 rounded-lg shadow-sm" style={{border: '1px solid var(--color-main-success)', backgroundColor: 'var(--color-light-green)'}}>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center space-x-1.5">
<i className="w-3 h-3" data-lucide="check" style={{color: 'var(--color-main-success)'}}></i>
<span className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>受注</span>
</div>
<span className="text-xs font-semibold" style={{color: 'var(--color-main-success)'}}>¥150万</span>
</div>
<p className="text-xs" style={{color: 'var(--color-global-unselected)'}}>DEF企業 - CRMシステム</p>
</div>
<div className="p-3 rounded-lg shadow-sm" style={{border: '1px solid var(--color-main-success)', backgroundColor: 'var(--color-light-green)'}}>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center space-x-1.5">
<i className="w-3 h-3" data-lucide="check" style={{color: 'var(--color-main-success)'}}></i>
<span className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>受注</span>
</div>
<span className="text-xs font-semibold" style={{color: 'var(--color-main-success)'}}>¥85万</span>
</div>
<p className="text-xs" style={{color: 'var(--color-global-unselected)'}}>IJK会社 - セキュリティ強化</p>
</div>
<div className="p-3 rounded-lg shadow-sm" style={{border: '1px solid var(--color-main-error)', backgroundColor: 'var(--color-light-red)'}}>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center space-x-1.5">
<i className="w-3 h-3" data-lucide="x" style={{color: 'var(--color-main-error)'}}></i>
<span className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>失注</span>
</div>
<span className="text-xs font-semibold" style={{color: 'var(--color-main-error)'}}>¥90万</span>
</div>
<p className="text-xs" style={{color: 'var(--color-global-unselected)'}}>GHI商事 - 価格競争力不足</p>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<section className="animate-slide-up stagger-7">
<h2 className="text-xs font-semibold mb-3" style={{color: 'var(--color-global-black)'}}>本日のQ&amp;A</h2>
<div className="space-y-3">
<div className="bg-white p-3 rounded-lg shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex items-start space-x-1.5 mb-2">
<span className="text-xs font-semibold px-1 py-0.5 rounded" style={{color: 'var(--color-main-primary)', backgroundColor: 'var(--color-light-blue)'}}>Q</span>
<h4 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>クラウド移行の費用対効果は？</h4>
</div>
<div className="flex items-start space-x-1.5">
<span className="text-xs font-semibold px-1 py-0.5 rounded" style={{color: 'var(--color-main-success)', backgroundColor: 'var(--color-light-green)'}}>A</span>
<p className="text-xs" style={{color: 'var(--color-global-unselected)'}}>3年以内に投資回収可能。具体的試算資料をご提示。</p>
</div>
</div>
<div className="bg-white p-3 rounded-lg shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex items-start space-x-1.5 mb-2">
<span className="text-xs font-semibold px-1 py-0.5 rounded" style={{color: 'var(--color-main-primary)', backgroundColor: 'var(--color-light-blue)'}}>Q</span>
<h4 className="text-xs font-medium" style={{color: 'var(--color-global-black)'}}>セキュリティ対策の詳細は？</h4>
</div>
<div className="flex items-start space-x-1.5">
<span className="text-xs font-semibold px-1 py-0.5 rounded" style={{color: 'var(--color-main-success)', backgroundColor: 'var(--color-light-green)'}}>A</span>
<p className="text-xs" style={{color: 'var(--color-global-unselected)'}}>多層防御システムを導入。定期的なセキュリティ監査実施。</p>
</div>
</div>
</div>
</section>

<div className="space-y-4">

<section className="animate-slide-up stagger-8">
<h2 className="text-xs font-semibold mb-3" style={{color: 'var(--color-global-black)'}}>感情分析</h2>
<div className="bg-white p-3 rounded-lg shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="flex items-center justify-between mb-3">
<span className="text-xs" style={{color: 'var(--color-global-unselected)'}}>全体的な傾向</span>
<span className="text-xs font-semibold px-1.5 py-0.5 rounded-md" style={{color: 'var(--color-main-success)', backgroundColor: 'var(--color-light-green)'}}>ポジティブ</span>
</div>
<div className="grid grid-cols-3 gap-2 text-xs">
<div className="text-center p-2 rounded-md" style={{backgroundColor: 'var(--color-light-green)'}}>
<div className="text-sm font-semibold mb-0.5" style={{color: 'var(--color-main-success)'}}>75%</div>
<div style={{color: 'var(--color-global-passive)'}}>ポジティブ</div>
</div>
<div className="text-center p-2 rounded-md" style={{backgroundColor: 'var(--color-global-bright)'}}>
<div className="text-sm font-semibold mb-0.5" style={{color: 'var(--color-global-unselected)'}}>20%</div>
<div style={{color: 'var(--color-global-passive)'}}>ニュートラル</div>
</div>
<div className="text-center p-2 rounded-md" style={{backgroundColor: 'var(--color-light-red)'}}>
<div className="text-sm font-semibold mb-0.5" style={{color: 'var(--color-main-error)'}}>5%</div>
<div style={{color: 'var(--color-global-passive)'}}>ネガティブ</div>
</div>
</div>
</div>
</section>

<section className="animate-slide-up stagger-8">
<h2 className="text-xs font-semibold mb-3" style={{color: 'var(--color-global-black)'}}>アクションアイテム</h2>
<div className="bg-white p-3 rounded-lg shadow-sm" style={{border: '1px solid var(--color-global-border)'}}>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-1 h-1 rounded-full" style={{backgroundColor: 'var(--color-main-warning)'}}></div>
<span className="text-xs" style={{color: 'var(--color-global-unselected)'}}>ABC商事への契約書準備</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 rounded-full" style={{backgroundColor: 'var(--color-main-warning)'}}></div>
<span className="text-xs" style={{color: 'var(--color-global-unselected)'}}>XYZ株式会社への提案資料作成</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 rounded-full" style={{backgroundColor: 'var(--color-main-warning)'}}></div>
<span className="text-xs" style={{color: 'var(--color-global-unselected)'}}>MNO株式会社への詳細ヒアリング</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 rounded-full" style={{backgroundColor: 'var(--color-main-error)'}}></div>
<span className="text-xs" style={{color: 'var(--color-global-unselected)'}}>RST商事の予算調整フォロー</span>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
</div>


    </>
  );
}
