import { 
  Microscope,
  Wrench,
  Cog,
  Package,
  Settings,
  GraduationCap,
  Phone,
  Truck,
  
  CheckCircle,
  Clock,
  Shield,
  Award,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

export default function CustomerServices() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Biomedical Services",
      description: "Professional biomedical engineering services ensuring optimal performance of medical and laboratory equipment.",
      features: [
        "Equipment Assessment",
        "Calibration & Validation",
        "Performance Optimization",
        "Safety Compliance"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Equipment Installation",
      description: "Expert installation of laboratory and medical equipment with strict adherence to industry standards.",
      features: [
        "Site Preparation",
        "Professional Setup",
        "System Configuration",
        "Operational Testing"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Regular Servicing",
      description: "Preventive maintenance services designed to extend equipment lifespan and avoid downtime.",
      features: [
        "Scheduled Maintenance",
        "Component Checks",
        "Cleaning & Calibration",
        "Performance Reports"
      ],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Spare Parts",
      description: "Genuine, high-quality replacement parts for a wide range of laboratory and medical equipment.",
      features: [
        "OEM Certified Parts",
        "Fast Availability",
        "Warranty Coverage",
        "Compatibility Assurance"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Repairs",
      description: "Reliable diagnostic and repair services to restore equipment performance and functionality.",
      features: [
        "Fault Diagnostics",
        "Component Repairs",
        "Part Replacement",
        "Post-Repair Testing"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "User Training",
      description: "Comprehensive training for equipment users, laboratory staff, and operators to ensure safe and effective usage.",
      features: [
        "Hands-On Training",
        "Safety Protocols",
        "Operational Skills",
        "Certification Programs"
      ],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Technical Assistance",
      description: "Dedicated support team providing assistance, troubleshooting, and real-time guidance.",
      features: [
        "24/7 Support Line",
        "Remote Troubleshooting",
        "System Diagnostics",
        "Guidance & Advice"
      ],
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Door-to-Door Delivery",
      description: "Fast, secure, and reliable delivery of equipment directly to your facility.",
      features: [
        "Secure Packaging",
        "Regional Delivery",
        "Timely Dispatch",
        "On-Site Receiving Support"
      ],
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const serviceExcellence = [
    { 
      label: "Emergency Response", 
      time: "< 2 Hours",
      description: "Rapid response for critical equipment failures",
      icon: <Clock className="w-8 h-8" />
    },
    { 
      label: "Standard Support", 
      time: "< 24 Hours",
      description: "Quick resolution for routine service requests",
      icon: <Shield className="w-8 h-8" />
    },
    { 
      label: "Delivery Time", 
      time: "2-5 Days",
      description: "Fast door-to-door delivery across East Africa",
      icon: <Truck className="w-8 h-8" />
    },
  ];

  return (
    <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20 px-4 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 animate-in fade-in slide-in-from-top duration-1000 delay-200">
            <Settings className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Professional Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-1000 delay-300">
            Customer Services
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-600 leading-relaxed">
            Comprehensive support and services to ensure optimal performance of your laboratory equipment and complete satisfaction with our healthcare solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/[0.02] bg-[size:60px_60px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-top duration-700 delay-200">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-primary/20">
              <Award className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Our Services</span>
            </div>
            <h2 className="text-5xl font-bold text-primary mb-6">Professional Healthcare Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From biomedical engineering to user training, we provide comprehensive support for all your healthcare equipment needs
            </p>
            <div className="w-40 h-2 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-8 hover:scale-105 hover:rotate-2 transition-all duration-700 transform animate-in fade-in slide-in-from-bottom cursor-pointer overflow-hidden hover:bg-card/80"
                style={{ animationDelay: `${idx * 150 + 300}ms` }}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-4 text-center group-hover:scale-105 transform">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center text-sm leading-relaxed mb-6 group-hover:scale-105 transform">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-xs">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} />
                        <span className="group-hover:text-foreground text-muted-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {hoveredService === idx && (
                  <>
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-sm animate-pulse"></div>
                    <div className="absolute -inset-4 bg-white/10 rounded-3xl animate-ping"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Excellence Section */}
      <section className="py-24 px-4 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-top duration-700 delay-200">
            <h2 className="text-5xl font-bold text-primary mb-6">Service Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to fast, reliable, and professional service delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {serviceExcellence.map((item, idx) => (
              <div 
                key={idx} 
                className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-700 hover:scale-110 hover:-translate-y-8 hover:rotate-2 transform animate-in fade-in slide-in-from-bottom cursor-pointer overflow-hidden"
                style={{ animationDelay: `${idx * 150 + 400}ms` }}
              >
                <div className="text-primary mb-6 group-hover:text-accent transition-colors duration-300 group-hover:scale-125 group-hover:rotate-12 transform flex justify-center">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-primary mb-4 group-hover:text-accent transition-all duration-500 group-hover:scale-125 transform">
                  {item.time}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 px-4 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-top duration-700 delay-200">
            <h2 className="text-5xl font-bold text-primary mb-6">Why Choose Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our professional, reliable, and comprehensive service approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700 delay-400">
              <div className="space-y-8">
                {[
                  {
                    title: "Experienced Professionals",
                    description: "Our team consists of certified biomedical engineers, technicians, and specialists with years of experience in laboratory and medical equipment.",
                    icon: <Award className="w-6 h-6" />,
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Quality Guarantee",
                    description: "All our services come with comprehensive quality assurance and warranty coverage for your complete peace of mind.",
                    icon: <Shield className="w-6 h-6" />,
                    gradient: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Comprehensive Coverage",
                    description: "From biomedical services to user training, we provide end-to-end solutions for all your laboratory and medical equipment needs.",
                    icon: <CheckCircle className="w-6 h-6" />,
                    gradient: "from-purple-500 to-violet-500"
                  },
                  {
                    title: "Regional Expertise",
                    description: "Deep understanding of East African market requirements, regulatory compliance, and local operational challenges.",
                    icon: <Settings className="w-6 h-6" />,
                    gradient: "from-orange-500 to-red-500"
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} text-white flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-in fade-in slide-in-from-right duration-700 delay-600">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-10 text-center border border-border/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-6">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                  Contact us today to discuss your laboratory service needs and get a customized solution tailored to your requirements.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 hover:scale-105 hover:-translate-y-2 transition-all duration-500 text-lg">
                    Request Service Quote
                  </button>
                  <button className="w-full bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-accent/30 hover:scale-105 hover:-translate-y-2 transition-all duration-500 text-lg">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
