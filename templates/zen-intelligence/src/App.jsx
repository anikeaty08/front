import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide icons first
      lucide.createIcons({
        strokeWidth: 1.5
      });

      // Set share URL
      document.getElementById('shareUrl').value = window.location.href;

      // Copy function
      function copyShareLink() {
        const input = document.getElementById('shareUrl');
        input.select();
        document.execCommand('copy');
        const button = document.getElementById('copyButtonText');
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy link';
        }, 2000);
      }

      // Share functions
      function shareViaEmail() {
        window.location.href = `mailto:?subject=Check out FlowSync&body=${encodeURIComponent(window.location.href)}`;
      }

      function shareViaTwitter() {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out FlowSync`, '_blank');
      }

      function shareViaLinkedIn() {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
      }

      // Intersection Observer for scroll animations
      const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
              }
          });
      }, observerOptions);

      // Wait for DOM to load, then observe elements
      document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll('.animate-item').forEach(el => {
              observer.observe(el);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 glass border-b border-white/40">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2 animate-item" href="#">
<span className="text-base font-semibold tracking-tight font-sans text-gray-900">
              FlowSync
            </span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
<a className="transition-colors animate-item animate-item-delay-1 font-sans hover:text-gray-900" href="#features">
              Features
            </a>
<a className="transition-colors animate-item animate-item-delay-2 font-sans hover:text-gray-900" href="#solutions">
              Solutions
            </a>
<a className="transition-colors animate-item animate-item-delay-3 font-sans hover:text-gray-900" href="#pricing">
              Pricing
            </a>
<a className="transition-colors animate-item animate-item-delay-4 font-sans hover:text-gray-900" href="#resources">
              Resources
            </a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center h-9 px-3 rounded-lg border text-sm transition-all animate-item animate-item-delay-5 font-sans border-gray-200 text-gray-700 hover:text-gray-900 hover:border-gray-300" href="#">
              Sign in
            </a>
<a className="inline-flex items-center h-9 px-3 rounded-lg text-sm font-medium transition-all shadow-lg animate-item animate-item-delay-6 font-sans bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/10" href="#">
              Get Started
              <i className="ml-1.5 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden py-20 sm:py-28">
<div className="absolute inset-0 -z-10">
<div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob bg-blue-200"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 bg-purple-200"></div>
<div className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bg-pink-200"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 w-max text-xs glass border rounded-full mb-6 py-1.5 px-3 shadow-sm animate-item font-sans text-gray-700 border-white/60">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Now with AI-powered insights
            </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight leading-tight animate-item animate-item-delay-1 font-sans font-semibold text-gray-900">
              Workflow magic
              <br className="hidden md:block"/>
              for modern teams
            </h1>
<p className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl animate-item animate-item-delay-2 font-sans text-gray-600">
              FlowSync transforms how product teams collaborate. Smart
              automation, real-time sync, and intuitive design come together to
              help you ship faster than ever before.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 animate-item animate-item-delay-3">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-xl text-sm font-medium transition-all shadow-xl font-sans bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/20" href="#">
                Start free trial
                <i className="ml-2 w-4 h-4" data-lucide="sparkles"></i>
</a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-xl glass-strong border text-sm transition-all shadow-lg font-sans border-white/60 text-gray-700 hover:text-gray-900 hover:border-gray-300" href="#">
                Watch demo
                <i className="ml-2 w-4 h-4" data-lucide="play-circle"></i>
</a>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-gray-500 animate-item animate-item-delay-4">
<div className="flex -space-x-2">
<img alt="User" className="h-7 w-7 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="h-7 w-7 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="h-7 w-7 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
</div>
<span className="font-sans">Trusted by 3,800+ teams worldwide • 4.9/5 rating</span>
</div>
</div>

<div className="lg:col-span-6 animate-item animate-item-delay-2">
<div className="relative">
<div className="glass-strong border rounded-3xl p-6 shadow-2xl border-white/60">
<div className="grid grid-cols-12 gap-4">

<div className="col-span-12 md:col-span-6 space-y-4 animate-item animate-item-delay-3">
<div className="group relative h-56 rounded-2xl overflow-hidden border bg-gradient-to-br border-gray-200 from-blue-50 to-purple-50">
<img alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-gray-900/70 via-gray-900/20"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<p className="text-xs font-sans text-white/70">Active projects</p>
<p className="text-lg font-semibold tracking-tight font-sans text-white">
                            24 in progress
                          </p>
</div>
<span className="inline-flex items-center h-8 px-3 rounded-lg glass-strong border text-xs font-sans border-white/30 text-white">
<i className="mr-1 w-4 h-4" data-lucide="trending-up"></i>
                          +18%
                        </span>
</div>
</div>
<div className="relative h-32 rounded-2xl overflow-hidden border glass-strong animate-item animate-item-delay-4 border-gray-200">
<div className="absolute inset-0 flex items-center justify-between px-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-gray-100 border-gray-200">
<i className="w-5 h-5 text-gray-700" data-lucide="zap"></i>
</span>
<div>
<p className="text-sm font-medium tracking-tight font-sans text-gray-900">
                              Quick sync
                            </p>
<p className="text-xs text-gray-500 font-sans">
                              Real-time updates enabled
                            </p>
</div>
</div>
<button className="inline-flex items-center h-8 px-3 rounded-lg text-xs font-medium transition font-sans bg-gray-900 text-white hover:bg-gray-800">
                          View
                          <i className="ml-1 w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-6 space-y-4 animate-item animate-item-delay-4">
<div className="relative h-32 rounded-2xl overflow-hidden border glass-strong border-gray-200">
<div className="absolute inset-0 flex items-center justify-between px-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-gray-100 border-gray-200">
<i className="w-5 h-5 text-gray-700" data-lucide="users"></i>
</span>
<div>
<p className="text-sm font-medium tracking-tight font-sans text-gray-900">
                              Team capacity
                            </p>
<p className="text-xs text-gray-500 font-sans">
                              87% utilized this sprint
                            </p>
</div>
</div>
<span className="text-xs font-medium font-sans text-emerald-600">
                          Optimal
                        </span>
</div>
</div>
<div className="group relative h-56 rounded-2xl overflow-hidden border bg-gradient-to-br border-gray-200 from-purple-50 to-pink-50">
<img alt="Analytics" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-gray-900/70 via-gray-900/20"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<p className="text-xs font-sans text-white/70">Deployment rate</p>
<p className="text-lg font-semibold tracking-tight font-sans text-white">
                            4.2x faster
                          </p>
</div>
<span className="inline-flex items-center h-8 text-xs glass-strong border rounded-lg px-2 text-white border-white/30">
<i className="w-4 h-4" data-lucide="rocket"></i>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="glass-strong border rounded-xl p-3 shadow-lg animate-item animate-item-delay-5 border-white/60">
<p className="text-xs text-gray-500 font-sans">Efficiency</p>
<p className="text-base font-semibold tracking-tight font-sans text-gray-900">
                    94%
                  </p>
</div>
<div className="glass-strong border rounded-xl p-3 shadow-lg animate-item animate-item-delay-6 border-white/60">
<p className="text-xs text-gray-500 font-sans">Velocity</p>
<p className="text-base font-semibold tracking-tight font-sans text-gray-900">
                    3.8x
                  </p>
</div>
<div className="glass-strong border rounded-xl p-3 shadow-lg animate-item animate-item-delay-5 border-white/60">
<p className="text-xs text-gray-500 font-sans">Satisfaction</p>
<p className="text-base font-semibold tracking-tight font-sans text-gray-900">
                    4.9/5
                  </p>
</div>
<div className="glass-strong border rounded-xl p-3 shadow-lg animate-item animate-item-delay-6 border-white/60">
<p className="text-xs text-gray-500 font-sans">Uptime</p>
<p className="text-base font-semibold tracking-tight font-sans text-gray-900">
                    99.9%
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-item">
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-sans font-semibold text-gray-900">
            Everything you need to succeed
          </h2>
<p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto font-sans text-gray-600">
            Powerful features designed for modern product teams who demand
            speed, clarity, and exceptional results.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass-strong border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all animate-item border-white/60">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 bg-blue-100 border-blue-200">
<i className="w-6 h-6 text-blue-600" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 font-sans text-gray-900">
              Smart dashboards
            </h3>
<p className="text-sm leading-relaxed font-sans text-gray-600">
              Real-time insights with AI-powered analytics that help you make
              better decisions faster.
            </p>
</div>
<div className="glass-strong border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all animate-item animate-item-delay-1 border-white/60">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 bg-purple-100 border-purple-200">
<i className="w-6 h-6 text-purple-600" data-lucide="workflow"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 font-sans text-gray-900">
              Automated workflows
            </h3>
<p className="text-sm leading-relaxed font-sans text-gray-600">
              Set up custom automations that eliminate repetitive tasks and keep
              work flowing smoothly.
            </p>
</div>
<div className="glass-strong border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all animate-item animate-item-delay-2 border-white/60">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 bg-pink-100 border-pink-200">
<i className="w-6 h-6 text-pink-600" data-lucide="git-branch"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 font-sans text-gray-900">
              Git integration
            </h3>
<p className="text-sm leading-relaxed font-sans text-gray-600">
              Seamless connection with GitHub, GitLab, and Bitbucket for
              automatic status updates.
            </p>
</div>
<div className="glass-strong border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all animate-item animate-item-delay-1 border-white/60">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 bg-emerald-100 border-emerald-200">
<i className="w-6 h-6 text-emerald-600" data-lucide="brain"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 font-sans text-gray-900">
              AI assistance
            </h3>
<p className="text-sm leading-relaxed font-sans text-gray-600">
              Intelligent suggestions for task prioritization, time estimates,
              and resource allocation.
            </p>
</div>
<div className="glass-strong border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all animate-item animate-item-delay-2 border-white/60">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 bg-orange-100 border-orange-200">
<i className="w-6 h-6 text-orange-600" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 font-sans text-gray-900">
              Global collaboration
            </h3>
<p className="text-sm leading-relaxed font-sans text-gray-600">
              Work seamlessly across time zones with real-time sync and async
              communication tools.
            </p>
</div>
<div className="glass-strong border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all animate-item animate-item-delay-3 border-white/60">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 bg-indigo-100 border-indigo-200">
<i className="w-6 h-6 text-indigo-600" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 font-sans text-gray-900">
              Enterprise security
            </h3>
<p className="text-sm leading-relaxed font-sans text-gray-600">
              Bank-level encryption, SSO, SAML, and compliance with SOC 2 and
              GDPR standards.
            </p>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 mt-16" id="customers">
<div className="md:p-8 glass-strong border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-2xl border-white/60">
<div className="grid md:grid-cols-3 gap-6 items-center mb-16">
<div>
<p className="text-sm font-sans text-gray-600">What teams say</p>
<p className="text-lg font-semibold tracking-tight mt-1 font-sans text-gray-900">
              "NovaOps cut our cycle time by 35% in a month."
            </p>
<div className="flex items-center gap-2 mt-3">
<img alt="Customer" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46c1c487-d923-41a3-b3e4-6c293d89f0fe_320w.jpg"/>
<div className="text-xs">
<p className="font-sans text-gray-900">Riya Sharma</p>
<p className="font-sans text-gray-600">VP Engineering, Orbitly</p>
</div>
</div>
</div>
<div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
<div className="h-16 rounded-xl border flex items-center justify-center border-gray-200 bg-gray-50">
<span className="font-semibold tracking-tight font-sans text-gray-700">
                ALFA
              </span>
</div>
<div className="h-16 rounded-xl border flex items-center justify-center border-gray-200 bg-gray-50">
<span className="font-semibold tracking-tight font-sans text-gray-700">
                NOVA
              </span>
</div>
<div className="h-16 rounded-xl border flex items-center justify-center border-gray-200 bg-gray-50">
<span className="font-semibold tracking-tight font-sans text-gray-700">
                LYRA
              </span>
</div>
<div className="h-16 rounded-xl border flex items-center justify-center border-gray-200 bg-gray-50">
<span className="font-semibold tracking-tight font-sans text-gray-700">
                KITE
              </span>
</div>
</div>
</div>
<div className="mb-16">
<div className="text-center mb-8">
<h3 className="md:text-3xl text-2xl tracking-tight font-sans font-semibold text-gray-900">
              Simple, transparent pricing
            </h3>
<p className="mt-2 font-sans text-gray-600">Start free, scale as you grow</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="border rounded-2xl pt-6 pr-6 pb-6 pl-6 border-gray-200 bg-white">
<h4 className="text-lg font-semibold tracking-tight font-sans text-gray-900">
                Free
              </h4>
<p className="text-sm mt-1 font-sans text-gray-600">
                Perfect for small teams getting started
              </p>
<div className="mt-4 mb-6">
<span className="text-3xl tracking-tight font-sans font-semibold text-gray-900">
                  $0
                </span>
<span className="text-sm font-sans text-gray-600">/month</span>
</div>
<ul className="space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Up to 5 team members
                </li>
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Unlimited issues
                </li>
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Basic analytics
                </li>
</ul>
<button className="w-full mt-6 h-10 rounded-lg border transition text-sm font-sans border-gray-200 text-gray-700 hover:bg-gray-50">
                Get started
              </button>
</div>
<div className="rounded-2xl border p-6 relative shadow-lg border-gray-200 bg-white">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="text-xs font-medium px-3 py-1 rounded-full font-sans bg-gray-900 text-white">
                  Most popular
                </span>
</div>
<h4 className="text-lg font-semibold tracking-tight font-sans text-gray-900">
                Pro
              </h4>
<p className="text-sm mt-1 font-sans text-gray-600">
                For growing teams that ship fast
              </p>
<div className="mt-4 mb-6">
<span className="text-3xl tracking-tight font-sans font-semibold text-gray-900">
                  $12
                </span>
<span className="text-sm font-sans text-gray-600">/user/month</span>
</div>
<ul className="space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Everything in Free
                </li>
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Advanced analytics
                </li>
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Git integrations
                </li>
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Custom fields
                </li>
</ul>
<button className="w-full mt-6 h-10 rounded-lg font-medium transition text-sm font-sans bg-gray-900 text-white hover:bg-gray-800">
                Start free trial
              </button>
</div>
<div className="rounded-2xl border p-6 border-gray-200 bg-white">
<h4 className="text-lg font-semibold tracking-tight font-sans text-gray-900">
                Enterprise
              </h4>
<p className="text-sm mt-1 font-sans text-gray-600">
                For large organizations with specific needs
              </p>
<div className="mt-4 mb-6">
<span className="text-2xl tracking-tight font-sans font-semibold text-gray-900">
                  Custom
                </span>
</div>
<ul className="space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Everything in Pro
                </li>
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  SSO &amp; security controls
                </li>
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Priority support
                </li>
<li className="flex items-center gap-2 font-sans">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Custom integrations
                </li>
</ul>
<button className="w-full mt-6 h-10 rounded-lg border transition text-sm font-sans border-gray-200 text-gray-700 hover:bg-gray-50">
                Contact sales
              </button>
</div>
</div>
</div>
<div className="">
<div className="text-center mb-8">
<h3 className="text-2xl md:text-3xl tracking-tight font-sans font-semibold text-gray-900">
              Frequently asked questions
            </h3>
<p className="mt-2 font-sans text-gray-600">
              Everything you need to know about NovaOps
            </p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-xl border p-4 border-gray-200 bg-white">
<h4 className="font-medium tracking-tight mb-2 font-sans text-gray-900">
                How long does setup take?
              </h4>
<p className="text-sm font-sans text-gray-600">
                Most teams are up and running in under 30 minutes. Import
                existing issues, connect your Git repos, and invite your team.
              </p>
</div>
<div className="rounded-xl border p-4 border-gray-200 bg-white">
<h4 className="font-medium tracking-tight mb-2 font-sans text-gray-900">
                Can I migrate from other tools?
              </h4>
<p className="text-sm font-sans text-gray-600">
                Yes, we support imports from Jira, Linear, GitHub Issues, and
                most other project management tools.
              </p>
</div>
<div className="rounded-xl border p-4 border-gray-200 bg-white">
<h4 className="font-medium tracking-tight mb-2 font-sans text-gray-900">
                What Git providers do you support?
              </h4>
<p className="text-sm font-sans text-gray-600">
                GitHub, GitLab, Bitbucket, and Azure DevOps. We sync branch
                names, PR status, and deployment info automatically.
              </p>
</div>
<div className="rounded-xl border p-4 border-gray-200 bg-white">
<h4 className="font-medium tracking-tight mb-2 font-sans text-gray-900">
                Is there a mobile app?
              </h4>
<p className="text-sm font-sans text-gray-600">
                Our web app works great on mobile, and we're working on native
                iOS and Android apps for 2025.
              </p>
</div>
<div className="rounded-xl border p-4 border-gray-200 bg-white">
<h4 className="font-medium tracking-tight mb-2 font-sans text-gray-900">
                How does billing work?
              </h4>
<p className="text-sm font-sans text-gray-600">
                Monthly or annual billing per active user. Free plan includes up
                to 5 team members with no time limit.
              </p>
</div>
<div className="rounded-xl border p-4 border-gray-200 bg-white">
<h4 className="font-medium tracking-tight mb-2 font-sans text-gray-900">
                Do you offer customer support?
              </h4>
<p className="text-sm font-sans text-gray-600">
                Email support for all plans, with priority support and dedicated
                success managers for Enterprise customers.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 sm:py-28" id="share">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-strong border rounded-3xl p-8 md:p-12 shadow-2xl animate-item border-white/60">
<div className="text-center">
<div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border mb-6 mx-auto bg-blue-100 border-blue-200">
<i className="w-8 h-8 text-blue-600" data-lucide="share-2"></i>
</div>
<h3 className="text-2xl md:text-3xl tracking-tight mb-4 font-sans font-semibold text-gray-900">
              Share this page
            </h3>
<p className="mb-8 max-w-xl mx-auto font-sans text-gray-600">
              Copy the link below to share FlowSync with your team or colleagues
            </p>
<div className="max-w-2xl mx-auto">
<div className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 h-12 px-4 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 border-gray-200 bg-white text-gray-900" id="shareUrl" readonly="" type="text" value=""/>
<button className="inline-flex items-center justify-center h-12 px-6 rounded-xl text-sm font-medium transition shadow-lg bg-gray-900 text-white hover:bg-gray-800" onclick="copyShareLink()">
<i className="w-4 h-4 mr-2" data-lucide="copy"></i>
<span className="font-sans" id="copyButtonText">Copy link</span>
</button>
</div>
<div className="flex items-center justify-center gap-4 mt-6">
<a className="inline-flex items-center gap-2 text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" onclick="shareViaEmail(); return false;">
<i className="w-4 h-4" data-lucide="mail"></i>
                  Email
                </a>
<a className="inline-flex items-center gap-2 text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" onclick="shareViaTwitter(); return false;">
<i className="w-4 h-4" data-lucide="twitter"></i>
                  Twitter
                </a>
<a className="inline-flex items-center gap-2 text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" onclick="shareViaLinkedIn(); return false;">
<i className="w-4 h-4" data-lucide="linkedin"></i>
                  LinkedIn
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-strong border rounded-3xl p-8 md:p-12 shadow-2xl animate-item border-white/60">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center animate-item">
<p className="text-4xl md:text-5xl tracking-tight font-sans font-semibold text-gray-900">
                3,800+
              </p>
<p className="text-sm mt-2 font-sans text-gray-600">Active teams</p>
</div>
<div className="text-center animate-item animate-item-delay-1">
<p className="text-4xl md:text-5xl tracking-tight font-sans font-semibold text-gray-900">
                42M+
              </p>
<p className="text-sm mt-2 font-sans text-gray-600">Tasks completed</p>
</div>
<div className="text-center animate-item animate-item-delay-2">
<p className="text-4xl md:text-5xl tracking-tight font-sans font-semibold text-gray-900">
                99.9%
              </p>
<p className="text-sm mt-2 font-sans text-gray-600">Uptime guaranteed</p>
</div>
<div className="text-center animate-item animate-item-delay-3">
<p className="text-4xl md:text-5xl tracking-tight font-sans font-semibold text-gray-900">
                4.9/5
              </p>
<p className="text-sm mt-2 font-sans text-gray-600">Customer rating</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-strong border rounded-3xl p-8 md:p-12 shadow-2xl animate-item border-white/60">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight animate-item font-sans font-semibold text-gray-900">
                Ready to transform your workflow?
              </h3>
<p className="text-sm mt-2 animate-item animate-item-delay-1 font-sans text-gray-600">
                Join thousands of teams already shipping faster with FlowSync.
              </p>
</div>
<div className="flex gap-3 animate-item animate-item-delay-2">
<a className="inline-flex items-center h-11 px-6 rounded-xl text-sm font-medium transition shadow-xl font-sans bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/20" href="#">
                Start free trial
                <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center h-11 px-6 rounded-xl glass-strong border text-sm transition shadow-lg font-sans border-white/60 text-gray-700 hover:text-gray-900 hover:border-gray-300" href="#">
                Schedule demo
                <i className="ml-2 w-4 h-4" data-lucide="calendar"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-200/60 bg-white/30">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-sm font-sans text-gray-600">© 2025 FlowSync Inc.</span>
</div>
<div className="flex items-center gap-4 text-sm text-gray-500">
<a className="transition font-sans hover:text-gray-900" href="#">Privacy</a>
<a className="transition font-sans hover:text-gray-900" href="#">Terms</a>
<a className="transition font-sans hover:text-gray-900" href="#">Security</a>
<a className="transition font-sans hover:text-gray-900" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
