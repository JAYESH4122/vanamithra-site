import Head from "next/head";
import Header from "./components/header";
import Hero from "./components/hero";
import CategorySection from "./components/category-section";
import TestimonialSection from "./components/testimonial";
import AboutSection from "./components/about";
import Footer from "./components/footer";
import ContactSection from "./components/contact";
import { FeaturedProducts } from "./components/featured-products";

export default function Home() {
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
