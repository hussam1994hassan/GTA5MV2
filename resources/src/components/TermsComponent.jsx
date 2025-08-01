import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Shield,
    FileText,
    CheckCircle,
    AlertTriangle,
    Scale,
    Users,
    Lock,
    Globe,
    Gavel,
    Eye,
    Server,
    Clock,
    ArrowLeft,
    Download,
    Printer,
    CreditCard,
    Ban,
    UserX,
    ShieldAlert,
    AlertOctagon,
    FileWarning,
    UserCheck,
    RefreshCw,
    DollarSign,
    XCircle,
    Info,
    BookOpen,
    Key,
    Database,
    Zap,
    Award,
} from "lucide-react";
import { useNavigate } from "react-router";

const TermsComponent = () => {
    const [activeSection, setActiveSection] = useState("overview");
    const [language, setLanguage] = useState("en");

    const navigate = useNavigate();

    const sections = [
        {
            id: "overview",
            title: "Overview",
            icon: <FileText className="w-5 h-5" />,
        },
        {
            id: "definitions",
            title: "Definitions",
            icon: <Globe className="w-5 h-5" />,
        },
        {
            id: "eligibility",
            title: "Eligibility & Registration",
            icon: <UserCheck className="w-5 h-5" />,
        },
        {
            id: "services",
            title: "Platform Services",
            icon: <Server className="w-5 h-5" />,
        },
        {
            id: "user-obligations",
            title: "User Obligations",
            icon: <Users className="w-5 h-5" />,
        },
        {
            id: "server-owner-terms",
            title: "Server Owner Terms",
            icon: <Award className="w-5 h-5" />,
        },
        {
            id: "player-terms",
            title: "Player Terms",
            icon: <UserCheck className="w-5 h-5" />,
        },
        {
            id: "payments",
            title: "Payment Terms",
            icon: <CreditCard className="w-5 h-5" />,
        },
        {
            id: "refunds",
            title: "Refunds & Disputes",
            icon: <RefreshCw className="w-5 h-5" />,
        },
        {
            id: "fraud",
            title: "Fraud Prevention",
            icon: <ShieldAlert className="w-5 h-5" />,
        },
        {
            id: "intellectual-property",
            title: "Intellectual Property",
            icon: <Key className="w-5 h-5" />,
        },
        {
            id: "security",
            title: "Security & Privacy",
            icon: <Shield className="w-5 h-5" />,
        },
        {
            id: "liability",
            title: "Liability & Disclaimers",
            icon: <Scale className="w-5 h-5" />,
        },
        {
            id: "termination",
            title: "Termination",
            icon: <Ban className="w-5 h-5" />,
        },
        {
            id: "governing-law",
            title: "Governing Law",
            icon: <Gavel className="w-5 h-5" />,
        },
    ];

    const lastUpdated = "January 15, 2025";
    const effectiveDate = "January 1, 2025";
    const version = "3.0.0";

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
            linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)
          `,
                        backgroundSize:
                            "100px 100px, 100px 100px, 20px 20px, 20px 20px",
                    }}
                ></div>

                <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 bg-gray-800/80 backdrop-blur-xl border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => navigate("/")}
                                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors font-mono"
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
                            <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm">
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
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Gavel className="w-7 h-7 text-white" />
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
                                        LEGAL_FRAMEWORK
                                    </p>
                                </div>
                            </div>

                            {/* Document Info */}
                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
                                <h3 className="text-emerald-400 font-mono font-bold mb-4">
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
                                            Status:
                                        </span>
                                        <span className="text-emerald-400 font-mono flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" />
                                            ACTIVE
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
                                                ? "bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400"
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

                            {/* Quick Contact */}
                            <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl">
                                <h4 className="text-cyan-400 font-mono font-bold text-sm mb-2">
                                    Legal Questions?
                                </h4>
                                <p className="text-gray-400 text-xs mb-3">
                                    Contact our legal team for clarification
                                </p>
                                <button className="text-cyan-400 hover:text-emerald-400 font-mono text-xs transition-colors">
                                    legal@nexusvault.io
                                </button>
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
                                    <span className="text-white">TERMS &</span>
                                    <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                        CONDITIONS
                                    </span>
                                </motion.h1>
                                <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                                    Comprehensive legal framework governing the
                                    use of NEXUS VAULT secure payment
                                    intermediary platform for FiveM server
                                    transactions and digital asset management.
                                </p>
                                <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-mono">
                                    <span>Effective: {effectiveDate}</span>
                                    <span>•</span>
                                    <span>Last Updated: {lastUpdated}</span>
                                    <span>•</span>
                                    <span className="text-emerald-400">
                                        Version {version}
                                    </span>
                                </div>
                            </div>

                            {/* Overview Section */}
                            <section id="overview" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400 flex items-center gap-3">
                                    <FileText className="w-8 h-8" />
                                    [OVERVIEW]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        Welcome to{" "}
                                        <span className="text-emerald-400 font-mono font-bold">
                                            NEXUS VAULT
                                        </span>
                                        , the premier secure payment
                                        intermediary platform designed
                                        specifically for FiveM gaming
                                        environments. These Terms and Conditions
                                        ("Terms") constitute a legally binding
                                        agreement between you and NEXUS VAULT
                                        ("we", "us", "our", "Platform").
                                    </p>

                                    <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="text-yellow-400 font-bold font-mono mb-2">
                                                    BINDING AGREEMENT
                                                </h4>
                                                <p className="text-gray-300 text-sm">
                                                    By accessing, using, or
                                                    registering on the NEXUS
                                                    VAULT platform, you
                                                    acknowledge that you have
                                                    read, understood, and agree
                                                    to be bound by these Terms
                                                    and Conditions, our Privacy
                                                    Policy, and all applicable
                                                    laws and regulations. If you
                                                    do not agree to these terms,
                                                    you must immediately
                                                    discontinue use of our
                                                    services.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-lg p-4">
                                            <h4 className="text-emerald-400 font-bold mb-2">
                                                Platform Purpose
                                            </h4>
                                            <p className="text-gray-300 text-sm">
                                                NEXUS VAULT facilitates secure
                                                transactions between FiveM
                                                server owners and players,
                                                ensuring safe payment processing
                                                and digital asset delivery.
                                            </p>
                                        </div>
                                        <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-lg p-4">
                                            <h4 className="text-cyan-400 font-bold mb-2">
                                                Our Commitment
                                            </h4>
                                            <p className="text-gray-300 text-sm">
                                                We provide a secure,
                                                transparent, and efficient
                                                platform for all FiveM-related
                                                transactions with fraud
                                                protection and dispute
                                                resolution.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Definitions Section */}
                            <section id="definitions" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-cyan-400 flex items-center gap-3">
                                    <Globe className="w-8 h-8" />
                                    [DEFINITIONS]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <p className="text-gray-300 mb-6">
                                        For the purposes of these Terms, the
                                        following definitions apply:
                                    </p>
                                    <div className="grid gap-4">
                                        {[
                                            {
                                                term: "Platform",
                                                definition:
                                                    "The NEXUS VAULT secure payment intermediary system, including all websites, applications, APIs, services, and related infrastructure.",
                                            },
                                            {
                                                term: "Account",
                                                definition:
                                                    "A registered user profile on the Platform, which may be either a Server Owner Account or Player Account.",
                                            },
                                            {
                                                term: "Server Owner",
                                                definition:
                                                    "Individual or entity operating a FiveM server who lists and sells digital items, services, or subscriptions through the Platform.",
                                            },
                                            {
                                                term: "Player",
                                                definition:
                                                    "End user who purchases digital items, services, or subscriptions from Server Owners through the Platform.",
                                            },
                                            {
                                                term: "Transaction",
                                                definition:
                                                    "Any financial exchange facilitated through the Platform, including purchases, refunds, chargebacks, and transfers.",
                                            },
                                            {
                                                term: "Digital Items",
                                                definition:
                                                    "Virtual goods, in-game assets, currencies, vehicles, weapons, cosmetics, ranks, or any intangible items available within FiveM servers.",
                                            },
                                            {
                                                term: "Payment Processor",
                                                definition:
                                                    "Third-party services (such as Stripe, PayPal) used by the Platform to process financial transactions.",
                                            },
                                            {
                                                term: "Escrow",
                                                definition:
                                                    "The secure holding of funds by the Platform until transaction conditions are met and digital items are delivered.",
                                            },
                                            {
                                                term: "Dispute",
                                                definition:
                                                    "Any disagreement between parties regarding a transaction, including non-delivery, quality issues, or unauthorized charges.",
                                            },
                                            {
                                                term: "Chargeback",
                                                definition:
                                                    "A reversal of a credit card transaction initiated by the cardholder's bank.",
                                            },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                                className="border-l-4 border-cyan-400 pl-4 py-2"
                                            >
                                                <h4 className="text-cyan-400 font-mono font-bold text-lg mb-2">
                                                    "{item.term}"
                                                </h4>
                                                <p className="text-gray-300">
                                                    {item.definition}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Eligibility & Registration Section */}
                            <section id="eligibility" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-green-400 flex items-center gap-3">
                                    <UserCheck className="w-8 h-8" />
                                    [ELIGIBILITY_REGISTRATION]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        Eligibility Requirements
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                            <h4 className="text-green-400 font-bold mb-3">
                                                Age Requirements
                                            </h4>
                                            <ul className="space-y-2 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Must be at least 18
                                                        years of age to create a
                                                        Server Owner account
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Must be at least 13
                                                        years of age to create a
                                                        Player account (parental
                                                        consent required for
                                                        users under 18)
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Must have legal capacity
                                                        to enter into binding
                                                        contracts
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold mb-3">
                                                Registration Requirements
                                            </h4>
                                            <ul className="space-y-3 text-gray-300">
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Accurate
                                                            Information:
                                                        </strong>{" "}
                                                        You must provide
                                                        truthful, accurate, and
                                                        complete information
                                                        during registration
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Account Security:
                                                        </strong>{" "}
                                                        You are responsible for
                                                        maintaining the
                                                        confidentiality of your
                                                        account credentials
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            One Account Policy:
                                                        </strong>{" "}
                                                        Each user may only
                                                        maintain one active
                                                        account unless
                                                        explicitly authorized
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Verification:
                                                        </strong>{" "}
                                                        We reserve the right to
                                                        verify your identity and
                                                        may request additional
                                                        documentation
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                            <h4 className="text-red-400 font-bold mb-3">
                                                Account Restrictions
                                            </h4>
                                            <p className="text-gray-300 text-sm mb-3">
                                                You may NOT create an account if
                                                you:
                                            </p>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Have been previously
                                                    banned or suspended from the
                                                    Platform
                                                </li>
                                                <li>
                                                    • Are located in a
                                                    jurisdiction where our
                                                    services are prohibited
                                                </li>
                                                <li>
                                                    • Are subject to economic
                                                    sanctions or trade
                                                    restrictions
                                                </li>
                                                <li>
                                                    • Intend to use the Platform
                                                    for illegal or fraudulent
                                                    purposes
                                                </li>
                                                <li>
                                                    • Cannot form legally
                                                    binding contracts under
                                                    applicable law
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Platform Services Section */}
                            <section id="services" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-blue-400 flex items-center gap-3">
                                    <Server className="w-8 h-8" />
                                    [PLATFORM_SERVICES]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        Service Offerings
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {[
                                            {
                                                title: "Payment Processing",
                                                icon: (
                                                    <CreditCard className="w-6 h-6" />
                                                ),
                                                items: [
                                                    "Secure payment gateway integration",
                                                    "Multiple payment methods support",
                                                    "Real-time transaction processing",
                                                    "Automatic currency conversion",
                                                    "PCI-DSS compliant infrastructure",
                                                ],
                                            },
                                            {
                                                title: "Escrow Protection",
                                                icon: (
                                                    <Shield className="w-6 h-6" />
                                                ),
                                                items: [
                                                    "Funds held securely until delivery",
                                                    "Automated release conditions",
                                                    "Dispute resolution mechanism",
                                                    "Chargeback protection",
                                                    "Transaction insurance options",
                                                ],
                                            },
                                            {
                                                title: "Digital Asset Management",
                                                icon: (
                                                    <Database className="w-6 h-6" />
                                                ),
                                                items: [
                                                    "Inventory tracking system",
                                                    "Automated delivery verification",
                                                    "Asset authentication",
                                                    "Backup and recovery",
                                                    "Version control for items",
                                                ],
                                            },
                                            {
                                                title: "Server Integration",
                                                icon: (
                                                    <Zap className="w-6 h-6" />
                                                ),
                                                items: [
                                                    "API for FiveM servers",
                                                    "Webhook notifications",
                                                    "Real-time synchronization",
                                                    "Custom integration support",
                                                    "Performance monitoring",
                                                ],
                                            },
                                        ].map((service, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-800/30 border border-gray-600 rounded-lg p-6"
                                            >
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="text-blue-400">
                                                        {service.icon}
                                                    </div>
                                                    <h4 className="text-blue-400 font-mono font-bold">
                                                        {service.title}
                                                    </h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {service.items.map(
                                                        (item, itemIndex) => (
                                                            <li
                                                                key={itemIndex}
                                                                className="flex items-center gap-2 text-gray-300"
                                                            >
                                                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                                <span className="text-sm">
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* User Obligations Section */}
                            <section
                                id="user-obligations"
                                className="scroll-mt-24"
                            >
                                <h2 className="text-3xl font-bold mb-6 font-mono text-purple-400 flex items-center gap-3">
                                    <Users className="w-8 h-8" />
                                    [USER_OBLIGATIONS]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                General Obligations
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                All users of the Platform must:
                                            </p>
                                            <ul className="space-y-3">
                                                {[
                                                    "Comply with all applicable laws, regulations, and these Terms",
                                                    "Provide accurate and truthful information at all times",
                                                    "Maintain the security and confidentiality of account credentials",
                                                    "Report any unauthorized access or suspicious activity immediately",
                                                    "Not engage in any activity that could harm the Platform or other users",
                                                    "Respect intellectual property rights of others",
                                                    "Not attempt to circumvent Platform security or payment systems",
                                                    "Cooperate with Platform investigations and dispute resolutions",
                                                ].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-3 text-gray-300"
                                                    >
                                                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                            <h4 className="text-red-400 font-bold font-mono mb-3 flex items-center gap-2">
                                                <Ban className="w-5 h-5" />
                                                PROHIBITED ACTIVITIES
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                                                <ul className="space-y-2">
                                                    <li>
                                                        • Money laundering or
                                                        terrorist financing
                                                    </li>
                                                    <li>
                                                        • Fraudulent
                                                        transactions or scams
                                                    </li>
                                                    <li>
                                                        • Selling illegal or
                                                        prohibited items
                                                    </li>
                                                    <li>
                                                        • Identity theft or
                                                        impersonation
                                                    </li>
                                                    <li>
                                                        • Hacking or exploiting
                                                        vulnerabilities
                                                    </li>
                                                    <li>
                                                        • Spamming or harassment
                                                    </li>
                                                </ul>
                                                <ul className="space-y-2">
                                                    <li>
                                                        • Creating fake reviews
                                                        or ratings
                                                    </li>
                                                    <li>
                                                        • Circumventing fees or
                                                        restrictions
                                                    </li>
                                                    <li>
                                                        • Sharing account
                                                        credentials
                                                    </li>
                                                    <li>
                                                        • Reverse engineering
                                                        Platform code
                                                    </li>
                                                    <li>
                                                        • Automated scraping or
                                                        data mining
                                                    </li>
                                                    <li>
                                                        • Interfering with
                                                        Platform operations
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Server Owner Terms Section */}
                            <section
                                id="server-owner-terms"
                                className="scroll-mt-24"
                            >
                                <h2 className="text-3xl font-bold mb-6 font-mono text-amber-400 flex items-center gap-3">
                                    <Award className="w-8 h-8" />
                                    [SERVER_OWNER_TERMS]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Server Owner Responsibilities
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-amber-500/10 border border-amber-400/20 rounded-lg p-6">
                                                    <h4 className="text-amber-400 font-bold mb-3">
                                                        Product Listings
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Provide accurate
                                                                descriptions and
                                                                images of all
                                                                digital items
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Clearly state
                                                                all terms,
                                                                conditions, and
                                                                limitations
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Update inventory
                                                                and availability
                                                                in real-time
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Honor all
                                                                advertised
                                                                prices and
                                                                promotions
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                                    <h4 className="text-blue-400 font-bold mb-3">
                                                        Delivery Obligations
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Deliver digital
                                                                items within the
                                                                specified
                                                                timeframe (max
                                                                24 hours)
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Provide proof of
                                                                delivery through
                                                                Platform systems
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Maintain server
                                                                uptime for item
                                                                functionality
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Respond to
                                                                customer
                                                                inquiries within
                                                                48 hours
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                                    <h4 className="text-green-400 font-bold mb-3">
                                                        Financial Terms
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <DollarSign className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Platform fee: 5%
                                                                of each
                                                                transaction
                                                                (subject to
                                                                change with
                                                                30-day notice)
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <DollarSign className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Payouts
                                                                processed weekly
                                                                (minimum
                                                                balance: $50)
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <DollarSign className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Responsible for
                                                                own tax
                                                                obligations
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <DollarSign className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Chargeback fees
                                                                may apply ($15
                                                                per incident)
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                                    <h4 className="text-red-400 font-bold mb-3">
                                                        Prohibited Server Owner
                                                        Conduct
                                                    </h4>
                                                    <ul className="space-y-2 text-sm text-gray-300">
                                                        <li>
                                                            • Selling items
                                                            obtained through
                                                            exploits or hacks
                                                        </li>
                                                        <li>
                                                            • False advertising
                                                            or misleading
                                                            descriptions
                                                        </li>
                                                        <li>
                                                            • Failing to deliver
                                                            purchased items
                                                        </li>
                                                        <li>
                                                            • Discriminating
                                                            against players
                                                        </li>
                                                        <li>
                                                            • Manipulating
                                                            reviews or ratings
                                                        </li>
                                                        <li>
                                                            • Creating
                                                            artificial scarcity
                                                        </li>
                                                        <li>
                                                            • Engaging in price
                                                            fixing with other
                                                            servers
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Player Terms Section */}
                            <section id="player-terms" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-indigo-400 flex items-center gap-3">
                                    <UserCheck className="w-8 h-8" />
                                    [PLAYER_TERMS]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Player Rights & Responsibilities
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-lg p-6">
                                                    <h4 className="text-indigo-400 font-bold mb-3">
                                                        Your Rights
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Receive items as
                                                                described
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Request refunds
                                                                for non-delivery
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                File disputes
                                                                for issues
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Access
                                                                transaction
                                                                history
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Data privacy
                                                                protection
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-6">
                                                    <h4 className="text-purple-400 font-bold mb-3">
                                                        Your Responsibilities
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Provide accurate
                                                                information
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Use legitimate
                                                                payment methods
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Not abuse refund
                                                                system
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Report issues
                                                                promptly
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Respect server
                                                                rules
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                            <h4 className="text-red-400 font-bold mb-3">
                                                Prohibited Player Conduct
                                            </h4>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Using stolen payment
                                                    methods
                                                </li>
                                                <li>
                                                    • Filing false disputes or
                                                    chargebacks
                                                </li>
                                                <li>
                                                    • Sharing purchased items
                                                    without authorization
                                                </li>
                                                <li>
                                                    • Attempting to exploit
                                                    refund policies
                                                </li>
                                                <li>
                                                    • Creating multiple accounts
                                                    to bypass restrictions
                                                </li>
                                                <li>
                                                    • Harassing server owners or
                                                    support staff
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Payment Terms Section */}
                            <section id="payments" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-yellow-400 flex items-center gap-3">
                                    <CreditCard className="w-8 h-8" />
                                    [PAYMENT_TERMS]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Payment Processing
                                            </h3>
                                            <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6">
                                                <h4 className="text-yellow-400 font-bold mb-3">
                                                    Accepted Payment Methods
                                                </h4>
                                                <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                                                    <div>
                                                        <h5 className="font-bold mb-2">
                                                            Credit/Debit Cards
                                                        </h5>
                                                        <ul className="text-sm space-y-1">
                                                            <li>• Visa</li>
                                                            <li>
                                                                • Mastercard
                                                            </li>
                                                            <li>
                                                                • American
                                                                Express
                                                            </li>
                                                            <li>• Discover</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold mb-2">
                                                            Digital Wallets
                                                        </h5>
                                                        <ul className="text-sm space-y-1">
                                                            <li>• PayPal</li>
                                                            <li>• Apple Pay</li>
                                                            <li>
                                                                • Google Pay
                                                            </li>
                                                            <li>• Stripe</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold mb-2">
                                                            Cryptocurrencies
                                                        </h5>
                                                        <ul className="text-sm space-y-1">
                                                            <li>
                                                                • Bitcoin (BTC)
                                                            </li>
                                                            <li>
                                                                • Ethereum (ETH)
                                                            </li>
                                                            <li>• USDT</li>
                                                            <li>
                                                                • Coming soon...
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-white font-bold">
                                                Transaction Process
                                            </h4>
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                        1
                                                    </div>
                                                    <div>
                                                        <h5 className="text-yellow-400 font-bold">
                                                            Payment
                                                            Authorization
                                                        </h5>
                                                        <p className="text-gray-300 text-sm">
                                                            Funds are authorized
                                                            and held in escrow
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                        2
                                                    </div>
                                                    <div>
                                                        <h5 className="text-yellow-400 font-bold">
                                                            Item Delivery
                                                        </h5>
                                                        <p className="text-gray-300 text-sm">
                                                            Server owner
                                                            delivers digital
                                                            items to player
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                        3
                                                    </div>
                                                    <div>
                                                        <h5 className="text-yellow-400 font-bold">
                                                            Confirmation
                                                        </h5>
                                                        <p className="text-gray-300 text-sm">
                                                            Delivery confirmed
                                                            automatically or by
                                                            player
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                        4
                                                    </div>
                                                    <div>
                                                        <h5 className="text-yellow-400 font-bold">
                                                            Fund Release
                                                        </h5>
                                                        <p className="text-gray-300 text-sm">
                                                            Funds released to
                                                            server owner minus
                                                            platform fee
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                            <h4 className="text-green-400 font-bold mb-3">
                                                Fee Structure
                                            </h4>
                                            <div className="space-y-2 text-gray-300">
                                                <div className="flex justify-between">
                                                    <span>
                                                        Platform Transaction
                                                        Fee:
                                                    </span>
                                                    <span className="font-mono">
                                                        5%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>
                                                        Payment Processing Fee:
                                                    </span>
                                                    <span className="font-mono">
                                                        2.9% + $0.30
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>
                                                        International
                                                        Transaction:
                                                    </span>
                                                    <span className="font-mono">
                                                        +1%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>
                                                        Currency Conversion:
                                                    </span>
                                                    <span className="font-mono">
                                                        Market Rate + 1%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Chargeback Fee:</span>
                                                    <span className="font-mono">
                                                        $15
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Refunds & Disputes Section */}
                            <section id="refunds" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-teal-400 flex items-center gap-3">
                                    <RefreshCw className="w-8 h-8" />
                                    [REFUNDS_DISPUTES]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Refund Policy
                                            </h3>
                                            <div className="bg-teal-500/10 border border-teal-400/20 rounded-lg p-6">
                                                <h4 className="text-teal-400 font-bold mb-3">
                                                    Eligible for Refund
                                                </h4>
                                                <ul className="space-y-2 text-gray-300">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            Item not delivered
                                                            within 24 hours
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            Item significantly
                                                            not as described
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            Duplicate
                                                            transactions
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            Server permanently
                                                            closed within 7 days
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                            <h4 className="text-red-400 font-bold mb-3">
                                                NOT Eligible for Refund
                                            </h4>
                                            <ul className="space-y-2 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Change of mind after
                                                        delivery
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Ban from server due to
                                                        rule violations
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Items used or consumed
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Requests made after 30
                                                        days
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Dispute Resolution Process
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="border-l-4 border-teal-400 pl-4">
                                                    <h4 className="text-teal-400 font-bold mb-2">
                                                        Step 1: Direct
                                                        Communication (48 hours)
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Contact server owner
                                                        directly through
                                                        Platform messaging
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-teal-400 pl-4">
                                                    <h4 className="text-teal-400 font-bold mb-2">
                                                        Step 2: File Dispute (72
                                                        hours)
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Submit formal dispute
                                                        with evidence through
                                                        Platform
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-teal-400 pl-4">
                                                    <h4 className="text-teal-400 font-bold mb-2">
                                                        Step 3: Platform Review
                                                        (5-7 days)
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Our team reviews
                                                        evidence and makes
                                                        determination
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-teal-400 pl-4">
                                                    <h4 className="text-teal-400 font-bold mb-2">
                                                        Step 4: Final Decision
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Binding decision issued
                                                        and appropriate action
                                                        taken
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Fraud Prevention Section */}
                            <section id="fraud" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-red-400 flex items-center gap-3">
                                    <ShieldAlert className="w-8 h-8" />
                                    [FRAUD_PREVENTION]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                        <h3 className="text-red-400 font-bold text-xl mb-4">
                                            Zero Tolerance Policy
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            NEXUS VAULT maintains a strict
                                            zero-tolerance policy against fraud.
                                            Any fraudulent activity will result
                                            in immediate account termination,
                                            forfeiture of funds, and potential
                                            legal action.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-bold mb-3">
                                                Anti-Fraud Measures
                                            </h4>
                                            <ul className="space-y-2 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <Shield className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        AI-powered transaction
                                                        monitoring
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Shield className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Identity verification
                                                        requirements
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Shield className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        IP tracking and
                                                        geolocation
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Shield className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Device fingerprinting
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Shield className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Payment method
                                                        verification
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold mb-3">
                                                Consequences of Fraud
                                            </h4>
                                            <ul className="space-y-2 text-gray-300">
                                                <li className="flex items-start gap-2">
                                                    <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Immediate account
                                                        suspension
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Forfeiture of account
                                                        balance
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Permanent IP/device ban
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Report to law
                                                        enforcement
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Civil and criminal
                                                        prosecution
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6">
                                        <h4 className="text-yellow-400 font-bold mb-3">
                                            Reporting Fraud
                                        </h4>
                                        <p className="text-gray-300 mb-3">
                                            If you suspect fraudulent activity:
                                        </p>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>
                                                • Contact our fraud team
                                                immediately: fraud@nexusvault.io
                                            </li>
                                            <li>
                                                • Provide transaction IDs and
                                                relevant evidence
                                            </li>
                                            <li>
                                                • Do not attempt to resolve
                                                directly with suspected
                                                fraudster
                                            </li>
                                            <li>
                                                • Preserve all communications
                                                and records
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Intellectual Property Section */}
                            <section
                                id="intellectual-property"
                                className="scroll-mt-24"
                            >
                                <h2 className="text-3xl font-bold mb-6 font-mono text-pink-400 flex items-center gap-3">
                                    <Key className="w-8 h-8" />
                                    [INTELLECTUAL_PROPERTY]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Platform Intellectual Property
                                            </h3>
                                            <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg p-6">
                                                <p className="text-gray-300 mb-4">
                                                    All content, features, and
                                                    functionality of the NEXUS
                                                    VAULT platform, including
                                                    but not limited to:
                                                </p>
                                                <ul className="space-y-2 text-gray-300">
                                                    <li>
                                                        • Logo, trademarks, and
                                                        branding elements
                                                    </li>
                                                    <li>
                                                        • Website design and
                                                        user interface
                                                    </li>
                                                    <li>
                                                        • Software code and
                                                        algorithms
                                                    </li>
                                                    <li>
                                                        • Documentation and
                                                        guides
                                                    </li>
                                                    <li>
                                                        • Marketing materials
                                                    </li>
                                                </ul>
                                                <p className="text-gray-300 mt-4">
                                                    Are owned by NEXUS VAULT and
                                                    protected by international
                                                    copyright, trademark, and
                                                    other intellectual property
                                                    laws.
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                User Content
                                            </h3>
                                            <div className="space-y-4">
                                                <p className="text-gray-300">
                                                    By uploading content to the
                                                    Platform, you grant NEXUS
                                                    VAULT a worldwide,
                                                    non-exclusive, royalty-free
                                                    license to:
                                                </p>
                                                <ul className="space-y-2 text-gray-300">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            Use, reproduce, and
                                                            display content for
                                                            Platform operation
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            Modify content for
                                                            technical
                                                            requirements
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            Create derivative
                                                            works for Platform
                                                            features
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-6">
                                            <h4 className="text-orange-400 font-bold mb-3">
                                                Copyright Infringement
                                            </h4>
                                            <p className="text-gray-300 mb-3">
                                                We respect intellectual property
                                                rights. If you believe content
                                                infringes your copyright:
                                            </p>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Submit DMCA notice to:
                                                    dmca@nexusvault.io
                                                </li>
                                                <li>
                                                    • Include identification of
                                                    copyrighted work
                                                </li>
                                                <li>
                                                    • Provide contact
                                                    information and signature
                                                </li>
                                                <li>
                                                    • We will investigate and
                                                    take appropriate action
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Security & Privacy Section */}
                            <section id="security" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400 flex items-center gap-3">
                                    <Shield className="w-8 h-8" />
                                    [SECURITY_PRIVACY]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Data Protection Commitment
                                            </h3>
                                            <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-lg p-6">
                                                <h4 className="text-emerald-400 font-bold mb-3">
                                                    Security Measures
                                                </h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                256-bit SSL
                                                                encryption
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                PCI-DSS
                                                                compliance
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Two-factor
                                                                authentication
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Regular security
                                                                audits
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Encrypted data
                                                                storage
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Secure API
                                                                endpoints
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                DDoS protection
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                24/7 monitoring
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Privacy Practices
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6">
                                                    <h4 className="text-blue-400 font-bold mb-3">
                                                        Data Collection
                                                    </h4>
                                                    <p className="text-gray-300 mb-3">
                                                        We collect only
                                                        necessary data for
                                                        Platform operation:
                                                    </p>
                                                    <ul className="space-y-2 text-sm text-gray-300">
                                                        <li>
                                                            • Account
                                                            information (email,
                                                            username)
                                                        </li>
                                                        <li>
                                                            • Transaction data
                                                            (purchases,
                                                            payments)
                                                        </li>
                                                        <li>
                                                            • Technical data (IP
                                                            address, device
                                                            info)
                                                        </li>
                                                        <li>
                                                            • Usage data (for
                                                            improving services)
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                                    <h4 className="text-green-400 font-bold mb-3">
                                                        Your Privacy Rights
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <Eye className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Access your
                                                                personal data
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Eye className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Request data
                                                                correction
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Eye className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Delete your
                                                                account
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Eye className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Data portability
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-lg p-6">
                                            <h4 className="text-emerald-400 font-bold font-mono mb-3">
                                                PRIVACY GUARANTEE
                                            </h4>
                                            <p className="text-gray-300 text-sm">
                                                We NEVER sell, share, or
                                                monetize your personal data to
                                                third parties. All information
                                                is used solely for platform
                                                operation, security, and
                                                improving your experience. For
                                                complete details, please review
                                                our comprehensive Privacy
                                                Policy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Liability & Disclaimers Section */}
                            <section id="liability" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-orange-400 flex items-center gap-3">
                                    <Scale className="w-8 h-8" />
                                    [LIABILITY_DISCLAIMERS]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-6">
                                            <h3 className="text-orange-400 font-bold text-xl mb-4">
                                                Limitation of Liability
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                TO THE MAXIMUM EXTENT PERMITTED
                                                BY LAW, NEXUS VAULT SHALL NOT BE
                                                LIABLE FOR:
                                            </p>
                                            <ul className="space-y-2 text-gray-300">
                                                <li>
                                                    • Indirect, incidental,
                                                    special, or consequential
                                                    damages
                                                </li>
                                                <li>
                                                    • Loss of profits, revenue,
                                                    or business opportunities
                                                </li>
                                                <li>
                                                    • Server downtime or
                                                    technical failures
                                                </li>
                                                <li>
                                                    • Actions of third parties,
                                                    including payment processors
                                                </li>
                                                <li>
                                                    • Disputes between users
                                                </li>
                                                <li>
                                                    • Changes to FiveM or game
                                                    updates affecting items
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Platform Disclaimers
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="border-l-4 border-orange-400 pl-4">
                                                    <h4 className="text-orange-400 font-bold mb-2">
                                                        "As Is" Service
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        The Platform is provided
                                                        "as is" without
                                                        warranties of any kind,
                                                        either express or
                                                        implied.
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-orange-400 pl-4">
                                                    <h4 className="text-orange-400 font-bold mb-2">
                                                        No Guarantee
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        We do not guarantee
                                                        uninterrupted, secure,
                                                        or error-free operation
                                                        of the Platform.
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-orange-400 pl-4">
                                                    <h4 className="text-orange-400 font-bold mb-2">
                                                        Third-Party Content
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        We are not responsible
                                                        for third-party content,
                                                        including server
                                                        offerings or
                                                        user-generated content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6">
                                            <h4 className="text-yellow-400 font-bold mb-3">
                                                Indemnification
                                            </h4>
                                            <p className="text-gray-300">
                                                You agree to indemnify, defend,
                                                and hold harmless NEXUS VAULT,
                                                its officers, directors,
                                                employees, and agents from any
                                                claims, damages, losses,
                                                liabilities, and expenses
                                                arising from:
                                            </p>
                                            <ul className="space-y-1 text-sm text-gray-300 mt-3">
                                                <li>
                                                    • Your use of the Platform
                                                </li>
                                                <li>
                                                    • Violation of these Terms
                                                </li>
                                                <li>
                                                    • Infringement of any rights
                                                </li>
                                                <li>
                                                    • Your content or listings
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Termination Section */}
                            <section id="termination" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 font-mono text-red-400 flex items-center gap-3">
                                    <Ban className="w-8 h-8" />
                                    [TERMINATION]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Termination by Platform
                                            </h3>
                                            <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                                <h4 className="text-red-400 font-bold mb-3">
                                                    Grounds for Termination
                                                </h4>
                                                <p className="text-gray-300 mb-4">
                                                    We may suspend or terminate
                                                    your account for:
                                                </p>
                                                <ul className="space-y-2 text-gray-300">
                                                    <li>
                                                        • Violation of these
                                                        Terms and Conditions
                                                    </li>
                                                    <li>
                                                        • Fraudulent or illegal
                                                        activities
                                                    </li>
                                                    <li>
                                                        • Harmful behavior
                                                        toward other users
                                                    </li>
                                                    <li>
                                                        • Attempting to
                                                        circumvent Platform
                                                        security
                                                    </li>
                                                    <li>
                                                        • Creating multiple
                                                        accounts after ban
                                                    </li>
                                                    <li>
                                                        • Non-payment of fees or
                                                        chargebacks
                                                    </li>
                                                    <li>
                                                        • Inactivity for 12+
                                                        months
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Termination Process
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6">
                                                    <h4 className="text-yellow-400 font-bold mb-3">
                                                        Standard Termination
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                30-day notice
                                                                for non-critical
                                                                violations
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Opportunity to
                                                                remedy
                                                                violations
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Withdrawal
                                                                period for funds
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                                                    <h4 className="text-red-400 font-bold mb-3">
                                                        Immediate Termination
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-300">
                                                        <li className="flex items-start gap-2">
                                                            <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Fraud or illegal
                                                                activities
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Immediate threat
                                                                to Platform or
                                                                users
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                            <span>
                                                                Court order or
                                                                legal
                                                                requirement
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Effect of Termination
                                            </h3>
                                            <ul className="space-y-3 text-gray-300">
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Account Access:
                                                        </strong>{" "}
                                                        Immediate loss of access
                                                        to Platform services
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Pending
                                                            Transactions:
                                                        </strong>{" "}
                                                        Completion or
                                                        cancellation per
                                                        circumstances
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Data Retention:
                                                        </strong>{" "}
                                                        Per privacy policy and
                                                        legal requirements
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Appeal Process:
                                                        </strong>{" "}
                                                        Available within 30 days
                                                        for disputed
                                                        terminations
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Governing Law Section */}
                            <section
                                id="governing-law"
                                className="scroll-mt-24"
                            >
                                <h2 className="text-3xl font-bold mb-6 font-mono text-indigo-400 flex items-center gap-3">
                                    <Gavel className="w-8 h-8" />
                                    [GOVERNING_LAW]
                                </h2>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                                    <div className="space-y-6">
                                        <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-lg p-6">
                                            <h3 className="text-indigo-400 font-bold text-xl mb-4">
                                                Applicable Law
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                These Terms shall be governed by
                                                and construed in accordance with
                                                the laws of the United States
                                                and the State of Delaware,
                                                without regard to conflict of
                                                law principles.
                                            </p>
                                            <p className="text-gray-300">
                                                You agree to submit to the
                                                personal and exclusive
                                                jurisdiction of the courts
                                                located in Delaware for
                                                resolution of any disputes.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Dispute Resolution
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="border-l-4 border-indigo-400 pl-4">
                                                    <h4 className="text-indigo-400 font-bold mb-2">
                                                        Informal Resolution
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Parties agree to attempt
                                                        good faith resolution
                                                        before formal
                                                        proceedings
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-indigo-400 pl-4">
                                                    <h4 className="text-indigo-400 font-bold mb-2">
                                                        Binding Arbitration
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        Disputes not resolved
                                                        informally shall be
                                                        settled by binding
                                                        arbitration under AAA
                                                        rules
                                                    </p>
                                                </div>
                                                <div className="border-l-4 border-indigo-400 pl-4">
                                                    <h4 className="text-indigo-400 font-bold mb-2">
                                                        Class Action Waiver
                                                    </h4>
                                                    <p className="text-gray-300 text-sm">
                                                        You waive any right to
                                                        bring claims as a
                                                        plaintiff or class
                                                        member in any purported
                                                        class action
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                General Provisions
                                            </h3>
                                            <ul className="space-y-3 text-gray-300">
                                                <li className="flex items-start gap-3">
                                                    <FileText className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Entire Agreement:
                                                        </strong>{" "}
                                                        These Terms constitute
                                                        the entire agreement
                                                        between parties
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <FileText className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Severability:
                                                        </strong>{" "}
                                                        Invalid provisions shall
                                                        not affect the validity
                                                        of remaining terms
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <FileText className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>Waiver:</strong>{" "}
                                                        No waiver shall be
                                                        effective unless in
                                                        writing
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <FileText className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>
                                                            Assignment:
                                                        </strong>{" "}
                                                        You may not assign
                                                        rights without our
                                                        written consent
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-6">
                                            <h4 className="text-green-400 font-bold mb-3">
                                                Updates to Terms
                                            </h4>
                                            <p className="text-gray-300 mb-3">
                                                We reserve the right to update
                                                these Terms at any time. Changes
                                                will be effective upon posting
                                                to the Platform.
                                            </p>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>
                                                    • Material changes will be
                                                    notified via email
                                                </li>
                                                <li>
                                                    • Continued use constitutes
                                                    acceptance of updated terms
                                                </li>
                                                <li>
                                                    • Previous versions
                                                    available upon request
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Footer */}
                            <footer className="border-t border-gray-700 pt-12 mt-16">
                                <div className="text-center space-y-6">
                                    <div className="flex items-center justify-center gap-4">
                                        <Clock className="w-5 h-5 text-cyan-400" />
                                        <span className="text-gray-400 font-mono text-sm">
                                            Last updated: {lastUpdated} |
                                            Version {version}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center gap-6 text-sm">
                                        <button className="text-cyan-400 hover:text-emerald-400 transition-colors font-mono">
                                            Download PDF
                                        </button>
                                        <span className="text-gray-600">•</span>
                                        <button className="text-cyan-400 hover:text-emerald-400 transition-colors font-mono">
                                            Print Version
                                        </button>
                                        <span className="text-gray-600">•</span>
                                        <button className="text-cyan-400 hover:text-emerald-400 transition-colors font-mono">
                                            Contact Legal
                                        </button>
                                    </div>

                                    <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-xl p-6">
                                        <p className="text-gray-300 text-sm">
                                            <strong className="text-emerald-400">
                                                Questions about these terms?
                                            </strong>{" "}
                                            Our legal team is available to
                                            provide clarification. Contact us at{" "}
                                            <span className="text-cyan-400 font-mono">
                                                legal@nexusvault.io
                                            </span>{" "}
                                            or through our secure support
                                            portal.
                                        </p>
                                    </div>

                                    <div className="text-xs text-gray-500 mt-8">
                                        <p>
                                            © 2025 NEXUS VAULT. All rights
                                            reserved.
                                        </p>
                                        <p className="mt-2">
                                            NEXUS VAULT is not affiliated with
                                            or endorsed by FiveM, Cfx.re, or
                                            Rockstar Games.
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

export default TermsComponent;
