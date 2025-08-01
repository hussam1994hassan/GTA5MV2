import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  MessageSquare,
  Paperclip,
  Send,
  User,
  Calendar,
  Tag,
  Star,
  MoreVertical,
  ArrowLeft,
  Eye,
  Edit,
  Trash2,
  Download,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Info,
  AlertTriangle,
  Shield,
  Zap,
  Users,
  FileText,
  DollarSign,
  Server,
  Lock,
  Ban,
  Activity,
  Headphones,
  Globe,
  Settings,
  Mail,
  Phone,
  Image,
  File,
  Archive,
  Timer
} from 'lucide-react';

const SupportTicketsPage = () => {
  const [currentView, setCurrentView] = useState('list'); // list, detail, create
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('created');
  const [newMessage, setNewMessage] = useState('');
  const [newTicketData, setNewTicketData] = useState({
    title: '',
    category: 'general',
    priority: 'medium',
    description: '',
    attachments: []
  });

  // Mock tickets data
  const [tickets, setTickets] = useState([
    {
      id: 'TKT-001',
      title: 'Payment Processing Issue',
      description: 'Unable to process payments through Stripe integration',
      category: 'billing',
      priority: 'high',
      status: 'open',
      createdAt: '2025-01-25T10:30:00Z',
      updatedAt: '2025-01-25T14:22:00Z',
      assignee: 'Sarah Chen',
      requester: {
        name: 'John Server Owner',
        email: 'john@example.com',
        avatar: '/api/placeholder/32/32'
      },
      messages: [
        {
          id: 1,
          author: 'John Server Owner',
          content: 'Hello, I\'m having trouble with payment processing. Players are getting errors when trying to purchase items.',
          timestamp: '2025-01-25T10:30:00Z',
          type: 'user',
          attachments: []
        },
        {
          id: 2,
          author: 'Sarah Chen',
          content: 'Hi John, I\'ve received your ticket. Can you please provide the specific error messages your players are seeing?',
          timestamp: '2025-01-25T11:15:00Z',
          type: 'agent',
          attachments: []
        },
        {
          id: 3,
          author: 'John Server Owner',
          content: 'Here\'s a screenshot of the error. It happens during checkout.',
          timestamp: '2025-01-25T12:45:00Z',
          type: 'user',
          attachments: [{ name: 'error_screenshot.png', type: 'image' }]
        },
        {
          id: 4,
          author: 'Sarah Chen',
          content: 'Thank you for the screenshot. I can see the issue is with the Stripe webhook configuration. I\'ve updated your settings. Please test and let me know if the issue persists.',
          timestamp: '2025-01-25T14:22:00Z',
          type: 'agent',
          attachments: []
        }
      ],
      tags: ['payment', 'stripe', 'urgent']
    },
    {
      id: 'TKT-002',
      title: 'API Integration Help',
      description: 'Need assistance with FiveM server integration',
      category: 'technical',
      priority: 'medium',
      status: 'in_progress',
      createdAt: '2025-01-24T16:20:00Z',
      updatedAt: '2025-01-25T09:10:00Z',
      assignee: 'Mike Rodriguez',
      requester: {
        name: 'Alex Developer',
        email: 'alex@server.com',
        avatar: '/api/placeholder/32/32'
      },
      messages: [
        {
          id: 1,
          author: 'Alex Developer',
          content: 'I need help integrating the NEXUS VAULT API with my FiveM server. The documentation is a bit unclear on the webhook setup.',
          timestamp: '2025-01-24T16:20:00Z',
          type: 'user',
          attachments: []
        },
        {
          id: 2,
          author: 'Mike Rodriguez',
          content: 'Hi Alex! I\'d be happy to help. Let me create a step-by-step guide for you. First, can you tell me which framework you\'re using - ESX or QB-Core?',
          timestamp: '2025-01-24T17:30:00Z',
          type: 'agent',
          attachments: []
        },
        {
          id: 3,
          author: 'Alex Developer',
          content: 'We\'re using ESX framework. Thanks for the quick response!',
          timestamp: '2025-01-24T18:15:00Z',
          type: 'user',
          attachments: []
        }
      ],
      tags: ['api', 'integration', 'fivem']
    },
    {
      id: 'TKT-003',
      title: 'Account Verification Required',
      description: 'Need to verify my server owner account',
      category: 'account',
      priority: 'low',
      status: 'pending',
      createdAt: '2025-01-23T09:45:00Z',
      updatedAt: '2025-01-23T09:45:00Z',
      assignee: null,
      requester: {
        name: 'Emma NewUser',
        email: 'emma@newserver.net',
        avatar: '/api/placeholder/32/32'
      },
      messages: [
        {
          id: 1,
          author: 'Emma NewUser',
          content: 'Hi, I just created my account and need to get it verified to start selling items on my server.',
          timestamp: '2025-01-23T09:45:00Z',
          type: 'user',
          attachments: [{ name: 'server_info.pdf', type: 'document' }]
        }
      ],
      tags: ['verification', 'new-user']
    },
    {
      id: 'TKT-004',
      title: 'Fraudulent Transaction Report',
      description: 'Suspicious activity detected on my account',
      category: 'security',
      priority: 'critical',
      status: 'resolved',
      createdAt: '2025-01-22T14:30:00Z',
      updatedAt: '2025-01-22T20:15:00Z',
      assignee: 'Security Team',
      requester: {
        name: 'David SecureOwner',
        email: 'david@secureserver.com',
        avatar: '/api/placeholder/32/32'
      },
      messages: [
        {
          id: 1,
          author: 'David SecureOwner',
          content: 'I noticed some transactions on my account that I didn\'t authorize. Please investigate immediately.',
          timestamp: '2025-01-22T14:30:00Z',
          type: 'user',
          attachments: []
        },
        {
          id: 2,
          author: 'Security Team',
          content: 'We\'ve immediately locked your account and are investigating the suspicious transactions. Our fraud prevention team is on it.',
          timestamp: '2025-01-22T14:45:00Z',
          type: 'agent',
          attachments: []
        },
        {
          id: 3,
          author: 'Security Team',
          content: 'Investigation complete. The transactions were false positives from our new fraud detection system. Your account has been restored and enhanced security measures have been applied.',
          timestamp: '2025-01-22T20:15:00Z',
          type: 'agent',
          attachments: []
        }
      ],
      tags: ['security', 'fraud', 'resolved']
    }
  ]);

  const statusColors = {
    open: { bg: 'bg-blue-500/20', border: 'border-blue-400', text: 'text-blue-400', icon: <AlertCircle className="w-4 h-4" /> },
    in_progress: { bg: 'bg-yellow-500/20', border: 'border-yellow-400', text: 'text-yellow-400', icon: <Clock className="w-4 h-4" /> },
    pending: { bg: 'bg-purple-500/20', border: 'border-purple-400', text: 'text-purple-400', icon: <Timer className="w-4 h-4" /> },
    resolved: { bg: 'bg-green-500/20', border: 'border-green-400', text: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> },
    closed: { bg: 'bg-gray-500/20', border: 'border-gray-400', text: 'text-gray-400', icon: <XCircle className="w-4 h-4" /> }
  };

  const priorityColors = {
    low: { bg: 'bg-gray-500/20', border: 'border-gray-400', text: 'text-gray-400' },
    medium: { bg: 'bg-blue-500/20', border: 'border-blue-400', text: 'text-blue-400' },
    high: { bg: 'bg-orange-500/20', border: 'border-orange-400', text: 'text-orange-400' },
    critical: { bg: 'bg-red-500/20', border: 'border-red-400', text: 'text-red-400' }
  };

  const categoryIcons = {
    general: <Headphones className="w-4 h-4" />,
    technical: <Server className="w-4 h-4" />,
    billing: <DollarSign className="w-4 h-4" />,
    security: <Shield className="w-4 h-4" />,
    account: <User className="w-4 h-4" />,
    legal: <FileText className="w-4 h-4" />
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority;
    const matchesCategory = filterCategory === 'all' || ticket.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  const handleCreateTicket = () => {
    const newTicket = {
      id: `TKT-${String(tickets.length + 1).padStart(3, '0')}`,
      title: newTicketData.title,
      description: newTicketData.description,
      category: newTicketData.category,
      priority: newTicketData.priority,
      status: 'open',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      assignee: null,
      requester: {
        name: 'Current User',
        email: 'user@example.com',
        avatar: '/api/placeholder/32/32'
      },
      messages: [
        {
          id: 1,
          author: 'Current User',
          content: newTicketData.description,
          timestamp: new Date().toISOString(),
          type: 'user',
          attachments: newTicketData.attachments
        }
      ],
      tags: []
    };

    setTickets([newTicket, ...tickets]);
    setNewTicketData({
      title: '',
      category: 'general',
      priority: 'medium',
      description: '',
      attachments: []
    });
    setCurrentView('list');
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedTicket) return;

    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        const newMsg = {
          id: ticket.messages.length + 1,
          author: 'Current User',
          content: newMessage,
          timestamp: new Date().toISOString(),
          type: 'user',
          attachments: []
        };
        return {
          ...ticket,
          messages: [...ticket.messages, newMsg],
          updatedAt: new Date().toISOString()
        };
      }
      return ticket;
    });

    setTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === selectedTicket.id));
    setNewMessage('');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.6) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}></div>

        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {currentView !== 'list' && (
              <button
                onClick={() => {
                  setCurrentView('list');
                  setSelectedTicket(null);
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors font-mono"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Tickets
              </button>
            )}
            <div>
              <h1 className="text-4xl font-black font-mono">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  SUPPORT
                </span>
                <span className="text-white ml-3">TICKETS</span>
              </h1>
              <p className="text-gray-400 font-mono mt-2">
                {currentView === 'list' ? `${filteredTickets.length} tickets found` : 
                 currentView === 'detail' ? `Ticket ${selectedTicket?.id}` : 
                 'Create new support ticket'}
              </p>
            </div>
          </div>

          {currentView === 'list' && (
            <button
              onClick={() => setCurrentView('create')}
              className="group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 px-6 py-3 rounded-lg font-mono font-bold transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              NEW TICKET
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {/* Tickets List View */}
          {currentView === 'list' && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Filters and Search */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search tickets..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono"
                      />
                    </div>
                  </div>
                  
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white focus:border-emerald-400 font-mono"
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="pending">Pending</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>

                  <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white focus:border-emerald-400 font-mono"
                  >
                    <option value="all">All Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="critical">Critical</option>
                  </select>

                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white focus:border-emerald-400 font-mono"
                  >
                    <option value="all">All Categories</option>
                    <option value="general">General</option>
                    <option value="technical">Technical</option>
                    <option value="billing">Billing</option>
                    <option value="security">Security</option>
                    <option value="account">Account</option>
                    <option value="legal">Legal</option>
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white focus:border-emerald-400 font-mono"
                  >
                    <option value="created">Created Date</option>
                    <option value="updated">Last Updated</option>
                    <option value="priority">Priority</option>
                    <option value="status">Status</option>
                  </select>
                </div>
              </div>

              {/* Tickets List */}
              <div className="space-y-4">
                {filteredTickets.map((ticket) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setCurrentView('detail');
                    }}
                    className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 hover:border-emerald-400/50 rounded-xl p-6 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-emerald-400 font-mono font-bold">{ticket.id}</span>
                          <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-mono ${statusColors[ticket.status].bg} ${statusColors[ticket.status].border} border`}>
                            {statusColors[ticket.status].icon}
                            <span className={statusColors[ticket.status].text}>
                              {ticket.status.replace('_', ' ').toUpperCase()}
                            </span>
                          </div>
                          <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-mono ${priorityColors[ticket.priority].bg} ${priorityColors[ticket.priority].border} border`}>
                            <span className={priorityColors[ticket.priority].text}>
                              {ticket.priority.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                          {ticket.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {ticket.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              {categoryIcons[ticket.category]}
                              <span className="text-gray-400 text-sm capitalize">{ticket.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-400 text-sm">{ticket.requester.name}</span>
                            </div>
                            {ticket.assignee && (
                              <div className="flex items-center gap-2">
                                <Settings className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-400 text-sm">{ticket.assignee}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{ticket.messages.length}</span>
                            </div>
                            <span>{getTimeAgo(ticket.updatedAt)}</span>
                          </div>
                        </div>

                        {ticket.tags.length > 0 && (
                          <div className="flex items-center gap-2 mt-3">
                            {ticket.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-300"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-emerald-400 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {filteredTickets.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-400 mb-2">No tickets found</h3>
                    <p className="text-gray-500">Try adjusting your filters or create a new ticket</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Ticket Detail View */}
          {currentView === 'detail' && selectedTicket && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Ticket Header */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-emerald-400 font-mono font-bold text-xl">{selectedTicket.id}</span>
                        <div className={`flex items-center gap-1 px-3 py-1 rounded text-sm font-mono ${statusColors[selectedTicket.status].bg} ${statusColors[selectedTicket.status].border} border`}>
                          {statusColors[selectedTicket.status].icon}
                          <span className={statusColors[selectedTicket.status].text}>
                            {selectedTicket.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <h1 className="text-2xl font-bold text-white mb-2">{selectedTicket.title}</h1>
                      <p className="text-gray-400">{selectedTicket.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-emerald-400 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                        <Archive className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Created {getTimeAgo(selectedTicket.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Updated {getTimeAgo(selectedTicket.updatedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {categoryIcons[selectedTicket.category]}
                      <span className="capitalize">{selectedTicket.category}</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h2 className="text-xl font-bold font-mono text-cyan-400 mb-6 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    [CONVERSATION]
                  </h2>
                  
                  <div className="space-y-6 mb-6 max-h-96 overflow-y-auto">
                    {selectedTicket.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.type === 'agent' ? 'flex-row-reverse' : ''}`}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">
                            {message.author.charAt(0)}
                          </span>
                        </div>
                        
                        <div className={`flex-1 max-w-md ${message.type === 'agent' ? 'text-right' : ''}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold text-sm">{message.author}</span>
                            <span className="text-gray-400 text-xs">{formatDate(message.timestamp)}</span>
                          </div>
                          
                          <div className={`p-4 rounded-lg ${
                            message.type === 'agent'
                              ? 'bg-cyan-500/10 border border-cyan-400/20'
                              : 'bg-gray-700/50 border border-gray-600'
                          }`}>
                            <p className="text-gray-300 whitespace-pre-wrap">{message.content}</p>
                            
                            {message.attachments.length > 0 && (
                              <div className="mt-3 space-y-2">
                                {message.attachments.map((attachment, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2 p-2 bg-gray-800/50 rounded border border-gray-600"
                                  >
                                    {attachment.type === 'image' ? (
                                      <Image className="w-4 h-4 text-blue-400" />
                                    ) : (
                                      <File className="w-4 h-4 text-gray-400" />
                                    )}
                                    <span className="text-sm text-gray-300">{attachment.name}</span>
                                    <button className="ml-auto text-cyan-400 hover:text-cyan-300">
                                      <Download className="w-4 h-4" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Reply Box */}
                  <div className="border-t border-gray-700 pt-6">
                    <div className="space-y-4">
                      <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your reply..."
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                      />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-cyan-400 transition-colors">
                            <Paperclip className="w-4 h-4" />
                            <span className="text-sm">Attach</span>
                          </button>
                        </div>
                        
                        <button
                          onClick={handleSendMessage}
                          disabled={!newMessage.trim()}
                          className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-gray-600 disabled:to-gray-600 rounded-lg font-mono font-bold transition-all duration-300 disabled:cursor-not-allowed"
                        >
                          <Send className="w-4 h-4" />
                          SEND
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Ticket Info */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold font-mono text-purple-400 mb-4">
                    [TICKET_INFO]
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm">Priority</label>
                      <div className={`mt-1 flex items-center gap-2 px-3 py-2 rounded ${priorityColors[selectedTicket.priority].bg} ${priorityColors[selectedTicket.priority].border} border`}>
                        <span className={`font-mono font-bold ${priorityColors[selectedTicket.priority].text}`}>
                          {selectedTicket.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm">Category</label>
                      <div className="mt-1 flex items-center gap-2 text-white">
                        {categoryIcons[selectedTicket.category]}
                        <span className="capitalize">{selectedTicket.category}</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm">Assignee</label>
                      <div className="mt-1 text-white">
                        {selectedTicket.assignee || 'Unassigned'}
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm">Created</label>
                      <div className="mt-1 text-white text-sm">
                        {formatDate(selectedTicket.createdAt)}
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm">Last Updated</label>
                      <div className="mt-1 text-white text-sm">
                        {formatDate(selectedTicket.updatedAt)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requester Info */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold font-mono text-yellow-400 mb-4">
                    [REQUESTER]
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold">
                        {selectedTicket.requester.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{selectedTicket.requester.name}</div>
                      <div className="text-gray-400 text-sm">{selectedTicket.requester.email}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 rounded text-sm transition-colors">
                      <Mail className="w-4 h-4" />
                      Email
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 rounded text-sm transition-colors">
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                  </div>
                </div>

                {/* Tags */}
                {selectedTicket.tags.length > 0 && (
                  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-bold font-mono text-green-400 mb-4">
                      [TAGS]
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedTicket.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-500/10 border border-emerald-400/20 rounded text-emerald-400 text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold font-mono text-red-400 mb-4">
                    [ACTIONS]
                  </h3>
                  
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-400/30 rounded text-green-400 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      Mark as Resolved
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-400/30 rounded text-yellow-400 transition-colors">
                      <Clock className="w-4 h-4" />
                      Set as Pending
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-600/20 hover:bg-gray-600/30 border border-gray-400/30 rounded text-gray-400 transition-colors">
                      <Archive className="w-4 h-4" />
                      Archive Ticket
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-400/30 rounded text-red-400 transition-colors">
                      <Ban className="w-4 h-4" />
                      Close Ticket
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Create Ticket View */}
          {currentView === 'create' && (
            <motion.div
              key="create"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <h2 className="text-3xl font-bold font-mono text-emerald-400 mb-8 flex items-center gap-3">
                  <Plus className="w-8 h-8" />
                  [CREATE_TICKET]
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                      Ticket Title
                    </label>
                    <input
                      type="text"
                      value={newTicketData.title}
                      onChange={(e) => setNewTicketData({...newTicketData, title: e.target.value})}
                      placeholder="Brief description of your issue"
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-mono font-semibold mb-2">
                        Category
                      </label>
                      <select
                        value={newTicketData.category}
                        onChange={(e) => setNewTicketData({...newTicketData, category: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white focus:border-emerald-400 font-mono"
                      >
                        <option value="general">General Support</option>
                        <option value="technical">Technical Issues</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="security">Security & Fraud</option>
                        <option value="account">Account Issues</option>
                        <option value="legal">Legal & Compliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-mono font-semibold mb-2">
                        Priority
                      </label>
                      <select
                        value={newTicketData.priority}
                        onChange={(e) => setNewTicketData({...newTicketData, priority: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white focus:border-emerald-400 font-mono"
                      >
                        <option value="low">Low - General inquiry</option>
                        <option value="medium">Medium - Standard support</option>
                        <option value="high">High - Urgent issue</option>
                        <option value="critical">Critical - Service disruption</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                      Description
                    </label>
                    <textarea
                      value={newTicketData.description}
                      onChange={(e) => setNewTicketData({...newTicketData, description: e.target.value})}
                      placeholder="Please provide detailed information about your issue..."
                      rows={8}
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                      Attachments
                    </label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                      <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 mb-2">Drag & drop files here or click to browse</p>
                      <p className="text-gray-500 text-sm">Max file size: 10MB. Supported: images, documents, logs</p>
                      <button className="mt-3 px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded text-gray-300 transition-colors">
                        Choose Files
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setCurrentView('list')}
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-lg text-gray-300 font-mono transition-colors"
                    >
                      Cancel
                    </button>
                    
                    <button
                      onClick={handleCreateTicket}
                      disabled={!newTicketData.title || !newTicketData.description}
                      className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-gray-600 disabled:to-gray-600 rounded-lg font-mono font-bold transition-all duration-300 disabled:cursor-not-allowed"
                    >
                      CREATE TICKET
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SupportTicketsPage;