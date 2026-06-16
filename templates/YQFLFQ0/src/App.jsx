import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = { theme: { extend: { fontFamily: { inter: ['Inter', 'sans-serif'] } } } }



    lucide.createIcons();
    // Mobile sidebar toggle
    document.querySelector('[data-lucide="menu"]')?.addEventListener('click', () => {
      document.querySelector('aside')?.classList.toggle('hidden');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="hidden md:flex flex-col w-64 border-r bg-white">
<div className="flex items-center h-16 px-6">
<svg className="w-5 h-5 text-indigo-600 mr-2" data-lucide="briefcase"></svg>
<span className="font-semibold">광고 운영 솔루션</span>
</div>
<nav className="flex-1 overflow-y-auto px-2 space-y-2">
<div>
<h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">캠페인</h3>
<a className="flex items-center px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100 space-x-2" href="#">
<svg className="w-4 h-4" data-lucide="file-plus"></svg><span>캠페인 만들기</span>
</a>
<details className="group">
<summary className="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 space-x-2">
<svg className="w-4 h-4" data-lucide="layout-grid"></svg><span>광고 관리</span>
<svg className="w-4 h-4 ml-auto transition-transform group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="pl-8 mt-1 space-y-1">
<a className="block px-3 py-1 rounded hover:bg-gray-100" href="#">전체 광고</a>
<a className="block px-3 py-1 rounded hover:bg-gray-100" href="#">진행중</a>
<a className="block px-3 py-1 rounded hover:bg-gray-100" href="#">종료됨</a>
</div>
</details>
</div>
<div>
<h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide mt-4">설정</h3>
<a className="flex items-center px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100 space-x-2" href="#">
<svg className="w-4 h-4" data-lucide="settings"></svg><span>계정 설정</span>
</a>
</div>
</nav>
<div className="p-4">
<button className="w-full flex items-center justify-center space-x-2 rounded-lg border bg-indigo-50 text-indigo-600 py-2 text-xs font-medium hover:bg-indigo-100">
<svg className="w-4 h-4" data-lucide="percent"></svg><span>프리미엄 확인하기</span>
</button>
</div>
</aside>

<div className="flex flex-col flex-1 overflow-hidden">

<header className="flex items-center justify-between h-16 px-4 sm:px-6 border-b bg-white">
<div className="flex items-center space-x-3">
<button className="md:hidden">
<svg className="w-6 h-6 text-gray-700" data-lucide="menu"></svg>
</button>
<button className="flex items-center bg-indigo-50 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full space-x-1 hover:bg-indigo-100">
<svg className="w-3.5 h-3.5" data-lucide="megaphone"></svg>
<span>새 광고 상품 출시!</span>
</button>
</div>
<div className="flex items-center space-x-4">
<button className="relative">
<svg className="w-5 h-5 text-gray-700" data-lucide="bell"></svg>
<span className="absolute -top-0.5 -right-0.5 inline-block w-1.5 h-1.5 rounded-full bg-red-500"></span>
</button>
<button>
<svg className="w-5 h-5 text-gray-700" data-lucide="help-circle"></svg>
</button>
<button>
<svg className="w-5 h-5 text-gray-700" data-lucide="grid"></svg>
</button>
<button className="flex items-center space-x-2">
<span className="hidden sm:block text-sm font-medium">마케팅팀</span>
<svg className="w-4 h-4 text-gray-700" data-lucide="chevron-down"></svg>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

<section className="bg-white border rounded-xl p-6 space-y-5">
<div className="flex items-start space-x-4">
<div className="text-3xl">📄</div>
<div className="flex-1">
<h2 className="text-base font-semibold mb-1">광고 운영 가이드를 확인해 주세요</h2>
<p className="text-xs text-gray-600 leading-relaxed">
                효과적인 광고 집행을 위해 꼭 알아야 할 필수 가이드입니다.<br/>
                광고 이용 약관과 운영 정책을 확인하세요.
              </p>
</div>
<button className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg px-4 py-2">
              가이드 보기
            </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="rounded-lg bg-gray-50 p-4">
<p className="text-[11px] text-gray-500 font-medium">진행중인 캠페인</p>
<p className="text-2xl font-bold mt-1">0</p>
</div>

<div className="rounded-lg bg-gray-50 p-4">
<p className="text-[11px] text-gray-500 font-medium">검토중인 광고</p>
<p className="text-2xl font-bold mt-1">0</p>
</div>

<div className="rounded-lg bg-gray-50 p-4">
<p className="text-[11px] text-gray-500 font-medium">보유 포인트</p>
<p className="text-2xl font-bold mt-1">0P</p>
</div>

<div className="rounded-lg bg-gray-50 p-4">
<p className="text-[11px] text-gray-500 font-medium">사용 가능 이미지지</p>
<p className="text-2xl font-bold mt-1">0M</p>
</div>
</div>
</section>

<section className="bg-violet-50 border border-violet-200 rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="text-xs font-medium text-violet-800">추천 기능</span>
<span className="text-xs text-gray-700">최적의 위치에 광고를 노출하고 싶다면? 맞춤 솔루션을 사용해 보세요.</span>
</div>
<button className="bg-white border border-violet-200 hover:bg-violet-100 text-violet-700 text-xs font-medium rounded-lg px-3 py-1.5">
            솔루션 알아보기
          </button>
</section>

<section className="bg-white border rounded-xl">
<div className="px-4 py-4">

<div className="flex flex-wrap items-center gap-2">
<select className="appearance-none bg-gray-50 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500">
<option>플랫폼 전체</option>
<option>네이버</option>
<option>카카오</option>
<option>메타</option>
</select>
<select className="appearance-none bg-gray-50 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500">
<option>상태 전체</option>
<option>진행중</option>
<option>검토중</option>
<option>종료</option>
</select>
<div className="relative ml-auto">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></svg>
<input className="pl-9 pr-3 py-2 bg-gray-50 border rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder:text-gray-400" placeholder="광고명, 위치 검색" type="text"/>
</div>
<div className="flex items-center space-x-2">
<button className="p-2 border rounded-lg hover:bg-gray-50"><svg className="w-4 h-4" data-lucide="download"></svg></button>
<button className="p-2 border rounded-lg hover:bg-gray-50"><svg className="w-4 h-4" data-lucide="refresh-cw"></svg></button>
</div>
</div>

<div className="mt-6 border rounded-lg overflow-hidden">
<table className="min-w-full divide-y">
<thead className="bg-gray-50 text-[11px] font-medium text-gray-500">
<tr>
<th className="px-4 py-2 text-left">광고이미지</th>
<th className="px-4 py-2 text-left">광고명</th>
<th className="px-4 py-2 text-left">광고 위치</th>
<th className="px-4 py-2 text-left">게시 일자</th>
<th className="px-4 py-2 text-left">사용 포인트</th>
<th className="px-4 py-2 text-left">진행상태</th>
</tr>
</thead>
<tbody className="divide-y text-xs">
<tr>
<td className="text-center py-20 text-gray-500" colspan="6">
                      등록된 광고가 없습니다.<br/>지금 바로 첫 광고를 등록해 보세요.
                      <div className="mt-4">
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium px-4 py-2 rounded-lg">
                          광고 등록하기
                        </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>
</div>
</div>




    </>
  );
}
