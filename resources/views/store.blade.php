@extends('layouts.app')

@section('title', 'Gaming Store - Demo')

@section('content')
<div class="relative z-10" x-data="storeApp()" x-init="initStore()">
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-6 py-10">
        <!-- Categories Section -->
        <div class="mb-12">
            <h2 class="text-3xl font-bold text-white mb-6 animate__animated animate__fadeInUp">Shop by Category</h2>
            <div class="grid grid-cols-7 gap-4">
                <template x-for="(category, i) in categories" :key="category.slug">
                    <button @click="selectCategory(category.slug)"
                            :class="selectedCategory === category.slug ? 
                                    `bg-gradient-to-br ${category.gradient ?? 'from-blue-500 to-blue-600'} text-white border-transparent shadow-2xl` : 
                                    'bg-slate-800/40 hover:bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'"
                            class="relative p-6 rounded-2xl transition-all border-2 overflow-hidden group transform hover:scale-105 hover:-translate-y-1 animate__animated animate__fadeInUp"
                            :style="`animation-delay: ${i * 0.1}s`">
                        <div class="relative z-10">
                            <div class="flex justify-center mb-3">
                                <ion-icon :name="category.icon || 'cube-outline'" class="text-2xl"></ion-icon>
                            </div>
                            <div class="text-sm font-bold" x-text="category.name"></div>
                            <div class="text-xs opacity-70 mt-1" x-text="category.description"></div>
                        </div>
                        <div x-show="selectedCategory === category.slug" 
                             x-transition:enter="transition ease-out duration-300"
                             x-transition:enter-start="scale-0 opacity-0"
                             x-transition:enter-end="scale-100 opacity-100"
                             class="absolute inset-0 bg-white/10 rounded-2xl"></div>
                    </button>
                </template>
            </div>
        </div>

        <div class="grid grid-cols-12 gap-8">
            <!-- Filters Sidebar -->
            <div class="col-span-3">
                <div class="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-slate-800 sticky top-28 animate__animated animate__fadeInLeft">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <ion-icon name="filter-outline" class="text-xl text-blue-400"></ion-icon>
                        Filters
                    </h2>

                    <!-- Rarity Filter -->
                    <div class="mb-6">
                        <label class="block text-slate-300 text-sm font-medium mb-3">
                            Item Rarity
                        </label>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 cursor-pointer transition-all">
                                <input type="radio" name="rarity" value="all" x-model="selectedRarity" class="w-4 h-4 text-blue-600">
                                <span class="text-slate-300 font-medium">All</span>
                            </label>
                            <template x-for="rarity in rarities" :key="rarity.slug">
                                <label class="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 cursor-pointer transition-all">
                                    <input type="radio" name="rarity" :value="rarity.slug" x-model="selectedRarity" class="w-4 h-4 text-blue-600">
                                    <span class="" :class="`text-${rarity.color}-400 font-medium`" x-text="rarity.name"></span>
                                </label>
                            </template>
                        </div>
                    </div>

                    <!-- Price Range -->
                    <div class="mb-6">
                        <label class="block text-slate-300 text-sm font-medium mb-3">
                            Price Range
                        </label>
                        <div class="flex items-center gap-3">
                            <input type="number" x-model.number="priceRange.min"
                                   class="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                                   placeholder="Min">
                            <span class="text-slate-400">-</span>
                            <input type="number" x-model.number="priceRange.max"
                                   class="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                                   placeholder="Max">
                        </div>
                    </div>

                    <!-- Sort Options -->
                    <div class="mb-6">
                        <label class="block text-slate-300 text-sm font-medium mb-3">
                            Sort By
                        </label>
                        <select x-model="sortBy"
                                class="w-full bg-slate-800/60 border border-slate-700 rounded-lg text-white px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/30 transition-all">
                            <option value="featured">Featured First</option>
                            <option value="price_low">Price: Low to High</option>
                            <option value="price_high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                            <option value="name">Name A-Z</option>
                        </select>
                    </div>

                    <!-- Clear Filters -->
                    <button @click="clearFilters()"
                            class="w-full py-3 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 font-medium rounded-lg transition-all">
                        Clear All Filters
                    </button>
                </div>
            </div>

            <!-- Products Grid -->
            <div class="col-span-9">
                <!-- Results Header -->
                <div class="flex items-center justify-between mb-8 animate__animated animate__fadeInRight">
                    <div>
                        <h2 class="text-3xl font-bold text-white mb-2" x-text="getCategoryName()"></h2>
                        <p class="text-slate-400" x-text="filteredProducts.length + ' items available'"></p>
                    </div>
                    
                    <!-- Quick Stats -->
                    <div class="flex gap-8">
                        <div class="text-center">
                            <div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent" x-text="featuredCount()"></div>
                            <div class="text-xs text-slate-400 uppercase tracking-wide">Featured</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent" x-text="lootboxCount()"></div>
                            <div class="text-xs text-slate-400 uppercase tracking-wide">Mystery</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent" x-text="legendaryCount()"></div>
                            <div class="text-xs text-slate-400 uppercase tracking-wide">Legendary</div>
                        </div>
                    </div>
                </div>

                <!-- Product Cards -->
                <div class="grid grid-cols-2 gap-6">
                    <template x-for="(product, index) in filteredProducts" :key="product.id">
                        <div @click="openProductModal(product)"
                             class="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-md border-2 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-2 animate__animated animate__fadeInUp"
                             :class="getRarityBorderClass(product.rarity)"
                             :style="`animation-delay: ${index * 0.05}s`">
                            
                            <!-- Image -->
                            <div class="relative h-72 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <!-- Badges -->
                                <div class="absolute top-4 left-4 right-4 flex justify-between items-start">
                                    <div class="flex flex-col gap-2">
                                        <div x-show="product.featured" class="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate__animated animate__pulse animate__infinite">
                                            <ion-icon name="star" class="text-lg"></ion-icon>
                                            Featured
                                        </div>
                                        <div x-show="product.type === 'lootbox'" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                                            <ion-icon name="gift-outline" class="text-lg"></ion-icon>
                                            Mystery
                                        </div>
                                    </div>

                                    <div x-show="product.stock_type === 'limited'" class="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-bold animate__animated animate__flash animate__infinite" x-text="product.stock_quantity + ' left'"></div>
                                </div>

                                <!-- Quick Actions -->
                                <div class="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button @click.stop="toggleWishlist(product)" class="p-3 bg-black/60 text-white hover:bg-red-500/80 rounded-xl backdrop-blur-sm transition-all transform hover:scale-110">
                                        <ion-icon :name="isInWishlist(product) ? 'heart' : 'heart-outline'" class="text-xl"></ion-icon>
                                    </button>
                                    <button @click.stop="addToCart(product)" class="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl backdrop-blur-sm transition-all transform hover:scale-110">
                                        <ion-icon name="bag-add-outline" class="text-xl"></ion-icon>
                                    </button>
                                </div>
                            </div>

                            <div class="p-6">
                                <!-- Header -->
                                <div class="flex items-start justify-between mb-4">
                                    <div class="flex-1">
                                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors" x-text="product.name"></h3>
                                        <p class="text-slate-400 text-sm line-clamp-2" x-text="product.description"></p>
                                    </div>
                                </div>

                                <!-- Stats -->
                                <div class="flex items-center gap-4 mb-4">
                                    <div class="px-4 py-2 rounded-full text-sm font-bold border"
                                         :class="getRarityClass(product.rarity)">
                                        <span x-text="(getRarityObj(product.rarity)?.name || 'Common').toUpperCase()"></span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <ion-icon name="star" class="text-yellow-400"></ion-icon>
                                        <span class="text-white text-sm font-medium" x-text="product.rating"></span>
                                        <span class="text-slate-500 text-sm" x-text="`(${product.reviews_count})`"></span>
                                    </div>
                                </div>

                                <!-- Items Preview -->
                                <div class="mb-5">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-sm text-slate-400" x-text="product.type === 'lootbox' ? 'Possible Rewards' : 'Included Items'"></span>
                                        <span class="text-xs text-slate-500" x-text="(product.items?.length || 0) + ' items'"></span>
                                    </div>
                                    <div class="grid grid-cols-6 gap-2">
                                        <template x-for="(item, idx) in (product.items || []).slice(0,5)" :key="idx">
                                            <div class="relative group/item">
                                                <div class="w-full aspect-square rounded-lg overflow-hidden border-2" :class="itemBorderClass(item.rarity)">
                                                    <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                                                </div>
                                                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-20">
                                                    <div class="bg-black/90 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                                                        <div class="font-bold" x-text="item.name"></div>
                                                        <div class="text-slate-300" x-show="product.type === 'lootbox' && item.drop_rate" x-text="item.drop_rate + '% chance'"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <div class="w-full aspect-square rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-slate-600 flex items-center justify-center" x-show="(product.items?.length || 0) > 5">
                                            <span class="text-sm text-slate-300 font-bold" x-text="'+' + ((product.items?.length || 0) - 5)"></span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Price & Action -->
                                <div class="flex items-end justify-between pt-4 border-t border-slate-800">
                                    <div>
                                        <div class="text-sm text-slate-400 mb-1">Price</div>
                                        <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" x-text="'$' + product.price"></div>
                                    </div>
                                    <button @click.stop="addToCart(product)"
                                            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 transform hover:scale-105">
                                        <ion-icon name="bag-add-outline" class="text-xl"></ion-icon>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <!-- No products -->
                <div x-show="filteredProducts.length === 0" x-transition class="text-center py-20 animate__animated animate__fadeIn">
                    <ion-icon name="cube-outline" class="text-8xl text-slate-700 mx-auto mb-6"></ion-icon>
                    <h3 class="text-2xl font-bold text-slate-300 mb-3">No products found</h3>
                    <p class="text-slate-500 mb-8 max-w-md mx-auto">Try adjusting your filters or search term to find what you're looking for</p>
                    <button @click="clearFilters()"
                            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
                        Clear All Filters
                    </button>
                </div>
            </div>
        </div>
    </main>

    <!-- Product Modal -->
    <div x-show="showProductModal" 
         x-transition:enter="transition ease-out duration-300"
         x-transition:enter-start="opacity-0"
         x-transition:enter-end="opacity-100"
         x-transition:leave="transition ease-in duration-200"
         x-transition:leave-start="opacity-100"
         x-transition:leave-end="opacity-0"
         class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
         @click="closeProductModal()">
        
        <div x-show="showProductModal && selectedProduct" 
             x-transition:enter="transition ease-out duration-300 delay-150"
             x-transition:enter-start="scale-90 translate-y-5"
             x-transition:enter-end="scale-100 translate-y-0"
             x-transition:leave="transition ease-in duration-200"
             x-transition:leave-start="scale-100 translate-y-0"
             x-transition:leave-end="scale-90 translate-y-5"
             class="bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
             @click.stop>
            
            <div class="p-8">
                <!-- Modal Header -->
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <h2 class="text-3xl font-bold text-white" x-text="selectedProduct?.name"></h2>
                        <div class="px-4 py-2 rounded-full text-sm font-bold" :class="getRarityClass(selectedProduct?.rarity)" x-text="(getRarityObj(selectedProduct?.rarity)?.name || 'COMMON').toUpperCase()"></div>
                        <div x-show="selectedProduct?.type === 'lootbox'" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                            <ion-icon name="gift-outline" class="text-lg"></ion-icon>
                            Mystery Box
                        </div>
                    </div>
                    <button @click="closeProductModal()" class="p-3 hover:bg-slate-700/50 rounded-xl transition-colors">
                        <ion-icon name="close-outline" class="text-2xl text-slate-400"></ion-icon>
                    </button>
                </div>

                <div class="grid grid-cols-2 gap-10">
                    <!-- Gallery -->
                    <div class="space-y-4">
                        <div class="relative">
                            <img :src="selectedProduct?.image" :alt="selectedProduct?.name" class="w-full h-[400px] object-cover rounded-2xl">
                            <div class="absolute inset-0 rounded-2xl ring-4 ring-opacity-30" :class="getRarityBorderClass(selectedProduct?.rarity)"></div>
                        </div>
                        
                        <!-- Stats -->
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                <div class="flex items-center gap-2 mb-2">
                                    <ion-icon name="star" class="text-xl text-yellow-400"></ion-icon>
                                    <span class="text-slate-300 text-sm">Rating</span>
                                </div>
                                <div class="text-2xl font-bold text-white" x-text="selectedProduct?.rating + '/5'"></div>
                                <div class="text-slate-400 text-sm" x-text="selectedProduct?.reviews_count + ' reviews'"></div>
                            </div>
                            
                            <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                <div class="flex items-center gap-2 mb-2">
                                    <ion-icon name="cube-outline" class="text-xl text-blue-400"></ion-icon>
                                    <span class="text-slate-300 text-sm">Category</span>
                                </div>
                                <div class="text-2xl font-bold text-white capitalize" x-text="selectedProduct?.category?.slug"></div>
                                <div class="text-slate-400 text-sm" x-text="getCategoryName(selectedProduct?.category?.slug)"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Info -->
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold text-slate-300 mb-2">Description</h3>
                            <p class="text-slate-400 leading-relaxed" x-text="selectedProduct?.description"></p>
                        </div>

                        <div x-show="(selectedProduct?.level_requirement || 0) > 0" class="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl">
                            <div class="flex items-center gap-2 text-amber-400">
                                <ion-icon name="warning-outline" class="text-xl"></ion-icon>
                                <span class="font-medium" x-text="'Level ' + selectedProduct?.level_requirement + '+ Required'"></span>
                            </div>
                        </div>

                        <!-- Tags -->
                        <div>
                            <h3 class="text-lg font-semibold text-slate-300 mb-3">Tags</h3>
                            <div class="flex flex-wrap gap-2">
                                <template x-for="tag in (selectedProduct?.tags || [])" :key="tag">
                                    <span class="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700" x-text="'#' + tag"></span>
                                </template>
                            </div>
                        </div>

                        <!-- Price -->
                        <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700">
                            <div class="flex items-end justify-between mb-6">
                                <div>
                                    <div class="text-sm text-slate-400 mb-2">Price</div>
                                    <div class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" x-text="'$' + selectedProduct?.price"></div>
                                </div>
                                <div class="text-right" x-show="selectedProduct?.stock_type === 'limited'">
                                    <div class="text-orange-400 text-sm font-medium" x-text="'Only ' + selectedProduct?.stock_quantity + ' left!'"></div>
                                </div>
                            </div>

                            <div class="flex gap-3">
                                <button @click="addToCart(selectedProduct); closeProductModal()"
                                        class="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg">
                                    <span x-show="selectedProduct?.type === 'lootbox'" class="flex items-center justify-center gap-2">
                                        <ion-icon name="gift-outline" class="text-xl"></ion-icon>
                                        Open Mystery Box
                                    </span>
                                    <span x-show="selectedProduct?.type !== 'lootbox'" class="flex items-center justify-center gap-2">
                                        <ion-icon name="bag-add-outline" class="text-xl"></ion-icon>
                                        Add to Cart
                                    </span>
                                </button>
                                
                                <button @click="toggleWishlist(selectedProduct)"
                                        :class="isInWishlist(selectedProduct) ? 'bg-red-500 border-red-500 text-white' : 'bg-transparent border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-500'"
                                        class="px-6 py-4 rounded-xl transition-all border-2">
                                    <ion-icon :name="isInWishlist(selectedProduct) ? 'heart' : 'heart-outline'" class="text-xl"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Items -->
                <div class="mt-10">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span x-show="selectedProduct?.type === 'lootbox'">
                            <ion-icon name="gift-outline" class="text-2xl text-purple-400"></ion-icon>
                            Mystery Box Contents
                            <span class="text-sm text-slate-400 font-normal">(You'll receive ONE random item)</span>
                        </span>
                        <span x-show="selectedProduct?.type !== 'lootbox'">
                            <ion-icon name="cube-outline" class="text-2xl text-blue-400"></ion-icon>
                            Bundle Contents
                            <span class="text-sm text-slate-400 font-normal">(You'll receive ALL items)</span>
                        </span>
                    </h3>

                    <div class="grid grid-cols-3 gap-4">
                        <template x-for="(item, idx) in (selectedProduct?.items || [])" :key="idx">
                            <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/30 transition-all animate__animated animate__fadeInUp"
                                 :style="`animation-delay: ${idx * 0.1}s`">
                                <div class="w-full h-32 rounded-lg overflow-hidden mb-4">
                                    <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                                </div>
                                <h4 class="text-white font-semibold text-center mb-3" x-text="item.name"></h4>
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-400">Quantity:</span>
                                        <span class="text-white font-medium" x-text="'x' + (item.quantity || 1)"></span>
                                    </div>
                                    <div x-show="selectedProduct?.type === 'lootbox'" class="flex justify-between items-center">
                                        <span class="text-slate-400">Drop Rate:</span>
                                        <span class="text-green-400 font-medium" x-text="(item.drop_rate || 0) + '%'"></span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-400">Duration:</span>
                                        <div class="flex items-center gap-1" x-show="item.duration_type === 'temporary'">
                                            <ion-icon name="time-outline" class="text-amber-400"></ion-icon>
                                            <span class="text-amber-400" x-text="(item.duration_value || 7) + ' days'"></span>
                                        </div>
                                        <div class="flex items-center gap-1" x-show="item.duration_type === 'permanent' || !item.duration_type">
                                            <ion-icon name="infinite-outline" class="text-green-400"></ion-icon>
                                            <span class="text-green-400">Permanent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

@push('scripts')
<!-- Alpine.js (CDN) -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<!-- Animate.css (CDN) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css">
<!-- Ionicons (CDN) -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

<script>
function storeApp() {
    // ---------- Demo Seeds (Self-contained) ----------
    const rarities = [
        { slug:'common',     name:'Common',    color:'gray',   bg_class:'bg-slate-900/90', border_class:'border border-slate-500', text_color:'text-slate-300' },
        { slug:'uncommon',   name:'Uncommon',  color:'green',  bg_class:'bg-green-900/40', border_class:'border border-green-500', text_color:'text-green-300' },
        { slug:'rare',       name:'Rare',      color:'blue',   bg_class:'bg-blue-900/40',  border_class:'border border-blue-500',  text_color:'text-blue-300' },
        { slug:'epic',       name:'Epic',      color:'purple', bg_class:'bg-purple-900/40',border_class:'border border-purple-500',text_color:'text-purple-300' },
        { slug:'legendary',  name:'Legendary', color:'yellow', bg_class:'bg-amber-900/40', border_class:'border border-yellow-500',text_color:'text-amber-300' },
    ];

    const categories = [
        { slug:'all',       name:'All',        description:'Everything',  icon:'grid-outline',   gradient:'from-slate-600 to-slate-700' },
        { slug:'weapons',   name:'Weapons',    description:'Guns & ammo', icon:'flash-outline',  gradient:'from-red-500 to-orange-600' },
        { slug:'vehicles',  name:'Vehicles',   description:'Cars & bikes',icon:'car-sport-outline', gradient:'from-indigo-500 to-blue-600' },
        { slug:'skins',     name:'Skins',      description:'Cosmetics',   icon:'color-palette-outline', gradient:'from-pink-500 to-rose-600' },
        { slug:'utilities', name:'Utilities',  description:'Tools & passes', icon:'construct-outline', gradient:'from-emerald-500 to-teal-600' },
        { slug:'bundles',   name:'Bundles',    description:'Packs',       icon:'cube-outline',   gradient:'from-purple-500 to-fuchsia-600' },
        { slug:'coins',     name:'Coins',      description:'Top-up',      icon:'logo-bitcoin',   gradient:'from-amber-500 to-yellow-600' },
    ];

    const sampleItems = [
        { name:'Desert Eagle', image:'https://picsum.photos/seed/deagle/300/300', rarity:'epic',        drop_rate:5,  quantity:1, duration_type:'permanent' },
        { name:'AK-47',        image:'https://picsum.photos/seed/ak47/300/300',  rarity:'legendary',   drop_rate:2,  quantity:1, duration_type:'permanent' },
        { name:'UZI',          image:'https://picsum.photos/seed/uzi/300/300',   rarity:'rare',        drop_rate:10, quantity:1, duration_type:'permanent' },
        { name:'Kevlar Vest',  image:'https://picsum.photos/seed/vest/300/300',  rarity:'uncommon',    drop_rate:20, quantity:1, duration_type:'temporary', duration_value:7 },
        { name:'Medkit',       image:'https://picsum.photos/seed/med/300/300',   rarity:'common',      drop_rate:30, quantity:2, duration_type:'temporary', duration_value:3 },
        { name:'Smoke Grenade',image:'https://picsum.photos/seed/smoke/300/300', rarity:'rare',        drop_rate:15, quantity:3, duration_type:'temporary', duration_value:1 },
    ];

    const products = [
        {
            id:1,
            name:'Starter Weapon Bundle',
            description:'Perfect pack to kickstart your journey: pistol, medkits, and armor.',
            image:'https://picsum.photos/seed/bundle1/800/600',
            price:9.99,
            rating:4.6,
            reviews_count:128,
            type:'bundle',
            featured:true,
            stock_type:'unlimited',
            stock_quantity:null,
            rarity:'uncommon',
            category:{ slug:'bundles', name:'Bundles' },
            items: sampleItems.slice(0,5),
            tags:['starter','weapons','bundle']
        },
        {
            id:2,
            name:'Legendary Mystery Crate',
            description:'One random legendary-tier reward. Ultra low drop rates, massive flex.',
            image:'https://picsum.photos/seed/crate1/800/600',
            price:24.99,
            rating:4.9,
            reviews_count:512,
            type:'lootbox',
            featured:true,
            stock_type:'limited',
            stock_quantity:12,
            rarity:'legendary',
            category:{ slug:'weapons', name:'Weapons' },
            items: sampleItems,
            level_requirement:10,
            tags:['legendary','mystery','crate']
        },
        {
            id:3,
            name:'Street Racer Car',
            description:'A tuned street racer with high acceleration and stylish body kit.',
            image:'https://picsum.photos/seed/car1/800/600',
            price:49.99,
            rating:4.3,
            reviews_count:74,
            type:'item',
            featured:false,
            stock_type:'unlimited',
            stock_quantity:null,
            rarity:'epic',
            category:{ slug:'vehicles', name:'Vehicles' },
            items:[ { name:'Street Racer', image:'https://picsum.photos/seed/caronly/300/300', rarity:'epic', quantity:1, duration_type:'permanent' } ],
            tags:['vehicle','racing']
        },
        {
            id:4,
            name:'Urban Camo Skin Pack',
            description:'Cosmetic skins for urban operations. No gameplay advantage.',
            image:'https://picsum.photos/seed/skin1/800/600',
            price:5.99,
            rating:4.1,
            reviews_count:33,
            type:'bundle',
            featured:false,
            stock_type:'unlimited',
            stock_quantity:null,
            rarity:'rare',
            category:{ slug:'skins', name:'Skins' },
            items:[
                { name:'Urban Camo Suit', image:'https://picsum.photos/seed/skinA/300/300', rarity:'rare', quantity:1, duration_type:'permanent' },
                { name:'Urban Mask', image:'https://picsum.photos/seed/skinB/300/300', rarity:'uncommon', quantity:1, duration_type:'permanent' },
            ],
            tags:['cosmetic','skin']
        },
        {
            id:5,
            name:'Utility Pass (7 days)',
            description:'Access to fast travel, extra storage, and priority queue for 7 days.',
            image:'https://picsum.photos/seed/util1/800/600',
            price:3.99,
            rating:3.9,
            reviews_count:19,
            type:'item',
            featured:false,
            stock_type:'unlimited',
            stock_quantity:null,
            rarity:'uncommon',
            category:{ slug:'utilities', name:'Utilities' },
            items:[ { name:'Utility Pass', image:'https://picsum.photos/seed/pass/300/300', rarity:'uncommon', quantity:1, duration_type:'temporary', duration_value:7 } ],
            tags:['pass','utility']
        },
        {
            id:6,
            name:'Gold Coins 1,000',
            description:'Top up your wallet with 1,000 in-game coins.',
            image:'https://picsum.photos/seed/coins1/800/600',
            price:7.99,
            rating:4.8,
            reviews_count:201,
            type:'item',
            featured:true,
            stock_type:'unlimited',
            stock_quantity:null,
            rarity:'rare',
            category:{ slug:'coins', name:'Coins' },
            items:[ { name:'1,000 Coins', image:'https://picsum.photos/seed/coins/300/300', rarity:'rare', quantity:1000, duration_type:'permanent' } ],
            tags:['topup','coins']
        },
    ];

    return {
        // UI State
        selectedCategory: 'all',
        selectedRarity: 'all',
        priceRange: { min: 0, max: 1000 },
        sortBy: 'featured',
        showProductModal: false,
        selectedProduct: null,

        // Data
        products: products,
        categories: categories,
        rarities: rarities,

        // Cart & Wishlist (localStorage)
        cartItems: [],
        wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),

        // Computed
        get filteredProducts() {
            let filtered = this.products.filter(p => {
                const matchesCategory = this.selectedCategory === 'all' || p.category?.slug === this.selectedCategory;
                const matchesRarity  = this.selectedRarity === 'all' || p.rarity === this.selectedRarity;
                const matchesPrice   = (p.price ?? 0) >= (this.priceRange.min ?? 0) && (p.price ?? 0) <= (this.priceRange.max ?? Infinity);
                return matchesCategory && matchesRarity && matchesPrice;
            });
            return filtered.sort((a,b)=>{
                switch (this.sortBy) {
                    case 'price_low':  return (a.price??0) - (b.price??0);
                    case 'price_high': return (b.price??0) - (a.price??0);
                    case 'name':       return (a.name||'').localeCompare(b.name||'');
                    case 'rating':     return (b.rating??0) - (a.rating??0);
                    case 'featured':
                    default:           return (b.featured?1:0) - (a.featured?1:0);
                }
            });
        },

        // Init
        initStore() {
            this.loadCartItems();
        },

        // Helpers
        selectCategory(slug) { this.selectedCategory = slug; },
        getCategoryName(slug = null) {
            const s = slug || this.selectedCategory;
            if (s === 'all') return 'All Products';
            return this.categories.find(c=>c.slug===s)?.name || 'Products';
        },
        getRarityObj(slug) { return this.rarities.find(r=>r.slug===slug); },
        getRarityClass(slug) {
            const r = this.getRarityObj(slug);
            return r ? `${r.bg_class} ${r.border_class} ${r.text_color}` : 'bg-gray-900/90 border-gray-500 text-gray-400';
        },
        getRarityBorderClass(slug) {
            const r = this.getRarityObj(slug);
            return r ? r.border_class : 'border-gray-500';
        },
        itemBorderClass(raritySlug) {
            const map = { legendary:'border-yellow-500', epic:'border-purple-500', rare:'border-blue-500', uncommon:'border-green-500', common:'border-gray-500' };
            return map[raritySlug] || 'border-gray-500';
        },

        // Stats
        featuredCount(){ return this.products.filter(p=>p.featured).length; },
        lootboxCount(){ return this.products.filter(p=>p.type==='lootbox').length; },
        legendaryCount(){ return this.products.filter(p=>p.rarity==='legendary').length; },

        // Modal
        openProductModal(product){ this.selectedProduct = product; this.showProductModal = true; document.body.style.overflow='hidden'; },
        closeProductModal(){ this.showProductModal = false; this.selectedProduct=null; document.body.style.overflow='auto'; },

        // Cart (Local only)
        addToCart(product){
            const idx = this.cartItems.findIndex(i=>i.id===product.id);
            if (idx>-1) this.cartItems[idx].quantity += 1;
            else this.cartItems.push({ id:product.id, name:product.name, price:product.price, quantity:1 });
            this.persistCart();
            this.showNotification('Product added to cart!','success');
        },
        removeFromCart(productId){
            this.cartItems = this.cartItems.filter(i=>i.id!==productId);
            this.persistCart();
            this.showNotification('Product removed from cart!','success');
        },
        loadCartItems(){
            try { this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]'); }
            catch { this.cartItems = []; }
        },
        persistCart(){ localStorage.setItem('cart','[]'); localStorage.setItem('cart', JSON.stringify(this.cartItems)); },

        // Demo checkout
        checkout(){
            if (!this.cartItems.length) return this.showNotification('Your cart is empty','error');
            this.showNotification('Order placed successfully! (demo)','success');
            this.cartItems = [];
            this.persistCart();
        },

        // Wishlist
        toggleWishlist(product){
            const i = this.wishlist.findIndex(x=>x.id===product.id);
            if (i>-1) this.wishlist.splice(i,1); else this.wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
        },
        isInWishlist(product){ return this.wishlist.some(x=>x.id===product.id); },

        // Filters
        clearFilters(){
            this.selectedCategory='all';
            this.selectedRarity='all';
            this.priceRange={min:0,max:1000};
            this.sortBy='featured';
        },

        // Toast
        showNotification(message, type='info'){
            const el = document.createElement('div');
            el.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
                type==='success' ? 'bg-green-500 text-white' :
                type==='error'   ? 'bg-red-500 text-white' :
                                   'bg-blue-500 text-white'
            }`;
            el.textContent = message;
            document.body.appendChild(el);
            setTimeout(()=>{ el.style.transform='translateX(100%)'; setTimeout(()=>el.remove(),300); }, 3000);
        },
    }
}
</script>
@endpush
@endsection
