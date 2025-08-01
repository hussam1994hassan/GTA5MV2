import React from "react";

const LoadingComponent = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/95 backdrop-blur-sm z-50">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Main Logo/Icon */}
                <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl border border-emerald-400/30 animate-pulse"></div>
                </div>

                {/* Brand Name */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-black font-mono mb-2">
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            NEXUS
                        </span>
                        <span className="text-white mx-2">•</span>
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            VAULT
                        </span>
                    </h1>
                    <div className="text-emerald-400 font-mono text-sm animate-pulse">
                        SECURE_PAYMENT_LOADING...
                    </div>
                </div>

                {/* Loading Progress */}
                <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                </div>

                {/* Loading Text */}
                <div className="mt-6 text-gray-400 font-mono text-sm text-center">
                    <div className="flex items-center gap-2 justify-center">
                        <span>Initializing secure connection</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Platform Status: Online</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingComponent;