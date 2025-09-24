import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Leaf, Heart, Shield, Truck, Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import ProductGallery from "@/components/product-gallery"
import TestimonialsSection from "@/components/testimonials-section"
import WhatsAppButton from "@/components/whatsapp-button"

// Enhanced metadata for homepage
export const metadata: Metadata = {
  title: "Organic Moringa Products - Fresh Leaves, Powder & Drumsticks | Shigruvedas Rajasthan",
  description: "Buy premium organic moringa leaves, powder & drumsticks from our certified organic farm in Rajasthan. Free delivery across India. Bulk orders welcome. 100% natural, chemical-free moringa products.",
  keywords: [
    "organic moringa Rajasthan",
    "moringa leaves Udaipur", 
    "moringa powder bulk order",
    "fresh moringa drumsticks",
    "organic farming Rajasthan",
    "moringa supplier India",
    "shigruvedas moringa",
    "certified organic moringa",
    "moringa farm Udaipur",
    "wholesale moringa products",
    "chemical-free moringa",
    "ayurvedic moringa"
  ],
  openGraph: {
    title: "Organic Moringa Products - Fresh from Rajasthan Farm | Shigruvedas",
    description: "Premium organic moringa leaves, powder & drumsticks from our certified organic farm in Rajasthan. Free delivery across India with quality guarantee.",
    images: [
      {
        url: "/images/moringa-farm-rajasthan.jpg",
        width: 1200,
        height: 630,
        alt: "Shigruvedas organic moringa farm in Rajasthan - fresh leaves and drumsticks",
      }
    ],
    type: "website",
    siteName: "Shigruvedas"
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Moringa Products from Rajasthan | Shigruvedas",
    description: "Premium organic moringa products directly from our farm in Rajasthan. Order fresh moringa leaves, powder & drumsticks online.",
    images: ["/images/moringa-farm-rajasthan.jpg"]
  },
  alternates: {
    canonical: "https://shigruvedas.com"
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Udaipur, Rajasthan',
    'geo.position': '24.571267;73.691544',
    'ICBM': '24.571267, 73.691544'
  }
}

export default function HomePage() {
  // Enhanced Structured Data for Products
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Fresh Organic Moringa Leaves",
        "description": "Hand-picked daily from our organic farms in Rajasthan. Rich in 90+ nutrients including Vitamin C, Iron, and Protein.",
        "image": "https://shigruvedas.com/images/leaves2.png",
        "brand": {
          "@type": "Brand",
          "name": "Shigruvedas"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "seller": {
            "@type": "Organization",
            "name": "Shigruvedas"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "45"
        }
      },
      {
        "@type": "Product", 
        "position": 2,
        "name": "Organic Moringa Leaf Powder",
        "description": "Premium quality sun-dried and stone-ground moringa powder. Perfect for smoothies, cooking, and daily supplements.",
        "image": "https://shigruvedas.com/images/powder2.png",
        "brand": {
          "@type": "Brand",
          "name": "Shigruvedas"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock", 
          "priceCurrency": "INR",
          "seller": {
            "@type": "Organization",
            "name": "Shigruvedas"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "67"
        }
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Fresh Moringa Drumsticks",
        "description": "Young, tender moringa pods perfect for traditional Indian cooking. Rich in fiber, vitamins, and minerals.",
        "image": "https://shigruvedas.com/images/drumstick2.png",
        "brand": {
          "@type": "Brand",
          "name": "Shigruvedas"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR", 
          "seller": {
            "@type": "Organization",
            "name": "Shigruvedas"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "38"
        }
      }
    ]
  };

  // FAQ Structured Data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Shigruvedas moringa different from others?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our moringa is 100% certified organic, grown in chemical-free soil in Rajasthan, hand-picked daily, and processed within 24 hours to preserve maximum nutrition. We deliver directly from farm to your doorstep."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you provide bulk orders and wholesale pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer special wholesale pricing for bulk orders. Perfect for retailers, restaurants, health food stores, and export businesses. Contact us for minimum order quantities and pricing."
        }
      },
      {
        "@type": "Question",
        "name": "What are the health benefits of moringa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moringa contains 7x more Vitamin C than oranges, 4x more Calcium than milk, 2x more Protein than yogurt. It boosts immunity, supports digestion, provides natural energy, and has anti-inflammatory properties."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver moringa products across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free delivery across India. Our fresh moringa products are carefully packaged and shipped directly from our organic farm in Rajasthan to maintain quality and freshness."
        }
      }
    ]
  };

  return (
    <>
      {/* Enhanced Structured Data Scripts */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-green-50 via-amber-50 to-green-50">
        {/* Enhanced Hero Section */}
        <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="mb-8 animate-fade-in">
              <Image
                src="/images/image.png"
                alt="Shigruvedas Organic Moringa Farm Logo - Premium Moringa Products from Rajasthan"
                width={250}
                height={250}
                className="mx-auto mb-6 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-green-800 mb-6 animate-slide-up">
              Premium Organic Moringa Products from Rajasthan
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Direct from our certified organic farm in <strong>Udaipur, Rajasthan</strong> to your wellness journey. 
              Discover the power of nature's most nutritious superfood - fresh moringa leaves, premium powder, 
              and tender drumsticks, grown with <em>100% organic farming practices</em>.
            </p>
            
            {/* Enhanced Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-green-600">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Udaipur, Rajasthan Farm</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>100% Certified Organic</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="h-4 w-4" />
                <span>Delivery Pan India</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>Chemical-Free Farming</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Order Fresh Moringa Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/about">Our Organic Farm Story</Link>
              </Button>
            </div>

            {/* Quick Contact Options */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <WhatsAppButton />
              <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+917877255595">Call: +91 7877255595</a>
              </Button>
              <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:shigruvedas@gmail.com">Email Us</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Farm Statistics */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
              Our Organic Moringa Farm in Rajasthan at a Glance
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">7+</div>
                <div className="text-lg font-semibold text-green-800">Acres of Organic Farm</div>
                <div className="text-sm text-gray-600">Certified organic moringa cultivation in Udaipur, Rajasthan</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">10000+</div>
                <div className="text-lg font-semibold text-green-800">Healthy Moringa Trees</div>
                <div className="text-sm text-gray-600">Producing fresh leaves and drumsticks daily in Rajasthan climate</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-lg font-semibold text-green-800">Pure & Natural</div>
                <div className="text-sm text-gray-600">No pesticides, chemicals, or artificial additives - Pure Rajasthan moringa</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery Section */}
        <ProductGallery />

        {/* Enhanced Products Section */}
        <section className="container mx-auto px-4 py-16" itemScope itemType="https://schema.org/ItemList">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">
            Premium Organic Moringa Products from Rajasthan Farm
          </h2>
          <p className="text-center text-green-600 mb-12 max-w-3xl mx-auto text-lg">
            Hand-picked daily from our <strong>certified organic farm in Udaipur, Rajasthan</strong> and processed with care to preserve maximum nutrition. 
            Fresh moringa products delivered directly from farm to your doorstep across India with quality guarantee.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fresh Moringa Leaves */}
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" itemScope itemType="https://schema.org/Product">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-green-800 text-center" itemProp="name">Fresh Organic Moringa Leaves</CardTitle>
                <CardDescription className="text-center">Hand-picked daily from our chemical-free farm in Rajasthan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4" itemProp="image">
                  <Image
                    src="/images/leaves2.png"
                    alt="Fresh organic moringa leaves from Shigruvedas farm Rajasthan - rich in Vitamin C, Iron, Protein"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div itemProp="description">
                  <p className="text-gray-600 mb-4">
                    Hand-picked daily from our 7+ acre <strong>organic moringa farm in Udaipur, Rajasthan</strong>. 
                    Contains 90+ essential nutrients including 7x more Vitamin C than oranges, 4x more Calcium than milk. 
                    Perfect for cooking traditional Indian dishes, making nutritious moringa tea, or fresh consumption for maximum health benefits.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">90+ Nutrients</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">Daily Fresh Harvest</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">Rajasthan Grown</Badge>
                </div>
                <div className="space-y-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <meta itemProp="priceCurrency" content="INR" />
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/contact">Order Fresh Moringa Leaves</Link>
                  </Button>
                  <WhatsAppButton
                    message="Hi! I want to order fresh organic moringa leaves from your Rajasthan farm. Can you provide pricing and delivery details?"
                    className="w-full"
                    variant="outline"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Moringa Powder */}
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" itemScope itemType="https://schema.org/Product">
              <CardHeader>
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-amber-600" />
                </div>
                <CardTitle className="text-green-800 text-center" itemProp="name">Organic Moringa Leaf Powder</CardTitle>
                <CardDescription className="text-center">Premium quality sun-dried and stone-ground powder from Rajasthan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4" itemProp="image">
                  <Image
                    src="/images/powder2.png"
                    alt="Organic moringa leaf powder from Shigruvedas Rajasthan - perfect for smoothies, supplements, cooking"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div itemProp="description">
                  <p className="text-gray-600 mb-4">
                    Premium <strong>organic moringa powder from Rajasthan</strong> made from sun-dried leaves using traditional stone grinding methods. 
                    Retains maximum nutritional value with 2x more protein than yogurt and 3x more potassium than bananas. 
                    Perfect for daily health supplements, green smoothies, traditional recipes, and Ayurvedic preparations with long shelf life.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">Stone Ground</Badge>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">Long Shelf Life</Badge>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">Rajasthan Origin</Badge>
                </div>
                <div className="space-y-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <meta itemProp="priceCurrency" content="INR" />
                  <Button className="w-full bg-amber-600 hover:bg-amber-700" asChild>
                    <Link href="/contact">Order Moringa Powder</Link>
                  </Button>
                  <WhatsAppButton
                    message="Hi! I'm interested in bulk order of organic moringa powder from your Rajasthan farm. Please share wholesale pricing."
                    className="w-full"
                    variant="outline"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Moringa Drumsticks */}
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" itemScope itemType="https://schema.org/Product">
              <CardHeader>
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-emerald-600" />
                </div>
                <CardTitle className="text-green-800 text-center" itemProp="name">Fresh Moringa Drumsticks (Pods)</CardTitle>
                <CardDescription className="text-center">Young, tender moringa pods from Rajasthan for traditional cooking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4" itemProp="image">
                  <Image
                    src="/images/drumstick2.png"
                    alt="Fresh moringa drumsticks pods from Shigruvedas organic farm Rajasthan - perfect for Indian cooking, rich in fiber"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div itemProp="description">
                  <p className="text-gray-600 mb-4">
                    Young, tender <strong>moringa drumsticks from our organic farm in Rajasthan</strong> harvested at perfect maturity. 
                    Essential ingredient for traditional South Indian sambar, North Indian sabzi, and regional delicacies. 
                    Rich in dietary fiber, folate, magnesium, and adds unique earthy flavor to curries with maximum freshness from Rajasthan climate.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Traditional Cooking</Badge>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">High Fiber</Badge>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Rajasthan Fresh</Badge>
                </div>
                <div className="space-y-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <meta itemProp="priceCurrency" content="INR" />
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/contact">Order Fresh Drumsticks</Link>
                  </Button>
                  <WhatsAppButton
                    message="Hi! I want to order fresh moringa drumsticks from your organic farm in Rajasthan. Can you provide pricing for regular supply?"
                    className="w-full"
                    variant="outline"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Why Moringa Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">
              Why Rajasthan Moringa is Called the "Miracle Tree" of India
            </h2>
            <p className="text-center text-green-600 mb-12 max-w-3xl mx-auto text-lg">
              Discover the incredible nutritional benefits of moringa that have made it a superfood treasured in 
              Ayurvedic medicine for over 4000 years. Our <strong>organically grown moringa from Rajasthan's ideal climate</strong> delivers maximum potency.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-800 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Nutritional Powerhouse from Rajasthan
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>7x more Vitamin C than oranges</strong> - Natural immunity booster from Rajasthan soil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>4x more Calcium than milk</strong> - Strengthens bones naturally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>4x more Vitamin A than carrots</strong> - Supports healthy vision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>3x more Potassium than bananas</strong> - Heart health support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>2x more Protein than yogurt</strong> - Complete amino acid profile</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  Traditional Ayurvedic Health Benefits
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Natural immune system boost</strong> - Rich in antioxidants and vitamins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Supports healthy blood sugar levels</strong> - Traditional Ayurvedic usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Promotes digestive health</strong> - High fiber and natural enzymes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Sustained natural energy</strong> - Without caffeine dependency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Anti-inflammatory properties</strong> - Supports overall wellness naturally</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Enhanced Why Choose Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
              Why Choose Shigruvedas Organic Moringa Farm in Rajasthan?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">100% Certified Organic Rajasthan Farm</h3>
                <p className="text-gray-600">
                  Zero pesticides, zero chemicals, zero artificial additives. Our <strong>7+ acre farm in Udaipur, Rajasthan</strong> follows 
                  strict organic farming practices with natural fertilizers, groundwater irrigation, and rainwater harvesting in Rajasthan's ideal climate.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">Farm to Table Freshness</h3>
                <p className="text-gray-600">
                  Hand-picked daily and processed within 24 hours to preserve maximum nutrition. Direct delivery from 
                  our <strong>organic farm in Rajasthan</strong> to your doorstep across India ensures you get the freshest moringa products possible.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">Bulk Orders & Wholesale from Rajasthan</h3>
                <p className="text-gray-600">
                  Special wholesale pricing for bulk purchases. Perfect for retailers, restaurants, health food stores, 
                  Ayurvedic practitioners, and export businesses. Consistent supply from our <strong>large-scale organic production in Rajasthan</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Local SEO Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Ready to Experience Premium Rajasthan Moringa Products?
            </h2>
            <p className="text-xl mb-6 opacity-90 text-center max-w-3xl mx-auto">
              Contact <strong>Shigruvedas in Udaipur, Rajasthan</strong> today for fresh moringa orders, bulk purchase inquiries, or to visit our 
              organic farm. delivery across India with quality guarantee and authentic Rajasthan moringa products.
            </p>
            
            {/* Enhanced Business Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat 8AM-7PM, Sun 9AM-5PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>248, A-Block, Hiran Magri, Udaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-7877255595</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/contact">
                  Place Your Order <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <WhatsAppButton
                message="Hi! I'm interested in bulk purchase of organic moringa products from your Rajasthan farm. Can you provide wholesale pricing and minimum order quantity?"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
              />
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section for SEO */}
        <section className="container mx-auto px-4 py-16" itemScope itemType="https://schema.org/FAQPage">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
              Frequently Asked Questions About Our Rajasthan Moringa Farm
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div itemScope itemType="https://schema.org/Question">
                  <h3 className="text-lg font-semibold text-green-800 mb-2" itemProp="name">
                    What makes Shigruvedas moringa different from others?
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-600" itemProp="text">
                      Our moringa is 100% certified organic, grown in chemical-free soil in <strong>Udaipur, Rajasthan</strong>, 
                      hand-picked daily, and processed within 24 hours to preserve maximum nutrition. We deliver directly from 
                      our Rajasthan farm to your doorstep across India.
                    </p>
                  </div>
                </div>

                <div itemScope itemType="https://schema.org/Question">
                  <h3 className="text-lg font-semibold text-green-800 mb-2" itemProp="name">
                    Do you provide bulk orders and wholesale pricing?
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-600" itemProp="text">
                      Yes, we offer special wholesale pricing for bulk orders from our <strong>Rajasthan farm</strong>. Perfect for 
                      retailers, restaurants, health food stores, and export businesses. Contact us for minimum order quantities and pricing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div itemScope itemType="https://schema.org/Question">
                  <h3 className="text-lg font-semibold text-green-800 mb-2" itemProp="name">
                    What are the health benefits of Rajasthan moringa?
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-600" itemProp="text">
                      Our <strong>Rajasthan moringa</strong> contains 7x more Vitamin C than oranges, 4x more Calcium than milk, 
                      2x more Protein than yogurt. It boosts immunity, supports digestion, provides natural energy, and has 
                      anti-inflammatory properties.
                    </p>
                  </div>
                </div>

                <div itemScope itemType="https://schema.org/Question">
                  <h3 className="text-lg font-semibold text-green-800 mb-2" itemProp="name">
                    Do you deliver moringa products across India from Rajasthan?
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-600" itemProp="text">
                      Yes, we provide delivery across India. Our fresh moringa products are carefully packaged and shipped 
                      directly from our <strong>organic farm in Udaipur, Rajasthan</strong> to maintain quality and freshness nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton
            showLogo={false}
            message="Hi! I'm interested in your organic moringa products from Rajasthan. Can you help me with pricing and delivery?"
            className="rounded-full w-14 h-14 shadow-lg animate-bounce hover:animate-none"
            size="lg"
          />
        </div>
      </div>
    </>
  )
}