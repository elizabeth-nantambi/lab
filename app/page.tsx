"use client"

import { useState } from "react"
import Navigation from "../components/navigation"
import Home from "../components/pages/home"
import About from "../components/pages/about-us"
import Products from "../components/pages/products"
import CustomerServices from "../components/pages/customer-services"
import Contact from "../components/pages/contact"
import Footer from "../components/footer"
import PageTransition from "../components/page-transition"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />
      case "about":
        return <About />
      case "products":
        return <Products />
      case "services":
        return <CustomerServices />
      case "contact":
        return <Contact />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageTransition currentPage={currentPage}>
        {renderPage()}
      </PageTransition>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}
