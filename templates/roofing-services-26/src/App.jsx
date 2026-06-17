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



      document.addEventListener("DOMContentLoaded", () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px 0px -100px 0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('reveal-active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const hiddenElements = document.querySelectorAll('.reveal-wait');
          hiddenElements.forEach((el) => observer.observe(el));
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
      
<div className="absolute top-0 w-full h-screen -z-10 mix-blend-soft-light brightness-200 bg-cover bg-center opacity-90" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dae594be-13b8-4284-813e-54cf8b5c4b96_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="utility-bar font-geist" style={{}}>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="font-sans" style={{}}>
          Serving Greater Los Angeles &amp; The Valley
        </span>
</div>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1 font-sans" style={{}}>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="14"></iconify-icon>
          5-Star Rated
        </span>
<span className="opacity-50 font-sans" style={{}}>|</span>
<span className="font-sans" style={{}}>Lic #987654</span>
<span className="opacity-50 font-sans" style={{}}>|</span>
<span className="flex items-center gap-1 font-semibold text-white font-sans" style={{}}>
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
          (323) 555-0199
        </span>
</div>
</div>

<header className="">
<div className="logo text-2xl font-newsreader font-light tracking-tighter">
        ROOF
        <span className="text-[#c05621] font-newsreader font-light tracking-tighter" style={{}}>
          LA
        </span>
        ND
        <span className="text-[#c05621] font-newsreader font-light tracking-tighter" style={{}}>
          .
        </span>
</div>
<nav className="">
<ul className="flex gap-8 items-center list-none font-geist" style={{}}>

<li className="nav-item group">
<a className="nav-link font-sans" href="#" style={{}}>
              Residential
              <iconify-icon className="group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</a>
<div className="dropdown-menu">
<a className="dropdown-item font-sans" href="#" style={{}}>
                Asphalt Shingle Replacement
              </a>
<a className="dropdown-item font-sans" href="#" style={{}}>
                Cool Roof Systems
                <span className="text-xs text-green-500 ml-1 font-sans" style={{}}>
                  Title 24
                </span>
</a>
<a className="dropdown-item font-sans" href="#" style={{}}>
                Clay &amp; Spanish Tile
              </a>
</div>
</li>

<li className="nav-item group">
<a className="nav-link font-sans" href="#" style={{}}>
              Commercial
              <iconify-icon className="group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</a>
<div className="dropdown-menu">
<a className="dropdown-item font-sans" href="#" style={{}}>
                Flat Roof Coating / Restoration
              </a>
<a className="dropdown-item font-sans" href="#" style={{}}>
                TPO &amp; Torch Down
              </a>
<a className="dropdown-item font-sans" href="#" style={{}}>
                HOA &amp; Multi-Family Maintenance
              </a>
</div>
</li>

<li className="nav-item group">
<a className="nav-link font-sans" href="#" style={{}}>
              Service Areas
              <iconify-icon className="group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</a>
<div className="dropdown-menu">
<a className="dropdown-item font-sans" href="#" style={{}}>
                Central LA
                <span className="block text-xs opacity-50 font-sans" style={{}}>
                  Silver Lake, Hollywood
                </span>
</a>
<a className="dropdown-item font-sans" href="#" style={{}}>
                Westside
                <span className="block text-xs opacity-50 font-sans" style={{}}>
                  Santa Monica, Beverly Hills
                </span>
</a>
<a className="dropdown-item font-sans" href="#" style={{}}>
                The Valley
                <span className="block text-xs opacity-50 font-sans" style={{}}>
                  Sherman Oaks, Encino
                </span>
</a>
</div>
</li>
<li className="nav-item">
<a className="nav-link emergency-link font-sans" href="#emergency" style={{}}>
              Storm &amp; Emergency
            </a>
</li>
</ul>
</nav>
<div className="flex items-center gap-4">
<button className="btn-beam btn-beam-small">
<span className="text-black tracking-wide font-semibold font-sans" style={{}}>
            GET AN INSTANT QUOTE
          </span>
</button>
<div className="lg:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</div>
</header>
<main className="">
<section className="" id="hero" style={{paddingTop: '100px'}}>
<div className="container relative flex flex-col justify-center h-full">
<style style={{}}>
            /* Fix for parent section masking issue */
            #hero {
                mask-image: none !important;
                -webkit-mask-image: none !important;
            }
            /* Apply mask only to the hero background image within the section */
            #hero .hero-bg {
                mask-image: linear-gradient(180deg, transparent 0%, black 5%, black 35%, transparent 100%) !important;
                -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 5%, black 35%, transparent 100%) !important;
            }
          </style>
<div className="reveal-wait reveal-active mb-8">
<span className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase font-sans" style={{}}>
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
              Southern California
            </span>
</div>
<h1 className="reveal-wait delay-100 reveal-active md:text-9xl lg:text-[11rem] leading-[0.85] text-8xl text-white mb-8 font-newsreader font-light tracking-tighter" style={{}}>
            Engineered
            <br/>
            Protection.
          </h1>
<p className="reveal-wait delay-200 reveal-active text-xl md:text-2xl lg:text-3xl text-zinc-400 max-w-4xl leading-relaxed mt-2 font-newsreader font-light tracking-tighter" style={{}}>
            Mastering the intersection of structural integrity and architectural
            aesthetic for Los Angeles' most distinguished estates.
          </p>
<div className="reveal-wait delay-300 reveal-active mt-12">
<button className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/10 hover:border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 backdrop-blur-md">
<span className="text-sm font-medium tracking-[0.2em] text-white uppercase relative z-10 group-hover:text-white transition-colors font-sans" style={{}}>
                Request Audit
              </span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
</button>
</div>
</div>
</section>
<section className="logo-strip reveal-wait">
<div className="logo-container">
<iconify-icon height="36" icon="simple-icons:houzz" width="96"></iconify-icon>
<iconify-icon height="36" icon="simple-icons:google" width="96"></iconify-icon>
<iconify-icon height="36" icon="simple-icons:yelp" width="96"></iconify-icon>
<iconify-icon height="36" icon="simple-icons:trustpilot" width="96"></iconify-icon>
<iconify-icon height="36" icon="simple-icons:tesla" width="96"></iconify-icon>
</div>
</section>
<section className="container grid-section" id="services">
<div className="reveal-wait reveal-active">
<span className="accent-text font-sans" style={{}}>Our Expertise</span>
<h2 className="font-semibold tracking-tight font-sans" style={{}}>
            Material
            <br/>
            Mastery.
          </h2>
<p className="font-sans" style={{}}>
            We don't just install roofs; we engineer water-shedding systems
            designed for seismic activity and high thermal exposure.
          </p>
<div className="" style={{marginTop: '4rem'}}>
<iconify-icon className="" height="48" icon="solar:shield-check-linear" style={{color: 'var(--color-accent)', marginBottom: '1rem'}} width="48"></iconify-icon>
<p className="font-sans" style={{fontSize: '1rem'}}>
              Lifetime Workmanship Warranty included with all premium
              architectural installations.
            </p>
</div>
</div>
<div className="reveal-wait delay-200 reveal-active">
<div className="service-item">
<h3 className="text-3xl font-newsreader font-light tracking-tighter" style={{}}>
              Spanish Clay Tile
            </h3>
<iconify-icon className="service-icon" icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</div>
<div className="service-item">
<h3 className="text-3xl font-newsreader font-light tracking-tighter" style={{}}>
              Standing Seam Metal
            </h3>
<iconify-icon className="service-icon" icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</div>
<div className="service-item">
<h3 className="text-3xl font-newsreader font-light tracking-tighter" style={{}}>
              Composite Slate
            </h3>
<iconify-icon className="service-icon" icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</div>
<div className="service-item">
<h3 className="text-3xl font-newsreader font-light tracking-tighter" style={{}}>
              Flat Roof Systems
            </h3>
<iconify-icon className="service-icon" icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</div>
</div>
</section>
<section className="" id="portfolio">
<div className="container">
<div className="reveal-wait">
<span className="accent-text font-sans" style={{}}>Selected Works</span>
<h2 className="font-semibold tracking-tight font-sans" style={{}}>
              The Collection.
            </h2>
</div>
<div className="gallery">
<div className="gallery-item reveal-wait delay-100">
<img alt="Project 1" className="gallery-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3c52f3-9b10-41c8-b66e-c3cc15855eda_1600w.webp" style={{}}/>
</div>
<div className="gallery-item reveal-wait delay-200">
<img alt="Project 2" className="gallery-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4c91ebf-0feb-4f79-97c7-c4a5a32d91ac_1600w.webp"/>
</div>
<div className="gallery-item reveal-wait delay-300">
<img alt="Project 3" className="gallery-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02a38623-7a06-4ac3-952c-c7db6ba25178_1600w.webp"/>
</div>
</div>
</div>
</section>
<section className="" id="contact" style={{padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
<div className="container" style={{textAlign: 'center'}}>
<h2 className="reveal-wait font-semibold tracking-tight font-sans" style={{marginBottom: '1rem'}}>
            Secure the envelope.
          </h2>
<p className="reveal-wait delay-100 font-sans" style={{margin: '0px auto 3rem', maxWidth: '600px'}}>
            Schedule a comprehensive assessment of your property's roofing
            system.
          </p>
<div className="reveal-wait delay-200">
<button className="btn-beam">
<span className="font-sans" style={{}}>(323) 555-0199</span>
</button>
</div>
</div>
</section>
</main>

<footer className="">
<div className="container footer-grid font-geist" style={{}}>

<div className="footer-col">
<div className="logo text-2xl font-newsreader font-light tracking-tighter" style={{marginBottom: '1.5rem'}}>
            ROOFLAND
          </div>
<p className="font-sans" style={{fontSize: '0.95rem', color: 'rgb(161, 161, 170)', marginBottom: '2rem'}}>
            Los Angeles’ premier storm restoration and cool-roofing specialists.
            We combine classic craftsmanship with modern heat-reflective
            technology.
          </p>
<div className="flex gap-4 opacity-70">

<div className="flex items-center gap-1 border border-white/20 px-2 py-1 rounded text-xs font-sans" style={{}}>
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
              Google Guaranteed
            </div>
<div className="flex items-center gap-1 border border-white/20 px-2 py-1 rounded text-xs font-sans" style={{}}>
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
              BBB A+
            </div>
</div>
</div>

<div className="footer-col">
<h4 className="font-sans" style={{}}>Services</h4>
<ul className="">
<li className="">
<a className="font-sans" href="#" style={{}}>Emergency Leak Repair</a>
</li>
<li className="">
<a className="font-sans" href="#" style={{}}>Roof Replacement Cost</a>
</li>
<li className="">
<a className="font-sans" href="#" style={{}}>
                Flat Roof Silicone Coating
              </a>
</li>
<li className="">
<a className="font-sans" href="#" style={{}}>
                Insurance Claim Assistance
              </a>
</li>
</ul>
</div>

<div className="footer-col">
<h4 className="font-sans" style={{}}>Serving Your Neighborhood</h4>
<ul className="">
<li className="">
<a className="font-sans" href="#" style={{}}>Santa Monica Roofing</a>
</li>
<li>
<a className="font-sans" href="#" style={{}}>
                Silver Lake &amp; Echo Park
              </a>
</li>
<li>
<a className="font-sans" href="#" style={{}}>
                Pasadena &amp; Altadena
              </a>
</li>
<li className="">
<a className="font-sans" href="#" style={{}}>Beverly Hills Estates</a>
</li>
</ul>
</div>

<div className="footer-col">
<h4 className="font-sans" style={{}}>Contact</h4>
<div className="flex flex-col gap-4 text-sm text-[#a1a1aa]">
<div className="flex gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:map-point-linear"></iconify-icon>
<span className="font-sans" style={{}}>
                123 Sunset Blvd, Suite 400Los Angeles, CA 90026
              </span>
</div>
<div className="flex gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors font-sans" href="tel:3235550199" style={{}}>
                (323) 555-0199
              </a>
</div>
<div className="flex gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors font-sans" href="mailto:estimates@rooflandla.com" style={{}}>
                estimates@rooflandla.com
              </a>
</div>
<div className="flex gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-sans" style={{}}>
                Mon-Sun: 7:00 AM - 8:00 PM
              </span>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
