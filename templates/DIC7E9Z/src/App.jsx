import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  lucide.createIcons();

  const input   = document.getElementById('qrInput');
  const canvas  = document.getElementById('qrCanvas');

  const getQRSize = () =>
    Math.min(canvas.parentElement.clientWidth, 320);

  const renderQR = (value = '') => {
    QRCode.toCanvas(canvas, value || 'https://qrforge.app', {
      width: getQRSize(),
      margin: 1,
      color: { dark: '#000000', light: '#ffffff' }
    });
  };

  renderQR();
  input.addEventListener('input', e => renderQR(e.target.value));
  window.addEventListener('resize', () => renderQR(input.value));

  document.getElementById('downloadBtn').onclick = () => {
    const link = document.createElement('a');
    link.download = 'qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  document.getElementById('shareBtn').onclick = async () => {
    if (!navigator.share) return alert('Sharing not supported on this device.');
    const blob = await (await fetch(canvas.toDataURL('image/png'))).blob();
    await navigator.share({ files: [new File([blob], 'qr.png', { type: 'image/png' })], title: 'My QR code' });
  };

  const modal = document.getElementById('upgradeModal');
  document.getElementById('upgradeHeader').onclick =
  document.getElementById('upgradeAside').onclick = () => modal.classList.remove('hidden');
  document.getElementById('closeModal').onclick = () => modal.classList.add('hidden');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight select-none">
<svg className="lucide lucide-qr-code w-6 h-6 text-indigo-600" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg> QRForge
    </h1>
<button className="hidden sm:inline-flex gap-1 hover:shadow-md hover:bg-purple-700 text-sm font-medium text-white bg-purple-600 rounded-md pt-2 pr-4 pb-2 pl-4 shadow-sm items-center" id="upgradeHeader">
      Upgrade <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</header>

<main className="flex-1">
<div className="max-w-xl mx-auto px-6 py-12 space-y-10">

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="qrInput">Enter URL or text</label>
<div className="relative">
<input aria-label="QR code content" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200" id="qrInput" placeholder="https://example.com" type="text"/>
<span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
<svg className="lucide lucide-type w-4 h-4" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
</span>
</div>
</div>

<section className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg space-y-6">
<h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
        Live Preview <svg className="lucide lucide-eye w-5 h-5 text-indigo-600" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</h2>
<div className="w-full flex justify-center">
<canvas className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-md border border-gray-100" height="320" id="qrCanvas" style={{height: '320px', width: '320px'}} width="320"></canvas>
</div>
<div className="flex flex-col sm:flex-row sm:justify-center gap-3">
<button className="flex justify-center items-center gap-2 rounded-md px-4 py-2 text-sm font-medium shadow-sm bg-purple-600 hover:bg-purple-700 text-white" id="downloadBtn">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download PNG
        </button>
<button className="flex justify-center items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium shadow-sm bg-white hover:border-gray-300 text-gray-700" id="shareBtn">
<svg className="lucide lucide-share-2 w-4 h-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> Share Link
        </button>
</div>
</section>

<details className="w-full rounded-md border border-dashed border-gray-300 bg-white/40 p-5 text-sm text-gray-600">
<summary className="cursor-pointer select-none flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4 text-purple-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
        Unlock more with Premium
      </summary>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hi-res PNG &amp; SVG exports</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited colour palettes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Logo &amp; frame uploads</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom templates &amp; shapes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Detailed scan analytics</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support</li>
<button className="mt-4 inline-flex items-center gap-2 rounded-md px-5 py-2 text-sm font-medium shadow-sm bg-purple-600 hover:bg-purple-700 text-white" id="upgradeAside">
          Upgrade now <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</ul>
</details>
</div>
</main>

<footer className="border-t bg-white/60 backdrop-blur">
<div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-500 flex flex-wrap justify-between">
<span>© 2023 QRForge. All rights reserved.</span>
<span>More features coming soon.</span>
</div>
</footer>

<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6" id="upgradeModal">
<div className="w-full max-w-md bg-white rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-xl space-y-6 items-center justify-center">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Unlock Premium</h3>
<button className="text-gray-400 hover:text-gray-600" id="closeModal">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<p className="text-sm text-gray-600">Enjoy next-level QR creation with all six benefits:</p>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hi-res PNG &amp; SVG exports</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited colour palettes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Logo &amp; frame uploads</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom templates &amp; shapes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Detailed scan analytics</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support</li>
</ul>
<button className="w-full flex justify-center items-center gap-2 rounded-md px-6 py-3 text-sm font-medium shadow-sm bg-purple-600 hover:bg-purple-700 text-white">
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Continue to payment
    </button>
</div>
</div>



    </>
  );
}
