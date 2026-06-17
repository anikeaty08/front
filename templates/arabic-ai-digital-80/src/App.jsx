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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const robot = document.getElementById('robot-core');
        const contentPanel = document.getElementById('content-panel');
        const panelTitle = document.getElementById('panel-title');
        const panelDesc = document.getElementById('panel-desc');
        const panelIcon = document.getElementById('panel-icon');
        
        const services = {
            'dev': {
                title: 'تطوير البرمجيات والأنظمة',
                desc: 'نقدم حلولاً برمجية متكاملة تشمل تصميم المواقع الإلكترونية، تطبيقات الهواتف الذكية، وأنظمة الإدارة المتقدمة مثل CRM, HRMS, ERP و SPC. نبني أنظمة قابلة للتوسع وآمنة.',
                icon: 'solar:code-circle-linear',
                position: 'translate(-120px, -80px)' // Move Top-Left (RTL logic inverted visually)
            },
            'media': {
                title: 'الإنتاج الإعلامي والإعلانات ثلاثية الأبعاد',
                desc: 'نحول الأفكار إلى واقع بصري مذهل من خلال إنتاج المحتوى الرقمي المبتكر وتصميم إعلانات روبوتية ثلاثية الأبعاد تجذب الانتباه وتعزز هوية علامتك التجارية.',
                icon: 'solar:videocamera-record-linear',
                position: 'translate(120px, -80px)' // Move Top-Right
            },
            'ai': {
                title: 'استشارات الذكاء الاصطناعي',
                desc: 'نساعد الشركات على تبني تقنيات المستقبل من خلال استشارات متخصصة في الذكاء الاصطناعي، تعلم الآلة، وأتمتة العمليات لزيادة الكفاءة وتقليل التكاليف.',
                icon: 'solar:brain-linear',
                position: 'translate(0px, 80px)' // Move Down
            }
        };

        function activateService(type) {
            const service = services[type];
            
            // 1. Move Robot
            robot.style.transform = `${service.position} scale(0.8)`;
            
            // 2. Add processing delay for effect
            setTimeout(() => {
                // Show content
                panelTitle.innerText = service.title;
                panelDesc.innerText = service.desc;
                panelIcon.innerHTML = `<iconify-icon icon="${service.icon}"></iconify-icon>`;
                
                contentPanel.classList.remove('opacity-0', 'pointer-events-none');
            }, 600);
        }

        function closeService() {
            // Hide Content
            contentPanel.classList.add('opacity-0', 'pointer-events-none');
            
            // Return Robot to center
            setTimeout(() => {
                robot.style.transform = 'translate(0, 0) scale(1)';
            }, 300);
        }

        function switchView(viewName) {
            const home = document.getElementById('view-home');
            const persona = document.getElementById('view-persona');

            if (viewName === 'home') {
                home.classList.remove('hidden');
                persona.classList.add('hidden');
                setTimeout(() => home.classList.remove('opacity-0'), 50);
            } else {
                home.classList.add('opacity-0');
                setTimeout(() => {
                    home.classList.add('hidden');
                    persona.classList.remove('hidden');
                }, 500);
            }
        }
    
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center text-white font-bold tracking-tighter">
                DS
            </div>
<span className="text-lg font-medium tracking-tight text-white">DIGITAL<span className="text-slate-500">SOLUTIONS</span></span>
</div>
<nav className="hidden md:flex gap-6 text-sm text-slate-400">
<button className="hover:text-white transition-colors" onclick="switchView('home')">الرئيسية</button>
<button className="hover:text-white transition-colors" onclick="switchView('persona')">فريق العمل</button>
<button className="hover:text-white transition-colors">اتصل بنا</button>
</nav>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<main className="flex-grow flex items-center justify-center relative w-full h-screen overflow-hidden transition-opacity duration-500" id="view-home">

<div className="relative w-full max-w-4xl aspect-video flex items-center justify-center">

<div className="absolute border border-white/5 rounded-full w-[600px] h-[600px] animate-spin duration-[20s] linear opacity-30"></div>
<div className="absolute border border-white/5 rounded-full w-[400px] h-[400px] animate-spin duration-[15s] linear opacity-40 border-dashed"></div>

<div className="absolute z-20 transition-all duration-700 ease-in-out transform flex flex-col items-center justify-center cursor-pointer group" id="robot-core">
<div className="relative w-24 h-24 glass rounded-full flex items-center justify-center robot-glow robot-idle group-hover:scale-110 transition-transform">
<div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl"></div>
<iconify-icon className="text-indigo-400 text-5xl" icon="solar:smart-vacuum-cleaner-2-linear"></iconify-icon>

<div className="absolute inset-0 overflow-hidden rounded-full opacity-20">
<div className="w-full h-[2px] bg-cyan-400 absolute animate-[scan_2s_infinite]"></div>
</div>
</div>
<div className="mt-4 text-center opacity-70 group-hover:opacity-100 transition-opacity">
<p className="text-xs text-indigo-300 font-medium tracking-widest uppercase">AI Assistant</p>
<p className="text-sm text-white">جاهز للأوامر</p>
</div>
</div>


<button className="absolute top-10 left-20 z-10 p-4 glass rounded-2xl hover:bg-white/10 transition-all group w-48 text-right transform hover:-translate-y-1" onclick="activateService('dev')">
<div className="flex items-center justify-end gap-3 mb-2">
<span className="text-sm font-medium text-white">تطوير البرمجيات</span>
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-400 leading-relaxed">حلول CRM, ERP, HRMS مخصصة.</p>
</button>

<button className="absolute top-10 right-20 z-10 p-4 glass rounded-2xl hover:bg-white/10 transition-all group w-48 text-right transform hover:-translate-y-1" onclick="activateService('media')">
<div className="flex items-center justify-end gap-3 mb-2">
<span className="text-sm font-medium text-white">المحتوى الرقمي</span>
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-400 leading-relaxed">إنتاج إعلامي وإعلانات روبوتية 3D.</p>
</button>

<button className="absolute bottom-20 z-10 p-4 glass rounded-2xl hover:bg-white/10 transition-all group w-56 text-center transform hover:-translate-y-1" onclick="activateService('ai')">
<div className="flex items-center justify-center gap-3 mb-2">
<span className="text-sm font-medium text-white">استشارات الذكاء الاصطناعي</span>
<div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
<iconify-icon icon="solar:brain-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-400 leading-relaxed">تحليل البيانات والأتمتة الذكية.</p>
</button>

<div className="absolute inset-0 z-30 pointer-events-none opacity-0 transition-opacity duration-500 flex items-center justify-center bg-black/60 backdrop-blur-md rounded-3xl border border-white/5 m-4" id="content-panel">
<div className="pointer-events-auto max-w-lg w-full p-8 text-center">
<div className="mx-auto w-16 h-16 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 text-3xl text-indigo-400" id="panel-icon"></div>
<h2 className="text-2xl font-medium text-white mb-4 tracking-tight" id="panel-title"></h2>
<p className="text-slate-400 leading-7 mb-8 text-sm font-light" id="panel-desc"></p>
<button className="px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-colors" onclick="closeService()">العودة للرئيسية</button>
</div>
</div>
</div>
</main>

<section className="hidden min-h-screen pt-24 pb-12 px-6 flex flex-col items-center relative w-full overflow-y-auto" id="view-persona">
<div className="max-w-5xl w-full mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-light tracking-tight text-white mb-2">فريقنا المبدع</h2>
<p className="text-slate-400 text-sm">استكشف خبرات ومهارات الفريق عبر الخريطة التفاعلية</p>
</div>

<div className="relative w-full flex flex-col items-center gap-12">

<div className="relative z-20 group">
<div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/20">
<img alt="Employee" className="w-full h-full rounded-full object-cover border-4 border-black" src="https://ui-avatars.com/api/?name=Ahmed+Ali&amp;background=0f172a&amp;color=fff&amp;size=256"/>
</div>
<div className="text-center mt-4">
<h3 className="text-xl font-medium text-white">أحمد علي</h3>
<p className="text-indigo-400 text-sm">كبير مهندسي البرمجيات</p>
</div>

<div className="absolute top-1/2 -right-16 w-16 h-[1px] bg-gradient-to-l from-transparent to-indigo-500/50 hidden md:block"></div>
<div className="absolute top-1/2 -left-16 w-16 h-[1px] bg-gradient-to-r from-transparent to-indigo-500/50 hidden md:block"></div>
<div className="absolute -bottom-16 left-1/2 w-[1px] h-16 bg-gradient-to-t from-transparent to-indigo-500/50 hidden md:block"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">

<div className="flex flex-col gap-4 relative md:items-end">
<div className="glass p-5 rounded-2xl w-full md:w-64 border-r-2 border-indigo-500/50 relative">

<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:code-square-linear"></iconify-icon>
<h4 className="text-white font-medium text-sm">المهارات التقنية</h4>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md bg-white/5 text-xs text-slate-300 border border-white/5">React.js</span>
<span className="px-2 py-1 rounded-md bg-white/5 text-xs text-slate-300 border border-white/5">Node.js</span>
<span className="px-2 py-1 rounded-md bg-white/5 text-xs text-slate-300 border border-white/5">Python AI</span>
<span className="px-2 py-1 rounded-md bg-white/5 text-xs text-slate-300 border border-white/5">Three.js</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4 relative items-center md:pt-12 order-last md:order-none">
<div className="glass p-5 rounded-2xl w-full md:w-72 border-t-2 border-purple-500/50 text-center">
<div className="flex items-center justify-center gap-3 mb-3">
<iconify-icon className="text-purple-400 text-xl" icon="solar:rocket-2-linear"></iconify-icon>
<h4 className="text-white font-medium text-sm">أبرز المشاريع</h4>
</div>
<ul className="text-xs text-slate-400 space-y-2 text-right">
<li className="flex items-start gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
<span>نظام ERP سحابي لشركة لوجستية كبرى.</span>
</li>
<li className="flex items-start gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
<span>منصة تعليمية تعتمد على الذكاء الاصطناعي.</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col gap-4 relative md:items-start">
<div className="glass p-5 rounded-2xl w-full md:w-64 border-l-2 border-cyan-500/50">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:case-round-minimalistic-linear"></iconify-icon>
<h4 className="text-white font-medium text-sm">الخبرات العملية</h4>
</div>
<div className="space-y-3">
<div>
<p className="text-white text-xs font-medium">كبير مطورين</p>
<p className="text-[10px] text-slate-500">2020 - الحالي</p>
</div>
<div>
<p className="text-white text-xs font-medium">مطور واجهات</p>
<p className="text-[10px] text-slate-500">2017 - 2020</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
