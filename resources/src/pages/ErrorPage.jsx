import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    AlertTriangle,
    XCircle,
    Zap,
    RefreshCw,
    Home,
    ArrowLeft,
    Bug,
    Server,
    Wifi,
    Clock,
    Shield,
    Code,
    Database,
    Activity,
    MessageSquare,
    Mail,
    Phone,
    ExternalLink,
    Search,
    FileText,
    Terminal,
    Settings,
    Info,
    HelpCircle,
    RotateCcw,
    Copy,
    Download,
    Eye,
    Monitor
} from "lucide-react";

const ErrorPage = ({ 
    errorCode = "404", 
    errorTitle = "Page Not Found",
    errorMessage = "The page you're looking for doesn't exist or has been moved.",
    showBackButton = true,
    showHomeButton = true,
    showContactSupport = true,
    onBack = null,
    onHome = null
}) => {
    const [retryAttempts, setRetryAttempts] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    const errorTypes = {
        "404": {
            title: "Page Not Found",
            message: "The page you're looking for doesn't exist or has been moved.",
            icon: <Search className="w-16 h-16" />,
            color: "blue",
            suggestions: [
                "Check the URL for typos",
                "Return to the homepage",
                "Use the search function",
                "Contact support if needed"
            ]
        },
        "403": {
            title: "Access Forbidden",
            message: "You don't have permission to access this resource.",
            icon: <Shield className="w-16 h-16" />,
            color: "red",
            suggestions: [
                "Check your account permissions",
                "Login with proper credentials",
                "Contact an administrator",
                "Return to dashboard"
            ]
        },
        "500": {
            title: "Internal Server Error",
            message: "Something went wrong on our end. We're working to fix it.",
            icon: <Server className="w-16 h-16" />,
            color: "orange",
            suggestions: [
                "Try refreshing the page",
                "Wait a few minutes and try again",
                "Check our status page",
                "Report the issue to support"
            ]
        },
        "503": {
            title: "Service Unavailable",
            message: "The service is temporarily unavailable. Please try again later.",
            icon: <Activity className="w-16 h-16" />,
            color: "yellow",
            suggestions: [
                "Check back in a few minutes",
                "Follow us for service updates",
                "Try using basic features only",
                "Contact support for urgent issues"
            ]
        },
        "429": {
            title: "Too Many Requests",
            message: "You're making requests too quickly. Please slow down.",
            icon: <Zap className="w-16 h-16" />,
            color: "purple",
            suggestions: [
                "Wait a moment before trying again",
                "Reduce request frequency",
                "Check API rate limits",
                "Upgrade your plan if needed"
            ]
        },
        "network": {
            title: "Network Connection Error",
            message: "Unable to connect to our servers. Please check your internet connection.",
            icon: <Wifi className="w-16 h-16" />,
            color: "cyan",
            suggestions: [
                "Check your internet connection",
                "Try refreshing the page",
                "Disable VPN if using one",
                "Contact your ISP if issues persist"
            ]
        }
    };

    const currentError = errorTypes[errorCode] || {
        title: errorTitle,
        message: errorMessage,
        icon: <XCircle className="w-16 h-16" />,
        color: "gray",
        suggestions: [
            "Try refreshing the page",
            "Go back to the previous page",
            "Return to the homepage",
            "Contact support if needed"
        ]
    };

    const handleRetry = () => {
        setRetryAttempts(prev => prev + 1);
        window.location.reload();
    };

    const handleReportIssue = () => {
        const errorDetails = {
            code: errorCode,
            title: errorTitle,
            message: errorMessage,
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            retryAttempts: retryAttempts
        };
        
        console.log("Error report:", errorDetails);
        // Here you would typically send to your error reporting service
    };

    const copyErrorDetails = () => {
        const details = `Error Code: ${errorCode}\nTitle: ${errorTitle}\nMessage: ${errorMessage}\nURL: ${window.location.href}\nTime: ${new Date().toLocaleString()}`;
        navigator.clipboard.writeText(details);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `
                        linear-gradient(rgba(239, 68, 68, 0.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(239, 68, 68, 0.6) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
                <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Glitch Lines */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-500 opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 opacity-20 animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
                {/* Main Error Display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    {/* Error Code */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative mb-8"
                    >
                        <div className={`text-[200px] font-black font-mono text-${currentError.color}-400 leading-none tracking-wider opacity-20 select-none`}>
                            {errorCode}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`text-${currentError.color}-400 animate-pulse`}>
                                {currentError.icon}
                            </div>
                        </div>
                    </motion.div>

                    {/* Error Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black font-mono text-white mb-4"
                    >
                        [{currentError.title.toUpperCase().replace(/ /g, '_')}]
                    </motion.h1>

                    {/* Error Message */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
                    >
                        {currentError.message}
                    </motion.p>

                    {/* Glitch Effect for Title */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                            @keyframes glitch {
                                0% { transform: translate(0); }
                                20% { transform: translate(-2px, 2px); }
                                40% { transform: translate(-2px, -2px); }
                                60% { transform: translate(2px, 2px); }
                                80% { transform: translate(2px, -2px); }
                                100% { transform: translate(0); }
                            }
                            .glitch:hover {
                                animation: glitch 0.3s infinite;
                            }
                        `
                    }} />
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center mb-12"
                >
                    {showBackButton && (
                        <button
                            onClick={onBack || (() => window.history.back())}
                            className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-mono font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            GO_BACK
                        </button>
                    )}

                    {showHomeButton && (
                        <button
                            onClick={onHome || (() => window.location.href = '/')}
                            className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-mono font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <Home className="w-5 h-5" />
                            HOME
                        </button>
                    )}

                    <button
                        onClick={handleRetry}
                        className={`bg-gradient-to-r from-${currentError.color}-600 to-${currentError.color}-700 hover:from-${currentError.color}-500 hover:to-${currentError.color}-600 text-white px-6 py-3 rounded-xl font-mono font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2`}
                    >
                        <RefreshCw className="w-5 h-5" />
                        RETRY
                        {retryAttempts > 0 && (
                            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                                {retryAttempts}
                            </span>
                        )}
                    </button>
                </motion.div>

                {/* Suggestions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8"
                >
                    <h2 className="text-2xl font-black font-mono text-emerald-400 mb-6 flex items-center justify-center gap-2">
                        <HelpCircle className="w-6 h-6" />
                        [WHAT_CAN_YOU_DO]
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {currentError.suggestions.map((suggestion, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 + (index * 0.1), duration: 0.4 }}
                                className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-xl border border-gray-600 hover:border-emerald-400/30 transition-all duration-300"
                            >
                                <div className={`w-2 h-2 bg-${currentError.color}-400 rounded-full flex-shrink-0`}></div>
                                <span className="text-gray-300">{suggestion}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Advanced Options */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white px-4 py-2 rounded-lg font-mono transition-all duration-300 flex items-center gap-2"
                    >
                        <Terminal className="w-4 h-4" />
                        TECHNICAL_DETAILS
                    </button>

                    <button
                        onClick={copyErrorDetails}
                        className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white px-4 py-2 rounded-lg font-mono transition-all duration-300 flex items-center gap-2"
                    >
                        <Copy className="w-4 h-4" />
                        COPY_DETAILS
                    </button>

                    <button
                        onClick={handleReportIssue}
                        className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white px-4 py-2 rounded-lg font-mono transition-all duration-300 flex items-center gap-2"
                    >
                        <Bug className="w-4 h-4" />
                        REPORT_ISSUE
                    </button>

                    {showContactSupport && (
                        <button
                            onClick={() => window.open('mailto:support@nexusvault.com', '_blank')}
                            className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white px-4 py-2 rounded-lg font-mono transition-all duration-300 flex items-center gap-2"
                        >
                            <Mail className="w-4 h-4" />
                            CONTACT_SUPPORT
                        </button>
                    )}
                </motion.div>

                {/* Technical Details */}
                {showDetails && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-8 bg-gray-800/30 border border-gray-600 rounded-xl p-6 font-mono text-left"
                    >
                        <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            [TECHNICAL_INFORMATION]
                        </h3>
                        <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Error Code:</span>
                                <span>{errorCode}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Timestamp:</span>
                                <span>{new Date().toISOString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">URL:</span>
                                <span className="truncate max-w-xs">{window.location.href}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">User Agent:</span>
                                <span className="truncate max-w-xs">{navigator.userAgent}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Retry Attempts:</span>
                                <span>{retryAttempts}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Session ID:</span>
                                <span>SID-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Floating particles effect */}
            {animationComplete && (
                <div className="fixed inset-0 pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-1 h-1 bg-${currentError.color}-400 rounded-full opacity-30`}
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                            }}
                            animate={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ErrorPage;