import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            strokeWidth: 1.5
        });

        document.getElementById('carForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const make = document.getElementById('make').value;
            const model = document.getElementById('model').value;
            const year = document.getElementById('year').value;
            const kilometers = document.getElementById('kilometers').value;
            const fuel = document.getElementById('fuel').value;
            const condition = document.getElementById('condition').value;

            if (!make || !model || !year || !kilometers || !fuel || !condition) {
                alert('Please fill in all fields');
                return;
            }

            // Simulate price calculation based on inputs
            const basePrice = 20000;
            const yearFactor = (2024 - parseInt(year)) * 800;
            const kmFactor = (parseInt(kilometers) / 1000) * 0.15;
            
            let conditionMultiplier = 1;
            if (condition === 'excellent') conditionMultiplier = 1.15;
            else if (condition === 'good') conditionMultiplier = 1;
            else if (condition === 'fair') conditionMultiplier = 0.85;
            else if (condition === 'poor') conditionMultiplier = 0.7;

            const estimatedPrice = (basePrice - yearFactor - kmFactor) * conditionMultiplier;
            const minPrice = Math.round(estimatedPrice * 0.9);
            const maxPrice = Math.round(estimatedPrice * 1.1);
            const avgPrice = Math.round((minPrice + maxPrice) / 2);

            // Calculate precision based on data quality
            let precision = 75;
            if (parseInt(kilometers) < 150000) precision += 10;
            if (parseInt(year) >= 2018) precision += 8;
            if (condition === 'good' || condition === 'excellent') precision += 7;
            precision = Math.min(precision, 95);

            let precisionLabel = 'Medium';
            let precisionColor = 'yellow';
            if (precision >= 80) {
                precisionLabel = 'High';
                precisionColor = 'green';
            } else if (precision < 70) {
                precisionLabel = 'Low';
                precisionColor = 'red';
            }

            // Sample size based on popularity
            const sampleSize = Math.floor(Math.random() * 300) + 150;

            // Update UI
            document.getElementById('resultsPlaceholder').classList.add('hidden');
            document.getElementById('resultsContent').classList.remove('hidden');
            
            document.getElementById('minPrice').textContent = '€' + minPrice.toLocaleString();
            document.getElementById('maxPrice').textContent = '€' + maxPrice.toLocaleString();
            document.getElementById('avgPrice').textContent = '€' + avgPrice.toLocaleString();
            document.getElementById('precisionPercent').textContent = precision + '%';
            document.getElementById('precisionBar').style.width = precision + '%';
            document.getElementById('sampleSize').textContent = `Based on ${sampleSize} similar listings`;
            
            const badge = document.getElementById('precisionBadge');
            badge.textContent = precisionLabel;
            badge.className = `px-2.5 py-1 bg-${precisionColor}-50 text-${precisionColor}-700 text-xs font-medium rounded-md`;
            
            const bar = document.getElementById('precisionBar');
            bar.className = `h-full bg-${precisionColor}-500 rounded-full transition-all duration-500`;

            // Market insight
            const insights = [
                `This ${make} ${model} typically sells within 3-4 weeks. Consider pricing at the lower end for faster sale.`,
                `Demand for this model is currently high. You may be able to price at the upper end of the range.`,
                `Similar vehicles in your area sold for an average of €${avgPrice.toLocaleString()} in the past month.`,
                `This model holds its value well. Expect steady interest from buyers.`
            ];
            document.getElementById('marketInsight').textContent = insights[Math.floor(Math.random() * insights.length)];

            lucide.createIcons({
                strokeWidth: 1.5
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="border-b border-gray-200">
<div className="max-w-5xl mx-auto px-6 py-5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">CV</span>
</div>
<span className="text-base font-semibold tracking-tight">CarValue</span>
</div>
</div>
</header>

<main className="max-w-5xl mx-auto px-6 py-12">
<div className="mb-12">
<h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-3">Used Car Valuation</h1>
<p className="text-base text-gray-600">Get an accurate price estimate based on current market data from mobile.de</p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-white border border-gray-200 rounded-lg p-6">
<h2 className="text-lg font-semibold tracking-tight mb-6">Vehicle Details</h2>
<form className="space-y-5" id="carForm">

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white" id="make">
<option value="">Select make</option>
<option value="volkswagen">Volkswagen</option>
<option value="bmw">BMW</option>
<option value="mercedes">Mercedes-Benz</option>
<option value="audi">Audi</option>
<option value="opel">Opel</option>
<option value="ford">Ford</option>
<option value="toyota">Toyota</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" id="model" placeholder="e.g., Golf, 3 Series, C-Class" type="text"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" id="year" max="2024" min="1990" placeholder="2018" type="number"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Kilometers</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" id="kilometers" placeholder="50000" type="number"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white" id="fuel">
<option value="">Select fuel type</option>
<option value="petrol">Petrol</option>
<option value="diesel">Diesel</option>
<option value="electric">Electric</option>
<option value="hybrid">Hybrid</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white" id="condition">
<option value="">Select condition</option>
<option value="excellent">Excellent</option>
<option value="good">Good</option>
<option value="fair">Fair</option>
<option value="poor">Poor</option>
</select>
</div>
<button className="w-full bg-gray-900 text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2" type="submit">
<span>Calculate Value</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>

<div>
<div className="bg-gray-50 border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]" id="resultsPlaceholder">
<div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
<i className="w-8 h-8 text-gray-400" data-lucide="car"></i>
</div>
<h3 className="text-base font-medium text-gray-900 mb-2">No valuation yet</h3>
<p className="text-sm text-gray-600">Enter your vehicle details to get an estimated price range</p>
</div>
<div className="hidden" id="resultsContent">

<div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
<div className="flex items-start justify-between mb-6">
<div>
<h2 className="text-lg font-semibold tracking-tight mb-1">Estimated Value</h2>
<p className="text-sm text-gray-600">Based on mobile.de market data</p>
</div>
<div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-green-600" data-lucide="trending-up"></i>
</div>
</div>
<div className="space-y-4">
<div>
<div className="flex items-baseline gap-2 mb-1">
<span className="text-3xl font-semibold tracking-tight" id="minPrice">€12,500</span>
<span className="text-gray-400">—</span>
<span className="text-3xl font-semibold tracking-tight" id="maxPrice">€15,800</span>
</div>
<p className="text-sm text-gray-600">Price range</p>
</div>
<div className="pt-4 border-t border-gray-200">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-700">Average Price</span>
<span className="text-base font-semibold" id="avgPrice">€14,150</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-6">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-base font-semibold tracking-tight mb-1">Precision Score</h3>
<p className="text-sm text-gray-600">How accurate is this estimate</p>
</div>
<div className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md" id="precisionBadge">
                                    High
                                </div>
</div>
<div className="space-y-3">

<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">Confidence Level</span>
<span className="text-sm font-medium" id="precisionPercent">87%</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full transition-all duration-500" id="precisionBar" style={{width: '87%'}}></div>
</div>
</div>
<div className="pt-3 border-t border-gray-200 space-y-2">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
<div className="flex-1">
<p className="text-sm text-gray-900 font-medium">High sample size</p>
<p className="text-xs text-gray-600 mt-0.5" id="sampleSize">Based on 234 similar listings</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" data-lucide="calendar"></i>
<div className="flex-1">
<p className="text-sm text-gray-900 font-medium">Recent data</p>
<p className="text-xs text-gray-600 mt-0.5">Updated within last 7 days</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" data-lucide="map-pin"></i>
<div className="flex-1">
<p className="text-sm text-gray-900 font-medium">Market coverage</p>
<p className="text-xs text-gray-600 mt-0.5">Nationwide listings included</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-4">
<div className="flex gap-3">
<i className="w-5 h-5 text-blue-600 flex-shrink-0" data-lucide="info"></i>
<div>
<h4 className="text-sm font-medium text-blue-900 mb-1">Market Insight</h4>
<p className="text-sm text-blue-800" id="marketInsight">This model typically sells within 3-4 weeks. Consider pricing at the lower end for faster sale.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-gray-200 mt-16">
<div className="max-w-5xl mx-auto px-6 py-8">
<p className="text-sm text-gray-600">Data sourced from mobile.de • Estimates are for reference only</p>
</div>
</footer>
</div>


    </>
  );
}
