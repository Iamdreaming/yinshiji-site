export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: 'set' | 'single';
  collection: 'silver-carved' | 'gold-carved' | 'rosewood-handle';
  material: string;
  pieces: string[];
  description: string;
  features: string[];
  careNotes: string;
  priceNote: string;
  /** Price in CNY for Schema.org offers. Single pieces ~9.9-12.9, sets ~39.9-49.9. */
  price: number;
  specs: { label: string; value: string }[];
  designNote: string;
  useCases: { title: string; description: string }[];
  orderSteps: string[];
  imagePlaceholder: string;
}

const piecesSilverGold = ['Knife', 'Dinner Fork', 'Dinner Spoon', 'Small Fork', 'Small Spoon'];
const piecesWenge = ['Knife', 'Dinner Fork', 'Dinner Spoon', 'Chopsticks', 'Small Spoon'];

export const products: Product[] = [
  {
    slug: 'silver-carved-fork',
    name: 'Silver Carved Dinner Fork',
    tagline: 'Carved fork for everyday use.',
    category: 'single',
    collection: 'silver-carved',
    material: 'Premium 304 Stainless Steel with Silver Tone Finish',
    pieces: ['1× Dinner Fork'],
    description:
      'A single dinner fork from our Silver Carved collection, featuring a carved handle pattern inspired by Chinese decorative motifs. Crafted from 304 stainless steel with a silver tone finish, this fork adds a clean, detailed look to your table.',
    features: [
      'Premium 304 stainless steel construction',
      'Carved handle design inspired by Chinese motifs',
      'Silver tone finish — resistant to tarnish with proper care',
      'Good weight, balanced feel',
      'Hand wash recommended',
    ],
    careNotes: 'Hand wash recommended. Avoid abrasive cleaners. Dry immediately to maintain lustre.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 12.9,
    specs: [
        {
            "label": "Material",
            "value": "304 stainless steel with silver tone finish"
        },
        {
            "label": "Included",
            "value": "1 dinner fork"
        },
        {
            "label": "Best for",
            "value": "Single-place replacement, dessert, daily table styling"
        },
        {
            "label": "Care",
            "value": "Hand wash recommended; dry promptly"
        },
    { "label": "Dimensions", "value": "Main fork: 20.5 cm (8.1 in)" },
    ],
    designNote: "This single fork keeps the silver carved language lightweight: enough pattern to catch the light, but still quiet enough for daily meals. It is useful as a first sample piece before building a full set.",
    useCases: [
        {
            "title": "First sample",
            "description": "A low-commitment way to feel the weight, carving, and finish before choosing a full set."
        },
        {
            "title": "Daily table",
            "description": "Works with simple plates and neutral linens without making the table feel overly formal."
        },
        {
            "title": "Content styling",
            "description": "Good for close-up product photos, dessert scenes, and small table-setting shots."
        }
    ],
    orderSteps: [
        "Review the product details and care notes on this page.",
        "Contact Yinshiji for current availability, batch status, and sample options.",
        "Domestic customers can complete the purchase through the Taobao store when the item is available.",
        "For wholesale, gifting, or collaboration inquiries, share the intended quantity and use case first."
    ],
    imagePlaceholder: '/images/products/silver-carved-fork-single.webp',
  },
  {
    slug: 'silver-carved-5-piece-set',
    name: 'Silver Carved 5-Piece Set',
    tagline: 'Complete set, carved handles throughout.',
    category: 'set',
    collection: 'silver-carved',
    material: '304 Stainless Steel Forks & Spoons, 410 Stainless Steel Knife, Silver Tone Finish',
    pieces: piecesSilverGold,
    description:
      'The Silver Carved 5-Piece Set includes a knife, dinner fork, dinner spoon, small fork, and small spoon — all with the same carved pattern. A complete set for daily or hosting tables.',
    features: [
      'Complete 5-piece place setting',
      'Each piece features matching carved handle design',
      '304 stainless steel forks and spoons; 410 stainless steel knife with silver tone finish',
      'Ideal for daily use or special occasions',
    ],
    careNotes: 'Hand wash recommended. Avoid abrasive cleaners. Dry immediately to maintain lustre.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 49.9,
    specs: [
        {
            "label": "Material",
            "value": "Knife: 410 stainless steel; fork and spoons: 304 stainless steel; silver tone finish"
        },
        {
            "label": "Included",
            "value": "Knife, dinner fork, dinner spoon, small fork, small spoon"
        },
        {
            "label": "Best for",
            "value": "A complete place setting for daily dining or simple hosting"
        },
        {
            "label": "Care",
            "value": "Hand wash recommended; avoid abrasive cleaners"
        },
    { "label": "Piece dimensions", "value": "Knife 23.8 cm / Main fork 20.5 cm / Main spoon 20 cm / Small fork 16.5 cm / Small spoon 16.5 cm" },
    ],
    designNote: "The silver set is the most balanced Yinshiji expression: carved detail, clean metal tone, and a complete place setting. It is designed for customers who want visible craft without a heavy decorative look.",
    useCases: [
        {
            "title": "Everyday refined table",
            "description": "A complete five-piece setting for meals that need a little more order and texture."
        },
        {
            "title": "Small gathering",
            "description": "The matching carved handles help the table look cohesive without needing extra decoration."
        },
        {
            "title": "Starter gift set",
            "description": "A practical entry into the collection when the recipient prefers classic silver tones."
        }
    ],
    orderSteps: [
        "Review the product details and care notes on this page.",
        "Contact Yinshiji for current availability, batch status, and sample options.",
        "Domestic customers can complete the purchase through the Taobao store when the item is available.",
        "For wholesale, gifting, or collaboration inquiries, share the intended quantity and use case first."
    ],
    imagePlaceholder: '/images/products/silver-carved-5-piece-set-final.webp',
  },
  {
    slug: 'gold-carved-fork',
    name: 'Gold Tone Carved Dinner Fork',
    tagline: 'Warm gold tone, carved detail.',
    category: 'single',
    collection: 'gold-carved',
    material: 'Premium 304 Stainless Steel with Gold Tone Finish',
    pieces: ['1× Dinner Fork'],
    description:
      'A single dinner fork from our Gold Tone Carved collection. The warm gold tone paired with carved handles creates a warm table look. Made from 304 stainless steel. Note: the gold tone is a decorative surface finish, not real gold.',
    features: [
      'Premium 304 stainless steel construction',
      'Warm gold tone finish (not real gold)',
      'Carved handle pattern',
      'Robust and balanced for comfortable dining',
      'Hand washing recommended for finish longevity',
    ],
    careNotes: 'Hand wash with mild soap. Avoid bleach or harsh detergents. Dry promptly.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 12.9,
    specs: [
        {
            "label": "Material",
            "value": "304 stainless steel with warm gold tone finish"
        },
        {
            "label": "Included",
            "value": "1 dinner fork"
        },
        {
            "label": "Gold note",
            "value": "Gold tone is a surface finish, not real gold or gold-plated"
        },
        {
            "label": "Care",
            "value": "Hand wash with mild soap; dry promptly"
        },
    { "label": "Dimensions", "value": "Main fork: 20.5 cm (8.1 in)" },
    ],
    designNote: "The gold tone fork is more expressive than the silver version. It is meant to add warmth and table presence while staying honest about the finish: this is a decorative tone, not a precious-metal claim.",
    useCases: [
        {
            "title": "Accent piece",
            "description": "Use one or two gold pieces to make a simple table feel warmer."
        },
        {
            "title": "Gift preview",
            "description": "A single piece helps buyers judge whether the gold collection fits a gifting scene."
        },
        {
            "title": "Holiday table",
            "description": "Pairs well with darker table linens, warm lighting, and dinner-party settings."
        }
    ],
    orderSteps: [
        "Review the product details and care notes on this page.",
        "Contact Yinshiji for current availability, batch status, and sample options.",
        "Domestic customers can complete the purchase through the Taobao store when the item is available.",
        "For wholesale, gifting, or collaboration inquiries, share the intended quantity and use case first."
    ],
    imagePlaceholder: '/images/products/gold-carved-fork.webp',
  },
  {
    slug: 'gold-carved-5-piece-set',
    name: 'Gold Tone Carved 5-Piece Set',
    tagline: 'Warm gold carved 5-piece set.',
    category: 'set',
    collection: 'gold-carved',
    material: '304 Stainless Steel Forks & Spoons, 410 Stainless Steel Knife, Gold Tone Finish',
    pieces: piecesSilverGold,
    description:
      'The Gold Tone Carved 5-Piece Set includes a knife, dinner fork, dinner spoon, small fork, and small spoon — each with the same carved handle and warm gold tone. The gold tone is a decorative surface finish, not real gold.',
    features: [
      'Complete 5-piece place setting in gold tone',
      'Matching carved handle design across all pieces',
      '304 stainless steel forks and spoons; 410 stainless steel knife with warm gold tone finish',
      'Warm gold tone that stands out',
      'Gift packaging available (check current batch)',
    ],
    careNotes: 'Hand wash with mild soap. Avoid bleach or harsh detergents. Dry promptly.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 49.9,
    specs: [
        {
            "label": "Material",
            "value": "Knife: 410 stainless steel; fork and spoons: 304 stainless steel; warm gold tone finish"
        },
        {
            "label": "Included",
            "value": "Knife, dinner fork, dinner spoon, small fork, small spoon"
        },
        {
            "label": "Gold note",
            "value": "Gold tone is a surface finish, not real gold or gold-plated"
        },
        {
            "label": "Best for",
            "value": "Gift, hosting, holiday table, warm-toned settings"
        },
    { "label": "Piece dimensions", "value": "Knife 23.8 cm / Main fork 20.5 cm / Main spoon 20 cm / Small fork 16.5 cm / Small spoon 16.5 cm" },
    ],
    designNote: "The gold carved set is the most visually warm collection. It is built for tables that need a stronger sense of occasion, while the product copy stays clear that the value comes from design, finish, and use — not from pretending to be real gold.",
    useCases: [
        {
            "title": "Hosting table",
            "description": "A full set creates a warmer, more ceremonial look for dinner gatherings."
        },
        {
            "title": "Gift setting",
            "description": "Useful when the goal is visual impact and a complete place setting."
        },
        {
            "title": "Seasonal display",
            "description": "Works especially well with warm lighting, wood surfaces, and festive meals."
        }
    ],
    orderSteps: [
        "Review the product details and care notes on this page.",
        "Contact Yinshiji for current availability, batch status, and sample options.",
        "Domestic customers can complete the purchase through the Taobao store when the item is available.",
        "For wholesale, gifting, or collaboration inquiries, share the intended quantity and use case first."
    ],
    imagePlaceholder: '/images/products/gold-carved-5-piece-set.webp',
  },
  {
    slug: 'rosewood-handle-fork',
    name: 'Wenge Wood Handle Dinner Fork',
    tagline: 'Wenge wood handle, day to day.',
    category: 'single',
    collection: 'rosewood-handle',
    material: 'Premium 304 Stainless Steel with Wenge Wood Handle',
    pieces: ['1× Dinner Fork'],
    description:
      'A single dinner fork featuring a wenge wood handle paired with a 304 stainless steel head. Wenge wood is commonly called chicken-wing wood in Chinese because of its distinctive grain. Ergonomically shaped for a comfortable grip.',
    features: [
      'Premium 304 stainless steel fork head',
      'Smooth wenge wood handle — naturally unique chicken-wing grain',
      'Good grip for comfortable dining',
      'Chinese-inspired design combining wood and metal',
    ],
    careNotes: 'Hand wash only. Do not soak. Rub wood handle with food-safe mineral oil occasionally to preserve finish.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 9.9,
    specs: [
        {
            "label": "Material",
            "value": "304 stainless steel head with wenge wood handle"
        },
        {
            "label": "Included",
            "value": "1 dinner fork"
        },
        {
            "label": "Wood note",
            "value": "Natural grain varies from piece to piece"
        },
        {
            "label": "Care",
            "value": "Hand wash only; do not soak"
        },
    { "label": "Dimensions", "value": "Main fork: 20.5 cm (8.1 in) — head portion same as carved, wenge wood handle" },
    ],
    designNote: "The wenge wood handle fork is warmer and more everyday than the carved metal pieces. The wood grain makes each piece slightly different, which suits a softer Chinese-inspired table rather than a high-shine formal setting.",
    useCases: [
        {
            "title": "One-person dining",
            "description": "A natural-looking fork for simple meals, office lunches, and small home tables."
        },
        {
            "title": "Chinese-Western mix",
            "description": "Pairs well with bowls, chopsticks, rice dishes, and casual western plates."
        },
        {
            "title": "Texture close-up",
            "description": "The handle grain gives product photos a warmer, more tactile quality."
        }
    ],
    orderSteps: [
        "Review the product details and care notes on this page.",
        "Contact Yinshiji for current availability, batch status, and sample options.",
        "Domestic customers can complete the purchase through the Taobao store when the item is available.",
        "For wholesale, gifting, or collaboration inquiries, share the intended quantity and use case first."
    ],
    imagePlaceholder: '/images/products/rosewood-handle-fork-single-clean.webp',
  },
  {
    slug: 'rosewood-5-piece-set',
    name: 'Wenge Wood Handle 5-Piece Set',
    tagline: 'Wood handle set for mixed tables.',
    category: 'set',
    collection: 'rosewood-handle',
    material: 'Premium 304 Stainless Steel with Wenge Wood Handle',
    pieces: piecesWenge,
    description:
      'The Wenge Wood Handle 5-Piece Set includes a knife, dinner fork, dinner spoon, chopsticks, and small spoon — each with a wenge wood handle. This set bridges Eastern and Western table settings, making it practical for fusion dining.',
    features: [
      'Complete 5-piece set: knife, dinner fork, dinner spoon, chopsticks, small spoon',
      'Wenge wood handles with naturally unique chicken-wing grain',
      'Premium 304 stainless steel heads',
      'Thoughtfully designed for fusion dining — East meets West',
      'Gift-ready packaging available',
    ],
    careNotes: 'Hand wash only. Do not soak. Rub wood handles with food-safe mineral oil occasionally to preserve finish.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 39.9,
    specs: [
        {
            "label": "Material",
            "value": "304 stainless steel heads with wenge wood handles"
        },
        {
            "label": "Included",
            "value": "Knife, dinner fork, dinner spoon, chopsticks, small spoon"
        },
        {
            "label": "Composition note",
            "value": "This set includes chopsticks and does not include a small fork"
        },
        {
            "label": "Care",
            "value": "Hand wash only; do not soak wooden handles"
        },
    { "label": "Piece dimensions", "value": "Knife 23.8 cm / Main fork 20.5 cm / Main spoon 20 cm / Chopsticks 23 cm / Small spoon 16.5 cm" },
    ],
    designNote: "The wenge wood set is the most Chinese-table friendly of the three collections because it includes chopsticks. It is less about formal western dining and more about practical daily meals where bowls, spoons, chopsticks, and fork use can coexist.",
    useCases: [
        {
            "title": "Daily home meals",
            "description": "A flexible setting for rice, noodles, soup, and simple western dishes."
        },
        {
            "title": "Office or rental table",
            "description": "The chopsticks make it easier to use in everyday Chinese meal scenarios."
        },
        {
            "title": "Warm table styling",
            "description": "Wood handles soften the look of stainless steel and pair naturally with ceramic bowls."
        }
    ],
    orderSteps: [
        "Review the product details and care notes on this page.",
        "Contact Yinshiji for current availability, batch status, and sample options.",
        "Domestic customers can complete the purchase through the Taobao store when the item is available.",
        "For wholesale, gifting, or collaboration inquiries, share the intended quantity and use case first."
    ],
    imagePlaceholder: '/images/products/rosewood-5-piece-set.webp',
  },
];

export const collections = [
  {
    id: 'silver-carved',
    name: 'Silver Carved Collection',
    image: '/images/products/collection-silver-carved.webp',
    description:
      'Classic silver tone cutlery with intricately carved handles inspired by Chinese decorative motifs. Timeless elegance for any table.',
  },
  {
    id: 'gold-carved',
    name: 'Gold Tone Carved Collection',
    image: '/images/products/collection-gold-carved.webp',
    description:
      'Warm gold tone finish with detailed carved patterns. A sophisticated take on traditional tableware that adds warmth to every meal.',
  },
  {
    id: 'rosewood-handle',
    name: 'Wenge Wood Handle Collection',
    image: '/images/products/collection-rosewood-handle.webp',
    description:
      'Natural wenge wood handles paired with stainless steel heads. Each piece is unique, blending Eastern aesthetics with Western dining function.',
  },
];
