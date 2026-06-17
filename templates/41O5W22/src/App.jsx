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
      
        const sillyWords = [
            { id: 1, word: "Flibbertigibbet", definition: "A frivolous, flighty, or excessively talkative person", category: "sounds", emoji: "🗣️", isUserCreated: false, likes: 12, isFavorited: false },
            { id: 2, word: "Bumfuzzle", definition: "To confuse or fluster someone completely", category: "actions", emoji: "😵‍💫", isUserCreated: false, likes: 8, isFavorited: false },
            { id: 3, word: "Collywobbles", definition: "Stomach pain or queasiness, butterflies in your stomach", category: "sounds", emoji: "🦋", isUserCreated: false, likes: 15, isFavorited: false },
            { id: 4, word: "Brouhaha", definition: "A noisy and overexcited critical response or display of interest", category: "sounds", emoji: "📢", isUserCreated: false, likes: 6, isFavorited: false },
            { id: 5, word: "Snollygoster", definition: "A shrewd, unprincipled person, especially a politician", category: "things", emoji: "🎭", isUserCreated: false, likes: 20, isFavorited: false },
            { id: 6, word: "Widdershins", definition: "In a direction contrary to the sun's course; counterclockwise", category: "actions", emoji: "🌀", isUserCreated: false, likes: 4, isFavorited: false },
            { id: 7, word: "Taradiddle", definition: "A petty lie or pretentious nonsense", category: "things", emoji: "🤥", isUserCreated: false, likes: 11, isFavorited: false },
            { id: 8, word: "Snickersnee", definition: "A large knife, especially one used as a weapon", category: "things", emoji: "🔪", isUserCreated: false, likes: 7, isFavorited: false },
            { id: 9, word: "Gobbledygook", definition: "Language that is meaningless or hard to understand; nonsense", category: "sounds", emoji: "🤔", isUserCreated: false, likes: 18, isFavorited: false },
            { id: 10, word: "Kerfuffle", definition: "A commotion or fuss, especially one caused by conflicting views", category: "sounds", emoji: "💥", isUserCreated: false, likes: 14, isFavorited: false },
            { id: 11, word: "Bumbershoot", definition: "An umbrella (American slang)", category: "things", emoji: "☂️", isUserCreated: false, likes: 9, isFavorited: false },
            { id: 12, word: "Nincompoop", definition: "A foolish or stupid person", category: "things", emoji: "🤪", isUserCreated: false, likes: 13, isFavorited: false },
            { id: 13, word: "Hornswoggle", definition: "To get the better of someone by cheating or deception", category: "actions", emoji: "🎯", isUserCreated: false, likes: 5, isFavorited: false },
            { id: 14, word: "Cattywampus", definition: "Askew, awry, or diagonal; not lined up properly", category: "actions", emoji: "📐", isUserCreated: false, likes: 10, isFavorited: false },
            { id: 15, word: "Lollygag", definition: "To spend time aimlessly; to dawdle", category: "actions", emoji: "🐌", isUserCreated: false, likes: 16, isFavorited: false },
            { id: 16, word: "Whippersnapper", definition: "A young person considered to be presumptuous", category: "things", emoji: "👶", isUserCreated: false, likes: 3, isFavorited: false },
            { id: 17, word: "Shenanigans", definition: "Secret or dishonest activity or maneuvering", category: "actions", emoji: "🕵️", isUserCreated: false, likes: 22, isFavorited: false },
            { id: 18, word: "Hullabaloo", definition: "A commotion; a fuss; an uproar", category: "sounds", emoji: "🎪", isUserCreated: false, likes: 17, isFavorited: false },
            { id: 19, word: "Rigmarole", definition: "A lengthy and complicated procedure", category: "things", emoji: "🌀", isUserCreated: false, likes: 2, isFavorited: false },
            { id: 20, word: "Poppycock", definition: "Nonsense; something that is not true", category: "sounds", emoji: "🎈", isUserCreated: false, likes: 19, isFavorited: false },
            { id: 21, word: "Bumblebee", definition: "Not just the insect, but anything that bumbles around clumsily", category: "animals", emoji: "🐝", isUserCreated: false, likes: 25, isFavorited: false },
            { id: 22, word: "Dillydally", definition: "To waste time through aimless wandering or indecision", category: "actions", emoji: "⏰", isUserCreated: false, likes: 21, isFavorited: false }
        ];

        let filteredWords = [...sillyWords];
        let currentFilter = 'all';
        let selectedEmoji = '';
        let nextId = 23;

        function renderWords(words) {
            const grid = document.getElementById('wordsGrid');
            grid.innerHTML = '';
            
            words.forEach((wordObj, index) => {
                const wordCard = document.createElement('div');
                wordCard.className = `word-card bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up ${wordObj.isUserCreated ? 'ring-2 ring-pink-200' : ''}`;
                wordCard.style.animationDelay = `${(index % 6) * 0.1}s`;
                
                wordCard.innerHTML = `
                    <div class="flex items-start justify-between mb-4">
                        <span class="text-3xl">${wordObj.emoji}</span>
                        <div class="flex flex-col items-end gap-2">
                            <span class="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">${wordObj.category}</span>
                            ${wordObj.isUserCreated ? '<span class="px-2 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">Your Creation! ✨</span>' : ''}
                        </div>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">${wordObj.word}</h3>
                    <p class="text-gray-600 leading-relaxed mb-4">${wordObj.definition}</p>
                    
                    <!-- Like and Favorite buttons -->
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        <button onclick="toggleLike(${wordObj.id})" class="like-btn flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:bg-red-50 ${wordObj.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" ${wordObj.isLiked ? 'fill="currentColor"' : 'fill="none"'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-all duration-200">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
                            </svg>
                            <span class="font-medium text-sm">${wordObj.likes}</span>
                        </button>
                        
                        <button onclick="toggleFavorite(${wordObj.id})" class="favorite-btn p-2 rounded-full transition-all duration-200 hover:bg-yellow-50 ${wordObj.isFavorited ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ${wordObj.isFavorited ? 'fill="currentColor"' : 'fill="none"'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-all duration-200">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                            </svg>
                        </button>
                    </div>
                `;
                
                grid.appendChild(wordCard);
            });
        }

        function toggleLike(wordId) {
            const word = sillyWords.find(w => w.id === wordId);
            if (word) {
                if (word.isLiked) {
                    word.likes = Math.max(0, word.likes - 1);
                    word.isLiked = false;
                } else {
                    word.likes += 1;
                    word.isLiked = true;
                }
                
                // Add heart pulse animation
                const likeBtn = event.currentTarget;
                likeBtn.classList.add('heart-pulse');
                setTimeout(() => {
                    likeBtn.classList.remove('heart-pulse');
                }, 600);
                
                // Re-render if we're in the current filter
                applyCurrentFilter();
            }
        }

        function toggleFavorite(wordId) {
            const word = sillyWords.find(w => w.id === wordId);
            if (word) {
                word.isFavorited = !word.isFavorited;
                
                // Add star pulse animation
                const favoriteBtn = event.currentTarget;
                favoriteBtn.classList.add('star-pulse');
                setTimeout(() => {
                    favoriteBtn.classList.remove('star-pulse');
                }, 400);
                
                // Show toast
                showToast(word.isFavorited ? `"${word.word}" added to favorites! ⭐` : `"${word.word}" removed from favorites`, word.isFavorited ? 'success' : 'info');
                
                // Re-render if we're in the current filter
                applyCurrentFilter();
            }
        }

        function applyCurrentFilter() {
            if (currentFilter === 'all') {
                filteredWords = [...sillyWords];
            } else if (currentFilter === 'favorites') {
                filteredWords = sillyWords.filter(word => word.isFavorited);
            } else {
                filteredWords = sillyWords.filter(word => word.category === currentFilter);
            }
            
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            if (searchTerm) {
                filteredWords = filteredWords.filter(word => 
                    word.word.toLowerCase().includes(searchTerm) || 
                    word.definition.toLowerCase().includes(searchTerm)
                );
            }
            
            renderWords(filteredWords);
        }

        function filterWords(category) {
            currentFilter = category;
            
            // Update button styles
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-purple-500', 'text-white', 'bg-yellow-500');
                btn.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
            });
            
            if (category === 'favorites') {
                event.target.classList.add('active', 'bg-yellow-500', 'text-white');
                event.target.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
            } else {
                event.target.classList.add('active', 'bg-purple-500', 'text-white');
                event.target.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
            }
            
            applyCurrentFilter();
        }

        function searchWords() {
            applyCurrentFilter();
        }

        function openModal() {
            document.getElementById('wordModal').classList.remove('hidden');
            document.getElementById('wordModal').classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('wordModal').classList.add('hidden');
            document.getElementById('wordModal').classList.remove('flex');
            document.body.style.overflow = 'auto';
            resetForm();
        }

        function selectEmoji(emoji) {
            selectedEmoji = emoji;
            document.getElementById('emojiInput').value = emoji;
            
            // Update button styles
            document.querySelectorAll('.emoji-btn').forEach(btn => {
                btn.classList.remove('bg-purple-200', 'ring-2', 'ring-purple-400');
            });
            
            event.target.classList.add('bg-purple-200', 'ring-2', 'ring-purple-400');
        }

        function resetForm() {
            document.getElementById('wordForm').reset();
            selectedEmoji = '';
            document.querySelectorAll('.emoji-btn').forEach(btn => {
                btn.classList.remove('bg-purple-200', 'ring-2', 'ring-purple-400');
            });
        }

        function showToast(message, type = 'success') {
            const toast = document.getElementById('successToast');
            const span = toast.querySelector('span');
            span.textContent = message;
            
            // Update colors based on type
            if (type === 'info') {
                toast.className = toast.className.replace('bg-green-500', 'bg-blue-500');
            } else {
                toast.className = toast.className.replace('bg-blue-500', 'bg-green-500');
            }
            
            // Show toast
            toast.style.transform = 'translateX(0)';
            
            // Hide after 3 seconds
            setTimeout(() => {
                toast.style.transform = 'translateX(100%)';
            }, 3000);
        }

        // Handle form submission
        document.getElementById('wordForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const word = document.getElementById('wordInput').value.trim();
            const definition = document.getElementById('definitionInput').value.trim();
            const category = document.getElementById('categoryInput').value;
            const emoji = document.getElementById('emojiInput').value;
            
            if (word && definition && category && emoji) {
                const newWord = {
                    id: nextId++,
                    word: word,
                    definition: definition,
                    category: category,
                    emoji: emoji,
                    isUserCreated: true,
                    likes: 0,
                    isFavorited: false,
                    isLiked: false
                };
                
                sillyWords.unshift(newWord); // Add to beginning of array
                closeModal();
                applyCurrentFilter();
                showToast(`"${word}" has been added to the dictionary! 🎉`);
            }
        });

        // Handle search input
        document.getElementById('searchInput').addEventListener('input', function() {
            applyCurrentFilter();
        });

        // Handle click outside modal to close
        document.getElementById('wordModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Handle escape key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Initialize Lucide icons
        lucide.createIcons();

        // Initial render
        renderWords(sillyWords);
    
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
      
<div className="max-w-6xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">

<div className="text-center mb-12 animate-fade-in">
<h1 className="text-5xl text-gray-900 mb-4 tracking-tighter font-sans font-semibold">🤪 Silly Words Dictionary</h1>
<p className="max-w-2xl text-xl font-normal text-gray-600 mr-auto ml-auto">Discover the most wonderfully weird, delightfully daft, and hilariously bizarre words in the English language!</p>
</div>

<div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-100 mb-8 justify-center">

<div className="relative flex-1 max-w-xl">
<input className="w-full px-6 py-4 pr-12 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm" id="searchInput" placeholder="Search for silly words..." type="text"/>
<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
<svg className="lucide lucide-search w-6 h-6 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>

<button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap font-sans" onclick="openModal()">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add Your Silly Word
            </button>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up delay-200">
<button className="category-btn hover:bg-purple-600 transition-all duration-200 transform hover:scale-105 active font-medium text-white bg-purple-500 rounded-full pt-3 pr-6 pb-3 pl-6" onclick="filterWords('all')">All Words</button>
<button className="category-btn hover:bg-purple-50 hover:border-purple-200 transition-all duration-200 transform hover:scale-105 font-medium rounded-full pt-3 pr-6 pb-3 pl-6 bg-white text-gray-700 border border-gray-200" onclick="filterWords('sounds')">Funny Sounds</button>
<button className="category-btn px-6 py-3 rounded-full bg-white text-gray-700 border border-gray-200 font-medium hover:bg-purple-50 hover:border-purple-200 transition-all duration-200 transform hover:scale-105 font-sans" onclick="filterWords('animals')">Silly Animals</button>
<button className="category-btn px-6 py-3 rounded-full bg-white text-gray-700 border border-gray-200 font-medium hover:bg-purple-50 hover:border-purple-200 transition-all duration-200 transform hover:scale-105 font-sans" onclick="filterWords('actions')">Weird Actions</button>
<button className="category-btn px-6 py-3 rounded-full bg-white text-gray-700 border border-gray-200 font-medium hover:bg-purple-50 hover:border-purple-200 transition-all duration-200 transform hover:scale-105 font-sans" onclick="filterWords('things')">Strange Things</button>
<button className="category-btn px-6 py-3 rounded-full bg-white text-gray-700 border border-gray-200 font-medium hover:bg-yellow-50 hover:border-yellow-200 transition-all duration-200 transform hover:scale-105 font-sans flex items-center gap-2" onclick="filterWords('favorites')">
<svg className="lucide lucide-star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
                My Favorites
            </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="wordsGrid"></div>

<div className="mt-16 text-center animate-slide-up delay-500">
<div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-8 max-w-3xl mx-auto border border-yellow-200">
<h3 className="text-2xl text-gray-900 mb-4 tracking-tighter font-sans font-semibold">🎭 Fun Fact</h3>
<p className="text-gray-700 text-lg font-sans">The longest word in English that describes a fear is "hippopotomonstrosesquippedaliophobia" - which ironically means the fear of long words!</p>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/50 modal-backdrop hidden items-center justify-center p-4 z-50" id="wordModal">
<div className="bg-white rounded-3xl p-8 max-w-md w-full bounce-in">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl text-gray-900 tracking-tighter font-sans font-semibold">Create a Silly Word! 🎨</h2>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onclick="closeModal()">
<svg className="lucide lucide-x w-5 h-5 text-gray-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="space-y-5" id="wordForm">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Your Silly Word</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" id="wordInput" placeholder="e.g., Flibbernaught" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Definition</label>
<textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none" id="definitionInput" placeholder="What does your silly word mean?" required="" rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Category</label>
<select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" id="categoryInput" required="">
<option className="font-sans" value="">Choose a category</option>
<option className="font-sans" value="sounds">Funny Sounds</option>
<option className="font-sans" value="animals">Silly Animals</option>
<option className="font-sans" value="actions">Weird Actions</option>
<option className="font-sans" value="things">Strange Things</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2 font-sans">Pick an Emoji</label>
<div className="grid grid-cols-6 gap-2">
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🤪')" type="button">🤪</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('😵‍💫')" type="button">😵‍💫</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🎭')" type="button">🎭</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🌀')" type="button">🌀</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('✨')" type="button">✨</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🎪')" type="button">🎪</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🦄')" type="button">🦄</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🌈')" type="button">🌈</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🎨')" type="button">🎨</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🎯')" type="button">🎯</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('🚀')" type="button">🚀</button>
<button className="emoji-btn p-2 text-2xl hover:bg-purple-100 rounded-lg transition-colors" onclick="selectEmoji('⭐')" type="button">⭐</button>
</div>
<input id="emojiInput" required="" type="hidden"/>
</div>
<div className="flex gap-3 pt-4">
<button className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium font-sans" onclick="closeModal()" type="button">Cancel</button>
<button className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all font-medium font-sans" type="submit">Add Word! 🎉</button>
</div>
</form>
</div>
</div>

<div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transform translate-x-full transition-transform duration-300 z-50" id="successToast">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-sans">Your silly word has been added! 🎉</span>
</div>
</div>


    </>
  );
}
