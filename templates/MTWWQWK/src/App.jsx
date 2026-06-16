import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#25D366',
                        secondary: '#128C7E'
                    }
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white shadow-sm sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center py-4">
<div className="flex items-center">
<div className="bg-primary rounded-lg p-2">
<span className="text-white font-bold text-lg">📦</span>
</div>
<h1 className="ml-3 text-xl font-bold text-gray-900">BreaksMX</h1>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-700 hover:text-primary" href="#">Explorar</a>
<a className="text-gray-700 hover:text-primary" href="#">Mis Compras</a>
<a className="text-gray-700 hover:text-primary" href="#">Vender</a>
</div>
<div className="flex items-center space-x-4">
<div className="relative">
<button className="p-2 text-gray-600 hover:text-primary">
<span className="text-xl">🔔</span>
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
</button>
</div>
<div className="flex items-center space-x-2">
<img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32"/>
<span className="text-sm font-medium">Juan Pérez</span>
</div>
</div>
</div>
</div>
</header>

<section className="bg-white border-b">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1">
<div className="relative">
<input className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Buscar cajas por deporte, fabricante, año..." type="text"/>
<span className="absolute left-3 top-3 text-gray-400">🔍</span>
</div>
</div>
<div className="flex gap-3 flex-wrap">
<select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary">
<option>Todos los deportes</option>
<option>Fútbol</option>
<option>Baseball</option>
<option>Basketball</option>
<option>Fútbol Americano</option>
</select>
<select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary">
<option>Tipo de break</option>
<option>Random Team</option>
<option>Pick Your Team</option>
<option>Draft Style</option>
</select>
<select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary">
<option>Precio</option>
<option>$0 - $500</option>
<option>$500 - $1,000</option>
<option>$1,000+</option>
</select>
</div>
</div>
</div>
</section>

<section className="py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-bold text-gray-900">Breaks Activos</h2>
<div className="flex items-center space-x-2 text-sm text-gray-600">
<span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
<span>24 cajas disponibles</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
<div className="relative">
<img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200"/>
<div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Random Team
                        </div>
<div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            👁️ 142
                        </div>
</div>
<div className="p-4">
<h3 className="font-semibold text-lg mb-2">2024 Panini Prizm Fútbol</h3>
<p className="text-gray-600 text-sm mb-3">Liga MX - 12 sobres por caja</p>
<div className="flex justify-between items-center mb-3">
<span className="text-2xl font-bold text-green-600">$450</span>
<span className="text-sm text-gray-500">por lugar</span>
</div>
<div className="mb-3">
<div className="flex justify-between text-sm text-gray-600 mb-1">
<span>18/32 lugares vendidos</span>
<span>56%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{width: '56%'}}></div>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center space-x-2">
<img className="w-6 h-6 rounded-full" src="https://via.placeholder.com/24"/>
<span className="text-sm text-gray-600">Carlos M.</span>
<div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
</div>
</div>
<div className="flex space-x-2">
<button className="flex-1 bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Reservar Lugar
                            </button>
<button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                📱
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
<div className="relative">
<img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200"/>
<div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Pick Your Team
                        </div>
<div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            👁️ 89
                        </div>
</div>
<div className="p-4">
<h3 className="font-semibold text-lg mb-2">2024 Topps Chrome Baseball</h3>
<p className="text-gray-600 text-sm mb-3">MLB Series 1 - 24 sobres</p>
<div className="flex justify-between items-center mb-3">
<span className="text-lg font-bold text-gray-600">$300-$850</span>
<span className="text-sm text-gray-500">por equipo</span>
</div>
<div className="mb-3">
<div className="flex justify-between text-sm text-gray-600 mb-1">
<span>22/30 equipos vendidos</span>
<span>73%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{width: '73%'}}></div>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center space-x-2">
<img className="w-6 h-6 rounded-full" src="https://via.placeholder.com/24"/>
<span className="text-sm text-gray-600">Ana L.</span>
<div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
</div>
</div>
<div className="flex space-x-2">
<button className="flex-1 bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Ver Equipos
                            </button>
<button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                📱
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
<div className="relative">
<img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200"/>
<div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Draft Style
                        </div>
<div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            👁️ 203
                        </div>
<div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                            🔥 Casi lleno
                        </div>
</div>
<div className="p-4">
<h3 className="font-semibold text-lg mb-2">2024 Panini NBA Hoops</h3>
<p className="text-gray-600 text-sm mb-3">Basketball - 8 sobres mega box</p>
<div className="flex justify-between items-center mb-3">
<span className="text-2xl font-bold text-green-600">$620</span>
<span className="text-sm text-gray-500">por lugar</span>
</div>
<div className="mb-3">
<div className="flex justify-between text-sm text-gray-600 mb-1">
<span>28/30 lugares vendidos</span>
<span>93%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: '93%'}}></div>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center space-x-2">
<img className="w-6 h-6 rounded-full" src="https://via.placeholder.com/24"/>
<span className="text-sm text-gray-600">Miguel R.</span>
<div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
</div>
</div>
<div className="flex space-x-2">
<button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                ¡Solo 2 lugares!
                            </button>
<button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                📱
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
<div className="relative">
<img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200"/>
<div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Random Team
                        </div>
<div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            👁️ 67
                        </div>
<div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                            🆕 Nuevo
                        </div>
</div>
<div className="p-4">
<h3 className="font-semibold text-lg mb-2">2024 Panini Select Premier League</h3>
<p className="text-gray-600 text-sm mb-3">Fútbol Inglés - 12 sobres hobby</p>
<div className="flex justify-between items-center mb-3">
<span className="text-2xl font-bold text-green-600">$780</span>
<span className="text-sm text-gray-500">por lugar</span>
</div>
<div className="mb-3">
<div className="flex justify-between text-sm text-gray-600 mb-1">
<span>5/20 lugares vendidos</span>
<span>25%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center space-x-2">
<img className="w-6 h-6 rounded-full" src="https://via.placeholder.com/24"/>
<span className="text-sm text-gray-600">Roberto S.</span>
<div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
</div>
</div>
<div className="flex space-x-2">
<button className="flex-1 bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Reservar Lugar
                            </button>
<button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                📱
                            </button>
</div>
</div>
</div>
</div>

<div className="text-center mt-8">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                    Cargar más breaks
                </button>
</div>
</div>
</section>

<div className="fixed bottom-6 right-6">
<button className="bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-lg transition-colors">
<span className="text-xl">➕</span>
</button>
</div>

    </>
  );
}
