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



        Chart.register(ChartDataLabels);

        // 27SS 기획 데이터 셋
        const planningData = [
            { id: 'JK', currentWS: 63, currentWM: 37, currentWL: 0, newWL: 'YES', planWS: 25, planWM: 55, planWL: 20, note: 'WM 과부하 해소 위해 WL 20% 신설' },
            { id: 'SH', currentWS: 69, currentWM: 31, currentWL: 0, newWL: 'YES', planWS: 20, planWM: 60, planWL: 20, note: '트렌드 반영 WL 라인업 필수' },
            { id: 'LT', currentWS: 61, currentWM: 39, currentWL: 0, newWL: 'YES', planWS: 30, planWM: 55, planWL: 15, note: '사이즈 가이드 전면 개편 요망' },
            { id: 'KT', currentWS: 54, currentWM: 46, currentWL: 0, newWL: 'LOW', planWS: 35, planWM: 65, planWL: 0, note: 'WM 집중화 (WS 물량 20% 삭감)' },
            { id: 'SS', currentWS: 57, currentWM: 43, currentWL: 0, newWL: 'NO', planWS: 45, planWM: 55, planWL: 0, note: 'WS 비중 높은 카테고리 (유지)' },
            { id: 'CR', currentWS: 61, currentWM: 39, currentWL: 0, newWL: 'MID', planWS: 30, planWM: 60, planWL: 10, note: 'WL 10% 캡슐 라인 테스트 도입' }
        ];

        // 테이블 렌더링
        const planningTableBody = document.getElementById('planningTableBody');
        planningData.forEach(item => {
            const wlStatusColor = item.newWL === 'YES' ? 'text-blue-600 font-black' : item.newWL === 'MID' ? 'text-amber-500 font-bold' : 'text-slate-400';
            const row = `<tr>
                <td class="font-black text-slate-800 text-sm uppercase">${item.id}</td>
                <td class="text-slate-400 font-medium">${item.currentWS}%</td>
                <td class="text-slate-400 font-medium">${item.currentWM}%</td>
                <td class="text-slate-300 font-medium">${item.currentWL}%</td>
                <td class="bg-indigo-50 font-black ${wlStatusColor} italic">${item.newWL}</td>
                <td class="font-bold text-slate-700 bg-slate-50">${item.planWS}%</td>
                <td class="font-black text-indigo-700 bg-indigo-50 italic">${item.planWM}%</td>
                <td class="font-black text-blue-700 bg-blue-50 italic">${item.planWL}%</td>
                <td class="text-[10px] text-left pl-4 font-medium italic text-slate-500 tracking-tighter">${item.note}</td>
            </tr>`;
            planningTableBody.innerHTML += row;
        });

        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10, weight: 'bold' } } },
                datalabels: { display: false }
            }
        };

        // 1. WM 효율 격차 차트 (26SS 복습)
        new Chart(document.getElementById('wmGapChart'), {
            type: 'bar',
            data: {
                labels: ['JK', 'SH', 'LT', 'KT', 'SS'],
                datasets: [
                    { label: '26SS WM 입고 비중(%)', data: [37, 34, 39, 44, 43], backgroundColor: '#e2e8f0' },
                    { label: '26SS WM 판매 비중(%)', data: [46, 44, 45, 46, 42], backgroundColor: '#4f46e5' }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    datalabels: { 
                        display: true, anchor: 'end', align: 'top', font: { size: 9, weight: 'bold' },
                        formatter: (v) => v + '%'
                    }
                },
                scales: { x: { grid: { display: false } }, y: { display: false } }
            }
        });

        // 2. 27SS 제안 사이즈 구성 시뮬레이션 (Stacked Bar)
        new Chart(document.getElementById('proposedMixChart'), {
            type: 'bar',
            data: {
                labels: ['JK (Plan)', 'SH (Plan)', 'LT (Plan)', 'KT (Plan)'],
                datasets: [
                    { label: 'WS (Plan)', data: [25, 20, 30, 35], backgroundColor: '#94a3b8' },
                    { label: 'WM (Plan)', data: [55, 60, 55, 65], backgroundColor: '#4f46e5' },
                    { label: 'WL (Plan)', data: [20, 20, 15, 0], backgroundColor: '#3b82f6' }
                ]
            },
            options: {
                ...commonOptions,
                scales: { x: { stacked: true }, y: { stacked: true, max: 100 } }
            }
        });
    
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
      
<div className="max-w-[1600px] mx-auto">

<header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded font-black tracking-widest uppercase">27SS Strategic Planning</span>
<span className="text-indigo-600 font-bold text-xs">영업전략본부 MD 파트 사이즈 최적화 로드맵</span>
</div>
<h1 className="text-3xl font-black text-slate-900 tracking-tighter">
                    26SS 데이터 기반 <span className="text-indigo-700">27SS 복종별 사이즈 구성</span> 최적화 제언
                </h1>
<p className="text-slate-500 mt-1 text-sm">※ WM 과부하 복종 WL 신규 도입 및 사이즈별 OTB(Open-To-Buy) 재배분 전략</p>
</div>
<div className="mt-4 md:mt-0 flex gap-8 text-right divide-x divide-slate-200">
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase">Reporting Date</p>
<p className="text-sm font-bold text-slate-700 italic">26SS YTD (Apr 05)</p>
</div>
<div className="pl-8">
<p className="text-[10px] text-slate-400 font-bold uppercase">Target Season</p>
<p className="text-sm font-bold text-indigo-800 underline underline-offset-4 tracking-tighter">27SS Production Plan</p>
</div>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-center">
<div className="glass-card p-5 border-t-4 border-t-blue-600">
<p className="text-slate-400 text-[11px] font-bold mb-2 uppercase tracking-widest font-black">WL 도입 권고 복종 수</p>
<div className="flex items-baseline justify-center gap-2">
<span className="kpi-value text-blue-700">3<span className="text-lg font-bold ml-1 text-slate-400 font-normal">개군</span></span>
</div>
<p className="text-[10px] text-slate-400 mt-2 italic font-medium">JK, SH, LT 우선 도입 대상</p>
</div>
<div className="glass-card p-5 border-t-4 border-t-indigo-600">
<p className="text-slate-400 text-[11px] font-bold mb-2 uppercase tracking-widest font-black">27SS 타겟 WM 비중</p>
<div className="flex items-baseline justify-center gap-2">
<span className="kpi-value text-indigo-700">55%</span>
</div>
<p className="text-[10px] text-indigo-600 mt-2 font-bold uppercase tracking-tighter">● 핵심 사이즈 결품 방지 타겟</p>
</div>
<div className="glass-card p-5 border-t-4 border-t-amber-500">
<p className="text-slate-400 text-[11px] font-bold mb-2 uppercase tracking-widest font-black">WS 사이즈 축소 권고</p>
<div className="flex items-baseline justify-center gap-2 text-amber-600">
<span className="kpi-value">-15%</span>
</div>
<p className="text-[10px] text-slate-400 mt-2 font-medium italic">재고 회전 부진 사이즈 물량 조정</p>
</div>
<div className="glass-card p-5 border-t-4 border-t-slate-800 bg-slate-50 text-left">
<p className="text-slate-400 text-[11px] font-bold mb-2 uppercase tracking-widest font-black">27SS 생산 가이드</p>
<div className="space-y-1 mt-1 text-[11px]">
<p className="font-bold text-slate-700"><i className="fas fa-check text-green-500 mr-1"></i> WM: 결품방지 세이프티 스톡</p>
<p className="font-bold text-slate-700"><i className="fas fa-plus text-blue-500 mr-1"></i> WL: 20% 신규 라인업 셋업</p>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card p-6">
<h3 className="text-sm font-black text-slate-800 mb-4 border-l-4 border-indigo-600 pl-3 uppercase italic">26SS WM Size Efficiency Gap Analysis</h3>
<div className="chart-container">
<canvas id="wmGapChart"></canvas>
</div>
<p className="mt-4 text-[10px] text-slate-400 italic font-medium leading-tight">
                        * 분석: JK, SH 복종의 WM 판매 비중격차(+9%p 이상)는 <b>WL 수요가 WM에 잠식</b>되어 있음을 증명함.
                    </p>
</div>

<div className="glass-card p-6">
<h3 className="text-sm font-black text-slate-800 mb-4 border-l-4 border-blue-600 pl-3 uppercase italic">27SS Proposed Size Mix Strategy</h3>
<div className="chart-container">
<canvas id="proposedMixChart"></canvas>
</div>
<p className="mt-4 text-[10px] text-slate-400 italic font-medium leading-tight">
                        * 기획: WL 사이즈를 20% 신규 투입하고 WS 비중을 조정하여 <b>사이즈 밸런스 지수</b> 개선.
                    </p>
</div>
</div>

<div className="lg:col-span-1 space-y-4">
<div className="glass-card p-6 h-full bg-slate-900 text-white shadow-2xl border-none">
<h3 className="text-lg font-black mb-6 flex items-center gap-2 border-b border-slate-700 pb-3 italic text-indigo-400">
<i className="fas fa-pencil-ruler"></i> 27SS Planning Strategy
                    </h3>
<div className="space-y-6">
<div className="sidebar-section border-l-blue-400">
<p className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-1">Strategy 01: WL 런칭</p>
<h4 className="text-sm font-black mb-2 uppercase text-white">Expansion Category</h4>
<p className="text-[11px] text-slate-400 leading-relaxed italic">
                                JK(자켓)와 SH(반바지)는 오버사이즈 및 루즈핏 트렌드 지속으로 <b>WL 수요가 20% 이상</b> 존재함. 차기 시즌 필수 셋업.
                            </p>
</div>
<div className="sidebar-section border-l-amber-400">
<p className="text-[11px] font-bold text-amber-400 uppercase tracking-widest mb-1">Strategy 02: WM 집중화</p>
<h4 className="text-sm font-black mb-2 uppercase text-white">Core Volume CATEGORY</h4>
<p className="text-[11px] text-slate-400 leading-relaxed italic">
                                KT, LT 등 기본 복종은 WM 판매율이 독보적. <b>WS 물량을 10% 축소</b>하고 이를 WM 스톡으로 전환하여 회전율 극대화.
                            </p>
</div>
<div className="sidebar-section border-l-red-500">
<p className="text-[11px] font-bold text-red-400 uppercase tracking-widest mb-1">Risk Avoidance</p>
<h4 className="text-sm font-black mb-2 uppercase text-white">Size Inventory Optimization</h4>
<p className="text-[11px] text-slate-300 leading-relaxed font-bold underline underline-offset-4">
                                WS 사이즈의 이월 재고 비중이 35% 상회. 27SS 발주 시 <span className="text-red-400">WS 배수를 현행 0.8에서 0.5로 하향</span> 조정 권고.
                            </p>
</div>
</div>
</div>
</div>
</div>

<section className="glass-card overflow-hidden mb-10 border-t-4 border-t-indigo-800 shadow-xl">
<div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
<h3 className="text-sm font-black text-slate-800 uppercase italic tracking-tighter"><i className="fas fa-layer-group mr-2 text-indigo-600"></i> Category Size Portfolio Roadmap (27SS Planning)</h3>
<span className="text-[10px] font-black text-indigo-600 italic uppercase bg-indigo-50 px-2 py-1 rounded">Confidential Report</span>
</div>
<div className="overflow-x-auto">
<table>
<thead>
<tr>
<th rowspan="2">복종</th>
<th className="bg-slate-700 border-b border-slate-600" colspan="3">26SS 현행 비중 (%)</th>
<th className="bg-indigo-900" rowspan="2">WL 신규 도입</th>
<th className="bg-indigo-800 border-b border-indigo-700 italic" colspan="3">27SS 제안 비중 (Plan)</th>
<th className="bg-slate-700" rowspan="2">MD Planning Note</th>
</tr>
<tr>
<th className="bg-slate-600 text-[10px]">WS</th>
<th className="bg-slate-600 text-[10px]">WM</th>
<th className="bg-slate-600 text-[10px]">WL</th>
<th className="bg-indigo-700 text-[10px]">WS</th>
<th className="bg-indigo-700 text-[10px]">WM</th>
<th className="bg-indigo-700 text-[10px]">WL</th>
</tr>
</thead>
<tbody id="planningTableBody">

</tbody>
</table>
</div>
</section>
<footer className="text-center text-slate-400 text-[10px] pb-10 border-t border-slate-200 pt-8 uppercase tracking-widest">
<p>© 2026 SONG-SAN Fashion Merchandising Division. DATA-DRIVEN STRATEGY FOR 27SS.</p>
</footer>
</div>


    </>
  );
}
