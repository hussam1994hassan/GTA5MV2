import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    Users,
    DollarSign,
    Package,
    TrendingUp,
    Settings,
    BarChart3,
    ShoppingCart,
    Server,
    Globe,
    Plus,
    Bell,
    Search,
    Clock,
    Home,
    Store,
    Boxes,
    Receipt,
    PieChart,
    Cog,
    BellRing,
    LogOut,
    ChevronDown,
    X,
    FileBarChart,
    Code,
    ArrowUp,
    ArrowDown,
    CheckCircle,
    Copy,
    RefreshCw,
    ExternalLink,
    Eye,
    Edit,
    Trash2,
    MoreVertical,
} from "lucide-react";

// Import components
import OverviewPage from "./components/OverviewPage";
import ProductsPage from "./components/ProductsPage";
import OrdersPage from "./components/OrdersPage";
import CustomersPage from "./components/CustomersPage";
import AnalyticsPage from "./components/AnalyticsPage";
import SettingsPage from "./components/SettingsPage";
import AddProductPage from "./components/AddProductPage";
import EditProductPage from "./components/EditProductPage";
import ViewOrderPage from "./components/ViewOrderPage";
import StoreSettingsPage from "./components/StoreSettingsPage";
import ReportsPage from "./components/ReportsPage";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/reducers/authSlice";
import PagesURL from "../../constants/PagesURL";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);

    const showUser = () => console.log(user);

    // Mock server data
    const serverData = {
        name: "Los Santos Roleplay",
        plan: "Premium",
        status: "online",
        players: 247,
        maxPlayers: 300,
        uptime: "99.8%",
        version: "v2.1.4",
        lastRestart: "2 hours ago",
        revenue: {
            today: 1247.85,
            week: 8956.3,
            month: 34520.15,
            total: 127350.85,
        },
        orders: {
            pending: 12,
            processing: 8,
            completed: 1847,
            refunded: 23,
            cancelled: 15,
            total: 1905,
        },
        customers: {
            total: 2847,
            new: 45,
            returning: 892,
            vip: 156,
        },
    };

    const sidebarItems = [
        {
            id: "overview",
            label: "Dashboard",
            icon: <Home className="w-5 h-5" />,
            badge: null,
        },
        {
            id: "store-settings",
            label: "Store Settings",
            icon: <Store className="w-5 h-5" />,
            badge: null,
        },
        {
            id: "products",
            label: "Products",
            icon: <Boxes className="w-5 h-5" />,
            badge: 25,
        },
        {
            id: "add-product",
            label: "Add Product",
            icon: <Plus className="w-5 h-5" />,
            badge: null,
        },
        {
            id: "orders",
            label: "Orders",
            icon: <Receipt className="w-5 h-5" />,
            badge: serverData.orders.pending,
        },
        {
            id: "customers",
            label: "Customers",
            icon: <Users className="w-5 h-5" />,
            badge: serverData.customers.new,
        },
        {
            id: "analytics",
            label: "Analytics",
            icon: <PieChart className="w-5 h-5" />,
            badge: null,
        },
        {
            id: "reports",
            label: "Reports",
            icon: <FileBarChart className="w-5 h-5" />,
            badge: null,
        },
        {
            id: "api",
            label: "API & Webhooks",
            icon: <Code className="w-5 h-5" />,
            badge: null,
        },
        {
            id: "security",
            label: "Security",
            icon: <Shield className="w-5 h-5" />,
            badge: null,
        },
        {
            id: "notifications",
            label: "Notifications",
            icon: <BellRing className="w-5 h-5" />,
            badge: 3,
        },
        {
            id: "settings",
            label: "Settings",
            icon: <Cog className="w-5 h-5" />,
            badge: null,
        },
    ];

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setActiveTab("edit-product");
    };

    const handleViewOrder = (order) => {
        setSelectedOrder(order);
        setActiveTab("view-order");
    };

    const renderContent = () => {
        switch (activeTab) {
            case "overview":
                return (
                    <OverviewPage
                        serverData={serverData}
                        onEditProduct={handleEditProduct}
                        onViewOrder={handleViewOrder}
                    />
                );
            case "products":
                return <ProductsPage onEditProduct={handleEditProduct} />;
            case "add-product":
                return (
                    <AddProductPage
                        onProductAdded={() => setActiveTab("products")}
                    />
                );
            case "edit-product":
                return (
                    <EditProductPage
                        product={selectedProduct}
                        onProductUpdated={() => setActiveTab("products")}
                        onCancel={() => setActiveTab("products")}
                    />
                );
            case "orders":
                return <OrdersPage onViewOrder={handleViewOrder} />;
            case "view-order":
                return (
                    <ViewOrderPage
                        order={selectedOrder}
                        onClose={() => setActiveTab("orders")}
                    />
                );
            case "customers":
                return <CustomersPage />;
            case "analytics":
                return <AnalyticsPage />;
            case "reports":
                return <ReportsPage />;
            case "store-settings":
                return <StoreSettingsPage />;
            case "settings":
                return <SettingsPage />;
            case "api":
            case "security":
            case "notifications":
                return (
                    <div className="text-center py-20">
                        <div className="text-gray-400 font-mono text-xl mb-4">
                            [SECTION_UNDER_DEVELOPMENT]
                        </div>
                        <p className="text-gray-500 font-mono">
                            This section is being built. Check back soon!
                        </p>
                    </div>
                );
            default:
                return (
                    <div className="text-center py-20">
                        <div className="text-gray-400 font-mono text-xl mb-4">
                            [SECTION_UNDER_DEVELOPMENT]
                        </div>
                        <p className="text-gray-500 font-mono">
                            This section is being built. Check back soon!
                        </p>
                    </div>
                );
        }
    };

    const handleLogout = async () => {
        await dispatch(logoutUser()).unwrap();
        navigate(PagesURL.LOGIN.URL);
        toast.success("Logged out successfully!");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px)
                    `,
                        backgroundSize: "50px 50px",
                    }}
                ></div>
                <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Sidebar */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                className={`relative z-10 bg-gray-800/80 backdrop-blur-xl border-r border-gray-700 transition-all duration-300 ${
                    sidebarCollapsed ? "w-20" : "w-80"
                }`}
            >
                {/* Sidebar Header */}
                <div className="p-6 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                        {!sidebarCollapsed && (
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                    <Shield className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-black font-mono">
                                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                            NEXUS
                                        </span>
                                        <span className="text-white mx-1">
                                            •
                                        </span>
                                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                            VAULT
                                        </span>
                                    </h1>
                                    <p className="text-emerald-400 font-mono text-sm">
                                        SERVER_DASHBOARD
                                    </p>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() =>
                                setSidebarCollapsed(!sidebarCollapsed)
                            }
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <ChevronDown
                                className={`w-5 h-5 transition-transform ${
                                    sidebarCollapsed ? "rotate-90" : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Sidebar Navigation */}
                <nav className="p-4 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                            .sidebar-scroll::-webkit-scrollbar {
                                display: none;
                            }
                            .sidebar-scroll {
                                scrollbar-width: none;
                                -ms-overflow-style: none;
                            }
                        `,
                        }}
                    />
                    {sidebarItems.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-mono text-left relative ${
                                activeTab === item.id
                                    ? "bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400"
                                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {item.icon}
                            {!sidebarCollapsed && (
                                <>
                                    <span className="text-sm font-bold">
                                        {item.label}
                                    </span>
                                    {item.badge && (
                                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                </>
                            )}
                            {sidebarCollapsed && item.badge && (
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                            )}
                        </motion.button>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                    {!sidebarCollapsed && (
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl">
                                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                    AD
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-semibold">
                                        admin_user
                                    </div>
                                    <div className="text-gray-400 text-xs font-mono">
                                        Premium Plan
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-red-400 transition-colors font-mono"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="text-sm">LOGOUT</span>
                            </button>
                        </div>
                    )}
                    {sidebarCollapsed && (
                        <button className="w-full flex justify-center text-gray-400 hover:text-red-400 transition-colors">
                            <LogOut className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 relative z-10">
                {/* Top Bar */}
                <div className="bg-gray-800/60 backdrop-blur-xl border-b border-gray-700 px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <h2 className="text-2xl font-black text-white font-mono">
                                {sidebarItems.find(
                                    (item) => item.id === activeTab
                                )?.label || "[DASHBOARD]"}
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                                <Clock className="w-4 h-4" />
                                <span>{new Date().toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Quick Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Quick search..."
                                    className="w-64 pl-10 pr-4 py-2 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300 font-mono text-sm"
                                />
                            </div>

                            {/* Notifications */}
                            <button
                                onClick={() =>
                                    setShowNotifications(!showNotifications)
                                }
                                className="relative text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                                <Bell className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Server Status */}
                            <button
                                onClick={showUser}
                                className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-3 py-2 rounded-lg"
                            >
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span className="text-emerald-400 font-mono text-sm">
                                    ONLINE
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <main
                    className="p-8 overflow-y-auto"
                    style={{ height: "calc(100vh - 80px)" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

            {/* Notifications Panel */}
            <AnimatePresence>
                {showNotifications && (
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        className="fixed top-0 right-0 h-full w-96 bg-gray-800/95 backdrop-blur-xl border-l border-gray-700 z-50 p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-white font-mono">
                                [NOTIFICATIONS]
                            </h3>
                            <button
                                onClick={() => setShowNotifications(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-emerald-500/20 border border-emerald-400/30 p-4 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-emerald-400 font-bold font-mono text-sm">
                                            New Sale
                                        </h4>
                                        <p className="text-gray-300 text-sm">
                                            john_doe purchased Legendary Weapon
                                            Pack for $49.99
                                        </p>
                                        <p className="text-gray-500 text-xs font-mono mt-1">
                                            2 minutes ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DashboardPage;
