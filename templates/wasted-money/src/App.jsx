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



        // Initialize PDF.js worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        // Initialize Lucide icons
        lucide.createIcons({ strokeWidth: 1.5 });

        let uploadedFile = null;

        const fileUpload = document.getElementById('fileUpload');
        const uploadArea = document.getElementById('uploadArea');
        const fileSelected = document.getElementById('fileSelected');
        const fileName = document.getElementById('fileName');
        const fileSize = document.getElementById('fileSize');
        const removeFile = document.getElementById('removeFile');
        const analyzeBtn = document.getElementById('analyzeBtn');
        const analyzeBtnText = document.getElementById('analyzeBtnText');
        const resultsSection = document.getElementById('resultsSection');
        const emptyState = document.getElementById('emptyState');
        const expensesList = document.getElementById('expensesList');
        const frivolousTotal = document.getElementById('frivolousTotal');
        const totalExpenses = document.getElementById('totalExpenses');
        const savingsPercent = document.getElementById('savingsPercent');
        const recommendationsList = document.getElementById('recommendationsList');

        // Frivolous keywords for categorization
        const frivolousKeywords = {
            'Dining Out': ['starbucks', 'coffee', 'restaurant', 'cafe', 'pizza', 'mcdonalds', 'burger', 'delivery', 'doordash', 'uber eats', 'grubhub'],
            'Entertainment': ['netflix', 'spotify', 'hulu', 'disney', 'hbo', 'amazon prime', 'gaming', 'movie', 'cinema', 'theater'],
            'Shopping': ['amazon', 'target', 'walmart', 'clothing', 'fashion', 'boutique', 'mall', 'online shopping', 'etsy'],
            'Luxury': ['luxury', 'premium', 'designer', 'spa', 'massage', 'salon'],
            'Impulse': ['convenience store', 'vending', 'snack', 'candy']
        };

        const essentialKeywords = ['rent', 'mortgage', 'utility', 'utilities', 'insurance', 'gas station', 'fuel', 'pharmacy', 'medical', 'doctor', 'grocery', 'supermarket'];

        // Drag and drop functionality
        uploadArea.addEventListener('click', () => fileUpload.click());

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('border-gray-400', 'bg-gray-100');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('border-gray-400', 'bg-gray-100');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('border-gray-400', 'bg-gray-100');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(files[0]);
            }
        });

        fileUpload.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                handleFileUpload(e.target.files[0]);
            }
        });

        function handleFileUpload(file) {
            uploadedFile = file;
            fileName.textContent = file.name;
            fileSize.textContent = `${(file.size / 1024).toFixed(2)} KB`;
            fileSelected.classList.remove('hidden');
            analyzeBtn.disabled = false;
            uploadArea.classList.remove('border-gray-400');
            lucide.createIcons({ strokeWidth: 1.5 });
        }

        removeFile.addEventListener('click', (e) => {
            e.stopPropagation();
            uploadedFile = null;
            fileUpload.value = '';
            fileSelected.classList.add('hidden');
            analyzeBtn.disabled = true;
            lucide.createIcons({ strokeWidth: 1.5 });
        });

        // Parse PDF file
        async function parsePDF(file) {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let fullText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join(' ');
                fullText += pageText + '\n';
            }

            return fullText;
        }

        // Parse CSV file
        async function parseCSV(file) {
            const text = await file.text();
            return text;
        }

        // Extract transactions from text
        function extractTransactions(text) {
            const transactions = [];
            const lines = text.split('\n');
            
            // Common date patterns
            const datePattern = /(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4}|\d{4}[-\/]\d{1,2}[-\/]\d{1,2}|[A-Z][a-z]{2}\s+\d{1,2},?\s+\d{4})/;
            // Amount patterns (including negative for debits)
            const amountPattern = /[-]?\$?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/;

            for (let line of lines) {
                const dateMatch = line.match(datePattern);
                const amountMatches = line.match(new RegExp(amountPattern, 'g'));
                
                if (dateMatch && amountMatches && amountMatches.length > 0) {
                    // Get the last amount (usually the transaction amount)
                    const amountStr = amountMatches[amountMatches.length - 1].replace(/[$,\s]/g, '');
                    const amount = Math.abs(parseFloat(amountStr));
                    
                    if (amount > 0) {
                        // Extract description (text between date and amount)
                        let description = line.replace(dateMatch[0], '').replace(amountMatches[amountMatches.length - 1], '').trim();
                        description = description.substring(0, 100).trim();
                        
                        if (description.length > 0) {
                            transactions.push({
                                date: normalizeDate(dateMatch[0]),
                                description: description,
                                amount: amount
                            });
                        }
                    }
                }
            }

            return transactions;
        }

        // Normalize date format
        function normalizeDate(dateStr) {
            const date = new Date(dateStr);
            if (!isNaN(date.getTime())) {
                return date.toISOString().split('T')[0];
            }
            return dateStr;
        }

        // Categorize transaction
        function categorizeTransaction(description) {
            const descLower = description.toLowerCase();
            
            // Check if essential
            for (let keyword of essentialKeywords) {
                if (descLower.includes(keyword)) {
                    return { category: 'Essential', frivolous: false };
                }
            }

            // Check frivolous categories
            for (let [category, keywords] of Object.entries(frivolousKeywords)) {
                for (let keyword of keywords) {
                    if (descLower.includes(keyword)) {
                        return { category: category, frivolous: true };
                    }
                }
            }

            // Default to potentially frivolous if not essential
            return { category: 'Other', frivolous: true };
        }

        // Analyze button handler
        analyzeBtn.addEventListener('click', async function() {
            if (!uploadedFile) return;

            // Show loading state
            analyzeBtn.disabled = true;
            analyzeBtnText.textContent = 'Analyzing...';

            try {
                let text = '';
                const fileType = uploadedFile.name.split('.').pop().toLowerCase();

                if (fileType === 'pdf') {
                    text = await parsePDF(uploadedFile);
                } else if (fileType === 'csv') {
                    text = await parseCSV(uploadedFile);
                } else {
                    alert('Please upload a PDF or CSV file');
                    analyzeBtn.disabled = false;
                    analyzeBtnText.textContent = 'Analyze Spending';
                    return;
                }

                // Extract transactions
                const transactions = extractTransactions(text);

                if (transactions.length === 0) {
                    alert('No transactions found in the file. Please ensure your statement contains transaction data.');
                    analyzeBtn.disabled = false;
                    analyzeBtnText.textContent = 'Analyze Spending';
                    return;
                }

                // Categorize all transactions
                const categorizedTransactions = transactions.map(t => {
                    const { category, frivolous } = categorizeTransaction(t.description);
                    return { ...t, category, frivolous };
                });

                // Display results
                displayResults(categorizedTransactions);

                // Reset button
                analyzeBtn.disabled = false;
                analyzeBtnText.textContent = 'Analyze Spending';

            } catch (error) {
                console.error('Error analyzing file:', error);
                alert('Error analyzing file. Please ensure the file is a valid bank statement.');
                analyzeBtn.disabled = false;
                analyzeBtnText.textContent = 'Analyze Spending';
            }
        });

        // Display results
        function displayResults(transactions) {
            emptyState.classList.add('hidden');
            resultsSection.classList.remove('hidden');

            const frivolous = transactions.filter(t => t.frivolous);
            const totalAll = transactions.reduce((sum, t) => sum + t.amount, 0);
            const totalFrivolous = frivolous.reduce((sum, t) => sum + t.amount, 0);
            const savingsPercentage = totalAll > 0 ? ((totalFrivolous / totalAll) * 100).toFixed(1) : 0;

            // Populate table
            expensesList.innerHTML = frivolous.map(expense => `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4 text-sm text-gray-900">${expense.date}</td>
                    <td class="px-6 py-4 text-sm text-gray-900">${expense.description}</td>
                    <td class="px-6 py-4 text-sm text-gray-600">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                            ${expense.category}
                        </span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-900 text-right font-medium">$${expense.amount.toFixed(2)}</td>
                </tr>
            `).join('');

            // Update summary
            frivolousTotal.textContent = `$${totalFrivolous.toFixed(2)}`;
            totalExpenses.textContent = `$${totalAll.toFixed(2)}`;
            savingsPercent.textContent = `${savingsPercentage}%`;

            // Generate recommendations
            generateRecommendations(frivolous, totalFrivolous);

            // Reinitialize icons
            lucide.createIcons({ strokeWidth: 1.5 });
        }

        // Generate recommendations
        function generateRecommendations(frivolousExpenses, total) {
            const recommendations = [];
            
            // Group by category
            const byCategory = {};
            frivolousExpenses.forEach(e => {
                if (!byCategory[e.category]) byCategory[e.category] = [];
                byCategory[e.category].push(e);
            });

            // Generate category-specific recommendations
            for (let [category, expenses] of Object.entries(byCategory)) {
                const categoryTotal = expenses.reduce((sum, e) => sum + e.amount, 0);
                if (categoryTotal > 50) {
                    recommendations.push(`Reduce ${category} spending - you spent $${categoryTotal.toFixed(2)} this month`);
                }
            }

            if (total > 100) {
                recommendations.push(`Set a monthly budget cap for non-essential spending to reduce the $${total.toFixed(2)} in frivolous expenses`);
            }

            recommendations.push('Review recurring subscriptions and cancel unused services');
            recommendations.push('Consider using a budgeting app to track daily expenses');

            recommendationsList.innerHTML = recommendations.slice(0, 5).map(rec => `
                <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i data-lucide="check-circle" class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"></i>
                    <span>${rec}</span>
                </li>
            `).join('');

            lucide.createIcons({ strokeWidth: 1.5 });
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
      

<header className="border-b border-gray-200">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-gray-900 text-white w-8 h-8 rounded flex items-center justify-center text-sm font-semibold tracking-tight">SS</div>
<span className="font-semibold text-lg tracking-tight">SpendSmart</span>
</div>
<nav className="flex items-center gap-6">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Dashboard</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Reports</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Settings</a>
</nav>
</div>
</header>
<main className="max-w-6xl mx-auto px-6 py-12">

<div className="mb-12">
<h1 className="text-4xl font-semibold tracking-tight mb-3">Financial Analysis</h1>
<p className="text-gray-600 text-base">Upload your monthly statements to identify frivolous spending and optimize your budget.</p>
</div>

<div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8 hover:border-gray-400 transition-colors cursor-pointer" id="uploadArea">
<div className="flex flex-col items-center justify-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-gray-600" data-lucide="upload"></i>
</div>
<h3 className="font-semibold text-base mb-2">Upload Statement</h3>
<p className="text-sm text-gray-600 mb-4 max-w-md">Drop your CSV, PDF, or Excel file here or click to browse</p>
<input accept=".csv,.pdf,.xlsx,.xls" className="hidden" id="fileUpload" type="file"/>
<label className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 cursor-pointer transition-colors" htmlFor="fileUpload">
<span>Choose File</span>
</label>
<p className="text-xs text-gray-500 mt-3">Supported formats: CSV, PDF, XLSX (Max 10MB)</p>
</div>
</div>

<div className="hidden mb-4 p-4 bg-green-50 border border-green-200 rounded-lg" id="fileSelected">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="file-check"></i>
<div>
<p className="text-sm font-medium text-green-900" id="fileName">File uploaded</p>
<p className="text-xs text-green-700" id="fileSize"></p>
</div>
</div>
<button className="text-green-700 hover:text-green-900 transition-colors" id="removeFile">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
</div>

<div className="mb-8">
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed" disabled="" id="analyzeBtn">
<i className="w-4 h-4" data-lucide="scanner"></i>
<span id="analyzeBtnText">Analyze Spending</span>
</button>
</div>

<div className="hidden" id="resultsSection">

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold tracking-tight">Frivolous Expenses</h2>
<span className="text-sm text-gray-600">Last 30 days</span>
</div>
<div className="border border-gray-200 rounded-lg overflow-hidden">
<table className="w-full">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wide">Date</th>
<th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wide">Description</th>
<th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wide">Category</th>
<th className="text-right px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wide">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200" id="expensesList">

</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-red-600" data-lucide="alert-circle"></i>
<span className="text-sm text-gray-600">Frivolous Spending</span>
</div>
<p className="text-3xl font-semibold tracking-tight text-red-600" id="frivolousTotal">$0.00</p>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-gray-600" data-lucide="trending-down"></i>
<span className="text-sm text-gray-600">Total Expenditures</span>
</div>
<p className="text-3xl font-semibold tracking-tight" id="totalExpenses">$0.00</p>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-gray-600" data-lucide="percent"></i>
<span className="text-sm text-gray-600">Potential Savings</span>
</div>
<p className="text-3xl font-semibold tracking-tight text-green-600" id="savingsPercent">0%</p>
</div>
</div>

<div className="mt-8 border border-gray-200 rounded-lg p-6">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-amber-600" data-lucide="lightbulb"></i>
<h3 className="font-semibold text-lg tracking-tight">Recommendations</h3>
</div>
<ul className="space-y-2" id="recommendationsList">

</ul>
</div>
</div>

<div className="text-center py-16" id="emptyState">
<div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
<i className="w-7 h-7 text-gray-400" data-lucide="file-text"></i>
</div>
<h3 className="font-semibold text-lg mb-2">No Analysis Yet</h3>
<p className="text-gray-600 text-sm">Upload a statement to get started with your financial analysis.</p>
</div>
</main>


    </>
  );
}
