import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    Code,
    Book,
    Zap,
    Database,
    Server,
    Globe,
    Lock,
    Key,
    Terminal,
    Copy,
    CheckCircle,
    ExternalLink,
    Download,
    Search,
    ChevronRight,
    ChevronDown,
    Menu,
    X,
    Play,
    Gamepad2,
    Cpu,
    Webhook,
    Link,
    AlertTriangle,
    Info,
    HelpCircle,
    DollarSign,
    FileText,
    Package,
    Settings,
    Eye,
    Activity,
    Layers,
    Command,
    Hash,
    ArrowRight,
    Star,
    GitBranch,
    Users,
    MessageSquare,
    Mail,
    Github,
    BookOpen,
    Lightbulb,
    Target,
    Rocket,
    Wrench,
    Bug,
    CheckSquare,
    Clock,
    Fingerprint,
    CreditCard,
    ShoppingCart,
    TrendingUp
} from "lucide-react";

const DocsPage = () => {
    const [activeSection, setActiveSection] = useState("introduction");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [copiedCode, setCopiedCode] = useState("");
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Check screen size and set sidebar visibility
    useEffect(() => {
        const checkScreenSize = () => {
            const isLarge = window.innerWidth >= 1024;
            setIsLargeScreen(isLarge);
            if (isLarge) {
                setSidebarOpen(true);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Sidebar scrollbar styles
    const sidebarStyle = {
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* Internet Explorer 10+ */
    };

    // CSS for webkit browsers
    const hiddenScrollbarCSS = `
        .hidden-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `;

    const navigationSections = [
        {
            id: "getting-started",
            title: "Getting Started",
            icon: <Rocket className="w-5 h-5" />,
            items: [
                { id: "introduction", title: "Introduction" },
                { id: "quickstart", title: "Quick Start" },
                { id: "authentication", title: "Authentication" },
                { id: "rate-limits", title: "Rate Limits" }
            ]
        },
        {
            id: "api-reference",
            title: "API Reference",
            icon: <Code className="w-5 h-5" />,
            items: [
                { id: "overview", title: "API Overview" },
                { id: "products", title: "Products API" },
                { id: "orders", title: "Orders API" },
                { id: "customers", title: "Customers API" },
                { id: "payments", title: "Payments API" }
            ]
        },
        {
            id: "webhooks",
            title: "Webhooks",
            icon: <Webhook className="w-5 h-5" />,
            items: [
                { id: "webhook-overview", title: "Webhooks Overview" },
                { id: "webhook-events", title: "Event Types" },
                { id: "webhook-security", title: "Security" },
                { id: "webhook-testing", title: "Testing Webhooks" }
            ]
        },
        {
            id: "sdks",
            title: "SDKs & Libraries",
            icon: <Package className="w-5 h-5" />,
            items: [
                { id: "fivem-sdk", title: "FiveM SDK" },
                { id: "javascript-sdk", title: "JavaScript SDK" },
                { id: "python-sdk", title: "Python SDK" },
                { id: "php-sdk", title: "PHP SDK" }
            ]
        },
        {
            id: "guides",
            title: "Integration Guides",
            icon: <BookOpen className="w-5 h-5" />,
            items: [
                { id: "esx-integration", title: "ESX Integration" },
                { id: "qbcore-integration", title: "QB-Core Integration" },
                { id: "vrp-integration", title: "VRP Integration" },
                { id: "custom-integration", title: "Custom Integration" }
            ]
        },
        {
            id: "examples",
            title: "Examples",
            icon: <Target className="w-5 h-5" />,
            items: [
                { id: "basic-store", title: "Basic Store Setup" },
                { id: "lootbox-system", title: "Loot Box System" },
                { id: "subscription-model", title: "Subscription Model" },
                { id: "inventory-sync", title: "Inventory Sync" }
            ]
        },
        {
            id: "resources",
            title: "Resources",
            icon: <Lightbulb className="w-5 h-5" />,
            items: [
                { id: "troubleshooting", title: "Troubleshooting" },
                { id: "faq", title: "FAQ" },
                { id: "changelog", title: "Changelog" },
                { id: "support", title: "Support" }
            ]
        }
    ];

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(""), 2000);
    };

    const CodeBlock = ({ language, code, title, id }) => (
        <div className="bg-gray-900/80 rounded-xl border border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 font-mono text-sm ml-3">{title}</span>
                </div>
                <button
                    onClick={() => copyToClipboard(code, id)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                    {copiedCode === id ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="text-gray-300">{code}</pre>
            </div>
        </div>
    );

    const ApiEndpoint = ({ method, endpoint, description, example }) => (
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-lg text-sm font-mono font-bold ${
                    method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                    method === 'POST' ? 'bg-emerald-500/20 text-emerald-400' :
                    method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                    method === 'DELETE' ? 'bg-red-500/20 text-red-400' : ''
                }`}>
                    {method}
                </span>
                <code className="text-cyan-400 font-mono bg-gray-800/50 px-3 py-1 rounded">
                    {endpoint}
                </code>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
            {example && (
                <CodeBlock
                    language="bash"
                    code={example}
                    title="Example Request"
                    id={`${method}-${endpoint}`}
                />
            )}
        </div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case "introduction":
                return (
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h1 className="text-5xl font-black mb-6 font-mono">
                                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    NEXUS VAULT
                                </span>
                                <span className="block text-white mt-2">API DOCUMENTATION</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                                The most secure and powerful FiveM payment intermediary platform. 
                                Build amazing stores with military-grade security and seamless integration.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300">
                                    <Play className="w-5 h-5 inline mr-2" />
                                    GET_STARTED
                                </button>
                                <button className="bg-gray-700/50 text-gray-400 px-8 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                                    <Github className="w-5 h-5 inline mr-2" />
                                    VIEW_GITHUB
                                </button>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 p-6 rounded-xl">
                                <Shield className="w-8 h-8 text-emerald-400 mb-4" />
                                <h3 className="text-emerald-400 font-mono font-bold text-lg mb-2">Military-Grade Security</h3>
                                <p className="text-gray-300 text-sm">256-bit encryption, fraud detection, and secure escrow for every transaction.</p>
                            </div>
                            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 p-6 rounded-xl">
                                <Zap className="w-8 h-8 text-cyan-400 mb-4" />
                                <h3 className="text-cyan-400 font-mono font-bold text-lg mb-2">Lightning Fast</h3>
                                <p className="text-gray-300 text-sm">Sub-second API responses with 99.99% uptime guarantee.</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 p-6 rounded-xl">
                                <Gamepad2 className="w-8 h-8 text-blue-400 mb-4" />
                                <h3 className="text-blue-400 font-mono font-bold text-lg mb-2">FiveM Native</h3>
                                <p className="text-gray-300 text-sm">Built specifically for FiveM with native ESX, QB-Core, and VRP support.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-white font-mono mb-6">
                                [WHAT_YOU_CAN_BUILD]
                            </h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Vehicle & Weapon Stores</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Loot Box & Crate Systems</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">VIP Membership Systems</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Custom Item Marketplaces</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Donation & Supporter Systems</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Advanced Analytics Dashboards</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Inventory Management Systems</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Real-time Player Economies</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "quickstart":
                return (
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-black text-white font-mono mb-4">
                                [QUICK_START_GUIDE]
                            </h1>
                            <p className="text-gray-400 font-mono mb-8">
                                Get your FiveM store up and running in under 5 minutes
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                                    <h3 className="text-xl font-bold text-emerald-400 font-mono">REGISTER & GET API KEY</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Sign up for your NEXUS VAULT account and grab your API credentials from the dashboard.
                                </p>
                                <CodeBlock
                                    language="bash"
                                    code={`# Your API credentials will look like this:
API_KEY="nxvlt_live_sk_1234567890abcdef"
WEBHOOK_SECRET="whsec_abcdef1234567890"
STORE_ID="store_xyz123"`}
                                    title=".env"
                                    id="step1-env"
                                />
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                                    <h3 className="text-xl font-bold text-cyan-400 font-mono">INSTALL SDK</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Install the NEXUS VAULT SDK for your FiveM server framework.
                                </p>
                                <CodeBlock
                                    language="bash"
                                    code={`# For ESX Framework
git clone https://github.com/nexusvault/nexus-esx.git
cd nexus-esx
npm install

# For QB-Core Framework  
git clone https://github.com/nexusvault/nexus-qbcore.git
cd nexus-qbcore
npm install

# For VRP Framework
git clone https://github.com/nexusvault/nexus-vrp.git
cd nexus-vrp
npm install`}
                                    title="Terminal"
                                    id="step2-install"
                                />
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                                    <h3 className="text-xl font-bold text-blue-400 font-mono">CONFIGURE SERVER</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Add the configuration to your server.cfg and start the resource.
                                </p>
                                <CodeBlock
                                    language="lua"
                                    code={`-- Add to server.cfg
ensure nexus-vault

-- Configuration
set nexus_api_key "nxvlt_live_sk_1234567890abcdef"
set nexus_webhook_secret "whsec_abcdef1234567890"
set nexus_store_id "store_xyz123"
set nexus_framework "esx" # or "qbcore" or "vrp"`}
                                    title="server.cfg"
                                    id="step3-config"
                                />
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                                    <h3 className="text-xl font-bold text-purple-400 font-mono">CREATE YOUR FIRST PRODUCT</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Use our API or dashboard to create your first product.
                                </p>
                                <CodeBlock
                                    language="javascript"
                                    code={`const nexusVault = require('@nexusvault/sdk');

// Create a product
const product = await nexusVault.products.create({
  name: "Legendary Weapon Pack",
  description: "Ultimate weapons for your character",
  price: 49.99,
  category: "weapons",
  items: [
    { type: "weapon", name: "WEAPON_CARBINERIFLE_MK2", quantity: 1 },
    { type: "ammo", name: "AMMO_RIFLE", quantity: 250 }
  ]
});

console.log('Product created:', product.id);`}
                                    title="create-product.js"
                                    id="step4-product"
                                />
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                                    <h3 className="text-xl font-bold text-yellow-400 font-mono">HANDLE PURCHASES</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Set up webhook handlers to deliver items when purchases complete.
                                </p>
                                <CodeBlock
                                    language="lua"
                                    code={`-- In your FiveM server script
RegisterNetEvent('nexusvault:purchaseComplete')
AddEventHandler('nexusvault:purchaseComplete', function(data)
    local playerId = data.playerId
    local items = data.items
    
    -- ESX Example
    local xPlayer = ESX.GetPlayerFromId(playerId)
    
    for _, item in pairs(items) do
        if item.type == "weapon" then
            xPlayer.addWeapon(item.name, item.quantity)
        elseif item.type == "item" then
            xPlayer.addInventoryItem(item.name, item.quantity)
        elseif item.type == "money" then
            xPlayer.addMoney(item.quantity)
        end
    end
    
    -- Notify player
    TriggerClientEvent('esx:showNotification', playerId, 
        'Purchase delivered: ' .. data.productName)
end)`}
                                    title="server.lua"
                                    id="step5-handler"
                                />
                            </div>

                            <div className="bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-400/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                                    <h3 className="text-xl font-bold text-emerald-400 font-mono">CONGRATULATIONS!</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Your NEXUS VAULT store is now live! Players can purchase items and they'll be automatically delivered to their characters.
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform">
                                        <ExternalLink className="w-5 h-5 inline mr-2" />
                                        VIEW_STORE
                                    </button>
                                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                                        <Settings className="w-5 h-5 inline mr-2" />
                                        DASHBOARD
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "authentication":
                return (
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-black text-white font-mono mb-4">
                                [AUTHENTICATION]
                            </h1>
                            <p className="text-gray-400 font-mono mb-8">
                                Secure your API requests with military-grade authentication
                            </p>
                        </motion.div>

                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-emerald-400 font-mono mb-4">API Keys</h2>
                            <p className="text-gray-300 mb-6">
                                All API requests must include your API key in the Authorization header. Your API key carries many privileges, so keep it secure!
                            </p>
                            
                            <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-yellow-400 font-bold font-mono mb-2">SECURITY WARNING</h4>
                                        <p className="text-gray-300 text-sm">
                                            Never expose your API key in client-side code, version control, or public repositories. 
                                            All API calls should be made from your secure server environment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <CodeBlock
                                language="bash"
                                code={`# Include your API key in every request
curl -X GET "https://api.nexusvault.io/v1/products" \\
  -H "Authorization: Bearer nxvlt_live_sk_1234567890abcdef" \\
  -H "Content-Type: application/json"`}
                                title="API Authentication"
                                id="auth-example"
                            />
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-cyan-400 font-mono mb-4">Webhook Signatures</h2>
                            <p className="text-gray-300 mb-6">
                                Webhook payloads are signed with your webhook secret to ensure they come from NEXUS VAULT.
                            </p>

                            <CodeBlock
                                language="javascript"
                                code={`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}

// Express.js example
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-nexus-signature'];
  const payload = JSON.stringify(req.body);
  
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process webhook
  console.log('Verified webhook:', req.body);
  res.status(200).send('OK');
});`}
                                title="webhook-verification.js"
                                id="webhook-verification"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-blue-400 font-mono mb-4">API Key Types</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                                        <div>
                                            <span className="text-white font-mono">Live Keys</span>
                                            <p className="text-gray-400 text-sm">Production environment</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div>
                                            <span className="text-white font-mono">Test Keys</span>
                                            <p className="text-gray-400 text-sm">Sandbox environment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-purple-400 font-mono mb-4">Key Formats</h3>
                                <div className="space-y-3">
                                    <div className="font-mono text-sm">
                                        <span className="text-gray-400">Live: </span>
                                        <span className="text-emerald-400">nxvlt_live_sk_...</span>
                                    </div>
                                    <div className="font-mono text-sm">
                                        <span className="text-gray-400">Test: </span>
                                        <span className="text-yellow-400">nxvlt_test_sk_...</span>
                                    </div>
                                    <div className="font-mono text-sm">
                                        <span className="text-gray-400">Webhook: </span>
                                        <span className="text-cyan-400">whsec_...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "products":
                return (
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-black text-white font-mono mb-4">
                                [PRODUCTS_API]
                            </h1>
                            <p className="text-gray-400 font-mono mb-8">
                                Manage your store inventory with the Products API
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <ApiEndpoint
                                method="GET"
                                endpoint="/v1/products"
                                description="Retrieve a list of all products in your store"
                                example={`curl -X GET "https://api.nexusvault.io/v1/products" \\
  -H "Authorization: Bearer nxvlt_live_sk_1234567890abcdef"`}
                            />

                            <ApiEndpoint
                                method="POST"
                                endpoint="/v1/products"
                                description="Create a new product in your store"
                                example={`curl -X POST "https://api.nexusvault.io/v1/products" \\
  -H "Authorization: Bearer nxvlt_live_sk_1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Legendary Weapon Pack",
    "description": "Ultimate weapons collection",
    "price": 49.99,
    "category": "weapons",
    "items": [
      {
        "type": "weapon",
        "name": "WEAPON_CARBINERIFLE_MK2",
        "quantity": 1
      }
    ]
  }'`}
                            />

                            <ApiEndpoint
                                method="GET"
                                endpoint="/v1/products/{id}"
                                description="Retrieve a specific product by ID"
                                example={`curl -X GET "https://api.nexusvault.io/v1/products/prod_xyz123" \\
  -H "Authorization: Bearer nxvlt_live_sk_1234567890abcdef"`}
                            />

                            <ApiEndpoint
                                method="PUT"
                                endpoint="/v1/products/{id}"
                                description="Update an existing product"
                                example={`curl -X PUT "https://api.nexusvault.io/v1/products/prod_xyz123" \\
  -H "Authorization: Bearer nxvlt_live_sk_1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{
    "price": 39.99,
    "status": "active"
  }'`}
                            />

                            <ApiEndpoint
                                method="DELETE"
                                endpoint="/v1/products/{id}"
                                description="Delete a product from your store"
                                example={`curl -X DELETE "https://api.nexusvault.io/v1/products/prod_xyz123" \\
  -H "Authorization: Bearer nxvlt_live_sk_1234567890abcdef"`}
                            />
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-emerald-400 font-mono mb-4">Product Object</h2>
                            <p className="text-gray-300 mb-6">
                                Here's what a product object looks like:
                            </p>
                            <CodeBlock
                                language="json"
                                code={`{
  "id": "prod_xyz123",
  "name": "Legendary Weapon Pack",
  "description": "Ultimate weapons collection for elite players",
  "price": 49.99,
  "currency": "USD",
  "category": "weapons",
  "status": "active",
  "stock_type": "unlimited",
  "items": [
    {
      "type": "weapon",
      "name": "WEAPON_CARBINERIFLE_MK2",
      "quantity": 1,
      "metadata": {
        "tint": 2,
        "components": ["COMPONENT_AT_AR_FLSH", "COMPONENT_AT_SCOPE_MEDIUM"]
      }
    },
    {
      "type": "ammo",
      "name": "AMMO_RIFLE",
      "quantity": 250
    }
  ],
  "metadata": {
    "rarity": "legendary",
    "level_requirement": 25
  },
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-20T14:45:00Z"
}`}
                                title="Product Object"
                                id="product-object"
                            />
                        </div>
                    </div>
                );

            case "fivem-sdk":
                return (
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-black text-white font-mono mb-4">
                                [FIVEM_SDK]
                            </h1>
                            <p className="text-gray-400 font-mono mb-8">
                                Native FiveM integration for ESX, QB-Core, and VRP frameworks
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 p-6 rounded-xl">
                                <h3 className="text-emerald-400 font-mono font-bold text-lg mb-2">ESX Framework</h3>
                                <p className="text-gray-300 text-sm mb-4">Full ESX integration with inventory sync</p>
                                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-mono text-sm hover:scale-105 transition-transform">
                                    <Download className="w-4 h-4 inline mr-2" />
                                    DOWNLOAD
                                </button>
                            </div>
                            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 p-6 rounded-xl">
                                <h3 className="text-cyan-400 font-mono font-bold text-lg mb-2">QB-Core Framework</h3>
                                <p className="text-gray-300 text-sm mb-4">Seamless QB-Core player management</p>
                                <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-mono text-sm hover:scale-105 transition-transform">
                                    <Download className="w-4 h-4 inline mr-2" />
                                    DOWNLOAD
                                </button>
                            </div>
                            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 p-6 rounded-xl">
                                <h3 className="text-purple-400 font-mono font-bold text-lg mb-2">VRP Framework</h3>
                                <p className="text-gray-300 text-sm mb-4">Advanced VRP database integration</p>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-mono text-sm hover:scale-105 transition-transform">
                                    <Download className="w-4 h-4 inline mr-2" />
                                    DOWNLOAD
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-emerald-400 font-mono mb-4">Installation</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-white font-mono mb-3">1. Download & Extract</h3>
                                    <CodeBlock
                                        language="bash"
                                        code={`# Download the SDK for your framework
cd resources
git clone https://github.com/nexusvault/nexus-esx.git
# or
git clone https://github.com/nexusvault/nexus-qbcore.git
# or  
git clone https://github.com/nexusvault/nexus-vrp.git`}
                                        title="Terminal"
                                        id="sdk-download"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white font-mono mb-3">2. Configure Settings</h3>
                                    <CodeBlock
                                        language="lua"
                                        code={`-- config.lua
Config = {}

-- NEXUS VAULT Configuration
Config.NexusVault = {
    ApiKey = "nxvlt_live_sk_1234567890abcdef",
    WebhookSecret = "whsec_abcdef1234567890",
    StoreId = "store_xyz123",
    Environment = "live", -- or "test"
    
    -- Framework Settings
    Framework = "esx", -- "esx", "qbcore", or "vrp"
    
    -- Database Settings (for VRP)
    Database = {
        host = "localhost",
        database = "fivem",
        username = "root", 
        password = ""
    }
}

-- Delivery Settings
Config.ItemDelivery = {
    -- Auto-deliver items on purchase
    AutoDelivery = true,
    
    -- Require player to be online
    RequireOnline = true,
    
    -- Notification settings
    ShowNotifications = true,
    NotificationDuration = 5000
}`}
                                        title="config.lua"
                                        id="sdk-config"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white font-mono mb-3">3. Add to server.cfg</h3>
                                    <CodeBlock
                                        language="bash"
                                        code={`# Add to your server.cfg
ensure nexus-esx
# or
ensure nexus-qbcore  
# or
ensure nexus-vrp

# Set your API credentials (alternative to config.lua)
set nexus_api_key "nxvlt_live_sk_1234567890abcdef"
set nexus_webhook_secret "whsec_abcdef1234567890"
set nexus_store_id "store_xyz123"`}
                                        title="server.cfg"
                                        id="sdk-server-cfg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-cyan-400 font-mono mb-4">Usage Examples</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-white font-mono mb-3">ESX Integration</h3>
                                    <CodeBlock
                                        language="lua"
                                        code={`-- server.lua
ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

-- Handle purchase completion
RegisterNetEvent('nexusvault:purchaseComplete')
AddEventHandler('nexusvault:purchaseComplete', function(data)
    local playerId = data.playerId
    local xPlayer = ESX.GetPlayerFromId(playerId)
    
    if not xPlayer then
        print("Player not found: " .. playerId)
        return
    end
    
    -- Process each item in the purchase
    for _, item in pairs(data.items) do
        if item.type == "weapon" then
            -- Add weapon with attachments
            xPlayer.addWeapon(item.name, item.quantity or 250)
            
            -- Add components if specified
            if item.metadata and item.metadata.components then
                for _, component in pairs(item.metadata.components) do
                    xPlayer.addWeaponComponent(item.name, component)
                end
            end
            
        elseif item.type == "vehicle" then
            -- Add vehicle to garage
            local vehicleData = {
                owner = xPlayer.identifier,
                plate = GenerateRandomPlate(),
                vehicle = item.name,
                type = item.metadata.category or 'car',
                job = item.metadata.job or nil,
                stored = 1
            }
            
            MySQL.Async.execute('INSERT INTO owned_vehicles (owner, plate, vehicle, type, job, stored) VALUES (@owner, @plate, @vehicle, @type, @job, @stored)', vehicleData)
            
        elseif item.type == "item" then
            -- Add regular item
            xPlayer.addInventoryItem(item.name, item.quantity)
            
        elseif item.type == "money" then
            -- Add money
            xPlayer.addMoney(item.quantity)
            
        elseif item.type == "bank" then
            -- Add bank money
            xPlayer.addAccountMoney('bank', item.quantity)
        end
    end
    
    -- Send notification
    TriggerClientEvent('esx:showNotification', playerId, 
        'Purchase delivered: ' .. data.productName, 'success')
    
    -- Log the purchase
    print(('Player %s (%s) received purchase: %s'):format(
        xPlayer.getName(), xPlayer.identifier, data.productName))
end)`}
                                        title="ESX Integration"
                                        id="esx-integration"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white font-mono mb-3">QB-Core Integration</h3>
                                    <CodeBlock
                                        language="lua"
                                        code={`-- server.lua
local QBCore = exports['qb-core']:GetCoreObject()

-- Handle purchase completion
RegisterNetEvent('nexusvault:purchaseComplete')
AddEventHandler('nexusvault:purchaseComplete', function(data)
    local playerId = data.playerId
    local Player = QBCore.Functions.GetPlayer(playerId)
    
    if not Player then
        print("Player not found: " .. playerId)
        return
    end
    
    -- Process each item in the purchase
    for _, item in pairs(data.items) do
        if item.type == "weapon" then
            -- Add weapon
            Player.Functions.AddItem(item.name, 1, false, {
                ammo = item.quantity or 250,
                quality = item.metadata.quality or 100,
                serie = tostring(QBCore.Shared.RandomInt(2) .. QBCore.Shared.RandomStr(3) .. QBCore.Shared.RandomInt(1) .. QBCore.Shared.RandomStr(2) .. QBCore.Shared.RandomInt(3) .. QBCore.Shared.RandomStr(4))
            })
            
        elseif item.type == "vehicle" then
            -- Add vehicle to player garage
            local vehicleProps = {
                model = GetHashKey(item.name),
                plate = QBCore.Functions.GeneratePlate(),
                garage = item.metadata.garage or 'pillboxgarage',
                fuel = 100,
                engine = 1000.0,
                body = 1000.0,
                state = 1
            }
            
            exports.oxmysql:execute('INSERT INTO player_vehicles (license, citizenid, vehicle, hash, mods, plate, garage, fuel, engine, body, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', {
                Player.PlayerData.license,
                Player.PlayerData.citizenid,
                item.name,
                GetHashKey(item.name),
                json.encode(vehicleProps),
                vehicleProps.plate,
                vehicleProps.garage,
                vehicleProps.fuel,
                vehicleProps.engine,
                vehicleProps.body,
                vehicleProps.state
            })
            
        elseif item.type == "item" then
            -- Add regular item
            Player.Functions.AddItem(item.name, item.quantity)
            
        elseif item.type == "money" then
            -- Add cash
            Player.Functions.AddMoney('cash', item.quantity)
            
        elseif item.type == "bank" then
            -- Add bank money
            Player.Functions.AddMoney('bank', item.quantity)
        end
    end
    
    -- Send notification
    TriggerClientEvent('QBCore:Notify', playerId, 
        'Purchase delivered: ' .. data.productName, 'success', 5000)
    
    -- Log the purchase
    print(('Player %s (%s) received purchase: %s'):format(
        Player.PlayerData.name, Player.PlayerData.citizenid, data.productName))
end)`}
                                        title="QB-Core Integration"
                                        id="qbcore-integration"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "faq":
                return (
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-black text-white font-mono mb-4">
                                [FREQUENTLY_ASKED_QUESTIONS]
                            </h1>
                            <p className="text-gray-400 font-mono mb-8">
                                Common questions and answers about NEXUS VAULT
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-emerald-400 font-mono mb-3 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5" />
                                    What is NEXUS VAULT?
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    NEXUS VAULT is a secure payment intermediary platform designed specifically for FiveM servers. 
                                    It provides military-grade security, escrow protection, and seamless integration with popular 
                                    FiveM frameworks like ESX, QB-Core, and VRP. Server owners can easily create stores to sell 
                                    in-game items, vehicles, weapons, and more with complete transaction security.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-cyan-400 font-mono mb-3 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5" />
                                    What are the fees?
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    We're currently offering <strong className="text-emerald-400">0% transaction fees</strong> as a limited-time 
                                    promotional offer for new users. Standard fees will be competitive with industry standards 
                                    (typically 2.9% + $0.30 per transaction). You'll receive 30-day advance notice before any 
                                    fee structure changes take effect.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-blue-400 font-mono mb-3 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    How secure is NEXUS VAULT?
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-3">
                                    Security is our top priority. We implement multiple layers of protection:
                                </p>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• 256-bit AES encryption for all data</li>
                                    <li>• Secure escrow system protecting all transactions</li>
                                    <li>• Advanced fraud detection and prevention</li>
                                    <li>• PCI DSS compliance for payment processing</li>
                                    <li>• Regular security audits and penetration testing</li>
                                    <li>• SOC 2 Type II certification</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-purple-400 font-mono mb-3 flex items-center gap-2">
                                    <Gamepad2 className="w-5 h-5" />
                                    Which FiveM frameworks are supported?
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-3">
                                    We provide native support for the most popular FiveM frameworks:
                                </p>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• <strong className="text-emerald-400">ESX Framework</strong> - Full inventory and player management</li>
                                    <li>• <strong className="text-cyan-400">QB-Core</strong> - Complete item and vehicle delivery</li>
                                    <li>• <strong className="text-purple-400">VRP Framework</strong> - Advanced database integration</li>
                                    <li>• <strong className="text-yellow-400">Custom Frameworks</strong> - Flexible API for any setup</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-yellow-400 font-mono mb-3 flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    How long does setup take?
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Most servers can be set up and running in under 5 minutes! Our Quick Start guide walks you 
                                    through the entire process from registration to your first sale. The SDK installation is 
                                    straightforward, and our automated systems handle most of the configuration for you.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-orange-400 font-mono mb-3 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5" />
                                    What payment methods do you support?
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-3">
                                    We support all major payment methods to maximize your sales:
                                </p>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• Credit and debit cards (Visa, Mastercard, American Express)</li>
                                    <li>• PayPal and PayPal Credit</li>
                                    <li>• Apple Pay and Google Pay</li>
                                    <li>• Bank transfers and ACH payments</li>
                                    <li>• Cryptocurrency (Bitcoin, Ethereum, and more)</li>
                                    <li>• Buy now, pay later services (Klarna, Afterpay)</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-red-400 font-mono mb-3 flex items-center gap-2">
                                    <Bug className="w-5 h-5" />
                                    What if something goes wrong?
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Our escrow system protects both buyers and sellers. If there's an issue with item delivery, 
                                    funds are held securely until the problem is resolved. We offer 24/7 support via Discord, 
                                    email, and our dashboard ticket system. Our average response time is under 2 hours, and 
                                    critical issues are handled immediately.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-green-400 font-mono mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Can I track my sales and analytics?
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Absolutely! Our comprehensive dashboard provides real-time analytics including revenue trends, 
                                    best-selling products, customer insights, conversion rates, and much more. You can export 
                                    data for external analysis and set up automated reports via email or Discord webhooks.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-400/30 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-emerald-400 font-mono mb-3 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5" />
                                    Still have questions?
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Our support team is ready to help! Reach out through any of these channels:
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform">
                                        <MessageSquare className="w-5 h-5 inline mr-2" />
                                        DISCORD
                                    </button>
                                    <button className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform">
                                        <Mail className="w-5 h-5 inline mr-2" />
                                        EMAIL
                                    </button>
                                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                                        <FileText className="w-5 h-5 inline mr-2" />
                                        TICKET
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="text-center py-20">
                        <div className="text-gray-400 font-mono text-xl mb-4">
                            [SECTION_UNDER_CONSTRUCTION]
                        </div>
                        <p className="text-gray-500 font-mono">
                            This documentation section is being written. Check back soon!
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Inject CSS for hiding scrollbar */}
            <style dangerouslySetInnerHTML={{
                __html: hiddenScrollbarCSS
            }} />
            
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `
                        linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px),
                        linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
                }}></div>
                <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Mobile Menu Button */}
            {!isLargeScreen && (
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="fixed top-4 left-4 z-50 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-lg p-3 text-gray-400 hover:text-white transition-colors"
                >
                    {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            )}

            <div className="flex">
                {/* Sidebar */}
                <motion.div 
                    initial={{ x: isLargeScreen ? 0 : -400 }}
                    animate={{ 
                        x: isLargeScreen ? 0 : (sidebarOpen ? 0 : -400)
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className={`${isLargeScreen ? 'relative' : 'fixed'} z-40 w-80 h-screen bg-gray-800/80 backdrop-blur-xl border-r border-gray-700 overflow-y-auto hidden-scrollbar`}
                    style={sidebarStyle}
                >
                    {/* Sidebar Header */}
                    <div className="p-6 border-b border-gray-700">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <Book className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-black font-mono">
                                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">NEXUS</span>
                                    <span className="text-white mx-1">•</span>
                                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">DOCS</span>
                                </h1>
                                <p className="text-emerald-400 font-mono text-sm">API_DOCUMENTATION</p>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search docs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300 font-mono text-sm"
                            />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4">
                        {navigationSections.map((section) => (
                            <div key={section.id} className="mb-6">
                                <h3 className="text-gray-400 font-mono font-bold text-sm mb-3 flex items-center gap-2">
                                    {section.icon}
                                    {section.title.toUpperCase()}
                                </h3>
                                <div className="space-y-1">
                                    {section.items
                                        .filter(item => 
                                            searchTerm === "" || 
                                            item.title.toLowerCase().includes(searchTerm.toLowerCase())
                                        )
                                        .map((item) => (
                                            <motion.button
                                                key={item.id}
                                                onClick={() => {
                                                    setActiveSection(item.id);
                                                    if (!isLargeScreen) setSidebarOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 font-mono text-sm ${
                                                    activeSection === item.id
                                                        ? 'bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400'
                                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                                }`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {item.title}
                                            </motion.button>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-gray-700">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono">
                                <CheckCircle className="w-4 h-4" />
                                <span>API v2.1.0</span>
                            </div>
                            <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono">
                                <Activity className="w-4 h-4" />
                                <span>Status: Operational</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex-1 bg-gray-700/50 text-gray-400 py-2 px-3 rounded-lg text-sm font-mono hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                                    <Github className="w-4 h-4 inline mr-1" />
                                    GitHub
                                </button>
                                <button className="flex-1 bg-gray-700/50 text-gray-400 py-2 px-3 rounded-lg text-sm font-mono hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                                    <MessageSquare className="w-4 h-4 inline mr-1" />
                                    Discord
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className={`flex-1 ${isLargeScreen ? 'ml-0' : 'ml-0'}`}>
                    <main className="max-w-4xl mx-auto p-8 relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>

            {/* Mobile Overlay */}
            {!isLargeScreen && sidebarOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/50 z-30"
                />
            )}
        </div>
    );
};

export default DocsPage;