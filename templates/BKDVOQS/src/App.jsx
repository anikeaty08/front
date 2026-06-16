import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = { theme: { fontFamily: { sans: ['Inter', 'sans-serif'] } } }



  lucide.createIcons();

  const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  const portfolioItems = document.querySelectorAll('#portfolioGrid article');
  const allFilter = document.getElementById('filter-all');

  // Handle checkbox interactions
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });

  function handleFilterChange(e) {
    const checkbox = e.target;
    const label = document.querySelector(`label[for="${checkbox.id}"]`);

    if (checkbox.value === 'all') {
      // If "All Services" is clicked, uncheck others and show all
      if (checkbox.checked) {
        filterCheckboxes.forEach(cb => {
          if (cb !== checkbox) {
            cb.checked = false;
            updateCheckboxAppearance(cb, false);
          }
        });
        updateCheckboxAppearance(checkbox, true);
        showAllItems();
      } else {
        // Don't allow unchecking "All" if no other filters are selected
        checkbox.checked = true;
      }
    } else {
      // If a specific filter is selected, uncheck "All Services"
      if (checkbox.checked) {
        allFilter.checked = false;
        updateCheckboxAppearance(allFilter, false);
        updateCheckboxAppearance(checkbox, true);
      } else {
        updateCheckboxAppearance(checkbox, false);
        // If no filters are selected, check "All Services"
        const anyChecked = Array.from(filterCheckboxes).some(cb => cb.checked && cb.value !== 'all');
        if (!anyChecked) {
          allFilter.checked = true;
          updateCheckboxAppearance(allFilter, true);
          showAllItems();
          return;
        }
      }
    }

    filterItems();
  }

  function updateCheckboxAppearance(checkbox, isChecked) {
    const label = document.querySelector(`label[for="${checkbox.id}"]`);

    if (isChecked) {
      label.classList.add('bg-blue-50', 'border-blue-600', 'text-blue-700');
      label.classList.remove('bg-white', 'border-gray-200', 'text-gray-700');
    } else {
      label.classList.remove('bg-blue-50', 'border-blue-600', 'text-blue-700');
      label.classList.add('bg-white', 'border-gray-200', 'text-gray-700');
    }
  }

  function filterItems() {
    const activeFilters = Array.from(filterCheckboxes)
      .filter(cb => cb.checked && cb.value !== 'all')
      .map(cb => cb.value);

    portfolioItems.forEach(item => {
      const categories = item.dataset.category.split(' ');
      const shouldShow = activeFilters.length === 0 || 
        activeFilters.some(filter => categories.includes(filter));
      
      if (shouldShow) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeInUp 0.4s ease-out forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  }

  function showAllItems() {
    portfolioItems.forEach(item => {
      item.classList.remove('hidden');
      item.style.animation = 'fadeInUp 0.4s ease-out forwards';
    });
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative h-[45vh] bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1522204507435-9c4a9c4533c6?auto=format&amp'}}>
<div className="absolute inset-0 bg-gray-900/70"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 opacity-0 translate-y-8" style={{animation: 'fadeInUp 0.8s ease-out 0.2s forwards'}}>
<h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight">Portfolio</h1>
<p className="mt-4 text-gray-200 max-w-2xl leading-relaxed font-light">We craft high-performing websites that don't just look great—they drive results. Whether you need a fresh design, better conversions, or an SEO boost, we're here to make it happen.</p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">

<div className="mb-12 opacity-0 translate-y-4" style={{animation: 'fadeInUp 0.6s ease-out 0.6s forwards'}}>
<label className="block text-base font-medium text-gray-900 mb-6">Filter by services</label>

<div className="flex flex-wrap gap-3">

<div className="flex items-center">
<input checked="" className="hidden" id="filter-all" type="checkbox" value="all"/>
<label className="inline-flex items-center px-4 py-2 rounded-full border-2 border-blue-600 bg-blue-50 cursor-pointer transition-all duration-200 hover:bg-blue-100 text-sm font-medium text-blue-700 filter-checkbox" htmlFor="filter-all">
      All Services
    </label>
</div>

<div className="flex items-center">
<input className="hidden" id="filter-web-design" type="checkbox" value="web-design"/>
<label className="inline-flex items-center cursor-pointer transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 filter-checkbox text-sm font-medium text-gray-700 bg-white border-gray-200 border-2 rounded-full pt-2 pr-4 pb-2 pl-4" htmlFor="filter-web-design">
      Website Design
    </label>
</div>

<div className="flex items-center">
<input className="hidden" id="filter-wordpress" type="checkbox" value="wordpress"/>
<label className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white cursor-pointer transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 text-sm font-medium text-gray-700 filter-checkbox" htmlFor="filter-wordpress">
      WordPress Development
    </label>
</div>

<div className="flex items-center">
<input className="hidden" id="filter-ecommerce" type="checkbox" value="ecommerce"/>
<label className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white cursor-pointer transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 text-sm font-medium text-gray-700 filter-checkbox" htmlFor="filter-ecommerce">
      E-commerce
    </label>
</div>

<div className="flex items-center">
<input className="hidden" id="filter-seo" type="checkbox" value="seo"/>
<label className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white cursor-pointer transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 text-sm font-medium text-gray-700 filter-checkbox" htmlFor="filter-seo">
      SEO
    </label>
</div>
</div>
</div>

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" id="portfolioGrid">

<article className="group opacity-0 translate-y-6" data-category="web-design wordpress" style={{animation: 'fadeInUp 0.6s ease-out 0.8s forwards'}}>
<div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 group-hover:shadow-lg group-hover:ring-gray-300/50">
<img alt="ASP Website" className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://source.unsplash.com/400x500/?website,design"/>
</div>
<h3 className="mt-4 text-lg font-medium text-gray-900">ASP</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">Website Design</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-50 text-purple-700">WordPress Development</span>
</div>
</article>

<article className="group opacity-0 translate-y-6" data-category="web-design" style={{animation: 'fadeInUp 0.6s ease-out 0.9s forwards'}}>
<div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 group-hover:shadow-lg group-hover:ring-gray-300/50">
<img alt="Breakwall HR Website" className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://source.unsplash.com/400x500/?landing,homepage"/>
</div>
<h3 className="mt-4 text-lg font-medium text-gray-900">Breakwall HR</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">Website Design</span>
</div>
</article>

<article className="group opacity-0 translate-y-6" data-category="web-design wordpress" style={{animation: 'fadeInUp 0.6s ease-out 1.0s forwards'}}>
<div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 group-hover:shadow-lg group-hover:ring-gray-300/50">
<img alt="Brunetti Oro Website" className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://source.unsplash.com/400x500/?blog,layout"/>
</div>
<h3 className="mt-4 text-lg font-medium text-gray-900">Brunetti Oro</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">Website Design</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-50 text-purple-700">WordPress Development</span>
</div>
</article>

<article className="group opacity-0 translate-y-6" data-category="web-design wordpress seo" style={{animation: 'fadeInUp 0.6s ease-out 1.1s forwards'}}>
<div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 group-hover:shadow-lg group-hover:ring-gray-300/50">
<img alt="Crank Website" className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://source.unsplash.com/400x500/?dark,branding"/>
</div>
<h3 className="mt-4 text-lg font-medium text-gray-900">Crank</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">Website Design</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-50 text-purple-700">WordPress Development</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700">SEO</span>
</div>
</article>

<article className="group opacity-0 translate-y-6" data-category="web-design wordpress" style={{animation: 'fadeInUp 0.6s ease-out 1.2s forwards'}}>
<div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 group-hover:shadow-lg group-hover:ring-gray-300/50">
<img alt="MTI Website" className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://source.unsplash.com/400x500/?medical,tech"/>
</div>
<h3 className="mt-4 text-lg font-medium text-gray-900">MTI</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">Website Design</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-50 text-purple-700">WordPress Development</span>
</div>
</article>

<article className="group opacity-0 translate-y-6" data-category="web-design wordpress ecommerce" style={{animation: 'fadeInUp 0.6s ease-out 1.3s forwards'}}>
<div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 group-hover:shadow-lg group-hover:ring-gray-300/50">
<img alt="TRA Australia Website" className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://source.unsplash.com/400x500/?ecommerce,store"/>
</div>
<h3 className="mt-4 text-lg font-medium text-gray-900">TRA Australia</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">Website Design</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-50 text-purple-700">WordPress Development</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-50 text-orange-700">E-commerce</span>
</div>
</article>
</div>
</section>
<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>




    </>
  );
}
