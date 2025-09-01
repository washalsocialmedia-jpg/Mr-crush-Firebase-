
import type { AdminSettings } from "./types";

const defaultLogicInstructions = {
  en: [
    {
      keywords: ["delivery", "arrive", "when will", "come", "shipping", "parcel", "charges", "how many", "post"],
      answer: "Our standard delivery time is 3-5 business days. The delivery charges are less than Rs.250. If you add multiple items from a single catalog to your cart and order them to the same address, you will be charged for delivery only once. However, if you place separate orders for each item, you will be charged for delivery separately for each order. For more information, please contact us on [WhatsApp Link]."
    },
    {
      keywords: ["return", "return policy", "item", "wrong", "incomplete", "damaged"],
      answer: "Returns are allowed within 7 days of delivery. If you receive a wrong, different, or incomplete order, you can request a return within seven (7) days. Please contact us on WhatsApp for assistance: [WhatsApp Link]."
    }
  ],
  ur: [
    {
      keywords: ["ڈلیوری", "کب", "آئے گا", "پہنچے گا", "پارسل", "چارجز", "کتنے", "ڈاک", "خرچہ"],
      answer: "آپ کا آرڈر 3-5 کاروباری دنوں میں پہنچ جائے گا۔ ڈیلیوری چارجز 250 روپے سے کم ہیں۔ اگر آپ ایک ہی کیٹلاگ سے ایک سے زیادہ آئٹمز کو 'کارٹ میں شامل کریں' کر کے ایک ہی پتے پر آرڈر کریں گے تو ان تمام آئٹمز پر صرف ایک ہی ڈیلیوری چارج لگے گا۔ لیکن اگر آپ الگ الگ آرڈر کریں گے تو ہر آرڈر پر الگ ڈیلیوری چارجز لگیں گے۔ مزید معلومات کے لیے، واٹس ایپ پر رابطہ کریں: [WhatsApp Link]۔"
    },
    {
      keywords: ["واپسی", "ریٹرن", "پالیسی", "غلط", "نامکمل", "نقصان"],
      answer: "ریٹرن 7 دن کے اندر ممکن ہے۔ اگر آپ کو غلط، مختلف یا نامکمل آرڈر موصول ہو تو آپ سات (7) دن کے اندر واپسی کی درخواست دے سکتے ہیں۔ واٹس ایپ پر رابطہ کریں: [WhatsApp Link]۔"
    }
  ]
};

export const defaultAdminSettings: AdminSettings = {
    isChatbotEnabled: true,
    chatbotInstructions: 'You are a friendly and helpful assistant for our e-commerce store. Keep your answers concise and focused on our products and store policies.',
    chatbotLogicalInstructions: JSON.stringify(defaultLogicInstructions, null, 2),
    isAiChatbotModeEnabled: true,
    paymentGateways: [
        { id: 'cod', name: 'Cash on Delivery', enabled: true },
        { id: 'stripe', name: 'Credit/Debit Card (Stripe)', enabled: false, apiKey: '', secretKey: '' },
        { id: 'paypal', name: 'PayPal', enabled: false, apiKey: '' },
        { id: 'jazzcash', name: 'JazzCash', enabled: false, merchantId: '', accountNumber: '' },
        { id: 'easypaisa', name: 'EasyPaisa', enabled: false, merchantId: '', accountNumber: '' },
    ],
    supabaseUrl: '',
    supabaseAnonKey: '',
    isWhatsappEnabled: false,
    whatsappUrl: 'https://bit.ly/3UmUwBa',
    googleAiApiKey: '',
    socialLinks: [],
    areSocialLinksEnabled: true,
};
