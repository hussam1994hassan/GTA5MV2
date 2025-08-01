import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus,
    Search,
    Filter,
    Download,
    Upload,
    Eye,
    Edit,
    Trash2,
    Copy,
    MoreVertical,
    Star,
    TrendingUp,
    TrendingDown,
    Package,
    DollarSign,
    Users,
    ShoppingCart,
    Target,
    Crown,
    Dice6,
    Shield,
    Gamepad2,
    CheckCircle,
    XCircle,
    Clock,
    AlertTriangle,
    BarChart3,
    Grid,
    List,
    SortAsc,
    SortDesc,
    RefreshCw,
    ExternalLink,
    Calendar,
    Tag,
    Archive,
    PlayCircle,
    PauseCircle,
    Settings
} from "lucide-react";

const ProductsPage = ({ onEditProduct }) => {
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [sortBy, setSortBy] = useState("created_desc");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [loading, setLoading] = useState(false);

    // Mock products data
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Legendary Weapon Pack",
            type: "bundle",
            category: "weapons",
            price: 49.99,
            sales: 234,
            status: "active",
            revenue: 11666.66,
            stock: "unlimited",
            rating: 4.8,
            reviews: 89,
            created: "2024-01-15",
            views: 1247,
            conversion: 18.8,
            featured: true,
            trending: "up"
        },
        {
            id: 2,
            name: "Mystery Crate",
            type: "lootbox",
            category: "lootboxes",
            price: 12.99,
            sales: 892,
            status: "active",
            revenue: 11587.08,
            stock: "unlimited",
            rating: 4.6,
            reviews: 245,
            created: "2024-01-10",
            views: 2341,
            conversion: 38.1,
            featured: false,
            trending: "up"
        },
        {
            id: 3,
            name: "Supercar Bundle",
            type: "vehicle",
            category: "vehicles",
            price: 89.99,
            sales: 156,
            status: "active",
            revenue: 14038.44,
            stock: "limited",
            rating: 4.9,
            reviews: 67,
            created: "2024-01-20",
            views: 876,
            conversion: 17.8,
            featured: true,
            trending: "stable"
        },
        {
            id: 4,
            name: "VIP Membership",
            type: "subscription",
            category: "memberships",
            price: 29.99,
            sales: 67,
            status: "active",
            revenue: 2009.33,
            stock: "unlimited",
            rating: 4.7,
            reviews: 34,
            created: "2024-01-05",
            views: 432,
            conversion: 15.5,
            featured: false,
            trending: "stable"
        },
        {
            id: 5,
            name: "Tactical Gear Set",
            type: "equipment",
            category: "equipment",
            price: 24.99,
            sales: 189,
            status: "paused",
            revenue: 4723.11,
            stock: "out_of_stock",
            rating: 4.5,
            reviews: 76,
            created: "2024-01-12",
            views: 654,
            conversion: 28.9,
            featured: false,
            trending: "down"
        },
        {
            id: 6,
            name: "Racing Package",
            type: "bundle",
            category: "vehicles",
            price: 39.99,
            sales: 123,
            status: "draft",
            revenue: 4918.77,
            stock: "unlimited",
            rating: 4.4,
            reviews: 28,
            created: "2024-01-18",
            views: 234,
            conversion: 52.6,
            featured: false,
            trending: "up"
        }
    ]);

    const categories = [
        { id: "all", label: "All Categories", icon: <Package className="w-4 h-4" />, color: "gray", count: products.length },
        { id: "weapons", label: "Weapons", icon: <Target className="w-4 h-4" />, color: "emerald", count: products.filter(p => p.category === 'weapons').length },
        { id: "vehicles", label: "Vehicles", icon: <Crown className="w-4 h-4" />, color: "cyan", count: products.filter(p => p.category === 'vehicles').length },
        { id: "lootboxes", label: "Loot Boxes", icon: <Dice6 className="w-4 h-4" />, color: "purple", count: products.filter(p => p.category === 'lootboxes').length },
        { id: "equipment", label: "Equipment", icon: <Shield className="w-4 h-4" />, color: "blue", count: products.filter(p => p.category === 'equipment').length },
        { id: "memberships", label: "Memberships", icon: <Star className="w-4 h-4" />, color: "yellow", count: products.filter(p => p.category === 'memberships').length }
    ];

    const statusOptions = [
        { id: "all", label: "All Status", count: products.length },
        { id: "active", label: "Active", count: products.filter(p => p.status === 'active').length },
        { id: "draft", label: "Draft", count: products.filter(p => p.status === 'draft').length },
        { id: "paused", label: "Paused", count: products.filter(p => p.status === 'paused').length },
        { id: "archived", label: "Archived", count: 0 }
    ];

    const sortOptions = [
        { id: "created_desc", label: "Newest First" },
        { id: "created_asc", label: "Oldest First" },
        { id: "name_asc", label: "Name A-Z" },
        { id: "name_desc", label: "Name Z-A" },
        { id: "price_desc", label: "Price High to Low" },
        { id: "price_asc", label: "Price Low to High" },
        { id: "sales_desc", label: "Best Selling" },
        { id: "revenue_desc", label: "Highest Revenue" }
    ];

    // Filter and sort products
    const filteredProducts = products
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
            const matchesStatus = selectedStatus === "all" || product.status === selectedStatus;
            return matchesSearch && matchesCategory && matchesStatus;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "created_desc":
                    return new Date(b.created) - new Date(a.created);
                case "created_asc":
                    return new Date(a.created) - new Date(b.created);
                case "name_asc":
                    return a.name.localeCompare(b.name);
                case "name_desc":
                    return b.name.localeCompare(a.name);
                case "price_desc":
                    return b.price - a.price;
                case "price_asc":
                    return a.price - b.price;
                case "sales_desc":
                    return b.sales - a.sales;
                case "revenue_desc":
                    return b.revenue - a.revenue;
                default:
                    return 0;
            }
        });

    const handleSelectProduct = (productId) => {
        setSelectedProducts(prev => 
            prev.includes(productId) 
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const handleSelectAll = () => {
        setSelectedProducts(
            selectedProducts.length === filteredProducts.length 
                ? [] 
                : filteredProducts.map(p => p.id)
        );
    };

    const handleBulkAction = async (action) => {
        setLoading(true);
        console.log(`Performing ${action} on products:`, selectedProducts);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setSelectedProducts([]);
    };

    const getTrendingIcon = (trend) => {
        switch (trend) {
            case "up":
                return <TrendingUp className="w-4 h-4 text-emerald-400" />;
            case "down":
                return <TrendingDown className="w-4 h-4 text-red-400" />;
            default:
                return <BarChart3 className="w-4 h-4 text-gray-400" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "emerald";
            case "draft":
                return "yellow";
            case "paused":
                return "orange";
            case "archived":
                return "gray";
            default:
                return "gray";
        }
    };

    const ProductCard = ({ product }) => (
        <motion.div
            layout
            className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => handleSelectProduct(product.id)}
                            className="w-4 h-4 rounded"
                        />
                        <div className="flex items-center gap-2">
                            {product.featured && (
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            )}
                            {getTrendingIcon(product.trending)}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-lg text-xs font-mono bg-${getStatusColor(product.status)}-500/20 text-${getStatusColor(product.status)}-400`}>
                            {product.status.toUpperCase()}
                        </span>
                        <div className="relative">
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-gray-400 font-mono text-sm capitalize">
                            {product.type}
                        </span>
                        <span className="text-gray-500">•</span>
                        <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-yellow-400 text-xs font-mono">{product.rating}</span>
                            <span className="text-gray-500 text-xs">({product.reviews})</span>
                        </div>
                    </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <div className="text-cyan-400 font-mono font-bold text-lg">
                            ${product.price}
                        </div>
                        <div className="text-gray-400 text-xs">Price</div>
                    </div>
                    <div>
                        <div className="text-emerald-400 font-mono font-bold text-lg">
                            {product.sales}
                        </div>
                        <div className="text-gray-400 text-xs">Sales</div>
                    </div>
                    <div>
                        <div className="text-yellow-400 font-mono font-bold text-lg">
                            ${product.revenue.toLocaleString()}
                        </div>
                        <div className="text-gray-400 text-xs">Revenue</div>
                    </div>
                </div>

                {/* Additional Stats */}
                <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{product.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{product.conversion}% conversion</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(product.created).toLocaleDateString()}</span>
                    </div>
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                    <div className={`text-xs font-mono px-2 py-1 rounded inline-block ${
                        product.stock === 'unlimited' ? 'bg-emerald-500/20 text-emerald-400' :
                        product.stock === 'limited' ? 'bg-yellow-500/20 text-yellow-400' : 
                        'bg-red-500/20 text-red-400'
                    }`}>
                        Stock: {product.stock.toUpperCase()}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button 
                        onClick={() => onEditProduct(product)}
                        className="flex-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400 px-3 py-2 rounded-lg text-sm font-mono font-bold hover:from-emerald-500/30 hover:to-cyan-500/30 transition-all duration-300"
                    >
                        <Edit className="w-4 h-4 inline mr-2" />
                        EDIT
                    </button>
                    <button className="bg-gray-700/50 text-gray-400 px-3 py-2 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Eye className="w-4 h-4" />
                    </button>
                    <button className="bg-gray-700/50 text-gray-400 px-3 py-2 rounded-lg hover:bg-gray-600/50 hover:text-cyan-400 transition-all duration-300">
                        <Copy className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );

    const ProductRow = ({ product }) => (
        <motion.div
            layout
            className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-cyan-400/30 transition-all duration-300"
        >
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelectProduct(product.id)}
                    className="w-4 h-4 rounded"
                />
                
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Package className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold truncate">{product.name}</h3>
                        {product.featured && (
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        )}
                        {getTrendingIcon(product.trending)}
                    </div>
                    <p className="text-gray-400 text-sm capitalize">{product.type} • {product.category}</p>
                </div>
                
                <div className="flex items-center gap-8">
                    <div className="text-center">
                        <div className="text-cyan-400 font-mono font-bold">${product.price}</div>
                        <div className="text-gray-400 text-xs">Price</div>
                    </div>
                    
                    <div className="text-center">
                        <div className="text-emerald-400 font-mono font-bold">{product.sales}</div>
                        <div className="text-gray-400 text-xs">Sales</div>
                    </div>
                    
                    <div className="text-center">
                        <div className="text-yellow-400 font-mono font-bold">${product.revenue.toLocaleString()}</div>
                        <div className="text-gray-400 text-xs">Revenue</div>
                    </div>
                    
                    <div className="text-center">
                        <div className={`px-2 py-1 rounded text-xs font-mono bg-${getStatusColor(product.status)}-500/20 text-${getStatusColor(product.status)}-400`}>
                            {product.status.toUpperCase()}
                        </div>
                    </div>
                    
                    <div className="flex gap-2">
                        <button 
                            onClick={() => onEditProduct(product)}
                            className="text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <MoreVertical className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-black text-white font-mono mb-2">
                        [PRODUCT_MANAGEMENT]
                    </h1>
                    <p className="text-gray-400 font-mono">
                        Manage your store inventory and product catalog
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Upload className="w-5 h-5 inline mr-2" />
                        IMPORT
                    </button>
                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Download className="w-5 h-5 inline mr-2" />
                        EXPORT
                    </button>
                    <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300">
                        <Plus className="w-5 h-5 inline mr-2" />
                        ADD_PRODUCT
                    </button>
                </div>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-4 gap-6"
            >
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Package className="w-8 h-8 text-emerald-400" />
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-black text-emerald-400 font-mono mb-1">
                        {products.length}
                    </div>
                    <div className="text-gray-300 text-sm">Total Products</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <CheckCircle className="w-8 h-8 text-cyan-400" />
                        <TrendingUp className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-black text-cyan-400 font-mono mb-1">
                        {products.filter(p => p.status === 'active').length}
                    </div>
                    <div className="text-gray-300 text-sm">Active Products</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <DollarSign className="w-8 h-8 text-yellow-400" />
                        <TrendingUp className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-black text-yellow-400 font-mono mb-1">
                        ${products.reduce((sum, p) => sum + p.revenue, 0).toLocaleString()}
                    </div>
                    <div className="text-gray-300 text-sm">Total Revenue</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <ShoppingCart className="w-8 h-8 text-purple-400" />
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-black text-purple-400 font-mono mb-1">
                        {products.reduce((sum, p) => sum + p.sales, 0).toLocaleString()}
                    </div>
                    <div className="text-gray-300 text-sm">Total Sales</div>
                </div>
            </motion.div>

            {/* Filters and Search */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-80 pl-12 pr-4 py-3 bg-gray-800/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300 font-mono"
                            />
                        </div>

                        {/* Filters Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`px-4 py-3 rounded-lg font-mono font-bold transition-all duration-300 ${
                                showFilters ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-700/50 text-gray-400 hover:text-white'
                            }`}
                        >
                            <Filter className="w-5 h-5 inline mr-2" />
                            FILTERS
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* View Mode */}
                        <div className="flex bg-gray-800/50 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded transition-colors ${
                                    viewMode === "grid" ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded transition-colors ${
                                    viewMode === "list" ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono"
                        >
                            {sortOptions.map(option => (
                                <option key={option.id} value={option.id}>{option.label}</option>
                            ))}
                        </select>

                        {/* Refresh */}
                        <button className="text-gray-400 hover:text-emerald-400 transition-colors p-2">
                            <RefreshCw className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Expanded Filters */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-gray-700 pt-6"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                {/* Categories */}
                                <div>
                                    <h3 className="text-cyan-400 font-mono font-bold mb-3">Categories</h3>
                                    <div className="space-y-2">
                                        {categories.map(category => (
                                            <label key={category.id} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    value={category.id}
                                                    checked={selectedCategory === category.id}
                                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                                    className="w-4 h-4"
                                                />
                                                <div className={`text-${category.color}-400`}>
                                                    {category.icon}
                                                </div>
                                                <span className="text-gray-300 font-mono text-sm">{category.label}</span>
                                                <span className="text-gray-500 text-xs">({category.count})</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Status */}
                                <div>
                                    <h3 className="text-purple-400 font-mono font-bold mb-3">Status</h3>
                                    <div className="space-y-2">
                                        {statusOptions.map(status => (
                                            <label key={status.id} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    value={status.id}
                                                    checked={selectedStatus === status.id}
                                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                                    className="w-4 h-4"
                                                />
                                                <span className="text-gray-300 font-mono text-sm">{status.label}</span>
                                                <span className="text-gray-500 text-xs">({status.count})</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Bulk Actions */}
            {selectedProducts.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-blue-400 font-mono font-bold">
                                {selectedProducts.length} selected
                            </span>
                            <button
                                onClick={handleSelectAll}
                                className="text-blue-400 hover:text-blue-300 font-mono text-sm transition-colors"
                            >
                                {selectedProducts.length === filteredProducts.length ? 'Deselect All' : 'Select All'}
                            </button>
                        </div>
                        
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleBulkAction('activate')}
                                disabled={loading}
                                className="bg-emerald-600/20 border border-emerald-400/30 text-emerald-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-emerald-500/30 transition-all duration-300 disabled:opacity-50"
                            >
                                <PlayCircle className="w-4 h-4 inline mr-2" />
                                ACTIVATE
                            </button>
                            <button
                                onClick={() => handleBulkAction('pause')}
                                disabled={loading}
                                className="bg-yellow-600/20 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-yellow-500/30 transition-all duration-300 disabled:opacity-50"
                            >
                                <PauseCircle className="w-4 h-4 inline mr-2" />
                                PAUSE
                            </button>
                            <button
                                onClick={() => handleBulkAction('archive')}
                                disabled={loading}
                                className="bg-gray-600/20 border border-gray-400/30 text-gray-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-gray-500/30 transition-all duration-300 disabled:opacity-50"
                            >
                                <Archive className="w-4 h-4 inline mr-2" />
                                ARCHIVE
                            </button>
                            <button
                                onClick={() => handleBulkAction('delete')}
                                disabled={loading}
                                className="bg-red-600/20 border border-red-400/30 text-red-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-red-500/30 transition-all duration-300 disabled:opacity-50"
                            >
                                <Trash2 className="w-4 h-4 inline mr-2" />
                                DELETE
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Products Grid/List */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={viewMode === "grid" ? "grid grid-cols-3 gap-6" : "space-y-4"}
            >
                {filteredProducts.map((product) => (
                    viewMode === "grid" ? (
                        <ProductCard key={product.id} product={product} />
                    ) : (
                        <ProductRow key={product.id} product={product} />
                    )
                ))}
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <div className="text-gray-400 font-mono text-xl mb-2">
                        [NO_PRODUCTS_FOUND]
                    </div>
                    <p className="text-gray-500 font-mono mb-6">
                        {searchTerm || selectedCategory !== "all" || selectedStatus !== "all" 
                            ? "Try adjusting your filters or search terms"
                            : "Start by adding your first product"
                        }
                    </p>
                    <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300">
                        <Plus className="w-5 h-5 inline mr-2" />
                        ADD_FIRST_PRODUCT
                    </button>
                </motion.div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                >
                    <div className="text-gray-400 font-mono text-sm">
                        Showing {filteredProducts.length} of {products.length} products
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 font-mono">
                            Previous
                        </button>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-mono">
                            1
                        </button>
                        <button className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 font-mono">
                            2
                        </button>
                        <button className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 font-mono">
                            Next
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ProductsPage;