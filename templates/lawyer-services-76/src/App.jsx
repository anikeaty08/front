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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
navy: {
50: '#f0f4f8',
100: '#d9e2ec',
200: '#bcccdc',
300: '#9fb3c8',
400: '#829ab1',
500: '#627d98',
600: '#486581',
700: '#334e68',
800: '#243b53',
900: '#102a43',
},
gold: {
500: '#c5a059',
600: '#b08d4b',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'fade-in': 'fadeIn 1s ease-out both',
'zoom-slow': 'zoomSlow 20s linear infinite alternate',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
zoomSlow: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}



(function() {
// Store original methods to restore later
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
const originalGetContext = HTMLCanvasElement.prototype.getContext;
// Disable requestAnimationFrame during loading
window.requestAnimationFrame = function(callback) {
// Return a fake ID and don't execute the callback
return -1;
};
// Disable setTimeout for short intervals (likely animations)
window.setTimeout = function(callback, delay) {
// Only disable short timeouts that are likely animations
if (delay < 100) {
return -1;
}
return originalSetTimeout.apply(this, arguments);
};
// Disable setInterval (likely animations)
window.setInterval = function(callback, delay) {
// Disable all intervals during loading
return -1;
};
// Disable canvas rendering
HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
const context = originalGetContext.call(this, contextType, contextAttributes);
if (!context) return context;
// For 2D context, override drawing methods
if (contextType === '2d') {
const originalMethods = {};
const drawingMethods = [
'clearRect', 'fillRect', 'strokeRect', 'fillText', 'strokeText',
'drawImage', 'putImageData', 'fill', 'stroke', 'arc', 'arcTo',
'beginPath', 'closePath', 'lineTo', 'moveTo', 'quadraticCurveTo',
'bezierCurveTo', 'rect', 'ellipse'
];
drawingMethods.forEach(method => {
if (typeof context[method] === 'function') {
originalMethods[method] = context[method];
context[method] = function() {
// Do nothing - disable drawing during loading
return this;
};
}
});
// Store original methods for potential restoration
context._originalMethods = originalMethods;
}
// For WebGL context, override key methods
else if (contextType === 'webgl' || contextType === 'webgl2' || contextType === 'experimental-webgl') {
const originalMethods = {};
const webglMethods = [
'clear', 'drawArrays', 'drawElements', 'useProgram', 'bindBuffer',
'bindTexture', 'bindFramebuffer', 'viewport', 'enable', 'disable'
];
webglMethods.forEach(method => {
if (typeof context[method] === 'function') {
originalMethods[method] = context[method];
context[method] = function() {
// Do nothing - disable WebGL operations during loading
return this;
};
}
});
// Store original methods for potential restoration
context._originalMethods = originalMethods;
}
return context;
};
// Disable Three.js specific functionality
const disableThreeJS = function() {
// Wait for Three.js to potentially load
setTimeout(() => {
if (typeof THREE !== 'undefined') {
// Override Three.js WebGLRenderer render method
if (THREE.WebGLRenderer) {
const originalRender = THREE.WebGLRenderer.prototype.render;
THREE.WebGLRenderer.prototype.render = function() {
// Do nothing - disable rendering during loading
return this;
};
THREE.WebGLRenderer.prototype._originalRender = originalRender;
}
// Override Animation Mixer
if (THREE.AnimationMixer) {
const originalUpdate = THREE.AnimationMixer.prototype.update;
THREE.AnimationMixer.prototype.update = function() {
// Do nothing - disable animations during loading
return this;
};
THREE.AnimationMixer.prototype._originalUpdate = originalUpdate;
}
}
}, 100);
};
// Apply Three.js disabling
disableThreeJS();
// Disable Spline functionality during loading
const disableSpline = function() {
// Hide any existing spline viewers immediately
const hideSplineElements = () => {
const splineSelectors = [
'spline-viewer',
'[data-spline]',
'iframe[src*="spline.design"]',
'iframe[src*="my.spline.design"]',
'embed[src*="spline.design"]',
'embed[src*="my.spline.design"]',
'object[data*="spline.design"]',
'object[data*="my.spline.design"]'
];
splineSelectors.forEach(selector => {
const elements = document.querySelectorAll(selector);
elements.forEach(el => {
el.style.display = 'none';
el.style.visibility = 'hidden';
});
});
};
// Hide existing elements immediately
hideSplineElements();
// Monitor for new spline elements being added
const observer = new MutationObserver(hideSplineElements);
// Ensure document.body is available before observing
if (document.body instanceof Node) {
observer.observe(document.body, {
childList: true,
subtree: true,
attributes: true,
attributeFilter: ['src', 'data']
});
}
// Disable Spline runtime if it exists
if (typeof window.Spline !== 'undefined') {
const originalSpline = window.Spline;
window.Spline = function() {
// Do nothing - disable Spline initialization during loading
return {
load: () => Promise.resolve(),
setSize: () => {},
dispose: () => {},
play: () => {},
pause: () => {},
stop: () => {}
};
};
window.Spline._originalSpline = originalSpline;
}
// Prevent new Spline instances from being created
Object.defineProperty(window, 'Spline', {
set: function(value) {
// Store original but don't activate during loading
window._SplineOriginal = value;
},
get: function() {
// Return dummy implementation during loading
return function() {
return {
load: () => Promise.resolve(),
setSize: () => {},
dispose: () => {},
play: () => {},
pause: () => {},
stop: () => {}
};
};
},
configurable: true
});
};
// Apply Spline disabling
disableSpline();
// Store restoration function globally (though we don't restore in this loading context)
window._restoreCanvasAndAnimations = function() {
window.requestAnimationFrame = originalRequestAnimationFrame;
window.setTimeout = originalSetTimeout;
window.setInterval = originalSetInterval;
HTMLCanvasElement.prototype.getContext = originalGetContext;
// Restore Three.js if available
if (typeof THREE !== 'undefined') {
if (THREE.WebGLRenderer && THREE.WebGLRenderer.prototype._originalRender) {
THREE.WebGLRenderer.prototype.render = THREE.WebGLRenderer.prototype._originalRender;
}
if (THREE.AnimationMixer && THREE.AnimationMixer.prototype._originalUpdate) {
THREE.AnimationMixer.prototype.update = THREE.AnimationMixer.prototype._originalUpdate;
}
}
// Restore Spline if available
if (window._SplineOriginal) {
window.Spline = window._SplineOriginal;
} else if (window.Spline && window.Spline._originalSpline) {
window.Spline = window.Spline._originalSpline;
}
// Restore visibility of Spline elements
const splineSelectors = [
'spline-viewer',
'[data-spline]',
'iframe[src*="spline.design"]',
'iframe[src*="my.spline.design"]',
'embed[src*="spline.design"]',
'embed[src*="my.spline.design"]',
'object[data*="spline.design"]',
'object[data*="my.spline.design"]'
];
splineSelectors.forEach(selector => {
const elements = document.querySelectorAll(selector);
elements.forEach(el => {
el.style.display = '';
el.style.visibility = '';
});
});
};
})();



        // Supabase Configuration
        const SUPABASE_URL = 'https://atlihrrlfxpmplldomoa.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0bGlocnJsZnhwbXBsbGRvbW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3NTY3ODMsImV4cCI6MjA4MTMzMjc4M30.7NZdMQ3baRO1s10La5PA4RcQDcPmDcBemq_MjTk1tm0';
        
        let supabaseClient = null;
        if (typeof window.supabase !== 'undefined') {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        }

        // --- Contact Form Handling ---
        async function handleContactSubmit(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            const subject = document.getElementById('subject').value || 'Contacto Site';

            const originalHtml = btn.innerHTML;
            btn.innerHTML = '<span>A enviar...</span>';
            btn.disabled = true;

            try {
                if(supabaseClient) {
                    const { error } = await supabaseClient.from('contacts').insert([{ 
                        name, email, message, 
                        // Storing extra info in message for simplicity or extending schema if needed
                        message: `[${subject}] [Phone: ${phone}] ${message}`,
                        answered: false 
                    }]);
                    if (error) throw error;
                } else {
                    // Local fallback for demo
                    const msgs = JSON.parse(localStorage.getItem('adminMessages')) || [];
                    msgs.unshift({
                        id: Date.now(),
                        name, email, 
                        message: `[${subject}] [Phone: ${phone}] ${message}`,
                        created_at: new Date().toISOString(),
                        answered: false
                    });
                    localStorage.setItem('adminMessages', JSON.stringify(msgs));
                    await new Promise(r => setTimeout(r, 1000));
                }

                document.getElementById('contactForm').reset();
                status.textContent = 'Mensagem enviada com sucesso.';
                status.className = 'text-center text-xs text-green-600 mt-4 h-4 font-bold';
                btn.innerHTML = '<span>Enviado</span>';
                btn.classList.add('bg-green-600', 'text-white');
                
            } catch (err) {
                console.error(err);
                status.textContent = 'Erro ao enviar. Tente novamente.';
                status.className = 'text-center text-xs text-red-600 mt-4 h-4';
            } finally {
                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                    btn.disabled = false;
                    btn.classList.remove('bg-green-600');
                    status.textContent = '';
                }, 3000);
            }
        }
        document.getElementById('contactForm')?.addEventListener('submit', handleContactSubmit);

        // --- Admin Functions ---
        function toggleAdminPortal() {
            const portal = document.getElementById('admin-portal');
            const site = document.getElementById('public-site');
            portal.classList.toggle('hidden');
            site.classList.toggle('hidden');
            if(!portal.classList.contains('hidden')) {
                document.getElementById('admin-login').classList.remove('hidden');
                document.getElementById('dashboard-content').classList.add('hidden');
                document.getElementById('admin-pass').value = '';
            }
        }

        function checkLogin() {
            if(document.getElementById('admin-pass').value === 'admin') { // Simple pass for demo
                document.getElementById('admin-login').classList.add('hidden');
                document.getElementById('dashboard-content').classList.remove('hidden');
                renderDashboard();
            } else {
                alert('Password incorrecta');
            }
        }

        async function renderDashboard() {
            const tbody = document.getElementById('messages-table-body');
            let messages = [];

            if (supabaseClient) {
                const { data } = await supabaseClient.from('contacts').select('*').order('created_at', { ascending: false });
                messages = data || [];
            } else {
                messages = JSON.parse(localStorage.getItem('adminMessages')) || [];
            }

            document.getElementById('total-count').textContent = messages.length;
            tbody.innerHTML = '';

            if (messages.length === 0) {
                document.getElementById('empty-state').classList.remove('hidden');
                return;
            }
            document.getElementById('empty-state').classList.add('hidden');

            messages.forEach(msg => {
                const tr = document.createElement('tr');
                tr.className = "hover:bg-neutral-50 dark:hover:bg-slate-700/30 transition-colors border-b border-neutral-100 dark:border-slate-700";
                tr.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">
                        <button onclick="toggleStatus('${msg.id}', ${!msg.answered})" class="px-2 py-1 rounded text-xs font-bold uppercase ${msg.answered ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}">
                            ${msg.answered ? 'Tratado' : 'Pendente'}
                        </button>
                    </td>
                    <td class="px-6 py-4 font-medium">${msg.name || '-'}</td>
                    <td class="px-6 py-4 text-slate-500">${msg.email || '-'}</td>
                    <td class="px-6 py-4 max-w-xs truncate text-slate-500" title="${msg.message}">${msg.message || '-'}</td>
                    <td class="px-6 py-4 text-xs text-slate-400">${new Date(msg.created_at).toLocaleDateString()}</td>
                `;
                tbody.appendChild(tr);
            });
        }

        async function toggleStatus(id, newStatus) {
            if(supabaseClient) {
                await supabaseClient.from('contacts').update({ answered: newStatus }).eq('id', id);
            } else {
                let msgs = JSON.parse(localStorage.getItem('adminMessages')) || [];
                const idx = msgs.findIndex(m => m.id == id);
                if(idx > -1) msgs[idx].answered = newStatus;
                localStorage.setItem('adminMessages', JSON.stringify(msgs));
            }
            renderDashboard();
        }

        // --- UI Interactions ---
        // Navbar Scroll
        window.addEventListener('scroll', () => {
            const navBg = document.getElementById('nav-bg');
            if (window.scrollY > 20) {
                navBg.classList.add('backdrop-blur-md', 'bg-white/95', 'dark:bg-slate-900/95', 'shadow-sm');
                navBg.classList.remove('bg-white/0', 'dark:bg-slate-900/0');
            } else {
                navBg.classList.remove('backdrop-blur-md', 'bg-white/95', 'dark:bg-slate-900/95', 'shadow-sm');
                navBg.classList.add('bg-white/0', 'dark:bg-slate-900/0');
            }
        });

        // Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    
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
      

<div className="" id="public-site">

<nav className="fixed z-50 transition-all duration-300 w-full top-0" id="navbar">
<div className="transition-all duration-300 border-transparent absolute top-0 right-0 bottom-0 left-0 backdrop-blur-none border-b border-neutral-100 dark:border-slate-800" id="nav-bg"></div>
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="bg-navy-900 text-white w-10 h-10 flex items-center justify-center rounded-sm overflow-hidden" id="logo-icon">
<span className="font-serif text-xl italic font-bold text-gold-500 font-geist">N</span>
</div>
<div className="flex flex-col">
<span className="group-hover:opacity-80 transition-opacity dark:text-white text-base font-semibold text-slate-900 tracking-tight font-serif" id="logo-text">Advogado Nuno Gomes Costa</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 hidden md:block font-geist">Advocacia &amp; Consultoria</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300" id="nav-links">
<a className="transition-colors hover:text-navy-900 dark:hover:text-white font-geist" href="#actividade">Actividade</a>
<a className="transition-colors hover:text-navy-900 dark:hover:text-white font-geist" href="#escritorio">Escritório</a>
<a className="transition-colors hover:text-navy-900 dark:hover:text-white font-geist" href="#online-info">Consulta Online</a>
<a className="transition-colors hover:text-navy-900 dark:hover:text-white font-geist" href="#artigos">Informações</a>
<a className="transition-colors hover:text-navy-900 dark:hover:text-white font-geist" href="#contactos">Contactos</a>
</div>

<div className="hidden md:block">
<a className="hover:bg-navy-800 hover:text-white transition-colors text-xs font-semibold text-navy-900 border border-navy-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy-900 tracking-wide rounded-sm pt-2.5 pr-6 pb-2.5 pl-6 uppercase font-geist" href="#formulario">Marcação</a>
</div>

<button className="md:hidden p-2 text-slate-900 dark:text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-24 left-0 w-full bg-white dark:bg-slate-900 border-b border-neutral-100 dark:border-slate-800 p-6 flex flex-col gap-4 md:hidden shadow-xl" id="mobile-menu">
<a className="text-lg font-serif text-slate-900 dark:text-white font-geist" href="#actividade" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Actividade</a>
<a className="text-lg font-serif text-slate-900 dark:text-white font-geist" href="#escritorio" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Escritório</a>
<a className="text-lg font-serif text-slate-900 dark:text-white font-geist" href="#online-info" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Consulta Online</a>
<a className="text-lg font-serif text-slate-900 dark:text-white font-geist" href="#contactos" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Contactos</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[750px] overflow-hidden bg-slate-900">
<div className="absolute inset-0 w-full h-full animate-zoom-slow">

<img alt="Escritório de Advocacia" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
</div>
<div className="flex flex-col z-10 h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative justify-center">
<div className="max-w-3xl mt-8">
<span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block animate-fade-in-up font-geist">Soluções ágeis, precisas e confiáveis</span>
<h1 className="md:text-7xl leading-[1.1] animate-fade-in-up text-5xl text-white tracking-tight mb-8 font-playfair font-medium" style={{animationDelay: '200ms'}}>
                        Excelência no exercício da <span className="text-gold-500 font-playfair font-medium" style={{}}>Advocacia</span>
</h1>
<p className="text-slate-300 text-lg md:text-xl font-light mb-10 max-w-2xl animate-fade-in-up font-geist" style={{animationDelay: '300ms'}}>
                        Nuno Gomes Costa exerce a advocacia com o propósito de atingir a excelência na qualidade dos serviços que presta, actuando nas áreas de Direito Civil, Comercial, Penal e Familiar.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{animationDelay: '400ms'}}>
<a className="sm:w-auto hover:bg-gold-600 transition-colors text-sm font-semibold text-white text-center bg-gold-500 w-full rounded-sm pt-4 pr-10 pb-4 pl-10 uppercase tracking-wider font-geist" href="#formulario">
                            Entrar em Contacto
                        </a>
<a className="sm:w-auto glass-panel hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group text-sm font-medium text-white w-full rounded-sm pt-4 pr-8 pb-4 pl-8 font-geist" href="#actividade">
                            Áreas de Actuação
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="absolute bottom-10 left-6 right-6 flex justify-between items-end border-t border-white/10 pt-6 animate-fade-in text-white/60 text-xs font-sans tracking-widest uppercase">
<span className="font-geist">São Domingos de Rana, PT</span>
<span className="hidden md:block font-geist">Scroll para explorar</span>
</div>
</div>
</header>

<section className="bg-white dark:bg-slate-900 pt-24 pr-6 pb-24 pl-6" id="actividade">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row reveal-on-scroll is-visible mb-16 items-end justify-between border-b border-neutral-100 dark:border-slate-800 pb-8">
<div className="max-w-xl">
<span className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-2 block font-geist">Áreas de Prática</span>
<h2 className="md:text-4xl text-3xl tracking-tight text-navy-900 dark:text-white font-playfair font-medium" style={{}}>A nossa Actividade</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-navy-50 dark:bg-navy-900 flex items-center justify-center text-navy-700 dark:text-navy-300 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:home-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 font-serif font-medium text-navy-900 dark:text-white font-geist">Arrendamento e Imobiliário</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-geist">
                            Direito do arrendamento urbano para habitação e comercial, acções de despejo, actualizações de rendas, obras, condomínios e legalização de terrenos.
                        </p>
</div>

<div className="group reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-navy-50 dark:bg-navy-900 flex items-center justify-center text-navy-700 dark:text-navy-300 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 font-serif font-medium text-navy-900 dark:text-white font-geist">Família e Menores</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-geist">
                            Divórcios litigiosos e por mútuo consentimento, providências cautelares, regulação das responsabilidades parentais e processos de adopção.
                        </p>
</div>

<div className="group reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-navy-50 dark:bg-navy-900 flex items-center justify-center text-navy-700 dark:text-navy-300 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:briefcase-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 font-serif font-medium text-navy-900 dark:text-white font-geist">Direito do Trabalho</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-geist">
                            Resolução de contrato por justa causa, cálculo de créditos laborais, impugnação de despedimento e contencioso laboral.
                        </p>
</div>

<div className="group reveal-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-navy-50 dark:bg-navy-900 flex items-center justify-center text-navy-700 dark:text-navy-300 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 font-serif font-medium text-navy-900 dark:text-white font-geist">Sucessões e Civil</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-geist">
                            Processos de inventário e partilha judicial/extrajudicial, habilitação de herdeiros, acções de indemnização e cobrança de créditos.
                        </p>
</div>

<div className="group reveal-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-navy-50 dark:bg-navy-900 flex items-center justify-center text-navy-700 dark:text-navy-300 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:gavel-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 font-serif font-medium text-navy-900 dark:text-white font-geist">Penal e Contraordenações</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-geist">
                            Defesa em processo penal e contraordenacional. Acompanhamento em todas as fases do processo.
                        </p>
</div>

<div className="group reveal-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-navy-50 dark:bg-navy-900 flex items-center justify-center text-navy-700 dark:text-navy-300 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 font-serif font-medium text-navy-900 dark:text-white font-geist">Comercial e Registos</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-geist">
                            Constituição de sociedades, legalização de estrangeiros, aquisição de nacionalidade, reconhecimento de sentenças estrangeiras e licenciamento comercial.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-navy-50 dark:bg-slate-800 pt-24 pr-6 pb-24 pl-6" id="escritorio">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<div className="relative">
<div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">

<img alt="Advogado" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-900 p-8 shadow-xl max-w-xs hidden md:block border border-neutral-100 dark:border-slate-700">
<p className="font-serif italic text-xl text-navy-900 dark:text-white leading-relaxed font-geist">
                                    "Interpretar o Direito e aplicá-lo com rigor, independência e isenção."
                                </p>
</div>
</div>
</div>
<div className="reveal-on-scroll lg:pl-10">
<span className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-4 block font-geist">Sobre o Escritório</span>
<h2 className="text-4xl md:text-5xl text-navy-900 dark:text-white mb-8 leading-tight font-playfair font-medium" style={{}}>
                            Natureza do Trabalho de Advocacia
                        </h2>
<div className="space-y-6 text-slate-600 dark:text-slate-300 font-light leading-relaxed text-sm md:text-base text-justify">
<p className="font-geist">
                                A actividade visa tanto a defesa como o aconselhamento. Na função de defensores, representamos uma das partes em litígio em causas penais, cíveis ou administrativas. Como conselheiros, orientamos os clientes acerca dos seus direitos e obrigações, sugerindo actuações preventivas na vida profissional e pessoal.
                            </p>
<p className="font-geist">
                                Atendendo à evolução da sociedade, designadamente as constantes inovações tecnológicas e mutações económicas, exigem-se cada vez mais soluções ágeis, precisas e confiáveis.
                            </p>
<p className="font-geist">
                                A actuação não se limita à enunciação das disposições legais: inclui a análise jurisprudencial e doutrinária para entender o espírito do legislador. Independentemente da área, agimos como servidores da Justiça, mantendo sempre a maior independência e isenção, cumprindo escrupulosamente o segredo profissional.
                            </p>
</div>
<div className="mt-10 flex gap-8">
<div>
<h4 className="text-2xl text-navy-900 dark:text-white mb-1 font-playfair font-medium" style={{}}>Defesa</h4>
<p className="text-xs text-slate-500 uppercase tracking-wide font-geist">Litígios &amp; Tribunais</p>
</div>
<div className="w-px bg-slate-200 dark:bg-slate-700"></div>
<div>
<h4 className="text-2xl text-navy-900 dark:text-white mb-1 font-playfair font-medium" style={{}}>Consultoria</h4>
<p className="text-xs text-slate-500 uppercase tracking-wide font-geist">Prevenção &amp; Contratos</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-navy-900 text-white pt-24 pb-24 px-6 relative overflow-hidden" id="online-info">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gold-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
</div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3 block font-geist">Serviços Digitais</span>
<h2 className="text-3xl md:text-4xl mb-6 font-playfair font-medium" style={{}}>Informações Jurídicas Online</h2>
<p className="text-slate-300 font-light max-w-2xl mx-auto font-geist">
                        Obtenha aconselhamento jurídico rápido e eficaz sem sair de casa. Siga os passos abaixo para o seu pedido de informação.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-sm relative group hover:bg-white/5 transition-colors reveal-on-scroll delay-100">
<div className="text-gold-500 text-5xl opacity-20 absolute top-4 right-4 group-hover:opacity-40 transition-opacity font-playfair font-medium" style={{}}>01</div>
<div className="mb-4 text-white">
<iconify-icon height="32" icon="solar:letter-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 font-geist">Envio do Pedido</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist">Envie um e-mail com o seu pedido de informação detalhado ou utilize o formulário abaixo.</p>
</div>

<div className="glass-panel p-6 rounded-sm relative group hover:bg-white/5 transition-colors reveal-on-scroll delay-200">
<div className="text-gold-500 text-5xl opacity-20 absolute top-4 right-4 group-hover:opacity-40 transition-opacity font-playfair font-medium" style={{}}>02</div>
<div className="mb-4 text-white">
<iconify-icon height="32" icon="solar:bill-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 font-geist">Orçamento</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist">Recebe e-mail no dia útil seguinte a confirmar a recepção e a informar o valor dos honorários.</p>
</div>

<div className="glass-panel p-6 rounded-sm relative group hover:bg-white/5 transition-colors reveal-on-scroll delay-300">
<div className="text-gold-500 text-5xl opacity-20 absolute top-4 right-4 group-hover:opacity-40 transition-opacity font-playfair font-medium" style={{}}>03</div>
<div className="mb-4 text-white">
<iconify-icon height="32" icon="solar:card-transfer-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 font-geist">Confirmação</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist">Envie e-mail a aceitar as condições e proceda ao pagamento dos honorários acordados.</p>
</div>

<div className="glass-panel p-6 rounded-sm relative group hover:bg-white/5 transition-colors reveal-on-scroll delay-400">
<div className="text-gold-500 text-5xl opacity-20 absolute top-4 right-4 group-hover:opacity-40 transition-opacity font-playfair font-medium" style={{}}>04</div>
<div className="mb-4 text-white">
<iconify-icon height="32" icon="solar:chat-round-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 font-geist">Resposta</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist">Após confirmação do pagamento, enviaremos a resposta jurídica solicitada até 48h úteis.</p>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 pt-24 pb-24 px-6 border-b border-neutral-100 dark:border-slate-800" id="artigos">
<div className="max-w-4xl mx-auto">
<div className="flex items-center gap-2 mb-6 text-gold-600">
<iconify-icon height="20" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase font-geist">História do Direito</span>
</div>
<h2 className="text-3xl md:text-4xl text-navy-900 dark:text-white mb-8 font-playfair font-medium" style={{}}>Origens da Advocacia</h2>
<article className="prose prose-slate dark:prose-invert max-w-none">
<div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
<div className="md:w-1/3 shrink-0">
<img alt="Justiça Antiga" className="w-full rounded-sm shadow-md" src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<p className="text-xs text-slate-400 mt-2 italic text-center font-geist">Simbologia da Justiça: a balança e a espada.</p>
</div>
<div className="md:w-2/3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 text-justify">
<p className="mb-4 font-geist">
                                A advocacia remonta à antiguidade, exercida durante milénios por espírito de solidariedade para ajudar os fracos e desprotegidos. A palavra advogado deriva do latim <em className="font-geist">ad-vocatus</em>, o que é chamado em defesa.
                            </p>
<p className="mb-4 font-geist">
                                Três principais características do bom advogado sempre foram a oratória, a virtude e o saber. Na Grécia Antiga, oradores como Péricles e Demóstenes tornaram-se referências. O Tribunal era considerado um local sagrado.
                            </p>
<p className="font-geist">
                                O símbolo da Justiça evoluiu da balança de dois pratos (Antigo Testamento) para a representação grega de Dike com a espada e balança, até à Iustitia romana, de olhos vendados, simbolizando a imparcialidade e a rectidão do fiel.
                            </p>
<a className="text-gold-600 hover:text-gold-700 font-medium inline-flex items-center gap-1 mt-2 text-xs uppercase tracking-wide font-geist" href="#">
                                Ler artigo completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</article>
</div>
</section>

<section className="bg-slate-50 dark:bg-black pt-24 pr-6 pb-24 pl-6 relative" id="contactos">
<div className="max-w-6xl mr-auto ml-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 reveal-on-scroll">
<span className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-4 block font-geist">Contactos</span>
<h2 className="md:text-5xl text-4xl text-navy-900 dark:text-white mb-8 font-playfair font-medium" style={{}}>Entre em <br/><span className="text-slate-500 font-playfair font-medium" style={{}}>contacto.</span></h2>
<p className="font-light text-slate-500 dark:text-slate-400 mb-10 leading-relaxed text-sm font-geist">
                            Estamos disponíveis para o ajudar nas suas questões legais. Utilize os contactos abaixo ou o formulário para agendar uma reunião ou solicitar informações.
                        </p>
<div className="space-y-8">

<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 shrink-0 text-gold-600">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block font-semibold text-navy-900 dark:text-white mb-1 text-sm uppercase tracking-wide font-geist">Morada</span>
</div>
</div>

<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 shrink-0 text-gold-600">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block font-semibold text-navy-900 dark:text-white mb-1 text-sm uppercase tracking-wide font-geist">Email</span>
<a className="block text-slate-500 dark:text-slate-400 text-sm hover:text-navy-900 dark:hover:text-white transition-colors font-geist" href="mailto:nunogomescosta-44509l@adv.oa.pt">nunogomescosta-44509l@adv.oa.pt</a>
<a className="block text-slate-500 dark:text-slate-400 text-sm hover:text-navy-900 dark:hover:text-white transition-colors mt-1 font-geist" href="mailto:nunogomescosta123@gmail.com">nunogomescosta123@gmail.com</a>
</div>
</div>
</div>
<div className="mt-12 p-6 bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/10 rounded-sm">
<h4 className="text-navy-900 dark:text-white font-serif mb-2 font-geist">Atendimento Urgente?</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 font-geist">Para assuntos urgentes de natureza criminal ou providências cautelares, indique "URGENTE" no assunto do email.</p>
</div>
</div>

<div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-sm p-8 md:p-10 shadow-xl border border-neutral-100 dark:border-slate-800 reveal-on-scroll delay-200" id="formulario">
<form className="space-y-6" id="contactForm">
<h3 className="text-xl font-serif text-navy-900 dark:text-white mb-6 font-geist">Formulário de Contacto</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-geist" htmlFor="name">Nome</label>
<input className="w-full rounded-sm border border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-800 px-4 py-3 text-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all dark:text-white" id="name" name="name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-geist" htmlFor="email">Email</label>
<input className="w-full rounded-sm border border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-800 px-4 py-3 text-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all dark:text-white" id="email" name="email" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-geist" htmlFor="phone">Telefone</label>
<input className="w-full rounded-sm border border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-800 px-4 py-3 text-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all dark:text-white" id="phone" name="phone" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-geist" htmlFor="subject">Assunto</label>
<select className="w-full rounded-sm border border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-800 px-4 py-3 text-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all dark:text-white appearance-none" id="subject" name="subject">
<option className="font-geist" value="">Selecione um assunto...</option>
<option className="font-geist" value="Consulta Juridica">Consulta Jurídica</option>
<option className="font-geist" value="Informacao Online">Informação Online</option>
<option className="font-geist" value="Outros">Outros</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-geist" htmlFor="message">Mensagem</label>
<textarea className="w-full rounded-sm border border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-800 px-4 py-3 text-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all resize-none dark:text-white" id="message" name="message" required="" rows="5"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-navy-900 dark:bg-white text-white dark:text-navy-900 hover:bg-gold-600 dark:hover:bg-gray-200 rounded-sm py-4 font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 group uppercase tracking-widest" id="submitBtn" type="submit">
<span className="font-geist">Enviar Pedido</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:plain-3-bold" width="16"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-500 mt-4 h-4" id="formStatus"></p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="text-slate-400 bg-navy-950 border-t border-navy-900 pt-20 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2 space-y-6">
<div className="flex items-center gap-2 text-white">
<div className="bg-white/10 w-8 h-8 flex items-center justify-center rounded-sm text-gold-500">
<span className="font-serif italic font-bold font-geist">N</span>
</div>
<span className="text-lg tracking-tight font-serif text-white font-geist">Advogado Nuno Gomes Costa</span>
</div>
<p className="leading-relaxed text-xs font-light text-slate-500 max-w-sm text-justify font-geist">
                        Advogado Nuno Gomes Costa desenvolve a sua actividade em diferentes áreas do Direito, com especial incidência no Direito Civil, Comercial e Penal. Soluções ágeis, precisas e confiáveis.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest font-geist">Links Úteis</h4>
<ul className="space-y-3 text-xs font-light">
<li><a className="hover:text-gold-500 transition-colors font-geist" href="#actividade">Actividade</a></li>
<li><a className="hover:text-gold-500 transition-colors font-geist" href="#escritorio">Escritório</a></li>
<li><a className="hover:text-gold-500 transition-colors font-geist" href="#artigos">Natureza do Trabalho</a></li>
<li><a className="hover:text-gold-500 transition-colors font-geist" href="#artigos">Estratégia</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest font-geist">Legal</h4>
<ul className="space-y-3 text-xs font-light">
<li><a className="hover:text-gold-500 transition-colors font-geist" href="#">Política de Privacidade</a></li>
<li><a className="hover:text-gold-500 transition-colors font-geist" href="#">Termos de Uso</a></li>
<li><a className="hover:text-gold-500 transition-colors font-geist" href="#online-info">Consultas Online</a></li>

<li><button className="text-slate-700 hover:text-slate-500 transition-colors mt-4 font-geist" onclick="toggleAdminPortal()">Admin</button></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-navy-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p className="font-geist">© 2026 Advogado Nuno Gomes Costa. Todos os direitos reservados.</p>
<p className="mt-2 md:mt-0 font-geist">São Domingos de Rana, Portugal</p>
</div>
</footer>
</div>

<div className="hidden fixed inset-0 z-[100] bg-neutral-100 dark:bg-slate-900 overflow-auto font-sans" id="admin-portal">

<div className="absolute inset-0 z-[110] bg-white dark:bg-slate-900 flex items-center justify-center" id="admin-login">
<div className="w-full max-w-sm p-8 bg-neutral-50 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-sm shadow-2xl">
<h3 className="text-2xl mb-6 text-center text-navy-900 dark:text-white font-playfair font-medium" style={{}}>Área Reservada</h3>
<div className="space-y-4">
<input className="w-full px-4 py-3 rounded-sm bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 outline-none focus:ring-1 ring-gold-500 transition-all text-sm" id="admin-pass" placeholder="Password" type="password"/>
<button className="w-full py-3 rounded-sm bg-navy-900 hover:bg-navy-800 text-white font-medium transition-colors text-sm uppercase tracking-wide font-geist" onclick="checkLogin()">Entrar</button>
<button className="w-full py-2 text-xs text-slate-500 hover:text-navy-900 dark:hover:text-white transition-colors font-geist" onclick="toggleAdminPortal()">Voltar ao site</button>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col md:flex-row" id="dashboard-content">

<aside className="w-full md:w-64 bg-white dark:bg-slate-800 border-r border-neutral-200 dark:border-slate-700 p-6 flex flex-col">
<div className="flex items-center gap-2 mb-10 text-navy-900 dark:text-white">
<span className="font-serif font-bold text-lg font-geist">Admin Panel</span>
</div>
<nav className="space-y-1 flex-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-sm bg-navy-50 dark:bg-navy-900/50 text-navy-900 dark:text-white text-sm font-medium border-l-2 border-gold-500 font-geist" href="#">
<iconify-icon icon="solar:inbox-linear" width="18"></iconify-icon>
                        Mensagens
                    </a>
</nav>
<button className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-red-500 transition-colors text-sm font-medium mt-auto font-geist" onclick="toggleAdminPortal()">
<iconify-icon icon="solar:logout-2-linear" width="18"></iconify-icon>
                    Sair
                </button>
</aside>

<main className="flex-1 p-6 md:p-10 overflow-y-auto">
<header className="flex justify-between items-center mb-8">
<h1 className="text-2xl text-navy-900 dark:text-white font-playfair font-medium" style={{}}>Mensagens Recebidas</h1>
<div className="flex gap-4">
<div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-sm shadow-sm border border-neutral-200 dark:border-slate-700 text-sm">
<span className="text-slate-500 font-geist">Total:</span>
<span className="font-bold ml-1 text-navy-900 dark:text-white font-geist" id="total-count">0</span>
</div>
</div>
</header>
<div className="bg-white dark:bg-slate-800 rounded-sm shadow-sm border border-neutral-200 dark:border-slate-700 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-slate-500 uppercase bg-neutral-50 dark:bg-slate-900 border-b border-neutral-200 dark:border-slate-700">
<tr>
<th className="px-6 py-4 font-medium font-geist">Estado</th>
<th className="px-6 py-4 font-medium font-geist">Nome</th>
<th className="px-6 py-4 font-medium font-geist">Email</th>
<th className="px-6 py-4 font-medium font-geist">Mensagem</th>
<th className="px-6 py-4 font-medium font-geist">Data</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300" id="messages-table-body">

</tbody>
</table>
</div>
<div className="hidden flex flex-col items-center justify-center p-12 text-slate-400" id="empty-state">
<iconify-icon className="mb-4 opacity-50" height="48" icon="solar:box-minimalistic-linear" width="48"></iconify-icon>
<p className="font-geist">Sem mensagens.</p>
</div>
</div>
</main>
</div>
</div>



    </>
  );
}
