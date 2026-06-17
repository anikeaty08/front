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
      

<nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex gap-2 cursor-pointer items-center">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-height="20" data-icon="lucide:fuel" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 9h11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-2xl font-bold text-neutral-900 tracking-tighter">4GAS<span className="text-indigo-600">.CR</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors" href="#">Cobertura</a>
<a className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors" href="#">Beneficios</a>
<a className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors" href="#">Contacto</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center text-neutral-500 hover:text-indigo-600 transition-colors">
</button>
<div className="relative inline-block text-left group">

<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-full shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-indigo-600/30 transition-all duration-300" type="button">
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:lock" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
        Sucursal Electrónica
    </button>

<div className="absolute right-0 top-full mt-3 w-[340px] origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50">

<div className="absolute -top-1.5 right-6 w-3 h-3 bg-white border-t border-l border-neutral-200 rotate-45"></div>

<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center">
<h3 className="font-bold text-lg text-neutral-900 tracking-tight">Banca en Línea</h3>
<button className="text-neutral-400 hover:text-neutral-600 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="p-6 pt-4">

<div className="mb-5">
<p className="text-xs font-medium text-neutral-500 mb-2">Seleccione el método de ingreso:</p>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer group/radio">
<div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-neutral-300 group-hover/radio:border-indigo-600">
<input checked="" className="peer sr-only" name="login_method" type="radio"/>
<div className="w-2 h-2 rounded-full bg-indigo-600 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm font-medium text-neutral-700">Contraseña</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group/radio">
<div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-neutral-300 group-hover/radio:border-indigo-600">
<input className="peer sr-only" name="login_method" type="radio"/>
<div className="w-2 h-2 rounded-full bg-indigo-600 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm font-medium text-neutral-700">Firma digital</span>
</label>
</div>
</div>

<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700">Usuario</label>
<input className="w-full px-3 py-2.5 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all placeholder:text-neutral-400" placeholder="Ingrese su usuario" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700">Contraseña</label>
<input className="w-full px-3 py-2.5 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all placeholder:text-neutral-400" placeholder="••••••••" type="password"/>
</div>
</div>

<div className="mt-4 space-y-2">
<label className="flex items-center gap-2 cursor-pointer group/check">
<div className="w-4 h-4 rounded border border-neutral-300 flex items-center justify-center group-hover/check:border-indigo-600 bg-white">
<input className="peer sr-only" type="checkbox"/>
<svg className="w-3 h-3 text-red-600 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-neutral-600 select-none">Recordar Usuario</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group/check">
<div className="w-4 h-4 rounded border border-neutral-300 flex items-center justify-center group-hover/check:border-indigo-600 bg-white">
<input className="peer sr-only" type="checkbox"/>
<svg className="w-3 h-3 text-red-600 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-neutral-600 select-none">Usar Token</span>
</label>
</div>

<button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Ingresar
            </button>
<div className="mt-3 text-center">
<a className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline" href="#">¿No puede ingresar?</a>
</div>
</div>

<div className="bg-neutral-50 px-6 py-4 border-t border-neutral-100 rounded-b-xl">
<p className="text-xs font-semibold text-neutral-900 mb-3">¿Primera vez que ingresa?</p>
<button className="w-full bg-white border border-neutral-200 hover:border-indigo-200 hover:bg-indigo-50 text-indigo-600 font-semibold py-2 rounded-lg text-sm transition-all">
                Crear usuario
            </button>
</div>
</div>
</div>

<button className="md:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<header className="relative bg-white overflow-hidden">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-neutral-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 lg:py-28 z-10 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="fade-enter" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                        Innovación en Flotas
                    </div>
<h1 className="lg:text-6xl leading-[1.1] text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                        Control total del <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">combustible</span> de su empresa
                    </h1>
<p className="leading-relaxed text-lg text-neutral-600 max-w-lg mb-8">
                        Optimice el rendimiento de su flota con nuestra red de estaciones inteligentes. Seguridad, cobertura nacional y facturación electrónica integrada en una sola plataforma.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center hover:bg-neutral-800 transition-all hover:shadow-lg text-sm font-semibold text-white bg-neutral-900 rounded-lg pt-3.5 pr-6 pb-3.5 pl-6" href="#">
                            Solicitar Afiliación
                            <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-white border border-neutral-200 text-neutral-700 text-sm font-semibold rounded-lg hover:bg-neutral-50 hover:border-neutral-300 transition-all" href="#">
                            Ver Cobertura
                        </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-neutral-500 font-medium">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-red-600 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">Sin costos ocultos</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-red-600 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">Soporte 24/7</span>
</div>
</div>
</div>

<div className="relative fade-enter lg:h-[500px] flex items-center justify-center" style={{animationDelay: '0.3s'}}>
<div className="relative w-full max-w-md aspect-[1.586/1] bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl shadow-2xl shadow-indigo-900/20 p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-12">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:fuel" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 9h11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold text-xl tracking-tighter">4GAS</span>
</div>
<svg aria-hidden="true" className="iconify opacity-80 iconify--lucide" data-icon="lucide:nfc" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.32a7.43 7.43 0 0 1 0 7.36m3.46-9.47a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 .01 15.8M16.37 2a20.16 20.16 0 0 1 0 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="w-12 h-8 bg-white/20 rounded-md"></div>
<div className="w-4 h-4 rounded-full bg-white/40"></div>
</div>
<div className="font-mono text-xl tracking-widest opacity-90">
                                •••• •••• •••• 4521
                            </div>
<div className="flex justify-between items-end opacity-90">
<div>
<div className="text-[10px] uppercase tracking-wider mb-1">Titular</div>
<div className="font-medium">EMPRESA S.A.</div>
</div>
<div className="text-right">
<div className="text-[10px] uppercase tracking-wider mb-1">Flota</div>
<div className="font-medium">PREMIUM</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-neutral-100 max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-100 text-blue-700 rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 17h6v-6"></path><path d="m22 17l-8.5-8.5l-5 5L2 7"></path></g></svg>
</div>
<span className="text-xs font-semibold text-neutral-500 uppercase">Ahorro Mensual</span>
</div>
<div className="text-2xl font-bold text-neutral-900">₡ 458,000</div>
<div className="text-xs text-neutral-400 mt-1">vs mes anterior</div>
</div>
</div>
</div>
</div>
</header>

<div className="relative z-20 max-w-6xl mx-auto px-4 -mt-10 mb-20 fade-enter" style={{animationDelay: '0.5s'}}>
<div className="bg-white rounded-xl shadow-xl shadow-neutral-200/50 border border-neutral-100 p-2 sm:p-4">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-100">
<a className="group flex flex-col items-center justify-center p-4 hover:bg-neutral-50 rounded-lg transition-colors gap-3" href="#">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-full group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<span className="text-sm font-semibold text-neutral-700">Estaciones</span>
</a>
<a className="group flex flex-col items-center justify-center p-4 hover:bg-neutral-50 rounded-lg transition-colors gap-3" href="#">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-full group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wallet" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<span className="text-sm font-semibold text-neutral-700">Consulta de Saldo</span>
</a>
<a className="group flex flex-col items-center justify-center p-4 hover:bg-neutral-50 rounded-lg transition-colors gap-3" href="#">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-full group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<span className="text-sm font-semibold text-neutral-700">Facturación</span>
</a>
<a className="group flex flex-col items-center justify-center p-4 hover:bg-neutral-50 rounded-lg transition-colors gap-3" href="#">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-full group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone-call" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold text-neutral-700">Soporte</span>
</a>
</div>
</div>
</div>

<section className="bg-neutral-50 border-neutral-200 border-t pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">¿Por qué elegir 4Gas?</h2>
<p className="text-neutral-600 text-lg">La plataforma diseñada para optimizar cada kilómetro de su negocio con tecnología de punta y la mejor cobertura.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 border border-neutral-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-2xl"></div>
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-3" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">Control en Tiempo Real</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Monitoree cada transacción al instante. Establezca límites por vehículo, día o monto a través de nuestra plataforma web.</p>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 border border-neutral-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-2xl"></div>
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">Cobertura Nacional</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Acceda a la red más amplia de estaciones de servicio en todo Costa Rica. Nunca estará lejos de un punto 4Gas.</p>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 border border-neutral-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-2xl"></div>
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">Seguridad Avanzada</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Tecnología de chip y PIN para prevenir fraudes. Alertas inmediatas sobre consumos sospechosos o irregulares.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="lg:text-4xl text-3xl font-bold text-white tracking-tight mb-6" style={{}}>Gestione su flota desde <br/>cualquier lugar</h2>
<p className="text-lg text-neutral-300 max-w-md mb-8">Con nuestra plataforma, los conductores y administradores. Encuentre estaciones cercanas, reporte kilometraje y verifique saldos en segundos.</p>
</div>
<div className="relative lg:h-80 flex items-center justify-center lg:justify-end">

<div className="relative w-64 h-[500px] bg-neutral-950 border-[6px] border-neutral-800 rounded-[2.5rem] shadow-2xl lg:translate-y-20 overflow-hidden">

<div className="bg-white w-full h-full flex flex-col">
<div className="bg-indigo-600 h-32 p-6 flex flex-col justify-end">
<div className="text-white text-lg font-bold">Hola, Carlos</div>
<div className="text-indigo-100 text-xs">Saldo disponible: ₡45,000</div>
</div>
<div className="p-4 space-y-4 bg-neutral-50 flex-1">
<div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100 flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:fuel" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 9h11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-bold text-neutral-800">Super - 40L</div>
<div className="text-xs text-neutral-400">Hoy, 10:30 AM</div>
</div>
<div className="text-sm font-bold text-neutral-900">-₡32,500</div>
</div>
<div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100 flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="flex-1">
<div className="text-sm font-bold text-neutral-800">Estación La Paz</div>
<div className="text-xs text-neutral-400">Ayer, 04:15 PM</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-indigo-600 py-20 text-center px-4">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">¿Listo para optimizar su flota?</h2>
<p className="text-indigo-100 text-lg mb-10">Únase a cientos de empresas en Costa Rica que confían en 4Gas para la gestión eficiente de combustible.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="hover:bg-neutral-50 transition-colors font-bold text-indigo-600 bg-white rounded-lg pt-3 pr-8 pb-3 pl-8 shadow-lg" href="#">
                    Solicitar Cotización
                </a>
<a className="bg-indigo-700 text-white border border-indigo-500 hover:bg-indigo-800 font-semibold py-3 px-8 rounded-lg transition-colors" href="#">
                    Contáctenos
                </a>
</div>
</div>
</section>

<footer className="bg-white border-neutral-200 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="iconify text-red-600 iconify--lucide" data-icon="lucide:fuel" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 9h11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold text-xl tracking-tighter text-neutral-900">4GAS<span className="text-indigo-600">.CR</span></span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Soluciones integrales para la administración de combustible en Costa Rica. Eficiencia, control y seguridad para su empresa.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-indigo-600 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-neutral-400 hover:text-indigo-600 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-neutral-400 hover:text-indigo-600 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Empresa</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Nosotros</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Carreras</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Prensa</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Sostenibilidad</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Producto</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Tarjetas de Flota</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Red de Estaciones</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">App Móvil</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Precios</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Soporte</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Centro de Ayuda</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Reportar Pérdida</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contacto</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Estado del Sistema</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400 text-center md:text-left">
                    © 2023 4Gas Costa Rica. Todos los derechos reservados.
                </p>
<div className="flex gap-6 text-xs text-neutral-400">
<a className="hover:text-neutral-600" href="#">Privacidad</a>
<a className="hover:text-neutral-600" href="#">Términos</a>
<a className="hover:text-neutral-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
