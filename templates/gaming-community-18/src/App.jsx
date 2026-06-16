import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA & STATE ---
        let isAdmin = false;
        // Initial Dummy Data
        let posts = [
            {
                id: 1,
                title: "Запуск нового сервера для подписчиков",
                content: "Мы рады объявить об открытии официального игрового сервера QoverGames. Ждем всех на открытии!",
                tag: "Важно",
                date: "Сегодня, 10:00",
                views: 1240,
                likes: 156,
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
                comments: [
                    { name: "Gamer2000", text: "Ура, наконец-то!", time: "10:05" },
                    { name: "AlexPro", text: "Какой IP адрес?", time: "10:12" }
                ]
            },
            {
                id: 2,
                title: "Опрос: Какую игру пройти следующей?",
                content: "Голосование открыто! Выбираем между Horrorfield и Cyberpunk DLC. Пишите свои варианты в комментариях.",
                tag: "Опрос",
                date: "Вчера",
                views: 890,
                likes: 243,
                image: null,
                comments: []
            }
        ];

        let currentPostId = null;

        // --- AUTHENTICATION ---
        function toggleLoginModal() {
            const modal = document.getElementById('login-modal');
            modal.classList.toggle('hidden');
            document.getElementById('login-error').classList.add('hidden');
        }

        function handleLogin(e) {
            e.preventDefault();
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;

            if (u === 'qover' && p === 'Sayad1234') {
                isAdmin = true;
                toggleLoginModal();
                updateUI();
            } else {
                document.getElementById('login-error').classList.remove('hidden');
            }
        }

        function logout() {
            isAdmin = false;
            updateUI();
        }

        function updateUI() {
            const authSection = document.getElementById('auth-section');
            const userProfile = document.getElementById('user-profile');
            const addBtn = document.getElementById('add-news-btn');

            if (isAdmin) {
                authSection.classList.add('hidden');
                userProfile.classList.remove('hidden');
                addBtn.classList.remove('hidden');
            } else {
                authSection.classList.remove('hidden');
                userProfile.classList.add('hidden');
                addBtn.classList.add('hidden');
            }
            renderPosts(); // Re-render to show/hide edit buttons
        }

        // --- POSTS LOGIC ---
        function renderPosts() {
            const container = document.getElementById('news-container');
            container.innerHTML = '';

            posts.forEach(post => {
                // Color for tag
                let tagColor = "bg-zinc-800 text-zinc-400 border-zinc-700";
                if(post.tag === "Важно") tagColor = "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
                if(post.tag === "Обновление") tagColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

                const hasImage = post.image ? `<div class="w-full h-48 bg-zinc-900 border-b border-zinc-800 overflow-hidden"><img src="${post.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></div>` : '';

                const html = `
                <div class="relative group bg-zinc-900/20 border border-zinc-800 rounded-xl overflow-hidden hover:bg-zinc-900/40 hover:border-zinc-700 transition-all">
                    ${hasImage}
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-2">
                                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${tagColor}">${post.tag}</span>
                                <span class="text-xs text-zinc-500">${post.date}</span>
                            </div>
                            <!-- Admin Actions -->
                            ${isAdmin ? `
                            <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onclick="editPost(${post.id})" class="text-zinc-500 hover:text-white"><iconify-icon icon="lucide:edit-2" width="14"></iconify-icon></button>
                                <button onclick="deletePost(${post.id})" class="text-zinc-500 hover:text-red-400"><iconify-icon icon="lucide:trash" width="14"></iconify-icon></button>
                            </div>` : ''}
                        </div>
                        
                        <h3 class="text-lg font-medium text-white mb-2 cursor-pointer hover:text-indigo-400 transition-colors" onclick="openViewModal(${post.id})">${post.title}</h3>
                        <p class="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">${post.content}</p>
                        
                        <div class="flex items-center gap-4 pt-3 border-t border-zinc-800/50">
                            <button onclick="likePost(${post.id})" class="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-red-400 transition-colors group/like">
                                <iconify-icon icon="lucide:heart" width="14" class="interactive-icon group-hover/like:scale-110"></iconify-icon>
                                <span>${post.likes}</span>
                            </button>
                            <button onclick="openViewModal(${post.id})" class="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-indigo-400 transition-colors">
                                <iconify-icon icon="lucide:message-square" width="14"></iconify-icon>
                                <span>${post.comments.length}</span>
                            </button>
                            <div class="flex items-center gap-1.5 text-xs text-zinc-600 ml-auto">
                                <iconify-icon icon="lucide:eye" width="14"></iconify-icon>
                                <span>${post.views}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
                container.innerHTML += html;
            });
        }

        // --- EDITOR LOGIC ---
        let editingId = null;

        function openEditor(id = null) {
            const modal = document.getElementById('editor-modal');
            const form = modal.querySelector('form');
            const preview = document.getElementById('post-image-preview');
            const placeholder = document.getElementById('upload-placeholder');

            form.reset();
            preview.classList.add('hidden');
            preview.src = '';
            placeholder.classList.remove('hidden');

            if (id) {
                const post = posts.find(p => p.id === id);
                document.getElementById('editor-title').innerText = "Редактировать пост";
                document.getElementById('post-title').value = post.title;
                document.getElementById('post-content').value = post.content;
                document.getElementById('post-tag').value = post.tag;
                if(post.image) {
                    preview.src = post.image;
                    preview.classList.remove('hidden');
                    placeholder.classList.add('hidden');
                }
                editingId = id;
            } else {
                document.getElementById('editor-title').innerText = "Создать пост";
                editingId = null;
            }
            modal.classList.remove('hidden');
        }

        function closeEditor() {
            document.getElementById('editor-modal').classList.add('hidden');
        }

        function handleImagePreview(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('post-image-preview');
                    const placeholder = document.getElementById('upload-placeholder');
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                    placeholder.classList.add('hidden');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        function savePost(e) {
            e.preventDefault();
            const title = document.getElementById('post-title').value;
            const content = document.getElementById('post-content').value;
            const tag = document.getElementById('post-tag').value;
            const previewSrc = document.getElementById('post-image-preview').src;
            // Check if src is valid (not empty and not the current page url)
            const image = (document.getElementById('post-image-preview').classList.contains('hidden') || previewSrc === window.location.href) ? null : previewSrc;

            if (editingId) {
                const post = posts.find(p => p.id === editingId);
                post.title = title;
                post.content = content;
                post.tag = tag;
                post.image = image;
            } else {
                const newPost = {
                    id: Date.now(),
                    title,
                    content,
                    tag,
                    image,
                    date: "Только что",
                    views: 0,
                    likes: 0,
                    comments: []
                };
                posts.unshift(newPost);
            }
            closeEditor();
            renderPosts();
        }

        function editPost(id) {
            openEditor(id);
        }

        function deletePost(id) {
            if(confirm('Удалить этот пост?')) {
                posts = posts.filter(p => p.id !== id);
                renderPosts();
            }
        }

        // --- INTERACTION LOGIC ---
        function likePost(id) {
            const post = posts.find(p => p.id === id);
            post.likes++;
            
            // If modal is open, update modal counters too
            if(!document.getElementById('view-modal').classList.contains('hidden')) {
                document.getElementById('view-likes-count').innerText = post.likes;
            }
            
            renderPosts();
        }

        function openViewModal(id) {
            currentPostId = id;
            const post = posts.find(p => p.id === id);
            
            // Increment views
            post.views++;

            // Populate Modal
            document.getElementById('view-title').innerText = post.title;
            document.getElementById('view-content').innerText = post.content;
            document.getElementById('view-date').innerText = post.date;
            document.getElementById('view-tag').innerText = post.tag;
            document.getElementById('view-views-count').innerText = post.views;
            document.getElementById('view-likes-count').innerText = post.likes;

            // Image handling in modal
            const imgEl = document.getElementById('view-image');
            if(post.image) {
                imgEl.src = post.image;
                imgEl.classList.remove('hidden');
            } else {
                imgEl.classList.add('hidden');
            }

            // Tag style in modal
            let tagClass = "border-zinc-700 text-zinc-400";
            if(post.tag === "Важно") tagClass = "border-indigo-500/30 text-indigo-400 bg-indigo-500/10";
            if(post.tag === "Обновление") tagClass = "border-emerald-500/30 text-emerald-400 bg-emerald-500/10";
            document.getElementById('view-tag').className = `px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${tagClass}`;

            renderComments(post);

            document.getElementById('view-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // prevent bg scrolling
            renderPosts(); // update view count in background
        }

        function closeViewModal() {
            document.getElementById('view-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
            currentPostId = null;
        }

        function renderComments(post) {
            const list = document.getElementById('comments-list');
            list.innerHTML = '';
            
            if(post.comments.length === 0) {
                list.innerHTML = '<div class="text-center text-zinc-600 text-xs py-4">Нет комментариев. Будьте первым!</div>';
                return;
            }

            post.comments.forEach(c => {
                const html = `
                <div class="flex gap-3">
                    <div class="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold border border-zinc-700">
                        ${c.name.charAt(0).toUpperCase()}
                    </div>
                    <div class="flex-1">
                        <div class="flex items-baseline gap-2">
                            <span class="text-xs font-medium text-zinc-300">${c.name}</span>
                            <span class="text-[10px] text-zinc-600">${c.time}</span>
                        </div>
                        <p class="text-xs text-zinc-400 mt-0.5">${c.text}</p>
                    </div>
                </div>`;
                list.innerHTML += html;
            });
        }

        function submitComment(e) {
            e.preventDefault();
            if(!currentPostId) return;

            const name = document.getElementById('comment-guest-name').value;
            const text = document.getElementById('comment-text').value;
            
            const post = posts.find(p => p.id === currentPostId);
            
            post.comments.push({
                name,
                text,
                time: "Только что"
            });

            document.getElementById('comment-text').value = ''; // keep name, clear text
            renderComments(post);
            renderPosts(); // update comment count in background
        }

        // Initialize
        renderPosts();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="flex shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 font-semibold text-white tracking-tighter bg-gradient-to-br from-indigo-500 to-purple-600 w-8 h-8 rounded-lg shadow-lg items-center justify-center">
                        Q
                    </div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-400 transition-colors">QoverGames</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors" href="#">Видео</a>
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors" href="#">Новости</a>
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors" href="#">Сообщество</a>
</div>

<div className="flex items-center gap-4">
<div className="" id="auth-section">
<button className="hover:text-white transition-colors text-sm font-medium text-zinc-400" onclick="toggleLoginModal()">Войти</button>
</div>
<div className="hidden flex items-center gap-3 pl-4 border-l border-zinc-800" id="user-profile">
<div className="text-right hidden sm:block">
<p className="text-xs font-medium text-white tracking-tight">Qover</p>
<p className="text-[10px] text-indigo-400 font-medium tracking-wide uppercase">Admin</p>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</div>
<button className="text-zinc-500 hover:text-red-400 ml-2 transition-colors" onclick="logout()">
<iconify-icon icon="lucide:log-out" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</nav>

<main className="flex-grow sm:px-6 lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-12 pl-4">

<div className="fade-in mb-12 relative">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full opacity-50"></div>
<h1 className="text-4xl sm:text-5xl font-medium text-white tracking-tight mb-4">
                Главная <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Студия</span>
</h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">

<div className="lg:col-span-7 space-y-6">
<div className="flex items-center justify-between mb-2">
<h2 className="text-xl font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="lucide:newspaper" strokeWidth="1.5"></iconify-icon>
                        Лента новостей
                    </h2>

<button className="hidden text-xs flex items-center gap-1.5 text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500/20 px-4 py-1.5 rounded-full transition-all shadow-lg shadow-indigo-500/20" id="add-news-btn" onclick="openEditor()">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
                        Создать пост
                    </button>
</div>

<div className="space-y-8 fade-in" id="news-container" style={{animationDelay: '0.1s'}}>

</div>
</div>

<div className="lg:col-span-5 space-y-6">
<div className="flex items-center justify-between mb-2">
<h2 className="text-xl font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-purple-500" icon="lucide:play-circle" strokeWidth="1.5"></iconify-icon>
                        Новые видео
                    </h2>
</div>
<div className="space-y-4">

<div className="group relative bg-zinc-900/40 border border-zinc-800/60 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300">
<div className="flex gap-4 p-3">
<div className="relative w-32 h-20 flex-shrink-0 bg-zinc-800 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-sm font-medium text-zinc-100 leading-snug group-hover:text-indigo-400 transition-colors">Финал турнира CS2</h3>
<p className="text-xs text-zinc-500 mt-1">2.4 тыс. просмотров</p>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-zinc-800/60 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300">
<div className="flex gap-4 p-3">
<div className="relative w-32 h-20 flex-shrink-0 bg-zinc-800 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-sm font-medium text-zinc-100 leading-snug group-hover:text-indigo-400 transition-colors">Прохождение Horrorfield #3</h3>
<p className="text-xs text-zinc-500 mt-1">1.8 тыс. просмотров</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 py-8 mt-12">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs text-zinc-600">© 2023 QoverGames.</p>
</div>
</footer>


<div className="fixed inset-0 z-[100] hidden" id="login-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="toggleLoginModal()"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white">Вход Admin</h3>
<button className="text-zinc-500 hover:text-white" onclick="toggleLoginModal()"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" id="username" placeholder="Логин" type="text"/>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" id="password" placeholder="Пароль" type="password"/>
<div className="hidden text-xs text-red-400" id="login-error">Неверные данные</div>
<button className="w-full bg-white text-black text-sm font-medium py-2.5 rounded-lg hover:bg-zinc-200 transition-colors" type="submit">Войти</button>
</form>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden" id="editor-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="closeEditor()"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white" id="editor-title">Создать пост</h3>
<button className="text-zinc-500 hover:text-white" onclick="closeEditor()"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>
<form className="space-y-4" onsubmit="savePost(event)">
<input id="post-id" type="hidden"/>

<div className="relative group w-full h-48 bg-zinc-950 border border-dashed border-zinc-700 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer hover:border-indigo-500/50 transition-colors">
<input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" id="post-image-input" onchange="handleImagePreview(this)" type="file"/>
<img className="hidden absolute inset-0 w-full h-full object-cover" id="post-image-preview" src=""/>
<div className="text-center text-zinc-500 group-hover:text-indigo-400 transition-colors" id="upload-placeholder">
<iconify-icon className="mb-2 mx-auto" icon="lucide:image-plus" width="32"></iconify-icon>
<span className="text-xs">Нажмите для выбора фото</span>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="col-span-2">
<label className="block text-xs text-zinc-500 mb-1 ml-1">Заголовок</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500/50 focus:outline-none" id="post-title" placeholder="Важное обновление..." required="" type="text"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Тег</label>
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2 py-2 text-sm text-white focus:border-indigo-500/50 focus:outline-none appearance-none" id="post-tag">
<option value="Важно">Важно</option>
<option value="Обновление">Обновление</option>
<option value="Событие">Событие</option>
<option value="Опрос">Опрос</option>
</select>
</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Текст новости</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500/50 focus:outline-none resize-none" id="post-content" placeholder="Текст вашего поста..." required="" rows="4"></textarea>
</div>
<div className="flex gap-3 pt-2">
<button className="flex-1 py-2.5 text-xs font-medium text-zinc-400 hover:text-white border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors" onclick="closeEditor()" type="button">Отмена</button>
<button className="flex-1 py-2.5 text-xs font-medium bg-white text-black rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-500/10" type="submit">Опубликовать</button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden overflow-y-auto" id="view-modal">
<div className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" onclick="closeViewModal()"></div>
<div className="relative min-h-screen flex items-center justify-center p-4">
<div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

<div className="sticky top-0 z-10 bg-zinc-900/95 backdrop-blur border-b border-zinc-800 p-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border" id="view-tag">TAG</span>
<span className="text-xs text-zinc-500" id="view-date">Date</span>
</div>
<button className="p-1 text-zinc-500 hover:text-white rounded-full hover:bg-zinc-800 transition" onclick="closeViewModal()"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>

<div className="overflow-y-auto p-0 scroll-smooth">
<img className="w-full h-auto max-h-80 object-cover hidden" id="view-image" src=""/>
<div className="p-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-4" id="view-title">Title</h2>
<p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap" id="view-content">Content</p>
<div className="flex items-center gap-6 mt-6 pt-4 border-t border-zinc-800 text-zinc-500">
<div className="flex items-center gap-1.5 text-xs">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
<span id="view-views-count">0</span>
</div>
<div className="flex items-center gap-1.5 text-xs">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon>
<span id="view-likes-count">0</span>
</div>
</div>
</div>

<div className="bg-zinc-950/50 p-6 border-t border-zinc-800">
<h3 className="text-sm font-medium text-white mb-4">Комментарии</h3>

<form className="mb-6 flex gap-3 items-start" onsubmit="submitComment(event)">
<div className="flex-grow space-y-2">
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-600" id="comment-guest-name" placeholder="Ваше имя" required="" type="text"/>
<textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-600 resize-none" id="comment-text" placeholder="Написать комментарий..." required="" rows="1"></textarea>
</div>
<button className="mt-8 p-2 bg-zinc-800 text-white rounded-lg hover:bg-indigo-600 transition-colors" type="submit">
<iconify-icon icon="lucide:send" width="14"></iconify-icon>
</button>
</form>

<div className="space-y-4" id="comments-list">

</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
