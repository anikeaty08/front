import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Init icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
      }
    });

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Pilot form fake submit
    const pilotForm = document.getElementById('pilotForm');
    pilotForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('webinarUrl');
      const url = input?.value?.trim();
      if (!url) return;
      try {
        new URL(url);
        alert('Thanks! We\'ll review your webinar and reply with next steps within 48 hours.');
      } catch {
        alert('Please paste a valid URL.');
      }
    });

    // FAQ toggles
    const toggles = document.querySelectorAll('.faq-toggle');
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.parentElement.querySelector('.faq-content');
        const icon = btn.querySelector('i[data-lucide]');
        const isOpen = !content.classList.contains('hidden');
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-toggle i').forEach(i => i.style.transform = 'rotate(0deg)');
        if (!isOpen) {
          content.classList.remove('hidden');
          icon.style.transform = 'rotate(45deg)';
        }
      });
    });

    // Chart.js ROI sample
    const ctx = document.getElementById('roiChart')?.getContext('2d');
    if (ctx) {
      const gradientA = ctx.createLinearGradient(0, 0, 0, 180);
      gradientA.addColorStop(0, 'rgba(0,217,255,0.5)');
      gradientA.addColorStop(1, 'rgba(0,217,255,0.05)');
      const gradientB = ctx.createLinearGradient(0, 0, 0, 180);
      gradientB.addColorStop(0, 'rgba(139,92,246,0.5)');
      gradientB.addColorStop(1, 'rgba(139,92,246,0.05)');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
          datasets: [
            {
              label: 'No Action',
              data: [5, 4, 5, 4],
              backgroundColor: 'rgba(255,255,255,0.12)',
              borderRadius: 8,
              borderWidth: 0
            },
            {
              label: 'Repurposed PDF',
              data: [60, 85, 110, 130],
              backgroundColor: gradientB,
              borderRadius: 8,
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: { color: 'rgba(255,255,255,0.7)' },
              grid: { color: 'rgba(255,255,255,0.08)' }
            },
            y: {
              ticks: { color: 'rgba(255,255,255,0.7)', beginAtZero: true },
              grid: { color: 'rgba(255,255,255,0.08)' }
            }
          },
          plugins: {
            legend: {
              labels: { color: 'rgba(255,255,255,0.8)' }
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.7)',
              titleColor: '#fff',
              bodyColor: '#fff',
              borderColor: 'rgba(255,255,255,0.15)',
              borderWidth: 1
            }
          }
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 -left-40 h-[460px] w-[460px] rounded-full blur-[120px] opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, #8B5CF6 0%, rgba(139,92,246,0.0) 60%)'}}></div>
<div className="absolute top-40 right-[-120px] h-[520px] w-[520px] rounded-full blur-[140px] opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, #3B82F6 0%, rgba(59,130,246,0.0) 60%)'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-[0.08]" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute inset-0 opacity-[0.18]" style={{background: 'radial-gradient(1200px 400px at 50% -10%, rgba(0,217,255,0.25), transparent), radial-gradient(600px 220px at 80% 10%, rgba(255,0,255,0.18), transparent)'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-2xl bg-black/30 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
<div className="flex items-center justify-between px-4 py-3">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
<span className="text-white text-[14px] tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>WLL</span>
</div>
<span className="text-white/90 font-medium tracking-tight group-hover:text-white transition-colors">WebinarLeadLab</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-white/70 hover:text-white transition-colors" href="#how">How it works</a>
<a className="text-white/70 hover:text-white transition-colors" href="#math">The math</a>
<a className="text-white/70 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-white/70 hover:text-white transition-colors" href="#results">Results</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-[16px] bg-transparent ring-1 ring-white/15 hover:ring-white/30 text-white/80 hover:text-white transition-all" href="#pricing">See pricing</a>
<a className="inline-flex items-center rounded-xl px-4 sm:px-5 py-2.5 text-[16px] font-semibold tracking-tight text-black shadow-[0_0_30px_rgba(0,217,255,0.45)] hover:shadow-[0_0_50px_rgba(0,217,255,0.6)] transition-all" href="#cta" style={{background: 'linear-gradient(90deg, #00D9FF, #8B5CF6)'}}>
              Resurrect My Webinar
              <i className="ml-2 w-4 h-4" data-lucide="zap"></i>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="relative pt-36 md:pt-40 pb-16 md:pb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
<div className="lg:col-span-6">
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-extrabold leading-[1.05]" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
<span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #FFFFFF, #BDA5FF 30%, #60A5FA 70%, #FFFFFF)'}}>Your $5,000 Webinar Dies in 7 Days</span>
</h1>
<p className="mt-6 text-white/80 text-[20px] leading-relaxed">
            We transform it into a lead magnet that works forever. Professional PDF delivered in 48 hours.
          </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="flex items-start gap-3 rounded-xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-4">
<i className="w-5 h-5 text-[#8B5CF6]" data-lucide="timer"></i>
<div className="text-white/85">
<p className="font-semibold tracking-tight">5 Minutes of Your Time</p>
<p className="text-white/65 text-[16px]">Upload your webinar link. That's it. We handle everything else.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-4">
<i className="w-5 h-5 text-[#3B82F6]" data-lucide="clock-4"></i>
<div className="text-white/85">
<p className="font-semibold tracking-tight">48-Hour Delivery</p>
<p className="text-white/65 text-[16px]">Guaranteed turnaround. No excuses, no delays.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-4">
<i className="w-5 h-5 text-[#00FF88]" data-lucide="infinity"></i>
<div className="text-white/85">
<p className="font-semibold tracking-tight">Leads Forever</p>
<p className="text-white/65 text-[16px]">Your webinar becomes an evergreen asset generating qualified leads.</p>
</div>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="group inline-flex items-center justify-center rounded-2xl px-6 py-4 text-[18px] font-semibold tracking-tight text-black transition-all shadow-[0_0_35px_rgba(0,217,255,0.55)] hover:shadow-[0_0_60px_rgba(0,217,255,0.75)] hover:scale-[1.01]" href="#pricing" style={{background: 'linear-gradient(90deg, #00D9FF, #8B5CF6)'}}>
              Save My Webinar → $750 Pilot
              <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-2xl px-6 py-4 text-[18px] font-medium tracking-tight ring-1 ring-white/15 hover:ring-white/30 text-white/85 hover:text-white transition-all" href="#how">
              See how it works
              <i className="ml-2 w-5 h-5" data-lucide="play-circle"></i>
</a>
</div>
<div className="mt-8 flex items-center gap-6 text-white/60">
<div className="flex -space-x-3">
<img alt="Client 1" className="h-9 w-9 rounded-full ring-2 ring-black/50 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Client 2" className="h-9 w-9 rounded-full ring-2 ring-black/50 object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Client 3" className="h-9 w-9 rounded-full ring-2 ring-black/50 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[16px]">Created by a Lead Software Engineer tired of watching valuable content die</p>
</div>
</div>

<div className="lg:col-span-6 relative">
<div className="absolute -top-4 -right-2">
<div className="rounded-full px-3 py-1.5 bg-white/5 ring-1 ring-white/10 backdrop-blur-xl text-[14px] text-white/80 flex items-center gap-2">
<i className="w-4 h-4 text-[#00D9FF]" data-lucide="clock-4"></i>
              48h Guarantee
            </div>
</div>
<div className="relative w-full">
<div className="grid grid-cols-12 gap-4 items-center">

<div className="col-span-5">
<div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-4 backdrop-blur-md">
<div className="aspect-video rounded-xl bg-black/60 grid place-items-center text-white/40">
<i className="w-10 h-10" data-lucide="youtube"></i>
</div>
<div className="mt-3">
<div className="flex items-center justify-between">
<p className="text-white/60 text-[14px]">Without WebinarLeadLab</p>
<span className="text-white/40 text-[12px]">The usual</span>
</div>
<div className="mt-3 space-y-2 text-[14px]">
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Status</span>
<span className="text-right text-white/80">“We should repurpose that...”</span>
</div>
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Timeline</span>
<span className="text-right text-white/80">Never happens</span>
</div>
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Output</span>
<span className="text-right text-white/80">Zero pieces created</span>
</div>
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Result</span>
<span className="text-right text-white/80">$5,000 wasted</span>
</div>
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Your reality</span>
<span className="text-right text-white/80">Another dead webinar</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-2 flex items-center justify-center">
<div className="h-14 w-14 rounded-full grid place-items-center ring-1 ring-white/15 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.35)]">
<i className="w-7 h-7 text-[#8B5CF6]" data-lucide="chevrons-right"></i>
</div>
</div>

<div className="col-span-5">
<div className="relative">
<div className="absolute -inset-2 rounded-3xl blur-2xl opacity-60" style={{background: 'conic-gradient(from 180deg, #00D9FF33, #8B5CF644, #3B82F644, #00D9FF33)'}}></div>
<div className="relative rounded-3xl bg-white/10 ring-1 ring-white/20 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white/90">
<i className="w-5 h-5 text-[#00FF88]" data-lucide="file-text"></i>
<span className="font-semibold tracking-tight">With WebinarLeadLab</span>
</div>
<span className="text-[#00FF88] text-[12px] font-medium tracking-tight">Evergreen</span>
</div>
<div className="mt-3 space-y-2 text-[14px]">
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Status</span>
<span className="text-right text-white/90">Done in 48 hours</span>
</div>
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Timeline</span>
<span className="text-right text-white/90">This week</span>
</div>
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Output</span>
<span className="text-right text-white/90">Professional PDF delivered</span>
</div>
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Result</span>
<span className="text-right text-white/90">Leads forever</span>
</div>
<div className="flex items-start justify-between gap-3">
<span className="text-white/60">Your reality</span>
<span className="text-right text-white/90">Finally shipping</span>
</div>
</div>
</div>
</div>
<div className="absolute -top-6 -right-6 rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl px-3 py-2 flex items-center gap-2">
<i className="w-4 h-4 text-[#00FF88]" data-lucide="dollar-sign"></i>
<span className="text-[14px] text-[#00FF88] font-medium tracking-tight">ROI Unlocked</span>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap gap-3">
<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-[12px] text-white/70 inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#3B82F6]" data-lucide="download"></i> Gated asset ready
              </span>
<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-[12px] text-white/70 inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#8B5CF6]" data-lucide="sparkle"></i> AI‑polished narrative
              </span>
<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-[12px] text-white/70 inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#00D9FF]" data-lucide="link-2"></i> UTM‑ready CTA
              </span>
<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-[12px] text-white/70 inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#00FF88]" data-lucide="shield-check"></i> Brand‑safe review
              </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter', letterSpacing: '-0.02em'}}>How it works</h2>
<p className="mt-4 text-white/70">Upload your link. We extract the gold, design a premium PDF, and ship in 48 hours.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="relative rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5 backdrop-blur-md">
<div className="flex items-center gap-3">
<span className="h-9 w-9 grid place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<i className="w-5 h-5 text-[#00D9FF]" data-lucide="link"></i>
</span>
<p className="font-semibold tracking-tight">1) Share your link</p>
</div>
<p className="mt-3 text-white/65 text-[16px]">You paste the webinar URL and any brand assets. 5 minutes, tops.</p>
</div>
<div className="relative rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5 backdrop-blur-md">
<div className="flex items-center gap-3">
<span className="h-9 w-9 grid place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<i className="w-5 h-5 text-[#8B5CF6]" data-lucide="highlighter"></i>
</span>
<p className="font-semibold tracking-tight">2) Outline + extract</p>
</div>
<p className="mt-3 text-white/65 text-[16px]">We distill the talk into a crisp outline with insights, takeaways, and proof.</p>
</div>
<div className="relative rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5 backdrop-blur-md">
<div className="flex items-center gap-3">
<span className="h-9 w-9 grid place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<i className="w-5 h-5 text-[#3B82F6]" data-lucide="palette"></i>
</span>
<p className="font-semibold tracking-tight">3) Design the PDF</p>
</div>
<p className="mt-3 text-white/65 text-[16px]">On‑brand, premium layout with cover, visuals, and a UTM‑tracked CTA.</p>
</div>
<div className="relative rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5 backdrop-blur-md">
<div className="flex items-center gap-3">
<span className="h-9 w-9 grid place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<i className="w-5 h-5 text-[#00FF88]" data-lucide="send"></i>
</span>
<p className="font-semibold tracking-tight">4) Ship in 48h</p>
</div>
<p className="mt-3 text-white/65 text-[16px]">You get a ready‑to‑gate PDF + social clips, plus one revision included.</p>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="math">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
<div className="lg:col-span-5">
<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter'}}>The math is simple</h2>
<p className="mt-4 text-white/70">One closed deal pays for the pilot many times over. Most teams never repurpose—so their $5k webinar returns $0 after a week. We fix that.</p>
<ul className="mt-6 space-y-3 text-white/80">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#EF4444] mt-0.5" data-lucide="x-circle"></i>
<span>No action = $0 pipeline. The content disappears after the live date.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check-circle-2"></i>
<span>Repurpose = evergreen downloads, SQLs, and revenue.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#60A5FA] mt-0.5" data-lucide="trending-up"></i>
<span>Example: 200 downloads → 10 SQLs → 1 closed‑won at $20k ACV = 26x pilot ROI.</span>
</li>
</ul>
</div>
<div className="lg:col-span-7">
<div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white/80">
<i className="w-5 h-5 text-[#8B5CF6]" data-lucide="bar-chart-3"></i>
<span className="font-semibold tracking-tight">Projected monthly impact</span>
</div>
<span className="text-white/50 text-sm">Sample model</span>
</div>
<div className="mt-4">
<canvas aria-label="ROI comparison chart" height="140" id="roiChart" role="img"></canvas>
</div>
<p className="mt-3 text-white/60 text-sm">Assumes typical B2B funnel benchmarks. Your numbers may vary—your upside won’t.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="results">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter'}}>Teams stop postponing. PDFs start performing.</h2>
<p className="mt-4 text-white/70">Shipped outcomes from founders, PMMs, and revenue teams.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
<figure className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6 backdrop-blur-md">
<div className="flex items-center gap-3">
<img alt="Elena testimonial" className="h-10 w-10 rounded-full object-cover ring-2 ring-black/50" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="font-semibold tracking-tight">Elena, Head of Marketing</figcaption>
<p className="text-white/50 text-sm">Series A SaaS</p>
</div>
</div>
<blockquote className="mt-4 text-white/80">We tried for months to ‘get to it.’ They shipped a better PDF in two days than our team could in two weeks.</blockquote>
<div className="mt-4 flex items-center gap-3 text-white/60 text-sm">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
<i className="w-4 h-4 text-[#3B82F6]" data-lucide="download"></i> +312 downloads
            </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
<i className="w-4 h-4 text-[#00FF88]" data-lucide="sparkles"></i> 7 SQLs
            </span>
</div>
</figure>
<figure className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6 backdrop-blur-md">
<div className="flex items-center gap-3">
<img alt="Marcus testimonial" className="h-10 w-10 rounded-full object-cover ring-2 ring-black/50" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="font-semibold tracking-tight">Marcus, PMM</figcaption>
<p className="text-white/50 text-sm">DevTools</p>
</div>
</div>
<blockquote className="mt-4 text-white/80">Clean structure, on‑brand visuals, and a CTA we could track day one. Easiest win of the quarter.</blockquote>
<div className="mt-4 flex items-center gap-3 text-white/60 text-sm">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
<i className="w-4 h-4 text-[#8B5CF6]" data-lucide="mouse-pointer-click"></i> 21% CTA CTR
            </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
<i className="w-4 h-4 text-[#60A5FA]" data-lucide="clock-4"></i> 48h delivery
            </span>
</div>
</figure>
<figure className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6 backdrop-blur-md">
<div className="flex items-center gap-3">
<img alt="Priya testimonial" className="h-10 w-10 rounded-full object-cover ring-2 ring-black/50" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="font-semibold tracking-tight">Priya, RevOps</figcaption>
<p className="text-white/50 text-sm">B2B Payments</p>
</div>
</div>
<blockquote className="mt-4 text-white/80">Turned a dead webinar into pipeline in under a week. We rolled it out across regions.</blockquote>
<div className="mt-4 flex items-center gap-3 text-white/60 text-sm">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
<i className="w-4 h-4 text-[#00D9FF]" data-lucide="globe-2"></i> Multi‑geo
            </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
<i className="w-4 h-4 text-[#00FF88]" data-lucide="repeat"></i> Repeatable
            </span>
</div>
</figure>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter'}}>Pricing</h2>
<p className="mt-4 text-white/70">Start with a low‑risk pilot. Scale when you’re ready.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="relative rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-6 backdrop-blur-md flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Starter Pilot</h3>
<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1 text-xs text-white/70">Best for trying</span>
</div>
<p className="mt-2 text-white/60 text-sm">Turn one webinar into a premium lead magnet.</p>
<div className="mt-5">
<span className="text-4xl font-extrabold tracking-tight">$750</span>
<span className="text-white/50"> one‑time</span>
</div>
<ul className="mt-5 space-y-3 text-white/80">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> 12–18 page PDF, on‑brand</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> Cover, TOC, takeaways, CTA</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> 48‑hour delivery + 1 revision</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold tracking-tight text-black shadow-[0_0_30px_rgba(0,217,255,0.45)] transition-all hover:shadow-[0_0_55px_rgba(0,217,255,0.7)]" href="#cta" style={{background: 'linear-gradient(90deg,#00D9FF,#8B5CF6)'}}>
            Start Pilot
            <i className="ml-2 w-4 h-4" data-lucide="rocket"></i>
</a>
</div>

<div className="relative rounded-3xl bg-white/[0.06] ring-1 ring-white/20 p-6 backdrop-blur-xl flex flex-col shadow-[0_20px_60px_rgba(139,92,246,0.15)]">
<div className="absolute -top-3 right-4 rounded-full bg-[#8B5CF6] text-black px-3 py-1 text-xs font-bold tracking-tight">Most popular</div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Pro</h3>
<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1 text-xs text-white/70">For teams</span>
</div>
<p className="mt-2 text-white/60 text-sm">Spin up multiple assets fast with consistent design.</p>
<div className="mt-5">
<span className="text-4xl font-extrabold tracking-tight">$1,950</span>
<span className="text-white/50"> per bundle (3 webinars)</span>
</div>
<ul className="mt-5 space-y-3 text-white/80">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> Everything in Starter ×3</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> Brand template + source files</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> UTM strategy + 2 CTAs</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> 2 revisions per asset</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold tracking-tight text-black ring-1 ring-white/10 bg-white/90 hover:bg-white transition-all" href="#cta">
            Upgrade to Pro
            <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-6 backdrop-blur-md flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Team</h3>
<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1 text-xs text-white/70">For scale</span>
</div>
<p className="mt-2 text-white/60 text-sm">Ship every week. Roll up performance. Multiply pipeline.</p>
<div className="mt-5">
<span className="text-4xl font-extrabold tracking-tight">$4,500</span>
<span className="text-white/50"> monthly (up to 8 webinars)</span>
</div>
<ul className="mt-5 space-y-3 text-white/80">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> Dedicated PM + Slack</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> A/B CTAs + quarterly review</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> Landing copy + Notion tracker</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> Security NDA on request</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold tracking-tight text-black shadow-[0_0_30px_rgba(0,217,255,0.45)] transition-all hover:shadow-[0_0_55px_rgba(0,217,255,0.7)]" href="#cta" style={{background: 'linear-gradient(90deg,#00D9FF,#8B5CF6)'}}>
            Talk to us
            <i className="ml-2 w-4 h-4" data-lucide="calendar"></i>
</a>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] backdrop-blur-xl">
<div className="absolute -inset-1 opacity-30 blur-3xl" style={{background: 'radial-gradient(60% 60% at 20% 50%, #00D9FF22 0%, transparent 60%), radial-gradient(60% 60% at 80% 50%, #8B5CF622 0%, transparent 60%)'}}></div>
<div className="relative p-6 md:p-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<h3 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter'}}>Paste your webinar link. Get a PDF in 48 hours.</h3>
<p className="mt-4 text-white/70">Start the $750 pilot. If we miss the 48‑hour SLA, you don’t pay. No meetings required.</p>
<form aria-label="Pilot signup form" className="mt-6 flex flex-col sm:flex-row gap-3" id="pilotForm">
<label className="sr-only" htmlFor="webinarUrl">Webinar URL</label>
<input className="w-full sm:flex-1 rounded-2xl bg-black/40 ring-1 ring-white/10 focus:ring-2 focus:ring-[#00D9FF] px-4 py-3.5 placeholder-white/40 text-white outline-none" id="webinarUrl" name="webinarUrl" placeholder="https://your-webinar-link.com" required="" type="url"/>
<button className="inline-flex items-center justify-center rounded-2xl px-5 py-3.5 font-semibold tracking-tight text-black shadow-[0_0_35px_rgba(0,217,255,0.55)] hover:shadow-[0_0_60px_rgba(0,217,255,0.75)] transition-all" style={{background: 'linear-gradient(90deg, #00D9FF, #8B5CF6)'}} type="submit">
                  Start $750 Pilot
                  <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
<p className="mt-3 text-white/50 text-sm">No spam. We only use your link to create the asset. <a className="underline hover:text-white" href="#">Privacy</a></p>
</div>
<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-center gap-2 text-white/80">
<i className="w-5 h-5 text-[#00FF88]" data-lucide="check-circle"></i>
<span className="font-semibold tracking-tight">What you get</span>
</div>
<ul className="mt-3 space-y-2 text-white/80 text-[16px]">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#8B5CF6] mt-0.5" data-lucide="file-text"></i> PDF (12–18 pages) with cover, TOC, takeaways</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#3B82F6] mt-0.5" data-lucide="mouse-pointer-click"></i> UTM‑tracked CTA embedded</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00D9FF] mt-0.5" data-lucide="layout-dashboard"></i> Brand‑matched layout + graphics</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#00FF88] mt-0.5" data-lucide="check"></i> Delivered in 48 hours, 1 revision</li>
</ul>
<div className="mt-4 flex items-center gap-3 text-white/60 text-sm">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
<i className="w-4 h-4 text-[#00D9FF]" data-lucide="zap"></i> SLA guarantee
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
<i className="w-4 h-4 text-[#8B5CF6]" data-lucide="lock"></i> NDA available
 </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter'}}>FAQ</h2>
<p className="mt-4 text-white/70">Short answers to help you move fast.</p>
</div>
<div className="mt-10 mx-auto max-w-3xl space-y-3">

<div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
<button className="faq-toggle w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold tracking-tight">What do you need from me?</span>
<i className="w-5 h-5 text-white/60 transition-transform" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-5 pb-5 text-white/70">
            Share the webinar URL, your logo, brand colors or style guide (optional), and your preferred CTA. That’s it.
          </div>
</div>

<div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
<button className="faq-toggle w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold tracking-tight">How fast is 48 hours measured?</span>
<i className="w-5 h-5 text-white/60 transition-transform" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-5 pb-5 text-white/70">
            The clock starts once we receive your link and any assets. Business days, timezone UTC—rush options available for teams.
          </div>
</div>

<div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
<button className="faq-toggle w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold tracking-tight">Can you match our brand exactly?</span>
<i className="w-5 h-5 text-white/60 transition-transform" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-5 pb-5 text-white/70">
            Yes. Provide your fonts, colors, and examples. Pro and Team packages include a reusable template and source files.
          </div>
</div>

<div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
<button className="faq-toggle w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold tracking-tight">What about revisions?</span>
<i className="w-5 h-5 text-white/60 transition-transform" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-5 pb-5 text-white/70">
            Starter includes one revision. Pro includes two per asset. Team can iterate weekly based on performance.
          </div>
</div>

<div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
<button className="faq-toggle w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold tracking-tight">How do we pay?</span>
<i className="w-5 h-5 text-white/60 transition-transform" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-5 pb-5 text-white/70">
            Card or invoice. For Team, we can accommodate procurement and NDAs.
          </div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
<span className="text-white text-[14px] tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>WLL</span>
</div>
<span className="text-white/80 group-hover:text-white transition-colors">WebinarLeadLab</span>
</a>
<p className="text-white/50 text-sm">© <span id="year"></span> WebinarLeadLab. Built by a Lead Software Engineer who hates wasted content.</p>
<div className="flex items-center gap-4 text-white/60 text-sm">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="mailto:hello@webinarleadlab.com">Contact</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
