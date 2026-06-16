import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.getElementById('luxuryForm').addEventListener('submit', async function(e) {
            e.preventDefault(); 
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const webhookUrl = 'https://kevin226-20226.wykr.es/webhook/14dda302-53bc-4b59-a18e-069ce32c896a';

            const payload = {
                first_name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                bottleneck: document.getElementById('destination').value 
            };

            btnText.innerText = 'PROSZĘ CZEKAĆ...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    btnText.innerText = 'ZARAZ ZADZWONIMY!';
                    submitBtn.style.backgroundColor = '#C5A059';
                } else {
                    btnText.innerText = 'BŁĄD WYŚLIJ PONOWNIE';
                    submitBtn.disabled = false;
                }
            } catch (error) {
                console.error('Błąd:', error);
                btnText.innerText = 'BŁĄD POŁĄCZENIA';
                submitBtn.disabled = false;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col lg:flex-row w-full">
<div className="lg:w-[45%] xl:w-1/2 h-[50vh] lg:h-screen relative lg:sticky lg:top-0 overflow-hidden bg-neutral-200">
<img alt="Patrycja Szkarłat" className="object-center lg:object-top transition-transform duration-1000 hover:scale-105 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2d1dd01-6c35-49b5-88ec-7c6b19aad0b1_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden"></div>
<div className="absolute bottom-6 left-6 text-white lg:hidden">
<p className="font-serif text-2xl">Patrycja Szkarłat</p>
<p className="text-xs uppercase tracking-widest opacity-80">Luxury Travel Designer</p>
</div>
</div>
<div className="lg:w-[55%] xl:w-1/2 flex flex-col bg-white justify-center">
<div className="w-full max-w-2xl mx-auto px-8 py-16 lg:px-16 xl:px-24">
<header className="mb-10">
<div className="flex items-center gap-3 mb-5">
<span className="h-px w-8 bg-[#C5A059]"></span>
<p className="uppercase text-xs font-medium text-[#C5A059] tracking-[0.2em]">Carter® Luxury Travel</p>
</div>
<h1 className="font-serif text-4xl lg:text-5xl mb-6 leading-[1.1] tracking-tight text-neutral-900">
                        Luksus, który Cię rozumie. 
                        <span className="block mt-2 italic font-serif text-neutral-400 font-normal text-3xl lg:text-4xl">
                            Zaprojektujmy Twoją Podróż Marzeń.
                        </span>
</h1>
</header>
<div className="mb-12 space-y-6">
<p className="font-light text-neutral-600 leading-relaxed text-sm lg:text-base">
                        Jako Luxury Travel Designer w Carter Travel, nie sprzedaję hoteli – projektuję wspomnienia. Wierzę, że każda podróż powinna być lustrem duszy podróżnika. Moim zadaniem jest zrozumienie Twoich najskrytszych oczekiwań i przekucie ich w unikalny plan, którego nie znajdziesz w żadnym katalogu.
                    </p>
<blockquote className="border-l-2 border-[#C5A059] pl-5 py-1 italic font-serif text-lg text-neutral-800">
                        „Dla mnie luksus to czas i uwaga poświęcona detalom, które czynią różnicę między zwykłym wyjazdem a wyprawą życia.”
                    </blockquote>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-16 border-t border-neutral-100 pt-10">
<div className="group">
<div className="mb-3 text-[#C5A059]"><span className="iconify" data-icon="lucide:compass" data-width="24"></span></div>
<h3 className="font-serif text-lg text-neutral-800 mb-2">Sesja Odkrywcza</h3>
<p className="text-xs font-light text-neutral-500">20 minut, podczas których poznam Twoje marzenia.</p>
</div>
<div className="group">
<div className="mb-3 text-[#C5A059]"><span className="iconify" data-icon="lucide:gem" data-width="24"></span></div>
<h3 className="font-serif text-lg text-neutral-800 mb-2">Personalizacja</h3>
<p className="text-xs font-light text-neutral-500">Doświadczenia szyte na miarę Twoich pasji.</p>
</div>
</div>
<div className="relative">
<div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C5A059] to-transparent opacity-20 hidden lg:block"></div>
<h2 className="text-2xl text-neutral-900 font-serif mb-8">Zarezerwuj konsultację</h2>
<form className="space-y-8" id="luxuryForm">
<div className="group relative z-0 w-full">
<input className="block appearance-none focus:outline-none focus:ring-0 focus:border-[#C5A059] peer transition-colors duration-300 text-sm text-neutral-900 bg-transparent w-full border-neutral-300 border-0 border-b pt-2.5 pr-0 pb-2.5 pl-0" id="name" name="name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-xs text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C5A059] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider" htmlFor="name">Imię i Nazwisko</label>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative z-0 w-full">
<input className="block py-2.5 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#C5A059] peer transition-colors duration-300" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="peer-focus:font-medium absolute text-xs text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C5A059] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider" htmlFor="email">Adres Email</label>
</div>
<div className="group relative z-0 w-full">
<input className="block py-2.5 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#C5A059] peer transition-colors duration-300" id="phone" name="phone" placeholder=" " required="" type="tel"/>
<label className="peer-focus:font-medium absolute text-xs text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C5A059] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider" htmlFor="phone">Numer Telefonu</label>
</div>
</div>
<div className="group relative z-0 w-full">
<textarea className="block py-2.5 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#C5A059] peer transition-colors duration-300 resize-none" id="destination" name="destination" placeholder=" " rows="2"></textarea>
<label className="peer-focus:font-medium absolute text-xs text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C5A059] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider" htmlFor="destination">Dokąd planujesz podróż?</label>
</div>
<div className="pt-6">
<button className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-xs font-semibold uppercase tracking-[0.15em] text-white bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 overflow-hidden" id="submitBtn" type="submit">
<span className="relative z-10 flex items-center gap-2" id="btnText">Umów bezpłatną konsultację</span>
</button>
</div>
</form>
</div>
<footer className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400">
<p>© 2026 Patrycja Szkarłat</p>
<p>Luxury Travel Designer at <span className="font-semibold text-neutral-600">CARTER®</span></p>
</footer>
</div>
</div>
</div>


    </>
  );
}
