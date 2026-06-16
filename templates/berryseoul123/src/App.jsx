import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"DM Sans"', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
black: '#0f0f0f',
red: '#D01B1B',
cream: '#F7F4EB',
}
},
animation: {
'scroll': 'scroll 20s linear infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  // Ensure background video plays across all browsers
  document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("bg-video");
    if (video) {
      video.muted = true;
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(function(error) {
          console.log("Autoplay prevented. Handling silently.");
        });
      }
    }
  });



    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('brandVideo');
    const container = document.getElementById('videoContainer');
    // 구글 드라이브 프리뷰 링크 사용 (직접 다운로드 링크보다 안정적으로 재생됨)
    const videoUrl = "https://drive.google.com/file/d/1lkqFp1ean2ISW4T945hcw7Hv35Iw67UC/preview";

    function openVideoModal() {
      iframe.src = videoUrl; // 모달이 열릴 때 영상 소스 삽입
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      // Small delay to allow display:flex to apply before animating opacity
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        container.classList.remove('scale-95');
        container.classList.add('scale-100');
      }, 10);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeVideoModal() {
      modal.classList.add('opacity-0');
      container.classList.remove('scale-100');
      container.classList.add('scale-95');
      
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        iframe.src = ""; // 모달이 닫히면 영상 재생을 멈추기 위해 소스 제거
      }, 300); // Match duration-300
      
      document.body.style.overflow = '';
    }

    // Close on clicking outside the video
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeVideoModal();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-screen -z-20 bg-black">
<video autoplay="" className="w-full h-full object-cover opacity-90" id="bg-video" loop="" muted="" playsinline="">
<source src="https://drive.google.com/uc?export=download&amp;id=162BiV1KMi5T_VQByP2EPg3uP8DnWNkSP" type="video/mp4"/>
</video>
</div>


<header className="fixed flex z-50 pt-6 pr-4 pb-6 pl-4 top-0 right-0 left-0 justify-center">
<nav className="flex bg-[#931a1a] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39244a72-258f-43a6-985d-81ff96475219_1600w.png)] max-w-7xl bg-contain border-white/10 border-0 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-xl backdrop-blur-md grayscale-0 invert-0 items-center justify-between">
<div className="flex gap-2 pl-2 items-center">
<a className="lowercase sm:text-5xl text-xl font-semibold text-slate-50 tracking-tight font-display bg-[#d01b1b]/70" href="#home">Berry Seoul</a>
</div>
<div className="flex items-center gap-2 sm:gap-4">

<div className="relative group flex items-center z-50">
<button className="flex items-center gap-1 sm:gap-1.5 text-white hover:text-brand-cream font-bold text-xs sm:text-sm transition-all py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-black/20 hover:bg-black/30 border border-white/10 backdrop-blur-sm cursor-pointer">
<iconify-icon className="text-base sm:text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="tracking-tight leading-none mt-0.5">EN</span>
<iconify-icon className="text-xs sm:text-sm transition-transform duration-200 group-hover:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<div className="absolute top-[calc(100%+0.5rem)] right-0 w-20 rounded-xl bg-white shadow-xl border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top flex flex-col py-2 transform scale-95 group-hover:scale-100">
<a className="px-4 py-2 text-sm font-bold text-brand-black/70 hover:bg-brand-cream hover:text-brand-red transition-colors text-center tracking-tight" href="#">한</a>
<a className="px-4 py-2 text-sm font-bold text-brand-black/70 hover:bg-brand-cream hover:text-brand-red transition-colors text-center tracking-tight" href="#">日</a>
<a className="px-4 py-2 text-sm font-bold text-brand-black/70 hover:bg-brand-cream hover:text-brand-red transition-colors text-center tracking-tight" href="#">中</a>
</div>
</div>
<a className="hidden transition-colors hover:text-white sm:block text-lg font-extrabold text-gray-50/90 tracking-tight bg-[#d01b1b]/80 opacity-100 mix-blend-normal" href="#gift-editions">Order Online</a>
<a className="inline-flex items-center gap-2 hover:text-brand-red transition-all hover:bg-white sm:text-lg text-base font-extrabold text-white tracking-tight bg-[#f54747] rounded-xl px-4 sm:px-5 py-2 sm:py-2.5 shadow-md" href="#pop-up">
<iconify-icon className="" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
          Visit Pop-up
        </a>
</div>
</nav>
</header>
<main className="" id="home">

<section className="min-h-screen flex flex-col overflow-hidden text-center bg-[#d01b1b]/70 pt-0 pb-0 relative items-center justify-center backdrop-blur-[2px]">
<style className="">
    /* Direction Animations - Updated with scale variable to preserve size during transform */
    @keyframes hopRight {
      0% {
        transform: translateX(-50vw) scale(var(--r-scale, 1));
      }

      100% {
        transform: translateX(150vw) scale(var(--r-scale, 1));
      }
    }

    @keyframes hopLeft {
      0% {
        transform: translateX(150vw) scale(var(--r-scale, 1));
      }

      100% {
        transform: translateX(-50vw) scale(var(--r-scale, 1));
      }
    }

    /* Bouncing Animations (Left and Right lean) */
    @keyframes hopBounceRight {
      0% {
        transform: translateY(0) rotate(15deg) scaleY(0.85) scaleX(1.15);
        animation-timing-function: ease-out;
      }

      50% {
        transform: translateY(-160px) rotate(-5deg) scaleY(1.05) scaleX(0.95);
        animation-timing-function: ease-in;
      }

      100% {
        transform: translateY(0) rotate(15deg) scaleY(0.85) scaleX(1.15);
      }
    }

    @keyframes hopBounceLeft {
      0% {
        transform: translateY(0) rotate(-15deg) scaleY(0.85) scaleX(1.15);
        animation-timing-function: ease-out;
      }

      50% {
        transform: translateY(-160px) rotate(5deg) scaleY(1.05) scaleX(0.95);
        animation-timing-function: ease-in;
      }

      100% {
        transform: translateY(0) rotate(-15deg) scaleY(0.85) scaleX(1.15);
      }
    }

    /* Base Wrapper */
    .rabbit-wrapper {
      position: absolute;
      left: 0;
      z-index: 20;
      pointer-events: none;
      /* animation-fill-mode 설정으로 딜레이 동안 화면 중간에 나타나는 것을 방지합니다 */
      animation-fill-mode: both; 
    }

    /* 1. Base Rabbit (Left to Right) */
    .rabbit-1 {
      bottom: 15%;
      --r-scale: 1;
      animation: hopRight 10s linear infinite;
      animation-delay: -2s;
    }

    .rabbit-1 .rabbit-inner {
      animation: hopBounceRight 0.6s infinite;
    }

    /* 2. Smaller Rabbit (Right to Left) */
    .rabbit-2 {
      bottom: 28%;
      --r-scale: 0.75;
      animation: hopLeft 12s linear infinite;
      animation-delay: 1s; /* 페이지 진입 1초 후 오른쪽 화면 밖에서 나타남 */
    }

    .rabbit-2 .rabbit-inner {
      animation: hopBounceLeft 0.55s infinite;
    }

    .rabbit-2 img {
      transform: scaleX(-1);
      /* Flips the image to face left */
    }

    /* 3. Larger Rabbit (Left to Right, Foreground) */
    .rabbit-3 {
      bottom: 2%;
      --r-scale: 1.2;
      animation: hopRight 14s linear infinite;
      animation-delay: 2.5s; /* 페이지 진입 2.5초 후 왼쪽 화면 밖에서 나타남 */
    }

    .rabbit-3 .rabbit-inner {
      animation: hopBounceRight 0.75s infinite;
    }

    /* 4. Tiny Distant Rabbit (Right to Left, Background) */
    .rabbit-4 {
      bottom: 45%;
      --r-scale: 0.5;
      animation: hopLeft 18s linear infinite;
      animation-delay: -5s; /* 로딩 시 이미 중앙 근처를 지나가는 중 */
      z-index: 10;
    }

    .rabbit-4 .rabbit-inner {
      animation: hopBounceLeft 0.5s infinite;
    }

    .rabbit-4 img {
      transform: scaleX(-1);
    }
  </style>

<div className="z-10 flex flex-col max-w-4xl mr-auto mb-16 ml-auto pr-6 pl-6 relative items-center">
<span className="sm:text-base text-sm font-medium text-white/90 tracking-tight font-sans bg-black/10 border-white/20 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md">
          Still struggling to find the perfect souvenir from Korea?
        </span>
<h1 className="sm:text-8xl md:text-[11rem] leading-[0.85] lowercase text-6xl font-semibold text-white tracking-tight font-display mb-6 drop-shadow-sm">
      Berry Seoul</h1>
<p className="leading-relaxed sm:text-2xl text-base font-bold tracking-tight font-sans max-w-lg text-white/90 mb-8">Touchdown
      Korea, It’s Berry Seoul-ful.</p>

<button className="group flex hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-white bg-white/10 border-white/20 border rounded-full pt-2 pr-6 pb-2 pl-2 shadow-lg backdrop-blur-md gap-x-3 gap-y-3 items-center" onclick="openVideoModal();window.location.href='https://res.cloudinary.com/dbo9k6xne/video/upload/v1773880894/%EC%8A%A4%EB%8B%88%EC%BB%A4%EC%A6%88_%EB%B2%A0%EB%A6%AC_%EC%84%9C%EC%9A%B8_%EC%B4%88_%ED%99%8D%EB%B3%B4_%EC%98%81%EC%83%81_vtaysl.mp4'" role="button">
<div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
<iconify-icon className="text-xl translate-x-[1px]" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="sm:text-base text-sm font-semibold tracking-tight font-sans">Watch Brand Film</span>
</button>
</div>

<div className="rabbit-wrapper rabbit-1">
<div className="rabbit-inner w-36 h-36 sm:w-52 sm:h-52 drop-shadow-2xl">
<img alt="Rabbit" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39244a72-258f-43a6-985d-81ff96475219_1600w.png"/>
</div>
</div>
<div className="rabbit-wrapper rabbit-2">
<div className="rabbit-inner w-36 h-36 sm:w-52 sm:h-52 drop-shadow-xl">
<img alt="Rabbit" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39244a72-258f-43a6-985d-81ff96475219_1600w.png"/>
</div>
</div>
<div className="rabbit-wrapper rabbit-3">
<div className="rabbit-inner w-40 h-40 sm:w-60 sm:h-60 drop-shadow-2xl">
<img alt="Rabbit" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39244a72-258f-43a6-985d-81ff96475219_1600w.png"/>
</div>
</div>
<div className="rabbit-wrapper rabbit-4">
<div className="rabbit-inner w-32 h-32 sm:w-48 sm:h-48 drop-shadow-md">
<img alt="Rabbit" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39244a72-258f-43a6-985d-81ff96475219_1600w.png"/>
</div>
</div>

<div className="wavy-bottom absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-brand-cream z-0"></div>
</section>

<div className="overflow-hidden border-brand-black/10 z-10 border-b pt-8 pb-8 relative grayscale-0 bg-brand-cream">
<div className="flex animate-scroll whitespace-nowrap items-center w-[100%]">
<div className="flex sm:gap-24 sm:px-24 pr-12 pl-12 gap-x-12 gap-y-12 items-center justify-center">
<span className="text-3xl sm:text-5xl text-brand-black lowercase font-semibold tracking-tight font-display">
            premium taste
          </span>
<iconify-icon className="text-brand-red sm:text-3xl text-2xl" height="30" icon="solar:crown-outline" style={{strokeWidth: '1.5', color: 'rgb(208, 27, 27)'}} width="30"></iconify-icon>
<span className="text-3xl sm:text-5xl text-brand-black lowercase font-semibold tracking-tight font-display">
            modern korean identity
          </span>
<iconify-icon className="text-brand-red sm:text-3xl text-2xl" height="30" icon="solar:crown-outline" style={{strokeWidth: '1.5', color: 'rgb(208, 27, 27)'}} width="30"></iconify-icon>
<span className="sm:text-5xl text-brand-black lowercase text-3xl font-semibold tracking-tight font-display">
            travel-optimized
          </span>
<iconify-icon className="text-brand-red sm:text-3xl text-2xl" height="30" icon="solar:crown-outline" style={{strokeWidth: '1.5', color: 'rgb(208, 27, 27)'}} width="30"></iconify-icon>
<span className="text-3xl sm:text-5xl text-brand-black lowercase font-semibold tracking-tight font-display">
            total satisfaction
          </span>
<iconify-icon className="text-brand-red text-2xl sm:text-3xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="flex items-center gap-12 sm:gap-24 px-12 sm:px-24">
<span className="text-3xl sm:text-5xl text-brand-black lowercase font-semibold tracking-tight font-display">
            premium taste
          </span>
<iconify-icon className="text-brand-red sm:text-3xl text-2xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-3xl sm:text-5xl text-brand-black lowercase font-semibold tracking-tight font-display">
            modern korean identity
          </span>
<iconify-icon className="text-brand-red text-2xl sm:text-3xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-3xl sm:text-5xl text-brand-black lowercase font-semibold tracking-tight font-display">
            travel-optimized
          </span>
<iconify-icon className="text-brand-red text-2xl sm:text-3xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-3xl sm:text-5xl text-brand-black lowercase font-semibold tracking-tight font-display">
            total satisfaction
          </span>
<iconify-icon className="text-brand-red text-2xl sm:text-3xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<section className="md:px-8 pt-24 pr-6 pb-24 pl-6 bg-brand-cream relative z-10">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end gap-8">
<div className="max-w-2xl">
<h2 className="md:text-5xl lowercase text-brand-black leading-tight text-4xl font-semibold text-[#d01b1b] tracking-tight font-display">The sweetest way <br/><span className="text-brand-red text-[#0f0f0f]">to gift Korea.</span></h2>
</div>
<p className="mt-6 md:mt-0 text-sm text-brand-black/70 font-sans max-w-sm leading-relaxed">
            A signature dessert that delivers warm, comforting sweetness in every bite. Designed to fit perfectly in your suitcase.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-sm border border-brand-black/5 hover:border-brand-black/20 transition-all bg-white">
<img alt="Korean Dessert" className="transition-transform duration-700 group-hover:scale-105 grayscale-[20%] hover:grayscale-0 opacity-95 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6b80757-3716-45f9-8ecf-659d712f6859_3840w.jpg?w=800&amp;q=80"/>
</div>

<div className="aspect-square flex flex-col group hover:-translate-y-1 transition-transform text-center rounded-[2rem] p-8 relative shadow-sm items-center justify-center bg-brand-black border border-brand-black/10">
<iconify-icon className="text-3xl text-brand-cream/50 absolute top-8 right-8" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl md:text-3xl lowercase leading-snug font-semibold font-display tracking-tight z-10 text-white">
              For those who want to share more than just a souvenir.
            </h3>
<div className="mt-8 w-12 h-1 bg-brand-red rounded-full group-hover:w-24 transition-all"></div>
</div>

<div className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-sm border border-brand-black/5 hover:border-brand-black/20 transition-all bg-white">
<img alt="Gift Packaging" className="transition-transform duration-700 group-hover:scale-105 grayscale-[20%] hover:grayscale-0 opacity-95 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55eb1602-4693-4ea2-8b5c-c7b8e5324980_3840w.png"/>
</div>

<div className="relative aspect-square rounded-[2rem] bg-brand-red p-8 flex flex-col justify-center shadow-sm group hover:-translate-y-1 transition-transform border border-brand-red/80 text-left">
<iconify-icon className="text-3xl absolute top-8 right-8 text-white/30" icon="solar:suitcase-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<ul className="space-y-4 relative z-10">
<li className="border-b pb-4 border-white/20">
<span className="block text-xs uppercase font-semibold tracking-tight mb-1 text-white/80">Thoughtful Traveler</span>
<span className="text-sm font-medium leading-tight block text-white">Represents Korea, not just a generic snack.</span>
</li>
<li className="border-b pb-4 border-white/20">
<span className="block text-xs uppercase font-semibold tracking-tight mb-1 text-white/80">Practical Packer</span>
<span className="text-sm font-medium leading-tight block text-white">Easy to carry, won't spoil during travel.</span>
</li>
<li className="">
<span className="block text-xs uppercase font-semibold tracking-tight mb-1 text-white/80">Value Seeker</span>
<span className="text-sm font-medium leading-tight block text-white">Sophisticated gift that stays within budget.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="md:px-8 border-y border-brand-black/5 pt-24 pr-6 pb-24 pl-6 bg-white relative z-10">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<p className="uppercase text-xs font-semibold tracking-tight text-brand-red font-sans mb-3 flex items-center gap-2">
<iconify-icon icon="solar:route-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Process
          </p>
<h2 className="text-4xl md:text-5xl lowercase font-display font-semibold tracking-tight text-brand-black">
            How to meet berry seoul
          </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
<div className="relative group">
<div className="absolute top-6 left-12 w-full h-[1px] bg-brand-black/10 hidden lg:block"></div>
<div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-black/10 text-brand-red flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight font-display text-brand-black lowercase mb-3">Explore</h3>
<p className="text-sm text-brand-black/60 font-sans leading-relaxed">Watch our product story and brand journey on our social channels.</p>
</div>
<div className="relative group">
<div className="absolute top-6 left-12 w-full h-[1px] bg-brand-black/10 hidden lg:block"></div>
<div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-black/10 text-brand-red flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight font-display text-brand-black lowercase mb-3">Experience</h3>
<p className="text-sm text-brand-black/60 font-sans leading-relaxed">Visit our pop-up store to taste the warmth and sweetness for yourself.</p>
</div>
<div className="relative group">
<div className="absolute top-6 left-12 w-full h-[1px] bg-brand-black/10 hidden lg:block"></div>
<div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-black/10 text-brand-red flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight font-display text-brand-black lowercase mb-3">Select</h3>
<p className="text-sm text-brand-black/60 font-sans leading-relaxed">Choose your favorite set wrapped in our premium travel-ready packaging.</p>
</div>
<div className="relative group">
<div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-black/10 text-brand-red flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight font-display text-brand-black lowercase mb-3">Share</h3>
<p className="text-sm text-brand-black/60 font-sans leading-relaxed">Gift the authentic taste of Seoul to your loved ones back home.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-cream px-6 md:px-8 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-[2rem] p-10 border border-brand-black/5 shadow-sm hover:shadow-md transition-shadow group flex flex-col bg-white">
<div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center mb-8 border border-brand-black/5 text-brand-red">
<iconify-icon className="text-2xl" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight font-display text-brand-black lowercase mb-2">Taste</h3>
<p className="text-brand-red text-sm font-semibold mb-6 tracking-tight">A warm, sweet hug in every bite.</p>
<p className="text-sm text-brand-black/60 font-sans leading-relaxed flex-grow">We believe a great dessert should evoke a memory. berry seoul offers a deep, comforting sweetness that recreates the cozy atmosphere of a Seoul afternoon. Crafted to be loved by everyone.</p>
</div>
<div className="rounded-[2rem] p-10 border border-brand-black/5 shadow-sm hover:shadow-md transition-shadow group flex flex-col bg-white">
<div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center mb-8 border border-brand-black/5 text-brand-red">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight font-display text-brand-black lowercase mb-2">Symbolism</h3>
<p className="text-brand-red text-sm font-semibold mb-6 tracking-tight">Capturing the essence of Korea.</p>
<p className="text-sm text-brand-black/60 font-sans leading-relaxed flex-grow">From our name to our minimalist design, every detail reflects modern Korean aesthetics. It’s not just food; it’s a cultural icon you can carry. Gift a piece of Korea that looks as beautiful as it tastes.</p>
</div>
<div className="rounded-[2rem] p-10 border border-brand-black/5 shadow-sm hover:shadow-md transition-shadow group flex flex-col bg-white">
<div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center mb-8 border border-brand-black/5 text-brand-red">
<iconify-icon className="text-2xl" icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight font-display text-brand-black lowercase mb-2">Portability</h3>
<p className="text-brand-red text-sm font-semibold mb-6 tracking-tight">The perfect travel companion.</p>
<p className="text-sm text-brand-black/60 font-sans leading-relaxed flex-grow">No more worrying about heavy or fragile gifts. berry seoul is designed with a "travel-first" philosophy. Compact packaging and room-temperature storage mean you can pack it with confidence.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-8 border-t border-brand-black/5 bg-white relative z-10" id="gift-editions">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl lowercase font-display font-semibold tracking-tight text-brand-black">
            Our Gift Editions
          </h2>
<p className="mt-4 text-sm text-brand-black/60 max-w-lg mx-auto">
            Choose the perfect set to carry home.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-[2rem] border border-brand-black/10 bg-brand-cream shadow-sm p-8 hover:border-brand-black/30 transition-colors flex flex-col relative overflow-hidden">
<h3 className="lowercase font-display font-semibold tracking-tight text-2xl text-brand-black mb-3">Standard Box</h3>
<p className="text-sm text-brand-black/60 flex-grow leading-relaxed">A light and perfect gift for friends or colleagues.</p>
<div className="mt-8 pt-6 border-t border-brand-black/10 flex items-center justify-between">
<span className="text-xs font-semibold uppercase tracking-tight text-brand-black/50">4 Pieces</span>
<button className="flex items-center gap-2 text-sm font-semibold tracking-tight text-brand-red hover:text-brand-black transition-colors">
                 Order <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="rounded-[2rem] border-2 border-brand-red shadow-md p-8 hover:shadow-lg transition-all flex flex-col relative overflow-hidden transform md:-translate-y-4 bg-white">
<div className="absolute top-0 right-0 bg-brand-red text-[10px] uppercase font-bold tracking-tight px-3 py-1 rounded-bl-xl text-white">Best Choice</div>
<h3 className="lowercase font-display font-semibold tracking-tight text-2xl text-brand-black mb-3">Traveler Set</h3>
<p className="text-sm text-brand-black/60 flex-grow leading-relaxed">A curated bundle optimized for fitting into carry-on luggage without taking up space.</p>
<div className="mt-8 pt-6 border-t border-brand-black/10 flex items-center justify-between">
<span className="text-xs font-semibold uppercase tracking-tight text-brand-black/50">8 Pieces</span>
<button className="flex items-center gap-2 text-sm font-semibold tracking-tight text-brand-red hover:text-brand-black transition-colors">
                 Order <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="rounded-[2rem] border border-brand-black/10 bg-brand-cream shadow-sm p-8 hover:border-brand-black/30 transition-colors flex flex-col relative overflow-hidden">
<h3 className="lowercase font-display font-semibold tracking-tight text-2xl text-brand-black mb-3">Premium Edition</h3>
<p className="text-sm text-brand-black/60 flex-grow leading-relaxed">An elegant, larger set designed specifically for those extra special people in your life.</p>
<div className="mt-8 pt-6 border-t border-brand-black/10 flex items-center justify-between">
<span className="text-xs font-semibold uppercase tracking-tight text-brand-black/50">16 Pieces</span>
<button className="flex items-center gap-2 text-sm font-semibold tracking-tight text-brand-red hover:text-brand-black transition-colors">
                 Order <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-8 text-white z-10 pt-24 pr-6 pb-24 pl-6 relative" id="pop-up">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="">
<div className="mb-12">
<p className="uppercase text-xs font-semibold tracking-tight text-brand-red font-sans mb-3 flex items-center gap-2">
<iconify-icon icon="solar:chat-round-like-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Experience
            </p>
<h2 className="text-3xl md:text-4xl lowercase font-display font-semibold tracking-tight text-brand-cream">
              What travelers love about berry seoul
            </h2>
</div>
<div className="space-y-6">
<div className="p-8 rounded-[2rem] border transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<div className="flex gap-1 mb-4 text-brand-red">
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed font-medium text-white/90">"Finally, a Korean souvenir that isn't bulky and actually tastes premium!"</p>
</div>
<div className="p-8 rounded-[2rem] border transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<div className="flex gap-1 mb-4 text-brand-red">
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed font-medium text-white/90">"The design is so chic. It felt like I was gifting a piece of Seoul’s culture."</p>
</div>
<div className="p-8 rounded-[2rem] border transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<div className="flex gap-1 mb-4 text-brand-red">
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed font-medium text-white/90">"The compact size made it so easy to bring back several boxes in my suitcase without any mess."</p>
</div>
</div>
</div>

<div className="">
<div className="mb-12">
<p className="uppercase text-xs font-semibold tracking-tight text-brand-red font-sans mb-3 flex items-center gap-2">
<iconify-icon icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Support
            </p>
<h2 className="text-3xl md:text-4xl lowercase font-display font-semibold tracking-tight text-brand-cream">
              Frequently Asked Questions
            </h2>
</div>
<div className="space-y-4">

<details className="group border rounded-[1.5rem] [&amp;_summary::-webkit-details-marker]:hidden open:bg-white/10 transition-colors bg-white/5 border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold tracking-tight text-white">
                Does it need to be refrigerated?
                <span className="transition group-open:rotate-180 text-brand-red">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                No, berry seoul is a shelf-stable product that stays fresh at room temperature, making it ideal for international travel.
              </div>
</details>
<details className="group border rounded-[1.5rem] [&amp;_summary::-webkit-details-marker]:hidden open:bg-white/10 transition-colors bg-white/5 border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold tracking-tight text-white">
                Where can I find the pop-up store?
                <span className="transition group-open:rotate-180 text-brand-red">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                Use our 'Find Pop-up' button in the navigation menu to see current locations and tasting schedules in Seoul.
              </div>
</details>
<details className="group border rounded-[1.5rem] [&amp;_summary::-webkit-details-marker]:hidden open:bg-white/10 transition-colors bg-white/5 border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold tracking-tight text-white">
                Is the packaging sturdy enough for a long flight?
                <span className="transition group-open:rotate-180 text-brand-red">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                Yes, our boxes are specifically designed to be compact yet durable to withstand the rigors of travel inside your checked or carry-on luggage.
              </div>
</details>
</div>
</div>
</div>
</section>
</main>

<footer className="md:px-8 overflow-hidden z-10 text-center bg-red-950 opacity-90 border-t pt-20 pr-50 pb-50 pl-50 relative [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(168, 162, 158, 1), rgba(87, 83, 78, 1))'}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-brand-red/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto mb-20 relative z-10">
<h2 className="sm:text-5xl md:text-6xl lowercase text-4xl font-semibold text-white tracking-tight font-display mb-8">
        Bringing the warmth <br/>of Seoul to the world.
      </h2>
<p className="sm:text-base leading-relaxed text-sm text-white/60 font-sans max-w-xl mr-auto mb-10 ml-auto">
        The berry seoul team started with a simple question: "What is the best way to remember a journey?" We believe the answer lies in a taste that lingers. We pack the kindness and sweetness of Korea into a small box so you can share your story with the world. Take a piece of Korea with you today.
      </p>
<a className="inline-flex items-center gap-2 hover:text-brand-black transition-all hover:bg-white text-sm font-semibold text-white tracking-tight font-sans rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#home">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
        Take a Piece with You
      </a>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t relative z-10 border-white/10">
<div className="text-center md:text-left">
<p className="text-2xl font-semibold tracking-tight font-display lowercase mb-1 text-white">berry seoul</p>
<p className="text-xs font-medium text-white/40">Seoul, Republic of Korea | hello@berryseoul.com</p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors bg-white/5 text-white/60 hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors bg-white/5 text-white/60 hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<p className="text-xs font-medium text-white/40">
        © 2024 berry seoul Creative Team.
      </p>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md hidden items-center justify-center p-4 sm:p-8 opacity-0 transition-opacity duration-300" id="videoModal">
<button className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md transition-all z-10" onclick="closeVideoModal()">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 scale-95 transition-transform duration-300 relative" id="videoContainer">
<iframe allow="autoplay" className="absolute top-0 left-0 w-full h-full border-0" id="brandVideo" src=""></iframe>
</div>
</div>



    </>
  );
}
