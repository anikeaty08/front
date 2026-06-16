import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function app() {
            return {
                currentView: 'form',
                leads: [],
                form: {
                    name: '',
                    mobile: '',
                    work: '',
                    location: '',
                    photo: null,
                    photoPreview: null,
                    notes: ''
                },
                locationLoading: false,
                selectedLeads: [],
                allSelected: false,
                
                // Auth
                isAdmin: false,
                showAuthModal: false,
                authPin: '',
                
                // UI
                imageModal: null,
                notification: { show: false, message: '', type: 'success' },

                init() {
                    // Load data from localStorage
                    const storedLeads = localStorage.getItem('leadManagerPro_data');
                    if (storedLeads) {
                        this.leads = JSON.parse(storedLeads);
                    }
                },

                checkAuth() {
                    if (this.isAdmin) {
                        this.switchView('dashboard');
                    } else {
                        this.showAuthModal = true;
                        this.authPin = '';
                    }
                },

                verifyAuth() {
                    if (this.authPin === '1234') {
                        this.isAdmin = true;
                        this.showAuthModal = false;
                        this.switchView('dashboard');
                        this.showNotification('Welcome, Admin', 'success');
                    } else {
                        this.showNotification('Incorrect PIN', 'error');
                        this.authPin = '';
                    }
                },

                switchView(view) {
                    this.currentView = view;
                    if(view === 'dashboard') {
                        this.selectedLeads = [];
                        this.allSelected = false;
                    }
                },

                getLocation() {
                    if (!navigator.geolocation) {
                        this.showNotification('Geolocation is not supported by your browser', 'error');
                        return;
                    }
                    this.locationLoading = true;
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            // Simple formatting
                            this.form.location = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
                            this.locationLoading = false;
                            this.showNotification('Location captured successfully', 'success');
                        },
                        (error) => {
                            this.locationLoading = false;
                            this.showNotification('Unable to retrieve location', 'error');
                        }
                    );
                },

                handleFileUpload(event) {
                    const file = event.target.files[0];
                    if (!file) return;

                    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
                    if (!validTypes.includes(file.type)) {
                        this.showNotification('Only JPG/PNG files allowed', 'error');
                        return;
                    }

                    // Compress image before storage to avoid LocalStorage limits
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        img.onload = () => {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            
                            // Max dimensions
                            const MAX_WIDTH = 600;
                            const MAX_HEIGHT = 600;
                            let width = img.width;
                            let height = img.height;

                            if (width > height) {
                                if (width > MAX_WIDTH) {
                                    height *= MAX_WIDTH / width;
                                    width = MAX_WIDTH;
                                }
                            } else {
                                if (height > MAX_HEIGHT) {
                                    width *= MAX_HEIGHT / height;
                                    height = MAX_HEIGHT;
                                }
                            }

                            canvas.width = width;
                            canvas.height = height;
                            ctx.drawImage(img, 0, 0, width, height);
                            
                            // Compress to base64
                            const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                            this.form.photo = dataUrl;
                            this.form.photoPreview = dataUrl;
                        };
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                },

                submitForm() {
                    // Validation
                    if (!this.form.name.trim()) {
                        this.showNotification('Owner Name is required', 'error');
                        return;
                    }
                    if (!/^\d{10}$/.test(this.form.mobile)) {
                        this.showNotification('Mobile number must be 10 digits', 'error');
                        return;
                    }

                    // Create Record
                    const newLead = {
                        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                        name: this.form.name,
                        mobile: this.form.mobile,
                        work: this.form.work,
                        location: this.form.location,
                        photo: this.form.photo,
                        notes: this.form.notes,
                        date: new Date().toISOString()
                    };

                    this.leads.unshift(newLead);
                    this.saveToStorage();
                    
                    // Reset Form
                    this.form = { name: '', mobile: '', work: '', location: '', photo: null, photoPreview: null, notes: '' };
                    document.getElementById('dropzone-file').value = ''; // clear input
                    
                    this.showNotification('Lead saved successfully', 'success');
                },

                saveToStorage() {
                    try {
                        localStorage.setItem('leadManagerPro_data', JSON.stringify(this.leads));
                    } catch (e) {
                        this.showNotification('Storage full! Delete some records.', 'error');
                    }
                },

                toggleAll() {
                    if (this.allSelected) {
                        this.selectedLeads = [];
                    } else {
                        this.selectedLeads = this.leads.map(lead => lead.id);
                    }
                },

                deleteSelected() {
                    if (!confirm(`Delete ${this.selectedLeads.length} record(s)?`)) return;
                    
                    this.leads = this.leads.filter(lead => !this.selectedLeads.includes(lead.id));
                    this.selectedLeads = [];
                    this.allSelected = false;
                    this.saveToStorage();
                    this.showNotification('Records deleted', 'success');
                },

                exportToCSV() {
                    const headers = ['ID', 'Name', 'Mobile', 'Work', 'Location', 'Notes', 'Date'];
                    const rows = this.leads.map(lead => [
                        lead.id,
                        `"${lead.name}"`, 
                        `"${lead.mobile}"`,
                        `"${lead.work}"`,
                        `"${lead.location}"`,
                        `"${lead.notes}"`,
                        `"${lead.date}"`
                    ]);

                    let csvContent = "data:text/csv;charset=utf-8," 
                        + headers.join(",") + "\n" 
                        + rows.map(e => e.join(",")).join("\n");

                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", "leads_export.csv");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                },

                viewImage(src) {
                    this.imageModal = src;
                },

                showNotification(msg, type) {
                    this.notification = { show: true, message: msg, type: type };
                    setTimeout(() => {
                        this.notification.show = false;
                    }, 3000);
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-30 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-zinc-900 font-geist" style={{}}>Lead Manager Pro</span>
</div>
<div className="flex items-center gap-4">
<button :className="currentView === 'form' ? 'text-zinc-900 bg-zinc-100' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'" @click="switchView('form')" className="px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 text-zinc-900 bg-zinc-100 font-geist">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="16"></iconify-icon>
                        New Lead
                    </button>
<button :className="currentView === 'dashboard' ? 'text-zinc-900 bg-zinc-100' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'" @click="checkAuth()" className="px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 font-geist">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
                        Dashboard
                    </button>
</div>
</div>
</div>
</nav>

<main className="flex-1 sm:px-6 lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">

<div className="" x-show="currentView === 'form'" x-transition.opacity.duration.300ms="">
<div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
<div className="px-6 py-5 border-b border-zinc-100">
<h2 className="text-xl font-medium text-zinc-900 tracking-tight font-geist" style={{}}>Capture New Lead</h2>
<p className="text-sm text-zinc-500 mt-1 font-geist" style={{}}>Enter the lead details below. All fields are stored locally.</p>
</div>
<form @submit.prevent="submitForm" className="p-6 space-y-5">

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide font-geist">Owner Name <span className="text-red-500 font-geist">*</span></label>
<div className="relative">
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-1 focus:ring-zinc-800 focus:border-zinc-800 block p-2.5 outline-none transition-all placeholder-zinc-400" placeholder="Jane Doe" required="" type="text" x-model="form.name"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide font-geist">Mobile Number <span className="text-red-500 font-geist">*</span></label>
<div className="relative">
<input @input="form.mobile = form.mobile.replace(/[^0-9]/g, '').slice(0, 10)" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-1 focus:ring-zinc-800 focus:border-zinc-800 block p-2.5 outline-none transition-all placeholder-zinc-400" maxlength="10" pattern="[0-9]{10}" placeholder="1234567890" required="" type="tel" x-model="form.mobile"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<p className="text-xs text-zinc-400 font-geist" style={{display: 'none'}} x-show="form.mobile.length &gt; 0 &amp;&amp; form.mobile.length &lt; 10">Must be exactly 10 digits.</p>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide font-geist">Work / Business</label>
<div className="relative">
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-1 focus:ring-zinc-800 focus:border-zinc-800 block p-2.5 outline-none transition-all placeholder-zinc-400" placeholder="Real Estate Agent" type="text" x-model="form.work"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide font-geist">Location</label>
<div className="flex gap-2">
<button @click="getLocation" className="flex-1 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:bg-zinc-50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-center gap-2 transition-all outline-none focus:ring-1 focus:ring-zinc-200" type="button">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
<span className="font-geist" x-text="form.location ? 'Update Location' : 'Get Current Location'">Get Current Location</span>
</button>
</div>
<div className="text-xs text-zinc-500 animate-pulse flex items-center gap-1 font-geist" style={{display: 'none'}} x-show="locationLoading">
<iconify-icon className="animate-spin" icon="lucide:loader-2"></iconify-icon> Fetching GPS...
                        </div>
<div className="text-xs text-green-600 flex items-center gap-1 mt-1" style={{display: 'none'}} x-show="form.location">
<iconify-icon icon="lucide:check-circle" width="12"></iconify-icon>
<span className="font-geist" x-text="form.location"></span>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide font-geist">Photo (JPG/PNG)</label>
<div className="flex items-center justify-center w-full">
<label className="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-200 border-dashed rounded-lg cursor-pointer bg-zinc-50 hover:bg-zinc-100 transition-colors" htmlFor="dropzone-file">
<div className="flex flex-col items-center justify-center pt-5 pb-6" x-show="!form.photoPreview">
<iconify-icon className="w-8 h-8 mb-2 text-zinc-400" icon="lucide:camera" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-xs text-zinc-500"><span className="font-medium font-geist" style={{}}>Click to upload</span></p>
<p className="text-[10px] text-zinc-400 font-geist" style={{}}>JPG or PNG only</p>
</div>
<div className="w-full h-full relative group" style={{display: 'none'}} x-show="form.photoPreview">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
<span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded font-geist" style={{}}>Change</span>
</div>
</div>
<input @change="handleFileUpload" accept="image/png, image/jpeg" className="hidden" id="dropzone-file" type="file"/>
</label>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide font-geist">Notes</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-1 focus:ring-zinc-800 focus:border-zinc-800 block p-2.5 outline-none transition-all placeholder-zinc-400 resize-none" placeholder="Additional details..." rows="3" x-model="form.notes"></textarea>
</div>

<div className="pt-2">
<button className="w-full text-white bg-zinc-900 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-3 focus:outline-none transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2 font-geist" type="submit">
<iconify-icon icon="lucide:save" strokeWidth="1.5" width="18"></iconify-icon>
                            Save Lead
                        </button>
</div>
</form>
</div>
</div>

<div style={{display: 'none'}} x-show="currentView === 'dashboard'" x-transition.opacity.duration.300ms="">
<div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col h-[calc(100vh-8rem)]">

<div className="px-6 py-4 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-xl font-medium tracking-tight text-zinc-900 font-geist" style={{}}>Leads Database</h2>
<p className="text-sm text-zinc-500 mt-1 font-geist" style={{}}><span className="font-geist" style={{}} x-text="leads.length">0</span> record(s) found</p>
</div>
<div className="flex items-center gap-2">
<button :disabled="selectedLeads.length === 0" @click="deleteSelected" className="disabled:opacity-50 disabled:cursor-not-allowed text-red-600 bg-red-50 hover:bg-red-100 border border-transparent focus:ring-2 focus:ring-red-200 font-medium rounded-md text-xs px-3 py-2 transition-all flex items-center gap-1.5 font-geist" disabled="disabled" style={{}}>
<iconify-icon icon="lucide:trash-2" strokeWidth="1.5" width="14"></iconify-icon>
                            Delete Selected
                        </button>
<button :disabled="leads.length === 0" @click="exportToCSV" className="disabled:opacity-50 disabled:cursor-not-allowed text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 focus:ring-2 focus:ring-zinc-100 font-medium rounded-md text-xs px-3 py-2 transition-all flex items-center gap-1.5 shadow-sm font-geist" disabled="disabled" style={{}}>
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="14"></iconify-icon>
                            Export Excel
                        </button>
</div>
</div>

<div className="flex-1 overflow-auto relative">
<table className="w-full text-sm text-left text-zinc-500">
<thead className="text-xs text-zinc-700 uppercase bg-zinc-50 border-b border-zinc-200 sticky top-0 z-10">
<tr>
<th className="p-4 w-4" scope="col">
<div className="flex items-center">
<input @change="toggleAll" className="w-4 h-4 text-zinc-900 bg-zinc-100 border-zinc-300 rounded focus:ring-zinc-900 focus:ring-1" type="checkbox" x-model="allSelected"/>
</div>
</th>
<th className="px-6 py-3 font-medium font-geist" scope="col" style={{}}>Owner / Mobile</th>
<th className="px-6 py-3 font-medium font-geist" scope="col" style={{}}>Work</th>
<th className="px-6 py-3 font-medium font-geist" scope="col" style={{}}>Location</th>
<th className="px-6 py-3 font-medium font-geist" scope="col" style={{}}>Notes</th>
<th className="px-6 py-3 font-medium font-geist" scope="col" style={{}}>Photo</th>
<th className="px-6 py-3 font-medium font-geist" scope="col" style={{}}>Date</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr x-show="leads.length === 0">
<td className="px-6 py-12 text-center text-zinc-400 text-sm" colspan="7">
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon icon="lucide:inbox" strokeWidth="1" width="32"></iconify-icon>
<p className="font-geist" style={{}}>No leads found. Switch to the form to add one.</p>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" style={{display: 'none'}} x-show="showAuthModal">
<div @click.away="showAuthModal = false" className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 transform transition-all border border-zinc-200">
<div className="text-center mb-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 mb-3 text-zinc-900">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 font-geist" style={{}}>Admin Access</h3>
<p className="text-xs text-zinc-500 mt-1 font-geist" style={{}}>Enter PIN to access dashboard (Default: 1234)</p>
</div>
<div className="space-y-4">
<input @keydown.enter="verifyAuth" autofocus="" className="w-full text-center text-2xl tracking-widest font-mono bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-lg focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 block p-2.5 outline-none" maxlength="4" placeholder="••••" type="password" x-model="authPin"/>
<button @click="verifyAuth" className="w-full text-white bg-zinc-900 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md transition-all font-geist">
                        Unlock Dashboard
                    </button>
<button @click="showAuthModal = false" className="w-full text-zinc-500 hover:text-zinc-900 text-xs font-medium py-1 font-geist" style={{}}>Cancel</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" style={{display: 'none'}} x-show="imageModal">
<div @click.away="imageModal = null" className="relative max-w-4xl max-h-full">
<button @click="imageModal = null" className="absolute -top-10 right-0 text-white hover:text-zinc-300">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-zinc-700"/>
</div>
</div>

<div className="fixed bottom-4 right-4 z-50 bg-zinc-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 text-sm border border-zinc-800" style={{display: 'none'}} x-show="notification.show" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-2" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 translate-y-2" x-transition:leave-start="opacity-100 translate-y-0">
<iconify-icon :className="notification.type === 'success' ? 'text-green-400' : 'text-red-400'" :icon="notification.type === 'success' ? 'lucide:check-circle' : 'lucide:alert-circle'" className="text-green-400" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="font-geist" x-text="notification.message"></span>
</div>
</main>


    </>
  );
}
