import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", function() {
          const observerOptions = {
              root: null,
              rootMargin: "0px 0px -50px 0px",
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.animate-on-scroll').forEach(el => {
              observer.observe(el);
          });
      });
    


      import * as THREE from 'https://esm.sh/three@0.160.0';

      document.addEventListener("DOMContentLoaded", function() {
          const container = document.getElementById('webgl-container');
          if (!container) return;

          const scene = new THREE.Scene();
          const bgColor = new THREE.Color('#022c22'); // Deep brand green
          const accentColor = new THREE.Color('#34d399'); // Emerald

          scene.background = bgColor;
          scene.fog = new THREE.FogExp2(bgColor.getHex(), 0.0012);

          const camera = new THREE.PerspectiveCamera(60, window.innerWidth / container.offsetHeight, 1, 3000);
          camera.position.z = 600;

          const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance", alpha: true });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          renderer.setSize(window.innerWidth, container.offsetHeight);
          container.appendChild(renderer.domElement);

          const particleCount = 8000;
          const geometry = new THREE.BufferGeometry();
          const vertices = new Float32Array(particleCount * 3);

          const spread = 2500;
          const orbRadius = 350;

          const fieldPositions = new Float32Array(particleCount * 3);
          const orbPositions = new Float32Array(particleCount * 3);

          for (let i = 0; i < particleCount; i++) {
              // Wide ambient field
              fieldPositions[i*3] = (Math.random() - 0.5) * spread;
              fieldPositions[i*3+1] = (Math.random() - 0.5) * spread;
              fieldPositions[i*3+2] = (Math.random() - 0.5) * spread;

              // Inner sphere cluster
              const u = Math.random();
              const v = Math.random();
              const theta = 2 * Math.PI * u;
              const phi = Math.acos(2 * v - 1);
              const r = orbRadius * Math.cbrt(Math.random());

              orbPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
              orbPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
              orbPositions[i*3+2] = r * Math.cos(phi);

              // Mix the two for a nice distributed look with a denser center
              const mix = 0.5;
              vertices[i*3] = fieldPositions[i*3] * (1 - mix) + orbPositions[i*3] * mix;
              vertices[i*3+1] = fieldPositions[i*3+1] * (1 - mix) + orbPositions[i*3+1] * mix;
              vertices[i*3+2] = fieldPositions[i*3+2] * (1 - mix) + orbPositions[i*3+2] * mix;
          }

          geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

          const material = new THREE.PointsMaterial({
              color: accentColor,
              size: 2,
              sizeAttenuation: true,
              transparent: true,
              opacity: 0.5,
              blending: THREE.AdditiveBlending,
              depthWrite: false
          });

          const particles = new THREE.Points(geometry, material);
          scene.add(particles);

          function onWindowResize() {
              if(!container) return;
              camera.aspect = window.innerWidth / container.offsetHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, container.offsetHeight);
          }
          window.addEventListener('resize', onWindowResize);

          function animate() {
              requestAnimationFrame(animate);

              // Slow ambient rotation
              particles.rotation.y += 0.0006;
              particles.rotation.x += 0.0002;

              renderer.render(scene, camera);
          }

          animate();
      });
    


      document.addEventListener("DOMContentLoaded", function() {
          const counters = document.querySelectorAll('.stat-counter');
          const counterObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const target = +entry.target.getAttribute('data-target');
                      const prefix = entry.target.getAttribute('data-prefix') || '';
                      const suffix = entry.target.getAttribute('data-suffix') || '';
                      let count = 0;
                      const duration = 2000;
                      const increment = target / (duration / 16);

                      const updateCount = () => {
                          count += increment;
                          if (count < target) {
                              entry.target.innerText = prefix + Math.ceil(count).toLocaleString() + suffix;
                              requestAnimationFrame(updateCount);
                          } else {
                              entry.target.innerText = prefix + target.toLocaleString() + suffix;
                          }
                      };
                      updateCount();
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.5 });

          counters.forEach(counter => counterObserver.observe(counter));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full h-[100svh] max-h-screen overflow-hidden flex flex-col bg-[#022c22]">

<div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden" id="webgl-container">
<div className="absolute inset-0 bg-noise z-10 mix-blend-overlay"></div>

</div>

<div className="absolute inset-0 bg-gradient-to-b from-[#022c22]/40 via-transparent to-[#022c22]/80 z-0 pointer-events-none"></div>
<main className="flex flex-col text-center w-full max-w-7xl z-10 mx-auto px-6 relative items-center flex-grow pt-16 pb-6">
<div className="flex-grow flex flex-col items-center justify-center w-full">
<div className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-md animate-enter-delay-1 hover:border-white/40 transition-colors cursor-default">
<span className="md:text-lg uppercase flex items-center gap-2 text-base font-light text-white tracking-[0.2em] font-sans">
<span className="h-2 w-2 animate-ping bg-emerald-400 opacity-75 rounded-full"></span>
              Stop Overpaying The IRS And Start Overkeeping.
            </span>
</div>
<h1 className="md:text-7xl lg:text-[6.5rem] leading-[1.05] animate-enter-delay-1 z-10 text-5xl text-white tracking-tight font-sans max-w-5xl relative font-medium">
            Over
            <span className="text-emerald-400">$10 Million</span>
<span className="underline font-medium text-white">Saved</span>
            For Our Clients
          </h1>
<p className="mt-6 text-2xl md:text-3xl text-emerald-50/80 max-w-4xl leading-relaxed animate-enter-delay-1 tracking-tight font-sans font-medium">
            Less To The IRS. More To Your Future.
          </p>
<div className="w-full max-w-2xl lg:max-w-4xl relative group animate-enter-delay-2 mt-8">
<div className="absolute inset-0 bg-emerald-400/20 blur-[80px] rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative aspect-video bg-stone-900 rounded-none shadow-2xl overflow-hidden flex flex-col items-center justify-center cursor-pointer border border-stone-800 transition-colors duration-500 z-10">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white/20 group-hover:scale-105 transition-all duration-500 shadow-lg">
<iconify-icon className="ml-1 text-white" height="36" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
</div>
<span className="relative z-10 mt-5 text-white text-xl md:text-2xl tracking-tight font-sans font-medium">
                Watch Our Introduction
              </span>
</div>
</div>
</div>
<div className="mt-auto pt-6 w-full flex justify-center text-center animate-enter-delay-2 relative z-20">
<div className="relative inline-block group">
<a className="relative inline-flex h-16 w-72 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-[#34d399] focus:ring-offset-2 focus:ring-offset-emerald-950 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]" href="#">

<span className="absolute top-1/2 left-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_35%,#34d399_50%,transparent_65%,transparent_100%)] opacity-100"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#022c22] px-6 py-2 text-xl text-white uppercase tracking-[0.15em] backdrop-blur-3xl transition-colors relative z-10 shadow-inner font-sans font-medium">
                Book a Call
              </span>
</a>
</div>
</div>
</main>
</div>
<section className="border-y bg-white z-10 border-stone-200/20 py-16 px-6 relative">
<div className="animate-on-scroll max-w-5xl mx-auto text-center mb-10 animate">
<div className="inline-block bg-stone-900 border border-stone-700/50 px-5 py-2 rounded-full shadow-md mb-6">
<span className="text-lg md:text-xl font-light tracking-[0.2em] text-white uppercase font-sans">
            Why You Need This
          </span>
</div>
<h2 className="text-5xl md:text-6xl text-stone-900 tracking-tight font-sans font-medium">
          Before And After Working With Momen Tax Services
        </h2>
</div>
<div className="animate-on-scroll max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative animate">
<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-stone-800 rounded-full items-center justify-center shadow-2xl border border-stone-600 z-20 text-stone-300 text-2xl transition-all duration-300 tracking-tight font-sans font-medium">
          vs
        </div>
<div className="group md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-stone-700 bg-stone-900 border-stone-800 border rounded-2xl p-6 relative shadow-xl">
<h3 className="relative text-3xl tracking-tight text-white mb-6 flex items-center gap-4 font-sans font-medium">
<div className="flex-shrink-0 w-8 flex items-center justify-center">
<iconify-icon className="text-red-600" height="32" icon="solar:close-circle-bold" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<span>Without Momen Tax Services</span>
</h3>
<ul className="relative space-y-4 text-xl text-white font-light">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 flex items-center justify-center mt-0.5">
<iconify-icon className="text-red-600" height="28" icon="solar:close-circle-bold" style={{strokeWidth: '1.5', color: 'rgb(220, 38, 38)'}} width="28"></iconify-icon>
</div>
<span className="leading-relaxed font-sans font-medium">
                Feeling punished every time you earn more.
              </span>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 flex items-center justify-center mt-0.5">
<iconify-icon className="text-red-600" height="28" icon="solar:close-circle-bold" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<span className="leading-relaxed font-sans font-medium">
                Paying your CPA thousands to file — not to save you money.
              </span>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 flex items-center justify-center mt-0.5">
<iconify-icon className="text-red-600" height="28" icon="solar:close-circle-bold" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<span className="leading-relaxed font-sans font-medium">
                Hitting a new income milestone and immediately dreading the tax
                bill.
              </span>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 flex items-center justify-center mt-0.5">
<iconify-icon className="text-red-600" height="28" icon="solar:close-circle-bold" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<span className="leading-relaxed font-sans font-medium">
                Leaving deductions on the table because nobody showed you they
                exist.
              </span>
</li>
</ul>
</div>
<div className="group relative bg-stone-900 rounded-2xl p-6 md:p-8 shadow-xl border border-stone-800 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#487c5f]/50">
<h3 className="relative text-3xl tracking-tight text-white mb-6 flex items-center gap-4 font-sans font-medium">
<div className="flex-shrink-0 w-8 flex items-center justify-center">
<iconify-icon className="text-emerald-400" height="32" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<span>With Momen Tax Services</span>
</h3>
<ul className="relative space-y-4 text-xl text-white font-light">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 flex items-center justify-center mt-0.5">
<iconify-icon className="text-emerald-400" height="28" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<span className="leading-relaxed font-sans font-medium">
                Feeling like the system is working for you, not against you.
              </span>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 flex items-center justify-center mt-0.5">
<iconify-icon className="text-emerald-400" height="28" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<span className="leading-relaxed font-sans font-medium">
                Building real generational wealth instead of funding the IRS.
              </span>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 flex items-center justify-center mt-0.5">
<iconify-icon className="text-emerald-400" height="28" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<span className="leading-relaxed font-sans font-medium">
                Finally feeling like your income matches your lifestyle.
              </span>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 flex items-center justify-center mt-0.5">
<iconify-icon className="text-emerald-400" height="28" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<span className="leading-relaxed font-sans font-medium">
                Having the cash to invest, save, and live without guilt.
              </span>
</li>
</ul>
</div>
</div>
</section>

<section className="z-10 md:py-12 bg-stone-100 border-stone-200/20 border-b pt-8 pr-6 pb-8 pl-6 relative" id="about">
<div className="animate-on-scroll max-w-5xl mx-auto rounded-3xl bg-[#1a2e22]/95 backdrop-blur-2xl border border-stone-800 p-6 md:p-8 text-white shadow-2xl relative overflow-hidden group animate">
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-400/10 transition-colors duration-1000"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">

<div className="relative w-full aspect-[4/5] md:aspect-[3/4] mx-auto md:mx-0 group/img cursor-default overflow-hidden rounded-xl shadow-2xl border border-white/10">
<img alt="Jasmine Hajimomen, Founder of Momen Tax Services" className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105 w-full h-full" src="https://i.ibb.co/5WYthMSK/Screenshot-2026-03-04-at-6-19-37-PM.png"/>
<div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
</div>

<div className="">
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-sans font-medium mb-1">
              Meet Jasmine Hajimomen
            </h2>
<p className="text-emerald-400 font-sans font-medium tracking-[0.15em] uppercase text-sm mb-5">
              Founder and CEO
            </p>
<div className="space-y-3 text-base md:text-lg text-white/80 font-extralight leading-relaxed tracking-tight">
<p className="font-sans font-medium">
                I started doing tax returns for friends out of an In-N-Out
                Burger in 2012. Not because anyone asked me to. I just couldn't
                stop learning about the tax code and figuring out how to help
                people keep more of what they earned. That curiosity turned into
                a Facebook community of over 15,000 self-employed individuals, a
                degree from USC, and eventually years of working hands-on with
                high-earning creators, business owners, and entrepreneurs who
                needed more than just someone to file their returns.
              </p>
<p className="font-sans font-medium">
                They needed someone who could think ahead and build a real
                strategy. Today, Momen Tax Services is a leading tax and
                accounting advisory firm that helps clients save tens to
                hundreds of thousands of dollars through complex, tailored tax
                planning. Every strategy is legal, proactive, and built around
                the full picture of our clients' financial lives.
              </p>
<p className="font-sans font-medium">
                Whether you're a W2 high earner, a business owner scaling fast,
                or a creator turning income into long-term wealth, we build the
                plan that makes sure your money works as hard as you do.
              </p>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-6 items-center md:items-start relative z-20">
<div className="md:w-1/2 text-left w-full">
<span className="text-sm font-normal tracking-[0.2em] text-emerald-400 uppercase mb-2 block font-sans">
              Experience
            </span>
<h3 className="text-2xl tracking-tight text-white mb-2 font-sans font-medium">
              Our Accreditations
            </h3>
<p className="text-white/70 text-sm md:text-base leading-relaxed font-sans font-medium tracking-tight">
              Combining more than 30 years of experience, Momen Tax Services is
              committed to providing all taxpayers with assistance and
              personalized services.
            </p>
</div>
<div className="md:w-1/2 w-full flex items-center justify-center bg-white rounded-lg p-4 shadow-inner">
<img alt="Our Accreditations" className="w-full max-h-28 md:max-h-32 object-contain opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply" onerror="this.style.display='none';" src="https://i.ibb.co/SXg3wzPh/Screenshot-2026-03-04-at-5-27-56-PM.png"/>
</div>
</div>
<div className="grid grid-cols-3 gap-4 text-center relative z-10 border-t border-white/10 pt-6 mt-6">
<div className="flex flex-col items-center group cursor-default">
<div className="p-3 bg-white/5 rounded-lg border border-white/10 mb-2 group-hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-emerald-300" height="24" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="text-2xl md:text-3xl mb-1 group-hover:text-emerald-300 transition-colors tracking-tight font-sans font-medium stat-counter" data-suffix="+" data-target="1000">
              8+
            </div>
<div className="text-xs md:text-sm text-white/70 font-sans font-medium tracking-tight">
              Tax Plans
            </div>
</div>
<div className="flex flex-col group cursor-default items-center">
<div className="p-3 bg-white/5 rounded-lg border border-white/10 mb-2 group-hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-emerald-300" height="24" icon="solar:medal-ribbon-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="text-2xl md:text-3xl mb-1 group-hover:text-emerald-300 transition-colors tracking-tight font-sans font-medium stat-counter" data-suffix="+" data-target="30">
              1+
            </div>
<div className="text-xs md:text-sm text-white/70 font-sans font-medium tracking-tight">
              Years Active
            </div>
</div>
<div className="flex flex-col items-center group cursor-default">
<div className="p-3 bg-white/5 rounded-lg border border-white/10 mb-2 group-hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-emerald-300" height="24" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="text-2xl md:text-3xl mb-1 group-hover:text-emerald-300 transition-colors tracking-tight font-sans font-medium stat-counter" data-prefix="$" data-suffix="M+" data-target="10">
              $1M+
            </div>
<div className="text-xs md:text-sm text-white/70 font-sans font-medium tracking-tight">
              Saved
            </div>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-16 px-6 bg-[#022c22] border-y border-stone-800 shadow-sm">
<div className="max-w-7xl mx-auto rounded-[2rem] p-4 md:p-8 animate-on-scroll animate">
<div className="text-center mb-10">
<div className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full shadow-sm mb-6">
<span className="text-lg md:text-xl font-light tracking-[0.2em] text-white uppercase font-sans">
              Who Is This For?
            </span>
</div>
<h2 className="text-5xl md:text-6xl text-white tracking-tight font-sans font-medium">
            Designed To Help You
          </h2>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
<div className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
<iconify-icon className="text-[#487c5f] group-hover:scale-110 transition-transform" height="36" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<span className="text-xl text-stone-800 tracking-tight font-sans font-medium">
              Sole Proprietors
            </span>
</div>
<div className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
<iconify-icon className="text-[#487c5f] group-hover:scale-110 transition-transform" height="36" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<span className="text-xl text-stone-800 tracking-tight font-sans font-medium">
              Partnership Owners
            </span>
</div>
<div className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
<iconify-icon className="text-[#487c5f] group-hover:scale-110 transition-transform" height="36" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<span className="text-xl text-stone-800 tracking-tight font-sans font-medium">
              LLC Owners
            </span>
</div>
<div className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
<iconify-icon className="text-[#487c5f] group-hover:scale-110 transition-transform" height="36" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<span className="text-xl text-stone-800 tracking-tight font-sans font-medium">
              S Corp Owners
            </span>
</div>
<div className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
<iconify-icon className="text-[#487c5f] group-hover:scale-110 transition-transform" height="36" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<span className="text-xl text-stone-800 tracking-tight font-sans font-medium">
              High-Income W-2
            </span>
</div>
<div className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
<iconify-icon className="text-[#487c5f] group-hover:scale-110 transition-transform" height="36" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<span className="text-xl text-stone-800 tracking-tight font-sans font-medium">
              Creators
            </span>
</div>
<div className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
<iconify-icon className="text-[#487c5f] group-hover:scale-110 transition-transform" height="36" icon="solar:crown-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<span className="text-xl text-stone-800 tracking-tight font-sans font-medium">
              High-Net-Worth
            </span>
</div>
<div className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
<iconify-icon className="text-[#487c5f] group-hover:scale-110 transition-transform" height="36" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<span className="text-xl text-stone-800 tracking-tight font-sans font-medium">
              Real Estate Investors
            </span>
</div>
</div>

<div className="w-full flex justify-center">
<div className="relative inline-block group">
<a className="relative inline-flex h-16 w-72 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-[#34d399] focus:ring-offset-2 focus:ring-offset-[#1a2e22] group-hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]" href="#">
<span className="absolute top-1/2 left-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_35%,#34d399_50%,transparent_65%,transparent_100%)] opacity-100"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#022c22] px-6 py-2 text-xl text-white uppercase tracking-[0.15em] backdrop-blur-3xl transition-colors relative z-10 shadow-inner font-sans font-medium">
<span>Start Application</span>
</span>
</a>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-16 px-6 bg-stone-50 border-b border-stone-200/20">
<div className="animate-on-scroll max-w-3xl mx-auto animate">
<div className="text-center mb-10">
<div className="inline-block bg-stone-900 border border-stone-700/50 px-5 py-2 rounded-full shadow-md mb-6">
<span className="text-lg md:text-xl font-light tracking-[0.2em] text-white uppercase font-sans">
              Still Have Questions?
            </span>
</div>
<h2 className="text-5xl md:text-6xl text-stone-900 tracking-tight font-sans font-medium">
            Frequently Asked Questions
          </h2>
</div>
<div className="space-y-4">
<div className="bg-white border-2 border-[#487c5f] rounded-xl overflow-hidden shadow-sm transition-all duration-300">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-white">
<span className="text-2xl text-black tracking-tight font-sans font-medium">
                Does Momen Tax Services provide general tax plans, or customize
                them to my specific situation?
              </span>
<iconify-icon className="text-[#487c5f] shrink-0" height="24" icon="solar:alt-arrow-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="px-6 pb-5 text-xl text-black leading-relaxed border-t border-[#487c5f]/30 pt-5 bg-white animate-enter font-sans font-medium tracking-tight">
              We absolutely customize. Off-the-shelf tax plans do not work for
              complex financial situations. We dive deep into your specific
              entity structure, personal investments, and business operations to
              build a bespoke strategy designed uniquely for you.
            </div>
</div>
<div className="group bg-white border-2 border-[#487c5f] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:bg-stone-50 transition-all duration-300 cursor-pointer">
<div className="w-full px-6 py-5 flex items-center justify-between text-left">
<span className="text-2xl text-black tracking-tight transition-colors font-sans font-medium">
                Is it really possible to bring a tax bill down to zero or near
                zero with tax strategy?
              </span>
<iconify-icon className="text-[#487c5f] shrink-0 transition-colors" height="24" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
<div className="group bg-white border-2 border-[#487c5f] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:bg-stone-50 transition-all duration-300 cursor-pointer">
<div className="w-full px-6 py-5 flex items-center justify-between text-left">
<span className="text-2xl text-black tracking-tight transition-colors font-sans font-medium">
                How is tax strategy different from normal tax preparation?
              </span>
<iconify-icon className="text-[#487c5f] shrink-0 transition-colors" height="24" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
<div className="group bg-white border-2 border-[#487c5f] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:bg-stone-50 transition-all duration-300 cursor-pointer">
<div className="w-full px-6 py-5 flex items-center justify-between text-left">
<span className="text-2xl text-black tracking-tight transition-colors font-sans font-medium">
                What is the "Legacy Trifecta" approach?
              </span>
<iconify-icon className="text-[#487c5f] shrink-0 transition-colors" height="24" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 bg-[#022c22] border-y border-stone-800 w-full" id="reviews">
<div className="animate-on-scroll w-full px-6 flex flex-col items-center justify-center animate mb-10">
<div className="max-w-4xl text-center">
<h2 className="text-5xl md:text-6xl text-white mb-4 tracking-tight font-sans font-medium">
            Don't Take Our Word For It.
            <br/>
            Take Theirs.
          </h2>
<p className="text-2xl md:text-3xl text-white tracking-tight font-sans font-medium italic">
            Real Results From Actual Business Owners And Creators.
          </p>
</div>
</div>

<div className="max-w-6xl mx-auto w-full px-6 flex flex-col gap-8">

<div className="animate-on-scroll bg-white/95 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-10 shadow-xl flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-shadow cursor-default animate">
<div className="w-full md:w-1/2 aspect-video bg-stone-100 rounded-xl overflow-hidden relative shadow-inner border border-stone-200">
<img alt="Tax Return Result" className="w-full h-full object-cover" src="https://placehold.co/800x450/1a2e22/34d399?text=Before+and+After+Tax+Return"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-1 mb-6 text-[#487c5f]">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
</div>
<p className="text-3xl md:text-4xl text-stone-800 leading-relaxed font-sans font-medium mb-6 tracking-tight">
              "Momen Tax Services completely restructured our entities. We went
              from owing six figures to actually receiving a return. The before
              and after is incredible."
            </p>
<span className="block text-2xl text-[#487c5f] font-sans font-medium tracking-tight">
              — Sarah J., E-commerce Founder
            </span>
</div>
</div>

<div className="animate-on-scroll bg-white/95 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-10 shadow-xl flex flex-col md:flex-row-reverse gap-8 items-center hover:shadow-2xl transition-shadow cursor-default animate">
<div className="w-full md:w-2/5 aspect-[4/3] bg-stone-900 rounded-xl overflow-hidden relative shadow-inner border border-stone-800 group/vid cursor-pointer flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover/vid:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-black/20 group-hover/vid:bg-black/40 transition-colors"></div>
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center z-10 border border-white/30 group-hover/vid:bg-white/30 transition-colors">
<iconify-icon className="text-white ml-1" height="32" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center">
<p className="text-3xl md:text-4xl text-stone-800 leading-relaxed font-sans font-medium mb-6 tracking-tight">
              "By December, I already know exactly what my tax liability is—and
              it's 60% lower than my previous CPA managed. The proactive
              approach changes everything."
            </p>
<span className="block text-2xl text-[#487c5f] font-sans font-medium tracking-tight">
              — Michael T., Investor
            </span>
</div>
</div>

<div className="animate-on-scroll bg-stone-900 rounded-2xl border border-stone-800 p-10 md:p-16 shadow-xl flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors cursor-default animate relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-center gap-1 mb-8 text-emerald-400 relative z-10">
<iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon>
<iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon>
<iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon>
<iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon>
<iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon>
</div>
<p className="text-4xl md:text-6xl text-white leading-tight font-sans font-medium mb-8 tracking-tight max-w-4xl relative z-10">
            "Finally found an advisory firm that actually cares about keeping my
            money in my pocket instead of just filing paperwork. Truly elite."
          </p>
<span className="block text-2xl text-emerald-400 font-sans font-medium relative z-10 tracking-tight">
            — Jessica M., Creator
          </span>
</div>

<div className="animate-on-scroll bg-white/95 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-10 shadow-xl flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-shadow cursor-default animate">
<div className="w-full md:w-1/3 aspect-square bg-stone-100 rounded-xl overflow-hidden relative shadow-inner border border-stone-200">
<img alt="Client Image" className="w-full h-full object-cover" src="https://placehold.co/600x600/1a2e22/34d399?text=Client+Results"/>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-center">
<p className="text-3xl md:text-4xl text-stone-800 leading-relaxed font-sans font-medium mb-6 tracking-tight">
              "The 'Legacy Trifecta' isn't just a buzzword. They helped me set
              up my S-Corp properly and secure my assets. Worth every single
              penny."
            </p>
<span className="block text-2xl text-[#487c5f] font-sans font-medium tracking-tight">
              — David R., Agency Owner
            </span>
</div>
</div>
</div>
</section>
<footer className="animate-on-scroll animate text-stone-400 bg-stone-900/95 z-10 pt-12 pb-12 relative backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<span className="text-3xl tracking-tight text-white hover:text-emerald-400 transition-colors cursor-pointer font-sans font-medium">
          Momen Tax Services
        </span>
<p className="text-xl font-light font-sans tracking-tight">
          © 2024 Momen Tax Services. All rights reserved.
        </p>
<div className="flex gap-8 text-xl font-light tracking-tight">
<a className="hover:text-white hover:underline transition-all font-sans" href="#">
            Terms of Service
          </a>
<a className="hover:text-white hover:underline transition-all font-sans" href="#">
            Privacy Policy
          </a>
</div>
</div>
</footer>






    </>
  );
}
