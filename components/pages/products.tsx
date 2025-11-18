export default function Products() {
  const products = [
    {
      name: "Burette Infusion Set",
      category: "Infusion & Delivery",
      description: "Sterile infusion set with calibrated chamber for accurate fluid dosing.",
      specs: "100–150 mL burette",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzeKoLnRV30W0tjBUwk6KLqLrFHTC-sMJTQ&s",
    },
    {
      name: "Whatman 3MM Filter Paper",
      category: "Filtration & Media",
      description: "High-quality cellulose filter papers for laboratory filtration.",
      specs: "110 mm, qualitative",
      image: "https://www.tischscientific.com/mm5/graphics/00000001/2/Whatman_Chromatography_Paper_3MM-CHR.webp",
    },
    {
      name: "Cryogenic Vials",
      category: "Storage & Freezing",
      description: "Leak-proof cryogenic tubes designed for ultra-low-temperature storage.",
      specs: "1.5 – 5 mL",
      image: "https://www.corning.com/catalog/cls/products/c/corningExternalThreadCryogenicVials/images/corningExternalThreadCryogenicVials_A.jpg/_jcr_content/renditions/product.zoom.1200.jpg",
    },
    {
      name: "Hospital Bed",
      category: "Hospital Furniture",
      description: "Durable and adjustable hospital bed designed for patient comfort and clinical efficiency.",
      specs: "Manual or electric options, adjustable backrest, steel frame",
      image: "https://labneedssolution.co.ug/wp-content/uploads/2020/06/Hospital-bed-600x364.jpg",
    },
    {
      name: "Oxygen Flowmeter Regulators",
      category: "Medical Equipment",
      description: "Precision oxygen flow regulators designed for safe and accurate oxygen delivery in clinical settings.",
      specs: "0–15 L/min adjustable flow, pressure gauge, humidifier bottle compatible",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-CD3B0LDKyosV27br3AzlFs_yph8J0DcWg&s",
    },
    {
      name: "Lab Coats",
      category: "Safety & Apparel",
      description: "Professional laboratory coats designed to provide protection and maintain hygiene in clinical and research environments.",
      specs: "Poly-cotton blend, long-sleeved, multiple sizes available",
      image: "https://www.yogilimited.org/wp-content/uploads/2022/05/White-Lab-Coat.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Our Products</h2>
        <p className="text-lg text-muted-foreground">
          Explore our range of essential laboratory materials designed for accuracy and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* UPDATED IMAGE SECTION */}
            <div className="bg-secondary h-40 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {product.category}
              </div>

              <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>

              <p className="text-muted-foreground text-sm mb-4">
                {product.description}
              </p>

              <div className="bg-secondary rounded px-3 py-2 text-sm text-primary font-medium">
                {product.specs}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-primary-foreground text-center">
        <h3 className="text-2xl font-bold mb-4">Need Custom Supply Packages?</h3>
        <p className="mb-6 opacity-90">Contact our team for bulk procurement and specialized configurations.</p>
        <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
          Get in Touch
        </button>
      </section>
    </div>
  );
}
