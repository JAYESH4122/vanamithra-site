"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      rating: 4.8,
      image: "/headphones.jpg",
      category: "Electronics",
      discount: 15, 
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 199.99,
        rating: 4.8,
        image: "/headphones.jpg",
        category: "Electronics",
        discount: 15,
      },
      {
        id: 2,
        name: "Minimalist Watch",
        price: 149.99,
        rating: 4.6,
        image: "/watch.jpg",
        category: "Accessories",
        discount: 10,
      },
      {
        id: 3,
        name: "Designer Backpack",
        price: 89.99,
        rating: 4.7,
        image: "/backpack.jpg",
        category: "Fashion",
        discount: 20,
      },
      {
        id: 4,
        name: "Smart Home Speaker",
        price: 129.99,
        rating: 4.5,
        image: "/speaker.jpg",
        category: "Electronics",
        discount: 5,
      },
      {
        id: 5,
        name: "Running Shoes",
        price: 119.99,
        rating: 4.9,
        image: "/shoes.jpg",
        category: "Sports",
        discount: 25,
      },
      {
        id: 6,
        name: "Sunglasses",
        price: 79.99,
        rating: 4.4,
        image: "/sunglasses.jpg",
        category: "Accessories",
        discount: 15,
      },
      {
        id: 7,
        name: "Fitness Tracker",
        price: 69.99,
        rating: 4.3,
        image: "/tracker.jpg",
        category: "Electronics",
        discount: 10,
      },
      {
        id: 8,
        name: "Casual T-Shirt",
        price: 29.99,
        rating: 4.2,
        image: "/tshirt.jpg",
        category: "Fashion",
        discount: 30,
      },
    ];

    setFeaturedProducts(mockProducts);
    setIsLoading(false);
  }, []);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    { name: "Electronics", icon: "🔌", count: 128 },
    { name: "Fashion", icon: "👕", count: 256 },
    { name: "Home & Kitchen", icon: "🏠", count: 187 },
    { name: "Beauty", icon: "💄", count: 92 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>StyleShop | Premium E-commerce Experience</title>
        <meta
          name="description"
          content="Discover amazing products at great prices"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-base font-bold text-[#0A3D30] font-open-sans pr-6 sm:text-2xl">Vanamithra</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 text-sm pl-54 lg:pl-0 lg:text-base">
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                About
              </a>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-indigo-600">
                  <FiSearch size={20} />
                </button>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-5">


              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 lg:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-indigo-600">
                <FiSearch size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 text-sm">
            <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                About
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#30B254] to-[#96BD40] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Banner Title
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl mb-8"
                >
                  Discover the products and buy from Vanamithra.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex space-x-4"
                >
                  <button className="bg-white text-[#0C3B30] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 flex-1 md:flex-none">
                    Shop Now
                  </button>
                  <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300 flex-1 md:flex-none">
                    Checkout
                  </button>
                </motion.div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-md"  
                >
                  <div className="bg-[#2DAF51] bg-opacity-20 rounded-full p-10">
                    <div className="bg-[#2DAF51] rounded-lg shadow-2xl p-6 transform rotate-3">
                      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-black">
                        <div className="flex items-center justify-center h-64">
                          <span className="text-6xl">🛒</span>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="font-bold text-white">
                          Vanamithra Product
                        </h3>
                        <div className="flex items-center justify-center mt-2">
                          <span className="text-black font-bold text-xl">
                          ₹199.99
                          </span>
                          <span className="ml-2 text-gray line-through">
                          ₹249.99
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Shop by Category
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our wide range of categories to find exactly what you're
                looking for
              </p>
            </div>

            <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-lg p-6 text-center cursor-pointer hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {category.count} items
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Featured Products
                </h2>
                <p className="text-gray-600">
                  Our most popular products based on sales
                </p>
              </div>
              <button className="hidden md:flex items-center text-indigo-600 font-semibold">
                View All <FiArrowRight className="ml-2" />
              </button>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-4 animate-pulse"
                  >
                    <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                    onClick={() => router.push(`/${product.id}`)}
                  >
                    <div className="relative">
                      <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                        <div className="flex items-center justify-center h-48">
                          <span className="text-4xl">📦</span>
                        </div>
                      </div>
                      {product.discount > 0 && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          -{product.discount}%
                        </div>
                      )}
                      <button
                        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                        onClick={addToCart}
                      >
                        <FiShoppingCart size={16} />
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            size={14}
                            className={
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.rating})
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-indigo-600">
                            ${product.price}
                          </span>
                          {product.discount > 0 && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              $
                              {(
                                product.price /
                                (1 - product.discount / 100)
                              ).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <button
                          className="text-indigo-600 hover:text-indigo-800"
                          onClick={addToCart}
                        >
                          <FiShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-8 text-center md:hidden">
              <button className="text-indigo-600 font-semibold">
                View All Products
              </button>
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Special Offer - Limited Time!
                  </h2>
                  <p className="text-indigo-100 mb-6 max-w-2xl">
                    Get 30% off on all electronics this weekend. Use code{" "}
                    <span className="font-bold">WEEKEND30</span> at checkout.
                  </p>
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                      <span className="text-2xl font-bold">02</span>
                      <p className="text-xs">Days</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                      <span className="text-2xl font-bold">12</span>
                      <p className="text-xs">Hours</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                      <span className="text-2xl font-bold">45</span>
                      <p className="text-xs">Minutes</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                      <span className="text-2xl font-bold">18</span>
                      <p className="text-xs">Seconds</p>
                    </div>
                  </div>
                  <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                    Shop Now
                  </button>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="bg-white bg-opacity-10 rounded-full p-6">
                      <div className="bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
                        <div className="flex items-center justify-center h-40 w-40">
                          <span className="text-5xl">📱</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our
                satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Fashion Enthusiast",
                  comment:
                    "The quality of products I've purchased from StyleShop has been exceptional. Shipping was fast and customer service was excellent!",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Tech Reviewer",
                  comment:
                    "As someone who reviews tech products regularly, I'm impressed with the electronics selection and competitive pricing here.",
                  rating: 5,
                },
                {
                  name: "Emma Rodriguez",
                  role: "Interior Designer",
                  comment:
                    "I regularly source home decor items from StyleShop for my clients. The variety and quality are consistently impressive.",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-300 mb-8">
                Stay updated with our latest products, exclusive offers, and
                industry news.
              </p>

              <div className="flex flex-col sm:flex-row max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow py-3 px-4 rounded-l-lg sm:rounded-r-none rounded-r-lg sm:mb-0 mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-r-lg sm:rounded-l-none rounded-l-lg font-semibold transition duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Vanamithra</h3>
              <p className="text-gray-400 mb-4">
                Providing quality products and exceptional service since 2015.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Today's Deals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sale
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Commerce Street, Suite 567</li>
                <li>New York, NY 10001</li>
                <li>+1 (555) 123-4567</li>
                <li>support@styleshop.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Vanamithra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
