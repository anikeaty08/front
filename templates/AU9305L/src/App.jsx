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



lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
  const elms = [...document.querySelectorAll('[data-animate]')];
  elms.forEach((el, idx) => {
    el.classList.add('opacity-0', 'translate-y-6', 'blur-sm', 'transition', 'duration-700');
    setTimeout(() => {
      el.classList.remove('opacity-0', 'translate-y-6', 'blur-sm');
    }, 200 + idx * 120);               // quicker stagger for smoother flow
  });

  // copy-to-clipboard interactions
  document.querySelectorAll('.copy-btn').forEach(btn => {
    const label = btn.querySelector('span');
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.closest('section').querySelector('pre').innerText);
      const original = label.textContent;
      label.textContent = 'Copied';
      btn.classList.add('text-emerald-400');
      setTimeout(() => {
        label.textContent = original;
        btn.classList.remove('text-emerald-400');
      }, 1500);
    });
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spline-container fixed top-0 w-full h-screen -z-10">
<iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/worldplanet-inmHh7fVCul1jUFrNRYlotVU" width="100%"></iframe>
</div>

<header className="sticky top-0 backdrop-blur border-b border-neutral-800" data-animate="" role="navigation">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
<a className="flex items-center gap-2 group" data-animate="" href="#">
<i className="w-5 h-5 text-gray-100 group-hover:text-gray-300 transition" data-lucide="globe"></i>
<span className="text-sm font-light tracking-tight">GlobalCode</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition font-light tracking-tight" data-animate="" href="#">Product</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition font-light tracking-tight" data-animate="" href="#">Docs</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition font-light tracking-tight" data-animate="" href="#">Pricing</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition font-light tracking-tight" data-animate="" href="#">Blog</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex text-sm text-neutral-300 hover:text-neutral-100 transition font-light tracking-tight" data-animate="" href="#">Sign in</a>
<a className="inline-flex items-center gap-1 rounded-lg text-sm px-3 py-2 bg-neutral-100 text-black hover:bg-neutral-200 transition font-light tracking-tight" data-animate="" href="#">
        Sign up
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</header>

<main className="flex-1 flex items-center">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 pt-24 pb-16 w-full">

<section className="w-full lg:max-w-md space-y-6">
<h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-light tracking-tighter" data-animate="">
        Detect &amp; remediate policy drift in seconds
      </h1>
<p className="text-lg text-neutral-300 font-light tracking-tight" data-animate="">
        Continuously monitor your cloud for deviations from your security blueprints and remediate with one click.
      </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-5 py-3 text-sm hover:bg-neutral-200 transition font-light tracking-tight" data-animate="" href="#">
          Request a demo
          <i className="w-4 h-4" data-lucide="rocket"></i>
</a>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-black text-neutral-100 px-5 py-3 text-sm hover:bg-neutral-950 transition font-light tracking-tight" data-animate="">
          Learn more
        </button>
</div>
</section>

<div className="relative flex flex-col items-center space-y-8" data-animate="">

<section aria-label="Policy drift card" className="w-full max-w-sm overflow-hidden border rounded-xl shadow-lg shadow-black/30 border-white/10 bg-white/5 backdrop-blur-md transform -rotate-y-20 -rotate-z-15" data-animate="">
<header className="p-6">
<div className="flex gap-3 items-start">
<span className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-950 shrink-0">
<i className="w-5 h-5 text-rose-400" data-lucide="shield-alert"></i>
</span>
<h2 className="text-sm leading-6 font-light tracking-tight">Policy drift detected between live infrastructure and blueprint</h2>
</div>
</header>
<div className="border-t border-white/10"></div>
<div className="p-6 space-y-6">
<div>
<h3 className="text-xs text-neutral-400 font-light tracking-tight">OVERVIEW</h3>
<p className="mt-2 text-sm text-neutral-200 font-light tracking-tight">
              The live S3 bucket policy deviates from the approved security blueprint, potentially exposing data to unauthorized principals.
            </p>
</div>
<div className="flex">
<div className="w-24">
<h3 className="text-xs text-neutral-400 font-light tracking-tight">IMPACTED</h3>
</div>
<ul className="flex flex-wrap gap-2">
<li className="px-2.5 py-0.5 rounded-md text-xs bg-indigo-900/40 text-indigo-200 font-light tracking-tight">us-east-1</li>
<li className="px-2.5 py-0.5 rounded-md text-xs bg-pink-900/40 text-pink-200 font-light tracking-tight">prod-logging-bucket</li>
<li className="px-2.5 py-0.5 rounded-md text-xs bg-green-900/40 text-green-200 font-light tracking-tight">12 objects</li>
</ul>
</div>
<div className="flex">
<div className="w-24">
<h3 className="text-xs text-neutral-400 font-light tracking-tight">SOURCE</h3>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-300" data-lucide="git-branch"></i>
<span className="text-sm font-light tracking-tight">acme-secure/bucket_policy.tf</span>
</div>
</div>
<div className="flex">
<div className="w-24">
<h3 className="text-xs text-neutral-400 font-light tracking-tight">SEVERITY</h3>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
<span className="text-sm font-light tracking-tight">Critical</span>
</div>
</div>
<div className="border-t border-white/10 pt-6">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-100 text-black px-4 py-2 text-sm hover:bg-neutral-200 transition font-light tracking-tight">
              View remediation guide
              <i className="w-4 h-4" data-lucide="external-link"></i>
</button>
</div>
</div>
</section>

<section aria-label="Blueprint diff" className="hidden lg:block absolute -bottom-24 left-2/3 w-full max-w-sm overflow-hidden border rounded-xl shadow-lg shadow-black/30 border-white/10 bg-white/5 backdrop-blur-md transform rotate-y-20 -rotate-z-15" data-animate="">
<div className="flex items-center justify-between border-b border-white/10 px-6 py-3 bg-white/5 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="text-sm font-light tracking-tight">Blueprint</span>
<i className="w-4 h-4 text-gray-400" data-lucide="file-text"></i>
</div>
<button aria-label="Copy snippet" className="copy-btn flex items-center gap-1 text-xs text-neutral-300 hover:text-neutral-100 transition">
<i className="w-4 h-4" data-lucide="copy"></i>
<span className="font-light tracking-tight">Copy</span>
</button>
</div>
<div className="px-6 py-6 overflow-x-auto">
<pre className="whitespace-pre text-[13px] leading-5 select-text font-light tracking-tight"><span className="select-none text-neutral-500">14</span> resource "aws_s3_bucket_policy" "logging" {
<span className="select-none text-neutral-500">15</span>   bucket = aws_s3_bucket.logging.id
<span className="select-none text-neutral-500">16</span>   policy = jsonencode({
<span className="select-none text-neutral-500">17</span>     Version = "2012-10-17"
<span className="select-none text-neutral-500 bg-indigo-950/40">18</span><span className="bg-indigo-950/40">     Statement = [</span>
<span className="select-none text-neutral-500 bg-indigo-950/40">19</span><span className="bg-indigo-950/40">       {</span>
<span className="select-none text-neutral-500 bg-indigo-950/40">20</span><span className="bg-indigo-950/40">         Effect   = "Deny"</span>
<span className="select-none text-neutral-500 bg-indigo-950/40">21</span><span className="bg-indigo-950/40">         Principal = "*"</span>
<span className="select-none text-neutral-500">22</span>         Action   = [ "s3:*" ]
<span className="select-none text-neutral-500">23</span>         Resource = [ "${aws_s3_bucket.logging.arn}/*" ]
<span className="select-none text-neutral-500 bg-indigo-950/40">24</span><span className="bg-indigo-950/40">       }</span>
<span className="select-none text-neutral-500">25</span>     ]
<span className="select-none text-neutral-500">26</span>   })
<span className="select-none text-neutral-500">27</span> }
</pre>
</div>
</section>
</div>
</div>
</main>



    </>
  );
}
