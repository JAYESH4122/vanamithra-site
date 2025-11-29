// Home page data - includes all static data for home page components

// Hero Section Data
export const heroData = {
  title: {
    main: "Nature's ",
    highlight: "Goodness",
    suffix: ", Delivered Pure",
  },
  subtitle: {
    text: "Pure, organic, and sustainable solutions from ",
    companyHighlight: "Vanamithra",
    suffix: ". Wellness starts with nature.",
  },
  buttons: {
    primary: "Order Now",
    secondary: "Explore Products",
  },
  featuredProduct: {
    name: "Organic Honey Bundle",
    description: "Pure natural honey from sustainable beekeeping",
    price: "₹199.99",
    originalPrice: "₹249.99",
    discount: "20% OFF",
    emoji: "🍯",
  },
  whatsappMessage:
    "Hi Vanamithra! 👋\n\nI'm interested in exploring your organic products. Can you help me find the perfect natural solution?",
} as const;

// About Section Data
export interface AboutFeature {
  icon: string; // SVG path or component identifier
  title: string;
  desc: string;
  gradient: string;
}

export const aboutData = {
  title: {
    main: "About ",
    highlight: "Vanamithra",
  },
  subtitle: "Your trusted partner in natural wellness & organic living",
  mission: {
    heading: "Empowering Natural Wellness",
    description:
      "Vanamithra believes in the healing power of nature. Our mission is to bring pure, sustainable, and authentic organic products directly to your home — supporting better health and a better planet.",
  },
  features: [
    {
      icon: "shield",
      title: "Pure & Natural",
      desc: "100% natural ingredients",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: "globe",
      title: "Eco-Friendly",
      desc: "Sustainable sourcing",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: "star",
      title: "Premium Quality",
      desc: "Strict quality checks",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: "check-circle",
      title: "Health First",
      desc: "Made for wellness",
      gradient: "from-lime-500 to-emerald-500",
    },
  ] as AboutFeature[],
} as const;

// Testimonials Data
export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  color: string;
}

export const testimonialsData = {
  title: {
    main: "What Our ",
    highlight: "Customers",
    suffix: " Say",
  },
  subtitle:
    "Real experiences from people who trust Vanamithra for their natural lifestyle",
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Health Enthusiast",
      comment:
        "The quality of organic products I've purchased from Vanamithra has been exceptional. Their commitment to sustainability and natural ingredients is truly impressive!",
      rating: 5,
      avatar: "SJ",
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "Michael Chen",
      role: "Nutrition Expert",
      comment:
        "As someone who values pure nutrition, I'm impressed with Vanamithra's product selection and authenticity. Everything is exactly as described - pure and natural.",
      rating: 5,
      avatar: "MC",
      color: "from-emerald-400 to-green-500",
    },
    {
      name: "Emma Rodriguez",
      role: "Wellness Coach",
      comment:
        "I regularly recommend Vanamithra products to my clients. The quality and effectiveness of their natural solutions are consistently outstanding.",
      rating: 4,
      avatar: "ER",
      color: "from-purple-400 to-pink-500",
    },
  ] as Testimonial[],
} as const;

// Contact Section Data
export interface ContactItem {
  id: string;
  title: string;
  description: string;
  contact: string;
  link: string;
  gradient: string;
  icon: string;
}

export interface SocialMedia {
  name: string;
  color: string;
  icon: string;
  link?: string;
}

export const contactData = {
  title: {
    main: "Contact ",
    highlight: "Vanamithra",
  },
  subtitle:
    "Get in touch with us - we're here to help with all your natural product needs",
  contactItems: [
    {
      id: "email",
      title: "Email Address",
      description: "Send us your queries anytime",
      contact: "vanamithranatural@gmail.com",
      link: "mailto:vanamithranatural@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      icon: "email",
    },
    {
      id: "call",
      title: "Phone Number",
      description: "Call us for immediate assistance",
      contact: "+91 79091 02100",
      link: "tel:+917909102100",
      gradient: "from-green-500 to-emerald-500",
      icon: "phone",
    },
    {
      id: "location",
      title: "Our Location",
      description: "Visit our store in Wayanad",
      contact: "Vanamithra, Thalapuzha, Wayanad",
      link: "#",
      gradient: "from-orange-500 to-amber-500",
      icon: "location",
    },
    {
      id: "hours",
      title: "Business Hours",
      description: "We're here to serve you",
      contact: "Mon - Sun: 9:00 AM - 7:00 PM",
      link: "#",
      gradient: "from-purple-500 to-pink-500",
      icon: "clock",
    },
  ] as ContactItem[],
  socialMedia: [
    {
      name: "Instagram",
      color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      icon: "instagram",
      link: "https://www.instagram.com/vanamithra_?igsh=amhtMG9oODF1MjR3",
    },
    {
      name: "WhatsApp",
      color: "from-[#25D366] to-[#128C7E]",
      icon: "whatsapp",
      link: "https://wa.me/917909102100",
    },
  ] as SocialMedia[],
} as const;

// Category Section Data
export const categoryData = {
  header: {
    title: {
      prefix: "Browse by ",
      highlight: "Nature's Best",
    },
    subtitle:
      "Explore categories filled with organic, authentic, nature-crafted essentials.",
  },
  cta: {
    text: "Explore All Categories",
    link: "/products",
  },
} as const;

// Featured Products Section Data
export const featuredProductsData = {
  header: {
    title: {
      prefix: "Featured ",
      highlight: "Products",
    },
    subtitle: "Our most popular products based on sales",
  },
  cta: {
    text: "View All Products",
    link: "/products",
  },
} as const;

// Header Data
export const headerData = {
  navItems: [
    { name: "Home", href: "/#home" },
    { name: "Categories", href: "/#categories" },
    { name: "Products", href: "/#products" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Gallery", href: "/gallery" },
  ],
  search: {
    placeholder: "Search products...",
    noResults: {
      title: "🔍",
      message: "No products found",
      subMessage: "Try searching with different keywords",
    },
  },
} as const;

// Footer Data
export const footerData = {
  brand: {
    description:
      "Your trusted partner in organic living and sustainable wellness.",
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/#home" },
      { name: "Shop", href: "/products" },
      { name: "About", href: "/#about" },
      { name: "Contact", href: "/#contact" },
    ],
  },
  contact: {
    title: "Contact",
    info: [
      "Thalapuzha, Wayanad, India",
      "+91 7909102100",
      "vanamithranatural@gmail.com",
    ],
  },
  copyright: `© ${new Date().getFullYear()} Vanamithra. All rights reserved.`,
} as const;

// Common Data
export const commonData = {
  companyName: "Vanamithra",
  tagline: "Nature's Goodness, Delivered Pure",
} as const;

// Testimonial Form Data
export const reviewFormData = {
  placeholder: "Share your experience with us...",
  buttonText: "Submit",
  whatsappMessage: "New Review:\n\n",
} as const;

// Contact Form Data
export const contactFormData = {
  title: "Send us a Message",
  subtitle: "We'll get back to you within 24 hours",
  placeholders: {
    name: "Your Name",
    email: "Your Email",
    message: "Your Message...",
  },
  buttonText: "Send Message",
  whatsappMessage: "New Contact Form Submission:\n",
} as const;

// Gallery Section Data
export const galleryData = {
  title: {
    main: "Our ",
    highlight: "Gallery",
    suffix: " ",
  },
  subtitle:
    "A glimpse into our world of organic farming, sustainable practices, and happy customers.",
  images: [
    "/agriculture.png",
    "/beauty.png",
    "/food.png",
    "/healthcare.png",
    "/medicine.png",
    "/agriculture.png",
    "/beauty.png",
    "/food.png",
    "/healthcare.png",
  ],
} as const;
