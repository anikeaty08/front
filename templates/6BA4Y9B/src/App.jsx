import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { inter: ['Inter', 'ui-sans-serif', 'system-ui'] },
colors: {
base: {
900: '#0b0f1a',
950: '#0a0d18'
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
'slide-in-right': 'slideInRight 0.7s ease-out forwards',
'blur-in': 'blurIn 1s ease-out forwards',
'scale-in': 'scaleIn 0.6s ease-out forwards',
'glow': 'glow 2s ease-in-out infinite alternate'
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
slideInLeft: {
'0%': { opacity: '0', transform: 'translateX(-30px)' },
'100%': { opacity: '1', transform: 'translateX(0)' }
},
slideInRight: {
'0%': { opacity: '0', transform: 'translateX(30px)' },
'100%': { opacity: '1', transform: 'translateX(0)' }
},
blurIn: {
'0%': { opacity: '0', filter: 'blur(10px)', transform: 'scale(0.95)' },
'100%': { opacity: '1', filter: 'blur(0px)', transform: 'scale(1)' }
},
scaleIn: {
'0%': { opacity: '0', transform: 'scale(0.9)' },
'100%': { opacity: '1', transform: 'scale(1)' }
},
glow: {
'0%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' },
'100%': { boxShadow: '0 0 40px rgba(56, 189, 248, 0.6)' }
}
}
}
}
}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

window.addEventListener('DOMContentLoaded', () => { if (window.lucide) lucide.createIcons(); });


    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          if (entry.target.classList.contains('blur-reveal')) {
            entry.target.classList.add('reveal');
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      observer.observe(el);
    });

    // Add reveal class for blur animations
    document.querySelectorAll('.blur-reveal').forEach(el => {
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ju5gjGnrRr5Ud4fAt7eh"></div></div><header className="fixed top-0 inset-x-0 z-50 opacity-0 animate-fade-in border-white/10 border-b backdrop-blur-xl hover:bg-white/5 transition-all duration-300" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-2 hover:scale-105 transition-transform duration-200" href="#">
<svg className="w-[104px] h-[36px] text-neutral-50" data-icon-replaced="true" fill="none" height="36" strokeWidth="2" style={{width: '104px', height: '36px'}} viewbox="0 0 104 36" width="104" xmlns="http://www.w3.org/2000/svg">
<path d="M5.42813 24.6667C5.42813 17.3067 11.4015 11.3333 18.7615 11.3333C26.1215 11.3333 32.0948 17.3067 32.0948 24.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M13.4281 24.6667C13.4281 21.72 15.8148 19.3333 18.7615 19.3333C21.7081 19.3333 24.0948 21.72 24.0948 24.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M9.42813 24.6667C9.42813 19.5067 13.6015 15.3333 18.7615 15.3333C23.9215 15.3333 28.0948 19.5067 28.0948 24.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M95.8008 26.9918C94.5611 26.9918 93.4867 26.7191 92.5776 26.1736C91.6685 25.6282 90.9633 24.8651 90.4619 23.8844C89.966 22.9036 89.7181 21.7576 89.7181 20.4463C89.7181 19.135 89.966 17.9863 90.4619 17C90.9633 16.0138 91.6685 15.248 92.5776 14.7025C93.4867 14.1571 94.5611 13.8843 95.8008 13.8843C97.0404 13.8843 98.1148 14.1571 99.0239 14.7025C99.933 15.248 100.635 16.0138 101.131 17C101.633 17.9863 101.883 19.135 101.883 20.4463C101.883 21.7576 101.633 22.9036 101.131 23.8844C100.635 24.8651 99.933 25.6282 99.0239 26.1736C98.1148 26.7191 97.0404 26.9918 95.8008 26.9918ZM95.8173 24.5951C96.4895 24.5951 97.0515 24.4105 97.5032 24.0414C97.955 23.6667 98.2911 23.1653 98.5115 22.5372C98.7374 21.9091 98.8504 21.2094 98.8504 20.4381C98.8504 19.6612 98.7374 18.9587 98.5115 18.3306C98.2911 17.697 97.955 17.1929 97.5032 16.8182C97.0515 16.4436 96.4895 16.2562 95.8173 16.2562C95.1286 16.2562 94.5556 16.4436 94.0983 16.8182C93.6465 17.1929 93.3076 17.697 93.0817 18.3306C92.8614 18.9587 92.7512 19.6612 92.7512 20.4381C92.7512 21.2094 92.8614 21.9091 93.0817 22.5372C93.3076 23.1653 93.6465 23.6667 94.0983 24.0414C94.5556 24.4105 95.1286 24.5951 95.8173 24.5951Z" fill="currentColor"></path>
<path className="" d="M85.3591 26.7438V14.0496H88.3508V26.7438H85.3591ZM86.8632 12.2479C86.3894 12.2479 85.9816 12.0909 85.64 11.7769C85.2985 11.4573 85.1277 11.0744 85.1277 10.6281C85.1277 10.1763 85.2985 9.79339 85.64 9.47934C85.9816 9.15978 86.3894 9 86.8632 9C87.3425 9 87.7502 9.15978 88.0863 9.47934C88.4279 9.79339 88.5987 10.1763 88.5987 10.6281C88.5987 11.0744 88.4279 11.4573 88.0863 11.7769C87.7502 12.0909 87.3425 12.2479 86.8632 12.2479Z" fill="currentColor"></path>
<path d="M76.5743 26.967C75.5771 26.967 74.6845 26.7108 73.8966 26.1984C73.1087 25.686 72.4861 24.9422 72.0288 23.967C71.5715 22.9917 71.3429 21.8072 71.3429 20.4132C71.3429 19.0028 71.5743 17.8127 72.0371 16.843C72.5054 15.8678 73.1363 15.1322 73.9297 14.6364C74.7231 14.135 75.6074 13.8843 76.5826 13.8843C77.3264 13.8843 77.9379 14.011 78.4173 14.2645C78.8966 14.5124 79.2768 14.8127 79.5578 15.1653C79.8388 15.5124 80.0564 15.8402 80.2107 16.1488H80.3346V9.81818H83.3346V26.7438H80.3925V24.7438H80.2107C80.0564 25.0524 79.8333 25.3802 79.5413 25.7273C79.2492 26.0689 78.8636 26.3609 78.3842 26.6033C77.9049 26.8457 77.3016 26.967 76.5743 26.967ZM77.409 24.5124C78.0426 24.5124 78.5826 24.3416 79.0289 24C79.4751 23.6529 79.814 23.1708 80.0454 22.5537C80.2768 21.9366 80.3925 21.2176 80.3925 20.3967C80.3925 19.5758 80.2768 18.8623 80.0454 18.2562C79.8195 17.6501 79.4834 17.1791 79.0371 16.843C78.5963 16.5069 78.0536 16.3388 77.409 16.3388C76.7423 16.3388 76.1859 16.5124 75.7396 16.8595C75.2933 17.2066 74.9572 17.686 74.7313 18.2975C74.5054 18.9091 74.3925 19.6088 74.3925 20.3967C74.3925 21.1901 74.5054 21.8981 74.7313 22.5207C74.9627 23.1378 75.3016 23.6254 75.7479 23.9835C76.1996 24.3361 76.7534 24.5124 77.409 24.5124Z" fill="currentColor"></path>
<path d="M66.959 21.405V14.0496H69.9508V26.7438H67.0499V24.4876H66.9177C66.6312 25.1984 66.1601 25.7796 65.5045 26.2314C64.8543 26.6832 64.0527 26.9091 63.0995 26.9091C62.2676 26.9091 61.532 26.7245 60.8929 26.3554C60.2593 25.9807 59.7634 25.438 59.4053 24.7273C59.0472 24.011 58.8681 23.146 58.8681 22.1322V14.0496H61.8598V21.6694C61.8598 22.4738 62.0802 23.113 62.521 23.5868C62.9618 24.0606 63.5403 24.2975 64.2565 24.2975C64.6973 24.2975 65.1243 24.1901 65.5375 23.9752C65.9508 23.7603 66.2896 23.4408 66.5541 23.0165C66.824 22.5868 66.959 22.0496 66.959 21.405Z" fill="currentColor"></path>
<path className="" d="M57.5297 14.0496V16.3636H50.2322V14.0496H57.5297ZM52.0338 11.0083H55.0256V22.9256C55.0256 23.3278 55.0862 23.6364 55.2074 23.8513C55.3341 24.0606 55.4994 24.2039 55.7033 24.281C55.9071 24.3582 56.133 24.3967 56.3809 24.3967C56.5683 24.3967 56.7391 24.3829 56.8933 24.3554C57.0531 24.3278 57.1743 24.3031 57.257 24.281L57.7611 26.6199C57.6013 26.675 57.3727 26.7356 57.0752 26.8017C56.7831 26.8678 56.425 26.9064 56.0008 26.9174C55.2515 26.9394 54.5765 26.8265 53.976 26.5785C53.3754 26.3251 52.8988 25.9339 52.5462 25.405C52.1991 24.8761 52.0283 24.2149 52.0338 23.4215V11.0083Z" fill="currentColor"></path>
<path className="" d="M46.5714 14.4711C46.4943 13.7493 46.1692 13.1873 45.5962 12.7851C45.0287 12.3829 44.2904 12.1818 43.3813 12.1818C42.7422 12.1818 42.194 12.2782 41.7367 12.4711C41.2794 12.6639 40.9295 12.9256 40.6871 13.2562C40.4447 13.5868 40.3207 13.9642 40.3152 14.3884C40.3152 14.741 40.3951 15.0468 40.5549 15.3058C40.7202 15.5647 40.9433 15.7851 41.2243 15.9669C41.5053 16.1432 41.8166 16.292 42.1582 16.4132C42.4998 16.5344 42.8441 16.6364 43.1912 16.719L44.778 17.1157C45.4171 17.2645 46.0315 17.4656 46.621 17.719C47.216 17.9724 47.7477 18.292 48.216 18.6777C48.6899 19.0634 49.0645 19.5289 49.34 20.0744C49.6155 20.6198 49.7532 21.259 49.7532 21.9917C49.7532 22.9835 49.4998 23.8568 48.9929 24.6116C48.486 25.3609 47.7532 25.9477 46.7945 26.3719C45.8414 26.7906 44.6871 27 43.3317 27C42.0149 27 40.8717 26.7962 39.902 26.3884C38.9378 25.9807 38.183 25.3857 37.6375 24.6033C37.0976 23.8209 36.8056 22.8678 36.7615 21.7438H39.778C39.8221 22.3333 40.0039 22.8237 40.3235 23.2149C40.643 23.6061 41.059 23.8981 41.5714 24.0909C42.0893 24.2838 42.6678 24.3802 43.3069 24.3802C43.9736 24.3802 44.5576 24.281 45.059 24.0827C45.5659 23.8788 45.9626 23.5978 46.2491 23.2397C46.5356 22.876 46.6816 22.4518 46.6871 21.9669C46.6816 21.5262 46.5521 21.1625 46.2987 20.876C46.0452 20.584 45.6899 20.3416 45.2326 20.1488C44.7808 19.9504 44.2518 19.7741 43.6458 19.6198L41.7202 19.124C40.3262 18.7658 39.2243 18.2231 38.4144 17.4959C37.61 16.7631 37.2078 15.7906 37.2078 14.5785C37.2078 13.5813 37.4777 12.708 38.0177 11.9587C38.5631 11.2094 39.3042 10.6281 40.2408 10.2149C41.1775 9.79613 42.2381 9.58676 43.4226 9.58676C44.6237 9.58676 45.6761 9.79613 46.5797 10.2149C47.4888 10.6281 48.2023 11.2038 48.7202 11.9421C49.2381 12.6749 49.5053 13.5179 49.5218 14.4711H46.5714Z" fill="currentColor"></path>
</svg>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-white/60 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-200 hover:after:w-full" href="#features" style={{}}>Features</a>
<a className="text-white/60 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-200 hover:after:w-full" href="#how" style={{}}>How it works</a>
<a className="text-white/60 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-200 hover:after:w-full" href="#pricing" style={{}}>Pricing</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-block text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium hover:scale-105 transform" href="#" style={{}}>Sign in</a>
<a className="inline-flex items-center gap-2 shadow-sky-500/25 hover:shadow-sky-500/40 hover:from-sky-400 hover:to-indigo-500 transition-all duration-200 hover:scale-105 hover:shadow-xl text-sm font-medium text-neutral-50 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl pt-2 pr-4 pb-2 pl-4 shadow-lg" href="#" style={{}}>
          Get Started
          <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</div>
</div>
</header>
<div className="h-16"></div>

<section className="relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 sm:py-28 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="mx-auto max-w-4xl text-center space-y-8">
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white opacity-0 animate-blur-in tracking-tighter font-medium" style={{opacity: '1', transform: 'translateY(0px)'}}>
          GitHub Issues. <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 tracking-tighter font-medium" style={{opacity: '1', transform: 'translateY(0px)'}}>Supercharged.</span>
</h1>
<p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-300" style={{opacity: '1', transform: 'translateY(0px)'}}>
          Two-way sync with GitHub Issues and Projects. Plan faster, ship smarter, stay in sync.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-scale-in animate-delay-500 relative z-10" style={{opacity: '1', transform: 'translateY(0px)'}}>
<a className="inline-flex items-center gap-2 shadow-sky-500/25 hover:shadow-sky-500/60 hover:from-sky-400 hover:to-indigo-500 transition-all duration-300 hover:scale-110 hover:shadow-xl group text-base font-medium text-neutral-50 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#" style={{}}>
            Try it free
            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="inline-flex items-center gap-2 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 group hover:scale-105 hover:shadow-lg font-medium text-white/90 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6" href="#" style={{}}>
<svg className="lucide lucide-monitor-stop group-hover:scale-110 transition-transform duration-200 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="monitor-stop" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17v4"></path><path d="M8 21h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><rect height="6" rx="1" width="6" x="9" y="7"></rect></svg>
            View Demo
          </a>
</div>
</div>

<div className="sm:mt-24 opacity-0 animate-blur-in animate-delay-700 hover-lift relative mt-16" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="antialiased relative z-10 text-slate-100 pt-6 pr-6 pb-6 pl-6" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \'Apple Color Emoji\',\'Segoe UI Emoji\''}}>
<section className="relative shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden hover:shadow-[0_20px_80px_-15px_rgba(0,0,0,0.8)] hover:border-white/15 transition-all duration-500 bg-gradient-to-b from-slate-900/40 to-slate-800/30 border-white/20 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute -inset-px rounded-[1.45rem] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(90,97,255,0.25),transparent_60%)]"></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative mx-auto w-full">
<div className="absolute inset-0 translate-y-8 scale-[0.96] rounded-2xl bg-slate-900/50 ring-1 ring-white/5 blur-[0.3px]"></div>
<div className="absolute inset-0 ring-1 ring-white/5 bg-slate-900/60 rounded-2xl translate-y-4 scale-[0.98]"></div>
<div className="relative rounded-2xl bg-[linear-gradient(180deg,rgba(19,24,31,0.9),rgba(10,13,18,0.9))] ring-1 ring-white/10 overflow-hidden hover:ring-white/15 transition-all duration-300">
<div className="flex hover:bg-slate-950/70 transition-all duration-300 bg-slate-950/50 border-white/5 rounded-2xl border-b pt-4 pr-6 pb-4 pl-6 backdrop-blur items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/60 hover:bg-red-500 transition-colors duration-200"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-500/60 hover:bg-amber-500 transition-colors duration-200"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60 hover:bg-emerald-500 transition-colors duration-200"></span>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 shadow-inner shadow-black/20 hover:border-white/15 hover:bg-slate-900/80 transition-all duration-200">
<svg className="h-4 w-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-slate-400/80" style={{}}>Filter issues...</span>
<span className="ml-2 rounded-md bg-white/5 px-1.5 py-0.5 text-[11px] text-slate-400" style={{}}>⌘K</span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm text-white shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:scale-105" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              New Issue
            </button>
</div>
<div className="relative h-80">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(87,107,255,0.08),transparent_50%)]"></div>
<div className="absolute inset-0 overflow-hidden pt-6 pr-6 pb-6 pl-6 space-y-4">

<div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/40 border border-white/5 hover:bg-slate-900/80 hover:border-white/10 transition-all duration-300 group opacity-0 animate-slide-in-left animate-delay-800" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-4 w-4 rounded border-2 border-emerald-500/60 bg-emerald-500/10 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-all duration-200"></div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 text-sm">
<span className="text-slate-200 font-medium truncate group-hover:text-white transition-colors duration-200" style={{}}>#142 Implement real-time sync</span>
<span className="px-2 py-0.5 text-xs rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/20 group-hover:bg-sky-500/25 group-hover:border-sky-500/30 transition-all duration-200" style={{}}>feature</span>
</div>
<div className="text-xs text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-200" style={{}}>opened 2 days ago by @sarah-dev</div>
</div>
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-xs text-white font-semibold group-hover:scale-110 transition-transform duration-200" style={{}}>S</span>
<svg className="text-slate-500 group-hover:text-slate-400 transition-colors duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h.01"></path><path d="M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 0 1 0 2.828l-7 7a2 2 0 0 1-2.828 0l-7-7A1.994 1.994 0 0 1 3 12V7a4 4 0 0 1 4-4z"></path></svg>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/40 border border-white/5 hover:bg-slate-900/80 hover:border-white/10 transition-all duration-300 group opacity-0 animate-slide-in-left animate-delay-900" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-4 w-4 rounded border-2 border-amber-500/60 group-hover:border-amber-500 transition-colors duration-200"></div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 text-sm">
<span className="text-slate-200 font-medium truncate group-hover:text-white transition-colors duration-200" style={{}}>#141 Fix GitHub API rate limiting</span>
<span className="px-2 py-0.5 text-xs rounded-full bg-red-500/15 text-red-300 border border-red-500/20 group-hover:bg-red-500/25 group-hover:border-red-500/30 transition-all duration-200" style={{}}>bug</span>
<span className="px-2 py-0.5 text-xs rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/20 group-hover:bg-orange-500/25 group-hover:border-orange-500/30 transition-all duration-200" style={{}}>priority</span>
</div>
<div className="text-xs text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-200" style={{}}>opened 1 day ago by @alex-gh</div>
</div>
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xs text-white font-semibold group-hover:scale-110 transition-transform duration-200" style={{}}>A</span>
<svg className="text-slate-500 group-hover:text-slate-400 transition-colors duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/40 border border-white/5 hover:bg-slate-900/80 hover:border-white/10 transition-all duration-300 group opacity-0 animate-slide-in-left animate-delay-1000" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-4 w-4 rounded border-2 border-violet-500/60 bg-violet-500/10 group-hover:border-violet-500 group-hover:bg-violet-500/20 transition-all duration-200">
<svg className="text-violet-400 m-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 text-sm">
<span className="text-slate-400 font-medium truncate line-through group-hover:text-slate-300 transition-colors duration-200" style={{}}>#140 Add keyboard shortcuts</span>
<span className="px-2 py-0.5 text-xs rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20 group-hover:bg-violet-500/25 group-hover:border-violet-500/30 transition-all duration-200" style={{}}>enhancement</span>
</div>
<div className="text-xs text-slate-500 mt-1 group-hover:text-slate-400 transition-colors duration-200" style={{}}>completed 3 hours ago by @team</div>
</div>
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-xs text-white font-semibold group-hover:scale-110 transition-transform duration-200" style={{}}>T</span>
<svg className="text-emerald-500 group-hover:scale-110 transition-transform duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/40 border border-white/5 hover:bg-slate-900/80 hover:border-white/10 transition-all duration-300 group">
<div className="h-4 w-4 rounded border-2 border-blue-500/60 bg-blue-500/10 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all duration-200"></div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 text-sm">
<span className="text-slate-200 font-medium truncate group-hover:text-white transition-colors duration-200" style={{}}>#139 Improve mobile responsiveness</span>
<span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/20 group-hover:bg-blue-500/25 group-hover:border-blue-500/30 transition-all duration-200" style={{}}>ui</span>
</div>
<div className="text-xs text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-200" style={{}}>opened 4 days ago by @design-team</div>
</div>
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xs text-white font-semibold group-hover:scale-110 transition-transform duration-200" style={{}}>D</span>
<svg className="text-slate-500 group-hover:text-slate-400 transition-colors duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h.01"></path><path d="M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 0 1 0 2.828l-7 7a2 2 0 0 1-2.828 0l-7-7A1.994 1.994 0 0 1 3 12V7a4 4 0 0 1 4-4z"></path></svg>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0F14] to-transparent"></div>
</div>
</div>
</div>
</div>
<div className="relative z-10 pt-8 pr-8 pb-8 pl-8">
<div className="w-full px-2 py-2">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 hover:border-white/15 hover:bg-white/8 transition-all duration-200" style={{}}>
          Real-time Sync
          <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
</div>
<h2 className="mt-4 text-3xl sm:text-4xl text-white tracking-tighter font-medium" style={{}}>GitHub Issues Management</h2>
<p className="sm:text-lg text-base text-slate-400 mt-4" style={{}}>
          Experience lightning-fast issue management with real-time GitHub synchronization. Every status change, label update, and assignment flows instantly between SyncBoard and your repositories.
        </p>
</div>
</div>
</section>


</div>
</div>
</div>
</section>

<section className="relative sm:py-28 section-divider pt-20 pb-20 space-y-20" id="features">
<div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
<div className="mx-auto max-w-3xl text-center mb-16">
<h2 className="text-3xl sm:text-4xl text-white opacity-0 animate-blur-in tracking-tighter font-medium" style={{opacity: '1', transform: 'translateY(0px)'}}>
          Built for speed and sync
        </h2>
<p className="mt-4 text-lg text-white/70 opacity-0 animate-slide-up animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
          Every change flows both ways. Your GitHub stays the source of truth.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="hover:bg-white/8 hover:border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-500 opacity-0 animate-blur-in animate-delay-300 group hover-lift bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-600/20 flex items-center justify-center mb-6 group-hover:from-sky-500/40 group-hover:to-sky-600/40 group-hover:scale-110 transition-all duration-300">
<svg className="h-6 w-6 text-sky-400 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-300 transition-colors duration-300" style={{}}>Two-way sync</h3>
<p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300" style={{}}>Changes flow instantly between your board and GitHub. Update anywhere, sync everywhere.</p>
</div>
<div className="hover:bg-white/8 hover:border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-500 opacity-0 animate-blur-in animate-delay-400 group hover-lift bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center mb-6 group-hover:from-indigo-500/40 group-hover:to-indigo-600/40 group-hover:scale-110 transition-all duration-300">
<svg className="h-6 w-6 text-indigo-400 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300" style={{}}>Lightning fast</h3>
<p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300" style={{}}>Optimized for speed with keyboard shortcuts, instant search, and blazing performance.</p>
</div>
<div className="hover:bg-white/8 hover:border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-500 opacity-0 animate-blur-in animate-delay-500 group hover-lift bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mb-6 group-hover:from-amber-500/40 group-hover:to-amber-600/40 group-hover:scale-110 transition-all duration-300">
<svg className="h-6 w-6 text-amber-400 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300" style={{}}>Multi-repo support</h3>
<p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300" style={{}}>Plan across multiple repositories with unified views, filters, and cross-repo insights.</p>
</div>
</div>
</div><div className="max-w-7xl sm:px-6 lg:px-8 mt-9 mr-auto ml-auto pr-4 pl-4">
<div className="mx-auto max-w-3xl text-center mb-16">
<h2 className="text-3xl sm:text-4xl text-white opacity-0 animate-blur-in animate-delay-600 tracking-tighter font-medium" style={{opacity: '1', transform: 'translateY(0px)'}}>
      Work the way you think
    </h2>
<p className="mt-4 text-lg text-white/70 opacity-0 animate-slide-up animate-delay-700" style={{opacity: '1', transform: 'translateY(0px)'}}>
      Lightning-fast keyboard shortcuts make issue management feel like magic.
    </p>
</div>
<section className="max-w-full sm:px-6 mt-10 mb-8 pr-4 pl-4">

<div className="relative mx-auto mb-8 w-full max-w-2xl opacity-0 animate-scale-in animate-delay-800" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative bg-gradient-to-b from-slate-800/40 to-slate-900/60 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-8 backdrop-blur-sm hover:border-white/15 hover:shadow-3xl transition-all duration-500 hover-lift">

<div className="absolute -top-6 left-6 px-4 py-2 bg-sky-500/20 border border-sky-500/30 rounded-full text-sm text-sky-300 backdrop-blur-sm hover:bg-sky-500/30 hover:scale-105 transition-all duration-300 cursor-pointer" style={{}}>
          ⌘ + K = Quick search
        </div>
<div className="absolute -top-6 right-6 px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-sm text-violet-300 backdrop-blur-sm hover:bg-violet-500/30 hover:scale-105 transition-all duration-300 cursor-pointer" style={{}}>
          ⌘ + N = New issue
        </div>

<div className="space-y-3" id="keyboard">

<div className="flex gap-2">
<div className="w-12 h-8 bg-slate-700/60 hover:bg-slate-600/80 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="flex-1 grid grid-cols-12 gap-2">
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer key-f1 hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer hover:scale-105"></div>
</div>
</div>

<div className="flex gap-2">
<div className="w-16 h-12 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>tab</div>
<div className="flex-1 grid grid-cols-10 gap-2">
<div className="h-12 bg-violet-500/30 transition-all duration-300 cursor-pointer key-q flex text-base text-white bg-gradient-to-b from-violet-500/40 to-violet-600/60 border-violet-400/50 border rounded-md items-center justify-center shadow-inner font-semibold hover:from-violet-400/50 hover:to-violet-500/70 hover:scale-110 hover:shadow-lg" style={{}}>Q</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>W</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>E</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>R</div>
<div className="h-12 bg-sky-500/30 transition-all duration-300 cursor-pointer key-t flex text-base text-white bg-gradient-to-b from-sky-500/40 to-sky-600/60 border-sky-400/50 border rounded-md items-center justify-center shadow-inner font-semibold hover:from-sky-400/50 hover:to-sky-500/70 hover:scale-110 hover:shadow-lg" style={{}}>T</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>Y</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>U</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>I</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>O</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer key-p flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>P</div>
</div>
<div className="w-16 h-12 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer hover:scale-105"></div>
</div>

<div className="flex gap-2">
<div className="w-20 h-12 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>caps</div>
<div className="flex-1 grid grid-cols-9 gap-2">
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>A</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>S</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>D</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>F</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>G</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>H</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>J</div>
<div className="h-12 bg-emerald-500/30 transition-all duration-300 cursor-pointer key-k flex text-base text-white bg-gradient-to-b from-emerald-500/40 to-emerald-600/60 border-emerald-400/50 border rounded-md items-center justify-center shadow-inner font-semibold hover:from-emerald-400/50 hover:to-emerald-500/70 hover:scale-110 hover:shadow-lg" style={{}}>K</div>
<div className="h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>L</div>
</div>
<div className="w-20 h-12 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>enter</div>
</div>

<div className="flex gap-2">
<div className="w-20 h-12 bg-gradient-to-b from-amber-500/40 to-amber-600/60 border-amber-400/50 border rounded-md transition-all duration-300 cursor-pointer key-cmd flex items-center justify-center text-base text-white shadow-inner font-semibold hover:from-amber-400/50 hover:to-amber-500/70 hover:scale-110 hover:shadow-lg" style={{}}>⌘</div>
<div className="w-16 h-12 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer key-alt flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>⌥</div>
<div className="flex-1 h-12 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer key-space hover:bg-gradient-to-r hover:from-slate-600/50 hover:to-slate-700/50"></div>
<div className="w-16 h-12 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm text-slate-300 hover:scale-105" style={{}}>⌥</div>
<div className="w-20 h-12 bg-gradient-to-b from-amber-500/40 to-amber-600/60 border-amber-400/50 border rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center text-base text-white shadow-inner font-semibold hover:from-amber-400/50 hover:to-amber-500/70 hover:scale-110 hover:shadow-lg" style={{}}>⌘</div>
</div>
</div>

<div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-6 text-sm">
<div className="px-3 py-2 bg-violet-500/10 border border-violet-500/20 rounded text-violet-300 hover:bg-violet-500/20 hover:border-violet-500/30 transition-all duration-200 cursor-pointer" style={{}}>
            Q = Quick actions
          </div>
<div className="px-3 py-2 bg-sky-500/10 border border-sky-500/20 rounded text-sky-300 hover:bg-sky-500/20 hover:border-sky-500/30 transition-all duration-200 cursor-pointer" style={{}}>
            T = Toggle status
          </div>
<div className="px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-200 cursor-pointer" style={{}}>
            K = Search
          </div>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-12 opacity-0 animate-fade-in animate-delay-900" style={{opacity: '1', transform: 'translateY(0px)'}}>

<div aria-hidden="" className="pointer-events-none absolute inset-0 -z-10" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '18px 18px'}}></div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

<article className="shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:p-8 bg-[#0b0f1a] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/15 hover:scale-105 transition-all duration-500 hover-lift">
<header className="mb-6">
<h2 className="text-2xl text-white tracking-tighter font-medium" style={{}}>CSS grid layout</h2>
<p className="mt-2 text-white/70" style={{}}>
      Using grid utilities directly in your HTML makes it easier to reason about complex layouts.
    </p>
</header>
<div className="bg-[#0d1322] border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3 hover:border-white/15 hover:bg-[#0f1525] transition-all duration-300">
<p className="text-sm font-medium text-white/80 tracking-wide pr-2 pb-3 pl-2" style={{}}>Browse properties</p>

<div className="grid gap-3 sm:grid-cols-3 sm:grid-rows-2">

<div className="sm:row-span-2 relative overflow-hidden rounded-lg bg-gradient-to-br from-sky-500/10 to-indigo-500/10 border border-white/5 hover:border-white/10 hover:from-sky-500/20 hover:to-indigo-500/20 transition-all duration-300 group">
<img alt="Abstract design" className="w-full h-64 sm:h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a764bb3b-5586-46e0-9d7d-eee3d6cb2211_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
<div className="absolute bottom-3 left-3 right-3">
<h3 className="text-sm font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors duration-200" style={{}}>Grid Templates</h3>
<p className="text-xs text-white/70 group-hover:text-white/90 transition-colors duration-200" style={{}}>Complex layouts made simple</p>
</div>
</div>

<div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-white/5 hover:border-white/10 hover:from-violet-500/20 hover:to-purple-500/20 transition-all duration-300 group">
<img alt="Modern interface" className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c160e528-a195-4720-8c90-671df696522d_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
<div className="absolute bottom-2 left-2 right-2">
<h3 className="text-xs font-semibold text-white group-hover:text-violet-300 transition-colors duration-200" style={{}}>Responsive</h3>
<p className="text-[10px] text-white/70 group-hover:text-white/90 transition-colors duration-200" style={{}}>Auto-fit columns</p>
</div>
</div>

<div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-white/5 hover:border-white/10 hover:from-emerald-500/20 hover:to-green-500/20 transition-all duration-300 group">
<img alt="Design system" className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb724d1c-3844-4a38-b93d-5dc2355546bc_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
<div className="absolute bottom-2 left-2 right-2">
<h3 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors duration-200" style={{}}>Areas</h3>
<p className="text-[10px] text-white/70 group-hover:text-white/90 transition-colors duration-200" style={{}}>Named grid areas</p>
</div>
</div>

<div className="sm:col-span-2 relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/5 hover:border-white/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-300 group">
<img alt="Creative workspace" className="w-full h-24 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a8399dc-9cc9-4f4f-a393-c5dc669e58ae_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
<div className="absolute bottom-2 left-2 right-2">
<h3 className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors duration-200" style={{}}>Flexible Layouts</h3>
<p className="text-[10px] text-white/70 group-hover:text-white/90 transition-colors duration-200" style={{}}>Span multiple columns</p>
</div>
</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0b0f1a] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/15 hover:scale-105 transition-all duration-500 hover-lift">
<header className="mb-8">
<h2 className="text-2xl text-white tracking-tighter font-medium" style={{}}>Transitions and animations</h2>
<p className="mt-2 text-white/70" style={{}}>
          Transitions that work the way you'd expect — throw a few utilities on an element and you're in business.
        </p>
</header>

<ul className="space-y-8">
<li className="grid grid-cols-[120px_1fr] items-center gap-6 group hover:bg-white/5 rounded-lg p-2 transition-all duration-200">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:ring-white/15 transition-all duration-200"></div>
<span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200" style={{}}>linear</span>
</div>
<div className="track">
<div className="knob bg-cyan-400 anim-linear shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-shadow duration-200"></div>
</div>
</li>
<li className="grid grid-cols-[120px_1fr] items-center gap-6 group hover:bg-white/5 rounded-lg p-2 transition-all duration-200">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:ring-white/15 transition-all duration-200"></div>
<span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200" style={{}}>ease-out</span>
</div>
<div className="track">
<div className="knob bg-purple-400 anim-ease-out shadow-[0_0_15px_rgba(192,132,252,0.6)] hover:shadow-[0_0_25px_rgba(192,132,252,0.8)] transition-shadow duration-200"></div>
</div>
</li>
<li className="grid grid-cols-[120px_1fr] items-center gap-6 group hover:bg-white/5 rounded-lg p-2 transition-all duration-200">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:ring-white/15 transition-all duration-200"></div>
<span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200" style={{}}>ease-in-out</span>
</div>
<div className="track">
<div className="knob bg-pink-500 anim-ease-in-out shadow-[0_0_15px_rgba(236,72,153,0.6)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-shadow duration-200"></div>
</div>
</li>
<li className="grid grid-cols-[120px_1fr] items-center gap-6 group hover:bg-white/5 rounded-lg p-2 transition-all duration-200">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:ring-white/15 transition-all duration-200"></div>
<span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200" style={{}}>ease-in</span>
</div>
<div className="track">
<div className="knob bg-indigo-400 anim-ease-in shadow-[0_0_15px_rgba(129,140,248,0.6)] hover:shadow-[0_0_25px_rgba(129,140,248,0.8)] transition-shadow duration-200"></div>
</div>
</li>
</ul>
</article>
</div>

<style>
    .track {
      position: relative;
      height: 2px;
      width: 100%;
      background: rgba(255,255,255,0.15);
      border-radius: 999px;
      overflow: visible;
      transition: background 0.2s ease;
    }
    .track:hover {
      background: rgba(255,255,255,0.25);
    }
    .knob {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      border-radius: 8px;
      animation-name: glide;
      animation-duration: 2.8s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      transition: all 0.2s ease;
    }
    .knob:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }
    @keyframes glide {
      0%   { left: 0%;   }
      100% { left: 100%; }
    }
    .anim-linear      { animation-timing-function: linear; }
    .anim-ease-out    { animation-timing-function: cubic-bezier(0,0,0.2,1); }
    .anim-ease-in-out { animation-timing-function: cubic-bezier(0.4,0,0.2,1); }
    .anim-ease-in     { animation-timing-function: cubic-bezier(0.4,0,1,1); }

    /* Optional: run animation only on hover over each row */
    /* .knob { animation-play-state: paused; }
       li:hover .knob { animation-play-state: running; } */
  </style>
</section>

<section className="relative sm:py-28 section-divider pt-20 pb-20" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="opacity-0 animate-slide-in-left animate-delay-300" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="text-3xl sm:text-4xl text-white mb-6 tracking-tighter font-medium" style={{}}>
            From idea to shipped, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 tracking-tighter font-medium" style={{}}>without context switching</span>
</h2>
<p className="text-lg text-white/70 mb-8 leading-relaxed" style={{}}>
            Work in the interface you love while keeping GitHub as your source of truth. Every edit, label change, and status update syncs instantly.
          </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-4 group hover:bg-white/5 rounded-lg p-3 transition-all duration-200">
<div className="h-6 w-6 rounded-full bg-sky-500/20 flex items-center justify-center mt-0.5 group-hover:bg-sky-500/30 group-hover:scale-110 transition-all duration-200">
<svg className="h-3 w-3 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="">
<h4 className="font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors duration-200" style={{}}>Real-time bidirectional sync</h4>
<p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-200" style={{}}>Status, labels, assignees, milestones—everything stays in perfect sync.</p>
</div>
</div>
<div className="flex items-start gap-4 group hover:bg-white/5 rounded-lg p-3 transition-all duration-200">
<div className="h-6 w-6 rounded-full bg-sky-500/20 flex items-center justify-center mt-0.5 group-hover:bg-sky-500/30 group-hover:scale-110 transition-all duration-200">
<svg className="h-3 w-3 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="">
<h4 className="font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors duration-200" style={{}}>Batch operations &amp; shortcuts</h4>
<p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-200" style={{}}>Update multiple issues at once with keyboard shortcuts and bulk actions.</p>
</div>
</div>
<div className="flex items-start gap-4 group hover:bg-white/5 rounded-lg p-3 transition-all duration-200">
<div className="h-6 w-6 rounded-full bg-sky-500/20 flex items-center justify-center mt-0.5 group-hover:bg-sky-500/30 group-hover:scale-110 transition-all duration-200">
<svg className="h-3 w-3 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="">
<h4 className="font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors duration-200" style={{}}>Private tasks &amp; team boards</h4>
<p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-200" style={{}}>Mix public GitHub issues with private tasks only your team can see.</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center gap-2 shadow-sky-500/25 hover:shadow-sky-500/60 hover:from-sky-400 hover:to-indigo-500 transition-all duration-300 hover:scale-110 hover:shadow-xl group text-base font-medium text-neutral-50 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#" style={{}}>Try free trial<svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-medium text-white/90 hover:text-white hover:border-white/30 hover:bg-white/5 hover:scale-105 transition-all duration-300 group" href="#" style={{}}>
<svg className="lucide lucide-monitor-stop group-hover:scale-110 transition-transform duration-200 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="monitor-stop" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17v4"></path><path d="M8 21h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><rect height="6" rx="1" width="6" x="9" y="7"></rect></svg>
              Schedule demo
            </a>
</div>
</div>
<div className="opacity-0 animate-slide-in-right animate-delay-400" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-3xl"></div>
<div className="relative glass rounded-2xl p-8 border border-white/10 hover:border-white/15 hover:shadow-2xl transition-all duration-500 hover-lift">
<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="font-semibold text-white" style={{}}>Sync Status</h3>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" style={{opacity: '1', transform: 'translateY(0px)'}}></div>
<span className="text-xs text-white/60" style={{}}>Connected</span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/15 transition-all duration-300 group">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div>
<p className="text-sm font-medium text-white group-hover:text-sky-300 transition-colors duration-200" style={{}}>Issues synced</p>
<p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-200" style={{}}>2 seconds ago</p>
</div>
</div>
<span className="text-xs font-mono text-green-400 group-hover:scale-110 transition-transform duration-200" style={{}}>✓ 127</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/15 transition-all duration-300 group">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div>
<p className="text-sm font-medium text-white group-hover:text-sky-300 transition-colors duration-200" style={{}}>Labels updated</p>
<p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-200" style={{}}>5 seconds ago</p>
</div>
</div>
<span className="text-xs font-mono text-green-400 group-hover:scale-110 transition-transform duration-200" style={{}}>✓ 23</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/15 transition-all duration-300 group">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div>
<p className="text-sm font-medium text-white group-hover:text-sky-300 transition-colors duration-200" style={{}}>Assignees synced</p>
<p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-200" style={{}}>12 seconds ago</p>
</div>
</div>
<span className="text-xs font-mono text-green-400 group-hover:scale-110 transition-transform duration-200" style={{}}>✓ 8</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="mx-auto max-w-3xl text-center">
<h1 className="sm:text-4xl text-3xl text-neutral-50 tracking-tighter font-medium" style={{}}>Choose Your GitHub Sync Plan</h1>
<p className="mt-3 text-white/70" style={{}}>Fast, powerful, synchronized. Pick the plan that accelerates your workflow.</p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-14" style={{maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto'}}>

<div className="group relative">
<div className="relative w-full overflow-visible [perspective:1200px]">

<div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-500/15 via-blue-600/25 to-blue-800/35 ring-1 ring-white/10 shadow-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(45deg)_translateX(-20px)_translateZ(-30px)_translateY(-15px)_scale(0.95)]">
</div>

<div className="relative z-10 rounded-[28px] shadow-2xl p-7 sm:p-8 min-h-[420px] flex flex-col justify-between [transform-style:preserve-3d] origin-left [transform:rotateY(0deg)] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(-10deg)_translateY(-12px)_translateZ(10px)] transform-gpu" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
<div className="">
<div className="text-center">
<div className="text-xs tracking-[0.2em] text-white/70 mb-3" style={{}}>BASIC</div>
<div className="text-5xl leading-none text-white tracking-tighter font-medium" style={{}}>Free</div>
<div className="mt-2 text-white/70" style={{}}>Trial</div>
</div>
<ul className="mt-8 space-y-3 text-[15px]">
<li className="flex items-start gap-3 text-white/85">
<svg className="mt-1 h-4 w-4 text-[#9CCAF0]" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span style={{}}>Up to 3 repositories</span>
</li>
<li className="flex items-start gap-3 text-white/85">
<svg className="mt-1 h-4 w-4 text-[#9CCAF0]" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span style={{}}>Basic sync (every hour)</span>
</li>
<li className="flex items-start gap-3 text-white/85">
<svg className="mt-1 h-4 w-4 text-[#9CCAF0]" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span style={{}}>Community support</span>
</li>
</ul>
</div>
<div className="pt-4">
<button className="w-full relative isolate rounded-full px-5 py-3 text-sm font-semibold text-black bg-white/90 shadow-[0_6px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/30 hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105">
<span style={{}}>Get Started</span>
</button>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="relative w-full overflow-visible [perspective:1200px]">

<div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-sky-500/15 via-sky-600/25 to-indigo-800/35 ring-1 ring-white/10 shadow-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(45deg)_translateX(-20px)_translateZ(-30px)_translateY(-15px)_scale(0.95)]">
</div>

<div className="relative z-10 rounded-[28px] shadow-2xl p-7 sm:p-8 min-h-[420px] flex flex-col justify-between [transform-style:preserve-3d] origin-left [transform:rotateY(0deg)] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(-10deg)_translateY(-12px)_translateZ(10px)] transform-gpu" style={{background: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(99,102,241,0.08))', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(56,189,248,0.3)', boxShadow: '0 8px 32px rgba(56,189,248,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
<div className="">
<div className="text-center">
<div className="text-xs tracking-[0.2em] text-sky-300 mb-3" style={{}}>PRO</div>
<div className="text-5xl leading-none text-white tracking-tighter font-medium" style={{}}>$12<span className="text-lg align-super" style={{}}>/mo</span></div>
<div className="mt-2 text-white/70" style={{}}>Best for teams</div>
</div>
<ul className="mt-8 space-y-3 text-[15px]">
<li className="flex items-start gap-3 text-white/85" style={{}}>
<svg className="mt-1 h-4 w-4 text-sky-300" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Up to 10 private repos
                </li>
<li className="flex items-start gap-3 text-white/85" style={{}}>
<svg className="mt-1 h-4 w-4 text-sky-300" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Real-time sync
                </li>
<li className="flex items-start gap-3 text-white/85" style={{}}>
<svg className="mt-1 h-4 w-4 text-sky-300" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Priority support
                </li>
</ul>
</div>
<div className="pt-4">
<button className="w-full relative isolate rounded-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-[0_6px_24px_rgba(56,189,248,0.4)] ring-1 ring-sky-400/30 hover:shadow-[0_8px_32px_rgba(56,189,248,0.5)] transition-all duration-300 hover:scale-105">
<span style={{}}>Upgrade to Pro</span>
</button>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="relative w-full overflow-visible [perspective:1200px]">

<div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-violet-500/15 via-purple-600/25 to-indigo-800/35 ring-1 ring-white/10 shadow-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(45deg)_translateX(-20px)_translateZ(-30px)_translateY(-15px)_scale(0.95)]">
</div>

<div className="relative z-10 rounded-[28px] shadow-2xl p-7 sm:p-8 min-h-[420px] flex flex-col justify-between [transform-style:preserve-3d] origin-left [transform:rotateY(0deg)] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(-10deg)_translateY(-12px)_translateZ(10px)] transform-gpu" style={{background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(147,51,234,0.08))', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(168,85,247,0.3)', boxShadow: '0 8px 32px rgba(168,85,247,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
<div className="">
<div className="text-center">
<div className="text-xs tracking-[0.2em] text-violet-300 mb-3" style={{}}>ULTRA</div>
<div className="text-5xl leading-none text-white tracking-tighter font-medium" style={{}}>$29<span className="text-lg align-super" style={{}}>/mo</span></div>
<div className="mt-2 text-white/70" style={{}}>Enterprise</div>
</div>
<ul className="mt-8 space-y-3 text-[15px]">
<li className="flex items-start gap-3 text-white/85" style={{}}>
<svg className="mt-1 h-4 w-4 text-violet-300" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Unlimited private repos
                </li>
<li className="flex items-start gap-3 text-white/85" style={{}}>
<svg className="mt-1 h-4 w-4 text-violet-300" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Instant webhooks
                </li>
<li className="flex items-start gap-3 text-white/85" style={{}}>
<svg className="mt-1 h-4 w-4 text-violet-300" fill="none" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  24/7 priority support
                </li>
</ul>
</div>
<div className="pt-4">
<button className="w-full relative isolate rounded-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 shadow-[0_6px_24px_rgba(168,85,247,0.4)] ring-1 ring-violet-400/30 hover:shadow-[0_8px_32px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105">
<span style={{}}>Go Ultra</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-radial from-sky-500/20 via-violet-500/10 to-transparent blur-[120px]"></div>
</div>
</section>
<footer className="section-divider border-white/10 border-t pt-16 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex gap-3 group hover:scale-105 transition-transform duration-200 cursor-pointer mb-4 items-center">
<svg className="w-[104px] h-[36px] text-neutral-50" data-icon-replaced="true" fill="none" height="36" strokeWidth="2" style={{width: '104px', height: '36px'}} viewbox="0 0 104 36" width="104" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5.42813 24.6667C5.42813 17.3067 11.4015 11.3333 18.7615 11.3333C26.1215 11.3333 32.0948 17.3067 32.0948 24.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M13.4281 24.6667C13.4281 21.72 15.8148 19.3333 18.7615 19.3333C21.7081 19.3333 24.0948 21.72 24.0948 24.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M9.42813 24.6667C9.42813 19.5067 13.6015 15.3333 18.7615 15.3333C23.9215 15.3333 28.0948 19.5067 28.0948 24.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M95.8008 26.9918C94.5611 26.9918 93.4867 26.7191 92.5776 26.1736C91.6685 25.6282 90.9633 24.8651 90.4619 23.8844C89.966 22.9036 89.7181 21.7576 89.7181 20.4463C89.7181 19.135 89.966 17.9863 90.4619 17C90.9633 16.0138 91.6685 15.248 92.5776 14.7025C93.4867 14.1571 94.5611 13.8843 95.8008 13.8843C97.0404 13.8843 98.1148 14.1571 99.0239 14.7025C99.933 15.248 100.635 16.0138 101.131 17C101.633 17.9863 101.883 19.135 101.883 20.4463C101.883 21.7576 101.633 22.9036 101.131 23.8844C100.635 24.8651 99.933 25.6282 99.0239 26.1736C98.1148 26.7191 97.0404 26.9918 95.8008 26.9918ZM95.8173 24.5951C96.4895 24.5951 97.0515 24.4105 97.5032 24.0414C97.955 23.6667 98.2911 23.1653 98.5115 22.5372C98.7374 21.9091 98.8504 21.2094 98.8504 20.4381C98.8504 19.6612 98.7374 18.9587 98.5115 18.3306C98.2911 17.697 97.955 17.1929 97.5032 16.8182C97.0515 16.4436 96.4895 16.2562 95.8173 16.2562C95.1286 16.2562 94.5556 16.4436 94.0983 16.8182C93.6465 17.1929 93.3076 17.697 93.0817 18.3306C92.8614 18.9587 92.7512 19.6612 92.7512 20.4381C92.7512 21.2094 92.8614 21.9091 93.0817 22.5372C93.3076 23.1653 93.6465 23.6667 94.0983 24.0414C94.5556 24.4105 95.1286 24.5951 95.8173 24.5951Z" fill="currentColor"></path>
<path d="M85.3591 26.7438V14.0496H88.3508V26.7438H85.3591ZM86.8632 12.2479C86.3894 12.2479 85.9816 12.0909 85.64 11.7769C85.2985 11.4573 85.1277 11.0744 85.1277 10.6281C85.1277 10.1763 85.2985 9.79339 85.64 9.47934C85.9816 9.15978 86.3894 9 86.8632 9C87.3425 9 87.7502 9.15978 88.0863 9.47934C88.4279 9.79339 88.5987 10.1763 88.5987 10.6281C88.5987 11.0744 88.4279 11.4573 88.0863 11.7769C87.7502 12.0909 87.3425 12.2479 86.8632 12.2479Z" fill="currentColor"></path>
<path d="M76.5743 26.967C75.5771 26.967 74.6845 26.7108 73.8966 26.1984C73.1087 25.686 72.4861 24.9422 72.0288 23.967C71.5715 22.9917 71.3429 21.8072 71.3429 20.4132C71.3429 19.0028 71.5743 17.8127 72.0371 16.843C72.5054 15.8678 73.1363 15.1322 73.9297 14.6364C74.7231 14.135 75.6074 13.8843 76.5826 13.8843C77.3264 13.8843 77.9379 14.011 78.4173 14.2645C78.8966 14.5124 79.2768 14.8127 79.5578 15.1653C79.8388 15.5124 80.0564 15.8402 80.2107 16.1488H80.3346V9.81818H83.3346V26.7438H80.3925V24.7438H80.2107C80.0564 25.0524 79.8333 25.3802 79.5413 25.7273C79.2492 26.0689 78.8636 26.3609 78.3842 26.6033C77.9049 26.8457 77.3016 26.967 76.5743 26.967ZM77.409 24.5124C78.0426 24.5124 78.5826 24.3416 79.0289 24C79.4751 23.6529 79.814 23.1708 80.0454 22.5537C80.2768 21.9366 80.3925 21.2176 80.3925 20.3967C80.3925 19.5758 80.2768 18.8623 80.0454 18.2562C79.8195 17.6501 79.4834 17.1791 79.0371 16.843C78.5963 16.5069 78.0536 16.3388 77.409 16.3388C76.7423 16.3388 76.1859 16.5124 75.7396 16.8595C75.2933 17.2066 74.9572 17.686 74.7313 18.2975C74.5054 18.9091 74.3925 19.6088 74.3925 20.3967C74.3925 21.1901 74.5054 21.8981 74.7313 22.5207C74.9627 23.1378 75.3016 23.6254 75.7479 23.9835C76.1996 24.3361 76.7534 24.5124 77.409 24.5124Z" fill="currentColor"></path>
<path className="" d="M66.959 21.405V14.0496H69.9508V26.7438H67.0499V24.4876H66.9177C66.6312 25.1984 66.1601 25.7796 65.5045 26.2314C64.8543 26.6832 64.0527 26.9091 63.0995 26.9091C62.2676 26.9091 61.532 26.7245 60.8929 26.3554C60.2593 25.9807 59.7634 25.438 59.4053 24.7273C59.0472 24.011 58.8681 23.146 58.8681 22.1322V14.0496H61.8598V21.6694C61.8598 22.4738 62.0802 23.113 62.521 23.5868C62.9618 24.0606 63.5403 24.2975 64.2565 24.2975C64.6973 24.2975 65.1243 24.1901 65.5375 23.9752C65.9508 23.7603 66.2896 23.4408 66.5541 23.0165C66.824 22.5868 66.959 22.0496 66.959 21.405Z" fill="currentColor"></path>
<path className="" d="M57.5297 14.0496V16.3636H50.2322V14.0496H57.5297ZM52.0338 11.0083H55.0256V22.9256C55.0256 23.3278 55.0862 23.6364 55.2074 23.8513C55.3341 24.0606 55.4994 24.2039 55.7033 24.281C55.9071 24.3582 56.133 24.3967 56.3809 24.3967C56.5683 24.3967 56.7391 24.3829 56.8933 24.3554C57.0531 24.3278 57.1743 24.3031 57.257 24.281L57.7611 26.6199C57.6013 26.675 57.3727 26.7356 57.0752 26.8017C56.7831 26.8678 56.425 26.9064 56.0008 26.9174C55.2515 26.9394 54.5765 26.8265 53.976 26.5785C53.3754 26.3251 52.8988 25.9339 52.5462 25.405C52.1991 24.8761 52.0283 24.2149 52.0338 23.4215V11.0083Z" fill="currentColor"></path>
<path className="" d="M46.5714 14.4711C46.4943 13.7493 46.1692 13.1873 45.5962 12.7851C45.0287 12.3829 44.2904 12.1818 43.3813 12.1818C42.7422 12.1818 42.194 12.2782 41.7367 12.4711C41.2794 12.6639 40.9295 12.9256 40.6871 13.2562C40.4447 13.5868 40.3207 13.9642 40.3152 14.3884C40.3152 14.741 40.3951 15.0468 40.5549 15.3058C40.7202 15.5647 40.9433 15.7851 41.2243 15.9669C41.5053 16.1432 41.8166 16.292 42.1582 16.4132C42.4998 16.5344 42.8441 16.6364 43.1912 16.719L44.778 17.1157C45.4171 17.2645 46.0315 17.4656 46.621 17.719C47.216 17.9724 47.7477 18.292 48.216 18.6777C48.6899 19.0634 49.0645 19.5289 49.34 20.0744C49.6155 20.6198 49.7532 21.259 49.7532 21.9917C49.7532 22.9835 49.4998 23.8568 48.9929 24.6116C48.486 25.3609 47.7532 25.9477 46.7945 26.3719C45.8414 26.7906 44.6871 27 43.3317 27C42.0149 27 40.8717 26.7962 39.902 26.3884C38.9378 25.9807 38.183 25.3857 37.6375 24.6033C37.0976 23.8209 36.8056 22.8678 36.7615 21.7438H39.778C39.8221 22.3333 40.0039 22.8237 40.3235 23.2149C40.643 23.6061 41.059 23.8981 41.5714 24.0909C42.0893 24.2838 42.6678 24.3802 43.3069 24.3802C43.9736 24.3802 44.5576 24.281 45.059 24.0827C45.5659 23.8788 45.9626 23.5978 46.2491 23.2397C46.5356 22.876 46.6816 22.4518 46.6871 21.9669C46.6816 21.5262 46.5521 21.1625 46.2987 20.876C46.0452 20.584 45.6899 20.3416 45.2326 20.1488C44.7808 19.9504 44.2518 19.7741 43.6458 19.6198L41.7202 19.124C40.3262 18.7658 39.2243 18.2231 38.4144 17.4959C37.61 16.7631 37.2078 15.7906 37.2078 14.5785C37.2078 13.5813 37.4777 12.708 38.0177 11.9587C38.5631 11.2094 39.3042 10.6281 40.2408 10.2149C41.1775 9.79613 42.2381 9.58676 43.4226 9.58676C44.6237 9.58676 45.6761 9.79613 46.5797 10.2149C47.4888 10.6281 48.2023 11.2038 48.7202 11.9421C49.2381 12.6749 49.5053 13.5179 49.5218 14.4711H46.5714Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-white/60 text-sm max-w-md mb-6" style={{}}>
            The fastest way to manage GitHub Issues and Projects with true two-way synchronization.
          </p>
<div className="flex items-center gap-4">
<a className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110" href="#">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110" href="#">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
</a>
</div>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4" style={{}}>Product</h4>
<ul className="space-y-3 text-sm">
<li className=""><a className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200" href="#" style={{}}>Features</a></li>
<li><a className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200" href="#" style={{}}>Integrations</a></li>
<li className=""><a className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200" href="#" style={{}}>Pricing</a></li>
<li className=""><a className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200" href="#" style={{}}>Changelog</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4" style={{}}>Support</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200" href="#" style={{}}>Documentation</a></li>
<li className=""><a className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200" href="#" style={{}}>Help Center</a></li>
<li className=""><a className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200" href="#" style={{}}>Contact</a></li>
<li className=""><a className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200" href="#" style={{}}>Status</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row border-white/10 border-t mt-12 pt-8 items-center justify-between">
<p className="text-white/50 text-sm" style={{}}>© 2024 SyncBoard. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm mt-4 sm:mt-0">
<a className="text-white/50 hover:text-white/70 hover:scale-105 transition-all duration-200" href="#" style={{}}>Privacy</a>
<a className="text-white/50 hover:text-white/70 hover:scale-105 transition-all duration-200" href="#" style={{}}>Terms</a>
<a className="text-white/50 hover:text-white/70 hover:scale-105 transition-all duration-200" href="#" style={{}}>Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
