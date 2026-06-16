import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Logique de filtrage des onglets du menu
            const tabs = document.querySelectorAll('.menu-tab');
            const items = document.querySelectorAll('.menu-item');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Reset styling for all tabs
                    tabs.forEach(t => {
                        t.classList.remove('bg-[#ce3f23]', 'text-white', 'shadow-xl', 'shadow-[#ce3f23]/30', '-translate-y-1');
                        t.classList.add('bg-white', 'text-[#ce3f23]', 'shadow-sm');
                    });

                    // Add active styling to clicked tab
                    tab.classList.remove('bg-white', 'text-[#ce3f23]', 'shadow-sm');
                    tab.classList.add('bg-[#ce3f23]', 'text-white', 'shadow-xl', 'shadow-[#ce3f23]/30', '-translate-y-1');

                    const target = tab.getAttribute('data-target');

                    // Filter items
                    items.forEach(item => {
                        if (target === 'best-sellers') {
                            if (item.getAttribute('data-bestseller') === 'true') {
                                item.style.display = 'flex';
                            } else {
                                item.style.display = 'none';
                            }
                        } else {
                            if (item.getAttribute('data-category') === target) {
                                item.style.display = 'flex';
                            } else {
                                item.style.display = 'none';
                        }
                    }
                });
            });
        });

        // Gestion de la modale des accompagnements
        const modal = document.getElementById('side-dish-modal');
        const modalContent = document.getElementById('side-dish-modal-content');
        const closeModalBtn = document.getElementById('close-modal');
        const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

        const openModal = () => {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Petit délai pour permettre au navigateur de processer le display avant d'animer l'opacité
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        };

        const closeModal = () => {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300); // Correspond à la durée de la transition (duration-300)
        };

        // Ouvrir la modale au clic sur n'importe quel bouton "Ajouter"
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });

        // Fermer la modale au clic sur le bouton X
        closeModalBtn.addEventListener('click', closeModal);

        // Fermer la modale au clic sur l'arrière-plan (backdrop)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Gestion des styles lors de la sélection des boutons radio (Modale)
        const radios = document.querySelectorAll('#side-dish-form input[type="radio"]');
        const radioLabels = document.querySelectorAll('#side-dish-form label');

        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                // Réinitialiser les styles de toutes les options
                radioLabels.forEach(label => {
                    label.classList.remove('border-[#1c7755]', 'bg-[#1c7755]/5');
                    label.classList.add('border-gray-200');
                });
                
                // Appliquer le style actif à l'option sélectionnée
                if (radio.checked) {
                    radio.closest('label').classList.remove('border-gray-200');
                    radio.closest('label').classList.add('border-[#1c7755]', 'bg-[#1c7755]/5');
                }
            });
        });

        // Simuler un clic sur le bouton "Menus" au chargement pour afficher les articles par défaut
        const defaultActiveTab = document.querySelector('[data-target="menus"]');
        if (defaultActiveTab) {
            defaultActiveTab.click();
        }
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky z-50 bg-[#f5f1e9]/90 border-[#ce3f23]/10 border-b top-0 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">
<a className="flex items-center gap-1 group" href="#">
<img alt="Logo DABALI Elephant" className="group-hover:scale-105 transition-transform duration-300 w-20 h-20 object-contain z-10 relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16d68ea4-5e8a-4b66-b680-886a12c1ef77_800w.png"/>
<img alt="Dybali Stylized Logo Graphic" className="origin-left z-50 w-auto h-12 object-contain relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bdefe42-0aa2-46d2-ae3d-60d16fe3cf30_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-[#ce3f23] transition-colors text-2xl font-light text-gray-700 tracking-tight" href="#menu">Menu</a>
<a className="text-2xl font-light text-gray-700 hover:text-[#ce3f23] transition-colors tracking-tight" href="#contact">Contact</a>
<span className="px-4 py-1.5 bg-[#1c7755]/10 text-[#1c7755] rounded-full text-lg font-normal tracking-wide border border-[#1c7755]/20">100% À EMPORTER</span>
</div>
<div className="flex items-center gap-4">
<button className="flex hover:border-[#1c7755] hover:bg-[#1c7755]/5 transition-all text-[#1c7755] bg-white w-12 h-12 border-gray-200 border rounded-full relative shadow-sm items-center justify-center">
<iconify-icon height="24" icon="solar:bag-3-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#f44a35] text-white text-base w-6 h-6 flex items-center justify-center rounded-full font-light shadow-md shadow-[#f44a35]/40">3</span>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow">
<section className="overflow-hidden lg:bg-[radial-gradient(circle_at_30%_50%,_#f44a35_0%,_#ce3f23_100%)] pt-16 pb-32 relative">
<div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E&quot'}}></div>
<div className="-mr-32 -mt-32 pointer-events-none bg-white/10 opacity-30 mix-blend-overlay w-[600px] h-[600px] rounded-full absolute top-0 right-0 blur-3xl z-0"></div>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="max-w-2xl">
<div className="flex flex-wrap gap-3 mb-8 gap-x-3 gap-y-3 items-center">
<span className="flex items-center gap-1.5 text-lg font-normal text-[#ce3f23] tracking-wide bg-white border-transparent border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md">
<iconify-icon height="20" icon="solar:home-2-linear" width="20"></iconify-icon> FAIT MAISON
                            </span>
<span className="flex items-center gap-1.5 text-lg font-normal text-gray-800 tracking-wide bg-white border-transparent border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md">
<iconify-icon className="" height="20" icon="solar:calendar-linear" width="20"></iconify-icon> DEPUIS 2025
                            </span>
</div>
<h1 className="sm:text-7xl lg:text-8xl leading-[0.9] uppercase text-6xl font-normal text-white tracking-tight font-display mb-8 drop-shadow-sm">
                            Y'a Sauce,<br/> <span className="text-[#ffc446]">Y'a Gout,</span><br/> Y'a Dabali.</h1>
<p className="text-3xl text-white/90 mb-10 leading-relaxed tracking-tight drop-shadow-sm">
                            Découvrez le goût authentique et vibrant de la Côte d'Ivoire. Fraîchement préparé, parfaitement
                            emballé et prêt à emporter.
                            <strong className="text-[#ffc446] font-normal">Strictement 100% à emporter.</strong>
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center hover:bg-gray-100 hover:-translate-y-0.5 transition-all shadow-black/10 sm:w-auto text-3xl font-light text-[#ce3f23] tracking-tight bg-white w-full rounded-2xl pt-4 pr-8 pb-4 pl-8 shadow-xl" href="#menu">
                                Commander
                                <iconify-icon className="ml-2" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center hover:bg-white/10 transition-colors sm:w-auto text-3xl font-light text-white tracking-tight bg-transparent w-full border-white/30 border rounded-2xl pt-4 pr-8 pb-4 pl-8" href="#checkout">
                                Voir le Panier
                            </a>
</div>
</div>
<div className="overflow-hidden shadow-black/20 bg-[#f5f1e9] h-[600px] border-white border-8 rounded-[2.5rem] relative shadow-2xl">

<video autoplay="" className="z-0 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9846098d-beb8-4f6f-8eef-7ae3ed68c87a_800w.png)] object-cover absolute top-0 right-0 bottom-0 left-0 translate-y-16 scale-125" loop="" muted="" playsinline="" src="VOTRE_LIEN_VIDEO_ICI.mp4"></video>
<div className="absolute bottom-8 left-8 right-8 z-10">
<div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/20 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-[#1c7755]/10 p-3 rounded-2xl text-[#1c7755]">
<iconify-icon height="32" icon="solar:box-linear" width="32"></iconify-icon>
</div>
<div className="">
<p className="text-gray-900 font-normal text-2xl tracking-tight">Préparation Rapide</p>
<p className="text-gray-500 text-xl tracking-tight">Prêt en 15 mins</p>
</div>
</div>
<div className="text-right">
<div className="flex items-center gap-1 text-[#ffc446] justify-end mb-1">
<iconify-icon className="text-[#ffc446]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#ffc446]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#ffc446]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#ffc446]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#ffc446]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-gray-900 font-normal text-lg tracking-tight">Mieux Noté</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full overflow-hidden bg-[#ce3f23] py-5 flex relative border-y border-white/20">
<div className="flex whitespace-nowrap flex-nowrap w-full">
<div className="flex items-center flex-shrink-0 animate-marquee">
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
</div>
<div className="flex items-center flex-shrink-0 animate-marquee">
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
<span className="text-4xl text-white font-display uppercase tracking-widest mx-4">Y'A SAUCE. Y'A GOÛT. Y'A DABALI .</span>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-white border-gray-100 pt-24 pb-24 relative" id="menu">
<div className="absolute top-40 -left-32 w-[600px] h-[600px] bg-[#ffc446]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-40 -right-32 w-[600px] h-[600px] bg-[#1c7755]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="flex flex-col mb-16 gap-x-8 gap-y-8">
<div className="max-w-3xl">
<h2 className="text-5xl md:text-6xl font-normal tracking-tight text-[#ce3f23] uppercase mb-4 font-display">Notre Carte</h2>
<p className="text-3xl text-gray-600 tracking-tight">Soigneusement emballé pour préserver la chaleur et les saveurs authentiques jusqu'à votre destination.</p>
</div>
<div className="relative w-full py-2">
<div className="flex overflow-x-auto gap-3 -mx-4 sm:mx-0 sm:px-0 [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 pb-4 items-center" id="menu-tabs">
<button className="menu-tab uppercase whitespace-nowrap transition-all duration-300 flex-shrink-0 hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 hover:-translate-y-1 text-3xl tracking-tight font-display border-[#ce3f23]/20 border-2 rounded-full pt-3 pr-8 pb-3 pl-8 bg-white text-[#ce3f23] shadow-sm" data-target="best-sellers">Best-Sellers</button>
<button className="menu-tab uppercase whitespace-nowrap transition-all duration-300 flex-shrink-0 text-3xl tracking-tight font-display border-[#ce3f23] border-2 rounded-full pt-3 pr-8 pb-3 pl-8 bg-[#ce3f23] text-white shadow-xl shadow-[#ce3f23]/30 -translate-y-1" data-target="menus">Menus</button>
<button className="menu-tab uppercase whitespace-nowrap transition-all duration-300 flex-shrink-0 hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 hover:-translate-y-1 text-3xl tracking-tight font-display border-[#ce3f23]/20 border-2 rounded-full pt-3 pr-8 pb-3 pl-8 bg-white text-[#ce3f23] shadow-sm" data-target="sandwichs">Sandwichs</button>
<button className="menu-tab uppercase whitespace-nowrap transition-all duration-300 flex-shrink-0 hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 hover:-translate-y-1 text-3xl tracking-tight font-display border-[#ce3f23]/20 border-2 rounded-full pt-3 pr-8 pb-3 pl-8 bg-white text-[#ce3f23] shadow-sm" data-target="partager">À Partager</button>
<button className="menu-tab uppercase whitespace-nowrap transition-all duration-300 flex-shrink-0 hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 hover:-translate-y-1 text-3xl tracking-tight font-display border-[#ce3f23]/20 border-2 rounded-full pt-3 pr-8 pb-3 pl-8 bg-white text-[#ce3f23] shadow-sm" data-target="accompagnements">Accompagnements</button>
<button className="menu-tab uppercase whitespace-nowrap transition-all duration-300 flex-shrink-0 hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 hover:-translate-y-1 text-3xl tracking-tight font-display border-[#ce3f23]/20 border-2 rounded-full pt-3 pr-8 pb-3 pl-8 bg-white text-[#ce3f23] shadow-sm" data-target="boissons">Boissons</button>
<button className="menu-tab uppercase whitespace-nowrap transition-all duration-300 flex-shrink-0 hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 hover:-translate-y-1 text-3xl tracking-tight font-display border-[#ce3f23]/20 border-2 rounded-full pt-3 pr-8 pb-3 pl-8 bg-white text-[#ce3f23] shadow-sm" data-target="desserts">Desserts</button>
</div>
<div className="absolute top-0 right-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden"></div>
</div>
</div>
<div className="flex gap-6 mt-4 mb-10 gap-x-6 gap-y-6 items-center">
<iconify-icon className="text-[#ce3f23]" height="36" icon="solar:cup-hot-linear" width="36"></iconify-icon>
<h3 className="text-4xl font-normal tracking-tight text-gray-900 font-display uppercase shrink-0">Sélection</h3>
<div className="h-1 rounded-full bg-gradient-to-r from-[#ce3f23] via-[#ffc446] to-transparent w-full opacity-40"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8" id="menu-grid">


<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="menus" style={{display: 'flex'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Menu APF" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c86dde60-fd3e-4677-bda4-353fa6e83db6_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex gap-4 mb-3 gap-x-4 gap-y-4 items-start justify-between">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Choukouya poulet</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>24 CHF</span>
</div>
<p className="flex-1 leading-relaxed text-2xl text-gray-600 tracking-tight mb-8">De généreux morceaux de poulet braisés et intensément parfumés aux épices choukouya. Un classique fumé et irrésistible qui fond dans la bouche.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-bestseller="true" data-category="menus" style={{display: 'flex'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Menu Papillote Poisson" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d0d3aaf-b25d-488a-9df6-607a1a8798b3_1600w.png"/>
<div className="absolute top-4 right-4 bg-[#ffc446] px-4 py-1.5 rounded-full text-xl font-normal tracking-tight text-gray-900 shadow-md flex items-center gap-1.5">
<iconify-icon className="text-[#ce3f23]" height="20" icon="solar:fire-bold" width="20"></iconify-icon> Populaire
                            </div>
</div>
<div className="flex-1 flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">choukouya agneau</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>26 CHF</span>
</div>
<p className="flex-1 leading-relaxed text-2xl text-gray-600 tracking-tight mb-8">De tendres morceaux d'agneau grillés et relevés aux épices traditionnelles. Le choukouya authentique pour les amateurs de viande de caractère.</p>
<button className="add-to-cart-btn w-full py-4 bg-[#1c7755] border-2 border-[#1c7755] text-white rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#1c7755]/20">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="menus" style={{display: 'flex'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Menu Sardine Igname" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fb0b390-4d94-425a-87e1-7c7885bc0aba_1600w.png"/>
</div>
<div className="flex-1 flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Sardine Igname</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>20 CHF</span>
</div>
<p className="flex-1 leading-relaxed text-2xl text-gray-600 tracking-tight mb-8">De généreux morceaux d'igname frits, croustillants à l'extérieur et fondants à cœur, accompagnés de savoureuses sardines.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="menus" style={{display: 'flex'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Menu Choukouya" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d20c6d34-9f15-43f2-ba17-2ec2f03b392a_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Dabali Grill mix</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>28 CHF</span>
</div>
<p className="flex-1 leading-relaxed text-2xl text-gray-600 tracking-tight mb-8" id="menu">Le classique ivoirien avec viande grillée tendrement préparée, 
un accompagnement et une boisson au choix.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="menus" style={{display: 'flex'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Menu Garba" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbbb11e0-69be-4a8b-b32b-fda1e9eeec6b_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">l'apf</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>24 CHF</span>
</div>
<p className="flex-1 leading-relaxed text-2xl text-gray-600 tracking-tight mb-8">Le véritable Garba incontournable : attiéké, thon frit, légumes frais, piment doux, accompagné de votre boisson préférée.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="menus" style={{display: 'flex'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Menu Placali" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbbb11e0-69be-4a8b-b32b-fda1e9eeec6b_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">papillote poisson</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>22 CHF</span>
</div>
<p className="flex-1 leading-relaxed text-2xl text-gray-600 tracking-tight mb-8">Poisson frais braisé dans les règles de l'art, croustillant à l'extérieur et moelleux à cœur. L'alliance parfaite avec une belle portion d'attiéké.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="partager" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Mix découverte" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/505dc578-b34b-4745-b3ec-05c4b9b02f9d_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Mix Découverte</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>18 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Un assortiment gourmand et croustillant de nos meilleures entrées pour goûter un peu de tout entre amis.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="partager" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Samoussas / Nems / Pastels" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22a73d1e-389f-45ee-9706-f8582ceee2af_1600w.png"/>
</div>
<div className="flex-1 flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Nems</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>9 CHF</span>
</div>
<p className="flex-1 leading-relaxed tracking-tight text-2xl text-gray-600 mb-8">Assortiment de beignets croustillants et dorés faits maison, idéals pour commencer le repas.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="partager" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Ailes de Poulet Braisées" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15b5066a-7ec8-4141-a227-abe38478cc33_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">claclos</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>12 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Délicieuses ailes de poulet marinées et braisées à la perfection, parfaites pour être partagées.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="partager" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Mini-Brochettes" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d0d3aaf-b25d-488a-9df6-607a1a8798b3_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Aller-Retour</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>14 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Assortiment de petites brochettes de viande tendrement épicées, un classique de la street-food ivoirienne.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="partager" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Plateau de Fritures" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c876e6d0-da21-4966-8150-be44af38f7e7_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Samossas</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>15 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Une généreuse sélection d'alloco, igname et patate douce frites, accompagnée de nos sauces maison.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="sandwichs" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Bunny Poulet" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6555cc37-b8e0-4556-b462-2536fc3f7ec3_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Chap-CHAP Poulet</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>18 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Notre pain signature garni de poulet savoureux, tendrement préparé avec nos sauces maison.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-bestseller="true" data-category="sandwichs" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Bunny Choukouya" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/354fb298-2cdc-4db8-876b-f0e9b0a32d45_1600w.png"/>
<div className="absolute top-4 right-4 bg-[#ffc446] px-4 py-1.5 rounded-full text-xl font-normal tracking-tight text-gray-900 shadow-md flex items-center gap-1.5">
<iconify-icon className="text-[#ce3f23]" height="20" icon="solar:fire-bold" width="20"></iconify-icon> Populaire
                            </div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">chap-chap Choukouya</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>19 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">L'alliance parfaite : notre pain signature rempli de l'incontournable viande choukouya tendrement grillée.</p>
<button className="add-to-cart-btn w-full py-4 bg-[#1c7755] border-2 border-[#1c7755] text-white rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#1c7755]/20">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="sandwichs" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Bunny Healthy" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cef6928e-b530-433f-8027-c29819783796_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex gap-4 mb-3 gap-x-4 gap-y-4 items-start justify-between">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">chap-chap Healthy</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>19 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">L'option légère et équilibrée, pleine de fraîcheur et de saveurs authentiques pour un repas sans complexe.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="sandwichs" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Bunny Veggy" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee51f118-3cae-4049-8786-6b5acdd74393_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">chap-chap Veggy</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>15 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Une délicieuse alternative végétarienne généreusement garnie de légumes croquants dans notre pain moelleux.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="plats" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Choukouya Poulet" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1501659a-fcfe-43f5-857c-58d73fadac5a_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Choukouya Poulet</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>22 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Morceaux de poulet choukouya tendrement grillés, relevés avec nos épices secrètes et servis chauds.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-bestseller="true" data-category="plats" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Attiéké Poisson" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91ab19c2-19c7-4b4c-b92e-e90dc7525571_1600w.png"/>
<div className="absolute top-4 right-4 bg-[#ffc446] px-4 py-1.5 rounded-full text-xl font-normal tracking-tight text-gray-900 shadow-md flex items-center gap-1.5">
<iconify-icon className="text-[#ce3f23]" height="20" icon="solar:fire-bold" width="20"></iconify-icon> Populaire
                            </div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Attiéké Poisson</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>22 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">L'incontournable ivoirien : semoule de manioc vapeur accompagnée de poisson frit doré, piment doux et huile rouge.</p>
<button className="add-to-cart-btn w-full py-4 bg-[#1c7755] border-2 border-[#1c7755] text-white rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ffc446] hover:border-[#ffc446] hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#1c7755]/20">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="plats" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Papillote Poisson/Crevettes" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Papillote Poisson / Crevettes</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>26 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Délicate cuisson en papillote préservant toutes les saveurs marines et les arômes délicats des épices douces.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="plats" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Choukouya Agneau" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d0d3aaf-b25d-488a-9df6-607a1a8798b3_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Choukouya Agneau</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>28 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Agneau fondant et juteux, préparé dans la plus pure tradition du choukouya ivoirien avec une marinade riche.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="accompagnements" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Frites" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c106dcc8-69f8-4ba3-b6e6-a8382f1ed6d5_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Frites</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>6 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Le choix parfait : de délicieuses frites croustillantes et dorées, prêtes à être accompagnées de nos sauces.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="accompagnements" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Alocos" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de199e6e-ca44-4ca1-9b39-62a8e8971e1e_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Alocos</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>7 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Un assortiment savoureux de bananes plantains frites et fondantes, apportant une douce note caramélisée.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="accompagnements" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Riz" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5e49d47-66a6-4414-a307-d4a463f0d6d0_1600w.jpg"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Riz</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>5 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Portion généreuse de riz parfumé, l'accompagnement classique et idéal pour mettre en valeur toutes nos sauces.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="accompagnements" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Attiéké" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d290068-0107-4fc4-b3b9-d9bfbceebded_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="leading-none text-3xl font-normal text-gray-900 tracking-tight font-display">Attiéké</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>6 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">L'authentique semoule de manioc ivoirienne, cuite à la vapeur. Légère, savoureuse et légèrement acidulée.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="boissons" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Jus Maison" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c0e58a1-2acf-4e45-b08a-58c043bc575b_3840w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Jus Maison</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>5 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Jus naturel préparé chaque jour, rafraîchissant, authentique et plein de vitamines pour vous désaltérer.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="boissons" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Soft" className="group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] w-full h-full object-cover scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/201047a8-0547-4b30-a45f-20110abc88a7_1600w.png" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Soft</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border-gray-200 border rounded-full mt-0.5 pt-1 pr-3 pb-1 pl-3 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>3 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Une large sélection de sodas et boissons gazeuses bien fraîches pour accompagner parfaitement votre repas.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="boissons" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Bantu" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75b84ab0-f3e3-4210-9284-cc08ff061ce2_1600w.png" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Bantu</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>4 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Boisson locale rafraîchissante et légèrement énergisante, parfaite pour accompagner vos plats avec ses notes subtiles.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>

<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="desserts" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Beignets" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/633a66c8-aa19-476f-9a34-abaf354e3b76_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Beignets</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>5 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">De délicieux beignets africains (Bofrot), moelleux à l'intérieur et dorés à l'extérieur pour une touche sucrée.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="desserts" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Croquettes" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49d0f6b0-ccde-4f3e-992b-da7bb610786f_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Croquettes</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>4 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Petites bouchées sucrées et croquantes, la friandise incontournable pour finir le repas en douceur.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="desserts" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Salade de fruits" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4b88c1e-7418-40ac-a715-21c32f797f3e_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Salade de fruits</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>6 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Un mélange rafraîchissant de fruits tropicaux coupés du jour pour un dessert léger et équilibré.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="desserts" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Chips Banane" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbbb11e0-69be-4a8b-b32b-fda1e9eeec6b_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Chips Banane</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>3 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">Fines tranches de banane plantain croustillantes et légèrement sucrées, le snack qui plaît à tout le monde.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
<article className="menu-item flex flex-col bg-[#f5f1e9] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#ce3f23]/30 hover:shadow-2xl hover:shadow-[#ce3f23]/10 transition-all duration-300 group" data-category="desserts" style={{display: 'none'}}>
<div className="h-64 overflow-hidden relative">
<img alt="Dabali Sweety" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35734880-46e4-4668-a752-1a9bb946003c_1600w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start gap-4 mb-3">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display leading-none">Dabali Sweety</h3>
<span className="flex items-center gap-2 shrink-0 whitespace-nowrap text-xl font-normal text-gray-900 tracking-tight bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#ce3f23]"></span>7 CHF</span>
</div>
<p className="text-gray-600 mb-8 flex-1 text-2xl leading-relaxed tracking-tight">La douceur signature de la maison, un dessert surprise gourmand et réconfortant unique en son genre.</p>
<button className="add-to-cart-btn w-full py-4 bg-white border-2 border-[#ce3f23]/20 text-[#ce3f23] rounded-2xl font-light tracking-tight text-3xl hover:bg-[#ce3f23] hover:border-[#ce3f23] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon> Ajouter
                            </button>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#f5f1e9] pt-24 pb-24" id="checkout">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 uppercase font-display mb-4">Finalisez Votre Commande</h2>
<p className="text-3xl text-gray-600 flex items-center justify-center gap-2 tracking-tight">
<iconify-icon className="text-[#1c7755]" height="24" icon="solar:lock-password-linear" width="24"></iconify-icon> Plateforme de Paiement Sécurisée
                    </p>
</div>
<div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
<div className="grid lg:grid-cols-5 h-full">
<div className="lg:col-span-2 bg-gray-50 p-8 lg:p-10 border-r border-gray-100 flex flex-col">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 mb-8 font-display uppercase">Votre Panier</h3>
<div className="space-y-6 flex-1">
<div className="flex justify-between items-start group">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#ce3f23] font-normal text-xl shadow-sm group-hover:border-[#ce3f23] transition-colors">1x</div>
<div className="">
<span className="block text-gray-900 text-2xl font-light tracking-tight leading-tight">Menu Choukouya</span>
<span className="text-lg text-gray-500 mt-1 block">Très pimenté</span>
</div>
</div>
<span className="text-gray-900 font-light tracking-tight text-2xl">28 CHF</span>
</div>
<div className="flex justify-between items-start group">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#ce3f23] font-normal text-xl shadow-sm group-hover:border-[#ce3f23] transition-colors">2x</div>
<div className="">
<span className="block text-gray-900 text-2xl font-light tracking-tight leading-tight">Jus maison</span>
<span className="text-lg text-[#1c7755] mt-1 block cursor-pointer hover:underline">Modifier</span>
</div>
</div>
<span className="text-gray-900 font-light tracking-tight text-2xl">10 CHF</span>
</div>
</div>
<div className="border-t border-gray-200 pt-6 mt-8 space-y-4">
<div className="flex justify-between text-gray-600 text-2xl tracking-tight">
<span>Sous-total</span>
<span>38 CHF</span>
</div>
<div className="flex justify-between text-gray-600 text-2xl tracking-tight">
<span className="flex items-center gap-2">Emballage à Emporter <iconify-icon className="text-gray-400" height="20" icon="solar:info-circle-linear" width="20"></iconify-icon></span>
<span className="">2 CHF</span>
</div>
<div className="flex justify-between text-4xl font-normal tracking-tight text-[#ce3f23] pt-6 mt-4 border-t border-gray-200">
<span>Total</span>
<span className="">40 CHF</span>
</div>
</div>
</div>
<div className="lg:col-span-3 p-8 lg:p-12">
<form className="space-y-8">
<div className="space-y-3">
<label className="block text-gray-800 font-light text-xl tracking-tight">Choisissez l'heure de retrait</label>
<div className="relative">
<select className="w-full bg-[#f5f1e9] border border-transparent rounded-2xl px-5 py-4 text-gray-900 text-2xl tracking-tight focus:ring-2 focus:ring-[#1c7755] focus:border-transparent focus:bg-white appearance-none cursor-pointer transition-all outline-none">
<option>Dès que possible (15-20 mins)</option>
<option>Dans 45 minutes</option>
<option>Programmer pour plus tard</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
<iconify-icon className="text-gray-500" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-4">
<label className="block text-gray-800 font-light text-xl tracking-tight">Qui récupère la commande ?</label>
<div className="grid sm:grid-cols-2 gap-4">
<input className="w-full bg-[#f5f1e9] border border-transparent rounded-2xl px-5 py-4 text-gray-900 text-2xl tracking-tight focus:ring-2 focus:ring-[#1c7755] focus:bg-white transition-all outline-none placeholder-gray-400" placeholder="Prénom" type="text"/>
<input className="w-full bg-[#f5f1e9] border border-transparent rounded-2xl px-5 py-4 text-gray-900 text-2xl tracking-tight focus:ring-2 focus:ring-[#1c7755] focus:bg-white transition-all outline-none placeholder-gray-400" placeholder="Nom de famille" type="text"/>
</div>
<input className="w-full bg-[#f5f1e9] border border-transparent rounded-2xl px-5 py-4 text-gray-900 text-2xl tracking-tight focus:ring-2 focus:ring-[#1c7755] focus:bg-white transition-all outline-none placeholder-gray-400" placeholder="Numéro de téléphone (pour le suivi)" type="tel"/>
</div>
<div className="space-y-4">
<label className="block text-gray-800 font-light text-xl tracking-tight">Moyen de Paiement</label>
<div className="grid sm:grid-cols-2 gap-4">
<label className="relative flex items-center justify-center p-5 border-2 border-[#1c7755] bg-[#1c7755]/5 rounded-2xl cursor-pointer shadow-sm">
<input checked="" className="sr-only" name="payment" type="radio"/>
<span className="text-[#1c7755] font-normal tracking-tight text-xl xl:text-2xl flex items-center gap-2">
<iconify-icon height="24" icon="solar:card-linear" width="24"></iconify-icon> Carte Bancaire
                                            </span>
<div className="absolute top-3 right-3 w-4 h-4 bg-[#1c7755] rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
</label>
<label className="relative flex items-center justify-center p-5 border-2 border-gray-200 hover:border-black hover:bg-gray-50 rounded-2xl cursor-pointer transition-all group">
<input className="sr-only" name="payment" type="radio"/>
<span className="text-gray-600 group-hover:text-black font-normal tracking-tight text-xl xl:text-2xl flex items-center gap-2 transition-colors">
<iconify-icon height="24" icon="fa-brands:apple" width="24"></iconify-icon> Apple Pay
                                            </span>
<div className="absolute top-3 right-3 w-4 h-4 border-2 border-gray-300 rounded-full group-hover:border-black transition-colors"></div>
</label>
</div>
</div>
<div className="pt-4">
<button className="w-full py-5 bg-[#ce3f23] text-white rounded-2xl font-normal tracking-tight text-3xl hover:bg-[#f44a35] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#ce3f23]/30" type="button">
                                        Payer 40 CHF en toute sécurité
                                        <iconify-icon className="ml-2" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
<p className="text-center text-gray-500 text-lg mt-6 flex items-center justify-center gap-1.5">
<iconify-icon className="text-[#1c7755]" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
                                        Les paiements sont cryptés et sécurisés par Stripe.
                                    </p>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="text-white bg-[#1a1a1a] pt-20 pb-12" id="contact">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col text-center items-center">
<img alt="Logo Dabali" className="transition-all duration-[1200ms] ease-in-out hover:[transform:perspective(500px)_rotateY(360deg)_scale(1.1)] hover:brightness-125 hover:drop-shadow-[0_0_30px_rgba(255,196,70,0.8)] cursor-pointer w-24 h-24 object-contain mb-8 drop-shadow-[0_10px_15px_rgba(206,63,35,0.4)] brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16d68ea4-5e8a-4b66-b680-886a12c1ef77_320w.png" style={{transformStyle: 'preserve-3d'}}/>
<h2 className="uppercase text-5xl font-normal text-[#f5f1e9] tracking-tight font-display mb-4">Dabali</h2>
<p className="text-[#ffc446] font-light text-3xl mb-12 tracking-tight uppercase font-display">Y'a Sauce, Y'a Gout, Y'a Dabali.</p>
<div className="grid sm:grid-cols-2 gap-8 mb-16 w-full max-w-2xl">
<div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col items-center">
<iconify-icon className="text-[#f44a35] mb-3" height="32" icon="solar:map-point-linear" width="32"></iconify-icon>
<span className="text-2xl text-gray-300 tracking-tight">Genève, Suisse</span>
<span className="text-[#1c7755] font-light text-xl tracking-tight mt-1">Lieu de Retrait</span>
</div>
<div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col items-center">
<iconify-icon className="text-[#f44a35] mb-3" height="32" icon="solar:phone-linear" width="32"></iconify-icon>
<span className="text-2xl text-gray-300 tracking-tight">+225 07 00 00 00 00</span>
<span className="text-gray-500 text-lg mt-1">Pour toute question</span>
</div>
</div>
<div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-500 text-xl">© 2025 DABALI. Tous droits réservés.</p>
<div className="flex gap-6 text-gray-500 text-xl">
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
<a className="hover:text-white transition-colors" href="#">Conditions</a>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="side-dish-modal">
<div className="transform transition-transform duration-300 bg-white w-full max-w-md border-gray-100 border rounded-[2.5rem] mr-4 ml-4 pt-8 pr-8 pb-8 pl-8 shadow-2xl scale-95" id="side-dish-modal-content">
<div className="flex justify-between items-center mb-6">
<h3 className="text-3xl font-normal tracking-tight text-gray-900 font-display uppercase">Accompagnement</h3>
<button className="text-gray-400 hover:text-[#ce3f23] transition-colors rounded-full flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-[#ce3f23]/10" id="close-modal" type="button">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<p className="text-2xl text-gray-600 mb-8 tracking-tight">Choisissez un accompagnement pour compléter votre commande :</p>
<form className="space-y-4" id="side-dish-form">
<label className="relative flex items-center justify-between p-5 border-2 border-[#1c7755] bg-[#1c7755]/5 rounded-2xl cursor-pointer transition-all group">
<span className="flex items-center gap-4">
<input checked="" className="w-5 h-5 text-[#1c7755] focus:ring-[#1c7755] border-gray-300" name="side" type="radio" value="frites"/>
<span className="text-2xl font-normal text-gray-900 tracking-tight">Frites</span>
</span>
<span className="text-gray-500 text-xl">+ 0 CHF</span>
</label>
<label className="relative flex items-center justify-between p-5 border-2 border-gray-200 hover:border-[#f44a35] hover:bg-gray-50 rounded-2xl cursor-pointer transition-all group">
<span className="flex items-center gap-4">
<input className="w-5 h-5 text-[#f44a35] focus:ring-[#f44a35] border-gray-300" name="side" type="radio" value="attieke"/>
<span className="text-2xl font-normal text-gray-900 tracking-tight">Attiéké</span>
</span>
<span className="text-gray-500 text-xl">+ 0 CHF</span>
</label>
<label className="relative flex items-center justify-between p-5 border-2 border-gray-200 hover:border-[#f44a35] hover:bg-gray-50 rounded-2xl cursor-pointer transition-all group">
<span className="flex items-center gap-4">
<input className="w-5 h-5 text-[#f44a35] focus:ring-[#f44a35] border-gray-300" name="side" type="radio" value="alloco"/>
<span className="text-2xl font-normal text-gray-900 tracking-tight">Alloco</span>
</span>
<span className="text-[#ce3f23] font-normal text-xl">+ 2 CHF</span>
</label>
<button className="w-full mt-6 py-4 bg-[#ce3f23] text-white rounded-2xl font-normal tracking-tight text-3xl hover:bg-[#f44a35] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#ce3f23]/30" type="button">
                    Confirmer l'ajout
                </button>
</form>
</div>
</div>



    </>
  );
}
