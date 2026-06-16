import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function appData() {
            return {
                items: [],
                categories: ['Meubles', 'Électroménager', 'Déco', 'Vaisselle', 'Divers'],
                statuses: [
                    { id: 'todo', label: 'À Acheter', color: 'bg-gray-100 text-gray-600 border-gray-200' },
                    { id: 'ordered', label: 'Commandé', color: 'bg-amber-50 text-amber-700 border-amber-100' },
                    { id: 'received', label: 'Reçu', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' }
                ],
                filterStatus: '',
                isModalOpen: false,
                editingId: null,
                dragSourceCategory: null,
                form: {
                    name: '',
                    price: '',
                    category: 'Meubles',
                    url: '',
                    status: 'todo'
                },

                initData() {
                    const saved = localStorage.getItem('move-planner-cat-data');
                    if (saved) {
                        this.items = JSON.parse(saved);
                    } else {
                        this.items = [
                            { id: 1, name: 'Canapé Scandinave', price: 699, category: 'Meubles', url: '', status: 'todo' },
                            { id: 2, name: 'Lave-linge 8kg', price: 450, category: 'Électroménager', url: '', status: 'ordered' },
                            { id: 3, name: 'Service assiettes', price: 89.90, category: 'Vaisselle', url: '', status: 'received' },
                            { id: 4, name: 'Tapis Salon', price: 120, category: 'Déco', url: '', status: 'todo' }
                        ];
                    }
                    this.$watch('items', () => {
                        localStorage.setItem('move-planner-cat-data', JSON.stringify(this.items));
                        this.refreshIcons();
                    });
                    setTimeout(() => this.refreshIcons(), 100);
                },

                refreshIcons() {
                    this.$nextTick(() => {
                        lucide.createIcons();
                    });
                },

                get totalCost() {
                    return this.items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);
                },

                get spentCost() {
                    return this.items
                        .filter(i => i.status === 'ordered' || i.status === 'received')
                        .reduce((sum, item) => sum + parseFloat(item.price || 0), 0);
                },

                getCategoryTotal(cat) {
                    return this.getItemsByCategory(cat).reduce((sum, item) => sum + parseFloat(item.price || 0), 0);
                },

                getItemsByCategory(cat) {
                    return this.items.filter(item => {
                        const matchesCat = item.category === cat;
                        const matchesStatus = this.filterStatus === '' || item.status === this.filterStatus;
                        return matchesCat && matchesStatus;
                    });
                },

                getStatusLabel(id) {
                    return this.statuses.find(s => s.id === id)?.label || id;
                },

                getStatusColor(id) {
                    return this.statuses.find(s => s.id === id)?.color || 'bg-gray-100 text-gray-500';
                },

                cycleStatus(item) {
                    const map = { 'todo': 'ordered', 'ordered': 'received', 'received': 'todo' };
                    item.status = map[item.status];
                    this.refreshIcons();
                },

                formatPrice(price) {
                    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
                },

                openModal() {
                    this.form = { name: '', price: '', category: 'Meubles', url: '', status: 'todo' };
                    this.editingId = null;
                    this.isModalOpen = true;
                    this.refreshIcons();
                },

                closeModal() {
                    this.isModalOpen = false;
                },

                saveItem() {
                    if (this.editingId) {
                        const index = this.items.findIndex(i => i.id === this.editingId);
                        if (index !== -1) {
                            this.items[index] = { ...this.items[index], ...this.form, price: parseFloat(this.form.price) };
                        }
                    } else {
                        const newItem = {
                            id: Date.now(),
                            ...this.form,
                            price: parseFloat(this.form.price)
                        };
                        this.items.push(newItem);
                    }
                    this.closeModal();
                },

                editItem(item) {
                    this.form = { ...item };
                    this.editingId = item.id;
                    this.isModalOpen = true;
                },

                deleteItem(id) {
                    if(confirm('Supprimer cet élément ?')) {
                        this.items = this.items.filter(i => i.id !== id);
                    }
                },

                addCategoryPrompt() {
                    const name = prompt("Nom de la nouvelle catégorie :");
                    if (name && !this.categories.includes(name)) {
                        this.categories.push(name);
                    }
                },

                startDrag(e, id, cat) {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/plain', id);
                    this.dragSourceCategory = cat;
                    // Helper to make children ignore mouse events during drag
                    document.body.classList.add('pointer-events-none-on-drag');
                },

                endDrag() {
                    this.dragSourceCategory = null;
                    document.body.classList.remove('pointer-events-none-on-drag');
                },

                dropItem(newCategory) {
                    const id = event.dataTransfer.getData('text/plain');
                    const itemIndex = this.items.findIndex(i => i.id == id);
                    
                    if (itemIndex > -1 && this.items[itemIndex].category !== newCategory) {
                        this.items[itemIndex].category = newCategory;
                        this.items = [...this.items]; 
                    }
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex-none bg-white border-b border-gray-200 px-6 py-4 z-10">
<div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-gray-900 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</div>
<div>
<h1 className="text-lg font-semibold tracking-tight text-gray-900 leading-none">Planning par Catégorie</h1>
<p className="text-xs text-gray-500 mt-1 font-medium">Organisation des achats</p>
</div>
</div>
<div className="flex items-center gap-4 md:gap-6 flex-1 justify-end">
<div className="flex gap-6 pr-6 border-r border-gray-100 hidden sm:flex">
<div>
<span className="block text-xs text-gray-500 font-medium uppercase tracking-wider">Total</span>
<span className="block text-base font-semibold tracking-tight text-gray-900" x-text="formatPrice(totalCost)"></span>
</div>
<div>
<span className="block text-xs text-gray-500 font-medium uppercase tracking-wider">Dépensé</span>
<span className="block text-base font-semibold tracking-tight text-emerald-600" x-text="formatPrice(spentCost)"></span>
</div>
</div>

<div className="relative">
<select className="appearance-none bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-medium rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-gray-900/10 cursor-pointer transition-colors" x-model="filterStatus">
<option value="">Tous les statuts</option>
<template :key="status.id" x-htmlFor="status in statuses">
<option :value="status.id" x-text="status.label"></option>
</template>
</select>
<i className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<button @click="openModal()" className="group flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-all shadow-sm active:scale-95">
<i className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" data-lucide="plus"></i>
<span className="text-xs font-medium">Nouvel Article</span>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-x-auto overflow-y-hidden bg-gray-50 p-6">
<div className="max-w-7xl mx-auto h-full flex gap-6 min-w-max">

<template :key="cat" x-htmlFor="cat in categories">
<div @dragleave="isOver = false" @dragover.prevent="isOver = true" @drop="dropItem(cat); isOver = false" className="w-[300px] flex flex-col h-full" x-data="{ isOver: false }">

<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500" x-text="cat"></span>
<span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full" x-text="getItemsByCategory(cat).length"></span>
</div>
<div className="text-xs font-medium text-gray-400" x-text="formatPrice(getCategoryTotal(cat))"></div>
</div>

<div :class="{ 
                             'bg-gray-200/80 border-gray-400 shadow-inner ring-1 ring-gray-400/50': isOver,
                             'bg-gray-100/50 border-transparent': !isOver &amp;&amp; (!dragSourceCategory || dragSourceCategory === cat),
                             'border-gray-300 bg-gray-100': dragSourceCategory &amp;&amp; dragSourceCategory !== cat &amp;&amp; !isOver
                         }" className="flex-1 rounded-xl p-2 overflow-y-auto border border-dashed transition-all duration-200">

<template :key="item.id" x-htmlFor="item in getItemsByCategory(cat)">
<div @dragend="endDrag()" @dragstart="startDrag($event, item.id, item.category)" className="group bg-white p-4 rounded-lg border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-gray-300 mb-3 cursor-grab active:cursor-grabbing transition-all relative pointer-events-auto" draggable="true">

<div className="flex justify-between items-start mb-2">
<button :className="getStatusColor(item.status)" @click="cycleStatus(item)" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase transition-colors hover:opacity-80 border">
<span className="w-1.5 h-1.5 rounded-full bg-current"></span>
<span x-text="getStatusLabel(item.status)"></span>
</button>
<div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
<button @click="editItem(item)" className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
<i className="w-3 h-3" data-lucide="pencil"></i>
</button>
<button @click="deleteItem(item.id)" className="p-1 hover:bg-red-50 rounded text-gray-400 hover:text-red-500">
<i className="w-3 h-3" data-lucide="trash-2"></i>
</button>
</div>
</div>

<h3 className="text-sm font-medium text-gray-900 mb-1 leading-snug" x-text="item.name"></h3>

<div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
<div className="font-medium text-sm text-gray-900 tracking-tight" x-text="formatPrice(item.price)"></div>
<a :href="item.url" className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-blue-600 transition-colors" rel="noopener noreferrer" target="_blank" x-show="item.url">
                                        Lien
                                        <i className="w-3 h-3" data-lucide="external-link"></i>
</a>
</div>
</div>
</template>

<div className="h-24 flex items-center justify-center pointer-events-none" x-show="getItemsByCategory(cat).length === 0">
<span className="text-xs text-gray-400 font-medium" x-text="isOver ? 'Déposer ici' : 'Vide'"></span>
</div>
</div>
</div>
</template>

<div className="w-[300px] flex flex-col h-full opacity-50 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between mb-3 px-1">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Nouvelle catégorie</span>
</div>
<button @click="addCategoryPrompt" className="flex-1 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center hover:border-gray-300 hover:bg-gray-100/50 transition-all text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</div>
</div>
</main>

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-4" x-cloak="" x-show="isModalOpen" x-transition.opacity="">
<div @click.away="closeModal()" className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden border border-gray-100">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
<h2 className="text-sm font-semibold text-gray-900" x-text="editingId ? 'Modifier l\'article' : 'Ajouter un article'"></h2>
<button @click="closeModal()" className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<form @submit.prevent="saveItem" className="p-6 space-y-4">

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Nom de l'article</label>
<input className="w-full text-sm bg-white border border-gray-200 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow" placeholder="Ex: Canapé 3 places" required="" type="text" x-model="form.name"/>
</div>
<div className="grid grid-cols-2 gap-4">

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Prix (€)</label>
<div className="relative">
<input className="w-full text-sm bg-white border border-gray-200 rounded-md pl-3 pr-8 py-2 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow" placeholder="0.00" required="" step="0.01" type="number" x-model="form.price"/>
<span className="absolute right-3 top-2 text-xs text-gray-400 font-medium">€</span>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Catégorie</label>
<select className="w-full text-sm bg-white border border-gray-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow appearance-none" x-model="form.category">
<template :key="cat" x-htmlFor="cat in categories">
<option :value="cat" x-text="cat"></option>
</template>
</select>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Statut</label>
<div className="flex gap-2">
<template :key="status.id" x-htmlFor="status in statuses">
<button :className="form.status === status.id ? 'border-gray-900 bg-gray-900 text-white shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'" @click="form.status = status.id" className="flex-1 py-2 px-2 rounded-md text-xs font-medium border transition-all" type="button">
<span x-text="status.label"></span>
</button>
</template>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Lien URL (Optionnel)</label>
<div className="flex items-center border border-gray-200 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-gray-400 focus-within:border-gray-400">
<div className="bg-gray-50 px-3 py-2 border-r border-gray-200">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="link"></i>
</div>
<input className="w-full text-sm bg-white border-none px-3 py-2 placeholder-gray-400 focus:ring-0" placeholder="https://..." type="url" x-model="form.url"/>
</div>
</div>

<div className="pt-4 flex justify-end gap-3">
<button @click="closeModal()" className="px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors" type="button">
                        Annuler
                    </button>
<button className="px-4 py-2 text-xs font-medium text-white bg-gray-900 hover:bg-black rounded-md shadow-sm transition-all transform active:scale-95" type="submit">
<span x-text="editingId ? 'Mettre à jour' : 'Ajouter'"></span>
</button>
</div>
</form>
</div>
</div>


    </>
  );
}
