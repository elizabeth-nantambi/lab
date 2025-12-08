"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [logoError, setLogoError] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Who We Are" },
    { id: "products", label: "Products" },
    { id: "services", label: "Customer Services" },
    { id: "quick-ordering", label: "Quick Ordering" },
    { id: "contact", label: "Contact Us" },
  ]

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false) // Close mobile menu after selection
  }

  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Fixed width to prevent compression */}
          <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 flex-shrink-0">
              {!logoError ? (
                <img 
                  src="/Laboratory%20Needs%20logo%20(1)_page-0001.png" 
                  alt="Laboratory Needs Solution Limited Logo" 
                  className="w-full h-full object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-bold text-primary text-lg">L</span>
              )}
            </div>
            
            {/* Responsive company name */}
            <div className="hidden lg:block min-w-0">
              <h1 className="text-lg xl:text-xl font-bold leading-tight truncate">Laboratory Needs Solution Limited</h1>
              <p className="text-xs opacity-90 leading-tight truncate">A Complete Solution To Your Laboratory Needs</p>
            </div>
            
            {/* Shorter version for medium screens */}
            <div className="hidden md:block lg:hidden min-w-0">
              <h1 className="text-base font-bold leading-tight truncate">Lab Needs Solutions</h1>
              <p className="text-xs opacity-90 leading-tight truncate">Complete Lab Solutions</p>
            </div>
            
            {/* Mobile version */}
            <div className="block md:hidden min-w-0">
              <h1 className="text-sm font-bold leading-tight truncate">LNS Ltd</h1>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                  currentPage === item.id 
                    ? "bg-accent text-primary shadow-lg scale-105" 
                    : "hover:bg-primary-foreground/10 hover:shadow-md"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Tablet Navigation - Shorter labels */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "products", label: "Products" },
              { id: "services", label: "Services" },
              { id: "quick-ordering", label: "Quick Order" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2 py-2 rounded-md text-xs font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                  currentPage === item.id 
                    ? "bg-accent text-primary shadow-lg scale-105" 
                    : "hover:bg-primary-foreground/10 hover:shadow-md"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-primary-foreground/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 border-t border-primary-foreground/20' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.id
                    ? "bg-accent text-primary shadow-lg"
                    : "hover:bg-primary-foreground/10 hover:shadow-md"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}