// Products page data

export const productsPageData = {
  header: {
    title: {
      main: "Our ",
      highlight: "Products",
    },
    subtitle: "Explore our collection of organic, natural products sourced directly from nature",
  },
  productsCountText: {
    showing: "Showing ",
    products: " products",
  },
  emptyState: {
    emoji: "🔍",
    title: "No products found",
    subtitle: "Try selecting a different category",
  },
} as const;

// Category gradient mappings
export const categoryGradients: Record<string, string> = {
  medicine: "from-emerald-400 to-teal-500",
  healthcare: "from-teal-400 to-cyan-500",
  beautycare: "from-pink-400 to-rose-500",
  food: "from-orange-400 to-amber-500",
  agriculture: "from-lime-400 to-green-500",
};

export const getCategoryGradient = (categoryId: string): string => {
  return categoryGradients[categoryId] || "from-gray-400 to-gray-500";
};

// Category Section Data
export const categorySectionData = {
  header: {
    title: {
      main: "Browse by ",
      highlight: "Nature's Best",
    },
    subtitle: "Explore categories filled with organic, authentic, nature-crafted essentials.",
  },
  ctaButton: "Explore All Categories",
} as const;
