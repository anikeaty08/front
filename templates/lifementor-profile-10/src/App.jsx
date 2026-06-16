import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: {
DEFAULT: '#238BE6', // Extracted primary blue
light: '#EAF6FF',
gradient: 'linear-gradient(to right, #80CAFF, #4C78FF)'
},
neutral: {
50: '#F9FAFB',
100: '#F2F4F6', // Gray 5
200: '#E5E7EB', // Gray 4
300: '#D1D5DB', // Gray 3
400: '#9CA3AF', // Gray 2
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827', // Gray 1
}
},
fontSize: {
xxs: '0.625rem',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white border-b border-neutral-100 px-4 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">

<span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#80CAFF] to-[#4C78FF]">
                LifeMentor
            </span>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<main className="max-w-lg mx-auto p-4 space-y-8">

<section className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm">

<div className="relative w-32 h-32">
<div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden flex items-center justify-center border-4 border-white shadow-sm">

<i className="w-16 h-16 text-white opacity-80" data-lucide="user"></i>
</div>
<button className="absolute bottom-0 right-0 bg-white border border-neutral-200 p-2 rounded-full shadow-sm text-primary">
<i className="w-4 h-4" data-lucide="camera"></i>
</button>
</div>

<button className="text-primary font-bold text-sm flex items-center gap-1.5 hover:opacity-80 transition-opacity">
<i className="w-4 h-4" data-lucide="plus"></i>
                프로필 사진 등록
            </button>

<div className="w-full bg-white rounded-lg border border-neutral-200 p-4 text-left space-y-4 shadow-sm">
<div className="flex justify-between items-start">
<h3 className="font-bold text-neutral-900">이용중인 서비스</h3>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="font-bold text-sm tracking-tight">AI 패키지 10회권</span>
<span className="text-primary text-xs font-medium">사용중</span>
</div>
<div className="text-xs text-neutral-500 space-y-0.5">
<p>잔여 ai 경험 추천 (4/10회)</p>
<p>잔여 자기소개서 ai 분석 (8/10회)</p>
</div>
<a className="text-neutral-400 text-xs underline decoration-neutral-300 underline-offset-2" href="#">결제 정보</a>
</div>
<div className="h-px bg-neutral-100 w-full"></div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="font-bold text-sm tracking-tight">AI 패키지 3개월 구독권</span>
<span className="text-primary text-xs font-medium">D-39</span>
</div>
<div className="text-xs text-neutral-500">
<p>무제한 이용 가능</p>
</div>
<a className="text-neutral-400 text-xs underline decoration-neutral-300 underline-offset-2" href="#">결제 정보</a>
</div>
<div className="pt-2 text-center border-t border-neutral-100">
<a className="text-neutral-400 text-xs underline decoration-neutral-300 underline-offset-2" href="#">모든 결제 내역</a>
</div>
</div>
<button className="text-neutral-400 text-xs underline decoration-neutral-300 underline-offset-2">
                회원탈퇴
            </button>
</section>

<section className="space-y-8">

<div className="space-y-4">
<h2 className="text-lg font-bold text-primary border-l-4 border-primary pl-3 leading-none">개인정보</h2>
<div className="grid grid-cols-1 gap-4">

<div className="flex items-center gap-4">
<label className="w-16 text-neutral-900 font-medium whitespace-nowrap">이름</label>
<div className="flex-1">
<input className="w-full bg-neutral-100 text-neutral-900 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-transparent focus:border-primary/20 transition-all placeholder-neutral-400" type="text" value="홍길동"/>
</div>
</div>

<div className="flex items-center gap-4">
<label className="w-16 text-neutral-900 font-medium whitespace-nowrap">나이</label>
<div className="flex-1">
<input className="w-full bg-neutral-100 text-neutral-900 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-transparent focus:border-primary/20 transition-all placeholder-neutral-400" placeholder="나이 입력" type="text"/>
</div>
</div>
</div>
</div>
<div className="h-px bg-neutral-200 w-full"></div>

<div className="space-y-4">
<h2 className="text-lg font-bold text-primary border-l-4 border-primary pl-3 leading-none">학력</h2>
<div className="space-y-3">

<div className="flex gap-3">
<div className="relative w-1/3">
<select className="w-full bg-neutral-100 text-neutral-900 rounded-lg pl-3 pr-8 py-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary border border-transparent">
<option>구분</option>
<option>대학교</option>
<option>대학원</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<input className="flex-1 bg-neutral-100 text-neutral-900 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-transparent placeholder-neutral-400" placeholder="학교명" type="text"/>
</div>

<input className="w-full bg-neutral-100 text-neutral-900 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-transparent placeholder-neutral-400" placeholder="학과" type="text"/>

<div className="flex gap-3 items-center">
<div className="relative flex-1">
<input className="w-full bg-neutral-100 text-neutral-900 rounded-lg pl-3 pr-9 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-transparent placeholder-neutral-400" placeholder="입학년월" type="text"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="calendar"></i>
</div>
<span className="text-neutral-300 text-lg">~</span>
<div className="relative flex-1">
<input className="w-full bg-neutral-100 text-neutral-900 rounded-lg pl-3 pr-9 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-transparent placeholder-neutral-400" placeholder="졸업년월" type="text"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="calendar"></i>
</div>
</div>
</div>

<button className="w-full py-3 border border-dashed border-neutral-300 rounded-lg flex items-center justify-center gap-2 text-primary font-bold text-sm bg-neutral-50 hover:bg-neutral-100 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
                    학력 추가하기
                </button>
</div>
<div className="h-px bg-neutral-200 w-full"></div>

<div className="space-y-4">
<h2 className="text-lg font-bold text-primary border-l-4 border-primary pl-3 leading-none">희망 직무</h2>
<div className="flex flex-wrap items-center gap-2 p-1">

<div className="flex items-center gap-1 bg-white border border-neutral-200 rounded px-3 py-1.5 shadow-sm">
<span className="text-sm text-neutral-800">프론트엔드 개발자</span>
<button className="text-neutral-400 hover:text-red-500 ml-1">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>

<input className="flex-1 min-w-[120px] bg-transparent text-sm py-1.5 px-2 focus:outline-none placeholder-neutral-400" placeholder="직무 입력" type="text"/>
</div>
</div>
<div className="h-px bg-neutral-200 w-full"></div>

<div className="space-y-4">
<h2 className="text-lg font-bold text-primary border-l-4 border-primary pl-3 leading-none">희망 산업</h2>
<div className="flex flex-wrap items-center gap-2 p-1">

<div className="flex items-center gap-1 bg-white border border-neutral-200 rounded px-3 py-1.5 shadow-sm">
<span className="text-sm text-neutral-800">IT</span>
<button className="text-neutral-400 hover:text-red-500 ml-1">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>
<div className="flex items-center gap-1 bg-white border border-neutral-200 rounded px-3 py-1.5 shadow-sm">
<span className="text-sm text-neutral-800">요식업</span>
<button className="text-neutral-400 hover:text-red-500 ml-1">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>
<div className="flex items-center gap-1 bg-white border border-neutral-200 rounded px-3 py-1.5 shadow-sm">
<span className="text-sm text-neutral-800">제조업</span>
<button className="text-neutral-400 hover:text-red-500 ml-1">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>
<div className="flex items-center gap-1 bg-white border border-neutral-200 rounded px-3 py-1.5 shadow-sm">
<span className="text-sm text-neutral-800">건설업</span>
<button className="text-neutral-400 hover:text-red-500 ml-1">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>
<div className="flex items-center gap-1 bg-white border border-neutral-200 rounded px-3 py-1.5 shadow-sm">
<span className="text-sm text-neutral-800">중화학공업</span>
<button className="text-neutral-400 hover:text-red-500 ml-1">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>

<input className="flex-1 min-w-[120px] bg-transparent text-sm py-1.5 px-2 focus:outline-none placeholder-neutral-400" placeholder="산업 입력" type="text"/>
</div>
</div>
<div className="h-px bg-neutral-200 w-full"></div>

<div className="space-y-4 pb-8">
<h2 className="text-lg font-bold text-primary border-l-4 border-primary pl-3 leading-none">현재 상황 및 고민</h2>
<textarea className="w-full h-32 bg-neutral-100 text-neutral-900 rounded-lg p-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-transparent resize-none placeholder-neutral-400 leading-relaxed" placeholder="현재 상황과 고민이 있다면 컨설턴트가 참고할 수 있도록 자세히 남겨주세요."></textarea>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
<div className="max-w-lg mx-auto flex gap-3">
<button className="flex-1 bg-neutral-200 text-neutral-500 font-bold py-3.5 rounded-lg text-sm transition-colors hover:bg-neutral-300">
                취소
            </button>
<button className="flex-1 bg-neutral-300 text-white font-bold py-3.5 rounded-lg text-sm shadow-sm transition-colors hover:bg-primary hover:text-white">
                저장하기
            </button>
</div>
</div>


    </>
  );
}
