import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Theme Logic
    const html = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');

    function setTheme(isDark) {
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize Theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Toggle Listener
    toggleBtn.addEventListener('click', () => {
        setTheme(!html.classList.contains('dark'));
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Copy Email
    const copyBtn = document.getElementById('copyEmail');
    copyBtn?.addEventListener('click', async () => {
      const email = 'hello@example.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalContent = copyBtn.innerHTML;
        copyBtn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="18" height="18"></iconify-icon>Copied';
        setTimeout(() => {
          copyBtn.innerHTML = originalContent;
        }, 1500);
      } catch {
        window.location.href = 'mailto:' + email;
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-zinc-950/80 dark:supports-[backdrop-filter]:bg-zinc-950/60 transition-colors duration-500">
<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">

<a className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium tracking-tight text-zinc-900 hover:bg-zinc-100 dark:text-white/90 dark:hover:bg-white/5 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20 transition-colors" href="#">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 bg-zinc-100 text-[13px] font-semibold leading-none tracking-tight dark:border-white/10 dark:bg-white/5 dark:text-white transition-colors">YN</span>
<span className="hidden sm:inline text-zinc-700 dark:text-white/80 transition-colors">Your Name</span>
</a>

<nav className="hidden md:flex items-center gap-1.5">
<a className="rounded-md px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20 transition-colors" href="#work">Work</a>
<a className="rounded-md px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20 transition-colors" href="#about">About</a>
<a className="rounded-md px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-2">

<button aria-label="Toggle dark mode" className="group inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-white/20 transition-colors" id="theme-toggle">
<iconify-icon className="hidden dark:block transition-transform duration-300" height="18" icon="solar:moon-linear" width="18"></iconify-icon>
<iconify-icon className="block dark:hidden transition-transform duration-300" height="18" icon="solar:sun-2-linear" width="18"></iconify-icon>
</button>

<a className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-white/20 transition-colors" href="mailto:hello@example.com">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">Get in touch</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 py-16 sm:py-20 md:py-24 lg:py-28">
<div className="max-w-3xl">
<p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70 transition-colors">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 dark:bg-emerald-400 transition-colors"></span>
</span>
            Available for new projects
          </p>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white transition-colors">
            Designer &amp; Developer crafting clean, minimal web experiences.
          </h1>
<p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-500 dark:text-white/70 transition-colors">
            I help teams ship thoughtful, fast interfaces with an eye for detail. Focused on clarity, performance, and meaningful interactions.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">

<a className="group inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white transition-all" href="#work">
              View work
              <iconify-icon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>

<a className="group inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:border-white/10 dark:bg-white/0 dark:text-white/90 dark:hover:bg-white/5 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20 transition-colors" href="#">
              Resume
              <iconify-icon height="18" icon="solar:download-linear" width="18"></iconify-icon>
</a>
<div className="mx-2 h-6 w-px bg-zinc-200 dark:bg-white/10 transition-colors"></div>
<div className="flex items-center gap-1.5">
<a aria-label="GitHub" className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="ri:github-fill" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="ri:linkedin-fill" width="20"></iconify-icon>
</a>
<a aria-label="Twitter" className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white transition-colors" href="#">
<iconify-icon height="18" icon="ri:twitter-x-fill" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-white/50 transition-colors">
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 dark:border-white/10 dark:bg-white/0 transition-colors">
<iconify-icon height="14" icon="solar:code-linear" width="14"></iconify-icon> React, TypeScript, Next.js
          </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 dark:border-white/10 dark:bg-white/0 transition-colors">
<iconify-icon height="14" icon="solar:palette-linear" width="14"></iconify-icon> UI, Design Systems
          </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 dark:border-white/10 dark:bg-white/0 transition-colors">
<iconify-icon height="14" icon="solar:bolt-linear" width="14"></iconify-icon> Performance
          </span>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10 transition-colors"></div>
</section>

<section className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-transparent transition-colors duration-500" id="work">
<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
<div className="flex items-end justify-between py-8 sm:py-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white transition-colors">Selected work</h2>
<a className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20 rounded-md px-2 py-1 transition-colors" href="#">
          See all
          <iconify-icon className="transition-transform group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-16 sm:pb-20">

<a className="group block rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 dark:border-white/10 dark:bg-white/0 dark:hover:bg-white/[0.03] dark:hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20" href="#">
<div className="p-2">
<div className="relative overflow-hidden rounded-lg border border-zinc-100 bg-zinc-100 dark:border-white/5 dark:bg-zinc-900 transition-colors">
<img alt="Project cover 1" className="h-44 w-full object-cover sm:h-48 md:h-44 lg:h-40 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 transition-colors"></div>
</div>
</div>
<div className="px-4 pb-4 pt-2">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-900 dark:text-white group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">Ecommerce UI Revamp</h3>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 dark:text-white/60 dark:group-hover:text-white transition-colors" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<p className="mt-1 text-sm text-zinc-500 dark:text-white/60 transition-colors">Streamlined shopping flows and design system foundations.</p>
<div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-500 dark:text-white/60 transition-colors">
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 dark:border-white/10 dark:bg-transparent transition-colors">React</span>
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 dark:border-white/10 dark:bg-transparent transition-colors">Design System</span>
</div>
</div>
</a>

<a className="group block rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 dark:border-white/10 dark:bg-white/0 dark:hover:bg-white/[0.03] dark:hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20" href="#">
<div className="p-2">
<div className="relative overflow-hidden rounded-lg border border-zinc-100 bg-zinc-100 dark:border-white/5 dark:bg-zinc-900 transition-colors">
<img alt="Project cover 2" className="h-44 w-full object-cover sm:h-48 md:h-44 lg:h-40 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 transition-colors"></div>
</div>
</div>
<div className="px-4 pb-4 pt-2">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-900 dark:text-white group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">Analytics Dashboard</h3>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 dark:text-white/60 dark:group-hover:text-white transition-colors" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<p className="mt-1 text-sm text-zinc-500 dark:text-white/60 transition-colors">Real-time insights with delightful micro-interactions.</p>
<div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-500 dark:text-white/60 transition-colors">
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 dark:border-white/10 dark:bg-transparent transition-colors">TypeScript</span>
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 dark:border-white/10 dark:bg-transparent transition-colors">D3.js</span>
</div>
</div>
</a>

<a className="group block rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 dark:border-white/10 dark:bg-white/0 dark:hover:bg-white/[0.03] dark:hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/20" href="#">
<div className="p-2">
<div className="relative overflow-hidden rounded-lg border border-zinc-100 bg-zinc-100 dark:border-white/5 dark:bg-zinc-900 transition-colors">
<img alt="Project cover 3" className="h-44 w-full object-cover sm:h-48 md:h-44 lg:h-40 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 transition-colors"></div>
</div>
</div>
<div className="px-4 pb-4 pt-2">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-900 dark:text-white group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">Portfolio Generator</h3>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 dark:text-white/60 dark:group-hover:text-white transition-colors" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<p className="mt-1 text-sm text-zinc-500 dark:text-white/60 transition-colors">Lightweight toolkit to ship personal sites quickly.</p>
<div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-500 dark:text-white/60 transition-colors">
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 dark:border-white/10 dark:bg-transparent transition-colors">Next.js</span>
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 dark:border-white/10 dark:bg-transparent transition-colors">SEO</span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="border-t border-zinc-200 dark:border-white/10 transition-colors duration-500" id="about">
<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 md:grid-cols-3 py-16 sm:py-20">
<div className="md:col-span-1">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white transition-colors">About</h2>
</div>
<div className="md:col-span-2">
<p className="text-base text-zinc-600 leading-relaxed dark:text-white/70 transition-colors">
            I’m a product-minded engineer and designer who enjoys turning complexity into simple, intuitive interfaces. I work closely with teams to define, design, and ship features that feel effortless.
          </p>
<div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-white/60 transition-colors">
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 dark:border-white/10 dark:bg-transparent transition-colors">Design Systems</span>
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 dark:border-white/10 dark:bg-transparent transition-colors">Accessibility</span>
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 dark:border-white/10 dark:bg-transparent transition-colors">Prototyping</span>
<span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 dark:border-white/10 dark:bg-transparent transition-colors">Frontend Architecture</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-transparent transition-colors duration-500" id="contact">
<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 py-16 sm:py-20 md:grid-cols-3">
<div className="md:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white transition-colors">Let’s build something simple and useful.</h2>
<p className="mt-3 text-zinc-500 dark:text-white/70 transition-colors">I’m open to freelance, contract, or full-time opportunities.</p>
</div>
<div className="md:col-span-1">
<div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 dark:border-white/10 dark:bg-white/0 dark:shadow-none transition-colors">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-500 dark:text-white/70 transition-colors">Email</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300 transition-colors">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300 transition-colors"></span>
                Active
              </span>
</div>
<div className="mt-2 truncate text-base font-medium text-zinc-900 dark:text-white transition-colors">hello@example.com</div>
<div className="mt-4 flex gap-2">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-white transition-colors" href="mailto:hello@example.com">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
                Email
              </a>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-white/10 dark:bg-white/0 dark:text-white/90 dark:hover:bg-white/5 dark:focus-visible:ring-white/20 transition-colors" id="copyEmail">
<iconify-icon height="18" icon="solar:copy-linear" width="18"></iconify-icon>
                Copy
              </button>
</div>
</div>
</div>
</div>

<footer className="flex flex-col items-center justify-between gap-4 border-t border-zinc-200 py-8 sm:flex-row dark:border-white/10 transition-colors duration-500">
<div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-white/50 transition-colors">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200 bg-zinc-100 text-[11px] font-semibold tracking-tight dark:border-white/10 dark:bg-white/5 transition-colors">YN</span>
<span>© <span id="year"></span> Your Name</span>
</div>
<div className="flex items-center gap-1.5">
<a className="rounded-md px-2 py-1 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5 transition-colors" href="#work">Work</a>
<a className="rounded-md px-2 py-1 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5 transition-colors" href="#about">About</a>
<a className="rounded-md px-2 py-1 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5 transition-colors" href="#contact">Contact</a>
</div>
</footer>
</div>
</section>


    </>
  );
}
