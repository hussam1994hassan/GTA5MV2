import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Save,
    X,
    ArrowLeft,
    Eye,
    AlertTriangle,
    CheckCircle,
    Trash2,
    Plus,
    Edit,
    History,
    Activity,
    DollarSign,
    Tag,
    FileText,
    Settings,
    Package,
    Target,
    Crown,
    Dice6,
    Shield,
    Star,
    BarChart3,
    TrendingUp,
    Clock,
    Users,
    ShoppingCart
} from "lucide-react";

const EditProductPage = ({ product, onProductUpdated, onCancel }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "weapons",
        type: "single",
        status: "active",
        stock_type: "unlimited",
        stock_quantity: "",
        featured: false,
        metadata: {
            rarity: "common",
            level_requirement: "",
            tags: []
        },
        items: []
    });

    const [originalData, setOriginalData] = useState(null);
    const [hasChanges, setHasChanges] = useState(false);
    const [currentTag, setCurrentTag] = useState("");
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

    // Mock product analytics
    const productAnalytics = {
        totalSales: 234,
        revenue: 11666.66,
        viewsThisMonth: 1247,
        conversionRate: 18.8,
        avgRating: 4.8,
        reviews: 89,
        recentSales: [
            { date: "2024-01-22", sales: 12, revenue: 599.88 },
            { date: "2024-01-21", sales: 8, revenue: 399.92 },
            { date: "2024-01-20", sales: 15, revenue: 749.85 },
            { date: "2024-01-19", sales: 10, revenue: 499.90 },
            { date: "2024-01-18", sales: 6, revenue: 299.94 }
        ]
    };

    const categories = [
        { id: "weapons", label: "Weapons", icon: <Target className="w-4 h-4" />, color: "emerald" },
        { id: "vehicles", label: "Vehicles", icon: <Crown className="w-4 h-4" />, color: "cyan" },
        { id: "lootboxes", label: "Loot Boxes", icon: <Dice6 className="w-4 h-4" />, color: "purple" },
        { id: "bundles", label: "Bundles", icon: <Package className="w-4 h-4" />, color: "yellow" },
        { id: "equipment", label: "Equipment", icon: <Shield className="w-4 h-4" />, color: "blue" },
        { id: "memberships", label: "Memberships", icon: <Star className="w-4 h-4" />, color: "orange" }
    ];

    const rarities = [
        { id: "common", label: "Common", color: "gray" },
        { id: "uncommon", label: "Uncommon", color: "green" },
        { id: "rare", label: "Rare", color: "blue" },
        { id: "epic", label: "Epic", color: "purple" },
        { id: "legendary", label: "Legendary", color: "yellow" }
    ];

    // Load product data
    useEffect(() => {
        if (product) {
            const data = {
                name: product.name || "",
                description: product.description || "",
                price: product.price || "",
                category: product.category || "weapons",
                type: product.type || "single",
                status: product.status || "active",
                stock_type: product.stock || "unlimited",
                stock_quantity: product.stock_quantity || "",
                featured: product.featured || false,
                metadata: {
                    rarity: product.metadata?.rarity || "common",
                    level_requirement: product.metadata?.level_requirement || "",
                    tags: product.metadata?.tags || []
                },
                items: product.items || []
            };
            setFormData(data);
            setOriginalData(data);
        }
    }, [product]);

    // Check for changes
    useEffect(() => {
        if (originalData) {
            const changed = JSON.stringify(formData) !== JSON.stringify(originalData);
            setHasChanges(changed);
        }
    }, [formData, originalData]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: type === 'checkbox' ? checked : value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const addTag = () => {
        if (currentTag.trim() && !formData.metadata.tags.includes(currentTag.trim())) {
            setFormData(prev => ({
                ...prev,
                metadata: {
                    ...prev.metadata,
                    tags: [...prev.metadata.tags, currentTag.trim()]
                }
            }));
            setCurrentTag("");
        }
    };

    const removeTag = (tag) => {
        setFormData(prev => ({
            ...prev,
            metadata: {
                ...prev.metadata,
                tags: prev.metadata.tags.filter(t => t !== tag)
            }
        }));
    };

    const handleSubmit = async () => {
        setSaving(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Updating product:", formData);
        setSaving(false);
        onProductUpdated();
    };

    const resetChanges = () => {
        setFormData(originalData);
        setErrors({});
    };

    if (!product) {
        return (
            <div className="text-center py-20">
                <div className="text-gray-400 font-mono text-xl mb-4">
                    [NO_PRODUCT_SELECTED]
                </div>
                <p className="text-gray-500 font-mono">
                    Please select a product to edit.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    <button
                        onClick={onCancel}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <h1 className="text-3xl font-black text-white font-mono mb-2">
                            [EDIT_PRODUCT]
                        </h1>
                        <p className="text-gray-400 font-mono">
                            ID: {product.id} • Created: {new Date(product.created).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    {hasChanges && (
                        <button
                            onClick={resetChanges}
                            className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300"
                        >
                            <X className="w-4 h-4 inline mr-2" />
                            RESET
                        </button>
                    )}
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className="bg-blue-600/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-blue-500/30 transition-all duration-300"
                    >
                        <History className="w-4 h-4 inline mr-2" />
                        HISTORY
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!hasChanges || saving}
                        className={`px-6 py-2 rounded-lg font-mono font-bold transition-all duration-300 ${
                            hasChanges && !saving
                                ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:scale-105'
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        {saving ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline mr-2"></div>
                                SAVING...
                            </>
                        ) : (
                            <>
                                <Save className="w-4 h-4 inline mr-2" />
                                SAVE_CHANGES
                            </>
                        )}
                    </button>
                </div>
            </motion.div>

            <div className="grid grid-cols-4 gap-8">
                {/* Analytics Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="col-span-1 space-y-6"
                >
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700">
                        <h3 className="text-lg font-bold text-emerald-400 font-mono mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            [ANALYTICS]
                        </h3>
                        
                        <div className="space-y-4">
                            <div className="bg-gray-800/30 p-4 rounded-xl">
                                <div className="text-2xl font-black text-emerald-400 font-mono">
                                    {productAnalytics.totalSales}
                                </div>
                                <div className="text-gray-400 text-sm">Total Sales</div>
                            </div>
                            
                            <div className="bg-gray-800/30 p-4 rounded-xl">
                                <div className="text-2xl font-black text-cyan-400 font-mono">
                                    ${productAnalytics.revenue.toLocaleString()}
                                </div>
                                <div className="text-gray-400 text-sm">Revenue</div>
                            </div>
                            
                            <div className="bg-gray-800/30 p-4 rounded-xl">
                                <div className="text-2xl font-black text-blue-400 font-mono">
                                    {productAnalytics.conversionRate}%
                                </div>
                                <div className="text-gray-400 text-sm">Conversion Rate</div>
                            </div>
                            
                            <div className="bg-gray-800/30 p-4 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <div className="text-xl font-black text-yellow-400 font-mono">
                                        {productAnalytics.avgRating}
                                    </div>
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                </div>
                                <div className="text-gray-400 text-sm">{productAnalytics.reviews} reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Sales */}
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700">
                        <h3 className="text-lg font-bold text-purple-400 font-mono mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            [RECENT_SALES]
                        </h3>
                        
                        <div className="space-y-3">
                            {productAnalytics.recentSales.map((sale, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <div className="text-gray-400">
                                        {new Date(sale.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white">{sale.sales}</span>
                                        <span className="text-emerald-400 font-mono">${sale.revenue}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Main Form */}
                <div className="col-span-2 space-y-6">
                    {/* Status Alert */}
                    {hasChanges && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-4"
                        >
                            <div className="flex items-center gap-3">
                                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                                <div>
                                    <h4 className="text-yellow-400 font-bold font-mono">UNSAVED CHANGES</h4>
                                    <p className="text-gray-300 text-sm">You have unsaved changes. Don't forget to save!</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Basic Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <h2 className="text-xl font-bold text-emerald-400 font-mono mb-6 flex items-center gap-2">
                            <FileText className="w-6 h-6" />
                            [BASIC_INFORMATION]
                        </h2>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-300 font-mono font-semibold mb-2">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-300 font-mono font-semibold mb-2">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono h-32 resize-none focus:border-emerald-400 transition-all duration-300"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Price (USD)
                                    </label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            step="0.01"
                                            className="w-full pl-12 bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Configuration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <h2 className="text-xl font-bold text-cyan-400 font-mono mb-6 flex items-center gap-2">
                            <Settings className="w-6 h-6" />
                            [CONFIGURATION]
                        </h2>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-gray-300 font-mono font-semibold mb-2">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono"
                                >
                                    <option value="active">Active</option>
                                    <option value="draft">Draft</option>
                                    <option value="paused">Paused</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 font-mono font-semibold mb-2">
                                    Stock Type
                                </label>
                                <select
                                    name="stock_type"
                                    value={formData.stock_type}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono"
                                >
                                    <option value="unlimited">Unlimited</option>
                                    <option value="limited">Limited</option>
                                    <option value="out_of_stock">Out of Stock</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 font-mono font-semibold mb-2">
                                    Rarity
                                </label>
                                <select
                                    name="metadata.rarity"
                                    value={formData.metadata.rarity}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono"
                                >
                                    {rarities.map(rarity => (
                                        <option key={rarity.id} value={rarity.id}>{rarity.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="featured"
                                checked={formData.featured}
                                onChange={handleInputChange}
                                className="w-5 h-5 rounded"
                            />
                            <label className="text-gray-300 font-mono font-semibold">
                                Featured Product (Show on homepage)
                            </label>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <h2 className="text-xl font-bold text-yellow-400 font-mono mb-6 flex items-center gap-2">
                            <Tag className="w-6 h-6" />
                            [TAGS_METADATA]
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-300 font-mono font-semibold mb-2">
                                    Add Tags
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={currentTag}
                                        onChange={(e) => setCurrentTag(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && addTag()}
                                        placeholder="Add tag..."
                                        className="flex-1 bg-gray-800/60 border border-gray-600 rounded-lg text-white px-4 py-2 font-mono"
                                    />
                                    <button
                                        onClick={addTag}
                                        className="bg-yellow-600/20 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-yellow-500/30 transition-all duration-300"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {formData.metadata.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-mono flex items-center gap-2"
                                    >
                                        {tag}
                                        <button
                                            onClick={() => removeTag(tag)}
                                            className="hover:text-red-400 transition-colors"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Action Panel */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="col-span-1 space-y-6"
                >
                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700">
                        <h3 className="text-lg font-bold text-blue-400 font-mono mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5" />
                            [QUICK_ACTIONS]
                        </h3>
                        
                        <div className="space-y-3">
                            <button className="w-full bg-emerald-600/20 border border-emerald-400/30 text-emerald-400 p-3 rounded-lg font-mono font-bold hover:bg-emerald-500/30 transition-all duration-300">
                                <Eye className="w-4 h-4 inline mr-2" />
                                PREVIEW_STORE
                            </button>
                            
                            <button className="w-full bg-cyan-600/20 border border-cyan-400/30 text-cyan-400 p-3 rounded-lg font-mono font-bold hover:bg-cyan-500/30 transition-all duration-300">
                                <Users className="w-4 h-4 inline mr-2" />
                                VIEW_CUSTOMERS
                            </button>
                            
                            <button className="w-full bg-purple-600/20 border border-purple-400/30 text-purple-400 p-3 rounded-lg font-mono font-bold hover:bg-purple-500/30 transition-all duration-300">
                                <ShoppingCart className="w-4 h-4 inline mr-2" />
                                VIEW_ORDERS
                            </button>
                            
                            <button className="w-full bg-red-600/20 border border-red-400/30 text-red-400 p-3 rounded-lg font-mono font-bold hover:bg-red-500/30 transition-all duration-300">
                                <Trash2 className="w-4 h-4 inline mr-2" />
                                DELETE_PRODUCT
                            </button>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700">
                        <h3 className="text-lg font-bold text-orange-400 font-mono mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            [PRODUCT_INFO]
                        </h3>
                        
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Product ID:</span>
                                <span className="text-white font-mono">{product.id}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Created:</span>
                                <span className="text-white font-mono">{new Date(product.created).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Last Updated:</span>
                                <span className="text-white font-mono">Just now</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Views:</span>
                                <span className="text-white font-mono">{productAnalytics.viewsThisMonth}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EditProductPage;