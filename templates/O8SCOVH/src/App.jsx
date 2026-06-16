import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
document.addEventListener('DOMContentLoaded',()=>{

  lucide.createIcons();

  /* Fade-in */
  const els=[...document.querySelectorAll('.fade-start')];
  const ob=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('fade-end');
        e.target.classList.remove('fade-start');
        ob.unobserve(e.target);
      }
    });
  },{threshold:0.1});
  els.forEach((el,i)=>{
    el.style.transition='opacity .6s ease,transform .6s ease';
    el.style.transitionDelay=`${i*120}ms`;
    ob.observe(el);
  });

  /* Filters */
  const searchInput=document.getElementById('searchInput');
  const locationSelect=document.getElementById('locationSelect');
  const typeSelect=document.getElementById('typeSelect');
  const statusTabs=[...document.querySelectorAll('.status-tab')];
  let currentStatus='';

  statusTabs.forEach(btn=>{
    btn.addEventListener('click',()=>{
      statusTabs.forEach(b=>b.classList.remove('active','bg-blue-600','text-white'));
      statusTabs.forEach(b=>b.classList.add('bg-white','text-gray-700','border','border-gray-200'));
      btn.classList.remove('bg-white','text-gray-700','border','border-gray-200');
      btn.classList.add('active','bg-blue-600','text-white');
      currentStatus=btn.dataset.status||'';
      filterRows();
    });
  });

  [searchInput,locationSelect,typeSelect].forEach(el=>el.addEventListener('input',filterRows));

  function filterRows(){
    const tbody=document.getElementById('campaignTbody');
    const rows=[...tbody.querySelectorAll('tr')];
    const q=searchInput.value.trim().toLowerCase();
    const loc=locationSelect.value;
    const type=typeSelect.value;
    rows.forEach(r=>{
      const name=r.dataset.name.toLowerCase();
      const rowLoc=r.dataset.location;
      const rowType=r.dataset.type;
      const rowStatus=r.dataset.status;
      const matchSearch=!q||name.includes(q);
      const matchLoc=!loc||rowLoc===loc;
      const matchType=!type||rowType===type;
      const matchStatus=!currentStatus||rowStatus===currentStatus;
      r.hidden=!(matchSearch&&matchLoc&&matchType&&matchStatus);
    });
  }

});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full">
<div className="max-w-screen-xl mx-auto p-4 md:p-6 space-y-8">

<div className="flex items-center justify-between fade-start">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">광고 관리 대시보드</h1>
<button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition">
<i className="w-4 h-4" data-lucide="plus-circle"></i>
        새 캠페인 만들기
      </button>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 fade-start">
<div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
<div className="p-3 rounded-xl bg-blue-50 text-blue-600">
<i className="w-6 h-6" data-lucide="play-circle"></i>
</div>
<div>
<p className="text-xs text-gray-500">진행중인 캠페인</p>
<p className="text-2xl font-semibold">8</p>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
<div className="p-3 rounded-xl bg-yellow-50 text-yellow-600">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<p className="text-xs text-gray-500">검토중인 광고</p>
<p className="text-2xl font-semibold">3</p>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
<div className="p-3 rounded-xl bg-green-50 text-green-600">
<i className="w-6 h-6" data-lucide="dollar-sign"></i>
</div>
<div>
<p className="text-xs text-gray-500">보유 포인트</p>
<p className="text-2xl font-semibold">152,000</p>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
<div className="p-3 rounded-xl bg-purple-50 text-purple-600">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<div>
<p className="text-xs text-gray-500">회원등급</p>
<p className="text-2xl font-semibold">Gold</p>
</div>
</div>
</div>

<div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 md:flex md:items-center justify-between gap-6 fade-start">
<div className="flex items-start gap-3 flex-1">
<div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<p className="text-sm md:text-base text-indigo-800">
          AI 최적화를 통해 더 나은 캠페인 전략을 받아보세요. 단 몇 번의 클릭으로 개인화된 광고 세트를 추천해 드립니다.
        </p>
</div>
<button className="mt-4 md:mt-0 flex-shrink-0 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition">
        AI 추천받기
      </button>
</div>

<div className="flex items-center justify-between fade-start">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">최근 캠페인</h2>
<div className="flex items-center gap-2">
<button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
<button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
</button>
</div>
</div>

<div className="fade-start space-y-4">

<div className="flex flex-wrap gap-3 md:gap-4">

<label className="relative flex items-center flex-1 md:max-w-xs">
<i className="absolute left-3 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input aria-label="광고명 검색" className="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" id="searchInput" placeholder="광고명 검색" type="search"/>
</label>

<select aria-label="광고 위치" className="flex-1 md:w-44 text-sm px-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" id="locationSelect">
<option value="">전체 위치</option>
<option value="메인 배너">메인 배너</option>
<option value="사이드 바">사이드 바</option>
<option value="푸터">푸터</option>
</select>

<select aria-label="광고 종류" className="flex-1 md:w-44 text-sm px-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" id="typeSelect">
<option value="">전체 종류</option>
<option value="배너">배너</option>
<option value="영상">영상</option>
<option value="팝업">팝업</option>
</select>
</div>

<div className="flex gap-2 md:gap-3">
<button className="status-tab active px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" data-status="">전체</button>
<button className="status-tab px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" data-status="진행중">진행중</button>
<button className="status-tab px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" data-status="대기중">대기중</button>
<button className="status-tab px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" data-status="종료">종료</button>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm overflow-x-auto fade-start">
<table className="min-w-full divide-y divide-gray-100 text-sm whitespace-nowrap">
<thead className="bg-gray-50 text-gray-500">
<tr>
<th className="px-6 py-3 text-left font-medium">광고 이미지</th>
<th className="px-6 py-3 text-left font-medium">광고명</th>
<th className="px-6 py-3 text-left font-medium">광고 위치</th>
<th className="px-6 py-3 text-left font-medium">게시 일자</th>
<th className="px-6 py-3 text-left font-medium">금액</th>
<th className="px-6 py-3 text-left font-medium">진행 상태</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100" id="campaignTbody">

<tr className="hover:bg-gray-50 transition" data-location="메인 배너" data-name="여름 세일 50%" data-status="진행중" data-type="배너">
<td className="px-6 py-4">
<img alt="" className="w-20 h-12 object-cover rounded-lg border border-gray-100" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</td>
<td className="px-6 py-4 font-medium text-gray-700">여름 세일 50%</td>
<td className="px-6 py-4 text-gray-600">메인 배너</td>
<td className="px-6 py-4 text-gray-600">2025-07-01</td>
<td className="px-6 py-4 text-gray-600">₩ 1,200,000</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700">진행중</span>
</td>
</tr>

<tr className="hover:bg-gray-50 transition" data-location="사이드 바" data-name="신제품 출시" data-status="대기중" data-type="팝업">
<td className="px-6 py-4">
<img alt="" className="w-20 h-12 object-cover rounded-lg border border-gray-100" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</td>
<td className="px-6 py-4 font-medium text-gray-700">신제품 출시</td>
<td className="px-6 py-4 text-gray-600">사이드 바</td>
<td className="px-6 py-4 text-gray-600">2025-06-28</td>
<td className="px-6 py-4 text-gray-600">₩ 870,000</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700">대기중</span>
</td>
</tr>

<tr className="hover:bg-gray-50 transition" data-location="푸터" data-name="봄 시즌 프로모션" data-status="종료" data-type="배너">
<td className="px-6 py-4">
<img alt="" className="w-20 h-12 object-cover rounded-lg border border-gray-100" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</td>
<td className="px-6 py-4 font-medium text-gray-700">봄 시즌 프로모션</td>
<td className="px-6 py-4 text-gray-600">푸터</td>
<td className="px-6 py-4 text-gray-600">2025-05-15</td>
<td className="px-6 py-4 text-gray-600">₩ 560,000</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">종료</span>
</td>
</tr>

<tr className="hover:bg-gray-50 transition" data-location="메인 배너" data-name="가을 컬렉션" data-status="종료" data-type="영상">
<td className="px-6 py-4">
<img alt="" className="w-20 h-12 object-cover rounded-lg border border-gray-100" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</td>
<td className="px-6 py-4 font-medium text-gray-700">가을 컬렉션</td>
<td className="px-6 py-4 text-gray-600">메인 배너</td>
<td className="px-6 py-4 text-gray-600">2024-10-03</td>
<td className="px-6 py-4 text-gray-600">₩ 2,100,000</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">종료</span>
</td>
</tr>

<tr className="hover:bg-gray-50 transition" data-location="사이드 바" data-name="연말 기프트 카드" data-status="진행중" data-type="배너">
<td className="px-6 py-4">
<img alt="" className="w-20 h-12 object-cover rounded-lg border border-gray-100" src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</td>
<td className="px-6 py-4 font-medium text-gray-700">연말 기프트 카드</td>
<td className="px-6 py-4 text-gray-600">사이드 바</td>
<td className="px-6 py-4 text-gray-600">2024-12-15</td>
<td className="px-6 py-4 text-gray-600">₩ 980,000</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700">진행중</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>


    </>
  );
}
