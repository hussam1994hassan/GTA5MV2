import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FileBarChart,
    TrendingUp,
    Download,
    Calendar,
    Filter,
    BarChart3,
    PieChart,
    LineChart,
    FileText,
    DollarSign,
    Users,
    ShoppingCart,
    Package,
    Target,
    Activity,
    Clock,
    MapPin,
    CreditCard,
    Star,
    Eye,
    Share2,
    Mail,
    Printer,
    RefreshCw,
    Settings,
    AlertTriangle,
    CheckCircle,
    ArrowUp,
    ArrowDown,
    Plus,
    Search,
    ExternalLink,
    MoreVertical,
    Globe,
    Zap,
    Crown,
    Shield
} from "lucide-react";

const ReportsPage = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
    const [selectedReportType, setSelectedReportType] = useState("all");
    const [generatingReport, setGeneratingReport] = useState(false);

    const reportTypes = [
        { id: "all", label: "All Reports", icon: <FileBarChart className="w-5 h-5" /> },
        { id: "financial", label: "Financial", icon: <DollarSign className="w-5 h-5" /> },
        { id: "sales", label: "Sales", icon: <ShoppingCart className="w-5 h-5" /> },
        { id: "customers", label: "Customers", icon: <Users className="w-5 h-5" /> },
        { id: "products", label: "Products", icon: <Package className="w-5 h-5" /> },
        { id: "geographic", label: "Geographic", icon: <MapPin className="w-5 h-5" /> },
        { id: "performance", label: "Performance", icon: <Activity className="w-5 h-5" /> }
    ];

    const timeRanges = [
        { id: "7d", label: "Last 7 days" },
        { id: "30d", label: "Last 30 days" },
        { id: "90d", label: "Last 3 months" },
        { id: "1y", label: "Last year" },
        { id: "custom", label: "Custom range" }
    ];

    const predefinedReports = [
        {
            id: 1,
            name: "Monthly Revenue Report",
            description: "Comprehensive revenue analysis with trends and comparisons",
            type: "financial",
            generated: "2024-01-22T08:30:00Z",
            size: "2.4 MB",
            format: "PDF",
            status: "ready",
            metrics: {
                revenue: 45230,
                growth: 12.5,
                orders: 342
            }
        },
        {
            id: 2,
            name: "Customer Behavior Analysis",
            description: "Deep dive into customer purchase patterns and preferences",
            type: "customers",
            generated: "2024-01-21T14:45:00Z",
            size: "1.8 MB",
            format: "Excel",
            status: "ready",
            metrics: {
                customers: 1247,
                retention: 68.3,
                ltv: 284.50
            }
        },
        {
            id: 3,
            name: "Product Performance Dashboard",
            description: "Top-selling products, categories, and inventory insights",
            type: "products",
            generated: "2024-01-20T16:20:00Z",
            size: "3.1 MB",
            format: "PDF",
            status: "ready",
            metrics: {
                products: 156,
                categories: 5,
                topSeller: "Weapon Pack"
            }
        },
        {
            id: 4,
            name: "Geographic Sales Distribution",
            description: "Sales breakdown by country and region with heat maps",
            type: "geographic",
            generated: "2024-01-19T10:15:00Z",
            size: "4.2 MB",
            format: "PDF",
            status: "generating",
            metrics: {
                countries: 45,
                topCountry: "United States",
                coverage: "78%"
            }
        },
        {
            id: 5,
            name: "Weekly Performance Summary",
            description: "Key performance indicators and operational metrics",
            type: "performance",
            generated: "2024-01-18T09:00:00Z",
            size: "1.2 MB",
            format: "PDF",
            status: "ready",
            metrics: {
                uptime: "99.8%",
                avgResponse: "124ms",
                transactions: 892
            }
        }
    ];

    const quickStats = {
        totalReports: 47,
        generatedThisMonth: 12,
        automatedReports: 8,
        scheduledReports: 5,
        diskUsage: 156.7, // MB
        avgGenerationTime: "2.3" // minutes
    };

    const handleGenerateReport = async (reportType) => {
        setGeneratingReport(true);
        // Simulate report generation
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log(`Generating ${reportType} report for ${selectedTimeRange}`);
        setGeneratingReport(false);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "ready":
                return "emerald";
            case "generating":
                return "yellow";
            case "failed":
                return "red";
            default:
                return "gray";
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "ready":
                return <CheckCircle className="w-4 h-4" />;
            case "generating":
                return <RefreshCw className="w-4 h-4 animate-spin" />;
            case "failed":
                return <AlertTriangle className="w-4 h-4" />;
            default:
                return <Clock className="w-4 h-4" />;
        }
    };

    const ReportCard = ({ report }) => (
        <motion.div
            layout
            className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">{report.name}</h3>
                        <p className="text-gray-400 text-sm">{report.description}</p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
                <div className={`flex items-center gap-1 px-3 py-1 rounded-lg bg-${getStatusColor(report.status)}-500/20 border border-${getStatusColor(report.status)}-400/30`}>
                    <div className={`text-${getStatusColor(report.status)}-400`}>
                        {getStatusIcon(report.status)}
                    </div>
                    <span className={`text-${getStatusColor(report.status)}-400 font-mono text-xs font-bold`}>
                        {report.status.toUpperCase()}
                    </span>
                </div>
                <span className="text-gray-400 text-sm font-mono">
                    {report.format} • {report.size}
                </span>
                <span className="text-gray-500 text-sm">
                    {new Date(report.generated).toLocaleDateString()}
                </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
                {Object.entries(report.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                        <div className="text-emerald-400 font-mono font-bold">
                            {typeof value === 'number' && value > 1000 ? value.toLocaleString() : value}
                        </div>
                        <div className="text-gray-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <button 
                    disabled={report.status !== 'ready'}
                    className="flex-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400 px-4 py-2 rounded-lg font-mono font-bold hover:from-emerald-500/30 hover:to-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Download className="w-4 h-4 inline mr-2" />
                    DOWNLOAD
                </button>
                <button className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-600/50 hover:text-cyan-400 transition-all duration-300">
                    <Eye className="w-4 h-4" />
                </button>
                <button className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-600/50 hover:text-blue-400 transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                </button>
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
                        [REPORTS_ANALYTICS]
                    </h1>
                    <p className="text-gray-400 font-mono">
                        Generate comprehensive business reports and insights
                    </p>
                </div>
                <div className="flex gap-3">
                    <select
                        value={selectedTimeRange}
                        onChange={(e) => setSelectedTimeRange(e.target.value)}
                        className="bg-gray-800/60 border border-gray-600 rounded-lg text-white px-4 py-2 font-mono"
                    >
                        {timeRanges.map(range => (
                            <option key={range.id} value={range.id}>{range.label}</option>
                        ))}
                    </select>
                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Settings className="w-5 h-5 inline mr-2" />
                        SCHEDULE
                    </button>
                    <button 
                        onClick={() => handleGenerateReport("custom")}
                        disabled={generatingReport}
                        className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {generatingReport ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline mr-2"></div>
                                GENERATING...
                            </>
                        ) : (
                            <>
                                <Plus className="w-5 h-5 inline mr-2" />
                                NEW_REPORT
                            </>
                        )}
                    </button>
                </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-6 gap-6"
            >
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <FileBarChart className="w-8 h-8 text-emerald-400" />
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-black text-emerald-400 font-mono mb-1">
                        {quickStats.totalReports}
                    </div>
                    <div className="text-gray-300 text-sm">Total Reports</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Calendar className="w-8 h-8 text-cyan-400" />
                        <ArrowUp className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-black text-cyan-400 font-mono mb-1">
                        {quickStats.generatedThisMonth}
                    </div>
                    <div className="text-gray-300 text-sm">This Month</div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Zap className="w-8 h-8 text-blue-400" />
                        <Activity className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-2xl font-black text-blue-400 font-mono mb-1">
                        {quickStats.automatedReports}
                    </div>
                    <div className="text-gray-300 text-sm">Automated</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <Clock className="w-8 h-8 text-yellow-400" />
                        <Calendar className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-black text-yellow-400 font-mono mb-1">
                        {quickStats.scheduledReports}
                    </div>
                    <div className="text-gray-300 text-sm">Scheduled</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <BarChart3 className="w-8 h-8 text-purple-400" />
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-black text-purple-400 font-mono mb-1">
                        {quickStats.diskUsage}MB
                    </div>
                    <div className="text-gray-300 text-sm">Storage Used</div>
                </div>

                <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-400/30 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <RefreshCw className="w-8 h-8 text-pink-400" />
                        <Target className="w-5 h-5 text-pink-400" />
                    </div>
                    <div className="text-2xl font-black text-pink-400 font-mono mb-1">
                        {quickStats.avgGenerationTime}m
                    </div>
                    <div className="text-gray-300 text-sm">Avg Generation</div>
                </div>
            </motion.div>

            {/* Quick Generate */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h2 className="text-xl font-bold text-white font-mono mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    [QUICK_GENERATE]
                </h2>

                <div className="grid grid-cols-4 gap-4">
                    <button 
                        onClick={() => handleGenerateReport("financial")}
                        disabled={generatingReport}
                        className="group bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-400/30 p-6 rounded-xl hover:from-emerald-500/30 hover:to-emerald-600/30 transition-all duration-300 disabled:opacity-50"
                    >
                        <DollarSign className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-emerald-400 font-mono font-bold text-sm">FINANCIAL</div>
                        <div className="text-gray-400 text-xs mt-1">Revenue & costs</div>
                    </button>

                    <button 
                        onClick={() => handleGenerateReport("sales")}
                        disabled={generatingReport}
                        className="group bg-gradient-to-r from-cyan-600/20 to-cyan-700/20 border border-cyan-400/30 p-6 rounded-xl hover:from-cyan-500/30 hover:to-cyan-600/30 transition-all duration-300 disabled:opacity-50"
                    >
                        <ShoppingCart className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-cyan-400 font-mono font-bold text-sm">SALES</div>
                        <div className="text-gray-400 text-xs mt-1">Orders & trends</div>
                    </button>

                    <button 
                        onClick={() => handleGenerateReport("customers")}
                        disabled={generatingReport}
                        className="group bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-400/30 p-6 rounded-xl hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 disabled:opacity-50"
                    >
                        <Users className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-blue-400 font-mono font-bold text-sm">CUSTOMERS</div>
                        <div className="text-gray-400 text-xs mt-1">Behavior analysis</div>
                    </button>

                    <button 
                        onClick={() => handleGenerateReport("products")}
                        disabled={generatingReport}
                        className="group bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-400/30 p-6 rounded-xl hover:from-purple-500/30 hover:to-purple-600/30 transition-all duration-300 disabled:opacity-50"
                    >
                        <Package className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-purple-400 font-mono font-bold text-sm">PRODUCTS</div>
                        <div className="text-gray-400 text-xs mt-1">Performance metrics</div>
                    </button>
                </div>
            </motion.div>

            {/* Filter Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search reports..."
                            className="w-80 pl-12 pr-4 py-3 bg-gray-800/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300 font-mono"
                        />
                    </div>

                    <div className="flex bg-gray-800/50 rounded-lg p-1">
                        {reportTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setSelectedReportType(type.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded transition-colors font-mono text-sm ${
                                    selectedReportType === type.id
                                        ? 'bg-emerald-500/20 text-emerald-400'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {type.icon}
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 font-mono">
                        <Filter className="w-4 h-4 inline mr-2" />
                        FILTER
                    </button>
                    <button className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 font-mono">
                        <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>

            {/* Reports Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 gap-6"
            >
                {predefinedReports
                    .filter(report => selectedReportType === "all" || report.type === selectedReportType)
                    .map((report) => (
                        <ReportCard key={report.id} report={report} />
                    ))}
            </motion.div>

            {/* Scheduled Reports */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                        <Calendar className="w-6 h-6" />
                        [SCHEDULED_REPORTS]
                    </h2>
                    <button className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-lg font-mono font-bold hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
                        <Plus className="w-4 h-4 inline mr-2" />
                        ADD_SCHEDULE
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-600">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Weekly Financial Summary</h3>
                                <p className="text-gray-400 text-sm">Every Monday at 9:00 AM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-emerald-400 font-mono text-sm">ACTIVE</span>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Settings className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-600">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Monthly Customer Report</h3>
                                <p className="text-gray-400 text-sm">First day of each month at 8:00 AM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-emerald-400 font-mono text-sm">ACTIVE</span>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Settings className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-600">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <Package className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Product Performance</h3>
                                <p className="text-gray-400 text-sm">Every Sunday at 6:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400 font-mono text-sm">PAUSED</span>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Settings className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ReportsPage;