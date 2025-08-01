import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Filter,
    Download,
    Users,
    Star,
    DollarSign,
    ShoppingCart,
    Calendar,
    MapPin,
    Mail,
    Phone,
    MessageSquare,
    Eye,
    Edit,
    Ban,
    Crown,
    Shield,
    Activity,
    TrendingUp,
    TrendingDown,
    MoreVertical,
    CheckCircle,
    XCircle,
    AlertTriangle,
    Globe,
    ExternalLink,
    UserPlus,
    RefreshCw,
    Copy,
    FileText,
    Gift,
    Zap,
    Clock,
    Heart,
    Flag,
    SortAsc,
    SortDesc,
    Grid,
    List,
    ChevronDown,
    Plus,
    Minus,
    BarChart3
} from "lucide-react";

const CustomersPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTier, setSelectedTier] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [sortBy, setSortBy] = useState("joined_desc");
    const [viewMode, setViewMode] = useState("cards");
    const [selectedCustomers, setSelectedCustomers] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    // Mock customers data
    const [customers, setCustomers] = useState([
        {
            id: "CUST-001",
            username: "john_doe",
            email: "john@example.com",
            discord: "JohnDoe#1234",
            real_name: "John Doe",
            avatar: "JD",
            tier: "vip",
            status: "active",
            verified: true,
            country: "United States",
            joined: "2023-06-15",
            last_seen: "2024-01-22T10:30:00Z",
            total_orders: 8,
            total_spent: 449.92,
            lifetime_value: 650.00,
            average_order: 56.24,
            favorite_category: "weapons",
            risk_score: "low",
            notes: "VIP customer, always pays on time",
            tags: ["vip", "trusted", "high-value"],
            referrals: 3,
            wishlist_items: 5
        },
        {
            id: "CUST-002",
            username: "gaming_pro",
            email: "pro@example.com",
            discord: "GamingPro#5678",
            real_name: "Mike Johnson",
            avatar: "GP",
            tier: "gold",
            status: "active",
            verified: true,
            country: "Canada",
            joined: "2023-08-20",
            last_seen: "2024-01-22T08:15:00Z",
            total_orders: 15,
            total_spent: 289.85,
            lifetime_value: 380.00,
            average_order: 19.32,
            favorite_category: "vehicles",
            risk_score: "low",
            notes: "Regular customer, loves vehicle packs",
            tags: ["regular", "vehicles"],
            referrals: 2,
            wishlist_items: 8
        },
        {
            id: "CUST-003",
            username: "player123",
            email: "player@example.com",
            discord: "Player123#9999",
            real_name: "Sarah Wilson",
            avatar: "P1",
            tier: "bronze",
            status: "active",
            verified: false,
            country: "United Kingdom",
            joined: "2024-01-10",
            last_seen: "2024-01-22T06:45:00Z",
            total_orders: 3,
            total_spent: 52.97,
            lifetime_value: 75.00,
            average_order: 17.66,
            favorite_category: "lootboxes",
            risk_score: "medium",
            notes: "New customer, monitoring activity",
            tags: ["new", "potential"],
            referrals: 0,
            wishlist_items: 12
        },
        {
            id: "CUST-004",
            username: "veteran_player",
            email: "veteran@example.com",
            discord: "Veteran#0001",
            real_name: "Robert Chen",
            avatar: "VP",
            tier: "platinum",
            status: "inactive",
            verified: true,
            country: "Australia",
            joined: "2023-01-05",
            last_seen: "2023-12-15T14:30:00Z",
            total_orders: 25,
            total_spent: 1249.75,
            lifetime_value: 1500.00,
            average_order: 49.99,
            favorite_category: "bundles",
            risk_score: "low",
            notes: "High-value customer, inactive for 1+ month",
            tags: ["platinum", "inactive", "high-value"],
            referrals: 8,
            wishlist_items: 3
        },
        {
            id: "CUST-005",
            username: "speedster",
            email: "speed@example.com",
            discord: "Speedster#7777",
            real_name: "Alex Rodriguez",
            avatar: "SS",
            tier: "silver",
            status: "suspended",
            verified: false,
            country: "Spain",
            joined: "2023-11-22",
            last_seen: "2024-01-20T12:00:00Z",
            total_orders: 6,
            total_spent: 156.94,
            lifetime_value: 200.00,
            average_order: 26.16,
            favorite_category: "vehicles",
            risk_score: "high",
            notes: "Suspended due to chargeback dispute",
            tags: ["suspended", "dispute", "risky"],
            referrals: 1,
            wishlist_items: 0
        },
        {
            id: "CUST-006",
            username: "tactical_ops",
            email: "tactical@example.com",
            discord: "TacticalOps#4444",
            real_name: "Emma Thompson",
            avatar: "TO",
            tier: "gold",
            status: "active",
            verified: true,
            country: "Germany",
            joined: "2023-07-08",
            last_seen: "2024-01-21T16:45:00Z",
            total_orders: 12,
            total_spent: 398.88,
            lifetime_value: 500.00,
            average_order: 33.24,
            favorite_category: "equipment",
            risk_score: "low",
            notes: "Loves tactical equipment, consistent buyer",
            tags: ["gold", "tactical", "consistent"],
            referrals: 4,
            wishlist_items: 6
        }
    ]);

    const tiers = [
        { id: "all", label: "All Tiers", count: customers.length, color: "gray" },
        { id: "platinum", label: "Platinum", count: customers.filter(c => c.tier === 'platinum').length, color: "purple" },
        { id: "vip", label: "VIP", count: customers.filter(c => c.tier === 'vip').length, color: "yellow" },
        { id: "gold", label: "Gold", count: customers.filter(c => c.tier === 'gold').length, color: "orange" },
        { id: "silver", label: "Silver", count: customers.filter(c => c.tier === 'silver').length, color: "gray" },
        { id: "bronze", label: "Bronze", count: customers.filter(c => c.tier === 'bronze').length, color: "amber" }
    ];

    const statusOptions = [
        { id: "all", label: "All Status", count: customers.length },
        { id: "active", label: "Active", count: customers.filter(c => c.status === 'active').length },
        { id: "inactive", label: "Inactive", count: customers.filter(c => c.status === 'inactive').length },
        { id: "suspended", label: "Suspended", count: customers.filter(c => c.status === 'suspended').length }
    ];

    const countries = [
        { id: "all", label: "All Countries" },
        { id: "United States", label: "United States" },
        { id: "Canada", label: "Canada" },
        { id: "United Kingdom", label: "United Kingdom" },
        { id: "Germany", label: "Germany" },
        { id: "Australia", label: "Australia" },
        { id: "Spain", label: "Spain" }
    ];

    const sortOptions = [
        { id: "joined_desc", label: "Newest First" },
        { id: "joined_asc", label: "Oldest First" },
        { id: "spent_desc", label: "Highest Spent" },
        { id: "spent_asc", label: "Lowest Spent" },
        { id: "orders_desc", label: "Most Orders" },
        { id: "last_seen_desc", label: "Recently Active" },
        { id: "username_asc", label: "Username A-Z" }
    ];

    // Filter and sort customers
    const filteredCustomers = customers
        .filter(customer => {
            const matchesSearch = customer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                customer.real_name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTier = selectedTier === "all" || customer.tier === selectedTier;
            const matchesStatus = selectedStatus === "all" || customer.status === selectedStatus;
            const matchesCountry = selectedCountry === "all" || customer.country === selectedCountry;
            return matchesSearch && matchesTier && matchesStatus && matchesCountry;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "joined_desc":
                    return new Date(b.joined) - new Date(a.joined);
                case "joined_asc":
                    return new Date(a.joined) - new Date(b.joined);
                case "spent_desc":
                    return b.total_spent - a.total_spent;
                case "spent_asc":
                    return a.total_spent - b.total_spent;
                case "orders_desc":
                    return b.total_orders - a.total_orders;
                case "last_seen_desc":
                    return new Date(b.last_seen) - new Date(a.last_seen);
                case "username_asc":
                    return a.username.localeCompare(b.username);
                default:
                    return 0;
            }
        });

    const getTierColor = (tier) => {
        switch (tier) {
            case "platinum":
                return "purple";
            case "vip":
                return "yellow";
            case "gold":
                return "orange";
            case "silver":
                return "gray";
            case "bronze":
                return "amber";
            default:
                return "gray";
        }
    };

    const getTierIcon = (tier) => {
        switch (tier) {
            case "platinum":
            case "vip":
                return <Crown className="w-4 h-4" />;
            case "gold":
                return <Star className="w-4 h-4" />;
            case "silver":
                return <Shield className="w-4 h-4" />;
            case "bronze":
                return <Zap className="w-4 h-4" />;
            default:
                return <Users className="w-4 h-4" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "emerald";
            case "inactive":
                return "gray";
            case "suspended":
                return "red";
            default:
                return "gray";
        }
    };

    const getRiskColor = (risk) => {
        switch (risk) {
            case "low":
                return "emerald";
            case "medium":
                return "yellow";
            case "high":
                return "red";
            default:
                return "gray";
        }
    };

    const calculateStats = () => {
        const totalRevenue = filteredCustomers.reduce((sum, customer) => sum + customer.total_spent, 0);
        const averageLTV = filteredCustomers.length > 0 
            ? filteredCustomers.reduce((sum, customer) => sum + customer.lifetime_value, 0) / filteredCustomers.length
            : 0;
        const activeCustomers = filteredCustomers.filter(c => c.status === 'active').length;
        const vipCustomers = filteredCustomers.filter(c => c.tier === 'vip' || c.tier === 'platinum').length;
        
        return {
            totalCustomers: filteredCustomers.length,
            totalRevenue,
            averageLTV,
            activeCustomers,
            vipCustomers
        };
    };

    const stats = calculateStats();

    const CustomerCard = ({ customer }) => (
        <motion.div
            layout
            className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
            whileHover={{ scale: 1.02 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                            {customer.avatar}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-white font-bold">{customer.username}</h3>
                                {customer.verified && (
                                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                                )}
                            </div>
                            <p className="text-gray-400 text-sm">{customer.real_name}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-${getTierColor(customer.tier)}-500/20 border border-${getTierColor(customer.tier)}-400/30`}>
                            <div className={`text-${getTierColor(customer.tier)}-400`}>
                                {getTierIcon(customer.tier)}
                            </div>
                            <span className={`text-${getTierColor(customer.tier)}-400 font-mono text-xs font-bold`}>
                                {customer.tier.toUpperCase()}
                            </span>
                        </div>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <MoreVertical className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-4 mb-4">
                    <div className={`flex items-center gap-1 text-${getStatusColor(customer.status)}-400`}>
                        <div className={`w-2 h-2 bg-${getStatusColor(customer.status)}-400 rounded-full ${customer.status === 'active' ? 'animate-pulse' : ''}`}></div>
                        <span className="font-mono text-xs font-bold">{customer.status.toUpperCase()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span className="text-xs">{customer.country}</span>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-mono bg-${getRiskColor(customer.risk_score)}-500/20 text-${getRiskColor(customer.risk_score)}-400`}>
                        {customer.risk_score.toUpperCase()}
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <div className="text-emerald-400 font-mono font-bold text-lg">
                            ${customer.total_spent.toFixed(2)}
                        </div>
                        <div className="text-gray-400 text-xs">Total Spent</div>
                    </div>
                    <div>
                        <div className="text-cyan-400 font-mono font-bold text-lg">
                            {customer.total_orders}
                        </div>
                        <div className="text-gray-400 text-xs">Orders</div>
                    </div>
                    <div>
                        <div className="text-blue-400 font-mono font-bold text-lg">
                            ${customer.average_order.toFixed(2)}
                        </div>
                        <div className="text-gray-400 text-xs">Avg Order</div>
                    </div>
                    <div>
                        <div className="text-yellow-400 font-mono font-bold text-lg">
                            ${customer.lifetime_value.toFixed(2)}
                        </div>
                        <div className="text-gray-400 text-xs">LTV</div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Joined:</span>
                        <span className="text-gray-300">{new Date(customer.joined).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Last Seen:</span>
                        <span className="text-gray-300">{new Date(customer.last_seen).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Referrals:</span>
                        <span className="text-emerald-400 font-mono">{customer.referrals}</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {customer.tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400 px-3 py-2 rounded-lg text-sm font-mono font-bold hover:from-emerald-500/30 hover:to-cyan-500/30 transition-all duration-300">
                        <Eye className="w-4 h-4 inline mr-2" />
                        VIEW
                    </button>
                    <button className="bg-gray-700/50 text-gray-400 px-3 py-2 rounded-lg hover:bg-gray-600/50 hover:text-cyan-400 transition-all duration-300">
                        <Mail className="w-4 h-4" />
                    </button>
                    <button className="bg-gray-700/50 text-gray-400 px-3 py-2 rounded-lg hover:bg-gray-600/50 hover:text-purple-400 transition-all duration-300">
                        <MessageSquare className="w-4 h-4" />
                    </button>
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
                        [CUSTOMER_MANAGEMENT]
                    </h1>
                    <p className="text-gray-400 font-mono">
                        Manage customer relationships and analyze user behavior
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Download className="w-5 h-5 inline mr-2" />
                        EXPORT
                    </button>
                    <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300">
                        <UserPlus className="w-5 h-5 inline mr-2" />
                        ADD_CUSTOMER
                    </button>
                </div>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-5 gap-6"
            >
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Users className="w-8 h-8 text-emerald-400" />
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-black text-emerald-400 font-mono mb-1">
                        {stats.totalCustomers}
                    </div>
                    <div className="text-gray-300 text-sm">Total Customers</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Activity className="w-8 h-8 text-cyan-400" />
                        <TrendingUp className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-black text-cyan-400 font-mono mb-1">
                        {stats.activeCustomers}
                    </div>
                    <div className="text-gray-300 text-sm">Active Users</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Crown className="w-8 h-8 text-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-black text-yellow-400 font-mono mb-1">
                        {stats.vipCustomers}
                    </div>
                    <div className="text-gray-300 text-sm">VIP/Platinum</div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <DollarSign className="w-8 h-8 text-blue-400" />
                        <BarChart3 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-2xl font-black text-blue-400 font-mono mb-1">
                        ${stats.totalRevenue.toFixed(0)}
                    </div>
                    <div className="text-gray-300 text-sm">Total Revenue</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Heart className="w-8 h-8 text-purple-400" />
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-black text-purple-400 font-mono mb-1">
                        ${stats.averageLTV.toFixed(0)}
                    </div>
                    <div className="text-gray-300 text-sm">Avg LTV</div>
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
                                placeholder="Search customers, emails, usernames..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-96 pl-12 pr-4 py-3 bg-gray-800/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300 font-mono"
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
                                onClick={() => setViewMode("cards")}
                                className={`p-2 rounded transition-colors ${
                                    viewMode === "cards" ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode("table")}
                                className={`p-2 rounded transition-colors ${
                                    viewMode === "table" ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400 hover:text-white'
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

                {/* Tier Filter Pills */}
                <div className="flex flex-wrap gap-3 mb-4">
                    {tiers.map((tier) => (
                        <button
                            key={tier.id}
                            onClick={() => setSelectedTier(tier.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 font-mono text-sm ${
                                selectedTier === tier.id
                                    ? `bg-${tier.color}-500/20 border-${tier.color}-400/30 text-${tier.color}-400`
                                    : 'bg-gray-800/30 border-gray-600 text-gray-400 hover:text-white hover:border-gray-500'
                            }`}
                        >
                            {tier.id !== "all" && (
                                <div className={selectedTier === tier.id ? `text-${tier.color}-400` : 'text-gray-400'}>
                                    {getTierIcon(tier.id)}
                                </div>
                            )}
                            {tier.label}
                            <span className="opacity-60">({tier.count})</span>
                        </button>
                    ))}
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
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Status
                                    </label>
                                    <select
                                        value={selectedStatus}
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                        className="w-full bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono"
                                    >
                                        {statusOptions.map(status => (
                                            <option key={status.id} value={status.id}>
                                                {status.label} ({status.count})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Country
                                    </label>
                                    <select
                                        value={selectedCountry}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                        className="w-full bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono"
                                    >
                                        {countries.map(country => (
                                            <option key={country.id} value={country.id}>{country.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Spending Range
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="number"
                                            placeholder="Min"
                                            className="flex-1 bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max"
                                            className="flex-1 bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Customers Display */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={viewMode === "cards" ? "grid grid-cols-3 gap-6" : "space-y-4"}
            >
                {filteredCustomers.map((customer) => (
                    <CustomerCard key={customer.id} customer={customer} />
                ))}
            </motion.div>

            {/* Empty State */}
            {filteredCustomers.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <div className="text-gray-400 font-mono text-xl mb-2">
                        [NO_CUSTOMERS_FOUND]
                    </div>
                    <p className="text-gray-500 font-mono mb-6">
                        {searchTerm || selectedTier !== "all" || selectedStatus !== "all" || selectedCountry !== "all"
                            ? "Try adjusting your filters or search terms"
                            : "No customers registered yet"
                        }
                    </p>
                    <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300">
                        <UserPlus className="w-5 h-5 inline mr-2" />
                        ADD_FIRST_CUSTOMER
                    </button>
                </motion.div>
            )}

            {/* Pagination */}
            {filteredCustomers.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                >
                    <div className="text-gray-400 font-mono text-sm">
                        Showing {filteredCustomers.length} of {customers.length} customers
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

export default CustomersPage;