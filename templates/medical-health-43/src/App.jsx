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
      
<div className="min-h-screen bg-white">
<header className="sticky top-0 z-40 border-b border-[#dee9f2] bg-white/90 backdrop-blur">
<div className="flex lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#1c1c1e] px-3 py-2 text-sm font-medium tracking-tight text-white">HL</div>
<div className="leading-tight">
<div className="text-sm font-medium text-[#1c1c1e]">Hair Loss Clinic</div>
<div className="text-xs text-[#6b7280]">Australia-wide support</div>
</div>
</div>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm text-[#4b5563] transition hover:text-[#1c1c1e]" href="#how-it-works">How it works</a>
<a className="text-sm text-[#4b5563] transition hover:text-[#1c1c1e]" href="#treatments">Treatments</a>
<a className="text-sm text-[#4b5563] transition hover:text-[#1c1c1e]" href="#faq">FAQ</a>
</nav>
<a className="inline-flex items-center rounded-full bg-[#ff3e1d] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90" href="#consult">
          Check eligibility
        </a>
</div>
</header>
<main className="">
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f2ee_0%,#ffffff_55%,#ffffff_100%)]"></div>
<div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ff3e1d]/10 blur-3xl"></div>
<div className="absolute left-0 top-40 h-64 w-64 rounded-full bg-[#dee9f2] blur-3xl"></div>
<div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
<div className="flex flex-col justify-center">
<div className="inline-flex gap-2 text-xs text-[#4b5563] bg-white w-fit border-[#dee9f2] border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 shadow-sm gap-x-2 gap-y-2 items-center">Information designed for responsible advertising in Australia<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#ff3e1d'}} width="18"></iconify-icon></div><h1 className="leading-tight sm:text-5xl lg:text-6xl text-4xl font-semibold text-[#1c1c1e] tracking-tight max-w-xl" style={{fontFamily: 'Biotif, \'Arial Black\', \'Helvetica Neue\', Arial, sans-serif'}}>
              Hair loss treatment plans for men, tailored to your stage and goals
            </h1>
<p className="mt-6 max-w-xl text-base leading-7 text-[#4b5563] sm:text-lg">
              Start with a simple consultation and receive guidance on suitable treatment options. Results vary between individuals and depend on factors such as hair loss pattern, consistency, and medical suitability.
            </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-[#ff3e1d] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90" href="#consult">
                Start your consultation
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-[#ccdcdd] bg-white px-6 py-3.5 text-sm font-medium text-[#1c1c1e] transition hover:bg-[#f7f2ee]" href="#how-it-works">
                Learn how it works
              </a>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-[#dee9f2] bg-white p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#f7f2ee] p-2">
<iconify-icon height="20" icon="solar:user-check-linear" style={{color: '#ff3e1d'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#1c1c1e]">Personalised review</div>
<div className="text-xs text-[#6b7280]">Based on your profile</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#dee9f2] bg-white p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#f7f2ee] p-2">
<iconify-icon height="20" icon="solar:document-text-linear" style={{color: '#ff3e1d'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#1c1c1e]">Clear treatment info</div>
<div className="text-xs text-[#6b7280]">Risks and suitability matter</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#dee9f2] bg-white p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#f7f2ee] p-2">
<iconify-icon height="20" icon="solar:chat-round-like-linear" style={{color: '#ff3e1d'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#1c1c1e]">Ongoing support</div>
<div className="text-xs text-[#6b7280]">If treatment is appropriate</div>
</div>
</div>
</div>
</div>
<div className="mt-8 rounded-2xl border border-[#dee9f2] bg-[#f7f2ee]/60 p-4 text-xs leading-6 text-[#6b7280]">
              This page provides general information only and is not a substitute for medical advice. Prescription treatments require assessment by a qualified health practitioner. Individual outcomes and timeframes vary.
            </div>
</div>
<div className="flex items-center justify-center">
<div className="w-full max-w-xl rounded-[2rem] border border-[#dee9f2] bg-white p-6 shadow-[0_20px_60px_rgba(28,28,30,0.08)] sm:p-8">
<div className="flex items-start justify-between gap-4">
<div className="">
<div className="text-sm font-medium text-[#ff3e1d]">Free eligibility check</div>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1c1c1e]" style={{fontFamily: 'Biotif, \'Arial Black\', \'Helvetica Neue\', Arial, sans-serif'}}>
                    See if treatment may be suitable for you
                  </h2>
</div>
<div className="rounded-2xl bg-[#1c1c1e] p-3">
<iconify-icon height="22" icon="solar:clipboard-check-linear" style={{color: '#ffffff'}} width="22"></iconify-icon>
</div>
</div>
<form className="mt-8 space-y-5" id="consult">
<div className="">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#6b7280]">Full name</label>
<input className="w-full rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3.5 text-sm text-[#1c1c1e] outline-none transition placeholder:text-[#9ca3af] focus:border-[#ff3e1d]" placeholder="Your name" type="text"/>
</div>
<div className="grid gap-5 sm:grid-cols-2">
<div className="">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#6b7280]">Mobile</label>
<input className="w-full rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3.5 text-sm text-[#1c1c1e] outline-none transition placeholder:text-[#9ca3af] focus:border-[#ff3e1d]" placeholder="04xx xxx xxx" type="tel"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#6b7280]">Email</label>
<input className="w-full rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3.5 text-sm text-[#1c1c1e] outline-none transition placeholder:text-[#9ca3af] focus:border-[#ff3e1d]" placeholder="you@example.com" type="email"/>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#6b7280]">Age range</label>
<div className="grid grid-cols-3 gap-3">
<button className="rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3 text-sm font-medium text-[#1c1c1e] transition hover:border-[#ff3e1d] hover:bg-[#f7f2ee]" type="button">30–39</button>
<button className="rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3 text-sm font-medium text-[#1c1c1e] transition hover:border-[#ff3e1d] hover:bg-[#f7f2ee]" type="button">40–49</button>
<button className="rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3 text-sm font-medium text-[#1c1c1e] transition hover:border-[#ff3e1d] hover:bg-[#f7f2ee]" type="button">50–55</button>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#6b7280]">What best describes your concern?</label>
<div className="grid gap-3 sm:grid-cols-2">
<button className="rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3 text-left text-sm font-medium text-[#1c1c1e] transition hover:border-[#ff3e1d] hover:bg-[#f7f2ee]" type="button">
                      Early thinning
                    </button>
<button className="rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3 text-left text-sm font-medium text-[#1c1c1e] transition hover:border-[#ff3e1d] hover:bg-[#f7f2ee]" type="button">
                      Receding hairline
                    </button>
<button className="rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3 text-left text-sm font-medium text-[#1c1c1e] transition hover:border-[#ff3e1d] hover:bg-[#f7f2ee]" type="button">
                      Crown thinning
                    </button>
<button className="rounded-2xl border border-[#ccdcdd] bg-white px-4 py-3 text-left text-sm font-medium text-[#1c1c1e] transition hover:border-[#ff3e1d] hover:bg-[#f7f2ee]" type="button">
                      General hair loss
                    </button>
</div>
</div>
<div className="rounded-2xl border border-[#dee9f2] bg-[#f8fafc] p-4">
<label className="flex items-start gap-3">
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#ccdcdd] bg-white">
<iconify-icon height="14" icon="solar:check-linear" style={{color: '#ff3e1d'}} width="14"></iconify-icon>
</span>
<span className="text-xs leading-6 text-[#4b5563]">
                      I agree to be contacted about my enquiry and understand that any prescription treatment is subject to clinical assessment, suitability, and Australian regulatory requirements.
                    </span>
</label>
</div>
<button className="inline-flex w-full items-center justify-center rounded-full bg-[#ff3e1d] px-6 py-4 text-sm font-medium text-white transition hover:opacity-90" type="submit">
                  Check my eligibility
                </button>
<p className="text-xs leading-6 text-[#6b7280]">
                  By continuing, you acknowledge that results are not guaranteed and that some treatments may involve risks, side effects, or may not be appropriate for you.
                </p>
</form>
</div>
</div>
</div>
</section>
<section className="border-y border-[#dee9f2] bg-white">
<div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#f7f2ee] p-2.5">
<iconify-icon height="20" icon="solar:stethoscope-linear" style={{color: '#ff3e1d'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#1c1c1e]">Clinical suitability first</div>
<div className="text-xs text-[#6b7280]">Treatment depends on assessment</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#f7f2ee] p-2.5">
<iconify-icon height="20" icon="solar:file-text-linear" style={{color: '#ff3e1d'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#1c1c1e]">Clear medical information</div>
<div className="text-xs text-[#6b7280]">Benefits, risks, and limitations</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#f7f2ee] p-2.5">
<iconify-icon height="20" icon="solar:calendar-linear" style={{color: '#ff3e1d'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#1c1c1e]">Ongoing plan reviews</div>
<div className="text-xs text-[#6b7280]">When clinically appropriate</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#f7f2ee] p-2.5">
<iconify-icon height="20" icon="solar:map-point-linear" style={{color: '#ff3e1d'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#1c1c1e]">Designed for Australia</div>
<div className="text-xs text-[#6b7280]">Responsible advertising approach</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-20" id="how-it-works">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-2xl">
<div className="text-sm font-medium text-[#ff3e1d]">How it works</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1c1c1e] sm:text-4xl" style={{fontFamily: 'Biotif, \'Arial Black\', \'Helvetica Neue\', Arial, sans-serif'}}>
              A straightforward path from enquiry to personalised guidance
            </h2>
<p className="mt-4 text-base leading-7 text-[#4b5563]">
              The process is designed to help you understand whether treatment options may be suitable, while presenting balanced information about expectations and outcomes.
            </p>
</div>
<div className="mt-12 grid gap-6 lg:grid-cols-3">
<div className="rounded-3xl border border-[#dee9f2] bg-white p-8 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f2ee] text-sm font-medium text-[#ff3e1d]">01</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-[#1c1c1e]">Tell us about your hair loss</h3>
<p className="mt-3 text-sm leading-7 text-[#4b5563]">
                Share your age range, stage of hair loss, and treatment goals so we can guide you toward relevant next steps.
              </p>
</div>
<div className="rounded-3xl border border-[#dee9f2] bg-[#f8fafc] p-8 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-medium text-[#ff3e1d]">02</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-[#1c1c1e]">Complete a clinical assessment</h3>
<p className="mt-3 text-sm leading-7 text-[#4b5563]">
                If appropriate, a qualified practitioner reviews your information to determine suitability for available treatment options.
              </p>
</div>
<div className="rounded-3xl border border-[#dee9f2] bg-white p-8 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f2ee] text-sm font-medium text-[#ff3e1d]">03</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-[#1c1c1e]">Receive your personalised plan</h3>
<p className="mt-3 text-sm leading-7 text-[#4b5563]">
                If treatment is suitable, you’ll receive guidance on usage, follow-up, and what realistic progress may look like over time.
              </p>
</div>
</div>
</div>
</section>
<section className="bg-[#f8fafc] py-20" id="treatments">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
<div>
<div className="text-sm font-medium text-[#ff3e1d]">Treatment approach</div>
<h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#1c1c1e] sm:text-4xl" style={{fontFamily: 'Biotif, \'Arial Black\', \'Helvetica Neue\', Arial, sans-serif'}}>
                Focused on evidence-informed options and realistic expectations
              </h2>
<p className="mt-4 max-w-2xl text-base leading-7 text-[#4b5563]">
                Treatment recommendations should always be based on your health history, pattern of hair loss, and clinical suitability. Not everyone is suitable for every option.
              </p>
<div className="mt-10 grid gap-5">
<div className="rounded-3xl border border-[#dee9f2] bg-white p-6">
<div className="flex items-start gap-4">
<div className="rounded-2xl bg-[#f7f2ee] p-3">
<iconify-icon height="22" icon="solar:dropper-linear" style={{color: '#ff3e1d'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-[#1c1c1e]">Topical treatment pathways</h3>
<p className="mt-2 text-sm leading-7 text-[#4b5563]">
                        Some men may be suited to topical options as part of a broader treatment plan. Suitability and expected response vary.
                      </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#dee9f2] bg-white p-6">
<div className="flex items-start gap-4">
<div className="rounded-2xl bg-[#f7f2ee] p-3">
<iconify-icon height="22" icon="solar:pills-3-linear" style={{color: '#ff3e1d'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-[#1c1c1e]">Prescription-based options</h3>
<p className="mt-2 text-sm leading-7 text-[#4b5563]">
                        Prescription treatments are only available following review by a qualified practitioner and may involve side effects or contraindications.
                      </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#dee9f2] bg-white p-6">
<div className="flex items-start gap-4">
<div className="rounded-2xl bg-[#f7f2ee] p-3">
<iconify-icon height="22" icon="solar:heart-pulse-2-linear" style={{color: '#ff3e1d'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-[#1c1c1e]">Progress monitoring and support</h3>
<p className="mt-2 text-sm leading-7 text-[#4b5563]">
                        Follow-up can help assess tolerability, consistency, and whether your plan remains appropriate over time.
                      </p>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-[#dee9f2] bg-white p-8 shadow-sm">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-[#1c1c1e] p-3">
<iconify-icon height="22" icon="solar:info-circle-linear" style={{color: '#ffffff'}} width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1c1c1e]">Important information</h3>
</div>
<div className="mt-8 space-y-5">
<div className="rounded-2xl bg-[#f8fafc] p-5">
<div className="text-sm font-medium text-[#1c1c1e]">Results vary</div>
<p className="mt-2 text-sm leading-7 text-[#4b5563]">
                    Individual response depends on many factors, including the cause and stage of hair loss, genetics, and adherence.
                  </p>
</div>
<div className="rounded-2xl bg-[#f8fafc] p-5">
<div className="text-sm font-medium text-[#1c1c1e]">Risks and side effects may apply</div>
<p className="mt-2 text-sm leading-7 text-[#4b5563]">
                    Some treatments may not be suitable for everyone and can involve possible adverse effects. A clinician can explain these during assessment.
                  </p>
</div>
<div className="rounded-2xl bg-[#f8fafc] p-5">
<div className="text-sm font-medium text-[#1c1c1e]">Not medical advice</div>
<p className="mt-2 text-sm leading-7 text-[#4b5563]">
                    Information on this page is general in nature and should not replace professional medical advice, diagnosis, or treatment.
                  </p>
</div>
<a className="inline-flex w-full items-center justify-center rounded-full bg-[#ff3e1d] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90" href="#consult">
                  Continue to eligibility check
                </a>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="rounded-[2rem] border border-[#dee9f2] bg-[linear-gradient(135deg,#1c1c1e_0%,#2a2a2d_100%)] p-8 text-white sm:p-12">
<div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
<div>
<div className="text-sm font-medium text-[#ffb7aa]">Built for men ready to act early</div>
<h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl" style={{fontFamily: 'Biotif, \'Arial Black\', \'Helvetica Neue\', Arial, sans-serif'}}>
                  Explore your options with a treatment plan that starts with suitability, not hype
                </h2>
<p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  If you’re noticing thinning, recession, or early signs of hair loss, a timely assessment may help identify what options are appropriate for your circumstances.
                </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-medium text-[#1c1c1e] transition hover:bg-[#f7f2ee]" href="#consult">
                Start now
              </a>
</div>
</div>
</div>
</section>
<section className="bg-[#f8fafc] py-20" id="faq">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="text-center">
<div className="text-sm font-medium text-[#ff3e1d]">FAQ</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1c1c1e] sm:text-4xl" style={{fontFamily: 'Biotif, \'Arial Black\', \'Helvetica Neue\', Arial, sans-serif'}}>
              Common questions
            </h2>
</div>
<div className="mt-12 space-y-4">
<div className="rounded-3xl border border-[#dee9f2] bg-white p-6">
<h3 className="text-base font-medium text-[#1c1c1e]">How quickly will I see results?</h3>
<p className="mt-3 text-sm leading-7 text-[#4b5563]">
                Timeframes vary. Some men may notice changes earlier than others, while some may not respond as hoped. Consistency and suitability both matter.
              </p>
</div>
<div className="rounded-3xl border border-[#dee9f2] bg-white p-6">
<h3 className="text-base font-medium text-[#1c1c1e]">Are prescription treatments available?</h3>
<p className="mt-3 text-sm leading-7 text-[#4b5563]">
                Prescription options may be available only after review by a qualified health practitioner who determines they are clinically appropriate.
              </p>
</div>
<div className="rounded-3xl border border-[#dee9f2] bg-white p-6">
<h3 className="text-base font-medium text-[#1c1c1e]">Is this page medical advice?</h3>
<p className="mt-3 text-sm leading-7 text-[#4b5563]">
                No. This page contains general information only. It does not replace professional medical advice or a consultation with a healthcare practitioner.
              </p>
</div>
<div className="rounded-3xl border border-[#dee9f2] bg-white p-6">
<h3 className="text-base font-medium text-[#1c1c1e]">Am I guaranteed to be suitable for treatment?</h3>
<p className="mt-3 text-sm leading-7 text-[#4b5563]">
                No. Suitability depends on your individual health history, symptoms, and a clinician’s assessment.
              </p>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-[#dee9f2] bg-white">
<div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
<div className="grid gap-8 lg:grid-cols-[1fr_auto]">
<div>
<div className="inline-block rounded-xl bg-[#1c1c1e] px-3 py-2 text-sm font-medium tracking-tight text-white">HL</div>
<p className="mt-4 max-w-3xl text-xs leading-6 text-[#6b7280]">
              This website contains general information only and does not constitute medical advice. Any treatment, including prescription-based options, requires assessment by a qualified practitioner to determine appropriateness. Results vary and no outcome is guaranteed.
            </p>
</div>
<div className="flex flex-col gap-2 text-xs text-[#6b7280] lg:items-end">
<a className="transition hover:text-[#1c1c1e]" href="#">Privacy</a>
<a className="transition hover:text-[#1c1c1e]" href="#">Terms</a>
<a className="transition hover:text-[#1c1c1e]" href="#">Contact</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
