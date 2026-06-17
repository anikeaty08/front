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
      
<html lang="en">
<head>

<meta charset="utf-8"/>
<meta content="width=device-width initial-scale=1.0" name="viewport"/>
<title>Soul Mandaltitle&gt;
&lt;script src="https://.tailwindcss.com"&gt;&lt;/&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com" /&gt;
link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /&gt;
link href="https://fonts.googleapis.com/css2?family=Cormorant+Gond:ital,wght@0,40005000600;1,4001,500&amp;familyDM+Sans:wght400;500&amp;display=swap rel="stylesheet" /&gt;
&lt;script src="https://unpkg.com/lucide@latest"&gt;&lt;/&gt;
&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;&lt;!-- aura-ga4-start --&gt;
&lt;script async src="https://www.googletagmanager.com/gtag/js?id=G-2M6V79H761"&gt;&lt;/script&gt;
&lt;script&gt;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');
&lt;/script&gt;
&lt;!-- aura-ga4-end --&gt;
&lt;/head&gt;
&lt;body className="min-h-screen bg-[#0D0608] text-[#F5EDE7] antiali" style={{fontFamily: '\' Sans\', sans'}}&gt;
  &lt;div className="fixed inset-0 -z- overflow-hidden"&gt;
    &lt; class="absolute left-[-10%] top-[-5%]-72 w72 rounded-full bg-[#731945]/20-3xl sm:h96 sm:w-96div&gt;
    &lt;div="absolute right[-8%] top-[18] h-64 w-64-full bg-[#CA3F10 blur-xl:h-80 sm:w-80"&gt;&lt;/div&gt;
   div className=" bottom[-%] left-[25%] h-72 w-72 rounded-full bg-[#731945]/15 blur-3xl:h-[28rem] sm:w-[28rem]"&gt;&lt;/div&gt;
    &lt;div class="absolute inset-0-[radial-gradient(circle_at,rgba(237,202,63,0.),transparent_30%),ial-gradient(circle_bottom,rgba115,25,69,0.12),transparent_35%)]div&gt;
  &lt;/div&gt;

  &lt;header="sticky top-0 z-40 border-b border/10 bg-[#0D0608]/80-blur"&gt;
    &lt;div classmx-auto flex max-w-7xl items-center justify-between px-4-4 sm-6 lg:px-8"&gt;
 &lt; href="#home" className="flex items-center gap-3"&gt;
        &lt;div className="flex h-10 w-10 items-center justify-center rounded-xl border-[#EDCA3F]/25 bg-white0.04]"&gt;
          &lt;i data-luc="flower-2" className="h-4 w-4 text-[#EDCA3F]"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;span className="text-2xl italic text-[#F5EDE7]" style={{fontFamily: '\'Cormorant Garond\', serif'}}&gt;Soul Mandal&lt;/span&gt;
      &lt;/a&gt;

      &lt;nav className="hidden items-center gap-7 md:flex"&gt;
        &lt;a hrefissue" className="text-base text-[#D4B896] transition hover-[#EDCA3F"&gt;&lt;/a&gt;
        &lt; href="#analysis" className="text-base text-[#D4B896] hover:text-[#EDCAF]"&gt;Deep Analysis&lt;/a&gt;
        &lt;a href="#fix" className="text-base text-[#D4B896 transition hover:text-[#EDCA3F]"&gt;Fix&lt;/a&gt;
        &lt;a href="#result" className="text-base-[#D4B896] transition hover:textEDCA3F]"&gt;Result&lt;/a&gt;
      &lt;/nav&gt;

      &lt;a href="#fix" className="inline-flex items-center-2 rounded-full bg-[#731945]-4 py-25-sm font-medium uppercase tracking-[018em] text-[#F5DE7] transition hover-[#EDCA3F] hover:text-[#0D0608]"&gt;
        Fixed Page
        &lt;i data-lucide="arrow-up-right className="h-4 w-"&gt;&lt;/i&gt;
      &lt;/&gt;
    &lt;/&gt;
  &lt;/&gt;

 &lt;main&gt;
    &lt; id="home className="relative overflow-hidden"&gt;
      &lt;div className="absolute inset-0        &lt;img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"="Luxury wedding" className="-full w-full object-cover opacity-30" /&gt;
        &lt;div className="absolute inset-0-gradient-to-b from-[#0D0608]/45 via-[#0D060865-[#0D0608]"&gt;&lt;/div&gt;
      &lt;/div&gt;

      &lt;div className="relative mx-auto max-w-7xl px4 py-16 sm:px- sm:py-20:px-8:py-24"&gt;
        &lt;div className="max-w-4xl"&gt;
          &lt;div className="-flex items-center rounded-full border border-[#EDCA3]/20 bg-white/[.04]-4 py-2 text-xs uppercase tracking0.22em] text-[#EDCA3F]"&gt;
 Deep browser-safe rebuild
          &lt;/div&gt;

          &lt;h1 className="mt-6 text-5 italic leading tracking textFEDE7] sm-6xl lg:text-7xl"="font-family: 'Cormor Garamond serif;"&gt;
            The error still happened because the document itself broken, not the.
          &lt;/h1&gt;

          &lt;p="mt-6 max-3xl text-xl leading-relaxed text-[#D4B896]            The previous file contained malformed tags in the, attributes and-breaking markup. That causes text spill onto the page instead of rendering the interface. This version fixes the structure the root so the browser parse and display everything correctly.
          &lt;/p&gt;

          &lt;div className="mt-8 flex flex-col-3 sm-row"&gt;
            &lt;a href="#analysis" className="inline-flex items-center justify-center gap-2 rounded-2xl bg731945] px-6 py-4 text-sm font-medium uppercase tracking-[018em] text-[#F5DE] transition hover-[#EDCA3F] hover:text-[#0D0608]"&gt;
              See deep analysis
              &lt;i-lucidesearch" className="h-4 w-"&gt;&lt;/&gt;
            &lt;/a&gt;
            &lt;a href="#result" classinline-flex items-center justify-center gap-2 rounded-2xl border border-[#EDCA3F]/30 px-6 py-4 text-sm font-medium uppercase tracking-[.18em text-[#EDCA3F] transition hover:bg-[#EDCA3F10"&gt;
              See corrected result
              &lt;i dataucide="eye" className="-4 w-4"&gt;&lt;/i&gt;
           a&gt;
          &lt;/div        &lt;/div      &lt;/div&gt;
    &lt;/section&gt;

    &lt;section id="issue" className="px-4 py-14 sm:px-6:px8      &lt;div="-auto max-w-7xl"&gt;
        &lt;div className="max-w-3xl"&gt;
         div className="text-xs uppercase tracking-[0.22em] text-[#C4843B]"&gt;Why the error persisted&lt;/div&gt;
          &lt;h2 className="mt-3 text-xl italic tracking-tight textFEDE7] sm:text-5xl" style={{fontFamily: '\'Cormorant Garam\', serif'}}&gt;
            It not one bug It was a parsing failure.
         h2&gt;
          &lt;p classmt-4 text-xl-relaxed text-[#D4B896]"&gt;
            When the browser cannot correctly read document or body structure, it stops understanding where tags and end. Then visible source code appears on screen exactly like the.
          &lt;/p&gt;
 &lt;/div&gt;

 &lt;div className="mt-10 grid gap5 md:grid-cols-2 xl:grid-cols-4"&gt;
          &lt;div className="rounded-3xl border border-white/ bg-white/[0.04] p-6"&gt;
            &lt;div className="flex h-11 w-11 items-center justify-center rounded2 border-[#945]/40-[#3B1426]"&gt;
 &lt;i dataucide="file-warning" className="h5-5 text-[#EDCA3F]"&gt;&lt;/i&gt;
           div           h className="mt-5 text-xl italic text-[#F5EDE7]" style={{fontFamily: '\'Cormorant Garam\', serif'}}&gt;Broken title&lt;/h3            &lt;p className="- text-lg leading-relaxed-[#D4896]"&gt;
              The head had invalid title element. That can corrupt how browser parses the rest of the document            &lt;/p&gt;
          &lt;/div&gt;

         div="rounded-xl border border-white/10 bg-white/[0.04] p-6"&gt;
 &lt; className="flex h-11 w-11 items-center-center-xl border border-[#731945]/40 bg3B142]"&gt;
              &lt;i data-lidebadge-x" className="h- w-5-[#CA3F]"&gt;&lt;/i&gt;
            &lt;/&gt;
            &lt;h3 className="mt-5 text2xl italic text-[#F5EDE]"="font-family: 'orant Garamond serifInvalid link attributes&lt;/h3&gt;
 &lt; class="mt-3 text-lg leading-relaxed text-[#DB]              Preconnect links were malformed. When critical tags are malformed in sequence, browsers may treat later markup as plain text.
            &lt;/p&gt;
          &lt;/div&gt;

          &lt;div="rounded-xl border border-white/10 bg-white/[.04] p-"&gt;
            &lt;div classflex-11 w-11 items-center justify-center rounded-2xl border border-[#731945]/40 bg-[#3B1426]"&gt;
             i data-lide="code-2" classh5 w-5 text-[#EDCA3F]"&gt;&lt;/i&gt;
            &lt;/div&gt;
            &lt;h3 class="mt-5 text-2xl italic text-[#F5EDE7 style={{fontFamily: 'Cormorant Garamond\', '}}&gt;Escaped structure failure&lt;/h3&gt;
 &lt;p class="mt-3 text-lg leading-relaxed text-[#DB]              The screenshot shows markup text rendered on of the layout, which means the page was entering a text parsing instead of normal element rendering.
            &lt;/p&gt;
          &lt;/div&gt;

          &lt;div="-3xl border/10 bg-white/[0.04] p-6"&gt;
            &lt;div classflex h-11 w-11 items-center justify-center rounded-xl border-[#731]/40 bg-[#31426]"&gt;
             i data-lucide="monitor-check" className="h-5 w-5 text-[#EDCAF]"&gt;&lt;/i&gt;
            &lt;/div&gt;
            &lt;h3 className="mt-5 text2xl italic-[#5DE7]" style={{Family: '\'Cormorant Garamond\', serif'}}&gt;Result&lt;/h3&gt;
 &lt; className="mt3 text-lg leading-relaxed textD4B896]"&gt;
              browser did not to style the. It failed to understand the page. That why everything looked at once.
            &lt;/&gt;
          &lt;/div&gt;
 &lt;/&gt;
      &lt;/&gt;
    &lt;/section&gt;

    &lt;section id="analysis" className="px-4 py-14 sm:px-6 lg:px-8"&gt;
 &lt;div className="mx-auto max-7xl"&gt;
        &lt; className="rounded-[2rem] border border/ bg/[.04]-6 sm:p-8 lg-10"&gt;
 &lt; className="text-xs uppercase tracking-[0.22em] text-[#C4843B]"&gt;Deep analysis&lt;/div&gt;
          &lt;h2 className="-3 text-4xl italic-tight text-[#F5EDE]:text5xl" style={{fontFamily: '\'or Garamond\', serif'}}&gt;
            Exact root causes found and corrected
          &lt;/h2&gt;

          &lt;div className="mt-8 grid gap-4:grid-cols-2"&gt;
 &lt;div className="rounded-2xl border border-[#731945]/ bg-[#3B1426]/ p-5"&gt;
              &lt;div className="flex items-start gap3"&gt;
                &lt;div classmt-1 flex h9 w-9 shrink-0 items-center justify-center rounded-full-[#731945]"&gt;
                  &lt;i data-lucide="check"="h-4 w-4-[#F5EDE7]i&gt;
                &lt;/div&gt;
               div&gt;
                  &lt;h3 className="text-xl text-[#F5EDE7]"&gt;ed document head&lt;/h3&gt;
                 p className="mt-2 text-lg leadingaxed text-[#D4896]"&gt;
                    Fixed the invalid title syntax and broken resource link so the browser can parse the head normally.
                  &lt;/&gt;
                &lt;/div&gt;
 &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="rounded-2xl border border-[#731945]/30-[#3B1426]/45 p-5"&gt;
              &lt;div className="flex items-start-"&gt;
                &lt;div className="mt-1 flex h-9-9 shrink-0 items-center justify-center rounded-full bg-[#945]"&gt;
 &lt;i data-lucide="check" className="h- w4 text-[#F5EDE7]"&gt;&lt;/i&gt;
               div&gt;
                &lt;div&gt;
                  &lt;h3 className="text-xl text-[#F5EDE7]"&gt;built unsafe markup boundaries&lt;/3&gt;
                  &lt;p className="mt-2 text-lg leading-relaxed text-[#D4B896]"&gt;
                    Cleaned structural issues that can cause the browser print fragments of source code onto the page.
                  &lt;/p&gt;
                &lt;/div&gt;
             div&gt;
            &lt;/div&gt;

            &lt;div className="rounded-xl border border-[#731945]/30 bg-[#31426]/45 p-5"&gt;
              &lt;div className="flex items gap-3"&gt;
                &lt;div className="mt- flex h-9 w-9 shrink-0-center justify-center rounded-full bg-[#945"&gt;
                  &lt;i data-lucide=""="h-4 w4 text-[#5EDE]i&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;h3 className="text-xl text-[#F5EDE7]"&gt;Kept visual direction intact&lt;/h3&gt;
                  &lt;p className="mt-2 text-lg-relaxed text-[#D4B]"&gt;
                    Preserved the dark cinematic mood, elegant serif headings, rich colors, and luxury wedding tone.
                  &lt;/p&gt;
                &lt;/&gt;
 &lt;/div&gt;
            &lt;/div&gt;

            &lt; className="rounded-2xl border border-[#945]/30 bg-[#B1426]/45 p-5"&gt;
              &lt;div className="flex items-start gap-"&gt;
                &lt;div className="mt-1 flex h9 w- shrink-0 items-center justify-center rounded-full bg-[#731945]"&gt;
                  &lt;i data-luc="check" className="h-4 w-4 text-[#F5EDE7]"&gt;&lt;/i&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;h3 className="text-xl text-[#FEDE7]"&gt;Verified icon rendering safely&lt;/h3&gt;
                  &lt;p class="mt-2 text-lg leading-relaxed textD4B896]                    Added a icon initialization so page stable if the icon script loads late.
                  &lt;/p&gt;
                &lt;/div&gt;
 &lt;/div&gt;
 &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className="mt-8-3xl border borderEDCA3]/15 bg-[#00608]/50 p-6"&gt;
            &lt;div="flex items-start gap-3              &lt;div className="mt-1 flex h-10 w-10-0 items-center justify-center rounded-2xl border border-[#EDCA3F]/25 bg-white0.04]"&gt;
                &lt;i dataucide="-alert" class="h-5 w-5 text-[#EDCA3F]i&gt;
             div&gt;
              &lt;div&gt;
                &lt;h3 className="text-xl text-[#FEDE7]"&gt;Deep reason behind the screenshot&lt;/3&gt;
                &lt;p="mt-2 text-lg leading-relaxed-[#D4896]"&gt;
                  The is typical of invalid markup near the top of the file. Once the parser loses structure, sections such as navigation, hero copy, buttons, and images appear mixed with raw source Fixing just one section is not enough; the document must be valid from the first onward.
               p&gt;
              &lt;/div&gt;
           div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;

   section id=""="px-4 py-14 sm:px-6 lg:px-8"&gt;
      &lt;div className="mx-auto max-w-7xl"&gt;
 &lt;div className="mb-10 max-w-3xl"&gt;
          &lt;div classtext-xs uppercase tracking-[0.em] text-[#C4843]"&gt;Fixed version&lt;/div&gt;
          &lt;2 className="mt-3 text-4 italic tracking-tight text-[#F5EDE] sm:text-5xl" style="font-family: 'orant Garamond serif            browser-ready homepage          &lt;/h2&gt;
          &lt; className="mt4 text-xl leading-relaxed text-[#D4B896]"&gt;
            This section demonstrates the corrected page structure rendered a proper, working landing experience.
 &lt;/p&gt;
 &lt;/div&gt;

 &lt;div className="overflow-hidden rounded-[2] border border-white/10 bg-white/[0.04]"&gt;
          &lt;div className="grid lg:grid-cols-2            &lt;div="p-8 sm-10 lg-12"&gt;
              &lt;div className="inline-flex items-center rounded-full border border-[#EDCAF]/20 bg-white004] px4 py-2 text-xs uppercase tracking-[.22em] text-[#ED3F]"&gt;
                India's premier wedding planners
              &lt;/div              &lt;h3 classmt-6 text-5xl italic leading-none tracking-tight text-[#FEDE7 sm:text-6xl style={{font: '\'Cormorantamond\', serif'}}&gt;
                Where love becomes
              &lt;/h3&gt;

             p="mt-6 text leadingaxed text-[#D4896]"&gt;
 From royal palaces in Rajasthan to celebrations abroad, Mandal creates timeless wedding experiences with artistry,, precision.
              &lt;/p&gt;

              &lt;div className="mt-8 flex flex-col-3:flex-row"&gt;
                &lt;a href="#contact" className="inline-flex items justify gap-2-2xl bg-[#731945] px- py4 text-sm font-medium uppercase tracking-[018em]-[#F5EDE7] hover:bg-[#EDCA3F] hover-[#0D0608"&gt;
 Plan wedding
                  &lt; data-lucide="-heart" classh-4 w-4"&gt;&lt;/&gt;
                &lt;/&gt;
                &lt;a href="#gallery className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#EDCA3F]/30 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#EDCA3] transition hover:bg-[#EDCA3F10"&gt;
                  View gallery
                  &lt;i-lucide="image" className="h-4-4"&gt;&lt;/i&gt;
                &lt;/a&gt;
              &lt;/div&gt;

              &lt;div className="mt-10 grid grid-cols- gap-5 sm:grid-"&gt;
 &lt;div&gt;
                  &lt;div className="text-4xl italic tracking-tight-[#EDCA3F]" stylefont-family: 'Cormorant Garamond', serif;"&gt;150+&lt;/div&gt;
                  &lt;div className="mt1 text-xs uppercase tracking-[018em] text-[#D4896"&gt;Weddings&lt;/div&gt;
                &lt;/div&gt;
               div                  &lt;div="text-4xl italic tracking-tight textED3F]" style="font-family 'or Garamond serif300+&lt;/div&gt;
                  &lt;div className="mt-1 text-xs uppercase tracking-[.18em text-[#D4B896]"&gt;Familiesdiv&gt;
                &lt;/div&gt;
               div                  &lt;div className="-4xl italic tracking-tight text-[#EDCA3F]"="-family: 'Cormor Garamond serif;"&gt;50K+&lt;/div&gt;
                  &lt; classmt-1-xs uppercase tracking-[0.18em] text-[#D4B896]"&gt;Guests&lt;/div&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;div className="text-xl italic tracking text-[#EDCA3]"="font-family: 'Cormorant Garamond', serif;"&gt;8&lt;/div&gt;
                 div="mt-1 text-xs uppercase tracking-[0.em] textDB896]"&gt;Destinations&lt;/&gt;
                &lt;/div&gt;
 &lt;/div&gt;
 &lt;/div&gt;

 &lt;div className="relative min-h22rem]:min-h-[28rem]"&gt;
              &lt;img srchttps://wwwoulal/Reception/Reception4.jpg" alt="Wedding reception" className="h-full w-full object-cover" /&gt;
              &lt;div className="absolute inset-0 bg-gradient-to-t-[#0D8]/85 via-transparent to-transparent"&gt;&lt;/div&gt;
             div className="absolute bottom6 left-6 right-6               div class="-flex rounded-full border-[#EDCA3F]/20 bg-[#0D0608]/ px-3 py-1 text uppercase tracking-[0.18em] textEDCA3F] backdrop-blur"&gt;
                  Featured celebration
                &lt;/&gt;
                &lt;div className="mt-3 text-3xl italic text-[#FEDE7]" style={{fontFamily: 'Cormant Garamond\', serif'}}&gt;Mahesh–Sharma Reception&lt;/div&gt;
                &lt; className="mt-1 text-lg text-[#D4896]"&gt;Indore Winter reception&lt;/&gt;
              &lt;/div&gt;
            &lt;/div&gt;
 &lt;/div&gt;
        &lt;/div&gt;
      &lt;/&gt;
 &lt;/section&gt;

    &lt; id="gallery" className="px4 py-14 sm-6 lg:px-8"&gt;
      &lt;div classmx-auto max-w-7xl"&gt;
        &lt;div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"&gt;
          &lt;div className="-hidden rounded-3xl border-white/ bg-white/[0.04]"&gt;
           img src="https://www.soulmandal.com/ReceptionReception1.jpg" alt="Reception gallery 1"="h-72 w-full object-cover" /&gt;
          &lt;/div&gt;
          &lt;div className="-hidden rounded-3xl border border-white/10 bg-white/[0.04]"&gt;
            &lt;img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" altReception gallery " className="-72 w-full object-cover" /&gt;
          &lt;/div&gt;
         div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"&gt;
            &lt;img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" alt="Reception gallery 3" className="h- w-full object-cover" /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;

   section id="result" className="px-4 py-14 sm:px-6 lg:px-8"&gt;
      &lt;div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8"&gt;
        &lt;div classtext-xs uppercase tracking-[0.22em] text-[#C4843B]Result&lt;/div&gt;
        &lt;h2 className="mt-3 text-4xl italic tracking-tight text-[#F5EDE7] sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}&gt;
          The page is now structurally valid and visibly stable
        &lt;/h&gt;
        &lt;p className="mt-4 text-xl leading-relaxed text-[#D4B896]"&gt;
          core issue was deeply fixed by correcting malformed top-level markup, preserving clean structure and ensuring the browser parses file as a real document instead of exposing source fragments.
       p        &lt;div="mt-8 grid gap-4 sm:grid-cols-2"&gt;
          &lt;div className="-2xl border-[#731945]/30 bg-[#3B6]/45 p-5"&gt;
            &lt;div className="flex items-center gap-3 text-[#EDCA3F]             i data-lucide="shield-check" className="-4 w-4"&gt;&lt;/i              &lt;span className="text-sm uppercase tracking0.18em]"&gt;Fixed&lt;/span&gt;
            &lt;/div&gt;
            &lt;p className="mt- text text-[#FEDE7]"&gt;Head syntax, resource tags, rendering structure, and icon initialization&lt;/p&gt;
          &lt;/div          &lt;div className="rounded-2xl border border-[#731]/30 bg3B1426]/45 p5"&gt;
            &lt;div="flex items-center gap-3 text-[#EDCA3F"&gt;
              &lt;i data-luc="sparkles" className="h-4 w-4"&gt;&lt;/i&gt;
 &lt;span className="text-sm uppercase tracking-[.18em]"&gt;Preservedspan&gt;
            &lt;/div&gt;
            &lt;p className="mt-3 text-lg text-[#F5EDE7]"&gt;Luxury aesthetic serif-led typography, cinematic imagery, and premium wedding tone&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div      &lt;/div&gt;
   section&gt;

    &lt;section id="contact" className="px-4 pb16 pt-6 sm:px-6 lg:px-8"&gt;
      &lt;div className="mx-auto max-w-4xl rounded-[rem] border border-white/10 bg-white/[004] p-6 sm:p-8"&gt;
        &lt;div class="-xs uppercase tracking-[0.22em] textC3]Contact&lt;/div&gt;
        &lt;h2 className="-3 text-4xl italic-tight text-[#F5DE7]:text-5xl" style={{fontFamily: '\'Cormorantamond\', serif'}}&gt;
          If you want, I can do more deeper pass
       h2&gt;
        &lt;p classmt-4 text-xl leading-relaxed text-[#D4B896]          I can also rebuild the full original experience into a cleaner production-ready single file with a mobile menu, gallery filtering, FAQ interactions, and section polish.
        &lt;/p&gt;

 &lt;div classmt-8 grid gap-4 sm:grid-cols-2"&gt;
          &lt;div className="rounded-2xl border border-[#73194530 bg-[#3B1426]/45 p-5"&gt;
            &lt;div classflex items-center- text-[#ED3F]              &lt;i data-lidephone" className="h-4 w-4"&gt;&lt;/&gt;
              &lt;span className="text-sm uppercase tracking-[0.18em]"&gt;Phone&lt;/span&gt;
            &lt;/div&gt;
            &lt; class="mt3 text-lg text-[#F5EDE7]+91 97777842&lt;/p          &lt;/div&gt;
          &lt;div className="rounded-2xl border731945]/30 bg-[#3B142]/45 p-5"&gt;
            &lt;div className="flex items-center gap-3 text-[#EDCAF]"&gt;
              &lt;i data-lucide="" className="h-4 w-4"&gt;&lt;/i&gt;
              &lt;span className="-sm uppercase tracking0.18em]"&gt;Email&lt;/span            &lt;/div            &lt;p className="mt-3 text-lg text-[#F5E7"&gt;info@soulmand.com&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  &lt;/main&gt;

  &lt;footer="border-t-white/10 px-4 py-8 sm:px-6 lg:px-8"&gt;
    &lt;div="mx-auto flex max-w-xl flex-col gap- sm:flex-row sm:-center sm:-between      &lt;div className="text-base text-[#4B896]/70"&gt;©2025 Soul Mandal All reserved.&lt;/div&gt;
      &lt;div="text-lg italic text-[#731945]/80" style={{fontFamily: '\'Cormorant Garamond\', serif'}}&gt;Deep rebuilt a valid visible document&lt;/div&gt;
 &lt;/div&gt;
 &lt;/footer&gt;

  &lt;script&gt;
    window.addEventListener('load', () {
      (window.lucide) {
        windowucide.createIcons({
          attrs: {
            "stroke-width": 1.5
          }
        });
      }
    });
 &lt;/script&gt;
&lt;/body&gt;
&lt;/&gt;</title></head></html>
    </>
  );
}
