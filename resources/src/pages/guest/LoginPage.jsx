import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Shield,
    Lock,
    Mail,
    Eye,
    EyeOff,
    ArrowRight,
    CheckCircle,
    AlertCircle,
    Fingerprint,
    Smartphone,
    Globe,
    Database,
} from "lucide-react";
import toast from "react-hot-toast";
import PagesURL from "../../constants/PagesURL";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducers/authSlice";

const LoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Here you would typically make an API call
        // console.log("Logging in...", formData);

        setIsLoading(false);

        try {
            await dispatch(loginUser(formData)).unwrap();
            toast.success("Logged in successfully!");
        } catch (err) {
            toast.error(err);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative flex items-center justify-center">
            {/* Advanced Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Matrix Grid */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)
          `,
                        backgroundSize:
                            "100px 100px, 100px 100px, 20px 20px, 20px 20px",
                        animation: "gridFloat 15s ease-in-out infinite",
                    }}
                ></div>

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "4s" }}
                ></div>

                {/* Code Elements */}
                <div className="absolute inset-0 font-mono text-xs opacity-5">
                    {[
                        "{ auth }",
                        "[ secure ]",
                        "< vault >",
                        "( login )",
                        "// protected",
                        "const user",
                        "return token",
                        "async verify",
                    ].map((symbol, i) => (
                        <div
                            key={i}
                            className={`absolute ${
                                i % 3 === 0
                                    ? "text-emerald-400"
                                    : i % 3 === 1
                                    ? "text-cyan-400"
                                    : "text-blue-400"
                            }`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${
                                    5 + Math.random() * 10
                                }s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        >
                            {symbol}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Auth Container */}
            <div className="relative z-10 w-full max-w-6xl px-8 box-border mt-10">
                <div className="w-full h-auto flex flex-row justify-between items-center gap-12">
                    {/* Left Side - Branding */}
                    <div className="hidden lg:block space-y-8">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-4 group">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-emerald-500/30">
                                    <Shield className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute inset-0 rounded-2xl border border-emerald-400/30 group-hover:scale-125 transition-transform duration-500 animate-pulse"></div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-black font-mono">
                                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                        NEXUS
                                    </span>
                                    <span className="text-white mx-2">•</span>
                                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                        VAULT
                                    </span>
                                </h1>
                                <p className="text-emerald-400 font-mono text-lg">
                                    SECURE_ACCESS_PORTAL
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white mb-8">
                                Welcome Back, Agent
                            </h2>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: (
                                            <Fingerprint className="w-6 h-6" />
                                        ),
                                        title: "Biometric Security",
                                        desc: "Multi-layer authentication protocol",
                                    },
                                    {
                                        icon: <Database className="w-6 h-6" />,
                                        title: "Encrypted Vault",
                                        desc: "Military-grade data protection",
                                    },
                                    {
                                        icon: <Globe className="w-6 h-6" />,
                                        title: "Global Access",
                                        desc: "Secure connection worldwide",
                                    },
                                    {
                                        icon: (
                                            <Smartphone className="w-6 h-6" />
                                        ),
                                        title: "2FA Protection",
                                        desc: "Enhanced security verification",
                                    },
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="text-emerald-400 group-hover:text-cyan-400 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-emerald-400/20 backdrop-blur-sm">
                                <div className="text-2xl font-black text-emerald-400 mb-2">
                                    99.9%
                                </div>
                                <div className="text-gray-400 font-mono text-sm">
                                    Security Uptime
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                                <div className="text-2xl font-black text-cyan-400 mb-2">
                                    256bit
                                </div>
                                <div className="text-gray-400 font-mono text-sm">
                                    Encryption Level
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Auth Form */}
                    <div className="w-full max-w-md mx-auto lg:mx-0 mt-20 mb-20">
                        {/* Terminal Header */}
                        <div className="bg-gray-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-t-2xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-gray-400 font-mono ml-4 text-sm">
                                    vault_login.exe
                                </span>
                            </div>
                            <div className="text-emerald-400 font-mono text-sm">
                                $ authenticate --secure
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>

                        {/* Form Container */}
                        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-x border-b border-cyan-500/30 rounded-b-2xl p-8 shadow-2xl">
                            {/* Form Tabs */}
                            <div className="flex mb-8 bg-gray-800/50 rounded-xl p-1">
                                <button className="flex-1 py-3 px-4 rounded-lg font-mono font-semibold transition-all duration-300 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg">
                                    [LOGIN]
                                </button>
                                <button
                                    onClick={() => navigate("/register")}
                                    className="flex-1 py-3 px-4 rounded-lg font-mono font-semibold transition-all duration-300 text-gray-400 hover:text-white"
                                >
                                    [REGISTER]
                                </button>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-6">
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="block text-gray-300 font-mono font-semibold">
                                        Secure Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                            className={`w-full pl-12 pr-4 py-4 bg-gray-800/60 border ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-600"
                                            } rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono`}
                                            placeholder="agent@nexusvault.secure"
                                        />
                                    </div>
                                    {errors.email && (
                                        <div className="flex items-center gap-2 text-red-400 text-sm font-mono">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <label className="block text-gray-300 font-mono font-semibold">
                                        Vault Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                            className={`w-full pl-12 pr-12 py-4 bg-gray-800/60 border ${
                                                errors.password
                                                    ? "border-red-500"
                                                    : "border-gray-600"
                                            } rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono`}
                                            placeholder="Enter your secure password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-400 transition-colors"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <div className="flex items-center gap-2 text-red-400 text-sm font-mono">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="group relative w-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-600 py-4 rounded-xl font-mono font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {isLoading ? (
                                            <>
                                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                AUTHENTICATING...
                                            </>
                                        ) : (
                                            <>
                                                <Shield className="w-6 h-6" />
                                                [AUTHENTICATE]
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                                </button>

                                {/* Additional Options */}
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="text-cyan-400 hover:text-emerald-400 font-mono text-sm transition-colors"
                                        >
                                            Forgot your vault access?
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <span className="text-gray-400 font-mono text-sm">
                                            Don't have vault access?{" "}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    navigate("/register")
                                                }
                                                className="text-emerald-400 hover:text-cyan-400 font-bold transition-colors"
                                            >
                                                [CREATE_VAULT]
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Security Notice */}
                            <div className="mt-8 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                    <p className="text-gray-300 text-sm font-mono">
                                        Your data is protected by military-grade
                                        encryption and stored in secure vaults.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
