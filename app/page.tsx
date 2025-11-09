"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "./components/header";
import Hero from "./components/hero";
import CategorySection from "./components/category-section";
import TestimonialSection from "./components/testimonial";
import AboutSection from "./components/about";
import Footer from "./components/footer";
import ContactSection from "./components/contact";
import { FeaturedProducts } from "./components/featured-products";

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
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <CategorySection />

        {/* Featured Products */}
<FeaturedProducts />

        {/* Testimonials */}
        <TestimonialSection />

        <ContactSection />

        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
