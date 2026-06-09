export interface Game {
  id: string;
  name: string;
  category: "mobile" | "pc" | "console";
  image: string;
  developer: string;
  bundles: Bundle[];
  pilotingOptions?: PilotingOption[];
}

export interface Bundle {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  bonus?: string;
  type: "currency" | "pass" | "gift";
}

export interface PilotingOption {
  id: string;
  name: string;
  basePrice: number;
  unit: string; // e.g. "star", "level", "rank"
}

export interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  type: "e-wallet" | "qris" | "bank-transfer";
  fee: number; // percentage or flat
  flatFee: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export interface Playmate {
  id: string;
  name: string;
  username: string;
  avatar: string;
  games: string[]; // game names or IDs
  rank: string;
  rating: number;
  reviews: number;
  pricePerMatchHex: number; // IDR per match
  status: "online" | "offline" | "in-game";
  voiceNoteUrl?: string;
  role?: string;
  accentColor: string;
  gender: "Male" | "Female";
}

export interface RekberTransaction {
  id: string;
  title: string;
  buyerName: string;
  sellerName: string;
  itemDescription: string;
  price: number;
  fee: number;
  feePayer: "buyer" | "seller" | "split";
  status: "waiting-payment" | "payment-verified" | "item-shipping" | "item-received" | "completed" | "disputed";
  createdAt: string;
  lastUpdated: string;
}

export interface PilotingOrder {
  id: string;
  gameId: string;
  serviceType: string;
  startRankOrLevel: string;
  targetRankOrLevel: string;
  quantity: number;
  estimatedPrice: number;
  loginMethod: "moonton" | "google" | "facebook" | "vk" | "riot" | "epic";
  notes: string;
}
