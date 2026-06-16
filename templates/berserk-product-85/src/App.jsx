import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Initialize Lucide Icons
    lucide.createIcons();

    // Tab Switching Logic
    function showConcept(tabId) {
      // Hide all sections
      document.querySelectorAll('.concept-section').forEach(el => {
        el.classList.remove('active');
        el.style.display = 'none';
      });
      
      // Reset all tabs
      document.querySelectorAll('.nav-tab').forEach(el => {
        el.classList.remove('active');
        el.style.background = 'transparent';
        el.style.color = '#9ca3af';
      });
      
      // Show selected section
      const targetSection = document.getElementById(tabId);
      if(targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'flex'; // Changed to flex to support c7 layout
        if(tabId !== 'c7') targetSection.style.display = 'block'; // Reset for others if needed
      }
      
      // Highlight selected tab
      const activeTab = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
      if(activeTab) {
          activeTab.classList.add('active');
          activeTab.style.background = 'rgba(255,255,255,0.12)';
          activeTab.style.color = '#d1d5db';
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div style={{position: 'fixed', top: '0', left: '0', right: '0', zIndex: '100', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)'}}>
<div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem'}}>
<div className="flex items-center justify-between" style={{height: '56px'}}>
<div className="flex items-center gap-2">
<span style={{fontFamily: '\'Barlow Condensed\', sans-serif', fontSize: '1.25rem', fontWeight: '700', color: 'white', letterSpacing: '0.1em'}}>BERSERK</span>
<span style={{fontSize: '0.75rem', color: '#6b7280', fontWeight: '500', padding: '2px 8px', border: '1px solid #374151', borderRadius: '4px'}}>КОНЦЕПТИ</span>
</div>
<div className="flex gap-1 flex-wrap" id="navTabs">
<button className="nav-tab" data-tab="c1" onclick="showConcept('c1')" style={{fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'transparent'}}>01 Тактика</button>
<button className="nav-tab" data-tab="c2" onclick="showConcept('c2')" style={{fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'transparent'}}>02 Адреналін</button>
<button className="nav-tab" data-tab="c3" onclick="showConcept('c3')" style={{fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'transparent'}}>03 Преміум</button>
<button className="nav-tab" data-tab="c4" onclick="showConcept('c4')" style={{fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'transparent'}}>04 Лайфстайл</button>
<button className="nav-tab" data-tab="c5" onclick="showConcept('c5')" style={{fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'transparent'}}>05 Едіторіал</button>
<button className="nav-tab" data-tab="c6" onclick="showConcept('c6')" style={{fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'transparent'}}>06 Світлий Драйв</button>
<button className="nav-tab active" data-tab="c7" onclick="showConcept('c7')" style={{fontSize: '0.75rem', fontWeight: '500', color: '#d1d5db', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.12)'}}>07 Вулкан Енергії</button>
</div>
</div>
</div>
</div>



<section className="concept-section" id="c1" style={{background: '#111214', minHeight: '100vh', paddingTop: '56px'}}>

</section>



<section className="concept-section" id="c2" style={{minHeight: '100vh', paddingTop: '56px'}}>

</section>



<section className="concept-section" id="c3" style={{minHeight: '100vh', paddingTop: '56px'}}>

</section>



<section className="concept-section" id="c4" style={{minHeight: '100vh', paddingTop: '56px', background: '#ffffff'}}>

</section>



<section className="concept-section" id="c5" style={{minHeight: '100vh', paddingTop: '56px', background: '#f5f4ef'}}>

</section>



<section className="concept-section" id="c6" style={{minHeight: '100vh', paddingTop: '56px', background: '#f8f7f4', position: 'relative', overflow: 'hidden', fontFamily: '\'Inter\', sans-serif'}}>

</section>



<section className="concept-section active c7-bg-texture relative min-h-screen pt-14 flex flex-col items-center overflow-hidden font-['Inter']" id="c7">

<div className="c7-noise z-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[120vw] md:w-[80vw] h-[120vw] md:h-[80vw] rounded-full c7-fire-core blur-[80px] z-0 animate-fire pointer-events-none"></div>
<div className="absolute top-[60%] left-[30%] w-64 h-64 bg-[#ff3300] rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none"></div>
<div className="absolute top-[40%] right-[30%] w-80 h-80 bg-[#ff9900] rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none"></div>

<div className="absolute top-[45%] left-[40%] w-2 h-2 rounded-full bg-[#ffcc00] blur-[1px] shadow-[0_0_10px_#ffcc00] z-10 animate-[spark-rise_3s_ease-in_infinite]"></div>
<div className="absolute top-[55%] right-[35%] w-3 h-3 rounded-full bg-[#ff8800] blur-[1px] shadow-[0_0_15px_#ff8800] z-10 animate-[spark-rise_4s_ease-in_infinite_1s]"></div>
<div className="absolute top-[50%] left-[55%] w-1 h-1 rounded-full bg-white blur-[0.5px] shadow-[0_0_8px_white] z-10 animate-[spark-rise_2.5s_ease-in_infinite_0.5s]"></div>
<div className="w-full max-w-[500px] mx-auto px-6 py-12 relative z-20 flex flex-col items-center justify-between min-h-[calc(100vh-56px)]">

<div className="text-center mt-6 mb-12 flex flex-col gap-1 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] z-20">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white uppercase leading-none font-['Space_Grotesk']">
          Бадьорить,
        </h1>
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#facc15] uppercase leading-none font-['Space_Grotesk']">
          як пляшка енергетика
        </h2>
</div>

<div className="relative w-full flex justify-center items-center mt-4 mb-16">

<div className="relative z-10 hover:scale-105 transition-transform duration-500 ease-out cursor-pointer">
<div className="c7-pouch w-[260px] h-[340px] rounded-[14px] flex flex-col items-center pt-8 px-5 border-t-4 border-l border-r border-[#e6b981]/40 relative overflow-hidden">

<div className="absolute inset-0 c7-pouch-texture pointer-events-none rounded-[14px]"></div>

<div className="absolute top-0 left-0 w-full h-5 border-b border-[#a3723c] flex items-center justify-between px-3">
<div className="w-2.5 h-1.5 rounded-full bg-[#8c5f2f] opacity-80 shadow-inner"></div>
<div className="w-2.5 h-1.5 rounded-full bg-[#8c5f2f] opacity-80 shadow-inner"></div>
</div>

<div className="bg-[#1e3a5f] text-white text-xs font-semibold px-3 py-1 rounded tracking-[0.15em] uppercase mt-4 mb-5 shadow-md border border-[#2a4d7a] relative z-10">
              Berserk
            </div>

<div className="font-['Barlow_Condensed'] text-[2.5rem] leading-[0.95] text-[#2c1d11] font-semibold text-center tracking-tight w-full mb-auto relative z-10">
              ЕНЕРГЕТИЧНА<br/>ЖУВАЛЬНА<br/>ГУМКА
            </div>

<div className="flex gap-2.5 w-full justify-center pb-7 relative z-10">

<div className="w-16 h-16 rounded-full bg-[#d65e43] flex flex-col items-center justify-center text-[#2c1d11] shadow-[inset_0_-3px_6px_rgba(0,0,0,0.15),0_4px_6px_rgba(0,0,0,0.2)]">
<i className="w-5 h-5 mb-0.5 text-[#1a2e1c]" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-xs font-semibold tracking-tight leading-none text-center">м'ятний<br/>смак</span>
</div>

<div className="w-16 h-16 rounded-full bg-[#d65e43] flex flex-col items-center justify-center text-[#2c1d11] shadow-[inset_0_-3px_6px_rgba(0,0,0,0.15),0_4px_6px_rgba(0,0,0,0.2)]">
<span className="text-xs font-semibold tracking-tight">1 гумка</span>
<span className="text-xs font-semibold leading-none mt-0.5">=<br/>1 еспресо</span>
</div>

<div className="w-16 h-16 rounded-full bg-[#d65e43] flex flex-col items-center justify-center text-[#2c1d11] shadow-[inset_0_-3px_6px_rgba(0,0,0,0.15),0_4px_6px_rgba(0,0,0,0.2)]">
<span className="text-xs font-semibold tracking-tight">12 гумок</span>
<span className="text-xs font-semibold leading-none mt-0.5">в<br/>упаковці</span>
</div>
</div>
</div>

<div className="absolute -left-10 bottom-6 w-16 h-9 rounded-full c7-gum transform -rotate-[20deg] float-1 z-20"></div>
<div className="absolute left-6 -bottom-5 w-[72px] h-10 rounded-full c7-gum transform rotate-[15deg] float-2 z-30"></div>
<div className="absolute -right-8 bottom-10 w-[60px] h-8 rounded-full c7-gum transform -rotate-[30deg] float-1 z-20" style={{animationDelay: '1.2s'}}></div>
</div>

<div className="absolute right-[-10%] md:right-[-30%] top-[60%] flex flex-col items-start z-20 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
<div className="text-[#facc15] font-medium tracking-tight">
<span className="text-lg">на</span> <span className="text-[2.5rem] font-semibold leading-none">45%</span>
</div>
<div className="text-white text-base font-normal leading-tight max-w-[140px] mt-1">
            дешевше за енергетичний напій
          </div>
</div>
</div>

<div className="w-full flex justify-between items-end px-2 mt-auto mb-10 z-20">

<div className="flex flex-col drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
<span className="text-[#facc15] text-xl font-semibold tracking-tight uppercase leading-none">Без</span>
<span className="text-white text-xl font-normal tracking-tight uppercase leading-none mt-1">цукру</span>
</div>

<button className="border border-[#facc15]/80 bg-[#0a0a0a]/60 backdrop-blur-md text-[#facc15] px-8 py-3.5 font-semibold tracking-widest uppercase hover:bg-[#facc15] hover:text-[#111] transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]">
          Замовити
        </button>
</div>

<div className="bg-white/95 backdrop-blur rounded-full px-6 py-3.5 flex items-center justify-center gap-3 w-[220px] cursor-pointer hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl z-20 mt-4">
<div className="w-7 h-7 rounded-full bg-[#0095f6] flex items-center justify-center text-white shadow-sm">
<i className="w-4 h-4" data-lucide="link" strokeWidth="2"></i>
</div>
<span className="text-[#111827] font-semibold text-lg tracking-tight">У магазин</span>
</div>
</div>
</section>


    </>
  );
}
