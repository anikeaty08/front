import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // 4. DATA: ALL 25 PACKAGES
        const packagesData = [
            {
                id: 1,
                name: "Check Up Embarazo Básico",
                price: "$1,380",
                category: "Mujeres",
                icon: "baby",
                tests: ["USG - $1,000", "BHC - $260", "EGO - $120"]
            },
            {
                id: 2,
                name: "Check Up Embarazo Completo",
                price: "$1,554",
                category: "Mujeres",
                icon: "baby",
                tests: ["USG - $1,000", "BHC - $260", "EGO - $120", "QS6 - $174"]
            },
            {
                id: 3,
                name: "Paquete Prenatal",
                price: "$644",
                category: "Mujeres",
                icon: "heart-handshake",
                tests: ["BHC - $260", "QS6 - $174", "VDRL - $90", "Ac. anti VIH 1,2", "EGO - $120"]
            },
            {
                id: 4,
                name: "Adulto Mayor",
                price: "$1,954",
                category: "Adulto Mayor",
                icon: "armchair", // using armchair as proxy for older adult comfort or stick
                tests: ["RX tórax - $700", "ECG - $700", "BHC - $260", "EGO - $120", "QS6 - $174"]
            },
            {
                id: 5,
                name: "Paquete Cardiopulmonar",
                price: "$1,700",
                category: "Todos",
                icon: "heart-pulse",
                tests: ["RX tórax - $1,000", "ECG - $700"]
            },
            {
                id: 6,
                name: "Perfil Cardíaco Agudo",
                price: "$1,030",
                category: "Hombres",
                icon: "activity",
                tests: ["Proteína C Reactiva Ultrasensible", "Creatín Fosfocinasa Fracción MB", "Troponina I", "Mioglobina"]
            },
            {
                id: 7,
                name: "Check Up Laboratorio Completo",
                price: "$1,349",
                category: "Todos",
                icon: "flask-conical",
                tests: ["BHC - $260", "QS6 - $174", "P. de lípidos - $230", "Perfil hepático - $237", "P. tiroideo - $328", "EGO - $120"]
            },
            {
                id: 8,
                name: "Check Up Básico",
                price: "$1,021",
                category: "Todos",
                icon: "test-tube-2",
                tests: ["BHC - $260", "QS6 - $174", "Perfil de lípidos - $230", "P hepático - $237", "EGO - $120"]
            },
            {
                id: 9,
                name: "Check Up Total Salud",
                price: "$1,403",
                category: "Todos",
                icon: "shield-check",
                tests: ["BHC - $260", "QS47 - $1,023", "EGO - $120"]
            },
            {
                id: 10,
                name: "Check Up Bienestar Integral",
                price: "$1,374",
                category: "Todos",
                icon: "sun",
                tests: ["Glucosa - $79", "HbA1c - $180", "P. de lípidos - $230", "Urea - $79", "Creatinina - $72", "Ácido úrico - $79", "P hepático - $237", "Vitamina D - $418"]
            },
            {
                id: 11,
                name: "Check Up Tiroideo",
                price: "$479",
                category: "Todos",
                icon: "search", // symbolic for looking closely
                tests: ["Hormona Estimulante de Tiroides", "Triyodotironina total T3", "Tiroxina total (T4 total)", "Triyodotironina libre (T3 libre)", "Tiroxina libre (T4 libre)", "Captación de T3", "Índice de Tiroxina libre", "Yodo proteico"]
            },
            {
                id: 12,
                name: "Perfil Climaterio",
                price: "$480",
                category: "Mujeres",
                icon: "flower-2",
                tests: ["Estradiol", "Hormona Folículo Estimulante", "Hormona Luteinizante"]
            },
            {
                id: 13,
                name: "Perfil Ginecológico",
                price: "$615",
                category: "Mujeres",
                icon: "user-circle-2",
                tests: ["Estradiol", "Hormona Folículo Estimulante", "Prolactina", "Testosterona total", "Progesterona", "Hormona Luteinizante"]
            },
            {
                id: 14,
                name: "Perfil de Estrés",
                price: "$997",
                category: "Hombres",
                icon: "zap",
                tests: ["Inmunoglobulina A en saliva", "Cortisol en saliva", "Amilasa en saliva"]
            },
            {
                id: 15,
                name: "Perfil de Dengue",
                price: "$465",
                category: "Todos",
                icon: "bug",
                tests: ["Ag. temprano de Dengue (NS1)", "Ac. anti Dengue IgG", "Ac. anti Dengue IgM"]
            },
            {
                id: 16,
                name: "Check Up Respiratorio Básico",
                price: "$534",
                category: "Todos",
                icon: "wind",
                tests: ["Prueba rápida COVID e influenza", "PCR influenza A y B"]
            },
            {
                id: 17,
                name: "Preoperatorio",
                price: "$664",
                category: "Todos",
                icon: "scissors",
                tests: ["BHC - $260", "TP - $103", "TTPA - $100", "Grupo y Rh - $81", "EGO - $120"]
            },
            {
                id: 18,
                name: "Pruebas Funcionales Hepáticas I",
                price: "$237",
                category: "Todos",
                icon: "droplet",
                tests: ["Deshidrogenasa Láctica", "Fosfatasa Alcalina", "Gamma Glutamil Transpeptidasa", "AST", "ALT", "Relación TGO/TGP", "Albúmina Sérica", "Proteínas Totales", "Globulinas Séricas", "Relación Albúmina/Globulina", "Bilirrubina conjugada", "Bilirrubina no conjugada", "Bilirrubina Delta", "Bilirrubina Total"]
            },
            {
                id: 19,
                name: "Pruebas Funcionales Hepáticas II",
                price: "$302",
                category: "Todos",
                icon: "droplets",
                tests: ["Todo perfil Hepático I", "INR", "TP"]
            },
            {
                id: 20,
                name: "Perfil I Diabetes Mellitus",
                price: "$345",
                category: "Todos",
                icon: "candy-off",
                tests: ["Glucosa", "Insulina", "Índice de resistencia a la insulina", "HbA1c"]
            },
            {
                id: 21,
                name: "Perfil Inmunovaloración HIV",
                price: "$1,328",
                category: "Todos",
                icon: "shield-alert",
                tests: ["Leucocitos totales", "Linfocitos", "Linfocitos Absolutos", "Células T CD3", "Células T (CD3/CD4)", "Células T (CD3/CD8)", "Cociente CD4/CD8", "Ag. p24 / Ac. Anti HIV 1 y 2"]
            },
            {
                id: 22,
                name: "Prevención Sexual Plus",
                price: "$413",
                category: "Todos",
                icon: "lock",
                tests: ["VIH - $203", "VDRL - $90", "EGO - $120"]
            },
            {
                id: 23,
                name: "Salud Sexual Completo",
                price: "$767",
                category: "Todos",
                icon: "shield",
                tests: ["VIH - $203", "VDRL - $90", "Ag hepatitis B - $240", "Ac hepatitis C - $234"]
            },
            {
                id: 24,
                name: "Perfil de Hierro I",
                price: "$268",
                category: "Todos",
                icon: "magnet",
                tests: ["Capacidad total de Fijación", "Porcentaje de saturación", "Hierro sérico"]
            },
            {
                id: 25,
                name: "Perfil de Hierro II",
                price: "$359",
                category: "Todos",
                icon: "magnet",
                tests: ["Perfil de Hierro I", "Ferritina"]
            }
        ];

        // 6. FILTER FUNCTIONALITY
        function filterPackages(filterCategory) {
            const container = document.getElementById('packages-container');
            const counter = document.getElementById('results-counter');
            const emptyState = document.getElementById('empty-state');
            
            // 1. Update Buttons State
            document.querySelectorAll('.filter-btn').forEach(btn => {
                // Reset to default style
                btn.className = 'filter-btn group relative overflow-hidden px-9 py-3.5 rounded-lg border-2 border-[#FF431B] bg-white text-[#FF431B] text-base font-semibold transition-all duration-300 hover:bg-[#E6A93C] hover:border-[#E6A93C] hover:text-white hover:scale-[1.02]';
                
                // Set active style
                if (btn.innerText.trim() === filterCategory) {
                    btn.className = 'filter-btn active group relative overflow-hidden px-9 py-3.5 rounded-lg border-2 border-[#FF431B] bg-[#FF431B] text-white text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-md';
                }
            });

            // 2. Filter Data
            // Logic: "Todos" button shows ALL packages.
            // Specific category buttons show ONLY that category (e.g., "Hombres" only shows items tagged "Hombres").
            let filteredPackages = packagesData;
            if (filterCategory !== 'Todos') {
                filteredPackages = packagesData.filter(pkg => pkg.category === filterCategory);
            }

            // 3. Animate Out
            container.classList.remove('fade-enter-active');
            container.classList.add('fade-exit-active');
            container.style.opacity = '0';
            container.style.transform = 'translateY(10px)';

            setTimeout(() => {
                // 4. Render HTML
                if (filteredPackages.length === 0) {
                    container.innerHTML = '';
                    emptyState.classList.remove('hidden');
                    counter.innerText = `Mostrando 0 paquetes`;
                } else {
                    emptyState.classList.add('hidden');
                    
                    container.innerHTML = filteredPackages.map(pkg => `
                        <div class="relative bg-white rounded-xl border border-gray-200 p-7 flex flex-col transition-all duration-300 hover:border-[#FF431B] hover:shadow-[0_4px_16px_rgba(255,67,27,0.15)] hover:-translate-y-1">
                            
                            <!-- Category Badge -->
                            <div class="absolute top-0 left-0 bg-[#E6A93C] text-white text-[11px] font-bold uppercase px-3 py-1 rounded-br-lg rounded-tl-xl tracking-wider z-10">
                                ${pkg.category}
                            </div>
                            
                            <!-- Icon -->
                            <div class="flex justify-center mb-4 mt-2">
                                <iconify-icon icon="lucide:${pkg.icon}" class="text-[#FF431B]" width="48" stroke-width="1.5"></iconify-icon>
                            </div>
                            
                            <!-- Content -->
                            <h3 class="text-[22px] font-semibold text-black mb-3 leading-[1.3]">${pkg.name}</h3>
                            <div class="text-4xl font-extrabold text-[#FF431B] mb-5 tracking-tight">${pkg.price}</div>
                            
                            <div class="w-full h-px bg-gray-100 mb-5"></div>
                            
                            <p class="text-sm font-semibold text-[#333333] mb-3">Incluye:</p>
                            
                            <!-- Scrollable list if too long, though design requested max-height -->
                            <div class="flex-grow max-h-[200px] overflow-y-auto scrollbar-hide mb-6">
                                <ul class="space-y-2">
                                    ${pkg.tests.map(test => `
                                        <li class="flex items-start gap-3 text-sm font-normal text-[#666666] leading-[1.6]">
                                            <iconify-icon icon="lucide:check" class="text-[#E6A93C] mt-1 shrink-0" width="16" stroke-width="2"></iconify-icon>
                                            <span>${test}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                            
                            <!-- CTA -->
                            <a href="https://wa.me/?text=Hola,%20me%20interesa%20información%20sobre%20el%20paquete:%20${encodeURIComponent(pkg.name)}" 
                               target="_blank"
                               class="w-full flex items-center justify-center gap-2 bg-[#FF431B] text-white text-[15px] font-semibold py-3.5 rounded-lg transition-all duration-300 hover:bg-[#E6A93C] hover:scale-[1.02]">
                                <iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                                Solicitar Información
                            </a>
                        </div>
                    `).join('');
                    
                    counter.innerText = `Mostrando ${filteredPackages.length} de ${packagesData.length} paquetes`;
                }

                // 5. Animate In
                container.classList.remove('fade-exit-active');
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
                container.classList.add('fade-enter-active');
                
            }, 200);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            filterPackages('Todos');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-[#FF431B] rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:activity" width="20"></iconify-icon>
</div>
<span className="font-bold text-xl tracking-tight text-black">IMEDILAB</span>
</a>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-[#666666] hover:text-[#FF431B] transition-colors" href="#">Inicio</a>
<a className="text-sm font-semibold text-[#FF431B]" href="#">Paquetes</a>
<a className="text-sm font-medium text-[#666666] hover:text-[#FF431B] transition-colors" href="#">Sucursales</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#FF431B] hover:bg-[#E6A93C] transition-colors" href="#contact">
                    Agendar Cita
                </a>
</div>
</div>
</nav>

<section className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center bg-gradient-to-b from-white to-[#F5F5F5] overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
<iconify-icon className="text-[#FF431B]" icon="lucide:activity" width="400"></iconify-icon>
</div>
<div className="relative z-10 text-center max-w-4xl px-4">
<span className="block text-xs font-bold uppercase tracking-[2px] text-[#E6A93C] mb-4">Laboratorio Imedilab</span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black mb-4">Nuestros Paquetes de Salud</h1>
<p className="text-base md:text-xl text-[#666666] font-medium max-w-2xl mx-auto">Encuentra el paquete ideal para tu cuidado preventivo.</p>
</div>
</section>

<section className="sticky top-20 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-gray-100 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center gap-6">

<div className="grid grid-cols-2 md:flex md:flex-row gap-4 w-full md:w-auto">
<button className="filter-btn active group relative overflow-hidden px-9 py-3.5 rounded-lg border-2 border-[#FF431B] bg-[#FF431B] text-white text-base font-semibold transition-all duration-300 hover:scale-[1.02]" onclick="filterPackages('Todos')">
                        Todos
                    </button>
<button className="filter-btn group relative overflow-hidden px-9 py-3.5 rounded-lg border-2 border-[#FF431B] bg-white text-[#FF431B] text-base font-semibold transition-all duration-300 hover:bg-[#E6A93C] hover:border-[#E6A93C] hover:text-white hover:scale-[1.02]" onclick="filterPackages('Hombres')">
                        Hombres
                    </button>
<button className="filter-btn group relative overflow-hidden px-9 py-3.5 rounded-lg border-2 border-[#FF431B] bg-white text-[#FF431B] text-base font-semibold transition-all duration-300 hover:bg-[#E6A93C] hover:border-[#E6A93C] hover:text-white hover:scale-[1.02]" onclick="filterPackages('Mujeres')">
                        Mujeres
                    </button>
<button className="filter-btn group relative overflow-hidden px-9 py-3.5 rounded-lg border-2 border-[#FF431B] bg-white text-[#FF431B] text-base font-semibold transition-all duration-300 hover:bg-[#E6A93C] hover:border-[#E6A93C] hover:text-white hover:scale-[1.02]" onclick="filterPackages('Adulto Mayor')">
                        Adulto Mayor
                    </button>
</div>

<div className="text-sm font-medium text-[#666666]" id="results-counter">
                    Mostrando 25 de 25 paquetes
                </div>
</div>
</div>
</section>

<main className="bg-white min-h-screen">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="packages-container">

</div>

<div className="hidden col-span-full py-20 text-center" id="empty-state">
<div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-gray-300">
<iconify-icon icon="lucide:search-x" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron paquetes</h3>
<p className="text-gray-500 mb-6">No hay paquetes disponibles en esta categoría por el momento.</p>
<button className="text-[#FF431B] font-semibold hover:underline" onclick="filterPackages('Todos')">Ver todos los paquetes</button>
</div>
</div>
</main>

<footer className="bg-[#F5F5F5] py-12 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="flex items-center justify-center gap-2 mb-6">
<iconify-icon className="text-[#FF431B]" icon="lucide:activity" width="24"></iconify-icon>
<span className="font-bold text-lg text-black tracking-tight">IMEDILAB</span>
</div>
<p className="text-sm text-[#666666]">© 2024 IMEDILAB. Todos los derechos reservados.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all hover:-translate-y-1 group flex items-center justify-center" href="https://wa.me/" target="_blank">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="28"></iconify-icon>
</a>



    </>
  );
}
