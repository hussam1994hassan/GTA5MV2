import React from "react";
import { Shield } from "lucide-react";

const FooterComponent = () => {
    return (
        <footer className="bg-gray-800 border-t border-cyan-500/30 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid grid-cols-4 gap-12">
                    <div className="col-span-1">
                        <div className="flex items-center space-x-4 mb-8 group">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-emerald-500/30 relative overflow-hidden">
                                    <Shield className="w-10 h-10 text-white relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                {/* Security ring */}
                                <div className="absolute inset-0 rounded-xl border border-emerald-400/30 group-hover:scale-125 transition-transform duration-500 animate-pulse"></div>
                            </div>
                            <div>
                                <span className="text-3xl font-black font-mono">
                                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                        NEXUS
                                    </span>
                                    <span className="text-white mx-2">•</span>
                                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                        VAULT
                                    </span>
                                </span>
                                <div className="text-sm text-emerald-400 font-mono -mt-1">
                                    SECURE_PAYMENT_PROTOCOL_v4.0.1
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-green-400 font-mono">
                                        VAULT_OPERATIONAL
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-mono">
                            &gt; The most secure FiveM payment intermediary
                            platform. Military-grade protection for every
                            transaction.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-8 text-emerald-400 text-xl font-mono">
                            [VAULT_CORE]
                        </h3>
                        <ul className="space-y-4 text-gray-400 font-mono">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-emerald-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Security_Protocol
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-emerald-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Payment_Gateway
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-emerald-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Vault_SDK
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-emerald-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Integration_Docs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-8 text-cyan-400 text-xl font-mono">
                            [SECURE_NET]
                        </h3>
                        <ul className="space-y-4 text-gray-400 font-mono">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Vault_Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Security_Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Community_Vault
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Discord_Secure
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-8 text-yellow-400 text-xl font-mono">
                            [VAULT_ARCHIVES]
                        </h3>
                        <ul className="space-y-4 text-gray-400 font-mono">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Security_Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Vault_Terms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Audit_Reports
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Compliance_Vault
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-16 pt-12 text-center">
                    <p className="text-gray-400 font-mono text-lg">
                        &copy; 2025 NEXUS_VAULT_PROTOCOL. All vaults secured.
                        <span className="text-emerald-400">
                            {" "}
                            &gt; Protecting the FiveM economy.
                        </span>
                    </p>
                </div>
            </div>

            {/* Footer Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                {/* Floating vault icons */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute text-${
                            i % 3 === 0
                                ? "emerald"
                                : i % 3 === 1
                                ? "cyan"
                                : "yellow"
                        }-400/30`}
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animation: `float ${
                                5 + Math.random() * 5
                            }s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    >
                        <Shield className="w-8 h-8" />
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default FooterComponent;
