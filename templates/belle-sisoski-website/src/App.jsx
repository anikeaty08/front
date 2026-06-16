import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            (function() {
                const initSlider = () => {
                    const section = document.querySelector('[data-element-id="aura-emn1sqr3t7ix2xuu"]');
                    if (!section) return;
                    
                    const shell = section.querySelector('.featured-shell');
                    const track = section.querySelector('.video-marquee');
                    if (!shell || !track) return;
                    
                    if (track.dataset.dragReadyInit === 'true') return;
                    track.dataset.dragReadyInit = 'true';
                    track.style.animation = 'none';
                    
                    let isDown = false;
                    let currentTranslate = 0;
                    let autoScroll = true;
                    let velocity = 0;
                    let lastX = 0;
                    let startX = 0;
                    let lastTime = 0;
                    let momentumFrame = null;
                    let hasDragged = false;
                    
                    function getLoopWidth() { 
                        return track.scrollWidth / 2; 
                    }
                    
                    function normalizeLoop() {
                        const loopWidth = getLoopWidth();
                        if (!loopWidth || loopWidth === 0) return;
                        while (currentTranslate <= -loopWidth) currentTranslate += loopWidth;
                        while (currentTranslate > 0) currentTranslate -= loopWidth;
                    }
                    
                    function setTrackPosition() {
                        track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
                    }
                    
                    function autoMove() {
                        if (autoScroll && !isDown) {
                            currentTranslate -= 0.5;
                            normalizeLoop();
                            setTrackPosition();
                        }
                        requestAnimationFrame(autoMove);
                    }
                    
                    function startMomentum() {
                        if (momentumFrame) cancelAnimationFrame(momentumFrame);
                        function step() {
                            if (Math.abs(velocity) < 0.1) {
                                velocity = 0;
                                autoScroll = true;
                                return;
                            }
                            currentTranslate += velocity;
                            velocity *= 0.95;
                            normalizeLoop();
                            setTrackPosition();
                            momentumFrame = requestAnimationFrame(step);
                        }
                        momentumFrame = requestAnimationFrame(step);
                    }
                    
                    function dragStart(e) {
                        isDown = true;
                        autoScroll = false;
                        hasDragged = false;
                        const x = e.pageX || (e.touches ? e.touches[0].clientX : 0);
                        startX = x;
                        lastX = x;
                        lastTime = performance.now();
                        velocity = 0;
                        if (momentumFrame) cancelAnimationFrame(momentumFrame);
                        shell.classList.add('cursor-grabbing');
                    }
                    
                    function dragMove(e) {
                        if (!isDown) return;
                        const x = e.pageX || (e.touches ? e.touches[0].clientX : 0);
                        const frameDelta = x - lastX;
                        const now = performance.now();
                        const dt = Math.max(now - lastTime, 1);
                        
                        if (Math.abs(x - startX) > 5) {
                            hasDragged = true;
                            if (e.cancelable) e.preventDefault();
                        }
                        
                        velocity = (frameDelta / dt) * 15;
                        currentTranslate += frameDelta;
                        normalizeLoop();
                        setTrackPosition();
                        
                        lastX = x;
                        lastTime = now;
                    }
                    
                    function dragEnd() {
                        if (!isDown) return;
                        isDown = false;
                        shell.classList.remove('cursor-grabbing');
                        startMomentum();
                    }
                    
                    shell.addEventListener('click', (e) => {
                        if (hasDragged) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }, { capture: true });
                    
                    shell.addEventListener('mousedown', dragStart);
                    window.addEventListener('mousemove', dragMove, { passive: false });
                    window.addEventListener('mouseup', dragEnd);
                    shell.addEventListener('mouseleave', dragEnd);
                    
                    shell.addEventListener('touchstart', dragStart, { passive: true });
                    shell.addEventListener('touchmove', dragMove, { passive: false });
                    shell.addEventListener('touchend', dragEnd, { passive: true });
                    
                    shell.addEventListener('mouseenter', () => autoScroll = false);
                    shell.addEventListener('mouseleave', () => { if(!isDown) autoScroll = true; });
                    
                    setTimeout(() => {
                        const loopW = getLoopWidth();
                        if (loopW > 0) {
                            currentTranslate = -loopW / 2;
                        }
                        autoMove();
                    }, 200);
                };
                
                if (document.readyState === 'complete' || document.readyState === 'interactive') {
                    setTimeout(initSlider, 100);
                } else {
                    window.addEventListener('DOMContentLoaded', initSlider);
                    window.addEventListener('load', initSlider);
                }
            })();
        


        // Data & State
        const VIDEO_LIBRARY = {
            featured: ['NUOaozNHa78','VWbzdnfunqM','TCGHVOeCTdE','HbfmJYKyEo0','YlkHiGcHUiE','YkpzV_3AWZg','rWO_nZgwgmk','zF58V9PyaN8'],
            live: ['YL1PQTR4hzw','shr2v8o9CUo','1MIJhFpOSxs','8NQNRRKcC_E','HYUK8OPUyP8','aVhMIvGLvfI','SLJz7UMy1rI','dVJ15CeE4Z8'],
            remix: ['CujnUDdRwRo','kUdw_lhwysc','MOZxgPNqIZY','rL1wZ8LW98I','VMIL1YbUQrI','pzgEr30Fji0','n4sml_LfzI8','stK8MlJbP88'],
            original: ['Dgl-OdHtBoY','MS5tAs9_n8U','e79Rv7o2iPE','Afh_bXD80T8','NUOaozNHa78','YlkHiGcHUiE','rWO_nZgwgmk','VWbzdnfunqM']
        };

        const videoTitleCache = new Map();
        let lastScrollY = window.scrollY;

        // UI Interactions
        const navbar = document.getElementById('navbar');
        let isHoveringTop = false;

        window.addEventListener('mousemove', (e) => {
            isHoveringTop = e.clientY < 90;
            if (isHoveringTop) {
                navbar.classList.remove('-translate-y-full');
            } else if (window.scrollY > 80 && window.scrollY > lastScrollY) {
                navbar.classList.add('-translate-y-full');
            }
        });

        window.addEventListener('scroll', () => {
            if (!isHoveringTop) {
                if (window.scrollY > 80 && window.scrollY > lastScrollY) {
                    navbar.classList.add('-translate-y-full');
                } else {
                    navbar.classList.remove('-translate-y-full');
                }
            }
            lastScrollY = window.scrollY;
        }, { passive: true });

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-neutral-600');
                el.classList.remove('after:bg-white');
                el.classList.add('after:bg-transparent');
            });
            
            const activeTab = document.getElementById(tabId);
            activeTab.classList.remove('hidden');
            activeTab.classList.add('flex');
            
            const activeBtn = document.getElementById('btn-' + tabId);
            activeBtn.classList.remove('text-neutral-600');
            activeBtn.classList.add('text-white');
            activeBtn.classList.remove('after:bg-transparent');
            activeBtn.classList.add('after:bg-white');
        }

        // Initialize DOM Elements
        document.addEventListener('DOMContentLoaded', () => {
            renderVideoSections();
            
            // Mobile Menu Logic
            const openBtn = document.getElementById('open-menu-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuLinks = document.querySelectorAll('.menu-link');

            function openMenu() {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
            }

            function closeMenu() {
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }

            if (openBtn && closeBtn && mobileMenu) {
                openBtn.addEventListener('click', openMenu);
                closeBtn.addEventListener('click', closeMenu);

                menuLinks.forEach(link => {
                    link.addEventListener('click', closeMenu);
                });
            }
        });

        // Video Logic
        function getThumb(videoId) {
            return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        }

        async function getVideoTitle(videoId) {
            if (videoTitleCache.has(videoId)) return videoTitleCache.get(videoId);
            const fallback = 'Belle Sisoski Official Video';
            try {
                const res = await fetch(`https://noembed.com/embed?dataType=json&url=https://www.youtube.com/watch?v=${videoId}`);
                if (!res.ok) throw new Error('fetch failed');
                const data = await res.json();
                const title = data?.title || fallback;
                videoTitleCache.set(videoId, title);
                return title;
            } catch {
                videoTitleCache.set(videoId, fallback);
                return fallback;
            }
        }

        function createVideoCard(videoId, wide = false) {
            const widthClass = wide ? 'w-[85vw] md:w-[600px] lg:w-[720px]' : 'w-[75vw] md:w-[340px] lg:w-[400px]';
            return `
                <div class="relative ${widthClass} aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" onclick="openVideoModal('${videoId}')" data-video-id="${videoId}">
                    <img src="${getThumb(videoId)}" onerror="this.src='https://img.youtube.com/vi/${videoId}/hqdefault.jpg';" alt="Thumbnail" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0">
                    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                    
                    <div class="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
                        <div class="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                            <iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
                        </div>
                    </div>
                    
                    <div class="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
                        <h3 class="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Loading...</h3>
                        <span class="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
                    </div>
                </div>`;
        }

        function createSingleMarqueeRow(targetId, videos, wide = false) {
            const target = document.getElementById(targetId);
            if (!target) return;
            const cards = videos.map((id) => createVideoCard(id, wide)).join('');
            target.innerHTML = `${cards}${cards}`; 
        }

        function createMarqueeRows(targetId, videos) {
            const target = document.getElementById(targetId);
            if (!target) return;
            const midpoint = Math.ceil(videos.length / 2);
            const rows = [videos.slice(0, midpoint), videos.slice(midpoint)];
            target.innerHTML = rows.map((row, index) => {
                const cards = row.map((id) => createVideoCard(id, false)).join('');
                return `
                    <div class="marquee-shell overflow-hidden relative cursor-grab active:cursor-grabbing">
                        <div class="video-marquee ${index % 2 ? 'reverse' : ''}">
                            ${cards}${cards}
                        </div>
                    </div>`;
            }).join('');
        }

        function renderVideoSections() {
            createSingleMarqueeRow('featured-video-row', VIDEO_LIBRARY.featured, true);
            createMarqueeRows('tab-live', VIDEO_LIBRARY.live);
            createMarqueeRows('tab-remix', VIDEO_LIBRARY.remix);
            createMarqueeRows('tab-original', VIDEO_LIBRARY.original);
            hydrateVideoTitles();
            initFeaturedDrag();
        }

        async function hydrateVideoTitles() {
            const cards = [...document.querySelectorAll('[data-video-id]')];
            const uniqueIds = [...new Set(cards.map(card => card.dataset.videoId))];
            await Promise.all(uniqueIds.map(async (id) => {
                const title = await getVideoTitle(id);
                document.querySelectorAll(`[data-video-id="${id}"] .video-card-title`).forEach(el => {
                    el.textContent = title;
                });
            }));
        }

        // Modal Logic
        function openVideoModal(videoId) {
            const modal = document.getElementById('videoModal');
            const container = document.getElementById('videoContainer');
            
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&color=white`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
            iframe.className = 'w-full h-full absolute inset-0';
            
            container.innerHTML = '';
            container.appendChild(iframe);

            modal.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                container.classList.remove('scale-95');
                container.classList.add('scale-100');
            }, 50);
            
            document.body.style.overflow = 'hidden';
        }

        function closeVideoModal() {
            const modal = document.getElementById('videoModal');
            const container = document.getElementById('videoContainer');
            
            container.classList.remove('scale-100');
            container.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('opacity-0', 'pointer-events-none');
                container.innerHTML = ''; 
                document.body.style.overflow = ''; 
            }, 300);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") closeVideoModal();
        });

        // Drag Logic for Sliders
        function initFeaturedDrag() {
            function setupTrack(shell, track, speed = 0.5) {
                if (!shell || !track) return;
                if (track.dataset.dragReady === 'true') return;

                track.dataset.dragReady = 'true';
                track.classList.add('js-track-controlled');

                let isDown = false;
                let startX = 0;
                let currentTranslate = null; // Uninitialized to handle initially hidden tabs (width = 0px)
                let previousTranslate = 0;
                let animationFrame = null;
                let autoScroll = true;
                let velocity = 0;
                let lastX = 0;
                let lastTime = 0;
                let momentumFrame = null;
                let hasDragged = false;
                const direction = track.classList.contains('reverse') ? 1 : -1;

                function getLoopWidth() {
                    return track.scrollWidth / 2;
                }

                // Defer initialization until element is visible and has a width
                function initTranslateIfNeeded() {
                    if (currentTranslate === null && track.scrollWidth > 0) {
                        currentTranslate = track.classList.contains('reverse') ? -(track.scrollWidth / 2) : 0;
                        previousTranslate = currentTranslate;
                    }
                }

                function normalizeLoop() {
                    const loopWidth = getLoopWidth();
                    if (!loopWidth) return; // Escape if still hidden (0px)

                    if (currentTranslate < -loopWidth) currentTranslate += loopWidth;
                    if (currentTranslate > 0) currentTranslate -= loopWidth;
                    previousTranslate = currentTranslate;
                }

                function setTrackPosition() {
                    if (currentTranslate !== null) {
                        track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
                    }
                }

                function stopMomentum() {
                    if (momentumFrame) {
                        cancelAnimationFrame(momentumFrame);
                        momentumFrame = null;
                    }
                }

                function autoMove() {
                    initTranslateIfNeeded();
                    if (currentTranslate !== null && autoScroll && !isDown) {
                        currentTranslate += speed * direction;
                        normalizeLoop();
                        setTrackPosition();
                    }
                    animationFrame = requestAnimationFrame(autoMove);
                }

                function startMomentum() {
                    stopMomentum();

                    function step() {
                        if (Math.abs(velocity) < 0.08) {
                            velocity = 0;
                            previousTranslate = currentTranslate;
                            setTimeout(() => { autoScroll = true; }, 500);
                            return;
                        }

                        currentTranslate += velocity;
                        velocity *= 0.97;
                        normalizeLoop();
                        setTrackPosition();
                        momentumFrame = requestAnimationFrame(step);
                    }

                    momentumFrame = requestAnimationFrame(step);
                }

                function dragStart(x) {
                    initTranslateIfNeeded();
                    if (currentTranslate === null) return;

                    isDown = true;
                    autoScroll = false;
                    hasDragged = false; // Reset drag tracker for click prevention
                    startX = x;
                    lastX = x;
                    lastTime = performance.now();
                    velocity = 0;
                    stopMomentum();
                    shell.classList.add('cursor-grabbing');
                }

                function dragMove(x) {
                    if (!isDown || currentTranslate === null) return;

                    const now = performance.now();
                    const delta = x - startX;
                    const frameDelta = x - lastX;
                    const dt = Math.max(now - lastTime, 1);

                    // Track drag threshold to prevent clicks on cards
                    if (Math.abs(delta) > 5) hasDragged = true;

                    velocity = (frameDelta / dt) * 0.35;
                    currentTranslate = previousTranslate + (delta * 0.08);
                    normalizeLoop();
                    setTrackPosition();

                    lastX = x;
                    lastTime = now;
                }

                function dragEnd() {
                    if (!isDown) return;
                    isDown = false;
                    previousTranslate = currentTranslate;
                    shell.classList.remove('cursor-grabbing');
                    startMomentum();
                }

                // Prevent links / modals from triggering if the user is dragging
                shell.addEventListener('click', (e) => {
                    if (hasDragged) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }, { capture: true }); // Capture runs before inline handlers

                shell.addEventListener('mousedown', (e) => dragStart(e.pageX));
                window.addEventListener('mousemove', (e) => dragMove(e.pageX));
                window.addEventListener('mouseup', dragEnd);
                shell.addEventListener('mouseleave', dragEnd);

                shell.addEventListener('touchstart', (e) => dragStart(e.touches[0].clientX), { passive: true });
                shell.addEventListener('touchmove', (e) => dragMove(e.touches[0].clientX), { passive: true });
                shell.addEventListener('touchend', dragEnd, { passive: true });

                if (animationFrame) cancelAnimationFrame(animationFrame);
                autoMove();
            }

            // Target Featured Row
            setupTrack(
                document.querySelector('.featured-shell'),
                document.getElementById('featured-video-row'),
                0.5
            );

            // Target All Release Rows in Tabs (even dynamically created ones)
            document.querySelectorAll('.marquee-shell').forEach((shell) => {
                const track = shell.querySelector('.video-marquee');
                setupTrack(shell, track, 0.45);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed flex transition-transform duration-500 ease-in-out animate-fade-in delay-500 z-50 bg-transparent mix-blend-difference w-full pt-4 pr-6 pb-4 pl-6 top-0 items-center justify-between" id="navbar">
<a className="uppercase hover:opacity-70 transition-opacity bg-center text-lg font-medium text-white tracking-tighter font-display w-20 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04c89b99-5239-41bf-af38-f021be670f95_320w.png)] bg-cover" href="/home"></a>
<div className="hidden lg:flex gap-8 uppercase text-xs font-medium tracking-wide gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors text-neutral-400" href="/home">Home</a>
<a className="hover:text-white transition-colors text-neutral-400" href="https://dfptickets.sales.ticketsearch.com/sales/salesevent/154998">Tour</a>
<a className="hover:text-white transition-colors text-neutral-400" href="/about">About</a>
<a className="hover:text-white transition-colors text-neutral-400" href="/press">Press</a>
<a className="hover:text-white transition-colors text-neutral-400" href="/contact">Contact</a>
<div className="flex gap-4 border-x border-white/10 pr-6 pl-6 gap-x-4 gap-y-4 items-center">
<a className="hover:opacity-70 transition-opacity flex items-center justify-center" href="#"><img alt="S Logo" className="-translate-y-1 w-auto h-[18px] object-contain scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8871bf35-a005-4543-9012-a6c360b0e59f_320w.png"/></a>
<a className="hover:text-white transition-colors" href="https://youtube.com/@bellesisoski" target="_blank"><iconify-icon className="" icon="ri:youtube-line" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://instagram.com/bellesisoski" target="_blank"><iconify-icon className="" height="18" icon="ri:instagram-line" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://tiktok.com/@bellesisoski" target="_blank"><iconify-icon className="" height="18" icon="ri:tiktok-line" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://open.spotify.com/artist/1bNd6DQP6ZstuJ2FsFQO6a" target="_blank"><iconify-icon className="" height="18" icon="ri:spotify-line" style={{color: 'rgb(230, 230, 230)'}} width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://www.facebook.com/BelleSisoski" target="_blank"><iconify-icon className="" height="18" icon="ri:facebook-circle-line" style={{color: 'rgb(227, 227, 227)'}} width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://bellesisoski.bandcamp.com/album/ethnosphere" target="_blank"><iconify-icon className="" height="18" icon="simple-icons:bandcamp" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://music.apple.com/sg/artist/belle-sisoski/1619773270" target="_blank"><iconify-icon className="" height="18" icon="simple-icons:itunes" style={{color: 'rgb(252, 252, 252)'}} width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://soundcloud.com/bellesisoski?utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing" target="_blank"><iconify-icon className="" height="18" icon="ri:soundcloud-line" style={{color: 'rgb(234, 234, 234)'}} width="18"></iconify-icon></a>
</div>
<a className="inline-flex items-center justify-center transition-transform hover:scale-105 group animated-border-btn overflow-hidden text-xs font-medium text-orange-50 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative" href="https://1jadig-2e.myshopify.com">
<span className="z-10 flex items-center gap-2 relative">
                    Merchandise
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
<button aria-label="Open mobile menu" className="lg:hidden hover:text-neutral-400 transition-colors text-white relative z-50 mix-blend-difference" id="open-menu-btn">
<svg aria-hidden="true" fill="none" height="18" viewbox="0 0 28 18" width="28">
<line stroke="white" strokeLinecap="round" strokeWidth="1.8" x1="0" x2="28" y1="1.5" y2="1.5"></line>
<line stroke="white" strokeLinecap="round" strokeWidth="1.8" x1="0" x2="28" y1="9" y2="9"></line>
<line stroke="white" strokeLinecap="round" strokeWidth="1.8" x1="0" x2="28" y1="16.5" y2="16.5"></line>
</svg>
</button>
</nav>

<div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-500 ease-in-out flex flex-col items-center justify-center" id="mobile-menu">
<button aria-label="Close mobile menu" className="absolute top-5 right-6 text-white hover:text-neutral-400 transition-colors" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-8 text-center uppercase tracking-widest font-display text-2xl md:text-4xl text-white">
<a className="menu-link hover:text-neutral-400 transition-colors" href="#music">Home</a>
<a className="menu-link hover:text-neutral-400 transition-colors" href="#tour">Tour</a>
<a className="menu-link hover:text-neutral-400 transition-colors" href="/about">About</a>
<a className="menu-link hover:text-neutral-400 transition-colors" href="/press">Press</a>
<a className="menu-link hover:text-neutral-400 transition-colors" href="/contact">Contact</a>
<a className="mt-8 text-sm relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-transform hover:scale-105 group animated-border-btn overflow-hidden rounded-full mx-auto w-max" href="#">
<span className="relative z-10 flex items-center gap-2">
                    Merchandise
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
<div className="absolute bottom-12 flex gap-6 items-center flex-wrap justify-center px-6 border-t border-white/10 pt-8 w-full max-w-md">
<a className="hover:text-white transition-colors text-neutral-400" href="https://youtube.com/@bellesisoski" target="_blank"><iconify-icon icon="ri:youtube-line" width="22"></iconify-icon></a>
<a className="hover:text-white transition-colors text-neutral-400" href="https://instagram.com/bellesisoski" target="_blank"><iconify-icon icon="ri:instagram-line" width="22"></iconify-icon></a>
<a className="hover:text-white transition-colors text-neutral-400" href="https://tiktok.com/@bellesisoski" target="_blank"><iconify-icon icon="ri:tiktok-line" width="22"></iconify-icon></a>
<a className="hover:text-white transition-colors text-neutral-400" href="https://open.spotify.com/artist/1bNd6DQP6ZstuJ2FsFQO6a" target="_blank"><iconify-icon icon="ri:spotify-line" width="22"></iconify-icon></a>
<a className="hover:text-white transition-colors text-neutral-400" href="#" target="_blank"><iconify-icon icon="ri:facebook-circle-line" width="22"></iconify-icon></a>
<a className="hover:text-white transition-colors text-neutral-400" href="#" target="_blank"><iconify-icon icon="simple-icons:bandcamp" width="22"></iconify-icon></a>
<a className="hover:text-white transition-colors text-neutral-400" href="#" target="_blank"><iconify-icon icon="simple-icons:itunes" width="22"></iconify-icon></a>
<a className="hover:text-white transition-colors text-neutral-400" href="#" target="_blank"><iconify-icon icon="ri:soundcloud-line" width="22"></iconify-icon></a>
</div>
</div>

<header className="relative flex flex-col items-center justify-center w-full min-h-screen snap-start snap-always overflow-hidden bg-black">
<div className="bg-center animate-fade-in opacity-30 mix-blend-luminosity bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a10ee88f-7920-4ff4-a13b-d8f15d88d932_3840w.jpg')] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
<div className="z-10 flex flex-col gap-6 text-center pr-4 pl-4 relative gap-x-6 gap-y-6 items-center">
<h1 className="w-full max-w-xs md:max-w-3xl lg:max-w-5xl mx-auto animate-slide-up delay-100 drop-shadow-2xl">
<span className="sr-only">ETHNOSPHERE</span>
<img alt="ETHNOSPHERE" className="h-auto object-contain drop-shadow-2xl scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cfcea13-7165-48a8-bba7-24736c662bd8_800w.png"/>
</h1>
<p className="md:text-sm uppercase animate-slide-up delay-200 text-xs font-medium text-neutral-400 tracking-[0.3em]">The Debut ALbum</p>
<div className="mt-8 animate-slide-up delay-300">
<button className="uppercase hover:bg-white hover:text-black transition-all duration-300 hover:ring-white/50 cursor-pointer text-xs font-medium text-white tracking-widest bg-white/5 border-white/10 border ring-transparent ring-1 rounded-full pt-3 pr-8 pb-3 pl-8 backdrop-blur-md" onclick="window.location.href='https://ffm.to/ethnosphere'" role="button">
                    Listen Now
                </button>
</div>
</div>
<div className="absolute bottom-12 animate-bounce animate-fade-in delay-500">
<iconify-icon className="text-neutral-500" icon="solar:arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>

<section className="flex flex-col min-h-screen snap-start snap-always bg-black border-white/5 border-t pt-24 pb-24 relative justify-center" id="music">
<div className="lg:px-12 w-full max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6">
<span className="uppercase block text-xs font-medium text-neutral-500 tracking-widest mb-2">Listen Now</span>
<h2 className="md:text-5xl uppercase text-3xl font-medium text-white tracking-tighter font-display">Latest Release</h2>
</div>
<div className="lg:px-12 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:p-10 bg-neutral-900/30 rounded-none ring-0 pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm items-center justify-center">
<div className="relative group w-full max-w-lg aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
<img alt="Album Cover" className="filter group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105 cursor-pointer w-full h-full object-cover grayscale" onclick="window.location.href='https://ffm.to/ethnosphere'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39039772-9d3d-42e2-b827-3a30a84c581f_1600w.png"/>
</div>
</div>
</div>
</section>

<section className="flex flex-col min-h-screen snap-start snap-always bg-[#050505] pt-24 pb-24 relative justify-center" id="tour">
<div className="max-w-6xl mx-auto w-full px-6 lg:px-12">
<div className="flex border-white/5 border-b mb-16 pb-8 items-end justify-between">
<h2 className="font-display text-3xl md:text-5xl uppercase font-medium tracking-tighter text-white">Tour Dates</h2>
<a className="hidden md:flex items-center gap-2 uppercase hover:text-white transition-colors text-xs text-neutral-400 tracking-widest font-medium group" href="#">
                    View All 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="flex flex-col">
<div className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors -mx-6 px-6 rounded-2xl cursor-pointer">
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 flex-1">
<div className="text-xs text-neutral-500 tracking-widest font-mono uppercase w-24">11 Apr</div>
<div className="flex flex-col">
<h3 className="md:text-2xl group-hover:text-neutral-300 transition-colors uppercase text-xl font-medium text-white tracking-tight font-display">Malaysian Philharmonic Orchestra</h3>
<p className="text-xs text-neutral-500 mt-2 font-medium max-w-xl line-clamp-1">Dewan Filharmonik PETRONAS, Level Two, Tower Two, Kuala Lumpur</p>
</div>
</div>
<div className="flex items-center gap-6 mt-6 md:mt-0 justify-between md:justify-end">
<span className="text-[10px] uppercase font-medium text-emerald-400 tracking-widest bg-emerald-400/10 border-emerald-400/20 border rounded-full pt-1 pr-3 pb-1 pl-3">Selling Fast</span>
<button className="uppercase hover:bg-neutral-200 transition-colors cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full pt-2.5 pr-6 pb-2.5 pl-6" onclick="window.location.href='https://dfptickets.sales.ticketsearch.com/sales/salesevent/154998'" role="button">
                            Tickets
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col min-h-screen snap-start snap-always overflow-hidden bg-black border-white/5 border-t pt-24 pb-24 relative justify-center" id="featured-video">
<div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-12 relative z-20">
<h2 className="md:text-5xl uppercase text-3xl font-normal text-white tracking-tight font-display">Ethnosphere</h2>
</div>
<div className="z-10 lg:px-6 w-full pr-0 pl-0 relative">
<div className="featured-shell overflow-hidden relative w-full touch-pan-y select-none cursor-grab active:cursor-grabbing">
<div className="video-marquee flex gap-6 will-change-transform js-track-controlled w-max gap-x-6 gap-y-6" data-drag-ready="true" id="featured-video-row">

<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="NUOaozNHa78" onclick="openVideoModal('NUOaozNHa78')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/NUOaozNHa78/hqdefault.jpg';" src="https://img.youtube.com/vi/NUOaozNHa78/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="VWbzdnfunqM" onclick="openVideoModal('VWbzdnfunqM')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/VWbzdnfunqM/hqdefault.jpg';" src="https://img.youtube.com/vi/VWbzdnfunqM/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Lyric Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="TCGHVOeCTdE" onclick="openVideoModal('TCGHVOeCTdE')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/TCGHVOeCTdE/hqdefault.jpg';" src="https://img.youtube.com/vi/TCGHVOeCTdE/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Stripped)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="HbfmJYKyEo0" onclick="openVideoModal('HbfmJYKyEo0')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/HbfmJYKyEo0/hqdefault.jpg';" src="https://img.youtube.com/vi/HbfmJYKyEo0/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Live)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="YlkHiGcHUiE" onclick="openVideoModal('YlkHiGcHUiE')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/YlkHiGcHUiE/hqdefault.jpg';" src="https://img.youtube.com/vi/YlkHiGcHUiE/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVELATION (Performance Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="YkpzV_3AWZg" onclick="openVideoModal('YkpzV_3AWZg')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/YkpzV_3AWZg/hqdefault.jpg';" src="https://img.youtube.com/vi/YkpzV_3AWZg/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVELATION (Live in KLCC)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="rWO_nZgwgmk" onclick="openVideoModal('rWO_nZgwgmk')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/rWO_nZgwgmk/hqdefault.jpg';" src="https://img.youtube.com/vi/rWO_nZgwgmk/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE RESISTANCE (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="zF58V9PyaN8" onclick="openVideoModal('zF58V9PyaN8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/zF58V9PyaN8/hqdefault.jpg';" src="https://img.youtube.com/vi/zF58V9PyaN8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE RESISTANCE (Live)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>

<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="UVTICynRz8E" onclick="openVideoModal('UVTICynRz8E')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/UVTICynRz8E/hqdefault.jpg';" src="https://img.youtube.com/vi/UVTICynRz8E/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - Official Video</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="iuXAdxv9aVQ" onclick="openVideoModal('iuXAdxv9aVQ')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/iuXAdxv9aVQ/hqdefault.jpg';" src="https://img.youtube.com/vi/iuXAdxv9aVQ/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - Official Video</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="M3YmQhkTDAs" onclick="openVideoModal('M3YmQhkTDAs')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/M3YmQhkTDAs/hqdefault.jpg';" src="https://img.youtube.com/vi/M3YmQhkTDAs/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - Official Video</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>

<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="NUOaozNHa78" onclick="openVideoModal('NUOaozNHa78')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/NUOaozNHa78/hqdefault.jpg';" src="https://img.youtube.com/vi/NUOaozNHa78/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="VWbzdnfunqM" onclick="openVideoModal('VWbzdnfunqM')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/VWbzdnfunqM/hqdefault.jpg';" src="https://img.youtube.com/vi/VWbzdnfunqM/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Lyric Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="TCGHVOeCTdE" onclick="openVideoModal('TCGHVOeCTdE')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/TCGHVOeCTdE/hqdefault.jpg';" src="https://img.youtube.com/vi/TCGHVOeCTdE/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Stripped)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="HbfmJYKyEo0" onclick="openVideoModal('HbfmJYKyEo0')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/HbfmJYKyEo0/hqdefault.jpg';" src="https://img.youtube.com/vi/HbfmJYKyEo0/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Live)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="YlkHiGcHUiE" onclick="openVideoModal('YlkHiGcHUiE')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/YlkHiGcHUiE/hqdefault.jpg';" src="https://img.youtube.com/vi/YlkHiGcHUiE/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVELATION (Performance Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="YkpzV_3AWZg" onclick="openVideoModal('YkpzV_3AWZg')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/YkpzV_3AWZg/hqdefault.jpg';" src="https://img.youtube.com/vi/YkpzV_3AWZg/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVELATION (Live in KLCC)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="rWO_nZgwgmk" onclick="openVideoModal('rWO_nZgwgmk')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/rWO_nZgwgmk/hqdefault.jpg';" src="https://img.youtube.com/vi/rWO_nZgwgmk/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE RESISTANCE (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="zF58V9PyaN8" onclick="openVideoModal('zF58V9PyaN8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/zF58V9PyaN8/hqdefault.jpg';" src="https://img.youtube.com/vi/zF58V9PyaN8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE RESISTANCE (Live)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>

<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="UVTICynRz8E" onclick="openVideoModal('UVTICynRz8E')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/UVTICynRz8E/hqdefault.jpg';" src="https://img.youtube.com/vi/UVTICynRz8E/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - Official Video</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="iuXAdxv9aVQ" onclick="openVideoModal('iuXAdxv9aVQ')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/iuXAdxv9aVQ/hqdefault.jpg';" src="https://img.youtube.com/vi/iuXAdxv9aVQ/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - Official Video</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[85vw] md:w-[600px] lg:w-[720px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="M3YmQhkTDAs" onclick="openVideoModal('M3YmQhkTDAs')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/M3YmQhkTDAs/hqdefault.jpg';" src="https://img.youtube.com/vi/M3YmQhkTDAs/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - Official Video</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="flex flex-col min-h-screen snap-start snap-always py-24 relative justify-center bg-[#050505] border-t border-white/5 overflow-hidden" id="video">
<div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-8 relative z-20">
<h2 className="font-display text-3xl md:text-5xl uppercase font-medium text-white tracking-tighter">All Releases</h2>
</div>
<div className="max-w-7xl mx-auto w-full px-6 lg:px-12 mb-10">
<div className="flex overflow-x-auto no-scrollbar gap-8 border-b border-white/10 pb-4">
<button className="tab-btn text-xs font-medium tracking-widest uppercase text-white transition-colors whitespace-nowrap relative after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[1px] after:bg-white" id="btn-tab-live" onclick="switchTab('tab-live')">Live Sets</button>
<button className="tab-btn text-xs font-medium tracking-widest uppercase text-neutral-600 hover:text-neutral-400 transition-colors whitespace-nowrap relative after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[1px] after:bg-transparent" id="btn-tab-remix" onclick="switchTab('tab-remix')">Ethnic Remixes</button>
<button className="tab-btn text-xs font-medium tracking-widest uppercase text-neutral-600 hover:text-neutral-400 transition-colors whitespace-nowrap relative after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[1px] after:bg-transparent" id="btn-tab-original" onclick="switchTab('tab-original')">Original Music</button>
</div>
</div>
<div className="w-full px-0 lg:px-6">
<div className="tab-content flex flex-col gap-6" id="tab-live">
<div className="marquee-shell overflow-hidden relative cursor-grab active:cursor-grabbing">
<div className="video-marquee js-track-controlled" data-drag-ready="true">
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="YL1PQTR4hzw" onclick="openVideoModal('YL1PQTR4hzw')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/YL1PQTR4hzw/hqdefault.jpg';" src="https://img.youtube.com/vi/YL1PQTR4hzw/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - BORDERLAND MUSIC FEST (Full Live Set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="shr2v8o9CUo" onclick="openVideoModal('shr2v8o9CUo')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/shr2v8o9CUo/hqdefault.jpg';" src="https://img.youtube.com/vi/shr2v8o9CUo/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - MELODIC TECHNO/HOUSE MIX (@Hublot Party)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="1MIJhFpOSxs" onclick="openVideoModal('1MIJhFpOSxs')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/1MIJhFpOSxs/hqdefault.jpg';" src="https://img.youtube.com/vi/1MIJhFpOSxs/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - SUPALAPA (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="8NQNRRKcC_E" onclick="openVideoModal('8NQNRRKcC_E')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/8NQNRRKcC_E/hqdefault.jpg';" src="https://img.youtube.com/vi/8NQNRRKcC_E/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - RAINFOREST WORLD MUSIC FESTIVAL (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="YL1PQTR4hzw" onclick="openVideoModal('YL1PQTR4hzw')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/YL1PQTR4hzw/hqdefault.jpg';" src="https://img.youtube.com/vi/YL1PQTR4hzw/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - BORDERLAND MUSIC FEST (Full Live Set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="shr2v8o9CUo" onclick="openVideoModal('shr2v8o9CUo')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/shr2v8o9CUo/hqdefault.jpg';" src="https://img.youtube.com/vi/shr2v8o9CUo/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - MELODIC TECHNO/HOUSE MIX (@Hublot Party)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="1MIJhFpOSxs" onclick="openVideoModal('1MIJhFpOSxs')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/1MIJhFpOSxs/hqdefault.jpg';" src="https://img.youtube.com/vi/1MIJhFpOSxs/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - SUPALAPA (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="8NQNRRKcC_E" onclick="openVideoModal('8NQNRRKcC_E')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/8NQNRRKcC_E/hqdefault.jpg';" src="https://img.youtube.com/vi/8NQNRRKcC_E/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - RAINFOREST WORLD MUSIC FESTIVAL (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
</div>
</div>
<div className="marquee-shell overflow-hidden relative cursor-grab active:cursor-grabbing">
<div className="video-marquee reverse js-track-controlled" data-drag-ready="true">
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="HYUK8OPUyP8" onclick="openVideoModal('HYUK8OPUyP8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/HYUK8OPUyP8/hqdefault.jpg';" src="https://img.youtube.com/vi/HYUK8OPUyP8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - PITT CLUB (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="aVhMIvGLvfI" onclick="openVideoModal('aVhMIvGLvfI')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/aVhMIvGLvfI/hqdefault.jpg';" src="https://img.youtube.com/vi/aVhMIvGLvfI/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - RHYTHMS OF KINABALU (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="SLJz7UMy1rI" onclick="openVideoModal('SLJz7UMy1rI')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/SLJz7UMy1rI/hqdefault.jpg';" src="https://img.youtube.com/vi/SLJz7UMy1rI/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - LIVE IN KLCC (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="dVJ15CeE4Z8" onclick="openVideoModal('dVJ15CeE4Z8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/dVJ15CeE4Z8/hqdefault.jpg';" src="https://img.youtube.com/vi/dVJ15CeE4Z8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - GEMU CLUB (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="HYUK8OPUyP8" onclick="openVideoModal('HYUK8OPUyP8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/HYUK8OPUyP8/hqdefault.jpg';" src="https://img.youtube.com/vi/HYUK8OPUyP8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - PITT CLUB (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="aVhMIvGLvfI" onclick="openVideoModal('aVhMIvGLvfI')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/aVhMIvGLvfI/hqdefault.jpg';" src="https://img.youtube.com/vi/aVhMIvGLvfI/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - RHYTHMS OF KINABALU (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="SLJz7UMy1rI" onclick="openVideoModal('SLJz7UMy1rI')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/SLJz7UMy1rI/hqdefault.jpg';" src="https://img.youtube.com/vi/SLJz7UMy1rI/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - LIVE IN KLCC (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="dVJ15CeE4Z8" onclick="openVideoModal('dVJ15CeE4Z8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/dVJ15CeE4Z8/hqdefault.jpg';" src="https://img.youtube.com/vi/dVJ15CeE4Z8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - GEMU CLUB (full live set)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
</div>
</div></div>
<div className="tab-content hidden flex-col gap-6" id="tab-remix">
<div className="marquee-shell overflow-hidden relative cursor-grab active:cursor-grabbing">
<div className="video-marquee js-track-controlled" data-drag-ready="true">
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="CujnUDdRwRo" onclick="openVideoModal('CujnUDdRwRo')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/CujnUDdRwRo/hqdefault.jpg';" src="https://img.youtube.com/vi/CujnUDdRwRo/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">左手指月 (Ethnic Cinematic Remix by Belle Sisoski 贝诗)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="kUdw_lhwysc" onclick="openVideoModal('kUdw_lhwysc')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/kUdw_lhwysc/hqdefault.jpg';" src="https://img.youtube.com/vi/kUdw_lhwysc/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">YOUR IDOL - Ethnic Southeast Asia + Saja Boys | Kpop Demon Hunters (remix by Belle Sisoski)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="MOZxgPNqIZY" onclick="openVideoModal('MOZxgPNqIZY')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/MOZxgPNqIZY/hqdefault.jpg';" src="https://img.youtube.com/vi/MOZxgPNqIZY/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">CHAIYYA CHAIYYA - Ethnic Southeast Asian + epic cinematic (remix by Belle Sisoski)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="rL1wZ8LW98I" onclick="openVideoModal('rL1wZ8LW98I')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/rL1wZ8LW98I/hqdefault.jpg';" src="https://img.youtube.com/vi/rL1wZ8LW98I/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">SHINUNOGA E-WA  - @FujiiKaze + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="CujnUDdRwRo" onclick="openVideoModal('CujnUDdRwRo')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/CujnUDdRwRo/hqdefault.jpg';" src="https://img.youtube.com/vi/CujnUDdRwRo/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">左手指月 (Ethnic Cinematic Remix by Belle Sisoski 贝诗)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="kUdw_lhwysc" onclick="openVideoModal('kUdw_lhwysc')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/kUdw_lhwysc/hqdefault.jpg';" src="https://img.youtube.com/vi/kUdw_lhwysc/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">YOUR IDOL - Ethnic Southeast Asia + Saja Boys | Kpop Demon Hunters (remix by Belle Sisoski)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="MOZxgPNqIZY" onclick="openVideoModal('MOZxgPNqIZY')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/MOZxgPNqIZY/hqdefault.jpg';" src="https://img.youtube.com/vi/MOZxgPNqIZY/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">CHAIYYA CHAIYYA - Ethnic Southeast Asian + epic cinematic (remix by Belle Sisoski)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="rL1wZ8LW98I" onclick="openVideoModal('rL1wZ8LW98I')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/rL1wZ8LW98I/hqdefault.jpg';" src="https://img.youtube.com/vi/rL1wZ8LW98I/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">SHINUNOGA E-WA  - @FujiiKaze + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
</div>
</div>
<div className="marquee-shell overflow-hidden relative cursor-grab active:cursor-grabbing">
<div className="video-marquee reverse js-track-controlled" data-drag-ready="true">
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="VMIL1YbUQrI" onclick="openVideoModal('VMIL1YbUQrI')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/VMIL1YbUQrI/hqdefault.jpg';" src="https://img.youtube.com/vi/VMIL1YbUQrI/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">LEGENDS NEVER DIE - @leagueoflegends + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="pzgEr30Fji0" onclick="openVideoModal('pzgEr30Fji0')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/pzgEr30Fji0/hqdefault.jpg';" src="https://img.youtube.com/vi/pzgEr30Fji0/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">KILL BILL - @sza + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="n4sml_LfzI8" onclick="openVideoModal('n4sml_LfzI8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/n4sml_LfzI8/hqdefault.jpg';" src="https://img.youtube.com/vi/n4sml_LfzI8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">MIDDLE OF THE NIGHT - @elleyduhe + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="stK8MlJbP88" onclick="openVideoModal('stK8MlJbP88')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/stK8MlJbP88/hqdefault.jpg';" src="https://img.youtube.com/vi/stK8MlJbP88/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">MAKEBA - @JainOfficialChannel + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="VMIL1YbUQrI" onclick="openVideoModal('VMIL1YbUQrI')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/VMIL1YbUQrI/hqdefault.jpg';" src="https://img.youtube.com/vi/VMIL1YbUQrI/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">LEGENDS NEVER DIE - @leagueoflegends + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="pzgEr30Fji0" onclick="openVideoModal('pzgEr30Fji0')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/pzgEr30Fji0/hqdefault.jpg';" src="https://img.youtube.com/vi/pzgEr30Fji0/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">KILL BILL - @sza + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="n4sml_LfzI8" onclick="openVideoModal('n4sml_LfzI8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/n4sml_LfzI8/hqdefault.jpg';" src="https://img.youtube.com/vi/n4sml_LfzI8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">MIDDLE OF THE NIGHT - @elleyduhe + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="stK8MlJbP88" onclick="openVideoModal('stK8MlJbP88')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/stK8MlJbP88/hqdefault.jpg';" src="https://img.youtube.com/vi/stK8MlJbP88/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">MAKEBA - @JainOfficialChannel + Ethnic Instruments</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
</div>
</div></div>
<div className="tab-content hidden flex-col gap-6" id="tab-original">
<div className="marquee-shell overflow-hidden relative cursor-grab active:cursor-grabbing">
<div className="video-marquee js-track-controlled" data-drag-ready="true">
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="Dgl-OdHtBoY" onclick="openVideoModal('Dgl-OdHtBoY')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/Dgl-OdHtBoY/hqdefault.jpg';" src="https://img.youtube.com/vi/Dgl-OdHtBoY/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - HOLD ON (Official Music Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="MS5tAs9_n8U" onclick="openVideoModal('MS5tAs9_n8U')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/MS5tAs9_n8U/hqdefault.jpg';" src="https://img.youtube.com/vi/MS5tAs9_n8U/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - FOCUS (Visualiser)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="e79Rv7o2iPE" onclick="openVideoModal('e79Rv7o2iPE')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/e79Rv7o2iPE/hqdefault.jpg';" src="https://img.youtube.com/vi/e79Rv7o2iPE/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - STOP YOUR GAMES (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="Afh_bXD80T8" onclick="openVideoModal('Afh_bXD80T8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/Afh_bXD80T8/hqdefault.jpg';" src="https://img.youtube.com/vi/Afh_bXD80T8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - MOTHER'S CALLING. (Visualizer)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="Dgl-OdHtBoY" onclick="openVideoModal('Dgl-OdHtBoY')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/Dgl-OdHtBoY/hqdefault.jpg';" src="https://img.youtube.com/vi/Dgl-OdHtBoY/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - HOLD ON (Official Music Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="MS5tAs9_n8U" onclick="openVideoModal('MS5tAs9_n8U')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/MS5tAs9_n8U/hqdefault.jpg';" src="https://img.youtube.com/vi/MS5tAs9_n8U/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - FOCUS (Visualiser)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="e79Rv7o2iPE" onclick="openVideoModal('e79Rv7o2iPE')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/e79Rv7o2iPE/hqdefault.jpg';" src="https://img.youtube.com/vi/e79Rv7o2iPE/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - STOP YOUR GAMES (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="Afh_bXD80T8" onclick="openVideoModal('Afh_bXD80T8')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/Afh_bXD80T8/hqdefault.jpg';" src="https://img.youtube.com/vi/Afh_bXD80T8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - MOTHER'S CALLING. (Visualizer)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
</div>
</div>
<div className="marquee-shell overflow-hidden relative cursor-grab active:cursor-grabbing">
<div className="video-marquee reverse js-track-controlled" data-drag-ready="true">
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="NUOaozNHa78" onclick="openVideoModal('NUOaozNHa78')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/NUOaozNHa78/hqdefault.jpg';" src="https://img.youtube.com/vi/NUOaozNHa78/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="YlkHiGcHUiE" onclick="openVideoModal('YlkHiGcHUiE')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/YlkHiGcHUiE/hqdefault.jpg';" src="https://img.youtube.com/vi/YlkHiGcHUiE/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVELATION (Performance Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="rWO_nZgwgmk" onclick="openVideoModal('rWO_nZgwgmk')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/rWO_nZgwgmk/hqdefault.jpg';" src="https://img.youtube.com/vi/rWO_nZgwgmk/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE RESISTANCE (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="VWbzdnfunqM" onclick="openVideoModal('VWbzdnfunqM')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/VWbzdnfunqM/hqdefault.jpg';" src="https://img.youtube.com/vi/VWbzdnfunqM/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Lyric Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="NUOaozNHa78" onclick="openVideoModal('NUOaozNHa78')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/NUOaozNHa78/hqdefault.jpg';" src="https://img.youtube.com/vi/NUOaozNHa78/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="YlkHiGcHUiE" onclick="openVideoModal('YlkHiGcHUiE')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/YlkHiGcHUiE/hqdefault.jpg';" src="https://img.youtube.com/vi/YlkHiGcHUiE/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVELATION (Performance Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="rWO_nZgwgmk" onclick="openVideoModal('rWO_nZgwgmk')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/rWO_nZgwgmk/hqdefault.jpg';" src="https://img.youtube.com/vi/rWO_nZgwgmk/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE RESISTANCE (Studio Session)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
<div className="relative w-[75vw] md:w-[340px] lg:w-[400px] aspect-video flex-none rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-white/10 bg-neutral-900" data-video-id="VWbzdnfunqM" onclick="openVideoModal('VWbzdnfunqM')">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0" onerror="this.src='https://img.youtube.com/vi/VWbzdnfunqM/hqdefault.jpg';" src="https://img.youtube.com/vi/VWbzdnfunqM/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
<div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-1 z-20">
<h3 className="video-card-title text-white font-display font-medium text-sm lg:text-base tracking-tight line-clamp-1">Belle Sisoski - THE REVIVAL (Lyric Video)</h3>
<span className="text-neutral-400 text-xs uppercase tracking-widest font-medium">Watch Video</span>
</div>
</div>
</div>
</div></div>
</div>
</section>

<div className="flex flex-col min-h-screen snap-start snap-always bg-black w-full border-white/5 border-t">
<section className="flex-1 flex flex-col w-full max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative justify-center">
<a className="block group overflow-hidden w-full ring-0 rounded-none relative" href="#">
<div className="group-hover:bg-transparent transition-colors duration-500 z-0 border-0 rounded-none ring-0 absolute top-0 right-0 bottom-0 left-0 scale-75"></div>
<img alt="Featured" className="aspect-video transform filter w-full object-cover grayscale scale-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/146a8233-cabd-4254-805b-3eec1c7f959c_1600w.png"/>
</a>
</section>
<footer className="border-t border-white/5 py-8 px-6 lg:px-12 bg-[#020202]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-xs text-neutral-600 font-medium tracking-wide">© 2024 Belle Sisoski. All Rights Reserved.</span>
<div className="flex items-center gap-6">
<a className="text-xs text-neutral-600 hover:text-white transition-colors uppercase tracking-widest" href="#">Privacy</a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors uppercase tracking-widest" href="#">Terms</a>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl opacity-0 pointer-events-none transition-all duration-500 flex items-center justify-center p-4 lg:p-12" id="videoModal">
<button className="absolute top-6 right-6 lg:top-10 lg:right-10 text-neutral-500 hover:text-white transition-colors z-50 group" onclick="closeVideoModal()">
<iconify-icon className="group-hover:rotate-90 transition-transform duration-300" icon="solar:close-circle-linear" strokeWidth="1.5" width="36"></iconify-icon>
</button>
<div className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative transform scale-95 transition-transform duration-500 ring-1 ring-white/10" id="videoContainer">
</div>
</div>


    </>
  );
}
