export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary mb-6">About Laboratory Needs Solution Ltd</h2>
        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            Laboratory needs solution was founded in 2009 and registered as a private company limited by shares 
            under the companies act (CAP.110). We are located in Kampala, Uganda and are experienced in the  supply 
            of laboratory reagents and instrument and related consumables,  hospitals equipment, universities and 
            technological institutes requirements and offer consultancy in the setup of science facilities. We do servicing 
            & Repairs of equipment, and we offer trainings in health related fields. 
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Our mission is to empower scientific advancement by providing cutting-edge laboratory equipment, expert
            consultation, and outstanding customer support. We are committed to ensuring that every laboratory has
            access to the tools and resources they need to conduct groundbreaking research and deliver accurate
            diagnostic results.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Innovation",
              description: "Continuously advancing laboratory technology and solutions",
            },
            {
              title: "Excellence",
              description: "Delivering the highest quality products and services",
            },
            {
              title: "Integrity",
              description: "Building trust through transparency and ethical practices",
            },
            {
              title: "Partnership",
              description: "Working collaboratively with clients for mutual success",
            },
          ].map((value, idx) => (
            <div key={idx} className="bg-secondary rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold text-primary mb-2">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-8">Our Leadership Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Sarah Johnson", role: "Chief Executive Officer" },
            { name: "Dr. Michael Chen", role: "Chief Technology Officer" },
            { name: "James Williams", role: "Director of Operations" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold text-primary">{member.name}</h4>
              <p className="text-muted-foreground text-sm mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
