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
      
                                <div class="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                    <div class="p-6">
                                        <h3 class="text-base font-semibold text-slate-900">{title}</h3>
                                        <p class="mt-2 text-sm text-slate-500 line-clamp-2">{description}</p>
                                    </div>
                                    <div class="mt-auto border-t border-slate-200 bg-slate-50 p-4">
                                        <a href="#dataset-details" class="text-sm font-medium text-blue-600 hover:text-blue-500">View Details &rarr;</a>
                                    </div>
                                </div>
                            


        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons({
                attrs: {
                    'stroke-width': 1.5
                }
            });

            const views = document.querySelectorAll('.view-section');
            const navLinks = document.querySelectorAll('.nav-link');
            const navLoggedIn = document.getElementById('nav-logged-in');
            const navLoggedOut = document.getElementById('nav-logged-out');
            const loginButton = document.getElementById('login-button');
            const logoutButton = document.getElementById('logout-button');

            let isLoggedIn = false;

            const updateNav = () => {
                if (isLoggedIn) {
                    navLoggedIn.style.display = 'block';
                    navLoggedOut.style.display = 'none';
                    logoutButton.style.display = 'block';
                } else {
                    navLoggedIn.style.display = 'none';
                    navLoggedOut.style.display = 'block';
                    logoutButton.style.display = 'none';
                }
            };
            
            const router = () => {
                const hash = window.location.hash.substring(1) || (isLoggedIn ? 'home' : 'login');
                views.forEach(view => {
                    if (view.id === `view-${hash}`) {
                        view.classList.add('active');
                    } else {
                        view.classList.remove('active');
                    }
                });

                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${hash}`) {
                        link.classList.add('bg-slate-100', 'text-slate-900');
                    } else {
                        link.classList.remove('bg-slate-100', 'text-slate-900');
                    }
                });
                
                // Re-render icons for new view
                lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            };

            loginButton.addEventListener('click', (e) => {
                e.preventDefault();
                isLoggedIn = true;
                updateNav();
                window.location.hash = '#home';
            });

            logoutButton.addEventListener('click', () => {
                isLoggedIn = false;
                updateNav();
                window.location.hash = '#login';
            });
            
            // Dummy Data Generation
            const featuredDatasets = [
                { title: 'US Healthcare Costs', description: 'Analysis of healthcare spending and insurance coverage across states.' },
                { title: 'Global Stock Market Index', description: 'Daily historical data for major global stock market indices from 2000-2023.' },
                { title: 'University Admission Statistics', description: 'Admission rates, SAT/ACT scores, and demographics for top US universities.' },
                { title: 'Global Crop Yields', description: 'Annual data on major crop yields by country, including wheat, rice, and maize.' },
                { title: 'Clinical Trial Results', description: 'Anonymized results from Phase III clinical trials for various treatments.' },
                { title: 'Corporate Financial Statements', description: 'Quarterly financial reports for Fortune 500 companies over five years.' },
                { title: 'Student Loan Debt Analysis', description: 'A dataset exploring the trends in student loan debt in the United States.' },
                { title: 'Organic Farming Impact', description: 'Comparative study of soil health and biodiversity in organic vs. conventional farms.' },
            ];

            const myDatasets = [
                { name: 'Patient Readmission Rates', category: 'Health', status: 'Public' },
                { name: 'E-commerce Customer Churn', category: 'Finance', status: 'Private' },
                { name: 'Online Course Engagement', category: 'Education', status: 'Public' },
                { name: 'Soil Quality Metrics', category: 'Agriculture', status: 'Under Review' },
                { name: 'Credit Card Fraud Detection', category: 'Finance', status: 'Public' },
                { name: 'Mental Health Survey 2023', category: 'Health', status: 'Public' },
                { name: 'K-12 Standardized Test Scores', category: 'Education', status: 'Private' },
                { name: 'Fertilizer Impact Study', category: 'Agriculture', status: 'Public' },
                { name: 'Hospital Bed Availability', category: 'Health', status: 'Public' },
                { name: 'Cryptocurrency Price History', category: 'Finance', status: 'Public' },
                { name: 'Graduation Rates by Major', category: 'Education', status: 'Under Review' },
                { name: 'Pesticide Usage Data', category: 'Agriculture', status: 'Private' },
            ];

            const accessControlRequests = [
                { dataset: 'Patient Readmission Rates', user: 'researcher_anna', status: 'Approved' },
                { dataset: 'E-commerce Customer Churn', user: 'analyst_bob', status: 'Pending' },
                { dataset: 'Soil Quality Metrics', user: 'agri_corp', status: 'Denied' },
                { dataset: 'Credit Card Fraud Detection', user: 'sec_investigator', status: 'Approved' },
                { dataset: 'K-12 Standardized Test Scores', user: 'edu_policy_maker', status: 'Pending' },
                { dataset: 'Hospital Bed Availability', user: 'city_planner_dave', status: 'Approved' },
                { dataset: 'Pesticide Usage Data', user: 'enviro_group', status: 'Pending' },
                { dataset: 'Mental Health Survey 2023', user: 'sociologist_eve', status: 'Denied' },
                { dataset: 'Cryptocurrency Price History', user: 'trader_frank', status: 'Approved' },
                { dataset: 'Graduation Rates by Major', user: 'univ_admin_grace', status: 'Pending' },
            ];
            
             const requestsData = [
                { dataset: 'Clinical Trial Results', requestedBy: 'user_x', status: 'Pending' },
                { dataset: 'Corporate Financial Statements', requestedBy: 'analyst_y', status: 'Approved' },
                { dataset: 'Global Stock Market Index', requestedBy: 'hedge_fund_z', status: 'Denied' },
                ...accessControlRequests.slice(3, 12).map(r => ({...r, requestedBy: r.user}))
            ];

            // Render Functions
            const renderFeaturedDatasets = () => {
                const grid = document.getElementById('featured-datasets-grid');
                const template = document.getElementById('dataset-card-template').innerHTML;
                grid.innerHTML = featuredDatasets.map(d => 
                    template.replace('{title}', d.title).replace('{description}', d.description)
                ).join('');
            };

            const getStatusBadge = (status) => {
                const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
                switch (status) {
                    case 'Public':
                    case 'Approved':
                        return `<span class="${baseClasses} bg-green-100 text-green-800">${status}</span>`;
                    case 'Private':
                    case 'Denied':
                        return `<span class="${baseClasses} bg-red-100 text-red-800">${status}</span>`;
                    case 'Under Review':
                    case 'Pending':
                        return `<span class="${baseClasses} bg-yellow-100 text-yellow-800">${status}</span>`;
                    default:
                        return `<span class="${baseClasses} bg-slate-100 text-slate-800">${status}</span>`;
                }
            };

            const renderMyDatasets = () => {
                const tbody = document.getElementById('my-datasets-table-body');
                tbody.innerHTML = myDatasets.map(d => `
                    <tr>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">${d.name}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">${d.category}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">${getStatusBadge(d.status)}</td>
                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" class="text-blue-600 hover:text-blue-900">Edit<span class="sr-only">, ${d.name}</span></a>
                        </td>
                    </tr>
                `).join('');
            };

            const renderAccessControl = () => {
                const tbody = document.getElementById('access-control-table-body');
                tbody.innerHTML = accessControlRequests.map(r => `
                    <tr>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">${r.dataset}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">${r.user}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">${getStatusBadge(r.status)}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-center space-x-2">
                             ${r.status === 'Pending' ? `
                                <button class="text-green-600 hover:text-green-900">Approve</button>
                                <button class="text-red-600 hover:text-red-900">Deny</button>
                             ` : `<button class="text-slate-500 hover:text-slate-700">Remove</button>`}
                        </td>
                    </tr>
                `).join('');
            };
            
            const renderRequests = () => {
                const tbody = document.getElementById('requests-table-body');
                tbody.innerHTML = requestsData.map(r => `
                    <tr>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">${r.dataset}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">${r.requestedBy}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">${getStatusBadge(r.status)}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-center space-x-2">
                             ${r.status === 'Pending' ? `
                                <button class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-green-700 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-green-50">Approve</button>
                                <button class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-red-700 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50">Deny</button>
                             ` : `<span class="text-sm text-slate-400">-</span>`}
                        </td>
                    </tr>
                `).join('');
            };

            // Initial setup
            updateNav();
            router();
            renderFeaturedDatasets();
            renderMyDatasets();
            renderAccessControl();
            renderRequests();

            window.addEventListener('hashchange', router);
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
      
<div className="min-h-full flex flex-col" id="app-container">

<header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative flex h-16 items-center justify-between">
<div className="flex flex-1 items-center justify-start">
<a className="flex flex-shrink-0 items-center gap-2" href="#home">
<div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="database"></i>
</div>
<span className="font-semibold text-lg text-slate-900 tracking-tight">Dataset Explorer</span>
</a>
</div>

<div className="hidden sm:ml-6 sm:block" id="nav-logged-out">
<div className="flex space-x-4">
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#home">Home</a>
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#">About</a>
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#">Contact</a>
</div>
</div>

<div className="hidden sm:ml-6 sm:block" id="nav-logged-in">
<div className="flex space-x-4">
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#home">Home</a>
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#home">Datasets</a>
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#upload">Upload</a>
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#my-datasets">My Datasets</a>
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#access-control">Access Control</a>
<a className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="#requests">Requests</a>
</div>
</div>
<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
<button className="hidden ml-4 flex-shrink-0 rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50" id="logout-button">Logout</button>
</div>
</div>
</nav>
</header>
<main className="flex-grow">

<section className="view-section" id="view-login">
<div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<div className="w-full max-w-md space-y-8">
<div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm animate-fade-in">
<div className="text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Welcome Back</h2>
<p className="mt-2 text-sm text-slate-500">Sign in to continue to Dataset Explorer.</p>
</div>
<form action="#" className="mt-8 space-y-6" method="POST">
<div className="space-y-4 rounded-md shadow-sm">
<div>
<label className="sr-only" htmlFor="email-address">Email address</label>
<input autocomplete="email" className="relative block w-full appearance-none rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" id="email-address" name="email" placeholder="Email address" required type="email" />
</div>
<div>
<label className="sr-only" htmlFor="password">Password</label>
<input autocomplete="current-password" className="relative block w-full appearance-none rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" id="password" name="password" placeholder="Password" required type="password" />
</div>
</div>
<div>
<button className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2.5 px-4 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" id="login-button" type="submit">
                                        Login
                                    </button>
</div>
</form>
<p className="mt-6 text-center text-sm text-slate-500">
                                Don’t have an account?
                                <a className="font-medium text-blue-600 hover:text-blue-500" href="#">Sign up</a>
</p>
</div>
</div>
</div>
</section>

<section className="view-section" id="view-home">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

<div className="text-center animate-fade-in">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">Discover & Share Datasets</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Explore categorized datasets easily</p>
</div>

<div className="mt-10 max-w-3xl mx-auto animate-slide-in-up opacity-0 stagger-1">
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
<i className="h-5 w-5 text-slate-400" data-lucide="search"></i>
</div>
<input className="block w-full rounded-lg border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500" placeholder="Search for datasets..." type="search" />
</div>
</div>

<div className="mt-16 animate-slide-in-up opacity-0 stagger-2">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:ring-1 hover:ring-blue-500">
<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<i className="h-6 w-6" data-lucide="heart-pulse"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">Health</h3>
<p className="text-sm text-slate-500">Medical records, trials</p>
</div>
</div>
<div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:ring-1 hover:ring-blue-500">
<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
<i className="h-6 w-6" data-lucide="landmark"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">Finance</h3>
<p className="text-sm text-slate-500">Market data, reports</p>
</div>
</div>
<div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:ring-1 hover:ring-blue-500">
<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
<i className="h-6 w-6" data-lucide="book-open"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">Education</h3>
<p className="text-sm text-slate-500">Student performance</p>
</div>
</div>
<div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:ring-1 hover:ring-blue-500">
<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
<i className="h-6 w-6" data-lucide="sprout"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">Agriculture</h3>
<p className="text-sm text-slate-500">Crop yields, soil data</p>
</div>
</div>
</div>
</div>

<div className="mt-16 animate-slide-in-up opacity-0 stagger-3">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Featured Datasets</h2>
<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">


<div className="contents" id="featured-datasets-grid"></div>
</div>
</div>
</div>
</section>

<section className="view-section" id="view-upload">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-fade-in">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Upload New Dataset</h1>
<p className="mt-2 text-slate-500">Fill in the details below to add your dataset to the explorer.</p>
</div>
<div className="mt-8 bg-white border border-slate-200 rounded-xl shadow-sm animate-slide-in-up opacity-0 stagger-1">
<form className="p-8 space-y-8">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="dataset-name">Dataset Name</label>
<div className="mt-1">
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" id="dataset-name" type="text" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="dataset-description">Description</label>
<div className="mt-1">
<textarea className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" id="dataset-description" rows="4"></textarea>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="dataset-category">Category</label>
<select className="mt-1 block w-full rounded-md border-slate-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" id="dataset-category">
<option>Health</option>
<option>Finance</option>
<option>Education</option>
<option>Agriculture</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700">File upload</label>
<div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-900/25 px-6 py-10">
<div className="text-center">
<i className="mx-auto h-12 w-12 text-slate-300" data-lucide="file-up"></i>
<div className="mt-4 flex text-sm leading-6 text-slate-600">
<label className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500" htmlFor="file-upload">
<span>Choose File</span>
<input className="sr-only" id="file-upload" name="file-upload" type="file" />
</label>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs leading-5 text-slate-600">CSV, JSON, PARQUET up to 500MB</p>
</div>
</div>
</div>
<div className="relative flex items-start">
<div className="flex h-6 items-center">
<input className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" id="encrypted-checkbox" type="checkbox" />
</div>
<div className="ml-3 text-sm leading-6">
<label className="font-medium text-slate-900" htmlFor="encrypted-checkbox">Mark as Encrypted</label>
</div>
</div>
<div className="border-t border-slate-200 pt-6 flex justify-end">
<button className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" type="submit">Submit Upload</button>
</div>
</form>
</div>
</div>
</section>

<section className="view-section" id="view-my-datasets">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-fade-in">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">My Uploaded Datasets</h1>
<p className="mt-2 text-slate-500">Manage your contributions to the platform.</p>
</div>
<div className="mt-8 flow-root animate-slide-in-up opacity-0 stagger-1">
<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
<table className="min-w-full divide-y divide-slate-300">
<thead className="bg-slate-50">
<tr>
<th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6" scope="col">Dataset Name</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900" scope="col">Category</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900" scope="col">Status</th>
<th className="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col"><span className="sr-only">Actions</span></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white" id="my-datasets-table-body">

</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="view-access-control">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-fade-in">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Manage Access Permissions</h1>
<p className="mt-2 text-slate-500">Review and manage access requests for your datasets.</p>
</div>
<div className="mt-8 flow-root animate-slide-in-up opacity-0 stagger-1">
<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
<table className="min-w-full divide-y divide-slate-300">
<thead className="bg-slate-50">
<tr>
<th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6" scope="col">Dataset</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900" scope="col">User</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900" scope="col">Status</th>
<th className="px-3 py-3.5 text-center text-sm font-semibold text-slate-900" scope="col">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white" id="access-control-table-body">

</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="view-requests">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-fade-in">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Access Requests</h1>
<p className="mt-2 text-slate-500">Approve or deny requests for your datasets.</p>
</div>
<div className="mt-8 flow-root animate-slide-in-up opacity-0 stagger-1">
<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
<table className="min-w-full divide-y divide-slate-300">
<thead className="bg-slate-50">
<tr>
<th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6" scope="col">Dataset</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900" scope="col">Requested By</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900" scope="col">Status</th>
<th className="px-3 py-3.5 text-center text-sm font-semibold text-slate-900" scope="col">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white" id="requests-table-body">

</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="view-dataset-details">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-fade-in">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Dataset Details</h1>
</div>
<div className="mt-8 bg-white border border-slate-200 rounded-xl shadow-sm animate-slide-in-up opacity-0 stagger-1">
<div className="p-8 space-y-6">
<div className="border-b border-slate-200 pb-6">
<h2 className="text-xl font-semibold text-slate-900">Patient Health Metrics 2023</h2>
<p className="mt-1 text-sm text-slate-500">Anonymized patient data including vital signs and lab results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
<div>
<dt className="font-medium text-slate-900">Category</dt>
<dd className="mt-1 text-slate-600">Health</dd>
</div>
<div>
<dt className="font-medium text-slate-900">Uploaded By</dt>
<dd className="mt-1 text-slate-600">User123</dd>
</div>
<div>
<dt className="font-medium text-slate-900">File Size</dt>
<dd className="mt-1 text-slate-600">128 MB</dd>
</div>
<div>
<dt className="font-medium text-slate-900">File Type</dt>
<dd className="mt-1 text-slate-600">CSV</dd>
</div>
</div>
<div className="border-t border-slate-200 pt-6">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-blue-600 py-2.5 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" type="button">
<i className="h-5 w-5" data-lucide="download-cloud"></i>
                                    Download Dataset
                                </button>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
