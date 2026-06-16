import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="absolute top-0 left-0 right-0 z-50 w-full pt-6">
<div className="max-w-[1346px] mx-auto px-6">
<div className="flex items-center justify-between">

<a className="block w-[183px]" href="#">
<img alt="TechCode Logo" className="w-full" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F06102c372977f8a0efff43f5826191ff7d43b594.svg?generation=1764489292917100&amp;alt=media"/>
</a>

<div className="flex items-center gap-10">
<nav className="hidden lg:block">
<ul className="flex items-center gap-8 text-white font-medium text-base">
<li><a className="hover:text-[#BA9DFF] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#BA9DFF] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#BA9DFF] transition-colors" href="#">Blog</a></li>
<li className="relative group cursor-pointer">
<div className="flex items-center gap-1">
<span>Pages</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</li>
</ul>
</nav>
<div className="hidden lg:flex items-center gap-6">
<a className="flex items-center text-white text-base font-medium hover:text-[#BA9DFF] transition-colors" href="#">
                            Cart (<span className="bg-white/10 px-1.5 rounded ml-1 text-sm">0</span>)
                        </a>
<a className="bg-white text-[#0D0C54] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all" href="#">
                            Get started
                        </a>
</div>

<button className="lg:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="28"></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-[#0A0618] rounded-b-[2rem] pt-40 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0 bg-cover bg-bottom opacity-40" style={{backgroundImage: 'url(\'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fba61a529957a6fcd078d8cadec69c6b8e71e333e.png?generation=1768015792686452&amp'}}></div>
<div className="max-w-[1346px] mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">

<div className="space-y-8">
<div>
<span className="text-gradient font-semibold text-base mb-3 inline-block">Introducing TechCode</span>
<h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                            Analytics reports to grow your business
                        </h1>
<p className="text-[#B8B1D8] text-lg max-w-md leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur tortor aliquet eget consectetur sollicitudin tempus.
                        </p>
</div>
<div className="flex flex-wrap gap-4">
<a className="bg-white text-[#0D0C54] font-semibold py-4 px-10 rounded-full shadow-[0_4px_8px_rgba(77,145,225,0.1)] hover:shadow-lg transition-all" href="#">
                            Get started
                        </a>
</div>

<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-[3px] border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbdb0d8c382ad491e8602f2624c445da0076f2251.png?generation=1764489293391353&amp;alt=media"/></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F280ae566e317c05124e8ca7154ef90cceb179178.png?generation=1764489293382246&amp;alt=media"/></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb66ef2e8e3037049d951bca33cadb0b0007471e9.png?generation=1764489293393245&amp;alt=media"/></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3e8c3fb2f9e78a986e4ad30c37043103063ff80d.png?generation=1764489293425590&amp;alt=media"/></div>
</div>
<div>
<div className="flex gap-0.5 text-[#FFB648] mb-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<div className="text-[#B8B1D8] text-sm">Trusted by <span className="text-white font-medium">500+ users</span></div>
</div>
</div>
</div>

<div className="relative perspective-[1000px]">
<div className="relative transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out">
<div className="border border-[#9A91FF]/30 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/5">
<img alt="Dashboard Preview" className="w-full h-auto block" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F50582285a02a06057e7584e5499741676b35fe8b.png?generation=1768015792665855&amp;alt=media"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-[1346px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-gradient font-semibold text-base mb-3 inline-block">Our features</span>
<h2 className="text-[#0D0C54] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">Simple, yet powerful features</h2>
</div>
<div className="mb-16 rounded-3xl overflow-hidden border border-[#EBE7FF]">
<img alt="Feature Graphic" className="w-full object-cover" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe768f8c59f1ef24120532578e499843c9ab7272b.png?generation=1768015792683431&amp;alt=media"/>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">

<div className="text-center">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
<img alt="Analytics" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Faecf8bc2c97336b6ca62f8ce2cb10311c69d3987.svg?generation=1764489293089868&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-3">Advanced analytics</h3>
<p className="text-[#40406A] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>

<div className="text-center">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
<img alt="Reports" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F42afb285108aa8d20f9053fb4f78f56eb9c34aef.svg?generation=1764489293223189&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-3">Automated reports</h3>
<p className="text-[#40406A] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>

<div className="text-center">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
<img alt="Dashboard" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3c4f580c5666f23d354de94cf8e7dd228d7554bf.svg?generation=1764489293205838&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-3">Collaborative dashboard</h3>
<p className="text-[#40406A] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>

<div className="text-center">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
<img alt="Campaign" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5f00f0cff047fe6647d934dd035f8ff523f4a070.svg?generation=1764489293146775&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-3">Campaign builder</h3>
<p className="text-[#40406A] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>

<div className="text-center">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
<img alt="Integration" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa44ca328a9fcae75208df3f00bbdcc3ffe9a028e.svg?generation=1764489293245480&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-3">50+ integrations</h3>
<p className="text-[#40406A] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>

<div className="text-center">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
<img alt="Apps" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2a14b321ba11bfdfd9c1805df7b2dce020b721d7.svg?generation=1764489293092752&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-3">Native apps</h3>
<p className="text-[#40406A] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center bg-[#6145FF] text-white font-semibold py-4 px-10 rounded-full shadow-[0_4px_8px_rgba(77,145,225,0.1)] hover:bg-[#5035e4] transition-colors" href="#">
                    Get started
                </a>
</div>
</div>
</section>

<section className="bg-[#F8F6FF] rounded-[2rem] overflow-hidden my-12 mx-6">
<div className="max-w-[1346px] mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/3 pt-12">
<span className="text-gradient font-semibold text-base mb-3 inline-block">Why choosing us</span>
<h2 className="text-[#0D0C54] text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                    Used and loved by thousands of users globally
                </h2>
<p className="text-[#40406A] text-lg leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet consectetur varius blandit leo dui nunc faucibus non sit viverra.
                </p>
<a className="inline-flex items-center justify-center bg-[#6145FF] text-white font-semibold py-4 px-10 rounded-full shadow-[0_4px_8px_rgba(77,145,225,0.1)] hover:bg-[#5035e4] transition-colors" href="#">
                    Get started
                </a>
</div>

<div className="lg:w-2/3 relative h-[600px] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#F8F6FF] via-transparent to-[#F8F6FF] z-20 pointer-events-none"></div>
<div className="grid grid-cols-2 gap-6">

<div className="space-y-6 animate-scroll-up">

<div className="bg-white p-6 rounded-3xl shadow-sm border border-[#EBE7FF] flex gap-4">
<img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F280ae566e317c05124e8ca7154ef90cceb179178.png?generation=1764489293382246&amp;alt=media"/>
<div>
<div className="flex items-center gap-1 font-semibold text-[#0D0C54]">Emily Johnson <span className="iconify text-[#6145FF]" data-icon="lucide:badge-check" data-width="16"></span></div>
<div className="text-sm text-[#40406A] mb-2">@emilyjohnson</div>
<p className="text-[#40406A] text-sm">“This platform transformed our business operations effortlessly. Truly top-notch service!”</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-[#EBE7FF] flex gap-4">
<img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbdb0d8c382ad491e8602f2624c445da0076f2251.png?generation=1764489293391353&amp;alt=media"/>
<div>
<div className="flex items-center gap-1 font-semibold text-[#0D0C54]">John Carter <span className="iconify text-[#6145FF]" data-icon="lucide:badge-check" data-width="16"></span></div>
<div className="text-sm text-[#40406A] mb-2">@johncarter</div>
<p className="text-[#40406A] text-sm">“Revolutionized our workflow with seamless integrations and robust tools. Best decision ever!”</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-[#EBE7FF] flex gap-4">
<img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3e8c3fb2f9e78a986e4ad30c37043103063ff80d.png?generation=1764489293425590&amp;alt=media"/>
<div>
<div className="flex items-center gap-1 font-semibold text-[#0D0C54]">Lilly Woods <span className="iconify text-[#6145FF]" data-icon="lucide:badge-check" data-width="16"></span></div>
<div className="text-sm text-[#40406A] mb-2">@lillywoods</div>
<p className="text-[#40406A] text-sm">“User-friendly interface paired with powerful tools – this startup is a game-changer”</p>
</div>
</div>
</div>

<div className="space-y-6 mt-12">

<div className="bg-white p-6 rounded-3xl shadow-sm border border-[#EBE7FF] flex gap-4">
<img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb66ef2e8e3037049d951bca33cadb0b0007471e9.png?generation=1764489293393245&amp;alt=media"/>
<div>
<div className="flex items-center gap-1 font-semibold text-[#0D0C54]">Andy Smith <span className="iconify text-[#6145FF]" data-icon="lucide:badge-check" data-width="16"></span></div>
<div className="text-sm text-[#40406A] mb-2">@andysmith</div>
<p className="text-[#40406A] text-sm">“Exceptional service and features that perfectly fit our needs. Highly recommend this startup”</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-[#EBE7FF] flex gap-4">
<img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fca7b4ba0992a1bc355c320338689933e26446ec5.png?generation=1764489293485639&amp;alt=media"/>
<div>
<div className="flex items-center gap-1 font-semibold text-[#0D0C54]">Sophie Moore <span className="iconify text-[#6145FF]" data-icon="lucide:badge-check" data-width="16"></span></div>
<div className="text-sm text-[#40406A] mb-2">@sophiemoore</div>
<p className="text-[#40406A] text-sm">“Outstanding support and innovative features. Our business has never been more streamlined”</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-[1062px] mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-16">
<span className="text-gradient font-semibold text-base mb-3 inline-block">Why TechCode</span>
<h2 className="text-[#0D0C54] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-4">
                    What makes us stand from the rest
                </h2>
<p className="text-[#40406A] leading-relaxed">Lorem ipsum dolor sit amet consectetur eros sodales est mi lectus habitant auctor pharetra hendrerit elementum.</p>
</div>
<div className="space-y-24">

<div className="sticky top-24 bg-white border border-[#EBE7FF] rounded-[2rem] p-6 shadow-sm">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="bg-[#F8F6FF] rounded-3xl overflow-hidden border border-[#EBE7FF]">
<img className="w-full h-auto" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa6399b9c233e50d1c780531d1e1860eb42fb1aa9.png?generation=1768015792723213&amp;alt=media"/>
</div>
<div className="p-6 md:p-12">
<h3 className="text-[#0D0C54] text-3xl md:text-4xl font-semibold mb-8">Custom-made reports to make great decisions</h3>
<div className="space-y-8">
<div className="flex gap-4">
<img className="w-10 h-10 shrink-0" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd0e6049750a475444640abadbcda649ed804b9c9.svg?generation=1764489293114794&amp;alt=media"/>
<div>
<h4 className="text-[#0D0C54] text-xl font-semibold mb-1">Real-time updates</h4>
<p className="text-[#40406A] text-sm">Lorem ipsum dolor sit amet consectetur.</p>
</div>
</div>
<div className="flex gap-4">
<img className="w-10 h-10 shrink-0" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F30f0b831c9309be7a5a93a982c8a6bceca470748.svg?generation=1764489293079458&amp;alt=media"/>
<div>
<h4 className="text-[#0D0C54] text-xl font-semibold mb-1">Custom charts</h4>
<p className="text-[#40406A] text-sm">Lorem ipsum dolor sit amet consectetur.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-28 bg-white border border-[#EBE7FF] rounded-[2rem] p-6 shadow-sm">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="bg-[#F8F6FF] rounded-3xl overflow-hidden border border-[#EBE7FF]">
<img className="w-full h-auto" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8bd56b8a01e436e2aba0573387332d1574ab8f91.png?generation=1768015792771968&amp;alt=media"/>
</div>
<div className="p-6 md:p-12">
<h3 className="text-[#0D0C54] text-3xl md:text-4xl font-semibold mb-8">We make it easy to track users analytics</h3>
<div className="space-y-8">
<div className="flex gap-4">
<img className="w-10 h-10 shrink-0" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F4992e638f96f00bb64788927410ff4362bd23710.svg?generation=1764489293090171&amp;alt=media"/>
<div>
<h4 className="text-[#0D0C54] text-xl font-semibold mb-1">Advanced tracking</h4>
<p className="text-[#40406A] text-sm">Lorem ipsum dolor sit amet consectetur.</p>
</div>
</div>
<div className="flex gap-4">
<img className="w-10 h-10 shrink-0" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8a8f99c0e689d12641643a220676ff1ac09384c5.svg?generation=1764489293028391&amp;alt=media"/>
<div>
<h4 className="text-[#0D0C54] text-xl font-semibold mb-1">Individual-user monitoring</h4>
<p className="text-[#40406A] text-sm">Lorem ipsum dolor sit amet consectetur.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center bg-[#6145FF] text-white font-semibold py-4 px-10 rounded-full shadow-[0_4px_8px_rgba(77,145,225,0.1)] hover:bg-[#5035e4] transition-colors" href="#">
                    Get started
                </a>
</div>
</div>
</section>

<section className="px-6 py-6">
<div className="max-w-[1346px] mx-auto bg-[#0A0618] rounded-[2rem] overflow-hidden relative" style={{backgroundImage: 'url(\'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3d7ce27ae49085467669f6b2d3dda6f948d6e566.png?generation=1768015792724802&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="grid md:grid-cols-[0.8fr_1fr] items-end">
<div className="pt-16 pl-6 hidden md:block">
<img className="w-full max-w-[556px] block" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe35e8b32f03764ac054dc6cb987d0c2fc6242dc9.png?generation=1768015792773788&amp;alt=media"/>
</div>
<div className="p-16 md:p-24 text-left">
<span className="text-gradient font-semibold text-base mb-3 inline-block">Get started today</span>
<h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-8">Let’s simplify &amp; automate your marketing campaigns</h2>
<div className="flex flex-wrap gap-4">
<a className="bg-white text-[#0D0C54] font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-gray-50 transition-colors" href="#">Get started</a>
<a className="border border-white text-white font-semibold py-4 px-10 rounded-full hover:bg-white hover:text-[#0D0C54] transition-colors" href="#">Browse all features</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-[1346px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div className="max-w-md">
<span className="text-gradient font-semibold text-base mb-3 inline-block">User cases</span>
<h2 className="text-[#0D0C54] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">Designed for all kinds of teams</h2>
</div>
<div className="max-w-md">
<p className="text-[#40406A] text-lg">Lorem ipsum dolor sit amet consectetur ut purus facilisi morbi fusce adipiscing nunc auctor natoque iaculis.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="space-y-8">
<div className="border border-[#EBE7FF] rounded-3xl overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F4451072752d762f48b9f3c70d776e9ce1f1db8e2.png?generation=1768015792773540&amp;alt=media"/>
</div>
<div className="text-center px-4">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#F8F6FF] rounded-full">
<img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5f00f0cff047fe6647d934dd035f8ff523f4a070.svg?generation=1764489293146775&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-2">Marketing teams</h3>
<p className="text-[#40406A] leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>
</div>

<div className="space-y-8">
<div className="border border-[#EBE7FF] rounded-3xl overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F790e29a10d9d3c27b6ec944659cbbac828c436b7.png?generation=1768015792813726&amp;alt=media"/>
</div>
<div className="text-center px-4">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#F8F6FF] rounded-full">
<img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3e3b33a1952c3f5c139911869afbb4dcb1afe6bf.svg?generation=1768015792824753&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-2">Engineering teams</h3>
<p className="text-[#40406A] leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>
</div>

<div className="space-y-8">
<div className="border border-[#EBE7FF] rounded-3xl overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe246209c4144d135101e0333c2ba4df3d4594f34.png?generation=1768015792820304&amp;alt=media"/>
</div>
<div className="text-center px-4">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#F8F6FF] rounded-full">
<img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6123b612eac57d72673e58edd357ac1d7125c04f.svg?generation=1768015792845826&amp;alt=media"/>
</div>
<h3 className="text-[#0D0C54] text-2xl font-semibold mb-2">Sales teams</h3>
<p className="text-[#40406A] leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur. Augue pretium id augue morbi. Tellus.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center bg-[#6145FF] text-white font-semibold py-4 px-10 rounded-full shadow-[0_4px_8px_rgba(77,145,225,0.1)] hover:bg-[#5035e4] transition-colors" href="#">
                    Get started
                </a>
</div>
</div>
</section>

<section className="mx-6 bg-[#F8F6FF] rounded-[2rem] pt-32 pb-0 overflow-hidden text-center relative">
<div className="max-w-2xl mx-auto px-6 relative z-10">
<span className="text-gradient font-semibold text-base mb-3 inline-block">Integrations</span>
<h2 className="text-[#0D0C54] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-4">
                Integrated with the tools you know and love
            </h2>
<p className="text-[#40406A] leading-relaxed mb-12">Lorem ipsum dolor sit amet consectetur praesent cursus amet gravida egestas tellus vitae tortor enim tortor fusce quam quam orci ornare.</p>
<a className="inline-flex items-center justify-center border border-[#B8B1D8] text-[#0D0C54] font-semibold py-4 px-10 rounded-full hover:bg-white transition-colors mb-20" href="#">
                Browse all integrations
            </a>
</div>
<div className="flex justify-center -mb-[10%] relative z-0">
<img className="max-w-full w-[1693px] object-cover object-bottom" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9a26b1caed7a82e39ad289ebd23ceb5bfe664a06.png?generation=1768015792873789&amp;alt=media"/>
</div>
</section>

<section className="py-32">
<div className="max-w-[1346px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div>
<span className="text-gradient font-semibold text-base mb-3 inline-block">Our blog</span>
<h2 className="text-[#0D0C54] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">Latest news &amp; articles</h2>
</div>
<a className="inline-flex items-center justify-center border border-[#B8B1D8] text-[#0D0C54] font-semibold py-4 px-10 rounded-full hover:bg-gray-50 transition-colors" href="#">
                    Browse all articles
                </a>
</div>
<div className="grid md:grid-cols-2 gap-10">

<a className="group block h-full flex flex-col" href="#">
<div className="border border-[#EBE7FF] rounded-3xl overflow-hidden mb-6">
<img className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F80953307c401b043d7d0a18ef3ffdb4841cfa724.png?generation=1768015792877270&amp;alt=media"/>
</div>
<div className="flex flex-col flex-grow">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-white shadow-sm" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbdb0d8c382ad491e8602f2624c445da0076f2251.png?generation=1764489293391353&amp;alt=media"/>
<span className="font-semibold text-[#0D0C54]">John Carter</span>
<span className="text-[#B8B1D8]">/</span>
<span className="text-[#40406A] text-sm font-semibold">Jan 27, 2025</span>
</div>
<span className="bg-[#F8F6FF] text-[#0D0C54] text-xs font-bold uppercase py-1.5 px-3 rounded-full border border-[#EBE7FF] flex items-center gap-1">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span> Development
                            </span>
</div>
<h3 className="text-[#0D0C54] text-2xl lg:text-3xl font-semibold leading-tight group-hover:text-[#6145FF] transition-colors">
                            5 tips on choosing the right platform for mobile app tracking
                        </h3>
</div>
</a>

<a className="group block h-full flex flex-col" href="#">
<div className="border border-[#EBE7FF] rounded-3xl overflow-hidden mb-6">
<img className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F29892c2a084c95074fe56b4361497a133b2ab308.png?generation=1768015792890079&amp;alt=media"/>
</div>
<div className="flex flex-col flex-grow">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-white shadow-sm" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F280ae566e317c05124e8ca7154ef90cceb179178.png?generation=1764489293382246&amp;alt=media"/>
<span className="font-semibold text-[#0D0C54]">Sophie Moore</span>
<span className="text-[#B8B1D8]">/</span>
<span className="text-[#40406A] text-sm font-semibold">Jan 27, 2025</span>
</div>
<span className="bg-[#F8F6FF] text-[#0D0C54] text-xs font-bold uppercase py-1.5 px-3 rounded-full border border-[#EBE7FF] flex items-center gap-1">
<span className="iconify" data-icon="lucide:megaphone" data-width="14"></span> Marketing
                            </span>
</div>
<h3 className="text-[#0D0C54] text-2xl lg:text-3xl font-semibold leading-tight group-hover:text-[#6145FF] transition-colors">
                            3 experiments to improve your mobile funnel and reach your KPIs
                        </h3>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-[#0A0618] text-white rounded-t-[2rem] relative overflow-hidden">
<div className="absolute inset-0 bottom-0 top-auto h-3/4 bg-cover bg-bottom opacity-20 pointer-events-none" style={{backgroundImage: 'url(\'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F1a11591edf09567441a7c5d8b628e4d478eee4a5.png?generation=1764489293519547&amp'}}></div>
<div className="max-w-[1346px] mx-auto px-6 pt-32 pb-10 relative z-10">
<div className="grid lg:grid-cols-[1.2fr_2fr] gap-16 mb-20">

<div className="flex flex-col justify-between">
<div className="bg-[#9A91FF]/10 backdrop-blur-md border border-[#C9C4FF]/20 rounded-2xl p-8 mb-8">
<img alt="Logo" className="w-32 mb-4" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F06102c372977f8a0efff43f5826191ff7d43b594.svg?generation=1764489292917100&amp;alt=media"/>
<p className="text-[#B8B1D8] mb-6 text-sm">Lorem ipsum dolor sit amet non sit id consectetur dictum.</p>
<form className="space-y-4">
<input className="w-full bg-[#9A91FF]/10 border border-[#C9C4FF]/20 rounded-full px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#6145FF]" placeholder="Enter your email" type="email"/>
<button className="w-full bg-white text-[#0D0C54] font-semibold rounded-full px-6 py-4 hover:bg-gray-100 transition-colors">Subscribe</button>
</form>
</div>
<div className="flex items-center justify-between gap-4">
<span className="font-semibold">Follow us on</span>
<div className="flex gap-4">
<a className="hover:text-[#BA9DFF]" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="hover:text-[#BA9DFF]" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="hover:text-[#BA9DFF]" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="hover:text-[#BA9DFF]" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="20"></span></a>
<a className="hover:text-[#BA9DFF]" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-8">

<div>
<h4 className="text-xl font-semibold mb-6">Main pages</h4>
<ul className="space-y-4 text-[#B8B1D8] text-sm">
<li><a className="hover:text-white transition-colors" href="#">Home V1</a></li>
<li><a className="hover:text-white transition-colors" href="#">Home V2</a></li>
<li><a className="hover:text-white transition-colors" href="#">Home V3</a></li>
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog V1</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog V2</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog V3</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog post</a></li>
</ul>
</div>

<div className="hidden md:block">
<h4 className="text-xl font-semibold mb-6 opacity-0">.</h4>
<ul className="space-y-4 text-[#B8B1D8] text-sm">
<li><a className="hover:text-white transition-colors" href="#">Features V1</a></li>
<li><a className="hover:text-white transition-colors" href="#">Features V2</a></li>
<li><a className="hover:text-white transition-colors" href="#">Features V3</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help center</a></li>
</ul>
</div>

<div>
<h4 className="text-xl font-semibold mb-6">Utility pages</h4>
<ul className="space-y-4 text-[#B8B1D8] text-sm">
<li><a className="hover:text-white transition-colors" href="#">Sign in</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sign up</a></li>
<li><a className="hover:text-white transition-colors" href="#">Forgot password</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Style guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Licenses</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-[#9785FF]/10 pt-8 text-center text-[#B8B1D8] text-sm">
<p>Copyright © TechCode | Designed by <a className="text-white hover:underline" href="#">BRIX Templates</a> - Powered by <a className="text-white hover:underline" href="#">Webflow</a></p>
</div>
</div>
</footer>

    </>
  );
}
