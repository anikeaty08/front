import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Header scroll state
    const header = document.getElementById('siteHeader');
    const navShell = document.getElementById('navShell');
    const logoLight = document.getElementById('logoLight');
    const logoLightSub = document.getElementById('logoLightSub');
    const logoDark = document.getElementById('logoDark');
    const logoDarkSub = document.getElementById('logoDarkSub');
    const navLinks = Array.from(document.querySelectorAll('.navLink'));
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = Array.from(document.querySelectorAll('.mobileLink'));

    function setScrolled(scrolled) {
      if (scrolled) {
        navShell.className = "mt-3 rounded-2xl border border-[#2F3E35]/10 bg-white/70 shadow-sm shadow-[#2F3E35]/10 backdrop-blur-xl";
        logoLight.classList.add('hidden');
        logoLightSub.classList.add('hidden');
        logoDark.classList.remove('hidden');
        logoDarkSub.classList.remove('hidden');

        // Make the lotus icon dark
        header.querySelectorAll('svg').forEach(svg => svg.classList.add('text-[#2F3E35]'));

        navLinks.forEach(a => {
          a.classList.remove('text-[#F7F5F0]/90', 'hover:text-[#F7F5F0]');
          a.classList.add('text-[#2F3E35]/75', 'hover:text-[#2F3E35]');
        });

        menuBtn.className = "md:hidden inline-flex items-center justify-center rounded-full border border-[#2F3E35]/15 bg-white/60 px-3 py-2 text-[#2F3E35] backdrop-blur-sm transition hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#2F3E35]/15";
        mobileNav.classList.add('border-[#2F3E35]/10');
        mobileNav.classList.remove('border-white/10');

        mobileLinks.forEach(a => {
          a.classList.remove('text-[#F7F5F0]/90', 'hover:bg-white/10', 'hover:text-[#F7F5F0]');
          a.classList.add('text-[#2F3E35]/80', 'hover:bg-[#2F3E35]/5', 'hover:text-[#2F3E35]');
        });
      } else {
        navShell.className = "mt-3 rounded-2xl border border-transparent bg-transparent";
        logoLight.classList.remove('hidden');
        logoLightSub.classList.remove('hidden');
        logoDark.classList.add('hidden');
        logoDarkSub.classList.add('hidden');

        header.querySelectorAll('svg').forEach(svg => svg.classList.remove('text-[#2F3E35]'));

        navLinks.forEach(a => {
          a.classList.remove('text-[#2F3E35]/75', 'hover:text-[#2F3E35]');
          a.classList.add('text-[#F7F5F0]/90', 'hover:text-[#F7F5F0]');
        });

        menuBtn.className = "md:hidden inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[#F7F5F0] backdrop-blur-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30";
        mobileNav.classList.add('border-white/10');
        mobileNav.classList.remove('border-[#2F3E35]/10');

        mobileLinks.forEach(a => {
          a.classList.remove('text-[#2F3E35]/80', 'hover:bg-[#2F3E35]/5', 'hover:text-[#2F3E35]');
          a.classList.add('text-[#F7F5F0]/90', 'hover:bg-white/10', 'hover:text-[#F7F5F0]');
        });
      }
    }

    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    menuBtn.addEventListener('click', () => {
      const isOpen = !mobileNav.classList.contains('hidden');
      if (isOpen) {
        mobileNav.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '<span class="sr-only">Open menu</span><span class="iconify" data-icon="lucide:menu" data-width="18" data-height="18"></span>';
      } else {
        mobileNav.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.innerHTML = '<span class="sr-only">Close menu</span><span class="iconify" data-icon="lucide:x" data-width="18" data-height="18"></span>';
      }
    });

    // Countdown (static simulation, gently updates)
    const countdownEl = document.getElementById('countdown');
    let remainingMin = 105; // 01h 45m
    function renderCountdown() {
      const h = Math.floor(remainingMin / 60);
      const m = remainingMin % 60;
      countdownEl.textContent = String(h).padStart(2, '0') + 'h ' + String(m).padStart(2, '0') + 'm';
    }
    renderCountdown();
    setInterval(() => {
      remainingMin = Math.max(0, remainingMin - 1);
      renderCountdown();
    }, 60000);

    // Newsletter submit (client-side)
    const form = document.getElementById('newsletterForm');
    const note = document.getElementById('newsletterNote');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      if (!email) return;
      note.textContent = "You're in. Welcome to the circle.";
      note.className = "mt-3 text-xs text-[#F7F5F0]/90";
      form.reset();
    });

    // Ensure icon stroke width 1.5 visually by using outlined icons; Iconify uses the set defaults.
    // (No additional styling required.)
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed -z-10 top-0 right-0 bottom-0 left-0">
<div className="-top-24 -translate-x-1/2 bg-[#8A9A8B]/15 w-[28rem] h-[28rem] rounded-full absolute left-1/2 blur-3xl"></div>
<div className="absolute bottom-[-10rem] left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-[#2F3E35]/10 blur-3xl"></div>
<div className="absolute top-[35%] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#8A9A8B]/10 blur-3xl"></div>
</div>

<header className="fixed inset-x-0 top-0 z-50 transition-all duration-300" id="siteHeader">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-3 rounded-2xl border border-[#2F3E35]/10 bg-white/70 shadow-sm shadow-[#2F3E35]/10 backdrop-blur-xl" id="navShell">
<div className="flex items-center justify-between px-3 py-3 sm:px-4">

<a className="group flex items-center gap-2.5" href="#">

<svg aria-hidden="true" className="w-[36px] h-[36px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(47, 62, 53)', width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path d="M24 7.5c2.2 4.8 2.2 9.6 0 14.4C21.8 17.1 21.8 12.3 24 7.5Z" id="lotusStroke" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M14.4 12.6c5.2 1.3 8.9 4.3 11.1 9-4.9-.8-8.6-3.8-11.1-9Z" id="lotusStroke2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M33.6 12.6c-2.5 5.2-6.2 8.2-11.1 9 2.2-4.7 5.9-7.7 11.1-9Z" id="lotusStroke3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M10.2 23.2c6.2-.6 11.1 1.4 14.7 6.1-5.6 1-10.5-1.1-14.7-6.1Z" id="lotusStroke4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M37.8 23.2c-4.2 5-9.1 7.1-14.7 6.1 3.6-4.7 8.5-6.7 14.7-6.1Z" id="lotusStroke5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M24 29.4c3.5 1.6 6.1 4.6 7.7 9.1-3.8-1.1-6.4-4.1-7.7-9.1Z" id="lotusStroke6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M24 29.4c-1.3 5-3.9 8-7.7 9.1 1.6-4.5 4.2-7.5 7.7-9.1Z" id="lotusStroke7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>

<div className="leading-none">
<div className="flex gap-2 items-baseline">
<span className="cursor-pointer text-lg font-medium text-[#F7F5F0] tracking-tight" id="logoLight" onclick="window.location.href='/home'" role="button" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>Aetheria</span>
<span className="sm:inline cursor-pointer text-xs font-medium text-[#F7F5F0]/80 tracking-wide" id="logoLightSub" onclick="window.location.href='/home'" role="button">Wellness</span>
<span className="text-lg font-medium text-[#2F3E35] tracking-tight" id="logoDark" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif', display: 'none'}}>Aetheria</span>
<span className="sm:inline cursor-pointer text-xs font-medium text-[#2F3E35]/70 tracking-wide" id="logoDarkSub" onclick="window.location.href='/design-system';window.location.href='/design-system'" role="button">Wellness</span>
</div>
</div>
</a>

<nav className="hidden md:flex items-center gap-7 text-sm font-medium">
<a className="navLink transition-colors" href="/home">The Studio</a>
<a className="navLink transition-colors" href="/class">Classes</a>
<a className="navLink transition-colors" href="/instructors">Instructors</a>
<a className="navLink transition-colors" href="/retreats">Retreats</a>
</nav>

<div className="flex items-center gap-2 sm:gap-3">
<a className="hidden sm:inline text-sm font-medium navLink transition-colors" href="#login">Login</a>
<a className="inline-flex items-center justify-center shadow-[#2F3E35]/10 hover:bg-[#7f8f80] focus:outline-none focus:ring-2 focus:ring-[#8A9A8B]/50 focus:ring-offset-2 focus:ring-offset-transparent transition text-sm font-medium text-[#F7F5F0] bg-[#8A9A8B] rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="/class">
              Book a Class
            </a>

<button aria-controls="mobileNav" aria-expanded="false" className="md:hidden inline-flex items-center justify-center rounded-full border border-[#2F3E35]/15 bg-white/60 px-3 py-2 text-[#2F3E35] backdrop-blur-sm transition hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#2F3E35]/15" id="menuBtn">
<span className="sr-only">Open menu</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:menu" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden border-t px-4 pb-4 pt-3" id="mobileNav" style={{visibility: 'hidden', display: 'none'}}>
<div className="grid gap-2 text-sm font-medium">
<a className="mobileLink rounded-xl px-3 py-2 transition" href="#studio">The Studio</a>
<a className="mobileLink rounded-xl px-3 py-2 transition" href="#classes">Classes</a>
<a className="mobileLink rounded-xl px-3 py-2 transition" href="#instructors">Instructors</a>
<a className="mobileLink rounded-xl px-3 py-2 transition" href="#retreats">Retreats</a>
<a className="mobileLink rounded-xl px-3 py-2 transition" href="#login">Login</a>
</div>
</div>
</div>
</div>
</header>

<section className="relative min-h-[100svh] overflow-hidden">

<div className="absolute top-0 right-0 bottom-0 left-0">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1554311884-415bfda6a5f2?auto=format&amp;fit=crop&amp;w=2400&amp;q=70">
<source className="" src="https://cdn.coverr.co/videos/coverr-woman-meditating-by-the-window-4135/1080p.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-[#2F3E35]/45 via-[#2F3E35]/20 to-[#F7F5F0]/90"></div>
<div className="bg-[#2F3E35]/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex min-h-[100svh] sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-14 pl-4 relative items-end">

<div className="overflow-hidden rounded-3xl absolute top-0 right-0 bottom-0 left-0">
<img alt="Sanctuary ambiance" className="transition-transform duration-700 hover:scale-105 opacity-100 mix-blend-multiply w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/352469cb-8a32-4217-9a65-5c1aeb559715_3840w.webp"/>
<div className="mix-blend-multiply absolute top-0 right-0 bottom-0 left-0 pointer-events-auto -z-20"></div>
</div>
<div className="relative z-10 w-full">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-[#F7F5F0]/90 backdrop-blur-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:leaf" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
            Holistic movement • meditation • sound
          </div>
<h1 className="mt-6 text-4xl font-medium tracking-tight text-[#F7F5F0] sm:text-5xl lg:text-6xl" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
            Align Body. Clarity Mind. Soothe Spirit.
          </h1>
<p className="mt-5 max-w-xl text-sm font-normal leading-relaxed text-[#F7F5F0]/85 sm:text-base">
            Your holistic sanctuary in the heart of the city.
          </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8A9A8B] px-6 py-3 text-sm font-medium text-[#F7F5F0] shadow-sm shadow-[#2F3E35]/20 hover:bg-[#7f8f80] focus:outline-none focus:ring-2 focus:ring-[#8A9A8B]/50 focus:ring-offset-2 focus:ring-offset-[#2F3E35]/0 transition" href="#journey">
              Start Your Journey
              <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 transition text-sm font-medium text-[#F7F5F0] bg-white/10 border-white/35 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" href="/class">
              View Class Schedule
              <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:calendar" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</a>
</div>
<div className="mt-10 flex items-center gap-5 text-xs font-medium text-[#F7F5F0]/80">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-[#F7F5F0]/70"></span>
              Low-saturation, calming space
            </div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-[#F7F5F0]/70"></span>
              Small group classes
            </div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none -translate-x-1/2 absolute bottom-6 left-1/2">
<div className="flex gap-2 text-xs font-medium text-[#F7F5F0]/85 bg-white/10 border-white/20 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm items-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:mouse" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="7" width="14" x="5" y="2"></rect><path d="M12 6v4"></path></g></svg>
        Scroll
      </div>
</div>
</section>

<section className="relative scroll-mt-28" id="studio">
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#2F3E35]/10 bg-white/40 px-4 py-2 text-xs font-medium tracking-wide text-[#2F3E35]/80 shadow-sm shadow-[#2F3E35]/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:wind" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            A pause, designed with intention
          </div>
<h2 className="mt-6 text-3xl font-medium tracking-tight text-[#2F3E35] sm:text-4xl" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
            Not just a studio. A space to breathe.
          </h2>
<p className="mt-5 text-sm leading-relaxed text-[#2F3E35]/80 sm:text-base">
            In a world that never stops, Aetheria offers a pause. We combine ancient yogic traditions with modern somatic therapy to help you find your rhythm.
          </p>
<div className="mt-8 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-[#2F3E35]/10 bg-white/55 p-5 shadow-sm shadow-[#2F3E35]/5">
<div className="flex items-start gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8A9A8B]/20 text-[#2F3E35]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:heart" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<div className="text-sm font-medium text-[#2F3E35]">Somatic-informed</div>
<div className="mt-1 text-xs leading-relaxed text-[#2F3E35]/70">Build awareness, safety, and ease—one breath at a time.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#2F3E35]/10 bg-white/55 p-5 shadow-sm shadow-[#2F3E35]/5">
<div className="flex items-start gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8A9A8B]/20 text-[#2F3E35]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:sparkles" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="">
<div className="text-sm font-medium text-[#2F3E35]">Calm ritual</div>
<div className="mt-1 text-xs leading-relaxed text-[#2F3E35]/70">Soft light, organic textures, and thoughtful pacing.</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative overflow-hidden rounded-3xl border border-[#2F3E35]/10 bg-white/40 shadow-lg shadow-[#2F3E35]/10">
<img alt="A calm studio corner with earthy textures" className="sm:h-[30rem] w-full h-[26rem] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58e8b929-46f7-4ac2-afcc-365ff8c16826_1600w.jpg?w=800&amp;q=80" style={{}}/>
<div className="bg-gradient-to-t from-[#2F3E35]/30 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/35 p-4 backdrop-blur-md">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs font-medium text-[#2F3E35]/80">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:flame" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Studio ritual
                  </div>
<div className="text-xs font-medium text-[#2F3E35]/70">Clay • jute • gentle smoke</div>
</div>
<div className="text-sm font-medium text-[#2F3E35]" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                  Warm, quiet, and intentionally minimal.
                </div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-[#2F3E35]/60">
            Images are illustrative placeholders to match the intended mood: low saturation, soft shadow, breathable composition.
          </div>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-28" id="journey">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-[#2F3E35] sm:text-4xl" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
            The experience, curated into pathways.
          </h2>
<p className="mt-4 text-sm leading-relaxed text-[#2F3E35]/75 sm:text-base">
            Choose what your nervous system needs today—then let your practice guide you back to center.
          </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#2F3E35]/80 hover:text-[#2F3E35] transition" href="#classes">
          Explore classes
          <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-3">

<article className="group rounded-3xl border border-[#2F3E35]/10 bg-white/50 p-6 shadow-sm shadow-[#2F3E35]/5 transition hover:shadow-md hover:shadow-[#2F3E35]/10">
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-medium text-[#2F3E35]" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>Movement</div>
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8A9A8B]/20 text-[#2F3E35]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:activity" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-5 overflow-hidden rounded-full border border-[#2F3E35]/10 bg-[#F7F5F0] shadow-sm shadow-[#2F3E35]/5">
<img alt="Abstract yoga movement" className="aspect-square w-full object-cover saturate-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbd2be38-6163-4516-a322-516a7a82d667_1600w.webp" style={{}}/>
</div>
<p className="mt-5 text-sm leading-relaxed text-[#2F3E35]/75">
            Dynamic flows to build strength.
          </p>
<div className="mt-5 flex items-center justify-between text-xs text-[#2F3E35]/65">
<span>Vinyasa • Mobility</span>
<span className="inline-flex items-center gap-1.5">
              45–60 min
              <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</span>
</div>
</article>

<article className="group rounded-3xl border border-[#2F3E35]/10 bg-white/50 p-6 shadow-sm shadow-[#2F3E35]/5 transition hover:shadow-md hover:shadow-[#2F3E35]/10">
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-medium text-[#2F3E35]" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>Stillness</div>
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8A9A8B]/20 text-[#2F3E35]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:moon" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-5 overflow-hidden rounded-full border border-[#2F3E35]/10 bg-[#F7F5F0] shadow-sm shadow-[#2F3E35]/5">
<img alt="Hands resting in a gentle meditation mudra" className="aspect-square w-full object-cover saturate-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e710d7d-e9d7-4d30-ac98-d85eb5c19e67_1600w.webp" style={{}}/>
</div>
<p className="mt-5 text-sm leading-relaxed text-[#2F3E35]/75">
            Guided Meditation to release tension.
          </p>
<div className="mt-5 flex items-center justify-between text-xs text-[#2F3E35]/65">
<span>Breath • Nidra</span>
<span className="inline-flex items-center gap-1.5">
              20–45 min
              <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</span>
</div>
</article>

<article className="group rounded-3xl border border-[#2F3E35]/10 bg-white/50 p-6 shadow-sm shadow-[#2F3E35]/5 transition hover:shadow-md hover:shadow-[#2F3E35]/10">
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-medium text-[#2F3E35]" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>Resonance</div>
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8A9A8B]/20 text-[#2F3E35]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:waves" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-5 overflow-hidden rounded-full border border-[#2F3E35]/10 bg-[#F7F5F0] shadow-sm shadow-[#2F3E35]/5">
<img alt="A minimal sound bowl detail" className="aspect-square w-full object-cover saturate-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c87b2534-a3c0-4f40-8666-7e8328cb3917_1600w.webp" style={{}}/>
</div>
<p className="mt-5 text-sm leading-relaxed text-[#2F3E35]/75">
            Sound Baths to recalibrate.
          </p>
<div className="mt-5 flex items-center justify-between text-xs text-[#2F3E35]/65">
<span className="">Bowls • Tuning</span>
<span className="inline-flex items-center gap-1.5">
              45–60 min
              <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</span>
</div>
</article>
</div>
</div>
</section>

<section className="relative scroll-mt-28" id="classes">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
<div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<h2 className="text-3xl font-medium tracking-tight text-[#2F3E35] sm:text-4xl" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
            Upcoming class
          </h2>
<p className="mt-4 text-sm leading-relaxed text-[#2F3E35]/75 sm:text-base">
            A gentle nudge to move from “maybe” to “I’m going.”
          </p>
<div className="mt-6 rounded-2xl border border-[#2F3E35]/10 bg-white/50 p-5 shadow-sm shadow-[#2F3E35]/5">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#8A9A8B]/20 text-[#2F3E35]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:timer" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 2h4m-2 12l3-3"></path><circle cx="12" cy="14" r="8"></circle></g></svg>
</div>
<div className="">
<div className="text-sm font-medium text-[#2F3E35]">Starting soon</div>
<div className="mt-1 text-xs leading-relaxed text-[#2F3E35]/70">
                  Spots update in real time. Reserve early for the best schedule.
                </div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="overflow-hidden rounded-3xl border border-[#2F3E35]/10 bg-white/55 shadow-lg shadow-[#2F3E35]/10">
<div className="grid gap-0 md:grid-cols-12">
<div className="relative md:col-span-5">
<img alt="A rolled yoga mat with a water bottle and towel" className="h-full w-full object-cover md:min-h-[18rem] saturate-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36f4f4f5-c0f6-4192-b331-30772fc9902e_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2F3E35]/20 via-transparent to-transparent"></div>
</div>
<div className="md:col-span-7">
<div className="p-6 sm:p-7">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 rounded-full border border-[#2F3E35]/10 bg-[#F7F5F0]/70 px-3 py-1.5 text-xs font-medium text-[#2F3E35]/80">
<span className="relative flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60"></span>
<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
</span>
                      Starting Soon
                    </div>
<div className="text-xs font-medium text-[#2F3E35]/65">
                      Next Session: <span className="text-[#2F3E35]/90">18:30</span>
<span className="ml-2 text-[#2F3E35]/70">(Starts in <span id="countdown">01h 45m</span>)</span>
</div>
</div>
<div className="mt-5">
<div className="text-2xl font-medium tracking-tight text-[#2F3E35] sm:text-3xl" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                      Sunset Hatha Flow
                    </div>
<div className="mt-2 flex items-center gap-2 text-sm text-[#2F3E35]/75">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:user" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                      w/ Elena R.
                    </div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-[#2F3E35]/65">
                      Intensity: <span className="font-medium text-[#2F3E35]/85">Gentle–Moderate</span><span className="mx-2 text-[#2F3E35]/40">•</span>
                      Focus: <span className="font-medium text-[#2F3E35]/85">Hips + breath</span>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8A9A8B] px-5 py-2.5 text-sm font-medium text-[#F7F5F0] shadow-sm shadow-[#2F3E35]/15 hover:bg-[#7f8f80] focus:outline-none focus:ring-2 focus:ring-[#8A9A8B]/50 focus:ring-offset-2 focus:ring-offset-white transition" href="#reserve">
                      Reserve Last 2 Spots
                      <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="mt-6 rounded-2xl border border-[#2F3E35]/10 bg-[#F7F5F0]/60 p-4">
<div className="flex items-start gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 text-[#2F3E35]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:info" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
</div>
<div className="text-xs leading-relaxed text-[#2F3E35]/70">
                        Arrive 10 minutes early for grounding breathwork and a quiet start. Mats available, but feel free to bring your own.
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-[#2F3E35]/60">
            Widget is a static simulation (countdown animates) to create urgency and reduce decision time.
          </div>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-28" id="instructors">
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-[#2F3E35] sm:text-4xl" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
            A community that feels like exhale.
          </h2>
<p className="mt-4 text-sm leading-relaxed text-[#2F3E35]/75 sm:text-base">
            A snapshot of member stories—centered on the moment your cursor would naturally pause.
          </p>
</div>
<div className="text-xs font-medium text-[#2F3E35]/60">
          Hover snapshot: card 3 is focused
        </div>
</div>
<div className="mt-10 overflow-hidden rounded-3xl border border-[#2F3E35]/10 bg-white/35 shadow-sm shadow-[#2F3E35]/5">
<div className="sm:p-7 pt-6 pr-6 pb-6 pl-6">
<div className="flex overflow-x-auto snap-x w-full pt-8 pr-4 pb-12 pl-4 gap-x-6 gap-y-6" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<style className="">
    [data-element-id="aura-emjx5p4sznd9ov8b"]::-webkit-scrollbar {
      display: none;
    }
  </style>

<div className="group relative w-[18rem] shrink-0 snap-center flex flex-col justify-between rounded-3xl border border-[#2F3E35]/10 bg-white/60 p-6 shadow-sm shadow-[#2F3E35]/5 backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.08] hover:bg-white hover:shadow-2xl hover:shadow-[#2F3E35]/10 hover:border-[#2F3E35]/20 hover:z-10 cursor-default">
<div className="">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-12 w-12 overflow-hidden rounded-2xl bg-[#8A9A8B]/15">
<img alt="Mina" className="h-full w-full object-cover saturate-75 transition-all duration-500 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/464d7e64-b970-44dc-baa4-96932b0e45c5_800w.webp" style={{}}/>
</div>
<div>
<div className="text-sm font-medium text-[#2F3E35]">Mina</div>
<div className="text-xs text-[#2F3E35]/60">Member</div>
</div>
</div>
<div className="flex gap-0.5 text-[#caa24c] opacity-50 transition-opacity duration-300 group-hover:opacity-100">
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
<blockquote className="mt-5 text-sm leading-relaxed text-[#2F3E35]/80 transition-colors duration-300 group-hover:text-[#2F3E35]">
<span className="font-serif text-[#2F3E35]/40 text-lg">“</span>
        Finding balance in chaos. The morning flow classes have become my non-negotiable daily ritual.
        <span className="font-serif text-[#2F3E35]/40 text-lg">”</span>
</blockquote>
</div>
<div className="mt-6 flex items-center justify-between border-t border-[#2F3E35]/5 pt-4 opacity-60 transition-all duration-300 group-hover:opacity-100">
<span className="text-xs font-medium text-[#2F3E35]/60">Morning Flow</span>
<span className="flex items-center gap-1.5 text-xs font-medium text-[#2F3E35]/80">
        Verified
        <svg className="lucide lucide-badge-check text-[#8A9A8B]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path className="" d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
</div>

<div className="group relative w-[18rem] shrink-0 snap-center flex flex-col justify-between rounded-3xl border border-[#2F3E35]/10 bg-white/60 p-6 shadow-sm shadow-[#2F3E35]/5 backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.08] hover:bg-white hover:shadow-2xl hover:shadow-[#2F3E35]/10 hover:border-[#2F3E35]/20 hover:z-10 cursor-default">
<div className="">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-12 w-12 overflow-hidden rounded-2xl bg-[#8A9A8B]/15">
<img alt="Alyssa" className="h-full w-full object-cover saturate-75 transition-all duration-500 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f01af40e-b094-48e4-9d71-c761cda69ebc_320w.webp" style={{}}/>
</div>
<div>
<div className="text-sm font-medium text-[#2F3E35]">Alyssa</div>
<div className="text-xs text-[#2F3E35]/60">Member</div>
</div>
</div>
<div className="flex gap-0.5 text-[#caa24c] opacity-50 transition-opacity duration-300 group-hover:opacity-100">
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
<blockquote className="mt-5 text-sm leading-relaxed text-[#2F3E35]/80 transition-colors duration-300 group-hover:text-[#2F3E35]">
<span className="font-serif text-[#2F3E35]/40 text-lg">“</span>
        I've never felt more connected to my body. The instructors are truly world-class listeners.
        <span className="font-serif text-[#2F3E35]/40 text-lg">”</span>
</blockquote>
</div>
<div className="mt-6 flex items-center justify-between border-t border-[#2F3E35]/5 pt-4 opacity-60 transition-all duration-300 group-hover:opacity-100">
<span className="text-xs font-medium text-[#2F3E35]/60">Somatic Healing</span>
<span className="flex items-center gap-1.5 text-xs font-medium text-[#2F3E35]/80">
        Verified
        <svg className="lucide lucide-badge-check text-[#8A9A8B]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
</div>

<div className="group relative w-[18rem] shrink-0 snap-center flex flex-col justify-between rounded-3xl border border-[#2F3E35]/10 bg-white/60 p-6 shadow-sm shadow-[#2F3E35]/5 backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.08] hover:bg-white hover:shadow-2xl hover:shadow-[#2F3E35]/10 hover:border-[#2F3E35]/20 hover:z-10 cursor-default">
<div className="">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-12 w-12 overflow-hidden rounded-2xl bg-[#8A9A8B]/15">
<img alt="Sarah" className="h-full w-full object-cover saturate-75 transition-all duration-500 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08cc531c-e3ab-4460-8da8-379e1cc76b9a_320w.webp" style={{}}/>
</div>
<div className="">
<div className="text-sm font-medium text-[#2F3E35]">Sarah</div>
<div className="text-xs text-[#2F3E35]/60">Member since '22</div>
</div>
</div>
<div className="flex gap-0.5 text-[#caa24c] opacity-50 transition-opacity duration-300 group-hover:opacity-100">
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
<blockquote className="mt-5 text-sm leading-relaxed text-[#2F3E35]/80 transition-colors duration-300 group-hover:text-[#2F3E35]">
<span className="font-serif text-[#2F3E35]/40 text-lg">“</span>
        The sound healing sessions completely cured my insomnia. It's my safe haven.
        <span className="font-serif text-[#2F3E35]/40 text-lg">”</span>
</blockquote>
</div>
<div className="mt-6 flex items-center justify-between border-t border-[#2F3E35]/5 pt-4 opacity-60 transition-all duration-300 group-hover:opacity-100">
<span className="text-xs font-medium text-[#2F3E35]/60">Sound Baths</span>
<span className="flex items-center gap-1.5 text-xs font-medium text-[#2F3E35]/80">
        Verified
        <svg className="lucide lucide-badge-check text-[#8A9A8B]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
</div>

<div className="group relative w-[18rem] shrink-0 snap-center flex flex-col justify-between rounded-3xl border border-[#2F3E35]/10 bg-white/60 p-6 shadow-sm shadow-[#2F3E35]/5 backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.08] hover:bg-white hover:shadow-2xl hover:shadow-[#2F3E35]/10 hover:border-[#2F3E35]/20 hover:z-10 cursor-default">
<div className="">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-12 w-12 overflow-hidden rounded-2xl bg-[#8A9A8B]/15">
<img alt="Noah" className="h-full w-full object-cover saturate-75 transition-all duration-500 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
</div>
<div>
<div className="text-sm font-medium text-[#2F3E35]">Noah</div>
<div className="text-xs text-[#2F3E35]/60">Member</div>
</div>
</div>
<div className="flex gap-0.5 text-[#caa24c] opacity-50 transition-opacity duration-300 group-hover:opacity-100">
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
<blockquote className="mt-5 text-sm leading-relaxed text-[#2F3E35]/80 transition-colors duration-300 group-hover:text-[#2F3E35]">
<span className="font-serif text-[#2F3E35]/40 text-lg">“</span>
        A community that feels like family. No judgment, just pure support and genuine connection.
        <span className="font-serif text-[#2F3E35]/40 text-lg">”</span>
</blockquote>
</div>
<div className="mt-6 flex items-center justify-between border-t border-[#2F3E35]/5 pt-4 opacity-60 transition-all duration-300 group-hover:opacity-100">
<span className="text-xs font-medium text-[#2F3E35]/60">Studio Member</span>
<span className="flex items-center gap-1.5 text-xs font-medium text-[#2F3E35]/80">
        Verified
        <svg className="lucide lucide-badge-check text-[#8A9A8B]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
</div>

<div className="group relative w-[18rem] shrink-0 snap-center flex flex-col justify-between rounded-3xl border border-[#2F3E35]/10 bg-white/60 p-6 shadow-sm shadow-[#2F3E35]/5 backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.08] hover:bg-white hover:shadow-2xl hover:shadow-[#2F3E35]/10 hover:border-[#2F3E35]/20 hover:z-10 cursor-default">
<div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-12 w-12 overflow-hidden rounded-2xl bg-[#8A9A8B]/15">
<img alt="Jules" className="h-full w-full object-cover saturate-75 transition-all duration-500 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-sm font-medium text-[#2F3E35]">Jules</div>
<div className="text-xs text-[#2F3E35]/60">Member</div>
</div>
</div>
<div className="flex gap-0.5 text-[#caa24c] opacity-50 transition-opacity duration-300 group-hover:opacity-100">
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
<blockquote className="mt-5 text-sm leading-relaxed text-[#2F3E35]/80 transition-colors duration-300 group-hover:text-[#2F3E35]">
<span className="font-serif text-[#2F3E35]/40 text-lg">“</span>
        The perfect escape from the city noise. I leave feeling lighter and more grounded every single time.
        <span className="font-serif text-[#2F3E35]/40 text-lg">”</span>
</blockquote>
</div>
<div className="mt-6 flex items-center justify-between border-t border-[#2F3E35]/5 pt-4 opacity-60 transition-all duration-300 group-hover:opacity-100">
<span className="text-xs font-medium text-[#2F3E35]/60">Restorative</span>
<span className="flex items-center gap-1.5 text-xs font-medium text-[#2F3E35]/80">
        Verified
        <svg className="lucide lucide-badge-check text-[#8A9A8B]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
</div>

<div className="group relative w-[18rem] shrink-0 snap-center flex flex-col justify-between rounded-3xl border border-[#2F3E35]/10 bg-white/60 p-6 shadow-sm shadow-[#2F3E35]/5 backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.08] hover:bg-white hover:shadow-2xl hover:shadow-[#2F3E35]/10 hover:border-[#2F3E35]/20 hover:z-10 cursor-default">
<div className="">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-12 w-12 overflow-hidden rounded-2xl bg-[#8A9A8B]/15">
<img alt="Leo" className="h-full w-full object-cover saturate-75 transition-all duration-500 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-sm font-medium text-[#2F3E35]">Leo</div>
<div className="text-xs text-[#2F3E35]/60">Member</div>
</div>
</div>
<div className="flex gap-0.5 text-[#caa24c] opacity-50 transition-opacity duration-300 group-hover:opacity-100">
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
<blockquote className="mt-5 text-sm leading-relaxed text-[#2F3E35]/80 transition-colors duration-300 group-hover:text-[#2F3E35]">
<span className="font-serif text-[#2F3E35]/40 text-lg">“</span>
        Meditation used to feel impossible. The guidance here made it accessible and deeply restful.
        <span className="font-serif text-[#2F3E35]/40 text-lg">”</span>
</blockquote>
</div>
<div className="mt-6 flex items-center justify-between border-t border-[#2F3E35]/5 pt-4 opacity-60 transition-all duration-300 group-hover:opacity-100">
<span className="text-xs font-medium text-[#2F3E35]/60">Meditation Circle</span>
<span className="flex items-center gap-1.5 text-xs font-medium text-[#2F3E35]/80">
        Verified
        <svg className="lucide lucide-badge-check text-[#8A9A8B]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex mt-6 items-center justify-center">
<a className="inline-flex items-center gap-2 shadow-[#2F3E35]/5 hover:bg-white/60 hover:text-[#2F3E35] transition text-sm font-medium text-[#2F3E35]/80 bg-white/40 border-[#2F3E35]/15 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="/retreats">
          Discover retreats
          <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<footer className="text-[#F7F5F0] bg-[#2F3E35]" id="retreats">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">

<div className="lg:col-span-4">
<div className="flex items-center gap-2.5">
<svg aria-hidden="true" className="h-9 w-9 text-[#F7F5F0]" fill="none" viewbox="0 0 48 48">
<path d="M24 7.5c2.2 4.8 2.2 9.6 0 14.4C21.8 17.1 21.8 12.3 24 7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M14.4 12.6c5.2 1.3 8.9 4.3 11.1 9-4.9-.8-8.6-3.8-11.1-9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M33.6 12.6c-2.5 5.2-6.2 8.2-11.1 9 2.2-4.7 5.9-7.7 11.1-9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M10.2 23.2c6.2-.6 11.1 1.4 14.7 6.1-5.6 1-10.5-1.1-14.7-6.1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M37.8 23.2c-4.2 5-9.1 7.1-14.7 6.1 3.6-4.7 8.5-6.7 14.7-6.1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M24 29.4c3.5 1.6 6.1 4.6 7.7 9.1-3.8-1.1-6.4-4.1-7.7-9.1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M24 29.4c-1.3 5-3.9 8-7.7 9.1 1.6-4.5 4.2-7.5 7.7-9.1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<div className="">
<div className="text-lg font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>Aetheria</div>
<div className="text-xs font-medium tracking-wide text-[#F7F5F0]/70">Wellness</div>
</div>
</div>
<p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F7F5F0]/80">
            A sanctuary for the soul.
          </p>
<div className="mt-6 flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex items-center justify-center hover:bg-white/10 transition text-[#F7F5F0]/90 bg-white/5 w-10 h-10 border-white/15 border rounded-full" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide w-[18px] h-[18px]" data-height="18" data-icon="lucide:instagram" data-icon-replaced="true" data-width="18" height="18" role="img" strokeWidth="2" style={{color: 'rgb(247, 245, 240)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path className="" d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a aria-label="TikTok" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F7F5F0]/90 hover:bg-white/10 transition" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:music-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle className="" cx="8" cy="18" r="4"></circle><path className="" d="M12 18V2l7 4"></path></g></svg>
</a>
<a aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F7F5F0]/90 hover:bg-white/10 transition" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:youtube" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
<a aria-label="Spotify" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F7F5F0]/90 hover:bg-white/10 transition" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:audio-lines" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-2">
<div className="text-sm font-medium text-[#F7F5F0]" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>Explore</div>
<div className="mt-4 grid gap-3 text-sm text-[#F7F5F0]/80">
<a className="hover:text-[#F7F5F0] transition" href="#studio">Our Story</a>
<a className="hover:text-[#F7F5F0] transition" href="#instructors">Instructors</a>
<a className="hover:text-[#F7F5F0] transition" href="#classes">Class Schedule</a>
<a className="hover:text-[#F7F5F0] transition" href="#retreats">Retreats</a>
</div>
</div>

<div className="lg:col-span-3">
<div className="text-sm font-medium text-[#F7F5F0]" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>Visit Us</div>
<div className="mt-4 grid gap-3 text-sm text-[#F7F5F0]/80">
<div className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify mt-0.5 iconify--lucide" data-height="18" data-icon="lucide:map-pin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="">128 Serenity Lane, Arts District, NY.</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<a className="hover:text-[#F7F5F0] transition" href="mailto:hello@aetheria.com">hello@aetheria.com</a>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="hover:text-[#F7F5F0] transition" href="tel:+15550123456">+1 (555) 012-3456</a>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="text-sm font-medium text-[#F7F5F0]" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>Join the Circle</div>
<form className="mt-4" id="newsletterForm">
<label className="sr-only" htmlFor="email">Email Address</label>
<div className="flex items-center gap-3">
<div className="flex-1">
<input className="w-full bg-transparent py-2 text-sm text-[#F7F5F0] placeholder:text-[#F7F5F0]/55 focus:outline-none" id="email" placeholder="Email Address" required="" style={{borderBottom: '1px solid rgba(247,245,240,0.35)'}} type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8A9A8B] px-4 py-2 text-sm font-medium text-[#F7F5F0] shadow-sm shadow-black/20 hover:bg-[#7f8f80] focus:outline-none focus:ring-2 focus:ring-white/25 transition" type="submit">
                Subscribe
                <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="mt-3 text-xs text-[#F7F5F0]/70" id="newsletterNote">
              Monthly rituals, new class drops, and retreat openings.
            </div>
</form>
</div>
</div>
<div className="mt-12 border-t border-white/10 pt-6">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-[#F7F5F0]/70">
            Copyright © 2024 Aetheria Wellness.
          </div>
<div className="flex items-center gap-5 text-xs text-[#F7F5F0]/70">
<a className="hover:text-[#F7F5F0] transition" href="#">Privacy</a>
<a className="hover:text-[#F7F5F0] transition" href="#">Terms</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
