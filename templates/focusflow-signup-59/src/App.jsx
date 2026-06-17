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



      document.addEventListener('DOMContentLoaded', () => {
        // Init icons with stroke-width 1.5
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        const form = document.getElementById('signupForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmInput = document.getElementById('confirmPassword');
        const termsInput = document.getElementById('terms');
        const strengthText = document.getElementById('strengthText');
        const segments = Array.from(document.querySelectorAll('[data-strength-seg]'));

        const errors = {
          name: document.getElementById('nameError'),
          email: document.getElementById('emailError'),
          password: document.getElementById('passwordError'),
          confirm: document.getElementById('confirmError'),
          terms: document.getElementById('termsError')
        };
        const successAlert = document.getElementById('formSuccess');

        // Password visibility toggles
        document.querySelectorAll('[data-toggle-password]').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-toggle-password');
            const input = document.getElementById(id);
            if (!input) return;
            const isHidden = input.type === 'password';
            input.type = isHidden ? 'text' : 'password';
            const icon = btn.querySelector('svg');
            if (icon) {
              icon.setAttribute('data-lucide', isHidden ? 'eye-off' : 'eye');
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          });
        });

        // Strength meter
        const updateStrength = () => {
          const v = passwordInput.value || '';
          let score = 0;
          if (v.length >= 8) score++;
          if (/[a-z]/.test(v) && /[A-Z]/.test(v)) score++;
          if (/\d/.test(v)) score++;
          if (/[^A-Za-z0-9]/.test(v)) score++;

          const colors = ['bg-rose-500','bg-amber-400','bg-emerald-500','bg-cyan-500'];
          segments.forEach((seg, i) => {
            seg.className = 'h-1.5 w-1/4 rounded-full bg-white/10 transition-all';
            if (i < score) seg.classList.add(colors[Math.min(score - 1, colors.length - 1)]);
          });

          const labels = ['faible','moyen','bon','fort'];
          strengthText.textContent = `Force du mot de passe : ${labels[Math.min(score, labels.length) - 1] || 'faible'}`;
        };
        passwordInput.addEventListener('input', updateStrength);
        updateStrength();

        // Email validation
        const emailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

        // Clear error helper
        const showError = (el, show) => {
          if (!el) return;
          el.classList.toggle('hidden', !show);
        };

        // Submit handler
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          successAlert.classList.add('hidden');

          let valid = true;
          // Name
          if (!nameInput.value.trim()) { showError(errors.name, true); valid = false; } else { showError(errors.name, false); }
          // Email
          if (!emailValid(emailInput.value.trim())) { showError(errors.email, true); valid = false; } else { showError(errors.email, false); }
          // Password
          const pw = passwordInput.value;
          const pwOk = pw.length >= 8 && /[A-Za-z]/.test(pw) && /\d/.test(pw);
          if (!pwOk) { showError(errors.password, true); valid = false; } else { showError(errors.password, false); }
          // Confirm
          if (pw !== confirmInput.value) { showError(errors.confirm, true); valid = false; } else { showError(errors.confirm, false); }
          // Terms
          if (!termsInput.checked) { showError(errors.terms, true); valid = false; } else { showError(errors.terms, false); }

          if (!valid) return;

          // Simulate success
          successAlert.classList.remove('hidden');
          form.querySelector('button[type="submit"]').disabled = true;
          form.querySelector('button[type="submit"]').classList.add('opacity-80');
          setTimeout(() => {
            // Reset (optional)
            // form.reset();
          }, 400);
        });
      });
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"></div>
<div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-[48px] bg-white/5 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent_65%)]"></div>
</div>
<main className="relative">
<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 lg:grid-cols-2">

<aside className="relative hidden lg:flex flex-col justify-between border-r border-white/10 px-12 py-10">
<header className="flex items-center gap-3">
<a className="inline-flex items-center gap-3 group" href="/">
<span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg font-semibold text-white group-hover:border-white/20 group-hover:scale-[1.03] transition">
                FF
              </span>
<div className="leading-tight">
<p className="font-[600] text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif', letterSpacing: '-0.03em'}}>FocusFlow</p>
<p className="mt-0.5 text-[11px] uppercase tracking-[0.28em] text-white/50">Reste dans le flow</p>
</div>
</a>
</header>
<div className="mt-10">
<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Application web et mobile</div>
<h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif', letterSpacing: '-0.03em'}}>
              Rejoins la communauté du deep work.
            </h1>
<p className="mt-4 text-base text-white/70">
              Inscris-toi pour synchroniser tes tâches, lancer des sessions de focus 2.0 et mesurer tes progrès sur tous tes appareils.
            </p>
<div className="mt-10 grid gap-4">
<div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/20 hover:bg-white/[0.07]">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
<i className="h-5 w-5 text-cyan-400" data-lucide="timer-reset"></i>
</div>
<div>
<p className="text-white font-medium">Pomodoro 2.0</p>
<p className="text-sm text-white/60">Sessions personnalisables, sons et notifications intégrés.</p>
</div>
</div>
<div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/20 hover:bg-white/[0.07]">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
<i className="h-5 w-5 text-violet-400" data-lucide="bar-chart-3"></i>
</div>
<div>
<p className="text-white font-medium">Statistiques claires</p>
<p className="text-sm text-white/60">Focus Score, streaks et répartition du temps.</p>
</div>
</div>
<div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/20 hover:bg-white/[0.07]">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
<i className="h-5 w-5 text-emerald-400" data-lucide="shield"></i>
</div>
<div>
<p className="text-white font-medium">Données sécurisées</p>
<p className="text-sm text-white/60">Chiffrement, sauvegarde cloud et synchronisation.</p>
</div>
</div>
</div>

<div className="mt-10 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="user" className="h-9 w-9 rounded-full border border-white/10 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<img alt="user" className="h-9 w-9 rounded-full border border-white/10 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<img alt="user" className="h-9 w-9 rounded-full border border-white/10 object-cover" src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="h-9 w-9 rounded-full border border-white/10 bg-white/5 grid place-items-center text-xs text-white/70">+9k</div>
</div>
<p className="text-sm text-white/70">Des milliers d’utilisateurs focus chaque jour.</p>
</div>
</div>
<footer className="mt-10 text-xs text-white/40">
            FocusFlow © <span id="year"></span>
</footer>
</aside>

<section className="flex items-center justify-center px-6 py-12 lg:px-12">
<div className="w-full max-w-md">

<div className="mb-8 flex items-center justify-between lg:hidden">
<a className="inline-flex items-center gap-3 group" href="/">
<span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-base font-semibold text-white group-hover:border-white/20 group-hover:scale-[1.03] transition">
                  FF
                </span>
<p className="font-[600] text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif', letterSpacing: '-0.03em'}}>FocusFlow</p>
</a>
<a className="text-sm text-white/60 hover:text-white transition" href="/">Retour</a>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
<div className="mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif', letterSpacing: '-0.03em'}}>
                  Crée ton compte
                </h2>
<p className="mt-2 text-sm text-white/60">Commence gratuitement. Aucune carte requise.</p>
</div>

<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
<button className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60" type="button">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/10 text-[11px] font-semibold tracking-tight">G</span>
<span className="sr-only sm:not-sr-only">Google</span>
</button>
<button className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60" type="button">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/10 text-[11px] font-semibold tracking-tight">A</span>
<span className="sr-only sm:not-sr-only">Apple</span>
</button>
<button className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60" type="button">
<i className="h-5 w-5 text-white/80" data-lucide="github"></i>
<span className="sr-only sm:not-sr-only">GitHub</span>
</button>
</div>
<div className="my-6 flex items-center gap-3">
<div className="h-px w-full bg-white/10"></div>
<span className="text-xs uppercase tracking-[0.28em] text-white/40">ou</span>
<div className="h-px w-full bg-white/10"></div>
</div>
<form className="space-y-5" id="signupForm" novalidate="">

<div>
<label className="mb-2 block text-sm text-white/80" htmlFor="name">Prénom et nom</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 grid w-10 place-items-center">
<i className="h-4.5 w-4.5 text-white/40" data-lucide="user"></i>
</div>
<input autocomplete="name" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-10 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-cyan-500/40" id="name" name="name" placeholder="Ex. Alex Dupont" required="" type="text"/>
</div>
<p className="mt-1.5 hidden text-xs text-rose-400" id="nameError">Ton nom est requis.</p>
</div>

<div>
<label className="mb-2 block text-sm text-white/80" htmlFor="email">Adresse e-mail</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 grid w-10 place-items-center">
<i className="h-4.5 w-4.5 text-white/40" data-lucide="mail"></i>
</div>
<input autocomplete="email" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-10 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-cyan-500/40" id="email" name="email" placeholder="tu@exemple.com" required="" type="email"/>
</div>
<p className="mt-1.5 hidden text-xs text-rose-400" id="emailError">Entre une adresse e-mail valide.</p>
</div>

<div>
<label className="mb-2 block text-sm text-white/80" htmlFor="password">Mot de passe</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 grid w-10 place-items-center">
<i className="h-4.5 w-4.5 text-white/40" data-lucide="lock"></i>
</div>
<input autocomplete="new-password" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-10 py-3 pr-10 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-cyan-500/40" id="password" name="password" placeholder="Au moins 8 caractères" required="" type="password"/>
<button className="absolute inset-y-0 right-0 z-10 grid w-10 place-items-center text-white/50 hover:text-white transition" data-toggle-password="password" type="button">
<i className="h-4.5 w-4.5" data-lucide="eye"></i>
</button>
</div>

<div className="mt-3">
<div className="flex gap-1.5">
<div className="h-1.5 w-1/4 rounded-full bg-white/10" data-strength-seg=""></div>
<div className="h-1.5 w-1/4 rounded-full bg-white/10" data-strength-seg=""></div>
<div className="h-1.5 w-1/4 rounded-full bg-white/10" data-strength-seg=""></div>
<div className="h-1.5 w-1/4 rounded-full bg-white/10" data-strength-seg=""></div>
</div>
<div className="mt-2 flex items-center gap-2 text-xs text-white/60">
<i className="h-3.5 w-3.5 text-white/50" data-lucide="shield"></i>
<span id="strengthText">Force du mot de passe : faible</span>
</div>
</div>
<p className="mt-1.5 hidden text-xs text-rose-400" id="passwordError">Ton mot de passe doit contenir au moins 8 caractères, avec des lettres et des chiffres.</p>
</div>

<div>
<label className="mb-2 block text-sm text-white/80" htmlFor="confirmPassword">Confirme le mot de passe</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 grid w-10 place-items-center">
<i className="h-4.5 w-4.5 text-white/40" data-lucide="key-round"></i>
</div>
<input autocomplete="new-password" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-10 py-3 pr-10 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-cyan-500/40" id="confirmPassword" name="confirmPassword" placeholder="Répète ton mot de passe" required="" type="password"/>
<button className="absolute inset-y-0 right-0 z-10 grid w-10 place-items-center text-white/50 hover:text-white transition" data-toggle-password="confirmPassword" type="button">
<i className="h-4.5 w-4.5" data-lucide="eye"></i>
</button>
</div>
<p className="mt-1.5 hidden text-xs text-rose-400" id="confirmError">Les mots de passe ne correspondent pas.</p>
</div>

<div className="space-y-3">
<label className="relative flex cursor-pointer select-none items-start gap-3">
<input className="peer sr-only" id="newsletter" type="checkbox"/>
<span className="mt-0.5 grid h-5 w-5 place-items-center rounded-md border border-white/20 bg-white/5 transition peer-checked:border-emerald-400 peer-checked:bg-emerald-400/20">
<svg className="h-3.5 w-3.5 text-emerald-400 opacity-0 transition peer-checked:opacity-100" data-lucide="check"></svg>
</span>
<span className="text-sm text-white/80">Recevoir des astuces productivité (1 email/sem.)</span>
</label>
<label className="relative flex cursor-pointer select-none items-start gap-3">
<input className="peer sr-only" id="terms" required="" type="checkbox"/>
<span className="mt-0.5 grid h-5 w-5 place-items-center rounded-md border border-white/20 bg-white/5 transition peer-checked:border-emerald-400 peer-checked:bg-emerald-400/20">
<svg className="h-3.5 w-3.5 text-emerald-400 opacity-0 transition peer-checked:opacity-100" data-lucide="check"></svg>
</span>
<span className="text-sm text-white/80">
                      J’accepte les
                      <a className="text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline" href="#">Conditions</a>
                      et la
                      <a className="text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline" href="#">Politique de confidentialité</a>.
                    </span>
</label>
<p className="mt-1 hidden text-xs text-rose-400" id="termsError">Tu dois accepter les conditions pour continuer.</p>
</div>

<div className="pt-2">
<button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-violet-500/90 hover:to-cyan-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 active:scale-[0.98]" type="submit">
                    Créer mon compte
                    <i className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</button>
<p className="mt-3 hidden rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200" id="formSuccess">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
                      Compte créé ! Vérifie ta boîte mail pour confirmer ton adresse.
                    </span>
</p>
</div>
<p className="text-xs text-white/40">Ce site est protégé par reCAPTCHA et les règles de confidentialité et conditions du service s’appliquent.</p>
</form>
<div className="mt-6 h-px w-full bg-white/10"></div>
<p className="mt-6 text-center text-sm text-white/70">
                Déjà un compte ?
                <a className="text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline" href="#">Se connecter</a>
</p>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
