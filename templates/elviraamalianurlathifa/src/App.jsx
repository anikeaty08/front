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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const romanticMessage = "Di usiamu yang ke-19 ini, aku cuma mau bilang terima kasih. Terima kasih sudah hadir dan menjadi warna paling indah di hariku. Semoga setiap doamu didengar, setiap langkahmu dimudahkan, dan senyummu tidak pernah pudar. Aku akan selalu ada di sini, menemani setiap prosesmu. I love you more than words can say.";
        let i = 0;
        const speed = 50; 

        const puzzlePage = document.getElementById('puzzle-page');
        const landingPage = document.getElementById('landing-page');
        const messagePage = document.getElementById('message-page');
        const typedTextEl = document.getElementById('typed-text');
        const bgMusic = document.getElementById('bgMusic');
        const giftSection = document.getElementById('gift-section');
        const memoriesSection = document.getElementById('memories-section');
        const qrContainer = document.getElementById('qr-container');
        const btnOpenGift = document.getElementById('btn-open-gift');
        const toast = document.getElementById('toast');

        function fireConfetti() {
            const colors = ['#fce7f3', '#f3e8ff', '#e0f2fe', '#ffe4e6'];
            for (let i = 0; i < 60; i++) {
                let conf = document.createElement('div');
                conf.style.position = 'fixed';
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.top = '-10vh';
                conf.style.width = (Math.random() * 8 + 4) + 'px';
                conf.style.height = (Math.random() * 12 + 6) + 'px';
                conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                conf.style.zIndex = '40';
                conf.style.opacity = Math.random() + 0.5;
                conf.style.transition = 'transform 4s cubic-bezier(0.25, 1, 0.5, 1), top 4s ease-in';
                
                document.body.appendChild(conf);

                setTimeout(() => {
                    conf.style.top = '110vh';
                    conf.style.transform = `rotate(${Math.random() * 720}deg) translateX(${Math.random() * 200 - 100}px)`;
                }, 50);

                setTimeout(() => conf.remove(), 4000);
            }
        }

        function showSurprise(msg) {
            toast.innerText = msg;
            toast.style.opacity = '1';
            toast.style.transform = 'translate(-50%, 0)';
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translate(-50%, -20px)';
            }, 3000);
        }

        function checkPuzzle() {
            const inputVal = document.getElementById('puzzle-input').value;
            // 17 + 4 + 2007 = 2028
            if (inputVal === "2028") {
                showSurprise("Jawaban benar! Pintar banget kesayanganku ✨");
                
                puzzlePage.classList.remove('opacity-100', 'scale-100');
                puzzlePage.classList.add('opacity-0', 'scale-95');
                
                setTimeout(() => {
                    puzzlePage.classList.add('hidden');
                    landingPage.classList.remove('hidden');
                    landingPage.classList.add('flex');
                    
                    setTimeout(() => {
                        landingPage.classList.remove('opacity-0', 'scale-95');
                        landingPage.classList.add('opacity-100', 'scale-100');
                    }, 50);
                }, 700);
            } else {
                showSurprise("Jawaban masih kurang tepat. Coba ingat tanggal lahirmu ya! 🧐");
                const inputEl = document.getElementById('puzzle-input');
                inputEl.value = '';
                inputEl.focus();
            }
        }

        function typeWriter() {
            if (i < romanticMessage.length) {
                typedTextEl.innerHTML += romanticMessage.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                setTimeout(() => {
                    memoriesSection.classList.remove('hidden');
                    memoriesSection.classList.add('grid');
                    setTimeout(() => {
                        memoriesSection.classList.remove('opacity-0', 'translate-y-4');
                    }, 50);

                    giftSection.classList.remove('hidden');
                    giftSection.classList.add('flex');
                    setTimeout(() => {
                        giftSection.classList.remove('opacity-0');
                    }, 50);
                }, 1000);
            }
        }

        function startJourney() {
            bgMusic.volume = 0.5;
            bgMusic.play().catch(e => console.log("Audio autoplay blocked"));

            fireConfetti();

            landingPage.classList.remove('opacity-100', 'scale-100');
            landingPage.classList.add('opacity-0', 'scale-95');
            
            setTimeout(() => {
                landingPage.classList.add('hidden');
                messagePage.classList.remove('hidden');
                messagePage.classList.add('flex');
                
                setTimeout(() => {
                    messagePage.classList.remove('opacity-0', 'translate-y-10');
                    messagePage.classList.add('opacity-100', 'translate-y-0');
                    
                    setTimeout(typeWriter, 800);
                }, 50);
            }, 1000);
        }

        function blowCandle() {
            const btn = document.getElementById('cake-btn');
            btn.innerHTML = '<iconify-icon icon="solar:stars-linear" class="text-yellow-400 animate-pulse" width="40" height="40"></iconify-icon>';
            
            showSurprise("Make a wish! Semoga terkabul ya sayang ✨");
            fireConfetti();
        }

        function openGift() {
            btnOpenGift.classList.add('hidden');
            qrContainer.classList.remove('hidden');
            qrContainer.classList.add('flex');
            
            setTimeout(() => {
                qrContainer.classList.remove('opacity-0', 'translate-y-4');
                qrContainer.classList.add('opacity-100', 'translate-y-0');
                fireConfetti();
            }, 50);
        }
    
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
      
<audio id="bgMusic" loop="">
<source src="https://assets.mixkit.co/music/preview/mixkit-romantic-piano-134.mp3" type="audio/mpeg"/>
</audio>
<main className="relative w-full min-h-screen flex items-center justify-center p-4">

<section className="flex flex-col items-center justify-center text-center w-full max-w-md mx-auto transition-all duration-700 ease-in-out transform opacity-100 scale-100" id="puzzle-page">
<div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-10 rounded-3xl shadow-xl shadow-rose-100/50 w-full relative">
<div className="mx-auto bg-rose-100/50 w-16 h-16 flex items-center justify-center rounded-full mb-6 shadow-sm border border-rose-50">
<iconify-icon className="text-rose-500" height="32" icon="solar:lock-password-linear" width="32"></iconify-icon>
</div>
<h2 className="text-2xl text-slate-800 mb-2 tracking-tight font-medium">Verifikasi Dulu Ya!</h2>
<p className="text-sm text-slate-600 mb-8 font-light leading-relaxed">
                    Selesaikan teka-teki matematika ini untuk membuka kejutanmu:<br/><br/>
<span className="font-normal text-rose-600 bg-rose-50/80 px-4 py-2 rounded-xl inline-block border border-rose-200/50 shadow-sm mt-2">
                        Tanggal Lahir + Bulan Lahir + Tahun Lahir = ?
                    </span>
</p>
<div className="relative w-full mb-6">
<input className="w-full bg-white/70 border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 rounded-2xl px-5 py-3 md:py-4 text-center text-lg font-normal text-slate-700 outline-none transition-all shadow-inner placeholder:text-slate-400 placeholder:font-light placeholder:text-sm" id="puzzle-input" onkeypress="if(event.key === 'Enter') checkPuzzle()" placeholder="Masukkan hasil..." type="number"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 md:py-4 bg-rose-400 text-white rounded-2xl font-light text-base transition-all hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-300/50 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-rose-50" onclick="checkPuzzle()">
                    Buka Gembok
                    <iconify-icon height="20" icon="solar:key-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
</section>

<section className="hidden flex-col items-center justify-center text-center w-full max-w-2xl mx-auto transition-all duration-1000 ease-in-out transform opacity-0 scale-95" id="landing-page">
<div className="flex gap-6 mb-10">
<button className="animate-bounce hover:scale-110 transition-transform focus:outline-none" onclick="showSurprise('Balon merah muda ini berisi semua rasa rinduku padamu! 🎈')" style={{animationDelay: '0s'}}>
<iconify-icon className="text-rose-400 drop-shadow-sm" height="48" icon="solar:heart-linear" width="48"></iconify-icon>
</button>
<button className="animate-bounce hover:scale-110 transition-transform focus:outline-none" onclick="showSurprise('Balon ungu ini menyimpan harapan terbaikku untuk masa depanmu! ✨')" style={{animationDelay: '0.2s'}}>
<iconify-icon className="text-fuchsia-400 drop-shadow-sm" height="56" icon="solar:stars-linear" width="56"></iconify-icon>
</button>
<button className="animate-bounce hover:scale-110 transition-transform focus:outline-none" onclick="showSurprise('Balon biru ini mewakili betapa tenangnya diriku saat bersamamu. 💙')" style={{animationDelay: '0.4s'}}>
<iconify-icon className="text-sky-400 drop-shadow-sm" height="48" icon="solar:star-linear" width="48"></iconify-icon>
</button>
</div>
<div className="relative bg-white/40 backdrop-blur-md border border-white/60 p-10 rounded-3xl shadow-xl shadow-rose-100/50 w-full">
<h2 className="text-base uppercase tracking-[0.3em] text-rose-500 font-normal mb-3">Spesial Untukmu</h2>
<h1 className="text-5xl md:text-6xl text-slate-800 mb-4 tracking-tight drop-shadow-sm" style={{fontFamily: '\'Dancing Script\', cursive'}}>
                    Happy 19th Birthday<br/>
<span className="text-rose-500">Elvira</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed font-light">Selamat bertambah usia, sayang. Ada sebuah kejutan kecil yang sudah kusiapkan khusus untuk hari spesialmu ini.</p>
<button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-rose-400 text-white rounded-full font-light text-lg overflow-hidden transition-all hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-300/50 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-rose-50" onclick="startJourney()">
<span className="relative z-10 flex items-center gap-2">
                        Buka Kejutannya
                        <iconify-icon className="group-hover:animate-ping" height="20" icon="solar:heart-linear" width="20"></iconify-icon>
</span>
</button>
</div>
</section>

<section className="hidden flex-col items-center justify-center w-full max-w-2xl mx-auto transition-all duration-1000 ease-in-out opacity-0 translate-y-10" id="message-page">
<div className="bg-white/60 backdrop-blur-lg border border-white/80 p-8 md:p-12 rounded-3xl shadow-2xl shadow-purple-100/50 w-full relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-rose-200/50 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-sky-200/50 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-rose-400 mb-4 inline-block" height="32" icon="solar:stars-linear" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl text-slate-800 mb-6 tracking-tight" style={{fontFamily: '\'Dancing Script\', cursive'}}>Teruntuk Kesayanganku, Elvira,</h2>
<div className="min-h-[160px] mb-8 text-left border-l-4 border-rose-300 pl-5 py-3 bg-white/40 rounded-r-2xl">
<p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal" id="typed-text" style={{fontFamily: '\'Dancing Script\', cursive'}}></p>
</div>
<div className="hidden grid-cols-1 sm:grid-cols-3 gap-4 mb-10 transition-all duration-1000 opacity-0 translate-y-4" id="memories-section">
<div className="aspect-square rounded-2xl overflow-hidden shadow-sm border-[6px] border-white/80 bg-white/40 rotate-[-2deg] hover:rotate-0 hover:scale-105 hover:shadow-md transition-all duration-300">
<img alt="Playful Arcade Portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5ed6a51-8d5d-4bf0-8dc0-411f09a00f38_800w.jpg"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden shadow-sm border-[6px] border-white/80 bg-white/40 rotate-[3deg] hover:rotate-0 hover:scale-105 hover:shadow-md transition-all duration-300">
<img alt="Woman with Bouquet" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/503f8b21-3d39-4369-be19-2b870909a7c5_800w.jpg"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden shadow-sm border-[6px] border-white/80 bg-white/40 rotate-[-1deg] hover:rotate-0 hover:scale-105 hover:shadow-md transition-all duration-300">
<img alt="Couple in Forest" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78d0016f-c80b-4f06-9118-d9ce554cb79d_800w.jpg"/>
</div>
</div>
<div className="my-10 flex flex-col items-center justify-center">
<p className="text-sm text-slate-500 mb-3 font-normal tracking-wide">Klik apinya untuk tiup lilin!</p>
<button className="p-5 rounded-full bg-white shadow-sm border border-rose-100 hover:scale-110 hover:shadow-md hover:bg-rose-50 transition-all duration-300 focus:outline-none flex items-center justify-center" id="cake-btn" onclick="blowCandle()">
<iconify-icon className="text-rose-500" height="40" icon="solar:fire-linear" width="40"></iconify-icon>
</button>
</div>
<div className="hidden flex-col items-center mt-8 pt-8 border-t border-slate-200/50 transition-all duration-700 opacity-0" id="gift-section">
<h3 className="text-xl text-slate-800 font-normal mb-5 tracking-tight">Ada satu hadiah lagi...</h3>
<button className="px-7 py-3 bg-slate-800 text-white rounded-full text-base font-light hover:bg-slate-700 transition-colors shadow-md flex items-center gap-2 focus:outline-none" id="btn-open-gift" onclick="openGift()">
<iconify-icon height="20" icon="solar:gift-linear" width="20"></iconify-icon>
                            Buka Hadiah Utama
                        </button>
<div className="hidden mt-6 flex-col items-center transition-all duration-1000 opacity-0 translate-y-4" id="qr-container">
<a className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer block relative" href="https://s.id/elviracantik" target="_blank">
<img alt="QR Code Hadiah" className="w-48 h-48 rounded-xl object-cover transition-opacity group-hover:opacity-60" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&amp;data=https://s.id/elviracantik"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-normal flex items-center gap-2 shadow-lg">
<iconify-icon height="16" icon="solar:link-minimalistic-linear" width="16"></iconify-icon> Buka Link
                                    </span>
</div>
</a>
<p className="text-base mt-5 text-slate-500 font-normal bg-white/60 px-5 py-2 rounded-full text-center shadow-sm border border-white">
                                Scan QR Code di atas<br/><span className="text-sm font-light text-slate-400">atau klik gambar untuk membuka link</span>
</p>
</div>
</div>
</div>
</div>
</section>

<div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md border border-rose-100 px-6 py-3 rounded-full shadow-xl shadow-rose-100/50 text-rose-600 text-base font-normal z-50 transition-all duration-300 opacity-0 translate-y-[-20px] pointer-events-none whitespace-nowrap" id="toast">
            Pesannya di sini
        </div>
</main>


    </>
  );
}
