import React from "react";
import { Code } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Server } from "lucide-react";

const LogoApp = () => {
    // Custom Wolf SVG Logo with Cyberpunk Colors
    const WolfLogo = ({ className }) => (
        <svg viewBox="0 0 100 100" className={className}>
            <defs>
                <linearGradient
                    id="wolfGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
            </defs>
            {/* Wolf Head Shape */}
            <path
                d="M50 15 L35 25 L30 40 L35 55 L45 65 L50 70 L55 65 L65 55 L70 40 L65 25 Z"
                fill="url(#wolfGrad)"
                opacity="0.9"
            />
            {/* Wolf Ears */}
            <path
                d="M35 25 L30 15 L40 20 Z"
                fill="url(#wolfGrad)"
                opacity="0.8"
            />
            <path
                d="M65 25 L70 15 L60 20 Z"
                fill="url(#wolfGrad)"
                opacity="0.8"
            />
            {/* Eyes */}
            <circle
                cx="42"
                cy="35"
                r="3"
                fill="#10b981"
                className="animate-pulse"
            />
            <circle
                cx="58"
                cy="35"
                r="3"
                fill="#10b981"
                className="animate-pulse"
            />
            {/* Circuit Lines */}
            <path
                d="M35 45 L45 45 L50 50 L55 45 L65 45"
                stroke="#06b6d4"
                strokeWidth="1"
                opacity="0.8"
            />
            <path
                d="M40 55 L50 55 L60 55"
                stroke="#3b82f6"
                strokeWidth="1"
                opacity="0.6"
            />
            {/* Binary Code Elements */}
            <text
                x="38"
                y="48"
                fill="#10b981"
                fontSize="4"
                fontFamily="monospace"
                opacity="0.7"
            >
                01
            </text>
            <text
                x="58"
                y="48"
                fill="#06b6d4"
                fontSize="4"
                fontFamily="monospace"
                opacity="0.7"
            >
                10
            </text>
        </svg>
    );
    return (
        <Link
            to={`/`}
            className="flex items-center space-x-4 group cursor-pointer"
        >
            {/* Enhanced Logo */}
            <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <div className="relative">
                    {/* Main Logo Container */}
                    <div className="w-12 h-12 relative">
                        {/* Circuit Ring */}
                        <div className="absolute inset-0 rounded-full border border-emerald-400/50 group-hover:border-emerald-400/80 transition-colors duration-300">
                            <div className="absolute top-0 left-1/2 w-1 h-1 bg-emerald-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute right-0 top-1/2 w-1 h-1 bg-cyan-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                            <div className="absolute left-0 top-1/2 w-1 h-1 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        {/* Wolf Logo */}
                        <WolfLogo className="absolute inset-1 w-10 h-10" />

                        {/* Server Indicator */}
                        <div className="absolute -top-1 -right-1 w-3 h-3">
                            <Server className="w-3 h-3 text-emerald-400" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono">
                            FiveMarket
                        </span>
                        <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                            <div
                                className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
                                style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                                className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                                style={{ animationDelay: "0.4s" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default LogoApp;
