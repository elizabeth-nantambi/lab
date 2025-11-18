export default function CustomerServices() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Customer Services</h2>
        <p className="text-lg text-muted-foreground">
          Comprehensive support and services to ensure optimal performance of your laboratory equipment.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[
          {
            title: "Technical Support",
            description: "Round-the-clock technical assistance for all equipment issues",
            features: ["24/7 Hotline", "Email Support", "Remote Troubleshooting", "On-site Repairs"],
          },
          {
            title: "Training Programs",
            description: "Comprehensive training for laboratory staff and technicians",
            features: ["Operator Training", "Advanced Techniques", "Safety Protocols", "Certification Programs"],
          },
          {
            title: "Maintenance Services",
            description: "Preventive and corrective maintenance to maximize equipment lifespan",
            features: ["Scheduled Maintenance", "Emergency Repairs", "Parts Replacement", "Performance Optimization"],
          },
          {
            title: "Consulting Services",
            description: "Expert consultation for laboratory setup and optimization",
            features: ["Laboratory Design", "Workflow Analysis", "Equipment Selection", "Compliance Guidance"],
          },
        ].map((service, idx) => (
          <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-primary mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-6">{service.description}</p>
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

      {/* Response Time Section */}
      <div className="bg-secondary rounded-lg p-12 mb-16">
        <h3 className="text-2xl font-bold text-primary mb-8 text-center">Service Response Times</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Emergency Calls", time: "< 2 Hours" },
            { label: "Standard Support", time: "< 24 Hours" },
            { label: "Email Inquiries", time: "< 48 Hours" },
          ].map((item, idx) => (
            <div key={idx} className="bg-card rounded-lg p-6 border border-border">
              <p className="text-muted-foreground text-sm mb-2">{item.label}</p>
              <p className="text-3xl font-bold text-primary">{item.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Tiers */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-8 text-center">Service Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Basic",
              price: "$99/month",
              features: ["Email Support", "Monthly Maintenance", "Priority Response"],
            },
            {
              name: "Professional",
              price: "$249/month",
              features: ["24/7 Phone Support", "Weekly Maintenance", "Emergency Service", "Software Updates"],
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: ["Dedicated Account Manager", "On-site Support", "Custom Solutions", "Training Included"],
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 border-2 transition-all ${idx === 1 ? "border-primary bg-primary/5" : "border-border bg-card"}`}
            >
              <h4 className="text-xl font-bold text-primary mb-2">{tier.name}</h4>
              <p className="text-2xl font-bold text-primary mb-6">{tier.price}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                  idx === 1
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/90"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
