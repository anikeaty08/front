import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex items-center justify-center min-h-screen px-6">
<div className="w-full max-w-md p-8 space-y-8 rounded-xl border border-[#E5E5E5] bg-white/40">
<div className="text-center">
<h1 className="text-4xl tracking-tight font-semibold" style={{fontFamily: '\'Playfair Display\',serif'}}>Iniciar sesión</h1>
<p className="mt-2 text-sm text-black/60">Bienvenido de nuevo a tu cuaderno mágico.</p>
</div>
<form action="#" className="mt-8 space-y-6" method="POST">
<input name="remember" type="hidden" value="true"/>
<div className="rounded-md -space-y-px">
<div>
<label className="sr-only" htmlFor="email-address">Correo electrónico</label>
<input autocomplete="email" className="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-[#E5E5E5] placeholder-black/40 text-sm bg-transparent focus:outline-none focus:border-black focus:ring-0" id="email-address" name="email" placeholder="Correo electrónico" required="" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="password">Contraseña</label>
<input autocomplete="current-password" className="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-[#E5E5E5] placeholder-black/40 text-sm bg-transparent focus:outline-none focus:border-black focus:ring-0" id="password" name="password" placeholder="Contraseña" required="" type="password"/>
</div>
</div>
<div>
<button className="group relative w-full flex justify-center py-3 px-4 text-base font-medium rounded-sm text-black hover:text-white hover:bg-[#960018] ring-1 ring-transparent hover:ring-[#960018]/80 hover:shadow-[0_0_0_6px_rgba(150,0,24,0.12)] transition" type="submit">
            Iniciar sesión
            <span className="absolute -right-3 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-[#960018]/60 opacity-0 scale-0 transition group-hover:opacity-100 group-hover:scale-100"></span>
</button>
</div>
</form>
<div className="text-center">
<p className="text-sm text-black/60">
          ¿No tienes una cuenta?
          <a className="font-medium text-[#960018] hover:text-[#960018]/80" href="#">
            Crear cuenta
          </a>
</p>
</div>
</div>
</div>


    </>
  );
}
