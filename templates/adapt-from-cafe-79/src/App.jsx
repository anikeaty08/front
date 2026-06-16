import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="#home">
<span className="text-xl tracking-tight font-medium text-zinc-900 font-serif-kr">Vibez</span>
<span className="hidden sm:block text-xs text-zinc-400">바이브즈 인</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#home">홈</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">소개</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#menu">메뉴</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#gallery">갤러리</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#reviews">리뷰</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">연락처</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="tel:0212345678">
<iconify-icon height="16" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>02-1234-5678</span>
</a>
<a className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-normal px-4 py-2 rounded-full transition-colors" href="#">
                        주문하기
                    </a>
<button className="lg:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" id="home">
<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-50 via-white to-white"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-normal px-3 py-1.5 rounded-full mb-8">
<iconify-icon height="14" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span>평점 4.8 • 1,200+ 방문자리뷰</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal text-zinc-900 mb-6 font-serif-kr leading-tight">
                        당신의 편안함을 위한<br/>
                        섬세한 <span className="italic text-zinc-500">브루잉</span>,<br/>
                        대화를 이끄는 커피
                    </h1>
<p className="text-base lg:text-lg text-zinc-500 mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                        성수동 중심에서 경험하는 아티잔 커피와 디저트. 바쁘게 흘러가는 일상 속에서 잠시 쉬어갈 수 있는 완벽하고 아늑한 공간을 제공합니다.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
<a className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-normal px-6 py-3 rounded-full transition-all" href="#menu">
<iconify-icon height="18" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            메뉴 보기
                        </a>
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-900 text-sm font-normal px-6 py-3 rounded-full border border-zinc-200 transition-all" href="#">
<iconify-icon height="18" icon="solar:bag-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            포장 주문
                        </a>
<a className="inline-flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm font-normal px-4 py-3 transition-colors" href="#contact">
<iconify-icon height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            예약하기
                        </a>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-zinc-100 pt-8">
<div>
<div className="flex items-center gap-1.5 text-zinc-400 mb-2">
<iconify-icon height="14" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-xs font-normal">평균 예산</span>
</div>
<p className="text-sm font-medium text-zinc-900">₩10,000대</p>
<p className="text-xs text-zinc-400 mt-0.5">1인 기준</p>
</div>
<div>
<div className="flex items-center gap-1.5 text-zinc-400 mb-2">
<iconify-icon height="14" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-xs font-normal">영업 시간</span>
</div>
<p className="text-sm font-medium text-zinc-900">매일 오픈</p>
<p className="text-xs text-zinc-400 mt-0.5">오전 9시 - 밤 10시</p>
</div>
<div>
<div className="flex items-center gap-1.5 text-zinc-400 mb-2">
<iconify-icon height="14" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-xs font-normal">위치</span>
</div>
<p className="text-sm font-medium text-zinc-900">서울 성동구</p>
<p className="text-xs text-zinc-400 mt-0.5">성수동 카페거리</p>
</div>
</div>
</div>
<div className="relative mt-8 lg:mt-0">
<div className="relative aspect-[4/5] max-w-md mx-auto">
<div className="absolute inset-0 bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200/60 shadow-sm">
<img alt="The Vibez Inn 카페 전경" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&amp;h=1000&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-zinc-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-700">
<iconify-icon height="24" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-400 mb-0.5">시그니처</p>
<p className="text-sm font-medium text-zinc-900">바닐라 빈 라떼</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Customer Favorites</span>
<h2 className="text-3xl lg:text-4xl tracking-tight font-normal text-zinc-900 mt-3 font-serif-kr">
                        가장 사랑받는 메뉴
                    </h2>
</div>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1 pb-1" href="#menu">
                    전체 메뉴 보기
                    <iconify-icon height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-300 transition-colors">
<div className="aspect-square overflow-hidden bg-zinc-100">
<img alt="마르게리따 피자" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-[10px] font-medium text-zinc-500 border border-zinc-200 px-2 py-1 rounded-full mb-3 inline-block">추천</span>
<h3 className="text-base font-medium text-zinc-900">클래식 마르게리따</h3>
<p className="text-sm text-zinc-500 mt-1 mb-4 font-light">신선한 바질과 모짜렐라 치즈</p>
<p className="text-sm font-medium text-zinc-900">₩18,000</p>
</div>
</div>
<div className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-300 transition-colors">
<div className="aspect-square overflow-hidden bg-zinc-100">
<img alt="크리스피 콘" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-[10px] font-medium text-zinc-500 border border-zinc-200 px-2 py-1 rounded-full mb-3 inline-block">시즌 메뉴</span>
<h3 className="text-base font-medium text-zinc-900">스위트 콘 프라이즈</h3>
<p className="text-sm text-zinc-500 mt-1 mb-4 font-light">바삭하고 달콤한 옥수수 튀김</p>
<p className="text-sm font-medium text-zinc-900">₩8,500</p>
</div>
</div>
<div className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-300 transition-colors">
<div className="aspect-square overflow-hidden bg-zinc-100">
<img alt="그릴드 샌드위치" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-[10px] font-medium text-zinc-500 border border-zinc-200 px-2 py-1 rounded-full mb-3 inline-block">인기</span>
<h3 className="text-base font-medium text-zinc-900">머쉬룸 치즈 파니니</h3>
<p className="text-sm text-zinc-500 mt-1 mb-4 font-light">트러플 오일이 가미된 풍미</p>
<p className="text-sm font-medium text-zinc-900">₩11,000</p>
</div>
</div>
<div className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-300 transition-colors">
<div className="aspect-square overflow-hidden bg-zinc-100">
<img alt="크림 수프" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-[10px] font-medium text-zinc-500 border border-zinc-200 px-2 py-1 rounded-full mb-3 inline-block">베스트</span>
<h3 className="text-base font-medium text-zinc-900">갈릭 포테이토 수프</h3>
<p className="text-sm text-zinc-500 mt-1 mb-4 font-light">따뜻하고 부드러운 감자의 맛</p>
<p className="text-sm font-medium text-zinc-900">₩7,000</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4 sm:gap-6">
<div className="space-y-4 sm:space-y-6 pt-12">
<div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-100">
<img alt="커피 내리는 모습" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-100">
<img alt="카페 인테리어" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&amp;h=750&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 sm:space-y-6">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-100">
<img alt="테이블 세팅" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&amp;h=750&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-100">
<img alt="카페 분위기" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Our Story</span>
<h2 className="text-3xl lg:text-4xl tracking-tight font-normal text-zinc-900 mt-3 mb-8 font-serif-kr leading-tight">
                        모든 잔에 담긴<br/>우리의 이야기
                    </h2>
<div className="space-y-6 text-zinc-500 font-light leading-relaxed">
<p>
                            성수동 거리에 자리 잡은 <span className="font-medium text-zinc-900">Vibez</span>는 단순한 카페를 넘어, 커피 애호가와 미식가들, 그리고 번잡한 일상에서 벗어나 아늑한 휴식을 찾는 모든 이를 위한 안식처입니다.
                        </p>
<p>
                            매장을 연 첫날부터 우리는 맛있는 음식, 장인 정신이 담긴 커피와 함께 진솔한 대화가 자연스럽게 흘러나오는 공간을 만들기 위해 노력해 왔습니다. 갓 구운 크루아상부터 정성스레 준비된 브런치까지, 모든 메뉴는 열정과 세심함으로 완성됩니다.
                        </p>
</div>
<div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-zinc-100">
<div>
<p className="text-3xl tracking-tight font-normal text-zinc-900 font-serif-kr">4.8</p>
<p className="text-xs text-zinc-400 mt-2 font-medium">네이버 평점</p>
</div>
<div>
<p className="text-3xl tracking-tight font-normal text-zinc-900 font-serif-kr">1.2k+</p>
<p className="text-xs text-zinc-400 mt-2 font-medium">누적 리뷰</p>
</div>
<div>
<p className="text-3xl tracking-tight font-normal text-zinc-900 font-serif-kr">40+</p>
<p className="text-xs text-zinc-400 mt-2 font-medium">수제 메뉴</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Explore Menu</span>
<h2 className="text-3xl lg:text-4xl tracking-tight font-normal text-zinc-900 mt-3 font-serif-kr">
                    메뉴 안내
                </h2>
<p className="text-zinc-500 mt-4 max-w-lg mx-auto font-light">따뜻한 브런치부터 달콤한 디저트까지, 정성을 다해 준비한 메뉴들을 만나보세요.</p>
</div>
<div className="flex flex-wrap justify-center gap-2.5 mb-12">
<button className="px-5 py-2.5 text-xs font-medium rounded-full bg-zinc-900 text-white transition-colors">전체</button>
<button className="px-5 py-2.5 text-xs font-medium rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-colors">커피</button>
<button className="px-5 py-2.5 text-xs font-medium rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-colors">브런치</button>
<button className="px-5 py-2.5 text-xs font-medium rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-colors">베이커리</button>
<button className="px-5 py-2.5 text-xs font-medium rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-colors">디저트</button>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 border border-zinc-200">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900 font-serif-kr">시그니처 커피</h3>
<iconify-icon className="text-zinc-400" height="24" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<ul className="space-y-6">
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-medium text-zinc-900 block">바닐라 빈 크림 라떼</span>
<span className="text-xs text-zinc-500 mt-1 block">천연 바닐라 빈을 숙성시킨 시럽</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩6,500</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">플랫 화이트</span>
<span className="text-xs text-zinc-500 mt-1 block">진한 에스프레소와 부드러운 밀크폼</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩5,500</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">콜드브루 아인슈페너</span>
<span className="text-xs text-zinc-500 mt-1 block">수제 생크림이 올라간 콜드브루</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩7,000</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">클래식 아메리카노</span>
<span className="text-xs text-zinc-500 mt-1 block">두 가지 원두 중 선택 가능</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩5,000</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900 font-serif-kr">브런치 플레이트</h3>
<iconify-icon className="text-zinc-400" height="24" icon="solar:plate-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<ul className="space-y-6">
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-medium text-zinc-900 block">바이브즈 브런치 세트</span>
<span className="text-xs text-zinc-500 mt-1 block">소시지, 베이컨, 스크램블, 샐러드</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩16,500</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">아보카도 오픈 토스트</span>
<span className="text-xs text-zinc-500 mt-1 block">수란을 곁들인 사워도우 토스트</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩14,000</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">에그 베네딕트</span>
<span className="text-xs text-zinc-500 mt-1 block">홀랜다이즈 소스와 수제 햄</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩15,500</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">토마토 바질 파스타</span>
<span className="text-xs text-zinc-500 mt-1 block">생바질과 신선한 토마토 소스</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩17,000</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900 font-serif-kr">베이커리 &amp; 디저트</h3>
<iconify-icon className="text-zinc-400" height="24" icon="solar:pie-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<ul className="space-y-6">
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-medium text-zinc-900 block">클래식 버터 크루아상</span>
<span className="text-xs text-zinc-500 mt-1 block">프랑스산 AOP 버터 사용</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩4,500</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">바스크 치즈 케이크</span>
<span className="text-xs text-zinc-500 mt-1 block">고온에서 구워낸 진한 크림치즈</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩8,000</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">티라미수 타르트</span>
<span className="text-xs text-zinc-500 mt-1 block">마스카포네 크림과 에스프레소</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩8,500</span>
</li>
<li className="flex justify-between items-start">
<div>
<span className="text-sm font-normal text-zinc-700 block">레몬 얼그레이 파운드</span>
<span className="text-xs text-zinc-500 mt-1 block">상큼한 레몬 글레이즈 코팅</span>
</div>
<span className="text-sm font-medium text-zinc-900">₩6,000</span>
</li>
</ul>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-medium text-sm transition-colors border-b border-transparent hover:border-zinc-900 pb-0.5" href="#">
<iconify-icon height="16" icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    전체 메뉴 PDF 다운로드
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight font-normal text-zinc-900 font-serif-kr">
                    갤러리
                </h2>
<p className="text-zinc-500 mt-4 max-w-lg mx-auto font-light">공간의 무드와 메뉴의 디테일을 사진으로 만나보세요.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden">
<img alt="인테리어" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out cursor-pointer" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="aspect-square md:col-span-2 bg-zinc-100 rounded-2xl overflow-hidden">
<img alt="라떼아트" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out cursor-pointer" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&amp;h=600&amp;fit=crop"/>
</div>
<div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden">
<img alt="분위기" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out cursor-pointer" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden">
<img alt="브런치" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out cursor-pointer" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden">
<img alt="레스토랑" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out cursor-pointer" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="aspect-square md:col-span-2 bg-zinc-100 rounded-2xl overflow-hidden">
<img alt="디저트" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out cursor-pointer" src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Reviews</span>
<h2 className="text-3xl lg:text-4xl tracking-tight font-normal text-zinc-900 mt-3 font-serif-kr">
                    고객 후기
                </h2>
<div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 border border-zinc-200 mt-8 shadow-sm">
<div className="flex items-center text-zinc-900 gap-0.5">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="18"></iconify-icon>
</div>
<span className="text-xl font-medium text-zinc-900">4.8</span>
<span className="text-sm text-zinc-400 border-l border-zinc-200 pl-4">1,200+ 개의 후기 기준</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
<div className="flex items-center gap-0.5 text-zinc-900 mb-6">
<iconify-icon height="14" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-linear" style={{strokeWidth: '2', fill: 'currentColor'}} width="14"></iconify-icon>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-8 font-light">
                        "차분하고 모던한 인테리어가 정말 마음에 들어요. 특히 시그니처인 바닐라 빈 크림 라떼는 근</p></div></div></div></section>
    </>
  );
}
