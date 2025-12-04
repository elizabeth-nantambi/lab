import { useState, useEffect } from "react"
import { Users, Target, Award, Heart, Handshake, TrendingUp, CheckCircle, Lightbulb, Eye, Building2, Truck, Globe, Beaker, Stethoscope, Sparkles, ArrowRight, MapPin, Calendar, GraduationCap, Wrench, Shield } from "lucide-react"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [hoveredCapacity, setHoveredCapacity] = useState<number | null>(null)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const coreValues = [
    {
      title: "Customer First",
      description: "We put our customers' interests first and are dedicated to providing an individualized business experience that assures customer satisfaction and earns their unwavering loyalty. We ensure superlative quality, defect-free products and safety products which meet international safety standards.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      hoverColor: "group-hover:from-red-400 group-hover:to-pink-400"
    },
    {
      title: "Prompt & Ethical Service",
      description: "We are committed to deliver our services and supplies promptly. We are dedicated to achieving comprehensive customer satisfaction and is driven by the principles of an ethical business approach, respect and dignity for the individual.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      hoverColor: "group-hover:from-green-400 group-hover:to-emerald-400"
    },
    {
      title: "Professionalism & Respect",
      description: "We extend our professionalism and expertise to all our customers. We base our relationship on the core values of respect, transparency and mutual benefit. We are committed to attaining one hundred percent customer satisfaction.",
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      hoverColor: "group-hover:from-yellow-400 group-hover:to-orange-400"
    },
    {
      title: "Integrity",
      description: "We honour all commitments to our customers, employees and shareholders while conducting business with unwavering high standards of honesty, trust, professionalism and ethical behaviour.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      hoverColor: "group-hover:from-blue-400 group-hover:to-cyan-400"
    },
    {
      title: "Teamwork",
      description: "We work as one cohesive team from the smallest unit to the Board of directors while developing and retaining leaders who continually raise the bar, provide direction, remove barriers and empower people to successfully achieve goals.",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      hoverColor: "group-hover:from-purple-400 group-hover:to-violet-400"
    },
    {
      title: "Growth & Profitability",
      description: "Dedicated to continuous innovation and pursuit of new ideas and opportunities to accelerate profitable growth. We deliver value in all we do to assure consistently high returns to our shareholders.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      hoverColor: "group-hover:from-indigo-400 group-hover:to-blue-400"
    },
  ]

  const services = [
    {
      title: "Equipment Supply",
      description: "Trusted distributors of laboratory reagents and instruments, medical and hospital equipment, and related consumables serving hospitals, universities, and technological institutes.",
      icon: <Truck className="w-10 h-10" />,
      gradient: "from-blue-600 via-cyan-600 to-teal-600"
    },
    {
      title: "Equipment Servicing & Repairs",
      description: "Professional maintenance, calibration, and repair services for laboratory and medical equipment to ensure optimal performance and longevity.",
      icon: <Wrench className="w-10 h-10" />,
      gradient: "from-green-600 via-emerald-600 to-teal-600"
    },
    {
      title: "Training Programs",
      description: "Comprehensive training programs in various health-related fields to empower healthcare professionals and laboratory technicians with essential skills.",
      icon: <GraduationCap className="w-10 h-10" />,
      gradient: "from-purple-600 via-violet-600 to-indigo-600"
    },
    {
      title: "Strategic Partnership",
      description: "Door to door delivery, chain marketing, contracts, media adverts, promotional activities, digital marketing, donations, exhibitions and training programs.",
      icon: <Handshake className="w-10 h-10" />,
      gradient: "from-orange-600 via-red-600 to-pink-600"
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
      {/* Enhanced Hero Section with LNS Team Background */}
      <section className="relative py-24 px-4 text-primary-foreground overflow-hidden min-h-[500px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: `url('/LNS team.jpeg')`,
            backgroundPosition: 'center center'
          }}
        ></div>
        
        {/* Enhanced Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-secondary/80 to-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-accent/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/8 rounded-full blur-xl animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-top duration-1000 delay-200 hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Established 2009 • Companies Act (CAP.110)</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transform animate-in fade-in slide-in-from-top duration-1000 delay-300 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent hover:from-accent hover:to-white transition-all duration-500 drop-shadow-lg">
            About Laboratory Needs Solution Ltd
          </h1>
          
          <p className="text-xl opacity-95 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-600 mb-4 hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
            Your trusted partner in healthcare excellence since 2009 - Leading distributors of laboratory and medical equipment across East Africa
          </p>
          
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-700 hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Headquartered in Kampala, Uganda • Serving East Africa</span>
          </div>
          
          <div className="flex justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Products" },
              { number: "East Africa", label: "Regional Leader" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-md rounded-lg px-6 py-3 border border-white/25 hover:bg-white/20 hover:border-white/35 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer group shadow-lg hover:shadow-xl">
                <div className="text-2xl font-bold text-accent group-hover:text-white transition-colors duration-300 drop-shadow-md">{stat.number}</div>
                <div className="text-sm opacity-85 group-hover:opacity-100 transition-opacity duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Team Badge Floating Element */}
          <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30 animate-in fade-in slide-in-from-left duration-1000 delay-1100 hover:bg-white/25 hover:scale-105 transition-all duration-300 hidden md:flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Meet Our Expert Team</span>
          </div>
          
          {/* Company Badge Floating Element */}
          <div className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30 animate-in fade-in slide-in-from-right duration-1000 delay-1100 hover:bg-white/25 hover:scale-105 transition-all duration-300 hidden md:flex items-center gap-2">
            <Building2 className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">LNS Headquarters</span>
          </div>
        </div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </section>

      {/* Main Content with Better Spacing */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Enhanced Company Story */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.01] relative overflow-hidden group">
              {/* Enhanced Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl group-hover:w-60 group-hover:h-60 group-hover:from-primary/10 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-2xl group-hover:w-48 group-hover:h-48 group-hover:from-accent/10 transition-all duration-700"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-500">Our Story</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full group-hover:w-32 group-hover:h-2 transition-all duration-500"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    {[
                      "Laboratory Needs Solution was founded in 2009 and is registered as a private company limited by shares under the Companies Act (CAP.110). Headquartered in Kampala, Uganda, we operate across the East African region.",
                      "We are trusted distributors of laboratory reagents and instruments, medical and hospital equipment, and related consumables, serving hospitals, universities, and technological institutes. In addition to supply, we provide equipment servicing and repairs and offer training in various health-related fields.",
                      "Having carefully studied the common medical challenges in Uganda and neighboring countries, Laboratory Needs Solution developed a strategic approach to bridge existing gaps in healthcare and laboratory services."
                    ].map((text, idx) => (
                      <div key={idx} className="transform transition-all duration-500 hover:scale-105 hover:translate-x-2 group">
                        <p className="text-lg text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                          {idx === 0 ? (
                            <>
                              Laboratory Needs Solution was founded in <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded group-hover:bg-primary/20 transition-all duration-300">2009</span> and is registered as a private company limited by shares 
                              under the <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded group-hover:bg-primary/20 transition-all duration-300">Companies Act (CAP.110)</span>. Headquartered in <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded group-hover:bg-primary/20 transition-all duration-300">Kampala, Uganda</span>, 
                              we operate across the East African region.
                            </>
                          ) : text}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced Professional Image Section */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-2 group-hover:shadow-3xl">
                      <img
                        src="/LNS team.jpeg"
                        alt="Laboratory Needs Solution team - Our dedicated professionals serving East Africa"
                        className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      {/* Enhanced overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Enhanced floating badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 transform transition-all duration-500 group-hover:scale-105 group-hover:bg-white group-hover:shadow-lg">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary group-hover:scale-125 transition-transform duration-300" />
                          <span className="text-sm font-semibold text-primary">Our Team</span>
                        </div>
                      </div>
                      
                      {/* Enhanced corner element */}
                      <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:w-14 group-hover:h-14 group-hover:border-white/50 transition-all duration-500">
                        <Building2 className="w-6 h-6 text-white group-hover:scale-125 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Enhanced background decoration */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 group-hover:-inset-6 transition-all duration-700 -z-10"></div>
                  </div>
                </div>
                
                {/* Enhanced Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:from-primary/10 hover:to-secondary/10 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                        <Eye className="w-6 h-6 text-white group-hover:animate-pulse" />
                      </div>
                      <h4 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">Our Vision</h4>
                    </div>
                    <p className="text-lg text-foreground leading-relaxed italic border-l-4 border-primary pl-4 group-hover:border-l-6 group-hover:text-primary transition-all duration-300">
                      "To be the leading service providers and suppliers of medical and laboratory equipment and consumables in Africa."
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:from-accent/10 hover:to-primary/10 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                        <Target className="w-6 h-6 text-white group-hover:animate-pulse" />
                      </div>
                      <h4 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">Our Mission</h4>
                    </div>
                    <p className="text-lg text-foreground leading-relaxed italic border-l-4 border-accent pl-4 group-hover:border-l-6 group-hover:text-primary transition-all duration-300">
                      "To provide our customers with affordable range of quality services and products in the medical field."
                    </p>
                  </div>
                </div>

                {/* Enhanced Strategic Pledge */}
                <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:from-secondary/10 hover:to-accent/10 group">
                  <div className="text-center">
                    <h4 className="text-2xl font-semibold text-primary mb-4 flex items-center justify-center gap-2 group-hover:text-accent transition-colors duration-500">
                      <Heart className="w-6 h-6 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                      Strategic Pledge
                    </h4>
                    <p className="text-lg text-foreground leading-relaxed italic max-w-4xl mx-auto group-hover:text-primary transition-colors duration-300">
                      "We, the staff of Laboratory Needs Solution Ltd, take pride in the noble responsibility of offering laboratory and medical solutions, 
                      to improve the quality of health of our clients hence improving the quality of lives of the population at large. By living healthy lives, 
                      communities are empowered to face the future with dignity and realize their full potential."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Services Section */}
          <div>
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700 delay-400">
              <h3 className="text-4xl font-bold text-primary mb-4 hover:text-accent transition-colors duration-500">Our Comprehensive Services</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
                Beyond supply - we provide complete healthcare solutions including servicing, repairs, and training
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full hover:w-40 hover:h-2 transition-all duration-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-primary/15 transition-all duration-700 transform hover:-translate-y-8 hover:scale-110 hover:rotate-3 animate-in fade-in slide-in-from-bottom cursor-pointer overflow-hidden hover:bg-card/80"
                  style={{ animationDelay: `${idx * 150 + 600}ms` }}
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Enhanced Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-2xl mx-auto flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-xl group-hover:shadow-2xl`}>
                        {service.icon}
                      </div>
                      {hoveredService === idx && (
                        <>
                          <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} opacity-20 rounded-2xl blur-xl animate-pulse`}></div>
                          <div className="absolute -inset-2 bg-white/20 rounded-2xl animate-ping"></div>
                        </>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-4 group-hover:scale-105 transform">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed text-sm group-hover:scale-105 transform">
                      {service.description}
                    </p>
                    
                    {/* Service number indicator */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-125 transition-all duration-300">
                      <span className="text-xs font-bold text-primary group-hover:text-white">{idx + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Core Values */}
          <div>
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700 delay-800">
              <h3 className="text-4xl font-bold text-primary mb-4 hover:text-accent transition-colors duration-500">Our Core Values</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
                The fundamental principles that guide our operations and relationships with clients
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full hover:w-40 hover:h-2 transition-all duration-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 transform hover:-translate-y-8 hover:scale-110 hover:rotate-2 animate-in fade-in slide-in-from-bottom cursor-pointer overflow-hidden hover:bg-card/80"
                  style={{ animationDelay: `${idx * 100 + 1000}ms` }}
                  onMouseEnter={() => setHoveredValue(idx)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  {/* Enhanced Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${value.color} ${value.hoverColor} text-white transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg group-hover:shadow-2xl`}>
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-105 transform">
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed group-hover:scale-105 transform">
                      {value.description}
                    </p>
                    
                    {/* Value number indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-125 transition-all duration-300">
                      <span className="text-sm font-bold text-primary group-hover:text-white">{idx + 1}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Hover Effect */}
                  {hoveredValue === idx && (
                    <>
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-sm animate-pulse"></div>
                      <div className="absolute -inset-2 bg-white/10 rounded-2xl animate-ping"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Capacity Section */}
          <div>
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700 delay-1200">
              <h3 className="text-4xl font-bold text-primary mb-4 hover:text-accent transition-colors duration-500">Our Capacity & Infrastructure</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
                World-class facilities and expertise to serve your laboratory and healthcare needs across East Africa
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full hover:w-40 hover:h-2 transition-all duration-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capacities.map((capacity, idx) => (
                <div
                  key={idx}
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-10 text-center hover:shadow-2xl hover:shadow-primary/15 transition-all duration-700 transform hover:-translate-y-10 hover:scale-115 hover:rotate-3 animate-in fade-in slide-in-from-bottom cursor-pointer overflow-hidden hover:bg-card/80"
                  style={{ animationDelay: `${idx * 150 + 1400}ms` }}
                  onMouseEnter={() => setHoveredCapacity(idx)}
                  onMouseLeave={() => setHoveredCapacity(null)}
                >
                  {/* Enhanced Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capacity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-8">
                      <div className={`w-28 h-28 rounded-2xl mx-auto flex items-center justify-center bg-gradient-to-br ${capacity.gradient} text-white transition-all duration-500 group-hover:scale-140 group-hover:rotate-12 shadow-xl group-hover:shadow-3xl`}>
                        {capacity.icon}
                      </div>
                      {hoveredCapacity === idx && (
                        <>
                          <div className={`absolute -inset-6 bg-gradient-to-br ${capacity.gradient} opacity-20 rounded-2xl blur-xl animate-pulse`}></div>
                          <div className="absolute -inset-4 bg-white/20 rounded-2xl animate-ping"></div>
                          <div className="absolute -inset-2 bg-accent/20 rounded-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </>
                      )}
                    </div>
                    
                    <h4 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-4 group-hover:scale-110 transform">
                      {capacity.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed group-hover:scale-105 transform">
                      {capacity.description}
                    </p>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="mt-6">
                      <div className={`h-2 bg-border rounded-full overflow-hidden transition-all duration-500 ${
                        hoveredCapacity === idx ? 'h-4 bg-border/50' : ''
                      }`}>
                        <div className={`h-full bg-gradient-to-r ${capacity.gradient} transform transition-all duration-1000 ${
                          hoveredCapacity === idx ? 'w-full' : 'w-0'
                        } rounded-full relative overflow-hidden`}>
                          {hoveredCapacity === idx && (
                            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Product Categories */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-1600">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-primary mb-4 hover:text-accent transition-colors duration-500">Product Categories</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
                Comprehensive range of laboratory reagents, medical equipment, and healthcare solutions
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full hover:w-40 hover:h-2 transition-all duration-500"></div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:scale-[1.02] hover:bg-card/50 group">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {productCategories.map((category, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center gap-4 p-6 bg-background/50 rounded-xl hover:bg-background/90 transition-all duration-300 hover:scale-115 hover:-translate-y-3 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredProduct(idx)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    <div className="relative z-10">
                      <div className={`${category.color} transition-all duration-300 group-hover:scale-150 group-hover:rotate-12 group-hover:drop-shadow-lg`}>
                        {category.icon}
                      </div>
                      <span className="font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300 text-sm group-hover:scale-110 transform block">
                        {category.name}
                      </span>
                      {hoveredProduct === idx && (
                        <div className="flex flex-col items-center gap-2 mt-2">
                          <ArrowRight className="w-4 h-4 text-primary animate-bounce" />
                          <div className="w-8 h-0.5 bg-primary rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Clients Section */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-1800">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-primary mb-4 hover:text-accent transition-colors duration-500">Our Valued Clients</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
                Trusted by leading hospitals, universities, research organizations, and development partners across East Africa
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full hover:w-40 hover:h-2 transition-all duration-500"></div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:scale-[1.02] hover:bg-card/50 group">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clientTypes.map((client, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/15 hover:to-accent/15 border border-primary/10 hover:border-primary/40 rounded-xl p-6 text-center transition-all duration-300 hover:scale-110 hover:-translate-y-3 cursor-pointer hover:shadow-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredClient(idx)}
                    onMouseLeave={() => setHoveredClient(null)}
                  >
                    {/* Background effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="flex flex-col items-center gap-3 relative z-10">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-150 group-hover:rotate-12 transform group-hover:drop-shadow-lg">
                        {client.icon}
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm leading-tight group-hover:scale-105 transform">
                        {client.name}
                      </span>
                      
                      {hoveredClient === idx && (
                        <div className="absolute -inset-2 border-2 border-primary/30 rounded-xl animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center animate-in fade-in zoom-in duration-1000 delay-2000">
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-105 overflow-hidden group hover:from-primary/15 hover:via-secondary/15 hover:to-accent/15">
              {/* Enhanced Background Effects */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl group-hover:w-64 group-hover:h-64 group-hover:from-primary/20 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl group-hover:w-48 group-hover:h-48 group-hover:from-accent/20 transition-all duration-700"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-all duration-700 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-xl group-hover:scale-125 group-hover:shadow-2xl group-hover:rotate-12 transition-all duration-500">
                  <Handshake className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
                
                <h4 className="text-3xl font-bold text-primary mb-4 group-hover:text-accent group-hover:scale-110 transition-all duration-500">Ready to Partner with Us?</h4>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed group-hover:text-foreground group-hover:scale-105 transition-all duration-300">
                  Join hundreds of satisfied customers across East Africa who trust Laboratory Needs Solution Ltd for their laboratory reagents, 
                  medical equipment, training, and comprehensive healthcare solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 transform hover:scale-115 hover:-translate-y-2 flex items-center justify-center gap-2 hover:bg-primary/90 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    Contact Us Today
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300" />
                  </button>
                  <button className="group bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-accent/40 transition-all duration-500 transform hover:scale-115 hover:-translate-y-2 flex items-center justify-center gap-2 hover:bg-accent/90 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    View Our Products
                    <Eye className="w-4 h-4 group-hover:scale-150 group-hover:rotate-12 transition-transform duration-300" />
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
