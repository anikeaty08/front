import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-bg"></div>

<nav className="fixed w-full z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-stone-800">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-2xl tracking-tighter logo-font text-stone-900 z-50" href="#">AURA</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#culture">Culture</a>
<a className="hover:text-stone-900 transition-colors" href="#collection">Collection</a>
<a className="hover:text-stone-900 transition-colors" href="#rituels">Rituels</a>
<a className="hover:text-stone-900 transition-colors" href="#livre">Le Livre</a>
<a className="hover:text-stone-900 transition-colors" href="#about">À Propos</a>
</div>

<div className="flex items-center space-x-4">
<button className="text-stone-800 hover:text-stone-600 transition-colors">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">

<div className="absolute inset-0 z-0">
<img alt="Fumée d'encens abstraite" className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3eebbeb-9ee1-4d73-a569-2bcde03f4b2d_1600w.png"/>
<div className="bg-gradient-to-t from-stone-950 via-transparent to-stone-900/40 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 reveal">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 tracking-tight leading-tight mb-6">
                L’encens d’Afrique,<br/> <span className="text-stone-400 italic font-light">réinventé</span> pour aujourd’hui.
            </h1>
<p className="text-stone-300 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto mb-10">
                Aura capture l'âme des rituels ouest-africains dans des créations olfactives contemporaines. Une invitation à s'élever.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group bg-stone-100 text-stone-900 px-8 py-3 text-sm font-medium hover:bg-white transition-all duration-300 w-full md:w-auto text-center border border-transparent" href="#collection">
                    Explorer la collection
                </a>
<a className="group text-stone-200 border border-stone-700 px-8 py-3 text-sm font-medium hover:border-stone-500 hover:text-white transition-all duration-300 w-full md:w-auto text-center flex items-center justify-center gap-2" href="#culture">
                    Découvrir l'histoire
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 bg-[#FDFCF8]" id="culture">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-stone-200 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
<img alt="Mains préparant l'encens" className="w-full h-[500px] object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3eebbeb-9ee1-4d73-a569-2bcde03f4b2d_800w.png"/>
</div>
<div className="space-y-8">
<div className="space-y-2">
<span className="text-xs font-semibold tracking-widest text-amber-700 uppercase">Héritage</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">L'essence du rituel</h2>
</div>
<p className="text-stone-600 font-light leading-relaxed">
                    En Afrique de l'Ouest, l'encens n'est pas qu'un parfum, c'est un langage. Utilisé pour purifier les espaces, séduire ou marquer les moments sacrés, il se transmet de mère en fille. 
                </p>
<p className="text-stone-600 font-light leading-relaxed">
                    Aura modernise cet héritage ancestral pour la vie urbaine. Nous préservons la recette, mais épurons l'expérience pour qu'elle s'intègre dans votre quotidien effréné.
                </p>
<div className="flex flex-wrap gap-3 pt-4">
<span className="px-4 py-1 border border-stone-200 rounded-full text-xs text-stone-500">Purification</span>
<span className="px-4 py-1 border border-stone-200 rounded-full text-xs text-stone-500">Féminité</span>
<span className="px-4 py-1 border border-stone-200 rounded-full text-xs text-stone-500">Soin</span>
<span className="px-4 py-1 border border-stone-200 rounded-full text-xs text-stone-500">Spiritualité</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Boutique</span>
<h2 className="font-serif text-4xl text-stone-900 tracking-tight mt-2">La Collection Aura</h2>
</div>
<div className="hidden md:flex space-x-6 text-sm text-stone-500 mt-6 md:mt-0">
<button className="text-stone-900 border-b border-stone-900 pb-1">Tout voir</button>
<button className="hover:text-stone-900 transition-colors pb-1">Sarkhatane</button>
<button className="hover:text-stone-900 transition-colors pb-1">Gowé</button>
<button className="hover:text-stone-900 transition-colors pb-1">Diguidjé</button>
</div>
</div>

<div className="mb-6 border-b border-stone-100 pb-2">
<h3 className="font-serif text-xl italic text-stone-500">La gamme Sarkhatane</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">

<div className="group cursor-pointer">
<div className="relative bg-stone-50 aspect-[4/5] overflow-hidden mb-6">
<img alt="La Raffinée" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83ed462f-04d8-44a4-b4e1-77c6a59c591c_800w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white text-stone-900 p-3 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:underline decoration-1 underline-offset-4">La Raffinée</h3>
<p className="text-xs text-stone-500 mt-1 italic">Notes subtiles et élégantes.</p>
</div>
<span className="text-sm font-medium text-stone-900">35€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-stone-50 aspect-[4/5] overflow-hidden mb-6">
<img alt="Soumadouma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8fc68fd-7f65-414f-9a8b-5585ff7165d0_800w.png" style={{}}/>
<button className="absolute bottom-4 right-4 bg-white text-stone-900 p-3 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:underline decoration-1 underline-offset-4">Soumadouma</h3>
<p className="text-xs text-stone-500 mt-1 italic">La bonne odeur (Bambara).</p>
</div>
<span className="text-sm font-medium text-stone-900">38€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-stone-50 aspect-[4/5] overflow-hidden mb-6">
<div className="absolute inset-0 bg-[#3a3532]/10"></div>
<img alt="L'Essentielle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64edfc47-f79d-4681-8aa5-37fc93f06aa0_800w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white text-stone-900 p-3 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:underline decoration-1 underline-offset-4">L'Essentielle</h3>
<p className="text-xs text-stone-500 mt-1 italic">Retour aux sources pur.</p>
</div>
<span className="text-sm font-medium text-stone-900">32€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-stone-50 aspect-[4/5] overflow-hidden mb-6">
<img alt="Welamma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/816da140-16c3-41de-ae51-e4e9049bf0e3_800w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white text-stone-900 p-3 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:underline decoration-1 underline-offset-4">Welamma</h3>
<p className="text-xs text-stone-500 mt-1 italic">Le bonheur (Poular).</p>
</div>
<span className="text-sm font-medium text-stone-900">40€</span>
</div>
</div>
</div>

<div className="mb-6 border-b border-stone-100 pb-2 flex gap-8">
<h3 className="font-serif text-xl italic text-stone-500">Gowé &amp; Diguidjé</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

<div className="group cursor-pointer flex flex-col md:flex-row gap-6 items-center bg-stone-50 p-6">
<div className="relative aspect-square w-full md:w-48 overflow-hidden bg-stone-200">
<img alt="Gowé" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1c9e0b9-c5d9-48fc-b83b-ecd3de1ccd7a_800w.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="font-serif text-2xl text-stone-900 mb-2">Gowé</h3>
<span className="text-sm font-medium text-stone-900">45€</span>
</div>
<p className="text-sm text-stone-500 mb-4">Graines de souchet odorantes, notes terreuses et profondes.</p>
<button className="text-xs uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">Ajouter au panier</button>
</div>
</div>

<div className="group cursor-pointer flex flex-col md:flex-row gap-6 items-center bg-stone-50 p-6">
<div className="relative aspect-square w-full md:w-48 overflow-hidden bg-stone-200">
<img alt="Diguidjé" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7161bc1-8ca0-4222-8f8f-31ef6987e762_800w.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="font-serif text-2xl text-stone-900 mb-2">Diguidjé</h3>
<span className="text-sm font-medium text-stone-900">42€</span>
</div>
<p className="text-sm text-stone-500 mb-4">Parfum marin et minéral, issu des coquillages torréfiés.</p>
<button className="text-xs uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">Ajouter au panier</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-100" id="livre">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 order-2 md:order-1 relative">
<div className="aspect-[3/4] bg-stone-800 border border-stone-700 p-2 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
<img alt="Couverture Livre" className="w-full h-full object-cover grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd4bd37a-240c-4a00-8550-681cf0a1b5ef_1600w.png" style={{}}/>
<div className="absolute bottom-10 left-0 w-full text-center">
<h3 className="font-serif text-2xl text-white">L'Art de l'Encens</h3>
<p className="text-xs uppercase tracking-widest mt-1 text-stone-300">Sandji Sarkhatane</p>
</div>
</div>
</div>
<div className="md:col-span-7 order-1 md:order-2 space-y-8">
<span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">Éducation</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight">Comprendre le langage de la fumée</h2>
<p className="text-stone-400 font-light text-lg leading-relaxed">
                        Plus qu'un livre, un guide initiatique. Découvrez les secrets de fabrication, les recettes familiales et les portraits des femmes artisanes qui gardent ce savoir vivant.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-4 text-stone-300">
<iconify-icon className="text-amber-500" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="text-sm">Histoire et origines des rituels</span>
</li>
<li className="flex items-center gap-4 text-stone-300">
<iconify-icon className="text-amber-500" icon="solar:chef-hat-linear"></iconify-icon>
<span className="text-sm">Recettes exclusives à faire chez soi</span>
</li>
<li className="flex items-center gap-4 text-stone-300">
<iconify-icon className="text-amber-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-sm">Portraits d'artisans d'Afrique de l'Ouest</span>
</li>
</ul>
<button className="bg-amber-700 text-stone-50 px-8 py-3 text-sm font-medium hover:bg-amber-800 transition-colors w-full md:w-auto mt-6">
                        Commander le livre — 29€
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCF8]" id="rituels">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight mb-4">Créer votre moment Aura</h2>
<p className="text-stone-500">Trois étapes simples pour reconnecter avec soi-même.</p>
</div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-stone-200 z-0"></div>

<div className="relative z-10 bg-[#FDFCF8] p-6 text-center group">
<div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-900">Allumer</h3>
<p className="text-sm text-stone-500 font-light">Déposez une pincée sur un charbon ardent ou dans un brûleur moderne.</p>
</div>

<div className="relative z-10 bg-[#FDFCF8] p-6 text-center group">
<div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:cloud-sun-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-900">S'élever</h3>
<p className="text-sm text-stone-500 font-light">Observez les volutes de fumée monter. Laissez vos pensées suivre le mouvement.</p>
</div>

<div className="relative z-10 bg-[#FDFCF8] p-6 text-center group">
<div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-900">Ressentir</h3>
<p className="text-sm text-stone-500 font-light">Inspirez profondément. Laissez le parfum transformer l'énergie de la pièce.</p>
</div>
</div>
<div className="flex justify-center gap-4 mt-12 flex-wrap px-6">
<span className="text-xs uppercase tracking-widest text-stone-400">Idéal pour :</span>
<span className="text-xs font-medium text-stone-600 border-b border-stone-300">Détente</span>
<span className="text-xs font-medium text-stone-600 border-stone-300 border-b">Rituel</span>
<span className="text-xs font-medium text-stone-600 border-stone-300 border-b">Encens</span>
<span className="text-xs font-medium text-stone-600 border-b border-stone-300">Accueil</span>
</div>
</section>

<section className="py-24 bg-stone-100" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div className="">
<span className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-4 block">La Fondatrice</span>
<h2 className="font-serif text-3xl text-stone-900 mb-6">Sandji Sarkhatane</h2>
<div className="prose text-stone-600 font-light text-sm leading-7 mb-8">
<p className="">
  "J'ai créé Aura pour combler le fossé entre mes souvenirs d'enfance et ma vie de femme active.
  L'encens ne devrait pas être réservé aux grandes occasions, il est un compagnon de bien-être quotidien."
</p>
</div>
<div className="mt-8 pt-8 border-t border-stone-200">
<h3 className="font-serif text-xl text-stone-900 mb-4">Restons en contact</h3>
<p className="text-sm text-stone-500 mb-6">Abonnez-vous pour des conseils rituels et nouveautés.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors text-sm" placeholder="Prénom" type="text"/>
<input className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors text-sm" placeholder="Email" type="email"/>
</div>
<div className="pt-4">
<button className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-amber-700 transition-colors" type="submit">
                                Rejoindre le cercle
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>

<div className="relative h-full min-h-[400px]">
<img alt="Portrait Mood" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cf2453c-14bd-4106-af25-fac9c1c053dc_1600w.png"/>
<div className="border-stone-300 border mt-4 mr-4 mb-4 ml-4 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<span className="text-2xl tracking-tighter logo-font text-stone-100 block mb-2">AURA</span>
<p className="text-xs font-light">© 2026 Aura Incense House. Tous droits réservés.</p>
</div>
<div className="flex gap-6 text-sm">
<a className="hover:text-stone-100 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-stone-100 transition-colors" href="#">Livraison &amp; Retours</a>
<a className="hover:text-stone-100 transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:tiktok" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
