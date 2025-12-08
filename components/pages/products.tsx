import { useState, useEffect, type ReactElement } from "react"
import { Search, Filter, Star, ShoppingCart, Eye, Beaker, Stethoscope, Bed, Shield, Snowflake, FlaskConical, Factory, CheckCircle } from "lucide-react"

export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    // Hospital Equipment
    {
      name: "Anaesthesia Machine",
      category: "Hospital Equipment",
      description: "Advanced anesthesia delivery system for surgical procedures with precise gas flow control and patient monitoring.",
      specs: "Multi-gas delivery, ventilator integration, patient monitoring",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://plus.unsplash.com/premium_photo-1661895714925-2c7a6be6be32?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "ICU Equipment Package",
      category: "Hospital Equipment",
      description: "Complete ICU setup including ventilators, monitors, and life support systems for critical care.",
      specs: "Ventilator, multi-parameter monitor, infusion pumps, defibrillator",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Suction Machine",
      category: "Hospital Equipment",
      description: "Electric suction apparatus for removing fluids and debris from airways and surgical sites.",
      specs: "Adjustable suction pressure, portable design, easy maintenance",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://plus.unsplash.com/premium_photo-1682124029070-5e8631b88690?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Oxygen Concentrator",
      category: "Hospital Equipment",
      description: "Medical-grade oxygen concentrator providing continuous oxygen therapy for patients.",
      specs: "5-10L/min flow rate, 90-96% oxygen purity, low noise operation",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-CD3B0LDKyosV27br3AzlFs_yph8J0DcWg&s",
    },
    {
      name: "Automated External Defibrillator (AED)",
      category: "Hospital Equipment",
      description: "Life-saving automated defibrillator for emergency cardiac arrest situations.",
      specs: "Automatic rhythm analysis, voice prompts, biphasic technology",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1635715521195-6e3740b89909?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    // Laboratory Equipment
    {
      name: "Complete Blood Count Analyzer",
      category: "Laboratory Equipment",
      description: "Automated hematology analyzer for complete blood count testing with high accuracy.",
      specs: "22 parameters, 60 samples/hour, quality control features",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.pexels.com/photos/4230623/pexels-photo-4230623.jpeg",
    },
    {
      name: "Trinocular Microscope",
      category: "Laboratory Equipment",
      description: "Advanced laboratory microscope with trinocular head for imaging and documentation.",
      specs: "40x-1000x magnification, LED illumination, camera port",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-iVXx5zrRp-2ZudZdC4AzQhee0Lr9wqIFQ&s",
    },
    {
      name: "Laboratory Incubator",
      category: "Laboratory Equipment",
      description: "Precision temperature-controlled incubator for bacterial culture and sample incubation.",
      specs: "Temperature range: 5°C above ambient to 80°C, digital display",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1707944746552-2dcec7587aa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Water Bath",
      category: "Laboratory Equipment",
      description: "Standard laboratory water bath for sample warming and temperature-controlled reactions.",
      specs: "Digital temperature control, stainless steel construction",
      price: "Contact for pricing",
      rating: 4.6,
      image: "https://images.pexels.com/photos/2507014/pexels-photo-2507014.jpeg",
    },
    {
      name: "Digital Weighing Scale",
      category: "Laboratory Equipment",
      description: "High-precision analytical balance for accurate laboratory measurements.",
      specs: "0.1mg readability, internal calibration, draft shield",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://media.istockphoto.com/id/182889107/photo/glass-scale.jpg?s=1024x1024&w=is&k=20&c=SA4XP2Ohpd4bS-8YZQ371nton57p3h0zcQ9hxjzdn40=",
    },
    {
      name: "Automatic Pipettes Set",
      category: "Laboratory Equipment",
      description: "Variable volume automatic pipettes for precise liquid handling in laboratory work.",
      specs: "0.5-10μL, 2-20μL, 20-200μL, 100-1000μL volumes",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Vacutainer Blood Collection Tubes",
      category: "Laboratory Equipment",
      description: "Sterile blood collection tubes with various additives for different laboratory tests.",
      specs: "EDTA, Plain, Heparin, SST, Citrate tubes - 4ml, 5ml, 6ml, 10ml",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://www.corning.com/catalog/cls/products/c/corningExternalThreadCryogenicVials/images/corningExternalThreadCryogenicVials_A.jpg/_jcr_content/renditions/product.zoom.1200.jpg",
    },

    // Diagnostic Devices
    {
      name: "Ultrasound Scanner",
      category: "Diagnostic Devices",
      description: "Portable ultrasound system for real-time imaging and diagnostic examinations.",
      specs: "Multi-frequency probes, color Doppler, high-resolution display",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://plus.unsplash.com/premium_photo-1663013248555-1e4068f3018d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dopplers",
      category: "Diagnostic Devices",
      description: "Handheld Doppler device for vascular assessment and fetal heart monitoring.",
      specs: "2MHz/5MHz probes, audio output, rechargeable battery",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://plus.unsplash.com/premium_photo-1677592645406-59efdf5525fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Digital Glucometer",
      category: "Diagnostic Devices",
      description: "Blood glucose monitoring system for diabetes management and testing.",
      specs: "Fast 5-second results, small blood sample, memory storage",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEzx0E5S6uyZ-2mjRG4cKkRWMjlbPcoO1lw&s",
    },
    {
      name: "Stethoscope",
      category: "Diagnostic Devices",
      description: "Electronic stethoscope with amplification and recording capabilities.",
      specs: "Noise reduction, recording function, Bluetooth connectivity",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNdoioa27QeRd6mx_7plR2hqIghsGXerpzg&s",
    },
    {
      name: "Thermometer",
      category: "Diagnostic Devices",
      description: "Fast and accurate digital thermometer for body temperature measurement.",
      specs: "1-second reading, fever alarm, memory recall",
      price: "Contact for pricing",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1594790628624-9e563bea851d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Blood Pressure Monitor",
      category: "Diagnostic Devices",
      description: "Automatic digital blood pressure monitor with large display and memory.",
      specs: "Automatic inflation, large cuff, 99 memory readings",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEzx0E5S6uyZ-2mjRG4cKkRWMjlbPcoO1lw&s",
    },
    {
      name: "Pulse Oximeter",
      category: "Diagnostic Devices",
      description: "Fingertip pulse oximeter for measuring oxygen saturation and pulse rate.",
      specs: "OLED display, 8-second measurement, low battery indicator",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1626851528990-fee2c2e6fadb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "ECG Machine",
      category: "Diagnostic Devices",
      description: "12-lead electrocardiograph for cardiac rhythm and electrical activity monitoring.",
      specs: "12-lead recording, interpretation software, thermal printer",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://cdn-881a96c5-a77b871b.commercebuild.com/e5679379b58995ada200c19806353331/contents/z-Vital_Sign_Patient_Mon/z-Vital_Sign_Patient_Mon.jpg",
    },

    // Medical Furniture
    {
      name: "Hospital Bed - Electric",
      category: "Medical Furniture",
      description: "Fully electric hospital bed with adjustable height, backrest, and leg sections.",
      specs: "Electric adjustment, side rails, trendelenburg position",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://labneedssolution.co.ug/wp-content/uploads/2020/06/Hospital-bed-600x364.jpg",
    },
    {
      name: "Medical Trolley",
      category: "Medical Furniture",
      description: "Multi-purpose medical trolley for transporting equipment and supplies.",
      specs: "Stainless steel construction, multiple shelves, locking wheels",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6FnSHozZghOhbU8O6oP0f23zwm_lDFaSpA&s",
    },
    {
      name: "Operating Table",
      category: "Medical Furniture",
      description: "Advanced operating table with multiple positioning capabilities for surgery.",
      specs: "Hydraulic/electric positioning, radiolucent top, accessories",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsU-DdrJtmmlo85NQhqe1-CaJovJaMK9rgZ5WP0UJaFwaqYY_ZS1BPro3IX-A5-n8-T0iIQ8rn1vRwJEnIEpxYCBAGp4ZUTYdZGq9938&s=10",
    },
    {
      name: "Surgical Lights",
      category: "Medical Furniture",
      description: "LED surgical lights providing shadowless illumination for operating theaters.",
      specs: "LED technology, adjustable intensity, sterile handles",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7iOdZwQYvQnGg42FuFZIwwp_yvjE6_jEaw&s",
    },
    {
      name: "Examination Table",
      category: "Medical Furniture",
      description: "Adjustable examination table for patient consultations and minor procedures.",
      specs: "Height adjustable, paper roll holder, storage drawer",
      price: "Contact for pricing",
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYAYBaHpWj3v7mSvr6gNotboDg5w2i42DKg&s",
    },

    // Medical Consumables
    {
      name: "Gloves",
      category: "Medical Consumables",
      description: "Disposable examination gloves in latex, nitrile, and vinyl materials.",
      specs: "Powder-free, various sizes (S, M, L, XL), ambidextrous",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMr9Qgjd4fp7CQU6nM6RFAfbzWo1SHQEivUw&s",
    },
    {
      name: "Surgical Face Masks",
      category: "Medical Consumables",
      description: "3-ply surgical masks providing protection against droplets and particles.",
      specs: "3-layer filtration, elastic ear loops, fluid resistant",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Syringes",
      category: "Medical Consumables",
      description: "Sterile disposable syringes with needles in various volumes.",
      specs: "1ml, 2ml, 5ml, 10ml, 20ml, 50ml - sterile, single use",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZRSbm0lFnWdNx3U8G77ZCqnhHT7OrhkiYxOr4VDYYBC7DuAJZpcYT4EgA6B-H-JWb3ckk8kLFMIK_joILbksuf1VXy2CKaK-XdglHQ&s",
    },
    {
      name: "Gauze Swabs",
      category: "Medical Consumables",
      description: "Sterile gauze swabs for wound dressing and surgical procedures.",
      specs: "100% cotton, sterile packed, various sizes available",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwb9SERYZVCH2uQP5DuDhxlKhOdBLjJoE1w&s",
    },
    {
      name: "Bandages",
      category: "Medical Consumables",
      description: "Elastic and conforming bandages for wound care and support.",
      specs: "Crepe, elastic, conforming types - various widths",
      price: "Contact for pricing",
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOx4KWg9ToTO3uyOadhI7q9Xh8otw9wKrOg&s",
    },

    // Safety & Protective Equipment
    {
      name: "Biosafety Cabinet",
      category: "Safety & Protective Equipment",
      description: "Class II biosafety cabinet for safe handling of biological materials.",
      specs: "HEPA filtration, laminar airflow, UV sterilization",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "N95 Respirators",
      category: "Safety & Protective Equipment",
      description: "NIOSH-approved N95 filtering facepiece respirators for airborne protection.",
      specs: "95% filtration efficiency, comfortable fit, adjustable straps",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Lab Coats",
      category: "Safety & Protective Equipment",
      description: "Professional laboratory coats for protection and hygiene in clinical environments.",
      specs: "Poly-cotton blend, long-sleeved, various sizes",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://www.yogilimited.org/wp-content/uploads/2022/05/White-Lab-Coat.jpg",
    },
    {
      name: "Safety Goggles",
      category: "Safety & Protective Equipment",
      description: "Chemical splash goggles for eye protection in laboratory environments.",
      specs: "Anti-fog coating, adjustable strap, chemical resistant",
      price: "Contact for pricing",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sharps Container",
      category: "Safety & Protective Equipment",
      description: "Puncture-resistant containers for safe disposal of needles and sharps.",
      specs: "Leak-proof, puncture-resistant, various sizes",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    // Storage & Cold Chain
    {
      name: "Laboratory Freezer",
      category: "Storage & Cold Chain",
      description: "Ultra-low temperature freezer for specimen and vaccine storage.",
      specs: "-20°C to -86°C, digital display, alarm system",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Laboratory Refrigerator",
      category: "Storage & Cold Chain",
      description: "Pharmaceutical grade refrigerator for temperature-sensitive storage.",
      specs: "2-8°C range, digital temperature control, data logging",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Blood Bank Refrigerator",
      category: "Storage & Cold Chain",
      description: "Specialized refrigeration system for blood and blood product storage.",
      specs: "4°C ±1°C, blood bag storage, temperature monitoring",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Vaccine Cold Box",
      category: "Storage & Cold Chain",
      description: "Portable cold storage box for vaccine transport and temporary storage.",
      specs: "2-8°C maintenance, 24-72 hour duration, WHO approved",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Cryogenic Vials",
      category: "Storage & Cold Chain",
      description: "Ultra-low temperature storage vials for biological samples.",
      specs: "1.5-5mL capacity, leak-proof, -196°C compatible",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://www.corning.com/catalog/cls/products/c/corningExternalThreadCryogenicVials/images/corningExternalThreadCryogenicVials_A.jpg/_jcr_content/renditions/product.zoom.1200.jpg",
    },

    // Chemicals & Reagents
    {
      name: "Analytical Chemicals Set",
      category: "Chemicals & Reagents",
      description: "High-purity analytical grade chemicals for laboratory analysis.",
      specs: "ACS grade, certificate of analysis, various pack sizes",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Laboratory Reagents",
      category: "Chemicals & Reagents",
      description: "Standard laboratory reagents for routine testing and analysis.",
      specs: "Buffer solutions, indicators, standard solutions",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Histology Stains",
      category: "Chemicals & Reagents",
      description: "Specialized staining solutions for histopathology and cytology.",
      specs: "H&E stains, special stains, ready-to-use formulations",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Whatman Filter Papers",
      category: "Chemicals & Reagents",
      description: "High-quality cellulose filter papers for laboratory filtration.",
      specs: "Various grades (1, 2, 3, 4, 5), qualitative and quantitative",
      price: "Contact for pricing",
      rating: 4.9,
      image: "https://www.tischscientific.com/mm5/graphics/00000001/2/Whatman_Chromatography_Paper_3MM-CHR.webp",
    },

    // Manufacturing Products
    {
      name: "Hand Sanitizer",
      category: "Manufacturing Products",
      description: "WHO-formula alcohol-based hand sanitizer for infection control.",
      specs: "70% ethanol, moisturizing agents, various pack sizes",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Liquid Soap",
      category: "Manufacturing Products",
      description: "Antibacterial liquid soap for healthcare and general hygiene use.",
      specs: "Antimicrobial formula, gentle on skin, bulk packaging",
      price: "Contact for pricing",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Surface Disinfectant",
      category: "Manufacturing Products",
      description: "Hospital-grade surface disinfectant for environmental cleaning.",
      specs: "Broad-spectrum efficacy, fast-acting, surface safe",
      price: "Contact for pricing",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  const categories = [
    "All",
    "Hospital Equipment",
    "Laboratory Equipment", 
    "Diagnostic Devices",
    "Medical Furniture",
    "Medical Consumables",
    "Safety & Protective Equipment",
    "Storage & Cold Chain",
    "Chemicals & Reagents",
    "Manufacturing Products"
  ]

  const categoryIcons: Record<string, ReactElement> = {
    "All": <Filter className="w-4 h-4" />,
    "Hospital Equipment": <Stethoscope className="w-4 h-4" />,
    "Laboratory Equipment": <Beaker className="w-4 h-4" />,
    "Diagnostic Devices": <Eye className="w-4 h-4" />,
    "Medical Furniture": <Bed className="w-4 h-4" />,
    "Medical Consumables": <ShoppingCart className="w-4 h-4" />,
    "Safety & Protective Equipment": <Shield className="w-4 h-4" />,
    "Storage & Cold Chain": <Snowflake className="w-4 h-4" />,
    "Chemicals & Reagents": <FlaskConical className="w-4 h-4" />,
    "Manufacturing Products": <Factory className="w-4 h-4" />,
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20 px-4 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-36 h-36 bg-accent/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-top duration-1000 delay-200">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Comprehensive Healthcare Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transform animate-in fade-in slide-in-from-top duration-1000 delay-300 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Our Complete Product Range
          </h1>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-600 leading-relaxed">
            Discover our comprehensive catalog of {products.length}+ premium healthcare products across {categories.length - 1} specialized categories, 
            designed for accuracy, reliability, and excellence in medical and laboratory applications.
          </p>
          
          <div className="flex justify-center gap-6 mt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
              <div className="text-2xl font-bold text-accent">{products.length}+</div>
              <div className="text-sm opacity-80">Products Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
              <div className="text-2xl font-bold text-accent">{categories.length - 1}</div>
              <div className="text-sm opacity-80">Product Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm opacity-80">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section className="py-8 px-4 bg-secondary/10 sticky top-0 z-40 backdrop-blur-lg border-b border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto animate-in fade-in slide-in-from-top duration-700 delay-200">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search from our complete product range..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-lg"
              />
            </div>

            {/* Category Filter with Icons */}
            <div className="flex gap-3 flex-wrap justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              {categories.map((category, idx) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 animate-in fade-in zoom-in border ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg scale-105 border-primary"
                      : "bg-card/50 backdrop-blur-sm border-border hover:bg-secondary/50 hover:shadow-md hover:border-primary/30"
                  }`}
                  style={{ animationDelay: `${idx * 50 + 600}ms` }}
                >
                  {categoryIcons[category]}
                  {category}
                  {category !== "All" && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === category ? "bg-white/20" : "bg-primary/10 text-primary"
                    }`}>
                      {products.filter(p => p.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="mb-12 text-center animate-in fade-in slide-in-from-top duration-700 delay-200">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} 
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-semibold text-primary mb-4">No products found</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Try adjusting your search terms or browse our categories
              </p>
              <button 
                onClick={() => {setSearchTerm(""); setSelectedCategory("All")}}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/15 transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 hover:rotate-1 animate-in fade-in slide-in-from-bottom cursor-pointer"
                  style={{ animationDelay: `${(idx % 12) * 50 + 200}ms` }}
                  onMouseEnter={() => setHoveredProduct(idx)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Enhanced Image Section */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/400x300?text=Product+Image";
                      }}
                    />
                    
                    {/* Enhanced Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent transition-all duration-500 flex items-end justify-center pb-6 ${
                      hoveredProduct === idx ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="flex gap-3">
                        <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-125 hover:rotate-12">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="bg-accent text-primary p-3 rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-125 hover:-rotate-12">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Enhanced Rating Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-primary">{product.rating}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full group-hover:bg-accent transition-all duration-300 flex items-center gap-1">
                      {categoryIcons[product.category]}
                      {product.category}
                    </div>
                  </div>

                  {/* Enhanced Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm line-clamp-3 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Enhanced Specifications */}
                    <div className="bg-gradient-to-r from-secondary/30 to-primary/10 rounded-lg px-4 py-3 group-hover:from-secondary/50 group-hover:to-primary/20 transition-all duration-300">
                      <span className="text-muted-foreground text-xs font-medium block mb-1">SPECIFICATIONS</span>
                      <p className="text-foreground font-medium text-sm leading-tight">
                        {product.specs}
                      </p>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="text-primary font-bold">
                        {product.price}
                      </div>
                      <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-5xl mx-auto text-center text-primary-foreground relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 shadow-xl">
              <ShoppingCart className="w-10 h-10 text-accent" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Enhance Your Healthcare Facility?
            </h3>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert team for custom supply packages, bulk procurement solutions, 
              and specialized configurations tailored to your specific healthcare needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-accent text-primary px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Get Custom Quote
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center gap-3">
                <Eye className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                Download Full Catalog
              </button>
            </div>
            
            <div className="flex justify-center gap-8 mt-12 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Free Consultations
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Bulk Discounts Available  
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                24/7 Technical Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
