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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



  (function () {
    const root = document.getElementById('projects-tabs');
    if (!root) return;
    const btns = root.querySelectorAll('[data-project-btn]');
    const views = root.querySelectorAll('[data-project]');
    function activate(id) {
      views.forEach(v => {
        v.classList.toggle('hidden', v.getAttribute('data-project') !== id);
      });
      btns.forEach(b => {
        const active = b.getAttribute('data-project-btn') === id;
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
        b.classList.toggle('bg-slate-900', active);
        b.classList.toggle('text-white', active);
        b.classList.toggle('ring-slate-900', active);
        b.classList.toggle('shadow-lg', active);
        b.classList.toggle('bg-white', !active);
        b.classList.toggle('text-slate-700', !active);
        b.classList.toggle('ring-slate-200', !active);
        b.classList.toggle('shadow-sm', !active);
      });
    }
    btns.forEach(b => b.addEventListener('click', () => activate(b.getAttribute('data-project-btn'))));
  })();

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
      <div className="aura-background-component top-0 w-full -z-10 hue-rotate-15 h-screen absolute" data-alpha-mask="80" style={{display: 'block', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/radialpattern-hkyfBWXPTPO4g8csZKdL866B/" width="100%"></iframe></div></div>


<section className="overflow-hidden relative">

<div className="sm:px-6 lg:px-8 md:pt-20 md:pb-28 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-20 pl-4">
<div className="mx-auto max-w-3xl text-center">
<div className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white/70 backdrop-blur px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<iconify-icon height="14" icon="solar:camera-linear" width="14"></iconify-icon>
<span className="">Mastering light &amp; shadow</span>
</div>
<div className="relative mt-8">

<div className="w-full flex mr-auto ml-auto items-center justify-center">
<div className="relative h-[420px] w-[420px] max-w-full">

<div className="absolute inset-0 grid place-items-center">
<div className="text-center mt-40">
<h1 className="sm:text-6xl md:text-7xl text-5xl font-semibold text-slate-900 tracking-tight">Stack Studio</h1>
<p className="mt-4 text-base sm:text-lg text-slate-600">Visual narratives built for ambitious brands. Capturing editorial, commercial, and lifestyle imagery — with uncompromising detail.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition" href="#">
<span className="">Book Session</span>
<iconify-icon height="16" icon="solar:calendar-add-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200 text-sm font-semibold px-4 py-2.5 shadow-sm hover:bg-slate-50 transition" href="#">
<span className="">View Portfolio</span>
<iconify-icon height="16" icon="solar:gallery-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

</div>

<div className="md:p-8 rounded-3xl mt-6 pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="text-sm text-black/50 font-sans">Capturing campaigns for the world's leading brands</p>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="" fill="none" height="36" viewbox="0 0 120 36" width="120" xmlns="http://www.w3.org/2000/svg">
<g className="" clipPath="url(#clip0_20_33256)">
<path className="" d="M34.4008 30.9669C31.4374 30.7034 28.8439 29.5295 26.8736 27.56C25.0131 25.7002 23.8714 23.3396 23.4835 20.5501C23.3881 19.8646 23.3669 18.2541 23.4436 17.5309C23.6928 15.1843 24.5471 13.0875 25.9901 11.2812C26.379 10.7944 27.1871 9.96905 27.6523 9.58338C30.1185 7.53907 33.2315 6.54317 36.601 6.72054C38.1907 6.80421 39.2821 6.99939 40.5035 7.41842C41.3511 7.70922 42.5694 8.32447 42.9452 8.65154L43.0401 8.73416L43.0294 9.65858L43.0186 10.583L42.6164 10.3355C40.7715 9.19997 38.4312 8.59899 35.8603 8.60051C33.6813 8.6018 31.6701 9.18559 29.9578 10.3139C28.1961 11.4747 26.8686 13.1135 26.0915 15.087C25.0395 17.7586 25.2022 21.0231 26.5189 23.6583C28.0198 26.6625 30.785 28.5953 34.2157 29.0383C35.2251 29.1686 36.7138 29.1093 37.7713 28.8965C41.2316 28.2004 43.403 25.8338 43.8655 22.2545C43.9137 21.8811 43.9308 21.4311 43.9338 20.4544L43.9378 19.1521L39.8492 19.1424L35.7605 19.1326V17.2945H45.7571L45.7568 18.951C45.7564 20.8189 45.7156 21.7964 45.6055 22.5783C45.273 24.9393 44.3938 26.8186 42.9433 28.2691C41.4732 29.7392 39.5919 30.6016 37.1776 30.9121C36.6142 30.9846 34.9654 31.0171 34.4008 30.9669ZM81.0327 9.02611V4.99978H82.9095V11.8058L82.7472 11.8786C82.4119 12.0292 81.9363 12.3536 81.0806 13.0154C81.0423 13.045 81.0327 12.2414 81.0327 9.02611ZM78.1984 10.4845V4.99978H80.0752V13.7792L79.7818 14.091C79.4814 14.4103 78.9414 15.0451 78.5065 15.5901C78.3721 15.7586 78.2477 15.9129 78.2302 15.9329C78.2127 15.9529 78.1984 13.5011 78.1984 10.4845Z" fill="currentColor"></path>
<path className="" d="M34.8987 28.1104C32.5419 27.9251 30.5574 27.0154 28.9951 25.4044C28.5362 24.9312 28.2717 24.6026 27.919 24.0675C26.6122 22.0846 26.104 19.4949 26.5492 17.0868C27.12 13.9994 29.2507 11.4365 32.2351 10.2475C32.994 9.94515 33.9305 9.72214 34.8203 9.63185C35.3977 9.57326 36.9483 9.60604 37.5606 9.68978C39.5322 9.95942 41.2922 10.5685 42.7024 11.4692L43.0374 11.6832L43.0376 12.5915C43.0377 13.4192 43.0318 13.503 42.9704 13.5358C42.9176 13.5641 42.7989 13.5059 42.4246 13.2686C40.9475 12.3324 39.3749 11.7854 37.5223 11.5636C36.8164 11.4791 35.2911 11.4683 34.7646 11.544C31.3794 12.031 28.9679 14.4661 28.5391 17.8305C28.4224 18.7463 28.5018 20.0376 28.7299 20.9329C29.2391 22.9323 30.4698 24.5582 32.1174 25.4083C33.2353 25.9852 34.2184 26.2185 35.5307 26.2185C37.3681 26.2185 38.846 25.696 39.8597 24.6881C40.5168 24.0347 40.9007 23.2424 40.9881 22.3597L41.0155 22.082H35.7605V20.1286H42.9611V20.9097C42.9611 22.1146 42.8649 22.8306 42.5942 23.6397C42.0457 25.2792 40.8825 26.5807 39.2842 27.3435C38.2447 27.8395 37.1383 28.0808 35.7661 28.1107C35.3944 28.1188 35.004 28.1187 34.8987 28.1103V28.1104ZM87.0343 28.1313C85.5452 27.9991 84.2343 27.3423 83.1152 26.1676C82.3128 25.3255 81.7443 24.3207 81.497 23.3076C81.3537 22.7207 81.3086 22.8353 82.1265 21.7078C82.5255 21.1576 82.8633 20.7065 82.877 20.7053C82.8908 20.7041 82.9133 20.8884 82.927 21.1149C82.9616 21.6879 83.0132 22.0387 83.1283 22.4841C83.6393 24.4619 85.0756 25.8911 86.8671 26.2044C87.3427 26.2875 88.1599 26.2573 88.6164 26.1396C90.2661 25.7144 91.3631 24.4675 91.7818 22.5416C91.8829 22.0765 91.8836 20.7103 91.783 20.2524C91.5779 19.3189 91.1775 18.5311 90.5985 17.9215C89.771 17.0504 88.6856 16.6049 87.3907 16.6049C85.7288 16.6049 84.52 17.279 82.9255 19.0951C81.3665 20.8707 78.7776 24.1611 77.476 26.0211L77.011 26.6855V23.5949L77.673 22.6948C78.0371 22.1997 78.6751 21.3552 79.0907 20.818C79.5064 20.2808 80.0831 19.5312 80.3724 19.1521C81.7015 17.4104 82.5591 16.5365 83.6486 15.8135C85.8962 14.3222 88.8537 14.2847 90.9986 15.7202C93.1875 17.1851 94.2393 20.0501 93.6525 22.9487C93.179 25.287 91.6815 27.0912 89.6097 27.8195C89.1615 27.977 88.6463 28.0833 88.099 28.131C87.5943 28.175 87.5273 28.175 87.034 28.1314L87.0343 28.1313ZM71.3424 25.6393C71.3424 21.4736 71.3343 20.7537 71.2831 20.4089C71.0956 19.1464 70.5126 18.0945 69.6356 17.4363C69.0669 17.0095 68.4291 16.7443 67.6715 16.6196C67.1287 16.5303 66.3179 16.5652 65.8079 16.6998C64.1048 17.1493 62.8804 18.5364 62.5106 20.435C62.4051 20.9767 62.4142 21.9987 62.5294 22.5416C62.9084 24.3286 64.0418 25.619 65.6355 26.0777C67.0383 26.4814 68.9714 26.1789 70.1653 25.3688L70.3862 25.2189L70.376 26.2062L70.3658 27.1934L69.9827 27.3937C69.0137 27.9004 67.4949 28.2238 66.4207 28.152C64.3644 28.0147 62.7095 27.0811 61.6083 25.4374C60.436 23.6875 60.1363 21.148 60.8493 19.0061C61.7913 16.1767 64.4326 14.4485 67.4453 14.6903C69.0789 14.8215 70.3058 15.3695 71.3822 16.4489C72.3773 17.4467 72.911 18.5241 73.167 20.052C73.2284 20.4184 73.2355 20.8992 73.2477 25.4621L73.261 30.47H71.3424V25.6393ZM49.856 25.5195C49.8565 20.4422 49.8726 19.7618 50.0075 19.0996C50.3541 17.3989 51.363 16.0462 52.8378 15.3047C53.1869 15.1292 53.9125 14.8976 54.3366 14.8263C55.6151 14.6113 56.9439 14.8056 57.8875 15.3455L58.087 15.4596L57.929 15.7163C57.8422 15.8574 57.6521 16.2185 57.5067 16.5187C57.3612 16.8189 57.2391 17.0645 57.2353 17.0645C57.2315 17.0645 57.0647 17.0061 56.8645 16.9347C56.0083 16.6292 55.2257 16.5797 54.4256 16.7804C53.6764 16.9682 52.9939 17.4108 52.552 17.9952C52.3055 18.3213 52.0205 18.9226 51.8948 19.3817L51.79 19.7647L51.7792 25.1173L51.7684 30.47H49.8554L49.856 25.5195Z" fill="currentColor"></path>
<path d="M47.0594 25.194C47.0595 19.9215 47.0685 19.4952 47.1974 18.7115C47.5945 16.2959 48.8587 14.3248 50.7455 13.1793C52.5392 12.0903 54.9189 11.7177 57.2093 12.1672C58.025 12.3273 59.039 12.7218 59.6642 13.1223L59.9167 13.2841L59.4686 13.7284C59.2222 13.9728 58.9428 14.2647 58.8477 14.377L58.6749 14.5812L58.4496 14.4675C57.697 14.0879 56.4236 13.8089 55.4439 13.8089C52.3627 13.8089 49.9596 15.5978 49.2068 18.452C48.9482 19.4325 48.9602 19.1284 48.946 25.0791L48.9332 30.47H47.0594L47.0594 25.194ZM86.7396 30.9825C83.8645 30.7205 81.4828 29.3405 80.0192 27.0887C79.7883 26.7334 79.3869 25.9256 79.3077 25.6569L79.2607 25.4974L79.9265 24.5918L80.5922 23.6862L80.626 23.8129C81.0569 25.4317 82.0018 26.8087 83.3339 27.759C83.748 28.0545 84.5007 28.4543 84.9993 28.6437C86.2509 29.1191 87.6381 29.2335 88.989 28.9728C89.8678 28.8032 90.9114 28.3565 91.6422 27.8373C92.0916 27.5179 92.925 26.6908 93.2282 26.2632C93.9696 25.2177 94.4576 23.9749 94.6541 22.6317C94.7441 22.0162 94.7449 20.7741 94.6556 20.1647C94.3441 18.0381 93.3761 16.327 91.8146 15.1428C90.5003 14.1461 88.6489 13.629 86.8827 13.7652C84.2084 13.9715 82.3657 15.1878 79.7148 18.4965C79.4429 18.8359 78.7295 19.7686 78.1295 20.5691C77.5296 21.3696 77.0325 22.0317 77.0249 22.0405C77.0173 22.0493 77.0111 21.4284 77.0111 20.6608V19.2652L77.6533 18.3659C79.0146 16.4598 79.6037 15.7315 80.5335 14.8047C81.5018 13.8396 82.2767 13.268 83.3116 12.7551C84.1813 12.3241 85.0172 12.065 86.0502 11.9061C86.67 11.8108 88.1881 11.8108 88.8079 11.9061C90.9192 12.2308 92.5993 13.0865 94.0169 14.5594C95.4052 16.0018 96.2364 17.7912 96.5507 20.0137C96.6197 20.5018 96.6199 22.2813 96.551 22.7714C96.3276 24.3609 95.8122 25.787 95.0353 26.9654C93.5934 29.1526 91.4929 30.5043 88.9037 30.911C88.5334 30.9692 87.1099 31.0162 86.7397 30.9825H86.7396ZM65.942 30.9625C61.7913 30.5824 58.5871 27.6649 57.7874 23.5375C57.6359 22.7559 57.6114 22.4624 57.6114 21.4309C57.6114 20.1675 57.6966 19.5151 57.9965 18.481C58.7815 15.7738 60.7757 13.53 63.3183 12.493C64.5329 11.9977 65.5872 11.7984 66.9761 11.8017C68.3231 11.8049 69.3155 11.9794 70.4424 12.4115C71.6451 12.8725 72.6164 13.5131 73.5287 14.4466C74.8557 15.8045 75.6458 17.4388 75.9876 19.5324C76.0677 20.0228 76.0696 20.1379 76.0821 25.2514L76.0949 30.47H74.1768L74.1764 25.6728C74.176 22.6943 74.161 20.7013 74.1364 20.4159C73.9732 18.5222 73.2014 16.8527 71.9353 15.6544C70.5148 14.3101 68.4337 13.6009 66.392 13.7653C62.8843 14.0479 60.2774 16.453 59.6609 19.9754C59.4889 20.9585 59.519 22.2696 59.7387 23.3567C59.8971 24.1408 60.2979 25.1732 60.6932 25.8154C61.5197 27.1582 62.7366 28.1386 64.2307 28.6654C65.5105 29.1166 66.9759 29.2308 68.2235 28.9764C68.9362 28.8311 69.7845 28.5047 70.2098 28.2121L70.3849 28.0916V29.994L70.1647 30.1392C69.5378 30.5526 68.6161 30.8553 67.6464 30.9662C67.246 31.012 66.4638 31.0102 65.942 30.9625Z" fill="currentColor"></path>
</g>
<defs>
</defs>
</svg>
<svg className="" fill="none" height="36" viewbox="0 0 120 36" width="120" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M46.617 25.9692C50.5536 25.9692 53.7613 22.9097 53.7613 18.7576C53.7613 14.5763 50.5536 11.546 46.617 11.546C42.6805 11.546 39.4728 14.5763 39.4728 18.7576C39.4728 22.9097 42.6805 25.9692 46.617 25.9692ZM46.617 14.3878C48.7748 14.3878 50.6339 16.163 50.6339 18.7576C50.6339 21.323 48.7748 23.1275 46.617 23.1275C44.4593 23.1275 42.6002 21.3262 42.6002 18.7576C42.6002 16.163 44.4593 14.3878 46.617 14.3878Z" fill="currentColor" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M62.0293 25.9692C65.9659 25.9692 69.1735 22.9097 69.1735 18.7576C69.1735 14.5763 65.9659 11.546 62.0293 11.546C58.0927 11.546 54.8851 14.5796 54.8851 18.7576C54.8851 22.9097 58.0927 25.9692 62.0293 25.9692ZM62.0293 14.3878C64.187 14.3878 66.0462 16.163 66.0462 18.7576C66.0462 21.323 64.187 23.1275 62.0293 23.1275C59.8716 23.1275 58.0125 21.3262 58.0125 18.7576C58.0125 16.163 59.8716 14.3878 62.0293 14.3878Z" fill="currentColor" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M83.9436 24.9288V11.9849H80.9735V13.1587H80.8644C80.1612 12.3101 78.8126 11.546 77.1141 11.546C73.5532 11.546 70.2909 14.7129 70.2909 18.7836C70.2909 22.8251 73.5532 25.966 77.1141 25.966C78.8158 25.966 80.1644 25.2019 80.8644 24.3273H80.9735V25.3645C80.9735 28.125 79.519 29.5913 77.1719 29.5913C75.2582 29.5913 74.0701 28.2062 73.5852 27.0324L70.8624 28.1802C71.6459 30.092 73.7233 32.4298 77.1751 32.4298C80.8419 32.4298 83.9436 30.2546 83.9436 24.9288ZM77.3934 14.3878C79.5222 14.3878 81.1951 16.2443 81.1951 18.7836C81.1951 21.297 79.5222 23.1275 77.3934 23.1275C75.2357 23.1275 73.4279 21.297 73.4279 18.7836C73.4279 16.2443 75.2357 14.3878 77.3934 14.3878Z" fill="currentColor" fill-rule="evenodd"></path>
<path className="" d="M88.8403 4.39286V25.527H85.7899V4.39286H88.8403Z" fill="currentColor"></path>
<path clip-rule="evenodd" d="M103.154 22.7697L100.727 21.131C99.9182 22.334 98.8129 23.1274 97.221 23.1274C95.6313 23.1274 94.4979 22.3893 93.769 20.9425L103.289 16.9497L102.965 16.1303C102.374 14.5209 100.566 11.5426 96.8707 11.5426C93.2006 11.5426 90.1535 14.4656 90.1535 18.7542C90.1535 22.799 93.1749 25.9659 97.221 25.9659C100.483 25.9659 102.371 23.9435 103.154 22.7697ZM99.6194 15.8605L93.2552 18.5364C93.1749 15.7532 95.3872 14.3323 96.9768 14.3323C98.2162 14.3323 99.2692 14.9598 99.6194 15.8605Z" fill="currentColor" fill-rule="evenodd"></path>
<path className="" d="M27.9264 16.8815V13.8219H38.1081C38.2077 14.3551 38.2591 14.9859 38.2591 15.6687C38.2591 17.9642 37.6394 20.8027 35.6422 22.825C33.6996 24.8734 31.2176 25.9659 27.9296 25.9659C21.8353 25.9659 16.7108 20.9393 16.7108 14.7681C16.7108 8.59692 21.8353 3.57022 27.9296 3.57022C31.301 3.57022 33.7028 4.90977 35.5073 6.65577L33.3753 8.81477C32.0813 7.58567 30.3281 6.62979 27.9264 6.62979C23.4761 6.62979 19.9955 10.2616 19.9955 14.7681C19.9955 19.2745 23.4761 22.9063 27.9264 22.9063C30.813 22.9063 32.457 21.7326 33.5101 20.6661C34.3643 19.8013 34.9262 18.5657 35.1477 16.8782L27.9264 16.8815Z" fill="currentColor"></path>
</svg>
<svg fill="none" height="36" viewbox="0 0 120 36" width="120" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_20_33218)">
<path d="M18.6207 3.00145V26.1747L21.6024 26.1839V15.1485H28.7916V12.2316H21.6024V5.91691H30.9653V3L18.6207 3.00145Z" fill="currentColor"></path>
<path d="M36.3322 7.7055C37.4062 7.7055 38.2768 6.83487 38.2768 5.76089C38.2768 4.68691 37.4062 3.81628 36.3322 3.81628C35.2583 3.81628 34.3876 4.68691 34.3876 5.76089C34.3876 6.83487 35.2583 7.7055 36.3322 7.7055Z" fill="currentColor"></path>
<path d="M34.8154 10.6225V26.1794H37.7971V10.6225H34.8154Z" fill="currentColor"></path>
<path clip-rule="evenodd" d="M48.8563 10.1686C44.8968 10.1686 42.1336 13.5174 42.1336 17.4933C42.1336 21.4693 44.8968 24.818 48.8563 24.818C50.6691 24.818 52.163 24.1162 53.2503 22.9737V25.0449C53.2503 27.6224 51.2257 29.7767 48.5832 29.7767C47.6335 29.7767 46.6898 29.4086 45.938 28.8904L44.4439 31.478C45.6372 32.2472 47.0581 32.6936 48.5832 32.6936C52.8076 32.6936 56.232 29.2691 56.232 25.0449V10.6224H53.2503V12.0129C52.163 10.8704 50.6691 10.1686 48.8563 10.1686ZM45.1153 17.4933C45.1153 15.0253 47.0031 13.0855 49.1805 13.0855C51.358 13.0855 53.2457 15.0253 53.2457 17.4933C53.2457 19.9612 51.358 21.9011 49.1805 21.9011C47.0031 21.9011 45.1153 19.9612 45.1153 17.4933Z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M66.976 13.0855C65.2129 13.0855 63.7836 14.5796 63.7836 16.3427V26.1793H60.8018V10.6224H63.7836V12.0475C64.6572 10.9181 65.9444 10.1686 67.6241 10.1686C69.7135 10.1686 71.317 11.2064 72.2458 12.7945C73.2785 11.2605 74.9631 10.1686 76.9907 10.1686C80.3844 10.1686 82.4967 12.9066 82.5167 16.2941C82.5167 16.3043 82.5167 16.3145 82.5167 16.3249V16.3255V16.3259V16.3265C82.5167 16.3319 82.5167 16.3373 82.5167 16.3427V26.1793H79.5349V16.3427C79.5349 14.5796 78.1056 13.0855 76.3425 13.0855C74.5793 13.0855 73.1501 14.5796 73.1501 16.3427V26.1793H70.1684V16.3427C70.1684 14.5796 68.7391 13.0855 66.976 13.0855Z" fill="currentColor"></path>
<path clip-rule="evenodd" d="M98.3976 12.3859C97.0711 11.0161 95.2544 10.1686 93.1472 10.1686C88.7113 10.1686 85.5633 13.9244 85.5633 18.4007C85.5633 22.8772 88.7113 26.6329 93.1472 26.6329C95.2544 26.6329 97.0711 25.7855 98.3976 24.4157V26.1793H101.379V10.6224H98.3976V12.3859ZM88.545 18.4007C88.545 15.431 90.8189 13.0855 93.4713 13.0855C96.1236 13.0855 98.3976 15.431 98.3976 18.4007C98.3976 21.3706 96.1236 23.716 93.4713 23.716C90.8189 23.716 88.545 21.3706 88.545 18.4007Z" fill="currentColor" fill-rule="evenodd"></path>
</g>
<defs>
</defs>
</svg>
<svg fill="none" height="36" viewbox="0 0 120 36" width="120" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_20_33274)">
<path d="M60.1235 11.5C55.6385 11.5 52.4046 14.425 52.4046 18.8125C52.4046 23.2 56.0407 26.125 60.5299 26.125C63.2393 26.125 65.6282 25.0525 67.1068 23.2447L63.9991 21.4491C63.1785 22.3469 61.9313 22.8709 60.5299 22.8709C58.5838 22.8709 56.9304 21.8553 56.3168 20.2303H67.7002C67.7893 19.7753 67.8424 19.3041 67.8424 18.8084C67.8424 14.425 64.6127 11.5 60.1235 11.5ZM56.2843 17.3906C56.7921 15.7697 58.1816 14.75 60.1235 14.75C62.0693 14.75 63.4588 15.7697 63.9627 17.3906H56.2843ZM55.3663 7.03125L44.1091 26.5312L32.8479 7.03125H37.0688L44.1052 19.2188L51.1413 7.03125H55.3663ZM17.3169 5L32.3279 31H2.306L17.3169 5ZM84.1735 18.8125C84.1735 21.25 85.766 22.875 88.236 22.875C89.9099 22.875 91.1652 22.1153 91.811 20.8763L94.931 22.6759C93.6391 24.8291 91.2179 26.125 88.236 26.125C83.7468 26.125 80.5174 23.2 80.5174 18.8125C80.5174 14.425 83.751 11.5 88.236 11.5C91.2179 11.5 93.6352 12.7959 94.931 14.9491L91.811 16.7488C91.1652 15.5097 89.9099 14.75 88.236 14.75C85.7702 14.75 84.1735 16.375 84.1735 18.8125ZM117.681 7.03125V25.7188H114.025V7.03125H117.681ZM103.868 11.5C99.3835 11.5 96.1499 14.425 96.1499 18.8125C96.1499 23.2 99.7899 26.125 104.275 26.125C106.984 26.125 109.373 25.0525 110.852 23.2447L107.744 21.4491C106.924 22.3469 105.676 22.8709 104.275 22.8709C102.329 22.8709 100.675 21.8553 100.062 20.2303H111.445C111.534 19.7753 111.587 19.3041 111.587 18.8084C111.587 14.425 108.358 11.5 103.868 11.5ZM100.029 17.3906C100.537 15.7697 101.923 14.75 103.868 14.75C105.814 14.75 107.204 15.7697 107.708 17.3906H100.029ZM79.2985 11.9062V15.8428C78.8924 15.725 78.4616 15.6438 77.9985 15.6438C75.6382 15.6438 73.936 17.2688 73.936 19.7063V25.7188H70.2799V11.9062H73.936V15.6438C73.936 13.58 76.3368 11.9062 79.2985 11.9062Z" fill="currentColor"></path>
</g>
<defs>
</defs>
</svg>
</div>
</div>
</div>
</div>
</section><section className="lg:px-12 text-[#0F0F11] font-inter bg-white border-gray-100 border-b pt-24 pr-6 pb-24 pl-6">
<div className="grid lg:grid-cols-2 gap-20 font-inter max-w-7xl mr-auto ml-auto gap-x-20 gap-y-20 items-center">

<div className="">
<span className="uppercase flex items-center gap-2 text-xs font-bold text-[#A1A1AA] tracking-widest font-inter mb-4" style={{}}>
<iconify-icon className="text-lg text-[#0F0F11]" icon="solar:cup-star-linear"></iconify-icon>
                Recognition
            </span>
<h2 className="lg:text-6xl leading-[1.1] text-5xl font-medium text-[#0F0F11] tracking-tight font-inter mb-6">
                Award Winning Shots
            </h2>
<p className="leading-relaxed text-lg font-light text-[#A1A1AA] font-inter max-w-md mb-12" style={{}}>
                Our photographs have been featured in leading publications and galleries worldwide, celebrating the art of composition and light.
            </p>

<div className="w-full">
<div className="flex justify-between text-[10px] font-bold text-[#A1A1AA]/60 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
<span className="font-inter" style={{}}>Organization</span>
<span className="font-inter" style={{}}>Year</span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#0F0F11] font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
<span className="font-inter" style={{}}>Sony World Photography</span>
</div>
<span className="text-xs text-[#A1A1AA] font-inter" style={{}}>Photographer of the Year</span>
</div>
<span className="text-sm text-[#0F0F11]/60 font-inter" style={{}}>2025</span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#0F0F11] font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:earth-linear"></iconify-icon>
<span className="font-inter" style={{}}>National Geographic</span>
</div>
<span className="text-xs text-[#A1A1AA] font-inter" style={{}}>Travel Photo Contest Winner</span>
</div>
<span className="text-sm text-[#0F0F11]/60 font-inter" style={{}}>2024</span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#0F0F11] font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:star-linear"></iconify-icon>
<span className="font-inter" style={{}}>LensCulture</span>
</div>
<span className="text-xs text-[#A1A1AA] font-inter" style={{}}>Portrait Awards — Jurors' Pick</span>
</div>
<span className="text-sm text-[#0F0F11]/60 font-inter" style={{}}>2024</span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#0F0F11] font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:gallery-wide-linear"></iconify-icon>
<span className="font-inter" style={{}}>IPA Awards</span>
</div>
<span className="text-xs text-[#A1A1AA] font-inter" style={{}}>Fine Art Photographer of the Year</span>
</div>
<span className="text-sm text-[#0F0F11]/60 font-inter" style={{}}>2023</span>
</div>
</div>
</div>

<div className="bg-[#FAFAFA] rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50">

<div className="h-72 w-full overflow-hidden relative group">
<img alt="Award Winning Portrait" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a17a1a3-4370-4e94-a105-4854da74d64c_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11]/80 to-transparent"></div>
<div className="absolute bottom-6 left-8 text-white">
<span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block border border-white/10 font-inter" style={{}}>Editorial</span>
<h3 className="text-3xl font-inter font-medium tracking-tight" style={{}}>The Gaze</h3>
</div>
</div>

<div className="p-8 lg:p-10">
<div className="mb-10">
<h4 className="text-2xl text-[#0F0F11] mb-3 font-inter font-medium tracking-tight" style={{}}>Vogue Cover 2024</h4>
<p className="text-[#A1A1AA] text-sm leading-relaxed font-inter" style={{}}>
                        Our flagship editorial shoot in Milan set a new standard for natural light photography, capturing the raw emotion of the subject.
                    </p>
</div>
<div className="space-y-8">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E4E4E7]/30 flex items-center justify-center text-[#0F0F11] group-hover:bg-[#0F0F11] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:camera-add-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#0F0F11] font-inter" style={{}}>Exposures</span>
<span className="text-xs text-[#A1A1AA] font-inter" style={{}}>Images captured</span>
</div>
</div>
<span className="text-4xl text-[#0F0F11] font-inter font-medium tracking-tight" style={{}}>4.2k</span>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E4E4E7]/30 flex items-center justify-center text-[#0F0F11] group-hover:bg-[#0F0F11] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#0F0F11] font-inter" style={{}}>Reach</span>
<span className="text-xs text-[#A1A1AA] font-inter" style={{}}>Magazine circulation</span>
</div>
</div>
<span className="text-4xl text-[#0F0F11] font-inter font-medium tracking-tight" style={{}}>2.5M</span>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E4E4E7]/30 flex items-center justify-center text-[#0F0F11] group-hover:bg-[#0F0F11] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:album-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#0F0F11] font-inter" style={{}}>Deliverables</span>
<span className="text-xs text-[#A1A1AA] font-inter" style={{}}>Retouched finals</span>
</div>
</div>
<span className="text-4xl text-[#0F0F11] font-inter font-medium tracking-tight" style={{}}>15</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 bg-white pt-16 pb-16">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<iconify-icon height="14" icon="solar:camera-minimalistic-linear" width="14"></iconify-icon>
        EXPERTISE
      </span>
<h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">The Art of Visual Storytelling</h2>
<p className="mt-3 text-sm text-slate-600">From concept to final print, we handle every aspect of the photographic process.</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-3xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.35)]">
<div className="grid sm:grid-cols-2 gap-4 items-center">
<div className="overflow-hidden rounded-2xl ring-1 ring-black/5 bg-slate-100 h-40 sm:h-44 md:h-48">
<img alt="Portrait photography session" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=2864&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="">
<div className="flex items-center gap-2">
<span className="inline-grid place-items-center h-8 w-8 rounded-xl bg-slate-900 text-white ring-1 ring-black/10 shadow-md">
<iconify-icon height="18" icon="solar:user-hand-up-linear" width="18"></iconify-icon>
</span>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Fine Art Portraiture</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Capture the essence of personality with dramatic lighting and expert direction that brings out the best in every subject.</p>
</div>
</div>
</div>

<div className="rounded-3xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.35)]">
<div className="flex items-start gap-3">
<span className="inline-grid place-items-center h-8 w-8 rounded-xl bg-slate-900 text-white ring-1 ring-black/10 shadow-md">
<iconify-icon height="18" icon="solar:bag-heart-linear" width="18"></iconify-icon>
</span>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Commercial &amp; Brand</h3>
<p className="mt-2 text-sm text-slate-600">Elevate your product or brand with high-fidelity imagery designed for marketing campaigns, lookbooks, and advertising.</p>
</div>
</div>
</div>

<div className="rounded-3xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.35)]">
<div className="flex items-start gap-3">
<span className="inline-grid place-items-center h-8 w-8 rounded-xl bg-slate-900 text-white ring-1 ring-black/10 shadow-md">
<iconify-icon height="18" icon="solar:book-linear" width="18"></iconify-icon>
</span>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Editorial Spreads</h3>
<p className="mt-2 text-sm text-slate-600">Narrative-driven photography for magazines and publications that tells a compelling story through composition and mood.</p>
</div>
</div>
</div>

<div className="rounded-3xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.35)]">
<div className="grid sm:grid-cols-2 gap-4 items-center">
<div className="overflow-hidden rounded-2xl ring-1 ring-black/5 bg-slate-100 h-40 sm:h-44 md:h-48">
<img alt="Photo editing interface" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="">
<div className="flex items-center gap-2">
<span className="inline-grid place-items-center h-8 w-8 rounded-xl bg-slate-900 text-white ring-1 ring-black/10 shadow-md">
<iconify-icon height="18" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">High-End Retouching</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Meticulous post-processing including color grading, skin retouching, and compositing to ensure flawless final delivery.</p>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 shadow-slate-900/10 hover:shadow-slate-900/20 transition text-sm font-semibold text-white bg-slate-900 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-lg" href="#">
<span>Book a Session</span>
<iconify-icon className="" height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200 text-sm font-semibold px-4 py-2.5 shadow-sm hover:bg-slate-50 transition" href="#">
<span>View Gallery</span>
<iconify-icon height="18" icon="solar:gallery-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section><section className="lg:py-32 overflow-hidden font-inter bg-white border-slate-200 border-t pt-24 pb-24 relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] left-[-10%] w-[800px] h-[800px] bg-indigo-100 blur-[120px] rounded-full mix-blend-multiply opacity-60"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100 blur-[100px] rounded-full mix-blend-multiply opacity-60"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative w-full aspect-square lg:aspect-[4/3] rounded-3xl bg-slate-50 ring-1 ring-slate-200 overflow-hidden flex items-center justify-center p-8 group select-none">

<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-full max-w-[320px] sm:max-w-sm aspect-[3/4] sm:aspect-square flex items-center justify-center transform perspective-1000">

<div className="absolute inset-0 bg-white rounded-2xl ring-1 ring-slate-200 shadow-xl rotate-[-12deg] scale-90 translate-y-4 backdrop-blur-sm transition-transform duration-700 group-hover:rotate-[-14deg] group-hover:translate-y-6"></div>

<div className="absolute inset-4 bg-slate-100 rounded-xl ring-1 ring-slate-900/5 rotate-[-6deg] overflow-hidden shadow-2xl shadow-slate-200/50 transition-transform duration-700 group-hover:rotate-[-8deg] group-hover:scale-[1.02]">
<img alt="Process Abstract" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent"></div>

<div className="absolute top-8 left-8 right-8 h-px bg-white/30"></div>
<div className="absolute top-8 bottom-8 left-8 w-px bg-white/30"></div>
<div className="absolute bottom-8 right-8 text-xs font-mono text-white/60">ISO 400 • f/2.8</div>
</div>

<div className="absolute top-[15%] -left-[10%] bg-white/90 backdrop-blur-md text-slate-700 text-xs font-medium px-4 py-2.5 rounded-full ring-1 ring-slate-200 shadow-lg shadow-slate-200/50 flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
<span>01. Discovery</span>
</div>
<div className="absolute top-[45%] -right-[15%] bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full ring-1 ring-slate-800 shadow-lg shadow-slate-900/20 flex items-center gap-2 transition-transform duration-500 delay-75 group-hover:translate-x-2">
<iconify-icon height="14" icon="lucide:aperture" width="14"></iconify-icon>
<span className="">02. Production</span>
</div>
<div className="absolute bottom-[20%] -left-[5%] bg-white/90 backdrop-blur-md text-slate-700 text-xs font-medium px-4 py-2.5 rounded-full ring-1 ring-slate-200 shadow-lg shadow-slate-200/50 flex items-center gap-2 transition-transform duration-500 delay-100 group-hover:translate-y-2">
<iconify-icon className="text-amber-500" height="14" icon="lucide:sparkles" width="14"></iconify-icon>
<span className="">03. Retouch</span>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="mb-10">
<span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-indigo-600/50"></span>
                        Workflow
                    </span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] font-geist mb-6">
                        Precision in every pixel.
                    </h2>
<p className="text-lg text-slate-600 leading-relaxed max-w-lg font-light">
                        Our studio operates on a four-stage creative engine designed to move from abstract concept to campaign-ready assets with zero friction.
                    </p>
</div>
<div className="space-y-8 relative">

<div className="absolute left-[11px] top-4 bottom-4 w-px bg-slate-200"></div>

<div className="relative flex gap-6 group">
<div className="relative z-10 flex-none w-6 h-6 rounded-full bg-white ring-2 ring-slate-200 flex items-center justify-center group-hover:ring-indigo-500 transition-colors duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-indigo-500 transition-colors"></div>
</div>
<div className="flex-1 -mt-1">
<h3 className="text-slate-900 font-medium text-lg flex items-center gap-3">
                                Concept &amp; Casting
                                <iconify-icon className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:search" width="16"></iconify-icon>
</h3>
<p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-md">
                                We define the visual language, scout locations, and cast talent that embodies your brand's narrative arc.
                            </p>
</div>
</div>

<div className="relative flex gap-6 group">
<div className="relative z-10 flex-none w-6 h-6 rounded-full bg-white ring-2 ring-slate-200 flex items-center justify-center group-hover:ring-indigo-500 transition-colors duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-indigo-500 transition-colors"></div>
</div>
<div className="flex-1 -mt-1">
<h3 className="text-slate-900 font-medium text-lg flex items-center gap-3">
                                Production
                                <iconify-icon className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:camera" width="16"></iconify-icon>
</h3>
<p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-md">
                                High-fidelity capture using medium format systems. We manage the entire set, lighting, and art direction.
                            </p>
</div>
</div>

<div className="relative flex gap-6 group">
<div className="relative z-10 flex-none w-6 h-6 rounded-full bg-white ring-2 ring-slate-200 flex items-center justify-center group-hover:ring-indigo-500 transition-colors duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-indigo-500 transition-colors"></div>
</div>
<div className="flex-1 -mt-1">
<h3 className="text-slate-900 font-medium text-lg flex items-center gap-3">
                                Post-Processing
                                <iconify-icon className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:layers" width="16"></iconify-icon>
</h3>
<p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-md">
                                Advanced color grading, compositing, and retouching to ensure consistent tone across all deliverables.
                            </p>
</div>
</div>

<div className="relative flex gap-6 group">
<div className="relative z-10 flex-none w-6 h-6 rounded-full bg-white ring-2 ring-slate-200 flex items-center justify-center group-hover:ring-indigo-500 transition-colors duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-indigo-500 transition-colors"></div>
</div>
<div className="flex-1 -mt-1">
<h3 className="text-slate-900 font-medium text-lg flex items-center gap-3">
                                Delivery
                                <iconify-icon className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:share-2" width="16"></iconify-icon>
</h3>
<p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-md">
                                Assets delivered via private cloud gallery in multiple formats, ready for print, web, and social deployment.
                            </p>
</div>
</div>
</div>
<div className="mt-12 flex items-center gap-4">
<button className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white">
                        Explore Full Process
                        <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-4 py-2">
                        Download Rate Card
                    </button>
</div>
</div>
</div>
</div>
</section><section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="text-center max-w-4xl mr-auto ml-auto">
<span className="inline-flex items-center gap-2 sm:px-4 sm:py-2 text-xs font-medium text-violet-600 font-geist bg-violet-500/15 border-violet-400/30 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Global Talent</span>
<h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter font-geist text-slate-900">Capturing stories worldwide</h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-slate-600 font-geist">Working with top models, agencies, and brands from 180+ countries to create iconic imagery.</p>
<div className="mt-4 sm:mt-6">
<a className="inline-flex items-center gap-2 sm:px-6 sm:py-3 shadow-violet-900/25 hover:bg-violet-500 transition-colors text-sm font-semibold text-white font-geist bg-slate-900 rounded-full px-4 py-2 shadow-lg" href="#">
        Join Our Network
        <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative mt-8 sm:mt-12">
<style>
      @keyframes marquee-left {
        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(-50%);
        }
      }
    </style>
<div className="mx-auto max-w-6xl overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
<div className="flex w-max" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31996fe3-f9da-42d7-bf65-2cc5d5417271_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg"/>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">

<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c82a12e-5af1-47d3-963d-65c3987dd2be_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e63aa468-ae44-4756-84db-fcacd6cec9e2_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="sm:h-28 lg:h-36 w-full h-20 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a160135e-dfe8-4d26-b2e5-2915ebe6f3a2_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a3ff98a-df58-478d-a4ae-f3c6d3f3ba61_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50"><img alt="Model" className="w-full h-20 sm:h-28 lg:h-36 object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7063bc06-62fe-4811-b5fa-4b1e09b26a81_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden text-slate-900 font-inter bg-white pt-24 pb-12 relative">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[20%] right-[-10%] w-[800px] h-[800px] bg-violet-100 blur-[120px] rounded-full mix-blend-multiply opacity-60"></div>
<div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-blue-50 blur-[100px] rounded-full mix-blend-multiply opacity-60"></div>
</div>
<div className="lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="relative rounded-3xl overflow-hidden bg-slate-50 ring-1 ring-slate-200 p-8 md:p-12 lg:p-16 mb-20 group">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
<div className="max-w-xl">
<span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-6 shadow-sm">
<iconify-icon className="text-violet-600" height="12" icon="lucide:sparkles" width="12"></iconify-icon>
                        New openings for Fall 2024
                    </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 font-geist mb-4 leading-[1.1]">
                        Ready to elevate your visual identity?
                    </h2>
<p className="md:text-lg leading-relaxed text-base font-light text-slate-600">
                        Book a consultation today and let's craft a visual narrative that sets you apart from the noise.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-4 lg:mt-0">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white shadow-lg shadow-slate-900/10" href="#">
                        Book Session
                        <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify5 border border-slate-200 rounded-full hover:bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white bg-white/50 backdrop-blur-sm" href="#">
                        View Packages
                    </a>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 mb-20 border-t border-slate-200 pt-16">

<div className="col-span-2 md:col-span-2 lg:col-span-4 pr-8">
<a className="inline-flex items-center gap-3 text-xl font-bold text-slate-900 tracking-tight font-geist mb-6" href="#">
<div className="h-9 w-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-900/10">
<iconify-icon height="20" icon="lucide:aperture" width="20"></iconify-icon>
</div>
                    StackStudio
                </a>
<p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
                    A photography studio dedicated to the art of light, shadow, and storytelling. We build visual legacies for ambitious brands and individuals worldwide.
                </p>
<div className="flex items-center gap-3">
<a className="h-10 w-10 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300" href="#">
<iconify-icon height="18" icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300" href="#">
<iconify-icon className="" height="18" icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300" href="#">
<iconify-icon height="18" icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300" href="#">
<iconify-icon height="18" icon="lucide:dribbble" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-6">
<h3 className="text-sm font-semibold text-slate-900 font-geist mb-6">Services</h3>
<ul className="space-y-3.5">
<li className=""><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Campaigns</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Editorial</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Portraiture</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Events</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Retouching</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h3 className="text-sm font-semibold text-slate-900 font-geist mb-6">Studio</h3>
<ul className="space-y-3.5">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Our Story</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Equipment</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Rental Info</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors block" href="#">Contact</a></li>
</ul>
</div>

<div className="col-span-2 md:col-span-2 lg:col-span-3">
<h3 className="text-sm font-semibold text-slate-900 font-geist mb-6">Stay in focus</h3>
<p className="text-sm text-slate-500 mb-4 font-light">Join our newsletter for photography tips, studio updates, and exclusive presets.</p>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-4 pr-12 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-all" placeholder="Enter your email" type="email"/>
<button className="absolute right-1 top-1 bottom-1 p-1.5 bg-slate-200 hover:bg-slate-900 text-slate-600 hover:text-white rounded-md transition-colors" type="button">
<iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
<span className="text-[10px] text-slate-500">By subscribing, you agree to our Policy.</span>
</form>
</div>
</div>

<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-medium text-slate-500">© 2026 Stack Studio Inc.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-slate-500 hover:text-slate-800 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-slate-800 transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-slate-500 hover:text-slate-800 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
    </>
  );
}
