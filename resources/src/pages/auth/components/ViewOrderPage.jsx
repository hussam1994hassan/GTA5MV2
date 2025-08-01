import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Package,
    User,
    DollarSign,
    Clock,
    MapPin,
    CreditCard,
    Check,
    X,
    AlertTriangle,
    RefreshCw,
    Send,
    Eye,
    Copy,
    Download,
    MessageSquare,
    Shield,
    Activity,
    Truck,
    CheckCircle,
    XCircle,
    Pause,
    Play,
    RotateCcw,
    ExternalLink,
    Star,
    Flag,
    Mail,
    Phone,
    Globe,
    Calendar,
    Hash,
    Target,
    Crown,
    Dice6
} from "lucide-react";

const ViewOrderPage = ({ order, onClose }) => {
    const [actionLoading, setActionLoading] = useState("");
    const [showRefundModal, setShowRefundModal] = useState(false);
    const [refundReason, setRefundReason] = useState("");
    const [showTimeline, setShowTimeline] = useState(true);

    // Mock detailed order data
    const orderDetails = {
        id: "ORD-2024-001234",
        status: "completed",
        amount: 49.99,
        currency: "USD",
        created_at: "2024-01-22T10:30:00Z",
        updated_at: "2024-01-22T10:35:00Z",
        payment_method: "PayPal",
        transaction_id: "PAYPAL-TXN-ABC123",
        customer: {
            id: "CUST-001",
            username: "john_doe",
            email: "john@example.com",
            discord: "JohnDoe#1234",
            ip_address: "192.168.1.100",
            country: "United States",
            first_purchase: false,
            total_orders: 8,
            total_spent: 249.95,
            risk_score: "low",
            verified: true
        },
        product: {
            id: "PROD-001",
            name: "Legendary Weapon Pack",
            category: "weapons",
            price: 49.99,
            image: null
        },
        items: [
            {
                type: "weapon",
                name: "WEAPON_CARBINERIFLE_MK2",
                quantity: 1,
                delivered: true,
                delivered_at: "2024-01-22T10:33:00Z"
            },
            {
                type: "ammo",
                name: "AMMO_RIFLE", 
                quantity: 250,
                delivered: true,
                delivered_at: "2024-01-22T10:33:00Z"
            }
        ],
        delivery: {
            status: "delivered",
            delivered_at: "2024-01-22T10:33:00Z",
            delivery_method: "automatic",
            server_response: "Items delivered successfully"
        },
        timeline: [
            {
                status: "created",
                timestamp: "2024-01-22T10:30:00Z",
                description: "Order created",
                icon: <Package className="w-4 h-4" />
            },
            {
                status: "payment_pending",
                timestamp: "2024-01-22T10:30:30Z", 
                description: "Payment processing",
                icon: <CreditCard className="w-4 h-4" />
            },
            {
                status: "paid",
                timestamp: "2024-01-22T10:32:00Z",
                description: "Payment confirmed",
                icon: <CheckCircle className="w-4 h-4" />
            },
            {
                status: "processing",
                timestamp: "2024-01-22T10:32:30Z",
                description: "Processing order",
                icon: <RefreshCw className="w-4 h-4" />
            },
            {
                status: "delivered",
                timestamp: "2024-01-22T10:33:00Z",
                description: "Items delivered to player",
                icon: <Truck className="w-4 h-4" />
            },
            {
                status: "completed",
                timestamp: "2024-01-22T10:35:00Z",
                description: "Order completed",
                icon: <Check className="w-4 h-4" />
            }
        ],
        notes: [
            {
                id: 1,
                author: "System",
                message: "Order automatically processed via webhook",
                timestamp: "2024-01-22T10:32:00Z",
                type: "system"
            },
            {
                id: 2,
                author: "admin_user",
                message: "Customer verified, proceeding with delivery",
                timestamp: "2024-01-22T10:32:30Z",
                type: "admin"
            }
        ]
    };

    const handleAction = async (action) => {
        setActionLoading(action);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(`Performing action: ${action}`);
        setActionLoading("");
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'emerald';
            case 'processing': return 'blue';
            case 'pending': return 'yellow';
            case 'cancelled': return 'red';
            case 'refunded': return 'orange';
            default: return 'gray';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed': return <CheckCircle className="w-5 h-5" />;
            case 'processing': return <RefreshCw className="w-5 h-5" />;
            case 'pending': return <Clock className="w-5 h-5" />;
            case 'cancelled': return <XCircle className="w-5 h-5" />;
            case 'refunded': return <RotateCcw className="w-5 h-5" />;
            default: return <Package className="w-5 h-5" />;
        }
    };

    const getRiskColor = (risk) => {
        switch (risk) {
            case 'low': return 'emerald';
            case 'medium': return 'yellow';
            case 'high': return 'red';
            default: return 'gray';
        }
    };

    if (!order) {
        return (
            <div className="text-center py-20">
                <div className="text-gray-400 font-mono text-xl mb-4">
                    [NO_ORDER_SELECTED]
                </div>
                <p className="text-gray-500 font-mono">
                    Please select an order to view details.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-black text-white font-mono">
                                [ORDER_DETAILS]
                            </h1>
                            <p className="text-gray-400 font-mono">
                                {orderDetails.id} • {new Date(orderDetails.created_at).toLocaleString()}
                            </p>
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-${getStatusColor(orderDetails.status)}-500/20 border border-${getStatusColor(orderDetails.status)}-400/30`}>
                            <div className={`text-${getStatusColor(orderDetails.status)}-400`}>
                                {getStatusIcon(orderDetails.status)}
                            </div>
                            <span className={`text-${getStatusColor(orderDetails.status)}-400 font-mono font-bold`}>
                                {orderDetails.status.toUpperCase()}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <button 
                        onClick={() => handleAction('resend')}
                        disabled={actionLoading === 'resend'}
                        className="bg-blue-600/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-blue-500/30 transition-all duration-300"
                    >
                        {actionLoading === 'resend' ? (
                            <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin inline mr-2"></div>
                        ) : (
                            <Send className="w-4 h-4 inline mr-2" />
                        )}
                        RESEND
                    </button>
                    
                    <button 
                        onClick={() => setShowRefundModal(true)}
                        className="bg-orange-600/20 border border-orange-400/30 text-orange-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-orange-500/30 transition-all duration-300"
                    >
                        <RotateCcw className="w-4 h-4 inline mr-2" />
                        REFUND
                    </button>
                    
                    <button className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Download className="w-4 h-4 inline mr-2" />
                        EXPORT
                    </button>
                </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-8">
                {/* Order Information */}
                <div className="col-span-2 space-y-6">
                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <h2 className="text-xl font-bold text-emerald-400 font-mono mb-6 flex items-center gap-2">
                            <Package className="w-6 h-6" />
                            [ORDER_SUMMARY]
                        </h2>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 font-mono text-sm mb-1">Order ID</label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-mono">{orderDetails.id}</span>
                                        <button 
                                            onClick={() => navigator.clipboard.writeText(orderDetails.id)}
                                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                                        >
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-400 font-mono text-sm mb-1">Product</label>
                                    <div className="flex items-center gap-2">
                                        <Target className="w-4 h-4 text-emerald-400" />
                                        <span className="text-white">{orderDetails.product.name}</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-400 font-mono text-sm mb-1">Amount</label>
                                    <span className="text-emerald-400 font-mono font-bold text-xl">
                                        ${orderDetails.amount} {orderDetails.currency}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 font-mono text-sm mb-1">Payment Method</label>
                                    <div className="flex items-center gap-2">
                                        <CreditCard className="w-4 h-4 text-cyan-400" />
                                        <span className="text-white">{orderDetails.payment_method}</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-400 font-mono text-sm mb-1">Transaction ID</label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-mono text-sm">{orderDetails.transaction_id}</span>
                                        <button 
                                            onClick={() => navigator.clipboard.writeText(orderDetails.transaction_id)}
                                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                                        >
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-400 font-mono text-sm mb-1">Created</label>
                                    <span className="text-white font-mono">
                                        {new Date(orderDetails.created_at).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Items Delivered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <h2 className="text-xl font-bold text-cyan-400 font-mono mb-6 flex items-center gap-2">
                            <Truck className="w-6 h-6" />
                            [ITEMS_DELIVERED]
                        </h2>

                        <div className="space-y-4">
                            {orderDetails.items.map((item, index) => (
                                <div key={index} className="bg-gray-800/30 p-4 rounded-xl border border-gray-600">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                                <Target className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold">{item.name}</h3>
                                                <p className="text-gray-400 text-sm capitalize">
                                                    {item.type} • Quantity: {item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3">
                                            {item.delivered ? (
                                                <div className="flex items-center gap-2 text-emerald-400">
                                                    <CheckCircle className="w-5 h-5" />
                                                    <span className="font-mono text-sm">DELIVERED</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 text-yellow-400">
                                                    <Clock className="w-5 h-5" />
                                                    <span className="font-mono text-sm">PENDING</span>
                                                </div>
                                            )}
                                            
                                            <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {item.delivered && (
                                        <div className="mt-3 text-gray-400 text-xs font-mono">
                                            Delivered: {new Date(item.delivered_at).toLocaleString()}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-400/20 rounded-lg">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                                <div>
                                    <h4 className="text-emerald-400 font-bold font-mono">DELIVERY CONFIRMED</h4>
                                    <p className="text-gray-300 text-sm">
                                        All items delivered successfully at {new Date(orderDetails.delivery.delivered_at).toLocaleString()}
                                    </p>
                                    <p className="text-gray-400 text-xs mt-1">
                                        Server Response: {orderDetails.delivery.server_response}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-purple-400 font-mono flex items-center gap-2">
                                <Activity className="w-6 h-6" />
                                [ORDER_TIMELINE]
                            </h2>
                            <button 
                                onClick={() => setShowTimeline(!showTimeline)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {showTimeline ? <Eye className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        {showTimeline && (
                            <div className="space-y-4">
                                {orderDetails.timeline.map((event, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 border border-purple-400/30 rounded-full flex-shrink-0">
                                            <div className="text-purple-400">
                                                {event.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-white font-semibold">{event.description}</h3>
                                                <span className="text-gray-400 text-sm font-mono">
                                                    {new Date(event.timestamp).toLocaleString()}
                                                </span>
                                            </div>
                                            <p className="text-purple-400 text-sm font-mono capitalize">
                                                {event.status.replace('_', ' ')}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Customer Information */}
                <div className="col-span-1 space-y-6">
                    {/* Customer Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <h2 className="text-xl font-bold text-blue-400 font-mono mb-6 flex items-center gap-2">
                            <User className="w-6 h-6" />
                            [CUSTOMER_INFO]
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                                    {orderDetails.customer.username.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-semibold">{orderDetails.customer.username}</span>
                                        {orderDetails.customer.verified && (
                                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                                        )}
                                    </div>
                                    <p className="text-gray-400 text-sm">{orderDetails.customer.email}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800/30 p-3 rounded-lg text-center">
                                    <div className="text-emerald-400 font-mono font-bold text-lg">
                                        {orderDetails.customer.total_orders}
                                    </div>
                                    <div className="text-gray-400 text-xs">Total Orders</div>
                                </div>
                                <div className="bg-gray-800/30 p-3 rounded-lg text-center">
                                    <div className="text-cyan-400 font-mono font-bold text-lg">
                                        ${orderDetails.customer.total_spent}
                                    </div>
                                    <div className="text-gray-400 text-xs">Total Spent</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm">Discord:</span>
                                    <span className="text-white font-mono text-sm">{orderDetails.customer.discord}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm">Country:</span>
                                    <span className="text-white text-sm">{orderDetails.customer.country}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm">IP Address:</span>
                                    <span className="text-white font-mono text-sm">{orderDetails.customer.ip_address}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm">Risk Score:</span>
                                    <span className={`text-${getRiskColor(orderDetails.customer.risk_score)}-400 font-mono text-sm font-bold`}>
                                        {orderDetails.customer.risk_score.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button className="flex-1 bg-blue-600/20 border border-blue-400/30 text-blue-400 py-2 px-3 rounded-lg font-mono text-sm hover:bg-blue-500/30 transition-all duration-300">
                                    <Mail className="w-4 h-4 inline mr-1" />
                                    EMAIL
                                </button>
                                <button className="flex-1 bg-purple-600/20 border border-purple-400/30 text-purple-400 py-2 px-3 rounded-lg font-mono text-sm hover:bg-purple-500/30 transition-all duration-300">
                                    <MessageSquare className="w-4 h-4 inline mr-1" />
                                    DISCORD
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Order Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <h2 className="text-xl font-bold text-yellow-400 font-mono mb-6 flex items-center gap-2">
                            <Shield className="w-6 h-6" />
                            [ACTIONS]
                        </h2>

                        <div className="space-y-3">
                            <button 
                                onClick={() => handleAction('retry_delivery')}
                                disabled={actionLoading === 'retry_delivery'}
                                className="w-full bg-emerald-600/20 border border-emerald-400/30 text-emerald-400 py-3 px-4 rounded-lg font-mono font-bold hover:bg-emerald-500/30 transition-all duration-300"
                            >
                                {actionLoading === 'retry_delivery' ? (
                                    <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin inline mr-2"></div>
                                ) : (
                                    <RefreshCw className="w-4 h-4 inline mr-2" />
                                )}
                                RETRY_DELIVERY
                            </button>
                            
                            <button className="w-full bg-cyan-600/20 border border-cyan-400/30 text-cyan-400 py-3 px-4 rounded-lg font-mono font-bold hover:bg-cyan-500/30 transition-all duration-300">
                                <MessageSquare className="w-4 h-4 inline mr-2" />
                                CONTACT_CUSTOMER
                            </button>
                            
                            <button className="w-full bg-purple-600/20 border border-purple-400/30 text-purple-400 py-3 px-4 rounded-lg font-mono font-bold hover:bg-purple-500/30 transition-all duration-300">
                                <Flag className="w-4 h-4 inline mr-2" />
                                FLAG_ORDER
                            </button>
                            
                            <button className="w-full bg-red-600/20 border border-red-400/30 text-red-400 py-3 px-4 rounded-lg font-mono font-bold hover:bg-red-500/30 transition-all duration-300">
                                <XCircle className="w-4 h-4 inline mr-2" />
                                CANCEL_ORDER
                            </button>
                        </div>
                    </motion.div>

                    {/* Order Notes */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
                    >
                        <h2 className="text-xl font-bold text-orange-400 font-mono mb-6 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6" />
                            [NOTES]
                        </h2>

                        <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                            {orderDetails.notes.map((note) => (
                                <div key={note.id} className="bg-gray-800/30 p-3 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`font-mono text-sm font-bold ${
                                            note.type === 'system' ? 'text-cyan-400' : 'text-emerald-400'
                                        }`}>
                                            {note.author}
                                        </span>
                                        <span className="text-gray-400 text-xs">
                                            {new Date(note.timestamp).toLocaleString()}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm">{note.message}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Add a note..."
                                className="flex-1 bg-gray-800/60 border border-gray-600 rounded-lg text-white px-3 py-2 text-sm font-mono"
                            />
                            <button className="bg-orange-600/20 border border-orange-400/30 text-orange-400 px-3 py-2 rounded-lg hover:bg-orange-500/30 transition-all duration-300">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Refund Modal */}
            {showRefundModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                    onClick={() => setShowRefundModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-gray-800 p-6 rounded-xl border border-gray-700 max-w-md w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-bold text-orange-400 font-mono mb-4">
                            [REFUND_ORDER]
                        </h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-300 font-mono text-sm mb-2">
                                    Refund Amount
                                </label>
                                <input
                                    type="text"
                                    value={`$${orderDetails.amount}`}
                                    readOnly
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-300 font-mono text-sm mb-2">
                                    Reason
                                </label>
                                <textarea
                                    value={refundReason}
                                    onChange={(e) => setRefundReason(e.target.value)}
                                    placeholder="Enter refund reason..."
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 h-20 resize-none"
                                />
                            </div>
                        </div>
                        
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setShowRefundModal(false)}
                                className="flex-1 bg-gray-700 text-gray-300 py-2 rounded-lg font-mono hover:bg-gray-600 transition-colors"
                            >
                                CANCEL
                            </button>
                            <button
                                onClick={() => {
                                    handleAction('refund');
                                    setShowRefundModal(false);
                                }}
                                className="flex-1 bg-orange-600 text-white py-2 rounded-lg font-mono font-bold hover:bg-orange-500 transition-colors"
                            >
                                PROCESS_REFUND
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default ViewOrderPage;