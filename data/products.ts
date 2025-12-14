export interface Product {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  variants: {
    name: string;
    value: string;
    price: number;
    originalPrice?: number;
  }[];
  category: string;
  image: string;
}

export const categories = [
  { id: "all", name: "All Products" },
  { id: "healthcare", name: "Health Care" },
  { id: "beautycare", name: "Beauty Care" },
  { id: "food", name: "Food Products" },
  { id: "agriculture", name: "Agriculture Items" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Aloe Vera Gel",
    rating: 4.8,
    reviewCount: 124,
    description:
      "Pure aloe vera gel extracted from fresh aloe leaves. Rich in vitamins A, C, E, and B12, perfect for skin hydration, soothing sunburns, and healing minor wounds. Excellent moisturizer for all skin types.",
    features: [
      "100% Natural Extract",
      "Deep Hydration",
      "Soothes Sunburn",
      "Anti-inflammatory",
      "Wound Healing",
      "No Greasy Residue",
    ],
    variants: [
      { name: "100ml", value: "100ml", price: 150 },
      { name: "200ml", value: "200ml", price: 280 },
      { name: "500ml", value: "500ml", price: 650 },
    ],
    category: "beautycare",
    image: "/aloe-vera-gel.jpg",
  },
  {
    id: "2",
    name: "Curcumin Gel",
    rating: 4.7,
    reviewCount: 98,
    description:
      "Turmeric-based curcumin gel with powerful anti-inflammatory and antioxidant properties. Ideal for acne treatment, skin brightening, and reducing dark spots. Helps manage eczema and psoriasis.",
    features: [
      "Anti-inflammatory",
      "Antioxidant Rich",
      "Brightens Skin Tone",
      "Reduces Dark Spots",
      "Acne Treatment",
      "Antimicrobial",
    ],
    variants: [
      { name: "50ml", value: "50ml", price: 180 },
      { name: "100ml", value: "100ml", price: 340 },
      { name: "200ml", value: "200ml", price: 650 },
    ],
    category: "beautycare",
    image: "/curcumin-gel.jpg",
  },
  {
    id: "3",
    name: "Fresh Paneer",
    rating: 4.5,
    reviewCount: 112,
    description:
      "Fresh homemade paneer made from pure cow's milk. High in protein (18-25g per 100g) and calcium, perfect for muscle building and bone health. Low in carbohydrates, ideal for all cooking needs.",
    features: [
      "High Protein",
      "Rich in Calcium",
      "Fresh Daily",
      "No Preservatives",
      "Low Carb",
      "Soft Texture",
    ],
    variants: [
      { name: "200g", value: "200g", price: 80 },
      { name: "500g", value: "500g", price: 190 },
      { name: "1kg", value: "1kg", price: 360 },
    ],
    category: "food",
    image: "/panineer.PNG",
  },
  {
    id: "4",
    name: "Papaya Gel",
    rating: 4.6,
    reviewCount: 87,
    description:
      "Natural papaya gel enriched with papain enzyme and antioxidants. Excellent for moisturization, anti-aging, acne control, and skin brightening. Gently exfoliates and promotes collagen production.",
    features: [
      "Rich in Papain Enzyme",
      "Anti-aging Formula",
      "Natural Exfoliant",
      "Reduces Dark Spots",
      "Acne Control",
      "Boosts Collagen",
    ],
    variants: [
      { name: "100ml", value: "100ml", price: 160 },
      { name: "200ml", value: "200ml", price: 300 },
      { name: "500ml", value: "500ml", price: 700 },
    ],
    category: "beautycare",
    image: "/papaya-gel.jpg",
  },
  {
    id: "5",
    name: "Red Sandal Powder",
    rating: 4.7,
    reviewCount: 65,
    description:
      "Authentic red sandalwood powder known for exceptional skin brightening and anti-tan properties. Fights acne, reduces pigmentation, and provides natural cooling effect. Rich in antioxidants for anti-aging benefits.",
    features: [
      "Skin Brightening",
      "Anti-tan Properties",
      "Fights Acne",
      "Reduces Pigmentation",
      "Natural Coolant",
      "Antioxidant Rich",
    ],
    variants: [
      { name: "50g", value: "50g", price: 120 },
      { name: "100g", value: "100g", price: 220 },
      { name: "250g", value: "250g", price: 500 },
    ],
    category: "beautycare",
    image: "/red-sandal-powder.jpg",
  },
  {
    id: "6",
    name: "Saffron Gel",
    rating: 4.9,
    reviewCount: 156,
    description:
      "Premium saffron (Kesar) gel with powerful antioxidants including crocin and safranal. Brightens complexion, reduces dark circles, provides anti-aging benefits, and deeply moisturizes skin for a radiant glow.",
    features: [
      "Antioxidant Shield",
      "Skin Brightening",
      "Reduces Dark Circles",
      "Anti-aging Formula",
      "Deep Moisturization",
      "Natural Radiance",
    ],
    variants: [
      { name: "50ml", value: "50ml", price: 250 },
      { name: "100ml", value: "100ml", price: 480 },
      { name: "200ml", value: "200ml", price: 900 },
    ],
    category: "beautycare",
    image: "/saffron-gel.jpg",
  },
  {
    id: "7",
    name: "Sandal Powder",
    rating: 4.6,
    reviewCount: 78,
    description:
      "Premium quality sandalwood powder with natural antiseptic and anti-inflammatory properties. Controls oil, fights acne, brightens skin tone, and provides cooling effect. Perfect for face packs and aromatherapy.",
    features: [
      "Antiseptic Properties",
      "Oil Control",
      "Acne Treatment",
      "Skin Brightening",
      "Cooling Effect",
      "Natural Fragrance",
    ],
    variants: [
      { name: "50g", value: "50g", price: 140 },
      { name: "100g", value: "100g", price: 260 },
      { name: "250g", value: "250g", price: 600 },
    ],
    category: "beautycare",
    image: "/sandal-powder.jpg",
  },
  {
    id: "8",
    name: "Wild Turmeric Powder",
    rating: 4.7,
    reviewCount: 92,
    description:
      "Kasturi Manjal (Wild Turmeric) powder with antibacterial and anti-inflammatory properties. Reduces acne, brightens skin, controls oil, and slows facial hair growth. Non-staining formula suitable for all skin types.",
    features: [
      "Non-staining Formula",
      "Acne Reduction",
      "Skin Brightening",
      "Oil Control",
      "Anti-inflammatory",
      "Reduces Facial Hair",
    ],
    variants: [
      { name: "50g", value: "50g", price: 130 },
      { name: "100g", value: "100g", price: 240 },
      { name: "250g", value: "250g", price: 550 },
    ],
    category: "beautycare",
    image: "/wild-turmeric-powder.jpg",
  },
];
