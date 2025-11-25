// Product detail page data

export const productDetailPageData = {
  notFound: {
    emoji: "🔍",
    title: "Product Not Found",
    subtitle: "The product you're looking for doesn't exist.",
    ctaButton: "Browse All Products",
  },
  breadcrumb: {
    home: "Home",
    products: "Products",
  },
  stockBadge: "In Stock",
  reviews: "reviews",
  selectPackageSize: "Select Package Size",
  quantity: "Quantity",
  buttons: {
    orderViaWhatsApp: "Order via WhatsApp",
    moreInfo: "More Info",
  },
  productFeatures: "Product Features",
} as const;

// WhatsApp message templates
export const createProductOrderMessage = (
  productName: string,
  variantName: string,
  quantity: number,
  totalPrice: string
): string => {
  return `Hi Vanamithra! 🌿\n\nI'd like to order:\n*${productName}*\nVariant: ${variantName}\nQuantity: ${quantity}\nTotal: ${totalPrice}\n\nPlease confirm availability and proceed with order.`;
};

export const createProductInquiryMessage = (productName: string): string => {
  return `Hello Vanamithra! 🌿\n\nI'm interested in:\n*${productName}*\n\nCould you share more details about this product?`;
};
