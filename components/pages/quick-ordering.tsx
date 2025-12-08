import { useState } from "react"
import { FileText, MessageSquare, Send, Clock, Phone, Mail, MapPin } from "lucide-react"

export default function QuickOrdering() {
  const [activeForm, setActiveForm] = useState<'quote' | 'inquiry' | null>(null)

  const QuoteForm = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg border">
      <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
        <FileText className="w-6 h-6" />
        Request for Quote
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input 
              type="text" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input 
              type="email" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your organization"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your phone"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product/Service Details *</label>
          <textarea 
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            placeholder="Describe the products or services you need..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="e.g., 5 units, 1 system"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
              <option value="">Select budget range</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-5000">$1,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-50000">$10,000 - $50,000</option>
              <option value="over-50000">Over $50,000</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all"
          >
            <Send className="w-4 h-4" />
            Submit Quote Request
          </button>
          <button 
            type="button"
            onClick={() => setActiveForm(null)}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )

  const InquiryForm = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg border">
      <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
        <MessageSquare className="w-6 h-6" />
        Quick Inquiry
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input 
              type="text" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input 
              type="email" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Enter your organization"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Question *</label>
          <textarea 
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            placeholder="What would you like to know?..."
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-accent text-primary rounded-md hover:opacity-90 transition-all"
          >
            <Send className="w-4 h-4" />
            Send Inquiry
          </button>
          <button 
            type="button"
            onClick={() => setActiveForm(null)}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">Quick Ordering</h1>

      <p className="text-gray-700 mb-10">
        Choose an option below to quickly submit a request for quotation or make an inquiry.
      </p>

      {activeForm === null && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Request Quote */}
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition-all bg-white">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Request for a Quote</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Submit product details or specifications and get a quotation from our team.
            </p>
            <button 
              onClick={() => setActiveForm('quote')}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all"
            >
              Go to Quote Form
            </button>
          </div>

          {/* Quick Inquiry */}
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition-all bg-white">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-6 h-6 text-accent" />
              <h2 className="text-xl font-semibold">Quick Inquiry</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Send us a short message or inquiry and our support team will respond promptly.
            </p>
            <button 
              onClick={() => setActiveForm('inquiry')}
              className="px-4 py-2 bg-accent text-primary rounded-md hover:opacity-90 transition-all"
            >
              Go to Inquiry Form
            </button>
          </div>
        </div>
      )}

      {/* Render Active Form */}
      {activeForm === 'quote' && <QuoteForm />}
      {activeForm === 'inquiry' && <InquiryForm />}

      {/* Response Times */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="text-center p-6 bg-blue-50 rounded-xl">
          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Quote Requests</h3>
          <p className="text-2xl font-bold text-blue-600 mb-1">24-48 Hours</p>
          <p className="text-sm text-gray-600">Detailed pricing and specifications</p>
        </div>

        <div className="text-center p-6 bg-green-50 rounded-xl">
          <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Quick Inquiries</h3>
          <p className="text-2xl font-bold text-green-600 mb-1">2-4 Hours</p>
          <p className="text-sm text-gray-600">Fast answers during business hours</p>
        </div>

        <div className="text-center p-6 bg-red-50 rounded-xl">
          <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Emergency Support</h3>
          <p className="text-2xl font-bold text-red-600 mb-1">&lt; 2 Hours</p>
          <p className="text-sm text-gray-600">Critical equipment support</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12 p-8 bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
        <h3 className="text-2xl font-bold mb-6 text-center">Need Immediate Assistance?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-1">Call Us</h4>
            <p>+256392916565 </p>
            <p>+256392177199</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-1">Email Us</h4>
            <p>labneedssolution@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-1">Visit Us</h4>
            <p>Kampala, Uganda</p>
          </div>
        </div>
      </div>
    </div>
  )
}
