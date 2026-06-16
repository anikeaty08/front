import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) toTop.classList.remove('hidden');
      else toTop.classList.add('hidden');
    });

    function sendToWhatsApp() {
      const phoneNumber = "923122774795";
      const name = (document.getElementById('userName').value || "").trim();
      const email = (document.getElementById('userEmail').value || "").trim();
      const mobile = (document.getElementById('userMobile').value || "").trim();
      const message = (document.getElementById('userMessage').value || "").trim();

      const finalMessage =
        `New Inquiry from Portfolio%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Mobile: ${encodeURIComponent(mobile)}%0A` +
        `Message: ${encodeURIComponent(message)}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${finalMessage}`;
      window.open(whatsappUrl, '_blank');
    }

    function openModal(id) {
      const el = document.getElementById(id);
      const panel = el.querySelector('div.relative');
      el.classList.remove('hidden');
      el.classList.add('flex');
      document.body.classList.add('overflow-hidden');

      if (panel) {
        panel.classList.add('opacity-0', 'translate-y-2');
        requestAnimationFrame(() => {
          panel.classList.add('transition', 'duration-200', 'ease-out');
          panel.classList.remove('opacity-0', 'translate-y-2');
        });
      }
    }
    function closeModal(id) {
      const el = document.getElementById(id);
      const panel = el.querySelector('div.relative');
      if (panel) {
        panel.classList.add('transition', 'duration-150', 'ease-in', 'opacity-0', 'translate-y-2');
        setTimeout(() => {
          el.classList.add('hidden');
          el.classList.remove('flex');
          document.body.classList.remove('overflow-hidden');
          panel.classList.remove('opacity-0', 'translate-y-2', 'transition', 'duration-150', 'ease-in');
        }, 150);
      } else {
        el.classList.add('hidden');
        el.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
      }
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ['m1','m3'].forEach(closeModal);
      }
    });

    const testimonials = [
      {
        text: '"Working with this team was an absolute pleasure. Their attention to detail and professionalism exceeded my expectations. I highly recommend them to anyone seeking quality service."',
        name: 'Sajid Hussain',
        role: 'CEO, Tech Solutions'
      },
      {
        text: '"Their creativity and dedication brought our project to life perfectly. Communication was smooth, and deadlines were always met. Truly impressive work!"',
        name: 'Ghulam Yasin',
        role: 'Founder, Innovative Designs'
      },
      {
        text: '"Professional, reliable, and highly skilled. The results exceeded our expectations and the entire process was seamless. I will definitely collaborate again."',
        name: 'Mehtab Hussain',
        role: 'Manager, Creative Agency'
      }
    ];
    let tIndex = 0;

    function renderTestimonial() {
      const tText = document.getElementById('tText');
      const tName = document.getElementById('tName');
      const tRole = document.getElementById('tRole');

      tText.classList.add('opacity-0', 'translate-y-1');
      setTimeout(() => {
        tText.textContent = testimonials[tIndex].text;
        tName.textContent = testimonials[tIndex].name;
        tRole.textContent = testimonials[tIndex].role;

        const dots = [document.getElementById('dot1'), document.getElementById('dot2'), document.getElementById('dot3')];
        dots.forEach((d, i) => {
          d.className = "h-1.5 w-6 rounded-full " + (i === tIndex ? "bg-gradient-to-r from-sky-400 to-fuchsia-400" : "bg-white/10");
        });

        tText.classList.add('transition', 'duration-200', 'ease-out');
        tText.classList.remove('opacity-0', 'translate-y-1');
      }, 120);
    }
    function nextTestimonial() {
      tIndex = (tIndex + 1) % testimonials.length;
      renderTestimonial();
    }
    function prevTestimonial() {
      tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
      renderTestimonial();
    }

    const targets = [
      { p: 'p1', bar: 'bar1', end: 95 },
      { p: 'p2', bar: 'bar2', end: 85 },
      { p: 'p3', bar: 'bar3', end: 80 },
      { p: 'p4', bar: 'bar4', end: 80 }
    ];
    let started = false;
    function animateSkills() {
      if (started) return;
      started = true;
      targets.forEach((t) => {
        let v = 0;
        const pEl = document.getElementById(t.p);
        const bEl = document.getElementById(t.bar);
        bEl.style.transition = "width 700ms ease";
        const timer = setInterval(() => {
          v += 1;
          pEl.textContent = v;
          bEl.style.width = v + "%";
          if (v >= t.end) clearInterval(timer);
        }, 18);
      });
    }

    const aboutSection = document.getElementById('about');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) animateSkills();
      });
    }, { threshold: 0.2 });
    io.observe(aboutSection);

    const revealEls = Array.from(document.querySelectorAll('section, article'));
    revealEls.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-2');
    });

    const revealIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('transition', 'duration-700', 'ease-out');
        el.classList.remove('opacity-0', 'translate-y-2');
        revealIO.unobserve(el);
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealIO.observe(el));

    renderTestimonial();
  


    document.querySelectorAll('iconify-icon').forEach(i => i.setAttribute('stroke-width', '1.5'));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-x-0 -top-48 h-[32rem] bg-gradient-to-b from-sky-500/20 via-slate-950/40 to-slate-950"></div>
<div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl"></div>
<div className="absolute -right-32 top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl"></div>
<div className="absolute left-1/2 top-72 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>
</div>

<nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur" id="navbar">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-baseline gap-2 transition-transform duration-300 hover:-translate-y-0.5" href="#home">
<span className="text-xl font-semibold tracking-tight text-white">Yasin</span>
<span className="text-xs font-medium tracking-tight text-white/60">NPXSOFT</span>
</a>
<button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/20 sm:hidden" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<div className="hidden items-center gap-2 sm:flex">
<div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 shadow-sm">
<a className="rounded-full px-3 py-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#home">Home</a>
<a className="rounded-full px-3 py-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#service">Services</a>
<a className="rounded-full px-3 py-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#projects">Projects</a>
<a className="rounded-full px-3 py-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#about">About</a>
<a className="rounded-full px-3 py-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#testimonial">Reviews</a>
<a className="rounded-full px-3 py-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#contact">Contact</a>
</div>
<button className="rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:from-sky-300 hover:to-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-sky-400/30" onclick="window.open('https://wa.me/923122774795','_blank')">
            Contact
          </button>
</div>
</div>

<div className="hidden pb-4 sm:hidden" id="mobileMenu">
<div className="space-y-2 rounded-2xl border border-white/10 bg-slate-950/60 p-3 shadow-sm backdrop-blur">
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#home">Home</a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#service">Services</a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#projects">Projects</a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#about">About</a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#testimonial">Reviews</a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white" href="#contact">Contact</a>
<button className="mt-2 w-full rounded-xl bg-gradient-to-r from-sky-400 to-fuchsia-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:from-sky-300 hover:to-fuchsia-300" onclick="window.open('https://wa.me/923122774795','_blank')">
            Contact on WhatsApp
          </button>
</div>
</div>
</div>
</nav>

<section className="mx-auto max-w-6xl px-4 sm:px-6" id="home">
<div className="grid items-start gap-10 py-12 sm:py-16 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Available for freelance &amp; full-time
        </div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Ghulam Yasin
          <span className="block text-base font-medium tracking-tight text-white/70 sm:text-lg">Multi-platform developer (Web • Mobile • Desktop) + ML</span>
</h1>
<p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-white/70 sm:text-base">
          I build responsive apps and websites with secure backend-ready structures and high performance.
          I also develop Machine Learning solutions (CNN, ANN, LSTM) for real-world use cases.
        </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:from-sky-300 hover:to-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-sky-400/30" onclick="window.open('https://wa.me/923122774795','_blank')">
<iconify-icon icon="solar:chat-round-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
            Hire Me
          </button>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" href="#projects">
<iconify-icon icon="solar:widget-2-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
            View Projects
          </a>
</div>
<div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10">
<div className="text-xs font-semibold text-white/60">Focus</div>
<div className="mt-1 text-sm font-semibold text-white">Mobile + Web</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10">
<div className="text-xs font-semibold text-white/60">Stack</div>
<div className="mt-1 text-sm font-semibold text-white">Flutter, Python</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10">
<div className="text-xs font-semibold text-white/60">ML</div>
<div className="mt-1 text-sm font-semibold text-white">CNN, ANN, LSTM</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10">
<div className="text-xs font-semibold text-white/60">Location</div>
<div className="mt-1 text-sm font-semibold text-white">Punjab, PK</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10">
<div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl"></div>
<div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-fuchsia-400/15 blur-3xl"></div>
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10 shadow-sm">
<iconify-icon icon="solar:user-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Developer Card</div>
<div className="text-xs font-medium text-white/60">Quick contact &amp; profile</div>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="grid gap-3 sm:grid-cols-2">
<div>
<div className="text-xs font-semibold text-white/60">Email</div>
<div className="mt-1 text-sm font-semibold text-white">yasindev06@gmail.com</div>
</div>
<div>
<div className="text-xs font-semibold text-white/60">Phone</div>
<div className="mt-1 text-sm font-semibold text-white">+92 312 2774795</div>
</div>
<div>
<div className="text-xs font-semibold text-white/60">Role</div>
<div className="mt-1 text-sm font-semibold text-white">Full‑stack &amp; Flutter</div>
</div>
<div>
<div className="text-xs font-semibold text-white/60">Availability</div>
<div className="mt-1 text-sm font-semibold text-white">Open to work</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<button className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://wa.me/923122774795','_blank')">
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:chat-round-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                WhatsApp
              </div>
</button>
<button className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://www.linkedin.com/in/ghulam-yasin-358469396','_blank')">
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:link-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                LinkedIn
              </div>
</button>
<button className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://www.facebook.com/share/1AKNWj2KhB','_blank')">
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                Facebook
              </div>
</button>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-xs font-semibold text-white/60">Primary</div>
<div className="mt-1 text-sm font-semibold text-white">Midnight + Sky/Fuchsia</div>
</div>
<div className="flex items-center gap-2">
<div className="h-4 w-4 rounded-full bg-sky-400"></div>
<div className="h-4 w-4 rounded-full bg-fuchsia-400"></div>
<div className="h-4 w-4 rounded-full bg-slate-900"></div>
</div>
</div>
<p className="mt-3 text-xs font-normal leading-relaxed text-white/60">
              Replace local image paths (C:\...) with hosted URLs for production.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6" id="service">
<div className="py-12 sm:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<div className="text-sm font-semibold text-white/80">Services</div>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">What I build</h2>
<p className="mt-3 max-w-2xl text-sm font-normal text-white/65 sm:text-base">
            End-to-end delivery with clean UI, reliable architecture, and production-focused execution.
          </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" href="#contact">
<iconify-icon icon="solar:plain-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
          Start a project
        </a>
</div>
<div className="mt-10 grid gap-4 md:grid-cols-3">
<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 text-white ring-1 ring-white/10 shadow-sm">
<iconify-icon icon="solar:smartphone-2-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Mobile Apps</h3>
<p className="mt-2 text-sm font-normal leading-relaxed text-white/65">
            Flutter apps for Android/iOS with smooth UX, clean code, and scalable structure.
          </p>
<div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
            Read More
            <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 text-white ring-1 ring-white/10 shadow-sm">
<iconify-icon icon="solar:code-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Web Apps</h3>
<p className="mt-2 text-sm font-normal leading-relaxed text-white/65">
            Responsive sites and web apps with secure integration and production-ready performance.
          </p>
<div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
            Read More
            <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 text-white ring-1 ring-white/10 shadow-sm">
<iconify-icon icon="solar:brain-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Machine Learning</h3>
<p className="mt-2 text-sm font-normal leading-relaxed text-white/65">
            ANN/CNN/LSTM: training, evaluation, optimization and practical deployment guidance.
          </p>
<div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
            Read More
            <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6" id="projects">
<div className="py-12 sm:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<div className="text-sm font-semibold text-white/80">Portfolio</div>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected projects</h2>
<p className="mt-3 max-w-2xl text-sm font-normal text-white/65 sm:text-base">
            A few projects that highlight UI, performance, and real-world features.
          </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:from-sky-300 hover:to-fuchsia-300" href="#contact">
<iconify-icon icon="solar:chat-round-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
          Discuss your idea
        </a>
</div>
<div className="mt-10 grid gap-4 md:grid-cols-3">
<article className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="aspect-[16/10] w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center justify-center overflow-hidden relative">
<img alt="2048 game project preview" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" referrerpolicy="no-referrer" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-slate-950/40"></div>
<div className="relative text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 text-white ring-1 ring-white/10 shadow-sm">
<iconify-icon icon="solar:gamepad-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="mt-3 text-xs font-semibold text-white/80">2048 Game</div>
</div>
</div>
<div className="p-6">
<div className="text-xs font-semibold text-white/80">By Ghulam Yasin <span className="font-normal text-white/40">• Mar 8, 2022</span></div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white">Mastering the 2048 Game App Development</h3>
<p className="mt-2 text-sm font-normal text-white/65">
              UX design, interaction polish, and optimization for a smooth game experience.
            </p>
<button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80" onclick="openModal('m1')">
              Case study <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</button>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="aspect-[16/10] w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center justify-center overflow-hidden relative">
<img alt="machine learning project preview" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" referrerpolicy="no-referrer" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-slate-950/40"></div>
<div className="relative text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 text-white ring-1 ring-white/10 shadow-sm">
<iconify-icon icon="solar:cpu-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="mt-3 text-xs font-semibold text-white/80">ML &amp; DL</div>
</div>
</div>
<div className="p-6">
<div className="text-xs font-semibold text-white/80">By Ghulam Yasin <span className="font-normal text-white/40">• Mar 8, 2022</span></div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white">Machine Learning &amp; Deep Learning: Step-by-Step</h3>
<p className="mt-2 text-sm font-normal text-white/65">
              From preprocessing to evaluation—practical steps for real impact and clean results.
            </p>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="aspect-[16/10] w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center justify-center overflow-hidden relative">
<img alt="dictionary web app project preview" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" referrerpolicy="no-referrer" src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-slate-950/40"></div>
<div className="relative text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 text-white ring-1 ring-white/10 shadow-sm">
<iconify-icon icon="solar:book-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="mt-3 text-xs font-semibold text-white/80">Dictionary App</div>
</div>
</div>
<div className="p-6">
<div className="text-xs font-semibold text-white/80">By Ghulam Yasin <span className="font-normal text-white/40">• Mar 8, 2022</span></div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white">Building a Powerful Dictionary Web App</h3>
<p className="mt-2 text-sm font-normal text-white/65">
              Fast search, responsive layout, and clean UX built for usability.
            </p>
<button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80" onclick="openModal('m3')">
              Case study <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</button>
</div>
</article>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6" id="about">
<div className="py-12 sm:py-16">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="text-sm font-semibold text-white/80">About</div>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Build. Ship. Improve.</h2>
<p className="mt-4 text-sm font-normal leading-relaxed text-white/65 sm:text-base">
              I build responsive websites, mobile apps for Android and iOS, and desktop applications. I also develop ML/DL solutions
              including CNN and ANN models—delivering high-performance, user-friendly, and scalable digital products.
            </p>
<div className="mt-7 flex flex-col gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:from-sky-300 hover:to-fuchsia-300" href="#" onclick="alert('Update the CV link to a hosted URL (Google Drive / GitHub / your domain) for downloads.'); return false;">
<iconify-icon icon="solar:download-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                Download CV
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" href="#contact">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                Let’s talk
              </a>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs font-semibold text-white/60">Quality</div>
<div className="mt-1 text-sm font-semibold text-white">Clean UI, secure flow</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs font-semibold text-white/60">Delivery</div>
<div className="mt-1 text-sm font-semibold text-white">Fast &amp; production-ready</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex items-center justify-between">
<div>
<div className="text-xs font-semibold text-white/60">HTML / CSS / JS</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white"><span id="p1">0</span>%</div>
</div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 ring-1 ring-white/10 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:window-frame-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
</div>
<div className="mt-4 h-2 rounded-full bg-white/10">
<div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" id="bar1" style={{width: '0%'}}></div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex items-center justify-between">
<div>
<div className="text-xs font-semibold text-white/60">ML / DL</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white"><span id="p2">0</span>%</div>
</div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 ring-1 ring-white/10 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:graph-new-up-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
</div>
<div className="mt-4 h-2 rounded-full bg-white/10">
<div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" id="bar2" style={{width: '0%'}}></div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex items-center justify-between">
<div>
<div className="text-xs font-semibold text-white/60">Python / Flutter</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white"><span id="p3">0</span>%</div>
</div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 ring-1 ring-white/10 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:programming-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
</div>
<div className="mt-4 h-2 rounded-full bg-white/10">
<div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" id="bar3" style={{width: '0%'}}></div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex items-center justify-between">
<div>
<div className="text-xs font-semibold text-white/60">App Development</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white"><span id="p4">0</span>%</div>
</div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 ring-1 ring-white/10 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:widget-3-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
</div>
<div className="mt-4 h-2 rounded-full bg-white/10">
<div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" id="bar4" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6" id="testimonial">
<div className="py-12 sm:py-16">
<div className="grid gap-6 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-4">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 ring-1 ring-white/10 text-white shadow-sm">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Testimonials</div>
<div className="text-xs font-medium text-white/60">Client feedback</div>
</div>
</div>
<p className="mt-4 text-sm font-normal leading-relaxed text-white/65">
              Clear communication, strong delivery, and clean execution.
            </p>
</div>
</div>
<div className="lg:col-span-8">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold text-white/80">Happy Clients</div>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Feedback</h2>
</div>
<div className="flex gap-2">
<button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/20" onclick="prevTestimonial()">
<iconify-icon icon="solar:arrow-left-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/20" onclick="nextTestimonial()">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
</div>
<div className="mt-6">
<div className="flex items-start gap-4">
<div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 text-white ring-1 ring-white/10 shadow-sm">
<iconify-icon icon="solar:quote-down-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-normal leading-relaxed text-white/90 sm:text-base" id="tText">
                    "Working with this team was an absolute pleasure. Their attention to detail and professionalism exceeded my expectations."
                  </p>
<div className="mt-4">
<div className="text-sm font-semibold tracking-tight text-white" id="tName">Sajid Hussain</div>
<div className="text-xs font-medium text-white/60" id="tRole">CEO, Tech Solutions</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="text-xs font-medium text-white/60">Use arrows to switch</div>
<div className="flex gap-1">
<span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" id="dot1"></span>
<span className="h-1.5 w-6 rounded-full bg-white/10" id="dot2"></span>
<span className="h-1.5 w-6 rounded-full bg-white/10" id="dot3"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6" id="contact">
<div className="py-12 sm:py-16">
<div className="text-center">
<div className="text-sm font-semibold text-white/80">Get in Touch</div>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s build something</h2>
<p className="mx-auto mt-3 max-w-2xl text-sm font-normal text-white/65 sm:text-base">
          Send your message directly to WhatsApp with a clean formatted template.
        </p>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 ring-1 ring-white/10 text-white shadow-sm">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white/60">Address</div>
<div className="mt-1 text-sm font-semibold text-white">Mailsi, Punjab, Pakistan</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 ring-1 ring-white/10 text-white shadow-sm">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white/60">Phone</div>
<div className="mt-1 text-sm font-semibold text-white">+92 312 2774795</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-fuchsia-400/20 ring-1 ring-white/10 text-white shadow-sm">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white/60">Email</div>
<div className="mt-1 text-sm font-semibold text-white">yasindev06@gmail.com</div>
</div>
</div>
<div className="pt-2">
<div className="flex flex-wrap gap-2">
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://wa.me/923122774795','_blank')">
                  WhatsApp
                </button>
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://www.linkedin.com/in/ghulam-yasin-358469396','_blank')">
                  LinkedIn
                </button>
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://www.facebook.com/share/1AKNWj2KhB','_blank')">
                  Facebook
                </button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md hover:shadow-sky-500/10">
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="text-xs font-semibold text-white/60" htmlFor="userName">Name</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder:text-white/40 outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20" id="userName" placeholder="Your name" type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-white/60" htmlFor="userEmail">E-mail</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder:text-white/40 outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20" id="userEmail" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="mt-3">
<label className="text-xs font-semibold text-white/60" htmlFor="userMobile">Mobile No.</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder:text-white/40 outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20" id="userMobile" placeholder="+92 ..." type="text"/>
</div>
<div className="mt-3">
<label className="text-xs font-semibold text-white/60" htmlFor="userMessage">Message</label>
<textarea className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder:text-white/40 outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20" id="userMessage" placeholder="Tell me about your project..." rows="5"></textarea>
</div>
<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:from-sky-300 hover:to-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-sky-400/30" onclick="sendToWhatsApp()">
<iconify-icon icon="solar:plain-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                Submit
              </button>
<p className="text-xs font-medium text-white/60">
                Tip: Keep your message short for faster replies.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
<div className="text-center sm:text-left">
<div className="text-lg font-semibold tracking-tight text-white">Ghulam Yasin</div>
<div className="mt-1 text-xs font-medium text-white/50">Copyright 2026 — All Rights Reserved</div>
</div>
<div className="flex flex-wrap items-center justify-center gap-2">
<a className="rounded-full px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white" href="#home">Home</a>
<a className="rounded-full px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white" href="#service">Services</a>
<a className="rounded-full px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white" href="#projects">Projects</a>
<a className="rounded-full px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white" href="#about">About</a>
<a className="rounded-full px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://www.facebook.com/share/1AKNWj2KhB','_blank')">
<iconify-icon icon="solar:users-group-rounded-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://wa.me/923122774795','_blank')">
<iconify-icon icon="solar:chat-round-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10" onclick="window.open('https://www.linkedin.com/in/ghulam-yasin-358469396','_blank')">
<iconify-icon icon="solar:link-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
</div>
<div className="mt-8 flex justify-center">
<button className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:from-sky-300 hover:to-fuchsia-300" id="toTop" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<iconify-icon icon="solar:arrow-up-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
          Back to top
        </button>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="m1">
<div className="absolute inset-0 bg-black/60" onclick="closeModal('m1')"></div>
<div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-semibold text-white/60">Project</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">2048 Game App</h3>
</div>
<button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm hover:bg-white/10" onclick="closeModal('m1')">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
<p className="mt-4 text-sm font-normal leading-relaxed text-white/65">
        This project demonstrates a fully functional 2048 game app with modern UX and smooth interactions.
        Reach out for collaborations via WhatsApp, LinkedIn, or Facebook.
      </p>
<div className="mt-5 flex flex-wrap gap-2">
<button className="rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-sky-500/20 hover:from-sky-300 hover:to-fuchsia-300" onclick="window.open('https://wa.me/923122774795?text=Hello%2C%20I%20want%20to%20inquire%20about%20your%202048%20Game%20App','_blank')">WhatsApp</button>
<button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm hover:bg-white/10" onclick="window.open('https://www.linkedin.com/in/ghulam-yasin-358469396','_blank')">LinkedIn</button>
<button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm hover:bg-white/10" onclick="window.open('https://www.facebook.com/share/1AKNWj2KhB','_blank')">Facebook</button>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="m3">
<div className="absolute inset-0 bg-black/60" onclick="closeModal('m3')"></div>
<div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-semibold text-white/60">Project</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">Dictionary Web App</h3>
</div>
<button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm hover:bg-white/10" onclick="closeModal('m3')">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
<p className="mt-4 text-sm font-normal leading-relaxed text-white/65">
        A responsive dictionary app with fast search and real-time word definitions. Contact for custom web apps and integrations.
      </p>
<div className="mt-5 flex flex-wrap gap-2">
<button className="rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-sky-500/20 hover:from-sky-300 hover:to-fuchsia-300" onclick="window.open('https://wa.me/923122774795?text=Hello%2C%20I%20want%20to%20inquire%20about%20your%20Dictionary%20Web%20App','_blank')">WhatsApp</button>
<button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm hover:bg-white/10" onclick="window.open('https://www.linkedin.com/in/ghulam-yasin-358469396','_blank')">LinkedIn</button>
<button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm hover:bg-white/10" onclick="window.open('https://www.facebook.com/share/1AKNWj2KhB','_blank')">Facebook</button>
</div>
</div>
</div>



    </>
  );
}
