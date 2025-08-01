import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Store,
    Save,
    Upload,
    Globe,
    Palette,
    Settings,
    Image,
    Type,
    Layout,
    Code,
    Eye,
    RefreshCw,
    CheckCircle,
    AlertTriangle,
    Info,
    Camera,
    Link,
    Copy,
    ExternalLink,
    Monitor,
    Smartphone,
    Tablet,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    MessageCircle,
    Mail,
    Phone,
    MapPin,
    Clock,
    Star,
    Shield,
    Zap,
    Users,
    TrendingUp,
    Package,
    Crown,
    Target,
    Dice6,
    Gamepad2,
    Server,
    CreditCard,
    DollarSign
} from "lucide-react";

const StoreSettingsPage = () => {
    const [activeTab, setActiveTab] = useState("general");
    const [saving, setSaving] = useState(false);
    const [previewMode, setPreviewMode] = useState("desktop");
    
    const [storeData, setStoreData] = useState({
        // General Settings
        name: "Los Santos Roleplay Store",
        tagline: "Premium FiveM Digital Items & Services",
        description: "Official digital marketplace for Los Santos Roleplay server. Purchase VIP memberships, in-game money, vehicles, ranks, and more with instant automated delivery.",
        logo: null,
        favicon: null,
        banner: null,
        
        // Server Connection
        server: {
            name: "Los Santos Roleplay",
            ip: "connect.lsrp.com:30120",
            rcon_password: "",
            api_key: "",
            connection_type: "rcon", // rcon, api, webhook
            auto_delivery: true,
            test_connection: false
        },
        
        // Appearance
        theme: "cyberpunk",
        primaryColor: "#10B981",
        secondaryColor: "#06B6D4",
        accentColor: "#F59E0B",
        font: "Inter",
        
        // Store Configuration
        currency: "USD",
        language: "en",
        timezone: "America/New_York",
        status: "online",
        maintenance_message: "",
        commission_rate: 5, // Platform commission percentage
        
        // Payment Methods
        payment_methods: {
            paypal: { enabled: true, fees: 2.9 },
            stripe: { enabled: true, fees: 2.9 },
            fawry: { enabled: false, fees: 3.5 }, // Egyptian payment method
            vodafone_cash: { enabled: false, fees: 2.5 },
            crypto: { enabled: false, fees: 1.5 }
        },
        
        // Contact & Social
        contact: {
            email: "support@lsrp-store.com",
            discord: "https://discord.gg/lsrp",
            website: "https://lsrp.com",
            phone: "+1 (555) 123-4567"
        },
        social: {
            facebook: "",
            twitter: "",
            instagram: "",
            youtube: "",
            tiktok: ""
        },
        
        // Player Integration
        integration: {
            steam_api_key: "",
            discord_bot_token: "",
            require_steam: true,
            require_discord: false,
            auto_link_accounts: true,
            verify_server_membership: true
        },
        
        // Payout Settings
        payout: {
            method: "paypal", // paypal, bank, crypto
            threshold: 100, // Minimum payout amount
            schedule: "weekly", // daily, weekly, monthly
            account_info: {
                paypal_email: "",
                bank_account: "",
                crypto_wallet: ""
            }
        }
    });

    const settingsTabs = [
        { id: "general", label: "General", icon: <Store className="w-5 h-5" /> },
        { id: "server", label: "Server Connection", icon: <Server className="w-5 h-5" /> },
        { id: "appearance", label: "Appearance", icon: <Palette className="w-5 h-5" /> },
        { id: "payments", label: "Payment Methods", icon: <CreditCard className="w-5 h-5" /> },
        { id: "integration", label: "Player Integration", icon: <Users className="w-5 h-5" /> },
        { id: "payout", label: "Payout Settings", icon: <DollarSign className="w-5 h-5" /> },
        { id: "contact", label: "Contact & Social", icon: <Mail className="w-5 h-5" /> }
    ];

    const themes = [
        { id: "cyberpunk", name: "Cyberpunk", colors: ["#10B981", "#06B6D4", "#8B5CF6"] },
        { id: "modern", name: "Modern", colors: ["#3B82F6", "#EF4444", "#F59E0B"] },
        { id: "minimal", name: "Minimal", colors: ["#6B7280", "#1F2937", "#F3F4F6"] },
        { id: "gaming", name: "Gaming", colors: ["#10B981", "#F59E0B", "#EF4444"] },
        { id: "neon", name: "Neon", colors: ["#EC4899", "#06B6D4", "#F59E0B"] }
    ];

    const handleInputChange = (section, field, value) => {
        if (section) {
            setStoreData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
        } else {
            setStoreData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleSave = async () => {
        setSaving(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Saving store settings:", storeData);
        setSaving(false);
    };

    const renderGeneralSettings = () => (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-emerald-400 font-mono mb-6 flex items-center gap-2">
                    <Store className="w-6 h-6" />
                    [STORE_IDENTITY]
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Store Name
                        </label>
                        <input
                            type="text"
                            value={storeData.name}
                            onChange={(e) => handleInputChange(null, 'name', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Tagline
                        </label>
                        <input
                            type="text"
                            value={storeData.tagline}
                            onChange={(e) => handleInputChange(null, 'tagline', e.target.value)}
                            placeholder="A short catchy phrase about your store"
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Description
                        </label>
                        <textarea
                            value={storeData.description}
                            onChange={(e) => handleInputChange(null, 'description', e.target.value)}
                            placeholder="Detailed description of your store and what you offer"
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono h-32 resize-none focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Store Status
                        </label>
                        <select
                            value={storeData.status}
                            onChange={(e) => handleInputChange(null, 'status', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        >
                            <option value="online">Online</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="private">Private</option>
                            <option value="coming_soon">Coming Soon</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Currency
                        </label>
                        <select
                            value={storeData.currency}
                            onChange={(e) => handleInputChange(null, 'currency', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="CAD">CAD ($)</option>
                        </select>
                    </div>
                </div>
            </motion.div>

            {/* Logo & Branding */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-cyan-400 font-mono mb-6 flex items-center gap-2">
                    <Image className="w-6 h-6" />
                    [BRANDING_ASSETS]
                </h3>

                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-4">
                            Store Logo
                        </label>
                        <div className="bg-gray-800/30 border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-cyan-400 transition-colors cursor-pointer">
                            <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-400 text-sm font-mono">Upload Logo</p>
                            <p className="text-gray-500 text-xs">PNG, JPG up to 2MB</p>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-4">
                            Favicon
                        </label>
                        <div className="bg-gray-800/30 border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-cyan-400 transition-colors cursor-pointer">
                            <Globe className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-400 text-sm font-mono">Upload Favicon</p>
                            <p className="text-gray-500 text-xs">ICO, PNG 32x32px</p>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-4">
                            Banner Image
                        </label>
                        <div className="bg-gray-800/30 border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-cyan-400 transition-colors cursor-pointer">
                            <Layout className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-400 text-sm font-mono">Upload Banner</p>
                            <p className="text-gray-500 text-xs">1920x400px recommended</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    const renderAppearanceSettings = () => (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-emerald-400 font-mono mb-6 flex items-center gap-2">
                    <Palette className="w-6 h-6" />
                    [THEME_SELECTION]
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    {themes.map((theme) => (
                        <div
                            key={theme.id}
                            onClick={() => handleInputChange(null, 'theme', theme.id)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                storeData.theme === theme.id
                                    ? 'border-emerald-400 bg-emerald-500/10'
                                    : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                            }`}
                        >
                            <h4 className="text-white font-mono font-bold mb-3">{theme.name}</h4>
                            <div className="flex gap-2">
                                {theme.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="w-6 h-6 rounded-full"
                                        style={{ backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-cyan-400 font-mono mb-6 flex items-center gap-2">
                    <Type className="w-6 h-6" />
                    [CUSTOM_COLORS]
                </h3>

                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Primary Color
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="color"
                                value={storeData.primaryColor}
                                onChange={(e) => handleInputChange(null, 'primaryColor', e.target.value)}
                                className="w-12 h-12 rounded-lg border border-gray-600 bg-gray-800"
                            />
                            <input
                                type="text"
                                value={storeData.primaryColor}
                                onChange={(e) => handleInputChange(null, 'primaryColor', e.target.value)}
                                className="flex-1 bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Secondary Color
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="color"
                                value={storeData.secondaryColor}
                                onChange={(e) => handleInputChange(null, 'secondaryColor', e.target.value)}
                                className="w-12 h-12 rounded-lg border border-gray-600 bg-gray-800"
                            />
                            <input
                                type="text"
                                value={storeData.secondaryColor}
                                onChange={(e) => handleInputChange(null, 'secondaryColor', e.target.value)}
                                className="flex-1 bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Accent Color
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="color"
                                value={storeData.accentColor}
                                onChange={(e) => handleInputChange(null, 'accentColor', e.target.value)}
                                className="w-12 h-12 rounded-lg border border-gray-600 bg-gray-800"
                            />
                            <input
                                type="text"
                                value={storeData.accentColor}
                                onChange={(e) => handleInputChange(null, 'accentColor', e.target.value)}
                                className="flex-1 bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Preview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-purple-400 font-mono flex items-center gap-2">
                        <Eye className="w-6 h-6" />
                        [LIVE_PREVIEW]
                    </h3>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setPreviewMode("desktop")}
                            className={`p-2 rounded-lg transition-colors ${
                                previewMode === "desktop" ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <Monitor className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setPreviewMode("tablet")}
                            className={`p-2 rounded-lg transition-colors ${
                                previewMode === "tablet" ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <Tablet className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setPreviewMode("mobile")}
                            className={`p-2 rounded-lg transition-colors ${
                                previewMode === "mobile" ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <Smartphone className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <div className="bg-gray-800 rounded-lg p-6" style={{ 
                        background: `linear-gradient(135deg, ${storeData.primaryColor}15, ${storeData.secondaryColor}15)`
                    }}>
                        <h4 className="text-2xl font-bold text-white mb-2">{storeData.name}</h4>
                        <p className="text-gray-300 mb-4">{storeData.tagline}</p>
                        <div className="flex gap-4">
                            <div 
                                className="px-4 py-2 rounded-lg font-mono font-bold"
                                style={{ backgroundColor: storeData.primaryColor, color: 'white' }}
                            >
                                SHOP_NOW
                            </div>
                            <div 
                                className="px-4 py-2 rounded-lg border font-mono font-bold"
                                style={{ 
                                    borderColor: storeData.secondaryColor,
                                    color: storeData.secondaryColor
                                }}
                            >
                                LEARN_MORE
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    const renderContactSettings = () => (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-emerald-400 font-mono mb-6 flex items-center gap-2">
                    <Mail className="w-6 h-6" />
                    [CONTACT_INFORMATION]
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Support Email
                        </label>
                        <input
                            type="email"
                            value={storeData.contact.email}
                            onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={storeData.contact.phone}
                            onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Discord Server
                        </label>
                        <input
                            type="url"
                            value={storeData.contact.discord}
                            onChange={(e) => handleInputChange('contact', 'discord', e.target.value)}
                            placeholder="https://discord.gg/..."
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Website
                        </label>
                        <input
                            type="url"
                            value={storeData.contact.website}
                            onChange={(e) => handleInputChange('contact', 'website', e.target.value)}
                            placeholder="https://..."
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-cyan-400 font-mono mb-6 flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    [SOCIAL_MEDIA]
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2 flex items-center gap-2">
                            <Facebook className="w-4 h-4" />
                            Facebook
                        </label>
                        <input
                            type="url"
                            value={storeData.social.facebook}
                            onChange={(e) => handleInputChange('social', 'facebook', e.target.value)}
                            placeholder="https://facebook.com/..."
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-cyan-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2 flex items-center gap-2">
                            <Twitter className="w-4 h-4" />
                            Twitter
                        </label>
                        <input
                            type="url"
                            value={storeData.social.twitter}
                            onChange={(e) => handleInputChange('social', 'twitter', e.target.value)}
                            placeholder="https://twitter.com/..."
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-cyan-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2 flex items-center gap-2">
                            <Instagram className="w-4 h-4" />
                            Instagram
                        </label>
                        <input
                            type="url"
                            value={storeData.social.instagram}
                            onChange={(e) => handleInputChange('social', 'instagram', e.target.value)}
                            placeholder="https://instagram.com/..."
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-cyan-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2 flex items-center gap-2">
                            <Youtube className="w-4 h-4" />
                            YouTube
                        </label>
                        <input
                            type="url"
                            value={storeData.social.youtube}
                            onChange={(e) => handleInputChange('social', 'youtube', e.target.value)}
                            placeholder="https://youtube.com/..."
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-cyan-400 transition-all duration-300"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case "general":
                return renderGeneralSettings();
            case "appearance":
                return renderAppearanceSettings();
            case "contact":
                return renderContactSettings();
            case "features":
                return (
                    <div className="text-center py-20">
                        <div className="text-gray-400 font-mono text-xl mb-4">
                            [FEATURES_SETTINGS]
                        </div>
                        <p className="text-gray-500 font-mono">
                            Feature settings panel coming soon...
                        </p>
                    </div>
                );
            case "seo":
                return (
                    <div className="text-center py-20">
                        <div className="text-gray-400 font-mono text-xl mb-4">
                            [SEO_ANALYTICS]
                        </div>
                        <p className="text-gray-500 font-mono">
                            SEO and analytics settings coming soon...
                        </p>
                    </div>
                );
            case "legal":
                return (
                    <div className="text-center py-20">
                        <div className="text-gray-400 font-mono text-xl mb-4">
                            [LEGAL_COMPLIANCE]
                        </div>
                        <p className="text-gray-500 font-mono">
                            Legal and compliance settings coming soon...
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

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
                        [STORE_CONFIGURATION]
                    </h1>
                    <p className="text-gray-400 font-mono">
                        Configure your FiveM server store and payment integration
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Eye className="w-5 h-5 inline mr-2" />
                        PREVIEW
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {saving ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline mr-2"></div>
                                SAVING...
                            </>
                        ) : (
                            <>
                                <Save className="w-5 h-5 inline mr-2" />
                                SAVE_SETTINGS
                            </>
                        )}
                    </button>
                </div>
            </motion.div>

            <div className="grid grid-cols-4 gap-8">
                {/* Settings Navigation */}
                <div className="col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 sticky top-0"
                    >
                        <h2 className="text-lg font-bold text-emerald-400 font-mono mb-6">
                            [SETTINGS_MENU]
                        </h2>
                        <nav className="space-y-2">
                            {settingsTabs.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-mono text-left ${
                                        activeTab === tab.id
                                            ? 'bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {tab.icon}
                                    <span className="text-sm font-bold">{tab.label}</span>
                                </motion.button>
                            ))}
                        </nav>

                        {/* Quick Stats */}
                        <div className="mt-8 space-y-3">
                            <h3 className="text-cyan-400 font-mono font-bold text-sm">SERVER_STATUS</h3>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <div className="text-emerald-400 font-mono font-bold flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                    CONNECTED
                                </div>
                                <div className="text-gray-400 text-xs">FiveM Server</div>
                            </div>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <div className="text-cyan-400 font-mono font-bold">247/300</div>
                                <div className="text-gray-400 text-xs">Players Online</div>
                            </div>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <div className="text-yellow-400 font-mono font-bold">${storeData.commission_rate}%</div>
                                <div className="text-gray-400 text-xs">Commission Rate</div>
                            </div>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <div className="text-purple-400 font-mono font-bold">98.7%</div>
                                <div className="text-gray-400 text-xs">Auto Delivery</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Settings Content */}
                <div className="col-span-3">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default StoreSettingsPage;