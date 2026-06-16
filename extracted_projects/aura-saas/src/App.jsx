import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAuraCMSCollection } from './lib/auraCms';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const PANEL_BORDER = 'border-white/[0.10]';
const SOFT_BORDER = 'border-white/[0.06]';
const PANEL_RING = 'ring-1 ring-inset ring-white/[0.05]';

/* ----------------------------- layout ----------------------------- */

const Header = () => (
  <header className="fixed z-50 flex border-white/[0.10] bg-black/60 border-b pt-4 pr-6 pb-4 pl-6 top-0 right-0 left-0 backdrop-blur-xl items-center justify-between">
    <div className="flex items-center gap-3">
      <iconify-icon icon="solar:widget-5-bold" class="text-white text-2xl"></iconify-icon>
      <span className="text-white font-semibold text-lg tracking-tight">Aura</span>
    </div>

    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
      <a href="#features" className="hover:text-white transition-colors">Features</a>
      <a href="#" className="hover:text-white transition-colors">Templates</a>
      <a href="#" className="hover:text-white transition-colors">Community</a>
      <a href="#" className="hover:text-white transition-colors">Pricing</a>
    </nav>

    <div className="flex items-center gap-5">
      <a href="#" className="hidden md:block text-sm font-medium text-white/70 hover:text-white transition-colors">Log in</a>
      <a href="#" className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">Sign Up</a>
    </div>
  </header>
);

const Footer = () => (
  <footer className={cn('border-t bg-black pt-20 pb-10 px-6 mt-12', SOFT_BORDER)}>
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <iconify-icon icon="solar:widget-5-bold" class="text-white text-2xl"></iconify-icon>
            <span className="text-white font-semibold text-xl tracking-tight">Aura</span>
          </div>
          <p className="text-framer-muted text-sm max-w-xs mb-6 leading-relaxed">
            The web builder for creative pros. Design and ship your dream site. Zero code, maximum speed.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all">
              <iconify-icon icon="simple-icons:x" class="text-lg"></iconify-icon>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all">
              <iconify-icon icon="simple-icons:youtube" class="text-lg"></iconify-icon>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all">
              <iconify-icon icon="simple-icons:dribbble" class="text-lg"></iconify-icon>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 tracking-tight">Product</h4>
          <ul className="flex flex-col gap-3 text-sm text-framer-muted">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">CMS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hosting</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 tracking-tight">Resources</h4>
          <ul className="flex flex-col gap-3 text-sm text-framer-muted">
            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 tracking-tight">Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-framer-muted">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className={cn('border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4', SOFT_BORDER)}>
        <p className="text-framer-muted text-sm">© {new Date().getFullYear()} Framer Recreation. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-framer-muted">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

/* ---------------------------- ui blocks --------------------------- */

const MediaCard = ({ src, type = 'image', aspect = 'aspect-square', poster = '' }) => {
  return (
    <div className={cn(`w-full rounded-xl border ${PANEL_BORDER} ${PANEL_RING} overflow-hidden relative bg-framer-panel`, aspect)}>
      {type === 'image' ? (
        <img src={src} alt="Showcase" className="w-full h-full object-cover object-top block" loading="lazy" />
      ) : (
        <div className="w-full h-full relative">
          <img src={poster} alt="Poster" className="absolute inset-0 w-full h-full object-cover z-0" />
          <video
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10 bg-transparent"
          />
        </div>
      )}
    </div>
  );
};

const AccordionItem = ({ title, description, link, isOpen, onClick }) => {
  return (
    <div className={cn('w-full border-t py-6 cursor-pointer group', PANEL_BORDER)} onClick={onClick}>
      <div className="flex flex-col">
        <h3
          className={cn(
            'text-2xl font-semibold tracking-tight transition-colors duration-200',
            isOpen ? 'text-white' : 'text-white/50 group-hover:text-white/80'
          )}
        >
          {title}
        </h3>

        <div
          className={cn(
            'grid transition-all duration-300 ease-in-out',
            isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
          )}
        >
          <div className="overflow-hidden">
            <p className="text-framer-muted text-lg leading-relaxed max-w-md">{description}</p>
            <a
              href={link || '#'}
              className="inline-block mt-4 text-framer-accent underline text-lg font-medium hover:opacity-80 transition-opacity"
              onClick={(e) => {
                if (!link) e.preventDefault();
                e.stopPropagation();
              }}
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingEditWidget = () => {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#ddd4bd]/70 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-2xl flex items-center gap-6 z-20 w-max max-w-[90vw] overflow-hidden">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-[13px] font-medium text-white">
          <span>Click to edit</span>
          <span>·</span>
          <span>Changes are auto-saved</span>
        </div>
        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70">
          <span>Site saved</span>
          <span>·</span>
          <span className="truncate max-w-[200px] md:max-w-none">
            Collaborators are notified. Changes will be visible...
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
          <iconify-icon icon="simple-icons:framer" class="text-white text-sm"></iconify-icon>
          <span className="text-[13px] font-semibold text-white">Open in Framer</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg hover:bg-gray-100 transition-colors">
          <iconify-icon icon="solar:check-read-linear" class="text-black text-sm"></iconify-icon>
          <span className="text-[13px] font-semibold text-black">Finish Editing</span>
        </button>
      </div>
    </div>
  );
};

const MarqueeSection = () => {
  const logos = [
    'simple-icons:vercel',
    'simple-icons:linear',
    'simple-icons:loom',
    'simple-icons:raycast',
    'simple-icons:arc',
    'simple-icons:framer',
    'simple-icons:stripe',
    'simple-icons:github'
  ];

  return (
    <div className="w-full overflow-hidden py-12 relative">
      <style>{`
        @keyframes logosMarqueeRightToLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .logos-marquee-track {
          animation: logosMarqueeRightToLeft 26s linear infinite;
          will-change: transform;
        }

        .logos-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-36 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-36 bg-gradient-to-l from-black via-black/90 to-transparent" />

      <div className="logos-marquee-track flex w-max items-center gap-16 md:gap-20 whitespace-nowrap pr-16">
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full"
          >
            <iconify-icon
              icon={logo}
              class="text-[34px] md:text-[38px] text-white/30 hover:text-white/55 transition-colors duration-300"
            ></iconify-icon>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureStackCard = ({ id, dataId, index = 0, children }) => (
  <div
    id={id}
    data-id={dataId}
    className="relative"
    style={{
      height: index === 0 ? '150vh' : '130vh',
      marginTop: index === 0 ? '0vh' : '-62vh',
      zIndex: index + 1,
    }}
  >
    <div className="sticky top-24 h-[78vh] min-h-[560px] max-h-[760px]">
      <div className={cn(
        'w-full h-full rounded-[28px] border bg-framer-panel overflow-hidden shadow-2xl relative',
        PANEL_BORDER,
        PANEL_RING
      )}>
        {children}
      </div>
    </div>
  </div>
);

const CmsVisual = () => {
  const { items, loading } = useAuraCMSCollection('features');

  const fallbackItems = [
    { id: '1', title: 'Landing Page', slug: 'landing-page', isPublished: true, image: 'https://placehold.co/120x120/111/fff?text=L' },
    { id: '2', title: 'Pricing', slug: 'pricing', isPublished: true, image: 'https://placehold.co/120x120/111/fff?text=P' },
    { id: '3', title: 'Docs', slug: 'docs', isPublished: false, image: 'https://placehold.co/120x120/111/fff?text=D' },
    { id: '4', title: 'Templates', slug: 'templates', isPublished: true, image: 'https://placehold.co/120x120/111/fff?text=T' }
  ];

  const displayItems = !loading && items?.length ? items.slice(0, 6) : fallbackItems;

  return (
    <div className="w-full h-full bg-framer-panel flex flex-col p-6 lg:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#101010] via-black to-black z-0"></div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[18%] left-[16%] w-2.5 h-2.5 rounded-full bg-blue-400/80 animate-pulse"></div>
        <div className="absolute top-[28%] right-[20%] w-2 h-2 rounded-full bg-cyan-300/70 animate-pulse"></div>
        <div className="absolute bottom-[24%] left-[26%] w-2 h-2 rounded-full bg-blue-500/70 animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[18%] w-2.5 h-2.5 rounded-full bg-emerald-400/70 animate-pulse"></div>

        <div className="absolute top-[19%] left-[18%] w-[26%] h-px bg-gradient-to-r from-blue-400/40 to-transparent rotate-[8deg]"></div>
        <div className="absolute top-[29%] right-[22%] w-[22%] h-px bg-gradient-to-l from-cyan-300/40 to-transparent -rotate-[12deg]"></div>
        <div className="absolute bottom-[22%] left-[28%] w-[24%] h-px bg-gradient-to-r from-blue-400/30 to-transparent rotate-[14deg]"></div>
      </div>

      <div className={cn('relative z-10 flex items-center justify-between mb-8 pb-4 border-b', SOFT_BORDER)}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-framer-accent/10 flex items-center justify-center border border-white/[0.14]">
            <iconify-icon icon="solar:server-square-bold" class="text-2xl text-white"></iconify-icon>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg tracking-tight">Content</h4>
            <p className="text-white/50 text-sm">Aura CMS Integrated</p>
          </div>
        </div>

        <div className={cn('px-3 py-1.5 rounded-full bg-white/5 border text-white/70 text-xs font-medium flex items-center gap-2 shadow-inner', SOFT_BORDER)}>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Live Sync
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 flex-1 min-h-0">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col gap-3 overflow-hidden">
          {displayItems.map((item, idx) => (
            <div
              key={item.id || idx}
              className={cn('flex items-center gap-4 p-4 rounded-xl border bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300', SOFT_BORDER)}
            >
              <img
                src={item.image}
                alt="CMS cover"
                className={cn('w-14 h-14 rounded-lg object-cover bg-black/40 border', SOFT_BORDER)}
              />

              <div className="flex-1 min-w-0">
                <div className="text-white font-medium truncate">{item.title}</div>
                <div className="flex items-center gap-2 mt-1 text-xs text-white/40">
                  <span className="truncate">{item.slug}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <span className={item.isPublished ? 'text-green-400' : 'text-yellow-400'}>
                    {item.isPublished ? 'Published' : 'Draft'}
                  </span>
                </div>
              </div>

              <div className="w-2.5 h-2.5 rounded-full bg-blue-400/80 animate-pulse"></div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/45 mb-4">Schema</div>

          <div className="relative flex-1 min-h-[260px] rounded-xl border border-white/[0.06] bg-black/30 overflow-hidden">
            <div className="absolute left-1/2 top-[16%] -translate-x-1/2 px-3 py-2 rounded-xl border border-white/[0.10] bg-white/[0.05] text-sm text-white">
              Collection
            </div>

            <div className="absolute left-[16%] top-[50%] -translate-y-1/2 px-3 py-2 rounded-xl border border-white/[0.10] bg-white/[0.05] text-xs text-white/80">
              Fields
            </div>

            <div className="absolute right-[14%] top-[38%] px-3 py-2 rounded-xl border border-white/[0.10] bg-white/[0.05] text-xs text-white/80">
              Filters
            </div>

            <div className="absolute right-[10%] bottom-[18%] px-3 py-2 rounded-xl border border-white/[0.10] bg-white/[0.05] text-xs text-white/80">
              Templates
            </div>

            <div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-px h-[18%] bg-gradient-to-b from-blue-400/60 to-transparent"></div>
            <div className="absolute left-[31%] top-[52%] w-[19%] h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
            <div className="absolute right-[28%] top-[42%] w-[16%] h-px bg-gradient-to-l from-cyan-300/50 to-transparent"></div>
            <div className="absolute right-[24%] bottom-[26%] w-[20%] h-px bg-gradient-to-l from-emerald-400/50 to-transparent"></div>

            <div className="absolute left-1/2 top-[44%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollaborateVisual = () => (
  <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
    <img
      src="https://framerusercontent.com/images/Hp4KG1pwKb6cl66bNB9b2pYWQ3Y.jpg?width=480&height=987"
      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity filter blur-[2px] scale-105"
      alt="Collaborate Background"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-framer-panel via-transparent to-framer-panel opacity-80"></div>

    <div className="absolute top-[25%] left-[20%] animate-[bounce_3s_infinite] drop-shadow-2xl z-20">
      <iconify-icon icon="solar:cursor-bold" class="text-4xl text-[#0099ff]" />
      <div className="bg-[#0099ff] text-white text-xs px-3 py-1.5 rounded-full rounded-tl-none shadow-xl font-medium whitespace-nowrap mt-1 ml-5 border border-white/20 tracking-wide">
        Sarah Jenkins
      </div>
    </div>

    <div
      className="absolute top-[60%] right-[20%] animate-[bounce_4s_infinite] drop-shadow-2xl z-20"
      style={{ animationDelay: '1.5s' }}
    >
      <iconify-icon icon="solar:cursor-bold" class="text-4xl text-[#ff0055]" />
      <div className="bg-[#ff0055] text-white text-xs px-3 py-1.5 rounded-full rounded-tl-none shadow-xl font-medium whitespace-nowrap mt-1 ml-5 border border-white/20 tracking-wide">
        David K.
      </div>
    </div>

    <div className={cn(`relative z-10 w-[300px] bg-[#1a1a1a]/80 backdrop-blur-xl border rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-500 group`, PANEL_BORDER, PANEL_RING)}>
      <div className={cn('w-full h-32 bg-black/40 rounded-xl mb-5 border relative overflow-hidden group-hover:border-[#0099ff]/50 transition-colors', SOFT_BORDER)}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0099ff]/10 to-[#ff0055]/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <iconify-icon icon="solar:gallery-bold" class="text-4xl text-white/10"></iconify-icon>
        </div>
      </div>

      <div className="h-3 w-3/4 bg-white/10 rounded-full mb-3"></div>
      <div className="h-3 w-1/2 bg-white/5 rounded-full mb-8"></div>
      <div className="h-11 w-full bg-[#0099ff] rounded-xl flex items-center justify-center text-white/90 text-sm font-semibold shadow-inner border border-white/20 hover:bg-[#0088ee] transition-colors cursor-pointer">
        Publish Updates
      </div>

      <div className="absolute -inset-3 border-2 border-[#0099ff] border-dashed rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none duration-500"></div>
      <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#0099ff] rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_10px_#0099ff]"></div>
      <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#0099ff] rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_10px_#0099ff]"></div>
    </div>
  </div>
);

const EffectsSection = () => (
  <section className={cn("py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative mt-12 border-t", SOFT_BORDER)}>
    <div className="absolute -left-20 top-10 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
      <div className="flex-1 w-full relative aspect-square max-w-[600px] order-2 lg:order-1">
        <div className={cn("absolute inset-0 bg-framer-panel border rounded-[32px] overflow-hidden flex items-center justify-center group", PANEL_BORDER)}>
          <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-[#0099ff] to-[#ff0055] rounded-[2rem] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-12 shadow-[0_0_40px_rgba(0,153,255,0.4)] flex items-center justify-center">
            <iconify-icon icon="solar:magic-stick-3-bold" class="text-6xl text-white/50 group-hover:text-white transition-colors duration-500"></iconify-icon>
          </div>
          <div className={cn("absolute right-6 top-6 bg-black/60 backdrop-blur-xl border rounded-xl p-5 w-56 shadow-2xl transition-transform duration-700 ease-out translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100", PANEL_BORDER)}>
            <div className="text-[10px] text-white/40 mb-4 font-bold uppercase tracking-widest">Spring Physics</div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium"><span className="text-white/80">Stiffness</span><span className="text-framer-accent">400</span></div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[70%] bg-white/80 rounded-full"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium"><span className="text-white/80">Damping</span><span className="text-framer-accent">30</span></div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[40%] bg-white/80 rounded-full"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium"><span className="text-white/80">Mass</span><span className="text-framer-accent">1</span></div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[20%] bg-white/80 rounded-full"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 order-1 lg:order-2">
        <div className={cn('inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border text-white/80 text-sm font-medium mb-6', SOFT_BORDER)}>
          <iconify-icon icon="solar:routing-2-bold" class="text-pink-400"></iconify-icon>
          Motion Engine
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Bring your site to life.
        </h2>
        <p className="text-xl text-framer-muted max-w-xl mb-8 leading-relaxed">
          Add scroll effects, hover states, and seamless page transitions without writing a single line of CSS. Leverage the power of a native physics engine, right inside your browser.
        </p>
      </div>
    </div>
  </section>
);

const LocalizationSection = () => (
  <section className="md:px-12 border-white/[0.06] group max-w-[1400px] border-t mt-12 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
    <div className="absolute -right-20 top-10 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none transition-all duration-1000 group-hover:bg-green-500/20 group-hover:scale-110"></div>

    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
      <div className="flex-1">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/10 text-green-400 text-sm font-medium mb-6 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
          <iconify-icon icon="solar:earth-bold" class="text-green-400 text-lg"></iconify-icon>
          Localization
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white">Speak their language.</h2>
        <p className="text-xl text-white/50 max-w-xl leading-relaxed">Build globally, scale infinitely. Create local variants
          of your site effortlessly. Auto-translate content, adapt layouts, and serve the right language instantly based
          on user location.</p>
      </div>

      <div className="flex-1 w-full relative">
        <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 via-transparent to-transparent rounded-[34px] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"></div>

        <div className="w-full bg-[#0a0a0a] border rounded-[32px] overflow-hidden p-8 flex flex-col gap-8 shadow-2xl relative border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.08)] group/card cursor-default">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-500/30 to-emerald-400/30 group-hover/card:h-1.5 group-hover/card:from-green-400 group-hover/card:to-emerald-300 transition-all duration-500"></div>

          <div className="flex items-center justify-between border-b pb-6 border-white/[0.06] relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-500 bg-white text-black font-medium shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover/card:bg-white/5 group-hover/card:text-white/40 group-hover/card:border group-hover/card:border-white/10 group-hover/card:shadow-none">EN</div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white/40 transition-colors">ES</div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-500 bg-white/5 border border-white/10 text-white/40 group-hover/card:bg-white group-hover/card:text-black group-hover/card:font-medium group-hover/card:shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover/card:border-transparent">FR</div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white/40 transition-colors">JP</div>
            </div>
            <button className="text-xs border px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-500 bg-green-500/10 border-green-500/20 text-green-400 group-hover/card:bg-green-400 group-hover/card:text-black group-hover/card:border-green-400 group-hover/card:shadow-[0_0_20px_rgba(74,222,128,0.4)]">
              <iconify-icon icon="solar:magic-stick-3-bold" class="transition-transform duration-500 group-hover/card:rotate-12 group-hover/card:scale-110 text-base"></iconify-icon>
              Auto-Translate
            </button>
          </div>

          <div className="relative min-h-[220px]">
            <div className="absolute inset-0 space-y-5 transition-all duration-500 group-hover/card:opacity-0 group-hover/card:scale-[0.98] group-hover/card:-translate-y-2">
              <div className="space-y-3">
                <div className="text-xs text-white/30 font-medium uppercase tracking-widest mb-2">Primary Header</div>
                <div className="h-8 w-3/4 bg-white/[0.08] rounded-lg"></div>
                <div className="h-4 w-full bg-white/[0.04] rounded-md"></div>
                <div className="h-4 w-5/6 bg-white/[0.04] rounded-md"></div>
              </div>
              <div className="pt-4 space-y-3">
                <div className="text-xs text-white/30 font-medium uppercase tracking-widest mb-2">Call to Action</div>
                <div className="h-10 w-40 bg-[#0099ff]/80 rounded-xl"></div>
              </div>
            </div>

            <div className="absolute inset-0 space-y-5 transition-all duration-500 opacity-0 translate-y-2 scale-[0.98] group-hover/card:opacity-100 group-hover/card:scale-100 group-hover/card:translate-y-0">
              <div className="space-y-3">
                <div className="text-xs text-green-400/80 font-medium uppercase tracking-widest mb-2 flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-bold" class="text-green-400"></iconify-icon>
                  En-Tête Principal
                </div>
                <div className="h-8 w-4/5 bg-green-500/10 rounded-lg border border-green-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-green-400/10 to-transparent animate-pulse"></div>
                </div>
                <div className="h-4 w-11/12 bg-green-500/5 rounded-md border border-green-500/10"></div>
                <div className="h-4 w-4/5 bg-green-500/5 rounded-md border border-green-500/10"></div>
              </div>
              <div className="pt-4 space-y-3">
                <div className="text-xs text-green-400/80 font-medium uppercase tracking-widest mb-2 flex items-center gap-2">
                  Appel à L'action
                </div>
                <div className="h-10 w-48 bg-[#0099ff] rounded-xl relative overflow-hidden shadow-[0_0_20px_rgba(0,153,255,0.2)]">
                  <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Sarah Jenkins", role: "Design Lead", text: "We migrated our entire marketing site in a weekend. The design freedom combined with the performance is completely unmatched.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80" },
    { name: "David Kim", role: "Frontend Engineer", text: "Finally, a visual builder that doesn't output spaghetti code. It integrates perfectly with our React stack and deployment pipelines.", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&q=80" },
    { name: "Elena Rostova", role: "Founder", text: "This changed how our startup operates. Designers can ship directly to production without waiting on the engineering queue.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80" },
    { name: "Marcus Webb", role: "Creative Director", text: "The motion features are incredible. I can build complex scroll sequences visually that would take days to code manually.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80" },
    { name: "Chloe Li", role: "Product Manager", text: "Localization used to be a nightmare. Now we support 5 languages and our international conversion rate doubled instantly.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80" },
    { name: "James Holden", role: "Indie Maker", text: "The CMS is so intuitive. I set up my blog, portfolio, and shop all in one place. Best tool I've used this year.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80" },
    { name: "Lisa Wong", role: "Marketing VP", text: "SEO results were immediate. We saw a 40% organic traffic increase just from migrating our old WordPress site to this platform.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80" },
    { name: "Alex Chen", role: "Freelance Designer", text: "I've stopped using three different tools to design, prototype, and build. This does it all beautifully.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80" },
  ];

  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section className={cn("py-24 max-w-[1600px] mx-auto relative mt-12 border-t overflow-hidden", SOFT_BORDER)}>
      <div className="text-center mb-16 relative z-10 px-6">
        <div className={cn('inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border text-white/80 text-sm font-medium mb-6', SOFT_BORDER)}>
          <iconify-icon icon="solar:hearts-bold" class="text-red-400"></iconify-icon>
          Community
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Loved by top teams.</h2>
        <p className="text-xl text-framer-muted max-w-2xl mx-auto">
          See what creators and engineers are saying about their new design and publishing workflow.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 pause-on-hover w-full pt-8">
        <style>{`
          @keyframes scroll-left { 
            0% { transform: translateX(0); } 
            100% { transform: translateX(calc(-50% - 12px)); } 
          }
          @keyframes scroll-right { 
            0% { transform: translateX(calc(-50% - 12px)); } 
            100% { transform: translateX(0); } 
          }
          .animate-scroll-left { animation: scroll-left 40s linear infinite; width: max-content; }
          .animate-scroll-right { animation: scroll-right 40s linear infinite; width: max-content; }
          .pause-on-hover:hover .animate-scroll-left,
          .pause-on-hover:hover .animate-scroll-right { animation-play-state: paused; }
        `}</style>

        {/* Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent" />

        {/* Row 1 (Scrolls Left) */}
        <div className="animate-scroll-left flex gap-6 px-6">
          {[...row1, ...row1].map((t, idx) => (
            <div key={idx} className="w-[320px] md:w-[400px] shrink-0 bg-framer-panel border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <iconify-icon icon="solar:quote-right-bold" class="absolute top-6 right-6 text-4xl text-white/[0.03] group-hover:text-white/[0.08] transition-colors"></iconify-icon>
              
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-white/30 transition-colors" loading="lazy" />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-framer-muted text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Scrolls Right) */}
        <div className="animate-scroll-right flex gap-6 px-6">
          {[...row2, ...row2].map((t, idx) => (
            <div key={idx} className="w-[320px] md:w-[400px] shrink-0 bg-framer-panel border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <iconify-icon icon="solar:quote-right-bold" class="absolute top-6 right-6 text-4xl text-white/[0.03] group-hover:text-white/[0.08] transition-colors"></iconify-icon>
              
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-white/30 transition-colors" loading="lazy" />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-framer-muted text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScaleSection = () => (
  <section className={cn("py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative mt-12 border-t", SOFT_BORDER)}>
    <div className="text-center mb-20">
      <div className={cn('inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border text-white/80 text-sm font-medium mb-6', SOFT_BORDER)}>
        <iconify-icon icon="solar:server-square-bold" class="text-framer-accent"></iconify-icon>
        Infrastructure
      </div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
        Built to scale natively.
      </h2>
      <p className="text-xl text-framer-muted max-w-2xl mx-auto">
        World-class hosting, unmatched performance, and out-of-the-box SEO. Publish your site to a global CDN in seconds with a single click.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-3 bg-framer-panel border rounded-2xl overflow-hidden relative aspect-[4/3] md:aspect-[21/9] group cursor-pointer border-white/[0.10] ring-1 ring-inset ring-white/[0.05]">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/8bd0314a-9525-4a13-996e-2c37cbd9e514/4be6ff42-8ef1-42ce-8459-92e2de67aba3-Screenshot-2026-04-07-at-1.09.45-AM.png?v=1775538603656" alt="Scale Metrics" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
        <div className="bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-xl z-10">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Global Edge Network</h3>
          <p className="text-framer-muted text-lg">Every site is automatically deployed and optimized across our global CDN for lightning-fast speeds worldwide.</p>
        </div>
      </div>

      <div className={cn('bg-framer-panel border rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative overflow-hidden group', PANEL_BORDER)}>
        <div className={cn('w-14 h-14 bg-white/5 border rounded-xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform', SOFT_BORDER)}>
          <iconify-icon icon="solar:magnifer-bold" class="text-3xl text-white"></iconify-icon>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Built-in SEO</h3>
          <p className="text-framer-muted leading-relaxed">
            Everything you need to rank higher. Auto-generated sitemaps, customizable meta tags, and semantic HTML markup.
          </p>
        </div>
      </div>

      <div className={cn('bg-framer-panel border rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative overflow-hidden group', PANEL_BORDER)}>
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-framer-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-framer-accent/20 transition-colors"></div>
        <div className="w-14 h-14 bg-[#0099ff]/10 border border-[#0099ff]/20 rounded-xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
          <iconify-icon icon="solar:rocket-bold" class="text-3xl text-[#0099ff]"></iconify-icon>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Lightning Fast</h3>
          <p className="text-framer-muted leading-relaxed">
            Optimized assets, next-gen image formats, and smart routing ensure your site loads instantly for every visitor.
          </p>
        </div>
      </div>

      <div className={cn('bg-framer-panel border rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative overflow-hidden group md:col-span-2 lg:col-span-1', PANEL_BORDER)}>
        <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
          <iconify-icon icon="solar:shield-check-bold" class="text-3xl text-purple-400"></iconify-icon>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Enterprise Security</h3>
          <p className="text-framer-muted leading-relaxed">
            Sleep soundly with built-in SSL, DDoS protection, SOC2 compliance, and automated threat mitigation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="relative px-6 md:px-12 pt-24 pb-10 overflow-hidden">
    <div className="max-w-[1400px] mx-auto">
      <div className="relative min-h-[860px] md:min-h-[980px] rounded-[32px] overflow-hidden bg-black border flex flex-col items-center text-center border-white/[0.10] ring-1 ring-inset ring-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.38),_rgba(0,0,0,0)_44%)]"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0"></div>
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="relative z-20 flex flex-col items-center pt-12 md:pt-16 px-6">
          <h2 className="text-white font-semibold tracking-tight leading-[0.92] text-[56px] sm:text-[84px] md:text-[118px] lg:text-[144px]">
            <span className="block">Design bold.</span>
            <span className="block">Launch fast.</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 relative z-30">
            <a href="#" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-black text-lg font-semibold hover:bg-white/90 transition-colors shadow-[0_10px_40px_rgba(255,255,255,0.15)]">Start for free</a>
            <a href="#" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white/10 text-white text-lg font-semibold border backdrop-blur-md hover:bg-white/16 transition-colors border-white/[0.06]">Start with AI</a>
          </div>
        </div>
        <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="relative">
            <div className="absolute inset-0 scale-[2] rounded-[60px] bg-blue-500/40 blur-[120px]"></div>
            <div className="absolute inset-0 scale-[1.3] rounded-[44px] bg-white/12 blur-[42px]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------ app ------------------------------- */

export default function App() {
  const [activeTab, setActiveTab] = useState('ai');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('data-id');
          if (id) setActiveTab(id);
        }
      },
      {
        threshold: [0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    ['ai', 'design', 'cms', 'collaborate'].forEach((id) => {
      const el = document.getElementById(`panel-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(`panel-${id}`);
    if (!el) return;

    const y = window.scrollY + el.getBoundingClientRect().top - 96;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-framer-dark text-framer-text font-sans overflow-x-hidden pt-16">
      <Header />

      <main>
        {/* Hero / Marquee Area */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 max-w-4xl">
              Create a professional website, free.
            </h1>
            <p className="text-xl text-framer-muted max-w-2xl mb-16">
              No code website builder loved by designers. Enjoy full design freedom, powerful CMS, and built-in SEO.
            </p>
            <MarqueeSection />
          </div>
        </section>

        {/* Bento Grid Showcase */}
<section className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
  <style>{`
    @keyframes bentoUp {
      0% { transform: translateY(0); }
      100% { transform: translateY(calc(-50% - 12px)); }
    }

    @keyframes bentoDown {
      0% { transform: translateY(calc(-50% - 12px)); }
      100% { transform: translateY(0); }
    }

    .bento-marquee-up {
      animation: bentoUp 30s linear infinite;
      will-change: transform;
    }

    .bento-marquee-down {
      animation: bentoDown 32s linear infinite;
      will-change: transform;
    }

    .bento-marquee-up:hover,
    .bento-marquee-down:hover {
      animation-play-state: paused;
    }

    @media (max-width: 767px) {
      .bento-marquee-up,
      .bento-marquee-down {
        animation-duration: 40s;
      }
    }
  `}</style>

  <div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
    style={{
      WebkitMaskImage:
        'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
      maskImage:
        'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)'
    }}
  >
    {/* Column 1 */}
    <div className="relative h-[1400px] overflow-hidden">
      <div className="flex flex-col gap-6 bento-marquee-up">
        <>
          <MediaCard
            src="https://framerusercontent.com/images/W1Q88PlQfYXaGug9EBkmai9By4.jpg?width=720&height=960"
            aspect="aspect-[3/4]"
          />
          <MediaCard
            src="https://framerusercontent.com/images/gmhdX4XPuJvQqId9jDmFHb7cFE.jpg?width=720&height=780"
            aspect="aspect-[0.92]"
          />
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4"
            poster="https://framerusercontent.com/images/4pTVxnxo0Bvii8xP7hCmmozqx7s.jpg?width=720&height=840"
            aspect="aspect-[0.85]"
          />
          <MediaCard
            src="https://framerusercontent.com/images/W1Q88PlQfYXaGug9EBkmai9By4.jpg?width=720&height=960"
            aspect="aspect-[3/4]"
          />
        </>

        <>
          <MediaCard
            src="https://framerusercontent.com/images/W1Q88PlQfYXaGug9EBkmai9By4.jpg?width=720&height=960"
            aspect="aspect-[3/4]"
          />
          <MediaCard
            src="https://framerusercontent.com/images/gmhdX4XPuJvQqId9jDmFHb7cFE.jpg?width=720&height=780"
            aspect="aspect-[0.92]"
          />
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4"
            poster="https://framerusercontent.com/images/4pTVxnxo0Bvii8xP7hCmmozqx7s.jpg?width=720&height=840"
            aspect="aspect-[0.85]"
          />
          <MediaCard
            src="https://framerusercontent.com/images/W1Q88PlQfYXaGug9EBkmai9By4.jpg?width=720&height=960"
            aspect="aspect-[3/4]"
          />
        </>
      </div>
    </div>

    {/* Column 2 */}
    <div className="relative h-[1400px] overflow-hidden">
      <div className="flex flex-col gap-6 bento-marquee-down">
        <>
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/zpb9hZndtQsAQpA0FWIclU2ZHfw.mp4"
            poster="https://framerusercontent.com/images/uS0nUv30GToaflDaraI9qVUIwU.png?width=1068&height=1080"
            aspect="aspect-square"
          />
          <MediaCard
            src="https://framerusercontent.com/images/gmhdX4XPuJvQqId9jDmFHb7cFE.jpg?width=720&height=780"
            aspect="aspect-[0.92]"
          />
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4"
            poster="https://framerusercontent.com/images/4pTVxnxo0Bvii8xP7hCmmozqx7s.jpg?width=720&height=840"
            aspect="aspect-[0.85]"
          />
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/zpb9hZndtQsAQpA0FWIclU2ZHfw.mp4"
            poster="https://framerusercontent.com/images/uS0nUv30GToaflDaraI9qVUIwU.png?width=1068&height=1080"
            aspect="aspect-square"
          />
        </>

        <>
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/zpb9hZndtQsAQpA0FWIclU2ZHfw.mp4"
            poster="https://framerusercontent.com/images/uS0nUv30GToaflDaraI9qVUIwU.png?width=1068&height=1080"
            aspect="aspect-square"
          />
          <MediaCard
            src="https://framerusercontent.com/images/gmhdX4XPuJvQqId9jDmFHb7cFE.jpg?width=720&height=780"
            aspect="aspect-[0.92]"
          />
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4"
            poster="https://framerusercontent.com/images/4pTVxnxo0Bvii8xP7hCmmozqx7s.jpg?width=720&height=840"
            aspect="aspect-[0.85]"
          />
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/zpb9hZndtQsAQpA0FWIclU2ZHfw.mp4"
            poster="https://framerusercontent.com/images/uS0nUv30GToaflDaraI9qVUIwU.png?width=1068&height=1080"
            aspect="aspect-square"
          />
        </>
      </div>
    </div>

    {/* Column 3 */}
    <div className="relative h-[1400px] overflow-hidden w-full max-w-[480px] mx-auto filter contrast-105">
      <div className="flex flex-col gap-6 bento-marquee-up">
        <>
          <MediaCard
            src="https://framerusercontent.com/images/Hp4KG1pwKb6cl66bNB9b2pYWQ3Y.jpg?width=480&height=987"
            aspect="aspect-[0.48]"
          />
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/QfJEiLDoHB5b7C3TtRfG3xFqCog.mp4"
            poster="https://framerusercontent.com/images/c8yQcxKjBlCZWoqWoRoBRvjcKo.jpg?width=400&height=864"
            aspect="aspect-[0.46]"
          />
          <MediaCard
            src="https://framerusercontent.com/images/cx71XZYYWfIozOc1rn55Bw.jpg?width=480&height=1039"
            aspect="aspect-[0.46]"
          />
          <MediaCard
            src="https://framerusercontent.com/images/Hp4KG1pwKb6cl66bNB9b2pYWQ3Y.jpg?width=480&height=987"
            aspect="aspect-[0.48]"
          />
        </>

        <>
          <MediaCard
            src="https://framerusercontent.com/images/Hp4KG1pwKb6cl66bNB9b2pYWQ3Y.jpg?width=480&height=987"
            aspect="aspect-[0.48]"
          />
          <MediaCard
            type="video"
            src="https://framerusercontent.com/assets/QfJEiLDoHB5b7C3TtRfG3xFqCog.mp4"
            poster="https://framerusercontent.com/images/c8yQcxKjBlCZWoqWoRoBRvjcKo.jpg?width=400&height=864"
            aspect="aspect-[0.46]"
          />
          <MediaCard
            src="https://framerusercontent.com/images/cx71XZYYWfIozOc1rn55Bw.jpg?width=480&height=1039"
            aspect="aspect-[0.46]"
          />
          <MediaCard
            src="https://framerusercontent.com/images/Hp4KG1pwKb6cl66bNB9b2pYWQ3Y.jpg?width=480&height=987"
            aspect="aspect-[0.48]"
          />
        </>
      </div>
    </div>
  </div>
</section>

        {/* Features */}
        <section
          id="features"
          className="relative px-6 md:px-12 max-w-[1400px] mx-auto py-24"
        >
          <header className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Create, collaborate, and go live
            </h2>
            <p className="text-xl text-framer-muted">
              Build professional sites natively in a canvas that is easy to use but packed with power.
            </p>
          </header>

          <div className="relative lg:grid lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20 items-start">
            {/* LEFT SIDE */}
            <div className="hidden lg:block sticky top-24 self-start z-30 h-fit">
              <div className="flex flex-col">
                <a
                  href="#panel-ai"
                  className="w-full border-t border-white/[0.10] py-6 cursor-pointer group"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-200">
                      AI
                    </h3>
                    <div className="grid grid-rows-[1fr] opacity-100 mt-4 transition-all duration-300 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-framer-muted text-lg leading-relaxed max-w-md">
                          Generate site layouts and advanced components in seconds with AI, so you can skip the blank canvas and start designing with confidence.
                        </p>
                        <span className="inline-block mt-4 text-framer-accent underline text-lg font-medium hover:opacity-80 transition-opacity">
                          Learn more
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="#panel-design"
                  className="w-full border-t border-white/[0.10] py-6 cursor-pointer group"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold tracking-tight text-white/50 group-hover:text-white/80 transition-colors duration-200">
                      Design
                    </h3>
                  </div>
                </a>

                <a
                  href="#panel-cms"
                  className="w-full border-t border-white/[0.10] py-6 cursor-pointer group"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold tracking-tight text-white/50 group-hover:text-white/80 transition-colors duration-200">
                      CMS
                    </h3>
                  </div>
                </a>

                <a
                  href="#panel-collaborate"
                  className="w-full border-t border-white/[0.10] py-6 cursor-pointer group"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold tracking-tight text-white/50 group-hover:text-white/80 transition-colors duration-200">
                      Collaborate
                    </h3>
                  </div>
                </a>

                <div className="border-t w-full border-white/[0.10]" />
              </div>
            </div>

            {/* MOBILE LEFT LIST */}
            <div className="lg:hidden mb-10">
              <div className="flex flex-col border-t border-white/[0.10]">
                <div className="py-5 text-2xl font-semibold text-white">AI</div>
                <div className="py-5 border-t border-white/[0.10] text-2xl font-semibold text-white/60">
                  Design
                </div>
                <div className="py-5 border-t border-white/[0.10] text-2xl font-semibold text-white/60">
                  CMS
                </div>
                <div className="py-5 border-t border-white/[0.10] text-2xl font-semibold text-white/60">
                  Collaborate
                </div>
              </div>
            </div>

            {/* RIGHT SIDE SCROLL STACK */}
            <div className="relative">
              <div className="lg:h-[78vh] lg:min-h-[560px] lg:max-h-[760px] lg:overflow-y-auto lg:pr-2 snap-y snap-mandatory space-y-8">
                {/* PANEL AI */}
                <div
                  id="panel-ai"
                  className="snap-start h-[78vh] min-h-[560px] max-h-[760px]"
                >
                  <div className="w-full h-full rounded-[28px] border bg-framer-panel overflow-hidden shadow-2xl relative border-white/[0.10] ring-1 ring-inset ring-white/[0.05]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#ddd4bd]/70 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-2xl flex items-center gap-6 z-20 w-max max-w-[90vw] overflow-hidden">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-[13px] font-medium text-white">
                          <span>Click to edit</span>
                          <span>·</span>
                          <span>Changes are auto-saved</span>
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70">
                          <span>Site saved</span>
                          <span>·</span>
                          <span className="truncate max-w-[200px] md:max-w-none">
                            Collaborators are notified. Changes will be visible...
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 ml-auto">
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
                          <iconify-icon icon="simple-icons:framer" class="text-white text-sm" />
                          <span className="text-[13px] font-semibold text-white">Open in Framer</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                          <iconify-icon icon="solar:check-read-linear" class="text-black text-sm" />
                          <span className="text-[13px] font-semibold text-black">Finish Editing</span>
                        </button>
                      </div>
                    </div>

                    <img
                      src="https://framerusercontent.com/images/ngIss00CAh70aoEKRyfijGw6Mg.jpeg?width=2400&height=1800"
                      alt="AI Feature"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                  </div>
                </div>

                {/* PANEL DESIGN */}
                <div
                  id="panel-design"
                  className="snap-start h-[78vh] min-h-[560px] max-h-[760px]"
                >
                  <div className="w-full h-full rounded-[28px] border bg-framer-panel overflow-hidden shadow-2xl relative border-white/[0.10] ring-1 ring-inset ring-white/[0.05]">
                    <img
                      src="https://framerusercontent.com/images/gm6G5tPm5Eelvoyl6edoNJ58qDk.jpeg?width=2400&height=1800"
                      alt="Design Feature"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                  </div>
                </div>

                {/* PANEL CMS */}
                <div
                  id="panel-cms"
                  className="snap-start h-[78vh] min-h-[560px] max-h-[760px]"
                >
                  <div className="w-full h-full rounded-[28px] border bg-framer-panel overflow-hidden shadow-2xl relative border-white/[0.10] ring-1 ring-inset ring-white/[0.05]">
                    <div className="w-full h-full bg-framer-panel flex flex-col p-6 lg:p-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#101010] via-black to-black z-0" />

                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[18%] left-[16%] w-2.5 h-2.5 rounded-full bg-blue-400/80 animate-pulse" />
                        <div className="absolute top-[28%] right-[20%] w-2 h-2 rounded-full bg-cyan-300/70 animate-pulse" />
                        <div className="absolute bottom-[24%] left-[26%] w-2 h-2 rounded-full bg-blue-500/70 animate-pulse" />
                        <div className="absolute bottom-[20%] right-[18%] w-2.5 h-2.5 rounded-full bg-emerald-400/70 animate-pulse" />
                        <div className="absolute top-[19%] left-[18%] w-[26%] h-px bg-gradient-to-r from-blue-400/40 to-transparent rotate-[8deg]" />
                        <div className="absolute top-[29%] right-[22%] w-[22%] h-px bg-gradient-to-l from-cyan-300/40 to-transparent -rotate-[12deg]" />
                        <div className="absolute bottom-[22%] left-[28%] w-[24%] h-px bg-gradient-to-r from-blue-400/30 to-transparent rotate-[14deg]" />
                      </div>

                      <div className="relative z-10 flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-framer-accent/10 flex items-center justify-center border border-white/[0.14]">
                            <iconify-icon icon="solar:server-square-bold" class="text-2xl text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-lg tracking-tight">Content</h4>
                            <p className="text-white/50 text-sm">Aura CMS Integrated</p>
                          </div>
                        </div>

                        <div className="px-3 py-1.5 rounded-full bg-white/5 border text-white/70 text-xs font-medium flex items-center gap-2 shadow-inner border-white/[0.06]">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          Live Sync
                        </div>
                      </div>

                      <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 flex-1 min-h-0">
                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col gap-3 overflow-hidden">
                          {[
                            ["L", "Landing Page", "landing-page", "Published", "text-green-400"],
                            ["P", "Pricing", "pricing", "Published", "text-green-400"],
                            ["D", "Docs", "docs", "Draft", "text-yellow-400"],
                            ["T", "Templates", "templates", "Published", "text-green-400"],
                          ].map(([letter, title, slug, status, statusClass]) => (
                            <div
                              key={title}
                              className="flex items-center gap-4 p-4 rounded-xl border bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 border-white/[0.06]"
                            >
                              <img
                                src={`https://placehold.co/120x120/111/fff?text=${letter}`}
                                alt="CMS cover"
                                className="w-14 h-14 rounded-lg object-cover bg-black/40 border border-white/[0.06]"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-white font-medium truncate">{title}</div>
                                <div className="flex items-center gap-2 mt-1 text-xs text-white/40">
                                  <span className="truncate">{slug}</span>
                                  <span className="w-1 h-1 rounded-full bg-white/20" />
                                  <span className={statusClass}>{status}</span>
                                </div>
                              </div>
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-400/80 animate-pulse" />
                            </div>
                          ))}
                        </div>

                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col">
                          <div className="text-[11px] uppercase tracking-[0.24em] text-white/45 mb-4">
                            Schema
                          </div>
                          <div className="relative flex-1 min-h-[260px] rounded-xl border border-white/[0.06] bg-black/30 overflow-hidden">
                            <div className="absolute left-1/2 top-[16%] -translate-x-1/2 px-3 py-2 rounded-xl border border-white/[0.10] bg-white/[0.05] text-sm text-white">
                              Collection
                            </div>
                            <div className="absolute left-[16%] top-[50%] -translate-y-1/2 px-3 py-2 rounded-xl border border-white/[0.10] bg-white/[0.05] text-xs text-white/80">
                              Fields
                            </div>
                            <div className="absolute right-[14%] top-[38%] px-3 py-2 rounded-xl border border-white/[0.10] bg-white/[0.05] text-xs text-white/80">
                              Filters
                            </div>
                            <div className="absolute right-[10%] bottom-[18%] px-3 py-2 rounded-xl border border-white/[0.10] bg-white/[0.05] text-xs text-white/80">
                              Templates
                            </div>
                            <div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-px h-[18%] bg-gradient-to-b from-blue-400/60 to-transparent" />
                            <div className="absolute left-[31%] top-[52%] w-[19%] h-px bg-gradient-to-r from-blue-400/50 to-transparent" />
                            <div className="absolute right-[28%] top-[42%] w-[16%] h-px bg-gradient-to-l from-cyan-300/50 to-transparent" />
                            <div className="absolute right-[24%] bottom-[26%] w-[20%] h-px bg-gradient-to-l from-emerald-400/50 to-transparent" />
                            <div className="absolute left-1/2 top-[44%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PANEL COLLABORATE */}
                <div
                  id="panel-collaborate"
                  className="snap-start h-[78vh] min-h-[560px] max-h-[760px]"
                >
                  <div className="w-full h-full rounded-[28px] border bg-framer-panel overflow-hidden shadow-2xl relative border-white/[0.10] ring-1 ring-inset ring-white/[0.05]">
                    <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
                      <img
                        src="https://framerusercontent.com/images/Hp4KG1pwKb6cl66bNB9b2pYWQ3Y.jpg?width=480&height=987"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity filter blur-[2px] scale-105"
                        alt="Collaborate Background"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-framer-panel via-transparent to-framer-panel opacity-80" />

                      <div className="absolute top-[25%] left-[20%] animate-[bounce_3s_infinite] drop-shadow-2xl z-20">
                        <iconify-icon icon="solar:cursor-bold" class="text-4xl text-[#0099ff]" />
                        <div className="bg-[#0099ff] text-white text-xs px-3 py-1.5 rounded-full rounded-tl-none shadow-xl font-medium whitespace-nowrap mt-1 ml-5 border border-white/20 tracking-wide">
                          Sarah Jenkins
                        </div>
                      </div>

                      <div
                        className="absolute top-[60%] right-[20%] animate-[bounce_4s_infinite] drop-shadow-2xl z-20"
                        style={{ animationDelay: "1.5s" }}
                      >
                        <iconify-icon icon="solar:cursor-bold" class="text-4xl text-[#ff0055]" />
                        <div className="bg-[#ff0055] text-white text-xs px-3 py-1.5 rounded-full rounded-tl-none shadow-xl font-medium whitespace-nowrap mt-1 ml-5 border border-white/20 tracking-wide">
                          David K.
                        </div>
                      </div>

                      <div className="relative z-10 w-[300px] bg-[#1a1a1a]/80 backdrop-blur-xl border rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-500 group border-white/[0.10] ring-1 ring-inset ring-white/[0.05]">
                        <div className="w-full h-32 bg-black/40 rounded-xl mb-5 border relative overflow-hidden group-hover:border-[#0099ff]/50 transition-colors border-white/[0.06]">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0099ff]/10 to-[#ff0055]/10 mix-blend-overlay" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <iconify-icon icon="solar:gallery-bold" class="text-4xl text-white/10" />
                          </div>
                        </div>

                        <div className="h-3 w-3/4 bg-white/10 rounded-full mb-3" />
                        <div className="h-3 w-1/2 bg-white/5 rounded-full mb-8" />

                        <div className="h-11 w-full bg-[#0099ff] rounded-xl flex items-center justify-center text-white/90 text-sm font-semibold shadow-inner border border-white/20 hover:bg-[#0088ee] transition-colors cursor-pointer">
                          Publish Updates
                        </div>

                        <div className="absolute -inset-3 border-2 border-[#0099ff] border-dashed rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none duration-500" />
                        <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#0099ff] rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_10px_#0099ff]" />
                        <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#0099ff] rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_10px_#0099ff]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EffectsSection />
        <LocalizationSection />
        <ScaleSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}