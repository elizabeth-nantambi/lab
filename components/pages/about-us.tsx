import { useState, useEffect } from "react"
import { Users, Target, Award, Heart, Handshake, TrendingUp, CheckCircle, Lightbulb, Eye, Building2, Truck, Globe, Beaker, Stethoscope, Sparkles, ArrowRight } from "lucide-react"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [hoveredCapacity, setHoveredCapacity] = useState<number | null>(null)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const coreValues = [
    {
      title: "Customer First",
      description: "We put our customers' interests first and are dedicated to providing an individualized business experience that assures customer satisfaction and earns their unwavering loyalty. We ensure superlative quality, defect-free products and safety products which meet international safety standards.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Prompt & Ethical Service",
      description: "We are committed to deliver our services and supplies promptly. We are dedicated to achieving comprehensive customer satisfaction and is driven by the principles of an ethical business approach, respect and dignity for the individual.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Professionalism & Respect",
      description: "We extend our professionalism and expertise to all our customers. We base our relationship on the core values of respect, transparency and mutual benefit. We are committed to attaining one hundred percent customer satisfaction.",
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Integrity",
      description: "We honour all commitments to our customers, employees and shareholders while conducting business with unwavering high standards of honesty, trust, professionalism and ethical behaviour.",
      icon: <Handshake className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Teamwork",
      description: "We work as one cohesive team from the smallest unit to the Board of directors while developing and retaining leaders who continually raise the bar, provide direction, remove barriers and empower people to successfully achieve goals.",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Growth & Profitability",
      description: "Dedicated to continuous innovation and pursuit of new ideas and opportunities to accelerate profitable growth. We deliver value in all we do to assure consistently high returns to our shareholders.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    },
  ]

  const capacities = [
    {
      title: "Expert Team",
      description: "Highly energetic and experienced team of medical professionals, laboratory scientists, procurement and supply chain controllers, bio-med engineers, quality assurance experts and marketing and sales team.",
      icon: <Users className="w-10 h-10" />,
      gradient: "from-blue-600 via-purple-600 to-indigo-600"
    },
    {
      title: "Infrastructure",
      description: "Warehouse for storage purpose, cold storage, transport vans and delivery trucks, service center, internet and stable electric supply.",
      icon: <Building2 className="w-10 h-10" />,
      gradient: "from-emerald-600 via-teal-600 to-cyan-600"
    },
    {
      title: "Global Partnerships",
      description: "International business partners and adequate financial resources to support our operations and growth.",
      icon: <Globe className="w-10 h-10" />,
      gradient: "from-orange-600 via-red-600 to-pink-600"
    },
  ]

  const clientTypes = [
    { name: "Hospitals & Clinics", icon: <Stethoscope className="w-5 h-5" /> },
    { name: "Academic/University Research Labs", icon: <Beaker className="w-5 h-5" /> }, 
    { name: "Biotech Companies", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Development Partners", icon: <Handshake className="w-5 h-5" /> },
    { name: "Contract Research Organizations", icon: <Building2 className="w-5 h-5" /> },
    { name: "Industrial Development Labs", icon: <Target className="w-5 h-5" /> },
    { name: "Agricultural Research Labs", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Reference Laboratories", icon: <Award className="w-5 h-5" /> }
  ]

  const productCategories = [
    { name: "Hospital Equipment", icon: <Stethoscope className="w-6 h-6" />, color: "text-red-500" },
    { name: "Laboratory Equipment", icon: <Beaker className="w-6 h-6" />, color: "text-blue-500" },
    { name: "Chemicals & Reagents", icon: <CheckCircle className="w-6 h-6" />, color: "text-green-500" },
    { name: "Medical Devices", icon: <Heart className="w-6 h-6" />, color: "text-pink-500" },
    { name: "Consumables", icon: <Target className="w-6 h-6" />, color: "text-purple-500" },
    { name: "Lab ware", icon: <Award className="w-6 h-6" />, color: "text-yellow-500" },
    { name: "Diagnostic Devices", icon: <Eye className="w-6 h-6" />, color: "text-indigo-500" },
    { name: "IVD Kits", icon: <Lightbulb className="w-6 h-6" />, color: "text-orange-500" },
  ]

  return (
    <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced Hero Section */}
      <section className="relative py-24 px-4 text-primary-foreground overflow-hidden min-h-[500px]">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-accent/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-ping" style={{ animationDuration: '4s' }}></div>
        
        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-top duration-1000 delay-200">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Established 2009</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transform animate-in fade-in slide-in-from-top duration-1000 delay-300 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            About Laboratory Needs Solution Ltd
          </h1>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            Your trusted partner in laboratory excellence since 2009 - Leading suppliers of medical and laboratory equipment across Africa
          </p>
          
          <div className="flex justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm opacity-80">Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Better Spacing */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Enhanced Company Story */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.01] relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="transform transition-all duration-500 hover:scale-105">
                      <p className="text-lg text-foreground leading-relaxed">
                        Laboratory Needs Solution was founded in <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">2009</span> and registered as a private company limited by shares 
                        under the companies act (CAP.110). We are located in <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">Kampala, Uganda</span> and are essentially a supplier 
                        of laboratory reagents and instruments and related consumables to hospitals, universities and technological institutes.
                      </p>
                    </div>
                    
                    <div className="transform transition-all duration-500 hover:scale-105">
                      <p className="text-lg text-foreground leading-relaxed">
                        Having studied the common medical challenges in Uganda and the neighboring countries, Laboratory Needs Solution came up with a strategy to address the gap. 
                        We are therefore committed to providing quality and sustainable services holistically.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Serving East Africa</h3>
                      <p className="text-muted-foreground">Providing quality laboratory solutions across the region</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-lg group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-primary">Our Vision</h4>
                    </div>
                    <p className="text-lg text-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                      "To be the leading service providers and suppliers of medical and laboratory equipment and consumables in Africa."
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-lg group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-primary">Our Mission</h4>
                    </div>
                    <p className="text-lg text-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                      "To provide our customers with affordable range of quality services and products in medical field."
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                  <div className="text-center">
                    <h4 className="text-2xl font-semibold text-primary mb-4 flex items-center justify-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      Strategic Pledge
                    </h4>
                    <p className="text-lg text-foreground leading-relaxed italic max-w-4xl mx-auto">
                      "We, the staff of LNS, take pride in the noble responsibility of offering laboratory solutions, to improve the quality of health of clients 
                      hence improving the quality of lives of the population at large by living healthy lives, facing the future with dignity and realize their full potential."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Core Values */}
          <div>
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700 delay-400">
              <h3 className="text-4xl font-bold text-primary mb-4">Our Core Values</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The fundamental principles that guide our operations and relationships
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 hover:rotate-1 animate-in fade-in slide-in-from-bottom cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${idx * 100 + 600}ms` }}
                  onMouseEnter={() => setHoveredValue(idx)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${value.color} text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg`}>
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  {hoveredValue === idx && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-sm animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Capacity Section */}
          <div>
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700 delay-800">
              <h3 className="text-4xl font-bold text-primary mb-4">Our Capacity & Infrastructure</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                World-class facilities and expertise to serve your laboratory needs
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capacities.map((capacity, idx) => (
                <div
                  key={idx}
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-10 text-center hover:shadow-2xl hover:shadow-primary/15 transition-all duration-700 transform hover:-translate-y-8 hover:scale-110 hover:rotate-2 animate-in fade-in slide-in-from-bottom cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${idx * 150 + 1000}ms` }}
                  onMouseEnter={() => setHoveredCapacity(idx)}
                  onMouseLeave={() => setHoveredCapacity(null)}
                >
                  {/* Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capacity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-8">
                      <div className={`w-28 h-28 rounded-2xl mx-auto flex items-center justify-center bg-gradient-to-br ${capacity.gradient} text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-xl`}>
                        {capacity.icon}
                      </div>
                      {hoveredCapacity === idx && (
                        <div className={`absolute -inset-4 bg-gradient-to-br ${capacity.gradient} opacity-20 rounded-2xl blur-xl animate-pulse`}></div>
                      )}
                    </div>
                    
                    <h4 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-4">
                      {capacity.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      {capacity.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className={`h-2 bg-border rounded-full overflow-hidden transition-all duration-500 ${
                        hoveredCapacity === idx ? 'h-3' : ''
                      }`}>
                        <div className={`h-full bg-gradient-to-r ${capacity.gradient} transform transition-all duration-1000 ${
                          hoveredCapacity === idx ? 'w-full' : 'w-0'
                        } rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Product Categories */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-1200">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-primary mb-4">Product Categories</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of laboratory and medical equipment
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:scale-[1.01]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {productCategories.map((category, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center gap-4 p-6 bg-background/50 rounded-xl hover:bg-background/80 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20"
                    onMouseEnter={() => setHoveredProduct(idx)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className={`${category.color} transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                      {category.icon}
                    </div>
                    <span className="font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300 text-sm">
                      {category.name}
                    </span>
                    {hoveredProduct === idx && (
                      <ArrowRight className="w-4 h-4 text-primary animate-bounce" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Clients Section */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-1400">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-primary mb-4">Our Valued Clients</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by leading organizations across various sectors
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:scale-[1.01]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clientTypes.map((client, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 border border-primary/10 hover:border-primary/30 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-125 group-hover:rotate-12">
                        {client.icon}
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm leading-tight">
                        {client.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center animate-in fade-in zoom-in duration-1000 delay-1600">
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-700 hover:scale-105 overflow-hidden">
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-xl">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-3xl font-bold text-primary mb-4">Ready to Partner with Us?</h4>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of satisfied customers who trust Laboratory Needs Solution Ltd for their laboratory and medical equipment needs across Africa.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center gap-2">
                    Contact Us Today
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="group bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center gap-2">
                    View Our Products
                    <Eye className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
