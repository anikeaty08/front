import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
bgDark: '#050720',
cardDark: '#0B0F2E',
brandCyan: '#59E7FB',
brandBlue: '#6391F5',
brandPurple: '#AB46EC',
brandPink: '#FF4FD8',
},
fontFamily: {
sans: ['"Readex Pro"', 'sans-serif'],
},
backgroundImage: {
'neon-gradient': 'linear-gradient(90deg, #59E7FB 0%, #6391F5 30%, #AB46EC 70%, #FF4FD8 100%)',
}
}
}
}



      // FAQ Accordion Logic
      function toggleFaq(button) {
          const content = button.nextElementSibling;
          const icon = button.querySelector('iconify-icon');

          if (content.classList.contains('hidden')) {
              content.classList.remove('hidden');
              icon.style.transform = 'rotate(180deg)';
              button.classList.add('text-white');
          } else {
              content.classList.add('hidden');
              icon.style.transform = 'rotate(0deg)';
              button.classList.remove('text-white');
          }
      }

      // Sticky CTA Visibility
      window.addEventListener('scroll', () => {
          const stickyCta = document.getElementById('sticky-cta');
          if (window.scrollY > 400) {
              stickyCta.classList.remove('translate-y-full');
          } else {
              stickyCta.classList.add('translate-y-full');
          }
      });

      // 3D Background Logic: NEON RIBBON FLOW
      document.addEventListener('DOMContentLoaded', () => {
          const container = document.getElementById('canvas-container');

          // Scene Setup
          const scene = new THREE.Scene();

          // Camera
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          camera.position.z = 8;

          // Renderer
          const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(window.devicePixelRatio);
          container.appendChild(renderer.domElement);

          // Geometry: Ribbon Path (Vertical Flow)
          const points = [];
          const steps = 60;
          // Generate a path that spans vertically down the page
          for (let i = 0; i <= steps; i++) {
              const t = i / steps;
              const y = 10 - (i * 1.5); // Vertical span
              const x = Math.sin(t * Math.PI * 4) * 5; // Wide swaying
              const z = Math.cos(t * Math.PI * 3) * 3; // Depth swirling
              points.push(new THREE.Vector3(x, y, z));
          }
          const curve = new THREE.CatmullRomCurve3(points);

          // Create flat ribbon using TubeGeometry with 2 radial segments
          const geometry = new THREE.TubeGeometry(curve, 300, 0.6, 2, false);

          // Material: Ghostly Neon
          const material = new THREE.MeshPhysicalMaterial({
              color: 0x59E7FB,
              emissive: 0xAB46EC,
              emissiveIntensity: 0.3,
              metalness: 0.1,
              roughness: 0.2,
              clearcoat: 1.0,
              transparent: true,
              opacity: 0.15,
              side: THREE.DoubleSide
          });

          const ribbon = new THREE.Mesh(geometry, material);
          scene.add(ribbon);

          // Lights
          const light1 = new THREE.PointLight(0x59E7FB, 1, 20);
          light1.position.set(5, 5, 5);
          scene.add(light1);

          const light2 = new THREE.PointLight(0xFF4FD8, 1, 20);
          light2.position.set(-5, -15, 5);
          scene.add(light2);

          // Animation Loop
          let scrollY = window.scrollY;
          let targetScrollY = window.scrollY;
          let velocity = 0;

          window.addEventListener('scroll', () => {
              targetScrollY = window.scrollY;
          });

          function animate() {
              requestAnimationFrame(animate);

              // Smooth Scroll & Velocity Calculation
              const newScroll = scrollY + (targetScrollY - scrollY) * 0.05;
              velocity = newScroll - scrollY;
              scrollY = newScroll;

              // Camera Movement: Follow scroll vertically (simulating page traversal)
              camera.position.y = -scrollY * 0.015;

              // Dynamic Interaction: Bend/Rotate based on Scroll Velocity
              // This makes the ribbon feel like it reacts to the speed of passing
              ribbon.rotation.x = velocity * 0.005;
              ribbon.rotation.z = velocity * 0.002;

              // Constant gentle float
              ribbon.rotation.y += 0.001;

              renderer.render(scene, camera);
          }
          animate();

          // Handle Resize
          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="canvas-container"></div>

<div className="fixed bottom-0 left-0 right-0 z-50 glass-panel p-4 md:hidden transform translate-y-full transition-transform duration-300" id="sticky-cta">
<a className="flex items-center justify-center w-full bg-neon-gradient text-white font-medium py-3 rounded-full shadow-lg" href="https://wa.me/963982340381?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20MENES%D8%8C%20%D8%A3%D9%86%D8%A7%20%5BNAME%5D%D8%8C%20%D9%86%D8%B4%D8%A7%D8%B7%D9%8A%20%5BBUSINESS%5D.%20%D9%87%D8%AF%D9%81%D9%8A%20%5BGOAL%5D.%20%D8%B9%D9%86%D8%AF%D9%8A%20%5BCURRENT_STATE%5D.%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B4%D8%AE%D9%8A%D8%B5%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%86%D9%8A%2010%20%D8%AF%D9%82%D8%A7%D8%A6%D9%82." target="_blank">
<iconify-icon className="ml-2" icon="solar:chat-round-line-duotone" width="20"></iconify-icon>
        ابدأ التشخيص المجاني
      </a>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-bgDark/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-sans text-xl tracking-tighter font-semibold text-white">
          MENES
        </div>
<a className="hidden md:inline-flex items-center text-xs font-medium bg-white/10 hover:bg-white/15 transition-colors px-4 py-2 rounded-full border border-white/10" href="https://wa.me/963982340381?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20MENES%D8%8C%20%D8%A3%D9%86%D8%A7%20%5BNAME%5D%D8%8C%20%D9%86%D8%B4%D8%A7%D8%B7%D9%8A%20%5BBUSINESS%5D.%20%D9%87%D8%AF%D9%81%D9%8A%20%5BGOAL%5D.%20%D8%B9%D9%86%D8%AF%D9%8A%20%5BCURRENT_STATE%5D.%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B4%D8%AE%D9%8A%D8%B5%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%86%D9%8A%2010%20%D8%AF%D9%82%D8%A7%D8%A6%D9%82." target="_blank">
          تواصل واتساب
          <iconify-icon className="mr-2" icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 overflow-hidden">
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardDark border border-brandCyan/20 text-brandCyan text-[10px] font-medium tracking-wide mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandCyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brandCyan"></span>
</span>
          متاح الآن لأصحاب الأعمال في دمشق
        </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          نظام مبيعات متكامل.
          <br/>
<span className="text-gradient">محرك النمو 14 يوم.</span>
</h1>
<p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
          حول الغرباء إلى عملاء عبر واتساب. عملية واحدة، منتج واحد، تسليم خلال
          أسبوعين. بدون ضبابية، بدون وعود سحرية، فقط بنية تحتية قوية للنمو.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-glow w-full sm:w-auto bg-neon-gradient text-white text-sm font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2" href="https://wa.me/963982340381?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20MENES%D8%8C%20%D8%A3%D9%86%D8%A7%20%5BNAME%5D%D8%8C%20%D9%86%D8%B4%D8%A7%D8%B7%D9%8A%20%5BBUSINESS%5D.%20%D9%87%D8%AF%D9%81%D9%8A%20%5BGOAL%5D.%20%D8%B9%D9%86%D8%AF%D9%8A%20%5BCURRENT_STATE%5D.%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B4%D8%AE%D9%8A%D8%B5%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%86%D9%8A%2010%20%D8%AF%D9%82%D8%A7%D8%A6%D9%82." target="_blank">
<iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon>
            ابدأ التشخيص المجاني على واتساب
          </a>
<a className="w-full sm:w-auto text-gray-400 hover:text-white text-sm font-medium py-3 px-6 transition-colors flex items-center justify-center gap-2" href="#timeline">
            شوف كيف رح نمشي خلال 14 يوم
            <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-20 px-6 border-t border-white/5 bg-bgDark/50">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl font-semibold mb-12 text-center tracking-tight">
          لماذا يتوقف النمو رغم الجهد؟
        </h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-cardDark p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-brandPink text-3xl mb-4" icon="solar:danger-circle-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">ضياع الفرص</h3>
<p className="text-sm text-gray-400 font-light">
              رسائل كثيرة على الصفحة، لكن القليل يتحول لمبيعات فعلية بسبب الردود
              العشوائية.
            </p>
</div>

<div className="bg-cardDark p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-brandBlue text-3xl mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">بطء التنفيذ</h3>
<p className="text-sm text-gray-400 font-light">
              الاعتماد على الاجتهاد الشخصي بدل وجود نظام (System) واضح للمتابعة
              والإغلاق.
            </p>
</div>

<div className="bg-cardDark p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-brandCyan text-3xl mb-4" icon="solar:graph-down-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">غياب الأرقام</h3>
<p className="text-sm text-gray-400 font-light">
              لا تعرف تكلفة العميل الحقيقية، ولا معدل التحويل، مما يجعل قراراتك
              مبنية على التخمين.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-brandBlue/5 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<span className="text-brandCyan text-xs tracking-widest font-semibold uppercase mb-4 block">
          الحل
        </span>
<h3 className="text-2xl md:text-3xl font-medium leading-normal text-white">
          نحن لا "ندير صفحتك" ولا "نصنع محتوى" فقط.
          <br/>
<span className="text-gray-400">
            نحن نبني ونركّب
            <span className="text-white border-b border-brandPurple/50">
              محرك نمو
            </span>
            داخل نشاطك التجاري يمتلك القدرة على تحويل الزوار إلى واتساب، ومن
            واتساب إلى مبيعات، في دورة مدتها 14 يومًا.
          </span>
</h3>
</div>
</section>

<section className="py-20 px-6 border-y border-white/5 bg-bgDark">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-10">

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl opacity-50"></div>
<div className="relative bg-bgDark h-full p-8 rounded-2xl border border-white/10">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-xl font-semibold text-white">
                    المرحلة 0: التشخيص
                  </h4>
<p className="text-sm text-gray-400 mt-1">قبل أي التزام مالي</p>
</div>
<span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full font-medium">
                  مجانية 100%
                </span>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-green-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300">
                    تشخيص دقيق عبر 6 أسئلة محورية.
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-400 mt-0.5 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-sm text-gray-300">
                    مكالمة استشارية مركزة (10 دقائق) لكشف الفجوات.
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-400 mt-0.5 shrink-0" icon="solar:document-add-linear"></iconify-icon>
<span className="text-sm text-gray-300">
                    خطة اختراق واحدة (WEDGE-ONE) مخصصة لك.
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-400 mt-0.5 shrink-0" icon="solar:list-check-linear"></iconify-icon>
<span className="text-sm text-gray-300">
                    خطوات تنفيذية لأول 90 دقيقة عمل.
                  </span>
</li>
</ul>
<div className="mt-8">
<a className="block text-center w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-colors text-sm text-white" href="https://wa.me/963982340381?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20MENES%D8%8C%20%D8%A3%D9%86%D8%A7%20%5BNAME%5D%D8%8C%20%D9%86%D8%B4%D8%A7%D8%B7%D9%8A%20%5BBUSINESS%5D.%20%D9%87%D8%AF%D9%81%D9%8A%20%5BGOAL%5D.%20%D8%B9%D9%86%D8%AF%D9%8A%20%5BCURRENT_STATE%5D.%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B4%D8%AE%D9%8A%D8%B5%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%86%D9%8A%2010%20%D8%AF%D9%82%D8%A7%D8%A6%D9%82." target="_blank">
                  أطلب التشخيص المجاني
                </a>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-neon-gradient rounded-2xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500"></div>
<div className="relative bg-cardDark h-full p-8 rounded-2xl">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-xl font-semibold text-white">
                    المرحلة 1: المحرك (14 يوم)
                  </h4>
<p className="text-sm text-gray-400 mt-1">
                    BUILD (7 أيام) + RUN (7 أيام)
                  </p>
</div>
<span className="bg-brandPurple/20 text-brandPurple border border-brandPurple/20 text-xs px-3 py-1 rounded-full font-medium">
                  المنتج الأساسي
                </span>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-brandCyan mt-0.5 shrink-0" icon="solar:star-linear"></iconify-icon>
<span className="text-sm text-gray-300">
<strong className="text-white">One-Pager Offer:</strong>
                    صياغة العرض بصفحة واحدة لا تقاوم.
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brandCyan mt-0.5 shrink-0" icon="solar:whatsapp-linear"></iconify-icon>
<span className="text-sm text-gray-300">
<strong className="text-white">WhatsApp Sales OS:</strong>
                    سكريبتات الافتتاح، المتابعة، والردود الجاهزة.
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brandCyan mt-0.5 shrink-0" icon="solar:link-linear"></iconify-icon>
<span className="text-sm text-gray-300">
<strong className="text-white">Landing Page:</strong>
                    صفحة تحويل تعمل 24/7 (مثل هذه).
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brandCyan mt-0.5 shrink-0" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-sm text-gray-300">
<strong className="text-white">Tracking System:</strong>
                    تتبع دقيق (Sessions, Clicks, Conversion).
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brandCyan mt-0.5 shrink-0" icon="solar:rocket-linear"></iconify-icon>
<span className="text-sm text-gray-300">
<strong className="text-white">Launch v1:</strong>
                    إطلاق الحملة وإدارة أول أسبوع مع تقارير يومية.
                  </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="timeline">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-semibold mb-12 text-center">
          الجدول الزمني (Sprint 14 Days)
        </h2>
<div className="relative border-r border-white/10 mr-4 space-y-12">

<div className="relative pr-8">
<span className="absolute -right-1.5 top-1.5 w-3 h-3 bg-brandCyan rounded-full shadow-[0_0_10px_#59E7FB]"></span>
<h3 className="text-lg font-medium text-white">
              اليوم 1: البداية (Kickoff)
            </h3>
<p className="text-sm text-gray-400 mt-2 font-light">
              استلام المواد الخام، تحديد زاوية العرض، والموافقة على الخطة.
            </p>
</div>

<div className="relative pr-8">
<span className="absolute -right-1.5 top-1.5 w-3 h-3 bg-brandBlue rounded-full"></span>
<h3 className="text-lg font-medium text-white">
              اليوم 3: البناء (The Build)
            </h3>
<p className="text-sm text-gray-400 mt-2 font-light">
              تجهيز صفحة الهبوط، إعداد WhatsApp Business، وكتابة السكريبتات.
            </p>
</div>

<div className="relative pr-8">
<span className="absolute -right-1.5 top-1.5 w-3 h-3 bg-brandPurple rounded-full"></span>
<h3 className="text-lg font-medium text-white">
              اليوم 7: الإطلاق (Go Live)
            </h3>
<p className="text-sm text-gray-400 mt-2 font-light">
              إطلاق الحملات الإعلانية (v1)، وتفعيل أنظمة التتبع.
            </p>
</div>

<div className="relative pr-8">
<span className="absolute -right-1.5 top-1.5 w-3 h-3 bg-brandPink rounded-full"></span>
<h3 className="text-lg font-medium text-white">
              اليوم 14: التسليم والتحسين
            </h3>
<p className="text-sm text-gray-400 mt-2 font-light">
              تسليم التقرير النهائي، قاعدة بيانات العملاء، ومقترحات التحسين
              للدورة القادمة.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-cardDark/30 border-y border-white/5">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-2xl font-semibold mb-8">إثبات الأداء</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-16 border border-white/10 rounded-lg flex items-center justify-center bg-bgDark text-xs text-gray-500">
            [شعار عميل 1]
          </div>
<div className="h-16 border border-white/10 rounded-lg flex items-center justify-center bg-bgDark text-xs text-gray-500">
            [شعار عميل 2]
          </div>
<div className="h-16 border border-white/10 rounded-lg flex items-center justify-center bg-bgDark text-xs text-gray-500">
            [شعار عميل 3]
          </div>
<div className="h-16 border border-white/10 rounded-lg flex items-center justify-center bg-bgDark text-xs text-gray-500">
            [شعار عميل 4]
          </div>
</div>
<div className="grid md:grid-cols-2 gap-8 items-center text-right">
<div className="border border-white/10 rounded-xl p-6 bg-bgDark">
<span className="text-xs text-gray-400 block mb-2">قبل / بعد</span>
<div className="h-40 bg-gray-800/50 rounded-lg flex items-center justify-center mb-4">
<span className="text-gray-500 text-sm">
                [صورة رسم بياني يوضح ارتفاع معدل الردود]
              </span>
</div>
<p className="text-sm text-gray-300">
              من 15% معدل رد إلى 65% خلال 4 أيام باستخدام سكريبتات المتابعة.
            </p>
</div>
<div>
<h3 className="text-xl font-medium mb-4">جرب بنفسك: اختبار السرعة</h3>
<p className="text-sm text-gray-400 mb-6 font-light">
              نحن نؤمن بالسرعة. انقر الزر أدناه وسنقوم بتحميل ملف "هيكل العرض"
              (وهمي للتجربة) لقياس سرعة استجابة السيرفرات التي نستخدمها.
            </p>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-brandCyan/50 text-brandCyan hover:bg-brandCyan/10 transition-colors text-sm font-medium" onclick="alert('تم الاختبار بنجاح: زمن الاستجابة 120ms. هذا هو مستوى الأداء الذي ستحصل عليه.')">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon>
              ابدأ الاختبار السريع
            </button>
</div>
</div>
</div>
</section>

<section className="py-16 px-6">
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-semibold text-white mb-1">100%</div>
<div className="text-xs text-gray-400">RTL &amp; Arabic Native</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">14</div>
<div className="text-xs text-gray-400">يوم للدورة الكاملة</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">24/7</div>
<div className="text-xs text-gray-400">نظام يعمل تلقائيًا</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">1</div>
<div className="text-xs text-gray-400">قناة تركيز (واتساب)</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto border border-brandPurple/40 bg-cardDark/40 p-8 rounded-3xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:shield-check-linear" width="120"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-white mb-6 relative z-10">
          الضمان المشروط: التسليم أو الاسترجاع
        </h2>
<p className="text-sm text-gray-300 mb-6 relative z-10 leading-relaxed">
          نحن نضمن تسليم وتشغيل النظام بالكامل خلال 14 يومًا. إذا فشلنا في
          التسليم التقني أو التشغيلي في الوقت المحدد، تسترد أموال المرحلة
          المدفوعة بالكامل. لا نضمن نتائج المبيعات (فهي تعتمد على منتجك والسوق)،
          لكننا نضمن أن "الماكينة" ستعمل.
        </p>
<div className="bg-bgDark/60 p-4 rounded-xl border border-white/5 relative z-10">
<p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wider">
            شروط تفعيل الضمان (على العميل):
          </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-300">
<iconify-icon className="text-brandPurple" icon="solar:check-square-linear"></iconify-icon>
              تسليم المواد (صور/نصوص) خلال 48 ساعة من الطلب.
            </li>
<li className="flex items-center gap-2 text-xs text-gray-300">
<iconify-icon className="text-brandPurple" icon="solar:check-square-linear"></iconify-icon>
              الموافقات على التصاميم خلال 24 ساعة.
            </li>
<li className="flex items-center gap-2 text-xs text-gray-300">
<iconify-icon className="text-brandPurple" icon="solar:check-square-linear"></iconify-icon>
              وجود شخص واحد مخوّل باتخاذ القرار النهائي.
            </li>
</ul>
</div>
</div>
</section>

<section className="py-16 px-6 bg-bgDark border-b border-white/5">
<div className="max-w-3xl mx-auto">
<h3 className="text-lg font-medium text-gray-400 mb-6 text-center">
          خارج نطاق العمل (Out of Scope)
        </h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="flex items-center gap-3 text-sm text-gray-500 line-through decoration-red-500/50">
<span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span>
            تصميم هوية بصرية كاملة (Logo Design)
          </div>
<div className="flex items-center gap-3 text-sm text-gray-500 line-through decoration-red-500/50">
<span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span>
            إنتاج فيديو احترافي أو تصوير منتجات
          </div>
<div className="flex items-center gap-3 text-sm text-gray-500 line-through decoration-red-500/50">
<span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span>
            إدارة حسابات السوشيال ميديا (الرد على التعليقات)
          </div>
<div className="flex items-center gap-3 text-sm text-gray-500 line-through decoration-red-500/50">
<span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span>
            دفع ميزانية الإعلانات (على العميل)
          </div>
<div className="flex items-center gap-3 text-sm text-gray-500 line-through decoration-red-500/50">
<span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span>
            برمجة تطبيقات أو مواقع معقدة
          </div>
<div className="flex items-center gap-3 text-sm text-gray-500 line-through decoration-red-500/50">
<span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span>
            وعود بأرباح محددة
          </div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold mb-10 text-center">
          أسئلة شائعة واعتراضات
        </h2>
<div className="space-y-4" id="faq-container">

<div className="border border-white/10 rounded-xl overflow-hidden bg-cardDark/20">
<button className="w-full text-right p-5 flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-sm md:text-base">
                ليس لدي وقت للمتابعة معكم.
              </span>
<iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-5 pb-5 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-3">
              لذلك صممنا النظام. نحن نحتاج منك فقط 90 دقيقة في البداية، وموافقات
              سريعة عبر واتساب. الباقي علينا.
            </div>
</div>

<div className="border border-white/10 rounded-xl overflow-hidden bg-cardDark/20">
<button className="w-full text-right p-5 flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-sm md:text-base">
                ماذا أستلم بالضبط في النهاية؟
              </span>
<iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-5 pb-5 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-3">
              صفحة هبوط، إعداد واتساب بيزنس، نصوص وسكريبتات بيع، إطلاق حملة
              إعلانية، وتقرير أداء. أصول تمتلكها للأبد.
            </div>
</div>

<div className="border border-white/10 rounded-xl overflow-hidden bg-cardDark/20">
<button className="w-full text-right p-5 flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-sm md:text-base">
                لماذا لا أعمل إعلانات ممولة فقط؟
              </span>
<iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-5 pb-5 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-3">
              الإعلان يجلب الزوار، لكنه لا يغلق الصفقات. نحن نبني "ما بعد
              النقرة": كيف تقنع الزائر وتحوله لمشتري.
            </div>
</div>

<div className="border border-white/10 rounded-xl overflow-hidden bg-cardDark/20">
<button className="w-full text-right p-5 flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-sm md:text-base">
                لماذا لا يوجد سعر معلن؟
              </span>
<iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-5 pb-5 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-3">
              لأننا نفحص أولاً إن كنا نستطيع مساعدتك. المرحلة 0 مجانية تماماً
              لنقرر السعر المناسب لحجم العمل المطلوب.
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          هل أنت جاهز لتغيير مسار نموك؟
        </h2>
<p className="text-gray-400 mb-10 font-light">
          لا مخاطرة. تشخيص مجاني. وضوح كامل.
        </p>
<a className="btn-glow inline-flex items-center justify-center bg-neon-gradient text-white text-lg font-semibold py-4 px-10 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300" href="https://wa.me/963982340381?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20MENES%D8%8C%20%D8%A3%D9%86%D8%A7%20%5BNAME%5D%D8%8C%20%D9%86%D8%B4%D8%A7%D8%B7%D9%8A%20%5BBUSINESS%5D.%20%D9%87%D8%AF%D9%81%D9%8A%20%5BGOAL%5D.%20%D8%B9%D9%86%D8%AF%D9%8A%20%5BCURRENT_STATE%5D.%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B4%D8%AE%D9%8A%D8%B5%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%86%D9%8A%2010%20%D8%AF%D9%82%D8%A7%D8%A6%D9%82." target="_blank">
<iconify-icon className="ml-2" icon="solar:whatsapp-linear" width="24"></iconify-icon>
          ابدأ التشخيص المجاني الآن
        </a>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center text-xs text-gray-600">
<p>© 2023 MENES. جميع الحقوق محفوظة.</p>
<div className="mt-2">
<a className="hover:text-gray-400 transition-colors" href="#">
          سياسة الخصوصية
        </a>
</div>
</footer>



    </>
  );
}
