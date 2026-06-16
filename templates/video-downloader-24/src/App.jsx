import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const input = document.getElementById('url-input');
            const btn = document.getElementById('download-btn');
            const btnIcon = document.getElementById('btn-icon');
            const btnText = document.getElementById('btn-text');
            
            const successState = document.getElementById('success-state');
            const errorState = document.getElementById('error-state');
            const errorText = document.getElementById('error-text');
            
            const videoTitle = document.getElementById('video-title');
            const downloadLink = document.getElementById('download-link');
            const platformBadge = document.getElementById('platform-badge');

            let isProcessing = false;

            // Platform Detection Logic
            function detectPlatform(url) {
                if (/tiktok\.com|vm\.tiktok\.com|vt\.tiktok\.com/i.test(url)) return 'TikTok';
                if (/instagram\.com\/(?:reel|p)\//i.test(url)) return 'Instagram';
                if (/youtube\.com\/shorts\/|youtu\.be/i.test(url)) return 'YouTube';
                return null;
            }

            // Input Validation & UI
            input.addEventListener('input', () => {
                if (isProcessing) return;
                
                if (input.value.trim() === '') {
                    btn.disabled = true;
                    btn.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            });

            // Main Action
            btn.addEventListener('click', async () => {
                if (isProcessing) return;

                const rawUrl = input.value;
                // Basic sanitization
                const url = rawUrl.trim().replace(/[<>]/g, '');

                if (!url) {
                    showError("Lütfen bir bağlantı girin.");
                    return;
                }

                const platform = detectPlatform(url);
                if (!platform) {
                    showError("Geçersiz link. Lütfen geçerli bir TikTok, Instagram veya YouTube linki girin.");
                    return;
                }

                // UI Loading State (Debounce & Protection)
                isProcessing = true;
                hideAllStates();
                
                input.disabled = true;
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                
                // Change button to loading state
                btnIcon.setAttribute('icon', 'solar:spinner-linear');
                btnIcon.classList.add('animate-spin');
                btnText.textContent = "İndiriliyor...";

                try {
                    let videoData = null;

                    // API Routing Logic
                    if (platform === 'TikTok') {
                        // Real TikTok Free API
                        const formData = new FormData();
                        formData.append('url', url);
                        const response = await fetch("https://www.tikwm.com/api/", {
                            method: 'POST',
                            body: formData
                        });
                        const data = await response.json();
                        
                        if (data.code === 0 && data.data) {
                            let videoUrl = data.data.play;
                            if (!videoUrl.startsWith('http')) videoUrl = 'https://www.tikwm.com' + videoUrl;
                            videoData = {
                                title: data.data.title || 'TikTok Videosu',
                                url: videoUrl
                            };
                        }
                    } else {
                        // Mock API for Instagram/YouTube (Replace with real endpoints later)
                        // Simulating a network request delay
                        await new Promise(resolve => setTimeout(resolve, 1500));
                        videoData = {
                            title: `${platform} İçeriği`,
                            url: "#" // Real download link goes here
                        };
                    }

                    if (videoData) {
                        showSuccess(videoData.title, videoData.url, platform);
                    } else {
                        showError("Video bulunamadı veya hesap gizli.");
                    }

                } catch (err) {
                    showError("Sunucuya bağlanırken bir hata oluştu.");
                } finally {
                    // Reset UI
                    isProcessing = false;
                    input.disabled = false;
                    
                    // Reset Button
                    btnIcon.setAttribute('icon', 'solar:download-minimalistic-linear');
                    btnIcon.classList.remove('animate-spin');
                    btnText.textContent = "İndir";
                    
                    if (input.value.trim() !== '') {
                        btn.disabled = false;
                        btn.classList.remove('opacity-50', 'cursor-not-allowed');
                    }
                }
            });

            function showError(msg) {
                hideAllStates();
                errorText.textContent = msg;
                errorState.classList.remove('hidden');
                errorState.classList.add('flex');
                // Smooth reveal
                setTimeout(() => {
                    errorState.classList.remove('opacity-0', 'translate-y-2');
                    errorState.classList.add('opacity-100', 'translate-y-0');
                }, 10);
            }

            function showSuccess(title, url, platform) {
                hideAllStates();
                videoTitle.textContent = title;
                downloadLink.href = url;
                platformBadge.textContent = platform;
                
                successState.classList.remove('hidden');
                successState.classList.add('flex');
                // Smooth reveal
                setTimeout(() => {
                    successState.classList.remove('opacity-0', 'translate-y-2');
                    successState.classList.add('opacity-100', 'translate-y-0');
                }, 10);
            }

            function hideAllStates() {
                // Hide Error
                errorState.classList.add('opacity-0', 'translate-y-2');
                errorState.classList.remove('opacity-100', 'translate-y-0');
                setTimeout(() => {
                    if(!errorState.classList.contains('opacity-100')) {
                        errorState.classList.add('hidden');
                        errorState.classList.remove('flex');
                    }
                }, 300); // match transition duration

                // Hide Success
                successState.classList.add('opacity-0', 'translate-y-2');
                successState.classList.remove('opacity-100', 'translate-y-0');
                setTimeout(() => {
                    if(!successState.classList.contains('opacity-100')) {
                        successState.classList.add('hidden');
                        successState.classList.remove('flex');
                    }
                }, 300);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-neutral-50/80 border-neutral-200/50">
<div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight flex items-center gap-2 text-neutral-900" href="#">
<div className="w-6 h-6 rounded-md flex items-center justify-center text-white bg-purple-950">
<iconify-icon className="text-sm" icon="solar:play-linear"></iconify-icon>
</div>
                Scly
            </a>
<nav className="hidden sm:flex gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#">Ana Sayfa</a>
<a className="transition-colors hover:text-neutral-900" href="#nasil-calisir">Nasıl Çalışır</a>
<a className="transition-colors hover:text-neutral-900" href="#sss">SSS</a>
</nav>
<button className="sm:hidden text-neutral-500">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<div className="w-full border-b py-4 flex justify-center hidden sm:flex border-neutral-200/50 bg-neutral-100/20">
<div className="w-[728px] h-[90px] border rounded flex items-center justify-center text-xs font-medium bg-neutral-100 border-neutral-200/60 text-neutral-400">
            [Google AdSense / Banner Reklam Alanı - Üst]
        </div>
</div>

<main className="flex-1 flex flex-col pt-20 pr-6 pb-16 pl-6 items-center justify-center">
<div className="max-w-2xl w-full text-center">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5 text-neutral-900">
                Tüm Sosyal Medya Videolarını Kolayca İndir
            </h1>
<p className="text-base sm:text-lg text-neutral-500 mb-10 max-w-lg mx-auto leading-relaxed">
                TikTok, Instagram Reels veya YouTube Shorts. Linki yapıştır, en yüksek kalitede cihazına kaydet.
            </p>

<div className="relative w-full max-w-xl mx-auto group">
<div className="absolute inset-y-0 left-5 flex items-center pointer-events-none transition-colors group-focus-within:text-indigo-500 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon>
</div>
<input className="w-full pl-14 pr-36 py-4 rounded-full border text-sm sm:text-base shadow-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed border-neutral-200/80 bg-white" id="url-input" placeholder="TikTok, Instagram veya YouTube linki yapıştır..." type="url"/>
<button className="absolute right-2 top-2 bottom-2 rounded-full px-6 text-sm font-medium transition-all flex items-center gap-2 active:scale-95 shadow-sm opacity-50 cursor-not-allowed disabled:active:scale-100 disabled:hover:bg-purple-50 text-white hover:bg-purple-900 bg-purple-950" disabled="" id="download-btn">
<iconify-icon className="text-lg" icon="solar:download-minimalistic-linear" id="btn-icon"></iconify-icon>
<span className="hidden sm:inline" id="btn-text">İndir</span>
</button>
</div>

<div className="hidden mt-8 max-w-xl mx-auto rounded-2xl border p-4 shadow-sm items-center gap-3 backdrop-blur-sm text-left transition-all duration-300 opacity-0 translate-y-2 border-red-200/60 bg-red-50/30" id="error-state">
<iconify-icon className="text-xl text-red-500 shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-red-600" id="error-text">Lütfen geçerli bir link girin.</span>
</div>

<div className="hidden mt-8 max-w-xl mx-auto rounded-2xl border p-5 shadow-sm flex-col gap-5 text-left backdrop-blur-sm transition-all duration-300 opacity-0 translate-y-2 border-green-200/60 bg-green-50/10" id="success-state">
<div className="flex items-center gap-4 w-full">
<div className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center border bg-green-50/40 border-green-100/60">
<iconify-icon className="text-2xl text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-base font-semibold tracking-tight text-neutral-900">Video hazır!</h4>
<p className="text-sm mt-0.5 truncate text-neutral-600" id="video-title">video.mp4</p>
</div>
<div className="px-2.5 py-1 rounded-md border text-xs font-medium tracking-wide uppercase shrink-0 bg-neutral-100 border-neutral-200 text-neutral-700" id="platform-badge">
                        TIKTOK
                    </div>
</div>
<a className="w-full rounded-xl px-5 py-3.5 text-sm font-semibold transition-all flex items-center justify-center gap-2 bg-green-500 hover:scale-[0.99] active:scale-95 shadow-md shadow-green-500/10 text-white hover:bg-green-600" href="#" id="download-link" rel="noopener noreferrer" target="_blank">
                    Videoyu İndir
                    <iconify-icon className="text-lg" icon="solar:download-square-linear"></iconify-icon>
</a>
</div>
</div>
</main>

<div className="w-full border-t py-6 flex justify-center border-neutral-200/50 bg-neutral-100/20">
<div className="w-[300px] h-[250px] sm:w-[728px] sm:h-[90px] border rounded flex items-center justify-center text-xs font-medium text-center px-4 bg-neutral-100 border-neutral-200/60 text-neutral-400">
            [Google AdSense / Banner Reklam Alanı - Alt]
        </div>
</div>

<section className="border-y py-20 bg-white border-neutral-100">
<div className="mx-auto max-w-5xl px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col">
<div className="flex w-10 h-10 border rounded-xl mb-4 items-center justify-center border-indigo-100/50 text-slate-200 bg-slate-400">
<iconify-icon className="text-xl" icon="solar:play-stream-linear" style={{color: 'rgb(10, 10, 10)'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2 text-neutral-900">Çoklu Platform</h3>
<p className="text-xs text-neutral-500 leading-relaxed">TikTok, Instagram ve YouTube videolarını tek bir yerden indirin.</p>
</div>
<div className="flex flex-col">
<div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 border border-indigo-100/50 bg-slate-400 text-slate-200">
<iconify-icon className="text-xl" icon="solar:bolt-linear" style={{color: 'rgb(10, 10, 10)'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2 text-neutral-900">Işık Hızında</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Gelişmiş altyapımız sayesinde videolar saniyeler içinde indirmeye hazır olur.</p>
</div>
<div className="flex flex-col">
<div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 border border-indigo-100/50 bg-slate-400 text-slate-200">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{color: 'rgb(10, 10, 10)'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2 text-neutral-900">Güvenli İşlem</h3>
<p className="leading-relaxed text-xs text-neutral-500">Verileriniz korunur, kötü niyetli yazılımlar barındırmaz, tamamen güvenlidir.</p>
</div>
<div className="flex flex-col">
<div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 border border-indigo-100/50 bg-slate-400 text-slate-200">
<iconify-icon className="text-xl" icon="solar:devices-linear" style={{color: 'rgb(10, 10, 10)'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2 text-neutral-900">Tüm Cihazlar</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Telefon, tablet veya bilgisayar fark etmeksizin her tarayıcıda kusursuz çalışır.</p>
</div>
</div>
</div>
</section>

<footer className="mt-auto py-8 bg-neutral-50">
<div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-neutral-900">
<iconify-icon className="text-sm" icon="solar:play-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Scly</span>
</div>
<div className="text-xs text-neutral-400">
                © 2023 Scly. Tüm hakları saklıdır.
            </div>
<div className="flex gap-6 text-xs font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#">Gizlilik Politikası</a>
<a className="transition-colors hover:text-neutral-900" href="#">İletişim</a>
</div>
</div>
</footer>



    </>
  );
}
