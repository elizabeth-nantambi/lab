"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Map } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
        <p className="text-lg text-muted-foreground">
          Get in touch with our team for inquiries, support, or to schedule a consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Office Address",
              content: "123 Laboratory Street\nTech City, TC 12345\nUnited States",
            },
            {
              icon: <Phone className="w-8 h-8" />,
              title: "Phone",
              content: "Main: +1 (555) 123-4567\nSupport: +1 (555) 987-6543",
            },
            {
              icon: <Mail className="w-8 h-8" />,
              title: "Email",
              content: "info@lnsl.com\nsupport@lnsl.com",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Business Hours",
              content: "Mon - Fri: 8:00 AM - 6:00 PM\nSat - Sun: 9:00 AM - 2:00 PM",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6">
              <div className="text-primary mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line text-sm">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="training">Training Programs</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 bg-secondary rounded-lg overflow-hidden h-96">
        <iframe
          src="https://maps.app.goo.gl/B8uJuctzCdyo6YAd6"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Laboratory Needs Solutions Location"
        />
      </div>
    </div>
  )
}
