@extends('components.layouts')

@section('title', 'My Inventory - Gaming Profile')

@section('content')
<div class="relative z-10" x-data="profileApp()" x-init="initProfile()">
    <!-- Animated background with gaming pattern -->
    <div class="fixed inset-0 z-0">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27%233B82F6%27%20stroke-width%3D%270.5%27%20opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M0%200L50%2050L0%20100M50%200L100%2050L50%20100%27/%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        <!-- Floating particles -->
        <template x-for="particle in particles" :key="particle.id">
            <div class="absolute rounded-full blur-sm animate-pulse"
                 :style="`left: ${particle.x}px; top: ${particle.y}px; width: ${particle.size}px; height: ${particle.size}px; background-color: ${particle.color}; opacity: ${particle.opacity}`"></div>
        </template>
    </div>

    <!-- Header -->
    <div class="relative z-10 bg-black/60 backdrop-blur-xl border-b border-blue-500/20">
        <div class="max-w-7xl mx-auto px-6 py-6">
            <div class="flex items-center justify-between">
                <div class="animate__animated animate__fadeInLeft">
                    <h1 class="text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                        MY INVENTORY
                    </h1>
                    <p class="text-slate-400 mt-1">Manage your items and open mystery crates</p>
                </div>
                
                <button @click="soundEnabled = !soundEnabled"
                        class="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl transition-all border border-slate-700 animate__animated animate__fadeInRight">
                    <ion-icon :name="soundEnabled ? 'volume-high-outline' : 'volume-mute-outline'" 
                              :class="soundEnabled ? 'text-blue-400' : 'text-slate-400'" 
                              class="text-xl"></ion-icon>
                </button>
            </div>

            <!-- Tabs -->
            <div class="flex gap-4 mt-6">
                <button @click="activeTab = 'owned'"
                        :class="activeTab === 'owned' ? 
                                'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/30' : 
                                'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'"
                        class="px-6 py-3 rounded-xl font-bold transition-all animate__animated animate__fadeInUp">
                    <div class="flex items-center gap-2">
                        <ion-icon name="cube-outline" class="text-xl"></ion-icon>
                        Owned Items
                    </div>
                </button>
                <button @click="activeTab = 'lootboxes'"
                        :class="activeTab === 'lootboxes' ? 
                                'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/30' : 
                                'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'"
                        class="px-6 py-3 rounded-xl font-bold transition-all animate__animated animate__fadeInUp animate__delay-1s">
                    <div class="flex items-center gap-2">
                        <ion-icon name="gift-outline" class="text-xl"></ion-icon>
                        Mystery Crates
                        <span x-show="getTotalLootboxes() > 0" 
                              x-text="getTotalLootboxes()"
                              class="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs px-2 py-1 rounded-full animate__animated animate__pulse animate__infinite"></span>
                    </div>
                </button>
            </div>
        </div>
    </div>

    <!-- Server Filter -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div class="flex items-center gap-4 mb-8 animate__animated animate__fadeInUp">
            <ion-icon name="server-outline" class="text-xl text-blue-400"></ion-icon>
            <select x-model="selectedServer"
                    class="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-blue-400 transition-all">
                <option value="all">All Servers</option>
                @foreach($servers as $server)
                <option value="{{ $server->slug }}">{{ $server->name }}</option>
                @endforeach
            </select>
        </div>

        <!-- Content -->
        <div x-show="activeTab === 'owned'">
            <!-- Owned Items Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                @foreach($ownedItems as $index => $item)
                <div x-show="selectedServer === 'all' || '{{ $item['server_id'] }}' === selectedServer"
                     class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 hover:scale-105 transition-all duration-300 group animate__animated animate__fadeInUp {{ getRarityBorderClass($item['rarity']) }}"
                     style="animation-delay: {{ $index * 0.1 }}s">
                    
                    <!-- Rarity glow effect -->
                    <div class="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity {{ getRarityGradient($item['rarity']) }}"></div>
                    
                    <!-- Item image -->
                    <div class="relative h-48 overflow-hidden">
                        <img src="{{ $item['image'] }}" 
                             alt="{{ $item['name'] }}"
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        
                        <!-- Rarity badge -->
                        <div class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-wider {{ getRarityGradient($item['rarity']) }}">
                            {{ strtoupper($item['rarity']) }}
                        </div>

                        <!-- Server badge -->
                        <div class="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs bg-black/80 backdrop-blur-sm">
                            <div class="flex items-center gap-1">
                                <ion-icon name="server-outline" class="text-sm"></ion-icon>
                                <span>{{ $item['server'] }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Item info -->
                    <div class="relative p-4">
                        <h3 class="text-lg font-bold mb-2">{{ $item['name'] }}</h3>
                        
                        <div class="flex items-center justify-between text-sm text-slate-400">
                            <div class="flex items-center gap-2">
                                <img src="{{ $item['type_image'] }}" 
                                     alt="{{ $item['type'] }}" 
                                     class="w-6 h-6 rounded-full object-cover">
                                <span class="capitalize">{{ $item['type'] }}</span>
                            </div>
                            
                            @if(isset($item['duration']))
                            <div class="flex items-center gap-1">
                                <ion-icon name="time-outline" class="text-sm"></ion-icon>
                                <span>{{ $item['duration'] }}</span>
                            </div>
                            @endif
                        </div>

                        <div class="mt-3 text-xs text-slate-500">
                            Purchased: {{ $item['purchase_date'] }}
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>

        <div x-show="activeTab === 'lootboxes'">
            <!-- Lootboxes Grid - Call of Duty Style -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($lootboxes as $index => $lootbox)
                <div x-show="selectedServer === 'all' || '{{ $lootbox['server_id'] }}' === selectedServer"
                     class="relative group animate__animated animate__fadeInUp"
                     style="animation-delay: {{ $index * 0.1 }}s">
                    
                    <!-- 3D Military Crate Design -->
                    <div class="relative">
                        <!-- Crate Container -->
                        <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl overflow-hidden border-2 shadow-2xl transform transition-all duration-500 hover:scale-105 {{ getRarityBorderClass($lootbox['rarity']) }}"
                             style="box-shadow: 0 0 50px {{ $lootbox['glow_color'] }}40, inset 0 0 50px {{ $lootbox['glow_color'] }}20">
                            
                            <!-- Military pattern background -->
                            <div class="absolute inset-0 opacity-30">
                                <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27white%27%20stroke-width%3D%270.5%27%20opacity%3D%270.2%27%3E%3Cpath%20d%3D%27M0%200h100v100h-100zM20%2020h60v60h-60zM40%2040h20v20h-20z%27/%3E%3C/g%3E%3C/svg%3E')]"></div>
                            </div>

                            <!-- Animated glow pulse -->
                            <div class="absolute inset-0 animate-pulse"
                                 style="background: radial-gradient(circle at center, {{ $lootbox['glow_color'] }}40 0%, transparent 70%)"></div>

                            <!-- Crate image with 3D effect -->
                            <div class="relative h-72 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                                
                                <!-- 3D Crate Visual -->
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="relative w-48 h-48 transform-gpu animate-spin"
                                         style="animation-duration: 20s;">
                                        <!-- Crate faces -->
                                        <div class="absolute inset-0 rounded-xl overflow-hidden border-4 {{ getRarityBorderClass($lootbox['rarity']) }}"
                                             style="transform: translateZ(96px); box-shadow: inset 0 0 50px {{ $lootbox['glow_color'] }}40; background-color: #000">
                                            <img src="{{ $lootbox['image'] }}"
                                                 alt="{{ $lootbox['name'] }}"
                                                 class="w-full h-full object-cover">
                                        </div>
                                    </div>
                                </div>

                                <!-- Floating elements -->
                                <div class="absolute top-8 right-8 animate-bounce">
                                    <ion-icon name="sparkles-outline" class="text-3xl text-yellow-400 drop-shadow-glow"
                                              style="filter: drop-shadow(0 0 10px currentColor);"></ion-icon>
                                </div>
                                <div class="absolute bottom-8 left-8 animate-bounce"
                                     style="animation-delay: 1s;">
                                    <ion-icon name="star-outline" class="text-2xl text-yellow-400 drop-shadow-glow"
                                              style="filter: drop-shadow(0 0 10px currentColor);"></ion-icon>
                                </div>

                                <!-- Rarity indicator -->
                                <div class="absolute top-4 left-4 z-20">
                                    <div class="px-4 py-2 rounded-full text-sm font-black bg-black/80 backdrop-blur-sm border-2 uppercase tracking-wider {{ getRarityBorderClass($lootbox['rarity']) }} {{ getRarityTextClass($lootbox['rarity']) }}">
                                        {{ strtoupper($lootbox['rarity']) }} CRATE
                                    </div>
                                </div>
                            </div>

                            <!-- Crate info -->
                            <div class="relative p-6 z-10 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 class="text-2xl font-black mb-2 tracking-wide">{{ $lootbox['name'] }}</h3>
                                
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-2 text-sm text-slate-400">
                                        <ion-icon name="server-outline" class="text-lg"></ion-icon>
                                        <span>{{ $lootbox['server'] }}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span class="text-green-400 text-sm font-bold">AVAILABLE</span>
                                    </div>
                                </div>

                                <!-- Quantity display -->
                                <div class="flex items-center justify-between mb-6">
                                    <span class="text-slate-400 text-sm uppercase tracking-wide">Crates Available:</span>
                                    <div class="flex items-center gap-2">
                                        <span class="text-4xl font-black text-white">{{ $lootbox['quantity'] }}</span>
                                        <span class="text-slate-400 text-xl">×</span>
                                    </div>
                                </div>

                                <!-- Open button - Call of Duty style -->
                                <button @click="openLootbox({{ $lootbox['id'] }})"
                                        :disabled="{{ $lootbox['quantity'] }} === 0"
                                        class="w-full py-4 rounded-xl font-black text-white transition-all duration-300 uppercase tracking-wider {{ $lootbox['quantity'] > 0 ? getRarityGradient($lootbox['rarity']) . ' hover:shadow-2xl hover:scale-105 active:scale-95' : 'bg-slate-700 cursor-not-allowed opacity-50' }}"
                                        style="{{ $lootbox['quantity'] > 0 ? 'box-shadow: 0 10px 30px ' . $lootbox['glow_color'] . '60' : '' }}">
                                    <div class="flex items-center justify-center gap-3">
                                        @if($lootbox['quantity'] > 0)
                                        <div class="flex items-center gap-3">
                                            <ion-icon name="lock-open-outline" class="text-2xl"></ion-icon>
                                            <span>OPEN CRATE</span>
                                            <ion-icon name="chevron-forward-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        @else
                                        <div class="flex items-center gap-3">
                                            <ion-icon name="lock-closed-outline" class="text-2xl"></ion-icon>
                                            <span>NO CRATES</span>
                                        </div>
                                        @endif
                                    </div>
                                </button>

                                <!-- Preview possible items -->
                                <div class="mt-4 flex items-center gap-2 text-xs text-slate-500">
                                    <span class="uppercase tracking-wide">Contains:</span>
                                    <div class="flex -space-x-3">
                                        @foreach(array_slice($lootbox['possible_items'], 0, 4) as $idx => $item)
                                        <div class="w-8 h-8 rounded-full border-2 border-slate-800 overflow-hidden transform hover:scale-110 hover:z-10 transition-all {{ getRarityBgClass($item['rarity']) }}"
                                             title="{{ $item['name'] }}">
                                            <img src="{{ $item['image'] }}" alt="{{ $item['name'] }}" class="w-full h-full object-cover">
                                        </div>
                                        @endforeach
                                        @if(count($lootbox['possible_items']) > 4)
                                        <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold">
                                            +{{ count($lootbox['possible_items']) - 4 }}
                                        </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- Lootbox Opening Modal - Call of Duty Style -->
    <div x-show="showLootboxModal" 
         x-transition:enter="transition ease-out duration-300"
         x-transition:enter-start="opacity-0"
         x-transition:enter-end="opacity-100"
         x-transition:leave="transition ease-in duration-200"
         x-transition:leave-start="opacity-100"
         x-transition:leave-end="opacity-0"
         class="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-6"
         @click="openingStage === 'revealed' ? closeLootboxModal() : null">
        
        <div class="relative w-full max-w-5xl">
            <!-- Stage-based content -->
            <div x-show="openingStage === 'starting'" 
                 x-transition
                 class="text-center animate__animated animate__fadeInUp">
                <h2 class="text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider animate__animated animate__pulse animate__infinite"
                    x-text="selectedLootbox?.name"></h2>
                <div class="text-slate-400 flex items-center justify-center gap-3 text-xl animate__animated animate__fadeIn animate__infinite">
                    <ion-icon name="hand-left-outline" class="text-2xl"></ion-icon>
                    PREPARE FOR DEPLOYMENT...
                </div>
            </div>

            <div x-show="['charging', 'shaking', 'glowing', 'exploding'].includes(openingStage)" 
                 class="relative">
                <!-- 3D Crate Opening Animation -->
                <div class="relative flex items-center justify-center h-[500px]">
                    <div class="relative w-80 h-80 transform-gpu"
                         :class="{
                             'animate-pulse': openingStage === 'charging',
                             'animate-bounce': openingStage === 'shaking',
                             'animate-spin': openingStage === 'glowing',
                             'animate-ping': openingStage === 'exploding'
                         }"
                         :style="openingStage === 'glowing' ? 'filter: brightness(2) drop-shadow(0 0 50px currentColor)' : ''">
                        
                        <!-- Crate box -->
                        <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border-4 flex items-center justify-center overflow-hidden"
                             :class="selectedLootbox ? getRarityBorderClass(selectedLootbox.rarity) : ''"
                             :style="selectedLootbox ? `box-shadow: 0 0 ${openingStage === 'glowing' ? '100' : '50'}px ${selectedLootbox.glow_color}, inset 0 0 ${openingStage === 'glowing' ? '100' : '50'}px ${selectedLootbox.glow_color}60` : ''">
                            
                            <!-- Military pattern -->
                            <div class="absolute inset-0 opacity-30">
                                <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27white%27%20stroke-width%3D%271%27%20opacity%3D%270.3%27%3E%3Cpath%20d%3D%27M10%2010h80v80h-80zM30%2030h40v40h-40z%27/%3E%3C/g%3E%3C/svg%3E')]"></div>
                            </div>
                            
                            <!-- Central icon -->
                            <div :class="openingStage === 'glowing' ? 'animate-spin' : ''">
                                <ion-icon name="gift-outline" class="text-8xl text-white opacity-80 drop-shadow-2xl"></ion-icon>
                            </div>

                            <!-- Energy effects -->
                            <div x-show="openingStage === 'glowing'" 
                                 class="absolute inset-0 animate-pulse"
                                 :style="selectedLootbox ? `background: radial-gradient(circle at center, ${selectedLootbox.glow_color} 0%, transparent 70%)` : ''"></div>
                        </div>
                    </div>
                </div>

                <!-- Stage text -->
                <div class="text-center mt-12 animate__animated animate__fadeInUp">
                    <p class="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
                        <span x-text="{
                            'charging': 'INITIATING SEQUENCE...',
                            'shaking': 'ENERGY DETECTED!',
                            'glowing': 'MAXIMUM POWER!',
                            'exploding': 'BREACH DETECTED!'
                        }[openingStage]"></span>
                    </p>
                </div>
            </div>

            <div x-show="['revealing', 'revealed'].includes(openingStage) && revealedItem" 
                 x-transition:enter="transition ease-out duration-500"
                 x-transition:enter-start="scale-0 opacity-0"
                 x-transition:enter-end="scale-100 opacity-100"
                 class="relative">
                
                <!-- Victory screen -->
                <div class="text-center mb-8">
                    <h2 class="text-5xl font-black uppercase mb-2 animate__animated animate__fadeInDown"
                        :class="revealedItem ? getRarityTextClass(revealedItem.rarity) : ''"
                        :style="revealedItem ? `text-shadow: 0 0 30px ${getRarityColor(revealedItem.rarity)}` : ''"
                        x-text="revealedItem ? revealedItem.rarity.toUpperCase() + ' DROP!' : ''"></h2>
                    <p class="text-slate-400 text-xl animate__animated animate__fadeIn animate__delay-1s">ITEM ACQUIRED</p>
                </div>

                <!-- Reward display -->
                <div class="relative mx-auto w-[400px] rounded-3xl overflow-hidden shadow-2xl animate__animated animate__fadeInUp animate__delay-2s"
                     :class="revealedItem ? getRarityGlowClass(revealedItem.rarity) : ''"
                     :style="revealedItem ? `box-shadow: 0 0 100px ${getRarityColor(revealedItem.rarity)}60` : ''">
                    
                    <!-- Card background -->
                    <div class="absolute inset-0 opacity-20"
                         :class="revealedItem ? getRarityGradient(revealedItem.rarity) : ''"></div>
                    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
                    
                    <!-- Card content -->
                    <div class="relative z-10 p-8">
                        <!-- Item image -->
                        <div class="relative mb-6">
                            <div class="rounded-2xl overflow-hidden border-4"
                                 :class="revealedItem ? getRarityBorderClass(revealedItem.rarity) : ''">
                                <img :src="revealedItem?.image"
                                     :alt="revealedItem?.name"
                                     class="w-full h-56 object-cover">
                            </div>
                            
                            <!-- Item type badge -->
                            <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-2xl"
                                 :class="revealedItem ? getRarityGradient(revealedItem.rarity) : ''">
                                <img :src="revealedItem?.type_image" 
                                     :alt="revealedItem?.type"
                                     class="w-8 h-8 rounded-full object-cover">
                            </div>
                        </div>

                        <!-- Item name -->
                        <div class="text-center mt-10 animate__animated animate__fadeInUp animate__delay-3s">
                            <h4 class="text-3xl font-black text-white mb-2 uppercase tracking-wide" 
                                x-text="revealedItem?.name"></h4>
                            <p class="text-slate-400">Successfully added to your inventory!</p>
                        </div>

                        <!-- Rarity stats -->
                        <div class="mt-6 text-center animate__animated animate__fadeIn animate__delay-4s">
                            <div class="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full">
                                <ion-icon name="trophy-outline" class="text-yellow-400"></ion-icon>
                                <span class="text-sm text-slate-400" x-text="'Drop Rate: ' + (revealedItem?.chance || 0) + '%'"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Action buttons -->
                <div x-show="openingStage === 'revealed'" 
                     x-transition:enter="transition ease-out duration-300 delay-500"
                     x-transition:enter-start="opacity-0 translate-y-5"
                     x-transition:enter-end="opacity-100 translate-y-0"
                     class="flex justify-center gap-4 mt-12">
                    <button @click="closeLootboxModal()"
                            class="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold uppercase tracking-wider transition-all">
                        CLOSE
                    </button>
                    <button x-show="selectedLootbox && selectedLootbox.quantity > 1"
                            @click="openAnotherCrate()"
                            class="px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg"
                            :class="selectedLootbox ? getRarityGradient(selectedLootbox.rarity) : ''"
                            :style="selectedLootbox ? `box-shadow: 0 10px 30px ${selectedLootbox.glow_color}60` : ''">
                        <span x-text="'OPEN ANOTHER (' + ((selectedLootbox?.quantity || 1) - 1) + ' LEFT)'"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
function profileApp() {
    return {
        activeTab: 'owned',
        selectedServer: 'all',
        soundEnabled: true,
        showLootboxModal: false,
        selectedLootbox: null,
        openingStage: 'idle',
        revealedItem: null,
        particles: [],
        
        ownedItems: @json($ownedItems ?? []),
        lootboxes: @json($lootboxes ?? []),
        servers: @json($servers ?? []),

        get filteredOwnedItems() {
            if (this.selectedServer === 'all') return this.ownedItems;
            return this.ownedItems.filter(item => item.server_id === this.selectedServer);
        },

        get filteredLootboxes() {
            if (this.selectedServer === 'all') return this.lootboxes;
            return this.lootboxes.filter(box => box.server_id === this.selectedServer);
        },

        initProfile() {
            this.createParticles();
            setInterval(() => this.animateParticles(), 50);
        },

        createParticles() {
            for (let i = 0; i < 30; i++) {
                this.particles.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 1.5,
                    speedY: (Math.random() - 0.5) * 1.5,
                    opacity: Math.random() * 0.4 + 0.1,
                    color: '#3B82F6'
                });
            }
        },

        animateParticles() {
            this.particles.forEach(particle => {
                particle.x = (particle.x + particle.speedX) % window.innerWidth;
                particle.y = (particle.y + particle.speedY) % window.innerHeight;
            });
        },

        getTotalLootboxes() {
            return this.lootboxes.reduce((sum, box) => sum + box.quantity, 0);
        },

        getRarityClass(rarity) {
            const classes = {
                common: 'bg-gray-900/90 border-gray-500 text-gray-400',
                uncommon: 'bg-green-900/90 border-green-500 text-green-400',
                rare: 'bg-blue-900/90 border-blue-500 text-blue-400',
                epic: 'bg-purple-900/90 border-purple-500 text-purple-400',
                legendary: 'bg-yellow-900/90 border-yellow-500 text-yellow-400'
            };
            return classes[rarity] || classes.common;
        },

        getRarityBorderClass(rarity) {
            const classes = {
                common: 'border-gray-500',
                uncommon: 'border-green-500',
                rare: 'border-blue-500',
                epic: 'border-purple-500',
                legendary: 'border-yellow-500'
            };
            return classes[rarity] || classes.common;
        },

        getRarityGradient(rarity) {
            const classes = {
                common: 'bg-gradient-to-r from-gray-400 to-gray-500',
                uncommon: 'bg-gradient-to-r from-green-400 to-green-500',
                rare: 'bg-gradient-to-r from-blue-400 to-cyan-400',
                epic: 'bg-gradient-to-r from-purple-400 to-pink-400',
                legendary: 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400'
            };
            return classes[rarity] || classes.common;
        },

        getRarityTextClass(rarity) {
            const classes = {
                common: 'text-gray-400',
                uncommon: 'text-green-400',
                rare: 'text-blue-400',
                epic: 'text-purple-400',
                legendary: 'text-yellow-400'
            };
            return classes[rarity] || classes.common;
        },

        getRarityBgClass(rarity) {
            const classes = {
                common: 'bg-gray-900/90',
                uncommon: 'bg-green-900/90',
                rare: 'bg-blue-900/90',
                epic: 'bg-purple-900/90',
                legendary: 'bg-yellow-900/90'
            };
            return classes[rarity] || classes.common;
        },

        getRarityGlowClass(rarity) {
            const classes = {
                common: 'shadow-gray-400/50',
                uncommon: 'shadow-green-400/50',
                rare: 'shadow-blue-400/50',
                epic: 'shadow-purple-400/50',
                legendary: 'shadow-yellow-400/50'
            };
            return classes[rarity] || classes.common;
        },

        getRarityColor(rarity) {
            const colors = {
                common: '#9CA3AF',
                uncommon: '#4ADE80',
                rare: '#60A5FA',
                epic: '#A78BFA',
                legendary: '#FCD34D'
            };
            return colors[rarity] || colors.common;
        },

        async openLootbox(lootbox) {
            this.selectedLootbox = lootbox;
            this.showLootboxModal = true;
            this.openingStage = 'starting';
            document.body.style.overflow = 'hidden';

            // Animation sequence
            await this.delay(1500);
            this.openingStage = 'charging';
            
            await this.delay(2000);
            this.openingStage = 'shaking';
            
            await this.delay(1500);
            this.openingStage = 'glowing';
            
            await this.delay(1500);
            this.openingStage = 'exploding';

            // Calculate random item
            const random = Math.random() * 100;
            let cumulative = 0;
            let selectedItem = null;
            
            for (const item of lootbox.possible_items) {
                cumulative += item.chance;
                if (random <= cumulative) {
                    selectedItem = item;
                    break;
                }
            }

            this.revealedItem = selectedItem;

            await this.delay(800);
            this.openingStage = 'revealing';

            await this.delay(1500);
            this.openingStage = 'revealed';
        },

        closeLootboxModal() {
            this.showLootboxModal = false;
            this.selectedLootbox = null;
            this.openingStage = 'idle';
            this.revealedItem = null;
            document.body.style.overflow = 'auto';
        },

        openAnotherCrate() {
            this.openingStage = 'idle';
            this.revealedItem = null;
            const updatedLootbox = {...this.selectedLootbox, quantity: this.selectedLootbox.quantity - 1};
            this.openLootbox(updatedLootbox);
        },

        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
}
</script>
@endsection