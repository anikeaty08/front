import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import UnicornScene from 'unicornstudio-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dribbble, Send, Mail, Icon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   BlurText – word-by-word blur-in animation, duration 1.0s
   ============================================================ */
function BlurText({
  children,
  className,
  style,
  as: Tag = 'span',
  animateOnMount = false,
  stagger = 0.08,
  initialDelay = 0,
  href,
  target,
  rel,
  onMouseEnter,
  onMouseLeave,
}) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll('.bw');
    if (!words.length) return;

    hasAnimated.current = false;
    gsap.set(words, { opacity: 0, filter: 'blur(10px)', display: 'inline-block' });

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      gsap.to(words, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.0,
        stagger,
        delay: initialDelay,
        ease: 'power2.out',
      });
    };

    if (animateOnMount) {
      const t = setTimeout(animate, 80);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animateOnMount, stagger, initialDelay]);

  const renderContent = () => {
    if (typeof children !== 'string') return children;
    return children.trim().split(/(\s+)/).map((part, i) =>
      /\s+/.test(part) ? (
        part
      ) : (
        <span key={i} className="bw" style={{ display: 'inline-block' }}>
          {part}
        </span>
      )
    );
  };

  const extraProps = {};
  if (href !== undefined) extraProps.href = href;
  if (target !== undefined) extraProps.target = target;
  if (rel !== undefined) extraProps.rel = rel;
  if (onMouseEnter !== undefined) extraProps.onMouseEnter = onMouseEnter;
  if (onMouseLeave !== undefined) extraProps.onMouseLeave = onMouseLeave;

  return (
    <Tag ref={ref} className={className} style={style} {...extraProps}>
      {renderContent()}
    </Tag>
  );
}

/* helper: split text string into .bw word spans (for inline use) */
function splitWords(text) {
  return text.trim().split(/(\s+)/).map((part, i) =>
    /\s+/.test(part) ? (
      part
    ) : (
      <span key={i} className="bw" style={{ display: 'inline-block' }}>
        {part}
      </span>
    )
  );
}

/* ============================================================
   Font Loader
   ============================================================ */
function FontLoader() {
  useEffect(() => {
    if (document.getElementById('portfolio-fonts')) return;
    const link = document.createElement('link');
    link.id = 'portfolio-fonts';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap';
    document.head.appendChild(link);
  }, []);
  return null;
}

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const CORMORANT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

/* ============================================================
   FloatingSidebar
   ============================================================ */
function FloatingSidebar({ hidden }) {
  return (
    <aside
      className="fixed left-[24px] md:left-[32px] z-[100] flex flex-col items-center gap-[20px] rounded-[999px] py-[20px] px-[12px] backdrop-blur-[32px] pointer-events-auto"
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(255, 255, 255, 0.76)',
        border: '1px solid #EBEBEB',
        boxShadow: '0 0 72px rgba(213, 213, 213, 0.24)',
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
        opacity: hidden ? 0 : 1,
        visibility: hidden ? 'hidden' : 'visible',
        pointerEvents: hidden ? 'none' : 'auto',
      }}
    >
      <a href="#" className="w-[36px] h-[36px] flex items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-80" aria-label="Home">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/31473890-25f2-4535-a847-766fca01a65e/c4999910-b9e8-4b00-8aab-7cf48de65395-logo.svg?v=1776309701358"
          alt="Oevra Logo"
          className="w-[24px] h-[24px] rounded-full object-cover"
        />
      </a>
      <div className="w-[24px] h-[1px] bg-[#EBEBEB]"></div>
      <div className="flex flex-col gap-[16px] items-center">
        {[
          { id: 'behance', Icon: Dribbble, href: '#' },
          { id: 'telegram', Icon: Send, href: '#' },
          { id: 'email', Icon: Mail, href: 'mailto:hello@oevra.design' },
        ].map(({ id, Icon, href }) => (
          <a key={id} href={href}
            className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all duration-200 ease-out hover:bg-[rgba(0,0,0,0.06)] group"
            aria-label={id}>
            <Icon size={24} strokeWidth={1.5} className="text-[#737E85] group-hover:text-[#111111] transition-colors duration-200 ease-out" />
          </a>
        ))}
      </div>
    </aside>
  );
}

/* ============================================================
   Background
   ============================================================ */
function Background() {
  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen z-10"
        style={{ maskImage: 'linear-gradient(transparent, black 0%, black 100%, transparent)' }}>
        <UnicornScene projectId="SrJYfPcDUR4StI3maLL6" className="w-full h-full" />
      </div>
      <div className="aura-background-component absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <UnicornScene projectId="SrJYfPcDUR4StI3maLL6" className="w-full h-full" />
      </div>
    </>
  );
}

/* ============================================================
   HeroBottomRight
   ============================================================ */
function HeroBottomRight() {
  return (
    <div className="flex gap-[60px] absolute right-[60px] bottom-[40px] items-end z-20">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <div style={{ width: '1px', height: '48px', background: 'rgba(17,17,17,0.2)', flexShrink: 0, marginTop: '2px' }} />
        <BlurText
          as="p"
          animateOnMount
          initialDelay={0.5}
          className="text-[13px] leading-[1.6] font-[300] text-left opacity-[0.85] max-w-[280px] pb-1"
          style={{ fontFamily: INTER, color: '#111111' }}
        >
          портфолио UX/UI дизайнера проектирую интерфейсы, которые понятны с первого взгляда
        </BlurText>
      </div>
      <div className="cursor-pointer whitespace-nowrap pb-1 flex items-center">
        <button className="group relative inline-flex gap-2 min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-white tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">
          <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md flex items-center gap-[7px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
            Связаться
          </span>
          <span className="absolute inset-0 z-10 flex items-center justify-center gap-[7px] transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
            Связаться
          </span>
          <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
          <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function Hero() {
  return (
    <div className="flex flex-col overflow-hidden text-center bg-[#0a0a0f] w-full h-screen relative items-center justify-center"
      style={{ fontFamily: INTER }}>
      <Background />
      <nav className="flex bg-transparent w-full z-50 pt-8 pr-12 pb-8 pl-12 absolute top-0 left-0 items-center justify-between"></nav>
      <div className="flex flex-col z-50 w-auto text-center max-w-max"
        style={{ fontSize: 'clamp(60px, 7vw, 108px)', lineHeight: 1.1, fontWeight: 200, color: '#111111' }}>
        <div className="w-full relative space-y-1">
          <BlurText as="div" animateOnMount initialDelay={0.1}
            style={{ fontSize: '4.5rem', fontFamily: INTER, fontWeight: 300, color: 'rgba(17,17,17,0.9)' }}>
            дизайн, где всё на месте
          </BlurText>
          <div className="flex gap-x-4 gap-y-4 items-center justify-center">
            <BlurText as="div" animateOnMount initialDelay={0.25}
              style={{ fontSize: '4.5rem', fontFamily: INTER, fontWeight: 300, color: 'rgba(17,17,17,0.9)' }}>
              логично и просто
            </BlurText>
            <div className="opacity-30 w-[100px] h-[1px] mt-2 mr-4 ml-4 bg-black/50"></div>
          </div>
          <div className="flex gap-x-8 items-center justify-center">
            <div className="opacity-30 w-[100px] h-[1px] mt-2 bg-black/50"></div>
            <BlurText as="div" animateOnMount initialDelay={0.4}
              style={{ fontSize: '4.5rem', fontFamily: INTER, fontWeight: 300, color: 'rgba(17,17,17,0.9)' }}>
              с первого взгляда
            </BlurText>
          </div>
        </div>
      </div>
      <HeroBottomRight />
    </div>
  );
}

/* ============================================================
   BehanceIcon
   ============================================================ */
function BehanceIcon({ size = 38 }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 38 38">
      <path d="M25.5387 17.3375C23.3938 17.3375 23.0969 19.475 23.0969 19.475H27.6539C27.6539 19.475 27.6836 17.3375 25.5387 17.3375ZM15.2 19.475H11.1625V23.1859H14.9996C15.5785 23.1711 16.6621 23.0078 16.6621 21.3824C16.6621 19.4527 15.2 19.475 15.2 19.475Z" fill="white" />
      <path d="M19 2.375C9.81914 2.375 2.375 9.81914 2.375 19C2.375 28.1809 9.81914 35.625 19 35.625C28.1809 35.625 35.625 28.1809 35.625 19C35.625 9.81914 28.1809 2.375 19 2.375ZM22.5031 12.5875H28.2254V14.2945H22.5031V12.5875ZM19.6086 21.5531C19.6086 25.7836 15.2 25.65 15.2 25.65H7.98594V11.7711H15.2C17.3969 11.7711 19.1262 12.9809 19.1262 15.4672C19.1262 17.9535 17.0109 18.1094 17.0109 18.1094C19.8016 18.1094 19.6086 21.5531 19.6086 21.5531ZM30.3109 21.323H23.1191C23.1191 23.8984 25.5609 23.7352 25.5609 23.7352C27.8691 23.7352 27.7875 22.2434 27.7875 22.2434H30.2293C30.2293 26.2066 25.4793 25.932 25.4793 25.932C19.7867 25.932 20.1504 20.6254 20.1504 20.6254C20.1504 20.6254 20.143 15.2965 25.4793 15.2965C31.0977 15.3039 30.3109 21.323 30.3109 21.323Z" fill="white" />
      <path d="M16.1797 15.6824C16.1797 14.2426 15.2 14.2426 15.2 14.2426H11.1625V17.3375H14.9477C15.6008 17.3375 16.1797 17.1223 16.1797 15.6824Z" fill="white" />
    </svg>
  );
}

/* ============================================================
   Cards Data & Slideshow Constants
   ============================================================ */
const cardsData = [
  { id: 1, src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80', init: { x: '-38vw', y: '-28vh', rotation: -25 }, aspect: '1/1', title: 'Проект 01', tags: ['UX/UI', 'WEB'], subtitle: 'Современный интерфейс для цифрового продукта', behanceUrl: '#' },
  { id: 2, src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80', init: { x: '0vw', y: '-34vh', rotation: 10 }, aspect: '3/2', title: 'Проект 02', tags: ['UX/UI', 'MOTION'], subtitle: 'Анимированный лендинг с нестандартной навигацией', behanceUrl: '#' },
  { id: 3, src: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&q=80', init: { x: '38vw', y: '-26vh', rotation: 25 }, aspect: '2/3', title: 'Проект 03', tags: ['BRANDING', 'WEB'], subtitle: 'Визуальная идентичность и веб-присутствие бренда', behanceUrl: '#' },
  { id: 4, src: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1200&q=80', init: { x: '-42vw', y: '0vh', rotation: -15 }, aspect: '2/3', title: 'Проект 04', tags: ['UX/UI', 'MOBILE'], subtitle: 'Мобильное приложение с фокусом на UX', behanceUrl: '#' },
  { id: 5, src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80', init: { x: '42vw', y: '8vh', rotation: 35 }, aspect: '1/1', title: 'Проект 05', tags: ['WEB', 'BRANDING'], subtitle: 'Полный редизайн корпоративного сайта', behanceUrl: '#' },
  { id: 6, src: 'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=1200&q=80', init: { x: '-35vw', y: '30vh', rotation: -30 }, aspect: '3/2', title: 'Проект 06', tags: ['UX/UI', 'WEB'], subtitle: 'Dashboard для аналитики данных', behanceUrl: '#' },
  { id: 7, src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80', init: { x: '0vw', y: '34vh', rotation: -5 }, aspect: '2/3', title: 'Проект 07', tags: ['MOTION', 'WEB'], subtitle: 'Интерактивная презентация с анимацией', behanceUrl: '#' },
  { id: 8, src: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1200&q=80', init: { x: '35vw', y: '30vh', rotation: 20 }, aspect: '1/1', title: 'Проект 08', tags: ['UX/UI', 'BRANDING'], subtitle: 'Система дизайна для продуктовой компании', behanceUrl: '#' },
  { id: 9, src: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=2400&q=80', init: { x: '-10vw', y: '-10vh', rotation: 12 }, aspect: '2/3', isMain: true, title: 'Oevra Redesign', tags: ['UX/UI', 'MOTION'], subtitle: 'Полный редизайн платформы Oevra', behanceUrl: '#' },
];

const SLIDESHOW_ORDER = [8, 0, 1, 2, 3, 4, 5, 6, 7];
const INTRO_DURATION = 3.32;
const HANDOFF_FADE = 0.35;
const SLIDE_TRANSITION_DURATION = 1;
const SLIDE_HOLD_DURATION = 0.6;
const SLIDE_STEP = SLIDE_TRANSITION_DURATION + SLIDE_HOLD_DURATION;
const TOTAL_SLIDES = SLIDESHOW_ORDER.length;
const SLIDESHOW_DURATION = SLIDE_HOLD_DURATION + (TOTAL_SLIDES - 1) * SLIDE_STEP;
const TOTAL_TIMELINE_DURATION = INTRO_DURATION + SLIDESHOW_DURATION;

const SNAP_POINTS = [
  (INTRO_DURATION + SLIDE_HOLD_DURATION * 0.5) / TOTAL_TIMELINE_DURATION,
  ...Array.from({ length: TOTAL_SLIDES - 1 }, (_, i) => {
    const time = INTRO_DURATION + (i + 1) * SLIDE_STEP;
    return time / TOTAL_TIMELINE_DURATION;
  }),
  1.0,
];

/* ============================================================
   SlideTextOverlay – mounts fresh on each slide change → replays blur animation
   ============================================================ */
function SlideTextOverlay({ card, displayNum, totalNum, skipAnimation = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll('.bw');
    if (!words.length) return;

    if (skipAnimation) {
      // Already seen — show immediately, no blur-in
      gsap.set(words, { opacity: 1, filter: 'blur(0px)', display: 'inline-block' });
      return;
    }

    gsap.set(words, { opacity: 0, filter: 'blur(10px)', display: 'inline-block' });
    const t = setTimeout(() => {
      gsap.to(words, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.0,
        stagger: 0.07,
        ease: 'power2.out',
      });
    }, 100);
    return () => clearTimeout(t);
  }, [skipAnimation]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Counter */}
      <div className="absolute flex items-baseline" style={{ top: '48px', left: '48px', gap: '6px', fontFamily: INTER }}>
        <span style={{ fontSize: '32px', fontWeight: 600, lineHeight: 1, color: '#fff' }}>
          {splitWords(displayNum)}
        </span>
        <span style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1, color: 'rgba(255,255,255,0.45)' }}>
          {splitWords(`/ ${totalNum}`)}
        </span>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 w-full" style={{ padding: '0 48px 48px 48px' }}>
        <div className="flex items-end justify-between w-full">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Tags */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
              {card.tags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: INTER, fontSize: '12px', fontWeight: 400, letterSpacing: '0.10em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.90)',
                  background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '9999px', padding: '7px 16px', display: 'inline-block',
                }}>
                  {splitWords(tag)}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: CORMORANT, fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 300,
              lineHeight: 1, letterSpacing: '-0.01em', color: '#ffffff', marginBottom: '16px',
            }}>
              {splitWords(card.title)}
            </h3>

            {/* Subtitle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <svg width="60" height="2" viewBox="0 0 60 2" style={{ flexShrink: 0, overflow: 'visible' }}>
                <rect x="0" y="0" width="60" height="1.5" fill="white" fillOpacity="0.75" />
              </svg>
              <p style={{ fontFamily: INTER, fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                {splitWords(card.subtitle)}
              </p>
            </div>
          </div>

          {/* Behance link */}
          <a href={card.behanceUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0, marginLeft: '40px', pointerEvents: 'auto', textDecoration: 'none', opacity: 1, transition: 'opacity 0.2s ease' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            <BehanceIcon size={38} />
            <span style={{ fontFamily: INTER, fontSize: '18px', fontWeight: 600, color: '#ffffff', whiteSpace: 'nowrap' }}>
              {splitWords('Смотреть полностью')}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ScatteredCards
   ============================================================ */
function ScatteredCards({ onSlideshowEnter, onSlideshowLeave }) {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const currentSlideRef = useRef(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideshowVisible, setSlideshowVisible] = useState(false);
  const slideshowActiveRef = useRef(false);
  const isProgrammaticRef = useRef(false);
  const scrollTweenRef = useRef(null);
  // Track which slide indices have already played their blur-in animation
  const seenSlidesRef = useRef(new Set());

  const getScrollPosForSlide = useCallback((slideIndex) => {
    if (!containerRef.current) return 0;
    const sectionTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const sectionScrollHeight = containerRef.current.offsetHeight - window.innerHeight;
    const progress = SNAP_POINTS[slideIndex];
    return sectionTop + progress * sectionScrollHeight;
  }, []);

  const navigateSlide = useCallback((direction) => {
    const next = Math.max(0, Math.min(TOTAL_SLIDES - 1, currentSlideRef.current + direction));
    if (next === currentSlideRef.current) return;
    const scrollPos = getScrollPosForSlide(next);
    currentSlideRef.current = next;
    setCurrentSlide(next);
    if (scrollTweenRef.current) scrollTweenRef.current.kill();
    isProgrammaticRef.current = true;
    const proxy = { value: window.scrollY };
    scrollTweenRef.current = gsap.to(proxy, {
      value: scrollPos, duration: 1.2, ease: 'power2.inOut',
      onUpdate: () => window.scrollTo(0, proxy.value),
      onComplete: () => { isProgrammaticRef.current = false; scrollTweenRef.current = null; },
    });
  }, [getScrollPosForSlide]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsData.forEach((card, i) => {
        gsap.set(`.sc-card-${i}`, {
          x: card.init.x, y: card.init.y, xPercent: -50, yPercent: -50,
          rotation: card.init.rotation, scale: 1,
          autoAlpha: card.isMain ? 1 : 0.92,
          transformOrigin: 'center center', willChange: 'transform, opacity',
        });
      });

      gsap.set('#fs-slideshow', { autoAlpha: 0 });
      gsap.set('.fs-progress-fill', { scaleX: 1 / SLIDESHOW_ORDER.length, transformOrigin: 'left center' });

      SLIDESHOW_ORDER.forEach((cardIndex, slideIndex) => {
        if (slideIndex === 0) {
          gsap.set(`.fs-slide-${cardIndex}`, { yPercent: 0, autoAlpha: 1, zIndex: slideIndex + 1 });
        } else {
          gsap.set(`.fs-slide-${cardIndex}`, { yPercent: 100, autoAlpha: 1, zIndex: slideIndex + 1 });
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          invalidateOnRefresh: true,
          snap: {
            snapTo: (value) => {
              if (isProgrammaticRef.current) return value;
              const slideStartProgress = INTRO_DURATION / TOTAL_TIMELINE_DURATION;
              if (value < slideStartProgress) {
                const midIntro = slideStartProgress * 0.5;
                return value >= midIntro ? SNAP_POINTS[0] : value;
              }
              return gsap.utils.snap(SNAP_POINTS, value);
            },
            duration: { min: 0.2, max: 0.5 },
            ease: 'power2.out',
          },
          onUpdate: (self) => {
            const slideStartProgress = INTRO_DURATION / TOTAL_TIMELINE_DURATION;
            if (self.progress >= slideStartProgress && !slideshowActiveRef.current) {
              slideshowActiveRef.current = true;
              setSlideshowVisible(true);
              onSlideshowEnter?.();
            } else if (self.progress < slideStartProgress && slideshowActiveRef.current) {
              slideshowActiveRef.current = false;
              onSlideshowLeave?.();
            }
            if (isProgrammaticRef.current) return;
            if (self.progress < slideStartProgress) {
              currentSlideRef.current = 0;
              setCurrentSlide(0);
              return;
            }
            let derivedIndex = 0;
            const tAfterIntro = (self.progress * TOTAL_TIMELINE_DURATION) - INTRO_DURATION;
            for (let i = 1; i < TOTAL_SLIDES; i++) {
              const midPoint = SLIDE_HOLD_DURATION + (i - 1) * SLIDE_STEP + SLIDE_TRANSITION_DURATION / 2;
              if (tAfterIntro >= midPoint) derivedIndex = i;
            }
            currentSlideRef.current = derivedIndex;
            setCurrentSlide(derivedIndex);
          },
          onLeave: () => { slideshowActiveRef.current = false; onSlideshowLeave?.(); },
          onLeaveBack: () => { slideshowActiveRef.current = false; onSlideshowLeave?.(); },
        },
      });

      timelineRef.current = timeline;

      timeline.to('.sc-card', { autoAlpha: (i, target) => target.classList.contains('is-main') ? 1 : 0.92, stagger: 0.03, ease: 'power2.out', duration: 0.55 }, 0);
      timeline.to('.sc-card', { x: '0vw', y: '0vh', rotation: 0, scale: (i, target) => target.classList.contains('is-main') ? 1 : 0.4, autoAlpha: (i, target) => target.classList.contains('is-main') ? 1 : 0, stagger: 0.03, ease: 'power2.inOut', duration: 1.2 }, 0.3);
      timeline.to('.sc-card.is-main', { width: '100vw', height: '100vh', borderRadius: '0px', duration: 2.1, ease: 'power2.inOut' }, 1.22);
      timeline.to('#fs-slideshow', { autoAlpha: 1, duration: 0.01 }, INTRO_DURATION);
      timeline.to('.sc-card.is-main', { autoAlpha: 0, duration: HANDOFF_FADE, ease: 'power2.inOut' }, INTRO_DURATION);

      for (let i = 1; i < SLIDESHOW_ORDER.length; i += 1) {
        const cardIndex = SLIDESHOW_ORDER[i];
        const tStart = INTRO_DURATION + SLIDE_HOLD_DURATION + (i - 1) * SLIDE_STEP;
        timeline.to(`.fs-slide-${cardIndex}`, { yPercent: 0, duration: SLIDE_TRANSITION_DURATION, ease: 'none' }, tStart);
        timeline.to('.fs-progress-fill', { scaleX: (i + 1) / SLIDESHOW_ORDER.length, duration: SLIDE_TRANSITION_DURATION, ease: 'none' }, tStart);
      }

      timeline.to({}, { duration: SLIDE_HOLD_DURATION }, TOTAL_TIMELINE_DURATION - SLIDE_HOLD_DURATION);
      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      if (scrollTweenRef.current) scrollTweenRef.current.kill();
      isProgrammaticRef.current = false;
      timelineRef.current = null;
      ctx.revert();
    };
  }, [onSlideshowEnter, onSlideshowLeave]);

  const totalNum = String(TOTAL_SLIDES).padStart(2, '0');

  const navBtnBase = {
    width: '48px', height: '48px', borderRadius: '9999px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'opacity 0.2s ease, background 0.2s ease',
    cursor: 'pointer', border: '1px solid rgba(255,255,255,0.15)',
  };
  const navBtnActive = { ...navBtnBase, background: 'rgba(255,255,255,0.10)' };
  const navBtnDisabled = { ...navBtnBase, background: 'rgba(255,255,255,0.04)', opacity: 0.3, cursor: 'default', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' };

  return (
    <section ref={containerRef} className="scattered-cards-section h-[1200vh] w-full relative z-20 bg-transparent">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">

        <div className="scattered-cards-stage absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-none">
          {cardsData.map((card, i) => {
            const baseWidth = 180;
            const aspectParts = card.aspect.split('/').map(Number);
            const initHeight = (baseWidth * aspectParts[1]) / aspectParts[0];
            return (
              <div key={card.id}
                className={`sc-card sc-card-${i} ${card.isMain ? 'is-main' : ''} absolute overflow-hidden bg-[#12121a] shadow-[0_20px_80px_rgba(0,0,0,0.35)]`}
                style={{ zIndex: card.isMain ? 50 : i, width: `${baseWidth}px`, height: `${initHeight}px`, top: '50%', left: '50%', borderRadius: '16px' }}>
                <img src={card.src} className="w-full h-full object-cover block absolute inset-0" alt={card.title} loading="lazy" />
              </div>
            );
          })}
        </div>

        <div id="fs-slideshow" className="absolute inset-0 w-full h-full z-50">
          <div className="fs-progress-bar absolute top-0 left-0 w-full z-[60] pointer-events-none">
            <div className="relative w-full h-[2px] bg-white/10">
              <div className="fs-progress-fill absolute top-0 left-0 w-full h-full bg-white/60 origin-left" style={{ transform: 'scaleX(0)' }} />
            </div>
          </div>

          {/* Navigation buttons */}
          <div style={{ position: 'absolute', top: '48px', right: '48px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 200, pointerEvents: 'auto' }}>
            <button onClick={() => navigateSlide(-1)} disabled={currentSlide === 0} style={currentSlide === 0 ? navBtnDisabled : navBtnActive} title={currentSlide === 0 ? 'Первый слайд' : 'Предыдущий'}>
              <svg width="16" height="10" fill="none" viewBox="0 0 16 10"><path d="M1 9L8 1L15 9" stroke="white" strokeLinecap="round" strokeWidth="1.5" /></svg>
            </button>
            <button onClick={() => navigateSlide(1)} disabled={currentSlide === TOTAL_SLIDES - 1} style={currentSlide === TOTAL_SLIDES - 1 ? navBtnDisabled : navBtnActive} title={currentSlide === TOTAL_SLIDES - 1 ? 'Последний слайд' : 'Следующий'}>
              <svg width="16" height="10" fill="none" viewBox="0 0 16 10"><path d="M1 1L8 9L15 1" stroke="white" strokeLinecap="round" strokeWidth="1.5" /></svg>
            </button>
          </div>

          {/* Slides — image layer always present, text layer re-mounts on slide change */}
          {SLIDESHOW_ORDER.map((cardIndex, slideIndex) => {
            const card = cardsData[cardIndex];
            const displayNum = String(slideIndex + 1).padStart(2, '0');
            const isActive = currentSlide === slideIndex;

            return (
              <div key={card.id}
                className={`fs-slide fs-slide-${cardIndex} absolute inset-0 w-full h-full`}
                style={{ zIndex: slideIndex + 1, visibility: 'visible' }}>

                <img src={card.src} className="absolute inset-0 w-full h-full object-cover" alt={card.title} loading="lazy" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)' }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)' }} />

                {/* Text overlay re-mounts for each active slide → fresh blur animation */}
                {/* For slideIndex 0: wait until slideshow is actually visible on screen */}
                {isActive && (slideIndex > 0 || slideshowVisible) && (() => {
                  const skipAnimation = seenSlidesRef.current.has(slideIndex);
                  if (!skipAnimation) seenSlidesRef.current.add(slideIndex);
                  return (
                    <SlideTextOverlay
                      key={`slide-text-${card.id}`}
                      card={card}
                      displayNum={displayNum}
                      totalNum={totalNum}
                      skipAnimation={skipAnimation}
                    />
                  );
                })()}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ContactSection – Resume CTA + Footer
   ============================================================ */
function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll('.cs-anim');
    gsap.set(targets, { opacity: 0, y: 32 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(targets, { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'power2.out' });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-20 flex flex-col"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(140deg, #d9e8f5 0%, #e4ecf7 25%, #f2eae4 65%, #edd9c8 100%)',
      }}
    >
      {/* Main content — two-column grid */}
      <div
        className="flex-1 flex items-center"
        style={{ padding: 'clamp(100px, 12vw, 180px) clamp(24px, 5vw, 64px)' }}
      >
        <div className="max-w-[1200px] mx-auto w-full">

          {/* Row 1: descriptor (bottom-aligned) | heading */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0 64px', alignItems: 'end', marginBottom: '40px' }}>

            {/* Left — descriptor, right-aligned, bottom of heading */}
            <div className="cs-anim" style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '10px' }}>
              <p
                style={{
                  fontFamily: INTER,
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(17,17,17,0.45)',
                  textAlign: 'right',
                  maxWidth: '300px',
                  margin: 0,
                }}
              >
                Опыт, проекты, подход к работе,<br />
                инструменты и ключевые кейсы —<br />
                кратко и структурно в PDF-файле.
              </p>
            </div>

            {/* Right — heading only */}
            <h2
              className="cs-anim"
              style={{
                fontFamily: INTER,
                fontSize: 'clamp(34px, 3.6vw, 52px)',
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: 'rgba(17,17,17,0.88)',
                margin: 0,
              }}
            >
              Всё самое{' '}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'clamp(52px, 5vw, 64px)',
                  height: 'clamp(34px, 3vw, 42px)',
                  background: 'rgba(255,255,255,0.80)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  verticalAlign: 'middle',
                  margin: '0 6px -4px 6px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/391px-PDF_file_icon.svg.png"
                  alt="PDF"
                  style={{ width: '22px', height: '26px', objectFit: 'contain', display: 'block' }}
                />
              </span>
              {' '}важное
              <br />
              здесь, в одном резюме.
            </h2>
          </div>

          {/* Row 2: empty | button */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0 64px' }}>
            <div />
            <div className="cs-anim cursor-pointer whitespace-nowrap pb-1 flex items-center">
              <button
                className="group relative inline-flex gap-2 min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-white tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center"
                onClick={() => window.location.href = 'mailto:hello@oevra.design'}
              >
                <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md flex items-center gap-[7px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" />
                  </svg>
                  Связаться
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-[7px] transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" />
                  </svg>
                  Связаться
                </span>
                <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
                <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          borderTop: '1px solid rgba(17,17,17,0.07)',
          padding: '18px clamp(24px, 5vw, 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/31473890-25f2-4535-a847-766fca01a65e/c4999910-b9e8-4b00-8aab-7cf48de65395-logo.svg?v=1776309701358"
          alt="Oevra Logo"
          style={{ width: '34px', height: '34px', objectFit: 'contain', flexShrink: 0 }}
        />

        <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {[
            { label: 'Обо мне', href: '#about' },
            { label: 'Портфолио', href: '#portfolio' },
            { label: 'Резюме', href: '#' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              style={{ fontFamily: INTER, fontSize: '13px', fontWeight: 400, color: 'rgba(17,17,17,0.5)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#111111'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.5)'}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Footer CTA — identical to Hero button */}
        <div className="cursor-pointer whitespace-nowrap pb-1 flex items-center" style={{ flexShrink: 0 }}>
          <button
            className="group relative inline-flex gap-2 min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-white tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center"
            onClick={() => window.location.href = 'mailto:hello@oevra.design'}
          >
            <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md flex items-center gap-[7px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" />
              </svg>
              Связаться
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-[7px] transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" />
              </svg>
              Связаться
            </span>
            <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Copyright — mirrors footer flex so it's always under Портфолио */}
      <div style={{ padding: '10px clamp(24px, 5vw, 64px) 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: '34px', flexShrink: 0 }} />
        <span style={{ fontFamily: INTER, fontSize: '11px', color: 'rgba(17,17,17,0.22)', letterSpacing: '0.04em', textAlign: 'center' }}>
          © 2026 Denis Design. Все права защищены.
        </span>
        <div style={{ minWidth: '120px', flexShrink: 0 }} />
      </div>
    </section>
  );
}

/* ============================================================
   CustomCursor – minimal soft glow, oevra-style
   ============================================================ */
function CustomCursor({ onDark }) {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const xTo = gsap.quickTo(blob, 'x', { duration: 0.6, ease: 'power2.out' });
    const yTo = gsap.quickTo(blob, 'y', { duration: 0.6, ease: 'power2.out' });

    let visible = false;

    const onMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (!visible) {
        visible = true;
        gsap.to(blob, { autoAlpha: 1, duration: 1.2, ease: 'power2.out' });
      }
    };

    const onLeave = () => {
      visible = false;
      gsap.to(blob, { autoAlpha: 0, duration: 0.8 });
    };
    const onEnter = () => {
      visible = true;
      gsap.to(blob, { autoAlpha: 1, duration: 0.8 });
    };

    window.addEventListener('mousemove',  onMove,  { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  const SIZE = 200;
  const glow = onDark
    ? `radial-gradient(ellipse at center,
        transparent 15%,
        rgba(255,255,255,0.13) 35%,
        rgba(255,255,255,0.22) 52%,
        rgba(255,255,255,0.10) 68%,
        transparent 82%)`
    : `radial-gradient(ellipse at center,
        transparent 15%,
        rgba(80,70,120,0.10) 35%,
        rgba(80,70,120,0.20) 52%,
        rgba(80,70,120,0.08) 68%,
        transparent 82%)`;

  return (
    <>
      {/* Grain filter definition */}
      <svg style={{ position: 'fixed', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="cursor-grain" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
            <feBlend in="SourceGraphic" in2="grey" mode="overlay" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* The blob itself */}
      <div
        ref={blobRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width:  `${SIZE}px`,
          height: `${SIZE}px`,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: glow,
          filter: 'url(#cursor-grain) blur(10px)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          opacity: 0,
          transition: 'background 0.8s ease',
        }}
      />
    </>
  );
}

/* ============================================================
   AboutIntroSection – "Я в дизайне уже 5 лет"
   Placed immediately after Hero, before ScatteredCards
   ============================================================ */
function AboutIntroSection() {
  const headRef = useRef(null);

  const avatarUrl =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80';

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative z-20"
      style={{
        padding: 'clamp(140px, 16vw, 220px) clamp(24px, 5vw, 64px)',
      }}
    >
      <div className="max-w-[1200px] mx-auto flex justify-center">

        <h2
          ref={headRef}
          style={{
            maxWidth: '1248px', // немного шире = больше места справа
            margin: '0 auto',

            fontFamily: INTER,
            fontSize: 'clamp(34px, 3.4vw, 46px)',
            fontWeight: 300,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            color: 'rgba(17,17,17,0.85)',
          }}
        >
          Я{' '}
          <img
            src={avatarUrl}
            alt=""
            style={{
              width: 'clamp(60px, 6vw, 76px)',
              height: 'clamp(30px, 3vw, 38px)',
              borderRadius: '9999px',
              objectFit: 'cover',
              display: 'inline-block',
              verticalAlign: 'middle',
              margin: '0 8px -6px 8px',
            }}
          />
         в дизайне уже 5 лет{' '}
<span style={{ opacity: 0.5 }}>
  — от <br />
  первых попыток разобраться, как <br />
  всё устроено, до осознанного <br />
  подхода к интерфейсам.
</span>
          {' '}

          {/* INLINE БЛОК */}
          <span
            style={{
              display: 'inline-block',
              verticalAlign: 'top',

              width: 'min(480px, 32vw)', // ← КЛЮЧ: чтобы ВЛЕЗАЛ в строку

              marginLeft: '24px',
              marginTop: '24px',

              fontSize: 'clamp(14px, 1.2vw, 16px)',
              lineHeight: 1.85,
              color: 'rgba(17,17,17,0.65)',
            }}
          >
            Занимаюсь дизайном с 2021 года, когда мне было ещё 15 лет. Начинал с простых макетов и постепенно перешёл к более осознанному подходу через практику и реальные проекты.

            <br /><br />

            Со временем пришло понимание, что дизайн — это не про визуал, а про решения и удобство. Сейчас мой фокус — понятность, структура и интерфейсы, в которых не нужно разбираться.
          </span>

        </h2>

      </div>
    </section>
  );
}

/* ============================================================
   App Root
   ============================================================ */
export default function App() {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [cursorOnDark, setCursorOnDark] = useState(false);
  const handleSlideshowEnter = useCallback(() => { setSidebarHidden(true);  setCursorOnDark(true);  }, []);
  const handleSlideshowLeave = useCallback(() => { setSidebarHidden(false); setCursorOnDark(false); }, []);

  return (
    <>
      <FontLoader />
      <CustomCursor onDark={cursorOnDark} />
      <Routes>
        <Route path="/" element={
          <div className="w-full bg-[#fafcfc] min-h-screen relative">
            <FloatingSidebar hidden={sidebarHidden} />
            <Hero />
            <AboutIntroSection />
            <ScatteredCards
              onSlideshowEnter={handleSlideshowEnter}
              onSlideshowLeave={handleSlideshowLeave}
            />

            <ContactSection />
          </div>
        } />
      </Routes>
    </>
  );
}
