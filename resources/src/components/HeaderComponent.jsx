import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import LogoApp from "./LogoApp";
import { useNavigate } from "react-router";
import PagesURL from "../constants/PagesURL";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navClass =
        scrollY > 50
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
            : "bg-transparent";

    return isAuthenticated ? (
        <div>Authenticate</div>
    ) : (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <LogoApp />

                    {/* Cyberpunk Programming Menu */}
                    <div className="flex items-center space-x-10">
                        <div className="hidden lg:flex items-center space-x-8">
                            <a
                                href="#vault"
                                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 text-lg relative group font-mono font-medium"
                            >
                                [VAULT_CORE]
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a
                                href="#security"
                                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-lg relative group font-mono font-medium"
                            >
                                [SECURITY]
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a
                                href="#marketplace"
                                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-lg relative group font-mono font-medium"
                            >
                                [MARKETPLACE]
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a
                                href="#integration"
                                className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-lg relative group font-mono font-medium"
                            >
                                [INTEGRATION]
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>

                        {/* Cyberpunk Action Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                onClick={() => navigate(PagesURL.LOGIN.URL)}
                                className="text-gray-300 hover:text-white transition-all duration-300 font-mono font-medium px-6 py-3 rounded-lg hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600"
                            >
                                ./login
                            </button>

                            <motion.button
                                onClick={() => navigate(PagesURL.REGISTER.URL)}
                                className="relative group bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-8 py-3 rounded-xl font-mono font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">
                                    [DEPLOY_STORE]
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Enhanced Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-8 py-6 space-y-4">
                        <a
                            href="#vault"
                            className="block text-gray-300 hover:text-emerald-400 transition-colors py-2 text-lg font-mono"
                        >
                            [VAULT_CORE]
                        </a>
                        <a
                            href="#security"
                            className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 text-lg font-mono"
                        >
                            [SECURITY]
                        </a>
                        <a
                            href="#marketplace"
                            className="block text-gray-300 hover:text-yellow-400 transition-colors py-2 text-lg font-mono"
                        >
                            [MARKETPLACE]
                        </a>
                        <a
                            href="#integration"
                            className="block text-gray-300 hover:text-blue-400 transition-colors py-2 text-lg font-mono"
                        >
                            [INTEGRATION]
                        </a>

                        <div className="pt-4 border-t border-gray-800 space-y-3">
                            <button
                                onClick={() => navigate(PagesURL.LOGIN.URL)}
                                className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 text-lg font-mono"
                            >
                                ./login
                            </button>

                            <button
                                onClick={() => navigate(PagesURL.REGISTER.URL)}
                                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-4 rounded-xl font-mono font-bold transition-all duration-300 text-lg"
                            >
                                [DEPLOY_STORE]
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default HeaderComponent;
