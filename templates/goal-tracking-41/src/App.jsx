import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Utility to resize canvas to element size
    function resizeCanvasToElement(canvas) {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      const ctx = canvas.getContext('2d');
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      return ctx;
    }

    // Signature interactions for main canvas
    (function () {
      const canvas = document.getElementById('signatureCanvas');
      const placeholder = document.getElementById('signatureCanvasPlaceholder');
      if (!canvas) return;
      let ctx = resizeCanvasToElement(canvas);
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#232323';

      let drawing = false;
      let lastX = 0;
      let lastY = 0;
      let hasDrawn = false;

      function startDrawing(x, y) {
        drawing = true;
        lastX = x;
        lastY = y;
        if (!hasDrawn && placeholder) {
          placeholder.style.opacity = '0';
        }
      }

      function draw(x, y) {
        if (!drawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        lastX = x;
        lastY = y;
        hasDrawn = true;
      }

      function stopDrawing() {
        drawing = false;
      }

      function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        if (e.touches && e.touches.length > 0) {
          return {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
          };
        }
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }

      canvas.addEventListener('mousedown', (e) => {
        const pos = getPos(e);
        startDrawing(pos.x, pos.y);
      });

      canvas.addEventListener('mousemove', (e) => {
        const pos = getPos(e);
        draw(pos.x, pos.y);
      });

      window.addEventListener('mouseup', stopDrawing);

      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const pos = getPos(e);
        startDrawing(pos.x, pos.y);
      }, { passive: false });

      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const pos = getPos(e);
        draw(pos.x, pos.y);
      }, { passive: false });

      canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        stopDrawing();
      }, { passive: false });

      // Clear button
      const clearBtn = document.getElementById('clearSignature');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          hasDrawn = false;
          if (placeholder) {
            placeholder.style.opacity = '1';
          }
        });
      }

      // Handle resize
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ctx = resizeCanvasToElement(canvas);
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = '#232323';
          hasDrawn = false;
          if (placeholder) {
            placeholder.style.opacity = '1';
          }
        }, 200);
      });
    })();

    // Signature on check
    (function () {
      const canvas = document.getElementById('checkSignature');
      const placeholder = document.getElementById('signaturePlaceholder');
      if (!canvas) return;
      let ctx = resizeCanvasToElement(canvas);
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#232323';

      let drawing = false;
      let lastX = 0;
      let lastY = 0;
      let hasDrawn = false;

      function startDrawing(x, y) {
        drawing = true;
        lastX = x;
        lastY = y;
        if (!hasDrawn && placeholder) {
          placeholder.style.opacity = '0';
        }
      }

      function draw(x, y) {
        if (!drawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        lastX = x;
        lastY = y;
        hasDrawn = true;
      }

      function stopDrawing() {
        drawing = false;
      }

      function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        if (e.touches && e.touches.length > 0) {
          return {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
          };
        }
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }

      canvas.addEventListener('mousedown', (e) => {
        const pos = getPos(e);
        startDrawing(pos.x, pos.y);
      });

      canvas.addEventListener('mousemove', (e) => {
        const pos = getPos(e);
        draw(pos.x, pos.y);
      });

      window.addEventListener('mouseup', stopDrawing);

      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const pos = getPos(e);
        startDrawing(pos.x, pos.y);
      }, { passive: false });

      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const pos = getPos(e);
        draw(pos.x, pos.y);
      }, { passive: false });

      canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        stopDrawing();
      }, { passive: false });

      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ctx = resizeCanvasToElement(canvas);
          ctx.lineWidth = 1.2;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = '#232323';
          hasDrawn = false;
          if (placeholder) {
            placeholder.style.opacity = '1';
          }
        }, 200);
      });
    })();

    // CTA Scroll to check
    (function () {
      const btn = document.getElementById('ctaCreateCheck');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const checkEl = document.getElementById('checkPayee');
        if (checkEl) {
          checkEl.focus({ preventScroll: false });
          checkEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 py-8 lg:py-12 px-4 sm:px-6 lg:px-8 text-sm leading-relaxed">

<main className="flex-1 flex flex-col gap-6">

<header className="flex items-center justify-between">
<div className="flex items-center gap-2 tracking-tight">
<div className="h-7 w-7 rounded-full border border-[#232323]/20 flex items-center justify-center text-xs font-medium" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
            BD
          </div>
<div className="flex flex-col">
<span className="text-base font-medium uppercase tracking-tight" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Bank of Destiny
            </span>
<span className="text-xs text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Your future has already been approved.
            </span>
</div>
</div>
<div className="hidden sm:flex items-center gap-4 text-xs text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:sparkles" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
            Every signed goal is already on its way.
          </span>
</div>
</header>

<section className="rounded-2xl border border-[#232323]/10 bg-[#EAE5FF]/60 p-5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10">
<div className="flex-1 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 rounded-full border border-[#232323]/10 bg-white/60 px-3 py-1 text-xs text-[#232323]/80" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
            Your intention has been noted by the Universe.
          </div>
<div className="space-y-2">
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#232323]" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
              Write Your Future Check
            </h1>
<p className="text-sm sm:text-base text-[#232323]/80" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Place your amount, sign your intention, track your path.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
<button className="inline-flex items-center justify-center rounded-full bg-[#232323] text-[#F7EEDB] px-5 py-2.5 text-sm font-medium tracking-tight transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#232323]" id="ctaCreateCheck" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Create My Check
              <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="text-xs text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Deposit of effort → Withdrawal of success.
            </span>
</div>
<div className="grid grid-cols-2 gap-3 mt-1">
<div className="rounded-xl border border-[#232323]/10 bg-white/70 p-3 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span>Monthly goals funded</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:bar-chart-3" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-end gap-1.5 h-16">
<div className="flex-1 rounded-full bg-[#C6F4DE]/60" style={{height: '45%'}}></div>
<div className="flex-1 rounded-full bg-[#C6F4DE]/80" style={{height: '70%'}}></div>
<div className="flex-1 rounded-full bg-[#C6F4DE]" style={{height: '90%'}}></div>
<div className="flex-1 rounded-full bg-[#C6F4DE]/60" style={{height: '55%'}}></div>
<div className="flex-1 rounded-full bg-[#C6F4DE]/70" style={{height: '65%'}}></div>
<div className="flex-1 rounded-full bg-[#C6F4DE]/40" style={{height: '35%'}}></div>
</div>
<div className="flex items-center justify-between text-xs text-[#232323]/80" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="font-medium tracking-tight">72% funded</span>
<span>Current month</span>
</div>
</div>
<div className="rounded-xl border border-[#232323]/10 bg-white/70 p-3 flex flex-col justify-between gap-3">
<div className="flex items-center justify-between text-xs text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span>Calm stats</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:line-chart" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-xs">
<span className="text-[#232323]/70">Signed checks</span>
<span className="font-medium tracking-tight text-[#232323]">18</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-[#232323]/70">On track</span>
<span className="font-medium tracking-tight text-[#232323]">14</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-[#232323]/70">Awaiting action</span>
<span className="font-medium tracking-tight text-[#232323]">4</span>
</div>
</div>
<p className="text-xs text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Your Time Will Cash Out.
              </p>
</div>
</div>
</div>

<div className="lg:w-[55%] xl:w-[50%] flex w-full items-center">
<div className="h-full aspect-video overflow-hidden sm:p-5 flex flex-col gap-3 bg-[#F7EEDB] w-full border-[#232323]/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3">

<div className="flex items-center justify-between">
<div className="flex flex-col items-start">
<div className="text-xs font-medium tracking-[0.18em] uppercase text-[#232323]" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Bank of Destiny
                </div>
<div className="text-[0.7rem] text-[#232323]/70 mt-1" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Your future has already been approved.
                </div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="inline-flex items-center gap-1 text-[0.7rem] text-[#232323]/70 rounded-full border border-[#232323]/10 bg-white/70 px-2 py-1" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<svg aria-hidden="true" className="iconify text-[#232323] iconify--lucide" data-height="12" data-icon="lucide:sparkles" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                  Approved by the Universe.
                </div>
<span className="text-[0.65rem] text-[#232323]/60" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Your Time Will Cash Out.
                </span>
</div>
</div>

<div className="flex-1 flex flex-col gap-3.5 mt-1">

<div className="grid grid-cols-12 gap-3 items-start">
<div className="col-span-8 flex flex-col gap-1.5">
<label className="text-[0.7rem] uppercase tracking-tight text-[#232323]/70" style={{fontFamily: '\'\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    Pay To The Order Of
                  </label>
<div className="border-b border-[#232323]/30 pb-1 text-xs text-[#232323]/80" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<input className="w-full bg-transparent outline-none placeholder:text-[#232323]/40 text-xs" id="checkPayee" placeholder="Name of your future self or project" type="text"/>
</div>
</div>
<div className="col-span-4 flex flex-col gap-1.5">
<label className="text-[0.7rem] uppercase tracking-tight text-[#232323]/70 text-right" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    Date to Cash
                  </label>
<div className="border border-[#232323]/25 rounded-md px-2 py-1.5 flex items-center justify-between gap-1 bg-white/60">
<input className="w-full bg-transparent outline-none text-[0.7rem] text-right placeholder:text-[#232323]/40" id="checkDate" placeholder="MM / DD / YYYY" type="text"/>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-[0.7rem] uppercase tracking-tight text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Amount
                </label>
<div className="border border-[#232323]/25 rounded-lg bg-white/70 px-3 py-2 flex items-baseline justify-between gap-3">
<div className="flex items-baseline gap-1">
<span className="text-sm text-[#232323]/80" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      $
                    </span>
<input className="bg-transparent outline-none text-lg font-semibold tracking-tight text-[#232323] placeholder:text-[#232323]/40" id="checkAmount" placeholder="10,000" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}} type="text"/>
</div>
<span className="text-[0.7rem] text-[#232323]/60 whitespace-nowrap" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    in the currency of focused effort
                  </span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-[0.7rem] uppercase tracking-tight text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Goal Notes
                </label>
<div className="border border-[#232323]/20 rounded-lg bg-white/60 p-2.5 h-full">
<textarea className="w-full h-full bg-transparent outline-none resize-none text-xs text-[#232323]/80 placeholder:text-[#232323]/40" id="checkNotes" placeholder="Describe how you will deposit effort daily, and how you will recognize the withdrawal of success." rows="3" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}></textarea>
</div>
</div>
</div>

<div className="mt-1 pt-2 border-t border-[#232323]/15 flex flex-col sm:flex-row gap-3 items-end justify-between">
<div className="flex flex-col gap-1.5 w-full sm:w-1/2">
<div className="flex items-center gap-1.5 text-[0.7rem] text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="12" data-icon="lucide:star" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Approved by the Universe.</span>
</div>
<p className="text-[0.7rem] text-[#232323]/60" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Every signed goal is already on its way.
                </p>
</div>
<div className="w-full sm:w-1/2 flex flex-col gap-1 items-end">
<span className="text-[0.7rem] uppercase tracking-tight text-[#232323]/70 text-right" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Signature of Future Self
                </span>
<div className="w-full border-b border-[#232323]/40 relative pb-2">
<canvas className="w-full h-10 block" height="80" id="checkSignature" width="298"></canvas>
<span className="pointer-events-none absolute inset-0 flex items-end justify-end pr-1 text-[0.7rem] text-[#232323]/25 italic select-none" id="signaturePlaceholder" style={{fontFamily: '\'Poppins\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    𝓕𝓾𝓽𝓾𝓻𝓮 𝓢𝓮𝓵𝓯
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid sm:grid-cols-3 gap-3">
<div className="rounded-xl border border-[#232323]/10 bg-[#C6F4DE]/60 p-3 flex flex-col gap-1.5">
<span className="text-xs text-[#232323]/60 uppercase tracking-tight" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
            Affirmation
          </span>
<p className="text-sm text-[#232323]/90" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
            Your future has already been approved.
          </p>
</div>
<div className="rounded-xl border border-[#232323]/10 bg-[#EAE5FF]/60 p-3 flex flex-col gap-1.5">
<span className="text-xs text-[#232323]/60 uppercase tracking-tight" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
            Intention
          </span>
<p className="text-sm text-[#232323]/90" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
            Your intention has been noted by the Universe.
          </p>
</div>
<div className="rounded-xl border border-[#232323]/10 bg-[#F7EEDB]/80 p-3 flex flex-col gap-1.5">
<span className="text-xs text-[#232323]/60 uppercase tracking-tight" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
            Process
          </span>
<p className="text-sm text-[#232323]/90" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
            Deposit of effort → Withdrawal of success.
          </p>
</div>
</section>
</main>

<aside className="w-full lg:w-[34%] flex flex-col gap-6">

<section className="rounded-2xl border border-[#232323]/10 bg-[#EAE5FF]/50 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<div className="flex flex-col">
<h2 className="text-sm sm:text-base font-semibold tracking-tight text-[#232323]" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
              Signature of Future Self
            </h2>
<p className="text-xs text-[#232323]/70 mt-0.5" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Sign once slowly. Let the rest be momentum.
            </p>
</div>
<button className="text-[0.7rem] rounded-full border border-[#232323]/20 bg-white/60 px-2.5 py-1 text-[#232323]/80 hover:bg-white transition-opacity duration-300" id="clearSignature" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
            Clear
          </button>
</div>
<div className="rounded-xl border border-[#232323]/20 bg-white/70 overflow-hidden">
<div className="border-b border-[#232323]/10 px-3 py-2 text-[0.7rem] text-[#232323]/70 flex items-center justify-between" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:pen-line" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Draw your signature directly in the box below.
            </span>
<span className="hidden sm:inline text-[0.65rem] text-[#232323]/50">
              Slow strokes, calm lines.
            </span>
</div>
<div className="relative">
<canvas className="w-full h-40 sm:h-44 md:h-48 block cursor-crosshair" height="384" id="signatureCanvas" width="465"></canvas>
<span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[0.7rem] text-[#232323]/25 italic select-none" id="signatureCanvasPlaceholder" style={{fontFamily: '\'Poppins\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Sign here as the version of you who has already arrived.
            </span>
</div>
</div>
<p className="text-[0.7rem] text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
          Every signed goal is already on its way.
        </p>
</section>

<section className="rounded-2xl border border-[#232323]/10 bg-[#C6F4DE]/50 p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-2">
<div className="flex flex-col">
<h2 className="text-sm sm:text-base font-semibold tracking-tight text-[#232323]" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
              Monthly Achievements
            </h2>
<p className="text-xs text-[#232323]/70 mt-0.5" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              A soft glance at your quiet progress.
            </p>
</div>
<div className="text-[0.7rem] text-[#232323]/70 flex items-center gap-1.5" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex h-2 w-6 rounded-full bg-[#232323]/60"></span>
<span>Goals funded</span>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center gap-2">
<span className="w-16 text-[0.7rem] text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Week 1</span>
<div className="flex-1 h-2 rounded-full bg-white/60 overflow-hidden">
<div className="h-full bg-[#232323]/80" style={{width: '32%'}}></div>
</div>
<span className="w-10 text-[0.7rem] text-right text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>32%</span>
</div>
<div className="flex items-center gap-2">
<span className="w-16 text-[0.7rem] text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Week 2</span>
<div className="flex-1 h-2 rounded-full bg-white/60 overflow-hidden">
<div className="h-full bg-[#232323]/80" style={{width: '54%'}}></div>
</div>
<span className="w-10 text-[0.7rem] text-right text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>54%</span>
</div>
<div className="flex items-center gap-2">
<span className="w-16 text-[0.7rem] text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Week 3</span>
<div className="flex-1 h-2 rounded-full bg-white/60 overflow-hidden">
<div className="h-full bg-[#232323]/80" style={{width: '76%'}}></div>
</div>
<span className="w-10 text-[0.7rem] text-right text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>76%</span>
</div>
<div className="flex items-center gap-2">
<span className="w-16 text-[0.7rem] text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Week 4</span>
<div className="flex-1 h-2 rounded-full bg-white/60 overflow-hidden">
<div className="h-full bg-[#232323]/80" style={{width: '91%'}}></div>
</div>
<span className="w-10 text-[0.7rem] text-right text-[#232323]/70" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>91%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-3 pt-1">
<div className="rounded-xl border border-[#232323]/15 bg-white/70 p-2.5 flex flex-col gap-0.5">
<span className="text-[0.7rem] text-[#232323]/60 uppercase tracking-tight" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Goals
            </span>
<span className="text-base font-semibold tracking-tight text-[#232323]" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
              24
            </span>
<span className="text-[0.7rem] text-[#232323]/60" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Created this quarter
            </span>
</div>
<div className="rounded-xl border border-[#232323]/15 bg-white/70 p-2.5 flex flex-col gap-0.5">
<span className="text-[0.7rem] text-[#232323]/60 uppercase tracking-tight" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Signed
            </span>
<span className="text-base font-semibold tracking-tight text-[#232323]" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
              18
            </span>
<span className="text-[0.7rem] text-[#232323]/60" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              With intention
            </span>
</div>
<div className="rounded-xl border border-[#232323]/15 bg-white/70 p-2.5 flex flex-col gap-0.5">
<span className="text-[0.7rem] text-[#232323]/60 uppercase tracking-tight" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Cashed
            </span>
<span className="text-base font-semibold tracking-tight text-[#232323]" style={{fontFamily: '\'Söhne\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
              12
            </span>
<span className="text-[0.7rem] text-[#232323]/60" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Realized outcomes
            </span>
</div>
</div>
</section>
</aside>
</div>


    </>
  );
}
