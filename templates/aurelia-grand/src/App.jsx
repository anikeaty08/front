import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fcfaf8',
100: '#f7f3ed',
200: '#ede4d8',
300: '#e0ccb4',
400: '#d0ad88',
500: '#c29062',
600: '#b5794d',
700: '#965f3d',
800: '#7c4f36',
900: '#64412f',
}
},
animation: {
'ping-slow': 'pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
'scroll': 'scroll 1.5s infinite',
'bounce-slow': 'bounce 2s infinite',
'fade-in': 'fadeIn 0.5s ease-out',
'marquee': 'marquee 60s linear infinite',
},
keyframes: {
pingSlow: {
'0%': { transform: 'scale(1)', opacity: '1' },
'75%, 100%': { transform: 'scale(2)', opacity: '0' },
},
pulseGlow: {
'0%, 100%': { opacity: '0.5' },
'50%': { opacity: '0.8' },
},
scroll: {
'0%': { transform: 'translateY(0)', opacity: '1' },
'100%': { transform: 'translateY(12px)', opacity: '0' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



      // --- Data for Team Modal ---
      const teamData = {
        gm: {
          name: "Arthur Sterling",
          role: "General Manager",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
          bio: "Arthur Sterling has dedicated over 30 years to the art of luxury hospitality. Formerly managing 5-star properties in Paris and Tokyo, he brings a global perspective to The Aurelia Grand, ensuring every guest experience is nothing short of perfection.",
          certs: [
            "Hotelier of the Year 2023",
            "Cornell Hospitality Management Alumnus",
            "Board Member, Global Luxury Hotels"
          ]
        },
        chef: {
          name: "Elena Vance",
          role: "Executive Chef",
          image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop",
          bio: "With two Michelin stars to her name, Chef Elena Vance creates culinary masterpieces that blend local seasonal ingredients with avant-garde techniques. Her philosophy is simple: food should not just sustain, but inspire.",
          certs: [
            "2 Michelin Stars (2022-Present)",
            "James Beard Award Nominee",
            "MasterChef Guest Judge"
          ]
        }
      };

      // --- Modal Functions ---
      function openBookingForm(packageType = '') {
        const modal = document.getElementById('booking-modal');
        const select = modal.querySelector('select');

        if (packageType) {
          for(let i=0; i < select.options.length; i++) {
            if (select.options[i].value === packageType || select.options[i].text.includes(packageType)) {
              select.selectedIndex = i;
              break;
            }
          }
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }

      function closeBookingForm() {
        const modal = document.getElementById('booking-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }

      function handleBookingSubmit(event) {
        event.preventDefault();
        const btn = event.target.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.disabled = true;
        btn.innerHTML = '<iconify-icon icon="line-md:loading-loop" width="24"></iconify-icon> Checking...';

        setTimeout(() => {
          btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon> Available!';
          btn.classList.remove('bg-brand-600', 'hover:bg-brand-700');
          btn.classList.add('bg-green-700', 'hover:bg-green-800');

          setTimeout(() => {
            closeBookingForm();
            event.target.reset();
            setTimeout(() => {
              btn.disabled = false;
              btn.innerHTML = originalText;
              btn.classList.add('bg-brand-600', 'hover:bg-brand-700');
              btn.classList.remove('bg-green-700', 'hover:bg-green-800');
            }, 500);
          }, 1500);
        }, 1500);
      }

      function openTeamModal(memberKey) {
        const member = teamData[memberKey];
        if (!member) return;

        document.getElementById('team-modal-image').src = member.image;
        document.getElementById('team-modal-name').textContent = member.name;
        document.getElementById('team-modal-role').textContent = member.role;
        document.getElementById('team-modal-bio').textContent = member.bio;

        const certsList = document.getElementById('team-modal-certs');
        certsList.innerHTML = '';
        member.certs.forEach(cert => {
          const li = document.createElement('li');
          li.className = 'flex items-center gap-3 text-sm text-gray-700';
          li.innerHTML = `<iconify-icon icon="solar:medal-ribbon-linear" width="18" class="text-brand-600 flex-shrink-0"></iconify-icon> ${cert}`;
          certsList.appendChild(li);
        });

        const modal = document.getElementById('team-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }

      function closeTeamModal() {
        const modal = document.getElementById('team-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }

      // --- UI Interaction Functions ---
      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('menu-closed')) {
          menu.classList.remove('menu-closed');
          menu.classList.add('menu-open');
        } else {
          menu.classList.add('menu-closed');
          menu.classList.remove('menu-open');
        }
      }

      function closeMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.add('menu-closed');
        menu.classList.remove('menu-open');
      }

      function togglePower() {
        const btn = document.getElementById('power-button');
        const text = document.getElementById('power-text');
        btn.classList.toggle('active');
        text.classList.toggle('powered');
      }

      // --- Scroll Reveal Logic ---
      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
        });

        window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 20) {
            nav.classList.add('shadow-md');
          } else {
            nav.classList.remove('shadow-md');
          }
        });
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const spotlightTargets = [
          ...document.querySelectorAll('.service-card'),
          ...document.querySelectorAll('#testimonials .animate-marquee > div'),
          ...document.querySelectorAll('#offers .grid > div'),
          ...document.querySelectorAll('#contact .grid > a'),
          ...document.querySelectorAll('#contact .grid > div')
        ];

        spotlightTargets.forEach(card => {
          card.classList.add('spotlight-card');
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-500/20 blur-[70px] animate-pulse-glow mix-blend-multiply"></div>
<div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-amber-500/20 blur-[70px] animate-pulse-glow mix-blend-multiply" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-stone-500/20 blur-[70px] animate-pulse-glow mix-blend-multiply" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<div className="flex-shrink-0 flex items-center gap-2">

<iconify-icon className="text-brand-600" icon="solar:crown-star-linear" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tight text-gray-900 uppercase">Aurelia Grand</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors uppercase tracking-wide" href="#suites">
            Suites
          </a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors uppercase tracking-wide" href="#dining">
            Dining
          </a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors uppercase tracking-wide" href="#wellness">
            Wellness
          </a>
<div className="flex items-center gap-4 ml-2">
<a className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-brand-600 transition-colors tracking-tight" href="tel:1800555000">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              1800 555 000
            </a>
<button className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cta-glow" onclick="openBookingForm()">
              Book Your Stay
            </button>
</div>
</div>

<div className="flex items-center gap-4 md:hidden">
<a className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 border border-brand-100" href="tel:1800555000">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
<button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-brand-500" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="menu-closed flex flex-col bg-white/95 backdrop-blur-xl border-t border-gray-100 md:hidden absolute top-24 w-full left-0 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-600 transition-colors" href="#suites" onclick="closeMobileMenu()">
            Suites &amp; Rooms
          </a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-600 transition-colors" href="#dining" onclick="closeMobileMenu()">
            Fine Dining
          </a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-600 transition-colors" href="#wellness" onclick="closeMobileMenu()">
            Spa &amp; Wellness
          </a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-600 transition-colors" href="#contact" onclick="closeMobileMenu()">
            Contact
          </a>
<button className="w-full bg-brand-600 text-white text-base font-medium py-3 rounded-lg shadow-sm active:scale-[0.98] transition-transform cta-glow" onclick="openBookingForm(); closeMobileMenu()">
            Book Your Stay
          </button>
</div>
</div>
</nav>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="Luxury Hotel Lobby" className="w-full h-full object-cover opacity-100" src="https://images.unsplash.com/photo-1561501878-aabd62634533?w=3840&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gray-900/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
</div>

<div className="relative z-10 w-full px-6 flex flex-col items-center justify-center pt-16">

<div className="max-w-5xl w-full mx-auto text-center animate-fade-in">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-sm ring-1 ring-white/5">
<iconify-icon className="text-brand-300" icon="solar:star-bold"></iconify-icon>
<span className="text-brand-100 text-xs font-semibold tracking-widest uppercase">
              5-Star Luxury • Heart of the City
            </span>
</div>
<div className="flex flex-col items-center justify-center gap-6 mb-6">

<button className="power-button relative w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center transition-all duration-500 group mb-2 hover:bg-white/10 backdrop-blur-sm" id="power-button" onclick="togglePower()">
<iconify-icon className="text-white/80 group-hover:text-white transition-colors" icon="solar:key-minimalistic-linear" width="24"></iconify-icon>
<div className="hidden absolute inset-0 rounded-full border border-brand-300 animate-ping-slow glow-ring"></div>
</button>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.1] transition-all duration-700 drop-shadow-xl font-serif" id="power-text">
              The Definition of <br/> Urban Luxury
            </h1>
</div>
<p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed font-light drop-shadow-md">
            Experience a sanctuary of elegance. From panoramic skyline views to world-class concierge services, we redefine hospitality.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 hover:-translate-y-0.5 text-white text-lg font-medium px-10 py-4 rounded-full shadow-lg hover:shadow-brand-500/25 transition-all duration-300 border border-transparent cta-glow" onclick="openBookingForm()">
              Check Availability
            </button>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/30 text-white text-lg font-medium px-10 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/5" href="#suites">
              Explore Suites
            </a>
</div>
</div>

<div className="mt-20 flex items-center justify-center gap-12 opacity-80 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex flex-col items-center drop-shadow-lg group cursor-default">
<div className="flex text-brand-300 gap-1 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-white/90 text-xs mt-3 font-medium tracking-widest uppercase">
              Forbes 5-Star
            </span>
</div>
<div className="h-10 w-px bg-white/20"></div>
<div className="flex flex-col items-center drop-shadow-lg group cursor-default">
<iconify-icon className="text-brand-300 group-hover:scale-110 transition-transform duration-300" icon="solar:medal-ribbon-star-linear" width="28"></iconify-icon>
<span className="text-white/90 text-xs mt-3 font-medium tracking-widest uppercase">
              Michelin Key
            </span>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-40 hover:opacity-100 transition-opacity cursor-pointer" onclick="document.getElementById('stats-section').scrollIntoView()">
<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
<div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-br from-brand-900 to-gray-900 relative overflow-hidden" id="stats-section">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center reveal">
<div className="text-4xl md:text-5xl font-serif font-medium text-brand-200 mb-2 tracking-tight">
              1924
            </div>
<div className="text-white/60 font-medium text-sm md:text-sm uppercase tracking-widest">
              Established
            </div>
</div>
<div className="text-center reveal delay-100">
<div className="text-4xl md:text-5xl font-serif font-medium text-brand-200 mb-2 tracking-tight">
              248
            </div>
<div className="text-white/60 font-medium text-sm md:text-sm uppercase tracking-widest">
              Luxury Suites
            </div>
</div>
<div className="text-center reveal delay-200">
<div className="text-4xl md:text-5xl font-serif font-medium text-brand-200 mb-2 tracking-tight">
              3
            </div>
<div className="text-white/60 font-medium text-sm md:text-sm uppercase tracking-widest">
              Signature Restaurants
            </div>
</div>
<div className="text-center reveal delay-300">
<div className="text-4xl md:text-5xl font-serif font-medium text-brand-200 mb-2 tracking-tight">
              24/7
            </div>
<div className="text-white/60 font-medium text-sm md:text-sm uppercase tracking-widest">
              Concierge
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-200 overflow-hidden relative z-10 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6 mb-16">
<div className="text-center md:text-left reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight font-serif">
            Guest Experiences
          </h2>
<div className="flex items-center justify-center md:justify-start gap-3 mb-2">
<div className="flex items-center gap-1">
<span className="text-brand-600 font-bold text-2xl">4.9</span>
<div className="flex text-brand-500">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<span className="text-gray-400 text-sm font-medium">
              | Based on 3,500+ Reviews
            </span>
</div>
<p className="text-lg text-gray-600">
            Stories from our distinguished guests.
          </p>
</div>
</div>

<div className="relative w-full">

<div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

<div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-6 px-6">

<div className="min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] bg-stone-50 p-8 rounded-xl border border-stone-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex-shrink-0 spotlight-card">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-brand-200 text-brand-800 flex items-center justify-center font-serif text-lg">
                  EP
                </div>
<div>
<div className="font-semibold text-gray-900 text-base">
                    Eleanor P.
                  </div>
<div className="text-xs text-gray-500 uppercase tracking-wide">
                    New York, USA
                  </div>
</div>
</div>
</div>
<div className="flex items-center gap-1 mb-4 text-brand-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-gray-700 text-base leading-relaxed italic font-serif">
              "An absolute dream. The attention to detail in the Presidential Suite was unmatched, and the concierge managed to secure us a reservation at the most exclusive table in town."
            </p>
</div>

<div className="min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] bg-stone-50 p-8 rounded-xl border border-stone-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex-shrink-0 spotlight-card">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-serif text-lg">
                  JM
                </div>
<div>
<div className="font-semibold text-gray-900 text-base">
                    James M.
                  </div>
<div className="text-xs text-gray-500 uppercase tracking-wide">
                    London, UK
                  </div>
</div>
</div>
</div>
<div className="flex items-center gap-1 mb-4 text-brand-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-gray-700 text-base leading-relaxed italic font-serif">
              "The Aurelia Grand isn't just a hotel; it's an experience. The spa treatments were regenerative, and the view from the rooftop bar at sunset is simply the best in the city."
            </p>
</div>

<div className="min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] bg-stone-50 p-8 rounded-xl border border-stone-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex-shrink-0 spotlight-card">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-serif text-lg">
                  SC
                </div>
<div>
<div className="font-semibold text-gray-900 text-base">
                    Sophia C.
                  </div>
<div className="text-xs text-gray-500 uppercase tracking-wide">
                    Paris, France
                  </div>
</div>
</div>
</div>
<div className="flex items-center gap-1 mb-4 text-brand-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-gray-700 text-base leading-relaxed italic font-serif">
              "Traveling for business usually feels tiring, but staying here felt like a holiday. The high-speed wifi and ergonomic room design made working a pleasure."
            </p>
</div>

<div className="min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] bg-stone-50 p-8 rounded-xl border border-stone-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex-shrink-0 spotlight-card">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-400 text-white flex items-center justify-center font-serif text-lg">
                  DK
                </div>
<div>
<div className="font-semibold text-gray-900 text-base">
                    David K.
                  </div>
<div className="text-xs text-gray-500 uppercase tracking-wide">
                    Sydney, Australia
                  </div>
</div>
</div>
</div>
<div className="flex items-center gap-1 mb-4 text-brand-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-gray-700 text-base leading-relaxed italic font-serif">
              "Impeccable service from arrival to departure. Valet was prompt, check-in was seamless, and the room service menu is Michelin-quality. Highly recommended."
            </p>
</div>
</div>
</div>
</section>

<section className="border-gray-100 border-t border-b pt-24 pb-24 relative z-10 bg-white" id="suites">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight font-serif">
            Curated Amenities
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed for the modern traveler seeking refinement and comfort in every detail.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="service-card group overflow-hidden cursor-pointer hover:shadow-2xl transition-all reveal bg-center h-[500px] bg-[url(https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2574&amp;auto=format&amp;fit=crop)] bg-cover border-gray-100 border rounded-xl relative shadow-sm spotlight-card">
<div className="service-content absolute bottom-0 left-0 right-0 p-10 z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight font-serif">
                The Wellness Spa
              </h3>
<p className="service-description text-gray-200 text-sm mb-6">
                Rejuvenate your senses with holistic treatments and thermal suites.
              </p>
<div className="service-features space-y-3">
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:spa-candle-linear" width="20"></iconify-icon>
                  Thermal Hydrotherapy Pool
                </div>
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:leaf-linear" width="20"></iconify-icon>
                  Organic Skin Treatments
                </div>
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:meditation-round-linear" width="20"></iconify-icon>
                  Private Yoga Sessions
                </div>
</div>
</div>
<div className="service-overlay absolute inset-0 opacity-80"></div>
</div>

<div className="service-card group overflow-hidden cursor-pointer hover:shadow-2xl transition-all reveal delay-100 h-[500px] bg-[url(https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop)] bg-cover bg-center border-gray-100 border rounded-xl relative shadow-sm spotlight-card">
<div className="service-content absolute bottom-0 left-0 right-0 p-10 z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight font-serif">
                Fine Dining
              </h3>
<p className="service-description text-gray-200 text-sm mb-6">
                Culinary excellence led by Executive Chef Marco Pierre.
              </p>
<div className="service-features space-y-3">
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:chef-hat-linear" width="20"></iconify-icon>
                  Signature Tasting Menu
                </div>
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:wine-glass-linear" width="20"></iconify-icon>
                  Sommelier Reserve Wine List
                </div>
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:chair-2-linear" width="20"></iconify-icon>
                  Private Dining Rooms
                </div>
</div>
</div>
<div className="service-overlay absolute inset-0 opacity-80"></div>
</div>

<div className="service-card group overflow-hidden cursor-pointer hover:shadow-2xl transition-all reveal h-[500px] bg-cover bg-center border-gray-100 border rounded-xl relative shadow-sm bg-[url(https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&amp;q=80)] spotlight-card">
<div className="service-content absolute bottom-0 left-0 right-0 p-10 z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight font-serif">
                Infinity Pool &amp; Lounge
              </h3>
<p className="service-description text-gray-200 text-sm mb-6">
                Breathtaking city views from our climate-controlled rooftop oasis.
              </p>
<div className="service-features space-y-3">
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:water-sun-linear" width="20"></iconify-icon>
                  Heated Infinity Edge
                </div>
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:glass-martini-linear" width="20"></iconify-icon>
                  Poolside Cocktail Service
                </div>
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:sofa-2-linear" width="20"></iconify-icon>
                  Private Cabanas
                </div>
</div>
</div>
<div className="service-overlay absolute inset-0 opacity-80"></div>
</div>

<div className="service-card group overflow-hidden cursor-pointer hover:shadow-2xl transition-all reveal delay-100 h-[500px] bg-[url(https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop)] bg-cover bg-center border-gray-100 border rounded-xl relative shadow-sm spotlight-card">
<div className="service-content absolute bottom-0 left-0 right-0 p-10 z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight font-serif">
                Concierge Services
              </h3>
<p className="service-description text-gray-200 text-sm mb-6">
                Our "Clefs d'Or" concierge team is at your disposal 24/7.
              </p>
<div className="service-features space-y-3">
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:ticket-linear" width="20"></iconify-icon>
                  Theatre &amp; Event Booking
                </div>
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:car-linear" width="20"></iconify-icon>
                  Luxury Chauffeur Service
                </div>
<div className="flex items-center gap-3 text-white text-sm">
<iconify-icon className="text-brand-300" icon="solar:bag-heart-linear" width="20"></iconify-icon>
                  Personal Shopping
                </div>
</div>
</div>
<div className="service-overlay absolute inset-0 opacity-80"></div>
</div>
</div>
<div className="mt-16 text-center reveal">
<button className="bg-gray-900 hover:bg-black text-white text-lg font-medium px-12 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 ring-1 ring-gray-800 tracking-wide uppercase text-sm" onclick="openBookingForm()">
            View All Amenities
          </button>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 relative z-10" id="guest-journey">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight font-serif">
            Your Stay Experience
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the moment you reserve to the moment you depart, we ensure a seamless journey.
          </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-brand-200 -z-10 transform -translate-y-1/2 border-t border-dashed border-brand-300"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative flex flex-col items-center text-center group reveal">
<div className="w-24 h-24 rounded-full bg-white border border-brand-100 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                  1
                </div>
<iconify-icon className="text-brand-600" icon="solar:calendar-search-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">
                Reserve
              </h3>
<p className="text-sm text-gray-500 leading-relaxed px-4">
                Select your preferred suite and customize your stay with our pre-arrival concierge.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-100">
<div className="w-24 h-24 rounded-full bg-white border border-brand-100 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                  2
                </div>
<iconify-icon className="text-brand-600" icon="solar:bell-bing-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">
                Arrival
              </h3>
<p className="text-sm text-gray-500 leading-relaxed px-4">
                Private transfer, seamless check-in, and a welcome glass of champagne.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-200">
<div className="w-24 h-24 rounded-full bg-white border border-brand-100 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                  3
                </div>
<iconify-icon className="text-brand-600" icon="solar:bed-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">
                Indulge
              </h3>
<p className="text-sm text-gray-500 leading-relaxed px-4">
                Experience the city's finest dining, spa treatments, and nightlife steps from your door.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-300">
<div className="w-24 h-24 rounded-full bg-white border border-brand-100 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                  4
                </div>
<iconify-icon className="text-brand-600" icon="solar:plane-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">
                Departure
              </h3>
<p className="text-sm text-gray-500 leading-relaxed px-4">
                Express checkout and luxury transfer ensuring your return journey is effortless.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-200 relative z-10 bg-white" id="offers">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight font-serif">
            Exclusive Packages
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your stay with our carefully curated experiences.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="bg-stone-50 rounded-xl shadow-lg border border-stone-100 p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 reveal spotlight-card">
<h3 className="text-2xl font-medium text-gray-900 mb-3 mt-2 tracking-tight font-serif">
              Urban Retreat
            </h3>
<p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Escape the bustle with a focus on relaxation and wellness in our premium suites.
            </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-700">
<iconify-icon className="text-brand-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                2 Nights in a Deluxe Suite
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<iconify-icon className="text-brand-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Daily Breakfast for Two
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<iconify-icon className="text-brand-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                60-minute Massage per guest
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<iconify-icon className="text-brand-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Late Checkout (2 PM)
              </li>
</ul>
<div className="mt-auto">
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-4 rounded-lg transition-all shadow-md hover:shadow-lg mb-3 tracking-wide uppercase text-xs" onclick="openBookingForm('Urban Retreat')">
                Check Availability
              </button>
<p className="text-xs text-center text-gray-400 font-medium">
                From $850 / night
              </p>
</div>
</div>

<div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-800 p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 reveal delay-100 ring-4 ring-brand-500/20 spotlight-card">
<div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl shadow-sm z-10 tracking-widest uppercase">
              Most Popular
            </div>
<h3 className="text-2xl font-medium text-white mb-3 mt-2 tracking-tight font-serif">
              Romance Package
            </h3>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Celebrate love with champagne, roses, and intimate dining experiences.
            </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Executive Suite with City View
              </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Bottle of Dom Pérignon on arrival
              </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                In-Room Dining Experience
              </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Rose Petal Turndown Service
              </li>
</ul>
<div className="mt-auto">
<button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-4 rounded-lg transition-all shadow-md hover:shadow-lg mb-3 tracking-wide uppercase text-xs" onclick="openBookingForm('Romance Package')">
                Reserve Now
              </button>
<p className="text-xs text-center text-gray-500 font-medium">
                From $1,200 / night
              </p>
</div>
</div>

<div className="bg-stone-50 rounded-xl shadow-lg border border-stone-100 p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 reveal delay-200 spotlight-card">
<h3 className="text-2xl font-medium text-gray-900 mb-3 mt-2 tracking-tight font-serif">
              Business Elite
            </h3>
<p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Seamless productivity with luxury amenities for the modern executive.
            </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-700">
<iconify-icon className="text-brand-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Access to Executive Lounge
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<iconify-icon className="text-brand-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Complimentary Pressing (2 items)
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<iconify-icon className="text-brand-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Meeting Room Access (2 hours)
              </li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<iconify-icon className="text-brand-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                Airport Transfers Included
              </li>
</ul>
<div className="mt-auto">
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-4 rounded-lg transition-all shadow-md hover:shadow-lg mb-3 tracking-wide uppercase text-xs" onclick="openBookingForm('Business Elite')">
                Book Business Stay
              </button>
<p className="text-xs text-center text-gray-400 font-medium">
                From $650 / night
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 text-center border-t border-stone-200">
<div className="max-w-4xl mx-auto px-6 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight font-serif">
          Ready for your Escape?
        </h2>
<p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Experience the pinnacle of hospitality. Our team awaits to curate your perfect stay in the city.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-brand-600 text-white hover:bg-brand-700 text-lg font-medium px-12 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 cta-glow" onclick="openBookingForm()">
            Book a Room
          </button>
<a className="bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 text-lg font-medium px-12 py-4 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-gray-300" href="tel:1800555000">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
            Contact Concierge
          </a>
</div>
</div>
</section>

<section className="z-10 bg-white border-gray-200 border-t pt-24 pb-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="reveal">
<h2 className="text-4xl font-medium text-gray-900 mb-6 tracking-tight font-serif">
              A Legacy of Hospitality
            </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in 1924, The Aurelia Grand has been the backdrop for the city's most significant moments. We blend historic charm with contemporary luxury to create an atmosphere of timeless elegance.
            </p>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our dedication to service is absolute. Every member of our staff, from the doormen to the executive chef, is committed to exceeding your expectations.
            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-brand-600" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
<span>Award-Winning Service</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-brand-600" icon="solar:leaf-linear" width="24"></iconify-icon>
<span>Green Key Certified Sustainability</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-brand-600" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span>Uncompromising Privacy &amp; Security</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-6">

<div className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-md hover:scale-[0.98] transition-all duration-300 reveal delay-100" onclick="openTeamModal('gm')">
<img alt="General Manager" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1534399315465-2b91232de345?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-xl font-medium text-white font-serif">Arthur Sterling</h3>
<p className="text-brand-300 text-sm font-medium uppercase tracking-wider">
                  General Manager
                </p>
</div>
</div>

<div className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-md hover:scale-[0.98] transition-all duration-300 reveal delay-200" onclick="openTeamModal('chef')">
<img alt="Executive Chef" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1746989040591-fcfc2b7d3039?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-xl font-medium text-white font-serif">Elena Vance</h3>
<p className="text-brand-300 text-sm font-medium uppercase tracking-wider">
                  Executive Chef
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-stone-50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight font-serif">
            Contact Us
          </h2>
<p className="text-lg text-gray-600">
            For reservations, event inquiries, or concierge assistance.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<a className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group reveal spotlight-card" href="tel:1800555000">
<div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-brand-600" icon="solar:phone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2 font-serif">Reservations</h3>
<p className="text-lg font-medium text-brand-600 group-hover:text-brand-800 transition-colors">
              1800 555 000
            </p>
<p className="text-sm text-gray-400 mt-2">Available 24/7</p>
</a>

<a className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group reveal delay-100 spotlight-card" href="mailto:concierge@aureliagrand.com">
<div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-brand-600" icon="solar:letter-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2 font-serif">Email Us</h3>
<p className="text-lg font-medium text-brand-600 group-hover:text-brand-800 transition-colors break-words text-sm">
              concierge@aureliagrand.com
            </p>
<p className="text-sm text-gray-400 mt-2">Responses within 1 hour</p>
</a>

<div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group reveal delay-200 spotlight-card">
<div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-brand-600" icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2 font-serif">Location</h3>
<p className="text-lg font-medium text-gray-600">
              100 Luxury Ave, Metropolis
            </p>
<p className="text-sm text-gray-400 mt-2">Valet Parking Available</p>
</div>
</div>

<div className="bg-white p-4 md:p-4 rounded-xl shadow-sm reveal delay-300 border border-gray-100">
<div className="w-full aspect-[21/9] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" className="w-full h-full border-0" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1614134076329!5m2!1sen!2s"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 text-white py-20 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white" icon="solar:crown-star-linear" width="28"></iconify-icon>
<span className="text-xl font-bold tracking-tight text-white uppercase font-serif">Aurelia Grand</span>
</div>
<p className="text-gray-400 leading-relaxed mb-8 text-sm max-w-sm font-light">
              Where heritage meets modern luxury. Experience the standard of excellence that has defined The Aurelia Grand for over a century.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-colors border border-white/10" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-colors border border-white/10" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-colors border border-white/10" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-semibold mb-6 text-white uppercase tracking-widest">Explore</h3>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-brand-300 transition-colors" href="#">Suites &amp; Rooms</a></li>
<li><a className="hover:text-brand-300 transition-colors" href="#">Dining</a></li>
<li><a className="hover:text-brand-300 transition-colors" href="#">Spa &amp; Wellness</a></li>
<li><a className="hover:text-brand-300 transition-colors" href="#">Events &amp; Weddings</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold mb-6 text-white uppercase tracking-widest">Contact</h3>
<ul className="space-y-4 text-sm text-gray-400">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-brand-400" icon="solar:phone-linear" width="16"></iconify-icon>
                1800 555 000
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-brand-400" icon="solar:letter-linear" width="16"></iconify-icon>
                concierge@aureliagrand.com
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-brand-400" icon="solar:map-point-linear" width="16"></iconify-icon>
                100 Luxury Ave, Metropolis
              </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<p className="text-gray-600 text-xs tracking-wide">
            © 2025 The Aurelia Grand Hotel. All Rights Reserved.
          </p>
<div className="flex gap-6 text-gray-600 text-xs">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeBookingForm()"></div>
<div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in">
<div className="p-8">
<div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
<div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight font-serif">
                Book Your Stay
              </h3>
<p className="text-sm text-gray-500 mt-1">
                Best Rate Guarantee • No Booking Fees
              </p>
</div>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onclick="closeBookingForm()">
<iconify-icon className="text-gray-400" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-6" onsubmit="handleBookingSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Check-in
                </label>
<input className="w-full px-4 py-3 rounded-none border-b border-gray-300 focus:outline-none focus:border-brand-600 transition-all text-sm bg-transparent placeholder-gray-400" required="" type="date"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Check-out
                </label>
<input className="w-full px-4 py-3 rounded-none border-b border-gray-300 focus:outline-none focus:border-brand-600 transition-all text-sm bg-transparent placeholder-gray-400" required="" type="date"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Room Type
                </label>
<select className="w-full px-4 py-3 rounded-none border-b border-gray-300 focus:outline-none focus:border-brand-600 transition-all text-sm bg-transparent" required="">
<option value="">Select Room...</option>
<option value="Deluxe Room">Deluxe Room</option>
<option value="Executive Suite">Executive Suite</option>
<option value="Presidential Suite">Presidential Suite</option>
<option value="Urban Retreat">Urban Retreat Package</option>
<option value="Romance Package">Romance Package</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Guests
                </label>
<select className="w-full px-4 py-3 rounded-none border-b border-gray-300 focus:outline-none focus:border-brand-600 transition-all text-sm bg-transparent">
<option value="1">1 Guest</option>
<option selected="" value="2">2 Guests</option>
<option value="3">3 Guests</option>
<option value="4">4 Guests</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-semibold uppercase tracking-widest text-gray-500">
                Special Requests
              </label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm resize-none placeholder-gray-400 bg-gray-50" placeholder="Dietary requirements, late arrival, occasion..." rows="3"></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Name
                </label>
<input className="w-full px-4 py-3 rounded-none border-b border-gray-300 focus:outline-none focus:border-brand-600 transition-all text-sm bg-transparent placeholder-gray-400" placeholder="Full Name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Email
                </label>
<input className="w-full px-4 py-3 rounded-none border-b border-gray-300 focus:outline-none focus:border-brand-600 transition-all text-sm bg-transparent placeholder-gray-400" placeholder="email@address.com" required="" type="email"/>
</div>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-4 rounded-full transition-colors shadow-lg mt-6 flex items-center justify-center gap-2 uppercase tracking-widest text-xs" type="submit">
              Check Availability
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="team-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeTeamModal()"></div>
<div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden relative z-10 shadow-2xl animate-fade-in">
<div className="relative h-96">
<img alt="" className="w-full h-full object-cover object-top" id="team-modal-image" src=""/>
<button className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm z-20" onclick="closeTeamModal()">
<iconify-icon className="text-gray-900" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
<h3 className="text-3xl font-serif text-white mb-1" id="team-modal-name"></h3>
<p className="text-brand-300 font-medium text-sm uppercase tracking-widest" id="team-modal-role"></p>
</div>
</div>
<div className="p-10">
<div className="prose prose-sm max-w-none text-gray-600">
<h4 className="text-lg font-medium text-gray-900 mb-3 font-serif">Biography</h4>
<p className="leading-relaxed mb-8 font-light" id="team-modal-bio"></p>
<h4 className="text-lg font-medium text-gray-900 mb-3 font-serif">
              Accolades
            </h4>
<ul className="space-y-3" id="team-modal-certs">

</ul>
</div>
</div>
</div>
</div>




    </>
  );
}
