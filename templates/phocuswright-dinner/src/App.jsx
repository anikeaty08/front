import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener("DOMContentLoaded", () => {
      if (window.lucide) {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      const choices = document.querySelectorAll(".rsvp-choice");
      const attendanceInput = document.getElementById("attendance");
      const attendanceError = document.getElementById("attendance-error");
      const form = document.getElementById("rsvp-form");
      const submitBtn = document.getElementById("submit-btn");
      const successState = document.getElementById("success-state");
      const errorState = document.getElementById("error-state");

      choices.forEach((btn) => {
        btn.addEventListener("click", () => {
          const choice = btn.getAttribute("data-rsvp-choice");
          attendanceInput.value = choice;

          choices.forEach((b) => {
            b.classList.remove(
              "border-emerald-500/50",
              "bg-emerald-500/10",
              "hover:border-emerald-400",
              "hover:bg-emerald-500/15"
            );
            b.classList.add("border-slate-700", "bg-slate-900/60");
          });

          if (choice === "yes") {
            btn.classList.remove("border-slate-700", "bg-slate-900/60");
            btn.classList.add(
              "border-emerald-500/50",
              "bg-emerald-500/10",
              "hover:border-emerald-400",
              "hover:bg-emerald-500/15"
            );
          } else {
            btn.classList.remove("border-slate-700", "bg-slate-900/60");
            btn.classList.add(
              "border-slate-700",
              "bg-slate-900/60",
              "hover:border-slate-500",
              "hover:bg-slate-900"
            );
          }

          attendanceError.classList.add("hidden");
        });
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        successState.classList.add("hidden");
        errorState.classList.add("hidden");

        if (!attendanceInput.value) {
          attendanceError.classList.remove("hidden");
          return;
        }

        submitBtn.disabled = true;

        // Simulate async submission
        setTimeout(() => {
          submitBtn.disabled = false;
          successState.classList.remove("hidden");
          // In a real app, send the form data via fetch() here.
        }, 800);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-3xl mx-auto my-8 md:my-16 lg:my-20">

<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl">

<div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-emerald-500/20 via-teal-400/10 to-transparent blur-3xl"></div>

<div className="relative flex items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 py-3 md:px-6">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-400/40">
<span className="text-sm font-semibold tracking-tight text-emerald-300">D</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase tracking-tight text-emerald-300">
              Directus
            </span>
<span className="text-sm md:text-base font-semibold tracking-tight text-slate-50">
              Lion's Share Dinner
            </span>
<span className="text-xs md:text-sm text-slate-400">
              Phocuswright · San Diego
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-xs md:text-sm text-slate-400">
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-emerald-400" data-lucide="map-pin"></i>
<span>The Lion's Share</span>
</div>
<span className="text-slate-600">•</span>
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-emerald-400" data-lucide="calendar"></i>
<span>Phocuswright week</span>
</div>
</div>
</div>

<div className="relative grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] px-4 py-6 md:px-8 md:py-8">

<div className="space-y-6 md:space-y-8">

<div className="space-y-3 md:space-y-4">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs md:text-sm font-medium tracking-tight text-emerald-200">
                Hosted by Directus · Private invitation
              </span>
</div>
<div className="space-y-2">
<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50">
                I’d love to host you at our Phocuswright dinner.
              </h1>
<p className="text-base md:text-lg text-slate-300">
                I’m bringing together a small group of leaders for drinks, dinner, and conversation
                at <span className="font-medium text-slate-100">The Lion’s Share</span>, just steps from the Phocuswright Conference.
                If you can make it, confirm your seat below.
              </p>
<p className="text-xs md:text-sm text-slate-400">
                — John Daniels, Directus
              </p>
</div>
</div>

<div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:p-5">
<div className="grid gap-4 sm:grid-cols-3">
<div className="flex items-start gap-3">
<div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
<i className="w-4 h-4 text-emerald-300" data-lucide="calendar-days"></i>
</div>
<div className="space-y-0.5">
<p className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-tight">
                    Date &amp; Time
                  </p>
<p className="text-sm md:text-base text-slate-100">
                    [Conference date] · 7:00 PM
                  </p>
<p className="text-xs md:text-sm text-slate-400">
                    Arrivals from 6:45 PM
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
<i className="w-4 h-4 text-emerald-300" data-lucide="map-pin"></i>
</div>
<div className="space-y-0.5">
<p className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-tight">
                    Venue
                  </p>
<p className="text-sm md:text-base text-slate-100">
                    The Lion’s Share
                  </p>
<p className="text-xs md:text-sm text-slate-400">
                    629 Kettner Blvd, San Diego, CA
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
<i className="w-4 h-4 text-emerald-300" data-lucide="users"></i>
</div>
<div className="space-y-0.5">
<p className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-tight">
                    Format
                  </p>
<p className="text-sm md:text-base text-slate-100">
                    Seated dinner · Cocktails
                  </p>
<p className="text-xs md:text-sm text-slate-400">
                    Curated group of industry leaders
                  </p>
</div>
</div>
</div>
<p className="text-xs md:text-sm text-slate-400">
              This invite is non-transferable. I’ll confirm final details and menu selections with you closer to the event.
            </p>
</div>

<form className="space-y-5 md:space-y-6" id="rsvp-form">
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="block text-xs md:text-sm font-medium text-slate-200 tracking-tight" htmlFor="fullName">
                  Full name
                </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 py-2.5 text-sm md:text-base text-slate-100 outline-none ring-0 transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500" id="fullName" name="fullName" placeholder="Your name" required="" type="text"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="block text-xs md:text-sm font-medium text-slate-200 tracking-tight" htmlFor="email">
                  Email
                </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 py-2.5 text-sm md:text-base text-slate-100 outline-none ring-0 transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs md:text-sm font-medium text-slate-200 tracking-tight" htmlFor="phone">
                  Mobile number
                </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 py-2.5 text-sm md:text-base text-slate-100 outline-none ring-0 transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500" id="phone" name="phone" placeholder="+1 (555) 555-1234" required="" type="tel"/>
<p className="text-xs md:text-sm text-slate-500">
                  I’ll send you updates or give you instructions in case anything changes.
                </p>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="block text-xs md:text-sm font-medium text-slate-200 tracking-tight" htmlFor="role">
                  Role / Title
                </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 py-2.5 text-sm md:text-base text-slate-100 outline-none ring-0 transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500" id="role" name="role" placeholder="e.g. VP, Product" type="text"/>
</div>
</div>

<div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:p-5">
<p className="text-xs md:text-sm font-medium tracking-tight text-slate-200">
                Will you join us at The Lion’s Share?
              </p>
<div className="grid gap-3 sm:grid-cols-2">

<button className="rsvp-choice group flex items-center justify-between rounded-xl border border-emerald-500/50 bg-emerald-500/10 px-3.5 py-2.5 text-left transition hover:border-emerald-400 hover:bg-emerald-500/15" data-rsvp-choice="yes" type="button">
<div>
<p className="text-sm md:text-base font-medium text-emerald-100">
                      Yes, save my seat
                    </p>
<p className="text-xs md:text-sm text-emerald-200/80">
                      I’ll attend the dinner in person.
                    </p>
</div>
<div className="ml-3 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/60 bg-emerald-500/20">
<i className="w-3.5 h-3.5 text-emerald-100" data-lucide="check"></i>
</div>
</button>

<button className="rsvp-choice group flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 py-2.5 text-left transition hover:border-slate-500 hover:bg-slate-900" data-rsvp-choice="no" type="button">
<div>
<p className="text-sm md:text-base font-medium text-slate-100">
                      No, I can’t make it
                    </p>
<p className="text-xs md:text-sm text-slate-400">
                      Please release my seat to another guest.
                    </p>
</div>
<div className="ml-3 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 bg-slate-900">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="x"></i>
</div>
</button>
</div>
<input id="attendance" name="attendance" required="" type="hidden"/>
<p className="hidden text-xs text-rose-400" id="attendance-error">
                Please select whether you’ll be attending.
              </p>
</div>

<div className="space-y-1.5">
<label className="block text-xs md:text-sm font-medium text-slate-200 tracking-tight" htmlFor="diet">
                Dietary preferences or restrictions
              </label>
<textarea className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 py-2.5 text-sm md:text-base text-slate-100 outline-none ring-0 transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500" id="diet" name="diet" placeholder="Let me know about any allergies or dietary needs." rows="3"></textarea>
</div>

<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400/90 px-5 py-2.5 text-sm md:text-base font-medium tracking-tight text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.35)] transition hover:bg-emerald-300 active:translate-y-0.5 disabled:cursor-not-allowed disabled:bg-emerald-700/50" id="submit-btn" type="submit">
<span>Send RSVP to John</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-xs md:text-sm text-slate-400">
                You’ll receive a calendar invite and location details after I confirm your seat.
              </p>
</div>

<div className="hidden rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-xs md:text-sm text-emerald-100" id="success-state">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/30">
<i className="w-3.5 h-3.5 text-emerald-50" data-lucide="sparkles"></i>
</div>
<div>
<p className="font-medium tracking-tight">
                    RSVP received.
                  </p>
<p className="text-emerald-100/90">
                    Thanks for responding — I’ll follow up shortly with final details and a calendar invite.
                  </p>
</div>
</div>
</div>
<div className="hidden rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-xs md:text-sm text-rose-100" id="error-state">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/30">
<i className="w-3.5 h-3.5 text-rose-50" data-lucide="alert-triangle"></i>
</div>
<div>
<p className="font-medium tracking-tight">
                    Something went wrong.
                  </p>
<p className="text-rose-100/90">
                    Please try again, or reply directly to my invite email to confirm your attendance.
                  </p>
</div>
</div>
</div>
</form>
</div>

<div className="space-y-5 md:space-y-6">

<div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">

<div className="relative">
<video autoplay="" className="w-full h-40 md:h-44 object-cover" loop="" muted="" playsinline="" src="https://static.spotapps.co/website_videos/The_Lion%27s_Share_Edited_Video_Vimeo720p30.mp4"></video>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-950/80"></div>
</div>
<div className="relative p-4 md:p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs md:text-sm font-medium tracking-tight text-slate-200">
                    The Lion’s Share
                  </p>
<p className="text-xs md:text-sm text-slate-400">
                    629 Kettner Blvd · San Diego
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs md:text-sm text-slate-200 transition hover:border-emerald-400 hover:text-emerald-100" type="button">
<i className="w-3.5 h-3.5" data-lucide="external-link"></i>
<span>Open in Maps</span>
</button>
</div>
<div className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="walk"></i>
<span>Short walk from conference venues</span>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<span className="h-1 w-1 rounded-full bg-emerald-400/80"></span>
<span>
                  Speakeasy-style cocktails, chef-driven small plates, and a warm, low-lit dining room — one of my favorite spots in San Diego.
                </span>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:p-5 space-y-3">
<p className="text-xs md:text-sm font-medium tracking-tight text-slate-200">
              Evening flow
            </p>
<div className="space-y-3">
<div className="flex gap-3">
<div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-xs md:text-sm text-slate-300">
                  7:00
                </div>
<div>
<p className="text-xs md:text-sm font-medium text-slate-100">
                    Welcome cocktails &amp; introductions
                  </p>
<p className="text-xs md:text-sm text-slate-400">
                    Mix and meet fellow guests at the bar.
                  </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-xs md:text-sm text-slate-300">
                  7:30
                </div>
<div>
<p className="text-xs md:text-sm font-medium text-slate-100">
                    Seated dinner
                  </p>
<p className="text-xs md:text-sm text-slate-400">
                    Shared plates and curated conversation.
                  </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-xs md:text-sm text-slate-300">
                  9:30
                </div>
<div>
<p className="text-xs md:text-sm font-medium text-slate-100">
                    Nightcap &amp; wrap
                  </p>
<p className="text-xs md:text-sm text-slate-400">
                    Stay for a final drink or head to your next event.
                  </p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-3">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/60">
<span className="text-xs font-semibold tracking-tight text-emerald-100">JD</span>
</div>
<p className="text-xs md:text-sm font-medium tracking-tight text-slate-100">
                A note from John at Directus
              </p>
</div>
<p className="text-xs md:text-sm text-slate-300">
              I’m keeping this dinner intentionally small so we can actually talk — about product, data,
              travel, and anything else that comes up. If your plans change, just let me know so I can
              offer your seat to someone on the waitlist.
            </p>
<p className="text-xs md:text-sm text-slate-500">
              Questions or special requests? Reply to my invite email and I’ll get back to you quickly.
            </p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
