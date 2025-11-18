"use client"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "services", label: "Customer Services" },
    { id: "contact", label: "Contact Us" },
  ]

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-primary">
              L
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Laboratory Needs Solution Limited</h1>
              <p className="text-xs opacity-90">Premium Lab Equipment & Services</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-1 sm:gap-4 flex-wrap justify-center md:justify-end">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-2 sm:px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  currentPage === item.id ? "bg-accent text-primary" : "hover:bg-primary-foreground/10"
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
