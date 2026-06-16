import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = { darkMode: 'class' }



      lucide.createIcons();

      // Update time
      function updateTime() {
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          document.getElementById('time').textContent = `${hours}:${minutes}`;
      }
      updateTime();
      setInterval(updateTime, 1000);

      // Company Dropdown Logic
      const companyBtn = document.getElementById('company-btn');
      const companyDropdown = document.getElementById('company-dropdown');
      const companyArrow = document.getElementById('company-arrow');

      companyBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isHidden = companyDropdown.classList.contains('hidden');

          if (isHidden) {
              companyDropdown.classList.remove('hidden');
              companyDropdown.classList.add('dropdown-enter', 'dropdown-enter-active');
              companyBtn.classList.add('bg-neutral-200', 'dark:bg-neutral-800', 'px-2', '-ml-2', 'rounded-sm');
              companyArrow.classList.remove('hidden');

              requestAnimationFrame(() => {
                  companyDropdown.classList.remove('dropdown-enter');
              });
          } else {
              closeDropdown();
          }
      });

      function closeDropdown() {
          companyDropdown.classList.add('hidden');
          companyBtn.classList.remove('bg-neutral-200', 'dark:bg-neutral-800', 'px-2', '-ml-2', 'rounded-sm');
          companyArrow.classList.add('hidden');
      }

      document.addEventListener('click', (e) => {
          if (!companyDropdown.contains(e.target) && !companyBtn.contains(e.target)) {
              closeDropdown();
          }
      });

      // Canvas panning functionality
      const canvasContainer = document.getElementById('canvas-container');
      const canvas = document.getElementById('canvas');

      let isPanning = false;
      let panStartX, panStartY;
      let canvasX = -800, canvasY = -600;

      canvasContainer.addEventListener('mousedown', (e) => {
          if (e.target.closest('.draggable') || e.target.closest('header') || e.target.closest('footer') || e.target.closest('#company-dropdown')) return;

          isPanning = true;
          canvasContainer.classList.add('panning');
          panStartX = e.clientX - canvasX;
          panStartY = e.clientY - canvasY;
      });

      document.addEventListener('mousemove', (e) => {
          if (!isPanning) return;

          canvasX = e.clientX - panStartX;
          canvasY = e.clientY - panStartY;

          canvas.style.left = `${canvasX}px`;
          canvas.style.top = `${canvasY}px`;
      });

      document.addEventListener('mouseup', () => {
          isPanning = false;
          canvasContainer.classList.remove('panning');
      });

      // Touch support for canvas panning
      canvasContainer.addEventListener('touchstart', (e) => {
          if (e.target.closest('.draggable') || e.target.closest('header') || e.target.closest('footer') || e.target.closest('#company-dropdown')) return;

          isPanning = true;
          const touch = e.touches[0];
          panStartX = touch.clientX - canvasX;
          panStartY = touch.clientY - canvasY;
      });

      document.addEventListener('touchmove', (e) => {
          if (!isPanning) return;

          const touch = e.touches[0];
          canvasX = touch.clientX - panStartX;
          canvasY = touch.clientY - panStartY;

          canvas.style.left = `${canvasX}px`;
          canvas.style.top = `${canvasY}px`;
      });

      document.addEventListener('touchend', () => {
          isPanning = false;
      });

      // Draggable cards functionality
      const draggables = document.querySelectorAll('.draggable');

      draggables.forEach(draggable => {
          let isDragging = false;
          let startX, startY, initialX, initialY;

          draggable.addEventListener('mousedown', (e) => {
              isDragging = true;
              draggable.classList.add('dragging');

              startX = e.clientX;
              startY = e.clientY;
              initialX = draggable.offsetLeft;
              initialY = draggable.offsetTop;

              e.preventDefault();
              e.stopPropagation();
          });

          document.addEventListener('mousemove', (e) => {
              if (!isDragging) return;

              const dx = e.clientX - startX;
              const dy = e.clientY - startY;

              draggable.style.left = `${initialX + dx}px`;
              draggable.style.top = `${initialY + dy}px`;
          });

          document.addEventListener('mouseup', () => {
              if (isDragging) {
                  isDragging = false;
                  draggable.classList.remove('dragging');
              }
          });

          // Touch support for cards
          draggable.addEventListener('touchstart', (e) => {
              isDragging = true;
              draggable.classList.add('dragging');

              const touch = e.touches[0];
              startX = touch.clientX;
              startY = touch.clientY;
              initialX = draggable.offsetLeft;
              initialY = draggable.offsetTop;

              e.stopPropagation();
          });

          document.addEventListener('touchmove', (e) => {
              if (!isDragging) return;

              const touch = e.touches[0];
              const dx = touch.clientX - startX;
              const dy = touch.clientY - startY;

              draggable.style.left = `${initialX + dx}px`;
              draggable.style.top = `${initialY + dy}px`;
          });

          document.addEventListener('touchend', () => {
              if (isDragging) {
                  isDragging = false;
                  draggable.classList.remove('dragging');
              }
          });
      });
    


      const themeToggle = document.getElementById('theme-toggle');
      const htmlElement = document.documentElement;

      themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
          htmlElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          htmlElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
        lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 p-6 flex items-start justify-between pointer-events-none">

<div className="flex items-center gap-2 pointer-events-auto">
<div className="flex items-center gap-2 text-neutral-900 dark:text-white">
<i className="w-5 h-5" data-lucide="smile" strokeWidth="1.5"></i>
<span className="text-base font-medium">ddd°agency</span>
<i className="w-5 h-5 ml-1 opacity-50" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
</div>

<div className="hidden md:block text-neutral-900 dark:text-white pointer-events-auto pt-1">
<p className="text-lg font-normal leading-none mb-1">
          creative communications
        </p>
<p className="text-lg font-normal leading-none">agency©</p>
</div>

<nav className="hidden lg:flex flex-col items-start text-neutral-900 dark:text-white pointer-events-auto relative">

<div className="relative group mb-1">
<button className="flex items-center gap-2 text-2xl font-medium tracking-tight hover:opacity-70 transition-all leading-none focus:outline-none" id="company-btn">
<span>Company</span>
<i className="w-3 h-3 fill-current rotate-180 hidden transition-transform duration-200" data-lucide="triangle" id="company-arrow"></i>
</button>

<div className="hidden absolute top-full left-0 mt-2 w-[850px] bg-[#1a1a1a] text-white shadow-2xl rounded-sm p-10 z-50 pointer-events-auto cursor-default border border-neutral-800" id="company-dropdown">
<div className="grid grid-cols-[300px_1fr] gap-0 h-full">

<div className="flex flex-col justify-between pr-10 border-r border-neutral-800">
<div className="flex flex-col gap-3">
<a className="text-4xl font-normal tracking-tight text-neutral-300 hover:text-white transition-colors" href="#">
                    About ddd
                  </a>
<a className="text-4xl font-normal tracking-tight text-neutral-300 hover:text-white transition-colors" href="#">
                    Testimonials
                  </a>
<a className="text-4xl font-normal tracking-tight text-neutral-300 hover:text-white transition-colors" href="#">
                    Awards
                  </a>
<a className="text-4xl font-normal tracking-tight text-neutral-300 hover:text-white transition-colors" href="#">
                    FAQ
                  </a>
</div>
<div className="mt-16">
<p className="text-neutral-500 text-sm mb-4">Reach out on:</p>
<div className="flex gap-3">
<a className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors text-black" href="#">
<i className="w-4 h-4 fill-current" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors text-black" href="#">
<i className="w-4 h-4 fill-current" data-lucide="linkedin"></i>
</a>
<a className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors text-black" href="#">
<i className="w-4 h-4" data-lucide="dribbble"></i>
</a>
<a className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors text-black" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>

<div className="flex flex-col pl-10">
<div className="flex items-center justify-between mb-6">
<span className="text-4xl font-normal tracking-tight text-white">
                    Career
                  </span>
<span className="bg-pink-500 text-white w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">
                    5
                  </span>
</div>
<div className="w-full">

<a className="group block py-5 border-t border-neutral-800 hover:bg-white/5 transition-colors -mx-4 px-4 rounded-sm" href="#">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-pink-500 transition-colors">
                      Head of digital marketing
                    </h4>
<ul className="text-sm text-neutral-400 space-y-1">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        2-5 yr Experience
                      </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        On Office
                      </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        Full-time
                      </li>
</ul>
</a>

<a className="group block py-5 border-t border-neutral-800 hover:bg-white/5 transition-colors -mx-4 px-4 rounded-sm" href="#">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-pink-500 transition-colors">
                      Brand Designer
                    </h4>
<ul className="text-sm text-neutral-400 space-y-1">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        2-5 yr Experience
                      </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        On Office
                      </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        Full-time
                      </li>
</ul>
</a>

<a className="group block py-5 border-t border-neutral-800 hover:bg-white/5 transition-colors -mx-4 px-4 rounded-sm" href="#">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-pink-500 transition-colors">
                      UI/UX Middle Designer
                    </h4>
<ul className="text-sm text-neutral-400 space-y-1">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        2-5 yr Experience
                      </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        On Office
                      </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        Full-time
                      </li>
</ul>
</a>
</div>
</div>
</div>
</div>
</div>
<a className="text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity leading-none mb-1" href="#">
          Solution
        </a>
<a className="text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity leading-none mb-1" href="#">
          Case
        </a>
<a className="text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity leading-none" href="#">
          Update
        </a>
</nav>

<div className="flex items-start gap-6 pointer-events-auto">
<a className="text-neutral-900 dark:text-white text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity leading-none" href="#">
          Contact us
        </a>
<button className="text-neutral-900 dark:text-white hover:opacity-70 transition-opacity focus:outline-none -mt-1" id="theme-toggle">
<i className="w-6 h-6 hidden dark:block" data-lucide="sun"></i>
<i className="w-6 h-6 block dark:hidden" data-lucide="moon"></i>
</button>
</div>
</header>

<div className="w-full h-screen relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]" id="canvas-container">

<div className="absolute" id="canvas" style={{width: '6000px', height: '6000px', left: '-1200px', top: '-900px'}}>

<div className="draggable absolute bg-white rounded-sm shadow-2xl" style={{left: '1400px', top: '900px', width: '140px', height: '90px'}}></div>

<div className="draggable absolute bg-neutral-800 rounded-sm shadow-2xl p-4 flex flex-col justify-between" style={{left: '1100px', top: '1300px', width: '180px', height: '380px'}}>
<div className="text-white text-7xl font-semibold tracking-tight">
            ing
          </div>
<div className="text-white text-sm text-right">
<p>До нашої</p>
<p>команди</p>
</div>
</div>

<div className="draggable absolute bg-white rounded-sm shadow-2xl overflow-hidden" style={{left: '1900px', top: '1150px', width: '220px', height: '220px'}}>
<div className="absolute top-3 left-3 bg-neutral-900 text-white text-xs px-2 py-1 rounded-sm">
            New Case
          </div>
<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full border-4 border-blue-700 flex items-center justify-center">
<div className="w-2 h-2 bg-blue-700 rounded-full"></div>
</div>
<span className="text-blue-700 text-3xl font-bold tracking-tight">
                EFE
              </span>
</div>
</div>
</div>

<div className="draggable absolute bg-white rounded-sm shadow-2xl overflow-hidden" style={{left: '2700px', top: '1350px', width: '320px', height: '380px'}}>
<div className="absolute top-3 left-3 bg-neutral-900 text-white text-xs px-2 py-1 rounded-sm">
            New Article
          </div>
<div className="w-full h-64 flex items-center justify-center">
<svg height="120" viewbox="0 0 120 120" width="120">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#f97316', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<line stroke="url(#grad1)" strokeLinecap="round" strokeWidth="8" x1="60" x2="60" y1="10" y2="110"></line>
<line stroke="url(#grad1)" strokeLinecap="round" strokeWidth="8" x1="10" x2="110" y1="60" y2="60"></line>
<line stroke="url(#grad1)" strokeLinecap="round" strokeWidth="8" x1="25" x2="95" y1="25" y2="95"></line>
<line stroke="url(#grad1)" strokeLinecap="round" strokeWidth="8" x1="95" x2="25" y1="25" y2="95"></line>
</svg>
</div>
<div className="border-t border-gray-200 mx-4"></div>
<div className="p-4">
<h3 className="text-base font-medium text-neutral-900">
              тренди: так чи ні?
            </h3>
<p className="text-sm text-neutral-500 mt-2">12.03.2024</p>
</div>
</div>

<div className="draggable absolute bg-white rounded-sm shadow-2xl" style={{left: '1650px', top: '2100px', width: '340px', height: '100px'}}></div>

<div className="draggable absolute bg-gradient-to-br from-purple-600 to-pink-500 rounded-sm shadow-2xl p-4" style={{left: '700px', top: '1550px', width: '160px', height: '160px'}}>
<div className="text-white text-xs opacity-80">Branding</div>
<div className="text-white text-xl font-semibold tracking-tight mt-auto absolute bottom-4">
            2024
          </div>
</div>

<div className="draggable absolute bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-sm shadow-2xl p-5" style={{left: '3400px', top: '1600px', width: '200px', height: '200px'}}>
<div className="text-white/80 text-xs uppercase tracking-wider">
            Projects
          </div>
<div className="text-white text-6xl font-bold tracking-tight mt-4">
            147
          </div>
<div className="text-white/80 text-sm mt-2">Completed this year</div>
</div>

<div className="draggable absolute bg-black rounded-sm shadow-2xl overflow-hidden" style={{left: '3300px', top: '2100px', width: '280px', height: '180px'}}>
<div className="w-full h-full flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
<i className="w-8 h-8 text-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-3 left-3 text-white text-xs">
              Showreel 2024
            </div>
</div>
</div>

<div className="draggable absolute bg-white rounded-sm shadow-2xl p-6 flex items-center justify-center" style={{left: '200px', top: '1200px', width: '180px', height: '180px'}}>
<div className="text-8xl font-bold tracking-tighter text-neutral-900">
            A
          </div>
</div>

<div className="draggable absolute bg-gradient-to-r from-violet-600 to-indigo-600 rounded-sm shadow-2xl p-5" style={{left: '3500px', top: '2550px', width: '220px', height: '120px'}}>
<div className="text-white/80 text-xs uppercase tracking-wider">
            We're Hiring
          </div>
<div className="text-white text-xl font-semibold tracking-tight mt-2">
            Join Our Team
          </div>
<div className="flex items-center gap-1 mt-2 text-white/70 text-xs">
<span>View positions</span>
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="draggable absolute bg-gradient-to-br from-orange-400 to-red-500 rounded-sm shadow-2xl p-5" style={{left: '450px', top: '2200px', width: '200px', height: '140px'}}>
<div className="text-white/80 text-xs uppercase tracking-wider">
            Strategy
          </div>
<div className="text-white text-3xl font-semibold tracking-tight mt-4">
            Brand Identity
          </div>
</div>
<div className="draggable absolute bg-neutral-900 rounded-sm shadow-2xl p-5" style={{left: '4000px', top: '950px', width: '240px', height: '160px'}}>
<div className="text-neutral-400 text-xs uppercase tracking-wider">
            Clients
          </div>
<div className="text-white text-5xl font-bold tracking-tight mt-3">
            50+
          </div>
<div className="text-neutral-500 text-sm mt-2">Happy partners</div>
</div>
<div className="draggable absolute bg-white rounded-sm shadow-2xl p-4" style={{left: '150px', top: '1800px', width: '200px', height: '120px'}}>
<div className="text-neutral-400 text-xs uppercase tracking-wider">
            Founded
          </div>
<div className="text-neutral-900 text-4xl font-bold tracking-tight mt-2">
            2019
          </div>
</div>
<div className="draggable absolute bg-gradient-to-br from-cyan-500 to-blue-600 rounded-sm shadow-2xl p-5 flex flex-col justify-between" style={{left: '4100px', top: '1400px', width: '180px', height: '220px'}}>
<div className="text-white/80 text-xs uppercase tracking-wider">
            Services
          </div>
<div className="text-white text-lg font-medium">
            Web Design
            <br/>
            Branding
            <br/>
            Marketing
            <br/>
            Development
          </div>
</div>
<div className="draggable absolute bg-yellow-400 rounded-sm shadow-2xl p-4 flex items-center justify-center" style={{left: '650px', top: '650px', width: '120px', height: '120px'}}>
<i className="w-12 h-12 text-yellow-800" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="draggable absolute bg-neutral-800 rounded-sm shadow-2xl overflow-hidden" style={{left: '3800px', top: '2400px', width: '260px', height: '180px'}}>
<div className="w-full h-full p-5 flex flex-col justify-between">
<div className="text-neutral-500 text-xs">"</div>
<div className="text-white text-sm font-light leading-relaxed">
              Найкраща агенція з якою ми працювали. Рекомендуємо!
            </div>
<div className="text-neutral-400 text-xs">— CEO, TechCorp</div>
</div>
</div>
<div className="draggable absolute bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-2xl" style={{left: '350px', top: '850px', width: '100px', height: '100px'}}></div>
<div className="draggable absolute bg-white rounded-sm shadow-2xl p-5" style={{left: '2400px', top: '2200px', width: '280px', height: '140px'}}>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
<i className="w-6 h-6 text-neutral-600" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-neutral-900 font-medium">Львів, Україна</div>
<div className="text-neutral-500 text-sm">вул. Шевченка, 25</div>
</div>
</div>
<div className="text-neutral-400 text-xs mt-4">
            Працюємо: Пн-Пт 9:00-18:00
          </div>
</div>
<div className="draggable absolute bg-neutral-900 rounded-sm shadow-2xl p-4" style={{left: '4300px', top: '1100px', width: '160px', height: '200px'}}>
<div className="text-white text-6xl font-bold tracking-tighter">B</div>
<div className="text-neutral-500 text-sm mt-auto absolute bottom-4">
            Typography
          </div>
</div>
<div className="draggable absolute bg-gradient-to-br from-teal-400 to-emerald-600 rounded-sm shadow-2xl p-5" style={{left: '100px', top: '1500px', width: '180px', height: '180px'}}>
<div className="text-white/80 text-xs uppercase tracking-wider">
            Awards
          </div>
<div className="text-white text-4xl font-bold tracking-tight mt-3">
            12
          </div>
<div className="text-white/70 text-sm mt-1">Industry awards</div>
</div>
</div>
</div>

<footer className="fixed bottom-6 left-0 right-0 px-6 flex items-center justify-between z-40 pointer-events-none">
<div className="flex items-center gap-2 text-sm pointer-events-auto text-neutral-500 dark:text-white/50">
<i className="w-4 h-4" data-lucide="move" strokeWidth="1.5"></i>
<span>Drag to explore</span>
</div>
<div className="flex items-center gap-4 pointer-events-auto text-neutral-900 dark:text-white">
<span className="text-2xl font-medium tracking-tight">Lviv</span>
<span className="bg-neutral-700 text-xs px-2 py-1 rounded">UA</span>
<span className="text-2xl font-medium tracking-tight" id="time">17:43</span>
</div>
<div className="flex items-center gap-2 pointer-events-auto text-neutral-900 dark:text-white">
<span className="text-2xl font-medium tracking-tight">Eng</span>
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</footer>



    </>
  );
}
