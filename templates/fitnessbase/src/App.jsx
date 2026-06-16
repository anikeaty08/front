import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Active nav state by path
      const path = (location.pathname.split('/').pop() || 'index.html');
      document.querySelectorAll('[data-route-link]').forEach(a => {
        const target = a.getAttribute('data-route-link');
        const isHome = (path === '' || path === 'index.html') && target === '/';
        const isActive = isHome || ('/' + path === target);
        a.style.opacity = isActive ? '1' : '';
        a.style.color = isActive ? '#1F2937' : '';
        a.style.fontWeight = isActive ? '600' : '400';
        if (isActive) {
          a.classList.add('underline','underline-offset-4','decoration-slate-300');
        } else {
          a.classList.remove('underline','underline-offset-4','decoration-slate-300');
        }
      });

      // Begin Journey -> membership with open flag
      const begin = document.getElementById('beginJourneyTop');
      begin?.addEventListener('click', () => {
        location.href = './membership.html#open-registration';
      });
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Active nav
      const path = (location.pathname.split('/').pop() || 'index.html');
      document.querySelectorAll('[data-route-link]').forEach(a => {
        const target = a.getAttribute('data-route-link');
        const isHome = (path === '' || path === 'index.html') && target === '/';
        const isActive = ('/' + (path || 'index.html')) === target || isHome;
        a.style.opacity = isActive ? '1' : '';
        a.style.color = isActive ? '#1F2937' : '';
        a.style.fontWeight = isActive ? '600' : '400';
        if (isActive) a.classList.add('underline','underline-offset-4','decoration-slate-300'); else a.classList.remove('underline','underline-offset-4','decoration-slate-300');
      });

      // Hero/Top CTA: if already on membership, open registration
      document.getElementById('beginJourneyTop')?.addEventListener('click', () => {
        const r = document.getElementById('registration');
        r.classList.remove('hidden');
        window.scrollTo({ top: r.offsetTop - 80, behavior: 'smooth' });
      });

      // Auto-open from external links
      if (location.hash === '#open-registration') {
        const r = document.getElementById('registration');
        r.classList.remove('hidden');
        setTimeout(() => window.scrollTo({ top: r.offsetTop - 80, behavior: 'smooth' }), 60);
      }

      // Registration flow
      let currentStep = 1;
      const totalSteps = 4;
      const progressBar = document.getElementById('progressBar');
      const stepLabel = document.getElementById('stepLabel');

      function renderProgress() {
        const pct = (currentStep / totalSteps) * 100;
        progressBar.style.width = pct + '%';
        stepLabel.textContent = `Step ${currentStep} of ${totalSteps}`;
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function goToStep(step) {
        currentStep = Math.min(Math.max(step, 1), totalSteps);
        document.querySelectorAll('.step').forEach(s => {
          s.classList.toggle('hidden', Number(s.getAttribute('data-step')) !== currentStep);
        });
        document.getElementById('prevStep').disabled = currentStep === 1;

        const nextBtn = document.getElementById('nextStep');
        nextBtn.innerHTML = currentStep === totalSteps ? 'Review' : 'Continue';
        const nextIcon = document.createElement('i');
        nextIcon.setAttribute('data-lucide', currentStep === totalSteps ? 'check' : 'arrow-right');
        nextIcon.className = 'w-4 h-4';
        nextBtn.appendChild(nextIcon);

        renderProgress();
      }

      document.getElementById('prevStep').addEventListener('click', () => goToStep(currentStep - 1));
      document.getElementById('nextStep').addEventListener('click', () => {
        if (currentStep < totalSteps) {
          goToStep(currentStep + 1);
        } else {
          document.getElementById('completeSignup').disabled = false;
        }
      });

      // Summary data bindings
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      [nameInput, emailInput].forEach(el => el.addEventListener('input', () => {
        document.getElementById('summaryName').textContent = nameInput.value || '—';
        document.getElementById('summaryEmail').textContent = emailInput.value || '—';
      }));

      // Tier selection
      function selectTier(tier) {
        document.querySelectorAll('.tier-btn').forEach(b => {
          const active = b.getAttribute('data-tier') === tier;
          b.style.borderColor = active ? '#D69E2E' : '#E2E8F0';
          b.style.backgroundColor = active ? '#FFFBEB' : 'white';
        });
        document.getElementById('selectedTier').textContent = tier || '—';
        document.getElementById('summaryTier').textContent = tier || '—';
      }
      document.querySelectorAll('.tier-btn').forEach(b => {
        b.addEventListener('click', () => selectTier(b.getAttribute('data-tier')));
      });

      // Plan buttons open registration with preselect
      document.querySelectorAll('.choose-plan').forEach(btn => {
        btn.addEventListener('click', () => {
          const plan = btn.getAttribute('data-plan');
          const r = document.getElementById('registration');
          r.classList.remove('hidden');
          selectTier(plan);
          goToStep(2);
          window.scrollTo({ top: r.offsetTop - 80, behavior: 'smooth' });
        });
      });

      // Goals
      function selectGoal(goal) {
        document.querySelectorAll('.goal-tag').forEach(g => {
          const active = g.getAttribute('data-goal') === goal;
          g.style.borderColor = active ? '#D69E2E' : '#E2E8F0';
          g.style.backgroundColor = active ? '#FFFBEB' : 'white';
        });
        document.getElementById('selectedGoal').textContent = goal || '—';
        document.getElementById('summaryGoal').textContent = goal || '—';
      }
      document.querySelectorAll('.goal-tag').forEach(g => g.addEventListener('click', () => selectGoal(g.getAttribute('data-goal'))));

      // Complete membership
      document.getElementById('completeSignup').addEventListener('click', (e) => {
        const btn = e.currentTarget;
        btn.disabled = true;
        btn.innerHTML = 'Processing';
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', 'loader');
        icon.className = 'w-4 h-4 animate-spin';
        btn.appendChild(icon);
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        setTimeout(() => {
          btn.innerHTML = 'Completed';
          const check = document.createElement('i');
          check.setAttribute('data-lucide', 'check');
          check.className = 'w-4 h-4';
          btn.appendChild(check);
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          const feedback = document.getElementById('signupFeedback');
          feedback.classList.remove('hidden');
          feedback.textContent = `Great work, ${nameInput.value || 'Member'}! You're one step closer to your goal.`;
        }, 1000);
      });

      goToStep(1);
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Active nav
      const path = (location.pathname.split('/').pop() || 'index.html');
      document.querySelectorAll('[data-route-link]').forEach(a => {
        const target = a.getAttribute('data-route-link');
        const isHome = (path === '' || path === 'index.html') && target === '/';
        const isActive = ('/' + (path || 'index.html')) === target || isHome;
        a.style.opacity = isActive ? '1' : '';
        a.style.color = isActive ? '#1F2937' : '';
        a.style.fontWeight = isActive ? '600' : '400';
        if (isActive) a.classList.add('underline','underline-offset-4','decoration-slate-300'); else a.classList.remove('underline','underline-offset-4','decoration-slate-300');
      });

      // Begin Journey -> membership with open flag
      document.getElementById('beginJourneyTop')?.addEventListener('click', () => {
        location.href = './membership.html#open-registration';
      });

      // Filters
      const filterButtons = document.querySelectorAll('.filter-btn');
      const classItems = document.querySelectorAll('.class-item');
      const emptyState = document.getElementById('scheduleEmpty');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => {
            b.style.backgroundColor = 'white';
            b.style.color = '#2D3748';
          });
          btn.style.backgroundColor = '#D69E2E';
          btn.style.color = '#FFFFFF';

          const filter = btn.getAttribute('data-filter');
          let visible = 0;
          classItems.forEach(item => {
            const type = item.getAttribute('data-type');
            const show = filter === 'All' || type === filter;
            item.classList.toggle('hidden', !show);
            if (show) visible++;
          });
          emptyState.classList.toggle('hidden', visible > 0);
        });
      });

      // Booking buttons
      document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const state = btn.getAttribute('data-state');
          if (state === 'available') {
            btn.setAttribute('data-state', 'booked');
            btn.style.backgroundColor = '#38A169';
            btn.style.borderColor = '#38A169';
            btn.style.color = '#FFFFFF';
            btn.innerHTML = 'Booked <i data-lucide="check" class="w-4 h-4"></i>';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          } else if (state === 'waitlist') {
            btn.setAttribute('data-state', 'waitlisted');
            btn.style.backgroundColor = '#FFF7ED';
            btn.style.borderColor = '#D69E2E';
            btn.style.color = '#92400E';
            btn.innerHTML = 'Waitlisted <i data-lucide="clock" class="w-4 h-4"></i>';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      });
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Active nav
      const path = (location.pathname.split('/').pop() || 'index.html');
      document.querySelectorAll('[data-route-link]').forEach(a => {
        const target = a.getAttribute('data-route-link');
        const isHome = (path === '' || path === 'index.html') && target === '/';
        const isActive = ('/' + (path || 'index.html')) === target || isHome;
        a.style.opacity = isActive ? '1' : '';
        a.style.color = isActive ? '#1F2937' : '';
        a.style.fontWeight = isActive ? '600' : '400';
        if (isActive) a.classList.add('underline','underline-offset-4','decoration-slate-300'); else a.classList.remove('underline','underline-offset-4','decoration-slate-300');
      });

      // Begin Journey -> membership with open flag
      document.getElementById('beginJourneyTop')?.addEventListener('click', () => {
        location.href = './membership.html#open-registration';
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b" style={{borderColor: '#E2E8F0'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<a className="h-9 w-9 rounded-md flex items-center justify-center border font-semibold tracking-tight hover:opacity-80 transition" href="./index.html" style={{borderColor: '#E2E8F0', letterSpacing: '-0.02em', color: '#2D3748'}}>FB</a>
<div className="hidden md:flex items-center gap-1 text-[14px]">
<span className="px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>簡素 Kanso</span>
<span className="px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>渋い Shibui</span>
<span className="px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>静寂 Seijaku</span>
<span className="px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>改善 Kaizen</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-[14px]">
<a className="hover:opacity-80 transition" data-route-link="/" href="./index.html#pillars">Pillars</a>
<a className="hover:opacity-80 transition" data-route-link="/membership.html" href="./membership.html">Membership</a>
<a className="hover:opacity-80 transition" data-route-link="/schedule.html" href="./schedule.html">Schedule</a>
<a className="hover:opacity-80 transition" data-route-link="/dashboard.html" href="./dashboard.html">Digital Dojo</a>
<a className="hover:opacity-80 transition" data-route-link="/contact.html" href="./contact.html">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[14px] font-medium shadow-sm hover:shadow border transition focus:outline-none focus-visible:ring-2" id="beginJourneyTop" style={{backgroundColor: '#D69E2E', color: 'white', borderColor: '#D69E2E'}}>
<i className="w-4 h-4" data-lucide="sparkles"></i>
          Begin Your Journey
        </button>
</div>
</div>
</header>

<section className="relative" id="home-hero">
<div className="relative">
<img alt="Dojo interior with tatami and soft light" className="w-full h-[58vh] md:h-[68vh] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-28">
<div className="bg-white/90 backdrop-blur rounded-xl border p-6 md:p-10 shadow-sm" style={{borderColor: '#E2E8F0'}}>
<h1 className="text-[36px] md:text-[40px] font-semibold tracking-tight leading-tight" style={{letterSpacing: '-0.02em'}}>
          Find Your Strength. Find Your Focus.
        </h1>
<p className="mt-3 text-[16px] text-slate-600">
          A Japanese-inspired fitness sanctuary offering Gym, Performance Training, and a Shotokan Karate self-defense academy.
        </p>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[14px] font-medium shadow-sm hover:shadow border transition focus:outline-none focus-visible:ring-2" href="#pillars" style={{backgroundColor: '#D69E2E', color: 'white', borderColor: '#D69E2E'}}>
            Explore the Path
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[14px] font-medium border hover:bg-white transition" href="./membership.html" style={{borderColor: '#E2E8F0'}}>
            View Memberships
          </a>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 md:mt-24" id="pillars">
<div className="flex items-end justify-between mb-6">
<h2 className="text-[24px] font-semibold tracking-tight" style={{letterSpacing: '-0.01em'}}>Three Pillars</h2>
<span className="text-[14px] text-slate-500">Clarity. Focus. Discipline.</span>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group rounded-xl border bg-white p-6 hover:shadow-sm transition cursor-default" style={{borderColor: '#E2E8F0'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center border bg-white" style={{borderColor: '#E2E8F0'}}>
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</div>
<div>
<h3 className="text-[20px] font-medium tracking-tight">Gym</h3>
<p className="text-[14px] text-slate-500">鍛錬 Tanren</p>
</div>
</div>
<a className="text-[14px] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition" href="./membership.html">
            Join
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<p className="mt-4 text-[16px] text-slate-600">
          A calm, focused space with free weights and machines. No noise—just progress.
        </p>
<div className="mt-4 flex items-center gap-3 text-[14px] text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>
<i className="w-4 h-4" data-lucide="clock"></i> 6:00–22:00
          </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>
<i className="w-4 h-4" data-lucide="scan-line"></i> Access Control
          </span>
</div>
</div>

<div className="group rounded-xl border bg-white p-6 hover:shadow-sm transition cursor-default" style={{borderColor: '#E2E8F0'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center border bg-white" style={{borderColor: '#E2E8F0'}}>
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div>
<h3 className="text-[20px] font-medium tracking-tight">Performance</h3>
<p className="text-[14px] text-slate-500">練達 Rentatsu</p>
</div>
</div>
<a className="text-[14px] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition" href="./membership.html">
            Join
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<p className="mt-4 text-[16px] text-slate-600">
          Small-group coaching for strength, mobility, and conditioning with clean, measurable progress.
        </p>
<div className="mt-4 flex items-center gap-3 text-[14px] text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>
<i className="w-4 h-4" data-lucide="target"></i> Goal-Based
          </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>
<i className="w-4 h-4" data-lucide="bar-chart"></i> Tracking
          </span>
</div>
</div>

<div className="group rounded-xl border bg-white p-6 hover:shadow-sm transition cursor-default" style={{borderColor: '#E2E8F0'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center border bg-white" style={{borderColor: '#E2E8F0'}}>
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<div>
<h3 className="text-[20px] font-medium tracking-tight">Karate Academy</h3>
<p className="text-[14px] text-slate-500">松濤館 Shotokan</p>
</div>
</div>
<a className="text-[14px] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition" href="./schedule.html">
            View Classes
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<p className="mt-4 text-[16px] text-slate-600">
          Self-defense and discipline through kihon, kata, and kumite—guided by experienced sensei.
        </p>
<div className="mt-4 flex items-center gap-3 text-[14px] text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>
<i className="w-4 h-4" data-lucide="users"></i> All Levels
          </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border" style={{borderColor: '#E2E8F0'}}>
<i className="w-4 h-4" data-lucide="hand"></i> Self Defense
          </span>
</div>
</div>
</div>
</section>


    </>
  );
}
