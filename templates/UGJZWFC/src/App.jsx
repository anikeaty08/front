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
      

<div aria-hidden="true" className="fixed inset-0 -z-10">
<div className="absolute inset-0"></div>
<svg className="absolute inset-0 opacity-[0.04] w-[24px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(30, 41, 59)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="dots" patternunits="userSpaceOnUse" width="24" x="0" y="0">
<circle cx="1" cy="1" fill="#0B1F44" r="1"></circle>
</pattern>
</defs>
<rect className="" fill="url(#dots)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4 sm:p-6">
<div className="max-w-4xl border-white/10 border rounded-full mx-auto px-4 py-3 sm:px-6" style={{background: 'linear-gradient(180deg, rgba(14, 16, 26, 0.55), rgba(14, 16, 26, 0.35)) padding-box, linear-gradient(120deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.08)) border-box', border: '1px solid transparent', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="text-base sm:text-lg font-semibold text-white/90 tracking-tight font-geist">
<svg className="sm:w-[138px] sm:h-[30px]" fill="none" height="26" viewbox="0 0 276 60" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M17.793 57.1719C17.3826 57.003 16.8341 56.4679 16.7023 56.1079C16.6409 55.9404 16.6158 55.6258 16.6386 55.3125C16.6735 54.8353 16.7626 54.6232 17.7603 52.6446C18.7268 50.7276 18.8879 50.4552 19.2483 50.1278C19.6692 49.7452 20.072 49.5833 20.6017 49.5833C21.9408 49.5833 22.9624 50.9862 22.4923 52.1795C22.2192 52.8728 20.3873 56.4227 20.1842 56.6524C20.0602 56.7926 19.7672 56.9977 19.5335 57.1079C19.0127 57.3536 18.298 57.3799 17.793 57.1719Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path className="" d="M7.20154 47.7701C6.20159 47.5342 5.54638 46.7365 5.54493 45.7533C5.54379 45.0117 5.78974 44.6 6.58126 44.0188C6.91679 43.7724 7.79385 43.1177 8.53055 42.5638C9.26709 42.0101 10.0027 41.4946 10.1653 41.418C10.9245 41.0614 11.7752 41.2004 12.4272 41.7881C12.9333 42.2443 13.1443 42.6801 13.1432 43.2672C13.1421 43.8823 12.894 44.3383 12.2841 44.8462C11.2872 45.6764 8.9217 47.4398 8.59151 47.5988C8.21378 47.7809 7.57879 47.8591 7.20154 47.7701Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M1.70414 33.8363C0.275681 33.1941 -0.106416 31.5338 0.929757 30.4701C1.4383 29.948 1.54244 29.9194 3.94352 29.6465C6.54996 29.3504 6.96003 29.3388 7.42719 29.5495C8.24797 29.9195 8.70494 30.5311 8.75506 31.3272C8.78433 31.7913 8.76315 31.8795 8.51995 32.3053C8.22873 32.815 7.72762 33.1954 7.17445 33.3264C6.62515 33.4567 2.77314 33.9873 2.39864 33.9844C2.19441 33.9828 1.88185 33.9162 1.70414 33.8363Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M50.9551 47.1059C50.7451 46.9858 50.2013 46.5981 49.7467 46.2442C49.292 45.8903 48.4719 45.28 47.924 44.8878C46.8172 44.0957 46.511 43.7697 46.321 43.1801C46.0753 42.4187 46.2991 41.696 46.9424 41.1722C47.3326 40.8543 47.6348 40.7266 48.1668 40.6552C48.8567 40.5625 49.1607 40.7159 50.9818 42.078C53.4309 43.9099 53.6466 44.0934 53.8723 44.538C54.1537 45.0921 54.1518 45.7705 53.867 46.277C53.4783 46.9686 52.8197 47.3199 51.9072 47.3225C51.4109 47.3239 51.2872 47.2958 50.9551 47.1059Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M31.0119 50.5927C29.1123 50.4508 26.6522 49.886 24.8652 49.1817C20.5394 47.4766 16.5795 44.2407 14.2533 40.5099C13.124 38.6991 12.414 37.123 11.8865 35.2568C10.2023 29.2977 11.2614 23.2302 14.8319 18.3828C17.0072 15.4293 20.025 13.1369 23.2935 11.9549C27.933 10.2771 32.3338 10.3433 36.5501 12.1545C38.8385 13.1373 40.9532 14.6151 42.588 16.3737C44.3656 18.2857 45.762 20.5536 46.6876 23.0319C48.0214 26.6029 47.8766 30.1811 46.2544 33.7365C45.2454 35.9476 43.3955 38.2157 41.5806 39.4668C39.4693 40.9221 36.9238 41.879 34.3392 42.1892C29.5197 42.7675 24.6893 40.6816 21.8966 36.8162C20.8963 35.4317 20.1633 33.7792 19.8394 32.1787C19.5883 30.939 19.5867 29.013 19.8355 27.8978C20.5675 24.6164 22.6027 22.0147 25.4116 20.7698C27.3353 19.9171 29.1773 19.6167 30.8774 19.8779C32.9266 20.1928 34.6115 20.9766 35.962 22.2435C37.7833 23.9522 38.7766 26.2291 38.669 28.4486C38.622 29.4216 38.47 30.0021 38.0468 30.8258C37.0116 32.8407 35.1982 34.0212 32.9922 34.1159C31.4931 34.1802 30.3738 33.7743 29.2251 32.7493C28.3026 31.9264 27.9928 31.3801 27.9512 30.5034C27.9158 29.7517 28.0628 29.3592 28.5588 28.8811C28.9968 28.4591 29.4423 28.2672 29.8315 28.3331C30.0491 28.3699 30.2181 28.4882 30.5443 28.8316C30.7792 29.079 31.1755 29.4647 31.425 29.6886C32.2053 30.3887 32.9834 30.4528 33.7281 29.8781C34.7338 29.1021 34.9029 27.6141 34.1424 26.2349C33.8874 25.7727 33.6636 25.5066 33.1214 25.0209C32.3674 24.3461 31.7897 24.041 30.8433 23.8184C30.1311 23.651 28.6614 23.7028 27.9944 23.9191C26.6452 24.3566 25.1293 25.7399 24.4063 27.1938C23.6212 28.7724 23.5246 30.7213 24.1447 32.4638C24.7135 34.0626 26.1407 35.8456 27.6291 36.8172C29.7059 38.1729 32.0673 38.6104 34.9331 38.1704C36.9114 37.8667 38.6286 37.0389 40.1989 35.6318C41.2048 34.7301 41.7284 34.0616 42.3704 32.8578C43.1873 31.3259 43.4592 30.2996 43.5194 28.5215C43.5836 26.6247 43.3394 25.2904 42.622 23.617C41.5177 21.0416 39.8833 19.0056 37.6012 17.3628C36.1907 16.3474 34.4007 15.592 32.4268 15.1795C31.5015 14.9861 28.8356 14.9037 27.7341 15.0346C24.5371 15.4142 21.5444 16.8538 19.3939 19.0467C17.2356 21.2474 15.9276 23.7817 15.2745 27.0275C15.0604 28.0913 15.0615 31.6579 15.2762 32.712C15.8968 35.7595 17.1998 38.373 19.24 40.6631C21.9147 43.6656 25.946 45.824 30.1117 46.4843C32.7544 46.9029 35.1137 46.7642 38.2097 46.0077C39.5881 45.6709 40.0986 45.6464 40.6331 45.892C41.0464 46.0817 41.5368 46.6181 41.6736 47.0297C41.9051 47.7263 41.6941 48.4178 41.0813 48.9702C40.5897 49.4131 40.2482 49.5404 38.4685 49.9428C35.6344 50.5838 33.4461 50.7746 31.0119 50.5927Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path className="" d="M17.6919 11.8971C17.6362 11.8456 17.5908 11.7608 17.5908 11.7088C17.5368 11.3649 17.3618 11.9615 17.3685 11.9032C17.2331 11.8981 17.0245 11.6986 17.0198 11.5696C17.0512 11.4802 16.6347 11.8614 16.7513 11.5818C16.8079 11.449 16.4694 11.1039 16.2945 11.4178C16.2891 11.5927 15.9586 11.1353 15.3637 10.1298C15.0285 9.56323 14.5724 8.80457 14.3499 8.44383C13.5001 7.066 13.4265 6.89371 13.4317 6.29393C13.4374 5.65348 13.6109 5.28545 14.0834 4.91144C14.5051 4.57766 14.884 4.44924 15.4483 4.4491C15.9998 4.44881 16.5464 4.64601 16.8895 4.96886C17.0061 5.07847 17.5811 5.95447 18.1673 6.91543C19.7983 9.58947 19.7256 9.44036 19.745 10.1473C19.7602 10.7033 19.7443 10.7745 19.5657 10.9482C19.4578 11.053 19.3695 11.1966 19.3695 11.2671C19.3695 11.3377 19.2875 11.4624 19.1876 11.5445C19.0877 11.6265 18.9442 11.7449 18.8692 11.8076C18.6881 11.9589 17.8292 12.024 17.6919 11.8971Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M49.9673 20.8757C49.2886 20.5247 48.9458 19.9647 48.9376 19.1932C48.9311 18.5962 49.1832 18.0434 49.6132 17.7118C49.8876 17.5 51.1045 16.8973 53.5462 15.7636C54.2787 15.4236 54.4268 15.3804 54.8535 15.3841C55.773 15.3919 56.5727 15.9748 56.852 16.8406C57.0829 17.5568 56.8127 18.3989 56.1952 18.8863C55.8443 19.1632 52.8405 20.632 52.0356 20.9203C51.7193 21.0335 51.4105 21.0814 50.9818 21.0835C50.4572 21.0863 50.3203 21.0583 49.9673 20.8757Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M55.0244 33.6683C52.6463 33.4151 52.4936 33.3778 51.9945 32.9277C51.577 32.5514 51.3677 32.1294 51.3236 31.5742C51.2521 30.6764 51.6994 29.9542 52.5632 29.5733C52.9938 29.3834 53.0412 29.3783 53.9962 29.4191C54.5395 29.4423 55.3659 29.4974 55.8329 29.5417C56.2999 29.5858 56.9916 29.6481 57.3703 29.6798C58.1358 29.7441 58.4888 29.8677 58.9726 30.241C60.1834 31.1753 59.9508 33.0589 58.5436 33.7122C58.0602 33.9366 57.4756 33.9295 55.0244 33.6683Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M8.35601 21.0408C7.82143 20.8409 4.22441 19.065 3.94063 18.861C3.28073 18.3863 3.05176 17.3134 3.43936 16.5129C3.6625 16.0521 4.25837 15.541 4.71663 15.4172C5.17973 15.2922 5.77721 15.3134 6.15608 15.4685C6.76261 15.7167 10.352 17.6063 10.5847 17.7996C11.2105 18.3199 11.4184 19.3229 11.0412 20.0021C10.5236 20.9342 9.31796 21.4005 8.35601 21.0408Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M41.9025 11.9469C40.6621 11.5444 40.0278 10.4574 40.4316 9.42573C40.6216 8.94036 42.8896 5.2131 43.1704 4.92479C43.668 4.41406 44.5064 4.21059 45.2725 4.41465C45.7698 4.54714 46.4072 5.14969 46.5689 5.64031C46.831 6.43628 46.7049 7.01755 46.0558 8.00636C45.6485 8.62684 45.1343 9.44541 44.4081 10.63C44.1625 11.0308 43.8764 11.4294 43.7726 11.516C43.2786 11.9278 42.4399 12.1212 41.9025 11.9469Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M31.9517 59.6062C31.5327 59.4715 31.1149 59.101 30.8814 58.6566C30.6936 58.299 30.6901 58.2518 30.6893 56.137C30.6885 53.7673 30.7206 53.5633 31.1757 53.0657C31.3078 52.9212 31.605 52.7182 31.8362 52.6143C32.8318 52.1671 33.9765 52.5455 34.4601 53.4816C34.6446 53.8389 34.6485 53.8941 34.6485 56.0694C34.6485 58.2527 34.6451 58.2987 34.4577 58.6617C34.0293 59.4909 32.908 59.9136 31.9517 59.6062Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path d="M16.8604 11.8508C16.3284 11.6062 15.9397 11.1038 16.2826 11.1038C16.4694 11.1038 16.8078 11.4489 16.7512 11.5817C16.6372 11.9914 17.1063 11.4063 17.0198 11.5695C17.0245 11.6984 17.2331 11.898 17.6323 11.7776C17.6789 11.8735 17.8128 11.9607 17.9546 11.9878C18.1399 12.023 18.0906 12.036 17.7467 12.0426C17.4019 12.0491 17.1941 12.0042 16.8604 11.8508Z" fill="#0AB8A7" stroke="#0AB8A7" strokeWidth="0.301592"></path>
<path d="M29.4124 8.60728C29.028 8.49622 28.474 8.02718 28.2525 7.62533C28.0609 7.2777 28.0609 7.27726 28.0609 4.4719C28.0609 1.68155 28.062 1.66421 28.2491 1.32168C28.5806 0.714756 29.2853 0.30941 30.0359 0.29396C30.8703 0.276615 31.6725 0.772037 31.9522 1.47735C32.0295 1.67266 32.0566 2.45114 32.0586 4.54478C32.0613 7.34329 32.061 7.3516 31.8709 7.71497C31.6435 8.14917 31.42 8.34711 30.9311 8.54694C30.5318 8.71004 29.8606 8.73672 29.4124 8.60728Z" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path className="" d="M71.8262 40.4999V20.2995H76.3118L82.0155 34.2913L82.6987 36.4301L83.382 34.2913L89.0262 20.2995H93.3931V40.4999H90.0659L90.1551 24.1317L88.6994 28.4688L83.7979 40.4999H81.4214L76.4901 28.4391L75.0642 24.2208L75.1533 40.4999H71.8262ZM97.7323 40.4999V20.2995H101.059V40.4999H97.7323ZM105.391 40.4999V20.2995H108.867L117.333 33.4892L118.61 35.8657L118.521 20.2995H121.848V40.4999H118.373L109.936 27.3697L108.629 24.904L108.718 40.4999H105.391ZM126.191 40.4999V20.2995H133.113C139.44 20.2995 143.362 24.1019 143.362 30.4294C143.362 36.7569 139.44 40.4999 133.113 40.4999H126.191ZM133.113 37.7966C137.42 37.7966 139.975 35.0636 139.975 30.4294C139.975 25.7358 137.42 23.0028 133.113 23.0028H129.518V37.7966H133.113ZM154.084 20.2995L159.817 35.331L160.411 37.351L161.005 35.331L166.739 20.2995H170.036L162.253 40.4999H158.391L150.578 20.2995H154.084ZM172.724 40.4999V20.2995H176.051V40.4999H172.724ZM185.819 40.4999V23.0919H179.075V20.2995H195.86V23.0919H189.146V40.4999H185.819ZM210.627 40.4999L208.904 35.9548H199.695L197.972 40.4999H194.645L202.428 20.2995H206.32L214.103 40.4999H210.627ZM203.705 25.4684L200.705 33.3407H207.894L204.894 25.4684L204.3 23.5078L203.705 25.4684ZM216.79 40.4999V20.2995H220.118V37.7966H229.891V40.4999H216.79ZM232.949 40.4999V20.2995H236.276V40.4999H232.949ZM246.044 40.4999V23.0919H239.301V20.2995H256.085V23.0919H249.371V40.4999H246.044ZM264.464 40.4999V33.1624L257.304 20.2995H261.047L265.355 28.2312L266.246 30.2809L267.107 28.2312L271.415 20.2995H274.95L267.791 33.1624V40.4999H264.464Z" fill="white"></path>
</svg>
</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li className=""><a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full px-3 py-2 font-geist" href="#" style={{}}>Home</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full px-3 py-2 font-geist" href="#" style={{}}>How it Works</a></li>
<li><a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full px-3 py-2 font-geist" href="#" style={{}}>Pricing</a></li>
<li><a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full px-3 py-2 font-geist" href="#" style={{}}>FAQ</a></li>
</ul>
<div className="flex items-center gap-1.5 md:gap-2">
<button aria-label="Menu" className="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5] text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<button aria-label="Account" className="hidden md:inline-flex hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</button>
<button aria-label="Dashboard" className="hidden md:inline-flex relative hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
<span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center font-medium font-geist" style={{}}>3</span>
</button>
</div>
</div>
</div>
</div>

<main className="relative pt-20 sm:pt-16">
<div className="relative overflow-hidden w-full min-h-[70vh] sm:min-h-[75vh] bg-white/5 border-white/10 border rounded-2xl">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"></div>

<div className="absolute inset-0">
<img alt="Creative team working on design projects" className="w-full h-full object-cover object-center" loading="eager" src="https://cdn.midjourney.com/dfb2fd7b-0f92-44c6-bf3a-d8b4bb665681/0_2.png?w=800&amp;q=80" style={{objectPosition: 'center center'}}/>
</div>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-t via-transparent to-transparent from-gray-900/70 sm:from-gray-900/60"></div>
<div className="absolute inset-0 flex items-end">
<div className="w-full p-4 sm:p-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl lg:text-7xl text-white tracking-tighter font-geist drop-shadow-lg leading-tight">
<div className="">
<h1 className="font-geist" style={{}}>Stay sharp.</h1>
<h1 className="italic font-instrument-serif" style={{}}>Stay Independent.</h1>
</div>
</h2>
<p className="text-base sm:text-lg leading-relaxed font-normal text-white/90 mt-3 drop-shadow-sm max-w-2xl font-geist" style={{}}>Daily brain workouts that adapt to your level. Simple to use. Clear progress for families and caregivers.</p>

<div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight rounded-full px-4 sm:px-6 py-3 shadow-sm transition-all duration-300 bg-white text-slate-800 hover:bg-white/90 border border-white/20" href="#assessment">
<svg className="w-4 h-4 stroke-1.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
</svg>
<span className="font-geist" style={{}}>Start Your Free Assessment</span>
</a>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 border shadow-sm transition-all duration-300 hover:bg-white/15 text-white bg-white/8 border-white/15" href="#demo">
<svg className="w-4 h-4 stroke-1.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10,8 16,12 10,16 10,8"></polygon>
</svg>
<span className="font-geist" style={{}}>Watch Demo</span>
</a>
</div>

<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
<div className="rounded-xl backdrop-blur-sm border p-2.5 sm:p-3 shadow-sm transition-all duration-300 bg-white/6 border-white/10 hover:bg-white/10">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
<svg className="text-white/70 sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 3.94-3.04z"></path>
</svg>
<div className="text-lg sm:text-xl font-semibold tracking-tight drop-shadow-sm text-white font-geist" style={{}}>10k+</div>
</div>
<p className="text-xs sm:text-[11px] mt-0.5 text-white/80 font-geist" style={{}}>Active Members</p>
</div>
<div className="rounded-xl backdrop-blur-sm border p-2.5 sm:p-3 shadow-sm transition-all duration-300 bg-white/6 border-white/10 hover:bg-white/10">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
<svg className="text-white/70 sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
<div className="text-lg sm:text-xl font-semibold tracking-tight drop-shadow-sm text-white font-geist" style={{}}>98%</div>
</div>
<p className="text-xs sm:text-[11px] mt-0.5 text-white/80 font-geist" style={{}}>See Progress</p>
</div>
<div className="rounded-xl backdrop-blur-sm border p-2.5 sm:p-3 shadow-sm transition-all duration-300 bg-white/6 border-white/10 hover:bg-white/10">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
<svg className="text-white/70 sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
<div className="text-lg sm:text-xl font-semibold tracking-tight drop-shadow-sm text-white font-geist" style={{}}>15min</div>
</div>
<p className="text-xs sm:text-[11px] mt-0.5 text-white/80 font-geist" style={{}}>Daily Workouts</p>
</div>
<div className="rounded-xl backdrop-blur-sm border p-2.5 sm:p-3 shadow-sm transition-all duration-300 bg-white/6 border-white/10 hover:bg-white/10">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
<svg className="text-white/70 sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="m22 2-5 10-2-4-4-2z"></path>
</svg>
<div className="text-lg sm:text-xl font-semibold tracking-tight drop-shadow-sm text-white font-geist" style={{}}>4.9★</div>
</div>
<p className="text-xs sm:text-[11px] mt-0.5 text-white/80 font-geist" style={{}}>Family Rated</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="sm:py-20 sm:px-6 pt-16 pr-4 pb-16 pl-4" style={{opacity: '1', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
<div className="max-w-7xl mr-auto ml-auto">

<div className="text-center mb-10 sm:mb-14">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-3 font-geist" style={{}}>The mind needs practice, <span className="italic font-geist" style={{}}>not pressure</span></h2>
<p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-geist" style={{}}>A calm, adaptive experience that feels intuitive from day one—clear progress for families, delightful to use for everyone.</p>
</div>

<div className="grid grid-cols-12 gap-4 sm:gap-6">

<div className="col-span-12 md:col-span-3 rounded-3xl bg-white border border-slate-200/60 p-5 sm:p-6 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">

<svg className="w-4 h-4 text-slate-700 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 8a2 2 0 1 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 1 1 0 4v2a2 2 0 0 1-2 2h-2a2 2 0 1 1-4 0H8a2 2 0 0 1-2-2v-2a2 2 0 1 1 0-4V8a2 2 0 0 1 2-2h2a2 2 0 1 1 4 0z"></path>
</svg>
</div>
<span className="text-sm font-medium text-slate-700 tracking-tight font-geist" style={{}}>Works with your day</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="rounded-2xl border border-slate-200/60 bg-slate-50 p-3 flex items-center justify-center">

<svg className="w-5 h-5 text-slate-700 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<div className="rounded-2xl border border-slate-200/60 bg-slate-50 p-3 flex items-center justify-center">

<svg className="w-5 h-5 text-slate-700 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
</div>
<div className="rounded-2xl border border-slate-200/60 bg-slate-50 p-3 flex items-center justify-center">

<svg className="w-5 h-5 text-slate-700 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
</div>
<p className="text-sm text-slate-600 mt-4 font-geist" style={{}}>Gentle reminders and simple scheduling keep practice effortless.</p>
</div>

<div className="col-span-12 md:col-span-5 md:row-span-2 rounded-3xl overflow-hidden border border-slate-200/60 bg-white shadow-sm">
<div className="relative h-full">
<img alt="Smiling person enjoying a calm training experience" className="w-full h-full object-cover" src="https://cdn.midjourney.com/7a2e4dd1-b008-4680-b331-5f1856025b34/0_1.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
<span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 border border-white/60 shadow-sm">

<svg className="w-4 h-4 text-slate-800 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6a3 3 0 0 0-6 0v10a3 3 0 0 0 6 0"></path>
<path d="M12 6a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0"></path>
</svg>
<span className="text-sm font-medium text-slate-800 tracking-tight font-geist" style={{}}>Calm, readable design</span>
</span>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-2 rounded-3xl overflow-hidden border border-slate-200/60 bg-slate-100 shadow-sm">
<div className="relative h-40 sm:h-56">
<img alt="Soft abstract background" className="w-full h-full object-cover" src="https://cdn.midjourney.com/b11fd97d-e314-402d-a80d-1ecd35c7ce3c/0_0.png?w=800&amp;q=80" style={{filter: 'blur(1px)'}}/>
<div className="absolute inset-0 flex items-center justify-center">

<svg className="sm:w-12 sm:h-12 stroke-[1.5] w-[40px] h-[40px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px', color: 'rgb(30, 41, 59)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 4.5C7 8.09 10.91 12 14.5 12S22 8.09 22 4.5"></path>
<path className="" d="M2 19.5C2 15.91 5.91 12 9.5 12S17 15.91 17 19.5"></path>
<path className="" d="M2 2l20 20"></path>
</svg>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-2 rounded-3xl border border-slate-200/60 bg-white shadow-sm p-5 sm:p-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-medium font-geist" style={{}}>02</div>
<div className="flex-1 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-200"></span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mt-4 mb-1 font-geist" style={{}}>Weeks 2–3</h3>
<p className="text-sm text-slate-600 font-geist" style={{}}>Workflow tuning and gentle difficulty ramping.</p>
</div>

<div className="col-span-12 md:col-span-3 rounded-3xl border border-slate-200/60 bg-white shadow-sm p-5 sm:p-6">
<h4 className="text-base font-medium tracking-tight text-slate-900 mb-3 font-geist" style={{}}>Feels right at home</h4>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 font-geist" style={{}}>
            Innovative
            
<svg className="w-3.5 h-3.5 text-slate-600 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path><path d="M5 12h14"></path>
</svg>
</span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-sm text-emerald-700 font-geist" style={{}}>
            Revolutionary
            <svg className="w-3.5 h-3.5 text-emerald-600 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path><path d="M5 12h14"></path>
</svg>
</span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 font-geist" style={{}}>
            Empowering
            <svg className="w-3.5 h-3.5 text-slate-600 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path><path d="M5 12h14"></path>
</svg>
</span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 font-geist" style={{}}>
            Accessible
            <svg className="w-3.5 h-3.5 text-slate-600 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path><path d="M5 12h14"></path>
</svg>
</span>
</div>
</div>

<div className="col-span-12 md:col-span-4 rounded-3xl border border-slate-200/60 bg-white shadow-sm p-6 sm:p-8">
<div className="flex items-end justify-between">
<div className="">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 font-geist" style={{}}>93%</div>
<p className="text-sm text-slate-600 mt-2 font-geist" style={{}}>Members report feeling calmer and more confident within 3 weeks.</p>
</div>
<div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100">

<svg className="w-6 h-6 text-blue-600 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path>
<path d="M16 8l-4 8"></path><path d="M8 8l4 8"></path>
</svg>
</div>
</div>
<div className="mt-5">
<div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[93%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-2 sm:p-6 bg-slate-100 border-slate-200/60 border rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">

<svg className="w-5 h-5 text-slate-800 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.14a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-slate-900 font-geist" style={{}}>Questions?</div>
<a className="text-sm text-slate-600 underline underline-offset-4 font-geist" href="#contact" style={{}}>Contact us</a>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-3 rounded-3xl border border-slate-200/60 bg-emerald-50 shadow-sm p-4 sm:p-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-70" style={{background: 'radial-gradient(closest-side, rgba(16,185,129,0.18), transparent 60%), radial-gradient(circle at 70% 30%, rgba(16,185,129,0.12), transparent 40%)'}}></div>
<h4 className="relative text-base font-medium tracking-tight text-emerald-900 mb-4 font-geist" style={{}}>Families stay in the loop</h4>
<div className="relative h-40">

<div className="absolute inset-0 rounded-full border border-white/60"></div>
<div className="absolute inset-4 rounded-full border border-white/50"></div>
<div className="absolute inset-8 rounded-full border border-white/40"></div>

<img alt="Member" className="absolute -left-2 bottom-2 w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="Caregiver" className="absolute left-12 top-4 w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="Coach" className="absolute right-6 top-10 w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Member" className="absolute right-2 bottom-4 w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="Member" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="relative mt-4 text-sm text-emerald-900/80 font-geist" style={{}}>Private updates and simple sharing—no guessing, just clarity.</p>
</div>
</div>
</div>
</section><section className="sm:py-20 sm:px-6 bg-[url(https://cdn.midjourney.com/1b348fa4-19ba-479f-bc16-7295f09f3f18/0_0.png?w=800&amp;q=80)] bg-cover pt-16 pr-4 pb-16 pl-4" style={{backgroundColor: '#0B1220'}}>
<div className="max-w-7xl mr-auto ml-auto">

<div className="sm:mb-14 text-center mb-10">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-white tracking-tight font-geist mb-3" style={{}}>Personalized brain workouts that <span className="italic text-slate-200 font-instrument-serif" style={{}}>meet you where you are</span></h2>
<p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto font-geist" style={{}}>Mind Vitality adapts each session to the user's pace. Exercises target memory, attention, and problem-solving. Families and caregivers see clear progress without digging through charts.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-white rounded-3xl border p-6 sm:p-8 shadow-sm" style={{borderColor: '#E8EDF2'}}>
<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4" style={{border: '1px solid #E8EDF2'}}>
<svg className="stroke-[1.5] w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#0B1220'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 font-geist" style={{color: 'rgb(11, 18, 32)'}}>Easy to start</h3>
<p className="font-geist" style={{color: 'rgb(11, 18, 32)'}}>Big buttons, clear steps, gentle guidance.</p>
</div>

<div className="bg-white rounded-3xl border p-6 sm:p-8 shadow-sm" style={{borderColor: '#E8EDF2'}}>
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4" style={{border: '1px solid #E8EDF2'}}>
<svg className="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" style={{color: '#0B1220'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 font-geist" style={{color: 'rgb(11, 18, 32)'}}>Always the right level</h3>
<p className="font-geist" style={{color: 'rgb(11, 18, 32)'}}>Difficulty adjusts to performance in real time.</p>
</div>

<div className="bg-white rounded-3xl border p-6 sm:p-8 shadow-sm" style={{borderColor: '#E8EDF2'}}>
<div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mb-4" style={{border: '1px solid #E8EDF2'}}>
<svg className="w-6 h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#0B1220'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle className="" cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 font-geist" style={{color: 'rgb(11, 18, 32)'}}>Confidence for families</h3>
<p className="font-geist" style={{color: 'rgb(11, 18, 32)'}}>Simple reports that highlight wins and what to focus on next.</p>
</div>
</div>

<div className="sm:p-8 lg:p-12 bg-zinc-100/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur" style={{borderColor: '#E8EDF2'}}>
<div className="text-center mb-8">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3 font-geist" style={{}}>See it in action</h3>
<p className="text-slate-300 font-geist" style={{}}>Three simple screens that make brain training effortless</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white border rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-lg" style={{borderColor: '#E8EDF2'}}>
<div className="relative overflow-hidden min-h-[400px] rounded-xl pt-4 pr-4 pb-4 pl-4" style={{backgroundColor: '#0B1220'}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="text-white text-sm font-geist" style={{}}>Today's Plan</div>
<div className="w-8 h-8 rounded-full bg-white/10"></div>
</div>
<div className="text-center mb-8">
<div className="text-2xl font-semibold text-white mb-2 font-geist" style={{}}>Good morning, Sarah!</div>
<div className="text-white/70 text-sm font-geist" style={{}}>Ready for today's workout?</div>
</div>
<div className="space-y-4">
<div className="bg-white/10 rounded-2xl p-4 border border-white/10 min-h-[48px] flex items-center">
<div className="flex items-center gap-3 w-full">
<div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
<svg className="w-5 h-5 text-emerald-400 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6a3 3 0 0 0-6 0v10a3 3 0 0 0 6 0"></path>
<path d="M12 6a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0"></path>
</svg>
</div>
<div className="">
<div className="text-white font-medium text-sm font-geist" style={{}}>Memory Match</div>
<div className="text-white/70 text-xs font-geist" style={{}}>5 minutes</div>
</div>
</div>
</div>
<div className="bg-white/10 rounded-2xl p-4 border border-white/10 min-h-[48px] flex items-center">
<div className="flex items-center gap-3 w-full">
<div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-400 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
</div>
<div className="">
<div className="text-white font-medium text-sm font-geist" style={{}}>Focus Flow</div>
<div className="text-white/60 text-xs font-geist" style={{}}>3 minutes</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="text-center pt-3 pr-3 pb-3 pl-3">
<div className="text-sm font-medium font-geist" style={{color: 'rgb(11, 18, 32)'}}>Today's Plan</div>
</div>
</div>

<div className="bg-white rounded-2xl border p-1 shadow-lg" style={{borderColor: '#E8EDF2'}}>
<div className="rounded-xl p-4 relative overflow-hidden min-h-[400px]" style={{backgroundColor: '#0B1220'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<svg className="w-6 h-6 text-white/70 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
<div className="text-white text-sm font-geist" style={{}}>Memory Match</div>
<div className="text-white/70 text-xs font-geist" style={{}}>2:30</div>
</div>
<div className="text-center mb-8">
<div className="text-white mb-4 font-geist" style={{}}>Find the matching pairs</div>
<div className="w-full bg-white/10 rounded-full h-2 mb-4">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<button className="aspect-square flex min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none bg-white/10 border-white/10 border rounded-xl items-center justify-center">
<svg className="w-6 h-6 text-white/50 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path className="" d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</button>
<button className="aspect-square bg-emerald-500/20 rounded-xl border border-emerald-500/30 flex items-center justify-center min-h-[48px] focus:ring-2 focus:ring-emerald-400/50 focus:outline-none">
<svg className="w-6 h-6 text-emerald-400 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.11 7.664 1.78 2.672"></path><path d="m14.162 12.788-3.324 1.424"></path><path d="m20 4-6.06 1.515"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><circle cx="12" cy="6" r="2"></circle><circle cx="16" cy="12" r="2"></circle><circle cx="9" cy="15" r="2"></circle></svg>
</button>
<button className="aspect-square flex min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none bg-white/10 border-white/10 border rounded-xl items-center justify-center">
<svg className="stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="accessibility" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="4" r="1"></circle><path d="m18 19 1-7-6 1"></path><path d="m5 8 3-3 5.5 3-2.36 3.5"></path><path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path><path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path></svg>
</button>
<button className="aspect-square flex min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none bg-white/10 border-white/10 border rounded-xl items-center justify-center">
<svg className="w-6 h-6 text-white/50 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path className="" d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</button>
<button className="aspect-square bg-emerald-500/20 rounded-xl border border-emerald-500/30 flex items-center justify-center min-h-[48px] focus:ring-2 focus:ring-emerald-400/50 focus:outline-none">
<svg className="stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="ear" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"></path><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"></path></svg>
</button>
<button className="aspect-square flex min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none bg-white/10 border-white/10 border rounded-xl items-center justify-center">
<svg className="stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="badge-info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
</button>
</div>
</div>
</div>
<div className="p-3 text-center">
<div className="text-sm font-medium font-geist" style={{color: 'rgb(11, 18, 32)'}}>Exercise in Progress</div>
</div>
</div>

<div className="bg-white rounded-2xl border p-1 shadow-lg" style={{borderColor: '#E8EDF2'}}>
<div className="rounded-xl p-4 relative overflow-hidden min-h-[400px]" style={{backgroundColor: '#0B1220'}}>
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="text-white text-sm font-geist" style={{}}>Progress</div>
<div className="w-8 h-8 rounded-full bg-white/10"></div>
</div>
<div className="text-center mb-8">
<div className="text-2xl font-semibold text-white mb-2 font-geist" style={{}}>Great work!</div>
<div className="text-white/70 text-sm font-geist" style={{}}>This week's highlights</div>
</div>
<div className="space-y-4">
<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
<div className="flex items-center justify-between mb-2">
<div className="text-white font-medium text-sm font-geist" style={{}}>Memory</div>
<div className="text-emerald-400 font-semibold text-sm font-geist" style={{}}>+8%</div>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '72%'}}></div>
</div>
</div>
<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
<div className="flex items-center justify-between mb-2">
<div className="text-white font-medium text-sm font-geist" style={{}}>Attention</div>
<div className="text-blue-400 font-semibold text-sm font-geist" style={{}}>+5%</div>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
<div className="flex items-center justify-between mb-2">
<div className="text-white font-medium text-sm font-geist" style={{}}>Problem Solving</div>
<div className="text-violet-400 font-semibold text-sm font-geist" style={{}}>+3%</div>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-violet-500 h-2 rounded-full" style={{width: '58%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-3 text-center">
<div className="text-sm font-medium font-geist" style={{color: 'rgb(11, 18, 32)'}}>Progress Summary</div>
</div>
</div>
</div>

<div className="text-center mt-8">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight rounded-full px-6 py-3 shadow-sm transition-all duration-300 bg-white text-black hover:bg-gray-100 border min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none" href="#demo" style={{borderColor: '#E8EDF2', color: '#0B1220'}}>
<svg className="w-4 h-4 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10,8 16,12 10,16 10,8"></polygon>
</svg>
<span className="font-geist" style={{}}>Try Interactive Demo</span>
</a>
</div>
</div>
</div>
</section><section className="sm:py-20 sm:px-6 px-4 py-16">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-10 sm:mb-14">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Built for seniors, <span className="italic font-instrument-serif text-slate-700">helpful for families</span></h2>
<p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-geist">Every feature designed with accessibility and independence in mind. Simple for users, insightful for loved ones.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-blue-600" data-icon-replaced="true" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(37, 99, 235)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle className="" cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Adaptive Workouts</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Sessions automatically match current ability and adjust difficulty with every interaction. Never too easy, never overwhelming.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
<div className="flex items-center space-x-1">
<span className="text-xl font-bold text-emerald-600">A</span>
<span className="text-sm font-medium text-emerald-500">A</span>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Large-Type Interface</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">High contrast colors, generous spacing, and clear labels make every screen comfortable and easy to navigate.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="git-graph" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(124, 58, 237)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="6" r="3"></circle><path d="M5 9v6"></path><circle cx="5" cy="18" r="3"></circle><path d="M12 3v18"></path><circle cx="19" cy="6" r="3"></circle><path d="M16 15.7A9 9 0 0 0 19 9"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Family &amp; Caregiver Reports</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Simple weekly summaries highlight progress trends, celebrate achievements, and suggest areas for gentle support.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4">
<div className="relative">
<svg className="w-5 h-5 text-slate-400" data-icon-replaced="true" data-lucide="heart-handshake" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path className="" d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Interest-Based Content</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Exercises incorporate personal history, hobbies, and familiar topics to create meaningful, engaging experiences.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Safe &amp; Private</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Bank-level encryption, HIPAA-compliant storage, and transparent privacy practices protect personal information.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 flex bg-amber-50 border-amber-100 border rounded-2xl mb-4 items-center justify-center">
<div className="relative w-6 h-6">
<div className="absolute top-0 left-0 w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
<div className="absolute top-0 right-0 w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
<div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-amber-500 border-white border rounded-full shadow-sm"></div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Facility Dashboard</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Designed for senior living communities to track group engagement, celebrate milestones, and support residents.</p>
</div>
</div>

<div className="text-center mt-12 sm:mt-16">
<div className="inline-flex items-center gap-3 bg-slate-50 rounded-full px-4 py-2 mb-6">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-slate-700 font-geist">Join 10,000+ members staying mentally active</span>
</div>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight rounded-full px-6 py-3 shadow-sm transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 min-h-[48px] focus:ring-2 focus:ring-slate-500 focus:outline-none" href="#assessment">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
</svg>
<span className="font-geist">Start Your Assessment</span>
</a>
</div>
</div>
</section><section className="sm:py-20 sm:px-6 bg-white pt-16 pr-4 pb-16 pl-4" style={{position: 'relative'}}>
<div className="max-w-7xl mx-auto">

<div className="text-center mb-12 sm:mb-16">
<span className="text-sm font-normal text-slate-500 font-geist">HOW IT WORKS</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mt-2 mb-3 font-geist">Three steps to a stronger mind</h2>
<p className="text-base text-slate-600 max-w-2xl mx-auto font-geist">Simple, proven approach that adapts to your pace and keeps families informed every step of the way.</p>
</div>

<div className="relative">

<div className="hidden sm:block">

<div className="absolute top-20 left-0 right-0 h-px bg-slate-200"></div>
<div className="absolute top-20 left-0 h-px bg-slate-900 transition-all duration-1000" style={{width: '100%'}}></div>
<div className="grid grid-cols-3 gap-8 lg:gap-12">

<div className="text-center relative">
<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center relative z-10">
<svg className="w-8 h-8 text-emerald-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Take the Brain Check</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">A quick 2-minute assessment sets your starting level.</p>
</div>

<div className="text-center relative">
<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center relative z-10">
<svg className="w-8 h-8 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10,8 16,12 10,16 10,8"></polygon>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Train daily</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Short, engaging exercises that adapt as you improve.</p>
</div>

<div className="text-center relative">
<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-center relative z-10">
<svg className="w-8 h-8 text-violet-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17v-3"></path>
<path d="M8 17v-1"></path>
<path d="m18 9 2-2v6l-2-2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Track progress</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Simple weekly updates for seniors and families.</p>
</div>
</div>
</div>

<div className="sm:hidden space-y-8">

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold font-geist">1</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 font-geist">Take the Brain Check</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">A quick 2-minute assessment sets your starting level.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold font-geist">2</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 font-geist">Train daily</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Short, engaging exercises that adapt as you improve.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-semibold font-geist">3</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 font-geist">Track progress</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Simple weekly updates for seniors and families.</p>
</div>
</div>
</div>
</div>

<div className="text-center mt-12 sm:mt-16">
<div 2000="" className="inline-flex items-center gap-2 bg-slate-50 rounded-full px-4 py- &lt;svg xmlns=" fill="none" height="16" http:="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" svg"="" viewbox="0 0 24 24" width="16" www.w3.org="">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="16,12 12,8 8,12"></polyline>
<line x1="12" x2="12" y1="16" y2="8"></line>
<span className="text-sm font-medium text-slate-700 font-geist">Ready to get started?</span>
</div>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight rounded-full px-6 py-3 shadow-sm transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 min-h-[48px] focus:ring-2 focus:ring-slate-500 focus:outline-none" href="#assessment">
<span className="font-geist">Begin Your Brain Check</span>
<svg className="w-4 h-4 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section><section className="sm:py-20 sm:px-6 bg-slate-50 pt-16 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16 sm:mb-20">
<span className="text-sm font-normal text-slate-500 font-geist mb-4 block">PRICING</span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 font-geist">
<span className="text-slate-900">Choose Your</span>
<span className="text-slate-900 italic font-instrument-serif">Mind Training Journey</span>
</h2>
<p className="sm:text-lg max-w-3xl text-base text-slate-600 mx-auto font-geist">
        From personal brain fitness to family support, we've crafted the perfect plan for every stage of your cognitive wellness journey
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

<article className="relative hover:border-blue-500 transition-all duration-300 lg:p-10 flex flex-col hover:shadow-lg bg-white border-slate-200 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="text-sm font-semibold uppercase tracking-wide text-slate-500 font-geist">Personal</span>
</div>
<span className="text-xs font-medium uppercase bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-blue-600 font-geist">
            Most Popular
          </span>
</div>
<div className="mb-8">
<h3 className="lg:text-2xl leading-tight text-2xl font-semibold mb-3 font-geist">Individual Training</h3>
<p className="text-slate-600 text-sm font-geist">
            Everything you need for daily brain fitness and cognitive improvement
          </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight font-geist">$29</span>
<span className="text-slate-500 mb-1 font-geist">/month</span>
</div>
<p className="text-xs text-slate-500 font-geist">Billed monthly • Cancel anytime • 14-day free trial</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-800 min-h-[48px] focus:ring-2 focus:ring-slate-500 focus:outline-none text-sm font-medium text-white tracking-tight bg-slate-900 border-slate-900 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#assessment">
<svg className="w-4 h-4 stroke-[1.5]" data-icon-replaced="true" data-lucide="user" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="font-geist">Start Your Free Trial</span>
</a>
<button className="w-full rounded-full border-2 border-slate-300 text-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition-all duration-200 min-h-[48px] focus:ring-2 focus:ring-slate-300 focus:outline-none font-geist">
            Learn More
          </button>
</div>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Memory, attention &amp; problem-solving</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Automatically adjusts to your level</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Weekly insights &amp; achievements</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Response within 24 hours</span>
</li>
</ul>
</article>

<article className="relative transition-all duration-300 lg:p-10 flex flex-col lg:scale-110 z-10 text-white bg-slate-900 border-slate-900 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-xl scale-105">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<div className="bg-emerald-500 text-white text-xs font-semibold uppercase px-4 py-2 rounded-full font-geist">
            Best Value
          </div>
</div>
<div className="flex justify-between items-start mb-8 mt-4">
<div className="flex items-center gap-2">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="text-sm font-semibold uppercase tracking-wide text-slate-300 font-geist">Family</span>
</div>
</div>
<div className="mb-8">
<h3 className="lg:text-2xl leading-tight text-2xl font-semibold mb-3 font-geist">Family Connection</h3>
<p className="text-slate-200 text-sm font-geist">
            Keep loved ones connected with shared progress and family support features
          </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight font-geist">$49</span>
<span className="text-slate-300 mb-1 font-geist">/month</span>
</div>
<p className="text-xs text-slate-300 font-geist">Up to 4 family members • 2 months free yearly</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-800 min-h-[48px] focus:ring-2 focus:ring-slate-500 focus:outline-none text-sm font-medium text-slate-950 tracking-tight bg-neutral-50 border-slate-900 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#assessment">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9 12l2 2 4-4"></path>
<path className="" d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path className="" d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path className="" d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path className="" d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
</svg>
<span className="font-geist">Start Your Assessment</span>
</a>
<button className="w-full rounded-full border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-slate-900 transition-all duration-200 min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none font-geist">
            Schedule Demo
          </button>
</div>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle className="" cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - All features included</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Shared progress &amp; insights</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Simple progress summaries</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle className="" cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Important updates &amp; milestones</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle className="" cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Phone &amp; video calls available</span>
</li>
</ul>
</article>

<article className="relative hover:border-violet-500 transition-all duration-300 lg:p-10 flex flex-col lg:col-span-2 xl:col-span-1 bg-white border-slate-200 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8 hover:shadow-lg">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-violet-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
<path className="" d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
<path d="M10 6h4"></path>
<path d="M10 10h4"></path>
<path className="" d="M10 14h4"></path>
<path d="M10 18h4"></path>
</svg>
<span className="text-sm font-semibold uppercase tracking-wide text-slate-500 font-geist">Care Facility</span>
</div>
<span className="text-xs font-medium uppercase bg-violet-50 border border-violet-200 rounded-full px-3 py-1 text-violet-600 font-geist">
            Custom
          </span>
</div>
<div className="mb-8">
<h3 className="lg:text-2xl leading-tight text-2xl font-semibold mb-3 font-geist">Senior Communities</h3>
<p className="text-sm text-slate-600 font-geist">
            Comprehensive brain training programs designed for senior living facilities and care communities
          </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 font-geist">Custom</span>
</div>
<p className="text-xs text-slate-500 font-geist">Pricing based on resident count and features</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<button className="w-full rounded-full bg-violet-600 text-white px-6 py-3 text-sm font-semibold hover:bg-violet-700 transition-all duration-200 min-h-[48px] focus:ring-2 focus:ring-violet-500 focus:outline-none font-geist">
            Request Demo
          </button>
<button className="w-full rounded-full border-2 border-slate-300 text-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition-all duration-200 min-h-[48px] focus:ring-2 focus:ring-slate-300 focus:outline-none font-geist">
            Download Brochure
          </button>
</div>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Manage all resident programs</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Collaborative brain training sessions</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle className="" cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Comprehensive onboarding &amp; support</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - Connect residents with loved ones</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist"> - 24/7 assistance &amp; account manager</span>
</li>
</ul>
</article>
</div>


<div className="mt-12 text-center">
<div className="flex items-center justify-center gap-8 opacity-60">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm text-slate-500 font-geist">HIPAA Compliant</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span className="text-sm text-slate-500 font-geist">24/7 Support</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M8 16H3v5"></path>
</svg>
<span className="text-sm text-slate-500 font-geist">Cancel Anytime</span>
</div>
</div>
</div>
</div>
</section><grammarly-desktop-integration className="" data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
