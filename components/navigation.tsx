"use client"

import { useState } from "react"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [logoError, setLogoError] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Who We Are" },
    { id: "products", label: "Products" },
    { id: "services", label: "Customer Services" },
    { id: "quick-ordering", label: "Quick Ordering" },
    { id: "contact", label: "Contact Us" },
  ]

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
              {!logoError ? (
                <img 
                  src="/Laboratory%20Needs%20logo%20(1)_page-0001.png" 
                  alt="Laboratory Needs Solution Limited Logo" 
                  className=" object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-bold text-primary text-lg">L</span>
              )}
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Laboratory Needs Solution Limited</h1>
              <p className="text-xs opacity-90">A Complete Solution To Your Laboratory Needs</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-1 sm:gap-4 flex-wrap justify-center md:justify-end">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-2 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                  currentPage === item.id 
                    ? "bg-accent text-primary shadow-lg scale-105" 
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