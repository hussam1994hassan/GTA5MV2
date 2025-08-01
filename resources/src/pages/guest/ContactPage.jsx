import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Globe,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink,
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  MessageSquare,
  FileText,
  DollarSign,
  Server,
  Lock,
  AlertTriangle,
  Star,
  TrendingUp,
  Award,
  Heart
} from 'lucide-react';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    priority: 'medium',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Get help via email - we respond within 24 hours",
      contact: "support@nexusvault.io",
      availability: "24/7",
      responseTime: "< 24 hours",
      color: "emerald"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on platform",
      availability: "9 AM - 11 PM EST",
      responseTime: "< 5 minutes",
      color: "cyan"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      contact: "+1 (555) 123-4567",
      availability: "9 AM - 6 PM EST",
      responseTime: "Immediate",
      color: "blue"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Support Tickets",
      description: "Create detailed support tickets for complex issues",
      contact: "Submit via platform",
      availability: "24/7",
      responseTime: "< 12 hours",
      color: "purple"
    }
  ];

  const departments = [
    {
      id: 'general',
      name: 'General Support',
      icon: <Headphones className="w-6 h-6" />,
      email: 'support@nexusvault.io',
      description: 'General questions and platform assistance',
      color: 'emerald'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: <Server className="w-6 h-6" />,
      email: 'tech@nexusvault.io',
      description: 'Technical issues and API integration help',
      color: 'cyan'
    },
    {
      id: 'billing',
      name: 'Billing & Payments',
      icon: <DollarSign className="w-6 h-6" />,
      email: 'billing@nexusvault.io',
      description: 'Payment issues and billing inquiries',
      color: 'yellow'
    },
    {
      id: 'security',
      name: 'Security & Fraud',
      icon: <Shield className="w-6 h-6" />,
      email: 'security@nexusvault.io',
      description: 'Security concerns and fraud reports',
      color: 'red'
    },
    {
      id: 'business',
      name: 'Business Inquiries',
      icon: <TrendingUp className="w-6 h-6" />,
      email: 'business@nexusvault.io',
      description: 'Partnerships and business development',
      color: 'purple'
    },
    {
      id: 'legal',
      name: 'Legal & Compliance',
      icon: <FileText className="w-6 h-6" />,
      email: 'legal@nexusvault.io',
      description: 'Legal matters and compliance issues',
      color: 'indigo'
    }
  ];

  const socialLinks = [
    { icon: <MessageSquare className="w-6 h-6" />, name: 'Discord', url: '#', color: 'indigo' },
    { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', url: '#', color: 'blue' },
    { icon: <Youtube className="w-6 h-6" />, name: 'YouTube', url: '#', color: 'red' },
    { icon: <Github className="w-6 h-6" />, name: 'GitHub', url: '#', color: 'gray' },
    { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', url: '#', color: 'blue' },
    { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', url: '#', color: 'blue' }
  ];

  const faqs = [
    {
      question: "How long does it take to set up my server store?",
      answer: "Setting up your server store takes less than 5 minutes. Simply create an account, verify your server, and start adding products."
    },
    {
      question: "What are your platform fees?",
      answer: "We charge 5% per transaction plus payment processing fees (2.9% + $0.30). No monthly fees or setup costs."
    },
    {
      question: "How quickly are funds released to server owners?",
      answer: "Funds are typically released within 24-48 hours after successful delivery confirmation, with weekly payouts."
    },
    {
      question: "Do you support international payments?",
      answer: "Yes, we support payments from over 100 countries with multiple currencies and local payment methods."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        priority: 'medium',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
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
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 font-mono text-xs opacity-5">
          {[
            "{ support }",
            "[ help ]",
            "< contact >",
            "( 24/7 )",
            "// assistance",
            "const help",
            "return support",
            "async contact"
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
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black mb-6 font-mono"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              CONTACT
            </span>
            <span className="block text-white mt-2">SUPPORT</span>
          </motion.h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Need help? Our dedicated support team is here 24/7 to assist you with any questions or issues.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 hover:border-${method.color}-400/50 rounded-xl p-6 transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-${method.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}></div>
              
              <div className="relative z-10">
                <div className={`text-${method.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className={`text-lg font-bold font-mono mb-3 text-white group-hover:text-${method.color}-400 transition-colors`}>
                  {method.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {method.description}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Contact:</span>
                    <span className={`text-${method.color}-400 font-mono`}>{method.contact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Available:</span>
                    <span className="text-gray-300">{method.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response:</span>
                    <span className="text-emerald-400">{method.responseTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400 flex items-center gap-3">
                <Send className="w-8 h-8" />
                [SEND_MESSAGE]
              </h2>
              
              {/* Department Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Select Department</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {departments.map((dept) => (
                    <motion.button
                      key={dept.id}
                      onClick={() => {
                        setActiveTab(dept.id);
                        setFormData(prev => ({ ...prev, category: dept.id }));
                      }}
                      className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
                        activeTab === dept.id
                          ? `border-${dept.color}-400 bg-${dept.color}-500/10`
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`text-${dept.color}-400`}>
                        {dept.icon}
                      </div>
                      <div className="text-left">
                        <div className={`font-mono font-bold text-sm ${
                          activeTab === dept.id ? `text-${dept.color}-400` : 'text-white'
                        }`}>
                          {dept.name}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {dept.description}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-mono font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-mono font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-mono font-semibold mb-2">
                    Priority Level
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Standard support</option>
                    <option value="high">High - Urgent issue</option>
                    <option value="critical">Critical - Service disruption</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-mono font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 font-mono resize-none"
                    placeholder="Please provide detailed information about your inquiry or issue..."
                  />
                </div>

                {submitSuccess ? (
                  <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                      <div>
                        <h4 className="text-emerald-400 font-bold">Message Sent Successfully!</h4>
                        <p className="text-gray-300 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-600 py-4 rounded-xl font-mono font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          SENDING MESSAGE...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          [SEND_MESSAGE]
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold font-mono mb-6 text-cyan-400">
                [CONTACT_INFO]
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-mono">Email</div>
                    <div className="text-gray-400 text-sm">support@nexusvault.io</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-mono">Phone</div>
                    <div className="text-gray-400 text-sm">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-mono">Address</div>
                    <div className="text-gray-400 text-sm">
                      123 Tech Boulevard<br />
                      Wilmington, DE 19801
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-mono">Hours</div>
                    <div className="text-gray-400 text-sm">24/7 Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold font-mono mb-6 text-purple-400">
                [SOCIAL_MEDIA]
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`group flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-600 hover:border-${social.color}-400 transition-all duration-300`}
                  >
                    <div className={`text-${social.color}-400 group-hover:scale-125 transition-transform`}>
                      {social.icon}
                    </div>
                    <span className="text-gray-400 text-xs font-mono">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold font-mono mb-6 text-yellow-400">
                [QUICK_FAQ]
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h4 className="text-white font-bold text-sm mb-2">{faq.question}</h4>
                    <p className="text-gray-400 text-xs">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 px-4 py-2 bg-yellow-600/20 border border-yellow-400/30 rounded-lg text-yellow-400 font-mono text-sm hover:bg-yellow-600/30 transition-colors">
                View All FAQs →
              </button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-400/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-lg font-bold font-mono text-red-400">
                  [EMERGENCY_SUPPORT]
                </h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                For critical security issues or service disruptions:
              </p>
              <div className="space-y-2">
                <div className="text-red-400 font-mono font-bold">emergency@nexusvault.io</div>
                <div className="text-red-400 font-mono font-bold">+1 (555) 911-HELP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;