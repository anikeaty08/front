import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const cursorGlow = document.getElementById('cursorGlow');
    window.addEventListener('mousemove', (e) => {
      if (window.innerWidth >= 768) {
        cursorGlow.style.transform = `translate(${e.clientX - 80}px, ${e.clientY - 80}px)`;
      }
    });

    const heroCard = document.getElementById('heroCard');
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 16;
      const rotateX = ((y / rect.height) - 0.5) * -14;
      heroCard.style.transform = `translateY(-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'translateY(-50%) rotateX(0deg) rotateY(0deg)';
    });

    const particleContainer = document.getElementById('particles');
    for (let i = 0; i < 34; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 0.6 + 0.2;
      const colors = ['bg-emerald-300/40', 'bg-cyan-300/40', 'bg-amber-300/40', 'bg-white/20'];
      p.className = `absolute rounded-full ${colors[Math.floor(Math.random() * colors.length)]}`;
      p.style.width = `${size}rem`;
      p.style.height = `${size}rem`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.filter = 'blur(1px)';
      p.style.animation = `float${i} ${8 + Math.random() * 10}s linear infinite`;
      particleContainer.appendChild(p);

      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes float${i} {
          0% { transform: translate3d(0, 0, 0); opacity: 0.2; }
          25% { opacity: 0.8; }
          50% { transform: translate3d(${(Math.random() * 8) - 4}rem, ${(Math.random() * 8) - 4}rem, 0); opacity: 0.5; }
          100% { transform: translate3d(${(Math.random() * 12) - 6}rem, ${(Math.random() * 12) - 6}rem, 0); opacity: 0.2; }
        }
      `;
      document.head.appendChild(style);
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('emailInput');
    const nameInput = document.getElementById('nameInput');
    const passwordInput = document.getElementById('passwordInput');
    const signupMessage = document.getElementById('signupMessage');
    const adsSection = document.getElementById('adsSection');
    const savedEmailBadge = document.getElementById('savedEmailBadge');

    function showAdsForUser(email) {
      adsSection.classList.remove('hidden');
      savedEmailBadge.textContent = `Signed in: ${email}`;
    }

    const savedUserEmail = localStorage.getItem('aimhub_user_email');
    if (savedUserEmail) {
      showAdsForUser(savedUserEmail);
      signupMessage.textContent = 'Welcome back. Ads are active for this user.';
    }

    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const name = nameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !email.includes('@')) {
        signupMessage.textContent = 'Please enter a valid email address.';
        signupMessage.className = 'text-center text-xs text-amber-300';
        return;
      }

      localStorage.setItem('aimhub_user_email', email

You have reached your daily limit of 3 prompts and have no credits available. Purchase credits to continue or upgrade to Pro (120 prompts/month).
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center blur-sm" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f91a74b-10d9-4f76-9926-c7e79a21ac30_3840w.jpg?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(234,179,8,0.10),transparent_28%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(3,7,18,1))]"></div>
<div className="absolute left-[-10%] top-[10%] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"></div>
<div className="absolute right-[-8%] top-[16%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="absolute left-[30%] bottom-[5%] h-80 w-80 rounded-full bg-amber-300/10 blur-3xl"></div>
<div className="absolute inset-0" id="particles"></div>
</div>
<div className="pointer-events-none fixed left-0 top-0 z-50 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl md:block" id="cursorGlow"></div>
<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="text-lg font-semibold tracking-tight text-white font-geist" href="#">AIMHUB</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm text-slate-300 transition hover:text-white font-geist" href="#tools">Tools</a>
<a className="text-sm text-slate-300 transition hover:text-white font-geist" href="#earn">Methods</a>
<a className="text-sm text-slate-300 transition hover:text-white font-geist" href="#rewards">Rewards</a>
<a className="text-sm text-slate-300 transition hover:text-white font-geist" href="#premium">Pro</a>
</nav>
<a className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 shadow-[0_0_2rem_rgba(16,185,129,0.18)] transition hover:scale-[1.02] hover:bg-emerald-400/15 font-geist" href="#signup">Sign Up Free</a>
</div>
</header>
<main className="">
<section className="grid min-h-[90vh] sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative gap-x-12 gap-y-12 items-center">
<div className="z-10 relative">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 backdrop-blur font-geist">
<span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_1rem_rgba(16,185,129,0.8)]"></span>
          New earning tools updated daily
        </div>
<h1 className="leading-tight sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight font-geist max-w-xl">
  Start Earning Money Online with AI 🚀
</h1>
<p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg font-geist">
          Free tools, simple methods, and daily earning opportunities
        </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-2 transition hover:scale-[1.03] text-sm font-medium text-slate-950 font-geist bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_2rem_rgba(16,185,129,0.35)]" href="#signup">
            Sign Up Free
            <iconify-icon className="" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5', color: 'rgb(2, 6, 23)'}} width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center transition hover:border-cyan-400/40 hover:bg-white/10 text-sm text-white font-geist bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#tools">
            Explore Tools
          </a>
</div>
<div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="text-xl tracking-tight text-emerald-300 font-geist font-semibold">50+</div>
<div className="mt-1 text-xs text-slate-400 font-geist">AI resources</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="text-xl tracking-tight text-cyan-300 font-geist font-semibold">Daily</div>
<div className="mt-1 text-xs text-slate-400 font-geist">earning ideas</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="text-xl tracking-tight text-amber-300 font-geist font-semibold">Free</div>
<div className="mt-1 text-xs text-slate-400 font-geist">to begin</div>
</div>
</div>
</div>
<div className="relative h-[30rem] sm:h-[36rem] [perspective:1200px]">
<div className="absolute left-[12%] top-[10%] h-24 w-24 animate-bounce rounded-full border border-amber-300/30 bg-amber-300/10 shadow-[0_0_2rem_rgba(252,211,77,0.25)] backdrop-blur duration-[3000ms]" style={{transform: 'translateZ(60px)'}}>
<div className="flex h-full items-center justify-center text-amber-300">
<iconify-icon height="34" icon="solar:money-bag-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
</div>
</div>
<div className="absolute right-[8%] top-[18%] h-20 w-20 animate-pulse rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_2rem_rgba(34,211,238,0.25)] backdrop-blur" style={{transform: 'translateZ(90px)'}}>
<div className="flex h-full items-center justify-center text-cyan-300">
<iconify-icon height="30" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="30"></iconify-icon>
</div>
</div>
<div className="absolute bottom-[12%] left-[8%] h-16 w-16 animate-bounce rounded-full border border-emerald-300/30 bg-emerald-300/10 shadow-[0_0_2rem_rgba(16,185,129,0.25)] backdrop-blur duration-[2400ms]" style={{transform: 'translateZ(50px)'}}>
<div className="flex h-full items-center justify-center text-emerald-300">
<iconify-icon height="24" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
<div className="absolute inset-x-0 top-1/2 mx-auto w-full max-w-xl -translate-y-1/2 transition duration-300 [transform-style:preserve-3d]" id="heroCard">
<div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_3rem_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-6" style={{transform: 'rotateX(10deg) rotateY(-14deg) translateZ(40px)'}}>
<div className="-right-8 -top-8 bg-emerald-400/10 w-28 h-28 rounded-full absolute blur-2xl"></div>
<div className="absolute -bottom-8 left-12 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div>
<div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-geist">AI Income Dashboard</div>
<div className="mt-2 text-2xl tracking-tight text-white sm:text-3xl font-geist font-semibold">₹12,480</div>
<div className="mt-1 text-xs text-emerald-300 font-geist">+18.4% this week</div>
</div>
<div className="text-xs text-amber-200 font-geist bg-amber-300/10 border-amber-300/30 border rounded-2xl pt-2 pr-3 pb-2 pl-3">
                Live earnings
              </div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
<div className="flex items-center gap-2 text-slate-300">
<iconify-icon height="18" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-geist">Top AI Tool</span>
</div>
<div className="mt-3 text-sm font-medium text-white font-geist">Content Generator Suite</div>
<div className="mt-1 text-xs text-slate-400 font-geist">Create posts, offers, and product pages fast.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
<div className="flex items-center gap-2 text-slate-300">
<iconify-icon height="18" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-geist">Best Method</span>
</div>
<div className="mt-3 text-sm font-medium text-white font-geist">Affiliate + AI Funnels</div>
<div className="mt-1 text-xs text-slate-400 font-geist">Promote digital products using automated pages.</div>
</div>
</div>
<div className="mt-5 rounded-2xl border border-emerald-400/20 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-amber-300/10 p-4">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-medium text-white font-geist">Starter reward unlocked</div>
<div className="mt-1 text-xs text-slate-300 font-geist">Sign up to access the first earning toolkit instantly.</div>
</div>
<div className="shrink-0 rounded-full bg-emerald-400/20 p-3 text-emerald-300">
<iconify-icon height="22" icon="solar:gift-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" id="signup">
<div className="grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_3rem_rgba(16,185,129,0.08)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 font-geist">
<iconify-icon height="16" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            100% free to start
          </div>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl font-geist font-semibold">Create your free account</h2>
<p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base font-geist">
            Get instant access to earning tools after signup and start exploring high-conversion AI resources built for online income.
          </p>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
<div className="text-emerald-300">
<iconify-icon height="20" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="mt-3 text-sm font-medium text-white font-geist">Fast setup</div>
<div className="mt-1 text-xs text-slate-400 font-geist">Join in under a minute.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
<div className="text-cyan-300">
<iconify-icon height="20" icon="solar:widget-4-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="mt-3 text-sm font-medium text-white font-geist">Free AI tools</div>
<div className="mt-1 text-xs text-slate-400 font-geist">Ready to use after signup.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
<div className="text-amber-300">
<iconify-icon height="20" icon="solar:trophy-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="mt-3 text-sm font-medium text-white font-geist">Earning rewards</div>
<div className="mt-1 text-xs text-slate-400 font-geist">Unlock bonuses as you progress.</div>
</div>
</div>
</div>
<form className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5" id="signupForm">
<div className="space-y-4">
<div>
<label className="mb-2 block text-xs text-slate-300 font-geist">Name</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/40 focus:bg-white/10" id="nameInput" placeholder="Your name" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs text-slate-300 font-geist">Email</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-white/10" id="emailInput" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="mb-2 block text-xs text-slate-300 font-geist">Password</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300/40 focus:bg-white/10" id="passwordInput" placeholder="Create a secure password" type="password"/>
</div>
<button className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_0_2rem_rgba(16,185,129,0.35)] transition hover:scale-[1.02] font-geist" id="signupBtn" type="submit">
              Sign Up Free
              <iconify-icon height="20" icon="solar:login-3-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 font-geist" id="signupMessage">Get instant access to earning tools after signup</p>
</div>
</form>
</div>
</section>
<section className="mx-auto hidden max-w-7xl px-4 py-10 sm:px-6 lg:px-8" id="adsSection">
<div className="overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-white/5 p-6 shadow-[0_0_3rem_rgba(16,185,129,0.08)] backdrop-blur-2xl lg:p-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 font-geist">
<iconify-icon height="16" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Ads unlocked
            </div>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl font-geist font-semibold">Sponsored offers are now visible</h2>
<p className="mt-3 text-sm text-slate-300 sm:text-base font-geist">After signup, ad placements appear below. Replace these blocks with your live ad network code when ready.</p>
</div>
<div className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs text-slate-300" id="savedEmailBadge"></div>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-3">
<div className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white font-geist">Ad Slot 1</div>
<div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 font-geist">Active</div>
</div>
<div className="mt-4 flex min-h-[12rem] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 text-center text-sm text-slate-400 font-geist">
              Place your ad code here
            </div>
</div>
<div className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white font-geist">Ad Slot 2</div>
<div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300 font-geist">Active</div>
</div>
<div className="mt-4 flex min-h-[12rem] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 text-center text-sm text-slate-400 font-geist">
              Place your ad code here
            </div>
</div>
<div className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white font-geist">Ad Slot 3</div>
<div className="rounded-full bg-amber-300/10 px-3 py-1 text-xs text-amber-300 font-geist">Active</div>
</div>
<div className="mt-4 flex min-h-[12rem] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 text-center text-sm text-slate-400 font-geist">
              Place your ad code here
            </div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="tools">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300 font-geist">
<iconify-icon height="16" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
          3D Tools Section
        </div>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl font-geist font-semibold">AI tools built to help you earn faster</h2>
<p className="mt-3 text-sm text-slate-300 sm:text-base font-geist">Explore curated digital resources, content systems, and automation kits through interactive floating cards.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
<div className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-[0_0_2rem_rgba(16,185,129,0.12)]">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_1.5rem_rgba(16,185,129,0.12)]">
<iconify-icon height="24" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl tracking-tight text-white font-geist font-semibold">AI Content Studio</h3>
<p className="mt-2 text-sm text-slate-400 font-geist">Generate blog posts, product descriptions, and social content for affiliate promotions.</p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-300 transition hover:bg-emerald-400/15 font-geist" href="#">Use Now</a>
</div>
<div className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_2rem_rgba(34,211,238,0.12)]">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_1.5rem_rgba(34,211,238,0.12)]">
<iconify-icon height="24" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl tracking-tight text-white font-geist font-semibold">Website Builder AI</h3>
<p className="mt-2 text-sm text-slate-400 font-geist">Launch landing pages and mini-offer sites that convert traffic into revenue opportunities.</p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300 transition hover:bg-cyan-400/15 font-geist" href="#">Use Now</a>
</div>
<div className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:shadow-[0_0_2rem_rgba(252,211,77,0.10)]">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300 shadow-[0_0_1.5rem_rgba(252,211,77,0.12)]">
<iconify-icon height="24" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl tracking-tight text-white font-geist font-semibold">Trend Analyzer</h3>
<p className="mt-2 text-sm text-slate-400 font-geist">Find demand spikes, profitable keywords, and audience angles for digital product offers.</p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs text-amber-300 transition hover:bg-amber-300/15 font-geist" href="#">Use Now</a>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="earn">
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 font-geist">
<iconify-icon height="16" icon="solar:cash-out-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
          Earning Methods
        </div>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl font-geist font-semibold">Simple ways to start earning online</h2>
<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base font-geist">Choose a path that matches your skills and let AI handle the heavy lifting.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl transition hover:-translate-y-1">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
<iconify-icon height="24" icon="solar:share-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl tracking-tight text-white font-geist font-semibold">Affiliate Marketing</h3>
<p className="mt-2 text-sm text-slate-400 font-geist">Promote useful tools and earn commissions using AI-generated content and funnels.</p>
</div>
<div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl transition hover:-translate-y-1">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
<iconify-icon height="24" icon="solar:case-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl tracking-tight text-white font-geist font-semibold">Freelancing</h3>
<p className="mt-2 text-sm text-slate-400 font-geist">Offer writing, design, research, or automation services boosted by AI speed and quality.</p>
</div>
<div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl transition hover:-translate-y-1">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
<iconify-icon height="24" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl tracking-tight text-white font-geist font-semibold">Digital Products</h3>
<p className="mt-2 text-sm text-slate-400 font-geist">Create templates, prompts, guides, and mini-products once, then sell repeatedly.</p>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="rewards">
<div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-300 font-geist">
<iconify-icon height="16" icon="solar:medal-ribbons-star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            Rewards &amp; Progress
          </div>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl font-geist font-semibold">Complete steps → unlock rewards</h2>
<p className="mt-3 text-sm text-slate-300 sm:text-base font-geist">Stay motivated with milestone-based progress, bonus tool unlocks, and premium earning boosters.</p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-slate-400 font-geist">Current level</div>
<div className="mt-1 text-2xl tracking-tight text-white font-geist font-semibold">Level 2 — Builder</div>
</div>
<div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs text-amber-300 font-geist">120 coins</div>
</div>
<div className="mt-6">
<div className="mb-2 flex items-center justify-between text-xs text-slate-400">
<span className="font-geist">Progress to next reward</span>
<span className="font-geist">68%</span>
</div>
<div className="h-3 rounded-full bg-white/10">
<div className="h-3 w-[68%] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 shadow-[0_0_1rem_rgba(16,185,129,0.35)]"></div>
</div>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
<div className="text-xs text-slate-400 font-geist">Step 1</div>
<div className="mt-2 text-sm font-medium text-white font-geist">Create account</div>
<div className="mt-2 text-xs text-emerald-300 font-geist">Completed</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
<div className="text-xs text-slate-400 font-geist">Step 2</div>
<div className="mt-2 text-sm font-medium text-white font-geist">Use first tool</div>
<div className="mt-2 text-xs text-cyan-300 font-geist">In progress</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
<div className="text-xs text-slate-400 font-geist">Step 3</div>
<div className="mt-2 text-sm font-medium text-white font-geist">Unlock pro guide</div>
<div className="mt-2 text-xs text-amber-300 font-geist">Pending</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 font-geist">
<iconify-icon height="16" icon="solar:chat-round-like-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
          Testimonials
        </div>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl font-geist font-semibold">Users are already building momentum</h2>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<p className="text-sm text-slate-300 font-geist">“I used the free tools to create product posts and landed my first affiliate commissions within days.”</p>
<div className="mt-5">
<div className="text-sm font-medium text-white font-geist">Arjun M.</div>
<div className="text-xs text-slate-400 font-geist">Beginner creator</div>
</div>
</div>
<div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<p className="text-sm text-slate-300 font-geist">“The earning methods were easy to follow. I started offering AI-assisted freelance services immediately.”</p>
<div className="mt-5">
<div className="text-sm font-medium text-white font-geist">Neha R.</div>
<div className="text-xs text-slate-400 font-geist">Freelance starter</div>
</div>
</div>
<div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<p className="text-sm text-slate-300 font-geist">“What I liked most was the clarity. It felt gamified, motivating, and much less overwhelming than other platforms.”</p>
<div className="mt-5">
<div className="text-sm font-medium text-white font-geist">Kabir S.</div>
<div className="text-xs text-slate-400 font-geist">Digital seller</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="premium">
<div className="overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/10 via-white/5 to-cyan-400/10 p-6 shadow-[0_0_3rem_rgba(252,211,77,0.08)] backdrop-blur-2xl lg:p-8">
<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-300 font-geist">
<iconify-icon height="16" icon="solar:crown-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Pro Membership
            </div>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl font-geist font-semibold">Unlock more earning power</h2>
<p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base font-geist">Upgrade for premium tools, advanced guides, and higher-value digital resources designed to help you scale faster.</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-sm font-medium text-white font-geist">Extra tools</div>
<div className="mt-1 text-xs text-slate-400 font-geist">Premium automations and templates</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-sm font-medium text-white font-geist">Premium guides</div>
<div className="mt-1 text-xs text-slate-400 font-geist">Actionable strategies and walkthroughs</div>
</div>
</div>
</div>
<div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
<div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-geist">Plans</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
<div>
<div className="text-sm font-medium text-white font-geist">Starter Pro</div>
<div className="text-xs text-slate-400 font-geist">Essential premium access</div>
</div>
<div className="text-lg font-semibold tracking-tight text-amber-300 font-geist">₹99</div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 shadow-[0_0_2rem_rgba(16,185,129,0.08)]">
<div>
<div className="text-sm font-medium text-white font-geist">Growth Pro</div>
<div className="text-xs text-slate-300 font-geist">Best value for active earners</div>
</div>
<div className="text-lg font-semibold tracking-tight text-emerald-300 font-geist">₹299</div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
<div>
<div className="text-sm font-medium text-white font-geist">Elite Pro</div>
<div className="text-xs text-slate-400 font-geist">Full library and advanced bonuses</div>
</div>
<div className="text-lg font-semibold tracking-tight text-cyan-300 font-geist">₹499</div>
</div>
</div>
<button className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-amber-300 via-emerald-400 to-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_0_2rem_rgba(252,211,77,0.18)] transition hover:scale-[1.02] font-geist">
              Upgrade to Pro
            </button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
<div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
<div>
<div className="text-lg font-semibold tracking-tight text-white font-geist">AIMHUB</div>
<p className="mt-3 text-sm text-slate-400 font-geist">A futuristic earning platform for AI tools, digital resources, and revenue-focused opportunities.</p>
</div>
<div>
<div className="text-sm font-medium text-white font-geist">Platform</div>
<div className="mt-3 space-y-2 text-sm text-slate-400">
<a className="block hover:text-white font-geist" href="#tools">Tools</a>
<a className="block hover:text-white font-geist" href="#earn">Methods</a>
<a className="block hover:text-white font-geist" href="#premium">Membership</a>
</div>
</div>
<div>
<div className="text-sm font-medium text-white font-geist">Contact</div>
<div className="mt-3 space-y-2 text-sm text-slate-400">
<a className="block hover:text-white font-geist" href="mailto:hello@aimhub.site">hello@aimhub.site</a>
<a className="block hover:text-white font-geist" href="#">Support Center</a>
<a className="block hover:text-white font-geist" href="#">Privacy</a>
</div>
</div>
<div>
<div className="text-sm font-medium text-white font-geist">Social</div>
<div className="mt-3 flex gap-3">
<a className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-white" href="#">
<iconify-icon height="18" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-emerald-400/30 hover:text-white" href="#">
<iconify-icon height="18" icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-amber-300/30 hover:text-white" href="#">
<iconify-icon height="18" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
