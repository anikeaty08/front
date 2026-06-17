import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 -z-10" data-us-project="XKOypOfa1PB1AP8SFWUj"></div>

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 hidden opacity-[0.25] bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="absolute inset-0 hidden opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>

<header className="max-w-7xl sm:px-6 mx-auto pt-6 px-4 sticky top-4 z-50">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<svg fill="none" height="36" viewbox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M84.6756 27C84.3509 27 83.9855 26.9675 83.5796 26.9025C83.1899 26.8376 82.8164 26.7564 82.4591 26.659C82.1181 26.5615 81.8502 26.456 81.6554 26.3423C81.5417 26.2774 81.4524 26.2124 81.3874 26.1475C81.3387 26.0663 81.3144 25.9364 81.3144 25.7578L81.1926 21.9337C81.1926 21.6089 81.2981 21.4465 81.5092 21.4465C81.6878 21.4465 81.8096 21.5927 81.8746 21.885L82.0938 22.8105C82.6459 25.1326 83.677 26.2936 85.1871 26.2936C85.9991 26.2936 86.6405 26.0257 87.1114 25.4898C87.5985 24.9377 87.8421 24.1664 87.8421 23.1759C87.8421 22.2178 87.5904 21.3247 87.087 20.4966C86.5999 19.6685 85.8123 18.8484 84.7244 18.0365C83.5227 17.1759 82.6459 16.3478 82.0938 15.5521C81.5417 14.7402 81.2656 13.8796 81.2656 12.9702C81.2656 11.7686 81.6797 10.8106 82.5079 10.0961C83.3522 9.36536 84.424 9 85.723 9C86.2102 9 86.6811 9.05683 87.1357 9.1705C87.5904 9.28417 87.9639 9.44655 88.2562 9.65764C88.3536 9.7226 88.4267 9.79567 88.4754 9.87686C88.5403 9.95805 88.5728 10.0636 88.5728 10.1935L88.6459 13.8714C88.6459 14.1475 88.5403 14.2855 88.3292 14.2855C88.1831 14.2855 88.0775 14.1718 88.0126 13.9445L87.8421 13.3356C87.4848 12.0852 87.1114 11.1759 86.7217 10.6076C86.3482 10.023 85.8042 9.73072 85.0897 9.73072C84.3915 9.73072 83.8313 9.95805 83.4091 10.4127C83.0031 10.8674 82.8001 11.5088 82.8001 12.3369C82.8001 13.0352 83.0275 13.7009 83.4821 14.3342C83.9368 14.9675 84.7325 15.7388 85.8692 16.6482C87.087 17.6387 87.972 18.5967 88.5241 19.5223C89.0924 20.4316 89.3766 21.4059 89.3766 22.4452C89.3766 23.3545 89.1736 24.1502 88.7677 24.8322C88.3617 25.5142 87.8015 26.05 87.087 26.4398C86.3888 26.8132 85.585 27 84.6756 27Z" fill="currentColor"></path>
<path d="M75.2893 27C74.4124 27 73.633 26.797 72.951 26.3911C72.2852 25.9689 71.7656 25.3924 71.3921 24.6617C71.0186 23.9147 70.8319 23.0622 70.8319 22.1042V10.8512C70.8319 10.5102 70.7751 10.2828 70.6614 10.1692C70.564 10.0555 70.3448 9.96619 70.0038 9.90124L69.4435 9.80381C69.2324 9.75509 69.1269 9.65766 69.1269 9.51152C69.1269 9.3329 69.2487 9.24359 69.4923 9.24359H73.9496C74.1932 9.24359 74.315 9.34102 74.315 9.53588C74.315 9.68202 74.2257 9.77133 74.047 9.80381L73.3894 9.90124C73.0646 9.94995 72.8454 10.0393 72.7318 10.1692C72.6181 10.2991 72.5613 10.5345 72.5613 10.8755V22.1286C72.5613 23.3627 72.8373 24.3207 73.3894 25.0027C73.9415 25.6847 74.7128 26.0257 75.7033 26.0257C76.7101 26.0257 77.4895 25.6847 78.0416 25.0027C78.5937 24.3207 78.8698 23.3627 78.8698 22.1286V11.3627C78.8698 10.4858 78.5937 9.99866 78.0416 9.90124L77.384 9.80381C77.2054 9.77133 77.1161 9.68202 77.1161 9.53588C77.1161 9.34102 77.2378 9.24359 77.4814 9.24359H80.9889C81.2324 9.24359 81.3542 9.3329 81.3542 9.51152C81.3542 9.65766 81.2487 9.75509 81.0376 9.80381L80.4774 9.90124C79.9253 9.99866 79.6492 10.4777 79.6492 11.3383V22.1042C79.6492 23.5819 79.2514 24.7673 78.4557 25.6603C77.66 26.5534 76.6046 27 75.2893 27Z" fill="currentColor"></path>
<path d="M58.2703 26.7808C58.108 26.7808 57.9943 26.7483 57.9293 26.6834C57.8644 26.6184 57.8319 26.5534 57.8319 26.4885C57.8319 26.3261 57.9537 26.2206 58.1973 26.1719L58.587 26.0988C59.1066 26.0014 59.5126 25.8471 59.8048 25.636C60.1134 25.4087 60.3732 25.0514 60.5843 24.5643L63.02 18.7673C63.1012 18.5886 63.1499 18.41 63.1661 18.2314C63.1986 18.0365 63.1661 17.8336 63.0687 17.6225L60.0241 10.8755C59.8617 10.502 59.6831 10.2504 59.4882 10.1205C59.3096 9.99055 59.1147 9.90936 58.9036 9.87688L58.4408 9.80381C58.181 9.75509 58.0511 9.64954 58.0511 9.48716C58.0511 9.32478 58.1891 9.24359 58.4652 9.24359H62.7521C63.0444 9.24359 63.1905 9.32478 63.1905 9.48716C63.1905 9.64954 63.0525 9.75509 62.7764 9.80381L62.3136 9.87688C62.0376 9.92559 61.8427 10.023 61.7291 10.1692C61.6316 10.3153 61.656 10.5508 61.8021 10.8755L64.1161 16.0636C64.181 16.2098 64.2541 16.2828 64.3353 16.2828C64.4327 16.2828 64.5139 16.2098 64.5789 16.0636L66.6736 11.1191C66.8197 10.7619 66.8684 10.502 66.8197 10.3397C66.771 10.161 66.6086 10.0393 66.3326 9.97431L65.6506 9.82816C65.3745 9.76321 65.2365 9.64954 65.2365 9.48716C65.2365 9.32478 65.3826 9.24359 65.6749 9.24359H69.4016C69.5802 9.24359 69.6939 9.27607 69.7426 9.34102C69.8075 9.38973 69.84 9.45469 69.84 9.53588C69.84 9.69826 69.7182 9.80381 69.4747 9.85252L69.0849 9.92559C68.679 9.99055 68.338 10.1448 68.0619 10.3884C67.7859 10.6157 67.5423 10.973 67.3312 11.4601L65.0173 16.8674C64.9361 17.0785 64.8874 17.2815 64.8711 17.4763C64.8711 17.6712 64.928 17.8823 65.0416 18.1096L68.1837 25.1489C68.3623 25.5386 68.541 25.7903 68.7196 25.9039C68.9144 26.0176 69.1093 26.0907 69.3042 26.1231L69.7669 26.1962C70.043 26.2449 70.181 26.3586 70.181 26.5372C70.181 26.6996 70.0349 26.7808 69.7426 26.7808H65.4314C65.1391 26.7808 64.9929 26.6834 64.9929 26.4885C64.9929 26.3424 65.1228 26.2449 65.3826 26.1962L65.8698 26.1231C66.1458 26.0907 66.3407 26.0014 66.4544 25.8552C66.568 25.6928 66.5599 25.4574 66.43 25.1489L63.9212 19.571C63.8563 19.4249 63.7751 19.3518 63.6776 19.3518C63.5965 19.3518 63.5234 19.4249 63.4584 19.571L61.2663 24.9053C61.1201 25.2625 61.0714 25.5304 61.1201 25.7091C61.1688 25.8714 61.3312 25.9851 61.6073 26.0501L62.2893 26.1962C62.5653 26.2612 62.7034 26.3748 62.7034 26.5372C62.7034 26.6996 62.5572 26.7808 62.2649 26.7808H58.2703Z" fill="currentColor"></path>
<path d="M49.2578 26.7808C49.0142 26.7808 48.8925 26.6915 48.8925 26.5129C48.8925 26.3667 48.998 26.2693 49.2091 26.2206L49.7693 26.1231C50.1103 26.0582 50.3295 25.9689 50.427 25.8552C50.5406 25.7415 50.5975 25.5142 50.5975 25.1732V10.8512C50.5975 10.5102 50.5406 10.2828 50.427 10.1692C50.3295 10.0555 50.1103 9.96619 49.7693 9.90124L49.2091 9.80381C48.998 9.75509 48.8925 9.65766 48.8925 9.51152C48.8925 9.3329 49.0142 9.24359 49.2578 9.24359H57.4418C57.8153 9.24359 58.0183 9.43033 58.0508 9.80381L58.2456 13.8471C58.2781 14.1232 58.1726 14.2612 57.929 14.2612C57.7341 14.2612 57.6205 14.1556 57.588 13.9445L57.4418 13.0433C57.2632 11.9391 56.8979 11.1353 56.3458 10.632C55.7937 10.1123 55.0305 9.85252 54.0562 9.85252C53.4067 9.85252 52.952 9.94995 52.6922 10.1448C52.4486 10.3234 52.3268 10.6482 52.3268 11.1191V16.9892C52.3268 17.2165 52.4405 17.3302 52.6678 17.3302H53.8857C54.6002 17.3302 55.0386 16.9486 55.201 16.1854L55.4445 14.9675C55.5095 14.724 55.6475 14.6184 55.8586 14.6509C56.0372 14.6834 56.1265 14.8214 56.1265 15.065V20.5453C56.1265 20.7889 56.0372 20.9269 55.8586 20.9594C55.6475 20.9919 55.5095 20.8863 55.4445 20.6428L55.201 19.4493C55.0873 18.8809 54.9249 18.5074 54.7138 18.3288C54.519 18.1502 54.2348 18.0609 53.8613 18.0609H52.6678C52.4405 18.0609 52.3268 18.1746 52.3268 18.4019V24.5156C52.3268 25.1001 52.473 25.5223 52.7653 25.7821C53.0738 26.0419 53.6259 26.1719 54.4215 26.1719C55.2335 26.1719 55.9236 25.9689 56.4919 25.5629C57.0765 25.1407 57.4824 24.3613 57.7098 23.2246L58.0021 21.7876C58.0508 21.5765 58.1726 21.4709 58.3674 21.4709C58.5947 21.4709 58.6922 21.6089 58.6597 21.885L58.4161 26.2206C58.3837 26.594 58.1807 26.7808 57.8072 26.7808H49.2578Z" fill="currentColor"></path>
<path d="M46.943 27C46.6831 27 46.4639 26.8051 46.2853 26.4154L39.6845 12.0934C39.6358 11.9797 39.5708 11.931 39.4896 11.9472C39.4247 11.9635 39.3922 12.0366 39.3922 12.1665V24.6861C39.3922 25.1407 39.4653 25.4898 39.6114 25.7334C39.7738 25.9608 40.058 26.1069 40.4639 26.1718L40.7806 26.2206C40.9917 26.2368 41.0972 26.3342 41.0972 26.5129C41.0972 26.6915 40.9754 26.7808 40.7319 26.7808H37.2488C37.0052 26.7808 36.8834 26.6915 36.8834 26.5129C36.8834 26.3342 36.989 26.2368 37.2001 26.2206L37.5167 26.1718C37.9389 26.1069 38.2312 25.9608 38.3936 25.7334C38.556 25.4898 38.6371 25.1407 38.6371 24.6861V10.8512C38.6371 10.5102 38.5803 10.2828 38.4666 10.1692C38.3692 10.0555 38.1338 9.96619 37.7603 9.90124L37.2001 9.80381C36.989 9.75509 36.8834 9.65766 36.8834 9.51152C36.8834 9.3329 37.0052 9.24359 37.2488 9.24359H39.855C40.261 9.24359 40.5451 9.42221 40.7075 9.77945L46.4558 22.4208C46.5045 22.5183 46.5614 22.5589 46.6263 22.5426C46.7075 22.5264 46.7481 22.4696 46.7481 22.3721V11.3383C46.7481 10.8187 46.6588 10.4615 46.4802 10.2666C46.3015 10.0555 46.0742 9.92559 45.7982 9.87688L45.3597 9.80381C45.1486 9.75509 45.0431 9.65766 45.0431 9.51152C45.0431 9.3329 45.1649 9.24359 45.4084 9.24359H48.8915C49.1351 9.24359 49.2569 9.3329 49.2569 9.51152C49.2569 9.69014 49.1513 9.78757 48.9402 9.80381L48.6236 9.85252C48.2014 9.91747 47.9091 10.0555 47.7467 10.2666C47.5844 10.4615 47.5032 10.8187 47.5032 11.3383V26.2206C47.5032 26.5129 47.4463 26.7158 47.3327 26.8295C47.2352 26.9432 47.1053 27 46.943 27Z" fill="currentColor"></path>
</svg>
</div>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#">Buy</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#">Rent</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#">Sell</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#">Agents</a>
</nav>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-indigo-100 border border-white/10 rounded-full px-4 py-2" href="#">
<span className="font-geist">List a Property</span>
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-8 items-start">
<div className="flex-1">
<div className="inline-flex items-center gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border border-white/10 rounded-full px-3 py-1.5">
<svg className="lucide lucide-map-pin w-3.5 h-3.5 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">Nationwide • Verified Listings</span>
</div>
<h1 className="text-[9.5vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[6vw] leading-[0.95] font-medium text-neutral-100 tracking-tighter font-geist mt-4" style={{}}>
              Find your next home with confidence
            </h1>
<p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-neutral-400 font-geist">
              Curated properties across top neighborhoods. Powerful search, virtual tours, and expert support from offer to close.
            </p>
</div>
<div className="hidden lg:block w-[22rem] pt-6">
<div className="space-y-4">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<svg className="lucide lucide-home w-4 h-4 stroke-[1.5]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-geist">Single-family • Apartments • Penthouses</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400">
<svg className="lucide lucide-calendar w-4 h-4 stroke-[1.5]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-geist">Same‑day showings</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400">
<svg className="lucide lucide-shield-check w-4 h-4 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist">Verified sellers &amp; documents</span>
</div>
<div className="border-white/10 border-t pt-4">
<p className="leading-relaxed text-sm text-neutral-400 font-geist">
                  EstateVault combines market expertise with a seamless experience. Save favorites, compare homes, and close with confidence.
                </p>
<div className="grid grid-cols-3 gap-4 max-w-2xl mt-6">
<div className="rounded-xl bg-neutral-800 border border-white/10 p-3">
<div className="text-xl font-semibold tracking-tight text-neutral-100 font-geist">12K+</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-geist">Active Listings</p>
</div>
<div className="rounded-xl bg-neutral-800 border border-white/10 p-3">
<div className="text-xl font-semibold tracking-tight text-neutral-100 font-geist">4.9</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-geist">Client Rating</p>
</div>
<div className="rounded-xl bg-neutral-800 border border-white/10 p-3">
<div className="text-xl font-semibold tracking-tight text-neutral-100 font-geist">350+</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-geist">Virtual Tours</p>
</div>
</div></div>
</div>
</div>
</div>

<div className="mt-8 relative rounded-2xl overflow-hidden border border-white/10">
<img alt="Modern home exterior at sunset" className="w-full h-[52vh] sm:h-[60vh] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/750d7ba1-048d-4db2-99e7-cff7b1f47d0d_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl lg:text-6xl text-white drop-shadow-md font-geist tracking-tighter font-medium" style={{}}>Explore curated homes near you</h2>
<p className="mt-2 sm:mt-3 text-white/90 text-base sm:text-lg leading-relaxed drop-shadow-sm font-geist">
                Start with location and lifestyle filters. Switch between buy or rent seamlessly, with real-time results.
              </p>
</div>

<div className="mt-5">
<div className="w-full sm:p-4 bg-black/10 border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 backdrop-blur-xl" style={{backdropFilter: 'blur(20px) saturate(180%)'}}>


<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">

<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
<svg className="lucide lucide-map-pin w-4 h-4 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<input className="w-full pl-9 pr-3 py-3 rounded-xl text-sm bg-black/10 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 backdrop-blur-md" placeholder="City, neighborhood" type="text"/>
</div>

<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
<svg className="lucide lucide-building-2 w-4 h-4 stroke-[1.5]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<select className="appearance-none w-full pl-9 pr-10 py-3 rounded-xl text-sm bg-black/10 text-white border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 backdrop-blur-md">
<option className="font-geist">Any type</option>
<option className="font-geist">House</option>
<option className="font-geist">Apartment</option>
<option className="font-geist">Condo</option>
<option className="font-geist">Penthouse</option>
<option className="font-geist">Villa</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
<svg className="lucide lucide-dollar-sign w-4 h-4 stroke-[1.5]" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<select className="appearance-none w-full pl-9 pr-10 py-3 rounded-xl text-sm bg-black/10 text-white border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 backdrop-blur-md" id="priceSelect">
<option className="font-geist" value="sale">$500K–$1M</option>
<option className="font-geist" value="sale">$1M–$2M</option>
<option className="font-geist" value="sale">$2M–$5M</option>
<option className="font-geist" value="sale">$5M+</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
<svg className="lucide lucide-bed w-4 h-4 stroke-[1.5]" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
</div>
<select className="appearance-none w-full pl-9 pr-10 py-3 rounded-xl text-sm bg-black/10 text-white border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 backdrop-blur-md">
<option className="font-geist">Any beds</option>
<option className="font-geist">1+ beds</option>
<option className="font-geist">2+ beds</option>
<option className="font-geist">3+ beds</option>
<option className="font-geist">4+ beds</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="flex items-stretch">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border-0 transition-all" type="button">
<svg className="lucide lucide-search w-4 h-4 stroke-[1.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="font-geist">Search</span>
</button>
</div>
</div>

<div className="flex flex-wrap gap-2 mt-3 items-center">
<span className="text-xs text-white/50 font-geist">Quick filters:</span>
<button className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 text-white/80 backdrop-blur-sm transition-all font-geist">
<svg className="lucide lucide-car w-3.5 h-3.5 stroke-[1.5] text-white/60" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
        Parking
      </button>
<button className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 text-white/80 backdrop-blur-sm transition-all font-geist">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 stroke-[1.5] text-white/60" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        New builds
      </button>
<button className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 text-white/80 backdrop-blur-sm transition-all font-geist">
<svg className="lucide lucide-trees w-3.5 h-3.5 stroke-[1.5] text-white/60" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
        Garden
      </button>
<button className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 text-white/80 backdrop-blur-sm transition-all font-geist">
<svg className="lucide lucide-waves w-3.5 h-3.5 stroke-[1.5] text-white/60" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
        Pool
      </button>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl sm:text-2xl text-neutral-100 font-geist tracking-tighter font-medium" style={{}}>Featured Listings</h2>
<a className="inline-flex items-center gap-2 text-sm text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10" href="#">
<span className="font-geist">View all</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="relative aspect-[16/10]">
<img alt="Hillside modern home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/26b3f294-2885-4440-ae74-eda7506cca9e_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-white bg-cyan-600/90 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20 font-geist">New</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist">Oceanview Modern Villa</h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist">
<svg className="lucide lucide-map-pin w-3.5 h-3.5 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Malibu, CA
                  </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-neutral-100 font-geist">$2.8M</div>
<div className="text-[11px] text-neutral-400 font-geist">4 bd • 3 ba • 2,800 sqft</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist">
<svg className="lucide lucide-eye w-3.5 h-3.5 stroke-[1.5]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  Virtual tour
                </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
<svg className="lucide lucide-heart w-4 h-4 stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
</div>
</article>

<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="relative aspect-[16/10]">
<img alt="Penthouse suite" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/50eb2e09-7421-4468-b850-e7d07311523d_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-white bg-indigo-900/90 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20 font-geist">Premium</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist">Skyline Penthouse Suite</h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist">
<svg className="lucide lucide-map-pin w-3.5 h-3.5 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Manhattan, NY
                  </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-neutral-100 font-geist">$5.2M</div>
<div className="text-[11px] text-neutral-400 font-geist">5 bd • 4 ba • 4,500 sqft</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist">
<svg className="lucide lucide-eye w-3.5 h-3.5 stroke-[1.5]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  Virtual tour
                </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
<svg className="lucide lucide-heart w-4 h-4 stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
</div>
</article>

<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="relative aspect-[16/10]">
<img alt="Contemporary townhouse" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c493dcb7-d70e-440e-92e9-4b752945750e_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-indigo-900 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20 font-geist">Open House</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist">Contemporary Townhouse</h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist">
<svg className="lucide lucide-map-pin w-3.5 h-3.5 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Austin, TX
                  </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-neutral-100 font-geist">$1.15M</div>
<div className="text-[11px] text-neutral-400 font-geist">3 bd • 3 ba • 1,900 sqft</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist">
<svg className="lucide lucide-route w-3.5 h-3.5 stroke-[1.5]" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
                  Directions
                </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
</button></div></div></article></div></div></div></section><section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="relative rounded-2xl overflow-hidden border border-white/10">
<img alt="Clients touring a modern property" className="w-full h-[260px] sm:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/da666542-bfa8-493a-af68-db5a713dc548_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
</div>
<div className="max-w-2xl">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300 font-geist">About EstateVault</span>
</div>
<h2 className="mt-2 text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium">Our Story</h2>
<p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-400 font-geist">
              EstateVault began with a simple idea: make finding an extraordinary home feel effortless. What started as a small collective of agents and designers has grown into a nationwide network known for precision, transparency, and taste. 
              From beachfront villas to skyline penthouses, we curate every listing, verify every document, and guide you from first tour to final signature.
            </p>
<p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-400 font-geist">
              Today, our platform blends expert local insight with real‑time data, immersive media, and concierge‑level service—so you can move with confidence.
            </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10" href="#">
<span className="font-geist">See details</span>
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-1">
<ul className="space-y-6 sm:space-y-8">
<li className="">
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">12,000+</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">Active Listings</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">28</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">Markets Served</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">350+</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">Virtual Tours</p>
</li>
<li className="">
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">4.9</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">Client Rating</p>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-white/10">
<h3 className="text-xl text-neutral-100 font-geist tracking-tight font-medium">Concierge by EstateVault</h3>
<p className="mt-2 text-sm leading-relaxed text-neutral-400 font-geist">
              From private showings to vetted contractors and movers, our team orchestrates every step for a seamless move‑in.
            </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10" href="#">
<span className="font-geist">Explore more</span>
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section><footer className="max-w-7xl sm:px-6 mt-10 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid lg:grid-cols-4 gap-10">

<div className="space-y-4">
<div className="flex items-center gap-2">
<svg fill="none" height="36" viewbox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M84.6756 27C84.3509 27 83.9855 26.9675 83.5796 26.9025C83.1899 26.8376 82.8164 26.7564 82.4591 26.659C82.1181 26.5615 81.8502 26.456 81.6554 26.3423C81.5417 26.2774 81.4524 26.2124 81.3874 26.1475C81.3387 26.0663 81.3144 25.9364 81.3144 25.7578L81.1926 21.9337C81.1926 21.6089 81.2981 21.4465 81.5092 21.4465C81.6878 21.4465 81.8096 21.5927 81.8746 21.885L82.0938 22.8105C82.6459 25.1326 83.677 26.2936 85.1871 26.2936C85.9991 26.2936 86.6405 26.0257 87.1114 25.4898C87.5985 24.9377 87.8421 24.1664 87.8421 23.1759C87.8421 22.2178 87.5904 21.3247 87.087 20.4966C86.5999 19.6685 85.8123 18.8484 84.7244 18.0365C83.5227 17.1759 82.6459 16.3478 82.0938 15.5521C81.5417 14.7402 81.2656 13.8796 81.2656 12.9702C81.2656 11.7686 81.6797 10.8106 82.5079 10.0961C83.3522 9.36536 84.424 9 85.723 9C86.2102 9 86.6811 9.05683 87.1357 9.1705C87.5904 9.28417 87.9639 9.44655 88.2562 9.65764C88.3536 9.7226 88.4267 9.79567 88.4754 9.87686C88.5403 9.95805 88.5728 10.0636 88.5728 10.1935L88.6459 13.8714C88.6459 14.1475 88.5403 14.2855 88.3292 14.2855C88.1831 14.2855 88.0775 14.1718 88.0126 13.9445L87.8421 13.3356C87.4848 12.0852 87.1114 11.1759 86.7217 10.6076C86.3482 10.023 85.8042 9.73072 85.0897 9.73072C84.3915 9.73072 83.8313 9.95805 83.4091 10.4127C83.0031 10.8674 82.8001 11.5088 82.8001 12.3369C82.8001 13.0352 83.0275 13.7009 83.4821 14.3342C83.9368 14.9675 84.7325 15.7388 85.8692 16.6482C87.087 17.6387 87.972 18.5967 88.5241 19.5223C89.0924 20.4316 89.3766 21.4059 89.3766 22.4452C89.3766 23.3545 89.1736 24.1502 88.7677 24.8322C88.3617 25.5142 87.8015 26.05 87.087 26.4398C86.3888 26.8132 85.585 27 84.6756 27Z" fill="currentColor"></path>
<path d="M75.2893 27C74.4124 27 73.633 26.797 72.951 26.3911C72.2852 25.9689 71.7656 25.3924 71.3921 24.6617C71.0186 23.9147 70.8319 23.0622 70.8319 22.1042V10.8512C70.8319 10.5102 70.7751 10.2828 70.6614 10.1692C70.564 10.0555 70.3448 9.96619 70.0038 9.90124L69.4435 9.80381C69.2324 9.75509 69.1269 9.65766 69.1269 9.51152C69.1269 9.3329 69.2487 9.24359 69.4923 9.24359H73.9496C74.1932 9.24359 74.315 9.34102 74.315 9.53588C74.315 9.68202 74.2257 9.77133 74.047 9.80381L73.3894 9.90124C73.0646 9.94995 72.8454 10.0393 72.7318 10.1692C72.6181 10.2991 72.5613 10.5345 72.5613 10.8755V22.1286C72.5613 23.3627 72.8373 24.3207 73.3894 25.0027C73.9415 25.6847 74.7128 26.0257 75.7033 26.0257C76.7101 26.0257 77.4895 25.6847 78.0416 25.0027C78.5937 24.3207 78.8698 23.3627 78.8698 22.1286V11.3627C78.8698 10.4858 78.5937 9.99866 78.0416 9.90124L77.384 9.80381C77.2054 9.77133 77.1161 9.68202 77.1161 9.53588C77.1161 9.34102 77.2378 9.24359 77.4814 9.24359H80.9889C81.2324 9.24359 81.3542 9.3329 81.3542 9.51152C81.3542 9.65766 81.2487 9.75509 81.0376 9.80381L80.4774 9.90124C79.9253 9.99866 79.6492 10.4777 79.6492 11.3383V22.1042C79.6492 23.5819 79.2514 24.7673 78.4557 25.6603C77.66 26.5534 76.6046 27 75.2893 27Z" fill="currentColor"></path>
<path d="M58.2703 26.7808C58.108 26.7808 57.9943 26.7483 57.9293 26.6834C57.8644 26.6184 57.8319 26.5534 57.8319 26.4885C57.8319 26.3261 57.9537 26.2206 58.1973 26.1719L58.587 26.0988C59.1066 26.0014 59.5126 25.8471 59.8048 25.636C60.1134 25.4087 60.3732 25.0514 60.5843 24.5643L63.02 18.7673C63.1012 18.5886 63.1499 18.41 63.1661 18.2314C63.1986 18.0365 63.1661 17.8336 63.0687 17.6225L60.0241 10.8755C59.8617 10.502 59.6831 10.2504 59.4882 10.1205C59.3096 9.99055 59.1147 9.90936 58.9036 9.87688L58.4408 9.80381C58.181 9.75509 58.0511 9.64954 58.0511 9.48716C58.0511 9.32478 58.1891 9.24359 58.4652 9.24359H62.7521C63.0444 9.24359 63.1905 9.32478 63.1905 9.48716C63.1905 9.64954 63.0525 9.75509 62.7764 9.80381L62.3136 9.87688C62.0376 9.92559 61.8427 10.023 61.7291 10.1692C61.6316 10.3153 61.656 10.5508 61.8021 10.8755L64.1161 16.0636C64.181 16.2098 64.2541 16.2828 64.3353 16.2828C64.4327 16.2828 64.5139 16.2098 64.5789 16.0636L66.6736 11.1191C66.8197 10.7619 66.8684 10.502 66.8197 10.3397C66.771 10.161 66.6086 10.0393 66.3326 9.97431L65.6506 9.82816C65.3745 9.76321 65.2365 9.64954 65.2365 9.48716C65.2365 9.32478 65.3826 9.24359 65.6749 9.24359H69.4016C69.5802 9.24359 69.6939 9.27607 69.7426 9.34102C69.8075 9.38973 69.84 9.45469 69.84 9.53588C69.84 9.69826 69.7182 9.80381 69.4747 9.85252L69.0849 9.92559C68.679 9.99055 68.338 10.1448 68.0619 10.3884C67.7859 10.6157 67.5423 10.973 67.3312 11.4601L65.0173 16.8674C64.9361 17.0785 64.8874 17.2815 64.8711 17.4763C64.8711 17.6712 64.928 17.8823 65.0416 18.1096L68.1837 25.1489C68.3623 25.5386 68.541 25.7903 68.7196 25.9039C68.9144 26.0176 69.1093 26.0907 69.3042 26.1231L69.7669 26.1962C70.043 26.2449 70.181 26.3586 70.181 26.5372C70.181 26.6996 70.0349 26.7808 69.7426 26.7808H65.4314C65.1391 26.7808 64.9929 26.6834 64.9929 26.4885C64.9929 26.3424 65.1228 26.2449 65.3826 26.1962L65.8698 26.1231C66.1458 26.0907 66.3407 26.0014 66.4544 25.8552C66.568 25.6928 66.5599 25.4574 66.43 25.1489L63.9212 19.571C63.8563 19.4249 63.7751 19.3518 63.6776 19.3518C63.5965 19.3518 63.5234 19.4249 63.4584 19.571L61.2663 24.9053C61.1201 25.2625 61.0714 25.5304 61.1201 25.7091C61.1688 25.8714 61.3312 25.9851 61.6073 26.0501L62.2893 26.1962C62.5653 26.2612 62.7034 26.3748 62.7034 26.5372C62.7034 26.6996 62.5572 26.7808 62.2649 26.7808H58.2703Z" fill="currentColor"></path>
<path d="M49.2578 26.7808C49.0142 26.7808 48.8925 26.6915 48.8925 26.5129C48.8925 26.3667 48.998 26.2693 49.2091 26.2206L49.7693 26.1231C50.1103 26.0582 50.3295 25.9689 50.427 25.8552C50.5406 25.7415 50.5975 25.5142 50.5975 25.1732V10.8512C50.5975 10.5102 50.5406 10.2828 50.427 10.1692C50.3295 10.0555 50.1103 9.96619 49.7693 9.90124L49.2091 9.80381C48.998 9.75509 48.8925 9.65766 48.8925 9.51152C48.8925 9.3329 49.0142 9.24359 49.2578 9.24359H57.4418C57.8153 9.24359 58.0183 9.43033 58.0508 9.80381L58.2456 13.8471C58.2781 14.1232 58.1726 14.2612 57.929 14.2612C57.7341 14.2612 57.6205 14.1556 57.588 13.9445L57.4418 13.0433C57.2632 11.9391 56.8979 11.1353 56.3458 10.632C55.7937 10.1123 55.0305 9.85252 54.0562 9.85252C53.4067 9.85252 52.952 9.94995 52.6922 10.1448C52.4486 10.3234 52.3268 10.6482 52.3268 11.1191V16.9892C52.3268 17.2165 52.4405 17.3302 52.6678 17.3302H53.8857C54.6002 17.3302 55.0386 16.9486 55.201 16.1854L55.4445 14.9675C55.5095 14.724 55.6475 14.6184 55.8586 14.6509C56.0372 14.6834 56.1265 14.8214 56.1265 15.065V20.5453C56.1265 20.7889 56.0372 20.9269 55.8586 20.9594C55.6475 20.9919 55.5095 20.8863 55.4445 20.6428L55.201 19.4493C55.0873 18.8809 54.9249 18.5074 54.7138 18.3288C54.519 18.1502 54.2348 18.0609 53.8613 18.0609H52.6678C52.4405 18.0609 52.3268 18.1746 52.3268 18.4019V24.5156C52.3268 25.1001 52.473 25.5223 52.7653 25.7821C53.0738 26.0419 53.6259 26.1719 54.4215 26.1719C55.2335 26.1719 55.9236 25.9689 56.4919 25.5629C57.0765 25.1407 57.4824 24.3613 57.7098 23.2246L58.0021 21.7876C58.0508 21.5765 58.1726 21.4709 58.3674 21.4709C58.5947 21.4709 58.6922 21.6089 58.6597 21.885L58.4161 26.2206C58.3837 26.594 58.1807 26.7808 57.8072 26.7808H49.2578Z" fill="currentColor"></path>
<path d="M46.943 27C46.6831 27 46.4639 26.8051 46.2853 26.4154L39.6845 12.0934C39.6358 11.9797 39.5708 11.931 39.4896 11.9472C39.4247 11.9635 39.3922 12.0366 39.3922 12.1665V24.6861C39.3922 25.1407 39.4653 25.4898 39.6114 25.7334C39.7738 25.9608 40.058 26.1069 40.4639 26.1718L40.7806 26.2206C40.9917 26.2368 41.0972 26.3342 41.0972 26.5129C41.0972 26.6915 40.9754 26.7808 40.7319 26.7808H37.2488C37.0052 26.7808 36.8834 26.6915 36.8834 26.5129C36.8834 26.3342 36.989 26.2368 37.2001 26.2206L37.5167 26.1718C37.9389 26.1069 38.2312 25.9608 38.3936 25.7334C38.556 25.4898 38.6371 25.1407 38.6371 24.6861V10.8512C38.6371 10.5102 38.5803 10.2828 38.4666 10.1692C38.3692 10.0555 38.1338 9.96619 37.7603 9.90124L37.2001 9.80381C36.989 9.75509 36.8834 9.65766 36.8834 9.51152C36.8834 9.3329 37.0052 9.24359 37.2488 9.24359H39.855C40.261 9.24359 40.5451 9.42221 40.7075 9.77945L46.4558 22.4208C46.5045 22.5183 46.5614 22.5589 46.6263 22.5426C46.7075 22.5264 46.7481 22.4696 46.7481 22.3721V11.3383C46.7481 10.8187 46.6588 10.4615 46.4802 10.2666C46.3015 10.0555 46.0742 9.92559 45.7982 9.87688L45.3597 9.80381C45.1486 9.75509 45.0431 9.65766 45.0431 9.51152C45.0431 9.3329 45.1649 9.24359 45.4084 9.24359H48.8915C49.1351 9.24359 49.2569 9.3329 49.2569 9.51152C49.2569 9.69014 49.1513 9.78757 48.9402 9.80381L48.6236 9.85252C48.2014 9.91747 47.9091 10.0555 47.7467 10.2666C47.5844 10.4615 47.5032 10.8187 47.5032 11.3383V26.2206C47.5032 26.5129 47.4463 26.7158 47.3327 26.8295C47.2352 26.9432 47.1053 27 46.943 27Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-400 font-geist">
            Curated homes, verified sellers, and concierge support from first tour to closing. Move with confidence.
          </p>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 rounded-full px-3 py-1.5" href="#">
<span className="font-geist">Contact us</span>
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<div className="text-xs text-neutral-500 font-geist">support@estatevault.com</div>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Company</h4>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">About</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Press</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Partners</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Investor Relations</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Apps</h4>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">iOS App</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Android App</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">TV App</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Virtual Reality</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Services</h4>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Buy with EstateVault</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Sell with EstateVault</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Concierge</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Agent Finder</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Neighborhood Guides</a></li>
</ul>
</div>
</div>


<div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-400 font-geist">
<a className="hover:text-neutral-200" href="#">Fair Housing Statement</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Privacy Policy</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Terms of Use</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Accessibility</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">DMCA</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Sitemap</a>
</nav>
<div className="text-[11px] text-neutral-500 font-geist">© 2025 EstateVault, Inc. All rights reserved.</div>
</div>
</div>
</div>
</footer>
    </>
  );
}
