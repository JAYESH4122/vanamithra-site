export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  variants: { name: string; value: string }[];
  category: string;
  image: string;
  inStock: boolean;
}

export const categories = [
  { id: "all", name: "All Products" },
  { id: "medicine", name: "Medicine" },
  { id: "healthcare", name: "Health Care" },
  { id: "beautycare", name: "Beauty Care" },
  { id: "food", name: "Food Products" },
  { id: "agriculture", name: "Agriculture Items" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Turmeric Powder",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviewCount: 124,
    description: "Pure organic turmeric powder sourced directly from Wayanad farms. Rich in curcumin, this golden spice is perfect for cooking, medicinal purposes, and skincare.",
    features: [
      "100% Organic & Natural",
      "Rich in Curcumin",
      "Chemical-free Processing",
      "Direct from Farm",
      "Antioxidant Properties",
      "Freshly Packed"
    ],
    variants: [
      { name: "100g Pack", value: "100g" },
      { name: "250g Pack", value: "250g" },
      { name: "500g Pack", value: "500g" }
    ],
    category: "medicine",
    image: "/turmeric.jpg",
    inStock: true,
  },
  {
    id: "2",
    name: "Aloe Vera Gel",
    price: 199.99,
    rating: 4.8,
    reviewCount: 98,
    description: "Pure aloe vera gel extracted from fresh aloe leaves. Perfect for skin care, hair care, and healing minor burns and cuts.",
    features: [
      "100% Natural",
      "No Artificial Colors",
      "Multipurpose Use",
      "Soothing & Healing",
      "Chemical-free",
      "Fresh Extract"
    ],
    variants: [
      { name: "100ml", value: "100ml" },
      { name: "200ml", value: "200ml" },
      { name: "500ml", value: "500ml" }
    ],
    category: "healthcare",
    image: "/aloe.jpg",
    inStock: true,
  },
  {
    id: "3",
    name: "Sandal Powder",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviewCount: 87,
    description: "Premium quality sandalwood powder for face packs, religious ceremonies, and aromatherapy. Natural cooling and soothing properties.",
    features: [
      "Pure Sandalwood",
      "Cooling Effect",
      "Natural Fragrance",
      "Skin Brightening",
      "Anti-aging Properties",
      "Traditional Quality"
    ],
    variants: [
      { name: "50g Pack", value: "50g" },
      { name: "100g Pack", value: "100g" },
      { name: "250g Pack", value: "250g" }
    ],
    category: "beautycare",
    image: "/sandal.jpg",
    inStock: true,
  },
  {
    id: "4",
    name: "Red Sandal Powder",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.7,
    reviewCount: 65,
    description: "Authentic red sandalwood powder known for its skin benefits and religious significance. Natural and pure quality.",
    features: [
      "100% Pure",
      "Skin Brightening",
      "Anti-tan Properties",
      "Natural Coolant",
      "Traditional Use",
      "Premium Quality"
    ],
    variants: [
      { name: "50g Pack", value: "50g" },
      { name: "100g Pack", value: "100g" }
    ],
    category: "beautycare",
    image: "/red-sandal.jpg",
    inStock: true,
  },
  {
    id: "5",
    name: "Paneer (Fresh)",
    price: 129.99,
    rating: 4.5,
    reviewCount: 112,
    description: "Fresh homemade paneer made from pure cow's milk. Soft, fresh, and perfect for all your cooking needs.",
    features: [
      "Fresh Daily",
      "Pure Cow Milk",
      "No Preservatives",
      "Soft Texture",
      "High Protein",
      "Homemade Quality"
    ],
    variants: [
      { name: "250g", value: "250g" },
      { name: "500g", value: "500g" },
      { name: "1kg", value: "1kg" }
    ],
    category: "food",
    image: "/paneer.jpg",
    inStock: true,
  },
  {
    id: "6",
    name: "Organic Ginger Powder",
    price: 159.99,
    rating: 4.6,
    reviewCount: 78,
    description: "Premium quality organic ginger powder with strong aroma and medicinal properties. Perfect for tea, cooking, and health remedies.",
    features: [
      "100% Organic",
      "Strong Aroma",
      "Digestive Aid",
      "Anti-inflammatory",
      "Fresh Ground",
      "No Additives"
    ],
    variants: [
      { name: "100g Pack", value: "100g" },
      { name: "250g Pack", value: "250g" }
    ],
    category: "medicine",
    image: "/ginger.jpg",
    inStock: true,
  },
  {
    id: "7",
    name: "Pure Honey",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviewCount: 156,
    description: "Raw, unprocessed honey collected from natural bee farms. Rich in nutrients and natural sweetness.",
    features: [
      "100% Pure",
      "Raw & Unprocessed",
      "Natural Sweetener",
      "Rich in Nutrients",
      "No Added Sugar",
      "Farm Fresh"
    ],
    variants: [
      { name: "250g Bottle", value: "250g" },
      { name: "500g Bottle", value: "500g" },
      { name: "1kg Bottle", value: "1kg" }
    ],
    category: "food",
    image: "/honey.jpg",
    inStock: true,
  },
  {
    id: "8",
    name: "Ayurvedic Herbs Mix",
    price: 189.99,
    rating: 4.7,
    reviewCount: 92,
    description: "Carefully blended mix of traditional ayurvedic herbs for overall wellness and immunity boost.",
    features: [
      "Traditional Formula",
      "Immunity Booster",
      "Natural Herbs",
      "No Chemicals",
      "Wellness Support",
      "Authentic Blend"
    ],
    variants: [
      { name: "100g Pack", value: "100g" },
      { name: "250g Pack", value: "250g" }
    ],
    category: "medicine",
    image: "/herbs.jpg",
    inStock: true,
  },
  {
    id: "9",
    name: "Organic Compost",
    price: 79.99,
    rating: 4.4,
    reviewCount: 45,
    description: "Premium quality organic compost made from natural ingredients. Perfect for your garden and plants.",
    features: [
      "100% Organic",
      "Nutrient Rich",
      "Eco-friendly",
      "Improves Soil",
      "Natural Fertilizer",
      "Chemical-free"
    ],
    variants: [
      { name: "1kg Pack", value: "1kg" },
      { name: "5kg Pack", value: "5kg" },
      { name: "10kg Pack", value: "10kg" }
    ],
    category: "agriculture",
    image: "/compost.jpg",
    inStock: true,
  },
  {
    id: "10",
    name: "Neem Oil",
    price: 139.99,
    rating: 4.5,
    reviewCount: 67,
    description: "Pure neem oil extracted from neem seeds. Natural pesticide and excellent for skin and hair care.",
    features: [
      "100% Pure",
      "Natural Pesticide",
      "Skin Care",
      "Hair Care",
      "Organic",
      "Multipurpose"
    ],
    variants: [
      { name: "100ml", value: "100ml" },
      { name: "250ml", value: "250ml" },
      { name: "500ml", value: "500ml" }
    ],
    category: "agriculture",
    image: "/neem.jpg",
    inStock: true,
  },
  {
    id: "11",
    name: "Face Pack Powder",
    price: 119.99,
    rating: 4.6,
    reviewCount: 89,
    description: "Natural face pack powder made from herbs and natural ingredients for glowing and healthy skin.",
    features: [
      "Natural Ingredients",
      "Skin Brightening",
      "Deep Cleansing",
      "No Chemicals",
      "Suitable for All Skin",
      "Traditional Recipe"
    ],
    variants: [
      { name: "100g Pack", value: "100g" },
      { name: "250g Pack", value: "250g" }
    ],
    category: "beautycare",
    image: "/facepack.jpg",
    inStock: true,
  },
  {
    id: "12",
    name: "Coconut Oil",
    price: 169.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 134,
    description: "Pure cold-pressed coconut oil. Perfect for cooking, hair care, and skin care. Natural and chemical-free.",
    features: [
      "Cold Pressed",
      "100% Pure",
      "Multipurpose",
      "Natural Aroma",
      "No Additives",
      "Traditional Method"
    ],
    variants: [
      { name: "250ml", value: "250ml" },
      { name: "500ml", value: "500ml" },
      { name: "1L", value: "1L" }
    ],
    category: "healthcare",
    image: "/coconut-oil.jpg",
    inStock: true,
  },
];