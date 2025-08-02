<!-- Animated Background Particles -->
<div class="fixed inset-0 z-0" x-data="particles()" x-init="initParticles()">
    <template x-for="particle in particles" :key="particle.id">
        <div class="absolute w-1 h-1 bg-blue-400 rounded-full blur-sm animate-pulse"
             :style="`left: ${particle.x}px; top: ${particle.y}px; opacity: ${particle.opacity}`"></div>
    </template>
</div>

<!-- Custom Gaming Background -->
@if(isset($storeSettings['background']))
<div class="fixed inset-0 z-0">
    <img src="{{ $storeSettings['background'] }}" 
         alt="Store Background" 
         class="w-full h-full object-cover"
         style="opacity: {{ $storeSettings['background_opacity'] ?? 0.1 }}">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90"></div>
</div>
@endif

<!-- Enhanced Gaming Banner -->
@if(isset($storeSettings['banner']) && ($storeSettings['header_style'] ?? 'banner') === 'banner')
<div class="relative h-[600px] overflow-hidden">
    <img src="{{ $storeSettings['banner'] }}" 
         alt="Store Banner"
         class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
    
    <!-- Enhanced Store Info Overlay -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div class="relative animate__animated animate__fadeInUp">
            <!-- Server Logo with Enhanced Glow Effect -->
            <div class="relative mb-10">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-60 animate-pulse-glow"></div>
                <img src="{{ $storeSettings['logo'] ?? '' }}" 
                     alt="Store Logo"
                     class="relative w-36 h-36 rounded-full border-4 border-white/20 shadow-2xl">
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-gradient"></div>
            </div>
            
            <!-- Enhanced Server Name -->
            <div class="mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                <h1 class="text-7xl font-black mb-3 tracking-tight">
                    <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient uppercase">
                        {{ $storeSettings['name'] ?? 'Gaming Store' }}
                    </span>
                </h1>
                <div class="flex items-center justify-center gap-6 text-blue-300">
                    <div class="h-[1px] w-20 bg-gradient-to-r from-transparent to-blue-300"></div>
                    <span class="text-xl font-bold tracking-[0.3em] uppercase">FiveM Server</span>
                    <div class="h-[1px] w-20 bg-gradient-to-l from-transparent to-blue-300"></div>
                </div>
            </div>
            
            <p class="text-2xl text-blue-100 mb-10 font-medium max-w-3xl animate__animated animate__fadeInUp animate__delay-2s"
               style="text-shadow: 2px 2px 4px rgba(0,0,0,0.8)">
                {{ $storeSettings['tagline'] ?? 'Premium Gaming Experience' }}
            </p>

            <!-- Call to Action Buttons -->
            <div class="flex gap-6 justify-center mb-12 animate__animated animate__fadeInUp animate__delay-3s">
                <a href="{{ route('store.index') }}" 
                   class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
                    <ion-icon name="game-controller-outline" class="text-xl"></ion-icon>
                    Browse Store
                    <ion-icon name="arrow-forward-outline" class="text-xl"></ion-icon>
                </a>
                <a href="{{ $storeSettings['contact']['discord'] ?? '#' }}" 
                   class="px-8 py-4 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white font-bold rounded-xl transition-all border border-white/20 flex items-center gap-3">
                    <ion-icon name="chatbubbles-outline" class="text-xl"></ion-icon>
                    Join Discord
                </a>
            </div>

            <!-- Feature Highlights -->
            <div class="grid grid-cols-4 gap-8 max-w-4xl mx-auto animate__animated animate__fadeInUp animate__delay-4s">
                <div class="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                    <ion-icon name="diamond-outline" class="text-3xl text-blue-400 mx-auto mb-2"></ion-icon>
                    <div class="text-sm font-bold text-white">Premium Items</div>
                </div>
                <div class="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all">
                    <ion-icon name="shield-checkmark-outline" class="text-3xl text-green-400 mx-auto mb-2"></ion-icon>
                    <div class="text-sm font-bold text-white">Secure Trading</div>
                </div>
                <div class="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <ion-icon name="flash-outline" class="text-3xl text-purple-400 mx-auto mb-2"></ion-icon>
                    <div class="text-sm font-bold text-white">Instant Delivery</div>
                </div>
                <div class="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                    <ion-icon name="people-outline" class="text-3xl text-amber-400 mx-auto mb-2"></ion-icon>
                    <div class="text-sm font-bold text-white">24/7 Support</div>
                </div>
            </div>
        </div>
    </div>
</div>
@endif

<!-- Enhanced Gaming Header -->
<header class="bg-black/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40" 
        x-data="{ showCart: false, searchTerm: '', cartItems: {{ json_encode($cartItems ?? []) }} }">
    <div class="max-w-7xl mx-auto px-6 py-5">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-8">
                <!-- Logo & Brand -->
                <div class="flex items-center gap-3">
                    <img src="{{ $storeSettings['logo'] ?? '' }}" 
                         alt="Logo"
                         class="w-10 h-10 rounded-full border-2 border-blue-500/30">
                    <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {{ $storeSettings['name'] ?? 'Gaming Store' }}
                    </span>
                </div>

                <!-- Gaming Search Bar -->
                <div class="relative">
                    <ion-icon name="search-outline" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl pointer-events-none"></ion-icon>
                    <input type="text" 
                           x-model="searchTerm"
                           placeholder="Search for items..."
                           class="pl-12 bg-slate-800/60 border border-slate-700 rounded-xl text-white px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all w-96 backdrop-blur-sm">
                    <button x-show="searchTerm" 
                            @click="searchTerm = ''"
                            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white">
                        <ion-icon name="close-outline" class="text-lg"></ion-icon>
                    </button>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <!-- Player Profile -->
                @auth
                <a href="{{ route('profile.index') }}" 
                   class="flex items-center gap-3 bg-slate-800/60 hover:bg-slate-700/60 px-5 py-2.5 rounded-xl transition-all border border-slate-700 backdrop-blur-sm">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                            <span class="text-white font-bold text-sm">{{ auth()->user()->level ?? 1 }}</span>
                        </div>
                        <div class="text-left">
                            <div class="text-white text-sm font-medium">{{ auth()->user()->username ?? auth()->user()->name }}</div>
                            <div class="text-slate-400 text-xs">View Profile</div>
                        </div>
                    </div>
                </a>
                @endauth

                <!-- Cart Button -->
                <button @click="showCart = !showCart"
                        class="relative bg-slate-800/60 hover:bg-slate-700/60 p-3 rounded-xl transition-all border border-slate-700 backdrop-blur-sm group">
                    <ion-icon name="bag-outline" class="text-xl text-slate-300 group-hover:text-white transition-colors"></ion-icon>
                    <span x-show="cartItems.length > 0" 
                          x-text="cartItems.length"
                          class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate__animated animate__bounceIn"></span>
                </button>

                <!-- Login/Register Button -->
                @guest
                <a href="/login" 
                   class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg transform hover:scale-105">
                    Login / Register
                </a>
                @else
                <form action="/logout" method="POST" class="inline">
                    @csrf
                    <button type="submit" 
                            class="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg transform hover:scale-105">
                        Logout
                    </button>
                </form>
                @endguest
            </div>
        </div>
    </div>

    <!-- Cart Sidebar -->
    <div x-show="showCart" 
         x-transition:enter="transform transition ease-in-out duration-500"
         x-transition:enter-start="translate-x-full"
         x-transition:enter-end="translate-x-0"
         x-transition:leave="transform transition ease-in-out duration-500"
         x-transition:leave-start="translate-x-0"
         x-transition:leave-end="translate-x-full"
         class="fixed top-0 right-0 w-[450px] h-full bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border-l border-slate-800 z-50 overflow-y-auto"
         @click.away="showCart = false">
        <div class="p-6">
            <div class="flex items-center justify-between mb-8">
                <h2 class="text-2xl font-bold text-white flex items-center gap-3">
                    <ion-icon name="bag-outline" class="text-2xl text-blue-400"></ion-icon>
                    Shopping Cart
                </h2>
                <button @click="showCart = false" 
                        class="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                    <ion-icon name="close-outline" class="text-xl text-slate-400"></ion-icon>
                </button>
            </div>

            <template x-if="cartItems.length === 0">
                <div class="text-center py-20">
                    <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800/50 flex items-center justify-center">
                        <ion-icon name="bag-outline" class="text-5xl text-slate-600"></ion-icon>
                    </div>
                    <p class="text-slate-300 text-xl mb-3">Your cart is empty</p>
                    <p class="text-slate-500 text-sm mb-8">Add some awesome items to get started!</p>
                    <button @click="showCart = false"
                            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
                        Continue Shopping
                    </button>
                </div>
            </template>

            <template x-if="cartItems.length > 0">
                <div>
                    <!-- Cart Items -->
                    <div class="space-y-4 mb-8">
                        <template x-for="item in cartItems" :key="item.id">
                            <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700 animate__animated animate__fadeInRight">
                                <div class="flex gap-4">
                                    <img :src="item.image" 
                                         :alt="item.name"
                                         class="w-20 h-20 object-cover rounded-lg">
                                    <div class="flex-1">
                                        <h3 class="text-white font-semibold mb-1" x-text="item.name"></h3>
                                        <div class="flex items-center gap-2 mb-2">
                                            <span class="px-2 py-1 rounded text-xs font-bold bg-blue-500/20 text-blue-400" x-text="item.rarity"></span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center gap-2">
                                                <button @click="item.quantity = Math.max(1, item.quantity - 1)"
                                                        class="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                                                    <ion-icon name="remove-outline" class="text-slate-300"></ion-icon>
                                                </button>
                                                <span class="text-white w-10 text-center font-medium" x-text="item.quantity"></span>
                                                <button @click="item.quantity++"
                                                        class="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                                                    <ion-icon name="add-outline" class="text-slate-300"></ion-icon>
                                                </button>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-xl font-bold text-blue-400" x-text="'$' + (item.price * item.quantity).toFixed(2)"></div>
                                                <div class="text-xs text-slate-500" x-text="'$' + item.price + ' each'"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>

                    <!-- Cart Summary -->
                    <div class="bg-slate-800/30 rounded-xl p-6 mb-6">
                        <h3 class="text-lg font-semibold text-white mb-4">Order Summary</h3>
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center justify-between text-slate-300">
                                <span>Subtotal</span>
                                <span x-text="'$' + cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)"></span>
                            </div>
                            <div class="flex items-center justify-between text-slate-300">
                                <span>Processing Fee</span>
                                <span class="text-green-400">FREE</span>
                            </div>
                            <div class="flex items-center justify-between text-xl font-bold text-white pt-3 border-t border-slate-700">
                                <span>Total</span>
                                <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" 
                                      x-text="'$' + cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)"></span>
                            </div>
                        </div>
                        
                        <div class="space-y-3">
                            <button class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                                <ion-icon name="card-outline" class="text-xl"></ion-icon>
                                Proceed to Checkout
                            </button>
                            
                            <button @click="showCart = false"
                                    class="w-full py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 font-medium rounded-xl transition-all border border-slate-700">
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</header>

<script>
function particles() {
    return {
        particles: [],
        initParticles() {
            for (let i = 0; i < 30; i++) {
                this.particles.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: Math.random() * 0.4 + 0.1
                });
            }
            
            setInterval(() => {
                this.particles.forEach(particle => {
                    particle.x = (particle.x + 1) % window.innerWidth;
                    particle.y = (particle.y + 0.5) % window.innerHeight;
                });
            }, 50);
        }
    }
}
</script>