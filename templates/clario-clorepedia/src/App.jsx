import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const overlay = document.getElementById('loading-overlay');
        const banner  = document.getElementById('cookie-banner');
        const iframe  = document.getElementById('game-frame');

        function syncSize() {
            const h = window.innerHeight;
            document.documentElement.style.height = h + "px";
            document.body.style.height = h + "px";
            iframe.style.height = h + "px";
        }

        window.addEventListener('resize', syncSize);
        window.addEventListener('orientationchange', syncSize);
        syncSize();

        function maybeShowCookies() {
            if (localStorage.getItem('cookies_accepted') !== 'true') {
                banner.classList.remove('hidden');
            }
        }

        document.getElementById('cookie-accept').addEventListener('click', () => {
            localStorage.setItem('cookies_accepted', 'true');
            banner.classList.add('hidden');
        });

        iframe.addEventListener('load', () => {
            syncSize();
            overlay.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => { overlay.style.display = 'none'; }, 700);
            maybeShowCookies();
        });

        setTimeout(() => {
            if (!overlay.classList.contains('opacity-0')) {
                overlay.classList.add('opacity-0', 'pointer-events-none');
                maybeShowCookies();
            }
        }, 8000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ease-out" id="loading-overlay">
<div style={{width: '80px', height: '70px', border: '5px solid #000', padding: '0 8px', boxSizing: 'border-box', background: 'linear-gradient(#fff 0 0) 0 0/8px 20px, linear-gradient(#fff 0 0) 100% 0/8px 20px, radial-gradient(farthest-side,#fff 90%,#0000) 0 5px/8px 8px content-box, #000', backgroundRepeat: 'no-repeat', animation: 'pongLoader 2s infinite linear'}}></div>
</div>

<iframe allow="fullscreen; autoplay; encrypted-media; picture-in-picture" allowfullscreen="" className="w-full h-[100dvh] border-none block absolute top-0 left-0 z-0" id="game-frame" src="https://jojoisgamesite.lovable.app/"></iframe>

<div className="hidden fixed bottom-5 left-1/2 z-[99999] bg-white border border-neutral-200/80 rounded-2xl p-4 flex items-center gap-5 w-[calc(100%-32px)] max-w-[420px] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)]" id="cookie-banner" style={{animation: 'slideUpCenter 0.5s cubic-bezier(0.16,1,0.3,1) both'}}>
<div className="flex-1 text-neutral-500 text-xs leading-relaxed">
<strong className="text-neutral-900 block mb-0.5 text-sm font-semibold tracking-tight">🍪 Cookies</strong>
            Usamos cookies para melhorar a tua experiência.
        </div>
<button className="bg-neutral-900 text-white border-none rounded-lg px-4 py-2.5 font-semibold text-xs cursor-pointer hover:bg-neutral-800 transition-colors duration-200 outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2" id="cookie-accept">
            Aceitar
        </button>
</div>


    </>
  );
}
