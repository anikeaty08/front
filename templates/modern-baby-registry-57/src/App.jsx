import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function navigate(screenId) {
            document.querySelectorAll('section').forEach(el => {
                el.classList.add('hidden');
            });
            const target = document.getElementById(screenId);
            target.classList.remove('hidden');
            target.classList.add('fade-in');
            document.getElementById('app-content').scrollTo(0,0);
        }

        function processFiles() {
            const dropZone = document.querySelector('#screen-upload .group');
            const fileList = document.getElementById('file-list');
            const btn = document.getElementById('btn-continue');
            
            dropZone.innerHTML = `<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div><p class="text-sm font-medium mt-3 text-stone-500">Working magic...</p>`;
            
            setTimeout(() => {
                dropZone.classList.add('hidden');
                fileList.classList.remove('hidden');
                fileList.classList.add('fade-in');
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                btn.removeAttribute('disabled');
            }, 1200);
        }

        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = modal.querySelector('#modal-content');
            const backdrop = modal.querySelector('#modal-backdrop');

            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    content.classList.remove('translate-y-full');
                }, 10);
            } else {
                backdrop.classList.add('opacity-0');
                content.classList.add('translate-y-full');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 400);
            }
        }

        function submitFeedback() {
            toggleModal('modal-feedback');
            setTimeout(() => {
                navigate('screen-messages');
            }, 400);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="max-w-md mx-auto bg-[#FDFCF8] min-h-screen relative shadow-2xl overflow-hidden flex flex-col font-sans">

<header className="h-16 flex items-center justify-between px-6 bg-[#FDFCF8]/90 backdrop-blur-xl sticky top-0 z-40 border-b border-stone-100/50">
<div className="flex items-center gap-3">

<div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.4)]"></div>
<span className="text-xl font-semibold tracking-tighter text-stone-900">Kyn</span>
</div>
<div className="relative group cursor-pointer">
<img alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
</header>

<div className="flex-1 relative overflow-y-auto no-scrollbar pb-24" id="app-content">

<section className="p-6 flex flex-col h-full fade-in pt-8" id="screen-upload">
<div className="mb-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-[11px] font-bold uppercase tracking-wider text-red-600 mb-6">
                        Start Here
                    </span>
<h1 className="text-[40px] font-medium tracking-tight text-stone-900 mb-4 leading-[1.05]">Built by<br/>your village.</h1>
<p className="text-stone-500 text-[15px] leading-relaxed max-w-[95%]">Don't research alone. Upload your notes, screenshots, or spreadsheets, and we'll organize it for you.</p>
</div>

<div className="group relative border-2 border-dashed border-stone-200/80 rounded-3xl bg-white h-64 flex flex-col items-center justify-center gap-5 transition-all hover:border-red-300 hover:bg-red-50/10 cursor-pointer mb-8 shadow-sm hover:shadow-md" onclick="processFiles()">
<div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300">
<span className="iconify" data-icon="lucide:arrow-up" data-strokeWidth="2" data-width="24"></span>
</div>
<div className="text-center px-8">
<p className="text-base font-semibold text-stone-900">Tap to upload</p>
<p className="text-xs text-stone-400 mt-1">Accepts images, excel, notes</p>
</div>
</div>

<div className="flex-1 flex flex-col gap-3 hidden" id="file-list">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 pl-1">Sources</div>

<div className="flex items-center gap-4 p-4 pr-5 bg-white border border-stone-100 rounded-2xl shadow-sm">
<div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
<span className="iconify" data-icon="lucide:sheet" data-width="20"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-stone-900 truncate">Ali's Spreadsheet.xlsx</p>
<p className="text-[11px] text-stone-400">64 items found</p>
</div>
<div className="w-5 h-5 bg-stone-900 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
</div>

<div className="flex items-center gap-4 p-4 pr-5 bg-white border border-stone-100 rounded-2xl shadow-sm">
<div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
<span className="iconify" data-icon="lucide:image" data-width="20"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-stone-900 truncate">Screenshot_2024.png</p>
<p className="text-[11px] text-stone-400">12 items found</p>
</div>
<div className="w-5 h-5 bg-stone-900 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-red-500 hover:bg-red-600 text-white h-14 rounded-full text-[15px] font-medium flex items-center justify-center gap-2 transition-all opacity-50 cursor-not-allowed shadow-[0_8px_20px_-6px_rgba(239,68,68,0.4)]" id="btn-continue" onclick="navigate('screen-contributors')">
                        Create My Registry
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</section>

<section className="hidden fade-in pb-10" id="screen-contributors">

<div className="px-6 pt-6 pb-8">
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-1">Overview</p>
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Your Village</h2>
</div>
<div className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-900 shadow-sm">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
</div>

<div className="flex gap-3 overflow-x-auto no-scrollbar">
<div className="px-5 py-3 bg-white rounded-2xl border border-stone-100 shadow-sm min-w-[100px]">
<div className="text-2xl font-semibold text-stone-900">198</div>
<div className="text-[11px] font-medium text-stone-400">Products</div>
</div>
<div className="px-5 py-3 bg-white rounded-2xl border border-stone-100 shadow-sm min-w-[100px]">
<div className="text-2xl font-semibold text-stone-900">4</div>
<div className="text-[11px] font-medium text-stone-400">Friends</div>
</div>
<div className="px-5 py-3 bg-red-50 rounded-2xl border border-red-100 shadow-sm min-w-[100px]">
<div className="text-2xl font-semibold text-red-600">85%</div>
<div className="text-[11px] font-medium text-red-400">Match</div>
</div>
</div>
</div>

<div className="pl-6">
<div className="flex items-center justify-between pr-6 mb-5">
<h3 className="text-lg font-medium text-stone-900">Most Loved</h3>
<button className="text-xs font-semibold text-red-500 hover:text-red-600">View all</button>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 pr-6">

<div className="min-w-[200px] group cursor-pointer" onclick="navigate('screen-category')">
<div className="aspect-[3/4] rounded-3xl mb-4 relative overflow-hidden shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 text-white">
<p className="text-[10px] font-medium opacity-90 uppercase tracking-wide">Stroller</p>
<p className="text-base font-medium leading-tight mt-0.5">Stokke Xplory</p>
</div>
<div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 border border-white/20">
<span className="iconify text-white" data-fill="currentColor" data-icon="lucide:heart" data-width="12"></span>
<span className="text-[10px] font-bold text-white">2</span>
</div>
</div>
</div>

<div className="min-w-[200px] group cursor-pointer">
<div className="aspect-[3/4] rounded-3xl mb-4 relative overflow-hidden shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596178065849-d758c5cb6379?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 text-white">
<p className="text-[10px] font-medium opacity-90 uppercase tracking-wide">Carrier</p>
<p className="text-base font-medium leading-tight mt-0.5">Artipoppe</p>
</div>
<div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 border border-white/20">
<span className="iconify text-white" data-fill="currentColor" data-icon="lucide:heart" data-width="12"></span>
<span className="text-[10px] font-bold text-white">1</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-2 px-6">
<h3 className="text-lg font-medium text-stone-900 mb-5">By Friend</h3>
<div className="space-y-3">

<div className="flex items-center gap-4 p-4 rounded-3xl bg-white shadow-sm border border-stone-100 hover:border-red-100 transition-colors cursor-pointer">
<div className="relative">
<img className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div className="absolute -bottom-1 -right-1 bg-stone-100 border-2 border-white rounded-full p-1 text-[10px]">🌿</div>
</div>
<div className="flex-1">
<h4 className="text-[15px] font-semibold text-stone-900">Ali Smith</h4>
<p className="text-xs text-stone-500 mt-0.5">Focus: Minimalist &amp; Eco</p>
</div>
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-50 text-stone-400">
<span className="iconify" data-icon="lucide:chevron-right" data-width="18"></span>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-3xl bg-white shadow-sm border border-stone-100 hover:border-red-100 transition-colors cursor-pointer">
<div className="relative">
<img className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div className="absolute -bottom-1 -right-1 bg-stone-100 border-2 border-white rounded-full p-1 text-[10px]">✨</div>
</div>
<div className="flex-1">
<h4 className="text-[15px] font-semibold text-stone-900">Alanna Miller</h4>
<p className="text-xs text-stone-500 mt-0.5">Focus: Aesthetic &amp; Premium</p>
</div>
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-50 text-stone-400">
<span className="iconify" data-icon="lucide:chevron-right" data-width="18"></span>
</div>
</div>
</div>
</div>
</section>

<section className="hidden fade-in relative min-h-full bg-stone-50" id="screen-category">
<div className="sticky top-0 z-20 bg-stone-50/90 backdrop-blur-md border-b border-stone-100 p-4 flex items-center justify-between">
<button className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-stone-200 shadow-sm text-stone-600 hover:scale-105 transition-transform" onclick="navigate('screen-contributors')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<h2 className="text-lg font-medium text-stone-900">Strollers</h2>
<button className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-stone-200 shadow-sm text-stone-600 hover:scale-105 transition-transform">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="18"></span>
</button>
</div>
<div className="p-4 space-y-6">

<div className="bg-stone-900 rounded-3xl p-5 flex items-center justify-between shadow-xl shadow-stone-900/10 text-white">
<div>
<p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">Decisions, decisions</p>
<p className="text-sm font-medium">Ask your village to help you choose.</p>
</div>
<button className="bg-white text-stone-900 text-xs font-bold px-5 py-3 rounded-full hover:bg-stone-100 transition-colors" onclick="toggleModal('modal-feedback')">
                            Ask Friends
                        </button>
</div>

<div className="bg-white rounded-[32px] p-3 shadow-sm border border-stone-100">
<div className="h-64 rounded-[24px] bg-stone-50 relative overflow-hidden group">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-stone-900 shadow-sm">$1,199</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-red-500">
<span className="iconify" data-fill="currentColor" data-icon="lucide:heart" data-width="16"></span>
</button>
</div>
<div className="px-3 pt-4 pb-2">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-0.5">Stokke</p>
<h3 className="text-xl font-medium text-stone-900">Xplory X</h3>
</div>
<div className="flex items-center gap-1">
<span className="iconify text-red-500" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="text-sm font-bold text-stone-900">4.9</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 bg-stone-50 px-3 py-1.5 rounded-full">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-[10px] font-semibold text-stone-500">Recommended by 2</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[32px] p-3 shadow-sm border border-stone-100">
<div className="h-64 rounded-[24px] bg-stone-50 relative overflow-hidden group">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565538420875-9e6631f47285?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-stone-900 shadow-sm">$999</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-300 hover:text-red-500">
<span className="iconify" data-icon="lucide:heart" data-width="16"></span>
</button>
</div>
<div className="px-3 pt-4 pb-2">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-0.5">UPPAbaby</p>
<h3 className="text-xl font-medium text-stone-900">Vista V2</h3>
</div>
<div className="flex items-center gap-1">
<span className="iconify text-stone-300" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="text-sm font-bold text-stone-900">4.8</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 bg-stone-50 px-3 py-1.5 rounded-full">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-[10px] font-semibold text-stone-500">Recommended by 1</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden fade-in h-full flex flex-col bg-[#FDFCF8]" id="screen-messages">
<div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-[#FDFCF8] sticky top-0 z-20">
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors" onclick="navigate('screen-category')">
<span className="iconify text-stone-500" data-icon="lucide:chevron-left" data-width="24"></span>
</button>
<div>
<h2 className="text-base font-semibold text-stone-900">Kyn Chat</h2>
<p className="text-[10px] text-green-600 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                            </p>
</div>
</div>
<div className="flex -space-x-2">
<img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">
<div className="text-center text-[10px] text-stone-300 font-bold uppercase tracking-widest my-4">Today</div>

<div className="flex flex-col items-end gap-2">
<div className="bg-red-500 text-white rounded-[20px] rounded-tr-sm px-5 py-3.5 max-w-[85%] shadow-md shadow-red-500/10">
<p className="text-sm leading-relaxed">Hey Ali! Does the Stokke fit in a small trunk? Trying to decide vs UPPAbaby.</p>
</div>

<div className="bg-white border border-stone-100 rounded-2xl p-3 max-w-[85%] shadow-sm w-full">
<div className="flex items-center gap-3 mb-2 pb-2 border-b border-stone-50">
<img className="w-10 h-10 rounded-lg object-cover bg-stone-100" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-stone-900 truncate">Stokke Xplory X</p>
<p className="text-[10px] text-stone-500 font-medium">$1,199</p>
</div>
</div>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-lg object-cover bg-stone-100" src="https://images.unsplash.com/photo-1565538420875-9e6631f47285?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-stone-900 truncate">UPPAbaby Vista V2</p>
<p className="text-[10px] text-stone-500 font-medium">$999</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-start gap-2">
<div className="flex items-end gap-2">
<img className="w-8 h-8 rounded-full border border-white object-cover mb-1 shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="bg-white border border-stone-100 text-stone-700 rounded-[20px] rounded-tl-sm px-5 py-3.5 shadow-sm max-w-[85%]">
<p className="text-sm leading-relaxed">It detaches pretty easily! UPPAbaby is definitely bigger when folded. I'd go Stokke for city life! ❤️</p>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-stone-50 pb-8 sticky bottom-0 z-30">
<div className="flex items-center gap-3 bg-stone-50 rounded-full px-5 py-3.5 border border-stone-100 focus-within:border-red-300 focus-within:ring-2 focus-within:ring-red-100 transition-all">
<button className="text-stone-400 hover:text-stone-600">
<span className="iconify" data-icon="lucide:plus-circle" data-width="20"></span>
</button>
<input className="bg-transparent flex-1 text-sm outline-none text-stone-900 placeholder:text-stone-400" placeholder="Type a message..." type="text"/>
<button className="text-red-500 hover:text-red-600 transition-colors">
<span className="iconify" data-icon="lucide:send-horizontal" data-width="20"></span>
</button>
</div>
</div>
</section>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-feedback">

<div className="absolute inset-0 bg-stone-800/40 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop" onclick="toggleModal('modal-feedback')"></div>

<div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] p-6 pb-10 shadow-2xl transform translate-y-full transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) max-w-md mx-auto" id="modal-content">
<div className="w-12 h-1.5 bg-stone-100 rounded-full mx-auto mb-8"></div>
<h3 className="text-2xl font-medium text-stone-900 mb-2">Polling Time</h3>
<p className="text-sm text-stone-500 mb-8">Select items to create a poll for your group.</p>

<div className="space-y-4 mb-8">
<label className="flex items-center gap-4 p-3 border border-stone-100 rounded-2xl cursor-pointer has-[:checked]:border-red-500 has-[:checked]:bg-red-50/30 transition-all group shadow-sm">
<input checked="" className="kyn-checkbox w-6 h-6 rounded-lg border-stone-300 focus:ring-red-500 text-red-500 transition-all" type="checkbox"/>
<img className="w-12 h-12 rounded-xl object-cover bg-stone-100" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div className="flex-1">
<span className="text-sm font-semibold text-stone-900 block">Stokke Xplory X</span>
<span className="text-xs text-stone-500">$1,199</span>
</div>
</label>
<label className="flex items-center gap-4 p-3 border border-stone-100 rounded-2xl cursor-pointer has-[:checked]:border-red-500 has-[:checked]:bg-red-50/30 transition-all group shadow-sm">
<input checked="" className="kyn-checkbox w-6 h-6 rounded-lg border-stone-300 focus:ring-red-500 text-red-500 transition-all" type="checkbox"/>
<img className="w-12 h-12 rounded-xl object-cover bg-stone-100" src="https://images.unsplash.com/photo-1565538420875-9e6631f47285?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div className="flex-1">
<span className="text-sm font-semibold text-stone-900 block">UPPAbaby Vista</span>
<span className="text-xs text-stone-500">$999</span>
</div>
</label>
</div>

<div className="mb-8">
<p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Who to ask?</p>
<div className="flex gap-2 overflow-x-auto no-scrollbar py-1">

<label className="relative cursor-pointer group w-16 text-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-14 h-14 mx-auto rounded-full border-2 border-transparent peer-checked:border-red-500 p-0.5 transition-all">
<img className="w-full h-full rounded-full object-cover opacity-60 peer-checked:opacity-100 grayscale peer-checked:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<span className="text-[10px] mt-1 font-semibold text-stone-900 block">Ali</span>
</label>

<label className="relative cursor-pointer group w-16 text-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-14 h-14 mx-auto rounded-full border-2 border-transparent peer-checked:border-red-500 p-0.5 transition-all">
<img className="w-full h-full rounded-full object-cover opacity-60 peer-checked:opacity-100 grayscale peer-checked:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<span className="text-[10px] mt-1 font-semibold text-stone-900 block">Alanna</span>
</label>

<label className="relative cursor-pointer group w-16 text-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-14 h-14 mx-auto rounded-full border-2 border-transparent peer-checked:border-red-500 p-0.5 transition-all">
<img className="w-full h-full rounded-full object-cover opacity-60 peer-checked:opacity-100 grayscale peer-checked:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<span className="text-[10px] mt-1 font-semibold text-stone-900 block">Sarah</span>
</label>
</div>
</div>
<button className="w-full bg-red-500 text-white h-14 rounded-full font-bold text-[15px] hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20" onclick="submitFeedback()">
                    Create Poll
                </button>
</div>
</div>
</main>


    </>
  );
}
