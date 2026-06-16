import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const list1Input = document.getElementById('list1');
            const list2Input = document.getElementById('list2');
            const resultDisplay = document.getElementById('result');
            const hintDisplay = document.getElementById('hint');
            const generateBtn = document.getElementById('generateBtn');

            // Sync Modal Elements
            const syncModal = document.getElementById('syncModal');
            const syncModalContent = document.getElementById('syncModalContent');
            const openSyncBtn = document.getElementById('openSyncBtn');
            const closeSyncBtn = document.getElementById('closeSyncBtn');
            const copyLinkBtn = document.getElementById('copyLinkBtn');
            const copyLinkText = document.getElementById('copyLinkText');
            const qrCodeImage = document.getElementById('qrCodeImage');

            const defaultList1 = "超级\n赛博\n量子\n暗影\n虚空\n核心\n幻影\n星际";
            const defaultList2 = "风暴\n朋克\n引擎\n协议\n矩阵\n猎手\n边境\n漫游者";

            // State management (Hash + LocalStorage)
            const updateState = () => {
                const data = { l1: list1Input.value, l2: list2Input.value };
                
                // Update LocalStorage
                localStorage.setItem('wc_list1', data.l1);
                localStorage.setItem('wc_list2', data.l2);
                
                // Update URL Hash for sharing/syncing
                try {
                    const encoded = btoa(encodeURIComponent(JSON.stringify(data)));
                    history.replaceState(null, null, '#' + encoded);
                } catch(e) {
                    console.error("Failed to encode state for URL");
                }
            };

            const initializeData = () => {
                // 1. Prioritize URL hash (Incoming sync from another device)
                if (window.location.hash && window.location.hash.length > 1) {
                    try {
                        const decoded = JSON.parse(decodeURIComponent(atob(window.location.hash.substring(1))));
                        if (decoded.l1 !== undefined && decoded.l2 !== undefined) {
                            list1Input.value = decoded.l1;
                            list2Input.value = decoded.l2;
                            updateState(); // Save synced data to local
                            return;
                        }
                    } catch(e) {
                        // Invalid hash, fallback to local storage
                    }
                }
                
                // 2. Fallback to LocalStorage or Defaults
                list1Input.value = localStorage.getItem('wc_list1') !== null ? localStorage.getItem('wc_list1') : defaultList1;
                list2Input.value = localStorage.getItem('wc_list2') !== null ? localStorage.getItem('wc_list2') : defaultList2;
                
                // 3. Push to URL hash to ensure current state is ready to share
                updateState();
            };

            initializeData();

            // Listeners for text input
            list1Input.addEventListener('input', updateState);
            list2Input.addEventListener('input', updateState);

            const parseList = (text) => {
                return text.split(/[\n,，]+/).map(word => word.trim()).filter(word => word.length > 0);
            };

            const generateCombination = () => {
                const list1 = parseList(list1Input.value);
                const list2 = parseList(list2Input.value);

                if (list1.length === 0 || list2.length === 0) {
                    resultDisplay.classList.add('opacity-0', 'scale-95', 'translate-y-4');
                    setTimeout(() => {
                        resultDisplay.textContent = "Oops";
                        resultDisplay.classList.remove('text-transparent', 'bg-clip-text', 'bg-gradient-to-b', 'from-white', 'to-zinc-500');
                        resultDisplay.classList.add('text-zinc-700');
                        hintDisplay.textContent = "请确保左右两边的词库中都至少有一个词汇。";
                        hintDisplay.classList.replace('text-zinc-500', 'text-red-400/80');
                        resultDisplay.classList.remove('opacity-0', 'scale-95', 'translate-y-4');
                    }, 150);
                    return;
                }

                resultDisplay.classList.remove('text-zinc-700');
                resultDisplay.classList.add('text-transparent', 'bg-clip-text', 'bg-gradient-to-b', 'from-white', 'to-zinc-500');
                hintDisplay.classList.replace('text-red-400/80', 'text-zinc-500');
                
                const randomWord1 = list1[Math.floor(Math.random() * list1.length)];
                const randomWord2 = list2[Math.floor(Math.random() * list2.length)];

                resultDisplay.classList.add('opacity-0', 'scale-95', 'translate-y-2');
                const icon = generateBtn.querySelector('iconify-icon');
                icon.classList.add('animate-spin');

                setTimeout(() => {
                    resultDisplay.textContent = randomWord1 + randomWord2;
                    hintDisplay.textContent = "Generated Successfully";
                    resultDisplay.classList.remove('opacity-0', 'scale-95', 'translate-y-2');
                    setTimeout(() => { icon.classList.remove('animate-spin'); }, 300);
                }, 150);
            };

            generateBtn.addEventListener('click', generateCombination);

            document.addEventListener('keydown', (e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                    e.preventDefault();
                    generateCombination();
                }
            });

            // Sync Modal Logic
            const openModal = () => {
                // Ensure state is updated in URL before generating QR
                updateState();
                qrCodeImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=0&data=' + encodeURIComponent(window.location.href);
                syncModal.classList.remove('opacity-0', 'pointer-events-none');
                syncModalContent.classList.remove('scale-95');
                syncModalContent.classList.add('scale-100');
            };

            const closeModal = () => {
                syncModal.classList.add('opacity-0', 'pointer-events-none');
                syncModalContent.classList.remove('scale-100');
                syncModalContent.classList.add('scale-95');
            };

            openSyncBtn.addEventListener('click', openModal);
            closeSyncBtn.addEventListener('click', closeModal);
            syncModal.addEventListener('click', (e) => {
                if (e.target === syncModal) closeModal();
            });

            copyLinkBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    copyLinkText.textContent = 'Link Copied!';
                    copyLinkBtn.classList.add('bg-zinc-700', 'text-white', 'border-zinc-600');
                    setTimeout(() => { 
                        copyLinkText.textContent = 'Copy Sync Link'; 
                        copyLinkBtn.classList.remove('bg-zinc-700', 'text-white', 'border-zinc-600');
                    }, 2000);
                });
            });

            setTimeout(generateCombination, 100);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full max-w-5xl flex justify-between items-center mb-8 md:mb-16">
<div className="text-xl font-medium tracking-tighter flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-950 flex items-center justify-center font-semibold text-xs tracking-tighter shadow-sm">
                WC
            </div>
<span className="text-zinc-200">WordCombiner</span>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-zinc-300 tracking-wide border border-zinc-800/60 bg-zinc-900/50 hover:bg-zinc-800/80 px-4 py-2 rounded-full flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-[#09090b]" id="openSyncBtn">
<iconify-icon className="text-base" icon="solar:smartphone-rotate-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline">Sync Devices</span>
<span className="sm:hidden">Sync</span>
</button>
<div className="text-xs font-medium text-zinc-500 tracking-wide border border-zinc-800/60 bg-zinc-900/30 px-3 py-1.5 rounded-full hidden md:flex items-center gap-2">
<iconify-icon icon="solar:keyboard-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Press Cmd/Ctrl + Enter to generate</span>
</div>
</div>
</header>
<main className="w-full max-w-5xl flex flex-col gap-6 md:gap-10 flex-grow">

<section className="flex flex-col items-center justify-center py-24 sm:py-32 px-6 rounded-3xl border border-zinc-800/40 bg-gradient-to-b from-zinc-900/50 to-transparent relative overflow-hidden group shadow-2xl shadow-black/50">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 text-center break-all transition-all duration-300 transform" id="result">
                Ready
            </h1>
<p className="mt-6 text-sm font-medium text-zinc-500 tracking-wide transition-colors duration-300" id="hint">
                输入下方的词库并开始拼接
            </p>
<button className="mt-12 px-8 py-3.5 rounded-full bg-zinc-100 text-zinc-950 font-medium text-sm flex items-center gap-2.5 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-[#09090b]" id="generateBtn">
<iconify-icon className="text-lg" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                生成拼接词
            </button>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="flex flex-col gap-3 group/input">
<div className="flex justify-between items-center px-1">
<label className="text-sm font-medium text-zinc-400 group-focus-within/input:text-zinc-200 transition-colors flex items-center gap-2" htmlFor="list1">
<iconify-icon className="text-base" icon="solar:text-field-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        前置词库 (List A)
                    </label>
<span className="text-xs text-zinc-600 font-medium bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-800/50">词首</span>
</div>
<textarea className="w-full bg-[#0c0c0e] border border-zinc-800/60 rounded-2xl p-5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all resize-y shadow-inner shadow-black/20" id="list1" placeholder="例如输入：
超级
赛博
量子
星际
魔法

* 支持换行或英文逗号分隔" rows="8"></textarea>
</div>

<div className="flex flex-col gap-3 group/input">
<div className="flex justify-between items-center px-1">
<label className="text-sm font-medium text-zinc-400 group-focus-within/input:text-zinc-200 transition-colors flex items-center gap-2" htmlFor="list2">
<iconify-icon className="text-base" icon="solar:text-field-focus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        后置词库 (List B)
                    </label>
<span className="text-xs text-zinc-600 font-medium bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-800/50">词尾</span>
</div>
<textarea className="w-full bg-[#0c0c0e] border border-zinc-800/60 rounded-2xl p-5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all resize-y shadow-inner shadow-black/20" id="list2" placeholder="例如输入：
飞船
朋克
引擎
风暴
大陆

* 支持换行或英文逗号分隔" rows="8"></textarea>
</div>
</section>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300" id="syncModal">
<div className="bg-[#09090b] border border-zinc-800/60 p-6 md:p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4 transform scale-95 transition-transform duration-300" id="syncModalContent">
<div className="flex justify-between items-center mb-6">
<h3 className="text-zinc-100 font-medium text-base tracking-tight flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:devices-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Sync Across Devices
                </h3>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none" id="closeSyncBtn">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="bg-white p-3 rounded-2xl mb-6 mx-auto w-fit flex items-center justify-center border-4 border-zinc-800">
<img alt="QR Code" className="w-44 h-44 object-contain" id="qrCodeImage" src=""/>
</div>
<p className="text-xs text-zinc-400 text-center mb-6 leading-relaxed px-2">
                Scan this QR code with your mobile device to open and sync your current word lists. 
                <span className="block mt-2 text-zinc-500">Modifying on mobile? Copy the link from your phone and open it here.</span>
</p>
<button className="w-full py-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 text-zinc-200 text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-zinc-700/50 focus:outline-none" id="copyLinkBtn">
<iconify-icon className="text-base" icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span id="copyLinkText">Copy Sync Link</span>
</button>
</div>
</div>


    </>
  );
}
