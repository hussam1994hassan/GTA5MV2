import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Filter,
    Download,
    RefreshCw,
    Eye,
    MoreVertical,
    CheckCircle,
    XCircle,
    Clock,
    AlertTriangle,
    Truck,
    DollarSign,
    User,
    Calendar,
    Package,
    CreditCard,
    RotateCcw,
    Send,
    Flag,
    TrendingUp,
    TrendingDown,
    BarChart3,
    Users,
    ShoppingCart,
    Activity,
    Copy,
    ExternalLink,
    ChevronDown,
    SortAsc,
    SortDesc,
    Grid,
    List,
    PlayCircle,
    PauseCircle,
    Ban,
    CheckSquare,
    Square,
    FileText,
    MessageSquare,
    Star,
    MapPin,
    Phone,
    Mail
} from "lucide-react";

const OrdersPage = ({ onViewOrder }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedTimeRange, setSelectedTimeRange] = useState("all");
    const [sortBy, setSortBy] = useState("created_desc");
    const [viewMode, setViewMode] = useState("table");
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [loading, setLoading] = useState(false);

    // Mock orders data
    const [orders, setOrders] = useState([
        {
            id: "ORD-2024-001234",
            customer: {
                name: "John Doe",
                username: "john_doe",
                email: "john@example.com",
                avatar: "JD",
                verified: true
            },
            product: "Legendary Weapon Pack",
            amount: 49.99,
            status: "completed",
            payment_method: "PayPal",
            created_at: "2024-01-22T10:30:00Z",
            delivered_at: "2024-01-22T10:35:00Z",
            country: "United States",
            items_count: 3,
            transaction_id: "PAYPAL-ABC123",
            risk_score: "low"
        },
        {
            id: "ORD-2024-001235",
            customer: {
                name: "Gaming Pro",
                username: "gaming_pro",
                email: "pro@example.com",
                avatar: "GP",
                verified: true
            },
            product: "Supercar Bundle",
            amount: 89.99,
            status: "processing",
            payment_method: "Stripe",
            created_at: "2024-01-22T09:15:00Z",
            delivered_at: null,
            country: "Canada",
            items_count: 5,
            transaction_id: "STRIPE-XYZ789",
            risk_score: "low"
        },
        {
            id: "ORD-2024-001236",
            customer: {
                name: "Player 123",
                username: "player123",
                email: "player@example.com",
                avatar: "P1",
                verified: false
            },
            product: "Mystery Crate",
            amount: 12.99,
            status: "pending",
            payment_method: "PayPal",
            created_at: "2024-01-22T08:45:00Z",
            delivered_at: null,
            country: "United Kingdom",
            items_count: 1,
            transaction_id: "PENDING",
            risk_score: "medium"
        },
        {
            id: "ORD-2024-001237",
            customer: {
                name: "Roleplay King",
                username: "rp_king",
                email: "king@example.com",
                avatar: "RK",
                verified: true
            },
            product: "VIP Membership",
            amount: 29.99,
            status: "refunded",
            payment_method: "Stripe",
            created_at: "2024-01-21T16:20:00Z",
            delivered_at: "2024-01-21T16:25:00Z",
            country: "Australia",
            items_count: 1,
            transaction_id: "STRIPE-REF456",
            risk_score: "low"
        },
        {
            id: "ORD-2024-001238",
            customer: {
                name: "Speed Racer",
                username: "speedster",
                email: "speed@example.com",
                avatar: "SR",
                verified: false
            },
            product: "Racing Package",
            amount: 39.99,
            status: "cancelled",
            payment_method: "PayPal",
            created_at: "2024-01-21T14:30:00Z",
            delivered_at: null,
            country: "Germany",
            items_count: 4,
            transaction_id: "CANCELLED",
            risk_score: "high"
        },
        {
            id: "ORD-2024-001239",
            customer: {
                name: "Tactical User",
                username: "tactical_ops",
                email: "tactical@example.com",
                avatar: "TO",
                verified: true
            },
            product: "Tactical Gear Set",
            amount: 24.99,
            status: "failed",
            payment_method: "Stripe",
            created_at: "2024-01-21T12:00:00Z",
            delivered_at: null,
            country: "France",
            items_count: 2,
            transaction_id: "FAILED",
            risk_score: "medium"
        }
    ]);

    const statusOptions = [
        { id: "all", label: "All Status", count: orders.length, color: "gray" },
        { id: "completed", label: "Completed", count: orders.filter(o => o.status === 'completed').length, color: "emerald" },
        { id: "processing", label: "Processing", count: orders.filter(o => o.status === 'processing').length, color: "blue" },
        { id: "pending", label: "Pending", count: orders.filter(o => o.status === 'pending').length, color: "yellow" },
        { id: "refunded", label: "Refunded", count: orders.filter(o => o.status === 'refunded').length, color: "orange" },
        { id: "cancelled", label: "Cancelled", count: orders.filter(o => o.status === 'cancelled').length, color: "red" },
        { id: "failed", label: "Failed", count: orders.filter(o => o.status === 'failed').length, color: "red" }
    ];

    const timeRanges = [
        { id: "all", label: "All Time" },
        { id: "today", label: "Today" },
        { id: "week", label: "This Week" },
        { id: "month", label: "This Month" },
        { id: "quarter", label: "This Quarter" }
    ];

    const sortOptions = [
        { id: "created_desc", label: "Newest First" },
        { id: "created_asc", label: "Oldest First" },
        { id: "amount_desc", label: "Highest Amount" },
        { id: "amount_asc", label: "Lowest Amount" },
        { id: "customer_asc", label: "Customer A-Z" },
        { id: "status_asc", label: "Status" }
    ];

    // Filter and sort orders
    const filteredOrders = orders
        .filter(order => {
            const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                order.customer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                order.product.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = selectedStatus === "all" || order.status === selectedStatus;
            return matchesSearch && matchesStatus;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "created_desc":
                    return new Date(b.created_at) - new Date(a.created_at);
                case "created_asc":
                    return new Date(a.created_at) - new Date(b.created_at);
                case "amount_desc":
                    return b.amount - a.amount;
                case "amount_asc":
                    return a.amount - b.amount;
                case "customer_asc":
                    return a.customer.name.localeCompare(b.customer.name);
                case "status_asc":
                    return a.status.localeCompare(b.status);
                default:
                    return 0;
            }
        });

    const getStatusIcon = (status) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="w-4 h-4" />;
            case "processing":
                return <RefreshCw className="w-4 h-4 animate-spin" />;
            case "pending":
                return <Clock className="w-4 h-4" />;
            case "refunded":
                return <RotateCcw className="w-4 h-4" />;
            case "cancelled":
                return <XCircle className="w-4 h-4" />;
            case "failed":
                return <AlertTriangle className="w-4 h-4" />;
            default:
                return <Package className="w-4 h-4" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "emerald";
            case "processing":
                return "blue";
            case "pending":
                return "yellow";
            case "refunded":
                return "orange";
            case "cancelled":
            case "failed":
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

    const handleSelectOrder = (orderId) => {
        setSelectedOrders(prev =>
            prev.includes(orderId)
                ? prev.filter(id => id !== orderId)
                : [...prev, orderId]
        );
    };

    const handleSelectAll = () => {
        setSelectedOrders(
            selectedOrders.length === filteredOrders.length
                ? []
                : filteredOrders.map(o => o.id)
        );
    };

    const handleBulkAction = async (action) => {
        setLoading(true);
        console.log(`Performing ${action} on orders:`, selectedOrders);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setSelectedOrders([]);
    };

    const calculateStats = () => {
        const totalRevenue = filteredOrders.reduce((sum, order) => 
            order.status === 'completed' ? sum + order.amount : sum, 0
        );
        const averageOrderValue = filteredOrders.length > 0 
            ? totalRevenue / filteredOrders.filter(o => o.status === 'completed').length
            : 0;
        
        return {
            totalOrders: filteredOrders.length,
            totalRevenue,
            averageOrderValue,
            completedOrders: filteredOrders.filter(o => o.status === 'completed').length,
            pendingOrders: filteredOrders.filter(o => o.status === 'pending' || o.status === 'processing').length
        };
    };

    const stats = calculateStats();

    const OrderRow = ({ order }) => (
        <motion.div
            layout
            className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-cyan-400/30 transition-all duration-300 group"
        >
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                    className="w-4 h-4 rounded"
                />

                {/* Order ID & Status */}
                <div className="min-w-[140px]">
                    <div className="text-white font-mono font-bold text-sm mb-1">
                        {order.id}
                    </div>
                    <div className={`flex items-center gap-1 text-${getStatusColor(order.status)}-400`}>
                        {getStatusIcon(order.status)}
                        <span className="text-xs font-mono font-bold">
                            {order.status.toUpperCase()}
                        </span>
                    </div>
                </div>

                {/* Customer */}
                <div className="flex items-center gap-3 min-w-[200px]">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {order.customer.avatar}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-semibold">{order.customer.name}</span>
                            {order.customer.verified && (
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                            )}
                        </div>
                        <div className="text-gray-400 text-sm font-mono">
                            {order.customer.username}
                        </div>
                    </div>
                </div>

                {/* Product */}
                <div className="flex-1 min-w-[180px]">
                    <div className="text-white font-semibold truncate mb-1">
                        {order.product}
                    </div>
                    <div className="text-gray-400 text-sm">
                        {order.items_count} item{order.items_count !== 1 ? 's' : ''}
                    </div>
                </div>

                {/* Amount */}
                <div className="text-right min-w-[80px]">
                    <div className="text-emerald-400 font-mono font-bold">
                        ${order.amount}
                    </div>
                    <div className="text-gray-400 text-xs font-mono">
                        {order.payment_method}
                    </div>
                </div>

                {/* Risk Score */}
                <div className="min-w-[60px]">
                    <div className={`px-2 py-1 rounded text-xs font-mono text-center bg-${getRiskColor(order.risk_score)}-500/20 text-${getRiskColor(order.risk_score)}-400`}>
                        {order.risk_score.toUpperCase()}
                    </div>
                </div>

                {/* Date */}
                <div className="text-right min-w-[100px]">
                    <div className="text-gray-300 text-sm">
                        {new Date(order.created_at).toLocaleDateString()}
                    </div>
                    <div className="text-gray-500 text-xs">
                        {new Date(order.created_at).toLocaleTimeString()}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button
                        onClick={() => onViewOrder(order)}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4" />
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
                        [ORDER_MANAGEMENT]
                    </h1>
                    <p className="text-gray-400 font-mono">
                        Track and manage all customer orders
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Download className="w-5 h-5 inline mr-2" />
                        EXPORT
                    </button>
                    <button 
                        onClick={() => window.location.reload()}
                        className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300"
                    >
                        <RefreshCw className="w-5 h-5 inline mr-2" />
                        REFRESH
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
                        <ShoppingCart className="w-8 h-8 text-emerald-400" />
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-black text-emerald-400 font-mono mb-1">
                        {stats.totalOrders}
                    </div>
                    <div className="text-gray-300 text-sm">Total Orders</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <DollarSign className="w-8 h-8 text-cyan-400" />
                        <TrendingUp className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-black text-cyan-400 font-mono mb-1">
                        ${stats.totalRevenue.toFixed(2)}
                    </div>
                    <div className="text-gray-300 text-sm">Total Revenue</div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <BarChart3 className="w-8 h-8 text-blue-400" />
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-2xl font-black text-blue-400 font-mono mb-1">
                        ${stats.averageOrderValue.toFixed(2)}
                    </div>
                    <div className="text-gray-300 text-sm">Average Order</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <CheckCircle className="w-8 h-8 text-yellow-400" />
                        <Activity className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-black text-yellow-400 font-mono mb-1">
                        {stats.completedOrders}
                    </div>
                    <div className="text-gray-300 text-sm">Completed</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Clock className="w-8 h-8 text-purple-400" />
                        <RefreshCw className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-black text-purple-400 font-mono mb-1">
                        {stats.pendingOrders}
                    </div>
                    <div className="text-gray-300 text-sm">Pending</div>
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
                                placeholder="Search orders, customers, products..."
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
                        <button 
                            onClick={() => window.location.reload()}
                            className="text-gray-400 hover:text-emerald-400 transition-colors p-2"
                        >
                            <RefreshCw className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Status Filter Pills */}
                <div className="flex flex-wrap gap-3 mb-4">
                    {statusOptions.map((status) => (
                        <button
                            key={status.id}
                            onClick={() => setSelectedStatus(status.id)}
                            className={`px-4 py-2 rounded-lg border transition-all duration-300 font-mono text-sm ${
                                selectedStatus === status.id
                                    ? `bg-${status.color}-500/20 border-${status.color}-400/30 text-${status.color}-400`
                                    : 'bg-gray-800/30 border-gray-600 text-gray-400 hover:text-white hover:border-gray-500'
                            }`}
                        >
                            {status.label}
                            <span className="ml-2 opacity-60">({status.count})</span>
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
                            <div className="grid grid-cols-4 gap-6">
                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Time Range
                                    </label>
                                    <select
                                        value={selectedTimeRange}
                                        onChange={(e) => setSelectedTimeRange(e.target.value)}
                                        className="w-full bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono"
                                    >
                                        {timeRanges.map(range => (
                                            <option key={range.id} value={range.id}>{range.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Payment Method
                                    </label>
                                    <select className="w-full bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono">
                                        <option value="all">All Methods</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="stripe">Stripe</option>
                                        <option value="crypto">Crypto</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Risk Level
                                    </label>
                                    <select className="w-full bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono">
                                        <option value="all">All Levels</option>
                                        <option value="low">Low Risk</option>
                                        <option value="medium">Medium Risk</option>
                                        <option value="high">High Risk</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                                        Amount Range
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

            {/* Bulk Actions */}
            {selectedOrders.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-blue-400 font-mono font-bold">
                                {selectedOrders.length} order{selectedOrders.length !== 1 ? 's' : ''} selected
                            </span>
                            <button
                                onClick={handleSelectAll}
                                className="text-blue-400 hover:text-blue-300 font-mono text-sm transition-colors"
                            >
                                {selectedOrders.length === filteredOrders.length ? 'Deselect All' : 'Select All'}
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => handleBulkAction('mark_shipped')}
                                disabled={loading}
                                className="bg-emerald-600/20 border border-emerald-400/30 text-emerald-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-emerald-500/30 transition-all duration-300 disabled:opacity-50"
                            >
                                <Truck className="w-4 h-4 inline mr-2" />
                                MARK_SHIPPED
                            </button>
                            <button
                                onClick={() => handleBulkAction('send_notification')}
                                disabled={loading}
                                className="bg-cyan-600/20 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-cyan-500/30 transition-all duration-300 disabled:opacity-50"
                            >
                                <Send className="w-4 h-4 inline mr-2" />
                                NOTIFY
                            </button>
                            <button
                                onClick={() => handleBulkAction('flag')}
                                disabled={loading}
                                className="bg-red-600/20 border border-red-400/30 text-red-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-red-500/30 transition-all duration-300 disabled:opacity-50"
                            >
                                <Flag className="w-4 h-4 inline mr-2" />
                                FLAG
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Orders Table Header */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
            >
                <div className="flex items-center gap-4">
                    <input
                        type="checkbox"
                        checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                        onChange={handleSelectAll}
                        className="w-4 h-4 rounded"
                    />
                    <div className="min-w-[140px] text-gray-400 font-mono font-bold text-sm">
                        ORDER ID
                    </div>
                    <div className="min-w-[200px] text-gray-400 font-mono font-bold text-sm">
                        CUSTOMER
                    </div>
                    <div className="flex-1 min-w-[180px] text-gray-400 font-mono font-bold text-sm">
                        PRODUCT
                    </div>
                    <div className="min-w-[80px] text-gray-400 font-mono font-bold text-sm text-right">
                        AMOUNT
                    </div>
                    <div className="min-w-[60px] text-gray-400 font-mono font-bold text-sm text-center">
                        RISK
                    </div>
                    <div className="min-w-[100px] text-gray-400 font-mono font-bold text-sm text-right">
                        DATE
                    </div>
                    <div className="w-16"></div>
                </div>
            </motion.div>

            {/* Orders List */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
            >
                {filteredOrders.map((order) => (
                    <OrderRow key={order.id} order={order} />
                ))}
            </motion.div>

            {/* Empty State */}
            {filteredOrders.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <div className="text-gray-400 font-mono text-xl mb-2">
                        [NO_ORDERS_FOUND]
                    </div>
                    <p className="text-gray-500 font-mono mb-6">
                        {searchTerm || selectedStatus !== "all"
                            ? "Try adjusting your filters or search terms"
                            : "No orders have been placed yet"
                        }
                    </p>
                    <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300">
                        <RefreshCw className="w-5 h-5 inline mr-2" />
                        REFRESH
                    </button>
                </motion.div>
            )}

            {/* Pagination */}
            {filteredOrders.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                >
                    <div className="text-gray-400 font-mono text-sm">
                        Showing {filteredOrders.length} of {orders.length} orders
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

export default OrdersPage;