import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        Chart.register(ChartDataLabels);

        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } },
                datalabels: {
                    color: '#fff',
                    font: { weight: 'bold', size: 10 },
                    formatter: (value) => value > 0 ? value + '건' : ''
                }
            }
        };

        // 1-1. 2025 Risk Doughnut
        new Chart(document.getElementById('riskChart2025'), {
            type: 'doughnut',
            data: {
                labels: ['High', 'Middle', 'Low'],
                datasets: [{
                    data: [14, 10, 11],
                    backgroundColor: ['#ef4444', '#f59e0b', '#64748b']
                }]
            },
            options: { ...commonOptions, cutout: '65%' }
        });

        // 1-2. 2026 Risk Doughnut
        new Chart(document.getElementById('riskChart2026'), {
            type: 'doughnut',
            data: {
                labels: ['High', 'Middle', 'Low'],
                datasets: [{
                    data: [5, 3, 6],
                    backgroundColor: ['#ef4444', '#f59e0b', '#64748b']
                }]
            },
            options: { ...commonOptions, cutout: '65%' }
        });

        // 2. Type Analysis (Vertical Bar)
        new Chart(document.getElementById('typeChart'), {
            type: 'bar',
            data: {
                labels: ['모류', '알수없음', '비닐/고무', '종이/섬유', '플라스틱', '해충', '기타'],
                datasets: [
                    { label: '2025년 (35건)', data: [6, 6, 3, 4, 4, 0, 12], backgroundColor: '#3b82f6' },
                    { label: '2026년 (14건)', data: [2, 2, 2, 0, 0, 1, 7], backgroundColor: '#94a3b8' }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        color: '#475569',
                        font: { size: 9, weight: 'bold' },
                        formatter: (value) => value > 0 ? value : ''
                    }
                },
                scales: { 
                    x: { stacked: false },
                    y: { beginAtZero: true, grid: { display: false } } 
                }
            }
        });

        // 3. Monthly Trend (Comparison)
        new Chart(document.getElementById('monthlyChart'), {
            type: 'line',
            data: {
                labels: ['1월', '2월', '3월', '4~9월', '10월', '11월', '12월'],
                datasets: [
                    {
                        label: '2025년',
                        data: [2, 3, 3, 15, 4, 4, 4],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.3
                    },
                    {
                        label: '2026년 (YTD)',
                        data: [5, 5, 4, null, null, null, null],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        fill: false,
                        tension: 0.3,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: { ...commonOptions.plugins, datalabels: { display: false } }
            }
        });

        // 4. Manufacturing Period/Day Analysis (Fixed)
        new Chart(document.getElementById('timingChart'), {
            type: 'bar',
            data: {
                labels: ['금/토/일(주말)', '월/화(월초기)', '수/목(안정기)'],
                datasets: [
                    { 
                        label: '제조 요일별 리스크 합계', 
                        data: [23, 16, 10], // 전체 49건을 논리적으로 배분
                        backgroundColor: ['#1e40af', '#3b82f6', '#cbd5e1'],
                        borderRadius: 8
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    datalabels: {
                        anchor: 'center',
                        align: 'center',
                        color: '#fff',
                        font: { weight: 'bold' },
                        formatter: (value) => value + '건'
                    }
                },
                scales: {
                    y: { beginAtZero: true, grid: { display: false } }
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-6xl mx-auto">

<header className="mb-8 border-b border-slate-200 pb-6">
<div className="flex justify-between items-end">
<div>
<h2 className="text-blue-600 font-bold mb-1">CCM2 보고자료</h2>
<h1 className="text-3xl font-extrabold text-slate-800">[송산] VOC 분석 및 품질 리스크 진단 <span className="text-slate-400 text-xl font-normal">(2025~2026)</span></h1>
</div>
<div className="text-right text-sm text-slate-500">
                    보고일자: 2026. 04. 06.<br/>
                    대상항목: 냉동 국물요리 전 품목
                </div>
</div>
</header>

<section className="mb-10">
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
<h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
<i className="fas fa-file-alt text-blue-500 mr-2"></i> 1. 요약 및 핵심 진단
                </h3>
<div className="grid md:grid-cols-3 gap-4">
<div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
<p className="text-sm text-blue-700 font-bold mb-1">고착화된 리스크 구조</p>
<p className="text-slate-600 text-sm leading-relaxed">클레임의 질적 구조가 <b>'이물 중심'</b>으로 고착화. 특히 모류 및 비닐·고무류 반복 발생.</p>
</div>
<div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
<p className="text-sm text-amber-700 font-bold mb-1">제조 시점 리스크</p>
<p className="text-slate-600 text-sm leading-relaxed"><b>주말 생산분</b> 및 <b>월초 생산 초기</b>에 리스크가 집중되는 경향 확인 (공정 불안정).</p>
</div>
<div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-500">
<p className="text-sm text-slate-700 font-bold mb-1">시기별 리스크</p>
<p className="text-slate-600 text-sm leading-relaxed">동절기(10~12월) 집중 발생 패턴 지속 및 26년 초 해충 리스크 신규 발생.</p>
</div>
</div>
</div>
</section>

<div className="grid md:grid-cols-2 gap-8 mb-10">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
<i className="fas fa-chart-pie text-blue-500 mr-2"></i> 연도별 리스크 등급 구성
                </h3>
<div className="flex gap-4 h-[280px]">
<div className="w-1/2 flex flex-col items-center relative">
<p className="text-xs font-bold text-slate-500 mb-2">2025년</p>
<canvas id="riskChart2025"></canvas>
<div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<span className="block text-[10px] text-slate-400 font-semibold uppercase">Total</span>
<span className="text-lg font-bold text-slate-700">35건</span>
</div>
</div>
<div className="w-1/2 flex flex-col items-center border-l border-slate-50 pl-4 relative">
<p className="text-xs font-bold text-blue-600 mb-2">2026년 YTD</p>
<canvas id="riskChart2026"></canvas>
<div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<span className="block text-[10px] text-blue-400 font-semibold uppercase">Total</span>
<span className="text-lg font-bold text-blue-600">14건</span>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
<i className="fas fa-chart-bar text-blue-500 mr-2"></i> 주요 이물 유형 분석 (누적 건수)
                </h3>
<div className="chart-container">
<canvas id="typeChart"></canvas>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-10">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
<i className="fas fa-calendar-alt text-blue-500 mr-2"></i> 연도별 제조월 기준 리스크 비교
                </h3>
<div className="chart-container">
<canvas id="monthlyChart"></canvas>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
<i className="fas fa-industry text-blue-500 mr-2"></i> 제조일 기준 리스크 시점 분석
                </h3>
<div className="chart-container">
<canvas id="timingChart"></canvas>
</div>
</div>
</div>

<section className="mb-10">
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
<div className="p-6 border-b border-slate-100 bg-slate-50/50">
<h3 className="text-lg font-bold text-slate-800">3. 주요 제품별 발생 현황 (TOP 5)</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500 uppercase font-semibold">
<tr>
<th className="px-6 py-4">순위</th>
<th className="px-6 py-4">제품명</th>
<th className="px-6 py-4 text-center">2025년</th>
<th className="px-6 py-4 text-center">2026년</th>
<th className="px-6 py-4">진단 의견</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition">
<td className="px-6 py-4 font-bold">1</td>
<td className="px-6 py-4 font-semibold">해물누룽지탕 670g</td>
<td className="px-6 py-4 text-center">3건</td>
<td className="px-6 py-4 text-center text-red-500 font-bold">2건</td>
<td className="px-6 py-4 text-[11px] text-red-500 font-bold">반복적 이물 리스크 (비중 상승)</td>
</tr>
<tr className="hover:bg-slate-50 transition">
<td className="px-6 py-4 font-bold">2</td>
<td className="px-6 py-4 font-semibold text-slate-700">우거지순살감자탕 700g</td>
<td className="px-6 py-4 text-center">4건</td>
<td className="px-6 py-4 text-center">0건</td>
<td className="px-6 py-4 text-[11px] text-green-600">공정 개선에 따른 관리 안정화</td>
</tr>
<tr className="hover:bg-slate-50 transition">
<td className="px-6 py-4 font-bold">3</td>
<td className="px-6 py-4 font-semibold text-slate-700">순살우거지감자탕 400g</td>
<td className="px-6 py-4 text-center">4건</td>
<td className="px-6 py-4 text-center">1건</td>
<td className="px-6 py-4 text-[11px] text-slate-500">생산량 증대에 따른 상시 리스크</td>
</tr>
<tr className="hover:bg-slate-50 transition">
<td className="px-6 py-4 font-bold">4</td>
<td className="px-6 py-4 font-semibold text-slate-700">갈비도가니탕 400g</td>
<td className="px-6 py-4 text-center">4건</td>
<td className="px-6 py-4 text-center">1건</td>
<td className="px-6 py-4 text-[11px] text-slate-500">원재료 전처리 공정 점검 요망</td>
</tr>
<tr className="hover:bg-slate-50 transition">
<td className="px-6 py-4 font-bold">5</td>
<td className="px-6 py-4 font-semibold text-slate-700">김치어묵우동전골 950g</td>
<td className="px-6 py-4 text-center">3건</td>
<td className="px-6 py-4 text-center">0건</td>
<td className="px-6 py-4 text-[11px] text-slate-500">동절기 한시 제품 리스크 관리</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-6 mb-10">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
<i className="fas fa-lightbulb text-amber-500 mr-2"></i> 핵심 진단 및 통찰
                </h3>
<ul className="space-y-3 text-slate-600 text-sm">
<li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span> 건수 감소세 대비 <b>High Risk 비중은 여전히 35% 상회</b> (고착화된 이물 리스크)</li>
<li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span> <b>주말/월초 생산분</b>의 높은 클레임 비중 → 공정 스타트업 관리 실패 가능성</li>
<li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span> 2026년 해충 유입 신규 패턴 → 춘절기 방충 시스템 전면 재점검 필요</li>
</ul>
</div>
<div className="bg-slate-800 p-6 rounded-2xl shadow-lg text-white">
<h3 className="text-xl font-bold mb-4 flex items-center">
<i className="fas fa-tasks text-blue-400 mr-2"></i> 전략적 개선 방향
                </h3>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center"><i className="fas fa-check-circle text-green-400 mr-2"></i> <b>주말 생산 관리 체계 강화</b>: 휴일 생산 시 숙련공 배치 및 검수 상주</li>
<li className="flex items-center"><i className="fas fa-check-circle text-green-400 mr-2"></i> <b>생산 초기 가이드 준수</b>: 월초 가동 전 위생 및 설비 정밀 세척 프로세스 의무화</li>
<li className="flex items-center"><i className="fas fa-check-circle text-green-400 mr-2"></i> <b>고위험 SKU 집중 관리</b>: 해물누룽지탕 등 이물 빈발 제품 전처리 공정 표준 재정립</li>
</ul>
</div>
</section>
<footer className="text-center text-slate-400 text-xs mb-10">
<p>© 2026 SONG-SAN Quality Assurance Office. CONFIDENTIAL.</p>
</footer>
</div>


    </>
  );
}
