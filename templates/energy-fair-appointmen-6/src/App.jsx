import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Config Supabase
        const EDGE_URL = 'https://ucomqcrjzidvzznuvpqb.supabase.co/functions/v1/submit-rdv';
        const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjb21xY3Jqemlkdnp6bnV2cHFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5MzYzMjUsImV4cCI6MjA4NzUxMjMyNX0.J3ymahC1D52aZmJsXtL4RPhycY6OAOGgAcJm3SFqHKY';

        // Dropdown Logic
        const slots = [
            "Vendredi 20 Mars - Matin",
            "Vendredi 20 Mars - Après-midi",
            "Samedi 21 Mars - Matin",
            "Samedi 21 Mars - Après-midi",
            "Dimanche 22 Mars - Matin",
            "Dimanche 22 Mars - Après-midi",
            "Lundi 23 Mars - Matin",
            "Lundi 23 Mars - Après-midi"
        ];

        const dropdownContainer = document.getElementById('dropdown-container');
        const dropdownButton = document.getElementById('dropdown-button');
        const dropdownMenu = document.getElementById('dropdown-menu');
        const dropdownOptions = document.getElementById('dropdown-options');
        const dropdownText = document.getElementById('dropdown-text');
        const dropdownIcon = document.getElementById('dropdown-icon');
        const hiddenInput = document.getElementById('creneau');

        let isDropdownOpen = false;

        slots.forEach(slot => {
            const optionBtn = document.createElement('button');
            optionBtn.type = 'button';
            optionBtn.className = 'w-full text-left px-4 py-3 text-base font-light text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors focus:bg-blue-50 focus:text-blue-600 focus:outline-none';
            optionBtn.textContent = slot;
            optionBtn.addEventListener('click', () => {
                hiddenInput.value = slot;
                dropdownText.textContent = slot;
                dropdownText.classList.remove('text-slate-400');
                dropdownText.classList.add('text-slate-900', 'font-medium');
                closeDropdown();
            });
            dropdownOptions.appendChild(optionBtn);
        });

        function openDropdown() {
            dropdownMenu.classList.remove('hidden');
            setTimeout(() => {
                dropdownMenu.classList.remove('opacity-0');
                dropdownMenu.classList.add('opacity-100');
                dropdownIcon.classList.add('rotate-180');
                dropdownButton.classList.add('border-blue-500', 'ring-4', 'ring-blue-500/10', 'bg-white');
            }, 10);
            isDropdownOpen = true;
        }

        function closeDropdown() {
            dropdownMenu.classList.remove('opacity-100');
            dropdownMenu.classList.add('opacity-0');
            dropdownIcon.classList.remove('rotate-180');
            dropdownButton.classList.remove('border-blue-500', 'ring-4', 'ring-blue-500/10', 'bg-white');
            setTimeout(() => { dropdownMenu.classList.add('hidden'); }, 200);
            isDropdownOpen = false;
        }

        dropdownButton.addEventListener('click', () => {
            if (isDropdownOpen) { closeDropdown(); } else { openDropdown(); }
        });

        document.addEventListener('click', (e) => {
            if (isDropdownOpen && !dropdownContainer.contains(e.target)) { closeDropdown(); }
        });

        // Form Submission
        const form = document.getElementById('appointment-form');
        const formCard = document.getElementById('form-card');
        const successCard = document.getElementById('success-card');
        const submitBtn = document.getElementById('submit-btn');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!hiddenInput.value) {
                dropdownButton.classList.add('border-red-400', 'ring-4', 'ring-red-400/10');
                setTimeout(() => dropdownButton.classList.remove('border-red-400', 'ring-4', 'ring-red-400/10'), 2000);
                return;
            }

            const prenom      = document.getElementById('prenom').value.trim();
            const nom         = document.getElementById('nom').value.trim();
            const email       = document.getElementById('email').value.trim();
            const telephone   = document.getElementById('telephone').value.trim();
            const code_postal = document.getElementById('cp').value.trim();
            const creneau     = hiddenInput.value;

            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Envoi en cours…';

            try {
                const res = await fetch(EDGE_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + ANON_KEY
                    },
                    body: JSON.stringify({ prenom, nom, email, telephone, code_postal, creneau })
                });

                if (!res.ok) {
                    const err = await res.json().catch(() => ({}));
                    throw new Error(err.error || 'Erreur serveur');
                }

                document.getElementById('success-name').textContent = prenom;
                document.getElementById('success-email').textContent = email;
                document.getElementById('success-phone').textContent = telephone;

                formCard.style.opacity = '0';
                formCard.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    formCard.classList.add('invisible');
                    successCard.classList.remove('hidden');
                    void successCard.offsetWidth;
                    successCard.style.opacity = '1';
                    successCard.classList.add('animate-in', 'fade-in', 'zoom-in-95', 'duration-500');
                }, 300);

            } catch (err) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Confirmer mon rendez-vous';
                alert('Erreur : ' + (err.message || 'Veuillez réessayer.'));
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-50/80 via-transparent to-transparent -z-10 pointer-events-none"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<header className="w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
<img alt="Exhelia Home Solutions" className="md:h-20 w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27a342b0-dac6-4672-b0a2-9d6ad03ec55b_320w.png"/>
<div className="hidden md:flex items-center gap-2 text-base font-normal text-slate-600 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full">
<i className="w-5 h-5 text-blue-500" data-lucide="calendar"></i>
                20 - 23 Mars 2026
            </div>
</div>
</header>
<main className="flex-grow flex items-center py-12 md:py-20">
<div className="mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
<div className="flex flex-col gap-8 lg:col-span-7 max-w-2xl">
<div className="inline-flex items-center gap-2 text-sm font-medium text-amber-800 bg-amber-100/80 px-4 py-2 rounded-full ring-1 ring-amber-200/50 w-fit">
<i className="w-4 h-4 text-amber-600" data-lucide="map-pin"></i>
                    Salon de l'Énergie et de l'Habitat — Parc des Expositions, Colmar
                </div>
<div className="flex flex-col gap-4">
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-slate-900 tracking-tight">Des artisans locaux à votre service</h1>
<p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                        Rencontrons-nous au salon pour étudier votre projet. Découvrez comment diviser vos factures de chauffage et moderniser votre habitat avec l'accompagnement d'Exhelia.
                    </p>
</div>
<div className="grid sm:grid-cols-2 gap-4 mt-2">
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-32 h-32" data-lucide="piggy-bank"></i>
</div>
<div className="relative z-10">
<p className="text-base font-medium text-slate-500 mb-1">Votre installation</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-medium text-slate-700 tracking-tight">dès</span>
<span className="text-4xl font-medium text-blue-600 tracking-tight">990€</span>
</div>
<p className="text-sm text-slate-500 mt-2 font-light">Reste à charge (sous conditions de revenus).</p>
</div>
</div>
<div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden text-white group">
<div className="absolute -right-2 -bottom-2 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-28 h-28" data-lucide="trending-up"></i>
</div>
<div className="relative z-10">
<p className="text-base font-medium text-blue-200 mb-1">Profitez de</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-medium text-blue-100 tracking-tight">jusqu'à</span>
<span className="text-4xl font-medium text-white tracking-tight">9 000€</span>
</div>
<p className="text-sm text-blue-100 mt-2 font-light">d'aides de l'État (MaPrimeRénov', CEE, etc.)</p>
</div>
</div>
</div>
<div className="flex flex-col gap-6 mt-4">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Échange personnalisé sur stand</h3>
<p className="text-base text-slate-600 font-light mt-1">Évitez l'attente en réservant votre créneau. Nos conseillers étudieront la faisabilité technique et financière de votre projet.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none lg:mt-6">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-50 rounded-[2rem] blur-lg opacity-50"></div>
<div className="relative bg-white border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-3xl p-8 md:p-10 transition-all duration-500" id="form-card">
<div className="mb-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">
                            Réserver un créneau
                        </h2>
<p className="text-base text-slate-500 font-light">
                            Assurez-vous de la disponibilité d'un expert lors de votre visite au salon.
                        </p>
</div>
<form className="flex flex-col gap-5" id="appointment-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="mb-1.5 block text-base font-medium text-slate-700" htmlFor="prenom">Prénom</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" id="prenom" required="" type="text"/>
</div>
<div>
<label className="mb-1.5 block text-base font-medium text-slate-700" htmlFor="nom">Nom</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" id="nom" required="" type="text"/>
</div>
</div>
<div>
<label className="mb-1.5 block text-base font-medium text-slate-700" htmlFor="email">Adresse e-mail</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" id="email" placeholder="vous@exemple.fr" required="" type="email"/>
</div>
<div>
<label className="mb-1.5 block text-base font-medium text-slate-700" htmlFor="telephone">Numéro de téléphone</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" id="telephone" placeholder="06 12 34 56 78" required="" type="tel"/>
</div>
<div>
<label className="mb-1.5 block text-base font-medium text-slate-700" htmlFor="cp">Code postal de votre projet</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" id="cp" placeholder="Ex: 68000" required="" type="text"/>
</div>
<div className="relative" id="dropdown-container">
<label className="mb-1.5 block text-base font-medium text-slate-700">Disponibilité au salon</label>
<button className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-base text-slate-900 outline-none transition-all hover:border-slate-300 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 flex justify-between items-center text-left" id="dropdown-button" type="button">
<span className="text-slate-400" id="dropdown-text">Choisir un moment</span>
<i className="w-5 h-5 text-slate-400 transition-transform duration-200" data-lucide="chevron-down" id="dropdown-icon"></i>
</button>
<div className="absolute left-0 right-0 top-full mt-2 hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 z-50 overflow-hidden opacity-0 transition-opacity duration-200" id="dropdown-menu">
<div className="max-h-64 overflow-y-auto custom-scrollbar p-2 flex flex-col gap-1" id="dropdown-options">
</div>
</div>
<input id="creneau" required="" type="hidden"/>
</div>
<button className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-4 text-base font-medium text-white transition-all hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/20 shadow-md shadow-blue-500/20 flex justify-center items-center gap-2 group" id="submit-btn" type="submit">
                            Confirmer mon rendez-vous
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="text-sm text-slate-400 text-center mt-2 font-light flex items-center justify-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="lock"></i>
                            Vos données sont sécurisées.
                        </p>
</form>
</div>
<div className="hidden absolute inset-0 bg-white border border-slate-200 shadow-xl shadow-slate-200/40 rounded-3xl p-10 text-center transition-all duration-500 flex flex-col justify-center" id="success-card">
<div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
<i className="w-10 h-10" data-lucide="check"></i>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
                        C'est noté !
                    </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                        Merci <span className="font-medium text-slate-900" id="success-name"></span>. Votre rendez-vous au salon de Colmar est confirmé.
                    </p>
<div className="bg-slate-50/80 rounded-2xl p-6 text-left flex flex-col gap-5 border border-slate-100">
<div className="flex items-start gap-4">
<div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-blue-500" data-lucide="mail"></i>
</div>
<p className="text-base text-slate-700 pt-1 font-light">Confirmation envoyée à <br/><span className="font-medium text-slate-900" id="success-email"></span></p>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-blue-500" data-lucide="message-square"></i>
</div>
<p className="text-base text-slate-700 pt-1 font-light">Rappel SMS prévu sur le <br/><span className="font-medium text-slate-900" id="success-phone"></span></p>
</div>
</div>
<button className="mt-8 w-full rounded-xl bg-slate-900 px-4 py-4 text-base font-medium text-white transition-all hover:bg-slate-800 shadow-md" onclick="window.location.reload()">
                        Retour au site
                    </button>
</div>
</div>
</div>
</main>
<footer className="w-full border-t border-slate-200 bg-white py-10 mt-auto">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<img alt="Exhelia" className="opacity-60 h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86bda0fc-e5d3-416d-9c25-d43ea225a344_320w.jpg"/>
<p className="text-base text-slate-500 font-light">© 2026 Tous droits réservés.</p>
</div>
<div className="flex items-center gap-8">
<a className="text-base font-light text-slate-500 hover:text-slate-900 transition-colors" href="#">Mentions légales</a>
<a className="text-base font-light text-slate-500 hover:text-slate-900 transition-colors" href="#">Confidentialité</a>
</div>
</div>
</footer>


    </>
  );
}
