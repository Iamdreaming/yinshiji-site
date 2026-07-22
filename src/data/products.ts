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
  /** Price in CNY for Schema.org offers. Single pieces ~9.9-12.9, sets ~25.9-69.9. */
  price: number;
  specs: { label: string; value: string }[];
  designNote: string;
  useCases: { title: string; description: string }[];
  orderSteps: string[];
  imagePlaceholder: string;
}

const piecesSilverGold = ['Knife', 'Dinner Fork', 'Dinner Spoon', 'Small Fork', 'Small Spoon'];
const piecesWenge = ['Knife', 'Dinner Fork', 'Dinner Spoon', 'Chopsticks', 'Small Spoon'];
const pieces3pcSilverGold = ['Knife', 'Dinner Fork', 'Dinner Spoon'];
const pieces3pcWenge = ['Dinner Fork', 'Dinner Spoon', 'Chopsticks'];
const pieces8pcSilverGold = ['Knife', 'Dinner Fork', 'Dinner Spoon', 'Small Fork', 'Small Spoon', 'Serving Fork', 'Serving Spoon', 'Sugar Spoon'];

export const products: Product[] = [
  {
    slug: 'silver-carved-fork',
    name: 'Silver Carved Dinner Fork',
    tagline: 'The fork that makes a weeknight table feel set, not just functional.',
    category: 'single',
    collection: 'silver-carved',
    material: 'Premium 304 Stainless Steel with Silver Tone Finish',
    pieces: ['1× Dinner Fork'],
    description:
      'A single dinner fork from our Silver Carved collection, featuring a carved handle pattern inspired by Chinese decorative motifs. Crafted from 304 stainless steel with a silver tone finish, this fork adds a clean, detailed look to your table.',
    features: [
      'Food-grade 304 steel — the same standard used in professional kitchens',
      'Carved handle pattern catches light without overpowering your table setting',
      'Silver tone resists daily tarnish with minimal care',
      'Weighted balance sits naturally in hand — neither heavy nor flimsy',
      'Dishwasher-friendly; hand wash preserves the lustre longer',
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
    designNote: "The carved handle catches light at the table edge — enough detail to make your place setting feel intentional, but still quiet enough for Tuesday night pasta. A good way to test the collection before committing to a full set.",
    useCases: [
        {
            "title": "Try before you commit",
            "description": "Feel the weight, carving, and finish at home before choosing a full set. No pressure, just an honest sample."
        },
        {
            "title": "Weeknight table upgrade",
            "description": "Swap out the mismatched fork you've been using. One decent fork changes the meal."
        },
        {
            "title": "Photography prop",
            "description": "Close-up product shots, dessert scenes, and small table-setting compositions — this fork holds its own in frame."
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
    tagline: 'Every meal deserves more than a handful of mismatched utensils.',
    category: 'set',
    collection: 'silver-carved',
    material: '304 Stainless Steel Forks & Spoons, 410 Stainless Steel Knife, Silver Tone Finish',
    pieces: piecesSilverGold,
    description:
      'The Silver Carved 5-Piece Set includes a knife, dinner fork, dinner spoon, small fork, and small spoon — all with the same carved pattern. A complete set for daily or hosting tables.',
    features: [
      'Five matching pieces — the most practical place setting for daily and guest use',
      'Carved handles across every piece create a cohesive, intentional table',
      '304 stainless steel for forks and spoons; 410 stainless steel knife with matching silver tone finish',
      'Replaces mismatched drawers with one unified look',
      'Available in gift packaging for select batches',
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
    designNote: "The silver set is the most balanced Yinshiji expression — carved detail, clean metal, and everything you actually need at one place setting. It is designed for people who want visible craft without the table feeling like a showpiece.",
    useCases: [
        {
            "title": "Daily table that looks like you tried",
            "description": "Five matching pieces mean the table feels composed, even on busy weeknights."
        },
        {
            "title": "First hosting set",
            "description": "When guests come over, matching handles make the table look cohesive without extra decoration."
        },
        {
            "title": "Housewarming or wedding gift",
            "description": "A practical, good-looking set that new households will actually use every day."
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
    tagline: 'One fork that turns a plain table into a dinner scene.',
    category: 'single',
    collection: 'gold-carved',
    material: 'Premium 304 Stainless Steel with Gold Tone Finish',
    pieces: ['1× Dinner Fork'],
    description:
      'A single dinner fork from our Gold Tone Carved collection. The warm gold tone paired with carved handles creates a warm table look. Made from 304 stainless steel. Note: the gold tone is a decorative surface finish, not real gold.',
    features: [
      'Food-grade 304 steel core — professional-grade durability underneath the finish',
      'Warm gold tone adds instant atmosphere to any table setting',
      'Carved handle pattern catches candlelight and overhead lighting beautifully',
      'Heft and balance feel substantial without being heavy',
      'Hand wash with mild soap to preserve the gold tone finish over time',
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
    designNote: "The gold fork is more expressive than the silver — meant to add warmth and a sense of occasion to your table. Honest about what it is: a decorative tone, not a precious-metal claim. The carved pattern glows differently under warm lighting than cool.",
    useCases: [
        {
            "title": "Warm up a cold table",
            "description": "One or two gold pieces against white plates and neutral linens — suddenly the meal feels like something."
        },
        {
            "title": "Holiday accent",
            "description": "Thanksgiving, Lunar New Year, birthday dinners — the gold tone signals 'tonight is special' without saying a word."
        },
        {
            "title": "Gifting preview",
            "description": "Not sure if the gold collection suits someone? This single piece answers the question without commitment."
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
    tagline: 'When the meal matters, the table should feel like it too.',
    category: 'set',
    collection: 'gold-carved',
    material: '304 Stainless Steel Forks & Spoons, 410 Stainless Steel Knife, Gold Tone Finish',
    pieces: piecesSilverGold,
    description:
      'The Gold Tone Carved 5-Piece Set includes a knife, dinner fork, dinner spoon, small fork, and small spoon — each with the same carved handle and warm gold tone. The gold tone is a decorative surface finish, not real gold.',
    features: [
      'Five-piece place setting with full gold tone presence across every piece',
      'Matching carved handles create a unified, warm visual rhythm on the table',
      '304 stainless steel forks and spoons; 410 stainless steel knife — built to last',
      'The most visually warm collection — designed for tables that want to feel like an occasion',
      'Gift packaging available for select batches',
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
    designNote: "The gold carved set is the warmest-looking collection. Built for tables that need a stronger sense of occasion — dinner parties, holiday meals, celebrations. The copy is honest: value comes from design, finish, and daily use, not from precious-metal pretensions.",
    useCases: [
        {
            "title": "Hosting that looks effortless",
            "description": "A full gold set makes the table feel intentional — guests notice, but it doesn't scream."
        },
        {
            "title": "Gift with real impact",
            "description": "When the goal is visual presence and something the recipient wouldn't buy for themselves."
        },
        {
            "title": "Festive table setting",
            "description": "Warm lighting, wood surfaces, candle flames — the gold tone was made for this combination."
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
    tagline: 'A fork that feels like it belongs to you, not to a matching set.',
    category: 'single',
    collection: 'rosewood-handle',
    material: 'Premium 304 Stainless Steel with Wenge Wood Handle',
    pieces: ['1× Dinner Fork'],
    description:
      'A single dinner fork featuring a wenge wood handle paired with a 304 stainless steel head. Wenge wood is commonly called chicken-wing wood in Chinese because of its distinctive grain. Ergonomically shaped for a comfortable grip.',
    features: [
      'Food-grade 304 stainless steel head — the part that touches your food is professional grade',
      'Each wenge wood handle has a naturally unique chicken-wing grain — no two forks look identical',
      'Ergonomic shape fits comfortably in hand for everyday meals',
      'Warm wood-to-metal transition feels natural, not manufactured',
      'Hand wash only — a few seconds of care preserves the handle for years',
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
    designNote: "The wood handle changes the fork's personality completely — warmer, quieter, more personal than the carved metal pieces. The grain varies, which is the point: this isn't mass-produced uniformity. Suits a softer table rather than a high-shine formal setting.",
    useCases: [
        {
            "title": "Solo dining done right",
            "description": "Office lunch, apartment dinner, one-person table — the fork that makes eating alone feel like a ritual."
        },
        {
            "title": "East-West table mixing",
            "description": "Rice bowls, chopsticks, pasta plates, soup — this fork sits naturally between both worlds."
        },
        {
            "title": "Texture for photos",
            "description": "The wood grain adds warmth and tactility to close-up food and table styling shots."
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
    tagline: 'The set that bridges your chopsticks and your fork drawer.',
    category: 'set',
    collection: 'rosewood-handle',
    material: 'Premium 304 Stainless Steel with Wenge Wood Handle',
    pieces: piecesWenge,
    description:
      'The Wenge Wood Handle 5-Piece Set includes a knife, dinner fork, dinner spoon, chopsticks, and small spoon — each with a wenge wood handle. This set bridges Eastern and Western table settings, making it practical for fusion dining.',
    features: [
      'Five pieces designed for real mixed-table meals — includes chopsticks alongside fork and spoon',
      'Wenge wood handles with naturally unique chicken-wing grain on every piece',
      'Premium 304 stainless steel heads — the contact surface is food-grade throughout',
      'Built for the way people actually eat: bowls, plates, chopsticks, and forks at the same table',
      'Gift packaging available for select batches',
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
    designNote: "The wenge set is the most practical collection for Chinese-style daily meals because it includes chopsticks. It's less about formal Western dining and more about the reality: rice, noodles, soup, a fork for the salad, chopsticks for the stir-fry — all at the same table.",
    useCases: [
        {
            "title": "Daily home meals, all styles",
            "description": "Rice bowls, noodle soup, stir-fry, pasta — one set handles the full range."
        },
        {
            "title": "Office or rental kitchen",
            "description": "Chopsticks included means it works for Chinese meal scenarios without needing extra utensils."
        },
        {
            "title": "Warm, natural table",
            "description": "Wood handles soften the stainless steel look and pair naturally with ceramic bowls and earthy tableware."
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

  // ── SKU Fission: 3-Piece and 8-Piece Sets ──

  {
    slug: 'silver-carved-3-piece-set',
    name: 'Silver Carved 3-Piece Set',
    tagline: 'Knife, fork, spoon — the only three pieces you actually need at every meal.',
    category: 'set',
    collection: 'silver-carved',
    material: '304 Stainless Steel Fork & Spoon, 410 Stainless Steel Knife, Silver Tone Finish',
    pieces: pieces3pcSilverGold,
    description:
      'The Silver Carved 3-Piece Set includes a knife, dinner fork, and dinner spoon — the essential trio for every meal. Same carved handle design and silver tone finish as the full 5-piece set, at an entry-level price point. A practical starting point before upgrading to the complete set.',
    features: [
      'The three pieces you use at every single meal — no extras sitting unused in the drawer',
      'Same carved handle design and silver tone finish as the 5-piece set',
      '304 stainless steel fork and spoon; 410 stainless steel knife',
      'Entry-level price makes it easy to start the collection',
      'Matches perfectly with the 5-piece set if you upgrade later',
    ],
    careNotes: 'Hand wash recommended. Avoid abrasive cleaners. Dry immediately to maintain lustre.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 29.9,
    specs: [
        {
            "label": "Material",
            "value": "Knife: 410 stainless steel; fork and spoon: 304 stainless steel; silver tone finish"
        },
        {
            "label": "Included",
            "value": "Knife, dinner fork, dinner spoon"
        },
        {
            "label": "Best for",
            "value": "Essential daily setting, first purchase, minimal table setup"
        },
        {
            "label": "Care",
            "value": "Hand wash recommended; dry promptly"
        },
        {
            "label": "Piece dimensions",
            "value": "Knife 23.8 cm / Main fork 20.5 cm / Main spoon 20 cm"
        },
    ],
    designNote: "Three pieces, no excess. The knife-fork-spoon trio covers every meal from weeknight rice to weekend breakfast. Same carved detail as the full set — just the essentials you reach for daily.",
    useCases: [
        {
            "title": "Starter purchase",
            "description": "Try the collection at the lowest price point. If you love it, the 5-piece set is a natural upgrade."
        },
        {
            "title": "One-person household",
            "description": "If you eat alone most nights, three good pieces beat five that never get used."
        },
        {
            "title": "Minimalist table",
            "description": "For people who want one clean setting without small fork and small spoon clutter."
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
    slug: 'silver-carved-8-piece-set',
    name: 'Silver Carved 8-Piece Set',
    tagline: 'The complete collection — every piece, every occasion, one set.',
    category: 'set',
    collection: 'silver-carved',
    material: '304 Stainless Steel Forks & Spoons, 410 Stainless Steel Knife, Silver Tone Finish',
    pieces: pieces8pcSilverGold,
    description:
      'The Silver Carved 8-Piece Set extends the 5-piece set with a serving fork, serving spoon, and sugar spoon — covering individual dining and hosting in one purchase. Same carved handle design and silver tone finish throughout. Built for people who want the full Yinshiji experience without mixing and matching.',
    features: [
      'Eight pieces covering individual dining, serving, and tea/coffee service',
      'Serving fork and spoon for shared dishes — no more using mismatched kitchen tools',
      'Sugar spoon for tea service and coffee presentation',
      'Same carved handle design and silver tone finish across all eight pieces',
      'The most complete single-purchase option in the Silver Carved collection',
    ],
    careNotes: 'Hand wash recommended. Avoid abrasive cleaners. Dry immediately to maintain lustre.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 69.9,
    specs: [
        {
            "label": "Material",
            "value": "Knife: 410 stainless steel; all forks and spoons: 304 stainless steel; silver tone finish"
        },
        {
            "label": "Included",
            "value": "Knife, dinner fork, dinner spoon, small fork, small spoon, serving fork, serving spoon, sugar spoon"
        },
        {
            "label": "Best for",
            "value": "Full hosting setup, complete collection, gift with maximum impact"
        },
        {
            "label": "Care",
            "value": "Hand wash recommended; avoid abrasive cleaners"
        },
        {
            "label": "Piece dimensions",
            "value": "Knife 23.8 cm / Main fork 20.5 cm / Main spoon 20 cm / Small fork 16.5 cm / Small spoon 16.5 cm / Serving fork & spoon 24 cm / Sugar spoon 14 cm"
        },
    ],
    designNote: "The 8-piece set is the full Yinshiji expression in silver — every piece you need for a complete table, from individual place settings to serving and tea service. The carved handles create a visual thread from main course to dessert.",
    useCases: [
        {
            "title": "Full hosting setup",
            "description": "Serving pieces mean the table looks complete from appetizer to dessert — no improvised kitchen tools."
        },
        {
            "title": "Wedding or milestone gift",
            "description": "Eight matching pieces with carved detail — a gift that signals thought and permanence."
        },
        {
            "title": "Complete the collection",
            "description": "Already have the 5-piece set? The serving fork, serving spoon, and sugar spoon fill the remaining gaps."
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
    slug: 'gold-carved-3-piece-set',
    name: 'Gold Tone Carved 3-Piece Set',
    tagline: 'Three gold pieces that turn any meal into something worth setting the table for.',
    category: 'set',
    collection: 'gold-carved',
    material: '304 Stainless Steel Fork & Spoon, 410 Stainless Steel Knife, Gold Tone Finish',
    pieces: pieces3pcSilverGold,
    description:
      'The Gold Tone Carved 3-Piece Set includes a knife, dinner fork, and dinner spoon — the essential trio in warm gold tone. Same carved handle design as the 5-piece set, at a more accessible price point. Ideal for adding warmth to your daily table or as a gift starter.',
    features: [
      'The three essential pieces in warm gold tone — the set you reach for every meal',
      'Same carved handle design as the gold 5-piece set',
      '304 stainless steel fork and spoon; 410 stainless steel knife with gold tone finish',
      'Gold tone is a decorative surface finish — honest about what it is',
      'Matches the 5-piece set if you decide to expand later',
    ],
    careNotes: 'Hand wash with mild soap. Avoid bleach or harsh detergents. Dry promptly.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 29.9,
    specs: [
        {
            "label": "Material",
            "value": "Knife: 410 stainless steel; fork and spoon: 304 stainless steel; warm gold tone finish"
        },
        {
            "label": "Included",
            "value": "Knife, dinner fork, dinner spoon"
        },
        {
            "label": "Gold note",
            "value": "Gold tone is a surface finish, not real gold or gold-plated"
        },
        {
            "label": "Best for",
            "value": "Daily gold accent, gift starter, warm table setting"
        },
        {
            "label": "Care",
            "value": "Hand wash with mild soap; dry promptly"
        },
        {
            "label": "Piece dimensions",
            "value": "Knife 23.8 cm / Main fork 20.5 cm / Main spoon 20 cm"
        },
    ],
    designNote: "Three gold pieces at the table change the mood of a meal instantly. Same carved detail as the full set — the warmth of gold tone on just the essentials you use daily.",
    useCases: [
        {
            "title": "Warm daily table",
            "description": "Replace plain stainless with gold tone for everyday meals — the table feels different without being formal."
        },
        {
            "title": "Gift under budget",
            "description": "Gold tone feels premium at the 3-piece price point — a good gift when the 5-piece set exceeds the budget."
        },
        {
            "title": "Accent for existing sets",
            "description": "Already own silver? Add gold pieces to create a mixed-metal table with personality."
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
    slug: 'rosewood-3-piece-set',
    name: 'Wenge Wood Handle 3-Piece Set',
    tagline: 'Fork, spoon, chopsticks — the three tools your actual meals require.',
    category: 'set',
    collection: 'rosewood-handle',
    material: 'Premium 304 Stainless Steel with Wenge Wood Handle',
    pieces: pieces3pcWenge,
    description:
      'The Wenge Wood Handle 3-Piece Set includes a dinner fork, dinner spoon, and chopsticks — the essentials for daily Chinese-Western mixed dining. Same wenge wood handles and 304 stainless steel heads as the 5-piece set, without the knife (wood-handled knives are less practical than full-steel alternatives).',
    features: [
      'Fork, spoon, and chopsticks — the three pieces you actually reach for in daily meals',
      'No knife included — wood-handled knives are less practical than all-steel alternatives',
      'Same wenge wood handles with unique chicken-wing grain as the 5-piece set',
      '304 stainless steel heads on fork and spoon — food-grade where it matters',
      'The lightest, most affordable entry into the Wenge Wood collection',
    ],
    careNotes: 'Hand wash only. Do not soak. Rub wood handles with food-safe mineral oil occasionally to preserve finish.',
    priceNote: 'Current batch — contact us for current availability and pricing.',
    price: 25.9,
    specs: [
        {
            "label": "Material",
            "value": "304 stainless steel heads with wenge wood handles"
        },
        {
            "label": "Included",
            "value": "Dinner fork, dinner spoon, chopsticks"
        },
        {
            "label": "Why no knife",
            "value": "Wood-handled knives are less practical than full-steel alternatives — use a regular kitchen knife instead"
        },
        {
            "label": "Care",
            "value": "Hand wash only; do not soak wooden handles"
        },
        {
            "label": "Piece dimensions",
            "value": "Main fork 20.5 cm / Main spoon 20 cm / Chopsticks 23 cm"
        },
    ],
    designNote: "This set strips the Wenge collection to what daily meals actually need: a fork, a spoon, and chopsticks. No knife means no compromise — your regular kitchen knife does the job better than a wood-handled table knife ever would.",
    useCases: [
        {
            "title": "One-person daily set",
            "description": "Fork, spoon, chopsticks for solo dining — the minimum viable upgrade from disposable or mismatched utensils."
        },
        {
            "title": "Rental or office setup",
            "description": "Lightweight, practical, covers Chinese and Western meal styles without overcommitting."
        },
        {
            "title": "Try the Wenge collection",
            "description": "The most affordable way to experience the wood handle before deciding on the full 5-piece set."
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
