'use client'

import { useState } from 'react';
import Head from 'next/head';
import { FiShoppingCart, FiHeart, FiStar, FiChevronLeft, FiChevronRight, FiShare2, FiTruck, FiRotateCw, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Mock product data - in a real app this would come from your data source
const product = {
  id: "1",
  name: "Premium Wireless Headphones",
  price: 199.99,
  originalPrice: 249.99,
  rating: 4.8,
  reviewCount: 124,
  description: "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for music lovers, gamers, and professionals who demand the best sound quality.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Memory foam ear cushions",
    "Bluetooth 5.2 connectivity",
    "Voice assistant support",
    "Foldable design"
  ],
  colors: [
    { name: "Matte Black", value: "#2C2C2C" },
    { name: "Silver", value: "#E5E5E5" },
    { name: "Midnight Blue", value: "#1E3A5F" }
  ],
  sizes: ["Standard", "Extra Bass", "Studio Edition"],
  image: "/headphones.jpg",
  images: [
    "/headphones.jpg",
    "/headphones-2.jpg",
    "/headphones-3.jpg",
    "/headphones-4.jpg"
  ],
  inStock: true,
  sku: "HP-X789B",
  category: "Electronics",
  tags: ["Wireless", "Noise Cancelling", "Premium", "Audio"],
  shipping: {
    free: true,
    delivery: "2-4 business days",
    returns: "30-day return policy"
  }
};

const reviews = [
  {
    id: 1,
    user: "Sarah Johnson",
    rating: 5,
    date: "2023-10-15",
    title: "Best headphones I've ever owned!",
    comment: "The sound quality is exceptional and the noise cancellation is incredible. I use them for work calls and the microphone clarity is impressive too.",
    verified: true
  },
  {
    id: 2,
    user: "Michael Chen",
    rating: 4,
    date: "2023-10-10",
    title: "Great product with minor drawbacks",
    comment: "Love the sound and comfort, but the case could be more protective. Battery life is as advertised though!",
    verified: true
  },
  {
    id: 3,
    user: "Emma Rodriguez",
    rating: 5,
    date: "2023-10-05",
    title: "Worth every penny",
    comment: "I've tried many premium headphones and these are by far the most comfortable for long listening sessions. The audio quality is superb across all frequencies.",
    verified: false
  }
];

const relatedProducts = [
  {
    id: "2",
    name: "Noise Cancelling Earbuds",
    price: 129.99,
    rating: 4.5,
    image: "/earbuds.jpg",
    category: "Electronics"
  },
  {
    id: "3",
    name: "Wireless Charging Pad",
    price: 49.99,
    rating: 4.3,
    image: "/charger.jpg",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Premium Headphone Stand",
    price: 34.99,
    rating: 4.7,
    image: "/stand.jpg",
    category: "Accessories"
  }
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (amount : number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const addToCart = () => {
    // Cart functionality would go here
    console.log('Added to cart:', {
      product: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{product.name} | StyleShop</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header would be the same as homepage */}

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>Home</li>
            <li><FiChevronRight className="inline" /></li>
            <li>Shop</li>
            <li><FiChevronRight className="inline" /></li>
            <li>{product.category}</li>
            <li><FiChevronRight className="inline" /></li>
            <li className="text-gray-800">{product.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="relative bg-white rounded-xl shadow-sm overflow-hidden mb-4 aspect-square">
              {/* Main Image */}
              <div className="flex items-center justify-center h-full bg-gray-100">
                <span className="text-6xl">🎧</span>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <FiChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <FiChevronRight size={24} />
              </button>
              
              {/* Favorite Button */}
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-4 right-4 rounded-full p-3 shadow-md transition-colors ${
                  isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:text-red-500'
                }`}
              >
                <FiHeart size={20} />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`bg-white rounded-lg p-2 border-2 ${
                    activeImage === index ? 'border-indigo-600' : 'border-gray-200'
                  }`}
                >
                  <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
                    <span className="text-2xl">🎧</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <span className="mx-4 text-gray-300">|</span>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="ml-4 bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color: {selectedColor.name}</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor.name === color.name ? 'border-indigo-600' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedSize === size 
                          ? 'border-indigo-600 bg-indigo-100 text-indigo-700' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={addToCart}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium transition-colors">
                  Buy Now
                </button>
              </div>

              {/* Product Features */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping & Returns */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <FiTruck className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Free Shipping</h4>
                      <p className="text-sm text-gray-500">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <FiRotateCw className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Easy Returns</h4>
                      <p className="text-sm text-gray-500">30-day return policy</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <FiShield className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Secure Payment</h4>
                      <p className="text-sm text-gray-500">Safe and encrypted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Share & SKU */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <button className="flex items-center hover:text-indigo-600">
                <FiShare2 size={16} className="mr-2" />
                Share this product
              </button>
              <div>
                SKU: <span className="text-gray-700">{product.sku}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="my-16">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            
            {/* Review Summary */}
            <div className="flex flex-col md:flex-row items-start mb-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="flex items-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">{product.rating}</span>
                  <span className="text-2xl text-gray-500 ml-1">/5</span>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      size={20} 
                      className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">{product.reviewCount} reviews</p>
              </div>
              
              <div className="md:w-2/3 w-full">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = reviews.filter(r => Math.floor(r.rating) === rating).length;
                  const percentage = (count / reviews.length) * 100;
                  
                  return (
                    <div key={rating} className="flex items-center mb-2">
                      <span className="w-16 text-gray-600">{rating} star</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                        <div 
                          className="h-2 bg-yellow-400 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="w-16 text-right text-gray-600">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          size={16} 
                          className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <h3 className="ml-3 font-medium text-gray-900">{review.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{review.comment}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-gray-900">{review.user}</span>
                    {review.verified && (
                      <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">Verified Purchase</span>
                    )}
                    <span className="mx-2">•</span>
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-6 rounded-lg font-medium transition-colors">
              Load More Reviews
            </button>
          </div>
        </section>

        {/* Related Products */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <div className="flex items-center justify-center h-48">
                    <span className="text-4xl">📦</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                    <div className="flex items-center">
                      <FiStar size={14} className="text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer would be the same as homepage */}
    </div>
  );
}