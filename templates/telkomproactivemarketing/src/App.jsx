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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const interceptionData = [
            { target: 'Vodacom', color: '#ff0000', deployed: true, img1: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&h=1700&fit=crop', img2: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&h=1700&fit=crop' },
            { target: 'MTN', color: '#ffcc00', deployed: false, img1: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&h=1700&fit=crop', img2: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&h=1700&fit=crop' },
            { target: 'Cell C', color: '#ff6600', deployed: false, img1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=1700&fit=crop', img2: 'https://images.unsplash.com/photo-1533022136015-a2f0263f3ce0?q=80&w=800&h=1700&fit=crop' },
            { target: 'Rain', color: '#00e5ff', deployed: false, img1: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=800&h=1700&fit=crop', img2: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&h=1700&fit=crop' },
            { target: 'Afrihost', color: '#ff3366', deployed: false, img1: 'https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=800&h=1700&fit=crop', img2: 'https://images.unsplash.com/photo-1614680376593-902f74a936c7?q=80&w=800&h=1700&fit=crop' }
        ];

        (function injectCarouselData() {
            const trackData = document.getElementById('interception-track');
            interceptionData.forEach(slide => {
                const tag = slide.deployed ? `<span class="text-xs text-[#008CFF] bg-[#008CFF]/10 px-2 py-1 rounded border border-[#008CFF]/20">Deployed</span>` : '';
                trackData.innerHTML += `
                <div class="carousel-slide p-6 border-l-4" style="border-left-color: ${slide.color}">
                    <div class="flex justify-between items-start mb-4">
                        <span class="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style="background: ${slide.color}1A; color: ${slide.color}; border-color: ${slide.color}33">Target: ${slide.target}</span>
                        ${tag}
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <!-- Asset Box 1 -->
                        <div class="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner">
                            <img src="${slide.img1}" alt="Campaign Asset 1" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" />
                            <iconify-icon icon="solar:cloud-upload-linear" class="text-4xl text-white drop-shadow-md z-20 upload-icon"></iconify-icon>
                            <div class="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
                        </div>
                        <!-- Asset Box 2 -->
                        <div class="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner">
                            <img src="${slide.img2}" alt="Campaign Asset 2" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" />
                            <iconify-icon icon="solar:cloud-upload-linear" class="text-4xl text-white drop-shadow-md z-20 upload-icon"></iconify-icon>
                            <div class="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
                        </div>
                    </div>
                </div>
                `;
            });
        })();

        const sidebarBtns = document.querySelectorAll('.sidebar-btn');
        const viewSections = document.querySelectorAll('.view-section');
        
        const viewMeta = {
            'view-global': { title: 'Proactive Marketing Dashboard <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#73D100]/10 text-[#73D100] border border-[#73D100]/20">Live</span>', desc: 'Monitoring interceptions and campaign sentiment.' },
            'view-engagement': { title: 'Engagement Feeds', desc: 'Real-time social listening and conversation tracking.' },
            'view-portfolio': { title: 'Portfolio Architecture', desc: 'Alignment matrix for strategic messaging and targeted triggers.' }
        };

        const headerTitle = document.getElementById('header-title');
        const headerDesc = document.getElementById('header-desc');
        const titleContainer = document.getElementById('header-title-container');

        sidebarBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');

                sidebarBtns.forEach(b => {
                    b.classList.remove('bg-white/10', 'text-white', 'border-white/10', 'shadow-sm');
                    b.classList.add('text-slate-400', 'border-transparent');
                    const icon = b.querySelector('.icon-active');
                    if(icon) icon.classList.remove('text-[#008CFF]');
                });
                
                btn.classList.add('bg-white/10', 'text-white', 'border-white/10', 'shadow-sm');
                btn.classList.remove('text-slate-400', 'border-transparent');
                const activeIcon = btn.querySelector('.icon-active');
                if(activeIcon) activeIcon.classList.add('text-[#008CFF]');

                viewSections.forEach(sec => {
                    sec.classList.remove('active');
                });

                const targetView = document.getElementById(targetId);
                targetView.classList.add('active');
                
                if(viewMeta[targetId]) {
                    titleContainer.style.opacity = '0';
                    setTimeout(() => {
                        headerTitle.innerHTML = viewMeta[targetId].title;
                        headerDesc.innerHTML = viewMeta[targetId].desc;
                        titleContainer.style.opacity = '1';
                    }, 150);
                }
                
                document.getElementById('main-scroll').scrollTo({ top: 0, behavior: 'instant' });
            });
        });

        const modeToggle = document.getElementById('modeToggle');
        const togglePill = document.getElementById('togglePill');
        const btnAdmin = document.getElementById('btnAdmin');
        const btnGuest = document.getElementById('btnGuest');
        
        let isAdmin = true;

        function updateMode() {
            const editableFields = document.querySelectorAll('.editable-field');
            const uploadTargets = document.querySelectorAll('.upload-target');
            
            if (isAdmin) {
                togglePill.style.transform = 'translateX(0)';
                btnAdmin.classList.replace('text-slate-400', 'text-white');
                btnGuest.classList.replace('text-white', 'text-slate-400');
                document.body.classList.add('admin-mode');
                
                editableFields.forEach(el => el.setAttribute('contenteditable', 'true'));
                uploadTargets.forEach(el => el.parentElement.classList.add('upload-slot'));
            } else {
                togglePill.style.transform = 'translateX(88px)';
                btnAdmin.classList.replace('text-white', 'text-slate-400');
                btnGuest.classList.replace('text-slate-400', 'text-white');
                document.body.classList.remove('admin-mode');
                
                editableFields.forEach(el => el.setAttribute('contenteditable', 'false'));
                uploadTargets.forEach(el => el.parentElement.classList.remove('upload-slot'));
            }
        }

        modeToggle.addEventListener('click', (e) => {
            if(e.target === btnAdmin && !isAdmin) { isAdmin = true; updateMode(); }
            else if (e.target === btnGuest && isAdmin) { isAdmin = false; updateMode(); }
            else if (e.target === modeToggle) { isAdmin = !isAdmin; updateMode(); }
        });

        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => {
                    b.classList.remove('bg-white/10', 'text-white', 'shadow-sm', 'border-white/5');
                    b.classList.add('text-slate-400');
                });
                tabContents.forEach(c => {
                    c.classList.remove('block', 'active');
                    c.classList.add('hidden');
                });

                btn.classList.add('bg-white/10', 'text-white', 'shadow-sm', 'border-white/5');
                btn.classList.remove('text-slate-400');
                
                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                targetContent.classList.remove('hidden');
                targetContent.classList.add('block');
                
                void targetContent.offsetWidth;
                targetContent.classList.add('active');
            });
        });

        const track = document.getElementById('interception-track');
        const nextBtn = document.getElementById('next-slide');
        const prevBtn = document.getElementById('prev-slide');
        const slideCounter = document.getElementById('slide-counter');
        
        let currentSlide = 0;
        let totalSlides = interceptionData.length;
        let slideInterval;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            slideCounter.innerText = `${currentSlide + 1} / ${totalSlides}`;
        }

        function nextSlide() {
            currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
            updateCarousel();
        }

        nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
        prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

        function startInterval() { slideInterval = setInterval(nextSlide, 8000); }
        function resetInterval() { clearInterval(slideInterval); startInterval(); }

        function bindDragDrop() {
            const uploadTargets = document.querySelectorAll('.upload-target');
            uploadTargets.forEach(target => {
                const parent = target.parentElement;
                
                const newParent = parent.cloneNode(true);
                parent.parentNode.replaceChild(newParent, parent);
                
                newParent.addEventListener('dragover', (e) => {
                    if(!isAdmin) return;
                    e.preventDefault();
                    newParent.style.borderColor = 'rgba(115, 209, 0, 0.6)';
                    newParent.querySelector('.upload-target').style.backgroundColor = 'rgba(115, 209, 0, 0.2)';
                });
                newParent.addEventListener('dragleave', (e) => {
                    if(!isAdmin) return;
                    newParent.style.borderColor = '';
                    newParent.querySelector('.upload-target').style.backgroundColor = '';
                });
                newParent.addEventListener('drop', (e) => {
                    if(!isAdmin) return;
                    e.preventDefault();
                    newParent.style.borderColor = '';
                    newParent.querySelector('.upload-target').style.backgroundColor = '';
                    
                    const icon = newParent.querySelector('iconify-icon');
                    if(icon) {
                        icon.setAttribute('icon', 'solar:check-circle-linear');
                        icon.classList.replace('text-white', 'text-[#73D100]');
                    }
                });
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateCarousel();
            startInterval();
            updateMode();
            bindDragDrop();
        });
    
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#003087]/20 blur-[140px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#008CFF]/10 blur-[120px]"></div>
<div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] rounded-full bg-[#73D100]/5 blur-[100px]"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 mask-image:linear-gradient(to_bottom,transparent,black)"></div>
</div>

<aside className="relative z-20 hidden md:flex flex-col w-20 lg:w-64 h-full glass-panel border-r-0 border-r border-white/5 pt-8 pb-6 px-4 lg:px-6 transition-all duration-300 group shrink-0 bg-[#0B0B0B]/80">

<div className="flex items-center space-x-3 mb-12 px-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#008CFF] to-[#003087] flex items-center justify-center shadow-[0_0_15px_rgba(0,140,255,0.4)]">
<span className="text-white text-xs font-semibold tracking-tighter">PM</span>
</div>
<span className="text-sm font-medium tracking-tight text-white hidden lg:block">Proactive Marketing</span>
</div>

<nav className="flex-1 space-y-2" id="sidebar-nav">
<button className="sidebar-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl bg-white/10 text-white border border-white/10 shadow-sm transition-all duration-300 ease-out" data-target="view-global">
<iconify-icon className="text-xl text-[#008CFF] icon-active" icon="solar:earth-linear"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Global Insights</span>
</button>
<button className="sidebar-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all duration-300 ease-out border border-transparent" data-target="view-engagement">
<iconify-icon className="text-xl icon-active" icon="solar:pulse-linear"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Engagement Feeds</span>
</button>
<button className="sidebar-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all duration-300 ease-out border border-transparent" data-target="view-portfolio">
<iconify-icon className="text-xl icon-active" icon="solar:pie-chart-3-linear"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Portfolio &amp; Mix</span>
</button>
</nav>

<div className="mt-auto pt-6 border-t border-white/10 px-2">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
<iconify-icon className="text-base text-slate-300" icon="solar:user-linear"></iconify-icon>
</div>
<div className="hidden lg:block text-left">
<p className="text-sm text-white font-medium">Ops Command</p>
<p className="text-xs text-slate-500">System Active</p>
</div>
</div>
</div>
</aside>

<div className="relative z-10 flex-1 flex flex-col h-full overflow-hidden w-full">

<header className="flex-none z-50 glass-panel bg-[#0B0B0B]/80 px-6 md:px-10 py-4 flex flex-col xl:flex-row justify-between items-center gap-4 border-b border-white/5 backdrop-blur-3xl w-full">

<div className="flex-shrink-0 flex items-center">
<img alt="Primary Logo" className="hover:opacity-100 transition-opacity opacity-95 w-auto h-10 object-contain rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65b4c934-a375-4898-bf8c-bbdd39ff0677_3840w.png?w=800&amp;q=80"/>
</div>

<div className="transition-opacity duration-300 text-center flex-1" id="header-title-container">
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-white flex items-center justify-center gap-3" id="header-title">
                    Proactive Marketing Dashboard
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#73D100]/10 text-[#73D100] border border-[#73D100]/20">Live</span>
</h1>
<p className="text-sm text-slate-400 mt-1" id="header-desc">Monitoring interceptions and campaign sentiment.</p>
</div>

<div className="flex items-center gap-6 flex-shrink-0">

<div className="glass-panel p-1 rounded-full inline-flex items-center relative cursor-pointer" id="modeToggle">
<div className="absolute left-1 top-1 bottom-1 w-[88px] bg-gradient-to-r from-[#008CFF] to-[#003087] rounded-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) z-0 shadow-lg shadow-[#008CFF]/20" id="togglePill"></div>
<button className="relative z-10 w-[88px] text-center text-xs font-medium py-1.5 text-white transition-colors duration-300" id="btnAdmin">Admin</button>
<button className="relative z-10 w-[88px] text-center text-xs font-medium py-1.5 text-slate-400 transition-colors duration-300" id="btnGuest">Exec View</button>
</div>

<div className="hidden md:flex flex-shrink-0 items-center">
<img alt="Secondary Logo" className="h-10 w-auto object-contain rounded-md opacity-70 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/643f7917-7c24-48bd-be6d-304db1925c95_3840w.png?w=800&amp;q=80"/>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 flex flex-col w-full relative" id="main-scroll">
<div className="flex-1 w-full max-w-[1600px] mx-auto" id="views-wrapper">

<div className="view-section active" id="view-global">

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">

<div className="glass-panel rounded-2xl p-6 hover-lift relative overflow-hidden group">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-[#008CFF]/10 rounded-full blur-xl group-hover:bg-[#008CFF]/20 transition-all duration-500 ease-out"></div>
<div className="flex justify-between items-start mb-4">
<p className="text-sm text-slate-400">Total Responses</p>
<div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"><iconify-icon className="text-lg" icon="solar:chat-square-linear"></iconify-icon></div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-3xl font-medium tracking-tight text-white glow-text-blue editable-field" contenteditable="true">9,539</h2>
<span className="text-xs text-[#73D100] flex items-center"><iconify-icon className="mr-1" icon="solar:graph-up-linear"></iconify-icon>12%</span>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 hover-lift relative overflow-hidden group">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-500 ease-out"></div>
<div className="flex justify-between items-start mb-4">
<p className="text-sm text-slate-400">Targeted Ads Sent</p>
<div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"><iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon></div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-3xl font-medium tracking-tight text-white editable-field" contenteditable="true">1,500</h2>
<span className="text-xs text-[#73D100] flex items-center"><iconify-icon className="mr-1" icon="solar:graph-up-linear"></iconify-icon>KPI Hit</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#008CFF] to-purple-500 w-[100%] rounded-full"></div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 hover-lift flex flex-col justify-between">
<div className="flex justify-between items-start mb-2">
<p className="text-sm text-slate-400">Sentiment Split</p>
<iconify-icon className="text-lg text-[#73D100]" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="flex items-center gap-6">
<div className="relative w-16 h-16 rounded-full shrink-0 shadow-[0_0_20px_rgba(115,209,0,0.15)]" style={{background: 'conic-gradient(#73D100 0% 79%, rgba(255, 255, 255, 0.1) 79% 100%)', transform: 'rotate(-45deg)'}}>
<div className="absolute inset-[4px] bg-[#0F0F0F] rounded-full shadow-inner"></div>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-medium text-white tracking-tight glow-text-green editable-field" contenteditable="true">79</span><span className="text-sm text-slate-400">%</span>
</div>
<p className="text-xs text-slate-500 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#73D100] inline-block"></span> Positive</p>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 hover-lift">
<div className="flex justify-between items-start mb-4">
<p className="text-sm text-slate-400">Share of Voice</p>
<div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"><iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon></div>
</div>
<div className="flex items-baseline gap-1 mb-2">
<h2 className="text-3xl font-medium tracking-tight text-white editable-field" contenteditable="true">77.33</h2><span className="text-sm text-slate-400">%</span>
</div>
<div className="flex gap-1 h-8 items-end">
<div className="w-full bg-[#008CFF] rounded-t-sm h-[77%]"></div>
<div className="w-full bg-white/20 rounded-t-sm h-[12%]"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[10.6%]"></div>
</div>
</div>
</section>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">

<div className="xl:col-span-2 space-y-8">

<div className="glass-panel rounded-2xl p-1">
<div className="flex overflow-x-auto border-b border-white/10 p-1 gap-1" id="platformTabs">
<button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out bg-white/10 text-white shadow-sm border border-white/5 tab-btn whitespace-nowrap" data-target="tab-x">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.96l11.035 13.809z"></path></svg>
                                        X (Twitter)
                                    </button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out text-slate-400 hover:text-white hover:bg-white/5 tab-btn whitespace-nowrap" data-target="tab-ig">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon> Instagram
                                    </button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out text-slate-400 hover:text-white hover:bg-white/5 tab-btn whitespace-nowrap" data-target="tab-tk">
<iconify-icon className="text-lg" icon="solar:music-note-linear"></iconify-icon> TikTok
                                    </button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out text-slate-400 hover:text-white hover:bg-white/5 tab-btn whitespace-nowrap" data-target="tab-yt">
<iconify-icon className="text-lg" icon="solar:play-stream-linear"></iconify-icon> YouTube
                                    </button>
</div>

<div className="p-6">
<div className="tab-content block fade-in" id="tab-x">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008CFF] to-[#003087] flex items-center justify-center shrink-0 border border-white/20">
<span className="text-white text-xs font-medium tracking-tight">TLK</span>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 flex-1">
<div className="flex justify-between items-center mb-2">
<p className="text-sm text-white font-medium">@TelkomZA</p>
<span className="text-[10px] text-slate-500">Just now</span>
</div>
<p className="text-sm text-slate-300 leading-relaxed editable-field" contenteditable="true">Let us keep you connected fam... Switch to Mo'Nice and get more data for less. Don't let the other networks drain you. 💙⚡️</p>
<div className="mt-3 flex gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors"><iconify-icon className="text-sm" icon="solar:chat-round-linear"></iconify-icon> Reply</span>
<span className="flex items-center gap-1 hover:text-[#008CFF] cursor-pointer transition-colors"><iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon> Like</span>
</div>
</div>
</div>
</div>
<div className="tab-content hidden fade-in" id="tab-ig">
<p className="text-sm text-slate-400 italic">Instagram targeted responses loading...</p>
</div>
<div className="tab-content hidden fade-in" id="tab-tk">
<p className="text-sm text-slate-400 italic">TikTok engagement data sync in progress...</p>
</div>
<div className="tab-content hidden fade-in" id="tab-yt">
<p className="text-sm text-slate-400 italic">YouTube ad pre-roll campaign performance syncing...</p>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-xl text-[#008CFF]" icon="solar:target-linear"></iconify-icon>
                                        Active Interceptions Portfolio
                                    </h3>
<div className="flex gap-2 items-center">
<span className="text-xs text-slate-500 mr-2" id="slide-counter">1 / 5</span>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-white border border-white/10 transition-colors duration-300 ease-out cursor-pointer z-10" id="prev-slide"><iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-white border border-white/10 transition-colors duration-300 ease-out cursor-pointer z-10" id="next-slide"><iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="carousel-container glass-panel rounded-2xl shadow-xl">
<div className="carousel-track" id="interception-track">
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#ff0000'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#ff00001A', color: '#ff0000', borderColor: '#ff000033'}}>Target: Vodacom</span>
<span className="text-xs text-[#008CFF] bg-[#008CFF]/10 px-2 py-1 rounded border border-[#008CFF]/20">Deployed</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/364c33bb-76b5-4fb4-8e08-a0962221d561_3840w.jpg"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#ffcc00'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#ffcc001A', color: '#ffcc00', borderColor: '#ffcc0033'}}>Target: MTN</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7733551-8b04-4f83-b1e9-2befd7ce778c_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/364c33bb-76b5-4fb4-8e08-a0962221d561_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#ff6600'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#ff66001A', color: '#ff6600', borderColor: '#ff660033'}}>Target: Cell C</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98156800-0992-4f33-bfef-c0b1647db8af_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7733551-8b04-4f83-b1e9-2befd7ce778c_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#00e5ff'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#00e5ff1A', color: '#00e5ff', borderColor: '#00e5ff33'}}>Target: Rain</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7733551-8b04-4f83-b1e9-2befd7ce778c_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#ff3366'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#ff33661A', color: '#ff3366', borderColor: '#ff336633'}}>Target: Afrihost</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_800w.jpg"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7733551-8b04-4f83-b1e9-2befd7ce778c_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#ff0000'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#ff00001A', color: '#ff0000', borderColor: '#ff000033'}}>Target: Vodacom</span>
<span className="text-xs text-[#008CFF] bg-[#008CFF]/10 px-2 py-1 rounded border border-[#008CFF]/20">Deployed</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_800w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#ffcc00'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#ffcc001A', color: '#ffcc00', borderColor: '#ffcc0033'}}>Target: MTN</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98156800-0992-4f33-bfef-c0b1647db8af_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7733551-8b04-4f83-b1e9-2befd7ce778c_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#ff6600'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#ff66001A', color: '#ff6600', borderColor: '#ff660033'}}>Target: Cell C</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://images.unsplash.com/photo-1533022136015-a2f0263f3ce0?q=80&amp;w=800&amp;h=1700&amp;fit=crop"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#00e5ff'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#00e5ff1A', color: '#00e5ff', borderColor: '#00e5ff33'}}>Target: Rain</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
<div className="carousel-slide p-6 border-l-4" style={{borderLeftColor: '#ff3366'}}>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide border" style={{background: '#ff33661A', color: '#ff3366', borderColor: '#ff336633'}}>Target: Afrihost</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7733551-8b04-4f83-b1e9-2befd7ce778c_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>

<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Campaign Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://images.unsplash.com/photo-1614680376593-902f74a936c7?q=80&amp;w=800&amp;h=1700&amp;fit=crop"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-1">

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full min-h-[600px] relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04] z-0">
<div className="w-[400px] h-[400px] rounded-full border border-[#73D100]"></div>
<div className="absolute w-[250px] h-[250px] rounded-full border border-[#73D100]"></div>
<div className="absolute w-[100px] h-[100px] rounded-full border border-[#73D100]"></div>
<div className="absolute w-full h-[1px] bg-[#73D100] opacity-50"></div>
<div className="absolute h-full w-[1px] bg-[#73D100] opacity-50"></div>
</div>
<div className="flex justify-between items-center mb-6 shrink-0 relative z-10">
<h3 className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-xl text-[#73D100]" icon="solar:radar-linear"></iconify-icon>
                                        Trend Radar 
                                    </h3>
<div className="flex gap-1">
<button className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-white transition-colors duration-300"><iconify-icon icon="solar:sort-vertical-linear"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-y-auto pr-2 radar-scroll space-y-3 relative z-10 pb-4">
<div className="relative p-5 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div className="flex gap-2 items-center">
<span className="text-xs text-slate-500 font-medium">Live</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Cultural</span>
</div>
<span className="text-[10px] text-[#73D100] flex items-center"><iconify-icon className="mr-0.5" icon="solar:bolt-linear"></iconify-icon> Hot</span>
</div>
<h4 className="text-sm font-medium text-white mb-1 editable-field" contenteditable="true">Meme Culture Brand Plays</h4>
<p className="text-xs text-slate-400">Leveraging viral formats to intercept competitor complaints rapidly across X &amp; TikTok.</p>
</div>
<div className="relative p-5 rounded-xl bg-white/[0.02] border border-white/5 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:border-white/10 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="flex gap-2 items-center">
<span className="text-xs text-slate-500 font-medium">2h ago</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">Seasonal</span>
</div>
</div>
<h4 className="text-sm font-medium text-white mb-1">Grad Season Intercepts</h4>
<p className="text-xs text-slate-400">Targeting youth transitioning to work environments needing stable home internet solutions.</p>
</div>
<div className="relative p-5 rounded-xl bg-white/[0.02] border border-white/5 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:border-white/10 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="flex gap-2 items-center">
<span className="text-xs text-slate-500 font-medium">5h ago</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">Events</span>
</div>
</div>
<h4 className="text-sm font-medium text-white mb-1">Sporting Milestones</h4>
<p className="text-xs text-slate-400">Capitalizing on streaming delays during the local derby to promote Telkom Fiber reliability.</p>
</div>
<div className="relative p-5 rounded-xl bg-white/[0.02] border border-white/5 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:border-white/10 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="flex gap-2 items-center">
<span className="text-xs text-slate-500 font-medium">12h ago</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-red-500/10 text-red-400 border border-red-500/20">Tech</span>
</div>
</div>
<h4 className="text-sm font-medium text-white mb-1">5G Rollout Backlash</h4>
<p className="text-xs text-slate-400">Monitoring spikes in Rain/Vodacom network downtime to deploy immediate LTE rescue offers.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 glass-panel rounded-2xl p-6 lg:p-8 mb-4">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium tracking-tight text-white">Weekly Ad Dispatch Volume</h3>
<p className="text-sm text-slate-400 mt-1">Momentum tracking of automated replies sent over the last 4 weeks.</p>
</div>
<div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
<span className="text-xs font-medium text-white">Ads Sent</span>
</div>
</div>
<div className="relative w-full h-64">

<div className="absolute left-12 right-0 bottom-0 flex justify-between text-[10px] text-slate-500 pt-2 pl-4">
<span>Week 1</span>
<span>Week 2</span>
<span>Week 3</span>
<span>Current</span>
</div>

<div className="absolute left-4 top-2 right-4 bottom-8">
<div className="absolute inset-0 flex flex-col justify-between">
<div className="w-full border-t border-white/5"></div>
<div className="w-full border-t border-white/5"></div>
<div className="w-full border-t border-white/5"></div>
<div className="w-full border-t border-white/5"></div>
<div className="w-full border-t border-white/10"></div>
</div>
<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 -10 100 110">
<defs>
<lineargradient id="gradientLine" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#008CFF"></stop>
<stop offset="100%" stop-color="#73D100"></stop>
</lineargradient>
<lineargradient id="gradientArea" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#008CFF" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#008CFF" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,80 C20,70 40,40 60,45 C80,50 90,10 100,5 L100,100 L0,100 Z" fill="url(#gradientArea)"></path>

<path d="M0,80 C20,70 40,40 60,45 C80,50 90,10 100,5" fill="none" stroke="url(#gradientLine)" strokeLinecap="round" strokeWidth="1.5"></path>

<circle cx="0" cy="80" fill="#0B0B0B" r="2.5" stroke="#008CFF" strokeWidth="1.5"></circle>
<text fill="#94a3b8" fontFamily="Inter" fontSize="3.5" font-weight="500" text-anchor="start" x="0" y="73">520</text>
<circle cx="33.3" cy="55" fill="#0B0B0B" r="2.5" stroke="#008CFF" strokeWidth="1.5"></circle>
<text fill="#94a3b8" fontFamily="Inter" fontSize="3.5" font-weight="500" text-anchor="middle" x="33.3" y="48">1,105</text>
<circle cx="66.6" cy="45" fill="#0B0B0B" r="2.5" stroke="#008CFF" strokeWidth="1.5"></circle>
<text fill="#94a3b8" fontFamily="Inter" fontSize="3.5" font-weight="500" text-anchor="middle" x="66.6" y="38">1,340</text>
<circle className="animate-pulse" cx="100" cy="5" fill="#73D100" r="3.5" stroke="#fff" strokeWidth="1.5"></circle>
<text fill="#73D100" fontFamily="Inter" fontSize="4" font-weight="600" text-anchor="end" x="100" y="-3">1,500</text>
</svg>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-engagement">
<div className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center mb-8 bg-gradient-to-b from-white/[0.05] to-transparent">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
<iconify-icon className="text-3xl text-[#008CFF] drop-shadow-[0_0_10px_rgba(0,140,255,0.5)]" icon="solar:pulse-linear"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-white mb-2">Live Engagement Streams</h2>
<p className="text-sm text-slate-400 leading-relaxed max-w-lg mx-auto">Actively visualizing real-time social streams, brand sentiment triggers, and interception deployment matrices across all API channels.</p>
<button className="mt-6 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-all duration-300 ease-out shadow-sm">Configure Endpoints</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
<div className="glass-panel rounded-2xl p-6 border-t-4 border-[#ff0000]">
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/20 tracking-wide">Stream: Vodacom Sentiment</span>
<span className="text-xs text-[#008CFF] bg-[#008CFF]/10 px-2 py-1 rounded border border-[#008CFF]/20">Active Listener</span>
</div>
<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Stream Asset 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 border-t-4 border-[#ffcc00]">
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/20 tracking-wide">Stream: MTN Outages</span>
<span className="text-xs text-[#008CFF] bg-[#008CFF]/10 px-2 py-1 rounded border border-[#008CFF]/20">Active Listener</span>
</div>
<div className="relative min-h-[500px] md:min-h-[700px] xl:min-h-[850px] bg-[#050505] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group/slot shadow-inner upload-slot">
<img alt="Stream Asset 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/slot:opacity-80 transition-opacity duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ef884-52ad-4de0-be4b-aca9c999f8f9_3840w.jpg?w=800&amp;q=80"/>
<iconify-icon className="text-4xl text-white drop-shadow-md z-20 upload-icon" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="absolute inset-0 z-30 transition-colors duration-300 upload-target bg-black/30 hover:bg-black/10"></div>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-portfolio">
<div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/5 pb-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white flex items-center gap-3">
<iconify-icon className="text-[#008CFF]" icon="solar:pie-chart-3-linear"></iconify-icon>
                                Triple-Tier Portfolio Architecture
                            </h2>
<p className="text-sm text-slate-400 mt-2">Strategic matrix defining product allocation, keyword triggers, and KPI objectives per brand sector.</p>
</div>
<span className="px-3 py-1 text-xs font-semibold bg-white/10 border border-white/20 rounded-lg text-white tracking-wider">Matrix: Synced</span>
</div>
<div className="space-y-12 pb-12">

<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-3 h-3 rounded-full bg-[#008CFF] shadow-[0_0_10px_rgba(0,140,255,0.8)]"></div>
<h3 className="text-lg font-medium tracking-tight text-white glow-text-blue">Segment 1: Core Consumer</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-panel p-6 rounded-2xl hover-lift border-t-2 border-[#008CFF] flex flex-col justify-center">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-2 block">Portfolio Domain</span>
<h4 className="text-xl text-white font-medium tracking-tight">Content Mktg <span className="text-white/20 mx-1">|</span> Self Service</h4>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift border-t-2 border-[#008CFF] bg-gradient-to-br from-[#008CFF]/5 to-transparent flex flex-col justify-center">
<span className="text-[11px] text-[#008CFF] font-medium tracking-widest uppercase mb-1 flex items-center gap-2"><iconify-icon icon="solar:target-linear"></iconify-icon> AD KPI Target</span>
<div className="flex items-baseline gap-2"><h4 className="text-4xl text-white font-semibold tracking-tighter">1,500</h4><span className="text-xs text-slate-400">Total</span></div>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift lg:col-span-2">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-3 block">Keyword Themes Trigger</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Sport</span>
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Bored</span>
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Netflix</span>
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Soccer Game</span>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift md:col-span-2 lg:col-span-4">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-3 flex items-center gap-2"><iconify-icon icon="solar:box-linear"></iconify-icon> Active Product Mix Assignment</span>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-[#008CFF]/10 text-[#008CFF] border border-[#008CFF]/20 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(0,140,255,0.1)]">TikTok Bundles</span>
<span className="px-4 py-2 bg-[#008CFF]/10 text-[#008CFF] border border-[#008CFF]/20 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(0,140,255,0.1)]">Social Bundles</span>
<span className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-xl text-sm font-medium">MyTelkom App</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-3 h-3 rounded-full bg-[#73D100] shadow-[0_0_10px_rgba(115,209,0,0.8)]"></div>
<h3 className="text-lg font-medium tracking-tight text-white glow-text-green">Segment 2: Home Solutions</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-panel p-6 rounded-2xl hover-lift border-t-2 border-[#73D100] flex flex-col justify-center">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-2 block">Portfolio Domain</span>
<h4 className="text-xl text-white font-medium tracking-tight">Fixed Broadband <span className="text-white/20 mx-1">|</span> Wi-Fi</h4>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift border-t-2 border-[#73D100] bg-gradient-to-br from-[#73D100]/5 to-transparent flex flex-col justify-center">
<span className="text-[11px] text-[#73D100] font-medium tracking-widest uppercase mb-1 flex items-center gap-2"><iconify-icon icon="solar:target-linear"></iconify-icon> AD KPI Target</span>
<div className="flex items-baseline gap-2"><h4 className="text-4xl text-white font-semibold tracking-tighter">850</h4><span className="text-xs text-slate-400">Total</span></div>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift lg:col-span-2">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-3 block">Keyword Themes Trigger</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Lag</span>
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Buffering</span>
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Rain Down</span>
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Gaming Ping</span>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift md:col-span-2 lg:col-span-4">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-3 flex items-center gap-2"><iconify-icon icon="solar:box-linear"></iconify-icon> Active Product Mix Assignment</span>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-[#73D100]/10 text-[#73D100] border border-[#73D100]/20 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(115,209,0,0.1)]">Fibre Connect</span>
<span className="px-4 py-2 bg-[#73D100]/10 text-[#73D100] border border-[#73D100]/20 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(115,209,0,0.1)]">Connected Home</span>
<span className="px-4 py-2 bg-[#73D100]/10 text-[#73D100] border border-[#73D100]/20 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(115,209,0,0.1)]">LTE</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-3 h-3 rounded-full bg-[#A855F7] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
<h3 className="text-lg font-medium tracking-tight text-white glow-text-purple">Segment 3: Enterprise &amp; B2B</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-panel p-6 rounded-2xl hover-lift border-t-2 border-[#A855F7] flex flex-col justify-center">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-2 block">Portfolio Domain</span>
<h4 className="text-xl text-white font-medium tracking-tight">SME Growth <span className="text-white/20 mx-1">|</span> Cloud</h4>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift border-t-2 border-[#A855F7] bg-gradient-to-br from-[#A855F7]/5 to-transparent flex flex-col justify-center">
<span className="text-[11px] text-[#A855F7] font-medium tracking-widest uppercase mb-1 flex items-center gap-2"><iconify-icon icon="solar:target-linear"></iconify-icon> AD KPI Target</span>
<div className="flex items-baseline gap-2"><h4 className="text-4xl text-white font-semibold tracking-tighter">400</h4><span className="text-xs text-slate-400">Total</span></div>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift lg:col-span-2">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-3 block">Keyword Themes Trigger</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Server Down</span>
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">VoIP Quality</span>
<span className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-lg text-xs cursor-default">Remote Work</span>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl hover-lift md:col-span-2 lg:col-span-4">
<span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-3 flex items-center gap-2"><iconify-icon icon="solar:box-linear"></iconify-icon> Active Product Mix Assignment</span>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(168,85,247,0.15)]">Cloud PBX</span>
<span className="px-4 py-2 bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(168,85,247,0.15)]">Business LTE</span>
<span className="px-4 py-2 bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(168,85,247,0.15)]">Dedicated Fibre</span>
<span className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-xl text-sm font-medium">WhatsApp Business Setup</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-auto py-8 w-full border-t border-white/5 flex justify-center pb-8 shrink-0 relative z-10 max-w-[1600px] mx-auto">
<div className="flex justify-center items-center">
<img alt="Footer Logo" className="h-12 w-auto object-contain rounded-md opacity-50 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65b4c934-a375-4898-bf8c-bbdd39ff0677_3840w.png?w=800&amp;q=80"/>
</div>
</footer>
</main>
</div>


    </>
  );
}
