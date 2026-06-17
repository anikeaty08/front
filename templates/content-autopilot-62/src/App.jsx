import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {

            const store = {
                token: 'bypass-session-token', 
                projects: [
                    { id: 1, name: 'Marketing Site', description: 'Main corporate website connected to CMS', status: 'active' },
                    { id: 2, name: 'Mobile App', description: 'iOS and Android e-commerce application', status: 'active' },
                    { id: 3, name: 'Internal Dashboard', description: 'Analytics and CRM portal for employees', status: 'active' }
                ],
                categories: [
                    { id: 'cms', name: 'CMS', icon: 'solar:file-text-linear' },
                    { id: 'ecommerce', name: 'Ecommerce', icon: 'solar:bag-3-linear' },
                    { id: 'analytics', name: 'Analytics', icon: 'solar:chart-2-linear' },
                    { id: 'marketing', name: 'Marketing', icon: 'solar:megaphone-linear' },
                    { id: 'dev', name: 'Development', icon: 'solar:code-linear' }
                ],
                assets: [
                    { id: 1, category: 'cms', name: 'Blog Template', desc: 'A clean, minimal blog template with markdown support.', icon: 'solar:document-text-linear', color: 'bg-blue-50 border-blue-100 text-blue-600' },
                    { id: 2, category: 'ecommerce', name: 'Shopify Store', desc: 'Connect your Shopify products and collections.', icon: 'solar:cart-large-linear', color: 'bg-green-50 border-green-100 text-green-600' },
                    { id: 3, category: 'analytics', name: 'Google Analytics 4', desc: 'Track page views and events automatically.', icon: 'solar:graph-up-linear', color: 'bg-yellow-50 border-yellow-100 text-yellow-600' },
                    { id: 4, category: 'marketing', name: 'Newsletter Form', desc: 'Capture leads with a customizable form.', icon: 'solar:letter-linear', color: 'bg-purple-50 border-purple-100 text-purple-600' },
                    { id: 5, category: 'cms', name: 'Documentation', desc: 'Structured documentation layout with sidebar.', icon: 'solar:book-bookmark-linear', color: 'bg-indigo-50 border-indigo-100 text-indigo-600' },
                    { id: 6, category: 'dev', name: 'API Gateway', desc: 'Manage API endpoints and keys centrally.', icon: 'solar:server-path-linear', color: 'bg-gray-100 border-gray-200 text-gray-700' },
                ]
            };

            const auth = {
                logout: () => {
                    window.location.reload(); 
                }
            };
            window.auth = auth;

            const router = {
                currentPath: null,
                params: {},

                navigate: (path) => {
                    try { window.history.pushState({}, '', path); } catch(e) {}
                    router.handleRoute(path);
                },

                handleRoute: (path) => {
                    const app = document.getElementById('app');
                    router.currentPath = path;

                    if (path === '/login' || path === '/register' || path === '/' || path.endsWith('index.html')) {
                        router.navigate('/dashboard/projects');
                        return;
                    }

                    const projectMatch = path.match(/\/dashboard\/project\/(\d+)/);
                    if (projectMatch) {
                        router.params.projectId = parseInt(projectMatch[1]);
                    } else {
                        router.params.projectId = null;
                    }

                    if (path.startsWith('/dashboard')) {
                        if (!document.getElementById('main-content')) {
                            const tpl = document.getElementById('tpl-dashboard');
                            if(tpl) app.innerHTML = tpl.innerHTML;
                        }
                        router.updateDashboard(path);
                    } else {
                        router.navigate('/dashboard/projects');
                    }
                },

                updateDashboard: (path) => {
                    const projectSelector = document.getElementById('header-project-selector');
                    const headerProjectName = document.getElementById('header-project-name');
                    const currentProject = store.projects.find(p => p.id === router.params.projectId);

                    if (projectSelector && headerProjectName) {
                        if (router.params.projectId && currentProject) {
                            projectSelector.classList.remove('hidden');
                            projectSelector.classList.add('flex');
                            headerProjectName.textContent = currentProject.name;
                            headerProjectName.onclick = () => router.navigate(`/dashboard/project/${currentProject.id}`);
                        } else {
                            projectSelector.classList.add('hidden');
                            projectSelector.classList.remove('flex');
                        }
                    }

                    router.renderSidebar(path);

                    const main = document.getElementById('main-content');
                    if (!main) return;
                    
                    main.innerHTML = ''; 

                    // Route Matching Logic
                    if (path === '/dashboard/projects') {
                        router.appendTemplateToMain('tpl-projects');
                        router.renderProjectList();
                    } else if (path === '/dashboard/new-project') {
                        router.appendTemplateToMain('tpl-new-project');
                        router.bindNewProject();
                    } else if (path === '/dashboard/team') {
                        router.appendTemplateToMain('tpl-team');
                    } else if (path === '/dashboard/integrations') {
                        router.appendTemplateToMain('tpl-integrations');
                    } else if (path === '/dashboard/usage') {
                        router.appendTemplateToMain('tpl-usage');
                    } else if (path === '/dashboard/settings') {
                        router.appendTemplateToMain('tpl-settings');
                    } else if (path.match(/\/dashboard\/project\/\d+$/)) {
                        router.appendTemplateToMain('tpl-project-overview');
                        const titleEl = document.getElementById('overview-project-name');
                        if(titleEl) titleEl.textContent = currentProject ? currentProject.name : 'Unknown';
                    } else if (path.match(/\/dashboard\/project\/\d+\/connected-apps/)) {
                        router.appendTemplateToMain('tpl-connected-apps');
                        const sub = document.getElementById('connected-apps-subtitle');
                        if(sub && currentProject) sub.textContent = `Manage active integrations for ${currentProject.name}.`;
                    } else if (path.match(/\/dashboard\/project\/\d+\/integration-assets/)) {
                        router.appendTemplateToMain('tpl-integration-assets');
                        const sub = document.getElementById('assets-subtitle');
                        if(sub && currentProject) sub.textContent = `Manage integration assets for ${currentProject.name}.`;
                        router.renderAssets();
                    } else {
                        router.appendTemplateToMain('tpl-coming-soon');
                        const title = path.split('/').pop().replace('-', ' ');
                        const csTitle = document.querySelector('#cs-title');
                        if(csTitle) csTitle.textContent = title.charAt(0).toUpperCase() + title.slice(1);
                    }
                },

                appendTemplateToMain: (tplId) => {
                    const main = document.getElementById('main-content');
                    const tpl = document.getElementById(tplId);
                    if (main && tpl) {
                        main.appendChild(tpl.content.cloneNode(true));
                    }
                },

                renderSidebar: (path) => {
                    const nav = document.getElementById('sidebar-nav');
                    if(!nav) return;
                    nav.innerHTML = '';

                    const isProjectContext = !!router.params.projectId;
                    const pid = router.params.projectId;

                    const createLink = (label, icon, href) => {
                        const isActive = path === href;
                        const a = document.createElement('a');
                        a.href = '#';
                        a.onclick = (e) => { e.preventDefault(); router.navigate(href); };
                        a.className = `nav-item flex items-center gap-3 px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors h-9 ${isActive ? 'active' : ''}`;
                        a.innerHTML = `
                            <iconify-icon icon="${icon}" class="shrink-0 transition-colors" width="20"></iconify-icon>
                            <span class="sidebar-text text-sm font-medium">${label}</span>
                        `;
                        return a;
                    };

                    if (isProjectContext) {
                        nav.appendChild(createLink('Overview', 'solar:home-smile-linear', `/dashboard/project/${pid}`));
                        nav.appendChild(createLink('Connected Apps', 'solar:plug-circle-linear', `/dashboard/project/${pid}/connected-apps`));
                        nav.appendChild(createLink('Integration Assets', 'solar:layers-linear', `/dashboard/project/${pid}/integration-assets`));
                        nav.appendChild(createLink('Back to Projects', 'solar:arrow-left-linear', '/dashboard/projects'));
                    } else {
                        nav.appendChild(createLink('Projects', 'solar:folder-with-files-linear', '/dashboard/projects'));
                        nav.appendChild(createLink('Team', 'solar:users-group-rounded-linear', '/dashboard/team'));
                        nav.appendChild(createLink('Integrations', 'solar:link-circle-linear', '/dashboard/integrations'));
                        nav.appendChild(createLink('Usage', 'solar:chart-square-linear', '/dashboard/usage'));
                        nav.appendChild(createLink('Settings', 'solar:settings-linear', '/dashboard/settings'));
                    }
                },

                renderProjectList: () => {
                    const grid = document.getElementById('project-grid');
                    if(!grid) return;
                    grid.innerHTML = '';
                    
                    if (store.projects.length === 0) {
                        const empty = document.getElementById('project-empty');
                        if(empty) empty.classList.remove('hidden');
                        return;
                    }

                    store.projects.forEach(p => {
                        const card = document.createElement('div');
                        card.className = 'group p-5 border border-gray-200 rounded-xl hover:shadow-md hover:border-gray-300 transition-all bg-white cursor-pointer relative';
                        card.onclick = (e) => {
                            if (!e.target.closest('.menu-btn')) router.navigate(`/dashboard/project/${p.id}`);
                        };
                        card.innerHTML = `
                            <div class="flex justify-between items-start mb-4">
                                <div class="w-10 h-10 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-600">
                                    <iconify-icon icon="solar:bolt-circle-linear" width="22"></iconify-icon>
                                </div>
                                <button class="menu-btn p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
                                </button>
                            </div>
                            <h3 class="font-semibold text-gray-900 tracking-tight text-base mb-1">${p.name}</h3>
                            <p class="text-sm text-gray-500 line-clamp-2">${p.description}</p>
                            <div class="mt-5 flex items-center justify-between">
                                <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-green-50 text-green-700 uppercase tracking-widest border border-green-200/60">Active</span>
                                <span class="text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors flex items-center gap-1">
                                    Open project <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
                                </span>
                            </div>
                        `;
                        grid.appendChild(card);
                    });
                },

                bindNewProject: () => {
                    const form = document.getElementById('new-project-form');
                    if(form) {
                        form.onsubmit = (e) => {
                            e.preventDefault();
                            const name = document.getElementById('np-name').value;
                            const desc = document.getElementById('np-desc').value;
                            
                            const newId = store.projects.length + 1;
                            store.projects.push({
                                id: newId,
                                name: name,
                                description: desc,
                                status: 'active'
                            });
                            
                            router.navigate('/dashboard/projects');
                        };
                    }
                },

                renderAssets: () => {
                    const catContainer = document.getElementById('assets-categories');
                    if(!catContainer) return;
                    catContainer.innerHTML = '';
                    
                    const createCatBtn = (id, name, icon) => {
                        const btn = document.createElement('button');
                        btn.className = 'px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-medium bg-white text-gray-600 hover:bg-gray-50 shadow-sm whitespace-nowrap flex items-center gap-1.5 transition-colors';
                        btn.innerHTML = `<iconify-icon icon="${icon}" class="text-gray-400"></iconify-icon> ${name}`;
                        btn.onclick = () => {
                            Array.from(catContainer.children).forEach(ch => {
                                ch.className = ch.className.replace('bg-gray-900 text-white', 'bg-white text-gray-600');
                                const i = ch.querySelector('iconify-icon');
                                if(i) i.classList.add('text-gray-400');
                            });
                            btn.className = btn.className.replace('bg-white text-gray-600', 'bg-gray-900 text-white');
                            const activeIcon = btn.querySelector('iconify-icon');
                            if(activeIcon) activeIcon.classList.remove('text-gray-400');
                            router.renderAssetGrid(id);
                        };
                        return btn;
                    };

                    const allBtn = createCatBtn('all', 'All', 'solar:layers-minimalistic-linear');
                    // set initial active state
                    allBtn.className = allBtn.className.replace('bg-white text-gray-600', 'bg-gray-900 text-white');
                    allBtn.querySelector('iconify-icon').classList.remove('text-gray-400');
                    catContainer.appendChild(allBtn);

                    store.categories.forEach(c => {
                        catContainer.appendChild(createCatBtn(c.id, c.name, c.icon));
                    });

                    router.renderAssetGrid('all');
                },

                renderAssetGrid: (category) => {
                    const grid = document.getElementById('assets-grid');
                    if(!grid) return;
                    grid.innerHTML = '';

                    const items = category === 'all' 
                        ? store.assets 
                        : store.assets.filter(a => a.category === category);

                    items.forEach(item => {
                        const el = document.createElement('div');
                        el.className = 'flex flex-col p-5 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all bg-white h-full group';
                        el.innerHTML = `
                            <div class="flex justify-between items-start mb-4">
                                <div class="w-10 h-10 rounded-lg border ${item.color} flex items-center justify-center">
                                    <iconify-icon icon="${item.icon}" width="20"></iconify-icon>
                                </div>
                                <button class="text-gray-300 hover:text-gray-600 transition-colors">
                                    <iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
                                </button>
                            </div>
                            <h4 class="text-sm font-semibold text-gray-900 mb-1 leading-tight tracking-tight">${item.name}</h4>
                            <p class="text-xs text-gray-500 line-clamp-2 mb-5 flex-1">${item.desc}</p>
                            <button class="w-full py-1.5 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-200 shadow-sm transition-colors flex items-center justify-center gap-1.5">
                                Install <iconify-icon icon="solar:download-square-linear" width="14"></iconify-icon>
                            </button>
                        `;
                        grid.appendChild(el);
                    });
                }
            };

            window.router = router;

            window.addEventListener('popstate', () => {
                router.handleRoute(window.location.pathname);
            });

            let initialPath = window.location.pathname;
            if (initialPath === '/' || initialPath.endsWith('index.html') || initialPath === '' || initialPath === '/login') {
                 initialPath = '/dashboard/projects';
            }
            
            router.navigate(initialPath);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="flex flex-col w-full h-full" id="app"></div>


<template id="tpl-dashboard">
<div className="flex h-full w-full bg-[#FAFAFA]">

<aside className="sidebar bg-white border-r border-gray-200 flex flex-col h-full z-20 shrink-0 shadow-sm relative">
<div className="h-14 flex items-center px-4 border-b border-gray-100">
<div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center shrink-0 shadow-sm cursor-pointer" onclick="window.router.navigate('/dashboard/projects')">
<iconify-icon className="text-white" icon="solar:box-minimalistic-linear" width="22"></iconify-icon>
</div>
<span className="sidebar-text font-semibold ml-3 tracking-tight text-gray-900 text-base cursor-pointer" onclick="window.router.navigate('/dashboard/projects')">Autopilot</span>
</div>
<div className="flex-1 py-4 flex flex-col gap-1 px-3" id="sidebar-nav">

</div>
<div className="p-3 border-t border-gray-100">
<a className="flex items-center gap-3 px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors h-9" href="#" onclick="event.preventDefault(); window.auth.logout();">
<iconify-icon className="shrink-0" icon="solar:logout-2-linear" width="20"></iconify-icon>
<span className="sidebar-text font-medium">Log out</span>
</a>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-2 text-sm">
<span className="text-gray-500 hover:text-gray-900 cursor-pointer font-medium transition-colors" onclick="window.router.navigate('/dashboard/projects')">Dashboard</span>
<div className="hidden items-center gap-2" id="header-project-selector">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200 transition-colors" id="header-project-name">Project</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 border border-gray-200 shadow-sm"></div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 md:p-10 relative" id="main-content"></main>
</div>
</div>
</template>

<template id="tpl-projects">
<div className="max-w-6xl mx-auto w-full fade-in">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Projects</h1>
<p className="text-sm text-gray-500 mt-1">Manage and monitor your connected applications.</p>
</div>
<button className="h-9 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md shadow-sm transition-all flex items-center gap-2" onclick="window.router.navigate('/dashboard/new-project')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                    New Project
                </button>
</div>
<div className="hidden text-center py-16 border border-dashed border-gray-300 rounded-xl bg-gray-50/50" id="project-empty">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-4 text-gray-400">
<iconify-icon icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-900">No projects yet</h3>
<p className="text-sm text-gray-500 mt-1 mb-4">Get started by creating a new project to connect your assets.</p>
<button className="text-sm font-medium text-gray-900 hover:underline" onclick="window.router.navigate('/dashboard/new-project')">Create project →</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" id="project-grid"></div>
</div>
</template>

<template id="tpl-new-project">
<div className="max-w-lg mx-auto w-full pt-6 fade-in">
<button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors font-medium w-fit" onclick="window.router.navigate('/dashboard/projects')">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> Back to projects
            </button>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 mb-5">
<iconify-icon icon="solar:folder-add-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight mb-1">Create New Project</h2>
<p className="text-sm text-gray-500 mb-6">Enter the basic details for your new workspace.</p>
<form className="space-y-5" id="new-project-form">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="np-name">Project Name</label>
<input className="input-linear w-full h-9 px-3 border border-gray-300 rounded-md text-sm placeholder-gray-400 bg-white transition-all" id="np-name" placeholder="e.g. Marketing Site" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="np-desc">Description <span className="text-gray-400 font-normal">(Optional)</span></label>
<textarea className="input-linear w-full p-3 border border-gray-300 rounded-md text-sm placeholder-gray-400 bg-white transition-all resize-none" id="np-desc" placeholder="Brief description of this project..." rows="3"></textarea>
</div>
<div className="pt-4 flex gap-3 justify-end border-t border-gray-100">
<button className="h-9 px-4 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium rounded-md shadow-sm transition-colors" onclick="window.router.navigate('/dashboard/projects')" type="button">Cancel</button>
<button className="h-9 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md shadow-sm transition-colors" type="submit">Create Project</button>
</div>
</form>
</div>
</div>
</template>

<template id="tpl-project-overview">
<div className="max-w-5xl mx-auto w-full fade-in">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-6" id="overview-project-name">Project Overview</h1>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
<div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
<div className="text-gray-500 mb-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2"><iconify-icon icon="solar:link-linear" width="16"></iconify-icon> Connected Apps</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900">4</div>
</div>
<div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
<div className="text-gray-500 mb-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2"><iconify-icon icon="solar:server-square-linear" width="16"></iconify-icon> API Requests</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900">12.4k</div>
</div>
<div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
<div className="text-gray-500 mb-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon> System Status</div>
<div className="text-lg font-semibold tracking-tight text-green-600 mt-1 flex items-center gap-2">
<span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span></span>
                        Operational
                    </div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
<h2 className="text-base font-semibold text-gray-900 tracking-tight">Recent Activity</h2>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900">View all</button>
</div>
<div className="p-6 space-y-5">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0"><iconify-icon icon="solar:plug-circle-linear" width="18"></iconify-icon></div>
<div><p className="text-sm font-medium text-gray-900">Connected Shopify Integration</p><p className="text-xs text-gray-500 mt-0.5">2 hours ago</p></div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0"><iconify-icon icon="solar:refresh-circle-linear" width="18"></iconify-icon></div>
<div><p className="text-sm font-medium text-gray-900">Synced 142 products successfully</p><p className="text-xs text-gray-500 mt-0.5">5 hours ago</p></div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 shrink-0"><iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon></div>
<div><p className="text-sm font-medium text-gray-900">Team member added</p><p className="text-xs text-gray-500 mt-0.5">1 day ago</p></div>
</div>
</div>
</div>
</div>
</template>

<template id="tpl-connected-apps">
<div className="max-w-6xl mx-auto w-full fade-in">
<div className="mb-8 flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Connected Apps</h1>
<p className="text-sm text-gray-500 mt-1" id="connected-apps-subtitle">Manage active integrations for this project.</p>
</div>
<button className="h-9 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-md shadow-sm transition-all flex items-center gap-2">
<iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon> New Connection
                </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider font-semibold">
<th className="px-6 py-3">App Name</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Last Sync</th>
<th className="px-6 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded border border-gray-100 flex items-center justify-center bg-gray-50 text-gray-700"><iconify-icon icon="solar:cart-large-linear" width="18"></iconify-icon></div>
<span className="font-medium text-gray-900">Shopify Storefront</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                </span>
</td>
<td className="px-6 py-4 text-gray-500">10 mins ago</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 font-medium transition-colors">Manage</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded border border-gray-100 flex items-center justify-center bg-gray-50 text-gray-700"><iconify-icon icon="solar:database-linear" width="18"></iconify-icon></div>
<span className="font-medium text-gray-900">PostgreSQL DB</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                </span>
</td>
<td className="px-6 py-4 text-gray-500">1 hour ago</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 font-medium transition-colors">Manage</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</template>

<template id="tpl-integration-assets">
<div className="max-w-6xl mx-auto w-full fade-in">
<div className="mb-8">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Integration Assets</h1>
<p className="text-sm text-gray-500 mt-1" id="assets-subtitle">Manage and connect available assets.</p>
</div>
<div className="flex gap-2 mb-6 overflow-x-auto hide-scroll pb-2" id="assets-categories">

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="assets-grid"></div>
</div>
</template>

<template id="tpl-team">
<div className="max-w-5xl mx-auto w-full fade-in">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Team</h1>
<p className="text-sm text-gray-500 mt-1">Manage who has access to your workspace.</p>
</div>
<button className="h-9 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md shadow-sm transition-all flex items-center gap-2">
<iconify-icon icon="solar:user-plus-linear" width="18"></iconify-icon> Invite Member
                </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider font-semibold">
<th className="px-6 py-3">Member</th>
<th className="px-6 py-3">Role</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-200"></div>
<div>
<div className="font-medium text-gray-900">Alex Carter</div>
<div className="text-xs text-gray-500">alex@example.com</div>
</div>
</td>
<td className="px-6 py-4 text-gray-600 font-medium">Owner</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-1 rounded-md text-[10px] font-semibold bg-gray-100 text-gray-600 uppercase tracking-widest border border-gray-200">Active</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 border border-indigo-200"></div>
<div>
<div className="font-medium text-gray-900">Sarah Jenkins</div>
<div className="text-xs text-gray-500">sarah@example.com</div>
</div>
</td>
<td className="px-6 py-4 text-gray-600">Developer</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-1 rounded-md text-[10px] font-semibold bg-gray-100 text-gray-600 uppercase tracking-widest border border-gray-200">Active</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</template>

<template id="tpl-integrations">
<div className="max-w-6xl mx-auto w-full fade-in">
<div className="mb-8">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Global Integrations</h1>
<p className="text-sm text-gray-500 mt-1">Connect your workspace with third-party tools and services.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start justify-between shadow-sm">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#E5E7EB] flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-900" icon="solar:figma-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-0.5">Figma</h3>
<p className="text-xs text-gray-500 mb-3 line-clamp-2">Sync design assets and tokens directly to your projects.</p>
<span className="text-xs font-medium text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded-md">Connected</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start justify-between shadow-sm">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#E5E7EB] flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-900" icon="solar:square-academic-cap-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-0.5">Slack</h3>
<p className="text-xs text-gray-500 mb-3 line-clamp-2">Receive notifications and alerts in your team channels.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start justify-between shadow-sm">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#E5E7EB] flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-900" icon="solar:folder-with-files-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-0.5">GitHub</h3>
<p className="text-xs text-gray-500 mb-3 line-clamp-2">Link repositories and automate deployment workflows.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>
</div>
</div>
</template>

<template id="tpl-usage">
<div className="max-w-4xl mx-auto w-full fade-in">
<div className="mb-8">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Usage &amp; Billing</h1>
<p className="text-sm text-gray-500 mt-1">Overview of your current billing cycle usage.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="font-semibold text-gray-900 text-base">API Requests</h3>
<p className="text-sm text-gray-500">Resets in 12 days</p>
</div>
<div className="text-right">
<span className="text-xl font-semibold text-gray-900 tracking-tight">850k</span>
<span className="text-sm text-gray-500">/ 1M</span>
</div>
</div>
<div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-gray-900 h-2.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="font-semibold text-gray-900 text-base">Bandwidth</h3>
</div>
<div className="text-right">
<span className="text-lg font-semibold text-gray-900 tracking-tight">45GB</span>
<span className="text-sm text-gray-500">/ 100GB</span>
</div>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
<div className="bg-gray-400 h-2 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="font-semibold text-gray-900 text-base">Storage</h3>
</div>
<div className="text-right">
<span className="text-lg font-semibold text-gray-900 tracking-tight">1.2GB</span>
<span className="text-sm text-gray-500">/ 10GB</span>
</div>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
<div className="bg-gray-400 h-2 rounded-full" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>
</template>

<template id="tpl-settings">
<div className="max-w-3xl mx-auto w-full fade-in">
<div className="mb-8 border-b border-gray-200 pb-5">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Workspace Settings</h1>
<p className="text-sm text-gray-500 mt-1">Manage your workspace preferences and configurations.</p>
</div>
<form className="space-y-8">

<div>
<h3 className="text-base font-semibold text-gray-900 mb-4">General Details</h3>
<div className="space-y-5 bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Workspace Name</label>
<input className="input-linear w-full h-9 px-3 border border-gray-300 rounded-md text-sm bg-white transition-all max-w-md" type="text" value="Acme Corp"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Support Email</label>
<input className="input-linear w-full h-9 px-3 border border-gray-300 rounded-md text-sm bg-white transition-all max-w-md" type="email" value="hello@acme.com"/>
</div>
</div>
</div>

<div>
<h3 className="text-base font-semibold text-gray-900 mb-4">Preferences</h3>
<div className="space-y-5 bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-gray-900">Beta Features</h4>
<p className="text-xs text-gray-500 mt-0.5">Get early access to new experimental tools.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>
<div className="flex items-center justify-between pt-5 border-t border-gray-100">
<div>
<h4 className="text-sm font-medium text-gray-900">Weekly Digest</h4>
<p className="text-xs text-gray-500 mt-0.5">Receive a weekly summary email of workspace activity.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>
</div>
</div>

<div className="flex justify-end pt-2">
<button className="h-9 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md shadow-sm transition-colors" type="button">Save Changes</button>
</div>
</form>
</div>
</template>

<template id="tpl-coming-soon">
<div className="h-full flex flex-col items-center justify-center text-center max-w-sm mx-auto fade-in pb-20">
<div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 mb-6 shadow-sm">
<iconify-icon icon="solar:hammer-linear" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight mb-2" id="cs-title">Coming Soon</h2>
<p className="text-sm text-gray-500">This module is currently under active development. Please check back later.</p>
</div>
</template>



    </>
  );
}
