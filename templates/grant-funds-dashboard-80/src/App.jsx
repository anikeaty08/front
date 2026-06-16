import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const { useState, useMemo } = React;

        // --- MOCK DATA ---
        const INITIAL_FUNDS = [
            {
                id: 1,
                title: "Semilla Inicia O'Higgins 2026",
                status: "open",
                type: "grant",
                match_score: 85,
                isMatched: true,
                apertura: "13/02/2026",
                cierre: "16/03/2026",
                description: "Programa que busca apoyar a emprendedoras y emprendedores con proyectos de negocio de alto potencial de crecimiento, entregando cofinanciamiento y mentoría estratégica."
            },
            {
                id: 2,
                title: "Semilla Expande O'Higgins 2026",
                status: "open",
                type: "grant",
                match_score: 92,
                isMatched: true,
                apertura: "13/02/2026",
                cierre: "16/03/2026",
                description: "Programa que busca apoyar a emprendedoras y emprendedores que cuentan con proyectos innovadores que ya han validado su propuesta comercial y buscan escalar."
            },
            {
                id: 3,
                title: "Innova Alta Tecnología 2026",
                status: "open",
                type: "grant",
                match_score: 40,
                isMatched: false,
                apertura: "10/02/2026",
                cierre: "14/04/2026",
                description: "Apoyamos innovaciones intensivas en I+D, que enfrenten alta incertidumbre tecnológica y que apunten a escalamientos de alto impacto global."
            },
            {
                id: 4,
                title: "PAR – REGIÓN DE ATACAMA – 2° CONVOCATORIA INDUSTRIAS",
                status: "open",
                type: "grant",
                match_score: 75,
                isMatched: true,
                apertura: "09/02/2026",
                cierre: "31/12/2026",
                description: "El objetivo de esta línea es mejorar el potencial productivo y fortalecer la gestión de las empresas y/o emprendedores de un territorio específico."
            },
            {
                id: 5,
                title: "DESARROLLA INVERSIÓN PRODUCTIVA – REGIÓN DE ARICA",
                status: "open",
                type: "grant",
                match_score: 60,
                isMatched: false,
                apertura: "09/02/2026",
                cierre: "10/03/2026",
                description: "Instrumento que apoya la materialización de proyectos de inversión productiva con potencial de generación de externalidades positivas en la región."
            },
            {
                id: 6,
                title: "Digitaliza tu Pyme 2026",
                status: "upcoming_probable",
                type: "grant",
                match_score: 95,
                isMatched: true,
                apertura: "01/05/2026",
                cierre: "30/06/2026",
                description: "Próxima convocatoria enfocada en la transformación digital de pequeñas y medianas empresas a nivel nacional, cubriendo software y hardware."
            }
        ];

        // --- ICONS WRAPPER ---
        const Icon = ({ icon, className = "", size = "20" }) => (
            <iconify-icon 
                icon={icon} 
                class={className} 
                width={size} 
                height={size} 
                style={{ strokeWidth: "1.5" }}
            ></iconify-icon>
        );

        // --- COMPONENTS ---

        const SidebarItem = ({ icon, label, active = false }) => (
            <div className={`flex items-center gap-3 px-3 py-2.5 mx-3 mb-1 cursor-pointer transition-all rounded-lg group ${
                active 
                    ? 'bg-orange-500/10 text-orange-500' 
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
            }`}>
                <Icon icon={icon} size="20" className={active ? "text-orange-500" : "text-slate-400 group-hover:text-slate-100"} />
                <span className={`text-sm font-medium ${active ? "font-semibold" : ""}`}>{label}</span>
            </div>
        );

        const FundCard = ({ fund }) => {
            const isUpcoming = fund.status === 'upcoming_probable';
            
            return (
                <div className="bg-white rounded-2xl p-6 flex flex-col h-full border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                    {/* Header: Badge & Match Score (if high) */}
                    <div className="flex justify-between items-start mb-5">
                        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                            isUpcoming 
                            ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' 
                            : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        }`}>
                            {isUpcoming ? 'Próxima versión' : 'Abierta'}
                        </span>
                        
                        {fund.match_score >= 80 && (
                            <div className="flex items-center gap-1.5 text-orange-500">
                                <Icon icon="solar:stars-minimalistic-linear" size="16" />
                                <span className="text-xs font-bold">{fund.match_score}% Match</span>
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-800 mb-5 min-h-[auto] md:min-h-[48px] leading-snug tracking-tight group-hover:text-orange-600 transition-colors">
                        {fund.title}
                    </h3>

                    {/* Dates Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div>
                            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                                <Icon icon="solar:calendar-mark-linear" size="14" />
                                <span className="text-[10px] font-bold uppercase tracking-wide">Apertura</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-700 font-mono">{fund.apertura}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                                <Icon icon="solar:calendar-date-linear" size="14" />
                                <span className="text-[10px] font-bold uppercase tracking-wide">Cierre</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-700 font-mono">{fund.cierre}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6 flex-grow">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wide">Sobre el fondo</p>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                            {fund.description}
                        </p>
                    </div>

                    {/* Action */}
                    <div className="mt-auto pt-4 border-t border-slate-100">
                        {isUpcoming ? (
                            <button className="w-full bg-slate-900 text-white text-xs font-semibold py-3 px-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                <Icon icon="solar:bell-linear" size="16" />
                                Notificarme
                            </button>
                        ) : (
                            <button className="w-full bg-orange-500 text-white text-xs font-semibold py-3 px-4 rounded-xl hover:bg-orange-600 transition-all shadow-sm hover:shadow-orange-200 flex items-center justify-center gap-2">
                                Ver Detalles
                                <Icon icon="solar:arrow-right-linear" size="16" />
                            </button>
                        )}
                    </div>
                </div>
            );
        };

        const App = () => {
            const [activeView, setActiveView] = useState("recommended");
            const [searchQuery, setSearchQuery] = useState("");
            const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

            const filteredFunds = useMemo(() => {
                let result = INITIAL_FUNDS;

                // Tab Logic
                if (activeView === "recommended") {
                    const matches = INITIAL_FUNDS.filter(f => 
                        f.type === "grant" && 
                        f.status === "open" && 
                        (f.match_score >= 70 || f.isMatched === true)
                    );
                    result = matches.length > 0 ? matches : INITIAL_FUNDS.filter(f => f.type === "grant" && f.status === "open");
                } else if (activeView === "open") {
                    result = INITIAL_FUNDS.filter(f => f.type === "grant" && f.status === "open");
                } else if (activeView === "upcoming") {
                    result = INITIAL_FUNDS.filter(f => f.status === "upcoming_probable");
                } else if (activeView === "base") {
                    result = INITIAL_FUNDS;
                }

                // Search Logic
                if (searchQuery) {
                    result = result.filter(f => 
                        f.title.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }

                return result;
            }, [activeView, searchQuery]);

            return (
                <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
                    
                    {/* MOBILE OVERLAY */}
                    {isMobileMenuOpen && (
                        <div 
                            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity"
                            onClick={() => setIsMobileMenuOpen(false)}
                        ></div>
                    )}

                    {/* SIDEBAR */}
                    <aside className={`w-64 bg-[#0f1115] flex flex-col py-6 border-r border-slate-800 fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
                        isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
                    }`}>
                        <div className="px-6 mb-8 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-500 p-1.5 rounded-lg text-white shadow-lg shadow-orange-500/20">
                                    <Icon icon="solar:verified-check-linear" size="24" />
                                </div>
                                <div>
                                    <h1 className="text-white font-bold tracking-tight text-lg leading-none">MIFA</h1>
                                    <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest mt-1 opacity-90">Built to raise</p>
                                </div>
                            </div>
                            {/* Close button for mobile */}
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="lg:hidden text-slate-400 hover:text-white"
                            >
                                <Icon icon="solar:close-circle-linear" size="24" />
                            </button>
                        </div>

                        <div className="px-4 mb-8">
                            <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2 px-2">Proyecto Activo</label>
                            <div className="bg-[#1a1d24] px-3 py-2.5 rounded-xl flex items-center justify-between cursor-pointer border border-slate-800/50 hover:border-slate-700 transition-colors group">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center text-orange-500 text-[10px] font-bold">M</div>
                                    <span className="text-slate-200 text-sm font-medium group-hover:text-white">MIFA SaaS</span>
                                </div>
                                <Icon icon="solar:alt-arrow-down-linear" size="14" className="text-slate-500" />
                            </div>
                        </div>

                        <nav className="flex-1 space-y-0.5">
                            <SidebarItem icon="solar:home-2-linear" label="Inicio" />
                            <SidebarItem icon="solar:case-round-linear" label="Mi proyecto" />
                            <SidebarItem icon="solar:wallet-money-linear" label="Fondos" active={true} />
                            <SidebarItem icon="solar:document-text-linear" label="Facturación" />
                            <SidebarItem icon="solar:user-circle-linear" label="Perfil" />
                        </nav>

                        <div className="px-4 mt-auto space-y-2">
                            <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white cursor-pointer transition-all rounded-lg hover:bg-slate-800/50">
                                <div className="relative">
                                    <Icon icon="solar:bell-linear" size="20" />
                                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#0f1115]"></span>
                                </div>
                                <span className="text-sm font-medium">Novedades</span>
                            </div>
                            
                            <div className="bg-[#1a1d24] p-3 rounded-xl flex items-center gap-3 border border-slate-800/50 cursor-pointer hover:border-slate-700 transition-all">
                                <div className="h-8 w-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                                    MD
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-slate-200 text-xs font-bold truncate">Matias Dev</p>
                                    <p className="text-slate-500 text-[10px] truncate">matias@mifa.cl</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <main className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
                        
                        {/* MOBILE HEADER */}
                        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 shrink-0 z-20">
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-500 p-1 rounded-md text-white">
                                    <Icon icon="solar:verified-check-linear" size="18" />
                                </div>
                                <span className="font-bold text-slate-900 tracking-tight">MIFA</span>
                            </div>
                            <button 
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <Icon icon="solar:hamburger-menu-linear" size="24" />
                            </button>
                        </div>

                        {/* HEADER */}
                        <div className="px-4 md:px-8 pt-6 md:pt-8 pb-4 shrink-0 bg-slate-50 z-10">
                            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-6 md:mb-8">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                                        Explora Fondos
                                    </h2>
                                    <p className="text-sm text-slate-500">Encuentra y postula a financiamiento público.</p>
                                </div>
                                
                                {/* Tabs */}
                                <div className="flex p-1 bg-white border border-slate-200 rounded-full shadow-sm overflow-x-auto no-scrollbar">
                                    {[
                                        { id: "recommended", label: "Recomendados" },
                                        { id: "open", label: "Abiertos" },
                                        { id: "upcoming", label: "Próximos" },
                                        { id: "base", label: "Base Completa" }
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveView(tab.id)}
                                            className={`px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                                                activeView === tab.id 
                                                ? "bg-slate-900 text-white shadow-md" 
                                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                            }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Search & Filters Toolbar */}
                            <div className="flex flex-col md:flex-row gap-3 items-center">
                                <div className="relative flex-1 w-full group">
                                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors">
                                        <Icon icon="solar:magnifer-linear" size="18" />
                                    </div>
                                    <input 
                                        type="text"
                                        placeholder="Buscar por nombre del fondo..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 text-sm font-medium shadow-sm transition-all placeholder:text-slate-400"
                                    />
                                </div>
                                
                                <div className="flex gap-2 w-full md:w-auto">
                                    <button className="flex-1 md:flex-none justify-center items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 text-xs font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all">
                                        <Icon icon="solar:filter-linear" size="16" />
                                        Filtros
                                    </button>
                                    <button className="flex-1 md:flex-none justify-center items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 text-xs font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all">
                                        <Icon icon="solar:sort-vertical-linear" size="16" />
                                        Ordenar
                                    </button>
                                </div>
                            </div>
                            
                            {/* Results Count */}
                            <div className="mt-4 flex items-center gap-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resultados:</span>
                                <span className="text-xs font-bold text-slate-900 bg-slate-200 px-2 py-0.5 rounded-md">{filteredFunds.length}</span>
                            </div>
                        </div>

                        {/* SCROLLABLE GRID */}
                        <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-20 pt-2 scroll-smooth">
                            {filteredFunds.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
                                    {filteredFunds.map((fund) => (
                                        <FundCard key={fund.id} fund={fund} />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-slate-400 pb-20">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                        <Icon icon="solar:magnifer-bold-duotone" size="32" className="text-slate-300" />
                                    </div>
                                    <h3 className="text-sm font-bold text-slate-700 mb-1">Sin resultados</h3>
                                    <p className="text-xs text-slate-400 mb-4 text-center px-4">No encontramos fondos con estos criterios.</p>
                                    <button 
                                        onClick={() => {setActiveView("base"); setSearchQuery("");}}
                                        className="text-xs text-orange-600 font-bold hover:underline bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100"
                                    >
                                        Limpiar filtros
                                    </button>
                                </div>
                            )}
                        </div>
                    </main>

                    {/* Live Indicator */}
                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur text-white text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-3 shadow-2xl z-50 border border-white/10 hover:scale-105 transition-transform cursor-pointer w-max max-w-[90%] justify-center">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2 shrink-0">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="truncate">Matias está compartiendo pantalla</span>
                        </div>
                        <div className="h-3 w-[1px] bg-white/20 shrink-0"></div>
                        <button className="text-red-400 hover:text-red-300 uppercase tracking-wider shrink-0">Detener</button>
                    </div>

                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="root"><div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden"><aside className="w-64 bg-[#0f1115] flex flex-col py-6 border-r border-slate-800 fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 -translate-x-full"><div className="px-6 mb-8 flex justify-between items-center"><div className="flex items-center gap-3"><div className="bg-orange-500 p-1.5 rounded-lg text-white shadow-lg shadow-orange-500/20"><iconify-icon className="" height="24" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon></div><div><h1 className="text-white font-bold tracking-tight text-lg leading-none">MIFA</h1><p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest mt-1 opacity-90">Built to raise</p></div></div><button className="lg:hidden text-slate-400 hover:text-white"><iconify-icon className="" height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon></button></div><div className="px-4 mb-8"><label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2 px-2">Proyecto Activo</label><div className="bg-[#1a1d24] px-3 py-2.5 rounded-xl flex items-center justify-between cursor-pointer border border-slate-800/50 hover:border-slate-700 transition-colors group"><div className="flex items-center gap-2"><div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center text-orange-500 text-[10px] font-bold">M</div><span className="text-slate-200 text-sm font-medium group-hover:text-white">MIFA SaaS</span></div><iconify-icon className="text-slate-500" height="14" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></div></div><nav className="flex-1 space-y-0.5"><div className="flex items-center gap-3 px-3 py-2.5 mx-3 mb-1 cursor-pointer transition-all rounded-lg group text-slate-400 hover:text-slate-100 hover:bg-slate-800"><iconify-icon className="text-slate-400 group-hover:text-slate-100" height="20" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon><span className="text-sm font-medium">Inicio</span></div><div className="flex items-center gap-3 px-3 py-2.5 mx-3 mb-1 cursor-pointer transition-all rounded-lg group text-slate-400 hover:text-slate-100 hover:bg-slate-800"><iconify-icon className="text-slate-400 group-hover:text-slate-100" height="20" icon="solar:case-round-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon><span className="text-sm font-medium">Mi proyecto</span></div><div className="flex items-center gap-3 px-3 py-2.5 mx-3 mb-1 cursor-pointer transition-all rounded-lg group bg-orange-500/10 text-orange-500"><iconify-icon className="text-orange-500" height="20" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon><span className="text-sm font-medium font-semibold">Fondos</span></div><div className="flex items-center gap-3 px-3 py-2.5 mx-3 mb-1 cursor-pointer transition-all rounded-lg group text-slate-400 hover:text-slate-100 hover:bg-slate-800"><iconify-icon className="text-slate-400 group-hover:text-slate-100" height="20" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon><span className="text-sm font-medium">Facturación</span></div><div className="flex items-center gap-3 px-3 py-2.5 mx-3 mb-1 cursor-pointer transition-all rounded-lg group text-slate-400 hover:text-slate-100 hover:bg-slate-800"><iconify-icon className="text-slate-400 group-hover:text-slate-100" height="20" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon><span className="text-sm font-medium">Perfil</span></div></nav><div className="px-4 mt-auto space-y-2"><div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white cursor-pointer transition-all rounded-lg hover:bg-slate-800/50"><div className="relative"><iconify-icon className="" height="20" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon><span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#0f1115]"></span></div><span className="text-sm font-medium">Novedades</span></div><div className="bg-[#1a1d24] p-3 rounded-xl flex items-center gap-3 border border-slate-800/50 cursor-pointer hover:border-slate-700 transition-all"><div className="h-8 w-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">MD</div><div className="overflow-hidden"><p className="text-slate-200 text-xs font-bold truncate">Matias Dev</p><p className="text-slate-500 text-[10px] truncate">matias@mifa.cl</p></div></div></div></aside><main className="flex-1 flex flex-col h-full overflow-hidden relative w-full"><div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 shrink-0 z-20"><div className="flex items-center gap-2"><div className="bg-orange-500 p-1 rounded-md text-white"><iconify-icon className="" height="18" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon></div><span className="font-bold text-slate-900 tracking-tight">MIFA</span></div><button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"><iconify-icon className="" height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon></button></div><div className="px-4 md:px-8 pt-6 md:pt-8 pb-4 shrink-0 bg-slate-50 z-10"><div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-6 md:mb-8"><div><h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-1">Explora Fondos</h2><p className="text-sm text-slate-500">Encuentra y postula a financiamiento público.</p></div><div className="flex p-1 bg-white border border-slate-200 rounded-full shadow-sm overflow-x-auto no-scrollbar"><button className="px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 bg-slate-900 text-white shadow-md">Recomendados</button><button className="px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 text-slate-500 hover:text-slate-900 hover:bg-slate-50">Abiertos</button><button className="px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 text-slate-500 hover:text-slate-900 hover:bg-slate-50">Próximos</button><button className="px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 text-slate-500 hover:text-slate-900 hover:bg-slate-50">Base Completa</button></div></div><div className="flex flex-col md:flex-row gap-3 items-center"><div className="relative flex-1 w-full group"><div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors"><iconify-icon className="" height="18" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon></div><input className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 text-sm font-medium shadow-sm transition-all placeholder:text-slate-400" placeholder="Buscar por nombre del fondo..." type="text" value=""/></div><div className="flex gap-2 w-full md:w-auto"><button className="flex-1 md:flex-none justify-center items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 text-xs font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"><iconify-icon className="" height="16" icon="solar:filter-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>Filtros</button><button className="flex-1 md:flex-none justify-center items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 text-xs font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"><iconify-icon className="" height="16" icon="solar:sort-vertical-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>Ordenar</button></div></div><div className="mt-4 flex items-center gap-2"><span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resultados:</span><span className="text-xs font-bold text-slate-900 bg-slate-200 px-2 py-0.5 rounded-md">3</span></div></div><div className="flex-1 overflow-y-auto px-4 md:px-8 pb-20 pt-2 scroll-smooth"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6"><div className="bg-white rounded-2xl p-6 flex flex-col h-full border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"><div className="flex justify-between items-start mb-5"><span className="text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100">Abierta</span><div className="flex items-center gap-1.5 text-orange-500"><iconify-icon className="" height="16" icon="solar:stars-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon><span className="text-xs font-bold">85% Match</span></div></div><h3 className="min-h-[auto] md:min-h-[48px] leading-snug group-hover:text-orange-600 transition-colors text-base font-bold text-slate-800 tracking-tight mb-5">asdasdasdasd</h3><div className="grid grid-cols-2 gap-4 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100"><div><div className="flex items-center gap-1.5 text-slate-400 mb-1"><iconify-icon className="" height="14" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon><span className="text-[10px] font-bold uppercase tracking-wide">Apertura</span></div><p className="text-xs font-semibold text-slate-700 font-mono">13/02/2026</p></div><div><div className="flex items-center gap-1.5 text-slate-400 mb-1"><iconify-icon className="" height="14" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon><span className="text-[10px] font-bold uppercase tracking-wide">Cierre</span></div><p className="text-xs font-semibold text-slate-700 font-mono">16/03/2026</p></div></div><div className="mb-6 flex-grow"><p className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wide">Sobre el fondo</p><p className="text-xs text-slate-500 leading-relaxed line-clamp-3">Programa que busca apoyar a emprendedoras y emprendedores con proyectos de negocio de alto potencial de crecimiento, entregando cofinanciamiento y mentoría estratégica.</p></div><div className="mt-auto pt-4 border-t border-slate-100"><button className="w-full bg-orange-500 text-white text-xs font-semibold py-3 px-4 rounded-xl hover:bg-orange-600 transition-all shadow-sm hover:shadow-orange-200 flex items-center justify-center gap-2">Ver Detalles<iconify-icon className="" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon></button></div></div><div className="bg-white rounded-2xl p-6 flex flex-col h-full border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"><div className="flex justify-between items-start mb-5"><span className="text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100">Abierta</span><div className="flex items-center gap-1.5 text-orange-500"><iconify-icon className="" height="16" icon="solar:stars-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon><span className="text-xs font-bold">92% Match</span></div></div><h3 className="text-base font-bold text-slate-800 mb-5 min-h-[auto] md:min-h-[48px] leading-snug tracking-tight group-hover:text-orange-600 transition-colors">Semilla Expande O'Higgins 2026</h3><div className="grid grid-cols-2 gap-4 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100"><div><div className="flex items-center gap-1.5 text-slate-400 mb-1"><iconify-icon className="" height="14" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon><span className="text-[10px] font-bold uppercase tracking-wide">Apertura</span></div><p className="text-xs font-semibold text-slate-700 font-mono">13/02/2026</p></div><div><div className="flex items-center gap-1.5 text-slate-400 mb-1"><iconify-icon className="" height="14" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon><span className="text-[10px] font-bold uppercase tracking-wide">Cierre</span></div><p className="text-xs font-semibold text-slate-700 font-mono">16/03/2026</p></div></div><div className="mb-6 flex-grow"><p className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wide">Sobre el fondo</p><p className="text-xs text-slate-500 leading-relaxed line-clamp-3">Programa que busca apoyar a emprendedoras y emprendedores que cuentan con proyectos innovadores que ya han validado su propuesta comercial y buscan escalar.</p></div><div className="mt-auto pt-4 border-t border-slate-100"><button className="w-full bg-orange-500 text-white text-xs font-semibold py-3 px-4 rounded-xl hover:bg-orange-600 transition-all shadow-sm hover:shadow-orange-200 flex items-center justify-center gap-2">Ver Detalles<iconify-icon className="" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon></button></div></div><div className="bg-white rounded-2xl p-6 flex flex-col h-full border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"><div className="flex justify-between items-start mb-5"><span className="text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100">Abierta</span></div><h3 className="text-base font-bold text-slate-800 mb-5 min-h-[auto] md:min-h-[48px] leading-snug tracking-tight group-hover:text-orange-600 transition-colors">PAR – REGIÓN DE ATACAMA – 2° CONVOCATORIA INDUSTRIAS</h3><div className="grid grid-cols-2 gap-4 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100"><div><div className="flex items-center gap-1.5 text-slate-400 mb-1"><iconify-icon className="" height="14" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon><span className="text-[10px] font-bold uppercase tracking-wide">Apertura</span></div><p className="text-xs font-semibold text-slate-700 font-mono">09/02/2026</p></div><div><div className="flex items-center gap-1.5 text-slate-400 mb-1"><iconify-icon className="" height="14" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon><span className="text-[10px] font-bold uppercase tracking-wide">Cierre</span></div><p className="text-xs font-semibold text-slate-700 font-mono">31/12/2026</p></div></div><div className="mb-6 flex-grow"><p className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wide">Sobre el fondo</p><p className="text-xs text-slate-500 leading-relaxed line-clamp-3">El objetivo de esta línea es mejorar el potencial productivo y fortalecer la gestión de las empresas y/o emprendedores de un territorio específico.</p></div><div className="mt-auto pt-4 border-t border-slate-100"><button className="w-full bg-orange-500 text-white text-xs font-semibold py-3 px-4 rounded-xl hover:bg-orange-600 transition-all shadow-sm hover:shadow-orange-200 flex items-center justify-center gap-2">Ver Detalles<iconify-icon className="" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon></button></div></div></div></div></main><div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur text-white text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-3 shadow-2xl z-50 border border-white/10 hover:scale-105 transition-transform cursor-pointer w-max max-w-[90%] justify-center"><div className="flex items-center gap-2"><span className="relative flex h-2 w-2 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span><span className="truncate">Matias está compartiendo pantalla</span></div><div className="h-3 w-[1px] bg-white/20 shrink-0"></div><button className="text-red-400 hover:text-red-300 uppercase tracking-wider shrink-0">Detener</button></div></div></div>


    </>
  );
}
