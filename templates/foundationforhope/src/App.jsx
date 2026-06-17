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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Toast Notification System ---
            const toastContainer = document.getElementById('toast-container');
            window.showToast = (message, icon = 'solar:check-circle-linear') => {
                const toast = document.createElement('div');
                toast.className = 'toast-enter bg-white px-4 py-3 rounded-lg shadow-xl border border-[#1a4d8c]/10 flex items-center gap-3 text-sm font-medium text-[#1a4d8c] pointer-events-auto';
                toast.innerHTML = `<iconify-icon icon="${icon}" class="text-[#ff6b35]" width="20"></iconify-icon> ${message}`;
                toastContainer.appendChild(toast);
                setTimeout(() => {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translate(-50%, 20px)';
                    toast.style.transition = 'all 0.3s ease';
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            };

            // --- Forms Handling ---
            const preventAndToast = (formId, message) => {
                const form = document.getElementById(formId);
                if(form) {
                    form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        showToast(message);
                        form.reset();
                    });
                }
            };
            preventAndToast('newsletter-form', 'Successfully subscribed to newsletter!');
            preventAndToast('contact-form', 'Message sent successfully. We will reply soon.');
            preventAndToast('volunteer-form', 'Application submitted! Thank you.');
            preventAndToast('donate-form', 'Processing secure donation...');

            // --- Donation Amount Toggles ---
            const amountBtns = document.querySelectorAll('.amount-btn');
            const customAmount = document.getElementById('custom-amount');
            amountBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    amountBtns.forEach(b => {
                        b.classList.remove('border-2', 'border-[#ff6b35]', 'bg-[#ff6b35]/5', 'text-[#ff6b35]', 'font-medium');
                        b.classList.add('border', 'border-[#1a4d8c]/20', 'text-[#1a4d8c]');
                    });
                    btn.classList.add('border-2', 'border-[#ff6b35]', 'bg-[#ff6b35]/5', 'text-[#ff6b35]', 'font-medium');
                    btn.classList.remove('border', 'border-[#1a4d8c]/20', 'text-[#1a4d8c]');
                    if(customAmount) customAmount.value = '';
                });
            });
            if(customAmount) {
                customAmount.addEventListener('input', () => {
                    if(customAmount.value) {
                        amountBtns.forEach(b => {
                            b.classList.remove('border-2', 'border-[#ff6b35]', 'bg-[#ff6b35]/5', 'text-[#ff6b35]', 'font-medium');
                            b.classList.add('border', 'border-[#1a4d8c]/20', 'text-[#1a4d8c]');
                        });
                    }
                });
            }

            // --- Causes Filtering ---
            const filterBtns = document.querySelectorAll('.filter-btn');
            const causeCards = document.querySelectorAll('.cause-card');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-[#1a4d8c]', 'text-white', 'active');
                        b.classList.add('bg-transparent', 'text-[#1a4d8c]');
                    });
                    btn.classList.add('bg-[#1a4d8c]', 'text-white', 'active');
                    btn.classList.remove('bg-transparent', 'text-[#1a4d8c]');
                    
                    const filter = btn.dataset.filter;
                    causeCards.forEach(card => {
                        if (filter === 'all' || card.dataset.category === filter) {
                            card.style.display = 'block';
                            // Restart animation for visibility
                            card.style.animation = 'none';
                            card.offsetHeight; /* trigger reflow */
                            card.style.animation = 'fadeInPage 0.4s ease-out forwards';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // --- Video Modal ---
            const watchBtn = document.getElementById('watch-story-btn');
            const videoModal = document.getElementById('video-modal');
            const closeVideoBtn = document.getElementById('close-video-btn');
            const videoElement = document.getElementById('story-video');

            const toggleVideoModal = (show) => {
                if (show) {
                    videoModal.classList.remove('hidden');
                    setTimeout(() => videoModal.classList.remove('opacity-0'), 10);
                    videoElement.play().catch(e=>console.log("Auto-play prevented"));
                } else {
                    videoModal.classList.add('opacity-0');
                    videoElement.pause();
                    setTimeout(() => videoModal.classList.add('hidden'), 300);
                }
            };

            watchBtn.addEventListener('click', () => toggleVideoModal(true));
            closeVideoBtn.addEventListener('click', () => toggleVideoModal(false));
            videoModal.addEventListener('click', (e) => {
                if(e.target === videoModal) toggleVideoModal(false);
            });

            // --- Virtual Page Routing System ---
            const pages = document.querySelectorAll('.page');
            const navLinks = document.querySelectorAll('.nav-link, .nav-btn, .nav-brand');

            function navigateTo(pageId) {
                window.scrollTo({ top: 0, behavior: 'instant' });
                pages.forEach(p => p.classList.remove('active'));
                const targetPage = document.getElementById('page-' + pageId);
                if(targetPage) targetPage.classList.add('active');

                document.querySelectorAll('nav .nav-link').forEach(link => {
                    if(link.dataset.target === pageId) {
                        link.classList.add('text-[#1a4d8c]');
                        link.classList.remove('text-[#2c2c2c]');
                    } else {
                        link.classList.remove('text-[#1a4d8c]');
                        link.classList.add('text-[#2c2c2c]');
                    }
                });
            }

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.dataset.target;
                    if(target) navigateTo(target);
                    if(!menu.classList.contains('hidden')) toggleMenu();
                });
            });

            // --- Scroll Progress ---
            const progressBar = document.getElementById('scroll-progress');
            window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                progressBar.style.width = scrolled + '%';
            });

            // --- Mobile Menu ---
            const menuBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const drawer = document.getElementById('mobile-menu-drawer');

            const toggleMenu = () => {
                const isHidden = menu.classList.contains('hidden');
                if (isHidden) {
                    menu.classList.remove('hidden');
                    setTimeout(() => {
                        menu.classList.remove('opacity-0');
                        drawer.classList.remove('translate-x-full');
                    }, 10);
                } else {
                    menu.classList.add('opacity-0');
                    drawer.classList.add('translate-x-full');
                    setTimeout(() => {
                        menu.classList.add('hidden');
                    }, 300);
                }
            };

            menuBtn.addEventListener('click', toggleMenu);
            closeBtn.addEventListener('click', toggleMenu);

            // --- Animated Counters ---
            const counters = document.querySelectorAll('.counter');
            const speed = 200; 

            const animateCounter = (counter) => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText.replace(/,/g, '');
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc).toLocaleString();
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target.toLocaleString() + (target > 1000 ? '+' : '');
                    }
                };
                if(counter.closest('.page.active')) {
                    updateCount();
                } else {
                    counter.innerText = (+counter.getAttribute('data-target')).toLocaleString() + (+counter.getAttribute('data-target') > 1000 ? '+' : '');
                }
            };

            const observerOptions = { threshold: 0.5 };
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            counters.forEach(counter => observer.observe(counter));
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
      

<div className="loader-overlay fixed inset-0 z-[100] bg-[#0d1b2a] flex items-center justify-center">
<div className="flex flex-col items-center">
<span className="font-serif text-3xl tracking-tighter text-white mb-4">HOPE</span>
<div className="w-32 h-px bg-white/20 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-full bg-[#ff6b35] origin-left animate-[scaleX_1.5s_ease-in-out_forwards]" style={{transform: 'scaleX(0)', animationName: 'scaleX', @keyframes scaleX { to { transform: 'scaleX(1)'}}></div>
</div>
</div>
</div>

<div className="fixed top-0 left-0 h-px bg-[#ff6b35] z-50 transition-all duration-150 ease-out" id="scroll-progress" style={{width: '0%'}}></div>

<nav className="fixed w-full top-0 z-40 transition-all duration-300 backdrop-blur-md bg-[#faf7f2]/80 border-b border-[#1a4d8c]/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="nav-brand font-serif text-2xl tracking-tighter text-[#1a4d8c]" data-target="home" href="#">HOPE</a>
<div className="hidden md:flex items-center space-x-8 text-sm">
<button className="nav-link text-[#1a4d8c] hover:text-[#1a4d8c] transition-colors" data-target="home">Home</button>
<button className="nav-link text-[#2c2c2c] hover:text-[#1a4d8c] transition-colors" data-target="about">About Us</button>
<button className="nav-link text-[#2c2c2c] hover:text-[#1a4d8c] transition-colors" data-target="causes">Causes</button>
<button className="nav-link text-[#2c2c2c] hover:text-[#1a4d8c] transition-colors" data-target="involve">Get Involved</button>
</div>
<div className="hidden md:flex">
<button className="nav-btn bg-[#ff6b35] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#d95221] transition-colors shadow-sm shadow-[#ff6b35]/20 focus:ring-2 focus:ring-[#ff6b35] focus:ring-offset-2 outline-none" data-target="involve">Donate Now</button>
</div>
<button aria-label="Menu" className="md:hidden text-[#1a4d8c] p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-50 bg-[#0d1b2a]/40 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300" id="mobile-menu">
<div className="absolute right-0 top-0 bottom-0 w-64 bg-[#faf7f2] p-6 shadow-2xl transform translate-x-full transition-transform duration-300" id="mobile-menu-drawer">
<div className="flex justify-end mb-8">
<button aria-label="Close" className="text-[#2c2c2c] p-2 focus:outline-none" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col space-y-6 text-lg">
<button className="nav-link text-left text-[#1a4d8c] hover:text-[#1a4d8c]" data-target="home">Home</button>
<button className="nav-link text-left text-[#2c2c2c] hover:text-[#1a4d8c]" data-target="about">About Us</button>
<button className="nav-link text-left text-[#2c2c2c] hover:text-[#1a4d8c]" data-target="causes">Causes</button>
<button className="nav-link text-left text-[#2c2c2c] hover:text-[#1a4d8c]" data-target="involve">Get Involved</button>
<button className="nav-btn bg-[#ff6b35] text-white px-6 py-3 rounded-full text-center text-sm font-medium mt-4" data-target="involve">Donate Now</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[110] bg-[#0d1b2a]/90 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-6" id="video-modal">
<div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl transform scale-95 transition-transform duration-300" id="video-container">
<button className="absolute top-4 right-4 z-20 text-white p-2 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-colors focus:outline-none" id="close-video-btn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="aspect-video relative">

<video className="w-full h-full object-cover" controls="" id="story-video" playsinline="" poster="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&amp;fit=crop&amp;q=80" preload="none">
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<div className="pt-20" id="main-content">

<main className="page active" id="page-home">

<section className="relative min-h-[90vh] flex items-center bg-[#0d1b2a] overflow-hidden">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-1/4 left-[10%] w-[40vw] h-[40vw] bg-[#1a4d8c] rounded-full mix-blend-screen filter blur-[120px] opacity-40 orb-float"></div>
<div className="absolute bottom-1/4 right-[10%] w-[30vw] h-[30vw] bg-[#ff6b35] rounded-full mix-blend-screen filter blur-[100px] opacity-30 orb-float-delay"></div>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center py-20">
<div className="md:col-span-8 lg:col-span-7">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] mb-6">
                            Rebuilding Hope,<br/>One Life at a Time
                        </h1>
<p className="text-base md:text-lg text-white/70 mb-10 max-w-xl font-light leading-relaxed">
                            We bring immediate relief and long-term sustainable solutions to communities affected by crisis. Join us in creating a world where resilience outshines despair.
                        </p>
<div className="flex flex-wrap gap-4 items-center">
<button className="nav-link bg-[#ff6b35] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#d95221] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b35]/20 flex items-center gap-2" data-target="causes">
                                See Our Impact
                                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="group px-6 py-3.5 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 focus:outline-none" id="watch-story-btn">
<span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</span>
                                Watch Story
                            </button>
</div>
</div>
<div className="hidden md:block md:col-span-4 lg:col-span-5 relative h-[500px] perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1a4d8c]/40 to-transparent rounded-[2rem] transform rotate-3 scale-105 z-0"></div>
<img alt="Hope Foundation Impact" className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl border border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-700 z-10" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&amp;fit=crop&amp;q=80"/>
</div>
</div>
</section>

<section className="py-20 bg-[#faf7f2] border-b border-[#1a4d8c]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center divide-x-0 md:divide-x divide-[#1a4d8c]/10">
<div className="flex flex-col items-center">
<iconify-icon className="text-[#ff6b35] mb-4" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
<span className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a4d8c] mb-2 counter" data-target="12400">0</span>
<span className="text-xs uppercase tracking-widest text-[#2c2c2c]/60 font-medium">Lives Impacted</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-[#ff6b35] mb-4" icon="solar:flag-linear" width="28"></iconify-icon>
<span className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a4d8c] mb-2 counter" data-target="87">0</span>
<span className="text-xs uppercase tracking-widest text-[#2c2c2c]/60 font-medium">Projects Completed</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-[#ff6b35] mb-4" icon="solar:hand-heart-linear" width="28"></iconify-icon>
<span className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a4d8c] mb-2 counter" data-target="2300">0</span>
<span className="text-xs uppercase tracking-widest text-[#2c2c2c]/60 font-medium">Volunteers</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-[#ff6b35] mb-4" icon="solar:global-linear" width="28"></iconify-icon>
<span className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a4d8c] mb-2 counter" data-target="34">0</span>
<span className="text-xs uppercase tracking-widest text-[#2c2c2c]/60 font-medium">Countries</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#faf7f2]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div className="max-w-xl">
<span className="text-xs uppercase tracking-widest text-[#ff6b35] font-medium block mb-3">Urgent Needs</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a4d8c]">Causes Needing Your Support</h2>
</div>
<button className="nav-link hidden md:flex items-center gap-2 text-sm text-[#1a4d8c] font-medium hover:text-[#ff6b35] transition-colors focus:outline-none" data-target="causes">
                            View All Causes
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group h-[420px] perspective-1000 cursor-pointer text-left">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5 shadow-sm" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-8">
<h3 className="font-serif text-2xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max shadow-sm">Clean Water</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-8 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-2xl tracking-tight mb-4">Clean Water Access</h3>
<p className="text-sm text-white/80 font-light leading-relaxed flex-grow">Providing sustainable water systems to drought-stricken regions in East Africa, reducing waterborne diseases by 60%.</p>
<div className="mb-6">
<div className="flex justify-between text-xs mb-2">
<span className="text-white/60">Raised: $45,000</span>
<span className="text-[#ff6b35]">Goal: $60,000</span>
</div>
<div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-3 rounded-full text-sm font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a4d8c]" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support This</button>
</div>
</div>
</div>

<div className="group h-[420px] perspective-1000 cursor-pointer text-left">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5 shadow-sm" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-8">
<h3 className="font-serif text-2xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max shadow-sm">Girls' Education</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-8 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-2xl tracking-tight mb-4">Girls' Education</h3>
<p className="text-sm text-white/80 font-light leading-relaxed flex-grow">Building safe classrooms and providing scholarships to empower young women in rural communities.</p>
<div className="mb-6">
<div className="flex justify-between text-xs mb-2">
<span className="text-white/60">Raised: $80,000</span>
<span className="text-[#ff6b35]">Goal: $100,000</span>
</div>
<div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '80%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-3 rounded-full text-sm font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a4d8c]" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support This</button>
</div>
</div>
</div>

<div className="group h-[420px] perspective-1000 cursor-pointer text-left">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5 shadow-sm" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-8">
<h3 className="font-serif text-2xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max shadow-sm">Climate Action</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-8 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-2xl tracking-tight mb-4">Climate Resilience</h3>
<p className="text-sm text-white/80 font-light leading-relaxed flex-grow">Training farmers in sustainable agriculture to combat the severe effects of changing climate patterns.</p>
<div className="mb-6">
<div className="flex justify-between text-xs mb-2">
<span className="text-white/60">Raised: $12,000</span>
<span className="text-[#ff6b35]">Goal: $30,000</span>
</div>
<div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '40%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-3 rounded-full text-sm font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a4d8c]" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support This</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page" id="page-about">

<section className="relative py-32 bg-[#0d1b2a] text-white overflow-hidden text-center">
<div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1593113589914-07553e1e4cb8?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1b2a]"></div>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6">
<span className="text-xs uppercase tracking-widest text-[#ff6b35] font-medium block mb-4">Our Mission</span>
<h1 className="font-serif text-5xl md:text-6xl tracking-tight mb-6">Driven by Empathy,<br/>Guided by Action.</h1>
<p className="text-base text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                        We don't just deliver aid; we partner with communities to rebuild infrastructure, establish education systems, and foster resilience that lasts generations.
                    </p>
</div>
</section>

<section className="py-24 bg-white border-b border-[#1a4d8c]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="lg:sticky lg:top-32 h-fit">
<span className="text-xs uppercase tracking-widest text-[#ff6b35] font-medium block mb-3">Our History</span>
<h2 className="font-serif italic text-3xl md:text-4xl tracking-tight text-[#1a4d8c] leading-snug mb-8">
                                "True impact is measured not by statistics, but by the individual lives transformed."
                            </h2>
<p className="text-sm text-[#2c2c2c]/70 leading-relaxed mb-6 max-w-md">
                                Founded in 2015, Hope Foundation emerged from a singular realization: global crises require local empowerment. 
                            </p>
<p className="text-sm text-[#2c2c2c]/70 leading-relaxed mb-8 max-w-md">
                                What started as a small initiative to bring clean water to a single village in Kenya has blossomed into an international network of volunteers, donors, and local partners working across 34 countries.
                            </p>
<img alt="Community gathering" className="w-full h-64 object-cover rounded-2xl shadow-md border border-[#1a4d8c]/5" src="https://images.unsplash.com/photo-1593113589914-07553e1e4cb8?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="relative border-l border-[#1a4d8c]/10 pb-8 ml-3 md:ml-0">
<div className="mb-16 relative pl-8 group">
<div className="absolute w-3 h-3 bg-[#faf7f2] border-2 border-[#ff6b35] rounded-full -left-[6.5px] top-1.5 group-hover:bg-[#ff6b35] transition-colors duration-300"></div>
<span className="text-xs font-medium text-[#ff6b35] mb-2 block">2015</span>
<h4 className="font-serif text-xl tracking-tight text-[#1a4d8c] mb-2">The Inception</h4>
<p className="text-sm text-[#2c2c2c]/70 leading-relaxed">Starting with a small team of 5 volunteers, we launched our first clean water initiative in rural Kenya.</p>
</div>
<div className="mb-16 relative pl-8 group">
<div className="absolute w-3 h-3 bg-[#faf7f2] border-2 border-[#1a4d8c] rounded-full -left-[6.5px] top-1.5 group-hover:bg-[#1a4d8c] transition-colors duration-300"></div>
<span className="text-xs font-medium text-[#1a4d8c]/60 mb-2 block">2018</span>
<h4 className="font-serif text-xl tracking-tight text-[#1a4d8c] mb-2">Global Expansion</h4>
<p className="text-sm text-[#2c2c2c]/70 leading-relaxed">Operations expanded to Southeast Asia and South America, focusing on disaster relief and long-term rebuilding.</p>
</div>
<div className="mb-16 relative pl-8 group">
<div className="absolute w-3 h-3 bg-[#faf7f2] border-2 border-[#1a4d8c] rounded-full -left-[6.5px] top-1.5 group-hover:bg-[#1a4d8c] transition-colors duration-300"></div>
<span className="text-xs font-medium text-[#1a4d8c]/60 mb-2 block">2021</span>
<h4 className="font-serif text-xl tracking-tight text-[#1a4d8c] mb-2">Education Mandate</h4>
<p className="text-sm text-[#2c2c2c]/70 leading-relaxed">Launched the 'Schools for Tomorrow' program, building 50+ modular educational facilities in post-conflict zones.</p>
</div>
<div className="relative pl-8 group">
<div className="absolute w-3 h-3 bg-[#faf7f2] border-2 border-[#ff6b35] rounded-full -left-[6.5px] top-1.5 group-hover:bg-[#ff6b35] transition-colors duration-300"></div>
<span className="text-xs font-medium text-[#ff6b35] mb-2 block">Present</span>
<h4 className="font-serif text-xl tracking-tight text-[#1a4d8c] mb-2">Sustainable Futures</h4>
<p className="text-sm text-[#2c2c2c]/70 leading-relaxed">Integrating climate resilience into all our programs, ensuring communities are prepared for environmental shifts.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#faf7f2]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs uppercase tracking-widest text-[#ff6b35] font-medium block mb-3">Leadership</span>
<h2 className="font-serif text-4xl tracking-tight text-[#1a4d8c]">Meet the Board</h2>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
<div className="group text-center cursor-pointer">
<div className="w-32 h-32 mx-auto rounded-full mb-6 group-hover:-translate-y-2 transition-transform duration-300 bg-white shadow-md p-1 border border-[#1a4d8c]/10 relative overflow-hidden">
<img alt="Sarah Jenkins" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a4d8c]/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="text-white hover:text-[#ff6b35] focus:outline-none" onclick="window.location.href='#'"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></button>
</div>
</div>
<h4 className="text-base font-serif tracking-tight text-[#1a4d8c] mb-1">Sarah Jenkins</h4>
<p className="text-xs text-[#2c2c2c]/60">Executive Director</p>
</div>
<div className="group text-center cursor-pointer">
<div className="w-32 h-32 mx-auto rounded-full mb-6 group-hover:-translate-y-2 transition-transform duration-300 bg-white shadow-md p-1 border border-[#1a4d8c]/10 relative overflow-hidden">
<img alt="David Chen" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a4d8c]/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="text-white hover:text-[#ff6b35] focus:outline-none" onclick="window.location.href='#'"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></button>
</div>
</div>
<h4 className="text-base font-serif tracking-tight text-[#1a4d8c] mb-1">David Chen</h4>
<p className="text-xs text-[#2c2c2c]/60">Head of Operations</p>
</div>
<div className="group text-center cursor-pointer">
<div className="w-32 h-32 mx-auto rounded-full mb-6 group-hover:-translate-y-2 transition-transform duration-300 bg-white shadow-md p-1 border border-[#1a4d8c]/10 relative overflow-hidden">
<img alt="Elena Rostova" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a4d8c]/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="text-white hover:text-[#ff6b35] focus:outline-none" onclick="window.location.href='#'"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></button>
</div>
</div>
<h4 className="text-base font-serif tracking-tight text-[#1a4d8c] mb-1">Elena Rostova</h4>
<p className="text-xs text-[#2c2c2c]/60">Global Programs Lead</p>
</div>
<div className="group text-center cursor-pointer">
<div className="w-32 h-32 mx-auto rounded-full mb-6 group-hover:-translate-y-2 transition-transform duration-300 bg-white shadow-md p-1 border border-[#1a4d8c]/10 relative overflow-hidden">
<img alt="Michael Osei" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a4d8c]/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="text-white hover:text-[#ff6b35] focus:outline-none" onclick="window.location.href='#'"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></button>
</div>
</div>
<h4 className="text-base font-serif tracking-tight text-[#1a4d8c] mb-1">Michael Osei</h4>
<p className="text-xs text-[#2c2c2c]/60">Community Partnerships</p>
</div>
</div>
</div>
</section>
</main>

<main className="page" id="page-causes">
<section className="py-20 bg-[#faf7f2]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs uppercase tracking-widest text-[#ff6b35] font-medium block mb-3">Active Campaigns</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a4d8c] mb-6">Where Your Help is Needed Most</h2>
<p className="text-sm text-[#2c2c2c]/70 font-light leading-relaxed">Browse our current global initiatives. Every contribution brings us closer to a sustainable future for these communities.</p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="filter-btn active px-5 py-2 rounded-full text-xs font-medium bg-[#1a4d8c] text-white transition-colors focus:outline-none" data-filter="all">All Causes</button>
<button className="filter-btn px-5 py-2 rounded-full text-xs font-medium border border-[#1a4d8c]/20 text-[#1a4d8c] hover:border-[#1a4d8c] transition-colors focus:outline-none" data-filter="education">Education</button>
<button className="filter-btn px-5 py-2 rounded-full text-xs font-medium border border-[#1a4d8c]/20 text-[#1a4d8c] hover:border-[#1a4d8c] transition-colors focus:outline-none" data-filter="health">Water &amp; Health</button>
<button className="filter-btn px-5 py-2 rounded-full text-xs font-medium border border-[#1a4d8c]/20 text-[#1a4d8c] hover:border-[#1a4d8c] transition-colors focus:outline-none" data-filter="climate">Climate &amp; Relief</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="cause-card group h-[400px] perspective-1000 cursor-pointer" data-category="health">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<h3 className="font-serif text-xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max">Clean Water</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-6 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-xl tracking-tight mb-3">Clean Water Access</h3>
<p className="text-xs text-white/80 font-light leading-relaxed flex-grow">Providing sustainable water systems to drought-stricken regions in East Africa.</p>
<div className="mb-5">
<div className="flex justify-between text-[10px] mb-2 uppercase tracking-wide">
<span className="text-white/60">Raised: $45k</span><span className="text-[#ff6b35]">Goal: $60k</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-2.5 rounded-full text-xs font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support</button>
</div>
</div>
</div>

<div className="cause-card group h-[400px] perspective-1000 cursor-pointer" data-category="education">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<h3 className="font-serif text-xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max">Girls' Education</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-6 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-xl tracking-tight mb-3">Girls' Education</h3>
<p className="text-xs text-white/80 font-light leading-relaxed flex-grow">Building safe classrooms and providing scholarships for young women.</p>
<div className="mb-5">
<div className="flex justify-between text-[10px] mb-2 uppercase tracking-wide">
<span className="text-white/60">Raised: $80k</span><span className="text-[#ff6b35]">Goal: $100k</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '80%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-2.5 rounded-full text-xs font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support</button>
</div>
</div>
</div>

<div className="cause-card group h-[400px] perspective-1000 cursor-pointer" data-category="climate">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<h3 className="font-serif text-xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max">Climate Resilience</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-6 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-xl tracking-tight mb-3">Climate Resilience</h3>
<p className="text-xs text-white/80 font-light leading-relaxed flex-grow">Training farmers in sustainable agriculture to combat severe climate effects.</p>
<div className="mb-5">
<div className="flex justify-between text-[10px] mb-2 uppercase tracking-wide">
<span className="text-white/60">Raised: $12k</span><span className="text-[#ff6b35]">Goal: $30k</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '40%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-2.5 rounded-full text-xs font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support</button>
</div>
</div>
</div>

<div className="cause-card group h-[400px] perspective-1000 cursor-pointer" data-category="climate">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1541888046835-23c28c68ecf7?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<h3 className="font-serif text-xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max">Emergency Relief</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-6 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-xl tracking-tight mb-3">Emergency Relief Fund</h3>
<p className="text-xs text-white/80 font-light leading-relaxed flex-grow">Providing immediate shelter, food, and medical supplies to earthquake survivors.</p>
<div className="mb-5">
<div className="flex justify-between text-[10px] mb-2 uppercase tracking-wide">
<span className="text-white/60">Raised: $150k</span><span className="text-[#ff6b35]">Goal: $200k</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-2.5 rounded-full text-xs font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support</button>
</div>
</div>
</div>

<div className="cause-card group h-[400px] perspective-1000 cursor-pointer" data-category="health">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<h3 className="font-serif text-xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max">Mobile Clinics</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-6 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-xl tracking-tight mb-3">Mobile Health Clinics</h3>
<p className="text-xs text-white/80 font-light leading-relaxed flex-grow">Deploying fully-equipped medical vans to isolated rural communities.</p>
<div className="mb-5">
<div className="flex justify-between text-[10px] mb-2 uppercase tracking-wide">
<span className="text-white/60">Raised: $25k</span><span className="text-[#ff6b35]">Goal: $50k</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '50%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-2.5 rounded-full text-xs font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support</button>
</div>
</div>
</div>

<div className="cause-card group h-[400px] perspective-1000 cursor-pointer" data-category="education">
<div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-style-3d group-hover:rotate-y-180">
<div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-cover bg-center border border-[#1a4d8c]/5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<h3 className="font-serif text-xl tracking-tight text-[#1a4d8c] relative z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg inline-block w-max">Youth Tech Hub</h3>
</div>
</div>
<div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a4d8c] rounded-2xl p-6 text-white flex flex-col shadow-xl">
<h3 className="font-serif text-xl tracking-tight mb-3">Youth Tech Hub</h3>
<p className="text-xs text-white/80 font-light leading-relaxed flex-grow">Providing digital literacy and coding skills to marginalized youth to bridge the tech gap.</p>
<div className="mb-5">
<div className="flex justify-between text-[10px] mb-2 uppercase tracking-wide">
<span className="text-white/60">Raised: $5k</span><span className="text-[#ff6b35]">Goal: $20k</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b35] rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<button className="w-full bg-white text-[#1a4d8c] py-2.5 rounded-full text-xs font-medium hover:bg-[#faf7f2] transition-colors focus:outline-none" onclick="document.querySelector('[data-target=\'involve\']').click(); document.getElementById('tab-donate').click();">Support</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page" id="page-involve">

<section className="py-20 bg-white border-b border-[#1a4d8c]/5">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs uppercase tracking-widest text-[#ff6b35] font-medium block mb-3">Take Action</span>
<h2 className="font-serif text-4xl tracking-tight text-[#1a4d8c] mb-4">Make Your Impact Today</h2>
<p className="text-sm text-[#2c2c2c]/60 max-w-lg mx-auto">Whether you're donating funds, volunteering your skills, or partnering your organization with us, every action counts.</p>
</div>
<div className="relative">

<input checked="" className="hidden" id="tab-donate" name="tabs" type="radio"/>
<input className="hidden" id="tab-volunteer" name="tabs" type="radio"/>
<input className="hidden" id="tab-partner" name="tabs" type="radio"/>

<div className="tab-nav flex border-b border-[#1a4d8c]/10 mb-8 justify-center gap-8">
<label className="cursor-pointer pb-4 px-2 text-sm font-medium text-[#2c2c2c]/60 border-b-2 border-transparent transition-colors hover:text-[#1a4d8c]" htmlFor="tab-donate">Donate</label>
<label className="cursor-pointer pb-4 px-2 text-sm font-medium text-[#2c2c2c]/60 border-b-2 border-transparent transition-colors hover:text-[#1a4d8c]" htmlFor="tab-volunteer">Volunteer</label>
<label className="cursor-pointer pb-4 px-2 text-sm font-medium text-[#2c2c2c]/60 border-b-2 border-transparent transition-colors hover:text-[#1a4d8c]" htmlFor="tab-partner">Partner</label>
</div>

<div className="hidden animate-[fadeIn_0.3s_ease-out]" id="content-donate">
<form className="bg-[#faf7f2] rounded-2xl p-8 border border-[#1a4d8c]/5 max-w-2xl mx-auto" id="donate-form">
<div className="mb-8">
<span className="text-xs font-medium text-[#2c2c2c] block mb-4">Select Amount</span>
<div className="grid grid-cols-3 sm:grid-cols-5 gap-3" id="donation-amounts">
<button className="amount-btn py-3 border border-[#1a4d8c]/20 rounded-lg text-sm text-[#1a4d8c] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors focus:outline-none" type="button">$10</button>
<button className="amount-btn py-3 border border-[#1a4d8c]/20 rounded-lg text-sm text-[#1a4d8c] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors focus:outline-none" type="button">$25</button>
<button className="amount-btn py-3 border-2 border-[#ff6b35] bg-[#ff6b35]/5 rounded-lg text-sm text-[#ff6b35] font-medium focus:outline-none active-amount" type="button">$50</button>
<button className="amount-btn py-3 border border-[#1a4d8c]/20 rounded-lg text-sm text-[#1a4d8c] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors focus:outline-none" type="button">$100</button>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2c2c2c]/50 text-sm">$</span>
<input className="w-full py-3 pl-7 pr-3 border border-[#1a4d8c]/20 rounded-lg text-sm text-[#2c2c2c] bg-transparent focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] outline-none transition-all placeholder:text-[#2c2c2c]/40" id="custom-amount" placeholder="Other" type="number"/>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-8 pb-8 border-b border-[#1a4d8c]/10">
<div>
<h4 className="text-sm font-medium text-[#2c2c2c]">Make it a monthly gift</h4>
<p className="text-xs text-[#2c2c2c]/60 mt-1">Sustain our work year-round.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff6b35]"></div>
</label>
</div>
<button className="w-full bg-[#1a4d8c] text-white py-4 rounded-xl text-sm font-medium hover:bg-[#0d1b2a] transition-colors shadow-lg shadow-[#1a4d8c]/20 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#1a4d8c] focus:ring-offset-2" type="submit">
                                    Donate Securely
                                    <iconify-icon icon="solar:lock-linear" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-center text-[#2c2c2c]/40 mt-4 uppercase tracking-wider">Secured by Stripe</p>
</form>
</div>

<div className="hidden animate-[fadeIn_0.3s_ease-out]" id="content-volunteer">
<form className="space-y-4 max-w-2xl mx-auto" id="volunteer-form">
<div className="grid sm:grid-cols-2 gap-4">
<div className="relative">
<input className="floating-input w-full px-4 pt-6 pb-2 border border-[#1a4d8c]/20 rounded-lg bg-transparent text-sm focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] outline-none transition-all peer" id="v-name" placeholder=" " required="" type="text"/>
<label className="floating-label absolute left-4 top-4 text-sm text-[#2c2c2c]/50 transition-all pointer-events-none origin-left" htmlFor="v-name">Full Name</label>
</div>
<div className="relative">
<input className="floating-input w-full px-4 pt-6 pb-2 border border-[#1a4d8c]/20 rounded-lg bg-transparent text-sm focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] outline-none transition-all peer" id="v-email" placeholder=" " required="" type="email"/>
<label className="floating-label absolute left-4 top-4 text-sm text-[#2c2c2c]/50 transition-all pointer-events-none origin-left" htmlFor="v-email">Email Address</label>
</div>
</div>
<div className="relative">
<input className="floating-input w-full px-4 pt-6 pb-2 border border-[#1a4d8c]/20 rounded-lg bg-transparent text-sm focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] outline-none transition-all peer" id="v-skills" placeholder=" " required="" type="text"/>
<label className="floating-label absolute left-4 top-4 text-sm text-[#2c2c2c]/50 transition-all pointer-events-none origin-left" htmlFor="v-skills">Key Skills (e.g. Medical, Teaching, IT)</label>
</div>
<button className="w-full bg-[#1a4d8c] text-white py-4 rounded-xl text-sm font-medium hover:bg-[#0d1b2a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a4d8c] focus:ring-offset-2" type="submit">Submit Application</button>
</form>
</div>

<div className="hidden animate-[fadeIn_0.3s_ease-out]" id="content-partner">
<div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
<div className="border border-[#1a4d8c]/10 rounded-xl p-6 hover:border-[#1a4d8c]/30 transition-colors cursor-pointer" onclick="showToast('Downloading partnership deck...', 'solar:cloud-download-linear')">
<iconify-icon className="text-[#1a4d8c] mb-4" icon="solar:buildings-linear" width="32"></iconify-icon>
<h4 className="font-serif text-lg tracking-tight text-[#1a4d8c] mb-2">Corporate Sponsorship</h4>
<p className="text-xs text-[#2c2c2c]/60 mb-4">Align your brand with global impact. Includes co-branded campaigns and annual reports.</p>
<span className="text-xs font-medium text-[#ff6b35] flex items-center gap-1">Download Deck <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="border border-[#1a4d8c]/10 rounded-xl p-6 hover:border-[#1a4d8c]/30 transition-colors cursor-pointer" onclick="document.getElementById('contact-name').focus()">
<iconify-icon className="text-[#1a4d8c] mb-4" icon="solar:hand-shake-linear" width="32"></iconify-icon>
<h4 className="font-serif text-lg tracking-tight text-[#1a4d8c] mb-2">NGO Alliance</h4>
<p className="text-xs text-[#2c2c2c]/60 mb-4">Partner on specific ground projects, share resources, and multiply our collective reach.</p>
<span className="text-xs font-medium text-[#ff6b35] flex items-center gap-1">Contact Partnerships <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#faf7f2]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<span className="text-xs uppercase tracking-widest text-[#ff6b35] font-medium block mb-3">Direct Line</span>
<h2 className="font-serif text-3xl tracking-tight text-[#1a4d8c] mb-6">Get in Touch</h2>
<form className="space-y-4" id="contact-form">
<div className="grid sm:grid-cols-2 gap-4">
<input className="w-full px-4 py-3 border border-[#1a4d8c]/20 rounded-lg bg-white text-sm focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] outline-none transition-colors" id="contact-name" placeholder="Name" required="" type="text"/>
<input className="w-full px-4 py-3 border border-[#1a4d8c]/20 rounded-lg bg-white text-sm focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] outline-none transition-colors" placeholder="Email" required="" type="email"/>
</div>
<input className="w-full px-4 py-3 border border-[#1a4d8c]/20 rounded-lg bg-white text-sm focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] outline-none transition-colors" placeholder="Subject" required="" type="text"/>
<textarea className="w-full px-4 py-3 border border-[#1a4d8c]/20 rounded-lg bg-white text-sm focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] outline-none transition-colors resize-none" placeholder="Message" required="" rows="5"></textarea>
<button className="bg-[#1a4d8c] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#0d1b2a] transition-colors w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#1a4d8c] focus:ring-offset-2" type="submit">Send Message</button>
</form>
</div>

<div>
<span className="text-xs uppercase tracking-widest text-[#ff6b35] font-medium block mb-3">Questions</span>
<h2 className="font-serif text-3xl tracking-tight text-[#1a4d8c] mb-6">Common Inquiries</h2>
<div className="space-y-3">
<details className="group bg-white rounded-lg border border-[#1a4d8c]/10">
<summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium text-[#1a4d8c] focus:outline-none">
                                        Where does my donation go?
                                        <iconify-icon className="icon-plus text-lg text-[#ff6b35]" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-lg text-[#ff6b35]" icon="solar:minus-circle-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-[#2c2c2c]/70 font-light leading-relaxed">
                                        85% of all donations go directly to program services. 10% is used for administrative costs, and 5% for future fundraising efforts, ensuring long-term sustainability.
                                    </div>
</details>
<details className="group bg-white rounded-lg border border-[#1a4d8c]/10">
<summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium text-[#1a4d8c] focus:outline-none">
                                        Can I specify which project to fund?
                                        <iconify-icon className="icon-plus text-lg text-[#ff6b35]" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-lg text-[#ff6b35]" icon="solar:minus-circle-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-[#2c2c2c]/70 font-light leading-relaxed">
                                        Yes, during the checkout process you can select specific regions or initiatives (such as Education, Clean Water, or Emergency Relief).
                                    </div>
</details>
<details className="group bg-white rounded-lg border border-[#1a4d8c]/10">
<summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium text-[#1a4d8c] focus:outline-none">
                                        Are donations tax-deductible?
                                        <iconify-icon className="icon-plus text-lg text-[#ff6b35]" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-lg text-[#ff6b35]" icon="solar:minus-circle-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-[#2c2c2c]/70 font-light leading-relaxed">
                                        Hope Foundation is a registered 501(c)(3) non-profit organization. All donations made within the US are fully tax-deductible to the extent allowed by law.
                                    </div>
</details>
</div>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-6 border-t border-[#1a4d8c]/10 pt-16 mt-16">
<div className="bg-white p-6 rounded-xl shadow-sm border border-transparent hover:border-[#1a4d8c]/10 hover:-translate-y-1 transition-all">
<h4 className="font-serif text-lg tracking-tight text-[#1a4d8c] mb-1">New York HQ</h4>
<p className="text-xs text-[#2c2c2c]/60 mb-3">120 Broadway, Suite 300<br/>New York, NY 10271</p>
<a className="text-sm text-[#ff6b35] flex items-center gap-2 hover:underline" href="#" onclick="showToast('Calling +1 (212) 555-0198...', 'solar:phone-calling-linear'); return false;">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> +1 (212) 555-0198
                            </a>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-transparent hover:border-[#1a4d8c]/10 hover:-translate-y-1 transition-all">
<h4 className="font-serif text-lg tracking-tight text-[#1a4d8c] mb-1">London Office</h4>
<p className="text-xs text-[#2c2c2c]/60 mb-3">45 King Street, Covent Garden<br/>London, WC2E 8JG</p>
<a className="text-sm text-[#ff6b35] flex items-center gap-2 hover:underline" href="#" onclick="showToast('Calling +44 20 7946 0023...', 'solar:phone-calling-linear'); return false;">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> +44 20 7946 0023
                            </a>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-transparent hover:border-[#1a4d8c]/10 hover:-translate-y-1 transition-all">
<h4 className="font-serif text-lg tracking-tight text-[#1a4d8c] mb-1">Nairobi Hub</h4>
<p className="text-xs text-[#2c2c2c]/60 mb-3">Westlands Business Park<br/>Waiyaki Way, Nairobi</p>
<a className="text-sm text-[#ff6b35] flex items-center gap-2 hover:underline" href="#" onclick="showToast('Calling +254 20 555 0198...', 'solar:phone-calling-linear'); return false;">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> +254 20 555 0198
                            </a>
</div>
</div>
</div>
</section>
</main>
</div> 

<section className="py-24 bg-[#1a4d8c] text-white relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] to-[#1a4d8c]/80"></div>
<div className="absolute right-0 top-0 w-64 h-64 bg-[#ff6b35] rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">Stay informed, stay engaged.</h2>
<p className="text-sm text-white/80 mb-8">Join 14,000+ changemakers receiving our monthly field updates.</p>
<form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2" id="newsletter-form">
<input className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm outline-none focus:bg-white/20 transition-colors" placeholder="Email address" required="" type="email"/>
<button className="px-6 py-3 bg-[#ff6b35] text-white rounded-lg text-sm font-medium hover:bg-[#d95221] transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a4d8c]" type="submit">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-[#0d1b2a] text-white pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="font-serif text-2xl tracking-tighter text-white mb-4 block">HOPE</span>
<p className="text-xs text-white/50 leading-relaxed max-w-xs mb-6">Empowering communities worldwide through sustainable solutions and immediate relief.</p>
<div className="flex gap-4">
<button aria-label="Twitter" className="text-white/50 hover:text-white transition-colors focus:outline-none" onclick="showToast('Opening Twitter...', 'solar:hashtag-linear')">
<iconify-icon icon="solar:hashtag-linear" width="20"></iconify-icon>
</button>
<button aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors focus:outline-none" onclick="showToast('Opening LinkedIn...', 'solar:users-group-rounded-linear')">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-6">Explore</h5>
<ul className="space-y-3 text-sm text-white/70">
<li><button className="nav-link hover:text-white transition-colors" data-target="home">Home</button></li>
<li><button className="nav-link hover:text-white transition-colors" data-target="about">About Us</button></li>
<li><button className="nav-link hover:text-white transition-colors" data-target="causes">Our Impact</button></li>
<li><button className="nav-link hover:text-white transition-colors" data-target="involve">Contact</button></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-6">Programs</h5>
<ul className="space-y-3 text-sm text-white/70">
<li><button className="nav-link hover:text-white transition-colors" data-target="causes">Clean Water</button></li>
<li><button className="nav-link hover:text-white transition-colors" data-target="causes">Education</button></li>
<li><button className="nav-link hover:text-white transition-colors" data-target="causes">Disaster Relief</button></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-6">Legal</h5>
<ul className="space-y-3 text-sm text-white/70">
<li><button className="hover:text-white transition-colors" onclick="showToast('Privacy Policy accessed.', 'solar:shield-check-linear')">Privacy Policy</button></li>
<li><button className="hover:text-white transition-colors" onclick="showToast('Terms of Service accessed.', 'solar:document-text-linear')">Terms of Service</button></li>
<li><button className="hover:text-white transition-colors" onclick="showToast('501(c)(3) details downloaded.', 'solar:info-circle-linear')">501(c)(3) Info</button></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/40">© 2024 Hope Foundation. All rights reserved.</p>
<p className="text-[10px] text-white/30 uppercase tracking-widest">Designed for Impact</p>
</div>
</footer>

<button aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-[#25D366]/50" onclick="showToast('Initiating WhatsApp Chat...', 'solar:chat-round-line-linear')">
<div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-50"></div>
<iconify-icon className="relative z-10" icon="solar:phone-calling-linear" width="28"></iconify-icon>
</button>



    </>
  );
}
