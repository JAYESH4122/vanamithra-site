"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { getProductById } from "@/lib/products-data";
import { useParams } from "next/navigation";
import { products } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  // Fetch related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product.id)
    .slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] ?? { name: "", value: "", price: 0 }
  );

  const handleVariantSelect = (variant: {
    name: string;
    value: string;
    price: number;
    originalPrice?: number;
  }) => {
    setSelectedVariant(variant);
  };
  const [quantity, setQuantity] = useState(1);

  const totalPrice = selectedVariant.price
    ? selectedVariant.price * quantity
    : 0;
  const totalOriginalPrice = selectedVariant.originalPrice
    ? selectedVariant.originalPrice * quantity
    : 0;

  // Fallback if product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/products"
            className="inline-block bg-yellow text-black py-3 px-8 rounded-xl font-semibold hover:bg-yellow/90 hover:shadow-lg transition-all"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const orderViaWhatsApp = () => {
    const whatsappNumber = "919207025005";
    const message = `Hi Vanamithra! 🌿\n\nI'd like to order:\n*${
      product.name
    }*\nVariant: ${
      selectedVariant.name
    }\nQuantity: ${quantity}\nTotal: ₹${totalPrice.toFixed(
      2
    )}\n\nPlease confirm availability and proceed with order.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappUrl;
  };

  const inquireViaWhatsApp = () => {
    const whatsappNumber = "919207025005";
    const message = `Hello Vanamithra! 🌿\n\nI'm interested in:\n*${product.name}*\n\nCould you share more details about this product?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen primary-bg">
      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-400">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <FiChevronRight className="inline" />
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-primary transition-color"
              >
                Products
              </Link>
            </li>
            <li>
              <FiChevronRight className="inline" />
            </li>
            <li className="text-white font-medium">{product.category}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-white rounded-2xl shadow-sm overflow-hidden aspect-square border border-gray-100"
            >
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-amber-50 to-orange-50">
                <span className="text-8xl">🌿</span>
              </div>
            </motion.div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100"
            >
              {/* Rating & Stock */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={12}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm md:text-base">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                <span className="mx-4 text-gray-300">|</span>
              </div>

              {/* Product Name */}
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Variant Selection - Updated */}
              <div className="mb-8">
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-4">
                  Select Package Size
                </h3>
                <div className="flex flex-wrap gap-1 md:gap-3">
                  {product.variants.map((variant) => (
                    <motion.button
                      key={variant.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleVariantSelect(variant)}
                      className={`px-2 md:px-4 py-1 md:py-2 text-sm md:text-lg rounded-xl border-2 flex flex-col flex-1 md:flex-none font-medium transition-all duration-300 ${
                        selectedVariant.value === variant.value
                          ? "bg-yellow border-yellow text-black shadow-lg"
                          : "border-gray-300 text-gray-700 hover:border-yellow hover:bg-yellow/10"
                      }`}
                    >
                      {variant.name}
                      <div className="text-xs mt-1 font-normal">
                        ₹{variant.price}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector with Dynamic Pricing */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quantity
                </h3>
                <div className="flex items-center mb-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange(-1)}
                    className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center border-2 border-gray-300 rounded-l-xl text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    -
                  </motion.button>
                  <div className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center border-t-2 border-b-2 border-gray-300 text-lg font-semibold text-gray-900">
                    {quantity}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange(1)}
                    className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center border-2 border-gray-300 rounded-r-xl text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    +
                  </motion.button>
                </div>

                {/* Total Price Display */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Total:
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary-dark">
                        ₹{totalPrice.toFixed(2)}
                      </span>
                      {totalOriginalPrice > 0 && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ₹{totalOriginalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={orderViaWhatsApp}
                  className="flex-1 bg-yellow hover:bg-yellow/90 text-black py-2 px-4 md:py-4 md:px-8 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="md:w-6 md:h-6 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Order via WhatsApp
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={inquireViaWhatsApp}
                  className="border-2 border-yellow text-sm md:text-base text-yellow font-semibold py-1.5 px-4 md:py-4 md:px-8 rounded-xl hover:bg-yellow/10 transition-colors duration-300 backdrop-blur-sm flex items-center justify-center gap-2 will-change-transform"
                >
                  <svg
                    className="md:w-6 md:h-6 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  More Info
                </motion.button>
              </div>

              {/* Product Features */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Product Features
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center p-2.5 rounded-lg bg-gray-50 border border-gray-200"
                    >
                      <div className="w-6 h-6 bg-primary rounded-full md:flex items-center justify-center mr-3 hidden ">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>

                      <span className="text-gray-700 text-[12px] md:text-sm font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Related Products */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-black mb-4">
                Related Products
              </h3>

              {relatedProducts.length === 0 ? (
                <p className="text-gray-600 text-sm">
                  No related products available.
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {relatedProducts.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden"
                    >
                      <Link href={`/${item.id}`} className="block">
                        {/* Image */}
                        <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                          <span className="text-3xl">🌿</span>
                        </div>

                        {/* Content */}
                        <div className="p-3">
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                            {item.name}
                          </h4>

                          <p className="text-xs text-gray-500 mb-2 capitalize">
                            {item.category}
                          </p>

                          <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-primary-dark">
                              ₹{item.variants[0].price}
                            </span>

                            {item.variants[0].originalPrice && (
                              <span className="text-xs line-through text-gray-400">
                                ₹{item.variants[0].originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
