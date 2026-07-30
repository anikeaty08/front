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
            const panelsContainer = document.querySelector(".panels-container");
            const panels = document.querySelectorAll(".panel");
            const progressFill = document.querySelector(".nav-progress-fill");
            const navText = document.querySelectorAll(".nav-text")[1];
            const leftMenu = document.querySelector(".left-menu");
            const menuBtn = document.querySelector(".menu-btn");
            const sectionNavItems = document.querySelectorAll(".section-nav-item");
            const copyEmailBtn = document.querySelector(".copy-email");
            const copyTooltip = document.querySelector(".copy-tooltip");
            const horizontalContainer = document.querySelector(".horizontal-container");

            const SMOOTH_FACTOR = 0.065;
            const PANEL_COUNT = 4;

            let targetX = 0;
            let currentX = 0;
            let panelWidth = window.innerWidth;
            let maxScroll = (PANEL_COUNT - 1) * panelWidth;
            let isAnimating = false;
            let currentPanel = 0;
            let menuExpanded = false;
            let isDragging = false;
            let startX = 0;
            let startScrollX = 0;

            const lerp = (start, end, factor) => start + (end - start) * factor;
            const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

            // Copy email functionality
            copyEmailBtn.addEventListener("click", () => {
                const email = document.querySelector(".email").textContent;
                navigator.clipboard.writeText(email).then(() => {
                    copyTooltip.classList.add("active");
                    setTimeout(() => copyTooltip.classList.remove("active"), 2000);
                });
            });

            // Menu functionality
            menuBtn.addEventListener("click", () => {
                menuExpanded = !menuExpanded;
                leftMenu.classList.toggle("expanded");
                document.body.classList.toggle("menu-expanded");

                if (menuExpanded) {
                    setTimeout(() => {
                        sectionNavItems.forEach((item, index) => {
                            setTimeout(() => item.classList.add("animate-in"), index * 30);
                        });
                    }, 150);
                } else {
                    sectionNavItems.forEach(item => item.classList.remove("animate-in"));
                }

                setTimeout(updateDimensions, 400);
            });

            const updateDimensions = () => {
                panelWidth = window.innerWidth;
                maxScroll = (PANEL_COUNT - 1) * panelWidth;
                targetX = currentPanel * panelWidth;
                currentX = targetX;

                panels.forEach(panel => {
                    panel.style.width = `${panelWidth}px`;
                });

                panelsContainer.style.transform = `translateX(-${currentX}px)`;
            };

            // Navigation
            sectionNavItems.forEach((item) => {
                item.addEventListener("click", () => {
                    const index = parseInt(item.getAttribute("data-index"));
                    targetX = index * panelWidth;

                    sectionNavItems.forEach(navItem => navItem.classList.remove("active"));
                    item.classList.add("active");

                    startAnimation();

                    if (menuExpanded) {
                        menuExpanded = false;
                        leftMenu.classList.remove("expanded");
                        document.body.classList.remove("menu-expanded");
                        sectionNavItems.forEach(item => item.classList.remove("animate-in"));
                        setTimeout(updateDimensions, 400);
                    }
                });
            });

            const updateProgress = () => {
                const progress = currentX / maxScroll;
                progressFill.style.transform = `scaleX(${progress})`;
            };

            const updatePageCount = () => {
                const currentPanelIndex = Math.round(currentX / panelWidth) + 1;
                const formatted = currentPanelIndex.toString().padStart(2, '0');
                navText.textContent = `${formatted} / 04`;

                sectionNavItems.forEach((item, index) => {
                    if (index === currentPanelIndex - 1) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                });
            };

            const updateActivePanel = () => {
                const newPanel = Math.round(currentX / panelWidth);
                if (newPanel !== currentPanel) {
                    panels[currentPanel]?.classList.remove("active");
                    panels[newPanel]?.classList.add("active");
                    currentPanel = newPanel;
                }
            };

            const animate = () => {
                currentX = lerp(currentX, targetX, SMOOTH_FACTOR);
                panelsContainer.style.transform = `translateX(-${currentX}px)`;

                updateProgress();
                updatePageCount();
                updateActivePanel();

                if (Math.abs(targetX - currentX) > 0.1 || isAnimating) {
                    requestAnimationFrame(animate);
                } else {
                    isAnimating = false;
                }
            };

            const startAnimation = () => {
                if (!isAnimating) {
                    isAnimating = true;
                    requestAnimationFrame(animate);
                }
            };

            // Event handlers
            horizontalContainer.addEventListener("wheel", (e) => {
                e.preventDefault();
                targetX = clamp(targetX + e.deltaY, 0, maxScroll);
                startAnimation();
            });

            horizontalContainer.addEventListener("mousedown", (e) => {
                if (e.target.closest(".left-menu") || e.target.closest(".copy-email")) return;
                isDragging = true;
                startX = e.clientX;
                startScrollX = currentX;
                document.body.style.cursor = "grabbing";
                e.preventDefault();
            });

            window.addEventListener("mousemove", (e) => {
                if (!isDragging) return;
                const dx = e.clientX - startX;
                targetX = clamp(startScrollX - dx, 0, maxScroll);
                startAnimation();
            });

            window.addEventListener("mouseup", () => {
                if (!isDragging) return;
                isDragging = false;
                document.body.style.cursor = "grab";
                
                const nearestPanel = Math.round(targetX / panelWidth);
                targetX = nearestPanel * panelWidth;
                startAnimation();
            });

            window.addEventListener("resize", updateDimensions);

            // Initialize
            updateDimensions();
            panels[0].classList.add("active");
            sectionNavItems[0].classList.add("active");
            startAnimation();
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
      

<div className="left-menu">
<div className="left-menu-top">
<button aria-label="Toggle menu" className="menu-btn">
<span></span>
<span></span>
<span></span>
</button>
</div>
<div className="left-menu-middle">
<div className="logo">HORIZONTAL</div>
</div>
<div className="section-nav">
<a className="section-nav-item" data-index="0">
<span className="section-nav-item-number">01</span>
<span>Home</span>
</a>
<a className="section-nav-item" data-index="1">
<span className="section-nav-item-number">02</span>
<span>About</span>
</a>
<a className="section-nav-item" data-index="2">
<span className="section-nav-item-number">03</span>
<span>Projects</span>
</a>
<a className="section-nav-item" data-index="3">
<span className="section-nav-item-number">04</span>
<span>Contact</span>
</a>
</div>
</div>
<div className="page-container">
<div className="horizontal-container">
<div className="panels-container">

<section className="panel panel-1" data-index="0">
<div className="panel-content">
<div className="chapter">WELCOME TO</div>
<h1 className="title">HORIZONTAL</h1>
<div className="text">
<p>A minimalist approach to digital experiences. Clean lines, monospace typography, and purposeful design that moves horizontally through ideas and concepts.</p>
</div>
</div>
</section>

<section className="panel panel-2" data-index="1">
<div className="panel-content">
<div className="chapter">PHILOSOPHY</div>
<div className="mega-text">MINIMAL</div>
<div className="text">
<p>We believe in the power of simplicity. Every element serves a purpose. Every line of code has meaning. Black and white isn't just a color scheme – it's a commitment to clarity.</p>
</div>
</div>
</section>

<section className="panel panel-3" data-index="2">
<div className="panel-content">
<div className="chapter">OUR WORK</div>
<div className="mega-text">CRAFT</div>
<div className="text">
<p>Each project is carefully considered. From concept to completion, we focus on creating experiences that are both functional and beautiful. Typography, spacing, and interaction design working in harmony.</p>
</div>
</div>
</section>

<section className="panel panel-4" data-index="3">
<div className="panel-content">
<div className="contact-name">GET IN TOUCH</div>
<div className="email-wrapper">
<a className="email" href="mailto:hello@horizontal.com">hello@horizontal.com</a>
<button className="copy-email" title="Copy email">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="13" rx="2" ry="2" width="13" x="9" y="9"></rect>
<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>
</button>
<span className="copy-tooltip">Copied!</span>
</div>
</div>
</section>
</div>
</div>
</div>
<div className="navigation">
<div className="nav-text">SCROLL</div>
<div className="nav-progress">
<div className="nav-progress-fill"></div>
</div>
<div className="nav-text">01 / 04</div>
</div>


    </>
  );
}
