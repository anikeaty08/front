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
      
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#2563eb',
            secondary: '#334155',
            success: '#10b981',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#3b82f6'
          }
        }
      }
    }
  
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
      

<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center py-6">
<div className="flex items-center">
<svg className="h-10 w-10 text-primary" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M9 12L11 14L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h1 className="ml-3 text-2xl font-bold text-gray-900">AuditPro</h1>
</div>
<div className="flex items-center space-x-4">
<span className="text-sm text-gray-600">Report generated: April 15, 2024</span>
<button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
<svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Export PDF
          </button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="bg-white rounded-lg shadow overflow-hidden mb-8">
<div className="px-6 py-8 border-b border-gray-200 bg-primary/5">
<div className="flex justify-between items-start">
<div>
<h2 className="text-3xl font-bold text-gray-900">Website Security Audit Report</h2>
<p className="mt-2 text-xl text-gray-600">TechCorp International</p>
<div className="mt-4 flex items-center">
<span className="px-3 py-1 text-sm font-medium rounded-full bg-success/10 text-success">Completed</span>
<span className="ml-4 text-sm text-gray-500">Audit ID: AUD-2024-0415</span>
</div>
</div>
<div className="text-right">
<div className="text-sm text-gray-500">Overall Score</div>
<div className="mt-1 flex items-center justify-end">
<span className="text-5xl font-bold text-success">87</span>
<span className="ml-1 text-lg text-gray-600">/100</span>
</div>
<div className="mt-2 text-sm text-gray-500">Previous: 72/100</div>
</div>
</div>
</div>
<div className="px-6 py-4 bg-white border-b border-gray-200">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-2 text-sm text-gray-500">Audit Period:</span>
<span className="ml-1 text-sm font-medium text-gray-900">Apr 1 - Apr 15, 2024</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-2 text-sm text-gray-500">Auditor:</span>
<span className="ml-1 text-sm font-medium text-gray-900">Sarah Johnson</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-2 text-sm text-gray-500">Domain:</span>
<span className="ml-1 text-sm font-medium text-gray-900">techcorp.example.com</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-2 text-sm text-gray-500">Report Type:</span>
<span className="ml-1 text-sm font-medium text-gray-900">Comprehensive</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden mb-8">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Executive Summary</h3>
</div>
<div className="px-6 py-5 bg-white">
<p className="text-gray-700 leading-relaxed">
          This security audit of TechCorp's web application reveals a strong overall security posture with an improved score of 87/100 (up from 72). The system demonstrates robust authentication mechanisms, proper data encryption, and well-configured infrastructure. Key improvements were made in patching vulnerabilities, enhancing access controls, and strengthening the security headers implementation.
        </p>
<p className="mt-4 text-gray-700 leading-relaxed">
          While the overall security is strong, we identified three critical vulnerabilities that require immediate attention, primarily related to outdated dependencies with known exploits, missing input validation on the payment processing form, and insecure file upload functionality. Additionally, eight medium and twelve low-severity findings were documented that should be addressed in the coming sprint cycles.
        </p>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden mb-8">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Score Breakdown</h3>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div>
<h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Score by Category</h4>
<div className="space-y-4">
<div>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center">
<span className="w-3 h-3 bg-success rounded-full mr-2"></span>
<span className="text-sm font-medium text-gray-700">Authentication &amp; Authorization</span>
</div>
<span className="text-sm font-medium text-gray-900">92/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-success h-2 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center">
<span className="w-3 h-3 bg-success rounded-full mr-2"></span>
<span className="text-sm font-medium text-gray-700">Data Encryption</span>
</div>
<span className="text-sm font-medium text-gray-900">95/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-success h-2 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center">
<span className="w-3 h-3 bg-info rounded-full mr-2"></span>
<span className="text-sm font-medium text-gray-700">Network Security</span>
</div>
<span className="text-sm font-medium text-gray-900">88/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-info h-2 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center">
<span className="w-3 h-3 bg-warning rounded-full mr-2"></span>
<span className="text-sm font-medium text-gray-700">Input Validation</span>
</div>
<span className="text-sm font-medium text-gray-900">76/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-warning h-2 rounded-full" style={{width: '76%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center">
<span className="w-3 h-3 bg-warning rounded-full mr-2"></span>
<span className="text-sm font-medium text-gray-700">Dependency Management</span>
</div>
<span className="text-sm font-medium text-gray-900">72/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-warning h-2 rounded-full" style={{width: '72%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<div className="flex items-center">
<span className="w-3 h-3 bg-danger rounded-full mr-2"></span>
<span className="text-sm font-medium text-gray-700">File Upload Security</span>
</div>
<span className="text-sm font-medium text-gray-900">61/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-danger h-2 rounded-full" style={{width: '61%'}}></div>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Issues by Severity</h4>
<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
<div className="px-4 py-5 sm:px-6 flex items-center justify-between border-b border-gray-200">
<h3 className="text-sm font-medium text-gray-900">Critical Issues</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger/10 text-danger">
                  3 Issues
                </span>
</div>
<ul className="divide-y divide-gray-200">
<li className="px-4 py-3">
<div className="flex items-start">
<svg className="h-5 w-5 text-danger mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">Outdated dependencies with known exploits (CVE-2023-45678)</p>
<p className="mt-1 text-xs text-gray-500">Location: package.json, server/requirements.txt</p>
</div>
</div>
</li>
<li className="px-4 py-3">
<div className="flex items-start">
<svg className="h-5 w-5 text-danger mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">Missing input validation on payment processing form</p>
<p className="mt-1 text-xs text-gray-500">Location: /checkout/payment.js, lines 127-156</p>
</div>
</div>
</li>
<li className="px-4 py-3">
<div className="flex items-start">
<svg className="h-5 w-5 text-danger mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">Insecure file upload functionality</p>
<p className="mt-1 text-xs text-gray-500">Location: /admin/file-manager.php</p>
</div>
</div>
</li>
</ul>
<div className="px-4 py-3 bg-gray-50 text-right text-xs">
<a className="font-medium text-primary hover:text-primary/80" href="#">
                  View all issues →
                </a>
</div>
</div>

<div className="mt-6">
<h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Improvement from Previous Audit</h4>
<div className="relative pt-1">
<div className="flex mb-2 items-center justify-between">
<div>
<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-success bg-success/10">
                      +15 points
                    </span>
</div>
<div className="text-right">
<span className="text-xs font-semibold inline-block text-success">
                      +20.8%
                    </span>
</div>
</div>
<div className="flex h-2 overflow-hidden text-xs bg-gray-200 rounded">
<div className="bg-gray-400 h-full" style={{width: '72%'}}></div>
<div className="bg-success h-full" style={{width: '15%'}}></div>
</div>
<div className="flex justify-between text-xs mt-1">
<span>Previous: 72/100</span>
<span>Current: 87/100</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden mb-8">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Detailed Findings</h3>
</div>
<div className="bg-white overflow-hidden">
<div className="divide-y divide-gray-200">

<div className="px-6 py-5">
<div className="flex items-start">
<div className="flex-shrink-0">
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-danger/10">
<span className="text-danger font-medium">1</span>
</span>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-base font-medium text-gray-900">Outdated dependencies with known exploits</h4>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger/10 text-danger">
                    Critical
                  </span>
</div>
<div className="mt-2">
<p className="text-sm text-gray-600">Several critical dependencies in both frontend and backend code are outdated and contain known security vulnerabilities:</p>
<ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
<li>lodash v4.17.15 (CVE-2021-23337) - Vulnerable to prototype pollution</li>
<li>axios v0.21.0 (CVE-2023-45857) - SSRF vulnerability</li>
<li>django v2.2.24 (CVE-2023-43665) - SQL injection vulnerability</li>
</ul>
<div className="mt-4 bg-gray-50 rounded-md p-4">
<h5 className="text-sm font-medium text-gray-900">Recommendation</h5>
<p className="mt-1 text-sm text-gray-600">Update all dependencies to their latest secure versions immediately:</p>
<pre className="mt-2 text-xs bg-gray-800 text-white p-3 rounded overflow-auto">
npm update lodash axios --save
pip install django==4.2.7 --upgrade</pre>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start">
<div className="flex-shrink-0">
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-danger/10">
<span className="text-danger font-medium">2</span>
</span>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-base font-medium text-gray-900">Missing input validation on payment processing form</h4>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger/10 text-danger">
                    Critical
                  </span>
</div>
<div className="mt-2">
<p className="text-sm text-gray-600">The payment processing form lacks proper input validation, making it vulnerable to various injection attacks including XSS and potential SQL injection. User inputs are directly incorporated into database queries without sanitization.</p>
<div className="mt-3 flex space-x-4">
<div className="flex-1 p-3 border border-gray-300 rounded-md bg-gray-50">
<h5 className="text-xs font-medium text-danger mb-2">Vulnerable Code</h5>
<pre className="text-xs overflow-auto text-gray-800">
// checkout/payment.js (Line 132)
function processPayment(cardData) {
  const query = `INSERT INTO payments 
    (card_num, expiry, amount) 
    VALUES ('${cardData.number}', 
    '${cardData.expiry}', 
    '${amount}')`;
  
  db.execute(query);
}</pre>
</div>
<div className="flex-1 p-3 border border-gray-300 rounded-md bg-gray-50">
<h5 className="text-xs font-medium text-success mb-2">Recommended Fix</h5>
<pre className="text-xs overflow-auto text-gray-800">
// checkout/payment.js
function processPayment(cardData) {
  // Validate inputs
  if (!validateCardNumber(cardData.number)) {
    throw new Error('Invalid card number');
  }
  
  // Use parameterized queries
  const query = `INSERT INTO payments 
    (card_num, expiry, amount) 
    VALUES (?, ?, ?)`;
  
  db.execute(query, [
    sanitize(cardData.number),
    sanitize(cardData.expiry),
    sanitize(amount)
  ]);
}</pre>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 text-center">
<button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Show 21 more findings
              <svg className="ml-2 -mr-1 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden mb-8">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Recommendations</h3>
</div>
<div className="px-6 py-5">
<div className="space-y-6">
<div className="bg-primary/5 border-l-4 border-primary rounded-r-md p-4">
<div className="flex">
<div className="flex-shrink-0">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-primary">High Priority</h4>
<div className="mt-2 text-sm text-gray-700">
<ul className="list-disc pl-5 space-y-1">
<li>Update all dependencies to their latest secure versions immediately.</li>
<li>Implement proper input validation and sanitization on the payment processing form.</li>
<li>Secure the file upload functionality by validating file types, implementing size limits, and scanning for malware.</li>
</ul>
</div>
</div>
</div>
</div>
<div className="bg-warning/5 border-l-4 border-warning rounded-r-md p-4">
<div className="flex">
<div className="flex-shrink-0">
<svg className="h-5 w-5 text-warning" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-warning">Medium Priority</h4>
<div className="mt-2 text-sm text-gray-700">
<ul className="list-disc pl-5 space-y-1">
<li>Implement Content Security Policy (CSP) headers to prevent XSS attacks.</li>
<li>Enable HTTP Strict Transport Security (HSTS) with a minimum age of 1 year.</li>
<li>Set up a dependency scanning tool in the CI/CD pipeline to prevent future vulnerable dependencies.</li>
<li>Implement rate limiting on authentication endpoints to prevent brute force attacks.</li>
</ul>
</div>
</div>
</div>
</div>
<div className="bg-info/5 border-l-4 border-info rounded-r-md p-4">
<div className="flex">
<div className="flex-shrink-0">
<svg className="h-5 w-5 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24">
</svg></div></div></div></div></div></div></main>
    </>
  );
}
