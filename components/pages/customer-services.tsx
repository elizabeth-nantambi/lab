import { Wrench, Truck, Phone, GraduationCap, Settings, Building } from "lucide-react"

export default function CustomerServices() {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Custom manufacturing of laboratory equipment and medical devices to meet specific requirements",
      features: ["Custom Equipment Design", "Quality Assurance Testing", "Regulatory Compliance", "Scalable Production"],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installation and Repair",
      description: "Professional installation and comprehensive repair services for all laboratory equipment",
      features: ["Expert Installation", "Equipment Calibration", "Emergency Repairs", "Component Replacement"],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Technical Assistance",
      description: "Round-the-clock technical support to ensure optimal equipment performance",
      features: ["24/7 Hotline Support", "Remote Troubleshooting", "Equipment Diagnostics", "Performance Optimization"],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Door-to-Door Delivery",
      description: "Reliable delivery service ensuring safe transport of equipment directly to your facility",
      features: ["Secure Packaging", "Timely Delivery", "Installation Support", "Tracking Service"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs to maximize equipment lifespan and reliability",
      features: ["Regular Inspections", "Parts Replacement", "Performance Testing", "Maintenance Reports"],
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "User Trainings",
      description: "Comprehensive training programs for laboratory staff and equipment operators",
      features: ["Operator Training", "Safety Protocols", "Best Practices", "Certification Programs"],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-4 text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-1000 delay-300">
            Customer Services
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            Comprehensive support and services to ensure optimal performance of your laboratory equipment and complete satisfaction.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary animate-in fade-in slide-in-from-top duration-700 delay-200">
            Our Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-in fade-in slide-in-from-bottom group"
                style={{ animationDelay: `${idx * 150 + 300}ms` }}
              >
                <div className="text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-primary mb-4">{service.title}</h4>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <span className="text-accent font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Excellence Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center animate-in fade-in slide-in-from-top duration-700 delay-200">
            Service Excellence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { 
                label: "Emergency Response", 
                time: "< 2 Hours",
                description: "Rapid response for critical equipment failures"
              },
              { 
                label: "Standard Support", 
                time: "< 24 Hours",
                description: "Quick resolution for routine service requests"
              },
              { 
                label: "Delivery Time", 
                time: "2-5 Days",
                description: "Fast door-to-door delivery across East Africa"
              },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-card rounded-xl p-8 border border-border hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${idx * 150 + 400}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.time}</div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center animate-in fade-in slide-in-from-top duration-700 delay-200">
            Why Choose Our Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700 delay-400">
              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Professionals",
                    description: "Our team consists of certified technicians and engineers with years of experience in laboratory equipment."
                  },
                  {
                    title: "Quality Guarantee",
                    description: "All our services come with quality assurance and warranty coverage for your peace of mind."
                  },
                  {
                    title: "Comprehensive Coverage",
                    description: "From manufacturing to maintenance, we provide end-to-end solutions for all your laboratory needs."
                  },
                  {
                    title: "Regional Expertise",
                    description: "Deep understanding of East African market requirements and regulatory compliance."
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-in fade-in slide-in-from-right duration-700 delay-600">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold text-primary mb-6">Ready to Get Started?</h4>
                <p className="text-muted-foreground mb-8">
                  Contact us today to discuss your laboratory service needs and get a customized solution.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
                    Request Service Quote
                  </button>
                  <button className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/25 hover:scale-105 transition-all duration-300">
                    Schedule Consultation
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
