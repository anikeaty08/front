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
      
<main className="sm:py-16 max-w-[640px] mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">

<header className="flex justify-between items-baseline">
<div className="text-xs uppercase tracking-[0.15em] text-[#555]">
                JP Command
            </div>
<a className="text-sm text-[#555] hover:text-[#111] transition-colors duration-300" href="#cta">
                Request a conversation
            </a>
</header>

<section className="mt-24 sm:mt-32">
<h1 className="text-5xl sm:text-6xl tracking-tight text-[#111] leading-[1.15]" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="block">Your firm runs on email.</span>
<span className="block sm:mt-3 mt-2">It was never designed to.</span>
</h1>
<div className="mt-16 sm:mt-20 flex flex-col gap-8">
<p className="sm:text-lg leading-[1.7] text-base text-[#444]">Decisions, deal flow, internal coordination —
all routed through fragmented threads.</p>
<p className="sm:text-lg leading-[1.7] text-base text-[#444]">It works.<br/> Until it becomes the constraint.</p>
</div>
</section>

<section className="sm:mt-32 sm:pt-16 border-[#E5E5E5] border-t mt-24 pt-12">
<p className="text-base sm:text-lg text-[#444] leading-[1.7] mb-6">
        At scale, this creates:
    </p>
<ul className="flex flex-col gap-3 text-base sm:text-lg text-[#444] leading-[1.7] mb-8">
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">decisions delayed across threads</span>
</li>
<li className="flex gap-4">
<span className="text-[#aaa]">—</span><span className="">critical information buried or missed</span></li>
<li className="flex gap-4">
<span className="text-[#aaa]">—</span><span className="">Ownership implicit, rarely assigned</span></li>
<li className="flex gap-4">
<span className="text-[#aaa]">—</span><span className="">Partners acting as the routing layer</span></li>
</ul>
<div className="mt-8 space-y-6 max-w-[640px]">
<p className="text-base sm:text-lg leading-[1.7] text-[#444]">
    The system holds — but only through constant effort.
  </p>
<p className="text-base sm:text-lg leading-[1.7] text-[#111]">
    This is not an inbox problem.<br/>
    It is an operational risk.
  </p>
</div>
</section>

<section className="mt-24 sm:mt-32 border-t border-[#E5E5E5] pt-12 sm:pt-16">
<div className="flex flex-col gap-8">
<p className="text-base sm:text-lg text-[#444] leading-[1.7]">
                    I redesign how information moves inside investment firms.
                </p>
<p className="text-base sm:text-lg text-[#444] leading-[1.7]">
                    Not by adding tools —<br/>
                    but by restructuring what already exists.
                </p>
</div>
</section>

<section className="mt-24 sm:mt-32 border-t border-[#E5E5E5] pt-12 sm:pt-16">
<p className="text-base sm:text-lg text-[#444] leading-[1.7] mb-6">
                Over 3–6 weeks:
            </p>
<ul className="flex flex-col gap-3 text-base sm:text-lg text-[#444] leading-[1.7] mb-8">
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">Map actual communication flows</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">Isolate decision bottlenecks</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">redefine ownership and routing</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">Redesign routing inside the inbox</span></li>
</ul>
<p className="sm:text-lg leading-[1.7] text-base text-[#444]">No abstraction.<br/> No theoretical model.<br className=""/> Everything is implemented.</p>
</section>

<section className="mt-24 sm:mt-32 border-t border-[#E5E5E5] pt-12 sm:pt-16">
<p className="text-base sm:text-lg text-[#444] leading-[1.7] mb-6">
                A system where:
            </p>
<ul className="flex flex-col gap-3 text-base sm:text-lg text-[#444] leading-[1.7]">
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">decisions don’t wait for visibility</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">ownership is always explicit</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">information cannot disappear</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">Partners are no longer required to hold everything together</span></li>
</ul>
</section>

<section className="mt-24 sm:mt-32 border-t border-[#E5E5E5] pt-12 sm:pt-16">
<div className="uppercase text-xs text-[#888] tracking-[0.15em] mb-8">Typical situations</div>
<ul className="flex flex-col gap-3 text-base sm:text-lg text-[#444] leading-[1.7]">
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">300–800 emails/week at partner level</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">3–6 stakeholders per decision thread</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">No explicit ownership in most critical threads</span></li>
<li className="flex gap-4"><span className="text-[#aaa]">—</span><span className="">Hours — sometimes days — to reach decisions</span></li>
</ul>
</section>

<section className="mt-24 sm:mt-32 border-t border-[#E5E5E5] pt-12 sm:pt-16">
<div className="uppercase text-xs text-[#888] tracking-[0.15em] mb-8">Confidential by design</div>
<div className="flex flex-col gap-8">
<p className="text-base sm:text-lg text-[#444] leading-[1.7]">
                    No data leaves your environment.
                </p>
<p className="sm:text-lg leading-[1.7] text-base text-[#444]">Everything runs inside your existing infrastructure.</p>
<p className="sm:text-lg leading-[1.7] text-base text-[#444]">No external tools.<br/> No exposure.<br/> No dependency.</p>
</div>
</section>

<section className="mt-24 sm:mt-32 border-t border-[#111] pt-16 sm:pt-24 mb-16 sm:mb-24" id="cta">
<h2 className="text-3xl sm:text-4xl tracking-tight text-[#111] leading-[1.2]" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="block">If your firm runs on email,
</span>
<span className="block sm:mt-3 mt-2">it must be designed as a system.</span>
</h2>
<div className="mt-12 sm:mt-16">
<a className="inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.1em] text-[#FAFAFA] bg-[#111] px-8 py-4 hover:bg-[#333] transition-colors duration-300 w-full sm:w-auto" href="#">
                    Request a conversation
                    <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>
</main>

    </>
  );
}
