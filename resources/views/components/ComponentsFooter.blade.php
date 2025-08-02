<!-- Enhanced Footer -->
<footer class="bg-black/90 backdrop-blur-md border-t border-slate-800 mt-20 relative z-10">
    <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-4 gap-8 mb-12">
            <!-- Brand Section -->
            <div class="animate__animated animate__fadeInUp">
                <div class="flex items-center gap-3 mb-6">
                    <img src="{{ $storeSettings['logo'] ?? '' }}" 
                         alt="Logo"
                         class="w-12 h-12 rounded-full border-2 border-blue-500/30">
                    <div>
                        <h3 class="text-white font-bold text-xl">
                            {{ $storeSettings['name'] ?? 'Gaming Store' }}
                        </h3>
                        <p class="text-blue-400 text-sm">FiveM Server Store</p>
                    </div>
                </div>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    {{ $storeSettings['description'] ?? 'Your premier destination for FiveM server items, vehicles, and exclusive content.' }}
                </p>
                <div class="flex gap-3">
                    @if(isset($storeSettings['contact']['discord']))
                    <a href="{{ $storeSettings['contact']['discord'] }}" 
                       class="p-3 bg-slate-800/60 hover:bg-blue-500/20 rounded-xl transition-all border border-slate-700 hover:border-blue-500/30 group">
                        <ion-icon name="chatbubbles-outline" class="text-xl text-slate-400 group-hover:text-blue-400"></ion-icon>
                    </a>
                    @endif
                    
                    @if(isset($storeSettings['social']['facebook']))
                    <a href="{{ $storeSettings['social']['facebook'] }}" 
                       class="p-3 bg-slate-800/60 hover:bg-blue-500/20 rounded-xl transition-all border border-slate-700 hover:border-blue-500/30 group">
                        <ion-icon name="logo-facebook" class="text-xl text-slate-400 group-hover:text-blue-400"></ion-icon>
                    </a>
                    @endif
                    
                    @if(isset($storeSettings['social']['twitter']))
                    <a href="{{ $storeSettings['social']['twitter'] }}" 
                       class="p-3 bg-slate-800/60 hover:bg-blue-500/20 rounded-xl transition-all border border-slate-700 hover:border-blue-500/30 group">
                        <ion-icon name="logo-twitter" class="text-xl text-slate-400 group-hover:text-blue-400"></ion-icon>
                    </a>
                    @endif
                    
                    @if(isset($storeSettings['social']['youtube']))
                    <a href="{{ $storeSettings['social']['youtube'] }}" 
                       class="p-3 bg-slate-800/60 hover:bg-red-500/20 rounded-xl transition-all border border-slate-700 hover:border-red-500/30 group">
                        <ion-icon name="logo-youtube" class="text-xl text-slate-400 group-hover:text-red-400"></ion-icon>
                    </a>
                    @endif
                    
                    @if(isset($storeSettings['social']['instagram']))
                    <a href="{{ $storeSettings['social']['instagram'] }}" 
                       class="p-3 bg-slate-800/60 hover:bg-pink-500/20 rounded-xl transition-all border border-slate-700 hover:border-pink-500/30 group">
                        <ion-icon name="logo-instagram" class="text-xl text-slate-400 group-hover:text-pink-400"></ion-icon>
                    </a>
                    @endif
                </div>
            </div>
            
            <!-- Quick Links -->
            <div class="animate__animated animate__fadeInUp animate__delay-1s">
                <h4 class="text-white font-bold text-lg mb-6">Quick Links</h4>
                <div class="space-y-3">
                    <a href="#" 
                       class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                        <ion-icon name="arrow-forward-outline" class="text-lg opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"></ion-icon>
                        <span>Browse All Products</span>
                    </a>
                    <a href="#" 
                       class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                        <ion-icon name="arrow-forward-outline" class="text-lg opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"></ion-icon>
                        <span>Mystery Boxes</span>
                    </a>
                    <a href="#" 
                       class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                        <ion-icon name="arrow-forward-outline" class="text-lg opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"></ion-icon>
                        <span>VIP Memberships</span>
                    </a>
                    <a href="#" 
                       class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                        <ion-icon name="arrow-forward-outline" class="text-lg opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"></ion-icon>
                        <span>New Arrivals</span>
                    </a>
                </div>
            </div>

            <!-- Support -->
            <div class="animate__animated animate__fadeInUp animate__delay-2s">
                <h4 class="text-white font-bold text-lg mb-6">Support</h4>
                <div class="space-y-3">
                    @if(isset($storeSettings['contact']['email']))
                    <a href="mailto:{{ $storeSettings['contact']['email'] }}" 
                       class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                        <ion-icon name="arrow-forward-outline" class="text-lg opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"></ion-icon>
                        <span>Email Support</span>
                    </a>
                    @endif
                    
                    <a href="#" 
                       class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                        <ion-icon name="arrow-forward-outline" class="text-lg opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"></ion-icon>
                        <span>FAQ & Help Center</span>
                    </a>
                    <a href="#" 
                       class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                        <ion-icon name="arrow-forward-outline" class="text-lg opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"></ion-icon>
                        <span>Terms of Service</span>
                    </a>
                    <a href="#" 
                       class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                        <ion-icon name="arrow-forward-outline" class="text-lg opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"></ion-icon>
                        <span>Privacy Policy</span>
                    </a>
                </div>
            </div>

            <!-- Newsletter -->
            <div class="animate__animated animate__fadeInUp animate__delay-3s" x-data="{ email: '', subscribed: false }">
                <h4 class="text-white font-bold text-lg mb-6">Stay Updated</h4>
                <p class="text-slate-400 text-sm mb-4">
                    Subscribe to get exclusive offers and new product announcements.
                </p>
                <div class="space-y-3" x-show="!subscribed">
                    <input type="email" 
                           x-model="email"
                           placeholder="Enter your email"
                           class="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm">
                    <button @click="subscribed = true; email = ''"
                            class="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all text-sm">
                        Subscribe
                    </button>
                </div>
                <div x-show="subscribed" 
                     x-transition
                     class="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                    <ion-icon name="checkmark-circle-outline" class="text-2xl text-green-400 mb-2"></ion-icon>
                    <p class="text-green-400 text-sm font-medium">Successfully subscribed!</p>
                </div>
            </div>
        </div>

        <div class="border-t border-slate-800 pt-8">
            <div class="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <p class="text-slate-500 text-sm">
                        © {{ date('Y') }} {{ $storeSettings['name'] ?? 'Gaming Store' }}. All rights reserved.
                    </p>
                    <p class="text-slate-600 text-xs mt-1">
                        FiveM and Grand Theft Auto V are registered trademarks of their respective owners.
                    </p>
                </div>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-2">
                        <ion-icon name="shield-checkmark-outline" class="text-lg text-green-400"></ion-icon>
                        <span class="text-slate-400 text-sm">Secure Payments</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <ion-icon name="flash-outline" class="text-lg text-blue-400"></ion-icon>
                        <span class="text-slate-400 text-sm">Instant Delivery</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <ion-icon name="headset-outline" class="text-lg text-purple-400"></ion-icon>
                        <span class="text-slate-400 text-sm">24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Background Pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27%233B82F6%27%20stroke-width%3D%270.5%27%3E%3Cpath%20d%3D%27M0%200L50%2050L0%20100M50%200L100%2050L50%20100%27/%3E%3C/g%3E%3C/svg%3E')]"></div>
    </div>
</footer>