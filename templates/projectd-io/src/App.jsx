import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = { darkMode: 'class' };



(function() {
document.addEventListener('DOMContentLoaded', () => {
const section = document.getElementById('timeline-steps');
const beam = document.getElementById('timeline-beam');
const steps = section ? section.querySelectorAll('.timeline-step') : [];
let ticking = false;
function updateBeam() {
if (!section || !beam) {
ticking = false;
return;
}
const rect = section.getBoundingClientRect();
const viewportHeight = window.innerHeight;
const sectionTop = rect.top;
const triggerPoint = viewportHeight * 0.55;
let fillHeight = triggerPoint - sectionTop;
fillHeight = Math.max(0, Math.min(fillHeight, rect.height));
beam.style.height = `${fillHeight}px`;
steps.forEach((step) => {
const node = step.querySelector('.timeline-node');
if(!node) return;
const nodeTop = step.offsetTop + (step.offsetHeight / 2);
if (fillHeight >= nodeTop) {
node.classList.add('node-active');
} else {
node.classList.remove('node-active');
}
});
ticking = false;
}
window.addEventListener('scroll', () => {
if (!ticking) {
window.requestAnimationFrame(updateBeam);
ticking = true;
}
}, { passive: true });
window.addEventListener('resize', () => {
if (!ticking) {
window.requestAnimationFrame(updateBeam);
ticking = true;
}
}, { passive: true });
setTimeout(updateBeam, 100);
const observerOptions = { threshold: 0.15, rootMargin: '-10% 0px -10% 0px' };
const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const left = entry.target.querySelector('.reveal-left');
const right = entry.target.querySelector('.reveal-right');
if (entry.isIntersecting) {
const header = document.getElementById('timeline-header');
if (header && entry.target.contains(header)) header.classList.remove('opacity-0', 'translate-y-8');
if (left) left.classList.add('reveal-visible');
if (right) right.classList.add('reveal-visible');
} else {
if (left) left.classList.remove('reveal-visible');
if (right) right.classList.remove('reveal-visible');
}
});
}, observerOptions);
const header = document.getElementById('timeline-header');
if(header && header.parentElement) revealObserver.observe(header.parentElement);
steps.forEach(step => revealObserver.observe(step));
});
})();



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Project D",
"image": "https://projectd.io/logo.png",
"@id": "https://projectd.io",
"url": "https://projectd.io",
"telephone": "[Your Phone Number]",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"streetAddress": "[Your Street Address]",
"addressLocality": "Deer Park",
"addressRegion": "NY",
"postalCode": "11729",
"addressCountry": "US"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 40.7618,
"longitude": -73.3293
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday"
],
"opens": "09:00",
"closes": "18:00"
},
"sameAs": [
"https://www.linkedin.com/company/project-d",
"https://www.instagram.com/projectd",
"https://projectdweb3.com"
],
"description": "Project D is a dual-force growth agency combining co-engineered video marketing with AI maximization programs (AMP) to automate business workloads and scale without overhead.",
"knowsAbout": [
"AI Automation",
"Video Marketing",
"Creative Strategy",
"Business Scaling",
"AIOps"
]
}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function toggleTheme() {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      }
      function applyTheme() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      // Initialize theme based on preference or system
      applyTheme();
      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!('theme' in localStorage)) applyTheme();
      });
    


                    (function() {
                                if (window.innerWidth < 768) return;
                                const existingCanvas = document.getElementById('cursor-trail');
                                if(existingCanvas) existingCanvas.remove();

                                const style = document.createElement('style');
                                style.textContent = `
                                    @media (pointer: fine) {
                                        body, a, button, [role="button"], input, select, textarea, .cursor-pointer {
                                            cursor: none !important;
                                        }
                                    }
                                `;
                                document.head.appendChild(style);

                                const canvas = document.createElement('canvas');
                                canvas.id = 'cursor-trail';
                                canvas.className = 'fixed inset-0 pointer-events-none z-[10000]';
                                document.body.appendChild(canvas);
                                const ctx = canvas.getContext('2d');
                                let width = window.innerWidth;
                                let height = window.innerHeight;
                                canvas.width = width;
                                canvas.height = height;

                                window.addEventListener('resize', () => {
                                    width = window.innerWidth;
                                    height = window.innerHeight;
                                    canvas.width = width;
                                    canvas.height = height;
                                });

                                let mouse = {x: -100, y: -100};
                                let isHovering = false;

                                window.addEventListener('mousemove', (e) => {
                                    mouse.x = e.clientX;
                                    mouse.y = e.clientY;
                                }, {passive: true});

                                document.addEventListener('mouseover', (e) => {
                                    isHovering = !!(e.target && e.target.closest && e.target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer, iframe'));
                                }, {passive: true});

                                function loop() {
                                    ctx.clearRect(0, 0, width, height);

                                    const isDark = document.documentElement.classList.contains('dark');
                                    const color = isDark ? '70, 212, 198' : '255, 145, 70';

                                    ctx.save();
                                    ctx.translate(mouse.x, mouse.y);
                                    if (isHovering) {
                                        ctx.scale(1.1, 1.1);
                                    }
                                    ctx.beginPath();
                                    ctx.moveTo(0, 0);
                                    ctx.lineTo(14, 14);
                                    ctx.lineTo(6, 14);
                                    ctx.lineTo(0, 20);
                                    ctx.closePath();

                                    ctx.fillStyle = isHovering ? `rgb(${color})` : '#ffffff';
                                    ctx.shadowBlur = 15;
                                    ctx.shadowColor = `rgba(${color}, 0.6)`;
                                    ctx.fill();

                                    ctx.lineWidth = 1.5;
                                    ctx.strokeStyle = isHovering ? '#ffffff' : (isDark ? '#000000' : '#1e293b');
                                    ctx.shadowBlur = 0;
                                    ctx.stroke();

                                    ctx.restore();

                                    requestAnimationFrame(loop);
                                }
                                loop();
                              })();
                  


      const modalData = {
        website: {
          title: "High-Conversion. Automated Experiences.",
          subtitle: "Hover to explore the features of our AI Website Makeover service.",
          center: { title: "AI Website Makeover", desc: "High-conversion automated landing pages.", icon: "solar:laptop-minimalistic-linear", color: "#46d4c6", bg: "bg-[#46d4c6]/20", text: "text-[#46d4c6]" },
          cards: [
            { title: "Fully Animated", category: "MOTION", pos: "translate(-120%, -120%) rotate(-5deg)" },
            { title: "Modern Visuals", category: "DESIGN", pos: "translate(120%, -110%) rotate(5deg)" },
            { title: "AI Software Built In", category: "TECH", pos: "translate(-110%, 120%) rotate(-3deg)" },
            { title: "High Conversion Rate", category: "GROWTH", pos: "translate(120%, 120%) rotate(4deg)" }
          ]
        },
        amp: {
          title: "Everything you need. In one unified partnership.",
          subtitle: "Hover to explore everything included in the AMP Program.",
          center: { title: "AMP Program", desc: "Elite creative production meets AI automation in a monthly partnership.", icon: "solar:star-fall-linear", color: "#ff9146", bg: "bg-[#ff9146]/20", text: "text-[#ff9146]" },
          cards: [
            { title: "AI Powered Website", category: "BUILD", pos: "translate(-120%, -120%) rotate(-5deg)" },
            { title: "3D Animation", category: "CREATE", pos: "translate(120%, -110%) rotate(5deg)" },
            { title: "App Development", category: "DEVELOP", pos: "translate(-110%, 120%) rotate(-3deg)" },
            { title: "Staff AI Training", category: "TRAIN", pos: "translate(120%, 120%) rotate(4deg)" }
          ]
        },
        ampCenter: {
          title: "A central hub. For total automation.",
          subtitle: "Hover to explore the modules within the AMP Center CRM.",
          center: { title: "AMP Center", desc: "Our custom CRM platform powered by AI to automate workflows.", icon: "solar:server-square-update-linear", color: "#46d4c6", bg: "bg-[#46d4c6]/20", text: "text-[#46d4c6]" },
          cards: [
            { title: "Sales Automation", category: "SCALE", pos: "translate(-120%, -120%) rotate(-5deg)" },
            { title: "Finance & Marketing", category: "GROWTH", pos: "translate(120%, -110%) rotate(5deg)" },
            { title: "AI Receptionist", category: "SUPPORT", pos: "translate(-110%, 120%) rotate(-3deg)" },
            { title: "AI Content Creator", category: "CREATE", pos: "translate(120%, 120%) rotate(4deg)" }
          ]
        },
        animation: {
          title: "The creation of a standout brand.",
          subtitle: "Hover to view examples of our custom 3D design and animation work.",
          center: { title: "3D Graphics & Animation", desc: "Custom 3D modeling, rendering, and high-end animations designed to mesmerize your audience.", icon: "solar:magic-stick-3-linear", color: "#ff9146", bg: "bg-[#ff9146]/20", text: "text-[#ff9146]" },
          cards: [
            { title: "Product Renders", category: "3D", pos: "translate(-120%, -120%) rotate(-5deg)" },
            { title: "Logo Animation", category: "MOTION", pos: "translate(120%, -110%) rotate(5deg)" },
            { title: "Social Media Assets", category: "SOCIAL", pos: "translate(-110%, 120%) rotate(-3deg)" },
            { title: "Visual Effects", category: "VFX", pos: "translate(120%, 120%) rotate(4deg)" }
          ]
        },
        app: {
          title: "Custom tools. Unlimited potential.",
          subtitle: "Hover to explore our App Development capabilities.",
          center: { title: "App Development", desc: "Useful apps & tools paired with AI.", icon: "solar:code-square-linear", color: "#3b82f6", bg: "bg-[#3b82f6]/20", text: "text-[#3b82f6]" },
          cards: [
            { title: "Internal Tools", category: "BIZ", pos: "translate(-120%, -120%) rotate(-5deg)" },
            { title: "Client Portals", category: "UI/UX", pos: "translate(120%, -110%) rotate(5deg)" },
            { title: "AI Integration", category: "AI", pos: "translate(-110%, 120%) rotate(-3deg)" },
            { title: "Mobile Apps", category: "MOBILE", pos: "translate(120%, 120%) rotate(4deg)" }
          ]
        }
      };

      function openModalWithData(key) {
        const data = modalData[key];
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-subtitle').innerText = data.subtitle;

        document.getElementById('modal-center-title').innerText = data.center.title;
        document.getElementById('modal-center-desc').innerText = data.center.desc;
        const iconEl = document.getElementById('modal-center-icon');
        iconEl.className = `w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${data.center.bg} ${data.center.text}`;
        iconEl.innerHTML = `<iconify-icon icon="${data.center.icon}" width="24"></iconify-icon>`;

        const container = document.getElementById('modal-cards-container');
        container.querySelectorAll('.floating-card').forEach(e => e.remove());

        data.cards.forEach((card) => {
          const el = document.createElement('div');
          el.className = `floating-card absolute w-[200px] h-[140px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 z-10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col justify-center items-center opacity-0 scale-50`;
          el.innerHTML = `
            <span class="text-[8px] font-bold tracking-widest text-gray-400 uppercase mb-2">${card.category}</span>
            <h4 class="text-sm font-medium text-gray-900 dark:text-white text-center">${card.title}</h4>
            <div class="mt-3 flex gap-2"><div class="w-8 h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div><div class="w-12 h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div></div>
          `;
          el.style.top = '50%';
          el.style.left = '50%';
          el.style.marginLeft = '-100px';
          el.style.marginTop = '-70px';
          container.appendChild(el);

          container.addEventListener('mouseenter', () => {
            el.style.transform = card.pos;
            el.style.opacity = '1';
          });
          container.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(-50%, -50%) scale(0.5)';
            el.style.opacity = '0';
          });

          setTimeout(() => {
            el.style.transform = 'translate(-50%, -50%) scale(0.5)';
          }, 50);
        });

        const modal = document.getElementById('service-modal');
        modal.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.remove('opacity-0');
        }, 10);
      }

      function closeModal() {
        const modal = document.getElementById('service-modal');
        modal.classList.add('opacity-0');
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 500);
      }

      window.openWebsiteModal = () => openModalWithData('website');
      window.openAmpModal = () => openModalWithData('amp');
      window.openAmpCenterModal = () => openModalWithData('ampCenter');
      window.open3DModal = () => openModalWithData('animation');
      window.openAppModal = () => openModalWithData('app');

      // Booking Logic
      let selectedDate = null;
      let selectedTime = null;
      let bookedSlots = JSON.parse(localStorage.getItem('bookedSlots') || '{}');

      function goToStep1() {
        document.getElementById('booking-step-2').classList.add('hidden', 'opacity-0');
        setTimeout(() => {
          document.getElementById('booking-step-1').classList.remove('hidden');
          setTimeout(() => document.getElementById('booking-step-1').classList.remove('opacity-0'), 50);
        }, 300);
      }

      function goToStep2() {
        const email = document.getElementById('bf-email').value;
        if(!email) return alert('Please enter an email address.');
        document.getElementById('booking-step-1').classList.add('hidden', 'opacity-0');
        setTimeout(() => {
          document.getElementById('booking-step-2').classList.remove('hidden');
          renderCalendar();
          setTimeout(() => document.getElementById('booking-step-2').classList.remove('opacity-0'), 50);
        }, 300);
      }

      let currentDate = new Date();
      function renderCalendar() {
        const monthYear = document.getElementById('calendar-month-year');
        monthYear.innerText = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        const daysContainer = document.getElementById('calendar-days');
        daysContainer.innerHTML = '';

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const today = new Date();

        for (let i = 0; i < firstDay; i++) {
          daysContainer.innerHTML += `<div></div>`;
        }

        for (let i = 1; i <= daysInMonth; i++) {
          const dateStr = `${year}-${month+1}-${i}`;
          const isPast = year === today.getFullYear() && month === today.getMonth() && i < today.getDate();
          const btnClass = isPast
            ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
            : 'text-gray-700 dark:text-gray-300 hover:bg-[#ff9146] hover:text-white cursor-pointer';

          let addedClass = (selectedDate === dateStr) ? 'bg-[#ff9146] text-white font-bold' : '';

          daysContainer.innerHTML += `
            <div onclick="selectDate('${dateStr}', ${isPast})" class="w-8 h-8 flex items-center justify-center rounded-full text-sm transition-all ${btnClass} ${addedClass}" id="date-${dateStr}">
              ${i}
            </div>
          `;
        }
      }

      window.changeMonth = (delta) => {
        currentDate.setMonth(currentDate.getMonth() + delta);
        renderCalendar();
      };

      window.selectDate = (dateStr, isPast) => {
        if(isPast) return;
        if(selectedDate) {
          const prev = document.getElementById(`date-${selectedDate}`);
          if(prev) prev.classList.remove('bg-[#ff9146]', 'text-white', 'font-bold');
        }
        selectedDate = dateStr;
        const curr = document.getElementById(`date-${selectedDate}`);
        if(curr) curr.classList.add('bg-[#ff9146]', 'text-white', 'font-bold');

        renderTimeSlots();
      };

      function renderTimeSlots() {
        const container = document.getElementById('time-slots-container');
        container.classList.remove('hidden');

        const slotsDiv = document.getElementById('time-slots');
        slotsDiv.innerHTML = '';

        const times = ['9:00 AM', '2:00 PM', '7:00 PM'];
        times.forEach(t => {
          const slotKey = `${selectedDate}-${t}`;
          const isBooked = bookedSlots[slotKey] === true;

          if(isBooked) {
            slotsDiv.innerHTML += `<button disabled class="py-2 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-400 line-through cursor-not-allowed">${t}</button>`;
          } else {
            let isSelected = (selectedTime === t);
            let classStr = isSelected ? 'bg-[#46d4c6] text-white' : 'text-[#46d4c6] hover:bg-[#46d4c6] hover:text-white';
            slotsDiv.innerHTML += `<button onclick="selectTime('${t}')" id="time-${t.replace(/\s/g, '')}" class="time-btn py-2 rounded-lg text-xs font-medium border border-[#46d4c6] transition-all ${classStr}">${t}</button>`;
          }
        });

        document.getElementById('confirm-booking-btn').disabled = !selectedTime;
      }

      window.selectTime = (time) => {
        selectedTime = time;
        document.querySelectorAll('.time-btn').forEach(btn => {
          btn.classList.remove('bg-[#46d4c6]', 'text-white');
          btn.classList.add('text-[#46d4c6]');
        });
        const activeBtn = document.getElementById(`time-${time.replace(/\s/g, '')}`);
        if(activeBtn) {
          activeBtn.classList.add('bg-[#46d4c6]', 'text-white');
          activeBtn.classList.remove('text-[#46d4c6]');
        }
        document.getElementById('confirm-booking-btn').disabled = false;
      };

      window.submitBooking = async () => {
        const btn = document.getElementById('confirm-booking-btn');
        btn.innerHTML = 'Processing...';
        btn.disabled = true;

        const fname = document.getElementById('bf-fname').value || 'Client';
        const lname = document.getElementById('bf-lname').value || '';
        const email = document.getElementById('bf-email').value;
        const website = document.getElementById('bf-website').value || 'N/A';
        const goal = document.getElementById('bf-goal').value || 'N/A';

        const payload = {
          Name: `${fname} ${lname}`,
          Email: email,
          Website: website,
          Goal: goal,
          Date: selectedDate,
          Time: selectedTime,
          _subject: `New Discovery Call Scheduled: ${fname} ${lname}`,
          _template: 'box'
        };

        const finalize = () => {
          bookedSlots[`${selectedDate}-${selectedTime}`] = true;
          localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));

          document.getElementById('booking-step-2').classList.add('hidden', 'opacity-0');
          setTimeout(() => {
            document.getElementById('success-email').innerText = email;
            document.getElementById('booking-step-3').classList.remove('hidden');
            setTimeout(() => document.getElementById('booking-step-3').classList.remove('opacity-0'), 50);
          }, 300);
        };

        try {
          await fetch('https://formsubmit.co/ajax/projectdweb3@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
          });
          finalize();
        } catch(e) {
          finalize();
        }
      };

      // Interactive 3D Logo Tilt Effect
      const logoContainer = document.getElementById('interactive-logo-container');
      if (logoContainer) {
        logoContainer.addEventListener('mousemove', (e) => {
          const rect = logoContainer.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -15;
          const rotateY = ((x - centerX) / centerX) * 15;

          logoContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        logoContainer.addEventListener('mouseleave', () => {
          logoContainer.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
          logoContainer.style.transition = `transform 0.5s ease-out`;
        });

        logoContainer.addEventListener('mouseenter', () => {
          logoContainer.style.transition = `transform 0.1s ease-out`;
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 hover:scale-[1.02] print:hidden" id="dynamic-island">
<div className="flex transition-all hover:bg-white/10 hover:border-white/20 duration-300 bg-white/5 border-white/10 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] backdrop-blur-2xl gap-x-1.5 gap-y-1.5 items-center">

<a className="flex items-center justify-center transition-transform hover:scale-110 group bg-center w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c547aee-5092-488d-9b24-cc3cadf37fdc_320w.png)] bg-cover rounded-full" href="#"></a>

<div className="flex items-center gap-0.5 px-1">
<a className="transition-all text-xs font-medium text-slate-950 bg-white/20 mix-blend-difference rounded-full px-3.5 py-1.5 relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" href="#">
            Home
          </a>
<a className="hover:bg-white/10 transition-all text-xs font-normal text-slate-950 mix-blend-difference rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5" href="/amp-center">
            AMP Center
          </a>
</div>

<div className="w-px h-4 bg-white/60 mix-blend-difference mx-1.5"></div>

<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all active:scale-90" onclick="toggleTheme()">
<iconify-icon className="block dark:hidden text-[#ff9146]" height="20" icon="solar:sun-2-bold-duotone" style={{color: 'rgb(255, 145, 70)'}} width="20"></iconify-icon>
<iconify-icon className="hidden dark:block text-[#46d4c6]" icon="solar:moon-stars-bold-duotone" width="18"></iconify-icon>
</button>
</div>
</nav>


<main className="w-full z-10 pt-24 pb-40 relative">

<section className="z-30 min-h-[85vh] flex flex-col justify-center max-w-7xl mx-auto pt-24 pb-8 px-6 relative" id="hero-section">


<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 relative z-10 w-full">

<div className="flex flex-col items-start text-left space-y-6 w-full md:w-2/3">
<div className="flex items-center gap-4 flex-wrap animate-on-scroll [animation:fadeInLeft_0.8s_ease-out_both] animate">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#ff9146] animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-gray-100">
                  Project D Growth Agency
                </span>
</div>
<div className="flex items-center gap-2">
<a className="flex items-center justify-center text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-700/50 rounded-full w-9 h-9 hover:scale-110 hover:text-[#E1306C] dark:hover:text-[#E1306C] transition-all backdrop-blur-md shadow-sm" href="https://www.instagram.com/projectd.io" target="_blank" title="Instagram">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-700/50 rounded-full w-9 h-9 hover:scale-110 hover:text-[#00f2fe] dark:hover:text-[#00f2fe] transition-all backdrop-blur-md shadow-sm" href="https://www.tiktok.com/@projectd.io" target="_blank" title="TikTok">
<iconify-icon icon="solar:music-notes-linear" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-700/50 rounded-full w-9 h-9 hover:scale-110 hover:text-[#1877F2] dark:hover:text-[#1877F2] transition-all backdrop-blur-md shadow-sm" href="https://www.facebook.com/projectdgrowthagency/" target="_blank" title="Facebook">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-900 dark:text-white tracking-tight leading-[1.05] animate-on-scroll [animation:fadeInLeft_0.8s_ease-out_0.1s_both] animate">
              Propel your business into the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9146] to-[#46d4c6]">
                AI era.
              </span>
</h1>
</div>

<div className="w-full md:w-1/3 flex flex-col items-start md:items-end space-y-6 animate-on-scroll [animation:fadeInLeft_0.8s_ease-out_0.2s_both] animate">
<p className="dark:text-gray-300 md:text-right text-lg font-normal text-gray-700 max-w-sm">
              We offer a variety of services with speed &amp; quality you've
              never seen before...
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 transition-all duration-500 text-sm font-medium text-gray-900 dark:text-white rounded-full px-8 py-3.5 relative overflow-hidden isolate dramatic-hover bg-white/60 dark:bg-gray-800/60 backdrop-blur-md" onclick="document.getElementById('discovery-call').scrollIntoView({behavior: 'smooth'})">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ff9146_30%,#ffffff_50%,#46d4c6_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_1.5s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute inset-[2px] rounded-full bg-white/90 dark:bg-gray-800/90 transition-colors duration-500 pointer-events-none z-0"></div>
<span className="relative z-10 flex items-center gap-2">
                  Book a Call
                  <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 lg:h-[600px] z-20 animate-on-scroll [animation:fadeInRight_0.8s_ease-out_0.3s_both] animate w-full h-auto gap-x-4 gap-y-4">

<div className="lg:col-span-4 md:col-span-2 flex flex-col md:flex-row lg:flex-col gap-4 lg:gap-6 h-full">

<div className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent flex-1 overflow-hidden min-h-[140px] md:min-h-[180px] shadow-lg hover:shadow-[0_10px_30px_rgba(70,212,198,0.15)] group transition-all duration-500 hover:-translate-y-1 cursor-pointer" onclick="openWebsiteModal()">
<div className="absolute inset-[1px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 transition-colors group-hover:bg-gray-50/90 dark:group-hover:bg-gray-800/90"></div>
<div className="relative z-10 p-6 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#46d4c6]/20 to-[#ff9146]/20 flex items-center justify-center text-[#46d4c6] border border-[#46d4c6]/20 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M5 3v4"></path>
<path d="M19 17v4"></path>
<path d="M3 5h4"></path>
<path d="M17 19h4"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white mb-1">
                    AI Website Makeover
                  </h3>
<p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    High-conversion automated landing pages.
                  </p>
</div>
</div>
</div>

<div className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent flex-1 overflow-hidden min-h-[140px] md:min-h-[180px] shadow-lg hover:shadow-[0_10px_30px_rgba(255,145,70,0.15)] group transition-all duration-500 hover:-translate-y-1 cursor-pointer" onclick="open3DModal()">
<div className="absolute inset-[1px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 transition-colors group-hover:bg-gray-50/90 dark:group-hover:bg-gray-800/90"></div>
<div className="relative z-10 p-6 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff9146]/20 to-pink-500/20 flex items-center justify-center text-[#ff9146] border border-[#ff9146]/20 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white mb-1">
                    3D Graphics &amp; Animation
                  </h3>
<p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    For logos, branding, IG stories &amp; more.
                  </p>
</div>
</div>
</div>

<div className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent flex-1 overflow-hidden min-h-[140px] md:min-h-[180px] shadow-lg hover:shadow-[0_10px_30px_rgba(70,212,198,0.15)] group transition-all duration-500 hover:-translate-y-1 cursor-pointer" onclick="openAppModal()">
<div className="absolute inset-[1px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 transition-colors group-hover:bg-gray-50/90 dark:group-hover:bg-gray-800/90"></div>
<div className="relative z-10 p-6 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors shadow-sm">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white mb-1">
                    App Development
                  </h3>
<p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    Useful apps &amp; tools paired with AI.
                  </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 md:col-span-1 h-[320px] md:h-[400px] lg:h-full relative rounded-[2rem] p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(255,145,70,0.2)] group transition-all duration-500 hover:-translate-y-2 cursor-pointer" onclick="openAmpModal()">
<div className="absolute inset-[1px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,145,70,0.05),transparent_50%)]"></div>
<img alt="AMP Program" className="w-full h-full object-cover opacity-75 dark:opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b46688a9-1a2f-4cb5-a1b0-4cf3c0b0e711_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent dark:from-gray-900/90 dark:via-transparent to-transparent"></div>
</div>
<div className="relative z-10 h-full p-8 flex flex-col justify-between pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 shadow-sm w-max pointer-events-auto">
<svg className="text-[#ff9146]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                  Partnership
                </span>
</div>
<div className="flex justify-between items-end gap-4 pointer-events-auto">
<div className="">
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 dark:text-white mb-2">
                    AMP Program
                  </h3>
<p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Elite creative production meets AI automation in a monthly
                    partnership.
                  </p>
</div>
<button className="w-12 h-12 rounded-full relative overflow-hidden isolate dramatic-hover bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg flex flex-shrink-0 items-center justify-center transition-all duration-500 group-hover:scale-110">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ff9146_30%,#ffffff_50%,#46d4c6_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_1.5s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute inset-[2px] rounded-full bg-white/90 dark:bg-gray-800/90 transition-colors duration-500 pointer-events-none z-0 group-hover:bg-[#ff9146] dark:group-hover:bg-[#ff9146]"></div>
<svg className="relative z-10 text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="lg:col-span-4 md:col-span-1 h-[320px] md:h-[400px] lg:h-full relative rounded-[2rem] p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(70,212,198,0.2)] group transition-all duration-500 hover:-translate-y-2 cursor-pointer" onclick="openAmpCenterModal()">
<div className="absolute inset-[1px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(70,212,198,0.05),transparent_50%)]"></div>
<img alt="AMP Center" className="w-full h-full object-cover opacity-75 dark:opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ebb7f2a-70db-4786-b5d7-c74a57ba1d24_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent dark:from-gray-900/90 dark:via-transparent to-transparent"></div>
</div>
<div className="relative z-10 h-full p-8 flex flex-col justify-between pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 shadow-sm w-max pointer-events-auto">
<svg className="text-[#46d4c6]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
<span className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                  Software
                </span>
</div>
<div className="flex justify-between items-end gap-4 pointer-events-auto">
<div className="">
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 dark:text-white mb-2">
                    AMP Center
                  </h3>
<p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Our custom CRM platform powered by AI to automate workflows.
                  </p>
</div>
<button className="w-12 h-12 rounded-full relative overflow-hidden isolate dramatic-hover bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg flex flex-shrink-0 items-center justify-center transition-all duration-500 group-hover:scale-110">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#46d4c6_30%,#ffffff_50%,#ff9146_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_1.5s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute inset-[2px] rounded-full bg-white/90 dark:bg-gray-800/90 transition-colors duration-500 pointer-events-none z-0 group-hover:bg-[#46d4c6] dark:group-hover:bg-[#46d4c6]"></div>
<svg className="relative z-10 text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>
<div className="relative w-full z-20" id="sticky-universe-wrapper">

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-white/0 dark:from-[#0b0f19] dark:to-[#0b0f19]/0 z-30 pointer-events-none"></div>
<div className="neon-beam-glow"></div>
<div className="neon-beam-core"></div>
<div className="dot-grid-bg absolute inset-0 hidden lg:block pointer-events-none"></div>
<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-none" height="914" id="webgl-canvas" style={{width: '1440px', height: '914px'}} width="1440"></canvas>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-white/0 dark:from-[#0b0f19] dark:to-[#0b0f19]/0 z-30 pointer-events-none"></div>
</div>

<div className="relative z-10 w-full">
<section className="scroll-fade-section min-h-screen md:px-12 flex flex-col w-full pt-32 pb-24 px-6 relative items-center justify-center" id="infrastructure-section">
<div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

<div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
<h2 className="text-[12vw] sm:text-[10vw] lg:text-[8rem] font-semibold text-gray-900 dark:text-white leading-none tracking-tight mb-8">
                  Project D
                </h2>
<p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  The AMP Program is the full suite of our services. The Idea is
                  to use AI to scale your business in every way possible,
                  propelling you into the future...
                </p>
</div>

<div className="relative flex flex-col items-center justify-center order-1 lg:order-2 h-[500px] lg:h-[600px] w-full perspective-[1500px]">

<div className="lg:-left-12 dark:bg-gray-900/60 dark:border-white/10 transform -translate-y-4 lg:translate-y-0 transition-transform duration-500 hover:-translate-y-2 z-30 bg-white/70 w-full max-w-[320px] border-gray-200/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 absolute top-0 shadow-2xl backdrop-blur-xl">
<p className="text-gray-800 dark:text-gray-100 text-base leading-relaxed font-medium tracking-tight mb-8">
                    The AMP Center is an AI powered business management platform
                    designed to replace everything else...
                  </p>
<a className="group inline-flex transition-all duration-500 dark:text-white overflow-hidden isolate dramatic-hover dark:bg-gray-800/60 cursor-pointer text-sm font-medium text-gray-900 bg-white/60 w-full rounded-full pt-4 pr-6 pb-4 pl-6 relative shadow-lg backdrop-blur-md gap-x-2 gap-y-2 items-center justify-center" href="/amp-center">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ff9146_30%,#ffffff_50%,#46d4c6_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_1.5s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute inset-[2px] rounded-full bg-white/90 dark:bg-gray-800/90 transition-colors duration-500 pointer-events-none z-0"></div>
<span className="relative z-10 flex items-center gap-2">
                      Try the AMP Center Demo
                      <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>

<div className="lg:w-96 lg:h-96 transition-transform duration-200 ease-out cursor-crosshair flex z-20 lg:mt-0 lg:ml-16 w-72 h-72 mt-24 relative items-center justify-center" id="interactive-logo-container" style={{transformStyle: 'preserve-3d'}}>

<img alt="Project D Logo" className="relative w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c547aee-5092-488d-9b24-cc3cadf37fdc_800w.png" style={{transform: 'translateZ(80px)'}}/>

<div className="absolute inset-0 z-20 pointer-events-none" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute top-[10%] left-[10%] w-4 h-4 bg-[#ff9146] rounded-full blur-[2px] animate-pulse shadow-[0_0_20px_#ff9146]" style={{transform: 'translateZ(120px)'}}></div>
<div className="absolute bottom-[10%] right-[10%] w-6 h-6 bg-[#46d4c6] rounded-full blur-[3px] animate-pulse shadow-[0_0_25px_#46d4c6]" style={{transform: 'translateZ(90px)', animationDelay: '1s'}}></div>
</div>
</div>

<div className="absolute bottom-0 right-0 lg:right-12 w-full max-w-[280px] z-10 text-right transform translate-y-8 lg:translate-y-4">
<p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    We enhance your website and give it a built in AI toolset
                    for your staff to operate with
                  </p>
</div>
</div>
</div>
</section>
<section className="sm:px-6 z-20 max-w-6xl mt-40 mr-auto ml-auto pr-4 pl-4 relative perspective-[2000px]">
<div className="sm:py-32 overflow-hidden dark:bg-[#0b0f19]/50 bg-white/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl w-full rounded-3xl pt-20 pb-20 relative">

<style>
                @keyframes flowBeam {
                  0% {
                    transform: translate3d(0, -100%, 0);
                    opacity: 0;
                  }

                  50% {
                    opacity: 1;
                  }

                  100% {
                    transform: translate3d(0, 100%, 0);
                    opacity: 0;
                  }
                }

                .animate-flow-beam {
                  animation: flowBeam 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }

                .node-active {
                  background-color: #ff9146 !important;
                  border-color: #ff9146 !important;
                  box-shadow: 0 0 20px rgba(255, 145, 70, 0.8), 0 0 0 6px rgba(255, 145, 70, 0.2) !important;
                  transform: translate3d(-50%, 0, 0) scale(1.3) !important;
                  z-index: 30 !important;
                  will-change: transform, box-shadow;
                }

                .reveal-left {
                  opacity: 0;
                  transform: translate3d(-50px, 0, 0);
                  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                  will-change: transform, opacity;
                }

                .reveal-right {
                  opacity: 0;
                  transform: translate3d(50px, 0, 0);
                  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                  will-change: transform, opacity;
                }

                .reveal-visible {
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }

                /* Fluid Blob Animation */
                @keyframes blob {
                  0% {
                    transform: translate3d(0px, 0px, 0px) scale(1);
                  }

                  33% {
                    transform: translate3d(30px, -50px, 0px) scale(1.1);
                  }

                  66% {
                    transform: translate3d(-20px, 20px, 0px) scale(0.9);
                  }

                  100% {
                    transform: translate3d(0px, 0px, 0px) scale(1);
                  }
                }

                .animate-blob {
                  animation: blob 7s infinite;
                  will-change: transform;
                }

                .animation-delay-2000 {
                  animation-delay: 2s;
                }

                .animation-delay-4000 {
                  animation-delay: 4s;
                }
              </style>
<div className="sm:px-6 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">

<div className="sm:mb-32 reveal-up transition-all duration-1000 z-20 text-center max-w-3xl mr-auto mb-20 ml-auto relative" id="timeline-header">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[160%] sm:w-[150%] sm:h-[180%] -z-10 backdrop-blur-xl bg-white/40 dark:bg-[#0b0f19]/60 pointer-events-none rounded-[100%]" style={{WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'}}></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-medium uppercase tracking-widest mb-6 relative z-10">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Process Architecture
                  </div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 relative z-10">
<span className="text-[#ff9146]">Ecosystem</span>
</h2>
<p className="text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed relative z-10">
                    From discovery to deployment, we build the infrastructure
                    that powers your growth.
                  </p>
</div>

<div className="z-10 lg:space-y-32 relative space-y-16" id="timeline-steps">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2 h-full z-0">
<div className="absolute top-0 left-0 w-full bg-[#ff9146] shadow-[0_0_15px_rgba(255,145,70,0.6)] w-[3px] -ml-[1px] h-0 transition-all duration-100 ease-out will-change-[height]" id="timeline-beam" style={{height: '0px'}}></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 timeline-step relative gap-x-12 gap-y-12 items-center" data-index="1">
<svg className="timeline-noodle absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{zIndex: '1'}}>
<path className="text-gray-200 dark:text-gray-800" d="M 50% 50% C 60% 50% 80% 50% 100% 50%" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="noodle-beam stroke-[#ff9146]" d="M 50% 50% C 60% 50% 80% 50% 100% 50%" fill="none" strokeWidth="3" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#d1d5db] bg-[#ffffff] transform -translate-x-1/2 z-20 transition-all duration-300 timeline-node shadow-[0_0_0_4px_rgba(255,255,255,1)] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 hover:bg-[#ff9146] hover:border-[#ff9146] hover:shadow-[0_0_20px_rgba(255,145,70,0.6)] hover:z-30"></div>
<div className="pl-16 md:pl-0 md:pr-12 md:text-right order-1 reveal-left">
<div className="inline-block mb-4">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#46d4c6]">
                          Phase 01
                        </span>
</div>
<h3 className="text-3xl font-medium text-gray-900 dark:text-white mb-4 tracking-tight">
                        The Discovery Blueprint
                      </h3>
<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Real-Time Architecture. By the end of our first call,
                        half your site is already built as we discuss your
                        vision. We don't just take notes; we construct the
                        framework live.
                      </p>
</div>
<div className="pl-16 md:pl-12 order-2 reveal-right">
<div className="relative group rounded-2xl overflow-hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/60 dark:border-gray-700/60 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-1">
<div className="h-8 bg-gray-50/80 dark:bg-gray-800/80 border-b border-gray-100 dark:border-gray-700 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
</div>
<div className="p-6 relative min-h-[240px] flex flex-col gap-4">
<div className="flex gap-4">
<div className="w-1/3 h-32 rounded-lg bg-teal-500/10 border border-teal-500/20 animate-pulse"></div>
<div className="w-2/3 h-32 rounded-lg bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
<div className="text-xs text-gray-400 uppercase tracking-widest">
                                Constructing Layout...
                              </div>
</div>
</div>
<div className="flex gap-4">
<div className="w-full h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-500/10 w-1/2 skew-x-12 animate-flow-beam"></div>
</div>
</div>
<div className="absolute bottom-6 right-6">
<div className="px-3 py-1 bg-teal-500 text-white text-[10px] font-bold uppercase rounded-full shadow-lg shadow-teal-500/30">
                              Live Build
                            </div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 timeline-step relative gap-x-12 gap-y-12 items-center" data-index="2">
<div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#d1d5db] bg-[#ffffff] transform -translate-x-1/2 z-20 transition-all duration-300 timeline-node shadow-[0_0_0_4px_rgba(255,255,255,1)] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 hover:bg-[#ff9146] hover:border-[#ff9146] hover:shadow-[0_0_20px_rgba(255,145,70,0.6)] hover:z-30"></div>
<svg className="timeline-noodle absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{zIndex: '1'}}>
<path className="text-gray-200 dark:text-gray-800" d="M 50% 50% C 40% 50% 20% 50% 0% 50%" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="noodle-beam stroke-[#ff9146]" d="M 50% 50% C 40% 50% 20% 50% 0% 50%" fill="none" strokeWidth="3" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="pl-16 md:pl-0 md:pr-12 order-2 md:order-1 reveal-left">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">

<div className="sm:row-span-2 relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300 min-h-[140px]">
<div className="absolute inset-[1px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-[calc(1rem-1px)] z-0 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,145,70,0.05),transparent_50%)]"></div>
</div>
<div className="relative z-10 p-5 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff9146]/20 to-pink-500/20 flex items-center justify-center text-[#ff9146] border border-[#ff9146]/20 shadow-sm mb-6">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">
                                AMP Program
                              </h3>
<p className="text-[10px] text-gray-500 dark:text-gray-400">
                                Creative production &amp; AI automation.
                              </p>
</div>
</div>
</div>

<div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-[1px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[calc(1rem-1px)] z-0 transition-colors group-hover:bg-gray-50/90 dark:group-hover:bg-gray-800/90"></div>
<div className="relative z-10 p-4 h-full flex flex-col justify-center">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#46d4c6]/20 to-[#ff9146]/20 flex items-center justify-center text-[#46d4c6] border border-[#46d4c6]/20 shadow-sm mb-3">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<h3 className="text-xs font-medium text-gray-900 dark:text-white">
                              AI Website Makeover
                            </h3>
</div>
</div>

<div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-[1px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[calc(1rem-1px)] z-0 transition-colors group-hover:bg-gray-50/90 dark:group-hover:bg-gray-800/90"></div>
<div className="relative z-10 p-4 h-full flex flex-col justify-center">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff9146]/20 to-pink-500/20 flex items-center justify-center text-[#ff9146] border border-[#ff9146]/20 shadow-sm mb-3">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<h3 className="text-xs font-medium text-gray-900 dark:text-white">
                              3D Graphics &amp; Animation
                            </h3>
</div>
</div>

<div className="sm:col-span-2 relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-[1px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[calc(1rem-1px)] z-0 transition-colors group-hover:bg-gray-50/90 dark:group-hover:bg-gray-800/90"></div>
<div className="relative z-10 p-4 h-full flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex shrink-0 items-center justify-center text-blue-500 border border-blue-500/20 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5 tracking-tight">
                                App Development
                              </h3>
<p className="text-[10px] text-gray-500 dark:text-gray-400">
                                Useful apps &amp; tools paired with AI.
                              </p>
</div>
</div>
</div>

<div className="sm:col-span-2 relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 dark:from-gray-700 via-transparent to-transparent overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-[1px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-[calc(1rem-1px)] z-0 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(70,212,198,0.05),transparent_50%)]"></div>
</div>
<div className="relative z-10 p-4 h-full flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#46d4c6]/20 to-[#ff9146]/20 flex shrink-0 items-center justify-center text-[#46d4c6] border border-[#46d4c6]/20 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5 tracking-tight">
                                AMP Center
                              </h3>
<p className="text-[10px] text-gray-500 dark:text-gray-400">
                                Custom CRM platform powered by AI.
                              </p>
</div>
</div>
</div>
</div>
</div>
<div className="pl-16 md:pl-12 md:order-2 reveal-right">
<div className="inline-block mb-4">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9146]">
                          Phase 02
                        </span>
</div>
<h3 className="text-3xl font-medium text-gray-900 dark:text-white mb-4 tracking-tight">
                        Service Selection
                      </h3>
<p className="dark:text-gray-400 leading-relaxed text-lg text-gray-600">
                        We have many services you can choose from beyond an AI
                        powered website. We offer 3D Animation &amp; CGI, Logos
                        &amp; Graphics, and even custom App Development.
                      </p>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center timeline-step" data-index="3">
<div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#d1d5db] bg-[#ffffff] transform -translate-x-1/2 z-20 transition-all duration-300 timeline-node shadow-[0_0_0_4px_rgba(255,255,255,1)] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 hover:bg-[#ff9146] hover:border-[#ff9146] hover:shadow-[0_0_20px_rgba(255,145,70,0.6)] hover:z-30"></div>
<svg className="timeline-noodle absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{zIndex: '1'}}>
<path className="text-gray-200 dark:text-gray-800" d="M 50% 50% C 60% 50% 80% 50% 100% 50%" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="noodle-beam stroke-[#ff9146]" d="M 50% 50% C 60% 50% 80% 50% 100% 50%" fill="none" strokeWidth="3" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="pl-16 md:pl-0 md:pr-12 md:text-right order-1 reveal-left">
<div className="inline-block mb-4">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#46d4c6]">
                          Phase 03
                        </span>
</div>
<h3 className="text-3xl font-medium text-gray-900 dark:text-white mb-4 tracking-tight">
                        Installing the AMP Center
                      </h3>
<p className="dark:text-gray-400 leading-relaxed text-lg text-gray-600">
                        We give you control of your own AI workforce that can do
                        almost anything you ask it...
                      </p>
</div>
<div className="pl-16 md:pl-12 order-2 reveal-right">
<div className="relative overflow-hidden flex flex-col bg-gray-50/50 dark:bg-[#0b0f19]/80 w-full h-[290px] border-gray-200 dark:border-gray-800 border rounded-2xl shadow-2xl items-center p-4 group hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-sm pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#46d4c6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[40px] opacity-20 dark:opacity-10 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#ff9146] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[40px] opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
</div>

<div className="relative z-10 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-3 flex gap-3 w-[95%] mb-2 shadow-sm">
<div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-500 dark:text-gray-400 text-sm" icon="solar:user-bold"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-bold text-[#46d4c6] mb-0.5 tracking-wider uppercase">
                              CEO AGENT
                            </div>
<p className="text-[11px] text-gray-700 dark:text-gray-300 leading-snug">
                              Initialization complete. I am your Custom CEO
                              Agent. I have analyzed your kingdom parameters and
                              am assembling your autonomous workforce...
                            </p>
</div>
</div>

<div className="relative z-10 flex flex-col items-center w-full mt-1 px-2">

<div className="bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl py-2 px-8 shadow-sm z-10 flex items-center gap-3">
<div className="w-6 h-6 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
<iconify-icon className="text-gray-500 dark:text-gray-400 text-[12px]" icon="solar:crown-minimalistic-bold-duotone"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[12px] font-bold text-gray-900 dark:text-white leading-none">
                                CEO
                              </div>
<div className="text-[9px] text-gray-500 flex items-center gap-1 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                                Active
                              </div>
</div>
</div>

<div className="w-px h-5 bg-gray-300 dark:bg-gray-700"></div>
<div className="w-[88%] h-px bg-gray-300 dark:bg-gray-700"></div>

<div className="grid grid-cols-3 gap-2 w-full mt-4">

<div className="bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:border-[#46d4c6]/50 transition-colors rounded-xl py-2 px-1 shadow-sm flex flex-col items-center text-center relative sub-agent-group">
<div className="absolute -top-4 left-1/2 w-px h-4 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>
<div className="w-7 h-7 rounded-full bg-[#46d4c6]/10 flex items-center justify-center mb-1.5 transition-transform hover:scale-110">
<iconify-icon className="text-[#46d4c6] text-[14px]" icon="solar:global-bold-duotone"></iconify-icon>
</div>
<div className="text-[10px] font-bold text-gray-900 dark:text-white leading-tight">
                                CMO Agent
                              </div>
<div className="text-[7px] text-gray-500 mt-0.5 whitespace-nowrap">
                                Lead Gen &amp; Marketing
                              </div>
</div>

<div className="bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:border-gray-400 transition-colors rounded-xl py-2 px-1 shadow-sm flex flex-col items-center text-center relative sub-agent-group">
<div className="absolute -top-4 left-1/2 w-px h-4 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>
<div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-1.5 transition-transform hover:scale-110">
<iconify-icon className="text-gray-500 dark:text-gray-400 text-[14px]" icon="solar:settings-bold-duotone"></iconify-icon>
</div>
<div className="text-[10px] font-bold text-gray-900 dark:text-white leading-tight">
                                CTO Agent
                              </div>
<div className="text-[7px] text-gray-500 mt-0.5 whitespace-nowrap">
                                Systems &amp; Code
                              </div>
</div>

<div className="bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:border-[#ff9146]/50 transition-colors rounded-xl py-2 px-1 shadow-sm flex flex-col items-center text-center relative sub-agent-group">
<div className="absolute -top-4 left-1/2 w-px h-4 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>
<div className="w-7 h-7 rounded-full bg-[#ff9146]/10 flex items-center justify-center mb-1.5 transition-transform hover:scale-110">
<iconify-icon className="text-[#ff9146] text-[14px]" icon="solar:pen-bold-duotone"></iconify-icon>
</div>
<div className="text-[10px] font-bold text-gray-900 dark:text-white leading-tight">
                                Creative Agent
                              </div>
<div className="text-[7px] text-gray-500 mt-0.5 whitespace-nowrap">
                                Content &amp; Assets
                              </div>
</div>
</div>
</div>

<div className="relative z-10 mt-auto pt-3">
<button className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-[#ff9146] text-[11px] font-medium py-1.5 px-6 rounded-full flex items-center gap-1.5 hover:bg-orange-100 dark:hover:bg-[#ff9146]/20 transition-colors shadow-sm">
                            Enter Command Center →
                          </button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 timeline-step relative gap-x-12 gap-y-12 items-center" data-index="4">
<div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#d1d5db] bg-[#ffffff] transform -translate-x-1/2 z-20 transition-all duration-300 timeline-node shadow-[0_0_0_4px_rgba(255,255,255,1)] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 hover:bg-[#ff9146] hover:border-[#ff9146] hover:shadow-[0_0_20px_rgba(255,145,70,0.6)] hover:z-30"></div>
<svg className="timeline-noodle absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{zIndex: '1'}}>
<path className="text-gray-200 dark:text-gray-800" d="M 50% 50% C 40% 50% 20% 50% 0% 50%" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="noodle-beam stroke-[#ff9146]" d="M 50% 50% C 40% 50% 20% 50% 0% 50%" fill="none" strokeWidth="3" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="pl-16 md:pl-0 md:pr-12 order-2 md:order-1 reveal-left">
<div className="relative bg-[#f8fafc] dark:bg-[#0b0f19] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 flex h-[260px] w-full">

<div className="w-[28%] bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-800 flex flex-col p-2 z-10">

<div className="flex items-center gap-1.5 mb-4 px-1 mt-1">
<div className="w-5 h-5 rounded bg-[#0b0f19] dark:bg-white flex items-center justify-center shrink-0">
<div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#46d4c6] to-[#ff9146]"></div>
</div>
<div className="text-[9px] font-bold text-gray-900 dark:text-white leading-none">
                              AMP
                              <br/>
                              Center
                            </div>
</div>

<div className="space-y-1">
<div className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1.5 flex items-center gap-1.5">
<iconify-icon className="text-gray-900 dark:text-white text-[10px]" icon="solar:chat-round-line-bold-duotone"></iconify-icon>
<span className="text-[7px] font-semibold text-gray-900 dark:text-white">
                                Neural Chat
                              </span>
</div>
<div className="px-2 py-1.5 flex items-center gap-1.5">
<iconify-icon className="text-gray-400 text-[10px]" icon="solar:filter-bold-duotone"></iconify-icon>
<span className="text-[7px] font-medium text-gray-500">
                                Lead Pipeline
                              </span>
</div>
<div className="px-2 py-1.5 flex items-center gap-1.5">
<iconify-icon className="text-gray-400 text-[10px]" icon="solar:folder-with-files-bold-duotone"></iconify-icon>
<span className="text-[7px] font-medium text-gray-500">
                                Client Ledger
                              </span>
</div>
<div className="px-2 py-1.5 flex items-center gap-1.5">
<iconify-icon className="text-gray-400 text-[10px]" icon="solar:chart-square-bold-duotone"></iconify-icon>
<span className="text-[7px] font-medium text-gray-500">
                                Marketing Pipeline
                              </span>
</div>
</div>
<div className="mt-auto px-1">
<div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-full px-2 py-1 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[6px] font-medium text-green-700 dark:text-green-400 truncate">
                                System Online: 4 Agents
                              </span>
</div>
</div>
</div>

<div className="w-[45%] flex flex-col p-2 relative bg-gray-50/50 dark:bg-[#0b0f19]/50">

<div className="bg-white dark:bg-[#111827] rounded-lg p-2 border border-gray-100 dark:border-gray-800 flex items-center gap-2 shadow-sm mb-2 shrink-0 z-10">
<div className="w-6 h-6 rounded-md bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#ff9146] text-[12px]" icon="solar:crown-minimalistic-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-[9px] font-bold text-gray-900 dark:text-white leading-tight">
                                CEO Agent
                              </div>
<div className="text-[6px] text-gray-500 leading-tight">
                                Orchestrating 3 sub-agents.
                              </div>
</div>
</div>

<div className="flex-1 relative z-10">

<div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-[#46d4c6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[40px] opacity-[0.15]"></div>
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ff9146] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[40px] opacity-[0.15]"></div>
</div>

<div className="relative bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-800 rounded-lg rounded-tl-none p-2 shadow-sm w-[90%] mt-4 ml-2">
<div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center border border-white dark:border-[#111827]">
<iconify-icon className="text-[#ff9146] text-[8px]" icon="solar:crown-minimalistic-bold-duotone"></iconify-icon>
</div>
<p className="text-[7px] text-gray-700 dark:text-gray-300 leading-relaxed">
                                Systems online. The team is awaiting your
                                command. How should we proceed?
                              </p>
<div className="text-[5px] text-gray-400 mt-1">
                                09:00 AM
                              </div>
</div>
</div>

<div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-full py-1.5 px-3 mt-2 flex items-center justify-between shadow-sm shrink-0 z-10">
<span className="text-[7px] text-gray-400">
                              Instruct the CEO...
                            </span>
<div className="w-5 h-5 rounded-full bg-[#ff9146]/10 flex items-center justify-center text-[#ff9146]">
<iconify-icon className="text-[10px]" icon="solar:plain-bold-duotone"></iconify-icon>
</div>
</div>
</div>

<div className="w-[27%] bg-white dark:bg-[#111827] border-l border-gray-200 dark:border-gray-800 flex flex-col p-2 z-10">
<div className="text-[6px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-line-duotone"></iconify-icon>
                            ACTIVE TASKS
                          </div>
<div className="space-y-1.5">

<div className="bg-teal-50/50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/30 rounded p-1.5 shadow-sm">
<div className="flex justify-between items-center mb-0.5">
<span className="text-[6px] font-bold text-gray-900 dark:text-white">
                                  Lead Gen Agent
                                </span>
<span className="text-[5px] text-[#46d4c6] flex items-center gap-0.5">
<span className="w-1 h-1 rounded-full bg-[#46d4c6]"></span>
                                  Running
                                </span>
</div>
<div className="text-[5px] text-gray-500 leading-tight">
                                Scraping LinkedIn for "SaaS Founders"
                              </div>
</div>

<div className="bg-teal-50/50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/30 rounded p-1.5 shadow-sm">
<div className="flex justify-between items-center mb-0.5">
<span className="text-[6px] font-bold text-gray-900 dark:text-white">
                                  Creative Agent
                                </span>
<span className="text-[5px] text-[#46d4c6] flex items-center gap-0.5">
<span className="w-1 h-1 rounded-full bg-[#46d4c6]"></span>
                                  Running
                                </span>
</div>
<div className="text-[5px] text-gray-500 leading-tight">
                                Vibe coding 3D Assets for Alpha
                              </div>
</div>

<div className="bg-gray-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded p-1.5 shadow-sm">
<div className="flex justify-between items-center mb-0.5">
<span className="text-[6px] font-bold text-gray-900 dark:text-white">
                                  CMO Agent
                                </span>
<span className="text-[5px] text-gray-400">
                                  Done
                                </span>
</div>
<div className="text-[5px] text-gray-500 leading-tight">
                                Drafting copy for Q3 funnel
                              </div>
</div>
</div>
<div className="mt-auto">
<div className="text-[6px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                              COST TRACKING
                            </div>
<div className="space-y-1.5">
<div>
<div className="flex justify-between text-[5px] text-gray-500 mb-0.5">
<span>CEO</span>
<span>$42 / $100</span>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-0.5">
<div className="bg-[#ff9146] h-0.5 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[5px] text-gray-500 mb-0.5">
<span>CMD</span>
<span>$12 / $40</span>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-0.5">
<div className="bg-[#ff9146] h-0.5 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[5px] text-gray-500 mb-0.5">
<span>Creative</span>
<span>$30 / $50</span>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-0.5">
<div className="bg-[#ff9146] h-0.5 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[5px] text-gray-500 mb-0.5">
<span>CTO</span>
<span>$25 / $50</span>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-0.5">
<div className="bg-[#ff9146] h-0.5 rounded-full" style={{width: '50%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="pl-16 md:pl-12 md:order-2 reveal-right">
<div className="inline-block mb-4">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9146]">
                          Phase 04
                        </span>
</div>
<h3 className="text-3xl font-medium text-gray-900 dark:text-white mb-4 tracking-tight">
                        The Operational Home Base
                      </h3>
<p className="dark:text-gray-400 leading-relaxed text-lg text-gray-600">
                        Deployment. Your site goes live with the AMP Center CRM
                        hard-coded into your domain. We then book monthly
                        sessions to train your staff to become proficient with
                        AI tools that will increase your profit margins.
                      </p>
</div>
</div>

</div>
</div>
</div>

<section className="w-full pt-32 pb-40 px-6 relative flex flex-col items-center justify-center min-h-screen" id="reviews-section">
<div className="text-center mb-16 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-medium uppercase tracking-widest mb-6 relative z-10">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                  Client Success
                </div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 dark:text-white mb-6">
<span className="text-[#ff9146]">Real</span>
                  Results
                </h2>
</div>
<div className="max-w-6xl w-full h-[800px] md:h-[600px] flex flex-col md:flex-row gap-4 relative z-10" id="reviews-container">

<div className="group relative flex-1 hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg cursor-pointer">

<div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
<p className="transform md:-rotate-90 text-gray-600 dark:text-gray-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm font-medium whitespace-nowrap">
                      01 // BENNETT DEUSCH
                    </p>
</div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col justify-end p-4 sm:p-6 md:p-8 overflow-hidden">
<div className="relative z-10 h-full flex flex-col pointer-events-none">

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm backdrop-blur-md self-start">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff9146]"></span>
<span className="text-[9px] font-bold text-[#ff9146] uppercase tracking-widest">
                          Verified Review
                        </span>
</div>
<div className="flex flex-col gap-6 mt-auto">

<div className="flex gap-1 text-[#ff9146]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="text-sm sm:text-base md:text-xl font-medium text-gray-900 dark:text-white leading-tight min-w-[250px] line-clamp-6 md:line-clamp-none">
                          "I never leave reviews but I was very impressed. This
                          is a newer company, but I gave them a shot because a
                          friend of mine referred me- and I'm very glad that I
                          did. I worked with 3 people on the team and each one
                          picked up where the last one left off and I felt like
                          I was in good hands throughout. But all that's
                          personal. As for the project- I'd give it a 9.8/10 .
                          all my goals were hit here with absolute quality. -
                          HAPPY."
                        </h3>
<div className="flex items-center gap-4 mt-2">
<div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold shrink-0">
                            B
                          </div>
<div>
<p className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                              Bennett Deusch
                            </p>
<p className="text-[10px] text-[#ff9146] uppercase tracking-wider font-bold whitespace-nowrap">
                              Google Review
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="group relative flex-1 hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg cursor-pointer">

<div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
<p className="transform md:-rotate-90 text-gray-600 dark:text-gray-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm font-medium whitespace-nowrap">
                      02 // JOSEPH BURNS
                    </p>
</div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col justify-end p-4 sm:p-6 md:p-8 overflow-hidden">
<div className="relative z-10 w-full h-full flex flex-col pointer-events-none">

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm backdrop-blur-md self-start">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff9146]"></span>
<span className="text-[9px] font-bold text-[#ff9146] uppercase tracking-widest">
                          Verified Review
                        </span>
</div>
<div className="flex flex-col gap-6 mt-auto">

<div className="flex gap-1 text-[#ff9146]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="text-sm sm:text-base md:text-3xl font-medium text-gray-900 dark:text-white leading-tight min-w-[250px] line-clamp-6 md:line-clamp-none">
                          "Project D made my best tik tok yet!!! Amazing thank
                          you"
                        </h3>
<div className="flex items-center gap-4 mt-2">
<div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold shrink-0">
                            J
                          </div>
<div>
<p className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                              Joseph Burns
                            </p>
<p className="text-[10px] text-[#ff9146] uppercase tracking-wider font-bold whitespace-nowrap">
                              Google Review
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="group relative flex-1 hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg cursor-pointer">

<div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
<p className="transform md:-rotate-90 text-gray-600 dark:text-gray-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm font-medium whitespace-nowrap">
                      03 // JOHN LOFFREDO
                    </p>
</div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col justify-end p-4 sm:p-6 md:p-8 overflow-hidden">
<div className="relative z-10 w-full h-full flex flex-col pointer-events-none">

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm backdrop-blur-md self-start">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff9146]"></span>
<span className="text-[9px] font-bold text-[#ff9146] uppercase tracking-widest">
                          Verified Review
                        </span>
</div>
<div className="flex flex-col gap-6 mt-auto">

<div className="flex gap-1 text-[#ff9146]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="text-sm sm:text-base md:text-3xl font-medium text-gray-900 dark:text-white leading-tight min-w-[250px] line-clamp-6 md:line-clamp-none">
                          "Amazing experience working with this team. Always
                          deliver me high quality content in a speedy amount of
                          time. Highly recommend 👍🏼"
                        </h3>
<div className="flex items-center gap-4 mt-2">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                            J
                          </div>
<div>
<p className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                              John Loffredo
                            </p>
<p className="text-[10px] text-[#ff9146] uppercase tracking-wider font-bold whitespace-nowrap">
                              Google Review
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 relative flex flex-col items-center justify-center min-h-[80vh] z-20" id="discovery-call">
<div className="max-w-6xl w-full bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-12">

<div className="w-full md:w-1/2 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 w-max">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    PHASE 00 // INITIATION
                  </div>
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
                    Ready to engineer your
                    <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9146] to-[#46d4c6]">
                      growth ecosystem?
                    </span>
</h2>
<p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
                    Book a 30-minute discovery session with our architects.
                    We'll analyze your current workflows and map out a custom AI
                    integration strategy live on the call.
                  </p>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#ff9146] shadow-sm shrink-0">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                          Video Consultation
                        </h4>
<p className="text-xs text-gray-500 dark:text-gray-400">
                          1-on-1 dedicated strategy session
                        </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#46d4c6] shadow-sm shrink-0">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                          Live Blueprinting
                        </h4>
<p className="text-xs text-gray-500 dark:text-gray-400">
                          Real-time architecture mapping
                        </p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 relative bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden min-h-[450px]">

<div className="absolute inset-0 p-8 flex flex-col transition-opacity duration-300" id="booking-step-1">
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                          First Name
                        </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:border-[#ff9146] focus:ring-1 focus:ring-[#ff9146] transition-colors" id="bf-fname" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                          Last Name
                        </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:border-[#ff9146] focus:ring-1 focus:ring-[#ff9146] transition-colors" id="bf-lname" placeholder="Smith" type="text"/>
</div>
</div>
<div className="mb-4">
<label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        Work Email
                      </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:border-[#ff9146] focus:ring-1 focus:ring-[#ff9146] transition-colors" id="bf-email" placeholder="jane@company.com" type="email"/>
</div>
<div className="mb-4">
<label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        Company Website
                      </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:border-[#ff9146] focus:ring-1 focus:ring-[#ff9146] transition-colors" id="bf-website" placeholder="https://" type="text"/>
</div>
<div className="mb-6">
<label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        Primary Goal
                      </label>
<select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:border-[#ff9146] focus:ring-1 focus:ring-[#ff9146] transition-colors appearance-none text-gray-600 dark:text-gray-300" id="bf-goal">
<option value="">Select an area of focus...</option>
<option value="Website Makeover">
                          Website Makeover
                        </option>
<option value="AI Automation">
                          AI Automation (AMP Center)
                        </option>
<option value="3D/Graphics">
                          3D Graphics &amp; Animation
                        </option>
<option value="App Development">App Development</option>
<option value="Other">Other</option>
</select>
</div>
<button className="w-full mt-auto group inline-flex items-center justify-center gap-2 transition-all duration-500 text-sm font-medium text-gray-900 dark:text-white rounded-xl py-3 relative overflow-hidden isolate dramatic-hover bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-sm" onclick="goToStep2()">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ff9146_30%,#ffffff_50%,#46d4c6_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_1.5s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute inset-[2px] rounded-xl bg-white/90 dark:bg-gray-800/90 transition-colors duration-500 pointer-events-none z-0"></div>
<span className="relative z-10 flex items-center gap-2">
                        Secure Your Session
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<p className="text-[9px] text-gray-400 dark:text-gray-500 text-center mt-4">
                      By booking, you agree to our terms of service and privacy
                      policy. No commitment required prior to discovery.
                    </p>
</div>

<div className="absolute inset-0 p-8 flex flex-col hidden opacity-0 transition-opacity duration-300 bg-white dark:bg-gray-800/50" id="booking-step-2">
<button className="absolute top-4 left-4 text-gray-400 hover:text-[#ff9146] transition-colors" onclick="goToStep1()">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="flex items-center justify-between mb-6 px-4 mt-2">
<button className="text-gray-400 hover:text-[#ff9146]" onclick="changeMonth(-1)">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<h3 className="font-semibold text-gray-900 dark:text-white text-sm" id="calendar-month-year"></h3>
<button className="text-gray-400 hover:text-[#ff9146]" onclick="changeMonth(1)">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-7 gap-1 text-center mb-2 text-[10px] font-bold text-gray-400 uppercase">
<div>Su</div>
<div>Mo</div>
<div>Tu</div>
<div>We</div>
<div>Th</div>
<div>Fr</div>
<div>Sa</div>
</div>
<div className="grid grid-cols-7 gap-1 mb-6" id="calendar-days"></div>
<div className="hidden mt-auto" id="time-slots-container">
<div className="grid grid-cols-3 gap-3 mb-4" id="time-slots"></div>
<button className="w-full group inline-flex items-center justify-center gap-2 transition-all duration-500 text-sm font-medium text-gray-900 dark:text-white rounded-xl py-3 relative overflow-hidden isolate dramatic-hover bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none" disabled="" id="confirm-booking-btn" onclick="submitBooking()">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ff9146_30%,#ffffff_50%,#46d4c6_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_1.5s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute inset-[2px] rounded-xl bg-white/90 dark:bg-gray-800/90 transition-colors duration-500 pointer-events-none z-0"></div>
<span className="relative z-10 flex items-center gap-2">
                          Confirm Booking
                        </span>
</button>
</div>
</div>

<div className="absolute inset-0 p-8 flex flex-col items-center justify-center hidden opacity-0 transition-opacity duration-300 text-center bg-white dark:bg-gray-800/50" id="booking-step-3">
<div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                      Session Secured
                    </h3>
<p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                      A confirmation and meeting link has been sent to
                      <br/>
<span className="font-semibold text-gray-900 dark:text-white mt-1 block" id="success-email"></span>
</p>
<button className="group inline-flex items-center justify-center gap-2 transition-all duration-500 text-sm font-medium text-gray-900 dark:text-white rounded-full px-6 py-2 relative overflow-hidden isolate dramatic-hover bg-white/60 dark:bg-gray-800/60 backdrop-blur-md" onclick="window.location.reload()">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ff9146_30%,#ffffff_50%,#46d4c6_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_1.5s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute inset-[2px] rounded-full bg-white/90 dark:bg-gray-800/90 transition-colors duration-500 pointer-events-none z-0"></div>
<span className="relative z-10 flex items-center gap-2">
                        Done
                      </span>
</button>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 relative flex flex-col items-center justify-center z-20 overflow-hidden" id="vision-showcase">
<div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center">

<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white mb-20 tracking-tight max-w-4xl">
                  Let's bring your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9146] to-[#46d4c6]">
                    vision
                  </span>
                  to life...
                </h2>

<div className="relative w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center mb-24 mt-8 pointer-events-none transform scale-[0.65] sm:scale-100 origin-center">

<div className="absolute left-1/2 top-1/2 w-[32%] sm:w-[26%] md:w-[20%] lg:w-[16%] aspect-[3/4] z-10 transition-transform duration-500 hover:z-50 pointer-events-auto" style={{transform: 'translate(calc(-50% - 137.5%), calc(-50% + 60px)) rotate(-12deg)'}}>
<div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.15] border border-white/10 dark:border-white/20 bg-gray-900 relative group cursor-pointer">
<video autoplay="" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500" loop="" muted="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_39ZnWEu2LF6G1tfyeRoRancKQrj/hf_20260420_122821_6e9a8b6e-417f-4bdd-957e-6106c3abf07d.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-20 transition-opacity duration-500"></div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 w-[32%] sm:w-[26%] md:w-[20%] lg:w-[16%] aspect-[3/4] z-20 transition-transform duration-500 hover:z-50 pointer-events-auto" style={{transform: 'translate(calc(-50% - 82.5%), calc(-50% + 20px)) rotate(-6deg)'}}>
<div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.15] border border-white/10 dark:border-white/20 bg-gray-900 relative group cursor-pointer">
<video autoplay="" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500" loop="" muted="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_39ZnWEu2LF6G1tfyeRoRancKQrj/hf_20260420_123711_2d814194-f8f9-41e7-a9c3-58f87e333ce5.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-20 transition-opacity duration-500"></div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 w-[32%] sm:w-[26%] md:w-[20%] lg:w-[16%] aspect-[3/4] z-30 transition-transform duration-500 hover:z-50 pointer-events-auto" style={{transform: 'translate(calc(-50% - 27.5%), calc(-50% + 0px)) rotate(-2deg)'}}>
<div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.15] border border-white/10 dark:border-white/20 bg-gray-900 relative group cursor-pointer">
<video autoplay="" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500" loop="" muted="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_39ZnWEu2LF6G1tfyeRoRancKQrj/hf_20260224_011448_d44d1e61-f945-41d8-80ca-db30f7ea02b5.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-20 transition-opacity duration-500"></div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 w-[32%] sm:w-[26%] md:w-[20%] lg:w-[16%] aspect-[3/4] z-30 transition-transform duration-500 hover:z-50 pointer-events-auto" style={{transform: 'translate(calc(-50% + 27.5%), calc(-50% + 0px)) rotate(2deg)'}}>
<div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.15] border border-white/10 dark:border-white/20 bg-gray-900 relative group cursor-pointer">
<video autoplay="" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500" loop="" muted="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_39ZnWEu2LF6G1tfyeRoRancKQrj/hf_20260220_210000_7059bc37-de65-4758-88c9-7e46b8874538.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-20 transition-opacity duration-500"></div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 w-[32%] sm:w-[26%] md:w-[20%] lg:w-[16%] aspect-[3/4] z-20 transition-transform duration-500 hover:z-50 pointer-events-auto" style={{transform: 'translate(calc(-50% + 82.5%), calc(-50% + 20px)) rotate(6deg)'}}>
<div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.15] border border-white/10 dark:border-white/20 bg-gray-900 relative group cursor-pointer">
<video autoplay="" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500" loop="" muted="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_39ZnWEu2LF6G1tfyeRoRancKQrj/hf_20260408_193751_57b3fed6-3340-479f-9dc6-712553c9430e.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-20 transition-opacity duration-500"></div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 w-[32%] sm:w-[26%] md:w-[20%] lg:w-[16%] aspect-[3/4] z-10 transition-transform duration-500 hover:z-50 pointer-events-auto" style={{transform: 'translate(calc(-50% + 137.5%), calc(-50% + 60px)) rotate(12deg)'}}>
<div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.15] border border-white/10 dark:border-white/20 bg-gray-900 relative group cursor-pointer">
<video autoplay="" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500" loop="" muted="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_39ZnWEu2LF6G1tfyeRoRancKQrj/hf_20260219_022358_1ad11299-ea93-47a0-b0fe-8c33f52d8994.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-20 transition-opacity duration-500"></div>
</div>
</div>
</div>

<p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-light">
                  Book a discovery call to get the full experience of what we're
                  capable of, or message us by clicking below.
                </p>

<a className="group inline-flex items-center justify-center gap-2 transition-all duration-500 text-sm font-medium text-gray-900 dark:text-white rounded-full px-8 py-3.5 relative overflow-hidden isolate dramatic-hover bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg hover:shadow-[#ff9146]/20 w-max" href="https://m.me/101132579519882" rel="noopener noreferrer" target="_blank">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ff9146_30%,#ffffff_50%,#46d4c6_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_1.5s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute inset-[2px] rounded-full bg-white/90 dark:bg-gray-800/90 transition-colors duration-500 pointer-events-none z-0"></div>
<span className="relative z-10 flex items-center gap-2">
                    Message Us
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
</span>
</a>
</div>
</section>
</section>
</div>
</div>
</main>
<canvas className="fixed inset-0 pointer-events-none z-[10000]" height="914" id="cursor-trail" width="1440"></canvas>
<canvas className="fixed inset-0 pointer-events-none z-[10000]" height="914" id="cursor-trail" width="1440"></canvas>
<canvas className="fixed inset-0 pointer-events-none z-[10000]" height="914" id="cursor-trail" width="1440"></canvas>
<canvas className="fixed inset-0 pointer-events-none z-[10000]" height="914" id="cursor-trail" width="1440"></canvas>

<div className="fixed inset-0 z-[9999] hidden opacity-0 transition-opacity duration-500 bg-white/60 dark:bg-[#0b0f19]/80 backdrop-blur-xl flex items-center justify-center p-4" id="service-modal">
<button className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" onclick="closeModal()">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
<div className="text-center w-full max-w-4xl relative">
<h2 className="text-3xl md:text-5xl font-medium text-gray-900 dark:text-white mb-2 tracking-tight" id="modal-title">
          Title
        </h2>
<p className="text-gray-600 dark:text-gray-300 mb-20 text-sm md:text-base" id="modal-subtitle">
          Subtitle
        </p>
<div className="relative w-[280px] h-[240px] mx-auto group transform scale-[0.65] sm:scale-100 origin-center mt-12 sm:mt-0" id="modal-cards-container">


<div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-center items-center z-20 transition-transform duration-500 group-hover:scale-105">
<div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center mb-4" id="modal-center-icon"></div>
<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" id="modal-center-title">
              Center
            </h3>
<p className="text-xs text-gray-500 dark:text-gray-400" id="modal-center-desc">
              Desc
            </p>
</div>
</div>
</div>
</div>


    </>
  );
}
