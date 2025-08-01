import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Plus,
    Save,
    X,
    Upload,
    Image,
    Package,
    DollarSign,
    Tag,
    FileText,
    Settings,
    Eye,
    AlertTriangle,
    CheckCircle,
    Trash2,
    Copy,
    Star,
    Target,
    Crown,
    Dice6,
    Gamepad2,
    Shield,
    Zap,
    Layers,
    Code,
    Percent,
    Clock,
    Infinity
} from "lucide-react";

const AddProductPage = ({ onProductAdded }) => {
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
        items: [
            {
                type: "weapon",
                name: "",
                quantity: 1,
                // Drop rate only for loot boxes
                drop_rate: 100, // Percentage (0-100)
                // Duration applies to all items
                duration_type: "permanent", // "permanent" or "temporary"
                duration_value: "", // Duration in days if temporary
                metadata: {}
            }
        ]
    });

    const [currentTag, setCurrentTag] = useState("");
    const [preview, setPreview] = useState(false);
    const [errors, setErrors] = useState({});

    const categories = [
        { id: "weapons", label: "Weapons", icon: <Target className="w-4 h-4" />, color: "emerald" },
        { id: "vehicles", label: "Vehicles", icon: <Crown className="w-4 h-4" />, color: "cyan" },
        { id: "lootboxes", label: "Loot Boxes", icon: <Dice6 className="w-4 h-4" />, color: "purple" },
        { id: "bundles", label: "Bundles", icon: <Package className="w-4 h-4" />, color: "yellow" },
        { id: "equipment", label: "Equipment", icon: <Shield className="w-4 h-4" />, color: "blue" },
        { id: "memberships", label: "Memberships", icon: <Star className="w-4 h-4" />, color: "orange" }
    ];

    const rarities = [
        { id: "common", label: "Common", color: "gray", baseDropRate: 60 },
        { id: "uncommon", label: "Uncommon", color: "green", baseDropRate: 25 },
        { id: "rare", label: "Rare", color: "blue", baseDropRate: 10 },
        { id: "epic", label: "Epic", color: "purple", baseDropRate: 4 },
        { id: "legendary", label: "Legendary", color: "yellow", baseDropRate: 1 }
    ];

    const weaponTypes = [
        "WEAPON_PISTOL", "WEAPON_COMBATPISTOL", "WEAPON_APPISTOL", "WEAPON_PISTOL50",
        "WEAPON_MICROSMG", "WEAPON_SMG", "WEAPON_ASSAULTSMG", "WEAPON_COMBATPDW",
        "WEAPON_ASSAULTRIFLE", "WEAPON_CARBINERIFLE", "WEAPON_ADVANCEDRIFLE", "WEAPON_SPECIALCARBINE",
        "WEAPON_PUMPSHOTGUN", "WEAPON_SAWNOFFSHOTGUN", "WEAPON_ASSAULTSHOTGUN", "WEAPON_BULLPUPSHOTGUN",
        "WEAPON_SNIPERRIFLE", "WEAPON_HEAVYSNIPER", "WEAPON_MARKSMANRIFLE"
    ];

    const vehicleTypes = [
        "adder", "zentorno", "osiris", "t20", "turismor", "fmj", "re7b", "tyrus",
        "pfister811", "prototipo", "vagner", "xa21", "deveste", "krieger"
    ];

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

    const addItem = () => {
        setFormData(prev => ({
            ...prev,
            items: [
                ...prev.items,
                {
                    type: formData.category === "weapons" ? "weapon" : "item",
                    name: "",
                    quantity: 1,
                    drop_rate: 100,
                    duration_type: "permanent",
                    duration_value: "",
                    metadata: {}
                }
            ]
        }));
    };

    const updateItem = (index, field, value) => {
        setFormData(prev => ({
            ...prev,
            items: prev.items.map((item, i) => 
                i === index ? { ...item, [field]: value } : item
            )
        }));
    };

    const removeItem = (index) => {
        setFormData(prev => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index)
        }));
    };

    // Auto-adjust drop rates to maintain 100% total for loot boxes
    const adjustDropRates = (changedIndex, newRate) => {
        if (formData.type !== "lootbox") return;
        
        const totalOtherRates = formData.items.reduce((sum, item, index) => {
            if (index === changedIndex) return sum;
            return sum + (item.drop_rate || 0);
        }, 0);

        const remainingRate = 100 - newRate;
        const otherItemsCount = formData.items.length - 1;

        if (otherItemsCount > 0 && remainingRate >= 0) {
            const averageOtherRate = remainingRate / otherItemsCount;
            
            setFormData(prev => ({
                ...prev,
                items: prev.items.map((item, index) => {
                    if (index === changedIndex) {
                        return { ...item, drop_rate: newRate };
                    } else {
                        return { ...item, drop_rate: Math.max(0, Math.round(averageOtherRate)) };
                    }
                })
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = "Product name is required";
        if (!formData.description.trim()) newErrors.description = "Description is required";
        if (!formData.price || formData.price <= 0) newErrors.price = "Valid price is required";
        if (formData.items.length === 0) newErrors.items = "At least one item is required";
        
        // Validate loot box specific requirements
        if (formData.type === "lootbox") {
            const totalDropRate = formData.items.reduce((sum, item) => sum + (item.drop_rate || 0), 0);
            if (Math.abs(totalDropRate - 100) > 1) { // Allow 1% tolerance
                newErrors.drop_rates = "Total drop rates must equal 100%";
            }
        }
        
        formData.items.forEach((item, index) => {
            if (!item.name.trim()) {
                newErrors[`item_${index}`] = "Item name is required";
            }
            // Only validate drop rate for loot boxes
            if (formData.type === "lootbox" && (item.drop_rate < 0 || item.drop_rate > 100)) {
                newErrors[`drop_rate_${index}`] = "Drop rate must be between 0-100%";
            }
            // Validate duration for all items
            if (item.duration_type === "temporary" && (!item.duration_value || item.duration_value <= 0)) {
                newErrors[`duration_${index}`] = "Duration is required for temporary items";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Creating product:", formData);
        alert("Product created successfully!");
        
        // Reset form
        setFormData({
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
            items: [
                {
                    type: "weapon",
                    name: "",
                    quantity: 1,
                    drop_rate: 100,
                    duration_type: "permanent",
                    duration_value: "",
                    metadata: {}
                }
            ]
        });
        
        if (onProductAdded) onProductAdded();
    };

    const selectedCategory = categories.find(cat => cat.id === formData.category);
    const isLootBox = formData.type === "lootbox";
    const totalDropRate = formData.items.reduce((sum, item) => sum + (item.drop_rate || 0), 0);

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <h1 className="text-3xl font-black text-white font-mono mb-2">
                            [ADD_NEW_PRODUCT]
                        </h1>
                        <p className="text-gray-400 font-mono">
                            Create a new product for your store
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={() => setPreview(!preview)}
                            className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300"
                        >
                            <Eye className="w-5 h-5 inline mr-2" />
                            PREVIEW
                        </button>
                        <button 
                            onClick={handleSubmit}
                            className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300"
                        >
                            <Save className="w-5 h-5 inline mr-2" />
                            CREATE_PRODUCT
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="col-span-2 space-y-6">
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
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Product Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Legendary Weapon Pack"
                                        className={`w-full bg-gray-800/60 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300`}
                                    />
                                    {errors.name && <p className="text-red-400 text-sm mt-1 font-mono">{errors.name}</p>}
                                </div>
                                
                                <div className="col-span-2">
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Description *
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        placeholder="Describe your product in detail..."
                                        className={`w-full bg-gray-800/60 border ${errors.description ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white px-4 py-3 font-mono h-32 resize-none focus:border-emerald-400 transition-all duration-300`}
                                    />
                                    {errors.description && <p className="text-red-400 text-sm mt-1 font-mono">{errors.description}</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Price (USD) *
                                    </label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            placeholder="0.00"
                                            min="0"
                                            step="0.01"
                                            className={`w-full pl-12 bg-gray-800/60 border ${errors.price ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300`}
                                        />
                                    </div>
                                    {errors.price && <p className="text-red-400 text-sm mt-1 font-mono">{errors.price}</p>}
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
                        </motion.div>

                        {/* Product Configuration */}
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

                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Product Type
                                    </label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono"
                                    >
                                        <option value="single">Single Item</option>
                                        <option value="bundle">Bundle</option>
                                        <option value="lootbox">Loot Box</option>
                                        <option value="subscription">Subscription</option>
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
                                    </select>
                                </div>
                            </div>

                            {formData.stock_type === "limited" && (
                                <div className="mt-4">
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Stock Quantity
                                    </label>
                                    <input
                                        type="number"
                                        name="stock_quantity"
                                        value={formData.stock_quantity}
                                        onChange={handleInputChange}
                                        placeholder="Enter quantity"
                                        min="0"
                                        className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono"
                                    />
                                </div>
                            )}

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

                        {/* Items Configuration */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-xl font-bold text-purple-400 font-mono flex items-center gap-2">
                                        <Package className="w-6 h-6" />
                                        [ITEMS_INCLUDED]
                                    </h2>
                                    {isLootBox && (
                                        <div className={`px-3 py-1 rounded-full text-sm font-mono ${
                                            Math.abs(totalDropRate - 100) <= 1 
                                                ? 'bg-emerald-500/20 text-emerald-400' 
                                                : 'bg-red-500/20 text-red-400'
                                        }`}>
                                            Total: {totalDropRate}%
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={addItem}
                                    className="bg-purple-600/20 border border-purple-400/30 text-purple-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-purple-500/30 transition-all duration-300"
                                >
                                    <Plus className="w-4 h-4 inline mr-2" />
                                    ADD_ITEM
                                </button>
                            </div>

                            {errors.drop_rates && (
                                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                                    <p className="text-red-400 text-sm font-mono">{errors.drop_rates}</p>
                                </div>
                            )}

                            <div className="space-y-4">
                                {formData.items.map((item, index) => (
                                    <div key={index} className="bg-gray-800/30 p-4 rounded-xl border border-gray-600">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-white font-mono font-bold">Item #{index + 1}</h3>
                                            {formData.items.length > 1 && (
                                                <button
                                                    onClick={() => removeItem(index)}
                                                    className="text-red-400 hover:text-red-300 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                        
                                        <div className="grid grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <label className="block text-gray-300 font-mono font-semibold mb-2 text-sm">
                                                    Type
                                                </label>
                                                <select
                                                    value={item.type}
                                                    onChange={(e) => updateItem(index, 'type', e.target.value)}
                                                    className="w-full bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                                >
                                                    <option value="weapon">Weapon</option>
                                                    <option value="vehicle">Vehicle</option>
                                                    <option value="item">Item</option>
                                                    <option value="money">Money</option>
                                                    <option value="experience">Experience</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-gray-300 font-mono font-semibold mb-2 text-sm">
                                                    Item Name
                                                </label>
                                                {item.type === "weapon" ? (
                                                    <select
                                                        value={item.name}
                                                        onChange={(e) => updateItem(index, 'name', e.target.value)}
                                                        className={`w-full bg-gray-800/60 border ${errors[`item_${index}`] ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white px-3 py-2 font-mono text-sm`}
                                                    >
                                                        <option value="">Select Weapon</option>
                                                        {weaponTypes.map(weapon => (
                                                            <option key={weapon} value={weapon}>{weapon}</option>
                                                        ))}
                                                    </select>
                                                ) : item.type === "vehicle" ? (
                                                    <select
                                                        value={item.name}
                                                        onChange={(e) => updateItem(index, 'name', e.target.value)}
                                                        className={`w-full bg-gray-800/60 border ${errors[`item_${index}`] ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white px-3 py-2 font-mono text-sm`}
                                                    >
                                                        <option value="">Select Vehicle</option>
                                                        {vehicleTypes.map(vehicle => (
                                                            <option key={vehicle} value={vehicle}>{vehicle}</option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input
                                                        type="text"
                                                        value={item.name}
                                                        onChange={(e) => updateItem(index, 'name', e.target.value)}
                                                        placeholder="Enter item name"
                                                        className={`w-full bg-gray-800/60 border ${errors[`item_${index}`] ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white px-3 py-2 font-mono text-sm`}
                                                    />
                                                )}
                                                {errors[`item_${index}`] && (
                                                    <p className="text-red-400 text-xs mt-1 font-mono">{errors[`item_${index}`]}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-gray-300 font-mono font-semibold mb-2 text-sm">
                                                    Quantity
                                                </label>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
                                                    min="1"
                                                    className="w-full bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                                />
                                            </div>
                                        </div>

                                        {/* Additional fields section */}
                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-600">
                                            {/* Drop Rate - Only for Loot Boxes */}
                                            {isLootBox && (
                                                <div>
                                                    <label className="block text-gray-300 font-mono font-semibold mb-2 text-sm flex items-center gap-2">
                                                        <Percent className="w-4 h-4" />
                                                        Drop Rate (%)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={item.drop_rate}
                                                        onChange={(e) => {
                                                            const newRate = Math.max(0, Math.min(100, parseInt(e.target.value) || 0));
                                                            adjustDropRates(index, newRate);
                                                        }}
                                                        min="0"
                                                        max="100"
                                                        className={`w-full bg-gray-800/60 border ${errors[`drop_rate_${index}`] ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white px-3 py-2 font-mono text-sm`}
                                                    />
                                                    {errors[`drop_rate_${index}`] && (
                                                        <p className="text-red-400 text-xs mt-1 font-mono">{errors[`drop_rate_${index}`]}</p>
                                                    )}
                                                </div>
                                            )}

                                            {/* Duration Type - Always visible */}
                                            <div className={isLootBox ? "" : "col-span-2"}>
                                                <label className="block text-gray-300 font-mono font-semibold mb-2 text-sm flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    Duration Type
                                                </label>
                                                <select
                                                    value={item.duration_type}
                                                    onChange={(e) => updateItem(index, 'duration_type', e.target.value)}
                                                    className="w-full bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                                >
                                                    <option value="permanent">Permanent</option>
                                                    <option value="temporary">Temporary</option>
                                                </select>
                                            </div>

                                            {/* Duration Value - Only when temporary is selected */}
                                            {item.duration_type === "temporary" && (
                                                <div className="col-span-2">
                                                    <label className="block text-gray-300 font-mono font-semibold mb-2 text-sm flex items-center gap-2">
                                                        <Clock className="w-4 h-4" />
                                                        Duration (Days)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={item.duration_value}
                                                        onChange={(e) => updateItem(index, 'duration_value', parseInt(e.target.value) || "")}
                                                        min="1"
                                                        placeholder="Enter days"
                                                        className={`w-full bg-gray-800/60 border ${errors[`duration_${index}`] ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white px-3 py-2 font-mono text-sm`}
                                                    />
                                                    {errors[`duration_${index}`] && (
                                                        <p className="text-red-400 text-xs mt-1 font-mono">{errors[`duration_${index}`]}</p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {errors.items && <p className="text-red-400 text-sm mt-2 font-mono">{errors.items}</p>}
                        </motion.div>

                        {/* Metadata */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                        >
                            <h2 className="text-xl font-bold text-yellow-400 font-mono mb-6 flex items-center gap-2">
                                <Tag className="w-6 h-6" />
                                [METADATA]
                            </h2>

                            <div className="grid grid-cols-2 gap-6">
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

                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Level Requirement
                                    </label>
                                    <input
                                        type="number"
                                        name="metadata.level_requirement"
                                        value={formData.metadata.level_requirement}
                                        onChange={handleInputChange}
                                        placeholder="0"
                                        min="0"
                                        className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Tags
                                    </label>
                                    <div className="flex gap-2 mb-3">
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
                            </div>
                        </motion.div>
                    </div>

                    {/* Preview Panel */}
                    <div className="col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                        >
                            <h2 className="text-xl font-bold text-blue-400 font-mono mb-6 flex items-center gap-2">
                                <Eye className="w-6 h-6" />
                                [PREVIEW]
                            </h2>

                            <div className="space-y-4">
                                {/* Product Card Preview */}
                                <div className="bg-gray-800/30 border border-gray-600 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            {selectedCategory && (
                                                <div className={`text-${selectedCategory.color}-400`}>
                                                    {selectedCategory.icon}
                                                </div>
                                            )}
                                            <span className={`px-2 py-1 rounded text-xs font-mono ${
                                                formData.status === 'active' 
                                                    ? 'bg-emerald-500/20 text-emerald-400'
                                                    : formData.status === 'draft'
                                                    ? 'bg-yellow-500/20 text-yellow-400'
                                                    : 'bg-gray-500/20 text-gray-400'
                                            }`}>
                                                {formData.status.toUpperCase()}
                                            </span>
                                            {isLootBox && (
                                                <span className="px-2 py-1 rounded text-xs font-mono bg-purple-500/20 text-purple-400">
                                                    LOOTBOX
                                                </span>
                                            )}
                                        </div>
                                        {formData.featured && (
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        )}
                                    </div>

                                    <h3 className="text-white font-bold text-lg mb-2">
                                        {formData.name || "Product Name"}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {formData.description || "Product description will appear here..."}
                                    </p>

                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-emerald-400 font-mono font-bold text-xl">
                                            ${formData.price || "0.00"}
                                        </div>
                                        <div className={`px-2 py-1 rounded text-xs font-mono ${
                                            formData.metadata.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                                            formData.metadata.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                                            formData.metadata.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                                            formData.metadata.rarity === 'uncommon' ? 'bg-green-500/20 text-green-400' :
                                            'bg-gray-500/20 text-gray-400'
                                        }`}>
                                            {formData.metadata.rarity.toUpperCase()}
                                        </div>
                                    </div>

                                    <div className="text-gray-400 text-sm">
                                        <div className="flex justify-between">
                                            <span>Category:</span>
                                            <span className="capitalize">{formData.category}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Items:</span>
                                            <span>{formData.items.length}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Stock:</span>
                                            <span className="capitalize">{formData.stock_type}</span>
                                        </div>
                                    </div>

                                    {formData.metadata.tags.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-1">
                                            {formData.metadata.tags.slice(0, 3).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {formData.metadata.tags.length > 3 && (
                                                <span className="text-gray-500 text-xs">
                                                    +{formData.metadata.tags.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Items Preview */}
                                <div className="bg-gray-800/30 border border-gray-600 rounded-xl p-4">
                                    <h4 className="text-white font-mono font-bold mb-3 flex items-center gap-2">
                                        Items Included:
                                        {isLootBox && <Dice6 className="w-4 h-4 text-purple-400" />}
                                    </h4>
                                    <div className="space-y-2">
                                        {formData.items.map((item, index) => (
                                            <div key={index} className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gray-300">
                                                        {item.name || `${item.type} #${index + 1}`}
                                                    </span>
                                                    {item.duration_type === "temporary" && (
                                                        <span className="text-orange-400 text-xs flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {item.duration_value}d
                                                        </span>
                                                    )}
                                                    {item.duration_type === "permanent" && (
                                                        <span className="text-emerald-400 text-xs flex items-center gap-1">
                                                            <Infinity className="w-3 h-3" />
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gray-400">x{item.quantity}</span>
                                                    {isLootBox && (
                                                        <span className="text-purple-400 text-xs">
                                                            {item.drop_rate}%
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {isLootBox && (
                                        <div className="mt-3 pt-3 border-t border-gray-600">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Total Drop Rate:</span>
                                                <span className={`font-mono ${
                                                    Math.abs(totalDropRate - 100) <= 1 
                                                        ? 'text-emerald-400' 
                                                        : 'text-red-400'
                                                }`}>
                                                    {totalDropRate}%
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;

