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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
fontSize: {
'2xs': '0.65rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // DOM Elements
        const views = {
            login: document.getElementById('view-login'),
            proxy: document.getElementById('view-proxy'),
            adminGate: document.getElementById('view-admin-gate'),
            admin: document.getElementById('view-admin')
        };
        
        const loginForm = document.getElementById('login-form');
        const adminLoginForm = document.getElementById('admin-login-form');
        const loginError = document.getElementById('login-error');
        const authToggle = document.getElementById('auth-toggle');
        const authFields = document.getElementById('auth-fields');
        const btnConnect = document.getElementById('btn-connect');
        const iconConnect = document.getElementById('icon-connect');
        const networkInfo = document.getElementById('network-info');
        const proxyPassInput = document.getElementById('proxy-pass');

        // View Management
        function showView(viewName) {
            Object.values(views).forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            views[viewName].classList.remove('hidden');
            views[viewName].classList.add('flex');
            
            // Trigger reflow for opacity transition
            void views[viewName].offsetWidth;
            views[viewName].style.opacity = '1';
        }

        // Router
        function handleRoute() {
            const hash = window.location.hash;
            if (hash === '#admin') {
                showView('adminGate');
                document.getElementById('admin-pass').focus();
            } else {
                showView('login');
                loginForm.reset();
                loginError.classList.add('hidden');
            }
        }

        window.addEventListener('hashchange', handleRoute);
        window.addEventListener('load', handleRoute);

        // Login Logic
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const key = document.getElementById('login-key').value.trim();
            const name = document.getElementById('login-name').value.trim();

            if (key.startsWith('módifaxff')) {
                // Success
                loginError.classList.add('hidden');
                proxyPassInput.value = key;
                document.getElementById('proxy-user').value = name.toLowerCase().replace(/\s+/g, '_') + '_001';
                showView('proxy');
                // Reset states
                networkInfo.classList.add('hidden');
                btnConnect.innerHTML = `<span>Conectar al Servidor</span><iconify-icon icon="solar:plug-linear" class="text-lg" style="stroke-width: 1.5;"></iconify-icon>`;
                btnConnect.classList.remove('bg-neutral-800', 'text-white');
                btnConnect.classList.add('bg-white', 'text-black');
            } else {
                // Error
                loginError.classList.remove('hidden');
            }
        });

        function logout() {
            window.location.hash = '';
            handleRoute();
        }

        // Admin Login Logic
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pass = document.getElementById('admin-pass').value;
            if (pass === '117') {
                showView('admin');
                document.getElementById('admin-pass').value = '';
            } else {
                document.getElementById('admin-pass').value = '';
                document.getElementById('admin-pass').placeholder = 'Incorrecto';
                setTimeout(() => document.getElementById('admin-pass').placeholder = 'Contraseña de administrador', 2000);
            }
        });

        // Proxy UI Logic
        authToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                authFields.style.display = 'flex';
            } else {
                authFields.style.display = 'none';
            }
        });

        // Connection Animation Simulation
        btnConnect.addEventListener('click', () => {
            const isConnected = btnConnect.innerText.includes('Desconectar');
            
            if (isConnected) {
                // Disconnect
                btnConnect.innerHTML = `<span>Conectar al Servidor</span><iconify-icon icon="solar:plug-linear" class="text-lg" style="stroke-width: 1.5;"></iconify-icon>`;
                btnConnect.classList.remove('bg-neutral-900', 'text-white', 'border', 'border-neutral-800');
                btnConnect.classList.add('bg-white', 'text-black');
                networkInfo.classList.add('hidden');
            } else {
                // Connect
                btnConnect.innerHTML = `<iconify-icon icon="line-md:loading-loop" class="text-lg"></iconify-icon> <span>Estableciendo conexión...</span>`;
                
                setTimeout(() => {
                    // Ask permission (simulated)
                    if(confirm("La aplicación solicita acceso a la información de red del dispositivo para optimizar la conexión. ¿Permitir?")) {
                        networkInfo.classList.remove('hidden');
                    }
                    
                    btnConnect.innerHTML = `<span class="w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></span> <span>Desconectar</span>`;
                    btnConnect.classList.remove('bg-white', 'text-black');
                    btnConnect.classList.add('bg-neutral-900', 'text-white', 'border', 'border-neutral-800');
                }, 1500);
            }
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
      

<main className="flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-6 py-12 z-10" id="app-container">



<div className="w-full max-w-sm flex flex-col transition-opacity duration-300" id="view-login">
<div className="flex flex-col items-center mb-8">

<div className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden mb-4 relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-neutral-500 text-3xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center gap-1.5 mb-1">
<h1 className="text-lg font-medium tracking-tight text-white">Conexión Proxy</h1>
<iconify-icon className="text-neutral-300 text-base" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-normal">Acceso autorizado requerido</p>
</div>
<form className="flex flex-col gap-4 bg-neutral-950/50 p-6 rounded-xl border border-neutral-900 backdrop-blur-sm" id="login-form">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-neutral-400 font-medium ml-1">Nombre</label>
<input className="w-full bg-transparent border border-neutral-800 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors" id="login-name" placeholder="Tu nombre" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-neutral-400 font-medium ml-1">Key de acceso</label>
<input className="w-full bg-transparent border border-neutral-800 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors" id="login-key" placeholder="módifaxff-..." required="" type="password"/>
</div>
<button className="w-full bg-white text-black font-medium text-sm rounded-lg px-4 py-2.5 mt-2 hover:bg-neutral-200 transition-colors active:scale-[0.98]" type="submit">
                    Ingresar
                </button>
<div className="hidden text-xs text-red-400 text-center mt-2" id="login-error">Key inválida. Por favor contacta al administrador.</div>
</form>
<div className="mt-12 text-center text-2xs text-neutral-600 leading-relaxed max-w-[280px] mx-auto">
                Secure Proxy Configuration System<br/><br/>
                This platform allows authorized users to configure network proxy connections using secure access keys. All connections are monitored and optimized for stability and performance.
            </div>
</div>



<div className="w-full max-w-md hidden flex-col transition-opacity duration-300" id="view-proxy">
<header className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-900">
<div className="tracking-tighter font-medium text-base">SYS<span className="text-neutral-500">PRX</span></div>
<button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1" onclick="logout()">
<iconify-icon icon="solar:logout-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Salir
                </button>
</header>
<h2 className="text-xl font-medium tracking-tight mb-6">Configurar Conexión Proxy</h2>

<div className="bg-neutral-900 p-1 rounded-lg flex items-center justify-between mb-6 border border-neutral-800">
<label className="flex-1 text-center relative cursor-pointer">
<input className="peer sr-only" name="proxy_mode" type="radio" value="off"/>
<div className="text-xs font-medium text-neutral-500 py-2 rounded-md peer-checked:bg-neutral-800 peer-checked:text-white transition-all">Desactivada</div>
</label>
<label className="flex-1 text-center relative cursor-pointer">
<input checked="" className="peer sr-only" name="proxy_mode" type="radio" value="manual"/>
<div className="text-xs font-medium text-neutral-500 py-2 rounded-md peer-checked:bg-neutral-800 peer-checked:text-white transition-all">Manual</div>
</label>
<label className="flex-1 text-center relative cursor-pointer">
<input className="peer sr-only" name="proxy_mode" type="radio" value="auto"/>
<div className="text-xs font-medium text-neutral-500 py-2 rounded-md peer-checked:bg-neutral-800 peer-checked:text-white transition-all">Automática</div>
</label>
</div>

<div className="flex flex-col gap-5 mb-8">
<div className="flex gap-4">
<div className="flex flex-col gap-1.5 flex-[2]">
<label className="text-xs text-neutral-400 font-medium">Servidor</label>
<input className="w-full bg-transparent border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" type="text" value="us-east.prx.net"/>
</div>
<div className="flex flex-col gap-1.5 flex-[1]">
<label className="text-xs text-neutral-400 font-medium">Puerto</label>
<input className="w-full bg-transparent border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" type="number" value="8080"/>
</div>
</div>
<div className="flex items-center justify-between py-2 border-y border-neutral-900">
<div className="flex flex-col">
<span className="text-sm font-medium">Autenticación</span>
<span className="text-xs text-neutral-500">Requerir credenciales</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="auth-toggle" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 peer-checked:after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white border border-neutral-700 peer-checked:border-white"></div>
</label>
</div>
<div className="flex flex-col gap-4 overflow-hidden transition-all duration-300" id="auth-fields">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-neutral-400 font-medium">Usuario</label>
<input className="w-full bg-neutral-950 border border-neutral-900 rounded-lg px-3 py-2 text-sm text-neutral-300 focus:outline-none cursor-not-allowed" id="proxy-user" readonly="" type="text" value="módex_001"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-neutral-400 font-medium">Contraseña (Key)</label>
<input className="w-full bg-neutral-950 border border-neutral-900 rounded-lg px-3 py-2 text-sm text-neutral-300 focus:outline-none cursor-not-allowed" id="proxy-pass" readonly="" type="password"/>
</div>
</div>
</div>

<div className="mb-8 hidden" id="network-info">
<h3 className="text-xs font-medium text-neutral-500 mb-3 uppercase tracking-wider">Información de Red</h3>
<div className="bg-neutral-950 border border-neutral-900 rounded-xl p-4 flex flex-col gap-3">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:global-linear"></iconify-icon> IP</span>
<span className="font-medium">192.168.1.104</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:wi-fi-router-linear"></iconify-icon> Tipo de red</span>
<span className="font-medium">WiFi</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Ubicación</span>
<span className="font-medium">Madrid / ES</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:sort-vertical-linear"></iconify-icon> Señal</span>
<span className="font-medium text-white flex items-center gap-1">Fuerte <span className="w-2 h-2 rounded-full bg-white inline-block ml-1"></span></span>
</div>
<div className="flex justify-between items-center text-sm border-t border-neutral-900 pt-3 mt-1">
<span className="text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:key-linear"></iconify-icon> Duración de key</span>
<span className="font-medium text-neutral-300">7 días restantes</span>
</div>
</div>
</div>
<button className="w-full bg-white text-black font-medium text-sm rounded-lg px-4 py-3 mt-auto hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98]" id="btn-connect">
<span>Conectar al Servidor</span>
<iconify-icon className="text-lg" icon="solar:plug-linear" id="icon-connect" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>



<div className="w-full max-w-sm hidden flex-col transition-opacity duration-300" id="view-admin-gate">
<div className="flex flex-col items-center mb-8">
<div className="tracking-tighter font-medium text-xl mb-2 text-white">ADMIN<span className="text-neutral-600">SYS</span></div>
<p className="text-sm text-neutral-500 font-normal">Acceso restringido</p>
</div>
<form className="flex flex-col gap-4" id="admin-login-form">
<input className="w-full bg-transparent border-b border-neutral-800 px-2 py-3 text-center text-base text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors tracking-[0.3em]" id="admin-pass" placeholder="Contraseña de administrador" required="" type="password"/>
<button className="hidden" type="submit">Enter</button>
</form>
</div>



<div className="w-full max-w-md hidden flex-col transition-opacity duration-300 h-[90vh]" id="view-admin">
<header className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-900">
<div className="tracking-tighter font-medium text-base">ADMIN<span className="text-neutral-600">PANEL</span></div>
<button className="text-xs text-neutral-500 hover:text-white transition-colors" onclick="window.location.hash=''">Cerrar</button>
</header>
<div className="overflow-y-auto pr-2 pb-10 flex-1">
<h2 className="text-lg font-medium tracking-tight mb-5">Generador de Keys</h2>
<div className="bg-neutral-950 border border-neutral-900 p-5 rounded-xl mb-8">
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-neutral-500 font-medium">Tipo</label>
<select className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none appearance-none">
<option>Normal</option>
<option>Premium</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-neutral-500 font-medium">Duración</label>
<select className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none appearance-none">
<option>1 minuto</option>
<option>1 día</option>
<option>7 días</option>
<option>30 días</option>
</select>
</div>
</div>
<div className="flex items-end gap-3">
<div className="flex flex-col gap-1.5 flex-1">
<label className="text-xs text-neutral-500 font-medium">Cantidad</label>
<input className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none" min="1" type="number" value="1"/>
</div>
<button className="bg-white text-black font-medium text-sm rounded-lg px-4 py-2 hover:bg-neutral-200 transition-colors h-[38px] flex items-center justify-center">
                            Generar
                        </button>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium tracking-tight">Keys Generadas</h3>
<span className="text-xs text-neutral-500">Últimas 50</span>
</div>
<div className="flex flex-col gap-2">

<div className="bg-neutral-900/50 border border-neutral-800 p-3 rounded-lg flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="text-sm font-medium font-mono text-neutral-200">módifaxff-A92K-L7D3</span>
<span className="text-2xs px-2 py-0.5 rounded-full bg-white text-black font-medium">Activa</span>
</div>
<div className="flex justify-between items-center text-xs text-neutral-500">
<span>Premium • 7 días</span>
<span>Creada: Hoy</span>
</div>
</div>

<div className="bg-neutral-900/20 border border-neutral-900 p-3 rounded-lg flex flex-col gap-2 opacity-60">
<div className="flex justify-between items-start">
<span className="text-sm font-medium font-mono text-neutral-400">módifaxff-X19P-M4T9</span>
<span className="text-2xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 font-medium">Usada</span>
</div>
<div className="flex justify-between items-center text-xs text-neutral-600">
<span>Normal • 1 día</span>
<span>Por: juan_p</span>
</div>
</div>

<div className="bg-neutral-900/20 border border-neutral-900 p-3 rounded-lg flex flex-col gap-2 opacity-60">
<div className="flex justify-between items-start">
<span className="text-sm font-medium font-mono text-neutral-400 text-decoration-line-through">módifaxff-Z88K-P2L1</span>
<span className="text-2xs px-2 py-0.5 rounded-full border border-neutral-800 text-neutral-500 font-medium">Expirada</span>
</div>
<div className="flex justify-between items-center text-xs text-neutral-600">
<span>Premium • 30 días</span>
<span>Exp: 12 Oct</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
