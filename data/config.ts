// Global configuration and constants

export const config = {
  // WhatsApp Business Number
  whatsappNumber: "917909102100",

  // Company Information
  company: {
    name: "Vanamithra",
    tagline: "Nature's Promise, Delivered",
    location: "Vanamithra, Thalapuzha, Wayanad",
  },

  // Contact Information
  contact: {
    email: "vanamithranatural@gmail.com",
    phone: "+91 79091 02100",
    phoneRaw: "+917909102100",
  },

  // Business Hours
  businessHours: "Mon - Sun: 9:00 AM - 7:00 PM",
} as const;

// Helper function to create WhatsApp URL
export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};
