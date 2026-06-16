import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    let currentPage = 'home';
    let isDark = false;
    let isLuxury = false;

    function showPage(page) {
      currentPage = page;
      document.querySelectorAll('.page-section').forEach(section => section.classList.add('hidden'));
      document.getElementById('page-' + page).classList.remove('hidden');
      updateNavState();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateNavState() {
      const labels = ['home', 'about', 'services', 'doctors', 'contact'];
      const navs = document.querySelectorAll('.nav-link');
      navs.forEach((link, index) => {
        if (labels[index] === currentPage) {
          link.classList.add('text-slate-950');
          link.classList.remove('text-slate-600');
          if (isDark) {
            link.classList.remove('text-slate-950');
            link.classList.add('text-white');
          }
          if (isLuxury && !isDark) {
            link.classList.remove('text-slate-950');
            link.classList.add('text-amber-100');
          }
        } else {
          link.classList.remove('text-slate-950', 'text-white', 'text-amber-100');
          link.classList.add(isDark ? 'text-slate-400' : (isLuxury ? 'text-amber-200/80' : 'text-slate-600'));
        }
      });
    }

    function toggleTheme() {
      isDark = !isDark;
      applyTheme();
    }

    function toggleLuxury() {
      isLuxury = !isLuxury;
      applyTheme();
    }

    function applyTheme() {
      const body = document.body;
      const header = document.getElementById('siteHeader');
      const footer = document.getElementById('siteFooter');
      const appSection = document.getElementById('app');
      const themeBtn = document.getElementById('themeToggle');
      const luxuryBtn = document.getElementById('luxuryToggle');
      const ctaButton = document.getElementById('ctaButton');

      body.className = 'antialiased transition-colors duration-300';
      header.className = 'sticky top-0 z-40 border-b backdrop-blur transition-colors duration-300';
      footer.className = 'border-t transition-colors duration-300';

      const allWhiteCards = document.querySelectorAll('.feature-card, .about-card, .about-stat, .service-card, .doctor-card, .contact-card');
      const allMutedBlocks = document.querySelectorAll('.service-detail');
      const allInputs = document.querySelectorAll('.contact-input');
      const allLabels = document.querySelectorAll('.contact-label');
      const allFeatureIcons = document.querySelectorAll('.feature-icon, .about-icon, .service-icon, .contact-card-icon, .about-stat-icon');
      const allFeatureTitles = document.querySelectorAll('.feature-title, .about-card-title, .service-title, .doctor-name, .contact-card-title, .about-stat-title, .contact-info-title');
      const allFeatureTexts = document.querySelectorAll('.feature-text, .about-card-text, .service-text, .doctor-text, .contact-card-text, .about-stat-text, .contact-info-text, .service-detail-text');
      const allNums = document.querySelectorAll('.about-stat-num');
      const allRoles = document.querySelectorAll('.doctor-role');
      const infoBoxes = document.querySelectorAll('.contact-info-box');

      const setClass = (el, cls) => el.className = cls;

      if (isDark && !isLuxury) {
        body.classList.add('bg-slate-950', 'text-white');
        header.classList.add('border-slate-800', 'bg-slate-950/90');
        footer.classList.add('border-slate-800', 'bg-slate-950');

        themeBtn.className = 'inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:border-slate-600 hover:bg-slate-800';
        luxuryBtn.className = 'inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800';
        ctaButton.className = 'inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200';

        setClass(document.getElementById('brandIcon'), 'flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sky-300 ring-1 ring-slate-700 transition-colors duration-300');
        setClass(document.getElementById('footerIcon'), 'flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sky-300 ring-1 ring-slate-700 transition-colors duration-300');
        document.getElementById('brandMark').className = 'text-lg font-semibold tracking-tight text-white transition-colors duration-300';
        document.getElementById('brandText').className = 'text-xs text-slate-400 transition-colors duration-300';
        document.getElementById('footerMark').className = 'text-sm font-semibold tracking-tight text-white transition-colors duration-300';
        document.getElementById('footerText').className = 'text-xs text-slate-400 transition-colors duration-300';
        document.getElementById('footerCopy').className = 'text-xs text-slate-500 transition-colors duration-300';

        document.getElementById('heroBg').className = 'absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 transition-all duration-300';
        document.getElementById('heroBadge').className = 'mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-sky-300 shadow-sm transition-colors duration-300';
        document.getElementById('heroTitle').className = 'text-4xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-5xl lg:text-6xl';
        document.getElementById('heroText').className = 'mt-5 max-w-xl text-base leading-7 text-slate-400 transition-colors duration-300 sm:text-lg';
        document.getElementById('primaryHeroBtn').className = 'inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-400';
        document.getElementById('secondaryHeroBtn').className = 'inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800';

        ['statCard1','statCard2','statCard3','heroFrame','miniCard1','miniCard2','heroBottomCard'].forEach(id => {
          document.getElementById(id).classList.remove('bg-white','border-slate-200','bg-slate-50');
          document.getElementById(id).classList.add('bg-slate-900','border-slate-800');
        });
        ['stat1','stat2','stat3','heroSubTitle','miniTitle1','miniTitle2','bottomTitle','heroLabel'].forEach(id => {
          const el = document.getElementById(id);
          if (id === 'heroLabel') {
            el.className = 'text-xs font-medium uppercase tracking-[0.18em] text-sky-300 transition-colors duration-300';
          } else {
            el.classList.remove('text-slate-950','text-slate-900','text-sky-700');
            el.classList.add('text-white');
          }
        });
        ['statText1','statText2','statText3','miniText1','miniText2','bottomText'].forEach(id => {
          document.getElementById(id).classList.remove('text-slate-500');
          document.getElementById(id).classList.add('text-slate-400');
        });

        document.getElementById('orb1').className = 'absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-sky-900/40 blur-2xl transition-colors duration-300 lg:block';
        document.getElementById('orb2').className = 'absolute -right-6 bottom-10 hidden h-24 w-24 rounded-full bg-cyan-900/40 blur-2xl transition-colors duration-300 lg:block';
        document.getElementById('heroPanel').className = 'aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 transition-all duration-300';
        document.getElementById('heroInner').className = 'flex h-full flex-col justify-between rounded-[1.25rem] border border-slate-800 bg-slate-950/80 p-6 shadow-sm backdrop-blur transition-colors duration-300';
        document.getElementById('heroIconWrap').className = 'flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sky-300 ring-1 ring-slate-700 transition-colors duration-300';
        document.getElementById('miniIcon1').className = 'flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-slate-200 transition-colors duration-300';
        document.getElementById('miniIcon2').className = 'flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-slate-200 transition-colors duration-300';
        document.getElementById('bottomArrow').className = 'flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-slate-200 ring-1 ring-slate-700 transition-colors duration-300';
        document.getElementById('homeStrip').className = 'border-y border-slate-800 bg-slate-900/50 transition-colors duration-300';

        document.getElementById('aboutEyebrow').className = 'text-sm font-medium text-sky-300 transition-colors duration-300';
        document.getElementById('aboutTitle').className = 'mt-3 text-4xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-5xl';
        document.getElementById('aboutIntro').className = 'mt-5 text-base leading-7 text-slate-400 transition-colors duration-300 sm:text-lg';
        document.getElementById('aboutSectionLabel').className = 'text-sm font-medium text-sky-300 transition-colors duration-300';
        document.getElementById('aboutSectionTitle').className = 'mt-3 text-3xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-4xl';
        document.getElementById('aboutSectionText').className = 'mt-4 text-base leading-7 text-slate-400 transition-colors duration-300';

        document.getElementById('servicesEyebrow').className = 'text-sm font-medium text-sky-300 transition-colors duration-300';
        document.getElementById('servicesTitle').className = 'mt-3 text-4xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-5xl';
        document.getElementById('servicesIntro').className = 'mt-5 text-base leading-7 text-slate-400 transition-colors duration-300 sm:text-lg';

        document.getElementById('doctorsEyebrow').className = 'text-sm font-medium text-sky-300 transition-colors duration-300';
        document.getElementById('doctorsTitle').className = 'mt-3 text-4xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-5xl';
        document.getElementById('doctorsIntro').className = 'mt-5 text-base leading-7 text-slate-400 transition-colors duration-300 sm:text-lg';

        document.getElementById('appointmentSection').className = 'bg-black transition-colors duration-300';
        document.getElementById('contactEyebrow').className = 'text-sm font-medium text-sky-300 transition-colors duration-300';
        document.getElementById('contactTitle').className = 'mt-3 text-4xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-5xl';
        document.getElementById('contactIntro').className = 'mt-4 text-base leading-7 text-slate-400 transition-colors duration-300';
        document.getElementById('contactFormWrap').className = 'rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-2xl transition-colors duration-300';
        document.getElementById('submitBtn').className = 'inline-flex w-full items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-400';

        allWhiteCards.forEach(el => {
          el.classList.remove('bg-white','border-slate-200');
          el.classList.add('bg-slate-900','border-slate-800');
        });
        allMutedBlocks.forEach(el => {
          el.classList.remove('bg-slate-50/70','border-slate-200');
          el.classList.add('bg-slate-900','border-slate-800');
        });
        allFeatureIcons.forEach(el => {
          el.classList.remove('bg-sky-50','text-sky-700','bg-slate-50','text-slate-700');
          el.classList.add('bg-slate-950','text-sky-300');
        });
        allFeatureTitles.forEach(el => {
          el.classList.remove('text-slate-900','text-slate-950','text-white');
          el.classList.add('text-white');
        });
        allFeatureTexts.forEach(el => {
          el.classList.remove('text-slate-600','text-slate-500','text-slate-400');
          el.classList.add('text-slate-400');
        });
        allNums.forEach(el => {
          el.classList.remove('text-slate-950');
          el.classList.add('text-white');
        });
        allRoles.forEach(el => {
          el.classList.remove('text-sky-700');
          el.classList.add('text-sky-300');
        });
        infoBoxes.forEach(el => {
          el.classList.remove('border-white/10','bg-white/5');
          el.classList.add('border-slate-800','bg-slate-900');
        });
        allInputs.forEach(el => {
          el.classList.remove('bg-white','border-slate-200','text-slate-900','placeholder:text-slate-400','focus:border-sky-400','focus:ring-sky-100');
          el.classList.add('bg-slate-950','border-slate-800','text-white','placeholder:text-slate-500');
        });
        allLabels.forEach(el => {
          el.classList.remove('text-slate-700');
          el.classList.add('text-slate-300');
        });
      } else if (isLuxury && !isDark) {
        body.classList.add('bg-[#0f0c09]', 'text-amber-50');
        header.classList.add('border-amber-200/10', 'bg-[#120f0c]/90');
        footer.classList.add('border-amber-200/10', 'bg-[#120f0c]');

        themeBtn.className = 'inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-transparent px-3 py-2 text-xs font-medium text-amber-100 transition hover:border-amber-200/30 hover:bg-amber-50/5';
        luxuryBtn.className = 'inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-300/10 px-3 py-2 text-xs font-medium text-amber-100 transition hover:border-amber-300/40 hover:bg-amber-300/15';
        ctaButton.className = 'inline-flex rounded-full bg-amber-200 px-4 py-2 text-sm font-medium text-[#120f0c] transition hover:bg-amber-100';

        setClass(document.getElementById('brandIcon'), 'flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-200/10 text-amber-200 ring-1 ring-amber-200/20 transition-colors duration-300');
        setClass(document.getElementById('footerIcon'), 'flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-200/10 text-amber-200 ring-1 ring-amber-200/20 transition-colors duration-300');
        document.getElementById('brandMark').className = 'text-lg font-semibold tracking-tight text-amber-50 transition-colors duration-300';
        document.getElementById('brandText').className = 'text-xs text-amber-100/60 transition-colors duration-300';
        document.getElementById('footerMark').className = 'text-sm font-semibold tracking-tight text-amber-50 transition-colors duration-300';
        document.getElementById('footerText').className = 'text-xs text-amber-100/60 transition-colors duration-300';
        document.getElementById('footerCopy').className = 'text-xs text-amber-100/50 transition-colors duration-300';

        document.getElementById('heroBg').className = 'absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.14),transparent_30%),linear-gradient(to_bottom,#1a140f,#0f0c09,#0f0c09)] transition-all duration-300';
        document.getElementById('heroBadge').className = 'mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-100/5 px-3 py-1.5 text-xs font-medium text-amber-200 shadow-sm transition-colors duration-300';
        document.getElementById('heroTitle').className = 'text-4xl font-semibold tracking-tight text-amber-50 transition-colors duration-300 sm:text-5xl lg:text-6xl';
        document.getElementById('heroText').className = 'mt-5 max-w-xl text-base leading-7 text-amber-50/70 transition-colors duration-300 sm:text-lg';
        document.getElementById('primaryHeroBtn').className = 'inline-flex items-center justify-center rounded-full bg-amber-200 px-5 py-3 text-sm font-medium text-[#120f0c] transition hover:bg-amber-100';
        document.getElementById('secondaryHeroBtn').className = 'inline-flex items-center justify-center rounded-full border border-amber-200/20 bg-transparent px-5 py-3 text-sm font-medium text-amber-100 transition hover:border-amber-200/30 hover:bg-amber-50/5';

        ['statCard1','statCard2','statCard3','heroFrame','miniCard1','miniCard2','heroBottomCard'].forEach(id => {
          document.getElementById(id).classList.remove('bg-white','border-slate-200','bg-slate-50','bg-slate-900','border-slate-800');
          document.getElementById(id).classList.add('bg-[#17120e]','border-amber-200/10');
        });

        document.getElementById('stat1').className = 'text-2xl font-semibold tracking-tight text-amber-50 transition-colors duration-300';
        document.getElementById('stat2').className = 'text-2xl font-semibold tracking-tight text-amber-50 transition-colors duration-300';
        document.getElementById('stat3').className = 'text-2xl font-semibold tracking-tight text-amber-50 transition-colors duration-300';
        document.getElementById('statText1').className = 'mt-1 text-xs text-amber-100/55 transition-colors duration-300';
        document.getElementById('statText2').className = 'mt-1 text-xs text-amber-100/55 transition-colors duration-300';
        document.getElementById('statText3').className = 'mt-1 text-xs text-amber-100/55 transition-colors duration-300';

        document.getElementById('orb1').className = 'absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-amber-300/10 blur-2xl transition-colors duration-300 lg:block';
        document.getElementById('orb2').className = 'absolute -right-6 bottom-10 hidden h-24 w-24 rounded-full bg-yellow-200/10 blur-2xl transition-colors duration-300 lg:block';
        document.getElementById('heroPanel').className = 'aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(23,18,14,1),rgba(15,12,9,1))] p-6 transition-all duration-300';
        document.getElementById('heroInner').className = 'flex h-full flex-col justify-between rounded-[1.25rem] border border-amber-200/10 bg-[#120f0c]/80 p-6 shadow-sm backdrop-blur transition-colors duration-300';
        document.getElementById('heroLabel').className = 'text-xs font-medium uppercase tracking-[0.18em] text-amber-200 transition-colors duration-300';
        document.getElementById('heroSubTitle').className = 'mt-2 text-2xl font-semibold tracking-tight text-amber-50 transition-colors duration-300';
        document.getElementById('heroIconWrap').className = 'flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-200/10 text-amber-200 ring-1 ring-amber-200/20 transition-colors duration-300';
        document.getElementById('miniIcon1').className = 'flex h-10 w-10 items-center justify-center rounded-xl bg-black/20 text-amber-100 transition-colors duration-300';
        document.getElementById('miniIcon2').className = 'flex h-10 w-10 items-center justify-center rounded-xl bg-black/20 text-amber-100 transition-colors duration-300';
        document.getElementById('miniTitle1').className = 'text-sm font-medium text-amber-50 transition-colors duration-300';
        document.getElementById('miniTitle2').className = 'text-sm font-medium text-amber-50 transition-colors duration-300';
        document.getElementById('miniText1').className = 'text-xs text-amber-100/55 transition-colors duration-300';
        document.getElementById('miniText2').className = 'text-xs text-amber-100/55 transition-colors duration-300';
        document.getElementById('bottomTitle').className = 'text-sm font-medium text-amber-50 transition-colors duration-300';
        document.getElementById('bottomText').className = 'mt-1 text-xs text-amber-100/55 transition-colors duration-300';
        document.getElementById('bottomArrow').className = 'flex h-11 w-11 items-center justify-center rounded-full bg-amber-100/10 text-amber-100 ring-1 ring-amber-200/20 transition-colors duration-300';

        document.getElementById('homeStrip').className = 'border-y border-amber-200/10 bg-[#15110d] transition-colors duration-300';

        document.getElementById('aboutEyebrow').className = 'text-sm font-medium text-amber-200 transition-colors duration-300';
        document.getElementById('aboutTitle').className = 'mt-3 text-4xl font-semibold tracking-tight text-amber-50 transition-colors duration-300 sm:text-5xl';
        document.getElementById('aboutIntro').className = 'mt-5 text-base leading-7 text-amber-50/70 transition-colors duration-300 sm:text-lg';
        document.getElementById('aboutSectionLabel').className = 'text-sm font-medium text-amber-200 transition-colors duration-300';
        document.getElementById('aboutSectionTitle').className = 'mt-3 text-3xl font-semibold tracking-tight text-amber-50 transition-colors duration-300 sm:text-4xl';
        document.getElementById('aboutSectionText').className = 'mt-4 text-base leading-7 text-amber-50/70 transition-colors duration-300';

        document.getElementById('servicesEyebrow').className = 'text-sm font-medium text-amber-200 transition-colors duration-300';
        document.getElementById('servicesTitle').className = 'mt-3 text-4xl font-semibold tracking-tight text-amber-50 transition-colors duration-300 sm:text-5xl';
        document.getElementById('servicesIntro').className = 'mt-5 text-base leading-7 text-amber-50/70 transition-colors duration-300 sm:text-lg';

        document.getElementById('doctorsEyebrow').className = 'text-sm font-medium text-amber-200 transition-colors duration-300';
        document.getElementById('doctorsTitle').className = 'mt-3 text-4xl font-semibold tracking-tight text-amber-50 transition-colors duration-300 sm:text-5xl';
        document.getElementById('doctorsIntro').className = 'mt-5 text-base leading-7 text-amber-50/70 transition-colors duration-300 sm:text-lg';

        document.getElementById('appointmentSection').className = 'bg-[#0c0a08] transition-colors duration-300';
        document.getElementById('contactEyebrow').className = 'text-sm font-medium text-amber-200 transition-colors duration-300';
        document.getElementById('contactTitle').className = 'mt-3 text-4xl font-semibold tracking-tight text-amber-50 transition-colors duration-300 sm:text-5xl';
        document.getElementById('contactIntro').className = 'mt-4 text-base leading-7 text-amber-50/65 transition-colors duration-300';
        document.getElementById('contactFormWrap').className = 'rounded-[2rem] border border-amber-200/10 bg-[#17120e] p-6 shadow-2xl transition-colors duration-300';
        document.getElementById('submitBtn').className = 'inline-flex w-full items-center justify-center rounded-2xl bg-amber-200 px-5 py-3 text-sm font-medium text-[#120f0c] transition hover:bg-amber-100';

        allWhiteCards.forEach(el => {
          el.classList.remove('bg-white','border-slate-200','bg-slate-900','border-slate-800');
          el.classList.add('bg-[#17120e]','border-amber-200/10');
        });
        allMutedBlocks.forEach(el => {
          el.classList.remove('bg-slate-50/70','border-slate-200','bg-slate-900','border-slate-800');
          el.classList.add('bg-[#15110d]','border-amber-200/10');
        });
        allFeatureIcons.forEach(el => {
          el.classList.remove('bg-sky-50','text-sky-700','bg-slate-50','text-slate-700','bg-slate-950','text-sky-300');
          el.classList.add('bg-amber-200/10','text-amber-200');
        });
        allFeatureTitles.forEach(el => {
          el.classList.remove('text-slate-900','text-slate-950','text-white');
          el.classList.add('text-amber-50');
        });
        allFeatureTexts.forEach(el => {
          el.classList.remove('text-slate-600','text-slate-500','text-slate-400');
          el.classList.add('text-amber-50/60');
        });
        allNums.forEach(el => {
          el.classList.remove('text-slate-950','text-white');
          el.classList.add('text-amber-50');
        });
        allRoles.forEach(el => {
          el.classList.remove('text-sky-700','text-sky-300');
          el.classList.add('text-amber-200');
        });
        infoBoxes.forEach(el => {
          el.classList.remove('border-white/10','bg-white/5','border-slate-800','bg-slate-900');
          el.classList.add('border-amber-200/10','bg-amber-100/5');
        });
        allInputs.forEach(el => {
          el.classList.remove('bg-white','border-slate-200','text-slate-900','placeholder:text-slate-400','bg-slate-950','border-slate-800','text-white','placeholder:text-slate-500');
          el.classList.add('bg-[#0f0c09]','border-amber-200/10','text-amber-50','placeholder:text-amber-50/35');
        });
        allLabels.forEach(el => {
          el.classList.remove('text-slate-700','text-slate-300');
          el.classList.add('text-amber-100/80');
        });
      } else {
        body.classList.add('bg-white', 'text-slate-900');
        header.classList.add('border-slate-200/80', 'bg-white/90');
        footer.classList.add('border-slate-200', 'bg-white');

        themeBtn.className = 'inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50';
        luxuryBtn.className = 'inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50';
        ctaButton.className = 'inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800';

        location.reload();
        return;
      }

      updateNavState();
    }

    showPage('home');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen" id="app">
<header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur transition-colors duration-300" id="siteHeader">
<div className="flex lg:px-8 max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-colors duration-300" id="brandIcon">
<iconify-icon icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="">
<div className="transition-colors duration-300 text-xs text-slate-500" id="brandText">Asthetic Dental Hospital</div>
</div>
</div>
<nav className="hidden items-center gap-8 md:flex">
<button className="text-sm font-medium transition hover:text-slate-950 nav-link text-slate-950" onclick="showPage('home')">Home</button>
<button className="text-sm font-medium text-slate-600 transition hover:text-slate-950 nav-link" onclick="showPage('about')">About</button>
<button className="text-sm font-medium text-slate-600 transition hover:text-slate-950 nav-link" onclick="showPage('services')">Services</button>
<button className="text-sm font-medium text-slate-600 transition hover:text-slate-950 nav-link" onclick="showPage('doctors')">Doctors</button>
<button className="text-sm font-medium text-slate-600 transition hover:text-slate-950 nav-link" onclick="showPage('contact')">Contact</button>
</nav>
<div className="flex items-center gap-3">
<div className="hidden items-center gap-2 sm:flex">
<button className="inline-flex gap-2 transition hover:border-slate-300 hover:bg-slate-50 text-xs font-medium text-slate-700 border-slate-200 border rounded-full pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center" id="themeToggle" onclick="toggleTheme()">
<iconify-icon icon="solar:moon-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Dark
            </button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50" id="luxuryToggle" onclick="toggleLuxury()">
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Premium
            </button>
</div>
<a className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800" href="#appointment" id="ctaButton" onclick="showPage('contact')">Book Appointment</a>
</div>
</div>
</header>
<main className="">
<section className="page-section" id="page-home">
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-white to-white transition-all duration-300" id="heroBg"></div>
<div className="grid lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative gap-x-12 gap-y-12">
<div className="max-w-2xl">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-3 py-1.5 text-xs font-medium text-sky-700 shadow-sm transition-colors duration-300" id="heroBadge">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                Trusted dental care for families and advanced procedures
              </div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl lg:text-6xl" id="heroTitle">
                Healthy smiles begin with expert hospital care
              </h1>
<p className="mt-5 max-w-xl text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg" id="heroText">
                Comprehensive dental treatments, modern diagnostics, orthodontics, implants, and emergency care delivered by experienced specialists in a calm, patient-first environment.
              </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-700" id="primaryHeroBtn" onclick="showPage('contact')">
                  Schedule a Visit
                </button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50" id="secondaryHeroBtn" onclick="showPage('services')">
                  Explore Treatments
                </button>
</div>
<div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300" id="statCard1">
<div className="text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300" id="stat1">25+</div>
<div className="mt-1 text-xs text-slate-500 transition-colors duration-300" id="statText1">Years of dental excellence</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300" id="statCard2">
<div className="text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300" id="stat2">15k+</div>
<div className="mt-1 text-xs text-slate-500 transition-colors duration-300" id="statText2">Patients treated with care</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300" id="statCard3">
<div className="text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300" id="stat3">24/7</div>
<div className="mt-1 text-xs text-slate-500 transition-colors duration-300" id="statText3">Emergency support available</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-sky-100 blur-2xl transition-colors duration-300 lg:block" id="orb1"></div>
<div className="absolute -right-6 bottom-10 hidden h-24 w-24 rounded-full bg-cyan-100 blur-2xl transition-colors duration-300 lg:block" id="orb2"></div>
<div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-colors duration-300" id="heroFrame">
<div className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-sky-100 via-white to-cyan-50 p-6 transition-all duration-300" id="heroPanel">
<div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur transition-colors duration-300" id="heroInner">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-700 transition-colors duration-300" id="heroLabel">Patient Care</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300" id="heroSubTitle">Comfort-led treatment rooms</h2>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-colors duration-300" id="heroIconWrap">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300" id="miniCard1">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-colors duration-300" id="miniIcon1">
<iconify-icon icon="solar:microscope-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-slate-900 transition-colors duration-300" id="miniTitle1">Digital Diagnostics</div>
<div className="text-xs text-slate-500 transition-colors duration-300" id="miniText1">Precise clinical assessment</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300" id="miniCard2">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-colors duration-300" id="miniIcon2">
<iconify-icon icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 transition-colors duration-300" id="miniTitle2">Gentle Recovery</div>
<div className="text-xs text-slate-500 transition-colors duration-300" id="miniText2">Comfort-first support</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-300" id="heroBottomCard">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-medium text-slate-900 transition-colors duration-300" id="bottomTitle">Same-day consultation</div>
<div className="mt-1 text-xs text-slate-500 transition-colors duration-300" id="bottomText">Available for urgent dental issues and walk-ins</div>
</div>
<div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200 transition-colors duration-300" id="bottomArrow">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-slate-200 bg-slate-50/70 transition-colors duration-300" id="homeStrip">
<div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
<div className="feature-card flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition-colors duration-300">
<div className="feature-icon flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="21"></iconify-icon>
</div>
<div>
<div className="feature-title text-sm font-medium text-slate-900 transition-colors duration-300">Extended Hours</div>
<div className="feature-text text-xs text-slate-500 transition-colors duration-300">Mon–Sun support</div>
</div>
</div>
<div className="feature-card flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition-colors duration-300">
<div className="feature-icon flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:ambulance-linear" style={{strokeWidth: '1.5'}} width="21"></iconify-icon>
</div>
<div>
<div className="feature-title text-sm font-medium text-slate-900 transition-colors duration-300">Emergency Dental Care</div>
<div className="feature-text text-xs text-slate-500 transition-colors duration-300">Fast urgent treatment</div>
</div>
</div>
<div className="feature-card flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition-colors duration-300">
<div className="feature-icon flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:user-heart-linear" style={{strokeWidth: '1.5'}} width="21"></iconify-icon>
</div>
<div>
<div className="feature-title text-sm font-medium text-slate-900 transition-colors duration-300">Family Dentistry</div>
<div className="feature-text text-xs text-slate-500 transition-colors duration-300">Children to seniors</div>
</div>
</div>
<div className="feature-card flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition-colors duration-300">
<div className="feature-icon flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="21"></iconify-icon>
</div>
<div>
<div className="feature-title text-sm font-medium text-slate-900 transition-colors duration-300">Certified Specialists</div>
<div className="feature-text text-xs text-slate-500 transition-colors duration-300">Advanced clinical team</div>
</div>
</div>
</div>
</section>
</section>
<section className="page-section hidden" id="page-about">
<section className="bg-slate-50/70 transition-colors duration-300">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="max-w-3xl">
<div className="text-sm font-medium text-sky-700 transition-colors duration-300" id="aboutEyebrow">About</div>
<h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl" id="aboutTitle">A patient-first dental hospital built on trust and precision</h1>
<p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg" id="aboutIntro">
                We deliver advanced dental care with a strong focus on clarity, comfort, hygiene, and long-term outcomes. Our multidisciplinary team supports every stage of treatment in a refined clinical setting.
              </p>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div>
<div className="text-sm font-medium text-sky-700 transition-colors duration-300" id="aboutSectionLabel">Our philosophy</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 sm:text-4xl" id="aboutSectionTitle">Clinical excellence with a calm, reassuring experience</h2>
<p className="mt-4 text-base leading-7 text-slate-600 transition-colors duration-300" id="aboutSectionText">
                Every treatment plan is designed around the individual. We pair modern diagnostics with careful consultation, so patients understand their options and feel supported from first visit to follow-up.
              </p>
<div className="mt-8 space-y-4">
<div className="about-card flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300">
<div className="about-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-colors duration-300">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="21"></iconify-icon>
</div>
<div>
<div className="about-card-title text-sm font-medium text-slate-900 transition-colors duration-300">Transparent treatment planning</div>
<div className="about-card-text mt-1 text-xs leading-5 text-slate-500 transition-colors duration-300">Clear recommendations, practical timelines, and informed care decisions.</div>
</div>
</div>
<div className="about-card flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300">
<div className="about-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-colors duration-300">
<iconify-icon icon="solar:syringe-linear" style={{strokeWidth: '1.5'}} width="21"></iconify-icon>
</div>
<div>
<div className="about-card-title text-sm font-medium text-slate-900 transition-colors duration-300">Strict hygiene and safety protocols</div>
<div className="about-card-text mt-1 text-xs leading-5 text-slate-500 transition-colors duration-300">Advanced sterilization and carefully managed patient safety standards.</div>
</div>
</div>
<div className="about-card flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300">
<div className="about-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-colors duration-300">
<iconify-icon icon="solar:stars-line-duotone" style={{strokeWidth: '1.5'}} width="21"></iconify-icon>
</div>
<div>
<div className="about-card-title text-sm font-medium text-slate-900 transition-colors duration-300">Comfort-led environment</div>
<div className="about-card-text mt-1 text-xs leading-5 text-slate-500 transition-colors duration-300">A refined and supportive space designed to reduce stress and improve care confidence.</div>
</div>
</div>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div className="about-stat rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300">
<div className="about-stat-num text-3xl font-semibold tracking-tight text-slate-950 transition-colors duration-300">98%</div>
<div className="about-stat-text mt-2 text-sm text-slate-600 transition-colors duration-300">Patient satisfaction measured through follow-up care and service feedback.</div>
</div>
<div className="about-stat rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300">
<div className="about-stat-num text-3xl font-semibold tracking-tight text-slate-950 transition-colors duration-300">40+</div>
<div className="about-stat-text mt-2 text-sm text-slate-600 transition-colors duration-300">Specialized procedures supported by experienced clinicians and diagnostic tools.</div>
</div>
<div className="about-stat rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:col-span-2">
<div className="flex items-start justify-between gap-4">
<div>
<div className="about-stat-title text-sm font-medium text-slate-900 transition-colors duration-300">Always-on patient assistance</div>
<div className="about-stat-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">Our care desk helps patients navigate urgent concerns, treatment questions, and scheduling support with speed and clarity.</div>
</div>
<div className="about-stat-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:phone-calling-rounded-linear" style={{strokeWidth: '1.5'}} width="23"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
</section>
<section className="page-section hidden" id="page-services">
<section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="max-w-3xl">
<div className="text-sm font-medium text-sky-700 transition-colors duration-300" id="servicesEyebrow">Services</div>
<h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl" id="servicesTitle">Complete dental solutions under one roof</h1>
<p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg" id="servicesIntro">
              Preventive, restorative, cosmetic, surgical, and orthodontic care delivered through coordinated treatment plans and modern clinical systems.
            </p>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
<div className="service-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
<div className="service-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:tooth-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="service-title mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">General Dentistry</h3>
<p className="service-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">Routine exams, cleanings, fillings, preventive plans, and oral health monitoring for all ages.</p>
</div>
<div className="service-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
<div className="service-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:smile-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="service-title mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Cosmetic Care</h3>
<p className="service-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">Whitening, veneers, smile refinement, and aesthetic treatments with a balanced natural finish.</p>
</div>
<div className="service-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
<div className="service-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="service-title mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Implants &amp; Surgery</h3>
<p className="service-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">Implants, surgical extraction, bone support procedures, and advanced restorative rehabilitation.</p>
</div>
<div className="service-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
<div className="service-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="service-title mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Orthodontics</h3>
<p className="service-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">Braces and clear aligner treatment plans focused on bite function, symmetry, and comfort.</p>
</div>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-2">
<div className="service-detail rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition-colors duration-300">
<div className="service-detail-title text-lg font-medium text-slate-950 transition-colors duration-300">Emergency dental care</div>
<p className="service-detail-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">Urgent support for pain, swelling, trauma, broken teeth, and time-sensitive oral issues requiring prompt evaluation.</p>
</div>
<div className="service-detail rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition-colors duration-300">
<div className="service-detail-title text-lg font-medium text-slate-950 transition-colors duration-300">Pediatric dentistry</div>
<p className="service-detail-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">Gentle care for children with preventive education, growth monitoring, and age-appropriate treatment planning.</p>
</div>
</div>
</section>
</section>
<section className="page-section hidden" id="page-doctors">
<section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="max-w-3xl">
<div className="text-sm font-medium text-sky-700 transition-colors duration-300" id="doctorsEyebrow">Doctors</div>
<h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl" id="doctorsTitle">Meet our experienced dental specialists</h1>
<p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg" id="doctorsIntro">
              A collaborative team across restorative dentistry, surgery, orthodontics, and family care, working together for precise and lasting outcomes.
            </p>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-3">
<div className="doctor-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300">
<div className="doctor-avatar flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors duration-300">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="doctor-name mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Dr. Elena Moore</h3>
<p className="doctor-role mt-1 text-sm text-sky-700 transition-colors duration-300">Restorative Dentistry</p>
<p className="doctor-text mt-3 text-sm leading-6 text-slate-600 transition-colors duration-300">Focused on crowns, bridges, fillings, and long-term oral rehabilitation with highly personalized planning.</p>
</div>
<div className="doctor-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300">
<div className="doctor-avatar flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors duration-300">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="doctor-name mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Dr. Liam Carter</h3>
<p className="doctor-role mt-1 text-sm text-sky-700 transition-colors duration-300">Oral &amp; Implant Surgery</p>
<p className="doctor-text mt-3 text-sm leading-6 text-slate-600 transition-colors duration-300">Advanced implant placement, surgical extractions, and complex restorative procedures with precision-led care.</p>
</div>
<div className="doctor-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300">
<div className="doctor-avatar flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors duration-300">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="doctor-name mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Dr. Ava Bennett</h3>
<p className="doctor-role mt-1 text-sm text-sky-700 transition-colors duration-300">Orthodontics &amp; Pediatric Care</p>
<p className="doctor-text mt-3 text-sm leading-6 text-slate-600 transition-colors duration-300">Braces, aligners, and supportive treatment plans tailored for children, teens, and adult patients.</p>
</div>
</div>
</section>
</section>
<section className="page-section hidden" id="page-contact">
<section className="bg-slate-950 transition-colors duration-300" id="appointmentSection">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
<div className="max-w-2xl">
<div className="text-sm font-medium text-sky-300 transition-colors duration-300" id="contactEyebrow">Contact</div>
<h1 className="mt-3 text-4xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-5xl" id="contactTitle">Book your dental consultation today</h1>
<p className="mt-4 text-base leading-7 text-slate-300 transition-colors duration-300" id="contactIntro">
                Share your concern and preferred time. Our team will contact you to confirm your visit and help you prepare for your consultation.
              </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="contact-info-box rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300">
<div className="contact-info-title text-sm font-medium text-white transition-colors duration-300">New patient visits</div>
<div className="contact-info-text mt-1 text-xs text-slate-400 transition-colors duration-300">Initial assessment and treatment planning</div>
</div>
<div className="contact-info-box rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300">
<div className="contact-info-title text-sm font-medium text-white transition-colors duration-300">Emergency evaluation</div>
<div className="contact-info-text mt-1 text-xs text-slate-400 transition-colors duration-300">Same-day slots when available</div>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl transition-colors duration-300" id="contactFormWrap">
<form className="space-y-4">
<div>
<label className="contact-label mb-2 block text-xs font-medium text-slate-700 transition-colors duration-300">Full name</label>
<input className="contact-input w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100" placeholder="Enter your name" type="text"/>
</div>
<div>
<label className="contact-label mb-2 block text-xs font-medium text-slate-700 transition-colors duration-300">Phone number</label>
<input className="contact-input w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100" placeholder="Enter your phone" type="tel"/>
</div>
<div>
<label className="contact-label mb-2 block text-xs font-medium text-slate-700 transition-colors duration-300">Email address</label>
<input className="contact-input w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100" placeholder="Enter your email" type="email"/>
</div>
<div>
<label className="contact-label mb-2 block text-xs font-medium text-slate-700 transition-colors duration-300">Treatment needed</label>
<div className="relative">
<select className="contact-input w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100">
<option>General consultation</option>
<option>Teeth cleaning</option>
<option>Dental implants</option>
<option>Orthodontics</option>
<option>Emergency care</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="contact-label mb-2 block text-xs font-medium text-slate-700 transition-colors duration-300">Message</label>
<textarea className="contact-input w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100" placeholder="Tell us about your concern" rows="4"></textarea>
</div>
<button className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-700" id="submitBtn" type="submit">
                  Submit Request
                </button>
</form>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
<div className="grid gap-6 lg:grid-cols-3">
<div className="contact-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300">
<div className="contact-card-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="23"></iconify-icon>
</div>
<h3 className="contact-card-title mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Visit us</h3>
<p className="contact-card-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">128 Wellness Avenue, Central District, City Center</p>
</div>
<div className="contact-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300">
<div className="contact-card-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:phone-calling-rounded-linear" style={{strokeWidth: '1.5'}} width="23"></iconify-icon>
</div>
<h3 className="contact-card-title mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Call us</h3>
<p className="contact-card-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">+1 800 234 8890<br/>Emergency line available all day</p>
</div>
<div className="contact-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300">
<div className="contact-card-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="23"></iconify-icon>
</div>
<h3 className="contact-card-title mt-5 text-lg font-medium text-slate-950 transition-colors duration-300">Email us</h3>
<p className="contact-card-text mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300">care@clarisdentalhospital.com</p>
</div>
</div>
</section>
</section>
</main>
<footer className="border-t border-slate-200 bg-white transition-colors duration-300" id="siteFooter">
<div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-colors duration-300" id="footerIcon">
<iconify-icon icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-950 transition-colors duration-300" id="footerMark">CD</div>
<div className="text-xs text-slate-500 transition-colors duration-300" id="footerText">Claris Dental Hospital</div>
</div>
</div>
<div className="text-xs text-slate-500 transition-colors duration-300" id="footerCopy">© 2026 Claris Dental Hospital. All rights reserved.</div>
</div>
</footer>
</div>


    </>
  );
}
