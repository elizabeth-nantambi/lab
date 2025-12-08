import { Microscope, HandHeart, CheckCircle, ChevronLeft, ChevronRight, Package, MapPin, Truck, DollarSign, Users, Award, Phone, Shield, Heart, Star, Clock, Smile } from "lucide-react"
import { useState, useEffect } from "react"

interface HomeProps {
  setCurrentPage: (page: string) => void
}

export default function Home({ setCurrentPage }: HomeProps) {
  // Extended slideshow with 12+ high-quality images
  const heroImages = [
    "https://plus.unsplash.com/premium_photo-1683133827067-0638a6079379?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1659353887019-b142198f2668?q=80&w=1470&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661374868077-bac8d856b4df?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1707944746552-2dcec7587aa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
    "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
    "https://images.unsplash.com/photo-1725859189283-eaeb03a0a1c9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661497709409-527e332d59a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80",
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const featuredProducts = [
    {
      name: "Laboratory Glassware",
      image: "https://plus.unsplash.com/premium_photo-1661601679321-033fbcd5a1e5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Lab Supplies",
    },
    {
      name: "Digital Microscopes",
      image: "https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Laboratory Equipment",
    },
    {
      name: "Medical Monitors",
      image: "https://images.unsplash.com/photo-1630128295920-627fb9aff5a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Medical Devices",
    },
    
  ]

  return (
    <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced Hero Section */}
      <section 
        className="relative py-16 px-4 text-primary-foreground overflow-hidden h-[500px]"
        onMouseEnter={() => clearInterval}
        onMouseLeave={() => {
          const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
          }, 3500);
          return () => clearInterval(interval);
        }}
      >
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
                index === currentImageIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={image}
                alt={`Healthcare solution ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50" />
            </div>
          ))}
        </div>
        
        {/* Enhanced Animated Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse z-10" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-bounce z-10" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-ping z-10" style={{ animationDuration: '3s' }} />
        
        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-125 hover:rotate-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-125 hover:-rotate-12"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Enhanced dot indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-500 cursor-pointer hover:scale-150 ${
                index === currentImageIndex
                  ? 'bg-accent w-10 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-20 flex flex-col justify-center h-full">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 animate-in fade-in slide-in-from-top duration-1000 delay-200 self-center">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Trusted Healthcare Solutions Since 2009</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-1000 delay-300 animate-in fade-in slide-in-from-top bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent">
            Welcome to Laboratory Needs Solutions Limited
          </h2>
          
          <p className="text-xl opacity-95 mb-6 max-w-3xl mx-auto transform transition-all duration-1000 delay-600 animate-in fade-in slide-in-from-bottom leading-relaxed">
            Delivering superior laboratory equipment, medical devices, and complete diagnostic
            solutions to support hospitals, research institutions, and laboratories across East Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
            <button 
              onClick={() => setCurrentPage("products")}
              className="bg-accent text-primary px-8 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-accent/30 hover:scale-110 hover:-translate-y-2 transition-all duration-500 transform"
            >
              Explore Our Products
            </button>
            
            <button 
              onClick={() => setCurrentPage("contact")}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-xl font-semibold hover:bg-white/30 hover:scale-110 hover:-translate-y-2 transition-all duration-500 transform flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Eye-Catching Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-secondary/5 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700 delay-200">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Healthcare Professionals Trust Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are passionate about what we do - delivering excellence in every aspect of healthcare solutions
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Dedicated Team Support",
                description: "A dedicated team to always handle all customer needs with professional expertise and care.",
                highlight: "Click here to contact us",
                action: () => setCurrentPage("contact"),
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Truck className="w-12 h-12" />,
                title: "Prompt Delivery Service",
                description: "Prompt delivery to your door step - ensuring your healthcare solutions arrive when you need them.",
                highlight: "Same-day delivery available",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: <Smile className="w-12 h-12" />,
                title: "Service with a Smile",
                description: "Every interaction is handled with warmth, professionalism, and genuine care for your satisfaction.",
                highlight: "Customer satisfaction guaranteed",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Safety First Priority",
                description: "Safety is our top priority - we always invest in the safety of all our employees and customers.",
                highlight: "ISO certified processes",
                gradient: "from-red-500 to-pink-500"
              },
              {
                icon: <Package className="w-12 h-12" />,
                title: "Comprehensive Solutions",
                description: "A comprehensive range of healthcare solutions covering all your laboratory and medical needs.",
                highlight: "1000+ products available",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Passionate Excellence",
                description: "We are passionate about what we do - bringing innovation and excellence to healthcare.",
                highlight: "Award-winning service",
                gradient: "from-indigo-500 to-blue-500"
              },
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-6 hover:scale-105 hover:rotate-1 transition-all duration-700 transform animate-in fade-in slide-in-from-bottom cursor-pointer overflow-hidden"
                style={{ animationDelay: `${idx * 150 + 400}ms` }}
                onClick={feature.action}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-4 text-center">
                    {feature.title}
                  </h4>
                  
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {feature.highlight && (
                    <div className="text-center">
                      <span className={`inline-block bg-gradient-to-r ${feature.gradient} text-white px-3 py-1 rounded-full text-sm font-medium group-hover:scale-110 transition-transform duration-300`}>
                        {feature.highlight}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700 delay-200">
            <h3 className="text-4xl font-bold text-primary mb-4">Featured Healthcare Solutions</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most trusted and innovative products that are transforming healthcare delivery
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <div
                key={idx}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-8 hover:scale-110 hover:rotate-2 transform animate-in fade-in slide-in-from-bottom cursor-pointer"
                style={{ animationDelay: `${idx * 150 + 300}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x200?text=Product+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-8">
                  <div className="text-xs bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.category}
                  </div>
                  <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm">
                    Professional-grade equipment trusted by healthcare professionals
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 transform animate-in fade-in zoom-in duration-700 delay-800">
            <button 
              onClick={() => setCurrentPage("products")}
              className="group bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/30 hover:scale-125 hover:-translate-y-3 hover:rotate-2 transition-all duration-500 cursor-pointer transform flex items-center gap-3 mx-auto"
            >
              <Package className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Explore Our Complete Range
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-24 px-4 relative overflow-hidden text-primary-foreground">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 transform animate-in fade-in slide-in-from-top duration-700 delay-200">
              Trusted by Industry Leaders Across East Africa
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto transform animate-in fade-in slide-in-from-bottom duration-700 delay-400 leading-relaxed">
              Our commitment to excellence has earned us the trust of healthcare institutions and research facilities across the region
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                number: "500+", 
                label: "Satisfied Clients",
                description: "Healthcare facilities served",
                icon: <Users className="w-8 h-8" />
              },
              { 
                number: "1000+", 
                label: "Quality Products",
                description: "Laboratory supplies available",
                icon: <Package className="w-8 h-8" />
              },
              { 
                number: "15+", 
                label: "Years of Excellence",
                description: "Industry experience",
                icon: <Award className="w-8 h-8" />
              },
              { 
                number: "24/7", 
                label: "Customer Support",
                description: "Round-the-clock assistance",
                icon: <Clock className="w-8 h-8" />
              },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="text-center group transform animate-in fade-in slide-in-from-bottom duration-700 cursor-pointer"
                style={{ animationDelay: `${idx * 150 + 600}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-700 hover:scale-125 hover:-translate-y-6 hover:rotate-3">
                  <div className="text-accent mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:text-accent transition-all duration-500 group-hover:scale-125 transform">
                    {stat.number}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {stat.label}
                  </h4>
                  <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}