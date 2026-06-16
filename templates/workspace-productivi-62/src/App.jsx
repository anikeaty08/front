import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        const bar = document.getElementById('announcement-bar');
        const dismissBtn = document.getElementById('dismiss-announcement');

        // Check local storage on load
        if (localStorage.getItem('betahaus-announcement-dismissed') === 'true') {
          bar.style.display = 'none';
        }

        // Handle dismiss interaction gracefully
        dismissBtn.addEventListener('click', () => {
          bar.style.height = '0px';
          bar.style.opacity = '0';
          localStorage.setItem('betahaus-announcement-dismissed', 'true');
          setTimeout(() => {
            bar.style.display = 'none';
          }, 300);
        });
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        setInterval(() => {
          const slides = document.querySelectorAll('#hero-slideshow img');
          if (!slides || slides.length === 0) return;
          let activeIdx = Array.from(slides).findIndex(s => s.classList.contains('opacity-100'));
          if(activeIdx === -1) activeIdx = 0;
          slides[activeIdx].classList.remove('opacity-100', 'z-10');
          slides[activeIdx].classList.add('opacity-0', 'z-0');
          let nextIdx = (activeIdx + 1) % slides.length;
          slides[nextIdx].classList.remove('opacity-0', 'z-0');
          slides[nextIdx].classList.add('opacity-100', 'z-10');
        }, 3000);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full h-10 bg-[var(--bg-accent)] text-[var(--fg-on-accent)] flex items-center justify-center px-4 relative z-50 text-sm font-normal tracking-[0.005em] transition-all duration-300 origin-top overflow-hidden" id="announcement-bar">
<div className="text-center truncate pr-10 md:pr-0 font-sans">
        See our newly renovated coworking, offices and event spaces at betahaus
        Kreuzberg
        <span className="hidden sm:inline-block mx-0.5 text-white/80 font-sans">—</span>
<a className="underline font-medium hover:text-white/90 ml-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-accent)] rounded-[2px] font-sans" href="#">
          Book your tour today
        </a>
</div>
<button aria-label="Dismiss announcement" className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--fg-on-accent)]/80 hover:text-[var(--fg-on-accent)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[2px]" id="dismiss-announcement">
<iconify-icon height="16" icon="solar:close-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</header>

<main className="w-full">
<section className="relative flex flex-col w-full lg:min-h-[88vh] lg:max-h-[57.5rem]">

<div className="flex flex-col lg:flex-row flex-1 w-full h-full min-h-0">

<div className="w-full lg:w-[50%] xl:w-[55%] flex flex-col justify-center px-6 py-20 md:px-16 xl:px-[6rem] flex-shrink-0 z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--fg-headline)] mb-6 w-max bg-[var(--bg-trust)] shadow-sm font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--bg-accent-hi)]"></span>
              Berlin's #1 Coworking Space
            </div>
<h1 className="text-black font-semibold tracking-tight" style={{fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.05', letterSpacing: '-0.03em'}}>
<span className="block font-sans font-semibold">A workspace designed for</span>
<span className="block lg:mt-1 text-[var(--bg-accent-hi)] mt-2 font-sans font-semibold">
                your team's best work.
              </span>
</h1>
<p className="text-[var(--fg-body)] font-normal mt-6 w-full max-w-[52ch] font-sans" style={{fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)', lineHeight: '1.5'}}>
              Join 500+ founders and teams building what's next. Get flexible
              desks, private offices, and event spaces in the heart of
              Kreuzberg.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">

<a className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[var(--bg-accent)] text-[var(--fg-on-accent)] text-base font-medium transition-all duration-180 ease-out hover:bg-[var(--bg-accent-hi)] hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-accent)] focus-visible:ring-offset-[3px] focus-visible:ring-offset-[var(--bg-canvas)] shadow-sm hover:shadow-md font-sans" href="#">
                Book a 15-min tour
              </a>

<a className="inline-flex items-center text-[var(--fg-headline)] text-base font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-canvas)] rounded-[2px]" href="#">
<span className="group-hover:underline underline-offset-4 decoration-[var(--border)] transition-all font-sans">
                  Try a day for €35
                </span>
<span className="ml-1 text-[var(--fg-muted)] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-[var(--fg-headline)] font-sans">
                  →
                </span>
</a>
</div>
</div>

<div className="w-full lg:w-[50%] xl:w-[45%] flex-1 relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-0 aspect-[4/5] lg:aspect-auto">
<div className="absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-0 w-full h-full overflow-hidden lg:rounded-l-[4px] bg-[var(--bg-canvas)]" id="hero-slideshow">
<img alt="betahaus Kreuzberg 1" className="absolute inset-0 object-center block w-full h-full object-cover transition-opacity duration-1000 opacity-100 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4623e94a-42a1-4d9d-b6c2-974d554b6684_1600w.webp"/>
<img alt="betahaus Kreuzberg 2" className="absolute inset-0 object-center block w-full h-full object-cover transition-opacity duration-1000 opacity-0 z-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<img alt="betahaus Kreuzberg 3" className="absolute inset-0 object-center block w-full h-full object-cover transition-opacity duration-1000 opacity-0 z-0" src="https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
</div>

<div className="w-full border-t border-[var(--border)] bg-[var(--bg-trust)] z-20 flex-shrink-0">
<div className="flex flex-col lg:flex-row lg:w-full lg:h-[4.5rem]">
<div className="grid grid-cols-3 w-full lg:w-auto lg:flex lg:flex-[1.8] border-b lg:border-b-0 border-[var(--border)]">
<div className="lg:flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 px-2 py-3 lg:py-0 border-r border-[var(--border)]">
<iconify-icon className="text-[var(--bg-accent-hi)]" icon="lucide:calendar-days" width="18"></iconify-icon>
<span className="text-xs sm:text-sm font-medium text-[var(--fg-headline)] font-sans">
                  Since 2009
                </span>
</div>
<div className="lg:flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 px-2 py-3 lg:py-0 border-r border-[var(--border)]">
<iconify-icon className="text-[var(--bg-accent-hi)]" icon="lucide:users" width="18"></iconify-icon>
<span className="text-xs sm:text-sm font-medium text-[var(--fg-headline)] font-sans">
                  500+ Members
                </span>
</div>
<div className="lg:flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 px-2 py-3 lg:py-0 lg:border-r border-[var(--border)]">
<iconify-icon className="text-[var(--bg-accent-hi)]" icon="lucide:trophy" width="18"></iconify-icon>
<span className="text-xs sm:text-sm font-medium text-[var(--fg-headline)] font-sans">
                  Rated #1
                </span>
</div>
</div>
<div className="flex-[1.2] flex items-center px-4 sm:px-6 py-3 lg:py-0 w-full lg:w-auto overflow-hidden bg-[var(--bg-canvas)]/30 lg:bg-transparent">
<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_30px,_black_calc(100%-30px),transparent_100%)]">
<div className="flex items-center [&amp;_span]:mx-4 sm:[&amp;_span]:mx-6 animate-infinite-scroll whitespace-nowrap opacity-75 hover:opacity-100 transition-opacity duration-300">
<span className="text-sm font-bold tracking-tighter text-[#FA5B7A] font-sans">
                    Omio
                  </span>
<span className="text-sm font-semibold tracking-tight text-[#D97736] font-sans">
                    Coffee Circle
                  </span>
<span className="text-[0.9375rem] font-bold tracking-tighter text-[#E22726] font-sans">
                    Clue
                  </span>
<span className="text-sm font-medium tracking-tighter text-[#00A0E1] font-sans">
                    car2go
                  </span>
<span className="text-sm font-bold tracking-tight text-[#00D084] font-sans">
                    Tier
                  </span>
<span className="text-sm font-bold tracking-tighter text-[#FA5B7A] font-sans">
                    Omio
                  </span>
<span className="text-sm font-semibold tracking-tight text-[#D97736] font-sans">
                    Coffee Circle
                  </span>
<span className="text-[0.9375rem] font-bold tracking-tighter text-[#E22726] font-sans">
                    Clue
                  </span>
<span className="text-sm font-medium tracking-tighter text-[#00A0E1] font-sans">
                    car2go
                  </span>
<span className="text-sm font-bold tracking-tight text-[#00D084] font-sans">
                    Tier
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
