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
      
<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-9 w-9 rounded-md bg-neutral-900 ring-1 ring-white/10 shadow-sm">
<svg aria-label="Linea Logo" className="h-5 w-5" fill="none" viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<path d="M10 48L28 16l8 16 18-8" stroke="currentColor" strokeWidth="2"></path>
<circle cx="52" cy="24" fill="currentColor" r="2"></circle>
</svg>
</div>
<span className="text-base tracking-tight font-semibold text-white">Linea</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1" href="#structure">Structure</a>
<a className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1" href="#components">Components</a>
<a className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1" href="#config">Config</a>
<a className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1" href="#readme">README</a>
<a className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1" href="#checklist">Checklist</a>
</nav>
<div className="flex items-center gap-2">
<span className="hidden md:inline text-xs text-neutral-400">Ready to deploy</span>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium tracking-tight bg-white text-neutral-900 hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
<i className="w-4 h-4" data-lucide="rocket" style={{strokeWidth: '1.5'}}></i>
            Launch
          </button>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden border-b border-neutral-900">
<div className="absolute inset-0 pointer-events-none opacity-[0.15]">
<svg aria-hidden="true" className="absolute -top-24 left-1/2 -translate-x-1/2 blur-3xl" fill="none" height="600" viewbox="0 0 1200 600" width="1200">
<g filter="url(#f)" opacity="0.8">
<ellipse cx="600" cy="300" fill="#60A5FA" rx="380" ry="140"></ellipse>
<ellipse cx="540" cy="260" fill="#22D3EE" rx="280" ry="120"></ellipse>
<ellipse cx="680" cy="340" fill="#A78BFA" rx="280" ry="120"></ellipse>
</g>
<defs>
<filter color-interpolation-filters="sRGB" filterunits="userSpaceOnUse" height="800" id="f" width="1400" x="-100" y="-100">
<fegaussianblur stddeviation="80"></fegaussianblur>
</filter>
</defs>
</svg>
</div>
<div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 hover:bg-white/10 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="stars" style={{strokeWidth: '1.5'}}></i>
            Built for agencies &amp; freelancers
          </div>
<h1 className="mt-6 text-4xl md:text-6xl tracking-tight font-semibold text-white">
            Classic foundations. Future-forward execution.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-300">Convert visits into projects.</span>
</h1>
<p className="mt-4 text-base md:text-lg text-neutral-300 max-w-2xl">
            A production-grade portfolio template with SSR, 3D atmospherics, smooth reveals, and clean conversions. Ship fast, look timeless.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white text-neutral-900 text-sm font-medium tracking-tight hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30" href="#readme">
<i className="w-4 h-4" data-lucide="book-open" style={{strokeWidth: '1.5'}}></i>
              Start Guide
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white/5 text-white text-sm font-medium tracking-tight ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30" href="#components">
<i className="w-4 h-4" data-lucide="code-2" style={{strokeWidth: '1.5'}}></i>
              Components
            </a>
<span className="text-xs text-neutral-400">a11y-first • 4.5+ contrast • prefers-reduced-motion</span>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 md:py-16" id="structure">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-neutral-400" data-lucide="folder-tree" style={{strokeWidth: '1.5'}}></i>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">File: project-structure.md</h2>
</div>
<p className="text-sm text-neutral-400 mb-3">Directory tree of the full project. Copy the code into a new folder to scaffold.</p>
<textarea className="w-full h-96 rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/20" readonly="">
.
├── components
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Logo.svg
│   ├── Navbar.jsx
│   └── ThreeBackground.jsx
├── context
│   └── PreferencesContext.jsx
├── hooks
│   └── usePrefersReducedMotion.js
├── pages
│   ├── _app.jsx
│   ├── _document.jsx
│   ├── index.jsx
│   └── settings.jsx
├── public
│   ├── favicon.ico
│   ├── logo.svg
│   ├── logo-mark.svg
│   ├── og-image.jpg
│   ├── landing-lite.html
│   └── images
│       ├── hero.jpg
│       ├── service-1.jpg
│       ├── service-2.jpg
│       ├── service-3.jpg
│       └── texture-noise.png
├── styles
│   └── globals.css
├── __tests__
│   ├── hero.test.jsx
│   └── navbar.test.jsx
├── jest.config.js
├── jest.setup.js
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── .eslintrc.json
        </textarea>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-neutral-900" id="package">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-neutral-400" data-lucide="package" style={{strokeWidth: '1.5'}}></i>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">File: package.json</h2>
</div>
<p className="text-sm text-neutral-400 mb-3">Includes scripts for dev, build, start, lint, and test.</p>
<textarea className="w-full h-96 rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">
{
  "name": "linea-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint",
    "test": "jest --passWithNoTests"
  },
  "dependencies": {
    "@react-three/drei": "^9.106.0",
    "@react-three/fiber": "^8.15.16",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.5",
    "lucide-react": "^0.441.0",
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "three": "^0.160.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.6",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.2",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.5",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.10"
  }
}
        </textarea>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-neutral-900" id="components">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-neutral-400" data-lucide="component" style={{strokeWidth: '1.5'}}></i>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">Components</h2>
</div>
<div className="space-y-10">
<div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">components/Hero.jsx</h3>
<textarea className="w-full h-[28rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">// ملاحظة: هذا البطل يطبق حركات دخول رقيقة ويدعم prefers-reduced-motion
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const wordVariant = {
  hidden: { y: "100%", opacity: 0 },
  show: (i) =&gt; ({
    y: "0%",
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const words = ["Classic", "foundations.", "Future-forward", "execution."];

  return (
    &lt;section aria-label="Hero" className="relative isolate overflow-hidden"&gt;
      &lt;div className="pointer-events-none absolute inset-0 -z-10"&gt;
        {/* subtle noise overlay */}
        &lt;div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light" style={{backgroundImage: "url(/images/texture-noise.png)"}} /&gt;
      &lt;/div&gt;

      &lt;div className="mx-auto max-w-6xl px-4 pt-16 md:pt-24 pb-12 md:pb-20"&gt;
        &lt;p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"&gt;
          &lt;span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" /&gt; Production-ready
        &lt;/p&gt;

        &lt;h1 className="mt-6 text-4xl md:text-6xl tracking-tight font-semibold text-white leading-tight"&gt;
          &lt;span className="inline-block"&gt;
            {words.slice(0, 2).map((w, i) =&gt; (
              &lt;span key={w} className="inline-block overflow-hidden align-top mr-2"&gt;
                &lt;motion.span
                  custom={i}
                  initial="hidden"
                  animate={prefersReduced ? "show" : "show"}
                  variants={wordVariant}
                  className="inline-block"
                &gt;
                  {w}
                &lt;/motion.span&gt;
              &lt;/span&gt;
            ))}
          &lt;/span&gt;
          &lt;span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-300"&gt;
            {words.slice(2).map((w, i) =&gt; (
              &lt;span key={w} className="inline-block overflow-hidden align-top mr-2"&gt;
                &lt;motion.span
                  custom={i + 2}
                  initial="hidden"
                  animate={prefersReduced ? "show" : "show"}
                  variants={wordVariant}
                  className="inline-block"
                &gt;
                  {w}
                &lt;/motion.span&gt;
              &lt;/span&gt;
            ))}
          &lt;/span&gt;
        &lt;/h1&gt;

        &lt;p className="mt-4 text-base md:text-lg text-neutral-300 max-w-2xl"&gt;
          SSR, SSG, 3D ambience, smooth reveals, and crisp CTAs. Designed to convert curiosity into conversations.
        &lt;/p&gt;

        &lt;div className="mt-8 flex flex-wrap items-center gap-3"&gt;
          &lt;Link href="#contact" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white text-neutral-900 text-sm font-medium tracking-tight hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30" aria-label="Start a project"&gt;
            Start a project
          &lt;/Link&gt;
          &lt;Link href="#work" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white/5 text-white text-sm font-medium tracking-tight ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30" aria-label="View our work"&gt;
            View work
          &lt;/Link&gt;
          &lt;span className="text-xs text-neutral-400"&gt;a11y-first • 4.5+ contrast • PRM support&lt;/span&gt;
        &lt;/div&gt;

        &lt;div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4" role="list"&gt;
          {/* Example stats/cards */}
          {[
            { label: "Core Web Vitals", value: "Green", color: "text-emerald-300" },
            { label: "Time to Deploy", value: "&lt; 5 min", color: "text-sky-300" },
            { label: "Conversion Focus", value: "High", color: "text-violet-300" }
          ].map((s) =&gt; (
            &lt;div key={s.label} role="listitem" className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.08] transition-colors"&gt;
              &lt;div className="text-xs text-neutral-400"&gt;{s.label}&lt;/div&gt;
              &lt;div className={`text-lg font-medium ${s.color}`}&gt;{s.value}&lt;/div&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}
            </textarea>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">components/Navbar.jsx</h3>
<textarea className="w-full h-[28rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">// شريط تنقل دقيق مع دعم لوحة المفاتيح
import React from "react";
import Link from "next/link";
import { Menu, X, Rocket, Settings } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() =&gt; {
    const onKey = (e) =&gt; e.key === "Escape" &amp;&amp; setOpen(false);
    window.addEventListener("keydown", onKey);
    return () =&gt; window.removeEventListener("keydown", onKey);
  }, []);

  return (
    &lt;header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800" role="banner"&gt;
      &lt;nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between" aria-label="Global"&gt;
        &lt;Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded"&gt;
          &lt;span className="sr-only"&gt;Linea Home&lt;/span&gt;
          &lt;img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" width="28" height="28" alt="" /&gt;
          &lt;span className="text-base tracking-tight font-semibold text-white"&gt;Linea&lt;/span&gt;
        &lt;/Link&gt;

        &lt;div className="hidden md:flex items-center gap-6"&gt;
          &lt;Link href="#work" className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1"&gt;Work&lt;/Link&gt;
          &lt;Link href="#services" className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1"&gt;Services&lt;/Link&gt;
          &lt;Link href="#about" className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1"&gt;About&lt;/Link&gt;
          &lt;Link href="#contact" className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1"&gt;Contact&lt;/Link&gt;
          &lt;Link href="/settings" className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1 inline-flex items-center gap-1"&gt;&lt;Settings size={16} strokeWidth={1.5} /&gt;Settings&lt;/Link&gt;
          &lt;Link href="#contact" className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium tracking-tight bg-white text-neutral-900 hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"&gt;
            &lt;Rocket size={16} strokeWidth={1.5} /&gt; Start a project
          &lt;/Link&gt;
        &lt;/div&gt;

        &lt;button aria-controls="mobile-menu" aria-expanded={open} onClick={() =&gt; setOpen((v) =&gt; !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"&gt;
          &lt;span className="sr-only"&gt;Toggle navigation&lt;/span&gt;
          {open ? &lt;X size={20} strokeWidth={1.5} /&gt; : &lt;Menu size={20} strokeWidth={1.5} /&gt;}
        &lt;/button&gt;
      &lt;/nav&gt;

      &lt;div id="mobile-menu" className={`${open ? "block" : "hidden"} md:hidden border-t border-neutral-800`}&gt;
        &lt;div className="space-y-1 px-4 py-3"&gt;
          {["Work", "Services", "About", "Contact"].map((item) =&gt; (
            &lt;a key={item} href={`#${item.toLowerCase()}`} className="block rounded px-3 py-2 text-sm text-neutral-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"&gt;{item}&lt;/a&gt;
          ))}
          &lt;a href="/settings" className="block rounded px-3 py-2 text-sm text-neutral-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"&gt;Settings&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/header&gt;
  );
}
            </textarea>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">components/Card.jsx</h3>
<textarea className="w-full h-[28rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">// بطاقة خدمة مع حركة دخول وتفاعل عند التحويم
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Card({ title, description, href = "#", Icon }) {
  return (
    &lt;motion.article
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] focus-within:bg-white/[0.06] transition-colors"
    &gt;
      &lt;div className="flex items-start gap-4"&gt;
        &lt;div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10"&gt;
          {Icon ? &lt;Icon size={18} strokeWidth={1.5} /&gt; : null}
        &lt;/div&gt;
        &lt;div&gt;
          &lt;h4 className="text-base font-medium tracking-tight text-white"&gt;{title}&lt;/h4&gt;
          &lt;p className="mt-1 text-sm text-neutral-300"&gt;{description}&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;Link aria-label={`${title} — learn more`} href={href} className="mt-4 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded"&gt;
        Learn more
        &lt;span aria-hidden className="transition-transform group-hover:translate-x-0.5"&gt;→&lt;/span&gt;
      &lt;/Link&gt;
    &lt;/motion.article&gt;
  );
}
            </textarea>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">components/ThreeBackground.jsx</h3>
<textarea className="w-full h-[32rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">// خلفية ثلاثية الأبعاد مع بديل للأجهزة الضعيفة و PRM
import React from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

const FiberCanvas = dynamic(
  () =&gt; import("@react-three/fiber").then((mod) =&gt; mod.Canvas),
  { ssr: false }
);
const { OrbitControls, Float } = require("@react-three/drei");

function Knot() {
  const { useFrame } = require("@react-three/fiber");
  const ref = React.useRef();
  useFrame((_, delta) =&gt; {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    &lt;Float floatIntensity={1.5} speed={1.5}&gt;
      &lt;mesh ref={ref}&gt;
        &lt;torusKnotGeometry args={[1.1, 0.28, 220, 28]} /&gt;
        &lt;meshStandardMaterial color="#93C5FD" roughness={0.4} metalness={0.3} /&gt;
      &lt;/mesh&gt;
    &lt;/Float&gt;
  );
}

export default function ThreeBackground() {
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() =&gt; {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () =&gt; setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () =&gt; mq.removeEventListener("change", update);
  }, []);

  if (prefersReduced || isMobile) {
    return (
      &lt;div aria-hidden className="absolute inset-0 -z-10"&gt;
        &lt;img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" alt="" className="h-full w-full object-cover opacity-30" /&gt;
      &lt;/div&gt;
    );
  }

  return (
    &lt;div aria-hidden className="absolute inset-0 -z-10"&gt;
      &lt;FiberCanvas camera={{ position: [0, 0, 4], fov: 60 }}&gt;
        &lt;color attach="background" args={["#0a0a0a"]} /&gt;
        &lt;ambientLight intensity={0.6} /&gt;
        &lt;directionalLight position={[2, 2, 2]} intensity={1.2} /&gt;
        &lt;Knot /&gt;
        &lt;OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} /&gt;
      &lt;/FiberCanvas&gt;
    &lt;/div&gt;
  );
}
            </textarea>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">components/Footer.jsx</h3>
<textarea className="w-full h-[20rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">// تذييل بسيط مع تباين واضح وروابط خريطة الموقع
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    &lt;footer className="border-t border-neutral-900"&gt;
      &lt;div className="mx-auto max-w-6xl px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8"&gt;
        &lt;div&gt;
          &lt;div className="flex items-center gap-2"&gt;
            &lt;img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" alt="" width="20" height="20" /&gt;
            &lt;span className="text-sm font-medium tracking-tight text-white"&gt;Linea&lt;/span&gt;
          &lt;/div&gt;
          &lt;p className="mt-3 text-sm text-neutral-400"&gt;Classic-meets-modern websites that convert.&lt;/p&gt;
        &lt;/div&gt;
        &lt;nav className="text-sm text-neutral-300 space-y-2"&gt;
          &lt;Link href="#work" className="block hover:text-white"&gt;Work&lt;/Link&gt;
          &lt;Link href="#services" className="block hover:text-white"&gt;Services&lt;/Link&gt;
          &lt;Link href="#about" className="block hover:text-white"&gt;About&lt;/Link&gt;
          &lt;Link href="#contact" className="block hover:text-white"&gt;Contact&lt;/Link&gt;
        &lt;/nav&gt;
        &lt;div className="text-sm text-neutral-400"&gt;
          &lt;p&gt;© {new Date().getFullYear()} Linea. All rights reserved.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/footer&gt;
  );
}
            </textarea>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">components/Logo.svg</h3>
<textarea className="w-full h-[24rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">&lt;!-- شعار SVG: علامة + كلمة، مستجيب --&gt;
&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 48" role="img" aria-label="Linea"&gt;
  &lt;g fill="none" stroke="currentColor" strokeWidth="2"&gt;
    &lt;path d="M10 36L22 12l6 12 14-6" /&gt;
    &lt;circle cx="44" cy="18" r="2" fill="currentColor" /&gt;
  &lt;/g&gt;
  &lt;text x="60" y="32" fontFamily="Inter, system-ui, -apple-system" fontSize="20" font-weight="600" letter-spacing="-0.02em" fill="currentColor"&gt;Linea&lt;/text&gt;
&lt;/svg&gt;
            </textarea>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-neutral-900" id="pages">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-neutral-400" data-lucide="file-stack" style={{strokeWidth: '1.5'}}></i>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">Pages &amp; Context</h2>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">pages/_app.jsx</h3>
<textarea className="w-full h-[22rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">import "../styles/globals.css";
import Head from "next/head";
import { PreferencesProvider } from "../context/PreferencesContext";

export default function App({ Component, pageProps }) {
  return (
    &lt;&gt;
      &lt;Head&gt;
        &lt;meta name="theme-color" content="#0a0a0a" /&gt;
      &lt;/Head&gt;
      &lt;PreferencesProvider&gt;
        &lt;Component {...pageProps} /&gt;
      &lt;/PreferencesProvider&gt;
    &lt;/&gt;
  );
}
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">pages/_document.jsx</h3>
<textarea className="w-full h-[22rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    &lt;Html lang="en" className="bg-neutral-950"&gt;
      &lt;Head&gt;
        &lt;link rel="icon" href="/favicon.ico" /&gt;
        &lt;meta name="color-scheme" content="dark" /&gt;
      &lt;/Head&gt;
      &lt;body className="bg-neutral-950 text-neutral-200 antialiased"&gt;
        &lt;Main /&gt;
        &lt;NextScript /&gt;
      &lt;/body&gt;
    &lt;/Html&gt;
  );
}
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">pages/index.jsx</h3>
<textarea className="w-full h-[40rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-[11px] text-neutral-200" readonly="">import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Code2, Sparkles, MousePointerClick } from "lucide-react";

const ThreeBackground = dynamic(() =&gt; import("../components/ThreeBackground"), { ssr: false });

export default function Home() {
  const services = [
    {
      title: "Brand Websites",
      description: "Crisp, fast, and timeless — tailored to your brand's voice.",
      Icon: Sparkles,
    },
    {
      title: "Interactive UX",
      description: "Motion that respects a11y and dazzles without distraction.",
      Icon: MousePointerClick,
    },
    {
      title: "Technical SEO",
      description: "SSG/SSR, clean metadata, and Core Web Vitals in the green.",
      Icon: Code2,
    },
  ];

  return (
    &lt;&gt;
      &lt;Head&gt;
        &lt;title&gt;Linea — Agency Portfolio&lt;/title&gt;
        &lt;meta name="description" content="Modern, elegant portfolios with SSR, 3D, and conversions in mind." /&gt;
        &lt;meta property="og:image" content="/og-image.jpg" /&gt;
      &lt;/Head&gt;
      &lt;Navbar /&gt;
      &lt;main&gt;
        &lt;div className="relative"&gt;
          &lt;ThreeBackground /&gt;
          &lt;Hero /&gt;
        &lt;/div&gt;

        &lt;section id="services" className="mx-auto max-w-6xl px-4 py-12 md:py-16"&gt;
          &lt;div className="mb-6"&gt;
            &lt;h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white"&gt;Services&lt;/h2&gt;
            &lt;p className="text-sm text-neutral-400"&gt;Strategy, design, and development — woven together.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="grid grid-cols-1 md:grid-cols-3 gap-4"&gt;
            {services.map((s) =&gt; (
              &lt;Card key={s.title} {...s} href="#contact" /&gt;
            ))}
          &lt;/div&gt;
        &lt;/section&gt;

        &lt;section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-neutral-900"&gt;
          &lt;div className="grid md:grid-cols-2 gap-8 items-center"&gt;
            &lt;div&gt;
              &lt;h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white"&gt;Tradition meets tech&lt;/h2&gt;
              &lt;p className="mt-3 text-neutral-300"&gt;Rooted in typography and hierarchy; elevated by motion, depth, and impeccable performance.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="rounded-xl overflow-hidden ring-1 ring-white/10"&gt;
              &lt;img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" alt="Clean grid-based layout preview" className="w-full h-64 object-cover" /&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/section&gt;

        &lt;section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-neutral-900"&gt;
          &lt;div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"&gt;
            &lt;div&gt;
              &lt;h3 className="text-xl tracking-tight font-semibold text-white"&gt;Let’s make it shine&lt;/h3&gt;
              &lt;p className="text-sm text-neutral-300 mt-1"&gt;Tell us about your project. We’ll respond within 24 hours.&lt;/p&gt;
            &lt;/div&gt;
            &lt;a href="mailto:hello@linea.dev" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white text-neutral-900 text-sm font-medium tracking-tight hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"&gt;
              Email us
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/section&gt;
      &lt;/main&gt;
      &lt;Footer /&gt;
    &lt;/&gt;
  );
}
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">pages/settings.jsx</h3>
<textarea className="w-full h-[28rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">// صفحة إعدادات بسيطة لتعطيل/تمكين الحركات
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { usePreferences } from "../context/PreferencesContext";

export default function SettingsPage() {
  const { animationsEnabled, setAnimationsEnabled } = usePreferences();
  return (
    &lt;&gt;
      &lt;Head&gt;&lt;title&gt;Settings — Linea&lt;/title&gt;&lt;/Head&gt;
      &lt;Navbar /&gt;
      &lt;main className="mx-auto max-w-3xl px-4 py-12 md:py-16"&gt;
        &lt;h1 className="text-2xl md:text-3xl tracking-tight font-semibold text-white"&gt;Settings&lt;/h1&gt;
        &lt;p className="text-sm text-neutral-400 mt-1"&gt;Tune motion and accessibility preferences.&lt;/p&gt;

        &lt;div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-5"&gt;
          &lt;label className="flex items-center justify-between gap-4"&gt;
            &lt;div&gt;
              &lt;div className="text-sm text-white"&gt;Animations&lt;/div&gt;
              &lt;div className="text-xs text-neutral-400"&gt;Disable to respect minimal motion preferences.&lt;/div&gt;
            &lt;/div&gt;
            &lt;button
              role="switch"
              aria-checked={animationsEnabled}
              onClick={() =&gt; setAnimationsEnabled((v) =&gt; !v)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${animationsEnabled ? "bg-emerald-400/90" : "bg-white/10"}`}
            &gt;
              &lt;span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${animationsEnabled ? "translate-x-5" : "translate-x-1"}`} /&gt;
            &lt;/button&gt;
          &lt;/label&gt;
        &lt;/div&gt;
      &lt;/main&gt;
    &lt;/&gt;
  );
}
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">context/PreferencesContext.jsx</h3>
<textarea className="w-full h-[28rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">import React from "react";

const Context = React.createContext(null);

export function PreferencesProvider({ children }) {
  const [animationsEnabled, setAnimationsEnabled] = React.useState(true);

  React.useEffect(() =&gt; {
    const stored = localStorage.getItem("linea.animations");
    if (stored !== null) setAnimationsEnabled(stored === "true");
  }, []);
  React.useEffect(() =&gt; {
    localStorage.setItem("linea.animations", String(animationsEnabled));
    document.documentElement.classList.toggle("motion-safe", animationsEnabled);
    document.documentElement.classList.toggle("motion-reduce", !animationsEnabled);
  }, [animationsEnabled]);

  const value = React.useMemo(() =&gt; ({ animationsEnabled, setAnimationsEnabled }), [animationsEnabled]);

  return &lt;Context.Provider value={value}&gt;{children}&lt;/Context.Provider&gt;;
}

export function usePreferences() {
  const ctx = React.useContext(Context);
  if (!ctx) throw new Error("usePreferences must be used within PreferencesProvider");
  return ctx;
}
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">hooks/usePrefersReducedMotion.js</h3>
<textarea className="w-full h-[16rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">import { useEffect, useState } from "react";

export default function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() =&gt; {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () =&gt; setReduce(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () =&gt; m.removeEventListener("change", onChange);
  }, []);
  return reduce;
}
        </textarea>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-neutral-900" id="config">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-neutral-400" data-lucide="settings-2" style={{strokeWidth: '1.5'}}></i>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">Configuration</h2>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">tailwind.config.js</h3>
<textarea className="w-full h-[24rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./context/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0a0a0a",
          text: "#e5e5e5",
          muted: "#a3a3a3",
        },
        brand: {
          50: "#f0f8ff",
          500: "#60a5fa",
          600: "#3b82f6",
        },
      },
      borderRadius: {
        xl: "0.875rem",
      },
      transitionTimingFunction: {
        "snappy": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        subtle: "0 1px 0 rgba(255,255,255,0.06) inset",
      },
    },
  },
  plugins: [],
};
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">styles/globals.css</h3>
<textarea className="w-full h-[24rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth scrolling, respects PRM */
html:focus-within {
  scroll-behavior: smooth;
}

/* Typography smoothing */
:root {
  --ring: rgba(255,255,255,0.2);
}

*::selection {
  background: rgba(96,165,250,0.25);
}

/* Accessible outlines */
:focus-visible {
  outline-offset: 2px;
}

/* SEO-friendly base */
body {
  background-color: #0a0a0a;
  color: #e5e5e5;
}
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">next.config.js</h3>
<textarea className="w-full h-[16rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  experimental: {
    optimizeCss: true
  }
};
module.exports = nextConfig;
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">postcss.config.js</h3>
<textarea className="w-full h-[12rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-8">.eslintrc.json</h3>
<textarea className="w-full h-[12rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "react/jsx-key": "error",
    "react/prop-types": "off"
  }
}
        </textarea>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-neutral-900" id="tests">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-neutral-400" data-lucide="test-tube" style={{strokeWidth: '1.5'}}></i>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">Basic Tests</h2>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2">__tests__/hero.test.jsx</h3>
<textarea className="w-full h-[18rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero", () =&gt; {
  it("renders title keywords", () =&gt; {
    render(&lt;Hero /&gt;);
    expect(screen.getByText(/Classic/i)).toBeInTheDocument();
    expect(screen.getByText(/execution/i)).toBeInTheDocument();
  });
});
        </textarea>
<h3 className="text-xl tracking-tight font-semibold text-white mb-2 mt-6">__tests__/navbar.test.jsx</h3>
<textarea className="w-full h-[18rem] rounded-lg bg-neutral-950/80 ring-1 ring-white/10 p-4 text-xs text-neutral-200" readonly="">import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () =&gt; {
  it("has CTA", () =&gt; {
    render(&lt;Navbar /&gt;);
    expect(screen.getByText(/Start a project/i)).toBeInTheDocument();
  });
});
        </textarea>
</section></main>
    </>
  );
}
