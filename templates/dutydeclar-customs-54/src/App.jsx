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
      
<div className="min-h-screen w-full overflow-x-scroll">

<div className="w-[140%] border-b-8 border-red-600 bg-[radial-gradient(circle,#ffff00,#ff00ff)] text-center">
<marquee behavior="alternate" scrollamount="20">
<span className="text-4xl md:text-5xl font-black tracking-[0.25em] text-red-600 bg-white border-4 border-blue-600 shadow-[0_0_20px_#ff0000] uppercase">
          *** Welcome 2 DutyDeclared !!! ***
        </span>
</marquee>
</div>

<div className="w-[140%] flex flex-col xl:flex-row">

<aside className="w-full xl:w-1/5 bg-[linear-gradient(180deg,#000000,#333333,#000000)] border-r-8 border-yellow-500 text-center">
<div className="border-b-4 border-fuchsia-500 bg-[#0000aa] text-lime-300 font-extrabold underline">
          NAVIGATION ZONE
        </div>
<nav className="flex flex-col gap-1 p-2 md:p-4">
<button className="w-full bg-[#ff00ff] text-yellow-300 border-4 border-[#00ffff] shadow-[4px_4px_0_0_#000000] uppercase text-sm md:text-base font-black tracking-[0.2em] hover:bg-[#00ffff] hover:text-[#ff00ff] active:translate-y-1 active:translate-x-1 transition-none">
            HOME (You Are Here)
          </button>
<button className="w-full bg-[#00ffff] text-red-700 border-4 border-[#ff00ff] shadow-[4px_4px_0_0_#000000] uppercase text-sm md:text-base font-black tracking-[0.2em] hover:bg-[#ffff00] hover:text-[#0000ff] active:scale-110 transition-none animate-pulse">
            FEATURES!!!
          </button>
<button className="w-full bg-[#ffff00] text-[#0000ff] border-4 border-[#ff0000] shadow-[4px_4px_0_0_#000000] uppercase text-sm md:text-base font-black tracking-[0.2em] hover:bg-[#ff0000] hover:text-[#00ff00] active:rotate-3 transition-none">
            PRICING?!?!?!
          </button>
<button className="w-full bg-[#00ff00] text-[#000000] border-4 border-[#0000ff] shadow-[4px_4px_0_0_#000000] uppercase text-sm md:text-base font-black tracking-[0.2em] hover:bg-[#000000] hover:text-[#00ff00] active:skew-x-6 transition-none">
            SIGN MY GUESTBOOK
          </button>
<button className="w-full bg-black text-[#ff00ff] border-4 border-[#00ff00] shadow-[4px_4px_0_0_#ffffff] uppercase text-sm md:text-base font-black tracking-[0.2em] hover:bg-white hover:text-black transition-none">
            CONTACT VIA FAX
          </button>
</nav>

<div className="mt-2 md:mt-4 border-t-4 border-lime-500 pt-2 md:pt-3">
<div className="text-[0.6rem] md:text-xs text-[#00ffff] font-extrabold tracking-[0.25em] uppercase">
            Visitor Counter:
          </div>
<div className="mt-1 inline-block bg-black border-4 border-red-600 px-3 py-1 text-lime-300 font-black tracking-[0.4em]">
            00000042
          </div>
<div className="mt-3 flex flex-col items-center gap-1">
<div className="w-10 h-10 border-4 border-yellow-400 bg-[conic-gradient(from_0deg,#ff0000,#ffff00,#ff0000)] animate-spin-slow"></div>
<span className="text-[0.6rem] text-yellow-300 font-black uppercase">
              Under Constant Construction!!!
            </span>
</div>
</div>
</aside>

<main className="w-full xl:w-4/5 bg-[linear-gradient(135deg,#ff0000_0%,#000000_25%,#0000ff_50%,#00ff00_75%,#ff00ff_100%)] text-center text-white">

<section className="relative border-b-8 border-[#00ffff] p-3 md:p-6">

<div className="absolute inset-0 opacity-40 pointer-events-none">
<div className="w-full h-full bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_4px,transparent_4px,transparent_8px)]"></div>
</div>
<div className="relative z-10">

<div className="flex flex-col items-center gap-1 md:gap-2">
<div className="flex items-center gap-1 md:gap-2">
<div className="bg-[#ffff00] text-[#ff0000] border-[6px] border-[#0000ff] rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center shadow-[0_0_20px_#00ff00]">
<span className="font-black text-lg md:text-2xl tracking-[0.35em]">
                    DD
                  </span>
</div>
<div className="text-left leading-none">
<div className="text-3xl md:text-5xl font-black tracking-[0.6em] uppercase text-[#00ffff] drop-shadow-[2px_2px_0_#000]">
                    DutyDeclared
                  </div>
<div className="text-xs md:text-base font-black italic underline text-[#ffff00] tracking-[0.2em]">
                    "When Duty Calls, We Declare It."
                  </div>
</div>
</div>

<div className="mt-3 md:mt-5 flex flex-col gap-1">
<div className="text-2xl md:text-4xl font-black text-[#00ff00] bg-black border-4 border-[#ff00ff] inline-block px-2 md:px-4 py-1 rotate-[-2deg] tracking-[0.35em] uppercase">
                  CLEAR CUSTOMS IN MINUTES!!!
                </div>
<div className="text-base md:text-xl font-extrabold text-[#ffff00] bg-[#0000aa] underline tracking-[0.25em]">
                  So Fast, Even Your Modem Can’t Keep Up.
                </div>
<div className="mt-1 text-sm md:text-lg font-bold text-[#ffcccc]">
                  Why wait <span className="line-through">hours</span> <span className="underline">YEARS</span> at the border when
                  <span className="bg-[#ff00ff] text-[#00ffff] font-black italic">
                    DutyDeclared™
                  </span>
                  can fax your customs straight into the future?
                </div>
</div>

<div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
<button className="group relative overflow-hidden border-[6px] border-[#ffff00] bg-[#ff0000] text-white font-black tracking-[0.3em] uppercase text-sm md:text-lg px-4 md:px-8 py-2 md:py-3 shadow-[6px_6px_0_#000000] hover:bg-[#00ff00] hover:text-black active:translate-x-1 active:translate-y-1 transition-none animate-bounce">
<span className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4)_2px,transparent_2px,transparent_4px)] opacity-0 group-hover:opacity-100 transition-none"></span>
<span className="relative z-10">Start My 3-Day Dial-Up Trial</span>
</button>
<button className="border-[6px] border-[#00ffff] bg-black text-[#00ffff] font-black tracking-[0.25em] uppercase text-xs md:text-base px-3 md:px-6 py-2 shadow-[4px_4px_0_#ff00ff] hover:bg-[#0000ff] hover:text-[#ffff00] transition-none">
                  Watch 47-Minute Demo (RealPlayer)
                </button>
</div>
</div>
</div>
</section>

<section className="border-b-8 border-[#ff00ff] bg-[radial-gradient(circle,#000000,#330033)] p-3 md:p-6">
<div className="text-center">
<div className="text-2xl md:text-3xl font-black text-[#00ffff] uppercase tracking-[0.3em] underline decoration-wavy">
              Why DutyDeclared Is <span className="text-[#ffff00]">Totally Rad</span> For Customs
            </div>
<div className="mt-1 text-sm md:text-lg text-[#ffcccc] font-bold">
              We put the <span className="bg-[#00ff00] text-black">"FUN"</span> back in
              <span className="bg-[#ff0000]">"fundamentally boring paperwork"</span>.
            </div>
</div>
<div className="mt-3 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">

<div className="border-[6px] border-[#00ff00] bg-[#0000aa] text-left p-2 md:p-4 shadow-[6px_6px_0_#ff00ff] rotate-[-1deg] hover:rotate-1 transition-none">
<div className="flex items-center gap-1 md:gap-2">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#ffff00] border-4 border-[#00ffff] flex items-center justify-center">

<svg className="w-6 h-6 text-[#ff0000]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 14.5 19 19"></path>
<circle cx="11" cy="11" r="4"></circle>
<path d="M4 4h5l2 2h9v14H4z"></path>
</svg>
</div>
<div className="text-base md:text-xl font-black uppercase text-[#00ffff] tracking-[0.25em]">
                  Mega Turbo Forms
                </div>
</div>
<p className="mt-2 text-sm md:text-base text-[#ffdddd] font-bold leading-relaxed">
                Enjoy our beautifully confusing UI that puts
                <span className="underline">every single customs field</span> on one page. No steps. No guidance.
                Just <span className="italic">pure adrenaline</span>.
              </p>
<ul className="mt-2 list-disc list-inside text-[0.7rem] md:text-sm text-[#ffff00] font-black space-y-1">
<li>All fields required. Even the hidden ones.</li>
<li>Random resets when you scroll too fast.</li>
<li>Occasional blinking error in Comic Sans.</li>
</ul>
</div>

<div className="border-[6px] border-[#ff0000] bg-[#003300] text-left p-2 md:p-4 shadow-[6px_6px_0_#00ffff] rotate-2 hover:-rotate-2 transition-none">
<div className="flex items-center gap-1 md:gap-2">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#00ffff] border-4 border-[#ff00ff] flex items-center justify-center">

<svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2h4"></path>
<circle cx="12" cy="14" r="8"></circle>
<path d="M12 10v4l3 3"></path>
</svg>
</div>
<div className="text-base md:text-xl font-black uppercase text-[#ffff00] tracking-[0.35em]">
                  56k Speed™
                </div>
</div>
<p className="mt-2 text-sm md:text-base text-[#ccffcc] font-bold leading-relaxed">
                Our patented "Loading Bar™" animates for
                <span className="line-through">no reason</span> dramatic effect, making every customs clearance
                feel like waiting for your favorite song to download on LimeWire.
              </p>
<div className="mt-2">
<div className="w-full bg-black border-4 border-[#00ff00]">
<div className="w-3/12 bg-[#ff0000] text-[0.6rem] text-center font-black tracking-[0.3em] uppercase animate-pulse">
                    LOADING...
                  </div>
</div>
<div className="mt-1 text-[0.6rem] text-[#00ffff] font-extrabold uppercase tracking-[0.3em]">
                  Estimated Time: 3–5 business Napster sessions.
                </div>
</div>
</div>

<div className="border-[6px] border-[#ffff00] bg-[#550000] text-left p-2 md:p-4 shadow-[6px_6px_0_#0000ff] -rotate-1 hover:rotate-3 transition-none">
<div className="flex items-center gap-1 md:gap-2">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff00ff] border-4 border-[#ffff00] flex items-center justify-center">

<svg className="w-6 h-6 text-[#00ffff]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div className="text-base md:text-xl font-black uppercase text-[#ffffff] tracking-[0.4em]">
                  World Wide Web Ready
                </div>
</div>
<p className="mt-2 text-sm md:text-base text-[#ffeeee] font-bold leading-relaxed">
                DutyDeclared is proudly optimized for:
              </p>
<ul className="mt-1 list-[square] list-inside text-[0.7rem] md:text-sm text-[#00ffff] font-black space-y-1">
<li>Netscape Navigator 2.0</li>
<li>Internet Explorer 4 (with 17 toolbars)</li>
<li>800x600 monitors... <span className="italic">ONLY</span></li>
</ul>
<p className="mt-2 text-xs md:text-sm text-[#ffff00] font-black uppercase tracking-[0.2em]">
                If it works on mobile, that’s accidental.
              </p>
</div>
</div>
</section>

<section className="border-b-8 border-[#00ff00] bg-[conic-gradient(from_0deg,#000000,#220000,#000022,#002200,#000000)] p-3 md:p-6">
<div className="text-center">
<div className="text-2xl md:text-3xl font-black text-[#ffff00] uppercase tracking-[0.4em] underline">
              PRICING MATRIX (EXTREME)
            </div>
<div className="mt-1 text-sm md:text-lg font-bold text-[#ffdddd]">
              We made it <span className="bg-[#ff0000]">as confusing as customs itself</span>.
            </div>
</div>
<div className="mt-3 md:mt-5 overflow-auto border-[6px] border-[#ff00ff] bg-[#000000]">
<table className="w-full border-collapse text-[0.6rem] md:text-xs">
<thead className="bg-[#0000ff] text-[#ffff00] uppercase">
<tr>
<th className="border-2 border-[#00ffff] p-1 font-black tracking-[0.25em]">
                    Plan Name
                  </th>
<th className="border-2 border-[#00ffff] p-1 font-black tracking-[0.25em]">
                    Monthly Fee*
                  </th>
<th className="border-2 border-[#00ffff] p-1 font-black tracking-[0.25em]">
                    Paper Cuts
                  </th>
<th className="border-2 border-[#00ffff] p-1 font-black tracking-[0.25em]">
                    Fax Screams
                  </th>
<th className="border-2 border-[#00ffff] p-1 font-black tracking-[0.25em]">
                    Bonus Corniness
                  </th>
</tr>
</thead>
<tbody>
<tr className="bg-[#220000] text-[#ffcccc] hover:bg-[#440000]">
<td className="border-2 border-[#ff00ff] p-1 font-black">
                    Hobbyist Importer
                  </td>
<td className="border-2 border-[#ff00ff] p-1 font-black text-[#00ff00]">
                    $9.97
                  </td>
<td className="border-2 border-[#ff00ff] p-1">Up to 3 daily</td>
<td className="border-2 border-[#ff00ff] p-1">Occasional</td>
<td className="border-2 border-[#ff00ff] p-1">
                    Blinking banners on every page
                  </td>
</tr>
<tr className="bg-[#002200] text-[#ccffcc] hover:bg-[#004400]">
<td className="border-2 border-[#00ff00] p-1 font-black">
                    Serious Shipper
                  </td>
<td className="border-2 border-[#00ff00] p-1 font-black text-[#ffff00]">
                    $49.99
                  </td>
<td className="border-2 border-[#00ff00] p-1">Unlimited</td>
<td className="border-2 border-[#00ff00] p-1">Frequent</td>
<td className="border-2 border-[#00ff00] p-1">
                    Autoplay MIDI soundtrack (unskippable)
                  </td>
</tr>
<tr className="bg-[#000022] text-[#ccccff] hover:bg-[#000044]">
<td className="border-2 border-[#00ffff] p-1 font-black">
                    Galactic Customs Overlord
                  </td>
<td className="border-2 border-[#00ffff] p-1 font-black text-[#ff00ff]">
                    $999.00
                  </td>
<td className="border-2 border-[#00ffff] p-1">Yes</td>
<td className="border-2 border-[#00ffff] p-1">
                    All the time, even when app is closed
                  </td>
<td className="border-2 border-[#00ffff] p-1">
                    Dedicated account manager on ICQ &amp; MSN
                  </td>
</tr>
</tbody>
</table>
</div>
<div className="mt-2 text-[0.6rem] md:text-xs text-[#ffff00] font-black tracking-[0.15em]">
            *Prices proudly displayed in non-rounded, oddly specific amounts for maximum distrust.
          </div>
</section>

<section className="border-b-8 border-[#ff0000] bg-[radial-gradient(circle,#222222,#000000)] p-3 md:p-6">
<div className="text-center">
<div className="text-2xl md:text-3xl font-black uppercase tracking-[0.35em] text-[#00ffff]">
              What Our Totally Real Customers Say
            </div>
</div>
<div className="mt-3 md:mt-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">

<div className="bg-[#0000aa] border-[6px] border-[#00ffff] shadow-[6px_6px_0_#ff0000] p-2 md:p-4 text-left">
<div className="text-sm md:text-base text-[#ffff00] font-black uppercase tracking-[0.2em]">
                "I Think It Worked?"
              </div>
<p className="mt-1 text-xs md:text-sm text-[#ffdddd] font-bold leading-relaxed">
                "I clicked 'Submit Customs' and my screen froze for 11 minutes. When it came back, my
                shipment was somehow cleared AND I had 37 pop-ups. 10/10 nostalgic trauma."
              </p>
<div className="mt-1 text-[0.6rem] text-[#00ff00] font-black">
                – Brenda, Confused Importer Since 1998
              </div>
</div>

<div className="bg-[#330000] border-[6px] border-[#ffff00] shadow-[6px_6px_0_#00ffff] p-2 md:p-4 text-left">
<div className="text-sm md:text-base text-[#00ff00] font-black uppercase tracking-[0.3em]">
                "So Many Colors"
              </div>
<p className="mt-1 text-xs md:text-sm text-[#ffcccc] font-bold leading-relaxed">
                "I wasn't sure if I was clearing customs or entering a hacking mini-game from a 90s movie.
                Either way, my cargo arrived. I think. The UI still haunts me."
              </p>
<div className="mt-1 text-[0.6rem] text-[#ffff00] font-black">
                – Omar, Professional Border Crosser
              </div>
</div>

<div className="bg-[#002200] border-[6px] border-[#ff00ff] shadow-[6px_6px_0_#ffff00] p-2 md:p-4 text-left">
<div className="text-sm md:text-base text-[#ff00ff] font-black uppercase tracking-[0.3em]">
                "My Eyes Hurt"
              </div>
<p className="mt-1 text-xs md:text-sm text-[#ddffdd] font-bold leading-relaxed">
                "I opened DutyDeclared on my phone and it zoomed in to 400%. I had to scroll sideways to
                read every sentence. I've never been more aware that UX matters."
              </p>
<div className="mt-1 text-[0.6rem] text-[#00ffff] font-black">
                – Alex, Recovering User
              </div>
</div>
</div>
</section>

<section className="border-b-8 border-[#ffff00] bg-[linear-gradient(45deg,#440000,#000000,#000044)] p-3 md:p-6">
<div className="text-center">
<div className="text-2xl md:text-3xl font-black uppercase tracking-[0.4em] text-[#ffff00] underline">
              Try DutyDeclared Now!!!
            </div>
<div className="mt-1 text-sm md:text-lg text-[#ffdddd] font-bold">
              Fill out this extremely overwhelming form to maybe, possibly, someday clear customs.
            </div>
</div>
<form className="mt-3 md:mt-5 w-full mx-auto border-[6px] border-[#ff00ff] bg-[#000000] p-3 md:p-5 text-left">

<div className="flex flex-col gap-3 md:gap-4">

<div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
<label className="w-full md:w-1/3 text-[0.7rem] md:text-sm font-black text-[#00ffff] uppercase tracking-[0.25em]">
                  Full Legal Name (ALL CAPS ONLY):
                </label>
<input className="w-full md:w-2/3 bg-[#000022] border-[4px] border-[#00ffff] text-[#ffff00] font-bold text-xs md:text-sm px-2 py-1 outline-none focus:bg-[#220000]" placeholder="e.g. JANE DOE BUT YELLING" type="text"/>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
<label className="w-full md:w-1/3 text-[0.7rem] md:text-sm font-black text-[#ff00ff] uppercase tracking-[0.25em]">
                  Fax Number (Required, Always):
                </label>
<input className="w-full md:w-2/3 bg-[#220000] border-[4px] border-[#ff0000] text-[#ffffff] font-bold text-xs md:text-sm px-2 py-1 outline-none focus:bg-[#000000]" placeholder="123-456-7890 (obviously)" type="text"/>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
<label className="w-full md:w-1/3 text-[0.7rem] md:text-sm font-black text-[#ffff00] uppercase tracking-[0.25em]">
                  Goods Description (Be Vague):
                </label>
<textarea className="w-full md:w-2/3 h-16 md:h-20 bg-[#002200] border-[4px] border-[#00ff00] text-[#ccffcc] font-bold text-xs md:text-sm px-2 py-1 resize-none outline-none focus:bg-[#001100]" placeholder="Boxes of... stuff."></textarea>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
<label className="w-full md:w-1/3 text-[0.7rem] md:text-sm font-black text-[#00ffff] uppercase tracking-[0.25em]">
                  How Did You Hear About Us?
                </label>
<select className="w-full md:w-2/3 bg-[#000000] border-[4px] border-[#00ffff] text-[#ffff00] font-bold text-xs md:text-sm px-2 py-1 outline-none">
<option>My Dial-Up Provider</option>
<option>Banner Ad With 9 GIFs</option>
<option>Forwarded Chain Email</option>
<option>Print-Out From A Friend</option>
<option>Got Lost On The Internet</option>
</select>
</div>

<div className="flex flex-col gap-1 mt-1">
<div className="text-[0.7rem] md:text-sm font-black text-[#ffcccc] uppercase tracking-[0.2em]">
                  ☑ Please Ruin My Experience:
                </div>
<div className="flex flex-col gap-1 text-[0.7rem] md:text-sm font-bold text-[#ffff00]">
<label className="flex items-center gap-1">
<input checked="" className="w-4 h-4 bg-[#ff0000] border-[3px] border-[#ffff00]" type="checkbox"/>
                    Add unnecessary confirmation pop-ups
                  </label>
<label className="flex items-center gap-1">
<input className="w-4 h-4 bg-[#0000ff] border-[3px] border-[#00ffff]" type="checkbox"/>
                    Force logout randomly
                  </label>
<label className="flex items-center gap-1">
<input className="w-4 h-4 bg-[#00ff00] border-[3px] border-[#ff00ff]" type="checkbox"/>
                    Autoplay sound effects on every click
                  </label>
</div>
</div>

<div className="mt-3 flex flex-wrap justify-center gap-2">
<button className="bg-[#ff0000] text-[#ffff00] border-[6px] border-[#ffff00] font-black text-sm md:text-lg uppercase tracking-[0.3em] px-4 md:px-8 py-2 shadow-[6px_6px_0_#000000] hover:bg-[#ffff00] hover:text-[#ff0000] active:translate-x-1 active:translate-y-1 transition-none animate-bounce" type="button">
                  Submit Customs (Maybe)
                </button>
<button className="bg-[#000000] text-[#00ffff] border-[6px] border-[#00ffff] font-black text-xs md:text-base uppercase tracking-[0.25em] px-3 md:px-6 py-2 shadow-[4px_4px_0_#ff00ff] hover:bg-[#0000ff] hover:text-[#ffff00] transition-none" type="reset">
                  Oops, Reset Everything Instantly
                </button>
</div>
</div>
</form>
</section>

<footer className="bg-black p-3 md:p-4 text-center border-t-8 border-[#00ffff]">
<marquee behavior="scroll" scrollamount="8">
<span className="text-[0.6rem] md:text-xs text-[#00ff00] font-black tracking-[0.3em] uppercase">
              DutyDeclared • The #1 Customs SaaS Your 1997 Self Would Love • Now With 200% More Blinking • Best Viewed In 800x600 With Speakers On
            </span>
</marquee>
<div className="mt-2 text-[0.6rem] md:text-xs text-[#ffff00] font-bold">
            © 1997–2001, 2007, 2013, 2019, 2025 DutyDeclared, Inc. All Rights Reserved, Probably.
          </div>
<div className="mt-1 flex flex-wrap justify-center gap-2 text-[0.6rem] md:text-xs text-[#ff00ff] font-black uppercase tracking-[0.2em]">
<span>Sign Our Guestbook</span>
<span>|</span>
<span>View Our Hit Counter</span>
<span>|</span>
<span>Download Our Desktop Cursor</span>
</div>
</footer>
</main>
</div>
</div>

    </>
  );
}
