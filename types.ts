

export interface ProductShipping {
  type: 'free' | 'fixed';
  amount?: number;
  currency?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  quantity: number;
  imageUrl: string;
  data_ai_hint: string;
  category: string;
  description: string;
  shortDescription?: string; // Add this line
  features: string[];
  rating: number;
  reviewsCount: number;
  onSale: boolean;
  bestSeller: boolean;
  shipping?: ProductShipping;
  soldCount?: number;
  discountPercentage?: number;
  promoText?: string;
}


export interface CartItem extends Product {
  cartQuantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  items: (Product & { quantity: number, cartQuantity?: number })[]; // Ensure items can have quantity for orders
  subtotal: number;
  deliveryTotal: number;
  total: number;
  currency: string;
  status: 'Pending' | 'Shipped' | 'Delivered';
  createdAt: Date;
  paymentMethod: string;
}

export interface PaymentGateway {
  id: 'cod' | 'stripe' | 'paypal' | 'jazzcash' | 'easypaisa';
  name: string;
  enabled: boolean;
  apiKey?: string; // For Stripe, PayPal
  secretKey?: string; // For Stripe
  merchantId?: string; // For JazzCash, EasyPaisa
  accountNumber?: string; // For JazzCash, EasyPaisa
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  enabled: boolean;
}

export interface AdminSettings {
  isChatbotEnabled: boolean;
  chatbotInstructions: string;
  chatbotLogicalInstructions: string; // Add this line
  isAiChatbotModeEnabled: boolean; // Add this line
  paymentGateways: PaymentGateway[];
  supabaseUrl: string;
  supabaseAnonKey: string;
  isWhatsappEnabled: boolean;
  whatsappUrl: string;
  googleAiApiKey: string;
  socialLinks: SocialLink[];
  areSocialLinksEnabled: boolean;
}
