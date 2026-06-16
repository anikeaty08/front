import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.getElementById('menu-btn').addEventListener('click', function() {
            var menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });

        // Fechar menu ao clicar num link
        var links = document.querySelectorAll('#mobile-menu a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" style={{maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, #000 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, #000 40%, transparent 100%)'}}></div>

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
</div>





    </>
  );
}
