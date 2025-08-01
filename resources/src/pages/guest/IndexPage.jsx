import React, { useState, useEffect } from "react";
import {
    Shield,
    Zap,
    Users,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Lock,
    Gamepad2,
    Target,
    Crown,
    Package,
    Dice6,
    CreditCard,
    Server,
    DollarSign,
    Activity,
    Globe,
    UserCheck,
    Repeat,
    TrendingUp,
    ShoppingCart,
    Clock,
    Star
} from "lucide-react";

const IndexPage = () => {
    const [typewriterText, setTypewriterText] = useState("");
    const [codeIndex, setCodeIndex] = useState(0);

    const codeSnippets = [
        "Player purchased VIP Membership - $49.99",
        "Executing: add_principal player.1234 vip",
        "Payment verified ✓ Commission: 3%",
        "Server owner receives: $48.49",
        "Transaction completed successfully!"
    ];

    useEffect(() => {
        const typewriterInterval = setInterval(() => {
            const currentSnippet = codeSnippets[codeIndex];
            setTypewriterText((prev) => {
                if (prev.length < currentSnippet.length) {
                    return currentSnippet.slice(0, prev.length + 1);
                } else {
                    setTimeout(() => {
                        setTypewriterText("");
                        setCodeIndex(
                            (prevIndex) => (prevIndex + 1) % codeSnippets.length
                        );
                    }, 2000);
                    return prev;
                }
            });
        }, 100);

        return () => clearInterval(typewriterInterval);
    }, [codeIndex]);

    const stats = [
        {
            number: "2,847",
            label: "FiveM Servers",
            subtext: "Trusted Partners",
            icon: <Server className="w-6 h-6" />,
            color: "emerald",
        },
        {
            number: "$1.2M",
            label: "Monthly Volume",
            subtext: "Secure Transactions",
            icon: <DollarSign className="w-6 h-6" />,
            color: "cyan",
        },
        {
            number: "127K",
            label: "Active Players",
            subtext: "Safe Purchases",
            icon: <Users className="w-6 h-6" />,
            color: "blue",
        },
        {
            number: "99.8%",
            label: "Success Rate",
            subtext: "Fraud Protection",
            icon: <Shield className="w-6 h-6" />,
            color: "yellow",
        },
    ];

    const howItWorks = [
        {
            step: "1",
            icon: <Server className="w-8 h-8" />,
            title: "Server Owner Setup",
            description: "Create your digital store in minutes. Add products like VIP ranks, in-game money, vehicles, and custom items.",
            color: "emerald"
        },
        {
            step: "2", 
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "Player Purchase",
            description: "Players browse your store, select items, and pay securely using PayPal, cards, or local payment methods.",
            color: "cyan"
        },
        {
            step: "3",
            icon: <Zap className="w-8 h-8" />,
            title: "Auto Execution",
            description: "Our system automatically executes commands in your server (add_principal, giveitem, addmoney) - even if player is offline.",
            color: "blue"
        },
        {
            step: "4",
            icon: <DollarSign className="w-8 h-8" />,
            title: "Instant Payout",
            description: "Receive your earnings after verification. We handle chargebacks, fraud protection, and secure your revenue.",
            color: "yellow"
        }
    ];

    const features = [
        {
            icon: <Shield className="w-10 h-10" />,
            title: "Secure Payment Processing",
            description: "We act as a trusted intermediary, protecting both server owners and players from fraud and chargebacks.",
            benefits: [
                "Fraud detection & prevention",
                "Chargeback protection", 
                "Secure escrow system",
                "24/7 transaction monitoring"
            ],
            color: "from-emerald-400 to-green-500"
        },
        {
            icon: <Gamepad2 className="w-10 h-10" />,
            title: "FiveM Integration",
            description: "Direct integration with your FiveM server. Automatic command execution for seamless player experience.",
            benefits: [
                "ESX & QB-Core support",
                "Real-time server commands",
                "Offline player support", 
                "Custom script integration"
            ],
            color: "from-cyan-400 to-blue-500"
        },
        {
            icon: <CreditCard className="w-10 h-10" />,
            title: "Global Payment Methods",
            description: "Accept payments from players worldwide with multiple payment options and currency support.",
            benefits: [
                "PayPal & Stripe integration",
                "Credit/Debit cards",
                "Local payment methods",
                "Multi-currency support"
            ],
            color: "from-blue-400 to-purple-500"
        },
        {
            icon: <Activity className="w-10 h-10" />,
            title: "Analytics Dashboard", 
            description: "Track your server's performance with detailed analytics, sales reports, and player insights.",
            benefits: [
                "Real-time sales tracking",
                "Player behavior analysis",
                "Revenue optimization",
                "Custom reports"
            ],
            color: "from-purple-400 to-pink-500"
        }
    ];

    const products = [
        {
            icon: <Crown className="w-8 h-8" />,
            title: "VIP Ranks & Permissions",
            description: "Sell VIP memberships, admin ranks, and custom permissions",
            popular: true
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "In-Game Currency",
            description: "Let players purchase virtual money for your server economy"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Weapons & Items",
            description: "Sell rare weapons, equipment, and custom inventory items"
        },
        {
            icon: <Package className="w-8 h-8" />,
            title: "Vehicle Packages",
            description: "Offer exclusive cars, motorcycles, and aircraft"
        },
        {
            icon: <Dice6 className="w-8 h-8" />,
            title: "Mystery Boxes",
            description: "Create engaging loot crates with random rewards"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Custom Services",
            description: "Sell unique server-specific items and services"
        }
    ];

    const benefits = [
        {
            title: "For Server Owners",
            icon: <Server className="w-8 h-8" />,
            points: [
                "Zero upfront costs - pay only when you earn",
                "Professional payment processing",
                "Automated order fulfillment",
                "Fraud & chargeback protection",
                "Detailed analytics & reporting",
                "24/7 customer support"
            ],
            color: "emerald"
        },
        {
            title: "For Players",
            icon: <Gamepad2 className="w-8 h-8" />,
            points: [
                "Secure & trusted payment processing",
                "Instant item delivery",
                "Multiple payment options",
                "Purchase protection guarantee",
                "Customer support available",
                "Account linking (Steam/Discord)"
            ],
            color: "cyan"
        }
    ];

    return (
        <div className="relative z-10">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90"></div>

                {/* Live Transaction Display */}
                <div className="absolute top-32 right-8 bg-gray-800/80 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 font-mono text-sm max-w-md">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 ml-2">nexusvault.live</span>
                    </div>
                    <div className="text-emerald-400">
                        <span className="text-cyan-400">{typewriterText}</span>
                        <span className="animate-pulse">|</span>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
                    {/* Status Banner */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-400/30 rounded-full px-8 py-4 mb-12 backdrop-blur-sm">
                        <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" style={{ animationDuration: "3s" }} />
                        <span className="text-lg font-mono font-bold text-emerald-300">
                            SECURE PAYMENT INTERMEDIARY
                        </span>
                        <span className="text-lg font-mono font-bold text-white">
                            FOR FIVEM SERVERS
                        </span>
                        <Shield className="w-5 h-5 text-cyan-400" />
                    </div>

                    <div className="mb-16">
                        <h1 className="text-7xl font-black mb-6 leading-tight font-mono relative">
                            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                NEXUS
                            </span>
                            <span className="text-white mx-4">•</span>
                            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                                VAULT
                            </span>
                        </h1>

                        <p className="text-3xl text-gray-300 mb-8 font-mono">
                            The Trusted Payment Bridge Between
                        </p>
                        <p className="text-2xl text-emerald-400 mb-8 font-mono font-bold">
                            FiveM Server Owners & Players
                        </p>

                        <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Sell in-game items, VIP ranks, and virtual currency safely. 
                            We handle payments, execute commands automatically, and protect your revenue.
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 mb-20">
                        <button className="group relative bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-12 py-6 rounded-2xl text-2xl font-mono font-bold transition-all duration-500 transform hover:scale-110 flex items-center justify-center gap-4 shadow-2xl shadow-emerald-500/30">
                            <Server className="w-8 h-8" />
                            <span>START SELLING</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </button>

                        <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border-2 border-gray-600 hover:border-cyan-400 px-12 py-6 rounded-2xl text-2xl font-mono font-bold transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm hover:scale-105">
                            <Gamepad2 className="w-8 h-8 group-hover:text-cyan-400 transition-colors" />
                            <span className="group-hover:text-cyan-400 transition-colors">
                                VIEW DEMO
                            </span>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-4 gap-8 text-gray-400">
                        <div className="flex flex-col items-center gap-3 group hover:text-emerald-400 transition-colors cursor-pointer">
                            <Shield className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                            <span className="font-mono font-bold text-sm">FRAUD PROTECTION</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group hover:text-cyan-400 transition-colors cursor-pointer">
                            <Zap className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                            <span className="font-mono font-bold text-sm">AUTO EXECUTION</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group hover:text-yellow-400 transition-colors cursor-pointer">
                            <CreditCard className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                            <span className="font-mono font-bold text-sm">GLOBAL PAYMENTS</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group hover:text-blue-400 transition-colors cursor-pointer">
                            <Activity className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                            <span className="font-mono font-bold text-sm">REAL-TIME ANALYTICS</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black font-mono mb-4 text-white">
                            TRUSTED BY THE COMMUNITY
                        </h2>
                        <p className="text-xl text-gray-400 font-mono">
                            Real numbers from our secure platform
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700 hover:border-${stat.color}-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10 text-center">
                                    <div className={`flex items-center justify-center mb-6 text-${stat.color}-400 group-hover:scale-125 transition-transform duration-300`}>
                                        {stat.icon}
                                    </div>
                                    <div className={`text-4xl font-black font-mono text-${stat.color}-400 mb-2`}>
                                        {stat.number}
                                    </div>
                                    <div className="text-white font-mono font-bold text-lg mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-gray-400 font-mono text-sm">
                                        {stat.subtext}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-8 text-white font-mono">
                            HOW IT WORKS
                        </h2>
                        <p className="text-2xl text-gray-300">
                            Simple, secure, and automated process for everyone
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-8">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center">
                                    <div className={`w-20 h-20 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white`}>
                                        {step.icon}
                                    </div>
                                    <div className={`text-6xl font-black font-mono text-${step.color}-400 mb-4`}>
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 font-mono">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                
                                {index < howItWorks.length - 1 && (
                                    <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent hidden lg:block"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products You Can Sell */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-8 text-white font-mono">
                            WHAT YOU CAN SELL
                        </h2>
                        <p className="text-2xl text-gray-300">
                            Turn your server features into revenue streams
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <div key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm">
                                {product.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-1 rounded-full text-white font-mono font-bold text-xs">
                                        POPULAR
                                    </div>
                                )}
                                <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-125 transition-transform duration-300">
                                    {product.icon}
                                </div>
                                <h3 className="text-xl font-bold font-mono mb-4 text-white group-hover:text-cyan-400 transition-colors text-center">
                                    {product.title}
                                </h3>
                                <p className="text-gray-300 text-center leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-8 text-white font-mono">
                            POWERFUL FEATURES
                        </h2>
                        <p className="text-2xl text-gray-300">
                            Everything you need to run a successful server store
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-3xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm">
                                <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold font-mono mb-6 text-white group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {feature.description}
                                </p>
                                <div className="space-y-2">
                                    {feature.benefits.map((benefit, benefitIndex) => (
                                        <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                            <span className="text-gray-400">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-8 text-white font-mono">
                            WHY CHOOSE NEXUSVAULT
                        </h2>
                        <p className="text-2xl text-gray-300">
                            Benefits for server owners and players alike
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="relative">
                                <div className="text-center mb-8">
                                    <div className={`inline-flex items-center gap-4 mb-6 text-${benefit.color}-400`}>
                                        {benefit.icon}
                                        <h3 className="text-3xl font-bold text-white font-mono">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {benefit.points.map((point, pointIndex) => (
                                        <div key={pointIndex} className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                                            <CheckCircle className={`w-6 h-6 text-${benefit.color}-400 flex-shrink-0`} />
                                            <span className="text-gray-300 group-hover:text-white transition-colors text-lg">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

                <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full px-8 py-4 mb-8">
                            <Shield className="w-6 h-6 text-emerald-400" />
                            <span className="text-emerald-400 font-mono font-bold text-lg">
                                READY TO START EARNING?
                            </span>
                        </div>

                        <h2 className="text-6xl font-black font-mono leading-tight text-white mb-8">
                            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                START SELLING TODAY
                            </span>
                        </h2>
                        
                        <p className="text-2xl text-gray-300 font-mono mb-12 max-w-4xl mx-auto leading-relaxed">
                            Join thousands of server owners earning revenue safely with our secure payment platform.
                            <span className="block mt-4 text-lg text-gray-400">
                                Setup takes less than 5 minutes. Start earning immediately.
                            </span>
                        </p>
                    </div>

                    <div className="flex justify-center gap-8">
                        <button className="group relative bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-16 py-8 rounded-3xl text-3xl font-mono font-black transition-all duration-500 transform hover:scale-110 shadow-2xl shadow-emerald-500/40">
                            <span className="relative z-10 flex items-center gap-4">
                                <Server className="w-10 h-10" />
                                CREATE YOUR STORE
                            </span>
                        </button>

                        <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border-2 border-gray-600 hover:border-cyan-400 px-16 py-8 rounded-3xl text-3xl font-mono font-black transition-all duration-500 backdrop-blur-sm hover:scale-105">
                            <span className="group-hover:text-cyan-400 transition-colors flex items-center gap-4">
                                <Gamepad2 className="w-10 h-10" />
                                VIEW LIVE DEMO
                            </span>
                        </button>
                    </div>

                    <div className="mt-12 text-gray-400 font-mono">
                        <p>No setup fees • No monthly costs • Only pay when you earn</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndexPage;