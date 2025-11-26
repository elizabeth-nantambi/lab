import { useState, useEffect } from "react"
import { Search, Filter, Star, ShoppingCart, Eye } from "lucide-react"

export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      name: "Burette Infusion Set",
      category: "Infusion & Delivery",
      description: "Sterile infusion set with calibrated chamber for accurate fluid dosing.",
      specs: "100–150 mL burette",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzeKoLnRV30W0tjBUwk6KLqLrFHTC-sMJTQ&s",
    },
    {
      name: "Whatman 3MM Filter Paper",
      category: "Filtration & Media",
      description: "High-quality cellulose filter papers for laboratory filtration.",
      specs: "110 mm, qualitative",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://www.tischscientific.com/mm5/graphics/00000001/2/Whatman_Chromatography_Paper_3MM-CHR.webp",
    },
    {
      name: "Cryogenic Vials",
      category: "Storage & Freezing",
      description: "Leak-proof cryogenic tubes designed for ultra-low-temperature storage.",
      specs: "1.5 – 5 mL",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://www.corning.com/catalog/cls/products/c/corningExternalThreadCryogenicVials/images/corningExternalThreadCryogenicVials_A.jpg/_jcr_content/renditions/product.zoom.1200.jpg",
    },
    {
      name: "Hospital Bed",
      category: "Hospital Furniture",
      description: "Durable and adjustable hospital bed designed for patient comfort and clinical efficiency.",
      specs: "Manual or electric options, adjustable backrest, steel frame",
      price: "Contact for pricing",
      rating: 4.6,
      image: "https://labneedssolution.co.ug/wp-content/uploads/2020/06/Hospital-bed-600x364.jpg",
    },
    {
      name: "Oxygen Flowmeter Regulators",
      category: "Medical Equipment",
      description: "Precision oxygen flow regulators designed for safe and accurate oxygen delivery in clinical settings.",
      specs: "0–15 L/min adjustable flow, pressure gauge, humidifier bottle compatible",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-CD3B0LDKyosV27br3AzlFs_yph8J0DcWg&s",
    },
    {
      name: "Omron BP Machine",
      category: "Medical Equipment",
      description: "Digital blood pressure monitor designed for accurate, fast, and reliable measurement of systolic, diastolic pressure, and pulse rate.",
      specs: "Automatic inflation, large display, memory storage",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEzx0E5S6uyZ-2mjRG4cKkRWMjlbPcoO1lw&s",
    },
    {
      name: "Stethoscope",
      category: "Medical Equipment",
      description: "High-quality acoustic stethoscope for clear auscultation of heart, lung, and body sounds.",
      specs: "Dual-head chest piece, soft-seal ear tips",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNdoioa27QeRd6mx_7plR2hqIghsGXerpzg&s",
    },
    {
      name: "Patients Monitor",
      category: "Medical Equipment",
      description: "Multi-parameter bedside monitor used for continuous tracking of vital signs such as ECG, SpO₂, NIBP, temperature, and respiration.",
      specs: "ECG, SpO₂, NIBP, TEMP, RESP, 8–12 inch display",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://cdn-881a96c5-a77b871b.commercebuild.com/e5679379b58995ada200c19806353331/contents/z-Vital_Sign_Patient_Mon/z-Vital_Sign_Patient_Mon.jpg",
    },
    {
      name: "Trinocular Microscope",
      category: "Medical Equipment",
      description: "Advanced laboratory microscope with a trinocular viewing head for imaging, teaching, and documentation.",
      specs: "40x–1000x magnification, LED illumination, camera port",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-iVXx5zrRp-2ZudZdC4AzQhee0Lr9wqIFQ&s",
    },
    {
      name: "Lab Coats",
      category: "Safety & Apparel",
      description: "Professional laboratory coats designed to provide protection and maintain hygiene in clinical and research environments.",
      specs: "Poly-cotton blend, long-sleeved, multiple sizes available",
      price: "Contact for pricing",
      rating: 4.6,
      image: "https://www.yogilimited.org/wp-content/uploads/2022/05/White-Lab-Coat.jpg",
    },
  ]

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20 px-4 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }} />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transform animate-in fade-in slide-in-from-top duration-1000 delay-300">
            Our Products
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            Explore our comprehensive range of essential laboratory materials and medical equipment designed for accuracy, reliability, and excellence.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-secondary/20 sticky top-0 z-40 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md animate-in fade-in slide-in-from-left duration-700 delay-200">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap animate-in fade-in slide-in-from-right duration-700 delay-400">
              {categories.map((category, idx) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 animate-in fade-in zoom-in ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card border border-border hover:bg-secondary/50 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${idx * 50 + 600}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-muted-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 hover:rotate-1 animate-in fade-in slide-in-from-bottom group cursor-pointer"
                  style={{ animationDelay: `${idx * 100 + 200}ms` }}
                  onMouseEnter={() => setHoveredProduct(idx)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Image Section with Overlay */}
                  <div className="relative h-48 overflow-hidden bg-secondary/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/300x200?text=Product+Image";
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent transition-all duration-500 flex items-end justify-center pb-4 ${
                      hoveredProduct === idx ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="flex gap-2">
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="bg-accent text-primary p-2 rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-110">
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3 group-hover:bg-accent transition-colors duration-300">
                      {product.category}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 group-hover:text-foreground transition-colors duration-300">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="bg-secondary/50 rounded-lg px-3 py-2 text-sm text-foreground font-medium mb-4 group-hover:bg-secondary transition-colors duration-300">
                      <span className="text-muted-foreground text-xs">Specs: </span>
                      {product.specs}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-semibold">
                        {product.price}
                      </div>
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-4xl mx-auto text-center text-primary-foreground relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Supply Packages?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact our expert team for bulk procurement, specialized configurations, and tailored laboratory solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                Get Custom Quote
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
