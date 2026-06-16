import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#1A1A1A',
background: '#FAFAFA',
stone: '#8B8378',
accent: '#4A5240',
text: '#1A1A1A',
textSec: '#666666',
border: '#E5E5E5',
warmGray: '#F5F5F0',
},
fontFamily: {
sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Scroll Animation (Fade In)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-section').forEach(section => {
                observer.observe(section);
            });
        });

        // Form Handling
        const form = document.getElementById('pre-reg-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic Validation Check (HTML5 does most, this checks logic)
            const phone = document.getElementById('phone').value;
            const age = document.querySelector('input[name="age"]:checked');
            const career = document.querySelector('input[name="career"]:checked');

            if(phone && age && career) {
                alert("추후 서비스에 대한 추가 정보 발송 및 응답자 대상 무료 서비스 제공 관련 연락을 드리겠습니다. 응답해주셔서 감사합니다.");
                form.reset();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 bg-texture pointer-events-none z-0"></div>

<nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-bold text-xl tracking-tighter text-primary">TALK SIM</div>
<a className="text-sm font-medium text-textSec hover:text-primary transition-colors" href="#register">
                사전등록
            </a>
</div>
</nav>
<main className="relative z-10 max-w-3xl mx-auto px-6 overflow-hidden">

<section className="min-h-[85vh] flex flex-col justify-center items-center text-center py-20 fade-in-section">

<div className="relative w-48 h-48 mb-12 flex flex-col items-center justify-center space-y-[-10px]">

<div className="w-16 h-12 bg-stone shape-stone-3 opacity-90 relative z-30 translate-x-2"></div>

<div className="w-24 h-16 bg-primary shape-stone-2 relative z-20 -rotate-3"></div>

<div className="w-32 h-20 bg-stone/80 shape-stone relative z-10 translate-x-[-5px]"></div>
</div>
<h2 className="text-accent text-sm font-medium mb-4 tracking-wide uppercase">Workplace Relationship Training</h2>
<h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-primary mb-6">
                관계는 타고나는 게 아닙니다.<br/>
<span className="relative inline-block">
                    연습으로 단단해집니다.
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-stone/20 -z-10 -rotate-1 rounded-sm"></span>
</span>
</h1>
<p className="text-textSec text-base md:text-lg mb-10 leading-relaxed font-light">
                TALK SIM과 함께 직장에서<br/>
                나를 지키는 힘을 길러보세요.
            </p>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden transition-all hover:bg-accent" href="#register">
<span className="relative z-10">사전등록 신청하기</span>
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
</section>

<section className="py-24 border-t border-border fade-in-section">
<div className="text-center max-w-2xl mx-auto mb-16">
<h3 className="text-2xl font-semibold tracking-tight mb-8">TALK SIM이란?</h3>
<p className="text-lg text-textSec leading-relaxed font-light">
                    직장인들이 겪는 실제 관계 상황을 모아,<br/>
                    나에게 맞는 <span className="text-primary font-medium">대응 스타일을 발견</span>하고,<br/>
<span className="text-primary font-medium">연습까지 이어지는</span> 커뮤니티 기반 트레이닝 플랫폼입니다.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center space-y-4">
<div className="w-16 h-16 rounded-full bg-warmGray flex items-center justify-center mb-2">
<i className="w-8 h-8 text-stone stroke-[1.5]" data-lucide="message-circle"></i>
</div>
<span className="font-medium text-primary">함께 고민을 나누고</span>
</div>
<div className="flex flex-col items-center space-y-4">
<div className="w-16 h-16 rounded-full bg-warmGray flex items-center justify-center mb-2">
<i className="w-8 h-8 text-stone stroke-[1.5]" data-lucide="heart-handshake"></i>
</div>
<span className="font-medium text-primary">함께 노력하고</span>
</div>
<div className="flex flex-col items-center space-y-4">
<div className="w-16 h-16 rounded-full bg-warmGray flex items-center justify-center mb-2">
<i className="w-8 h-8 text-stone stroke-[1.5]" data-lucide="dumbbell"></i>
</div>
<span className="font-medium text-primary">함께 연습합니다</span>
</div>
</div>
</section>

<section className="py-24 fade-in-section">
<h3 className="text-2xl font-semibold tracking-tight mb-12 text-center">어떻게 연습하나요?</h3>
<div className="space-y-8">

<div className="hand-drawn-box p-8 bg-white card-hover relative group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-stone" data-lucide="users"></i>
</div>
<div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">Program 01</div>
<h4 className="text-xl font-semibold mb-3">직장인 대인관계 토크 트레이닝 <span className="block text-textSec font-light text-base mt-1">"같이 연습할래?"</span></h4>
<p className="text-textSec text-sm mb-6 leading-relaxed">비대면/익명으로 진행되며, 지지적 환경에서 안전하게 말해보는 경험을 제공합니다.</p>
<div className="flex items-center justify-between text-xs font-medium text-stone mt-4 border-t border-border pt-4">
<span>상황</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
<span>생각</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
<span>핵심</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
<span>역량</span>
</div>
</div>

<div className="hand-drawn-box p-8 bg-white card-hover relative group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-stone" data-lucide="pen-tool"></i>
</div>
<div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">Program 02</div>
<h4 className="text-xl font-semibold mb-3">마음토크 챌린지 <span className="block text-textSec font-light text-base mt-1">"하루하루 기록하는 나의 마음 토크"</span></h4>
<p className="text-textSec text-sm mb-4 leading-relaxed">하루 5분 한 줄 댓글 작성으로 단단한 내면을 만듭니다.</p>
<ul className="text-sm text-textSec space-y-1 list-disc list-inside marker:text-stone">
<li>오늘의 나 칭찬하기</li>
<li>다른 사람 사연 구독 및 답글 남기기</li>
</ul>
</div>

<div className="hand-drawn-box p-8 bg-white card-hover relative group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-stone" data-lucide="clipboard-list"></i>
</div>
<div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">Program 03</div>
<h4 className="text-xl font-semibold mb-3">대인관계 심리검사 <span className="block text-textSec font-light text-base mt-1">"왜 나는 저 사람이 힘들까?"</span></h4>
<p className="text-textSec text-sm mb-4 leading-relaxed">단순 성격 탓이 아닌 관계 패턴의 문제로 이해하도록 돕습니다.</p>
<div className="inline-block bg-warmGray px-3 py-1 rounded-full text-xs text-textSec">성인애착유형 검사 / KIIP-CS 제공</div>
</div>
</div>
</section>

<section className="py-24 border-t border-border bg-warmGray/30 -mx-6 px-6 fade-in-section">
<h3 className="text-2xl font-semibold tracking-tight mb-12 text-center">먼저 경험한 분들의 이야기</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-6 shadow-sm border border-border rotate-1 transition-transform hover:rotate-0 hover:z-10">
<div className="flex items-start mb-4">
<div className="w-8 h-8 rounded-full bg-stone/20 flex items-center justify-center mr-3 shrink-0">
<i className="w-4 h-4 text-stone" data-lucide="user"></i>
</div>
<p className="text-sm text-textSec leading-relaxed">
                            "회사에서 사람 때문에 지쳤는데 사람으로 다시 힘을 얻었습니다. 톡심에서 만난 사람들과 서로 응원해주면서 트레이닝 받을 수 있어서 재밌었습니다!"
                        </p>
</div>
</div>

<div className="bg-white p-6 shadow-sm border border-border -rotate-1 transition-transform hover:rotate-0 hover:z-10">
<div className="flex items-start mb-4">
<div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3 shrink-0">
<i className="w-4 h-4 text-accent" data-lucide="smile"></i>
</div>
<p className="text-sm text-textSec leading-relaxed">
                            "멘탈 강해지는 법 유튜브 영상도 많이 찾아봤었는데 막상 실천을 못했었어요. 근데 여기서는 말을 해볼 수 있게 기회를 주고 응원도 해주니까 조금씩 용기 내게 되더라고요."
                        </p>
</div>
</div>

<div className="bg-white p-6 shadow-sm border border-border rotate-1 transition-transform hover:rotate-0 hover:z-10">
<div className="flex items-start mb-4">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0">
<i className="w-4 h-4 text-primary" data-lucide="coffee"></i>
</div>
<p className="text-sm text-textSec leading-relaxed">
                            "직장내괴롭힘 때문에 상담도 받았었는데 매번 상담 비용이 부담스럽더라고요. 톡심은 한번 비용내면 여러번 그룹 토크에 참여할 수 있게 해주니까 좋았어요."
                        </p>
</div>
</div>

<div className="bg-white p-6 shadow-sm border border-border -rotate-1 transition-transform hover:rotate-0 hover:z-10">
<div className="flex items-start mb-4">
<div className="w-8 h-8 rounded-full bg-stone/20 flex items-center justify-center mr-3 shrink-0">
<i className="w-4 h-4 text-stone" data-lucide="award"></i>
</div>
<p className="text-sm text-textSec leading-relaxed">
                            "상담이랑 코칭이 병행이 되서 좋았습니다! 덕분에 회사에서도 자신있게 대인관계를 할 수 있겠다는 용기를 얻었습니다."
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 fade-in-section">
<div className="hand-drawn-box p-8 md:p-12 bg-white text-center border-stone">
<h3 className="text-2xl font-semibold tracking-tight mb-8">이런 분들에게 추천합니다</h3>
<div className="grid gap-4 text-left md:w-3/4 mx-auto">
<div className="flex items-start">
<i className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-textSec">직장에서 사람 때문에 유독 멘탈이 흔들리는 분</span>
</div>
<div className="flex items-start">
<i className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-textSec">사람들과 대화하며 풀고 싶은데, 혼자서는 어려운 분</span>
</div>
<div className="flex items-start">
<i className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-textSec">멘탈 관리의 필요성은 느끼지만 늘 흐지부지 끝났던 분</span>
</div>
<div className="flex items-start">
<i className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-textSec">상담이나 교육은 부담스럽고, 그래도 혼자는 힘든 분</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-border fade-in-section">
<h3 className="text-2xl font-semibold tracking-tight mb-16 text-center">우리가 만드는 변화</h3>
<div className="space-y-16">
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center shrink-0 text-xl font-serif text-stone">1</div>
<div>
<h4 className="text-lg font-semibold mb-2">단단한 멘탈의 '기반'을 함께 만듭니다</h4>
<p className="text-textSec font-light leading-relaxed">외부의 공격과 말에 쉽게 무너지지 않는 기준을 세우고, 상황과 감정을 분리해서 바라보는 힘을 기릅니다.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center shrink-0 text-xl font-serif text-stone">2</div>
<div>
<h4 className="text-lg font-semibold mb-2">사람들과 교류하며 지지받는 경험</h4>
<p className="text-textSec font-light leading-relaxed">혼자가 아니라는 감각, 그리고 나를 있는 그대로 이해해주는 사람들과의 연결을 통해 회복합니다.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center shrink-0 text-xl font-serif text-stone">3</div>
<div>
<h4 className="text-lg font-semibold mb-2">스스로를 지킬 수 있는 힘</h4>
<p className="text-textSec font-light leading-relaxed">감정에 끌려가지 않고 나를 지키는 선택을 할 수 있도록, 구체적인 관점과 기술을 함께 연습합니다.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary text-white -mx-6 px-6 relative overflow-hidden fade-in-section" id="register">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-stone/20 rounded-full blur-3xl"></div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">TALK SIM 사전등록 신청</h2>
<p className="text-gray-400 font-light">서비스 오픈 시 가장 먼저 안내받으세요.</p>
</div>
<form className="space-y-6" id="pre-reg-form">

<div className="space-y-2">
<label className="text-sm font-medium text-gray-300" htmlFor="phone">전화번호</label>
<input className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" id="phone" placeholder="010-0000-0000" required="" type="tel"/>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">연령대</label>
<div className="grid grid-cols-4 gap-2">
<div>
<input className="custom-radio hidden" id="age-20" name="age" required="" type="radio" value="20s"/>
<label className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-sm cursor-pointer hover:bg-white/5 transition-all" htmlFor="age-20">20대</label>
</div>
<div>
<input className="custom-radio hidden" id="age-30" name="age" type="radio" value="30s"/>
<label className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-sm cursor-pointer hover:bg-white/5 transition-all" htmlFor="age-30">30대</label>
</div>
<div>
<input className="custom-radio hidden" id="age-40" name="age" type="radio" value="40s"/>
<label className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-sm cursor-pointer hover:bg-white/5 transition-all" htmlFor="age-40">40대</label>
</div>
<div>
<input className="custom-radio hidden" id="age-50" name="age" type="radio" value="50s"/>
<label className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-sm cursor-pointer hover:bg-white/5 transition-all" htmlFor="age-50">50대+</label>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">경력</label>
<div className="grid grid-cols-2 gap-2">
<div>
<input className="custom-radio hidden" id="car-1" name="career" required="" type="radio" value="1-3"/>
<label className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-sm cursor-pointer hover:bg-white/5 transition-all" htmlFor="car-1">1-3년차</label>
</div>
<div>
<input className="custom-radio hidden" id="car-3" name="career" type="radio" value="3-5"/>
<label className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-sm cursor-pointer hover:bg-white/5 transition-all" htmlFor="car-3">3-5년차</label>
</div>
<div>
<input className="custom-radio hidden" id="car-5" name="career" type="radio" value="5-10"/>
<label className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-sm cursor-pointer hover:bg-white/5 transition-all" htmlFor="car-5">5-10년차</label>
</div>
<div>
<input className="custom-radio hidden" id="car-10" name="career" type="radio" value="10+"/>
<label className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-sm cursor-pointer hover:bg-white/5 transition-all" htmlFor="car-10">10년차 이상</label>
</div>
</div>
</div>

<div className="pt-2 checkbox-wrapper">
<label className="flex items-start cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-5 w-5 opacity-0 absolute" id="agree" type="checkbox"/>
<div className="bg-white/5 border border-white/20 w-5 h-5 flex shrink-0 justify-center items-center rounded focus-within:border-accent transition-colors">
<svg className="hidden w-3 h-3 text-white pointer-events-none" version="1.1" viewbox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" fill-rule="evenodd">
<g fill="currentColor" fill-rule="nonzero" transform="translate(-9 -11)">
<path d="M25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
</g>
</g>
</svg>
</div>
</div>
<span className="ml-3 text-sm text-gray-400 select-none">향후 TALK SIM 서비스에 대한 추가 정보를 받아보시겠습니까?</span>
</label>
</div>
<button className="w-full bg-accent hover:bg-[#5a6350] text-white font-semibold py-4 rounded-lg mt-6 transition-all transform active:scale-[0.98]" type="submit">
                        사전등록 완료하기
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-border py-12">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="font-bold text-lg tracking-tighter text-primary mb-4">TALK SIM</div>
<p className="text-xs text-textSec mb-6">
                © 2024 TALK SIM. All rights reserved.
            </p>
<div className="flex justify-center space-x-6">
<a className="text-xs text-stone hover:text-primary transition-colors" href="#">개인정보처리방침</a>
<a className="text-xs text-stone hover:text-primary transition-colors" href="#">이용약관</a>
</div>
</div>
</footer>



    </>
  );
}
