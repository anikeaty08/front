import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full z-50 top-0 transition-all duration-300 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md fixed">
<div className="max-w-6xl mx-auto px-6">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon height="14" icon="solar:pen-new-square-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-zinc-900">WriteFlow</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-light text-zinc-500">
<span>No Experience Required</span>
<span>•</span>
<span>Instant Approval</span>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20">

<section className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
</span>
<span className="text-xs font-medium text-zinc-600">Accepting new writers today</span>
</div>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight reveal delay-100">
                Turn your everyday words into <span className="text-zinc-400">consistent income.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed reveal delay-200">
                Join thousands of remote workers getting paid to write simple content, reviews, and short articles. Work from anywhere, choose your own hours, and withdraw earnings weekly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-300">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] group" href="https://quiturl.net/OJPSKth" rel="noopener noreferrer" target="_blank">
                    Apply Now &amp; Start Writing
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<span className="text-xs font-light text-zinc-400 sm:ml-4 flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
                    100% Secure &amp; Verified
                </span>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors reveal delay-100">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon height="20" icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">1. Create Your Account</h3>
<p className="text-sm font-light text-zinc-500 leading-relaxed">
                        Sign up in under 2 minutes. No lengthy interviews or portfolios required. Get instant access to our platform.
                    </p>
</div>

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors reveal delay-200">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">2. Choose Your Tasks</h3>
<p className="text-sm font-light text-zinc-500 leading-relaxed">
                        Browse hundreds of daily writing tasks. Pick topics you enjoy, from simple product reviews to short blog posts.
                    </p>
</div>

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors reveal delay-300">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon height="20" icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">3. Get Paid Weekly</h3>
<p className="text-sm font-light text-zinc-500 leading-relaxed">
                        Submit your text and get compensated directly to your bank account or preferred payment method every single week.
                    </p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pb-24 text-center reveal">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-10">Loved by remote writers worldwide</h2>
<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 md:p-10 shadow-sm relative text-left max-w-3xl mx-auto">
<iconify-icon className="text-zinc-200 absolute top-6 left-6" height="32" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-base md:text-lg font-light text-zinc-600 leading-relaxed mb-6 relative z-10 pl-6">
                    "I was skeptical at first, but the interface is incredibly simple. I just log in during my free time, pick a few short writing tasks, and the payments hit my account reliably every week. It's the perfect side income."
                </p>
<div className="flex items-center gap-3 pl-6">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-sm font-medium text-zinc-600">
                        SJ
                    </div>
<div>
<p className="text-sm font-medium text-zinc-900">Sarah Jenkins</p>
<div className="flex text-amber-400 gap-0.5 mt-0.5">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 text-center pb-24 reveal">
<div className="bg-zinc-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Ready to start earning?</h2>
<p className="text-base font-light text-zinc-400 mb-8 max-w-lg mx-auto">
                        Join the platform today and get immediate access to the task dashboard. No limits on how much you can write.
                    </p>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-50 transition-all duration-200" href="https://quiturl.net/OJPSKth" rel="noopener noreferrer" target="_blank">
                        Create Free Account
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200/50 py-10 mt-auto">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-400">
<div className="flex items-center gap-2">
<iconify-icon height="14" icon="solar:pen-new-square-linear" width="14"></iconify-icon>
<span>© 2024 WriteFlow. All rights reserved.</span>
</div>
<div className="text-center md:text-right max-w-md">
<p>Disclosure: We may earn a commission for purchases made through our links, at no extra cost to you.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
