import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
950: '#030712',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 h-full bg-blue-700 dark:bg-blue-900 text-blue-100 flex-col hidden md:flex border-r border-blue-800 dark:border-blue-950 shadow-xl z-20 transition-colors duration-300">

<div className="h-16 flex items-center px-6 border-b border-blue-600 dark:border-blue-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white text-blue-700 flex items-center justify-center font-semibold tracking-tighter text-sm">
                    ADW
                </div>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Overview
            </a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-blue-300 uppercase tracking-wider">Platform</div>

<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-blue-800 text-white shadow-sm ring-1 ring-blue-600/50" href="#">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Projects Catalog
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Team Vault
            </a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-blue-300 uppercase tracking-wider">Knowledge</div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Resources
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:notebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Blog
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Sharing Sessions
            </a>
</nav>

<div className="p-4 border-t border-blue-600 dark:border-blue-800">
<button className="flex items-center gap-3 w-full group">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white ring-2 ring-blue-400 group-hover:ring-white transition-all">
                    JD
                </div>
<div className="flex-1 min-w-0 text-left">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs text-blue-200 truncate">Engineering</p>
</div>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col h-full relative">

<header className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-10 md:hidden">
<div className="flex items-center gap-4">
<button className="p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<span className="font-semibold text-gray-900 dark:text-white">Projects Catalog</span>
</div>
</header>

<div className="hidden md:flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800/50">
<nav className="flex items-center text-sm font-medium">
<a className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors" href="#">Platform</a>
<iconify-icon className="mx-2 text-gray-400" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<a className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors" href="#">Projects Catalog</a>
<iconify-icon className="mx-2 text-gray-400" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-gray-900 dark:text-white">Payment Gateway Core</span>
</nav>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="solar:moon-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:sun-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-200 dark:bg-gray-800"></div>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex flex-col lg:flex-row justify-between items-start gap-6 pb-8 border-b border-gray-200 dark:border-gray-800">
<div className="space-y-4 max-w-3xl">
<div className="flex items-center gap-3">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Payment Gateway Core</h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
                            </span>
</div>
<p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                            Centralized payment processing service handling Stripe and PayPal integrations. Responsible for transaction lifecycles, reconciliation workers, and webhooks.
                        </p>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon icon="solar:link-linear" width="16"></iconify-icon>
<a className="hover:text-blue-600 hover:underline decoration-blue-600/30 transition-colors" href="#">api.payments.adw.internal</a>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 pt-2">
<button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 shadow-sm text-sm font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
                            Edit Project
                        </button>
<button className="inline-flex items-center gap-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
<iconify-icon icon="solar:github-linear" width="18"></iconify-icon>
                            Go to Repository
                        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-8">
<div className="prose prose-sm prose-gray dark:prose-invert max-w-none markdown-body light">
<h2 className="text-gray-900 dark:text-white !mt-0">About this Project</h2>
<p>
                                    The <strong>Payment Gateway Core</strong> is a microservice designed to abstract the complexity of multiple payment providers into a single, unified internal API. This allows our frontend applications and other backend services to process payments without needing to know the specifics of the underlying provider (e.g., Stripe, PayPal, Adyen).
                                </p>
<h3>Key Architecture Decisions</h3>
<p>
                                    We utilize an event-driven architecture for processing payment results. When a webhook is received from a provider, it is pushed to a Kafka topic for asynchronous processing. This ensures high availability and resilience against provider downtime.
                                </p>
<ul>
<li><strong>Idempotency:</strong> All API write operations require an <code>Idempotency-Key</code> header.</li>
<li><strong>Security:</strong> All PCI-sensitive data is tokenized immediately upon entry. We do not store raw credit card numbers.</li>
<li><strong>Retries:</strong> Exponential backoff strategies are implemented for all external API calls.</li>
</ul>
<h3>Quick Start</h3>
<p>To run the service locally, ensure you have Docker running and execute the following:</p>
<pre><code>git clone git@github.com:adw-eng/payment-gateway-core.git
cd payment-gateway-core
cp .env.example .env
npm install
npm run dev:docker</code></pre>
<h3>Deployment Strategy</h3>
<p>
                                    Deployments are managed via GitHub Actions. Merges to <code>main</code> trigger a deployment to the Staging environment. A release tag triggers a production deployment with a canary rollout strategy (10% -&gt; 50% -&gt; 100%).
                                </p>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
<h3 className="text-sm font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
</div>
<div className="p-5 space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Language</span>
<div className="flex items-center gap-2">
<iconify-icon icon="logos:typescript-icon" width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-900 dark:text-white">TypeScript</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Framework</span>
<div className="flex items-center gap-2">
<iconify-icon icon="logos:nestjs" width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-900 dark:text-white">NestJS</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Database</span>
<div className="flex items-center gap-2">
<iconify-icon icon="logos:postgresql" width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-900 dark:text-white">PostgreSQL</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Messaging</span>
<div className="flex items-center gap-2">
<iconify-icon icon="logos:kafka-icon" width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-900 dark:text-white">Kafka</span>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 flex justify-between items-center">
<h3 className="text-sm font-semibold text-gray-900 dark:text-white">Ownership</h3>
<span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">Core Team</span>
</div>
<div className="p-5 space-y-6">
<div>
<p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-medium">Maintained By</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/20">
                                            FS
                                        </div>
<div>
<p className="text-sm font-medium text-gray-900 dark:text-white">Fintech Squad</p>
<a className="text-xs text-blue-500 hover:text-blue-600" href="#">@fintech-core</a>
</div>
</div>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800">
<p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-medium">Key Contacts</p>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full bg-gray-200" src="https://ui-avatars.com/api/?name=Alice+M&amp;background=random&amp;size=32"/>
<div>
<p className="text-sm font-medium text-gray-900 dark:text-white">Alice Moore</p>
<p className="text-xs text-gray-500">Product Manager</p>
</div>
</div>
<a className="text-gray-400 hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon></a>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full bg-gray-200" src="https://ui-avatars.com/api/?name=Bob+K&amp;background=random&amp;size=32"/>
<div>
<p className="text-sm font-medium text-gray-900 dark:text-white">Bob King</p>
<p className="text-xs text-gray-500">Lead Engineer</p>
</div>
</div>
<a className="text-gray-400 hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon></a>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center border border-red-100 dark:border-red-900/50">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900 dark:text-white">On Call</p>
<p className="text-xs text-gray-500">PagerDuty</p>
</div>
</div>
<a className="text-gray-400 hover:text-red-500 transition-colors" href="#"><iconify-icon icon="solar:bell-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
<h3 className="text-sm font-semibold text-gray-900 dark:text-white">Documentation</h3>
</div>
<div className="divide-y divide-gray-100 dark:divide-gray-800">
<a className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" href="#">
<div className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 w-8 h-8 rounded flex items-center justify-center">
<iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">Swagger API Docs</p>
<p className="text-xs text-gray-500">OpenAPI 3.0 Spec</p>
</div>
<iconify-icon className="text-gray-300 group-hover:text-blue-500" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" href="#">
<div className="text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 w-8 h-8 rounded flex items-center justify-center">
<iconify-icon icon="solar:rocket-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">Postman Collection</p>
<p className="text-xs text-gray-500">Integration Tests</p>
</div>
<iconify-icon className="text-gray-300 group-hover:text-blue-500" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" href="#">
<div className="text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 w-8 h-8 rounded flex items-center justify-center">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">Environment Variables</p>
<p className="text-xs text-gray-500">Config Reference</p>
</div>
<iconify-icon className="text-gray-300 group-hover:text-blue-500" icon="solar:lock-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" href="#">
<div className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 w-8 h-8 rounded flex items-center justify-center">
<iconify-icon icon="solar:figma-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">Design Diagrams</p>
<p className="text-xs text-gray-500">System Architecture</p>
</div>
<iconify-icon className="text-gray-300 group-hover:text-blue-500" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<footer className="max-w-7xl mx-auto mt-16 pb-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-between items-center text-xs text-gray-400">
<p>© 2024 ADW Engineering Platform</p>
<p>v2.4.0</p>
</footer>
</main>
</div>


    </>
  );
}
