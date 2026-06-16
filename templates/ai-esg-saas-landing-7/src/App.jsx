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
serif: ['Instrument Serif', 'serif'],
},
colors: {
brand: {
green: '#10B981',
glow: '#34D399',
dark: '#020402',
panel: '#0A0F0C',
}
},
backgroundImage: {
'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 40s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


          (function() {
              const section = document.getElementById('immersive-visual');
              const bg = document.getElementById('immersive-bg');
              const card = document.getElementById('immersive-3d-card');
              let ticking = false;

              function update() {
                  const rect = section.getBoundingClientRect();
                  const viewportHeight = window.innerHeight;

                  if (rect.top < viewportHeight && rect.bottom > 0) {
                      // Calculate progress for background scale
                      const progress = 1 - ((rect.top + rect.height) / (viewportHeight + rect.height));
                      const scale = 1 + (progress * 0.15);
                      bg.style.transform = `scale(${scale})`;
                  }
                  ticking = false;
              }

              window.addEventListener('scroll', () => {
                  if (!ticking) {
                      window.requestAnimationFrame(update);
                      ticking = true;
                  }
              });

              // 3D Tilt Interaction
              section.addEventListener('mousemove', (e) => {
                  const rect = section.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  // Rotation calculation
                  const rotateX = ((y - centerY) / centerY) * -12;
                  const rotateY = ((x - centerX) / centerX) * 12;

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              });

              section.addEventListener('mouseleave', () => {
                  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
              });
          })();
        


      document.addEventListener('DOMContentLoaded', () => {
          // Parallax
          const bg = document.getElementById('parallax-bg');
          window.addEventListener('scroll', () => {
              const scrolled = window.scrollY;
              bg.style.transform = `translateY(${scrolled * 0.5}px)`;
          });

          // Reveal Animation Observer
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, { threshold: 0.1 });

          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4gmCpqXwufNrQNMqVM2L">
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<div data-us-text="id-ej5yy4nuysnbrde6asxs8m" style={{width: '5px', top: '359.405px', left: '513.957px', fontSize: '10px', lineHeight: '65.1906px', letterSpacing: '0px', fontFamily: 'Inter', fontWeight: '400', textAlign: 'left', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>
            .
          </div>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
<a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank">
<img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/>
</a>
</div>

</div>
</div>

<div className="parallax-bg" id="parallax-bg" style={{transform: 'translateY(352.5px)'}}></div>

<nav className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-full max-w-[90vw] md:max-w-3xl">
<div className="glass-panel flex shadow-brand-green/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-2xl items-center justify-between">
<div className="flex items-center gap-2 pl-4">
<div className="w-3 h-3 bg-brand-green rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
<span className="text-sm font-semibold tracking-tight text-white font-sans uppercase" style={{}}>
            Veridian
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#features" style={{}}>
            Features
          </a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#solutions" style={{}}>
            Solutions
          </a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#pricing" style={{}}>
            Pricing
          </a>
</div>
<button className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-brand-green hover:text-white transition-colors" style={{}}>
          Book Demo
        </button>
</div>
</nav>
<main className="flex flex-col z-10 w-full pt-40 relative items-center">

<section className="container flex flex-col text-center max-w-5xl mr-auto mb-32 ml-auto pr-6 pl-6 relative items-center">

<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 backdrop-blur-sm mb-8 reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-green"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-xs font-medium text-brand-green tracking-wide" style={{}}>
            CSRD Ready for 2025
          </span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] reveal active delay-100 text-5xl text-white tracking-tight font-serif mb-8">
          The Operating System for
          <br/>
<span className="italic text-white/50 font-quicksand">Sustainable</span>
<span className="text-gradient font-quicksand">Intelligence.</span>
</h1>
<p className="leading-relaxed reveal active delay-200 text-lg font-light text-white/60 max-w-2xl mb-10">
          Automate carbon accounting, master Scope 3 emissions, and generate
          audit-ready reports instantly.
        </p>
<div className="flex flex-col sm:flex-row gap-4 items-center reveal active delay-300">
<button className="px-8 py-3.5 rounded-full text-sm font-medium text-white/70 hover:text-white transition-colors border border-white/10 hover:border-white/30 hover:bg-white/5" style={{}}>
            View Documentation
          </button>
<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-black transition-all">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020402_0%,#10B981_50%,#020402_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0A0F0C] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-[#020402]" style={{}}>
              Start Reporting
              <svg aria-hidden="true" className="text-brand-green transition-colors group-hover:text-white" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</button>
</div>
</section>

<section className="border-y overflow-hidden bg-stone-950/80 w-full border-white/5 mb-2 pt-24 pb-2 relative">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>
<div className="container mx-auto px-6 text-center">
<h2 className="leading-snug reveal md:text-6xl text-2xl font-medium text-white/90 tracking-tight font-quicksand max-w-3xl mr-auto ml-auto" style={{}}>
            The AI-powered ESG platform built for modern industries.
          </h2>
</div>
</section>

<section className="container bg-stone-950/95 max-w-6xl mr-auto mb-32 ml-auto pt-20 pr-6 pl-6">
<div className="text-center mb-10 reveal">
<h2 className="md:text-5xl text-3xl text-white font-serif mb-4" style={{}}>
            Unified ESG Intelligence
          </h2>
<p className="text-white/50">Everything you need, all in one view.</p>
</div>
<div className="reveal delay-100 overflow-hidden group bg-[#0A0F0C] border-white/10 border rounded-xl relative shadow-2xl">

<div className="flex border-white/5 border-b pt-4 pr-6 pb-4 pl-6 -rotate-x-30 items-center justify-between">
<div className="flex gap-x-6 gap-y-6">
<button className="text-sm font-medium text-white border-b-2 border-brand-green pb-4 -mb-4.5" style={{}}>
                Environmental
              </button>
<button className="text-sm font-medium text-white/40 hover:text-white transition-colors pb-4 -mb-4.5" style={{}}>
                Social
              </button>
<button className="text-sm font-medium text-white/40 hover:text-white transition-colors pb-4 -mb-4.5" style={{}}>
                Governance
              </button>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-white/30" style={{}}>
                Last updated: Just now
              </span>
<div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
</div>
</div>

<div className="md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[500px] pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6">

<div className="md:col-span-2 flex flex-col overflow-hidden bg-white/5 border-white/5 border rounded-lg pt-6 pr-6 pb-6 pl-6 relative">
<h4 className="text-sm text-white/70 mb-6 flex items-center gap-2" style={{}}>
<svg aria-hidden="true" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Emissions Trend (tCO2e)
              </h4>
<div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
<div className="w-full bg-brand-green/20 h-[30%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity" style={{}}>
                    120t
                  </div>
</div>
<div className="w-full bg-brand-green/20 h-[45%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity" style={{}}>
                    180t
                  </div>
</div>
<div className="w-full bg-brand-green/20 h-[35%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[60%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[50%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[75%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[55%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[85%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-gradient-to-t from-brand-green to-brand-glow h-[40%] rounded-t shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0C] to-transparent opacity-20 pointer-events-none"></div>
</div>

<div className="flex flex-col gap-4">
<div className="bg-white/5 rounded-lg border border-white/5 p-5 flex flex-col justify-between h-1/2">
<span className="text-xs text-white/40 uppercase tracking-wider" style={{}}>
                  Net Zero Target
                </span>
<div className="mt-2">
<div className="text-3xl font-light text-white font-quicksand" style={{}}>
                    42%
                  </div>
<span className="text-xs text-brand-green" style={{}}>
                    +5% vs last month
                  </span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
<div className="bg-brand-green h-full w-[42%]"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg border border-white/5 p-5 flex flex-col justify-between h-1/2">
<span className="text-xs text-white/40 uppercase tracking-wider" style={{}}>
                  Scope 3 Data
                </span>
<div className="mt-2">
<div className="text-3xl font-light text-white font-quicksand" style={{}}>
                    89
                  </div>
<span className="text-xs text-white/40" style={{}}>
                    Suppliers Connected
                  </span>
</div>
<div className="flex -space-x-2 mt-4">
<div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0A0F0C]"></div>
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[#0A0F0C]"></div>
<div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#0A0F0C]"></div>
<div className="w-8 h-8 rounded-full bg-brand-green/20 border-2 border-[#0A0F0C] flex items-center justify-center text-[10px] text-brand-green font-medium" style={{}}>
                    +86
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="container mr-auto mb-32 ml-auto pr-6 pl-6" id="features">

<div className="mb-16 md:text-center max-w-3xl mx-auto reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-6 font-quicksand tracking-tight">
            The Core of Your ESG Strategy
          </h2>
<p className="text-lg text-white/50 leading-relaxed font-light">
            Powerful automated tools designed to streamline ingestion,
            compliance, and reporting in one unified platform.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-x-4 gap-y-4">

<div className="reveal group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent hover:from-brand-green/10 hover:to-brand-green/5 hover:border-brand-green/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-green group-hover:scale-110 transition-transform group-hover:bg-brand-green/20 group-hover:border-brand-green/30">
<svg aria-hidden="true" className="" data-icon="lucide:database" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse className="" cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
<path d="M3 12a9 3 0 0 0 18 0"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>
              ESG Data Hub
            </h3>
<p className="text-sm text-white/50 leading-relaxed" style={{}}>
              Centralize ingestion from ERPs and utility APIs instantly.
            </p>
</div>

<div className="reveal delay-100 group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent hover:from-brand-green/10 hover:to-brand-green/5 hover:border-brand-green/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-green group-hover:scale-110 transition-transform group-hover:bg-brand-green/20 group-hover:border-brand-green/30">
<svg aria-hidden="true" className="" data-icon="lucide:bot" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>
              AI Report Generator
            </h3>
<p className="text-sm text-white/50 leading-relaxed" style={{}}>
              Draft CSRD &amp; GRI compliant reports in seconds.
            </p>
</div>

<div className="reveal delay-200 group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent hover:from-brand-green/10 hover:to-brand-green/5 hover:border-brand-green/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-green group-hover:scale-110 transition-transform group-hover:bg-brand-green/20 group-hover:border-brand-green/30">
<svg aria-hidden="true" data-icon="lucide:layout-dashboard" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>
              Real-Time Dashboard
            </h3>
<p className="text-sm text-white/50 leading-relaxed" style={{}}>
              Live tracking of carbon, water, and social metrics.
            </p>
</div>

<div className="reveal delay-300 group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent hover:from-brand-green/10 hover:to-brand-green/5 hover:border-brand-green/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-green group-hover:scale-110 transition-transform group-hover:bg-brand-green/20 group-hover:border-brand-green/30">
<svg aria-hidden="true" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>
              Vendor Scope 3
            </h3>
<p className="text-sm text-white/50 leading-relaxed" style={{}}>
              Engage suppliers directly to gather accurate emission data.
            </p>
</div>
</div>
</section>
<section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center my-32 group perspective-[1200px]" id="immersive-visual">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-75 ease-linear will-change-transform" id="immersive-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp', transform: 'scale(1)'}}>
<div className="absolute inset-0 bg-[#020402]/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#020402] via-transparent to-[#020402]"></div>
</div>
</div>

<div className="relative z-10 w-[280px] h-[360px] duration-100 ease-out will-change-transform" id="immersive-3d-card" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-xl rounded-[2rem] shadow-[0_0_80px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center p-8 text-center" style={{transform: 'translateZ(40px)'}}>
<div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center mb-6 text-brand-green shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-pulse">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<h3 className="text-3xl font-serif text-white mb-2">Global Impact</h3>
<p className="text-sm text-white/50 leading-relaxed">
              Tracking emissions across 140+ countries in real-time.
            </p>
</div>

<div className="absolute inset-0 bg-brand-green/5 rounded-[2rem] border border-brand-green/10" style={{transform: 'translateZ(-20px) scale(0.95)'}}></div>

<div className="absolute inset-0 bg-brand-green/20 rounded-[2rem] blur-[60px] -z-10" style={{transform: 'translateZ(-40px)'}}></div>
</div>

</section>

<section className="container mx-auto px-6 mb-32 max-w-6xl" id="solutions">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="reveal">
<h3 className="text-2xl font-serif text-white mb-8 font-quicksand" style={{}}>
              Common ESG Pain Points
            </h3>
<div className="space-y-6">
<div className="flex gap-4 items-start opacity-50 hover:opacity-100 transition-opacity">
<div className="mt-1 text-red-400">
<svg aria-hidden="true" data-icon="lucide:x-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9l-6 6m0-6l6 6"></path>
</g>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium" style={{}}>
                    Scattered Data
                  </h4>
<p className="text-sm text-white/60 mt-1" style={{}}>
                    Spreadsheets, emails, and PDFs create data silos.
                  </p>
</div>
</div>
<div className="flex gap-4 items-start opacity-50 hover:opacity-100 transition-opacity">
<div className="mt-1 text-red-400">
<svg aria-hidden="true" data-icon="lucide:x-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9l-6 6m0-6l6 6"></path>
</g>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium" style={{}}>
                    Manual Reporting
                  </h4>
<p className="text-sm text-white/60 mt-1" style={{}}>
                    Hundreds of hours lost to formatting and consolidation.
                  </p>
</div>
</div>
<div className="flex gap-4 items-start opacity-50 hover:opacity-100 transition-opacity">
<div className="mt-1 text-red-400">
<svg aria-hidden="true" data-icon="lucide:x-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9l-6 6m0-6l6 6"></path>
</g>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium" style={{}}>
                    Low ESG Literacy
                  </h4>
<p className="text-sm text-white/60 mt-1" style={{}}>
                    Teams struggle to interpret complex regulations.
                  </p>
</div>
</div>
<div className="flex gap-4 items-start opacity-50 hover:opacity-100 transition-opacity">
<div className="mt-1 text-red-400">
<svg aria-hidden="true" data-icon="lucide:x-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9l-6 6m0-6l6 6"></path>
</g>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium" style={{}}>No Visibility</h4>
<p className="text-sm text-white/60 mt-1" style={{}}>
                    Annual reports are too slow for proactive management.
                  </p>
</div>
</div>
</div>
</div>

<div className="reveal delay-200 relative p-8 rounded-3xl bg-brand-panel border border-brand-green/20 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-2xl font-serif text-white mb-8 relative z-10 font-quicksand" style={{}}>
              Veridian Solutions
            </h3>
<div className="space-y-6 relative z-10">
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-green bg-brand-green/10 p-1 rounded-full">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium" style={{}}>
                    Centralized Data Hub
                  </h4>
<p className="text-sm text-white/60 mt-1" style={{}}>
                    One source of truth connecting all your data streams.
                  </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-green bg-brand-green/10 p-1 rounded-full">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium" style={{}}>
                    AI-Powered Reporting
                  </h4>
<p className="text-sm text-white/60 mt-1" style={{}}>
                    Generative AI drafts text and visualizations instantly.
                  </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-green bg-brand-green/10 p-1 rounded-full">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium" style={{}}>
                    Guided Workflows
                  </h4>
<p className="text-sm text-white/60 mt-1" style={{}}>
                    Step-by-step wizards for compliance (CSRD, BRSR).
                  </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-green bg-brand-green/10 p-1 rounded-full">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium" style={{}}>
                    Live Dashboards
                  </h4>
<p className="text-sm text-white/60 mt-1" style={{}}>
                    Real-time pulse on your sustainability performance.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="container mx-auto px-6 mb-32 max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="reveal relative h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-green/5 to-transparent rounded-full blur-3xl"></div>

<div className="relative w-full h-full border border-white/5 rounded-2xl bg-black/40 overflow-hidden">
<svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="w-24 h-24 bg-black border border-brand-green/50 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center z-10 animate-float">
<svg aria-hidden="true" data-icon="lucide:brain-circuit" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</g>
</svg>
</div>

<div className="absolute w-64 h-64 border border-white/10 rounded-full animate-spin [animation-duration:10s]"></div>
<div className="absolute w-96 h-96 border border-white/5 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]"></div>
</div>
</div>
</div>

<div className="reveal delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 text-xs font-medium mb-6" style={{}}>
<svg aria-hidden="true" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
              Veridian AI Engine
            </div>
<h3 className="text-3xl font-serif text-white mb-6 font-quicksand" style={{}}>
              Predict. Optimize. Report.
            </h3>
<p className="text-white/60 mb-8 leading-relaxed" style={{}}>
              Our proprietary AI models analyze your operational data to
              identify reduction opportunities and auto-generate compliance
              documentation.
            </p>

<div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-8">
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[24px]">
<svg aria-hidden="true" data-icon="lucide:lightbulb" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="">
<h5 className="text-sm font-medium text-white mb-1" style={{}}>
                    Optimization Insight
                  </h5>
<p className="text-xs text-white/50 mb-3" style={{}}>
                    Switching Logistics Partner A to Rail transport for Route 4
                    would reduce Scope 3 emissions by 14%.
                  </p>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-brand-green h-full w-[86%] animate-[width_2s_ease-out]"></div>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="btn-wrapper">
<button className="btn px-5 py-2.5">
<svg className="btn-svg" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter" style={{}}>G</span>
<span className="btn-letter" style={{}}>e</span>
<span className="btn-letter" style={{}}>n</span>
<span className="btn-letter" style={{}}>e</span>
<span className="btn-letter" style={{}}>r</span>
<span className="btn-letter" style={{}}>a</span>
<span className="btn-letter" style={{}}>t</span>
<span className="btn-letter" style={{}}>e</span>
</div>
<div className="txt-2">
<span className="btn-letter" style={{}}>R</span>
<span className="btn-letter" style={{}}>e</span>
<span className="btn-letter" style={{}}>p</span>
<span className="btn-letter" style={{}}>o</span>
<span className="btn-letter" style={{}}>r</span>
<span className="btn-letter" style={{}}>t</span>
</div>
</div>
</button>
</div>
<span className="text-xs text-white/30 font-mono" style={{}}>
                2.4s est. time
              </span>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 mb-32 max-w-6xl">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-serif text-white font-quicksand tracking-tight">
            Why Industry Leaders Choose Veridian
          </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="md:col-span-2 relative group overflow-hidden rounded-[32px] bg-[#030303] border border-white/10 p-8 md:p-12 reveal transition-colors hover:border-white/20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand-green/80 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-12">
<div className="flex-1 max-w-xl">
<div className="text-[10px] font-mono font-medium text-brand-green mb-6 tracking-[0.2em] uppercase">
                  Advantage / 01
                </div>
<h3 className="text-4xl md:text-5xl font-medium text-white mb-4 font-sans tracking-tighter leading-tight">
                  Growth, Not ComplianceHeadaches.
                </h3>
<p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-8 max-w-sm">
                  Built-in frameworks for CSRD, SEC, BRSR, and ISSB. We handle
                  the regulations so you can focus on your business.
                </p>
<button className="group flex items-center gap-3 text-xs font-semibold text-white bg-white/5 border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all hover:border-brand-green/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<span>View Frameworks</span>
<svg className="lucide lucide-arrow-up-right transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>

<div className="relative w-full md:w-[380px] h-[220px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-6 overflow-hidden group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-50"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-brand-green mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
<svg className="lucide lucide-globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<h4 className="text-white font-medium mb-1">Seamless Sync</h4>
<p className="text-xs text-white/40 max-w-[200px]">
                    Real-time regulatory updates across 45+ jurisdictions.
                  </p>
</div>

<div className="absolute -left-12 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute -right-12 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-[32px] bg-[#030303] border border-white/10 p-8 min-h-[480px] flex flex-col justify-between reveal delay-100 transition-colors hover:border-white/20">

<div className="absolute top-0 right-10 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-brand-green/40 to-transparent blur-[1px]"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="text-[10px] font-mono font-medium text-brand-green/70 mb-6 tracking-[0.2em] uppercase">
                Advantage / 02
              </div>
<h3 className="text-3xl font-medium text-white mb-3 font-sans tracking-tight">
                Automated Intelligence
              </h3>
<p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
                Reduce manual data entry by 80% with our API-first ingestion
                engine and AI processing.
              </p>
</div>

<div className="mt-12 relative w-full rounded-2xl border border-white/10 bg-[#080808] p-5 overflow-hidden">
<div className="absolute top-0 right-8 w-16 h-[1px] bg-brand-green shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20">
<svg className="lucide lucide-cpu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M15 2v2"></path>
<path d="M15 20v2"></path>
<path d="M2 15h2"></path>
<path d="M2 9h2"></path>
<path d="M20 15h2"></path>
<path d="M20 9h2"></path>
<path d="M9 2v2"></path>
<path d="M9 20v2"></path>
</svg>
</div>
<div>
<div className="text-sm text-white font-medium">Processing</div>
<div className="text-[10px] text-white/40">
                    12,405 records analyzed
                  </div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-[10px] text-white/30 uppercase tracking-wider mb-1">
<span>Accuracy</span>
<span className="text-brand-green">99.8%</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-brand-green w-[99%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
<div className="h-full bg-white/20 w-[65%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<button className="text-xs font-semibold text-white/70 hover:text-white flex items-center gap-2 transition-colors">
                Learn more
                <svg className="lucide lucide-arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="relative group overflow-hidden rounded-[32px] bg-[#030303] border border-white/10 p-8 min-h-[480px] flex flex-col justify-between reveal delay-200 transition-colors hover:border-white/20">

<div className="absolute top-0 left-10 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-[1px]"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="text-[10px] font-mono font-medium text-white/40 mb-6 tracking-[0.2em] uppercase">
                Advantage / 03
              </div>
<h3 className="text-3xl font-medium text-white mb-3 font-sans tracking-tight">
                Real-time Visibility
              </h3>
<p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
                Enterprise-grade power with consumer-grade UX. See accurate
                reports and insights the moment you need them.
              </p>
</div>

<div className="mt-12 relative w-full h-[140px] rounded-2xl border border-white/10 bg-[#080808] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-32 h-32 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
</div>
<div className="absolute w-20 h-20 border border-white/10 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
<div className="absolute w-2 h-2 bg-white rounded-full"></div>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
<span className="text-[10px] text-white font-medium">
                    Live Monitoring
                  </span>
</div>
<span className="text-[10px] text-white/40 font-mono">24ms</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<button className="text-xs font-semibold text-white/70 hover:text-white flex items-center gap-2 transition-colors">
                Explore Dashboard
                <svg className="lucide lucide-arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-white/[0.02] border-y border-white/5 mb-24 relative">
<div className="container mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">

<div className="reveal p-8 rounded-2xl bg-black/40 border border-white/5">
<div className="flex gap-1 text-brand-green mb-4">
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-lg text-white/80 font-serif italic mb-6" style={{}}>
              "Veridian transformed our sustainability reporting from a 3-month
              nightmare into a seamless, ongoing process."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-sm font-medium text-white" style={{}}>
                  Sarah Jenkins
                </div>
<div className="text-xs text-white/40" style={{}}>
                  CSO, TechFlow Industries
                </div>
</div>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-2xl bg-black/40 border border-white/5">
<div className="flex gap-1 text-brand-green mb-4">
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-lg text-white/80 font-serif italic mb-6" style={{}}>
              "The granular visibility into our supply chain emissions helped us
              identify savings we didn't know existed."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-sm font-medium text-white" style={{}}>
                  David Chen
                </div>
<div className="text-xs text-white/40" style={{}}>
                  Director of Ops, GreenBuild
                </div>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden mask-gradient-fade">
<div className="flex animate-marquee w-max gap-32 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-xl font-bold font-serif" style={{}}>GLOBEX</div>
<div className="text-xl font-bold font-sans tracking-tight" style={{}}>
              ACME CORP
            </div>
<div className="text-xl font-bold font-mono" style={{}}>SOYLENT</div>
<div className="text-xl font-bold font-sans" style={{}}>UMBRELLA</div>
<div className="text-xl font-bold font-serif italic" style={{}}>
              Initech
            </div>
<div className="text-xl font-bold font-mono" style={{}}>CYBERDYNE</div>

<div className="text-xl font-bold font-serif" style={{}}>GLOBEX</div>
<div className="text-xl font-bold font-sans tracking-tight" style={{}}>
              ACME CORP
            </div>
<div className="text-xl font-bold font-mono" style={{}}>SOYLENT</div>
<div className="text-xl font-bold font-sans" style={{}}>UMBRELLA</div>
<div className="text-xl font-bold font-serif italic" style={{}}>
              Initech
            </div>
<div className="text-xl font-bold font-mono" style={{}}>CYBERDYNE</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 mb-32 text-center" id="pricing">
<div className="reveal relative max-w-4xl mx-auto bg-gradient-to-b from-brand-green/10 to-transparent p-12 rounded-3xl border border-brand-green/20 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-green/20 to-transparent opacity-40"></div>
<h2 className="text-3xl md:text-5xl font-serif text-white mb-6 relative z-10 font-quicksand" style={{}}>
            Start Your Journey to Net Zero
          </h2>
<p className="text-white/60 mb-10 max-w-lg mx-auto relative z-10" style={{}}>
            Transparent pricing for companies of all sizes. No hidden
            implementation fees.
          </p>
<button className="relative z-10 bg-white text-black px-10 py-4 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]" style={{}}>
            See Pricing Plans
          </button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#0A0F0C] pt-20 pb-10 px-6 relative z-10">
<div className="container mx-auto max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-brand-green rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
<span className="text-lg font-semibold tracking-tight text-white font-sans uppercase" style={{}}>
                Veridian
              </span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-green transition-colors text-white/50" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-green transition-colors text-white/50" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-green transition-colors text-white/50" href="#">
<svg aria-hidden="true" data-icon="lucide:github" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</g>
</svg>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
<div>
<h4 className="text-white font-medium text-sm mb-4" style={{}}>
                Product
              </h4>
<ul className="flex flex-col gap-3 text-sm text-white/40">
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Features
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Pricing
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Integrations
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Changelog
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4" style={{}}>
                Company
              </h4>
<ul className="flex flex-col gap-3 text-sm text-white/40">
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    About
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Careers
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Blog
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Contact
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4" style={{}}>
                Resources
              </h4>
<ul className="flex flex-col gap-3 text-sm text-white/40">
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Documentation
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Help Center
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Community
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4" style={{}}>
                Legal
              </h4>
<ul className="flex flex-col gap-3 text-sm text-white/40">
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Terms
                  </a>
</li>
<li>
<a className="hover:text-brand-green transition-colors" href="#" style={{}}>
                    Security
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center md:text-left">
<p className="text-xs text-white/20 font-mono" style={{}}>
            © 2024 Veridian Technologies Inc. All rights reserved.
          </p>
</div>
</div>
</footer>



    </>
  );
}
