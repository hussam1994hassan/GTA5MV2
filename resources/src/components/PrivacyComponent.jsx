import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Shield,
    Lock,
    Eye,
    EyeOff,
    Database,
    Globe,
    UserCheck,
    Cookie,
    FileText,
    AlertTriangle,
    Info,
    Mail,
    Phone,
    MapPin,
    Clock,
    Download,
    Printer,
    ArrowLeft,
    CheckCircle,
    XCircle,
    Server,
    Smartphone,
    CreditCard,
    Users,
    Settings,
    Key,
    RefreshCw,
    Trash2,
    Calendar,
    ExternalLink,
    ShieldCheck,
    FileWarning,
    UserX,
    Activity,
    Zap,
    Heart,
    Star,
    Award,
    Gift,
} from "lucide-react";
import { useNavigate } from "react-router";

const PrivacyComponent = () => {
    const [activeSection, setActiveSection] = useState("introduction");
    const [language, setLanguage] = useState("en");
    const [showCookieDetails, setShowCookieDetails] = useState(false);

    const navigate = useNavigate();

    const sections = [
        {
            id: "introduction",
            title: "Introduction",
            icon: <FileText className="w-5 h-5" />,
        },
        {
            id: "data-collection",
            title: "Data We Collect",
            icon: <Database className="w-5 h-5" />,
        },
        {
            id: "how-we-collect",
            title: "How We Collect Data",
            icon: <Activity className="w-5 h-5" />,
        },
        {
            id: "data-usage",
            title: "How We Use Data",
            icon: <Settings className="w-5 h-5" />,
        },
        {
            id: "data-sharing",
            title: "Data Sharing",
            icon: <Users className="w-5 h-5" />,
        },
        {
            id: "data-security",
            title: "Data Security",
            icon: <Lock className="w-5 h-5" />,
        },
        {
            id: "user-rights",
            title: "Your Rights",
            icon: <UserCheck className="w-5 h-5" />,
        },
        {
            id: "cookies",
            title: "Cookies & Tracking",
            icon: <Cookie className="w-5 h-5" />,
        },
        {
            id: "children",
            title: "Children's Privacy",
            icon: <Heart className="w-5 h-5" />,
        },
        {
            id: "international",
            title: "International Users",
            icon: <Globe className="w-5 h-5" />,
        },
        {
            id: "changes",
            title: "Policy Changes",
            icon: <RefreshCw className="w-5 h-5" />,
        },
        {
            id: "contact",
            title: "Contact Us",
            icon: <Mail className="w-5 h-5" />,
        },
    ];

    const lastUpdated = "January 15, 2025";
    const effectiveDate = "January 1, 2025";
    const version = "2.0.0";

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white relative">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.6) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
          `,
                        backgroundSize:
                            "100px 100px, 100px 100px, 20px 20px, 20px 20px",
                    }}
                ></div>

                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 bg-gray-800/80 backdrop-blur-xl border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => navigate("/")}
                                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors font-mono"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Platform
                            </button>
                        </div>

                        <div className="flex items-center space-x-4">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-1 text-sm font-mono"
                            >
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                            </select>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors font-mono text-sm">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors font-mono text-sm">
                                <Printer className="w-4 h-4" />
                                Print
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            {/* Logo Section */}
                            <div className="flex items-center space-x-3 mb-8 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Shield className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-black font-mono">
                                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            NEXUS
                                        </span>
                                        <span className="text-white mx-1">
                                            •
                                        </span>
                                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            VAULT
                                        </span>
                                    </h1>
                                    <p className="text-blue-400 font-mono text-sm">
                                        PRIVACY_SHIELD
                                    </p>
                                </div>
                            </div>

                            {/* Document Info */}
                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
                                <h3 className="text-blue-400 font-mono font-bold mb-4">
                                    [DOCUMENT_INFO]
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">
                                            Version:
                                        </span>
                                        <span className="text-white font-mono">
                                            v{version}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">
                                            Effective:
                                        </span>
                                        <span className="text-white font-mono">
                                            {effectiveDate}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">
                                            Updated:
                                        </span>
                                        <span className="text-white font-mono">
                                            {lastUpdated}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">
                                            Compliance:
                                        </span>
                                        <span className="text-blue-400 font-mono flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" />
                                            GDPR/CCPA
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="space-y-2 max-h-[calc(100vh-400px)] overflow-y-auto">
                                {sections.map((section, index) => (
                                    <motion.button
                                        key={section.id}
                                        onClick={() =>
                                            scrollToSection(section.id)
                                        }
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-mono text-left text-sm ${
                                            activeSection === section.id
                                                ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 text-blue-400"
                                                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {section.icon}
                                        <span className="text-xs">
                                            {section.title}
                                        </span>
                                    </motion.button>
                                ))}
                            </nav>

                            {/* Privacy Promise */}
                            <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl">
                                <h4 className="text-blue-400 font-mono font-bold text-sm mb-2">
                                    Our Promise
                                </h4>
                                <p className="text-gray-400 text-xs mb-3">
                                    Your privacy is our priority
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-300">
                                    <ShieldCheck className="w-4 h-4 text-green-400" />
                                    <span>GDPR Compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="space-y-12">
                            {/* Header */}
                            <div className="text-center border-b border-gray-700 pb-12">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-6xl font-black mb-6 font-mono"
                                >
                                    <span className="text-white">PRIVACY</span>
                                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        POLICY
                                    </span>
                                </motion.h1>
                                <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                                    Your privacy matters. Learn how NEXUS VAULT
                                    collects, uses, and protects your personal
                                    information in our secure payment platform
                                    for FiveM servers.
                                </p>
                                <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-mono">
                                    <span>Effective: {effectiveDate}</span>
                                    <span>•</span>
                                    <span>Last Updated: {lastUpdated}</span>
                                    <span>•</span>
                                    <span className="text-blue-400">
                                        Version {version}
                                    </span>
                                </div>
                            </div>

                            {/* Introduction Section */}
                            <section id="introduction" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-blue-400 flex items-center gap-3">
                                    <FileText className="w-8 h-8" />
                                    [INTRODUCTION]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        Welcome to the{" "}
                                        <span className="text-blue-400 font-mono font-bold">
                                            NEXUS VAULT
                                        </span>{" "}
                                        Privacy Policy. This document explains
                                        how we collect, use, protect, and share
                                        your personal information when you use
                                        our secure payment intermediary platform
                                        for FiveM server transactions.
                                    </p>

                                    <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                        <h3 className="text-blue-400 font-bold mb-3">
                                            Our Commitment to Privacy
                                        </h3>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    We never sell your personal
                                                    data to third parties
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    We collect only what's
                                                    necessary for platform
                                                    operation
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    You have full control over
                                                    your personal information
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    We use industry-standard
                                                    security measures
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="text-yellow-400 font-bold font-mono mb-2">
                                                    IMPORTANT NOTICE
                                                </h4>
                                                <p className="text-gray-300 text-sm">
                                                    By using NEXUS VAULT
                                                    services, you consent to the
                                                    data practices described in
                                                    this Privacy Policy. If you
                                                    do not agree with our data
                                                    practices, please do not use
                                                    our services.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Data Collection Section */}
                            <section
                                id="data-collection"
                                className="scroll-mt-24"
                            >
                                <h2 className="text-3xl font-bold mb-6 font-mono text-purple-400 flex items-center gap-3">
                                    <Database className="w-8 h-8" />
                                    [DATA_WE_COLLECT]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        We collect different types of
                                        information to provide and improve our
                                        services:
                                    </p>

                                    <div className="space-y-6">
                                        {/* Account Information */}
                                        <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-6">
                                            <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
                                                <UserCheck className="w-5 h-5" />
                                                Account Information
                                            </h3>
                                            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Username and display
                                                        name
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                    <span>Email address</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Account type
                                                        (Player/Server Owner)
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Profile picture
                                                        (optional)
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Date of birth (for age
                                                        verification)
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Phone number (optional)
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Transaction Data */}
                                        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                            <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                                <CreditCard className="w-5 h-5" />
                                                Transaction Data
                                            </h3>
                                            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Purchase history
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Payment method details
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Transaction amounts
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>Billing address</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Transaction timestamps
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Refund/dispute history
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Technical Data */}
                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                                <Activity className="w-5 h-5" />
                                                Technical Data
                                            </h3>
                                            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <span>IP address</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Browser type and version
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Device information
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Operating system
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Time zone and location
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Language preferences
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Usage Data */}
                                        <div className="bg-amber-500/10 border border-amber-400/20 rounded-lg p-6">
                                            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                                                <Activity className="w-5 h-5" />
                                                Usage Data
                                            </h3>
                                            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                    <span>Pages visited</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                    <span>Features used</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                    <span>Search queries</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                    <span>Click patterns</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Session duration
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                    <span>Error logs</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* How We Collect Data Section */}
                            <section
                                id="how-we-collect"
                                className="scroll-mt-24"
                            >
                                <h2 className="text-3xl font-bold mb-6 font-mono text-cyan-400 flex items-center gap-3">
                                    <Activity className="w-8 h-8" />
                                    [HOW_WE_COLLECT_DATA]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-lg p-6">
                                            <h3 className="text-cyan-400 font-bold mb-4">
                                                Direct Collection
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                Information you provide directly
                                                to us:
                                            </p>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • When you create an account
                                                </li>
                                                <li>
                                                    • During transaction
                                                    processing
                                                </li>
                                                <li>
                                                    • Through customer support
                                                    interactions
                                                </li>
                                                <li>
                                                    • Via feedback and surveys
                                                </li>
                                                <li>
                                                    • When updating profile
                                                    settings
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4">
                                                Automatic Collection
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                Information collected
                                                automatically:
                                            </p>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Through cookies and
                                                    similar technologies
                                                </li>
                                                <li>
                                                    • Server logs and analytics
                                                    tools
                                                </li>
                                                <li>
                                                    • Device and browser
                                                    information
                                                </li>
                                                <li>
                                                    • API usage and integration
                                                    data
                                                </li>
                                                <li>
                                                    • Performance monitoring
                                                    tools
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-6">
                                            <h3 className="text-purple-400 font-bold mb-4">
                                                Third-Party Sources
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                Information from external
                                                sources:
                                            </p>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Payment processors
                                                    (transaction verification)
                                                </li>
                                                <li>
                                                    • Identity verification
                                                    services
                                                </li>
                                                <li>
                                                    • Social media platforms (if
                                                    linked)
                                                </li>
                                                <li>
                                                    • FiveM server integrations
                                                </li>
                                                <li>
                                                    • Security and fraud
                                                    prevention services
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Data Usage Section */}
                            <section id="data-usage" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-green-400 flex items-center gap-3">
                                    <Settings className="w-8 h-8" />
                                    [HOW_WE_USE_DATA]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        We use your information for the
                                        following purposes:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                            <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                                <Server className="w-5 h-5" />
                                                Platform Operations
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Process transactions
                                                    securely
                                                </li>
                                                <li>• Manage user accounts</li>
                                                <li>
                                                    • Facilitate communication
                                                </li>
                                                <li>
                                                    • Provide customer support
                                                </li>
                                                <li>• Deliver digital items</li>
                                            </ul>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                                <Shield className="w-5 h-5" />
                                                Security & Compliance
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Prevent fraud and abuse
                                                </li>
                                                <li>
                                                    • Verify user identities
                                                </li>
                                                <li>
                                                    • Comply with legal
                                                    obligations
                                                </li>
                                                <li>
                                                    • Enforce Terms of Service
                                                </li>
                                                <li>• Protect user accounts</li>
                                            </ul>
                                        </div>

                                        <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-6">
                                            <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
                                                <Zap className="w-5 h-5" />
                                                Service Improvement
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Analyze usage patterns
                                                </li>
                                                <li>• Develop new features</li>
                                                <li>• Optimize performance</li>
                                                <li>
                                                    • Personalize experience
                                                </li>
                                                <li>• Fix bugs and issues</li>
                                            </ul>
                                        </div>

                                        <div className="bg-amber-500/10 border border-amber-400/20 rounded-lg p-6">
                                            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                                                <Mail className="w-5 h-5" />
                                                Communications
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Transaction confirmations
                                                </li>
                                                <li>• Security alerts</li>
                                                <li>• Service updates</li>
                                                <li>
                                                    • Marketing (with consent)
                                                </li>
                                                <li>• Legal notices</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                        <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                                            <XCircle className="w-5 h-5" />
                                            We DO NOT Use Your Data To:
                                        </h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>
                                                • Sell to third parties for
                                                marketing
                                            </li>
                                            <li>
                                                • Share with unauthorized
                                                parties
                                            </li>
                                            <li>
                                                • Use for purposes unrelated to
                                                our services
                                            </li>
                                            <li>
                                                • Create profiles for
                                                advertising networks
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Data Sharing Section */}
                            <section id="data-sharing" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-pink-400 flex items-center gap-3">
                                    <Users className="w-8 h-8" />
                                    [DATA_SHARING]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        We share your information only in the
                                        following circumstances:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg p-6">
                                            <h3 className="text-pink-400 font-bold mb-4">
                                                Service Providers
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                We work with trusted third-party
                                                services:
                                            </p>
                                            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <CreditCard className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Payment processors
                                                        (Stripe, PayPal)
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Server className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Cloud hosting providers
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Mail className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Email service providers
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Shield className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Security and fraud
                                                        prevention
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6">
                                            <h3 className="text-yellow-400 font-bold mb-4">
                                                Legal Requirements
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                We may disclose information when
                                                required by law:
                                            </p>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Court orders and subpoenas
                                                </li>
                                                <li>
                                                    • Law enforcement requests
                                                </li>
                                                <li>• Regulatory compliance</li>
                                                <li>
                                                    • Protection of legal rights
                                                </li>
                                                <li>
                                                    • Prevention of illegal
                                                    activities
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                            <h3 className="text-green-400 font-bold mb-4">
                                                With Your Consent
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                We share information when you
                                                explicitly allow us:
                                            </p>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Server owner transaction
                                                    details (for purchases)
                                                </li>
                                                <li>
                                                    • Public profile information
                                                </li>
                                                <li>
                                                    • Social media integrations
                                                </li>
                                                <li>
                                                    • Partner integrations you
                                                    authorize
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4">
                                                Business Transfers
                                            </h3>
                                            <p className="text-gray-300">
                                                In the event of a merger,
                                                acquisition, or sale of assets,
                                                your information may be
                                                transferred. We will notify you
                                                via email and prominent notice
                                                on our platform before your
                                                information becomes subject to a
                                                different privacy policy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Data Security Section */}
                            <section
                                id="data-security"
                                className="scroll-mt-24"
                            >
                                <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400 flex items-center gap-3">
                                    <Lock className="w-8 h-8" />
                                    [DATA_SECURITY]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        We implement comprehensive security
                                        measures to protect your data:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-lg p-6">
                                            <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                                                <Shield className="w-5 h-5" />
                                                Technical Safeguards
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • 256-bit SSL/TLS encryption
                                                </li>
                                                <li>
                                                    • Encrypted data storage
                                                </li>
                                                <li>• Secure API endpoints</li>
                                                <li>
                                                    • Regular security audits
                                                </li>
                                                <li>• DDoS protection</li>
                                                <li>• Firewall protection</li>
                                            </ul>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                                <UserCheck className="w-5 h-5" />
                                                Access Controls
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Two-factor authentication
                                                </li>
                                                <li>
                                                    • Role-based permissions
                                                </li>
                                                <li>
                                                    • Regular access reviews
                                                </li>
                                                <li>• Employee training</li>
                                                <li>
                                                    • Principle of least
                                                    privilege
                                                </li>
                                                <li>• Activity monitoring</li>
                                            </ul>
                                        </div>

                                        <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-6">
                                            <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
                                                <Database className="w-5 h-5" />
                                                Data Protection
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>• Regular backups</li>
                                                <li>• Data anonymization</li>
                                                <li>• Secure data centers</li>
                                                <li>
                                                    • Incident response plan
                                                </li>
                                                <li>
                                                    • Data retention policies
                                                </li>
                                                <li>
                                                    • Secure deletion practices
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-amber-500/10 border border-amber-400/20 rounded-lg p-6">
                                            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                                                <Award className="w-5 h-5" />
                                                Compliance
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>• PCI-DSS certified</li>
                                                <li>• GDPR compliant</li>
                                                <li>• CCPA compliant</li>
                                                <li>• SOC 2 Type II</li>
                                                <li>• ISO 27001 standards</li>
                                                <li>
                                                    • Regular compliance audits
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                        <h4 className="text-red-400 font-bold mb-3">
                                            Security Incident Response
                                        </h4>
                                        <p className="text-gray-300 mb-3">
                                            In the event of a data breach:
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>
                                                • We will notify affected users
                                                within 72 hours
                                            </li>
                                            <li>
                                                • Provide details about what
                                                information was compromised
                                            </li>
                                            <li>
                                                • Offer guidance on protective
                                                measures
                                            </li>
                                            <li>
                                                • Cooperate with relevant
                                                authorities
                                            </li>
                                            <li>
                                                • Implement measures to prevent
                                                future incidents
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* User Rights Section */}
                            <section id="user-rights" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-indigo-400 flex items-center gap-3">
                                    <UserCheck className="w-8 h-8" />
                                    [YOUR_RIGHTS]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        You have the following rights regarding
                                        your personal data:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-lg p-6">
                                            <h3 className="text-indigo-400 font-bold mb-4 flex items-center gap-2">
                                                <Eye className="w-5 h-5" />
                                                Access & Portability
                                            </h3>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Request a copy of your
                                                    data
                                                </li>
                                                <li>
                                                    • Download data in
                                                    machine-readable format
                                                </li>
                                                <li>
                                                    • Transfer data to another
                                                    service
                                                </li>
                                                <li>
                                                    • View all collected
                                                    information
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                                <Settings className="w-5 h-5" />
                                                Correction & Update
                                            </h3>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Correct inaccurate
                                                    information
                                                </li>
                                                <li>• Update outdated data</li>
                                                <li>
                                                    • Complete incomplete
                                                    records
                                                </li>
                                                <li>
                                                    • Manage communication
                                                    preferences
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                            <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                                                <Trash2 className="w-5 h-5" />
                                                Deletion & Restriction
                                            </h3>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Request account deletion
                                                </li>
                                                <li>• Erase personal data</li>
                                                <li>• Restrict processing</li>
                                                <li>
                                                    • Object to certain uses
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                            <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                                <Shield className="w-5 h-5" />
                                                Privacy Controls
                                            </h3>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>• Opt-out of marketing</li>
                                                <li>
                                                    • Control cookie preferences
                                                </li>
                                                <li>
                                                    • Manage privacy settings
                                                </li>
                                                <li>• Withdraw consent</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6">
                                        <h3 className="text-yellow-400 font-bold mb-4">
                                            How to Exercise Your Rights
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                    1
                                                </div>
                                                <div>
                                                    <h4 className="text-yellow-400 font-bold">
                                                        Submit Request
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Contact
                                                        privacy@nexusvault.io
                                                        with your request
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                    2
                                                </div>
                                                <div>
                                                    <h4 className="text-yellow-400 font-bold">
                                                        Identity Verification
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        We verify your identity
                                                        to protect your data
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                    3
                                                </div>
                                                <div>
                                                    <h4 className="text-yellow-400 font-bold">
                                                        Processing
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        We process requests
                                                        within 30 days
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Cookies Section */}
                            <section id="cookies" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-orange-400 flex items-center gap-3">
                                    <Cookie className="w-8 h-8" />
                                    [COOKIES_TRACKING]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        We use cookies and similar tracking
                                        technologies to improve your experience:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-6">
                                            <h3 className="text-orange-400 font-bold mb-4">
                                                Types of Cookies We Use
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="border-l-4 border-orange-400 pl-4">
                                                    <h4 className="text-orange-400 font-bold mb-2">
                                                        Essential Cookies
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Required for platform
                                                        functionality, security,
                                                        and authentication
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-orange-400 pl-4">
                                                    <h4 className="text-orange-400 font-bold mb-2">
                                                        Analytics Cookies
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Help us understand usage
                                                        patterns and improve
                                                        services
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-orange-400 pl-4">
                                                    <h4 className="text-orange-400 font-bold mb-2">
                                                        Preference Cookies
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Remember your settings
                                                        and personalization
                                                        choices
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-orange-400 pl-4">
                                                    <h4 className="text-orange-400 font-bold mb-2">
                                                        Marketing Cookies
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Used only with consent
                                                        for relevant advertising
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4">
                                                Cookie Management
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                You can control cookies through:
                                            </p>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Browser settings to block
                                                    or delete cookies
                                                </li>
                                                <li>
                                                    • Our cookie preference
                                                    center
                                                </li>
                                                <li>
                                                    • Opt-out links in marketing
                                                    emails
                                                </li>
                                                <li>
                                                    • Third-party opt-out tools
                                                </li>
                                            </ul>
                                            <button
                                                onClick={() =>
                                                    setShowCookieDetails(
                                                        !showCookieDetails
                                                    )
                                                }
                                                className="mt-4 text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm"
                                            >
                                                {showCookieDetails
                                                    ? "Hide"
                                                    : "Show"}{" "}
                                                Detailed Cookie List →
                                            </button>
                                        </div>

                                        {showCookieDetails && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                }}
                                                className="bg-gray-800/50 rounded-lg p-6 overflow-hidden"
                                            >
                                                <h4 className="text-white font-bold mb-4">
                                                    Detailed Cookie List
                                                </h4>
                                                <div className="space-y-3 text-sm">
                                                    <div className="grid grid-cols-3 gap-4 text-gray-400 font-mono">
                                                        <span>Cookie Name</span>
                                                        <span>Purpose</span>
                                                        <span>Duration</span>
                                                    </div>
                                                    {[
                                                        {
                                                            name: "nv_session",
                                                            purpose:
                                                                "Session management",
                                                            duration: "Session",
                                                        },
                                                        {
                                                            name: "nv_auth",
                                                            purpose:
                                                                "Authentication",
                                                            duration: "7 days",
                                                        },
                                                        {
                                                            name: "nv_prefs",
                                                            purpose:
                                                                "User preferences",
                                                            duration: "1 year",
                                                        },
                                                        {
                                                            name: "nv_analytics",
                                                            purpose:
                                                                "Usage analytics",
                                                            duration: "1 year",
                                                        },
                                                        {
                                                            name: "nv_security",
                                                            purpose:
                                                                "Security token",
                                                            duration: "1 hour",
                                                        },
                                                    ].map((cookie, index) => (
                                                        <div
                                                            key={index}
                                                            className="grid grid-cols-3 gap-4 text-gray-300 py-2 border-t border-gray-700"
                                                        >
                                                            <span className="font-mono">
                                                                {cookie.name}
                                                            </span>
                                                            <span>
                                                                {cookie.purpose}
                                                            </span>
                                                            <span>
                                                                {
                                                                    cookie.duration
                                                                }
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            {/* Children's Privacy Section */}
                            <section id="children" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-pink-400 flex items-center gap-3">
                                    <Heart className="w-8 h-8" />
                                    [CHILDRENS_PRIVACY]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg p-6">
                                        <h3 className="text-pink-400 font-bold mb-4">
                                            Protection of Minors
                                        </h3>
                                        <div className="space-y-4 text-gray-300">
                                            <p>
                                                We take the protection of
                                                children's privacy seriously:
                                            </p>
                                            <ul className="space-y-2">
                                                <li>
                                                    • Players must be at least
                                                    13 years old to create an
                                                    account
                                                </li>
                                                <li>
                                                    • Users under 18 require
                                                    parental consent for
                                                    transactions
                                                </li>
                                                <li>
                                                    • We do not knowingly
                                                    collect data from children
                                                    under 13
                                                </li>
                                                <li>
                                                    • Parents can request
                                                    deletion of their child's
                                                    data
                                                </li>
                                                <li>
                                                    • Enhanced privacy controls
                                                    for teenage users
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6">
                                        <h4 className="text-yellow-400 font-bold mb-3">
                                            Parental Controls
                                        </h4>
                                        <p className="text-gray-300 mb-3">
                                            Parents and guardians can:
                                        </p>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>
                                                • Review their child's account
                                                information
                                            </li>
                                            <li>
                                                • Set spending limits and
                                                restrictions
                                            </li>
                                            <li>
                                                • Approve or deny transactions
                                            </li>
                                            <li>• Request account deletion</li>
                                            <li>
                                                • Contact us at
                                                parents@nexusvault.io
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* International Users Section */}
                            <section
                                id="international"
                                className="scroll-mt-24"
                            >
                                <h2 className="text-3xl font-bold mb-6 font-mono text-cyan-400 flex items-center gap-3">
                                    <Globe className="w-8 h-8" />
                                    [INTERNATIONAL_USERS]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        Information for users outside the United
                                        States:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-lg p-6">
                                            <h3 className="text-cyan-400 font-bold mb-4">
                                                Data Transfers
                                            </h3>
                                            <p className="text-gray-300 mb-3">
                                                Your data may be transferred to:
                                            </p>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • United States data centers
                                                </li>
                                                <li>
                                                    • Countries where we operate
                                                </li>
                                                <li>
                                                    • Service provider locations
                                                </li>
                                                <li>
                                                    • Secure cloud
                                                    infrastructure
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4">
                                                Legal Safeguards
                                            </h3>
                                            <p className="text-gray-300 mb-3">
                                                We ensure protection through:
                                            </p>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Standard contractual
                                                    clauses
                                                </li>
                                                <li>• Adequacy decisions</li>
                                                <li>
                                                    • Privacy Shield principles
                                                </li>
                                                <li>
                                                    • Binding corporate rules
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                        <h3 className="text-green-400 font-bold mb-4">
                                            Regional Compliance
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                                            <div>
                                                <h4 className="font-bold mb-2">
                                                    European Union (GDPR)
                                                </h4>
                                                <ul className="text-sm space-y-1">
                                                    <li>
                                                        • Full GDPR compliance
                                                    </li>
                                                    <li>
                                                        • EU representative
                                                        available
                                                    </li>
                                                    <li>
                                                        • Data protection
                                                        officer
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-2">
                                                    California (CCPA)
                                                </h4>
                                                <ul className="text-sm space-y-1">
                                                    <li>
                                                        • CCPA rights honored
                                                    </li>
                                                    <li>
                                                        • Do not sell provisions
                                                    </li>
                                                    <li>
                                                        • Privacy rights for
                                                        residents
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Policy Changes Section */}
                            <section id="changes" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-amber-400 flex items-center gap-3">
                                    <RefreshCw className="w-8 h-8" />
                                    [POLICY_CHANGES]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="bg-amber-500/10 border border-amber-400/20 rounded-lg p-6">
                                        <h3 className="text-amber-400 font-bold mb-4">
                                            Updates to This Policy
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            We may update this Privacy Policy to
                                            reflect changes in our practices,
                                            technology, legal requirements, or
                                            other factors.
                                        </p>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    Material changes will be
                                                    notified via email and
                                                    platform announcement
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    Review date at the top of
                                                    this policy for latest
                                                    version
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    Continued use constitutes
                                                    acceptance of updates
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                                <span>
                                                    Previous versions available
                                                    upon request
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                        <h3 className="text-blue-400 font-bold mb-4">
                                            Change History
                                        </h3>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                                <span className="text-gray-300">
                                                    Version 2.0.0
                                                </span>
                                                <span className="text-gray-400">
                                                    {lastUpdated}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                                <span className="text-gray-300">
                                                    Version 1.5.0
                                                </span>
                                                <span className="text-gray-400">
                                                    October 1, 2024
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-2">
                                                <span className="text-gray-300">
                                                    Version 1.0.0
                                                </span>
                                                <span className="text-gray-400">
                                                    January 1, 2024
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Contact Section */}
                            <section id="contact" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-green-400 flex items-center gap-3">
                                    <Mail className="w-8 h-8" />
                                    [CONTACT_US]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        If you have questions about this Privacy
                                        Policy or our data practices, please
                                        contact us:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                            <h3 className="text-green-400 font-bold mb-4">
                                                Privacy Team
                                            </h3>
                                            <div className="space-y-3 text-gray-300">
                                                <div className="flex items-center gap-3">
                                                    <Mail className="w-5 h-5 text-green-400" />
                                                    <span>
                                                        privacy@nexusvault.io
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Phone className="w-5 h-5 text-green-400" />
                                                    <span>
                                                        +1 (555) 123-4567
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Clock className="w-5 h-5 text-green-400" />
                                                    <span>
                                                        Response within 48 hours
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                            <h3 className="text-blue-400 font-bold mb-4">
                                                Data Protection Officer
                                            </h3>
                                            <div className="space-y-3 text-gray-300">
                                                <div className="flex items-center gap-3">
                                                    <Shield className="w-5 h-5 text-blue-400" />
                                                    <span>
                                                        DPO@nexusvault.io
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <MapPin className="w-5 h-5 text-blue-400" />
                                                    <span>
                                                        Delaware, United States
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Globe className="w-5 h-5 text-blue-400" />
                                                    <span>
                                                        EU Representative
                                                        Available
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-6">
                                        <h3 className="text-purple-400 font-bold mb-4">
                                            Mailing Address
                                        </h3>
                                        <address className="text-gray-300 not-italic">
                                            NEXUS VAULT Inc.
                                            <br />
                                            Privacy Department
                                            <br />
                                            123 Tech Boulevard, Suite 456
                                            <br />
                                            Wilmington, DE 19801
                                            <br />
                                            United States
                                        </address>
                                    </div>
                                </div>
                            </section>

                            {/* Footer */}
                            <footer className="border-t border-gray-700 pt-12 mt-16">
                                <div className="text-center space-y-6">
                                    <div className="flex items-center justify-center gap-4">
                                        <Shield className="w-5 h-5 text-blue-400" />
                                        <span className="text-gray-400 font-mono text-sm">
                                            Last updated: {lastUpdated} |
                                            Version {version}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center gap-6 text-sm">
                                        <button className="text-blue-400 hover:text-purple-400 transition-colors font-mono">
                                            Download PDF
                                        </button>
                                        <span className="text-gray-600">•</span>
                                        <button className="text-blue-400 hover:text-purple-400 transition-colors font-mono">
                                            Print Version
                                        </button>
                                        <span className="text-gray-600">•</span>
                                        <button className="text-blue-400 hover:text-purple-400 transition-colors font-mono">
                                            Cookie Settings
                                        </button>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-6">
                                        <p className="text-gray-300 text-sm">
                                            <strong className="text-blue-400">
                                                Your privacy matters to us.
                                            </strong>{" "}
                                            We are committed to protecting your
                                            personal information and being
                                            transparent about our data
                                            practices. For questions, contact{" "}
                                            <span className="text-purple-400 font-mono">
                                                privacy@nexusvault.io
                                            </span>
                                        </p>
                                    </div>

                                    <div className="text-xs text-gray-500 mt-8">
                                        <p>
                                            © 2025 NEXUS VAULT. All rights
                                            reserved.
                                        </p>
                                        <p className="mt-2">
                                            This privacy policy is provided in
                                            English. Translations may be
                                            available for convenience.
                                        </p>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyComponent;
