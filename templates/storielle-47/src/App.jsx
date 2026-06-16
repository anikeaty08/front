import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



                  (function() {
                                    const deck = document.getElementById('deck-aura');
                                    if (!deck) return;
                                    const cards = deck.querySelectorAll('.carousel-card');
                                    const dotsContainer = document.getElementById('pagination-aura');
                                    let currentIndex = 0;

                                    // Clear any pre-existing dots before building
                                    dotsContainer.innerHTML = '';

                                    cards.forEach((_, i) => {
                                        const dot = document.createElement('div');
                                        dot.className = 'w-1.5 h-1.5 rounded-full bg-white/30 cursor-pointer transition-all duration-300 hover:bg-white';
                                        dot.onclick = () => { currentIndex = i; update(); };
                                        dotsContainer.appendChild(dot);
                                    });

                                    const dots = dotsContainer.children;

                                    cards.forEach((card, i) => {
                                        card.onclick = () => { currentIndex = i; update(); };
                                    });

                                    function update() {
                                        cards.forEach((card, i) => {
                                            const diff = i - currentIndex;
                                            const absDiff = Math.abs(diff);

                                            const x = diff * 150;
                                            const z = -absDiff * 140;
                                            const rY = diff * -12;
                                            const scale = i === currentIndex ? 1.05 : 0.85 - (absDiff * 0.05);
                                            const opacity = 1 - (absDiff * 0.25);

                                            card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rY}deg) scale(${scale})`;
                                            card.style.zIndex = 100 - absDiff;
                                            card.style.opacity = opacity;
                                            card.style.pointerEvents = absDiff > 1 ? 'none' : 'auto';

                                            const activeIndicator = card.querySelector('.active-dot');
                                            if(activeIndicator) activeIndicator.style.opacity = i === currentIndex ? '1' : '0';

                                            if (dots[i]) {
                                                dots[i].className = i === currentIndex
                                                    ? 'w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer'
                                                    : 'w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/70 transition-all duration-300 cursor-pointer';
                                            }
                                        });
                                    }

                                    const prevBtn = document.getElementById('prev-btn-aura');
                                    const nextBtn = document.getElementById('next-btn-aura');

                                    if(prevBtn) {
                                        prevBtn.onclick = () => {
                                            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                                            update();
                                        };
                                    }
                                    if(nextBtn) {
                                        nextBtn.onclick = () => {
                                            currentIndex = (currentIndex + 1) % cards.length;
                                            update();
                                        };
                                    }

                                    update();
                                })();
                


          (function () {
            const items = Array.from(document.querySelectorAll('[data-acc-item]'));

            items.forEach((card) => {
              const btn = card.querySelector('[data-acc-btn]');
              const panel = card.querySelector('[data-acc-panel]');
              const iconContainer = card.querySelector('[data-acc-icon]');
              const isOpen = card.dataset.open === 'true';

              function setOpen(open) {
                card.dataset.open = open ? 'true' : 'false';

                // Smooth panel animation
                if (panel) {
                  if (open) {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                    panel.style.opacity = '1';
                  } else {
                    panel.style.maxHeight = '0';
                    panel.style.opacity = '0';
                  }
                }

                // Animate icon - smooth transition between + and -
                if (iconContainer) {
                  const minusIcon = iconContainer.children[0]; // minus icon (horizontal line)
                  const plusIcon = iconContainer.children[1]; // plus icon (+ shape)

                  if (open) {
                    // Show minus, hide plus
                    minusIcon.style.opacity = '1';
                    minusIcon.style.transform = 'rotate(0deg)';
                    plusIcon.style.opacity = '0';
                    plusIcon.style.transform = 'rotate(90deg)';
                  } else {
                    // Show plus, hide minus
                    minusIcon.style.opacity = '0';
                    minusIcon.style.transform = 'rotate(90deg)';
                    plusIcon.style.opacity = '1';
                    plusIcon.style.transform = 'rotate(0deg)';
                  }
                }

                // Background transitions
                if (open) {
                  card.classList.remove('bg-neutral-900/40');
                  card.classList.add('bg-gradient-to-b', 'from-violet-500/15', 'via-violet-500/10', 'to-fuchsia-500/0');
                } else {
                  card.classList.add('bg-neutral-900/40');
                  card.classList.remove('bg-gradient-to-b', 'from-violet-500/15', 'via-violet-500/10', 'to-fuchsia-500/0');
                }
              }

              // Initialize state
              setOpen(isOpen);

              // Click handler
              if (btn) {
                btn.addEventListener('click', () => {
                  const willOpen = card.dataset.open !== 'true';

                  // Close all other items
                  items.forEach(otherCard => {
                    if (otherCard !== card) {
                      const otherIconContainer = otherCard.querySelector('[data-acc-icon]');
                      const otherPanel = otherCard.querySelector('[data-acc-panel]');

                      otherCard.dataset.open = 'false';

                      if (otherPanel) {
                        otherPanel.style.maxHeight = '0';
                        otherPanel.style.opacity = '0';
                      }

                      if (otherIconContainer) {
                        const otherMinusIcon = otherIconContainer.children[0];
                        const otherPlusIcon = otherIconContainer.children[1];
                        otherMinusIcon.style.opacity = '0';
                        otherMinusIcon.style.transform = 'rotate(90deg)';
                        otherPlusIcon.style.opacity = '1';
                        otherPlusIcon.style.transform = 'rotate(0deg)';
                      }

                      otherCard.classList.add('bg-neutral-900/40');
                      otherCard.classList.remove('bg-gradient-to-b', 'from-violet-500/15', 'via-violet-500/10', 'to-fuchsia-500/0');
                    }
                  });

                  // Toggle current item
                  setOpen(willOpen);
                });
              }
            });
          })();
        


      const dot = document.getElementById('cursor-dot');
      const outline = document.getElementById('cursor-outline');

      window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Direct follow for the dot
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // Smooth trail for the outline
        outline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      });

      // Function to attach listeners (useful if Aura adds items dynamically)
      const attachCursorEvents = () => {
        const links = document.querySelectorAll('a, button, .hover-target, [role="button"]');
        links.forEach(link => {
          link.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
          link.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
        });
      };

      attachCursorEvents();

      // Optional: Handle clicks visually
      window.addEventListener('mousedown', () => outline.style.transform = 'translate(-50%, -50%) scale(0.7)');
      window.addEventListener('mouseup', () => outline.style.transform = 'translate(-50%, -50%) scale(1)');
    


      (function(){if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;if(!window.gsap||!window.ScrollTrigger)return;gsap.registerPlugin(ScrollTrigger);const q=(s,r=document)=>Array.from(r.querySelectorAll(s));document.documentElement.style.scrollBehavior='smooth';q('.animate-fade-up').forEach((el,i)=>{el.classList.add('spring-in');gsap.set(el,{opacity:0,y:28,scale:.965,transformOrigin:'50% 50%'});ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>gsap.to(el,{opacity:1,y:0,scale:1,duration:.78,ease:'elastic.out(0.82,0.58)',delay:Math.min(i*0.03,.18),clearProps:'transform,opacity'})})});q('.glass-panel, [data-aura-edit-target="aet-148"], [data-aura-edit-target="aet-182"], [data-aura-edit-target="aet-186"], [data-aura-edit-target="aet-190"], [data-aura-edit-target="aet-194"], [data-aura-edit-target="aet-198"]').forEach((el,i)=>{gsap.set(el,{transformPerspective:1000,transformOrigin:'50% 50%'});ScrollTrigger.create({trigger:el,start:'top 88%',once:true,onEnter:()=>gsap.fromTo(el,{opacity:0,y:34,scale:.94,rotateX:6},{opacity:1,y:0,scale:1,rotateX:0,duration:.82,delay:(i%6)*0.04,ease:'elastic.out(0.78,0.55)',clearProps:'transform,opacity'})})});q('.motion-cta, button:not(#prev-btn-aura):not(#next-btn-aura)').forEach((el)=>{const target=el.matches('button')?el:(el.querySelector('button')||el);if(!target)return;target.addEventListener('mouseenter',()=>gsap.to(target,{scaleX:1.03,scaleY:.97,y:-2,duration:.22,ease:'back.out(2.2)',overwrite:true}));target.addEventListener('mouseleave',()=>gsap.to(target,{scaleX:1,scaleY:1,y:0,duration:.2,ease:'power2.out',overwrite:true}));target.addEventListener('mousedown',()=>gsap.to(target,{scaleX:.97,scaleY:1.05,y:1,duration:.08,ease:'power2.out',overwrite:true}));target.addEventListener('mouseup',()=>gsap.to(target,{scaleX:1.03,scaleY:.97,y:-2,duration:.18,ease:'back.out(2.4)',overwrite:true}));target.addEventListener('touchstart',()=>gsap.to(target,{scaleX:.97,scaleY:1.05,duration:.08,ease:'power2.out',overwrite:true}),{passive:true});target.addEventListener('touchend',()=>gsap.to(target,{scaleX:1,scaleY:1,duration:.2,ease:'back.out(2)',overwrite:true}),{passive:true})});q('.nav-spy-link').forEach((link)=>{link.addEventListener('mouseenter',()=>gsap.to(link,{y:-2,scale:1.04,duration:.18,ease:'back.out(2)',overwrite:true}));link.addEventListener('mouseleave',()=>gsap.to(link,{y:0,scale:1,duration:.16,ease:'power2.out',overwrite:true}))});const sections=[...q('.motion-section[id]')];const navLinks=q('.nav-spy-link');const activate=(id)=>{navLinks.forEach((a)=>a.classList.toggle('is-active',a.getAttribute('href')==='#'+id))};sections.forEach((section)=>{ScrollTrigger.create({trigger:section,start:'top 30%',end:'bottom 30%',onEnter:()=>activate(section.id),onEnterBack:()=>activate(section.id)})});navLinks.forEach((link)=>{link.addEventListener('click',(e)=>{const id=(link.getAttribute('href')||'').replace('#','');const target=id&&document.getElementById(id);if(!target)return;e.preventDefault();activate(id);window.scrollTo({top:target.getBoundingClientRect().top+window.pageYOffset-88,behavior:'smooth'});gsap.fromTo(link,{scale:.96,y:1},{scale:1.04,y:-1,duration:.18,ease:'back.out(2.5)',yoyo:true,repeat:1,overwrite:true})})});const nav=document.querySelector('[data-aura-edit-target="aet-9"]');if(nav){ScrollTrigger.create({start:10,end:'max',onUpdate:(self)=>gsap.to(nav,{y:0,scale:self.direction===1?.985:1,duration:.18,ease:'power2.out',overwrite:true})})}})();
    


      (function(){const modal=document.getElementById('auth-modal');const panel=document.getElementById('auth-modal-panel');const backdrop=document.getElementById('auth-modal-backdrop');const closeBtn=document.getElementById('auth-modal-close');const signupTab=document.getElementById('auth-tab-signup');const signinTab=document.getElementById('auth-tab-signin');const switchBtn=document.getElementById('auth-switch-mode');const title=document.getElementById('auth-modal-title');const submitLabel=document.getElementById('auth-submit-label');const switchCopy=document.getElementById('auth-switch-copy');const emailLabel=document.getElementById('auth-email-label');const wattpadLabel=document.getElementById('auth-wattpad-label');const passwordHelp=document.getElementById('auth-password-help');const nameGroup=document.getElementById('auth-name-group');const formWrapper=document.getElementById('auth-form-wrapper');let mode='signup';if(!modal||!panel||!backdrop)return;function renderMode(){const isSignup=mode==='signup';title.textContent=isSignup?'Create your account':'Welcome back';submitLabel.textContent=isSignup?'Create account':'Sign in';switchCopy.textContent=isSignup?'Already have an account?':'New to Storielle?';switchBtn.textContent=isSignup?'Sign in':'Sign up';emailLabel.textContent=isSignup?'Continue with email':'Sign in with email';wattpadLabel.textContent=isSignup?'Continue with Wattpad':'Sign in with Wattpad';passwordHelp.textContent=isSignup?'Use at least 8 characters.':'Use the password linked to your account.';if(nameGroup) nameGroup.style.display=isSignup?'grid':'none';signupTab.className=isSignup?'auth-tab-btn rounded-full px-4 py-2.5 text-sm font-medium font-geist tracking-tight text-black bg-white transition-all':'auth-tab-btn rounded-full px-4 py-2.5 text-sm font-medium font-geist tracking-tight text-[#888888] hover:text-white transition-all';signinTab.className=!isSignup?'auth-tab-btn rounded-full px-4 py-2.5 text-sm font-medium font-geist tracking-tight text-black bg-white transition-all':'auth-tab-btn rounded-full px-4 py-2.5 text-sm font-medium font-geist tracking-tight text-[#888888] hover:text-white transition-all';}function openModal(nextMode){if(nextMode)mode=nextMode;renderMode();modal.classList.remove('hidden');modal.classList.add('flex');document.body.style.overflow='hidden';requestAnimationFrame(()=>{backdrop.classList.remove('opacity-0');panel.classList.remove('opacity-0','scale-95','translate-y-4');panel.classList.add('opacity-100','scale-100','translate-y-0');});}function closeModal(){backdrop.classList.add('opacity-0');panel.classList.remove('opacity-100','scale-100','translate-y-0');panel.classList.add('opacity-0','scale-95','translate-y-4');document.body.style.overflow='';setTimeout(()=>{modal.classList.add('hidden');modal.classList.remove('flex');},280);}if(formWrapper){formWrapper.addEventListener('submit',(e)=>{e.preventDefault();});}if(closeBtn)closeBtn.addEventListener('click',closeModal);if(backdrop)backdrop.addEventListener('click',closeModal);if(signupTab)signupTab.addEventListener('click',()=>{mode='signup';renderMode();});if(signinTab)signinTab.addEventListener('click',()=>{mode='signin';renderMode();});if(switchBtn)switchBtn.addEventListener('click',()=>{mode=mode==='signup'?'signin':'signup';renderMode();});window.addEventListener('keydown',(e)=>{if(e.key==='Escape'&&!modal.classList.contains('hidden'))closeModal();});
document.body.addEventListener('click',function(e){
  var t=e.target.closest('[data-open-auth]');
  if(t){e.preventDefault();openModal('signup');}
});
renderMode();})();
    


(function(){
  var modal=document.getElementById('teams-modal');
  var panel=document.getElementById('teams-modal-panel');
  var backdrop=document.getElementById('teams-modal-backdrop');
  var closeBtn=document.getElementById('teams-modal-close');
  var form=document.getElementById('teams-form');
  var success=document.getElementById('teams-success');
  var submitLabel=document.getElementById('teams-submit-label');
  if(!modal||!panel||!backdrop)return;

  // Size selector pill logic
  document.querySelectorAll('.teams-size-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.teams-size-btn').forEach(function(b){
        b.classList.remove('bg-purple-500/20','border-purple-400/50','text-white');
        b.classList.add('bg-white/5','border-white/10','text-[#888888]');
      });
      btn.classList.remove('bg-white/5','border-white/10','text-[#888888]');
      btn.classList.add('bg-purple-500/20','border-purple-400/50','text-white');
    });
  });

  function openTeamsModal(){
    modal.classList.remove('hidden');modal.classList.add('flex');
    document.body.style.overflow='hidden';
    requestAnimationFrame(function(){
      backdrop.classList.remove('opacity-0');
      panel.classList.remove('opacity-0','scale-95','translate-y-4');
      panel.classList.add('opacity-100','scale-100','translate-y-0');
    });
  }
  function closeTeamsModal(){
    backdrop.classList.add('opacity-0');
    panel.classList.remove('opacity-100','scale-100','translate-y-0');
    panel.classList.add('opacity-0','scale-95','translate-y-4');
    document.body.style.overflow='';
    setTimeout(function(){
      modal.classList.add('hidden');modal.classList.remove('flex');
    },280);
  }

  // Open on "Contact for Teams" buttons
  document.body.addEventListener('click',function(e){
    if(e.target.closest('[data-contact-teams]')){e.preventDefault();openTeamsModal();}
  });

  if(closeBtn)closeBtn.addEventListener('click',closeTeamsModal);
  backdrop.addEventListener('click',closeTeamsModal);
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&!modal.classList.contains('hidden'))closeTeamsModal();
  });

  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      submitLabel.textContent='Sending…';
      setTimeout(function(){
        form.style.display='none';
        success.classList.remove('hidden');
        success.classList.add('flex');
      },900);
    });
  }
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[-1]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '4rem 4rem', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>

<nav className="lg:px-8 flex animate-fade-up w-full h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between spring-in relative z-50" style={{transformOrigin: '50% 50%'}}>
<div className="flex text-xl font-medium text-white tracking-tight font-jakarta max-w-7xl space-x-20 items-center justify-end">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path className="" d="M24 8 L36 16 L36 32 L24 40 L12 32 L12 16 Z" fill="currentColor"></path>
</svg>
        Storielle
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="nav-spy-link text-zinc-400 hover:text-white transition-colors" href="#howitworks">
            How It Works
          </a>
<a className="nav-spy-link text-zinc-400 hover:text-white transition-colors" href="#testimonials">
            Testimonials
          </a>
<a className="nav-spy-link text-zinc-400 hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
</nav>
</div>
<a className="btn-wrapper motion-cta" data-open-auth="true" href="#">
<button className="inline-flex text-[12px] transition-all hover:brightness-110 z-10 font-light text-white tracking-tight font-geist h-9 rounded-full pr-6 pl-6 relative items-center justify-center" type="submit">

<span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-orange-400/20 via-amber-300/30 to-orange-400/20 shadow-[0_0_22px_rgba(248,181,129,0.55)] ring-1 ring-amber-300/60"></span>

<span className="absolute inset-[3px] rounded-full pointer-events-none bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]"></span>

<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-full blur-xl pointer-events-none bg-amber-300/35"></span>

<span className="font-medium font-geist z-10 relative">
            Start Your Blueprint
          </span>
</button>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<div className="line top horizontal"></div>
<div className="line bottom horizontal"></div>
<div className="line left vertical"></div>
<div className="line right vertical"></div>
</a>
</nav>
<main className="flex-grow bg-neutral-950">

<section className="lg:px-8 flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-24 pl-6 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40 items-center motion-section"><div className="absolute inset-0" data-container-bg="true"><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>
<div className="flex-1 md:text-left z-10 text-center">
<div className="inline-flex gap-2 animate-fade-up uppercase text-xs font-medium text-[#888888] tracking-widest font-geist bg-[#111111] border-[#222222] border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center spring-in" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', transformOrigin: '50% 50%'}}>
      Wattpad Integration Live
      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] animate-fade-up delay-100 text-4xl font-medium text-white tracking-tight font-jakarta mb-6 spring-in" style={{transformOrigin: '50% 50%'}}>
      Master the architecture of your next bestseller
    </h1>
<p className="md:text-xl md:mx-0 leading-relaxed animate-fade-up delay-200 text-base text-[#888888] font-jakarta max-w-xl mr-auto mb-10 ml-auto spring-in" style={{transformOrigin: '50% 50%'}}>
      The ultimate narrative engine for writers crafting sophisticated,
      15+ fiction. Build complex worlds, weave intricate plots, and
      publish directly to our community or export seamlessly to Wattpad.
    </p>
<div className="flex flex-col sm:flex-row gap-6 md:justify-start animate-fade-up delay-300 gap-x-6 gap-y-6 items-center justify-center spring-in" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', transformOrigin: '50% 50%'}}>
<a className="btn-wrapper motion-cta" data-open-auth="true" href="#">
<button className="inline-flex text-[12px] transition-all hover:brightness-110 z-10 font-light text-white tracking-tight font-geist h-9 rounded-full pr-6 pl-6 relative items-center justify-center" type="submit">

<span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-orange-400/20 via-amber-300/30 to-orange-400/20 shadow-[0_0_22px_rgba(248,181,129,0.55)] ring-1 ring-amber-300/60"></span>

<span className="absolute inset-[3px] rounded-full pointer-events-none bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]"></span>

<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-full blur-xl pointer-events-none bg-amber-300/35"></span>

<span className="font-medium font-geist z-10 relative">
                  Start Your Blueprint
                </span>
</button>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<div className="line top horizontal"></div>
<div className="line bottom horizontal"></div>
<div className="line left vertical"></div>
<div className="line right vertical"></div>
</a>
<span className="flex items-center gap-2 text-sm text-[#555555] font-geist">
              See it in action
            </span>
</div>
</div>

<div className="block md:hidden w-full mt-12 flex justify-center spring-in animate-fade-up delay-200" style={{transformOrigin: '50% 50%'}}>
<div className="relative w-52 aspect-[2/3] overflow-hidden rounded-2xl border border-[#444444] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="z-10 bg-gradient-to-t from-[#080808] via-black/20 to-transparent absolute inset-0"></div>
<img alt="Echoes of Neon cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c43265c1-3d68-44f0-b248-d7969e9fed75_800w.webp"/>
<div className="text-[0.6rem] uppercase font-semibold text-amber-600 tracking-wider font-geist bg-slate-200 z-20 rounded-md py-1 px-2 absolute top-3 right-3">
        Wattpad Hit
      </div>
<div className="absolute bottom-6 left-4 right-4 z-20">
<p className="text-[10px] tracking-widest text-white/70 mb-1.5 uppercase font-geist">
          Sci-Fi Romance
        </p>
<h3 className="text-lg tracking-tight text-white leading-tight mb-1 font-jakarta font-medium">
          Echoes of
          <br/>
                Neon
        </h3>
<p className="text-[10px] text-white/50 font-geist">
          By A. K. Writer
        </p>
</div>
</div>
</div>

<div className="flex-1 hidden md:block animate-fade-up delay-200 w-full h-[460px] lg:h-[500px] max-w-lg relative perspective-1000 spring-in" style={{transformOrigin: '50% 50%'}}>

<div className="aspect-[2/3] overflow-hidden book-float-2 opacity-40 w-64 z-10 border-[#333333] border rounded-2xl absolute top-10 right-4 shadow-2xl" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<img alt="Cover background" className="w-full h-full object-cover grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d3f4658-ecfd-47b7-8318-ab5e0f7dba77_800w.webp"/>
<div className="z-10 bg-gradient-to-t from-black/10 via-black/0 to-black/10 absolute top-0 right-0 bottom-0 left-0 translate-x-1" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
</div>
</div>

<div className="aspect-[2/3] overflow-hidden book-float-1 opacity-60 w-64 border-[#333333] border rounded-2xl absolute top-20 left-0 shadow-2xl" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="bg-gradient-to-t from-black via-black/40 to-transparent z-10 absolute top-0 right-0 bottom-0 left-0">
</div>
<img alt="Cover background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95719f33-05ac-4a57-b882-0015d0b8af8b_800w.webp"/>
<div className="absolute bottom-6 left-4 right-4 z-20">
<p className="text-xs tracking-widest text-[#aaaaaa] mb-1 font-geist">
          THRILLER
        </p>
<h3 className="text-xl tracking-tight text-white leading-tight font-jakarta font-medium">
          The Velvet
          <br/>
                Shadow
        </h3>
</div>
</div>

<div className="-translate-x-1/2 aspect-[2/3] overflow-hidden z-20 transition-transform duration-500 hover:scale-105 w-72 border-[#444444] border rounded-2xl absolute top-0 left-1/2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="z-10 bg-gradient-to-t from-[#080808] via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<img alt="Cover background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c43265c1-3d68-44f0-b248-d7969e9fed75_800w.webp"/>
<div className="text-[0.65rem] uppercase font-semibold text-amber-600 tracking-wider font-geist bg-slate-200 opacity-100 z-20 rounded-md pt-1 pr-2 pb-1 pl-2 absolute top-4 right-4">
        Wattpad Hit
      </div>
<div className="absolute bottom-8 left-6 right-6 z-20">
<p className="text-xs tracking-widest text-white/70 mb-2 uppercase font-geist">
          Sci-Fi Romance
        </p>
<h3 className="text-2xl tracking-tight text-white leading-tight mb-2 font-jakarta font-medium">
          Echoes of
          <br/>
                Neon
        </h3>
<p className="text-xs text-white/50 font-geist">By A. K. Writer</p>
</div>
</div>
</div>

</section>

<section className="lg:px-8 max-w-7xl mr-auto mb-12 lg:mb-32 ml-auto pr-6 pl-6 motion-section" id="features">
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
<div className="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col" style={{transformOrigin: '50% 50%'}}>
<h2 className="text-2xl sm:text-3xl tracking-tight text-white mb-1 sm:mb-2 font-jakarta font-medium">
              2.5M
            </h2>
<p className="text-xs sm:text-sm text-[#888888] font-geist">
              Chapters published to Wattpad.
            </p>
</div>
<div className="glass-panel flex flex-col rounded-2xl p-4 sm:p-6 md:p-8" style={{transformOrigin: '50% 50%'}}>
<h2 className="text-2xl sm:text-3xl text-white tracking-tight mb-1 sm:mb-2 font-jakarta font-medium">
              120k+
            </h2>
<p className="text-xs sm:text-sm text-[#888888] font-geist">
              Active writers crafting daily.
            </p>
</div>
<div className="glass-panel flex flex-col text-black bg-[#ffffff] bg-[url(https://images.unsplash.com/photo-1739349926071-a4ef4ad781f7?w=800&amp;q=80)] bg-cover bg-center border-[#ffffff] rounded-2xl p-4 sm:p-6 md:p-8" style={{transformOrigin: '50% 50%'}}>
<span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1 opacity-60 font-geist">
              Success
            </span>
<h2 className="text-2xl sm:text-3xl tracking-tight mb-1 sm:mb-2 font-jakarta font-medium">
              84%
            </h2>
<p className="text-xs sm:text-sm opacity-80 font-geist">
              Higher reader retention.
            </p>
</div>
<div className="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col" style={{transformOrigin: '50% 50%'}}>
<h2 className="text-2xl sm:text-3xl tracking-tight text-white mb-1 sm:mb-2 font-jakarta font-medium">
              15+
            </h2>
<p className="text-xs sm:text-sm text-[#888888] font-geist">
              Pro-grade genre frameworks.
            </p>
</div>
</div>
</section>

<section className="border-y motion-section bg-neutral-950 border-[#222222] pt-24 pb-24 relative" id="howitworks">
<div className="lg:px-8 bg-neutral-950 max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<span className="text-xs font-medium tracking-widest text-[#888888] uppercase mb-4 block font-geist">
              The Core Workflow
            </span>
<h2 className="md:text-5xl text-3xl text-white tracking-tight mb-4 font-jakarta font-medium">
              The Narrative Engine
            </h2>
<p className="text-lg text-[#888888] max-w-2xl mx-auto font-geist">
              Select high-level parameters to generate structural foundations
              for your next bestseller.
            </p>
</div>

<div className="glass-panel bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c178e98-917f-4834-a017-ed8ec33c8052_1600w.jpg)] bg-cover rounded-2xl pt-1 pr-1 pb-1 pl-1 relative shadow-2xl" style={{transformOrigin: '50% 50%'}}>

<div className="flex bg-[#111111] h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e3563d3-a9b9-47f0-8815-8e4300c596ef_1600w.jpg)] bg-cover bg-center border-[#222222] rounded-t-xl border-b pr-4 pl-4 gap-x-2 gap-y-2 items-center">
<div className="w-3 h-3 rounded-full bg-[#333333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333333]"></div>
<div className="ml-4 text-xs font-medium text-[#555555] font-geist">
                app.storielle.com/engine
              </div>
</div>
<div className="md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 bg-center bg-[#0a0a0a] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63b1df76-02ad-47fd-b343-956b1e4d3578_1600w.webp)] bg-cover rounded-b-xl pt-6 pr-6 pb-6 pl-6 gap-x-10 gap-y-10">

<div className="lg:col-span-4 space-y-6">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-white" icon="solar:map-linear"></iconify-icon>
<h3 className="font-medium text-lg text-white tracking-tight font-geist">
                    Environments
                  </h3>
</div>
<div className="space-y-2">
<label className="flex items-center gap-4 p-4 border border-[#222222] rounded-xl cursor-pointer hover:border-[#444444] hover:bg-[#111111] transition-all group">
<input checked="" className="tech-checkbox" type="checkbox"/>
<span className="text-sm font-medium text-[#888888] group-hover:text-white transition-colors font-geist">
                      Dystopian Megacity
                    </span>
</label>
<label className="flex items-center gap-4 p-4 border border-[#222222] rounded-xl cursor-pointer hover:border-[#444444] hover:bg-[#111111] transition-all group">
<input className="tech-checkbox" type="checkbox"/>
<span className="text-sm font-medium text-[#888888] group-hover:text-white transition-colors font-geist">
                      Isolated Space Station
                    </span>
</label>
<label className="flex items-center gap-4 p-4 border border-[#222222] rounded-xl cursor-pointer hover:border-[#444444] hover:bg-[#111111] transition-all group">
<input className="tech-checkbox" type="checkbox"/>
<span className="text-sm font-medium text-[#888888] group-hover:text-white transition-colors font-geist">
                      Neo-Victorian London
                    </span>
</label>
<label className="flex items-center gap-4 p-4 border border-[#222222] rounded-xl cursor-pointer hover:border-[#444444] hover:bg-[#111111] transition-all group">
<input checked="" className="tech-checkbox" type="checkbox"/>
<span className="text-sm font-medium text-[#888888] group-hover:text-white transition-colors font-geist">
                      Underground Syndicate
                    </span>
</label>
</div>
</div>

<div className="lg:col-span-5 space-y-6">
<div className="flex mb-4 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-users text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle className="" cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<h3 className="text-lg font-medium text-white tracking-tight font-geist">
                    Protagonists &amp; Roles
                  </h3>
</div>
<div className="flex flex-col [perspective:2000px] overflow-hidden bg-[#050505]/50 w-full h-[480px] border-[#222222] border rounded-2xl relative items-center justify-center">

<div className="absolute w-full flex justify-between px-6 z-50 top-1/2 -translate-y-1/2 pointer-events-none">
<button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md pointer-events-auto hover:bg-white hover:text-black transition-colors z-50 shadow-lg" id="prev-btn-aura">
<svg className="lucide lucide-arrow-left w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button className="flex pointer-events-auto hover:bg-white hover:text-black transition-colors z-50 text-white bg-white/5 w-10 h-10 border-white/10 border rounded-full shadow-lg backdrop-blur-md items-center justify-center" id="next-btn-aura">
<svg className="lucide lucide-arrow-right w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="relative w-[220px] h-[340px] sm:w-[250px] sm:h-[380px] [transform-style:preserve-3d]" id="deck-aura">

<div className="carousel-card absolute inset-0 cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{zIndex: '100', pointerEvents: 'auto', transform: 'translateX(0px) translateZ(0px) rotateY(0deg) scale(1.05)', opacity: '1'}}>
<div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-400 group-hover:-translate-y-8 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-[#333] group-hover:border-[#555]">
<img className="transition-all duration-500 group-hover:brightness-90 group-hover:scale-110 w-full h-full object-cover brightness-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47f49b0d-1be8-4430-a2fc-b609967ba7fc_800w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
<h3 className="text-[1.1rem] font-medium text-white tracking-tight mb-1.5 font-geist">
                            The Disgraced Heir
                          </h3>
<p className="text-[12px] text-white/70 leading-relaxed font-geist">
                            Once at the top, now cast out. A journey of revenge
                            and redemption.
                          </p>
</div>
<div className="active-dot absolute top-5 right-5 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff] opacity-0 transition-opacity duration-300" style={{opacity: '1'}}></div>
</div>
</div>

<div className="carousel-card absolute inset-0 cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{zIndex: '99', pointerEvents: 'auto', transform: 'translateX(150px) translateZ(-140px) rotateY(-12deg) scale(0.8)', opacity: '0.75'}}>
<div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-400 group-hover:-translate-y-8 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-[#333] group-hover:border-[#555]">
<img className="transition-all duration-500 group-hover:brightness-90 group-hover:scale-110 w-full h-full object-cover brightness-70" src="https://images.unsplash.com/photo-1618517647368-c62188f098f3?w=800&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
<h3 className="text-[1.1rem] font-medium text-white tracking-tight mb-1.5 font-geist">
                            The Invisible Fixer
                          </h3>
<p className="text-[12px] text-white/70 leading-relaxed font-geist">
                            Cleans up messes for the powerful. Knows every
                            secret, holds no status.
                          </p>
</div>
<div className="active-dot absolute top-5 right-5 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff] opacity-0 transition-opacity duration-300" style={{opacity: '0'}}></div>
</div>
</div>

<div className="carousel-card absolute inset-0 cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{zIndex: '98', pointerEvents: 'none', transform: 'translateX(300px) translateZ(-280px) rotateY(-24deg) scale(0.75)', opacity: '0.5'}}>
<div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-400 group-hover:-translate-y-8 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-[#333] group-hover:border-[#555]">
<img className="w-full h-full object-cover transition-all duration-500 brightness-70 group-hover:brightness-90 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aeafff42-340b-42c5-b166-1a343154c5a1_320w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
<h3 className="text-[1.1rem] font-medium text-white tracking-tight mb-1.5 font-geist">
                            The Reluctant Weapon
                          </h3>
<p className="text-[12px] text-white/70 leading-relaxed font-geist">
                            A dangerous gift they never wanted. Forced back into
                            the fight.
                          </p>
</div>
<div className="active-dot absolute top-5 right-5 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff] opacity-0 transition-opacity duration-300" style={{opacity: '0'}}></div>
</div>
</div>

<div className="carousel-card absolute inset-0 cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{zIndex: '97', pointerEvents: 'none', transform: 'translateX(450px) translateZ(-420px) rotateY(-36deg) scale(0.7)', opacity: '0.25'}}>
<div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-400 group-hover:-translate-y-8 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-[#333] group-hover:border-[#555]">
<img className="w-full h-full object-cover transition-all duration-500 brightness-70 group-hover:brightness-90 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09232ba-6c22-4946-ad12-f2803ab67e32_320w.jpg"/>
<div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
<h3 className="text-[1.1rem] font-medium text-white tracking-tight mb-1.5 font-geist">
                            The Moral Outsider
                          </h3>
<p className="text-[12px] text-white/70 leading-relaxed font-geist">
                            A strict code of ethics in a world defined by total
                            corruption.
                          </p>
</div>
<div className="active-dot absolute top-5 right-5 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff] opacity-0 transition-opacity duration-300" style={{opacity: '0'}}></div>
</div>
</div>

<div className="carousel-card absolute inset-0 cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{zIndex: '96', pointerEvents: 'none', transform: 'translateX(600px) translateZ(-560px) rotateY(-48deg) scale(0.65)', opacity: '0'}}>
<div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-400 group-hover:-translate-y-8 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-[#333] group-hover:border-[#555]">
<img className="w-full h-full object-cover transition-all duration-500 brightness-70 group-hover:brightness-90 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c54cd11c-e32d-4cf0-a364-33e83af521a4_800w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
<h3 className="text-[1.1rem] font-medium text-white tracking-tight mb-1.5 font-geist">
                            The Calculated Rival
                          </h3>
<p className="text-[12px] text-white/70 leading-relaxed font-geist">
                            The eternal second best. Trained an entire life to
                            beat the system.
                          </p>
</div>
<div className="active-dot absolute top-5 right-5 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff] opacity-0 transition-opacity duration-300" style={{opacity: '0'}}></div>
</div>
</div>
</div>

<div className="flex gap-2.5 z-50 absolute bottom-6 gap-x-2.5 gap-y-2.5 items-center justify-center" id="pagination-aura"><div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer"></div><div className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/70 transition-all duration-300 cursor-pointer"></div><div className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/70 transition-all duration-300 cursor-pointer"></div><div className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/70 transition-all duration-300 cursor-pointer"></div><div className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/70 transition-all duration-300 cursor-pointer"></div></div>
</div>
<p className="text-xs text-[#888888] mt-4 text-center font-geist">
                  Select character archetypes and plot devices to seed the
                  narrative logic.
                </p>

</div>

<div className="lg:col-span-3 space-y-6">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-white" icon="solar:tuning-square-2-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight font-geist">
                    Tone &amp; Tension
                  </h3>
</div>
<div className="space-y-5">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-[#888888] font-geist">
                      Psychological Tension
                    </span>
<div className="w-10 h-5 bg-white rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full"></div>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-[#888888] font-geist">
                      Character Chemistry
                    </span>
<div className="cursor-pointer bg-[#222222] w-10 h-5 rounded-full relative">
<div className="absolute left-1 top-1 w-3 h-3 bg-[#555555] rounded-full"></div>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-[#888888] font-geist">
                      Moral Ambiguity
                    </span>
<div className="w-10 h-5 bg-white rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full"></div>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-[#888888] font-geist">
                      High Concept Sci-Fi
                    </span>
<div className="w-10 h-5 bg-[#222222] rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-3 h-3 bg-[#555555] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex mt-12 justify-center">
<button className="inline-flex text-[12px] transition-all hover:brightness-110 z-10 font-light text-white tracking-tight font-geist h-9 rounded-full pr-6 pl-6 relative items-center justify-center" type="submit">

<span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-orange-400/20 via-amber-300/30 to-orange-400/20 shadow-[0_0_22px_rgba(248,181,129,0.55)] ring-1 ring-amber-300/60"></span>

<span className="absolute inset-[3px] rounded-full pointer-events-none bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]"></span>

<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-full blur-xl pointer-events-none bg-amber-300/35"></span>

<span className="font-medium font-geist z-10 relative">
                  Start Your Blueprint
                </span>
</button>
</div>
</div>
</section>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:px-6 lg:px-8 bg-gray-950 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="overflow-hidden xl:bg-neutral-950/60 border border-white/20 border-dashed rounded-none mt-6 relative">


<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>

<div className="absolute left-5 top-5">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30 backdrop-blur">
<svg className="lucide lucide-refresh-cw h-5 w-5 text-sky-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path className="" d="M21 3v5h-5"></path>
<path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path className="" d="M8 16H3v5"></path>
</svg>
</div>
</div>

<section className="motion-section flex min-h-[68vh] flex-col sm:py-28 md:min-h-[76vh] md:pl-8 md:pr-8 md:pt-16 md:pb-8 text-left mr-auto ml-auto pt-16 pr-8 pb-8 pl-8 relative justify-center" id="testimonials">

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-left max-w-3xl mb-16">
<span className="uppercase block text-xs font-semibold text-[#888888] tracking-widest mb-4 font-geist">
                Testimonials
              </span>
<h2 className="sm:text-4xl lg:text-5xl text-3xl text-white tracking-tight mb-4 font-jakarta font-medium">
                Deploy in three simple steps
              </h2>
<p className="sm:text-lg leading-relaxed text-base text-zinc-400 font-geist">
                From code to production in seconds. Our streamlined workflow
                makes deployment effortless.
              </p>
</div>

<div className="w-full">

<div className="grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-6 gap-x-6 gap-y-8 items-stretch">

<div className="flex flex-col sm:p-10 sm:bg-neutral-950 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-left bg-black/40 ring-white/10 ring-1 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="mb-4">
<svg className="lucide lucide-quote w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{width: '32px', height: '32px', color: 'rgb(0, 120, 125)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 21c3 0 7-2 7-7V4H3v10"></path>
<path className="" d="M14 21c3 0 7-2 7-7V4h-7v10"></path>
</svg>
</div>
<p className="sm:text-3xl lg:text-4xl leading-snug text-2xl text-white tracking-tight font-jakarta font-medium">
                    "The perfect bridge between an idea and a finished outline.
                    It respects the writer's voice while providing the
                    professional structure every Wattpad story needs to go
                    viral."
                  </p>
<div className="mt-8">
<div className="text-base font-medium text-white font-geist">
                      Sarah L.
                    </div>
<div className="text-sm text-zinc-400 mt-1 font-geist">
                      Indie Novelist
                    </div>
</div>
</div>
<div className="overflow-hidden min-h-[320px] [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-white/5 ring-white/10 ring-1 rounded-2xl relative">
<img alt="Customer portrait" className="opacity-100 w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1617174699241-f461180aa2b4?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/60 to-transparent mix-blend-multiply"></div>
<div className="opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-gradient-to-b from-black/20 via-transparent to-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

</div>

<div className="grid lg:grid-cols-3 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll mt-6 relative gap-x-6 gap-y-6" style={{minHeight: '240px'}}>
<style>
                  @keyframes smoothSlideInUp {
                    0% {
                      opacity: 0;
                      transform: translateY(40px);
                    }

                    20% {
                      opacity: 1;
                      transform: translateY(0);
                    }

                    80% {
                      opacity: 1;
                      transform: translateY(0);
                    }

                    100% {
                      opacity: 0;
                      transform: translateY(-40px);
                    }
                  }
                </style>

<div className="flex flex-col xl:bg-neutral-950 overflow-hidden text-left bg-white/5 rounded-xl ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="" style={{animation: 'smoothSlideInUp 6s ease-in-out 0s infinite'}}>
<p className="leading-relaxed text-base text-zinc-300 font-geist">
                      "I had the world and the characters, but I couldn't find
                      the 'soul' of the plot. This tool gave me a structural
                      outline that felt like it was written by a pro. I went
                      from a blank page to a 10-chapter draft in one weekend."
                    </p>
<div className="flex items-center gap-3 mt-6">
<img alt="Michael Chen avatar" className="w-8 h-8 object-cover ring-white/10 ring-1 rounded-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<div className="">
<div className="text-sm font-medium text-white font-geist">
                          Elena R.
                        </div>
<div className="text-xs text-zinc-500 font-geist">
                          Wattpad Star Author
                        </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col xl:bg-neutral-950 overflow-hidden text-left bg-white/5 ring-white/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="" style={{animation: 'smoothSlideInUp 6s ease-in-out 1s infinite'}}>
<p className="leading-relaxed text-base text-zinc-300 font-geist">
                      "The 'Glitch in the System' archetype was exactly what my
                      sci-fi manuscript needed. It saved me weeks of
                      world-building and let me jump straight into the dialogue.
                      A total game-changer for my workflow."
                    </p>
<div className="flex gap-3 mt-6 gap-x-3 gap-y-3 items-center">
<img alt="Emily Roberts avatar" className="h-8 w-8 rounded-none object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d4bf47a-eb10-4503-a4f3-1940c4118868_320w.webp"/>
<div className="">
<div className="text-sm font-medium text-white font-geist">
                          Elena R.
                        </div>
<div className="text-xs text-zinc-500 font-geist">
                          Hobbyist Writer
                        </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col xl:bg-neutral-950 overflow-hidden text-left bg-white/5 rounded-xl ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="" style={{animation: 'smoothSlideInUp 6s ease-in-out 2s infinite'}}>
<p className="leading-relaxed text-base text-zinc-300 font-geist">
                      "Finally, an AI tool that doesn't try to write for me, but
                      helps me think better. The thematic toggles helped me see
                      my story from a completely different perspective. It’s
                      like having a creative director in my pocket."
                    </p>
<div className="flex items-center gap-3 mt-6">
<img alt="David Park avatar" className="h-8 w-8 rounded-none object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a44deb57-f322-4fc8-9184-d05e21080cb2_320w.jpg"/>
<div className="">
<div className="text-sm font-medium text-white font-geist">
                          Jaxson V.
                        </div>
<div className="text-xs text-zinc-500 font-geist">
                          Content Creator
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

<div className="flex md:hidden mt-4 items-center justify-between" style={{display: 'none'}}>
<button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-200 ring-1 ring-white/10 font-geist">
          Contact
        </button>
<button className="rounded-xl bg-white px-4 py-2 text-sm text-black ring-1 ring-black/10 font-geist">
          Join waitlist
        </button>
</div>
<section className="lg:px-8 z-10 bg-neutral-950 max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<style className="">
          @keyframes rotatePlan {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }

            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        </style>

<section className="lg:px-8 border-t bg-[#080808]/40 border-[#222222] pt-32 pb-32 max-w-7xl mr-auto ml-auto pr-6 pl-6 flex flex-col items-center relative motion-section" id="pricing">
<div className="text-center mb-16">
<span className="uppercase block text-xs font-semibold text-[#888888] tracking-widest mb-4 font-geist">
              Pricing
            </span>
<h2 className="md:text-5xl text-3xl text-white tracking-tight mb-4 font-jakarta font-medium">
              Plans for every writer.
            </h2>
<p className="text-lg text-[#888888] max-w-2xl mx-auto font-geist">
              Start prototyping for free, or unlock the full power of the
              Narrative Engine to master your genre.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full max-w-6xl mx-auto">

<div className="glass-panel flex flex-col h-[calc(100%-2rem)] hover:border-[#444444] transition-colors border-[#222222] border rounded-2xl pt-8 pr-8 pb-12 pl-8" style={{transformOrigin: '50% 50%'}}>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-xl border border-[#333333] bg-[#111111] flex items-center justify-center text-[#888888]">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl text-white tracking-tight font-jakarta font-medium">
                    The Sketchbook
                  </h3>
<p className="text-xs text-[#888888] font-geist">
                    Essential tools for your first idea.
                  </p>
</div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl tracking-tight text-white font-jakarta font-medium">
                    $0
                  </span>
<span className="text-sm text-[#888888] font-geist">forever</span>
</div>
<p className="text-xs text-[#555555] mt-2 font-geist">
                  No credit card required
                </p>
</div>
<ul className="space-y-4 text-sm text-[#888888] flex-grow mb-10">
<li className="flex items-start gap-3">
<svg className="text-[#aaaaaa] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">1 Active project limit</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#aaaaaa] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">Basic world-building tools</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#aaaaaa] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">Standard community access</span>
</li>
</ul>
<button className="hover:bg-[#111111] hover:border-[#555555] transition-all text-sm font-medium text-white font-geist bg-transparent w-full border-[#333333] border rounded-full pt-3 pr-4 pb-3 pl-4" data-open-auth="true">
                Start Creating
              </button>
</div>

<div className="relative group rounded-2xl p-[1px] h-full overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.1)]">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[#222222]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[15rem] bg-gradient-to-b from-transparent via-[#9333ea] to-transparent opacity-80" style={{transformOrigin: 'center', animation: 'rotatePlan 6s linear infinite'}}></div>
</div>

<div className="flex flex-col transition-all duration-300 hover:bg-white/[0.02] z-10 w-full h-full rounded-[15px] pt-8 pr-8 pb-8 pl-8 relative" style={{backgroundColor: '#0a0a0a', backgroundImage: 'radial-gradient(at 0% 0%, rgba(147, 51, 234, 0.12) 0px, transparent 65%), radial-gradient(at 100% 100%, rgba(217, 70, 239, 0.12) 0px, transparent 65%)', boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.05) inset'}}>
<div className="absolute top-0 right-8 transform -translate-y-1/2">
<span className="text-[10px] uppercase font-semibold text-white tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full pt-1 pr-3 pb-1 pl-3 shadow-lg font-geist">
                    Popular
                  </span>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="flex text-purple-400 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 w-10 h-10 border-white/20 border rounded-xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(192, 132, 252)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight font-jakarta">
                      The Architect
                    </h3>
<p className="text-xs text-[#888888] font-geist">
                      For authors ready to publish.
                    </p>
</div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl tracking-tight text-white font-jakarta font-medium">
                      $12
                    </span>
<span className="text-sm text-[#888888] font-geist">
                      / month
                    </span>
</div>
<p className="text-xs text-[#555555] mt-2 font-geist">
                    Billed annually or $15 month-to-month
                  </p>
</div>
<ul className="space-y-4 text-sm text-[#dddddd] flex-grow mb-10">
<li className="flex items-start gap-3 font-geist">
<div className="mt-0.5" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1.25rem', height: '1.25rem', backgroundColor: 'hsl(266, 92%, 58%)', borderRadius: '50%', flexShrink: '0'}}>
<svg className="" fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                    Unlimited active projects
                  </li>
<li className="flex items-start gap-3 font-geist">
<div className="mt-0.5" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1.25rem', height: '1.25rem', backgroundColor: 'hsl(266, 92%, 58%)', borderRadius: '50%', flexShrink: '0'}}>
<svg fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                    Advanced narrative plot trees
                  </li>
<li className="flex items-start gap-3 font-geist">
<div className="mt-0.5" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1.25rem', height: '1.25rem', backgroundColor: 'hsl(266, 92%, 58%)', borderRadius: '50%', flexShrink: '0'}}>
<svg className="" fill="hsl(240, 15%, 9%)" height="12" stroke="hsl(240, 15%, 9%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                    Direct Wattpad Sync &amp; Export
                  </li>
</ul>
<button className="hover:bg-gray-200 transition-colors text-sm font-medium text-black font-geist bg-white w-full rounded-full pt-3 pr-4 pb-3 pl-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]" data-open-auth="true">
                  Get Full Access
                </button>
</div>
</div>

<div className="glass-panel flex flex-col h-[calc(100%-2rem)] hover:border-[#444444] transition-colors border-[#222222] border rounded-2xl pt-8 pr-8 pb-12 pl-8" style={{transformOrigin: '50% 50%'}}>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-xl border border-[#333333] bg-[#111111] flex items-center justify-center text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl text-white tracking-tight font-jakarta font-medium">
                    The Collective
                  </h3>
<p className="text-xs text-[#888888] font-geist">
                    For writing rooms and studios.
                  </p>
</div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl tracking-tight text-white font-jakarta font-medium">
                    $29
                  </span>
<span className="text-sm text-[#888888] font-geist">/ month</span>
</div>
<p className="text-xs text-[#555555] mt-2 font-geist">
                  Per user, billed annually
                </p>
</div>
<ul className="space-y-4 text-sm text-[#888888] flex-grow mb-10">
<li className="flex items-start gap-3">
<svg className="text-white shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-white font-geist">
                    Everything in Architect
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#aaaaaa] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">
                    Co-writing &amp; collaboration hub
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#aaaaaa] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">Custom genre AI models</span>
</li>
</ul>
<button className="hover:bg-[#222222] transition-colors text-sm font-medium text-white font-geist bg-[#111111] w-full border-[#333333] border rounded-full pt-3 pr-4 pb-3 pl-4" data-contact-teams="true">
                Contact for Teams
              </button>
</div>
</div>
</section>
</section>
</main>

<div className="bg-neutral-950 max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-16 pl-6">

<div className="text-center mb-12 sm:mb-16">
<h2 className="sm:text-5xl text-4xl font-semibold text-neutral-100 tracking-tight font-jakarta">
          Your Questions, Answered
        </h2>
<p className="sm:text-lg leading-relaxed text-base text-neutral-400 font-jakarta max-w-2xl mt-4 mr-auto ml-auto">
          Get instant answers to most common questions about Crypton.
        </p>
</div>

<div className="space-y-5">

<div className="ring-1 ring-white/5 overflow-hidden bg-gradient-to-b from-violet-500/15 via-violet-500/10 to-fuchsia-500/0 border-white/10 border rounded-3xl transition-all duration-300" data-acc-item="" data-open="true">
<button className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-start justify-between gap-6 hover:bg-white/5 transition-colors" data-acc-btn="" type="button">
<span className="sm:text-xl text-lg font-semibold text-neutral-100 tracking-tight font-jakarta">
              Do I keep the rights to the stories I write with Storielle?
            </span>
<span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 transition-transform duration-200">

<div className="relative" data-acc-icon="">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{opacity: '1', transform: 'rotate(0deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
</svg>
</div>
<div className="flex items-center justify-center transition-all duration-300" style={{opacity: '0', transform: 'rotate(90deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="M12 5v14"></path>
</svg>
</div>
</div>
</span>
</button>
<div className="transition-all duration-300 ease-in-out overflow-hidden" data-acc-panel="" style={{maxHeight: '104px', opacity: '1'}}>
<div className="sm:px-8 sm:pb-8 pt-0 pr-6 pb-6 pl-6">
<p className="sm:text-base leading-relaxed text-sm text-neutral-300 font-jakarta">
                Yes, 100%. You own everything you create. Storielle is an
                assistive tool to help you outline, structure, and beat writer's
                block. We never claim ownership of your intellectual property,
                and we do not train our AI models on your private manuscripts.
              </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 ring-1 ring-white/5 overflow-hidden bg-neutral-900/40 hover:bg-white/5 transition-all duration-300" data-acc-item="" data-open="false">
<button className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors" data-acc-btn="" type="button">
<span className="sm:text-xl text-lg font-semibold text-neutral-100 tracking-tight font-jakarta">
              How does the Wattpad sync actually work?
            </span>
<span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 transition-transform duration-200">
<div className="relative" data-acc-icon="">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{opacity: '0', transform: 'rotate(90deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
</svg>
</div>
<div className="flex items-center justify-center transition-all duration-300" style={{opacity: '1', transform: 'rotate(0deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="M12 5v14"></path>
</svg>
</div>
</div>
</span>
</button>
<div className="transition-all duration-300 ease-in-out overflow-hidden" data-acc-panel="" style={{maxHeight: '0', opacity: '0'}}>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Once you finish a chapter or an outline in our Narrative Engine,
                you can connect your Wattpad account with one click. From there,
                you can export your drafts directly to your Wattpad writer
                dashboard as unpublished drafts or live updates. No more messy
                copying and pasting.
              </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 ring-1 ring-white/5 overflow-hidden bg-neutral-900/40 hover:bg-white/5 transition-all duration-300" data-acc-item="" data-open="false">
<button className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors" data-acc-btn="" type="button">
<span className="sm:text-xl text-lg font-semibold text-neutral-100 tracking-tight font-jakarta">
              What is included in the free "Sketchbook" plan?
            </span>
<span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 transition-transform duration-200">
<div className="relative" data-acc-icon="">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{opacity: '0', transform: 'rotate(90deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
</svg>
</div>
<div className="flex items-center justify-center transition-all duration-300" style={{opacity: '1', transform: 'rotate(0deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="M12 5v14"></path>
</svg>
</div>
</div>
</span>
</button>
<div className="transition-all duration-300 ease-in-out overflow-hidden" data-acc-panel="" style={{maxHeight: '0', opacity: '0'}}>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                The Sketchbook plan is free forever and gives you 1 active
                project limit along with our basic world-building toolset. It’s
                built for writers who want to test out ideas and see if our
                structuring tools match their workflow before upgrading. No
                credit card is required to start.
              </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 ring-1 ring-white/5 overflow-hidden bg-neutral-900/40 hover:bg-white/5 transition-all duration-300" data-acc-item="" data-open="false">
<button className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors" data-acc-btn="" type="button">
<span className="sm:text-xl text-lg font-semibold text-neutral-100 tracking-tight font-jakarta">
              Can I use this for genres outside of Sci-Fi and Thriller?
            </span>
<span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 transition-transform duration-200">
<div className="relative" data-acc-icon="">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{opacity: '0', transform: 'rotate(90deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
</svg>
</div>
<div className="flex items-center justify-center transition-all duration-300" style={{opacity: '1', transform: 'rotate(0deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="M12 5v14"></path>
</svg>
</div>
</div>
</span>
</button>
<div className="transition-all duration-300 ease-in-out overflow-hidden" data-acc-panel="" style={{maxHeight: '0', opacity: '0'}}>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Absolutely. While our demo highlights popular Wattpad genres
                like Sci-Fi, Thriller, and Romance, the Narrative Engine adapts
                to any genre. You can customize archetypes, tone, and tension
                toggles to fit historical fiction, fantasy, mystery, or young
                adult drama.
              </p>
</div>
</div>
</div>

</div>
</div>
<footer className="bg-center z-0 bg-neutral-950 opacity-100 border-[#222222] border-t pt-20 pb-10">
<div className="lg:px-8 opacity-100 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="md:col-span-2">
<div className="flex gap-2 text-xl font-medium text-white tracking-tight font-jakarta mb-4 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path className="" d="M24 8 L36 16 L36 32 L24 40 L12 32 L12 16 Z" fill="currentColor"></path>
</svg>
              Storielle
            </div>
<p className="text-sm text-[#888888] font-geist max-w-sm">
              Built for modern writers. Structure, draft, and publish compelling
              narratives with intelligent systems designed for
              professional-grade fiction.
            </p>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4 font-geist">
              Platform
            </h4>
<ul className="space-y-3">
<li className="opacity-100">
<a className="text-sm text-[#555555] hover:text-white transition-colors font-geist" href="#">
                  How it works
                </a>
</li>
<li className="">
<a className="text-sm text-[#555555] hover:text-white transition-colors font-geist" href="#">
                  Wattpad Export
                </a>
</li>
<li className="">
<a className="text-sm text-[#555555] hover:text-white transition-colors font-geist" href="#">
                  Community
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4 font-geist">
              Company
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#555555] hover:text-white transition-colors font-geist" href="#">
                  About
                </a>
</li>
<li className="">
<a className="text-sm text-[#555555] hover:text-white transition-colors font-geist" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="text-sm text-[#555555] hover:text-white transition-colors font-geist" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-[#222222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#555555] font-geist">
            © 2026 Storielle Inc. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-[#555555] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:library-linear"></iconify-icon>
</a>
<a className="text-[#555555] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:code-circle-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
<div id="cursor-dot" style={{left: '890px', top: '495px'}}></div>
<div id="cursor-outline" style={{transform: 'translate(-50%, -50%) scale(1)'}}></div>
<style>
      /* Hide the default cursor */
      html, body {
        cursor: none;
      }

      /* Ensure links and buttons also hide the cursor */
      a, button, .hover-target {
        cursor: none !important;
      }

      #cursor-dot,
      #cursor-outline {
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: 99999;
        transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      }

      #cursor-dot {
        width: 6px;
        height: 6px;
        /* Solid bright center */
        background-color: #ffca28;
        box-shadow: 0 0 10px #ff8f00;
      }

      #cursor-outline {
        width: 35px;
        height: 35px;
        /* Premium Orange to Yellow Gradient */
        border: 2px solid #ffca28;
        background: radial-gradient(circle, rgba(255, 143, 0, 0.3) 0%, rgba(255, 202, 40, 0) 70%);
        box-shadow: 0 0 15px rgba(255, 143, 0, 0.2);
        /* Transition for the 'lag' effect */
        transition: all 0.15s ease-out;
      }

      /* Interaction State */
      .cursor-active #cursor-dot {
        transform: translate(-50%, -50%) scale(0.5);
        background-color: #ffffff;
      }

      .cursor-active #cursor-outline {
        transform: translate(-50%, -50%) scale(1.8);
        background-color: rgba(255, 143, 0, 0.15);
        border-color: #ffca28;
        box-shadow: 0 0 25px rgba(255, 143, 0, 0.4);
      }
    </style>



<div className="fixed inset-0 z-[80] hidden items-center justify-center p-4 sm:p-6" id="auth-modal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-md opacity-0 transition-opacity duration-300" id="auth-modal-backdrop"></div>
<div className="relative w-full max-w-md rounded-[28px] p-[1px] overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.14)] opacity-0 scale-95 translate-y-4 transition-all duration-300" id="auth-modal-panel">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[#222222]"></div>
<div className="absolute top-1/2 left-1/2 w-[200%] h-[16rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#9333ea] to-transparent opacity-80" style={{transformOrigin: 'center', animation: 'rotatePlan 6s linear infinite'}}></div>
</div>
<div className="relative z-10 rounded-[27px] border border-white/10 bg-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" style={{backgroundImage: 'radial-gradient(at 0% 0%, rgba(147, 51, 234, 0.12) 0px, transparent 65%), radial-gradient(at 100% 100%, rgba(217, 70, 239, 0.12) 0px, transparent 65%)'}}>
<div className="flex items-center justify-between px-6 sm:px-7 pt-6 pb-4 border-b border-white/10">
<div>
<p className="text-[10px] uppercase tracking-widest text-[#888888] font-geist mb-2">
                Access Storielle
              </p>
<h3 className="text-2xl text-white tracking-tight font-jakarta font-medium" id="auth-modal-title">Create your account</h3>
</div>
<button aria-label="Close sign in modal" className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors" id="auth-modal-close" type="button">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="px-6 sm:px-7 pt-5 pb-7">
<div className="grid grid-cols-2 gap-2 p-1 rounded-full border border-white/10 bg-white/5 mb-6">
<button className="auth-tab-btn rounded-full px-4 py-2.5 text-sm font-medium font-geist tracking-tight text-black bg-white transition-all" id="auth-tab-signup" type="button">
                    Sign up
                  </button>
<button className="auth-tab-btn rounded-full px-4 py-2.5 text-sm font-medium font-geist tracking-tight text-[#888888] hover:text-white transition-all" id="auth-tab-signin" type="button">
                    Sign in
                  </button>
</div>
<div className="space-y-3">
<button className="group w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] px-4 py-3.5 flex items-center gap-3 transition-all active:scale-[0.985]" type="button">
<span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-left">
<span className="block text-sm text-white font-medium font-geist" id="auth-email-label">Continue with email</span>
<span className="block text-xs text-[#888888] font-geist" id="auth-email-sub">
                        Use your work or writing address
                      </span>
</span>
</button>
<button className="group w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] px-4 py-3.5 flex items-center gap-3 transition-all active:scale-[0.985]" type="button">
<span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white font-jakarta font-medium text-base">
                      W
                    </span>
<span className="text-left">
<span className="block text-sm text-white font-medium font-geist" id="auth-wattpad-label">Continue with Wattpad</span>
<span className="block text-xs text-[#888888] font-geist">
                        Connect your stories and drafts
                      </span>
</span>
</button>
<div className="grid grid-cols-3 gap-3 pt-1">
<button aria-label="Continue with Google" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] h-14 flex items-center justify-center text-white transition-all active:scale-[0.985]" type="button">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21.805 10.023H12v3.955h5.61c-.242 1.272-.966 2.35-2.06 3.073v2.553h3.33c1.948-1.793 3.075-4.433 3.075-7.56 0-.674-.06-1.321-.15-2.021Z" fill="#fff" fillOpacity="0.92"></path>
<path d="M12 22c2.79 0 5.13-.924 6.84-2.498l-3.33-2.553c-.924.622-2.108.99-3.51.99-2.697 0-4.98-1.82-5.792-4.267H2.766v2.634A9.998 9.998 0 0 0 12 22Z" fill="#fff" fillOpacity="0.72"></path>
<path d="M6.208 13.672A5.997 5.997 0 0 1 5.88 11.9c0-.616.112-1.214.328-1.771V7.495H2.766A9.998 9.998 0 0 0 2 11.9c0 1.615.386 3.145 1.07 4.406l3.138-2.634Z" fill="#fff" fillOpacity="0.5"></path>
<path d="M12 5.86c1.518 0 2.88.522 3.952 1.548l2.962-2.962C17.126 2.786 14.786 1.8 12 1.8A9.998 9.998 0 0 0 2.766 7.495L6.208 10.13C7.02 7.68 9.303 5.86 12 5.86Z" fill="#fff"></path>
</svg>
</button>
<button aria-label="Continue with X" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] h-14 flex items-center justify-center text-white transition-all active:scale-[0.985]" type="button">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18.901 2H21l-4.586 5.24L21.81 22h-4.226l-3.31-4.33L10.48 22H8.379l4.905-5.605L2.19 2h4.334l2.992 3.915L12.947 2h5.954Zm-.741 18h1.173L5.553 3.896H4.294L18.16 20Z"></path>
</svg>
</button>
<button aria-label="Continue with Facebook" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] h-14 flex items-center justify-center text-white transition-all active:scale-[0.985]" type="button">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 22v-8.2H16l.4-3h-2.9V8.9c0-.87.24-1.47 1.5-1.47h1.6V4.74c-.28-.04-1.23-.12-2.33-.12-2.3 0-3.87 1.4-3.87 3.98v2.2H8v3h2.4V22h3.1Z"></path>
</svg>
</button>
</div>
</div>
<div className="relative my-6">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/10"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-[#0a0a0a] px-3 text-[11px] uppercase tracking-widest text-[#555555] font-geist">
                      or continue with email
                    </span>
</div>
</div>
<form className="space-y-4" id="auth-form-wrapper">
<div className="grid gap-2">
<label className="text-sm text-white font-medium font-geist" htmlFor="auth-email">
                      Email address
                    </label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#666666] outline-none transition-all focus:border-purple-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-purple-500/20 font-geist" id="auth-email" placeholder="name@example.com" type="email"/>
<p className="text-xs text-[#666666] font-geist">
                  We will only use this to secure your account.
                </p>
</div>
<div className="grid gap-2">
<label className="text-sm text-white font-medium font-geist" htmlFor="auth-password">
                      Password
                    </label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#666666] outline-none transition-all focus:border-purple-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-purple-500/20 font-geist" id="auth-password" placeholder="Enter your password" type="password"/>
<p className="text-xs text-[#666666] font-geist" id="auth-password-help">Use at least 8 characters.</p>
</div>
<button className="relative inline-flex w-full h-12 items-center justify-center rounded-full text-sm text-white tracking-tight font-geist font-medium transition-all hover:brightness-110 active:scale-[0.985]" id="auth-submit" type="submit">

<span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-orange-400/20 via-amber-300/30 to-orange-400/20 shadow-[0_0_22px_rgba(248,181,129,0.55)] ring-1 ring-amber-300/60"></span>

<span className="absolute inset-[3px] rounded-full pointer-events-none bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]"></span>

<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-full blur-xl pointer-events-none bg-amber-300/35"></span>
<span className="relative z-10" id="auth-submit-label">Create account</span>
</button>
</form>
<p className="mt-5 text-center text-sm text-[#888888] font-geist">
<span id="auth-switch-copy">Already have an account?</span>
<button className="text-white hover:text-fuchsia-300 transition-colors" id="auth-switch-mode" type="button">Sign in</button>
</p>
</div>
</div>
</div>
</div>
<style>
      @keyframes rotatePlan {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
    
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    </style>


<div className="fixed inset-0 z-[90] hidden items-center justify-center p-4 sm:p-6" id="teams-modal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-md opacity-0 transition-opacity duration-300" id="teams-modal-backdrop"></div>
<div className="relative w-full max-w-lg rounded-[28px] p-[1px] overflow-hidden shadow-[0_0_60px_rgba(147,51,234,0.18)] opacity-0 scale-95 translate-y-4 transition-all duration-300" id="teams-modal-panel">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[#222222]"></div>
<div className="absolute top-1/2 left-1/2 w-[200%] h-[16rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#9333ea] to-transparent opacity-80" style={{transformOrigin: 'center', animation: 'rotatePlan 6s linear infinite'}}></div>
</div>
<div className="relative z-10 rounded-[27px] border border-white/10 bg-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" style={{backgroundImage: 'radial-gradient(at 0% 0%,rgba(147,51,234,0.12) 0px,transparent 65%),radial-gradient(at 100% 100%,rgba(217,70,239,0.12) 0px,transparent 65%)'}}>

<div className="flex items-start justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-white/10">
<div>
<p className="text-[10px] uppercase tracking-widest text-[#888888] font-geist mb-2">The Collective Plan</p>
<h3 className="text-2xl text-white tracking-tight font-jakarta font-medium">Let's build your writing room.</h3>
<p className="text-sm text-[#666666] font-geist mt-1.5 max-w-sm">Tell us about your team and we'll follow up within one business day with a tailored quote.</p>
</div>
<button aria-label="Close" className="mt-1 h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors shrink-0 ml-4" id="teams-modal-close" type="button">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="px-6 sm:px-8 pt-6 pb-8">
<form className="space-y-4" id="teams-form">
<div className="grid sm:grid-cols-2 gap-4">
<div className="grid gap-1.5">
<label className="text-xs font-medium text-[#aaaaaa] font-geist uppercase tracking-widest">Your name</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#555555] outline-none transition-all focus:border-purple-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-purple-500/20 font-geist" placeholder="Evelyn Cross" type="text"/>
</div>
<div className="grid gap-1.5">
<label className="text-xs font-medium text-[#aaaaaa] font-geist uppercase tracking-widest">Work email</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#555555] outline-none transition-all focus:border-purple-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-purple-500/20 font-geist" placeholder="you@studio.com" type="email"/>
</div>
</div>
<div className="grid gap-1.5">
<label className="text-xs font-medium text-[#aaaaaa] font-geist uppercase tracking-widest">Organisation / Studio</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#555555] outline-none transition-all focus:border-purple-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-purple-500/20 font-geist" placeholder="Inkwell Studios" type="text"/>
</div>
<div className="grid gap-1.5">
<label className="text-xs font-medium text-[#aaaaaa] font-geist uppercase tracking-widest">Team size</label>
<div className="grid grid-cols-4 gap-2">
<button className="teams-size-btn rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-2.5 text-sm text-[#888888] font-geist transition-all" data-size="2–5" type="button">2–5</button>
<button className="teams-size-btn rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-2.5 text-sm text-[#888888] font-geist transition-all" data-size="6–15" type="button">6–15</button>
<button className="teams-size-btn rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-2.5 text-sm text-[#888888] font-geist transition-all" data-size="16–50" type="button">16–50</button>
<button className="teams-size-btn rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-2.5 text-sm text-[#888888] font-geist transition-all" data-size="50+" type="button">50+</button>
</div>
</div>
<div className="grid gap-1.5">
<label className="text-xs font-medium text-[#aaaaaa] font-geist uppercase tracking-widest">Anything else?</label>
<textarea className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#555555] outline-none transition-all focus:border-purple-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-purple-500/20 font-geist resize-none" placeholder="Tell us your use case, current writing stack, or anything that'll help us tailor the demo..." rows="3"></textarea>
</div>
<button className="relative inline-flex w-full h-12 items-center justify-center rounded-full text-sm text-white tracking-tight font-geist font-medium transition-all hover:brightness-110 active:scale-[0.985]" id="teams-submit" type="submit">
<span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-purple-500/20 via-fuchsia-400/30 to-purple-500/20 ring-1 ring-purple-300/40 shadow-[0_0_22px_rgba(147,51,234,0.35)]"></span>
<span className="absolute inset-[3px] rounded-full pointer-events-none bg-gradient-to-b from-purple-500 via-purple-600 to-fuchsia-400 shadow-[0_4px_12px_rgba(0,0,0,0.45)]"></span>
<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-full blur-xl pointer-events-none bg-fuchsia-400/20"></span>
<span className="relative z-10" id="teams-submit-label">Send enquiry</span>
</button>
</form>

<div className="hidden flex-col items-center text-center py-6 gap-4" id="teams-success">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 flex items-center justify-center">
<svg className="text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h4 className="text-xl text-white font-jakarta font-medium tracking-tight">Enquiry received!</h4>
<p className="text-sm text-[#888888] font-geist max-w-xs">We'll review your details and reach out within one business day. Talk soon.</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
