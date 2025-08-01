import React from "react";
import { motion } from "framer-motion";
import {
    Shield,
    Lock,
    Home,
    ArrowLeft,
    AlertTriangle,
    XCircle,
    Crown,
    Ban,
    Clock,
    Settings
} from "lucide-react";

const NotAccessPage = ({ 
    accessType = "permission",
    onBack = null,
    onHome = null
}) => {
    const accessScenarios = {
        permission: {
            title: "Access Denied",
            message: "You don't have permission to access this resource.",
            icon: <Shield className="w-24 h-24" />,
            color: "red"
        },
        role: {
            title: "Role Required",
            message: "This area requires higher privileges to access.",
            icon: <Crown className="w-24 h-24" />,
            color: "orange"
        },
        suspended: {
            title: "Account Suspended",
            message: "Your account has been suspended and cannot access this resource.",
            icon: <Ban className="w-24 h-24" />,
            color: "red"
        },
        maintenance: {
            title: "Under Maintenance",
            message: "This service is currently under maintenance.",
            icon: <Settings className="w-24 h-24" />,
            color: "yellow"
        },
        expired: {
            title: "Access Expired",
            message: "Your session has expired. Please login again.",
            icon: <Clock className="w-24 h-24" />,
            color: "orange"
        }
    };

    const currentScenario = accessScenarios[accessType] || accessScenarios.permission;

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `
                        linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
                <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-12 rounded-3xl border border-gray-700 backdrop-blur-sm"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className={`text-${currentScenario.color}-400 flex justify-center mb-6`}>
                            {currentScenario.icon}
                        </div>
                        
                        {/* Big X Symbol */}
                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <XCircle className="w-32 h-32 text-red-400/30" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-4xl font-black font-mono text-white mb-4"
                    >
                        [ACCESS_DENIED]
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className={`text-2xl font-bold font-mono text-${currentScenario.color}-400 mb-6`}
                    >
                        {currentScenario.title.toUpperCase()}
                    </motion.h2>

                    {/* Message */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-lg text-gray-400 mb-8 max-w-lg mx-auto"
                    >
                        {currentScenario.message}
                    </motion.p>

                    {/* Warning Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className={`bg-${currentScenario.color}-500/10 border border-${currentScenario.color}-400/20 rounded-xl p-6 mb-8`}
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <AlertTriangle className={`w-6 h-6 text-${currentScenario.color}-400`} />
                            <span className={`text-${currentScenario.color}-400 font-mono font-bold`}>
                                RESTRICTED_AREA
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            This section is protected and requires proper authorization.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        {onBack && (
                            <button
                                onClick={onBack}
                                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-mono font-bold transition-all duration-300 hover:scale-105 flex items-center gap-3"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                GO_BACK
                            </button>
                        )}

                        <button
                            onClick={onHome || (() => window.location.href = '/')}
                            className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-mono font-bold transition-all duration-300 hover:scale-105 flex items-center gap-3"
                        >
                            <Home className="w-5 h-5" />
                            DASHBOARD
                        </button>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                        className="mt-8 pt-6 border-t border-gray-700"
                    >
                        <p className="text-gray-500 text-sm font-mono">
                            Contact your administrator if you believe this is an error.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Floating Lock Animation */}
                <motion.div
                    animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-8 -right-8 text-red-400/20"
                >
                    <Lock className="w-16 h-16" />
                </motion.div>

                <motion.div
                    animate={{ 
                        y: [0, 8, 0],
                        rotate: [0, -2, 2, 0]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute -bottom-8 -left-8 text-orange-400/20"
                >
                    <Shield className="w-20 h-20" />
                </motion.div>
            </div>
        </div>
    );
};

export default NotAccessPage;