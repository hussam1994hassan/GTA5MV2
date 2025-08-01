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
    Area,
    RadialBarChart,
    RadialBar,
    Legend
} from "recharts";
import {
    TrendingUp,
    TrendingDown,
    BarChart3,
    Activity,
    Users,
    DollarSign,
    ShoppingCart,
    Eye,
    Clock,
    Globe,
    Target,
    Zap,
    Star,
    ArrowUp,
    ArrowDown,
    Calendar,
    Filter,
    Download,
    RefreshCw,
    Monitor,
    Smartphone,
    Tablet,
    MapPin,
    CreditCard,
    Package,
    Heart,
    MessageSquare,
    Share2,
    MousePointer,
    ExternalLink,
    Crown,
    Shield,
    Gamepad2
} from "lucide-react";

const AnalyticsPage = () => {
    const [timeRange, setTimeRange] = useState("30d");
    const [selectedMetric, setSelectedMetric] = useState("revenue");
    const [comparisonPeriod, setComparisonPeriod] = useState("previous");

    // Mock analytics data
    const revenueData = [
        { name: 'Jan', revenue: 12420, orders: 89, visitors: 2341, conversions: 3.8 },
        { name: 'Feb', revenue: 15680, orders: 112, visitors: 2892, conversions: 3.9 },
        { name: 'Mar', revenue: 18920, orders: 134, visitors: 3456, conversions: 3.9 },
        { name: 'Apr', revenue: 22340, orders: 156, visitors: 3821, conversions: 4.1 },
        { name: 'May', revenue: 19870, orders: 142, visitors: 3567, conversions: 4.0 },
        { name: 'Jun', revenue: 25430, orders: 178, visitors: 4123, conversions: 4.3 },
        { name: 'Jul', revenue: 28760, orders: 201, visitors: 4567, conversions: 4.4 },
        { name: 'Aug', revenue: 31250, orders: 219, visitors: 4892, conversions: 4.5 },
        { name: 'Sep', revenue: 29880, orders: 208, visitors: 4678, conversions: 4.4 },
        { name: 'Oct', revenue: 33640, orders: 234, visitors: 5123, conversions: 4.6 },
        { name: 'Nov', revenue: 36420, orders: 252, visitors: 5456, conversions: 4.6 },
        { name: 'Dec', revenue: 39180, orders: 271, visitors: 5789, conversions: 4.7 }
    ];

    const categoryData = [
        { name: 'Weapons', value: 35, revenue: 154230, color: '#10B981' },
        { name: 'Vehicles', value: 28, revenue: 123400, color: '#06B6D4' },
        { name: 'Loot Boxes', value: 22, revenue: 98760, color: '#8B5CF6' },
        { name: 'Equipment', value: 10, revenue: 45320, color: '#F59E0B' },
        { name: 'Memberships', value: 5, revenue: 22150, color: '#EF4444' }
    ];

    const deviceData = [
        { name: 'Desktop', users: 3245, percentage: 65.2, color: '#10B981' },
        { name: 'Mobile', users: 1456, percentage: 29.3, color: '#06B6D4' },
        { name: 'Tablet', users: 274, percentage: 5.5, color: '#8B5CF6' }
    ];

    const browserData = [
        { name: 'Chrome', value: 67.8, color: '#10B981' },
        { name: 'Firefox', value: 18.4, color: '#06B6D4' },
        { name: 'Safari', value: 9.2, color: '#8B5CF6' },
        { name: 'Edge', value: 3.1, color: '#F59E0B' },
        { name: 'Other', value: 1.5, color: '#EF4444' }
    ];

    const geoData = [
        { country: 'United States', users: 2341, revenue: 67890, percentage: 42.1 },
        { country: 'Canada', users: 876, revenue: 23450, percentage: 15.8 },
        { country: 'United Kingdom', users: 654, revenue: 18320, percentage: 11.7 },
        { country: 'Germany', users: 543, revenue: 15670, percentage: 9.8 },
        { country: 'Australia', users: 432, revenue: 12340, percentage: 7.8 },
        { country: 'Other', users: 729, revenue: 21450, percentage: 12.8 }
    ];

    const conversionFunnelData = [
        { step: 'Visitors', users: 5789, percentage: 100 },
        { step: 'Product Views', users: 3456, percentage: 59.7 },
        { step: 'Add to Cart', users: 1234, percentage: 21.3 },
        { step: 'Checkout', users: 456, percentage: 7.9 },
        { step: 'Purchase', users: 271, percentage: 4.7 }
    ];

    const topProducts = [
        { name: 'Legendary Weapon Pack', revenue: 15420, sales: 234, trend: 'up', growth: 15.3 },
        { name: 'Mystery Crate', revenue: 11587, sales: 892, trend: 'up', growth: 8.7 },
        { name: 'Supercar Bundle', revenue: 14038, sales: 156, trend: 'up', growth: 12.1 },
        { name: 'VIP Membership', revenue: 9876, sales: 329, trend: 'down', growth: -2.4 },
        { name: 'Tactical Gear Set', revenue: 7654, sales: 187, trend: 'stable', growth: 0.8 }
    ];

    const kpiData = {
        revenue: {
            current: 394180,
            previous: 356420,
            change: 10.6,
            trend: 'up'
        },
        orders: {
            current: 2756,
            previous: 2543,
            change: 8.4,
            trend: 'up'
        },
        customers: {
            current: 1892,
            previous: 1743,
            change: 8.5,
            trend: 'up'
        },
        avgOrder: {
            current: 143.12,
            previous: 140.23,
            change: 2.1,
            trend: 'up'
        },
        conversionRate: {
            current: 4.7,
            previous: 4.3,
            change: 9.3,
            trend: 'up'
        },
        returnRate: {
            current: 23.4,
            previous: 21.8,
            change: 7.3,
            trend: 'up'
        }
    };

    const timeRanges = [
        { id: "7d", label: "Last 7 days" },
        { id: "30d", label: "Last 30 days" },
        { id: "90d", label: "Last 3 months" },
        { id: "1y", label: "Last year" },
        { id: "custom", label: "Custom range" }
    ];

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    const formatPercentage = (value) => {
        return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
    };

    const KPICard = ({ title, value, previousValue, change, trend, icon, color, format = "number" }) => (
        <motion.div
            className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 hover:border-${color}-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden`}
            whileHover={{ scale: 1.02 }}
        >
            <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className={`text-${color}-400 group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-mono ${
                        trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-gray-400'
                    }`}>
                        {trend === 'up' && <ArrowUp className="w-4 h-4" />}
                        {trend === 'down' && <ArrowDown className="w-4 h-4" />}
                        {formatPercentage(change)}
                    </div>
                </div>
                
                <div className={`text-3xl font-black font-mono text-${color}-400 mb-2`}>
                    {format === "currency" ? formatCurrency(value) : 
                     format === "percentage" ? `${value}%` : 
                     value.toLocaleString()}
                </div>
                
                <div className="text-white font-mono font-bold text-lg mb-1">
                    {title}
                </div>
                
                <div className="text-gray-400 font-mono text-sm">
                    vs {format === "currency" ? formatCurrency(previousValue) : previousValue.toLocaleString()} last period
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
                        [ANALYTICS_DASHBOARD]
                    </h1>
                    <p className="text-gray-400 font-mono">
                        Deep insights into your store performance and customer behavior
                    </p>
                </div>
                <div className="flex gap-3">
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="bg-gray-800/60 border border-gray-600 rounded-lg text-white px-4 py-2 font-mono"
                    >
                        {timeRanges.map(range => (
                            <option key={range.id} value={range.id}>{range.label}</option>
                        ))}
                    </select>
                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Download className="w-5 h-5 inline mr-2" />
                        EXPORT
                    </button>
                    <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300">
                        <RefreshCw className="w-5 h-5 inline mr-2" />
                        REFRESH
                    </button>
                </div>
            </motion.div>

            {/* KPI Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-6 gap-6"
            >
                <KPICard
                    title="Total Revenue"
                    value={kpiData.revenue.current}
                    previousValue={kpiData.revenue.previous}
                    change={kpiData.revenue.change}
                    trend={kpiData.revenue.trend}
                    icon={<DollarSign className="w-8 h-8" />}
                    color="emerald"
                    format="currency"
                />
                <KPICard
                    title="Total Orders"
                    value={kpiData.orders.current}
                    previousValue={kpiData.orders.previous}
                    change={kpiData.orders.change}
                    trend={kpiData.orders.trend}
                    icon={<ShoppingCart className="w-8 h-8" />}
                    color="cyan"
                />
                <KPICard
                    title="Total Customers"
                    value={kpiData.customers.current}
                    previousValue={kpiData.customers.previous}
                    change={kpiData.customers.change}
                    trend={kpiData.customers.trend}
                    icon={<Users className="w-8 h-8" />}
                    color="blue"
                />
                <KPICard
                    title="Avg Order Value"
                    value={kpiData.avgOrder.current}
                    previousValue={kpiData.avgOrder.previous}
                    change={kpiData.avgOrder.change}
                    trend={kpiData.avgOrder.trend}
                    icon={<BarChart3 className="w-8 h-8" />}
                    color="yellow"
                    format="currency"
                />
                <KPICard
                    title="Conversion Rate"
                    value={kpiData.conversionRate.current}
                    previousValue={kpiData.conversionRate.previous}
                    change={kpiData.conversionRate.change}
                    trend={kpiData.conversionRate.trend}
                    icon={<Target className="w-8 h-8" />}
                    color="purple"
                    format="percentage"
                />
                <KPICard
                    title="Return Rate"
                    value={kpiData.returnRate.current}
                    previousValue={kpiData.returnRate.previous}
                    change={kpiData.returnRate.change}
                    trend={kpiData.returnRate.trend}
                    icon={<Heart className="w-8 h-8" />}
                    color="pink"
                    format="percentage"
                />
            </motion.div>

            {/* Revenue & Orders Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white font-mono">
                        [REVENUE_TRENDS]
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setSelectedMetric("revenue")}
                            className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                                selectedMetric === "revenue" 
                                    ? 'bg-emerald-500/20 text-emerald-400' 
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            REVENUE
                        </button>
                        <button
                            onClick={() => setSelectedMetric("orders")}
                            className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                                selectedMetric === "orders" 
                                    ? 'bg-cyan-500/20 text-cyan-400' 
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            ORDERS
                        </button>
                        <button
                            onClick={() => setSelectedMetric("conversions")}
                            className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                                selectedMetric === "conversions" 
                                    ? 'bg-purple-500/20 text-purple-400' 
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            CONVERSIONS
                        </button>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={revenueData}>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
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
                            dataKey={selectedMetric} 
                            stroke="#10B981" 
                            fillOpacity={1} 
                            fill="url(#gradient)" 
                            strokeWidth={3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </motion.div>

            {/* Analytics Grid */}
            <div className="grid grid-cols-3 gap-8">
                {/* Category Performance */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                >
                    <h2 className="text-xl font-bold text-white font-mono mb-6">
                        [CATEGORY_PERFORMANCE]
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
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
                        {categoryData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div 
                                        className="w-3 h-3 rounded-full" 
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                    <span className="text-gray-300 text-sm">{item.name}</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-sm">
                                    {formatCurrency(item.revenue)}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Device Analytics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                >
                    <h2 className="text-xl font-bold text-white font-mono mb-6">
                        [DEVICE_BREAKDOWN]
                    </h2>
                    <div className="space-y-4">
                        {deviceData.map((device, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {device.name === 'Desktop' && <Monitor className="w-4 h-4 text-emerald-400" />}
                                        {device.name === 'Mobile' && <Smartphone className="w-4 h-4 text-cyan-400" />}
                                        {device.name === 'Tablet' && <Tablet className="w-4 h-4 text-purple-400" />}
                                        <span className="text-white font-semibold">{device.name}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-mono">{device.users.toLocaleString()}</div>
                                        <div className="text-gray-400 text-sm">{device.percentage}%</div>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div 
                                        className="h-2 rounded-full transition-all duration-500"
                                        style={{ 
                                            width: `${device.percentage}%`,
                                            backgroundColor: device.color
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-700">
                        <h3 className="text-cyan-400 font-mono font-bold mb-4">Browser Stats</h3>
                        <div className="space-y-2">
                            {browserData.map((browser, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-300 text-sm">{browser.name}</span>
                                    </div>
                                    <span className="text-white font-mono text-sm">{browser.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Top Products */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                >
                    <h2 className="text-xl font-bold text-white font-mono mb-6">
                        [TOP_PERFORMERS]
                    </h2>
                    <div className="space-y-4">
                        {topProducts.map((product, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-mono font-bold text-sm">
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-semibold text-sm truncate">
                                        {product.name}
                                    </div>
                                    <div className="text-gray-400 text-xs">
                                        {product.sales} sales
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-emerald-400 font-mono font-bold text-sm">
                                        {formatCurrency(product.revenue)}
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
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Geographic & Conversion Analysis */}
            <div className="grid grid-cols-2 gap-8">
                {/* Geographic Distribution */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                >
                    <h2 className="text-xl font-bold text-white font-mono mb-6 flex items-center gap-2">
                        <MapPin className="w-6 h-6" />
                        [GEOGRAPHIC_DISTRIBUTION]
                    </h2>
                    <div className="space-y-4">
                        {geoData.map((country, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">{country.country}</span>
                                    <div className="text-right">
                                        <div className="text-emerald-400 font-mono font-bold">
                                            {formatCurrency(country.revenue)}
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            {country.users} users
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div 
                                        className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${country.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Conversion Funnel */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                >
                    <h2 className="text-xl font-bold text-white font-mono mb-6 flex items-center gap-2">
                        <Activity className="w-6 h-6" />
                        [CONVERSION_FUNNEL]
                    </h2>
                    <div className="space-y-4">
                        {conversionFunnelData.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white font-semibold">{step.step}</span>
                                    <div className="text-right">
                                        <div className="text-cyan-400 font-mono font-bold">
                                            {step.users.toLocaleString()}
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            {step.percentage}%
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-3">
                                    <div 
                                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${step.percentage}%` }}
                                    ></div>
                                </div>
                                {index < conversionFunnelData.length - 1 && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                                        <ArrowDown className="w-4 h-4 text-gray-500" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-500/10 border border-blue-400/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Target className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-400 font-mono font-bold">OPTIMIZATION OPPORTUNITY</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Focus on improving cart-to-checkout conversion (+4.2% potential increase)
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Real-time Metrics */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                        <Activity className="w-6 h-6" />
                        [REAL_TIME_ACTIVITY]
                    </h2>
                    <div className="flex items-center gap-2 text-emerald-400">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="font-mono text-sm">LIVE</span>
                    </div>
                </div>
                
                <div className="grid grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-black font-mono text-emerald-400 mb-2">
                            247
                        </div>
                        <div className="text-gray-300 text-sm">Active Users</div>
                        <div className="text-emerald-400 text-xs font-mono">+12 last 5min</div>
                    </div>
                    
                    <div className="text-center">
                        <div className="text-3xl font-black font-mono text-cyan-400 mb-2">
                            8
                        </div>
                        <div className="text-gray-300 text-sm">Sales Today</div>
                        <div className="text-cyan-400 text-xs font-mono">$394.92</div>
                    </div>
                    
                    <div className="text-center">
                        <div className="text-3xl font-black font-mono text-blue-400 mb-2">
                            23
                        </div>
                        <div className="text-gray-300 text-sm">Cart Adds</div>
                        <div className="text-blue-400 text-xs font-mono">+5 last hour</div>
                    </div>
                    
                    <div className="text-center">
                        <div className="text-3xl font-black font-mono text-purple-400 mb-2">
                            4.2%
                        </div>
                        <div className="text-gray-300 text-sm">Conv. Rate</div>
                        <div className="text-purple-400 text-xs font-mono">vs 3.8% avg</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AnalyticsPage;