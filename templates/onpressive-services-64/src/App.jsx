import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const services = [
          {
              id: 'strategy',
              title: 'Strategy',
              description: "We dive deep into market insights to craft a roadmap that aligns your business goals with actionable digital opportunities.",
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1770&auto=format&fit=crop'
          },
          {
              id: 'social-ads',
              title: 'Performance social advertising',
              description: "We don't just run ads, we build campaigns that hit the right audience, at the right time, with real results to show for it.",
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
          },
          {
              id: 'design',
              title: 'Social ads design',
              description: "Creative visuals that stop the scroll. We design high-converting assets tailored specifically for social media engagement.",
              image: 'https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=1770&auto=format&fit=crop'
          },
          {
              id: 'email',
              title: 'E-mail marketing',
              description: "Nurture your audience with personalized flows and campaigns that drive retention and maximize customer lifetime value.",
              image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1770&auto=format&fit=crop'
          },
          {
              id: 'branding',
              title: 'Branding',
              description: "Defining your visual and verbal identity to create a memorable brand presence that resonates with your core audience.",
              image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1769&auto=format&fit=crop'
          },
          {
              id: 'photography',
              title: 'Photography',
              description: "Professional art direction and photography that captures the essence of your products and people.",
              image: 'https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1770&auto=format&fit=crop'
          }
      ];

      let selectedIndex = 1;

      const listContainer = document.getElementById('services-list');
      const descElement = document.getElementById('service-description');
      const imgElement = document.getElementById('service-image');

      function renderServices() {
          listContainer.innerHTML = '';

          services.forEach((service, index) => {
              const li = document.createElement('li');
              li.className = 'service-item flex items-center justify-between px-3 py-3 lg:py-1 cursor-pointer select-none text-white';
              li.dataset.index = index;
              
              if (index === selectedIndex) {
                  li.classList.add('selected');
              }

              li.innerHTML = `
                  <span class="text-xl md:text-2xl lg:text-[28px] font-light uppercase tracking-tight leading-tight transition-all duration-150">
                      ${service.title}
                  </span>
                  <div class="arrow-icon flex items-center justify-center w-6 h-6 transition-opacity duration-150 opacity-0">
                      <iconify-icon icon="solar:arrow-right-linear" width="24" height="24" stroke-width="1.5"></iconify-icon>
                  </div>
              `;

              // Click to change content
              li.addEventListener('click', () => {
                  handleSelect(index);
              });

              listContainer.appendChild(li);
          });
      }

      function handleSelect(newIndex) {
          if (selectedIndex === newIndex) return;
          
          // Remove selected class from previous
          const items = document.querySelectorAll('.service-item');
          items.forEach(item => item.classList.remove('selected'));
          
          // Add selected class to new
          selectedIndex = newIndex;
          items[selectedIndex].classList.add('selected');

          // Update Text
          descElement.style.opacity = '0';
          setTimeout(() => {
              descElement.textContent = services[selectedIndex].description;
              descElement.style.opacity = '1';
          }, 150);

          // Update Image
          imgElement.classList.remove('fade-in');
          imgElement.classList.add('fade-out');

          setTimeout(() => {
              imgElement.src = services[selectedIndex].image;
              imgElement.onload = () => {
                  imgElement.classList.remove('fade-out');
                  imgElement.classList.add('fade-in');
              };
          }, 200);
      }

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
          renderServices();
          descElement.textContent = services[selectedIndex].description;
          imgElement.src = services[selectedIndex].image;
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">

<div className="lg:col-span-5 flex flex-col h-full relative">

<div className="flex flex-col items-start gap-3 mb-6 lg:mb-12">
<span className="uppercase text-xs font-normal text-[#AEAEB4] tracking-widest">
            (   You ask, we deliver   )
          </span>
<h1 className="text-2xl lg:text-[28px] leading-tight font-normal tracking-tight">
            Our services
          </h1>
</div>

<div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[445/512] bg-[#111] overflow-hidden rounded-sm">
<img alt="Service Visualization" className="service-image fade-in opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" id="service-image" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col pt-0 lg:pt-16">

<ul className="flex flex-col gap-2 mb-12" id="services-list">
</ul>

<div className="w-full h-[1px] bg-white opacity-10 mb-6 lg:mb-8"></div>

<div className="min-h-[100px] flex items-start">
<p className="text-base lg:text-[18px] leading-[120%] font-light text-white/60 max-w-3xl desc-text" id="service-description">
            We don't just run ads, we build campaigns that hit the right
            audience, at the right time, with real results to show for it.
          </p>
</div>
</div>
</main>


    </>
  );
}
