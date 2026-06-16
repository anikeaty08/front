import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (() => {
        const setTempLabel = (btn, text) => {
          const label = btn.querySelector('.copy-label');
          if (!label) return;
          const prev = label.textContent;
          label.textContent = text;
          btn.dataset._copyPrevLabel = prev;
          clearTimeout(btn._copyTimer);
          btn._copyTimer = setTimeout(() => {
            label.textContent = btn.dataset._copyPrevLabel || 'Copy';
            delete btn.dataset._copyPrevLabel;
          }, 1200);
        };

        const copyText = async (text) => {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
          }
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.top = '-9999px';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        };

        document.querySelectorAll('button[data-copy-target]').forEach((btn) => {
          btn.addEventListener('click', async () => {
            const id = btn.getAttribute('data-copy-target');
            const el = document.getElementById(id);
            const text = (el?.textContent || '').trim();
            if (!text) return;

            try {
              await copyText(text);
              setTempLabel(btn, 'Copied');
            } catch (e) {
              setTempLabel(btn, 'Failed');
            }
          });
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto max-w-7xl border-l border-r border-dashed border-[#d7d2cc] min-h-screen relative bg-[#faf8f6]">

<div className="absolute inset-0 pointer-events-none flex justify-between px-4 opacity-20 z-0">
<div className="w-px h-full bg-[#d7d2cc]"></div>
<div className="w-px h-full bg-[#d7d2cc]"></div>
<div className="w-px h-full bg-[#d7d2cc]"></div>
</div>
<main className="md:p-6 lg:p-8 z-10 pt-4 pr-4 pb-4 pl-4 relative space-y-6">

<section className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0f1115] text-white min-h-[450px] flex flex-col items-center justify-center p-8 lg:p-12 shadow-2xl shadow-gray-200 text-center pb-24">

<div className="absolute inset-0 z-0">
<img alt="Abstract 3D" className="opacity-40 mix-blend-overlay w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f147f7d-661c-4181-a17e-e2ca5322b1b0_1600w.webp"/>
<div className="bg-gradient-to-t from-[#0f1115] via-transparent to-[#0f1115]/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full flex justify-center absolute top-8">
<nav className="flex gap-6 text-sm bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md gap-x-6 gap-y-6 items-center">
<img alt="Intentional Marketing" className="opacity-90 w-auto h-6" src="https://uploads.zite.com/orgid-5623/zite-uploads/8b1fesnzun/uA8cbGBEXuOH0PtXFo6MUd8wMzd26gR0_hosted-1771611134545-ibbs4l.png"/>
</nav>
</div>

<div className="relative z-10 max-w-3xl mt-12">
<div className="inline-flex text-xs text-indigo-300 font-geist bg-indigo-500/10 border-indigo-500/30 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 items-center">Hire Ready Assessment</div>
<h1 className="text-4xl md:text-6xl leading-[1.1] mb-6 text-white tracking-tighter font-jakarta font-medium">
              Welcome to the
              <br/>
<span className="tracking-tighter font-jakarta font-medium text-indigo-400">
                Guardian Assessment
              </span>
</h1>
<p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto font-geist">
              Congratulations on progressing to this phase. Please review the
              access codes and instructions below carefully before beginning
              your assessment.
            </p>
</div>
</section>

<div className="relative z-20 max-w-4xl mx-auto -mt-20 px-4">
<div className="bg-[#fffdfb] rounded-3xl p-8 lg:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-[#e6e0da] flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1 space-y-6 w-full">
<h2 className="text-xl text-gray-900 tracking-tight flex items-center gap-2 font-jakarta font-medium">
<iconify-icon className="text-2xl text-indigo-500" icon="solar:lock-keyhole-linear"></iconify-icon>
                Your Access Codes
              </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-[#f7f4f1] border border-[#e6e0da] rounded-2xl p-4">
<p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-geist">
                    Master Account Code
                  </p>
<div className="flex items-center justify-between gap-3">
<p className="text-2xl text-gray-900 tracking-tight font-jakarta font-medium" id="masterCode">
                      R73F2D
                    </p>
<button className="group inline-flex items-center gap-1.5 rounded-full border border-[#dfd8d1] bg-[#fffdfb] px-3.5 py-1.5 text-xs font-medium text-gray-600 shadow-sm hover:bg-[#fbf8f5] hover:border-[#d7d0c9] hover:text-gray-900 hover:shadow transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-600/30" data-copy-target="masterCode" type="button">
<iconify-icon className="text-[14px] text-gray-400 transition-colors group-hover:text-indigo-500" icon="lucide:copy"></iconify-icon>
<span className="copy-label font-geist">Copy</span>
</button>
</div>
</div>
<div className="bg-[#f7f4f1] border border-[#e6e0da] rounded-2xl p-4">
<p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-geist">
                    Secondary Account Code
                  </p>
<div className="flex items-center justify-between gap-3">
<p className="text-2xl text-gray-900 tracking-tight font-jakarta font-medium" id="secondaryCode">
                      S987V6
                    </p>
<button className="group inline-flex items-center gap-1.5 rounded-full border border-[#dfd8d1] bg-[#fffdfb] px-3.5 py-1.5 text-xs font-medium text-gray-600 shadow-sm hover:bg-[#fbf8f5] hover:border-[#d7d0c9] hover:text-gray-900 hover:shadow transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-600/30" data-copy-target="secondaryCode" type="button">
<iconify-icon className="text-[14px] text-gray-400 transition-colors group-hover:text-indigo-500" icon="lucide:copy"></iconify-icon>
<span className="copy-label font-geist">Copy</span>
</button>
</div>
</div>
</div>
</div>
<div className="w-full md:w-auto flex flex-col items-center md:items-end space-y-4">
<a className="w-full md:w-auto text-center px-8 py-4 rounded-full bg-gray-900 text-white hover:bg-black transition-colors shadow-lg flex items-center justify-center gap-2 text-base font-geist" href="http://www.virtualhrcenter.com/guardian/" target="_blank">
                Open Assessment Site
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-xs text-gray-500 text-center md:text-right font-geist">
                Link opens in a new tab:
                <br/>
                virtualhrcenter.com/guardian
              </p>
</div>
</div>
</div>

<section className="py-16 relative overflow-hidden bg-transparent">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl text-gray-900 mb-4 leading-[1.1] tracking-tight font-jakarta font-medium">
                How to complete your assessment
              </h2>
<p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto font-geist">
                Please follow these steps to ensure your testing process is
                smooth and uninterrupted.
              </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="bg-[#fffdfb] p-8 rounded-3xl border border-[#e6e0da] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 bg-indigo-50 border-indigo-100">
<iconify-icon className="text-2xl text-indigo-600" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 mb-4 tracking-tight font-jakarta font-medium">
                  1. Registration Setup
                </h3>
<ul className="space-y-3 text-sm text-gray-600 font-sans leading-relaxed">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-base shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist">
                      Once logged in, click the
                      <strong className="font-geist">
                        "Click Here To Begin Questionnaire"
                      </strong>
                      bar.
                    </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-base shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist">
                      Enter your personal information and choose a password.
                    </span>
</li>
</ul>

<div className="mt-6 bg-orange-50 border border-orange-100 p-4 rounded-xl">
<p className="text-sm text-orange-800 flex gap-2 font-geist">
<iconify-icon className="text-orange-600 text-lg shrink-0 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
<strong className="font-geist">Important:</strong>
                    A pop-up will assign you a User ID. Write down this User ID
                    and your password immediately. You will need them if
                    disconnected.
                  </p>
</div>
</div>

<div className="hover:shadow-md transition-shadow bg-[#fffdfb] border-[#e6e0da] border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-[#f2ede7] rounded-xl flex items-center justify-center border border-[#e6e0da] mb-6">
<iconify-icon className="text-gray-700 text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 mb-4 tracking-tight font-jakarta font-medium">
                  2. Time &amp; Environment
                </h3>
<ul className="space-y-3 text-sm text-gray-600 font-sans leading-relaxed">
<li className="flex items-start gap-2">
<iconify-icon className="text-gray-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist">
                      Allocate approximately
                      <strong className="font-geist">1 hour and 10 minutes</strong>
                      to complete the process.
                    </span>
</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-start">
<iconify-icon className="text-gray-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist"><span className="font-geist block">The assessment is timed and requires your full, undivided attention.</span></span>
</li>
</ul>
</div>

<div className="bg-[#fffdfb] p-8 rounded-3xl border border-[#e6e0da] shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-[#f2ede7] rounded-xl flex items-center justify-center border border-[#e6e0da] mb-6">
<iconify-icon className="text-gray-700 text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 mb-4 tracking-tight font-jakarta font-medium">
                  3. Helpful Preparation
                </h3>
<ul className="space-y-3 text-sm text-gray-600 font-sans leading-relaxed">
<li className="flex items-start gap-2">
<iconify-icon className="text-gray-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist">This assessment is designed to be taken on a large screen and not on mobile. Please have a laptop or desktop at your disposal.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gray-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist">
                      Have a scratch pad and pen handy. There are
                      problem-solving questions that may require calculations.
                    </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 pb-16">
<div className="relative bg-[#0f1115] rounded-3xl p-8 lg:p-12 overflow-hidden shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">

<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[80px] pointer-events-none bg-indigo-500/10"></div>
<div className="relative z-10 md:max-w-2xl">
<div className="flex items-center gap-3 justify-center md:justify-start mb-4">
<div className="flex bg-white/10 w-10 h-10 rounded-full items-center justify-center">
<iconify-icon className="text-white text-xl" icon="lucide:wifi"></iconify-icon>
</div>
<h3 className="text-2xl text-white tracking-tighter font-jakarta font-medium">
                  Connection Issues?
                </h3>
</div>
<p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 font-geist">
                If you get disconnected from the internet or your computer locks
                up, don't worry. You can resume exactly where you left off.
              </p>
<p className="text-gray-400 text-sm leading-relaxed font-geist">
                Technical support is available on the assessment website, or you
                can contact me directly if you experience persistent problems.
              </p>
</div>
<div className="relative z-10 w-full md:w-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-geist">
                Reconnection Link
              </p>
<a className="block font-mono text-sm mb-4 transition-colors font-geist text-indigo-400 hover:text-indigo-300" href="http://www.virtualhrcenter.com/dnf" target="_blank">
                virtualhrcenter.com/dnf
              </a>
<p className="text-xs text-gray-400 border-t border-white/10 pt-4 font-geist">
                Log in using the
                <strong className="text-white font-geist">User ID</strong>
                and
                <strong className="text-white font-geist">Password</strong>
                you saved during step 1.
              </p>
</div>
</div>
</section>

<footer className="mt-8 w-full bg-transparent rounded-[2.5rem] overflow-hidden relative border-t border-[#d7d2cc] pb-8 pt-12">
<div className="px-8 flex flex-col items-center justify-center text-center space-y-4">
<p className="text-gray-500 text-sm font-geist">
              Good luck with your assessment! We look forward to reviewing your
              results.
            </p>
</div>
</footer>
</main>
</div>


    </>
  );
}
