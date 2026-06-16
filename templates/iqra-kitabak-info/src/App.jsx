import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            
            // Here you would typically send this data to your backend
            console.log('Inscription:', { fullName, email });
            
            // Show success message
            document.getElementById('successMessage').classList.remove('hidden');
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('successMessage').classList.add('hidden');
            }, 5000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b border-neutral-200">
<div className="max-w-5xl mx-auto px-6 py-5">
<div className="flex items-center justify-between">
<div className="text-xl font-semibold tracking-tight text-neutral-900">IQRA</div>
<div className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="font-medium">Places limitées</span>
</div>
</div>
</div>
</header>

<section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-sm font-medium text-emerald-900">10 places disponibles</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                Remise à niveau Coran pour débutants
            </h1>
<p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                Rejoignez notre communauté d'apprentissage sur Discord et bénéficiez de cours structurés, d'échanges enrichissants et d'un accompagnement personnalisé.
            </p>
<p className="text-base text-emerald-700 font-medium mb-8">
                Préparez-vous au Ramadan avec une base solide
            </p>

<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200">
<div className="w-12 h-12 bg-white border border-neutral-200 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-neutral-900" icon="solar:book-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2">Cours structurés</h3>
<p className="text-sm text-neutral-600">Programme complet adapté aux débutants</p>
</div>
<div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200">
<div className="w-12 h-12 bg-white border border-neutral-200 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-neutral-900" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2">Petits groupes</h3>
<p className="text-sm text-neutral-600">Limité à 10 membres pour un meilleur suivi</p>
</div>
<div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200">
<div className="w-12 h-12 bg-white border border-neutral-200 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-neutral-900" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2">Sur Discord</h3>
<p className="text-sm text-neutral-600">Plateforme interactive et conviviale</p>
</div>
</div>
</div>

<div className="max-w-xl mx-auto">
<div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">
                        Inscrivez-vous maintenant
                    </h2>
<p className="text-neutral-600">
                        Remplissez le formulaire pour recevoir le lien du serveur Discord
                    </p>
</div>
<form className="space-y-5" id="registrationForm">
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2" htmlFor="fullName">
                            Nom complet
                        </label>
<input className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all" id="fullName" name="fullName" placeholder="Votre nom complet" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2" htmlFor="email">
                            Adresse email
                        </label>
<input className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all" id="email" name="email" placeholder="vous@exemple.com" required="" type="email"/>
</div>
<div className="pt-2">
<button className="w-full px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center gap-2" type="submit">
<span>S'inscrire pour 5€</span>
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="flex items-start gap-3 pt-2">
<iconify-icon className="text-neutral-400 flex-shrink-0 mt-0.5" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<p className="text-xs text-neutral-600 leading-relaxed">
                            Après votre inscription, vous recevrez un email avec le lien du serveur Discord et les instructions de paiement PayPal. Les frais d'inscription de 5€ servent à la gestion du site et des ressources pédagogiques.
                        </p>
</div>
</form>
<div className="hidden mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg" id="successMessage">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<div>
<h3 className="font-semibold text-emerald-900 mb-1">Inscription réussie !</h3>
<p className="text-sm text-emerald-800">Vous recevrez bientôt un email avec tous les détails.</p>
</div>
</div>
</div>
</div>

<div className="mt-8 space-y-4">
<div className="text-center">
<div className="inline-flex items-center gap-6 text-sm text-neutral-600">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bill-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>5€ d'inscription</span>
</div>
<div className="w-px h-4 bg-neutral-300"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Paiement via PayPal</span>
</div>
</div>
</div>
<div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-600 flex-shrink-0 mt-0.5" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<h3 className="font-semibold text-amber-900 text-sm mb-1">Frais mensuels libres</h3>
<p className="text-xs text-amber-800 leading-relaxed">
                                Les cours mensuels fonctionnent sur une base de participation libre. Chacun contribue selon ses moyens et sa satisfaction.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 mt-16">
<div className="max-w-5xl mx-auto px-6 py-8">
<div className="text-center text-sm text-neutral-600">
<p>© 2024 IQRA. Tous droits réservés.</p>
</div>
</div>
</footer>


    </>
  );
}
