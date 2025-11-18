"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Home from "@/components/pages/home"
import AboutUs from "@/components/pages/about-us"
import Products from "@/components/pages/products"
import CustomerServices from "@/components/pages/customer-services"
import Contact from "@/components/pages/contact"
import Footer from "@/components/footer"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />
      case "about":
        return <AboutUs />
      case "products":
        return <Products />
      case "services":
        return <CustomerServices />
      case "contact":
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}
