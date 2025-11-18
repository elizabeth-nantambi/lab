import { Microscope, HandHeart, CheckCircle } from "lucide-react"

interface HomeProps {
  setCurrentPage: (page: string) => void
}

export default function Home({ setCurrentPage }: HomeProps) {
  const featuredProducts = [
    {
      name: "Hospital Bed",
      image: "https://labneedssolution.co.ug/wp-content/uploads/2020/06/Hospital-bed-600x364.jpg",
      category: "Hospital Furniture",
    },
    {
      name: "Cryogenic Vials",
      image: "https://www.corning.com/catalog/cls/products/c/corningExternalThreadCryogenicVials/images/corningExternalThreadCryogenicVials_A.jpg/_jcr_content/renditions/product.zoom.1200.jpg",
      category: "Storage & Freezing",
    },
    {
      name: "Whatman 3MM Filter Paper",
      image: "https://www.tischscientific.com/mm5/graphics/00000001/2/Whatman_Chromatography_Paper_3MM-CHR.webp",
      category: "Filtration & Media",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 px-4 text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Laboratory Needs Solution Limited
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Delivering superior laboratory equipment, medical devices, and complete diagnostic
            solutions to support hospitals, research institutions, and laboratories across East Africa.
          </p>
          <button 
            onClick={() => setCurrentPage("products")}
            className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Explore Our Products
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="w-10 h-10" />,
                title: "Advanced Technology",
                description: "State-of-the-art laboratory equipment and solutions.",
              },
              {
                icon: <HandHeart className="w-10 h-10" />,
                title: "Expert Support",
                description: "Dedicated technical support and consultation services.",
              },
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: "Quality Assured",
                description: "All products meet international quality standards.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ Featured Products Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Featured Products</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full inline-block mb-3">
                    {product.category}
                  </div>
                  <h4 className="text-xl font-semibold text-primary">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => setCurrentPage("products")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 py-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Trusted by Industry Leaders</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of healthcare institutions and research facilities across the region.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                number: "500+", 
                label: "Satisfied Clients",
                description: "Healthcare facilities served"
              },
              { 
                number: "1000+", 
                label: "Quality Products",
                description: "Laboratory supplies available"
              },
              { 
                number: "20+", 
                label: "Years of Excellence",
                description: "Industry experience"
              },
              { 
                number: "24/7", 
                label: "Customer Support",
                description: "Round-the-clock assistance"
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {stat.number}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">
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
