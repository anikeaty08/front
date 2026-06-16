import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        document.querySelectorAll("#faq button").forEach(btn=>{
          btn.addEventListener("click",()=>{
            const expanded = btn.getAttribute("aria-expanded")==="true";
            btn.setAttribute("aria-expanded",!expanded);
            btn.parentElement.querySelector('div').classList.toggle("hidden");
          });
        });
      


    if(window.Chart){
      new Chart(document.getElementById('storageChart').getContext('2d'),{
        type:'doughnut',
        data:{
          datasets:[{data:[12.3,1800-12.3],backgroundColor:['#6366f1','#e0e7ff'],borderWidth:0}],
          labels:['사용','남음']
        },
        options:{
          cutout:'70%',
          plugins:{legend:{display:false},tooltip:{enabled:false}}
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 -z-10 opacity-80 pointer-events-none w-full h-full">
<iframe aria-hidden="true" className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/venturadaccord2copycopy-iOeF1h9eOZyNW4lCTWoX263y/" style={{pointerEvents: 'none'}} tabindex="-1" width="100%"></iframe>
</div>
<div style={{position: 'relative', zIndex: '10'}}>

<header className="bg-white/80 backdrop-blur border-b sticky top-0 z-20 shadow-sm">
<div className="max-w-4xl mx-auto flex items-center justify-between px-4 md:px-0 py-3">
<div className="flex items-center gap-2">
<img alt="SnapFind 로고" className="w-8 h-8 object-cover rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1594807929862-aa3a564c92c3?w=1080&amp;q=80"/>
<span className="text-xl font-semibold tracking-tight text-indigo-700">SnapFind</span>
</div>
<nav className="hidden md:flex gap-6 text-sm text-gray-600">
<a className="hover:text-indigo-600 transition" href="#feature">기능</a>
<a className="hover:text-indigo-600 transition" href="#howto">사용법</a>
<a className="hover:text-indigo-600 transition" href="#faq">FAQ</a>
<a className="hover:text-indigo-600 transition" href="#contact">문의</a>
</nav>
<a className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition text-sm" href="https://snapfind.giize.com/app">
          앱 시작하기
        </a>
</div>
</header>

<section className="max-w-4xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-indigo-900 leading-tight">
<span className="text-indigo-600">사진 찍어</span><br/>쉽게 정리하는<br/>내 물건 찾기
        </h1>
<p className="text-lg text-gray-700 mb-6">
          SnapFind는 집안, 사무실, 창고의 물건을 <b>쉽고 빠르게 등록</b>하고,
          <b>이미지나 키워드로 검색</b>하여 분실/중복구매를 막는
          <span className="text-indigo-600 font-semibold">오프라인 전용 정리 앱</span>입니다.
        </p>
<ul className="mb-8 space-y-2">
<li className="flex items-center text-gray-700">
<svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round"></path></svg>AI로 자동 태그/설명 추천
          </li>
<li className="flex items-center text-gray-700">
<svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round"></path></svg>중복/유사 사진 자동 감지
          </li>
<li className="flex items-center text-gray-700">
<svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round"></path></svg>모든 데이터 – 절대 서버 전송 없음!
          </li>
</ul>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition text-base group focus:outline-none focus:ring-2 focus:ring-indigo-300" href="https://snapfind.giize.com/app">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          지금 바로 정리 시작
        </a>
<div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l2 2"></path></svg>
          설치 없이 브라우저에서 바로 사용 가능
        </div>
</div>
<div className="flex-1 flex justify-center">
<div className="relative w-[320px]">
<div className="absolute -inset-2 bg-white/40 rounded-3xl blur-xl"></div>
<div className="relative rounded-3xl shadow-xl bg-white/80 border border-indigo-100 backdrop-blur-lg overflow-hidden">
<img alt="앱 샘플" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1594074586687-2bb43be26a55?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex gap-2 mb-2">
<span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">전자기기</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">서랍 2번</span>
</div>
<h2 className="text-base font-semibold text-gray-800 mb-1">무선 이어폰</h2>
<p className="text-xs text-gray-600 mb-2">화이트, 충전케이스와 함께</p>
<div className="flex flex-wrap gap-1 text-xs">
<span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">가전</span>
<span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">음향</span>
<span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">작은물건</span>
</div>
</div>
</div>
</div>
</div>
</section>
<hr className="max-w-4xl mx-auto border-gray-200"/>

<section className="relative py-10" id="feature">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-900 mb-8 text-center">SnapFind 주요 기능</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-sm border p-6 flex flex-col gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex w-8 h-8 rounded-full bg-indigo-100 items-center justify-center">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="13" rx="2" width="18" x="3" y="7"></rect><path d="M16 3v4H8V3"></path></svg>
</span>
<span className="font-semibold text-indigo-800">오프라인 100% 로컬저장</span>
</div>
<p className="text-sm text-gray-700">모든 데이터(사진, 설명, 위치 등)는 서버 전송 없이 내 기기에만 저장됩니다.</p>
</div>
<div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-sm border p-6 flex flex-col gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex w-8 h-8 rounded-full bg-indigo-100 items-center justify-center">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 19v-6m0 0V5m0 8l4 4m-4-4l-4 4"></path></svg>
</span>
<span className="font-semibold text-indigo-800">사진으로 간편 등록</span>
</div>
<p className="text-sm text-gray-700">카메라로 바로 촬영하거나 업로드하면 AI가 태그와 설명을 추천해줍니다.</p>
</div>
<div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-sm border p-6 flex flex-col gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex w-8 h-8 rounded-full bg-indigo-100 items-center justify-center">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M21 21l-4.35-4.35"></path></svg>
</span>
<span className="font-semibold text-indigo-800">검색 &amp; 유사품 감지</span>
</div>
<p className="text-sm text-gray-700">키워드·태그·이미지로 검색하고, 중복 품목은 등록 전 알림을 받아보세요.</p>
</div>
<div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-sm border p-6 flex flex-col gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex w-8 h-8 rounded-full bg-indigo-100 items-center justify-center">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="16" rx="4" width="16" x="4" y="4"></rect></svg>
</span>
<span className="font-semibold text-indigo-800">백업/복원 &amp; 데이터초기화</span>
</div>
<p className="text-sm text-gray-700">엑셀·JSON으로 백업·복원하고 필요 시 데이터를 초기화할 수 있습니다.</p>
</div>
</div>

<div className="mt-10 max-w-md mx-auto bg-white/80 backdrop-blur-lg border rounded-xl shadow-sm p-5">
<div className="flex items-center mb-3">
<svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="13" rx="2" width="18" x="3" y="7"></rect></svg>
<span className="font-semibold text-gray-800">내 브라우저 저장공간 현황</span>
</div>
<div>
<div className="w-full h-40 flex items-center justify-center">
<div className="w-32 mx-auto">
<div>
<canvas aria-label="저장공간 사용량 donut chart" height="256" id="storageChart" width="256"></canvas>
</div>
</div>
</div>
<div className="flex justify-between text-xs text-gray-500 mt-2">
<span>사용량:</span>
<span>남은 공간:</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-12 border-t" id="howto">
<h2 className="text-xl md:text-2xl font-bold tracking-tight text-indigo-900 mb-8 text-center">3단계로 바로 시작!</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="flex flex-col items-center gap-3">
<span className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="14" rx="2" width="18" x="3" y="5"></rect><circle cx="8.5" cy="12" r="1.5"></circle></svg>
</span>
<span className="font-semibold text-indigo-800">1. 사진 촬영/업로드</span>
<span className="text-sm text-gray-600 text-center">핸드폰·PC에서<br/>물건 사진 등록</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="16" rx="4" width="16" x="4" y="4"></rect><path d="M7 12h10"></path></svg>
</span>
<span className="font-semibold text-indigo-800">2. 설명/위치 입력</span>
<span className="text-sm text-gray-600 text-center">AI 추천 설명·태그를<br/>간편 적용</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
</span>
<span className="font-semibold text-indigo-800">3. 검색/찾기</span>
<span className="text-sm text-gray-600 text-center">키워드·사진으로<br/>필요한 물건 바로 검색</span>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition text-base" href="https://snapfind.giize.com/app">앱 바로 사용하기</a>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-10 border-t" id="faq">
<h2 className="text-xl font-bold text-indigo-900 mb-7">자주 묻는 질문</h2>
<div className="space-y-6">
<div className="bg-white/80 backdrop-blur-lg rounded-xl border shadow-sm">
<button aria-expanded="false" className="flex items-center justify-between w-full py-2 px-4 focus:outline-none group">
<span className="font-semibold text-gray-800">Q. 내 데이터가 서버에 저장되나요?</span>
<svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
</button>
<div className="text-gray-700 text-sm mt-1 px-4 pb-2 hidden group-[aria-expanded=true]:block">
            절대 아닙니다. 모든 사진, 설명, 위치, 태그 등은 <b>100% 내 브라우저에만 저장</b>되며 외부 서버로 전송되지 않습니다.
          </div>
</div>
<div className="bg-white/80 backdrop-blur-lg rounded-xl border shadow-sm">
<button aria-expanded="false" className="flex items-center justify-between w-full py-2 px-4 focus:outline-none group">
<span className="font-semibold text-gray-800">Q. 데스크톱/모바일 모두 사용 가능한가요?</span>
<svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
</button>
<div className="text-gray-700 text-sm mt-1 px-4 pb-2 hidden group-[aria-expanded=true]:block">
            네! PC, 노트북, 스마트폰, 태블릿 모두 브라우저로 바로 이용 가능합니다.
          </div>
</div>
<div className="bg-white/80 backdrop-blur-lg rounded-xl border shadow-sm">
<button aria-expanded="false" className="flex items-center justify-between w-full py-2 px-4 focus:outline-none group">
<span className="font-semibold text-gray-800">Q. 용량이 부족하면 어떻게 해야 하나요?</span>
<svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
</button>
<div className="text-gray-700 text-sm mt-1 px-4 pb-2 hidden group-[aria-expanded=true]:block">
            필요 없는 이미지를 삭제하거나, 백업/복원 기능으로 데이터를 관리하세요. 브라우저 저장 한도(약 2~3GB)는 대부분 충분합니다.
          </div>
</div>
</div>

</section>

<section className="max-w-4xl mx-auto px-4 py-10 border-t" id="contact">
<h2 className="text-xl font-bold text-indigo-900 mb-4">문의 &amp; 피드백</h2>
<div className="flex flex-col md:flex-row gap-5 items-center">
<div className="flex-1 text-gray-700 text-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="14" rx="2" width="20" x="2" y="7"></rect><path d="M16 3v4H8V3"></path></svg>
<span>이메일: <a className="text-indigo-700 hover:underline" href="mailto:snapfind.help@gmail.com">snapfind.help@gmail.com</a></span>
</div>
<div className="flex items-center gap-2 mb-2">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M8 2v4M16 2v4M4 7h16M21 21l-4-4M17 21v-3m0 0H7m10 0v3"></path></svg>
<span>제작자 블로그: <a className="text-indigo-700 hover:underline" href="https://blog.giize.com">blog.giize.com</a></span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"></path><path d="M2 20h20"></path></svg>
<span>오픈소스: <a className="text-indigo-700 hover:underline" href="https://github.com/gyuha/snapfind">GitHub</a></span>
</div>
</div>
<div className="flex-1">
<form action="mailto:snapfind.help@gmail.com" className="bg-white/80 backdrop-blur-lg border rounded-xl shadow-sm p-5 flex flex-col gap-3" enctype="text/plain" method="POST" onsubmit="alert('이메일 클라이언트가 열립니다.\n작동하지 않을 경우 위 이메일로 직접 보내주세요!');">
<input className="border rounded px-3 py-2 text-sm focus:ring focus:ring-indigo-100" name="이름" placeholder="이름 (선택)" type="text"/>
<textarea className="border rounded px-3 py-2 text-sm focus:ring focus:ring-indigo-100" name="문의내용" placeholder="문의/피드백 내용을 입력해주세요." required="" rows="3"></textarea>
<button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition text-sm" type="submit">메일 보내기</button>
</form>
</div>
</div>
</section>

<footer className="bg-white/80 backdrop-blur border-t mt-10 shadow-sm">
<div className="max-w-4xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
<span>© 2025 SnapFind</span>
<span>개인정보 수집/광고/회원가입 없음 · <a className="text-indigo-600 underline" href="https://github.com/gyuha/snapfind">오픈소스</a></span>
</div>
</footer>
</div>


    </>
  );
}
