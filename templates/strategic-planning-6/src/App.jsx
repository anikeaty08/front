import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

<header className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-gray-200">
<div className="space-y-3">
<div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-700 tracking-wide">
                    27SS STRATEGIC PLANNING
                </div>
<h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-slate-900">
                    26SS 데이터 기반 27SS WL 사이즈 복종별 도입 타당성 분석
                </h1>
<p className="text-lg text-slate-500 font-normal">
                    WL 사이즈 판매 효율 분석 및 27SS 전개 전략 제언
                </p>
</div>
<div className="flex flex-col items-start lg:items-end text-sm text-slate-500 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
<div className="flex items-center gap-1.5 mb-1.5 text-slate-700 font-medium">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
<span>REPORTING TIMELINE</span>
</div>
<div>DATA: 25SS Final (Sep 30) / 26SS YTD (Apr 05)</div>
<div>TARGET: 27SS Production Plan</div>
</div>
</header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
<div className="text-base font-medium text-slate-500 mb-2">27SS WL 전개 확정 복종</div>
<div className="text-3xl font-medium tracking-tight text-blue-600 mb-4">2 <span className="text-lg font-normal text-slate-500 tracking-normal">개</span></div>
<div className="mt-auto text-base text-slate-600 bg-blue-50/50 rounded-md p-3 border border-blue-100 flex items-start gap-2">
<i className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>ST (적극 확대) / CR (유지 전개)</span>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
<div className="text-base font-medium text-slate-500 mb-2">27SS WL 조건부 검토 복종</div>
<div className="text-3xl font-medium tracking-tight text-blue-500 mb-4">1 <span className="text-lg font-normal text-slate-500 tracking-normal">개</span></div>
<div className="mt-auto text-base text-slate-600 bg-slate-50 rounded-md p-3 border border-slate-100 flex items-start gap-2">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="help-circle" strokeWidth="1.5"></i>
<span>HZ — 26SS 마감 후 최종 수치 확인 필요</span>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
<div className="text-base font-medium text-slate-500 mb-2">27SS WL 정성 검토 필요 복종</div>
<div className="text-3xl font-medium tracking-tight text-orange-600 mb-4">1 <span className="text-lg font-normal text-slate-500 tracking-normal">개</span></div>
<div className="mt-auto text-base text-slate-600 bg-orange-50/50 rounded-md p-3 border border-orange-100 flex items-start gap-2">
<i className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="message-square-warning" strokeWidth="1.5"></i>
<span>PT — 현장 의견 수집 후 판단</span>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-slate-500"></div>
<div className="text-base font-medium text-slate-500 mb-2">27SS WL 판단 보류/미전개 복종</div>
<div className="text-3xl font-medium tracking-tight text-slate-600 mb-4">2 <span className="text-lg font-normal text-slate-500 tracking-normal">개</span></div>
<div className="mt-auto text-base text-slate-600 bg-slate-50/50 rounded-md p-3 border border-slate-200 flex items-start gap-2">
<i className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" data-lucide="pause-circle" strokeWidth="1.5"></i>
<span>HD (효율 미검증) / SO (판매 시기 상조)</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
<div className="p-6 border-b border-gray-200">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">WL SIZE EFFICIENCY SUMMARY</h3>
<p className="text-base text-slate-500 mt-1">25SS → 26SS 판매율 추이 및 WS·WM 대비 격차</p>
</div>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200 text-left text-base">
<thead className="bg-slate-50">
<tr>
<th className="px-6 py-4 font-normal text-slate-500 whitespace-nowrap" scope="col">복종</th>
<th className="px-6 py-4 font-normal text-slate-500 text-center whitespace-nowrap" scope="col">25SS WL 판매율</th>
<th className="px-6 py-4 font-normal text-slate-500 text-center whitespace-nowrap bg-blue-50/30" scope="col">26SS WL 판매율</th>
<th className="px-6 py-4 font-normal text-slate-500 text-center whitespace-nowrap" scope="col">WS 대비</th>
<th className="px-6 py-4 font-normal text-slate-500 text-center whitespace-nowrap" scope="col">WM 대비</th>
<th className="px-6 py-4 font-normal text-slate-500 text-center whitespace-nowrap" scope="col">효율 판정</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">ST</td>
<td className="px-6 py-4 text-center text-slate-600">80%</td>
<td className="px-6 py-4 text-center font-medium text-blue-700 bg-blue-50/30">27%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 text-center text-emerald-600 font-medium">+5%p</td>
<td className="px-6 py-4 text-center text-emerald-600 font-medium">+3%p</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<i className="w-3.5 h-3.5" data-lucide="check" strokeWidth="1.5"></i> 최우선
                                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">CR</td>
<td className="px-6 py-4 text-center text-slate-600">52%</td>
<td className="px-6 py-4 text-center font-medium text-blue-700 bg-blue-50/30">30%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 text-center text-red-500 font-medium">-7%p</td>
<td className="px-6 py-4 text-center text-red-500 font-medium">-11%p</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
<i className="w-3.5 h-3.5" data-lucide="check" strokeWidth="1.5"></i> 유지
                                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">HZ</td>
<td className="px-6 py-4 text-center text-slate-400">미입고</td>
<td className="px-6 py-4 text-center font-medium text-blue-700 bg-blue-50/30">56%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 text-center text-emerald-600 font-medium">+12%p</td>
<td className="px-6 py-4 text-center text-emerald-600 font-medium">+5%p</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-amber-50 text-amber-700 border border-amber-100">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle" strokeWidth="1.5"></i> 조건부
                                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">HD</td>
<td className="px-6 py-4 text-center text-slate-400">미입고</td>
<td className="px-6 py-4 text-center text-slate-700 bg-blue-50/30">40%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 text-center text-emerald-600 font-medium">+3%p</td>
<td className="px-6 py-4 text-center text-red-500 font-medium">-6%p</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-slate-100 text-slate-600 border border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="x" strokeWidth="1.5"></i> 보류
                                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors bg-orange-50/20">
<td className="px-6 py-4 font-medium text-slate-900">PT</td>
<td className="px-6 py-4 text-center text-slate-400">미입고</td>
<td className="px-6 py-4 text-center text-slate-700 bg-blue-50/30">28%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 text-center text-emerald-600 font-medium">+13%p</td>
<td className="px-6 py-4 text-center text-emerald-600 font-medium">+9%p</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-orange-100 text-orange-700 border border-orange-200">
<i className="w-3.5 h-3.5" data-lucide="search" strokeWidth="1.5"></i> 정성필요
                                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">SO</td>
<td className="px-6 py-4 text-center text-slate-400">미입고</td>
<td className="px-6 py-4 text-center text-slate-700 bg-blue-50/30">29%<span className="text-sm font-normal text-slate-500 ml-1">※시기상조</span></td>
<td className="px-6 py-4 text-center text-slate-400 font-medium">-</td>
<td className="px-6 py-4 text-center text-slate-400 font-medium">-</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-slate-100 text-slate-600 border border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="pause-circle" strokeWidth="1.5"></i> 판단유보
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-slate-50 p-5 mt-auto border-t border-gray-100">
<p className="text-base text-slate-600 leading-relaxed">
<span className="font-medium text-slate-900 mr-1">인사이트 요약:</span> 
                        ST는 양 시즌 모두 WL이 WS·WM을 초과하는 유일한 복종. HZ는 26SS 첫 투입에서 WS·WM 대비 가장 높은 판매율 기록. SO는 반바지 복종 특성상 4월 기준 판매율로 효율 판단 불가. 26SS 시즌 마감 후 전체 수치 재검토 필요.
                    </p>
</div>
</div>

<div className="xl:col-span-5 bg-slate-900 rounded-xl p-8 flex flex-col relative overflow-hidden shadow-md">
<div className="absolute -right-12 -bottom-12 text-white/5 pointer-events-none">
<i className="w-64 h-64" data-lucide="compass" strokeWidth="1"></i>
</div>
<div className="flex items-center gap-3 mb-8 z-10">
<div className="bg-white/10 p-2.5 rounded-lg text-white">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">27SS WL Planning Strategy</h3>
</div>
<div className="space-y-6 z-10 flex-grow">

<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-medium text-blue-400 tracking-wider">STRATEGY 01 — ST</span>
<span className="text-base font-medium text-white">WL 적극 확대 (Expansion)</span>
</div>
<p className="text-base text-slate-400 leading-relaxed">
                            양 시즌 WL 판매율이 WS·WM을 지속 초과. 입고비중 9%→13% 확대 추세 적절. 27SS 13~15% 수준 유지·확대 권고. WL 수요가 가장 명확히 검증된 복종.
                        </p>
</div>
<div className="h-px w-full bg-slate-800"></div>

<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-medium text-emerald-400 tracking-wider">STRATEGY 02 — CR</span>
<span className="text-base font-medium text-white">WL 유지 전개 (Maintain)</span>
</div>
<p className="text-base text-slate-400 leading-relaxed">
                            25SS 52%, 26SS 30%(진행중). 입고비중 3% 소량 운영 지속. 26SS 최종 마감 수치 확인 후 물량 소폭 조정 검토.
                        </p>
</div>
<div className="h-px w-full bg-slate-800"></div>

<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-medium text-amber-400 tracking-wider">STRATEGY 03 — HZ</span>
<span className="text-base font-medium text-white">조건부 전개 (Conditional)</span>
</div>
<p className="text-base text-slate-400 leading-relaxed">
                            26SS 첫 투입 판매율 56%로 WS·WM 초과. 단, 시즌 진행 중으로 최종 수치 미확정. 26SS 마감 후 판매율 기반 27SS 물량 결정.
                        </p>
</div>
<div className="h-px w-full bg-slate-800"></div>

<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-medium text-slate-400 tracking-wider">STRATEGY 04 — HD</span>
<span className="text-base font-medium text-white">전개 보류 (Hold)</span>
</div>
<p className="text-base text-slate-400 leading-relaxed">
                            WM(46%) 대비 WL(40%) 효율 낮음. WL 차별성 없음. 27SS 미전개 권고.
                        </p>
</div>
<div className="h-px w-full bg-slate-800"></div>

<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-medium text-slate-400 tracking-wider">STRATEGY 05 — SO</span>
<span className="text-base font-medium text-white">판단 유보 (Pending)</span>
</div>
<p className="text-base text-slate-400 leading-relaxed">
                            반바지 복종 특성상 4월 초는 판매 시기 상조. 현재 판매율로 효율 판단 불가. 26SS 시즌 본격 개시(5~7월) 후 재측정. 27SS 전개 여부는 26SS 최종 수치 확인 후 결정.
                        </p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-5 bg-[#fefce8] rounded-xl border border-yellow-200 shadow-sm p-6 flex flex-col">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-yellow-200/60">
<div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium text-yellow-700 mb-0.5 tracking-wider">QUALITATIVE DATA SECTION</div>
<h3 className="text-xl font-medium text-yellow-900 tracking-tight">FIELD VOICE — PT WL 현장 의견 수집 필요</h3>
</div>
</div>
<div className="space-y-6 flex-grow">

<div>
<h4 className="text-base font-medium text-yellow-900 mb-2 flex items-center gap-2">
<i className="w-4 h-4 text-yellow-600" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
                            현재 데이터 현황
                        </h4>
<ul className="text-base text-yellow-800 space-y-1 pl-6 list-disc marker:text-yellow-400">
<li>26SS WL 입고: 181장 (전체 PT의 1%)</li>
<li>26SS WL 판매율: 28% (WS 15%, WM 19% 대비 상대적 우위)</li>
<li>단, 극소 모수로 수요 과소 측정 가능성 존재</li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-yellow-900 mb-2 flex items-center gap-2">
<i className="w-4 h-4 text-yellow-600" data-lucide="radio" strokeWidth="1.5"></i>
                            접수된 현장 시그널
                        </h4>
<ul className="text-base text-yellow-800 space-y-1 pl-6 list-disc marker:text-yellow-400">
<li>매장에서 PT WL 사이즈 추가 요청 의견 접수</li>
<li>기회손실(Lost Sales) 발생 가능성 언급</li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-yellow-900 mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-yellow-600" data-lucide="clipboard-list" strokeWidth="1.5"></i>
                            수집이 필요한 정성 항목
                        </h4>
<div className="space-y-2 text-base text-yellow-800">
<div className="flex items-start gap-2">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium shrink-0 mt-0.5">1</span>
<span>WL 배분 매장 수 및 매장별 판매율</span>
</div>
<div className="flex items-start gap-2">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium shrink-0 mt-0.5">2</span>
<span>WL 품절 발생 여부 및 품절 시점</span>
</div>
<div className="flex items-start gap-2">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium shrink-0 mt-0.5">3</span>
<span>WL 요청 매장의 WS·WM 판매 수준</span>
</div>
<div className="flex items-start gap-2">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium shrink-0 mt-0.5">4</span>
<span>WL 수요가 집중된 PT 스타일 파악</span>
</div>
</div>
</div>
</div>

<div className="mt-6 bg-yellow-100/50 p-4 rounded-lg border border-yellow-200 text-base text-yellow-900 leading-relaxed font-medium">
                    "현재 데이터만으로 27SS PT WL 도입 여부 판단 불가. 매장 담당자 대상 정성 인터뷰 또는 설문 진행 후 결과에 따라 400~500장(3~4%) 수준 테스트 확대 검토."
                </div>
</div>

<div className="xl:col-span-7 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
<div className="px-6 py-5 border-b border-gray-200 bg-slate-50/50">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">CATEGORY WL PORTFOLIO ROADMAP</h2>
<p className="text-base text-slate-500 mt-1">27SS WL 전개 계획 요약</p>
</div>
<div className="overflow-x-auto flex-grow">
<table className="min-w-full divide-y divide-gray-200 text-left text-base">
<thead className="bg-white">
<tr>
<th className="px-6 py-4 font-normal text-slate-500 whitespace-nowrap" scope="col">복종</th>
<th className="px-6 py-4 font-normal text-slate-500 whitespace-nowrap" scope="col">25SS WL 판매율</th>
<th className="px-6 py-4 font-normal text-slate-500 whitespace-nowrap bg-blue-50/30" scope="col">26SS WL 판매율</th>
<th className="px-6 py-4 font-normal text-slate-500 whitespace-nowrap bg-slate-50" scope="col">27SS 전개 방향</th>
<th className="px-6 py-4 font-normal text-slate-500 whitespace-nowrap bg-slate-50" scope="col">권고 비중</th>
<th className="px-6 py-4 font-normal text-slate-500 whitespace-nowrap" scope="col">MD Planning Note</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">ST</td>
<td className="px-6 py-4 text-slate-600 whitespace-nowrap">80%</td>
<td className="px-6 py-4 whitespace-nowrap font-medium text-blue-700 bg-blue-50/30">27%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 whitespace-nowrap bg-slate-50/50">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-blue-50 text-blue-700">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i> 적극 확대
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-medium text-blue-700 bg-slate-50/50">13~15%</td>
<td className="px-6 py-4 text-slate-600">양 시즌 WL &gt; WS·WM, 가장 명확한 수요 검증</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">CR</td>
<td className="px-6 py-4 text-slate-600 whitespace-nowrap">52%</td>
<td className="px-6 py-4 whitespace-nowrap font-medium text-blue-700 bg-blue-50/30">30%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 whitespace-nowrap bg-slate-50/50">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check" strokeWidth="1.5"></i> 유지 전개
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-700 bg-slate-50/50">3% 유지</td>
<td className="px-6 py-4 text-slate-600">26SS 마감 후 소폭 조정 검토</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">HZ</td>
<td className="px-6 py-4 text-slate-400 whitespace-nowrap">미입고</td>
<td className="px-6 py-4 whitespace-nowrap text-slate-700 bg-blue-50/30">56%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 whitespace-nowrap bg-slate-50/50">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-amber-50 text-amber-700">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle" strokeWidth="1.5"></i> 조건부
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-400 bg-slate-50/50">TBD</td>
<td className="px-6 py-4 text-slate-600">26SS 최종 마감 수치 확인 후 결정</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">HD</td>
<td className="px-6 py-4 text-slate-400 whitespace-nowrap">미입고</td>
<td className="px-6 py-4 whitespace-nowrap text-slate-700 bg-blue-50/30">40%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 whitespace-nowrap bg-slate-50/50">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-slate-100 text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="x" strokeWidth="1.5"></i> 보류
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-slate-400 bg-slate-50/50">-</td>
<td className="px-6 py-4 text-slate-600">WM 대비 낮은 효율, 27SS 미전개</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">PT</td>
<td className="px-6 py-4 text-slate-400 whitespace-nowrap">미입고</td>
<td className="px-6 py-4 whitespace-nowrap text-slate-700 bg-blue-50/30">28%<span className="text-sm font-normal text-slate-500 ml-1">▲진행중</span></td>
<td className="px-6 py-4 whitespace-nowrap bg-slate-50/50">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-orange-50 text-orange-700">
<i className="w-3.5 h-3.5" data-lucide="search" strokeWidth="1.5"></i> 정성 선행
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-400 bg-slate-50/50">TBD</td>
<td className="px-6 py-4 text-slate-600">매장 정성 인터뷰 완료 후 판단</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">SO</td>
<td className="px-6 py-4 text-slate-400 whitespace-nowrap">미입고</td>
<td className="px-6 py-4 whitespace-nowrap text-slate-700 bg-blue-50/30">29%<span className="text-sm font-normal text-slate-500 ml-1">※시기상조</span></td>
<td className="px-6 py-4 whitespace-nowrap bg-slate-50/50">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-slate-100 text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="pause-circle" strokeWidth="1.5"></i> 판단 유보
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-slate-400 bg-slate-50/50">TBD</td>
<td className="px-6 py-4 text-slate-600">반바지 복종, 26SS 시즌 개시 후 재측정</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-5 border-t border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
<p className="text-sm text-slate-500 leading-relaxed">
                        ▲진행중: 26SS 시즌 진행 중 수치로 최종 마감 후 변동 가능<br/>
                        ※시기상조: SO(반바지)는 4월 기준 판매 시기 이전으로 판매율 해석 불가<br/>
                        * TBD 항목은 26SS 최종 마감(예상 2026년 8~9월) 및 매장 정성 조사 완료 후 업데이트 예정
                    </p>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 text-sm font-medium text-slate-200 tracking-wider shrink-0 self-start sm:self-auto">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
                        CONFIDENTIAL REPORT
                    </div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mt-10">
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="lightbulb" strokeWidth="1.5"></i>
                핵심 인사이트 요약
            </h3>
<div className="space-y-5">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-medium shrink-0 mt-0.5 text-sm">1</div>
<p className="text-base text-slate-700 leading-relaxed pt-0.5">
<span className="font-medium text-slate-900">ST</span>는 WL 사이즈 수요가 양 시즌에 걸쳐 가장 명확하게 검증된 복종으로, 입고비중 확대(9%→13%) 방향이 적절하며 27SS에서도 유지·확대 필요.
                    </p>
</div>
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-medium shrink-0 mt-0.5 text-sm">2</div>
<p className="text-base text-slate-700 leading-relaxed pt-0.5">
<span className="font-medium text-slate-900">CR</span>은 안정적인 판매율로 소량 유지 전개가 적합하며, 26SS 마감 시 최종 판매율 확인 후 물량 조정 권고.
                    </p>
</div>
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-medium shrink-0 mt-0.5 text-sm">3</div>
<p className="text-base text-slate-700 leading-relaxed pt-0.5">
<span className="font-medium text-slate-900">HZ</span>는 26SS 신규 진입 복종으로 56%의 긍정적 신호가 있으나, 시즌 마감 후 최종 수치 기반으로 27SS 물량을 결정하는 것이 리스크 최소화에 적합.
                    </p>
</div>
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-medium shrink-0 mt-0.5 text-sm">4</div>
<p className="text-base text-slate-700 leading-relaxed pt-0.5">
<span className="font-medium text-slate-900">HD</span>는 WL 효율이 입증되지 않아 27SS 전개 불필요. <br/>
<span className="font-medium text-slate-900">SO</span>는 반바지 복종 특성상 현 시점 판매율 판단 불가로 26SS 시즌 마감 후 재검토 필요. <br/>
<span className="font-medium text-slate-900">PT</span>는 현장 정성 의견 수집이 선행되어야 최종 판단 가능.
                    </p>
</div>
</div>
</div>
</div>




    </>
  );
}
