"use client"

import { Phone, Mail, MapPin } from "lucide-react"

interface FooterProps {
  setCurrentPage: (page: string) => void
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">About LNSL</h3>
            <p className="text-sm opacity-90">
              Leading provider of laboratory equipment and solutions for research and clinical facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "products", label: "Products" },
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => setCurrentPage(link.id)} className="hover:text-accent transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Equipment Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +256392916565
                +256392177199
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                 labneedssolution@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                 Plot 212 Nsalo Road, Old Kampala
                 P.O Box 10341 Kampala, Uganda
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 Laboratory Needs Solution Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
