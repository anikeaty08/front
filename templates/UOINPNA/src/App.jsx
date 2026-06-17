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
      
    // Init icons
    lucide.createIcons();

    // Screen navigation
    function showScreen(id) {
      document.querySelectorAll('#screens > section').forEach(s => s.classList.add('hidden'));
      document.getElementById(id).classList.remove('hidden');
      // Hide bottom nav for welcome & login
      const hideNav = ['welcomeScreen', 'loginScreen'].includes(id);
      document.getElementById('bottomNav').style.display = hideNav ? 'none' : 'flex';
      window.scrollTo(0, 0);
    }

    // ParticlesJS on welcome
    particlesJS('welcomeParticles',{
      particles:{number:{value:50},color:{value:"#fc4b08"},
      shape:{type:"circle"},opacity:{value:.3},size:{value:3},
      move:{enable:true,speed:1}},interactivity:{events:{onhover:{enable:true,mode:"repulse"}}},retina_detect:true});

    // Charts data
    const ctxROI = document.getElementById('roiChart').getContext('2d');
    const ctxConv = document.getElementById('convChart').getContext('2d');
    const ctxClick = document.getElementById('clickChart').getContext('2d');
    const labels = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
    const baseConfig = (color)=>({
      type:'line',
      data:{labels, datasets:[{data:[150,165,170,160,180,190,200], fill:false, tension:.4, borderColor:color}]},
      options:{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}
    });
    new Chart(ctxROI, baseConfig('#fc4b08'));
    new Chart(ctxConv, baseConfig('#4ade80'));
    new Chart(ctxClick, baseConfig('#60a5fa'));
  
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
      

<main className="flex-1 overflow-y-auto" id="screens">

<section className="w-full h-full flex flex-col items-center justify-center space-y-8 px-6" id="welcomeScreen">
<div className="absolute inset-0 -z-10" id="welcomeParticles"></div>
<div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#fc4b08]/70 backdrop-blur-sm shadow-xl">
<span className="text-3xl font-semibold tracking-tight">MC</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight">Tus datos, tus decisiones</h1>
<div className="space-y-4 w-full max-w-xs">
<button className="w-full py-3 rounded-lg bg-[#fc4b08] hover:bg-[#fc4b08]/80 transition-colors font-medium" onclick="showScreen('loginScreen')">
          Iniciar sesión
        </button>
<button className="w-full py-3 rounded-lg border border-[#fc4b08] hover:bg-[#fc4b08]/10 transition-colors font-medium" onclick="alert('Flow de registro pendiente')">
          Registrarse
        </button>
</div>
</section>

<section className="hidden w-full h-full flex flex-col justify-center px-8 space-y-8" id="loginScreen">
<div className="text-center space-y-2">
<h2 className="text-3xl font-semibold tracking-tight">Bienvenido a MetricaCore</h2>
<p className="text-sm text-[#f1f2f2]/70">Accede a tus métricas en segundos</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();showScreen('dashboardScreen')">
<div className="space-y-2">
<label className="text-sm">Correo electrónico</label>
<input className="w-full py-3 px-4 rounded-lg bg-[#0b1130] border border-[#1e2a69] focus:ring-2 focus:ring-[#fc4b08] outline-none" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm">Contraseña</label>
<input className="w-full py-3 px-4 rounded-lg bg-[#0b1130] border border-[#1e2a69] focus:ring-2 focus:ring-[#fc4b08] outline-none" required="" type="password"/>
</div>
<button className="w-full py-3 rounded-lg bg-[#fc4b08] hover:bg-[#fc4b08]/80 transition-colors font-medium" type="submit">
          Iniciar sesión
        </button>
<button className="block text-center w-full text-xs mt-2 hover:text-[#fc4b08] transition-colors" onclick="alert('Recuperación de contraseña...')" type="button">
          ¿Olvidaste tu contraseña?
        </button>
</form>
</section>

<section className="hidden h-full flex flex-col pb-20" id="dashboardScreen">
<header className="px-6 pt-6 pb-4 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Dashboard</h2>
<button className="p-2 rounded-full hover:bg-white/10" onclick="showScreen('profileScreen')">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
</header>
<div className="grid grid-cols-2 gap-4 px-6">
<div className="rounded-xl bg-gradient-to-br from-[#24327e] to-[#182052] p-4 flex flex-col space-y-1 shadow-lg">
<span className="text-xs uppercase text-[#f1f2f2]/60">Campañas activas</span>
<span className="text-2xl font-semibold tracking-tight">12</span>
</div>
<div className="rounded-xl bg-gradient-to-br from-[#24327e] to-[#182052] p-4 flex flex-col space-y-1 shadow-lg">
<span className="text-xs uppercase text-[#f1f2f2]/60">ROI promedio</span>
<span className="text-2xl font-semibold tracking-tight">158%</span>
</div>
<div className="col-span-2 rounded-xl bg-gradient-to-br from-[#24327e] to-[#182052] p-4 flex flex-col space-y-1 shadow-lg">
<span className="text-xs uppercase text-[#f1f2f2]/60">Productos en revisión</span>
<span className="text-2xl font-semibold tracking-tight">7</span>
</div>
</div>
</section>

<section className="hidden h-full flex flex-col pb-20" id="campaignsScreen">
<header className="px-6 pt-6 pb-4 flex items-center space-x-2">
<button className="p-2 rounded-full hover:bg-white/10" onclick="showScreen('dashboardScreen')">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<h2 className="text-lg font-semibold tracking-tight">Campañas</h2>
</header>
<div className="space-y-4 px-6">

<div className="cursor-pointer rounded-xl border border-white/10 p-4 bg-[#0b1130] hover:border-[#fc4b08]/50 transition flex flex-col space-y-2" onclick="showScreen('campaignDetailScreen')">
<div className="flex items-center justify-between">
<h3 className="font-medium">Lanzamiento Q3</h3>
<span className="text-xs px-2 py-1 rounded-full bg-[#fc4b08]/20 text-[#fc4b08]">Activa</span>
</div>
<div className="text-sm flex items-center justify-between">
<span>ROI: <strong>180%</strong></span>
<span>Clics: <strong>12.4K</strong></span>
</div>
</div>
<div className="rounded-xl border border-white/10 p-4 bg-[#0b1130] hover:border-[#fc4b08]/50 transition flex flex-col space-y-2">
<div className="flex items-center justify-between">
<h3 className="font-medium">Retargeting 2024</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white">Pausada</span>
</div>
<div className="text-sm flex items-center justify-between">
<span>ROI: <strong>95%</strong></span>
<span>Clics: <strong>8.1K</strong></span>
</div>
</div>
</div>
</section>

<section className="hidden h-full flex flex-col pb-20" id="campaignDetailScreen">
<header className="px-6 pt-6 pb-4 flex items-center space-x-2">
<button className="p-2 rounded-full hover:bg-white/10" onclick="showScreen('campaignsScreen')">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<h2 className="text-lg font-semibold tracking-tight">Lanzamiento Q3</h2>
</header>
<div className="space-y-6 px-6">

<div className="rounded-xl border border-white/10 bg-[#0b1130] p-4">
<h4 className="text-sm font-medium mb-2">ROI</h4>
<div>
<canvas id="roiChart"></canvas>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-[#0b1130] p-4">
<h4 className="text-sm font-medium mb-2">Conversiones</h4>
<div>
<canvas id="convChart"></canvas>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-[#0b1130] p-4">
<h4 className="text-sm font-medium mb-2">Clics</h4>
<div>
<canvas id="clickChart"></canvas>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-[#fc4b08] hover:bg-[#fc4b08]/80 transition-colors font-medium" onclick="showScreen('suggestionsScreen')">
          Sugerencia de acción
        </button>
</div>
</section>

<section className="hidden h-full flex flex-col pb-20" id="suggestionsScreen">
<header className="px-6 pt-6 pb-4 flex items-center space-x-2">
<button className="p-2 rounded-full hover:bg-white/10" onclick="showScreen('campaignDetailScreen')">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<h2 className="text-lg font-semibold tracking-tight">Recomendaciones</h2>
</header>
<div className="px-6 space-y-4">
<div className="rounded-xl border border-white/10 bg-[#0b1130] p-4 space-y-2">
<p className="text-sm">El ROI ha disminuido un 20 % en los últimos 7 días. Considera ajustar el presupuesto o pausar los anuncios de menor rendimiento.</p>
<p className="text-sm">Las conversiones desde dispositivos móviles superan el 65 %. Optimiza creatividades para mobile.</p>
</div>
<div className="grid grid-cols-2 gap-4 pt-2">
<button className="py-3 rounded-lg bg-red-600/80 hover:bg-red-600 transition-colors text-sm font-medium" onclick="alert('Campaña pausada')">
            Pausar campaña
          </button>
<button className="py-3 rounded-lg bg-[#fc4b08] hover:bg-[#fc4b08]/80 transition-colors text-sm font-medium" onclick="alert('Abriendo editor de presupuesto')">
            Modificar presupuesto
          </button>
<button className="col-span-2 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium" onclick="showScreen('campaignDetailScreen')">
            Ignorar
          </button>
</div>
</div>
</section>

<section className="hidden h-full flex flex-col pb-20" id="profileScreen">
<header className="px-6 pt-6 pb-4 flex items-center space-x-2">
<button className="p-2 rounded-full hover:bg-white/10" onclick="showScreen('dashboardScreen')">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<h2 className="text-lg font-semibold tracking-tight">Perfil</h2>
</header>
<div className="px-6 space-y-6">
<div className="flex items-center space-x-4">
<img alt="avatar" className="w-16 h-16 rounded-full object-cover" src="https://source.unsplash.com/64x64?face"/>
<div>
<h3 className="font-medium">María González</h3>
<p className="text-sm text-[#f1f2f2]/70">maria@metricacore.com</p>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-[#0b1130] divide-y divide-white/10">
<button className="w-full flex items-center justify-between px-4 py-4 hover:bg-white/5 text-sm">
            Configuración de cuenta <i className="w-4 h-4" data-lucide="settings"></i>
</button>
<button className="w-full flex items-center justify-between px-4 py-4 hover:bg-white/5 text-sm text-red-400" onclick="showScreen('welcomeScreen')">
            Cerrar sesión <i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</section>
</main>

<nav className="sticky bottom-0 inset-x-0 h-16 bg-[#0b1130] border-t border-white/10 flex justify-around items-center backdrop-blur-md" id="bottomNav">
<button className="flex flex-col items-center gap-1 text-xs" onclick="showScreen('dashboardScreen')">
<i className="w-5 h-5" data-lucide="home"></i>
      Inicio
    </button>
<button className="flex flex-col items-center gap-1 text-xs" onclick="showScreen('campaignsScreen')">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
      Reportes
    </button>
<button className="flex flex-col items-center gap-1 text-xs" onclick="alert('Alertas...')">
<i className="w-5 h-5" data-lucide="bell"></i>
      Alertas
    </button>
<button className="flex flex-col items-center gap-1 text-xs" onclick="showScreen('profileScreen')">
<i className="w-5 h-5" data-lucide="user"></i>
      Perfil
    </button>
</nav>


    </>
  );
}
