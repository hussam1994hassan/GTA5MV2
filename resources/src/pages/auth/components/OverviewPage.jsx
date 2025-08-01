import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area
} from "recharts";
import {
    DollarSign,
    TrendingUp,
    TrendingDown,
    Users,
    ShoppingCart,
    Package,
    Eye,
    Clock,
    Star,
    Crown,
    Target,
    Zap,
    Globe,
    Activity,
    ArrowUp,
    ArrowDown,
    MoreVertical,
    ExternalLink,
    CheckCircle,
    AlertTriangle,
    RefreshCw,
    Calendar,
    Filter,
    Download,
    Bell,
    Server,
    Copy,
    Edit,
    Wallet,
    CreditCard,
    PlayCircle,
    Shield
} from "lucide-react";

const defaultServerData = {
    name: "",
    plan: "",
    status: "",
    players: 0,
    maxPlayers: 0,
    uptime: "",
    version: "",
    revenue: { today: 0, week: 0, month: 0, total: 0 },
    commission: { earned: 0, rate: 0 },
    orders: { pending: 0, total: 0 },
    automatedDeliveries: { successRate: 0 },
    customers: { new: 0, total: 0 }
};

const OverviewPage = ({
    serverData = defaultServerData,
    onEditProduct,
    onViewOrder
}) => {
    const [timeRange, setTimeRange] = useState("7d");
    const [selectedMetric, setSelectedMetric] = useState("revenue");

    // Mock analytics data
    const chartData = [
        { name: 'Mon', revenue: 1200, orders: 45, players: 180, visitors: 320 },
        { name: 'Tue', revenue: 1900, orders: 62, players: 220, visitors: 450 },
        { name: 'Wed', revenue: 800, orders: 28, players: 190, visitors: 380 },
        { name: 'Thu', revenue: 2400, orders: 78, players: 250, visitors: 520 },
        { name: 'Fri', revenue: 3200, orders: 95, players: 280, visitors: 680 },
        { name: 'Sat', revenue: 4100, orders: 125, players: 300, visitors: 750 },
        { name: 'Sun', revenue: 2800, orders: 89, players: 270, visitors: 620 }
    ];

    const pieData = [
        { name: 'Weapons', value: 35, color: '#10B981', revenue: 15420 },
        { name: 'Vehicles', value: 28, color: '#06B6D4', revenue: 12340 },
        { name: 'Loot Boxes', value: 22, color: '#8B5CF6', revenue: 9876 },
        { name: 'Bundles', value: 15, color: '#F59E0B', revenue: 6543 }
    ];

    const recentTransactions = [
        { id: "TXN001", player: "john_doe", playerAvatar: "JD", item: "VIP Membership", amount: 49.99, status: "completed", time: "2 minutes ago", method: "PayPal", steamId: "76561198000000001" },
        { id: "TXN002", player: "gamer_pro", playerAvatar: "GP", item: "Premium Vehicle Package", amount: 89.99, status: "completed", time: "8 minutes ago", method: "Stripe", steamId: "76561198000000002" },
        { id: "TXN003", player: "player123", playerAvatar: "P1", item: "In-Game Money ($500K)", amount: 12.99, status: "pending", time: "15 minutes ago", method: "PayPal", steamId: "76561198000000003" },
        { id: "TXN004", player: "roleplay_king", playerAvatar: "RK", item: "Police Rank Promotion", amount: 29.99, status: "completed", time: "1 hour ago", method: "Stripe", steamId: "76561198000000004" },
        { id: "TXN005", player: "speedster", playerAvatar: "SS", item: "Custom Vehicle Skin", amount: 19.99, status: "refunded", time: "2 hours ago", method: "PayPal", steamId: "76561198000000005" }
    ];

    const topProducts = [
        { id: 1, name: "VIP Membership (30 Days)", sales: 234, revenue: 11666.66, trend: "up", growth: 15.3, category: "membership" },
        { id: 2, name: "In-Game Money ($1M)", sales: 892, revenue: 11587.08, trend: "up", growth: 8.7, category: "money" },
        { id: 3, name: "Premium Vehicle Bundle", sales: 156, revenue: 14038.44, trend: "up", growth: 12.1, category: "vehicles" },
        { id: 4, name: "Police Rank Package", sales: 67, revenue: 2009.33, trend: "stable", growth: 0.5, category: "ranks" }
    ];

    const notifications = [
        { type: "success", title: "New Sale", message: "john_doe purchased Legendary Weapon Pack", time: "2 min ago" },
        { type: "warning", title: "Low Stock", message: "Tactical Gear Set is running low", time: "15 min ago" },
        { type: "info", title: "Server Restart", message: "FiveM server restarted successfully", time: "2 hours ago" }
    ];

    const StatCard = ({ title, value, subtitle, icon, color, trend, percentage, onClick }) => (
        <motion.div 
            className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 hover:border-${color}-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden cursor-pointer`}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
        >
            <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className={`text-${color}-400 group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                    {trend && (
                        <div className={`flex items-center gap-1 text-sm font-mono ${percentage > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {percentage > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                            {Math.abs(percentage)}%
                        </div>
                    )}
                </div>
                <div className={`text-3xl font-black font-mono text-${color}-400 mb-2`}>
                    {value}
                </div>
                <div className="text-white font-mono font-bold text-lg mb-1">
                    {title}
                </div>
                <div className="text-gray-400 font-mono text-sm">
                    {subtitle}
                </div>
            </div>
        </motion.div>
    );

    const TransactionRow = ({ transaction }) => (
        <motion.div 
            className="group bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-cyan-400/30 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {transaction.playerAvatar}
                    </div>
                    <div>
                        <div className="text-white font-semibold">{transaction.item}</div>
                        <div className="text-gray-400 text-sm font-mono">
                            {transaction.player} • {transaction.time}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-emerald-400 font-mono font-bold">
                            ${transaction.amount}
                        </div>
                        <div className={`text-xs font-mono px-2 py-1 rounded ${
                            transaction.status === 'completed' 
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : transaction.status === 'pending'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                        }`}>
                            {transaction.status.toUpperCase()}
                        </div>
                    </div>
                    <button 
                        onClick={() => onViewOrder(transaction)}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="space-y-8">
            {/* Server Status Banner */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-400/30 rounded-2xl p-6 backdrop-blur-sm"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                            <Server className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white">{serverData.name}</h1>
                            <div className="flex items-center gap-4 text-sm">
                                <span className="text-emerald-400 font-mono flex items-center gap-1">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                    FiveM SERVER ONLINE
                                </span>
                                <span className="text-gray-400 font-mono">
                                    {serverData.players}/{serverData.maxPlayers} players connected
                                </span>
                                <span className="text-gray-400 font-mono">
                                    Uptime: {serverData.uptime}
                                </span>
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-mono font-bold">
                                    {serverData.plan.toUpperCase()} PLAN
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300">
                            <Globe className="w-5 h-5 inline mr-2" />
                            VIEW_STORE
                        </button>
                        <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                            <Copy className="w-5 h-5 inline mr-2" />
                            COPY_STORE_LINK
                        </button>
                        <button className="bg-blue-600/20 border border-blue-400/30 text-blue-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-blue-500/30 transition-all duration-300">
                            <RefreshCw className="w-5 h-5 inline mr-2" />
                            SYNC_SERVER
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-5 gap-6"
            >
                <StatCard
                    title="Store Revenue"
                    value={`${serverData.revenue.today.toLocaleString()}`}
                    subtitle="Today's earnings from players"
                    icon={<DollarSign className="w-8 h-8" />}
                    color="emerald"
                    trend={true}
                    percentage={15.3}
                />
                <StatCard
                    title="Commission Fee"
                    value={`${
                        serverData?.commission?.earned !== undefined
                            ? serverData.commission.earned.toLocaleString()
                            : "0"
                    }`}
                    subtitle={`${
                        serverData?.commission?.rate !== undefined
                            ? serverData.commission.rate
                            : "0"
                    }% platform fee earned`}
                    icon={<TrendingUp className="w-8 h-8" />}
                    color="cyan"
                    trend={true}
                    percentage={8.7}
                />
                <StatCard
                    title="Total Orders"
                    value={serverData.orders.total.toLocaleString()}
                    subtitle={`${serverData.orders.pending} pending delivery`}
                    icon={<ShoppingCart className="w-8 h-8" />}
                    color="blue"
                    trend={true}
                    percentage={12.1}
                />
                <StatCard
                    title="Auto Delivery"
                    value={`${serverData?.automatedDeliveries?.successRate !== undefined
                        ? serverData.automatedDeliveries.successRate
                        : 0}%`}
                    subtitle="Successful automated deliveries"
                    icon={<Zap className="w-8 h-8" />}
                    color="yellow"
                    trend={true}
                    percentage={2.4}
                />
                <StatCard
                    title="Active Players"
                    value={serverData.players}
                    subtitle={`${serverData.customers.new} new customers today`}
                    icon={<Users className="w-8 h-8" />}
                    color="purple"
                    trend={true}
                    percentage={-2.4}
                />
            </motion.div>

            {/* Charts Section */}
            <div className="grid grid-cols-3 gap-8">
                {/* Revenue Analytics */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="col-span-2 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white font-mono">
                            [REVENUE_ANALYTICS]
                        </h2>
                        <div className="flex gap-2">
                            <select 
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value)}
                                className="bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 text-sm font-mono"
                            >
                                <option value="7d">Last 7 days</option>
                                <option value="30d">Last 30 days</option>
                                <option value="90d">Last 3 months</option>
                            </select>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#1F2937', 
                                    border: '1px solid #374151',
                                    borderRadius: '8px',
                                    color: '#F3F4F6'
                                }} 
                            />
                            <Area 
                                type="monotone" 
                                dataKey="revenue" 
                                stroke="#10B981" 
                                fillOpacity={1} 
                                fill="url(#revenueGradient)" 
                                strokeWidth={2}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="orders" 
                                stroke="#06B6D4" 
                                fillOpacity={1} 
                                fill="url(#ordersGradient)" 
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Category Distribution */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
                >
                    <h2 className="text-xl font-bold text-white font-mono mb-6">
                        [CATEGORY_SALES]
                    </h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#1F2937', 
                                    border: '1px solid #374151',
                                    borderRadius: '8px',
                                    color: '#F3F4F6'
                                }} 
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-2 mt-4">
                        {pieData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div 
                                        className="w-3 h-3 rounded-full" 
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                    <span className="text-gray-300 text-sm">{item.name}</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-sm">
                                    ${item.revenue.toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-2 gap-8">
                {/* Recent Transactions */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white font-mono">
                            [RECENT_TRANSACTIONS]
                        </h2>
                        <button className="text-cyan-400 hover:text-emerald-400 font-mono text-sm transition-colors">
                            VIEW_ALL
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentTransactions.map((transaction) => (
                            <TransactionRow key={transaction.id} transaction={transaction} />
                        ))}
                    </div>
                </motion.div>

                {/* Top Products */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white font-mono">
                            [TOP_PRODUCTS]
                        </h2>
                        <button className="text-cyan-400 hover:text-emerald-400 font-mono text-sm transition-colors">
                            MANAGE
                        </button>
                    </div>
                    <div className="space-y-4">
                        {topProducts.map((product, index) => (
                            <div key={product.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-mono font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">{product.name}</div>
                                        <div className="text-gray-400 text-sm">{product.sales} sales</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <div className="text-emerald-400 font-mono font-bold">
                                            ${product.revenue.toLocaleString()}
                                        </div>
                                        <div className={`flex items-center gap-1 text-xs ${
                                            product.trend === 'up' ? 'text-emerald-400' :
                                            product.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                                        }`}>
                                            {product.trend === 'up' && <ArrowUp className="w-3 h-3" />}
                                            {product.trend === 'down' && <ArrowDown className="w-3 h-3" />}
                                            {product.growth > 0 && `+${product.growth}%`}
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => onEditProduct(product)}
                                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-5 gap-4"
            >
                <button className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400 p-6 rounded-xl font-mono font-bold hover:from-emerald-500/30 hover:to-cyan-500/30 transition-all duration-300 group">
                    <Package className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm">ADD_PRODUCT</div>
                </button>
                
                <button className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 text-blue-400 p-6 rounded-xl font-mono font-bold hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 group">
                    <Eye className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm">VIEW_ANALYTICS</div>
                </button>
                
                <button className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-400/30 text-yellow-400 p-6 rounded-xl font-mono font-bold hover:from-yellow-500/30 hover:to-orange-500/30 transition-all duration-300 group">
                    <Globe className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm">STORE_SETTINGS</div>
                </button>
                
                <button className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 text-purple-400 p-6 rounded-xl font-mono font-bold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 group">
                    <Download className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm">EXPORT_DATA</div>
                </button>
                
                <button className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-400/30 text-red-400 p-6 rounded-xl font-mono font-bold hover:from-red-500/30 hover:to-orange-500/30 transition-all duration-300 group">
                    <Shield className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm">SECURITY</div>
                </button>
            </motion.div>

            {/* Notifications & Alerts */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                        <Bell className="w-6 h-6" />
                        [NOTIFICATIONS_ALERTS]
                    </h2>
                    <button className="text-cyan-400 hover:text-emerald-400 font-mono text-sm transition-colors">
                        MARK_ALL_READ
                    </button>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                    {notifications.map((notification, index) => (
                        <div key={index} className={`p-4 rounded-xl border ${
                            notification.type === 'success' ? 'bg-emerald-500/10 border-emerald-400/20' :
                            notification.type === 'warning' ? 'bg-yellow-500/10 border-yellow-400/20' :
                            'bg-blue-500/10 border-blue-400/20'
                        }`}>
                            <div className="flex items-start gap-3">
                                {notification.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />}
                                {notification.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />}
                                {notification.type === 'info' && <Activity className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />}
                                <div className="flex-1">
                                    <h4 className={`font-bold font-mono text-sm mb-1 ${
                                        notification.type === 'success' ? 'text-emerald-400' :
                                        notification.type === 'warning' ? 'text-yellow-400' :
                                        'text-blue-400'
                                    }`}>
                                        {notification.title}
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-2">{notification.message}</p>
                                    <p className="text-gray-500 text-xs font-mono">{notification.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default OverviewPage;