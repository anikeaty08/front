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
      
        lucide.createIcons();
    
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
      
<div className="min-h-screen">

<header className="report-header animate-fade-in">
<div className="max-w-6xl mx-auto px-6 py-6">
<div className="flex justify-between items-start">
<div>
<h1 className="text-2xl font-semibold text-slate-800 tracking-tight mb-2">営業活動報告書</h1>
<div className="flex items-center space-x-4 text-sm text-slate-600">
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>報告日: 2024年3月15日</span>
</div>
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="user"></i>
<span>担当者: 田中 太郎</span>
</div>
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="building"></i>
<span>所属: 営業1部</span>
</div>
</div>
</div>
<div className="text-right">
<div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
<div className="text-xs text-slate-500 mb-1">作成日時</div>
<div className="text-sm font-medium text-slate-700">2024/03/15 17:30</div>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-6xl mx-auto px-6 py-6">

<section className="animate-fade-in stagger-1 mb-8">
<div className="section-title">営業実績サマリー</div>
<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
<div className="grid grid-cols-2 md:grid-cols-4">
<div className="p-4 border-r border-slate-200">
<div className="text-xs text-slate-500 mb-1">総営業活動数</div>
<div className="text-2xl font-semibold text-slate-800">12件</div>
<div className="text-xs text-slate-600 mt-1">前週比 +3件</div>
</div>
<div className="p-4 border-r border-slate-200">
<div className="text-xs text-slate-500 mb-1">受注件数</div>
<div className="text-2xl font-semibold text-emerald-600">3件</div>
<div className="text-xs text-slate-600 mt-1">受注率 25%</div>
</div>
<div className="p-4 border-r border-slate-200">
<div className="text-xs text-slate-500 mb-1">受注金額</div>
<div className="text-2xl font-semibold text-slate-800">¥2,850,000</div>
<div className="text-xs text-slate-600 mt-1">目標達成率 95%</div>
</div>
<div className="p-4">
<div className="text-xs text-slate-500 mb-1">継続案件</div>
<div className="text-2xl font-semibold text-slate-800">8件</div>
<div className="text-xs text-slate-600 mt-1">予想受注額 ¥4,200,000</div>
</div>
</div>
</div>
</section>

<section className="animate-fade-in stagger-2 mb-8">
<div className="section-title">営業活動詳細</div>
<div className="bg-white rounded-lg shadow-sm border border-slate-200">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">顧客名</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">活動内容</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">ステータス</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">予想金額</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">確度</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">次回予定</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 text-sm font-medium text-slate-800">株式会社ABC商事</td>
<td className="px-4 py-3 text-sm text-slate-600">システム導入提案プレゼンテーション</td>
<td className="px-4 py-3">
<span className="px-2 py-1 text-xs font-medium rounded-md status-high">契約交渉中</span>
</td>
<td className="px-4 py-3 text-sm font-medium text-slate-800">¥1,200,000</td>
<td className="px-4 py-3">
<div className="flex items-center">
<div className="w-16 bg-slate-200 rounded-full h-2 mr-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
<span className="text-sm text-slate-600">85%</span>
</div>
</td>
<td className="px-4 py-3 text-sm text-slate-600">2024/03/20</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 text-sm font-medium text-slate-800">XYZ株式会社</td>
<td className="px-4 py-3 text-sm text-slate-600">初回商談・課題ヒアリング</td>
<td className="px-4 py-3">
<span className="px-2 py-1 text-xs font-medium rounded-md status-medium">提案準備中</span>
</td>
<td className="px-4 py-3 text-sm font-medium text-slate-800">¥800,000</td>
<td className="px-4 py-3">
<div className="flex items-center">
<div className="w-16 bg-slate-200 rounded-full h-2 mr-2">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
</div>
<span className="text-sm text-slate-600">60%</span>
</div>
</td>
<td className="px-4 py-3 text-sm text-slate-600">2024/03/18</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 text-sm font-medium text-slate-800">株式会社PQR</td>
<td className="px-4 py-3 text-sm text-slate-600">カスタマイズ要望フォローアップ</td>
<td className="px-4 py-3">
<span className="px-2 py-1 text-xs font-medium rounded-md status-progress">検討中</span>
</td>
<td className="px-4 py-3 text-sm font-medium text-slate-800">¥950,000</td>
<td className="px-4 py-3">
<div className="flex items-center">
<div className="w-16 bg-slate-200 rounded-full h-2 mr-2">
<div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
</div>
<span className="text-sm text-slate-600">45%</span>
</div>
</td>
<td className="px-4 py-3 text-sm text-slate-600">2024/03/22</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 text-sm font-medium text-slate-800">RST商事株式会社</td>
<td className="px-4 py-3 text-sm text-slate-600">予算調整・機能削減提案</td>
<td className="px-4 py-3">
<span className="px-2 py-1 text-xs font-medium rounded-md status-low">課題対応中</span>
</td>
<td className="px-4 py-3 text-sm font-medium text-slate-800">¥600,000</td>
<td className="px-4 py-3">
<div className="flex items-center">
<div className="w-16 bg-slate-200 rounded-full h-2 mr-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
<span className="text-sm text-slate-600">25%</span>
</div>
</td>
<td className="px-4 py-3 text-sm text-slate-600">2024/03/25</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
<section className="animate-fade-in stagger-3">
<div className="section-title">受注実績</div>
<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
<div>
<div className="font-medium text-slate-800">株式会社DEF企業</div>
<div className="text-sm text-slate-600">CRMシステム導入案件</div>
<div className="text-xs text-slate-500 mt-1">受注日: 2024/03/14</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-emergreen-600">¥1,500,000</div>
<div className="text-xs text-slate-500">契約期間: 12ヶ月</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
<div>
<div className="font-medium text-slate-800">IJK株式会社</div>
<div className="text-sm text-slate-600">セキュリティ強化プロジェクト</div>
<div className="text-xs text-slate-500 mt-1">受注日: 2024/03/13</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-emerald-600">¥850,000</div>
<div className="text-xs text-slate-500">契約期間: 6ヶ月</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
<div>
<div className="font-medium text-slate-800">MNO合同会社</div>
<div className="text-sm text-slate-600">業務効率化システム</div>
<div className="text-xs text-slate-500 mt-1">受注日: 2024/03/12</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-emerald-600">¥500,000</div>
<div className="text-xs text-slate-500">契約期間: 3ヶ月</div>
</div>
</div>
</div>
</div>
</section>
<section className="animate-fade-in stagger-4">
<div className="section-title">失注分析</div>
<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
<div className="space-y-4">
<div className="p-3 bg-red-50 border border-red-200 rounded-lg">
<div className="flex items-center justify-between mb-2">
<div className="font-medium text-slate-800">GHI商事株式会社</div>
<div className="text-lg font-semibold text-red-600">¥900,000</div>
</div>
<div className="text-sm text-slate-600 mb-2">統合管理システム導入案件</div>
<div className="text-xs text-slate-500 mb-2">失注日: 2024/03/11</div>
<div className="bg-white p-2 rounded border">
<div className="text-xs font-medium text-slate-700 mb-1">失注理由:</div>
<div className="text-xs text-slate-600">価格競争力不足、競合他社の方が20%安価</div>
</div>
</div>
<div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
<div className="flex items-center justify-between mb-2">
<div className="font-medium text-slate-800">STU株式会社</div>
<div className="text-lg font-semibold text-yellow-600">¥650,000</div>
</div>
<div className="text-sm text-slate-600 mb-2">データ分析ツール導入</div>
<div className="text-xs text-slate-500 mb-2">保留日: 2024/03/10</div>
<div className="bg-white p-2 rounded border">
<div className="text-xs font-medium text-slate-700 mb-1">保留理由:</div>
<div className="text-xs text-slate-600">予算承認の遅延、次四半期まで判断延期</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="animate-fade-in stagger-5 mb-8">
<div className="section-title">アクションアイテム・次回予定</div>
<div className="bg-white rounded-lg shadow-sm border border-slate-200">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-4 border-r border-slate-200">
<h4 className="font-medium text-slate-800 mb-3">今週のアクション</h4>
<div className="space-y-2">
<div className="flex items-start space-x-2">
<div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
<div className="text-sm">
<div className="font-medium text-slate-800">ABC商事 契約書準備</div>
<div className="text-xs text-slate-500">期限: 2024/03/19</div>
</div>
</div>
<div className="flex items-start space-x-2">
<div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
<div className="text-sm">
<div className="font-medium text-slate-800">XYZ株式会社 提案資料作成</div>
<div className="text-xs text-slate-500">期限: 2024/03/17</div>
</div>
</div>
<div className="flex items-start space-x-2">
<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
<div className="text-sm">
<div className="font-medium text-slate-800">PQR社 技術要件詳細確認</div>
<div className="text-xs text-slate-500">期限: 2024/03/21</div>
</div>
</div>
<div className="flex items-start space-x-2">
<div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
<div className="text-sm">
<div className="font-medium text-slate-800">RST商事 予算再調整提案</div>
<div className="text-xs text-slate-500">期限: 2024/03/24</div>
</div>
</div>
</div>
</div>
<div className="p-4">
<h4 className="font-medium text-slate-800 mb-3">来週の商談予定</h4>
<div className="space-y-3">
<div className="p-2 bg-slate-50 rounded border">
<div className="text-sm font-medium text-slate-800">3月18日 (月) 14:00</div>
<div className="text-sm text-slate-600">XYZ株式会社 - 提案プレゼン</div>
<div className="text-xs text-slate-500">場所: 先方会議室</div>
</div>
<div className="p-2 bg-slate-50 rounded border">
<div className="text-sm font-medium text-slate-800">3月20日 (水) 10:00</div>
<div className="text-sm text-slate-600">ABC商事 - 契約条件確認</div>
<div className="text-xs text-slate-500">場所: 弊社会議室A</div>
</div>
<div className="p-2 bg-slate-50 rounded border">
<div className="text-sm font-medium text-slate-800">3月22日 (金) 15:30</div>
<div className="text-sm text-slate-600">PQR株式会社 - 技術仕様確認</div>
<div className="text-xs text-slate-500">場所: オンライン会議</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-fade-in stagger-6">
<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4 text-sm text-slate-600">
<span>承認者: 営業部長 山田 花子</span>
<span>•</span>
<span>確認日: 未確認</span>
</div>
<div className="flex items-center space-x-2">
<button className="px-4 py-2 text-sm border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">
                                PDFエクスポート
                            </button>
<button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                承認申請
                            </button>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
