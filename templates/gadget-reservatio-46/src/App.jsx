import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // --- Frontend Logic ---

        function toggleQuantity(inputId, isChecked) {
            const input = document.getElementById(inputId);
            input.disabled = !isChecked;
            if (!isChecked) {
                input.value = '';
                input.classList.add('bg-gray-100');
                input.classList.remove('bg-white');
            } else {
                input.value = '1'; // default to 1
                input.focus();
                input.classList.remove('bg-gray-100');
                input.classList.add('bg-white');
            }
        }

        async function handleReservation(e) {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const msgBox = document.getElementById('form-message');
            
            // Collect Data
            const formData = {
                fullname: document.getElementById('fullname').value.trim(),
                email: document.getElementById('email').value.trim(),
                cal_check: document.getElementById('prod_calendar').checked,
                cal_qty: parseInt(document.getElementById('qty_calendar').value) || 0,
                desk_check: document.getElementById('prod_deskpad').checked,
                desk_qty: parseInt(document.getElementById('qty_deskpad').value) || 0
            };

            // Validation
            msgBox.classList.add('hidden');
            msgBox.className = 'hidden rounded-lg p-3 text-sm'; // reset classes

            if (!formData.cal_check && !formData.desk_check) {
                showError('Musisz wybrać przynajmniej jeden gadżet.');
                return;
            }

            if ((formData.cal_check && formData.cal_qty < 1) || (formData.desk_check && formData.desk_qty < 1)) {
                showError('Wpisz poprawną ilość sztuk dla wybranych gadżetów.');
                return;
            }

            // Simulate Backend Call
            btn.disabled = true;
            btn.innerHTML = `<i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i> Wysyłanie...`;
            lucide.createIcons();

            try {
                // IMPORTANT: In a real PHP/Node app, replace this block with fetch()
                
                await new Promise(r => setTimeout(r, 800)); // Fake network delay

                // Simulate DB save
                const newReservation = {
                    id: Date.now().toString().slice(-6),
                    created_at: new Date().toISOString(),
                    fullname: formData.fullname,
                    email: formData.email,
                    item_calendar: formData.cal_check ? formData.cal_qty : 0,
                    item_deskpad: formData.desk_check ? formData.desk_qty : 0
                };
                
                const existing = JSON.parse(localStorage.getItem('reservations') || '[]');
                existing.unshift(newReservation);
                localStorage.setItem('reservations', JSON.stringify(existing));

                // Success UI
                msgBox.textContent = 'Rezerwacja została zapisana pomyślnie.';
                msgBox.className = 'rounded-lg p-3 text-sm bg-green-50 text-green-700 border border-green-200 flex items-center gap-2';
                msgBox.classList.remove('hidden');
                
                document.getElementById('reservationForm').reset();
                document.getElementById('qty_calendar').disabled = true;
                document.getElementById('qty_deskpad').disabled = true;
                
                btn.innerHTML = 'Zarezerwowane';
                // Reset button text after 3s
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = `<span>Zarezerwuj gadżety</span><i data-lucide="arrow-right" class="h-4 w-4"></i>`;
                    lucide.createIcons();
                    msgBox.classList.add('hidden');
                }, 3000);

            } catch (err) {
                showError('Wystąpił błąd podczas zapisu. Spróbuj ponownie.');
                btn.disabled = false;
                btn.innerText = 'Zarezerwuj gadżety';
            }
        }

        function showError(msg) {
            const msgBox = document.getElementById('form-message');
            msgBox.textContent = msg;
            msgBox.className = 'rounded-lg p-3 text-sm bg-red-50 text-red-700 border border-red-200';
            msgBox.classList.remove('hidden');
        }

        // --- Admin & Navigation Logic ---

        function toggleAdmin() {
            const adminView = document.getElementById('view-admin');
            if (adminView.classList.contains('hidden')) {
                document.getElementById('admin-login').classList.remove('hidden');
            } else {
                showView('user');
            }
        }

        function closeAdminLogin() {
            document.getElementById('admin-login').classList.add('hidden');
            document.getElementById('login-error').classList.add('hidden');
            document.getElementById('admin-pass').value = '';
        }

        function handleLogin(e) {
            e.preventDefault();
            const pass = document.getElementById('admin-pass').value;
            // Simple mock protection
            if (pass === 'admin123') {
                closeAdminLogin();
                showView('admin');
                renderAdminTable();
            } else {
                document.getElementById('login-error').classList.remove('hidden');
            }
        }

        function showView(viewName) {
            const userView = document.getElementById('view-user');
            const adminView = document.getElementById('view-admin');
            
            if (viewName === 'admin') {
                userView.classList.add('hidden');
                adminView.classList.remove('hidden');
            } else {
                adminView.classList.add('hidden');
                userView.classList.remove('hidden');
            }
        }

        function renderAdminTable() {
            const tbody = document.getElementById('reservations-body');
            const emptyState = document.getElementById('empty-state');
            
            // Get data (Simulating backend fetch)
            const data = JSON.parse(localStorage.getItem('reservations') || '[]');
            
            tbody.innerHTML = '';
            let count = 0;

            data.forEach(row => {
                count++;
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-gray-50/50 transition-colors';
                
                const date = new Date(row.created_at).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute:'2-digit' });

                tr.innerHTML = `
                    <td class="whitespace-nowrap px-6 py-4 text-xs font-mono text-gray-500">#${row.id}</td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">${date}</td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">${row.fullname}<br><span class="text-xs font-normal text-gray-500 font-mono">${row.email}</span></td>
                    <td class="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-900 font-medium">${row.item_calendar > 0 ? row.item_calendar : '<span class="text-gray-300">-</span>'}</td>
                    <td class="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-900 font-medium">${row.item_deskpad > 0 ? row.item_deskpad : '<span class="text-gray-300">-</span>'}</td>
                `;
                tbody.appendChild(tr);
            });

            if (count === 0) {
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
            }
        }

        function exportToCSV() {
            const data = JSON.parse(localStorage.getItem('reservations') || '[]');
            if (data.length === 0) return alert('Brak danych do eksportu');

            const headers = ['ID', 'Data', 'Imie Nazwisko', 'Email', 'Kalendarz (szt)', 'Biuwar (szt)'];
            const csvRows = [headers.join(',')];

            data.forEach(row => {
                const values = [
                    row.id,
                    `"${row.created_at}"`,
                    `"${row.fullname}"`,
                    `"${row.email}"`,
                    row.item_calendar,
                    row.item_deskpad
                ];
                csvRows.push(values.join(','));
            });

            const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden', '');
            a.setAttribute('href', url);
            a.setAttribute('download', 'rezerwacje_gadzetow.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
<div className="flex items-center gap-2" onclick="showView('user')">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gray-900 text-white cursor-pointer">
<span className="text-xs font-semibold tracking-tighter">RG</span>
</div>
<span className="text-sm font-semibold tracking-tight cursor-pointer">Rezerwacja Gadżetów</span>
</div>
<button className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors" onclick="toggleAdmin()">
                Panel Admina
            </button>
</div>
</nav>

<main className="mx-auto max-w-xl px-4 py-12 sm:px-6 lg:px-8 transition-opacity duration-300" id="view-user">
<div className="text-center mb-10">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Zamówienie materiałów</h1>
<p className="mt-2 text-sm text-gray-500">Wypełnij formularz, aby zarezerwować gadżety reklamowe.</p>
</div>
<div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
<div className="p-6 sm:p-8">
<form className="space-y-8" id="reservationForm" onsubmit="handleReservation(event)">

<div className="space-y-4">
<div className="flex items-center gap-2 border-b border-gray-100 pb-2 mb-4">
<i className="h-4 w-4 text-gray-400" data-lucide="user"></i>
<h2 className="text-sm font-medium text-gray-900">Dane pracownika</h2>
</div>
<div className="grid grid-cols-1 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="fullname">Imię i nazwisko</label>
<input className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900 transition-all" id="fullname" name="fullname" placeholder="np. Jan Kowalski" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="email">E-mail służbowy</label>
<input className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900 transition-all" id="email" name="email" placeholder="jan@firma.pl" required="" type="email"/>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 border-b border-gray-100 pb-2 mb-4">
<i className="h-4 w-4 text-gray-400" data-lucide="package"></i>
<h2 className="text-sm font-medium text-gray-900">Wybór gadżetów</h2>
</div>

<div className="group relative flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-all has-[:checked]:border-gray-900 has-[:checked]:bg-gray-50/50">
<div className="flex items-start gap-3">
<div className="relative flex items-center h-5">
<input className="peer h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:border-gray-900 checked:bg-gray-900 focus:ring-2 focus:ring-gray-900/20 focus:ring-offset-0 transition-all cursor-pointer" id="prod_calendar" onchange="toggleQuantity('qty_calendar', this.checked)" type="checkbox"/>
<i className="absolute left-0.5 top-0.5 h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<label className="text-sm font-medium text-gray-700 cursor-pointer select-none group-has-[:checked]:text-gray-900" htmlFor="prod_calendar">
                                    Kalendarz książkowy A5
                                    <span className="block text-xs font-normal text-gray-500 mt-0.5">Granatowy, z logo firmy</span>
</label>
</div>
<div className="w-20">
<input className="block w-full rounded-md border border-gray-200 bg-white px-2 py-1.5 text-right text-sm text-gray-900 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-transparent focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-all" disabled="" id="qty_calendar" min="1" placeholder="0" type="number"/>
</div>
</div>

<div className="group relative flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-all has-[:checked]:border-gray-900 has-[:checked]:bg-gray-50/50">
<div className="flex items-start gap-3">
<div className="relative flex items-center h-5">
<input className="peer h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:border-gray-900 checked:bg-gray-900 focus:ring-2 focus:ring-gray-900/20 focus:ring-offset-0 transition-all cursor-pointer" id="prod_deskpad" onchange="toggleQuantity('qty_deskpad', this.checked)" type="checkbox"/>
<i className="absolute left-0.5 top-0.5 h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<label className="text-sm font-medium text-gray-700 cursor-pointer select-none group-has-[:checked]:text-gray-900" htmlFor="prod_deskpad">
                                    Biuwar papierowy
                                    <span className="block text-xs font-normal text-gray-500 mt-0.5">Format A2, 50 kartek</span>
</label>
</div>
<div className="w-20">
<input className="block w-full rounded-md border border-gray-200 bg-white px-2 py-1.5 text-right text-sm text-gray-900 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-transparent focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-all" disabled="" id="qty_deskpad" min="1" placeholder="0" type="number"/>
</div>
</div>
</div>

<div className="hidden rounded-lg p-3 text-sm" id="form-message"></div>

<div className="pt-2">
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed" id="submit-btn" type="submit">
<span>Zarezerwuj gadżety</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</form>
</div>
</div>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-gray-900/20 backdrop-blur-sm p-4" id="admin-login">
<div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-xl">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Panel Administratora</h3>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Hasło dostępu</label>
<input className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900" id="admin-pass" placeholder="••••••••" type="password"/>
</div>
<div className="hidden text-xs text-red-600" id="login-error">Nieprawidłowe hasło. Spróbuj "admin123".</div>
<div className="flex gap-3">
<button className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" onclick="closeAdminLogin()" type="button">Anuluj</button>
<button className="flex-1 rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800" type="submit">Zaloguj</button>
</div>
</form>
</div>
</div>

<main className="hidden mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8" id="view-admin">
<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Lista rezerwacji</h1>
<p className="mt-1 text-sm text-gray-500">Przegląd wszystkich złożonych zamówień na gadżety.</p>
</div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all" onclick="exportToCSV()">
<i className="h-4 w-4" data-lucide="download"></i>
                    Eksport CSV
                </button>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
<div className="overflow-x-auto custom-scrollbar">
<table className="min-w-full divide-y divide-gray-200 text-left text-sm">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 font-semibold text-gray-900">ID</th>
<th className="px-6 py-3 font-semibold text-gray-900">Data</th>
<th className="px-6 py-3 font-semibold text-gray-900">Pracownik</th>
<th className="px-6 py-3 font-semibold text-gray-900 text-center">Kalendarz</th>
<th className="px-6 py-3 font-semibold text-gray-900 text-center">Biuwar</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 bg-white" id="reservations-body">

</tbody>
</table>
</div>

<div className="hidden py-12 text-center" id="empty-state">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
<i className="h-6 w-6 text-gray-400" data-lucide="inbox"></i>
</div>
<h3 className="mt-2 text-sm font-semibold text-gray-900">Brak rezerwacji</h3>
<p className="mt-1 text-sm text-gray-500">Nie znaleziono żadnych zgłoszeń w bazie.</p>
</div>
</div>
</main>


    </>
  );
}
