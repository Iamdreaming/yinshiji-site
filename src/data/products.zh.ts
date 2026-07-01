export interface ProductZh {
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
  specs: { label: string; value: string }[];
  designNote: string;
  useCases: { title: string; description: string }[];
  orderSteps: string[];
  imagePlaceholder: string;
}

const piecesSilverGoldZh = ['餐刀', '主叉', '主勺', '小叉', '小勺'];
const piecesRosewoodZh = ['餐刀', '主叉', '主勺', '筷子', '小勺'];

export const productsZh: ProductZh[] = [
  {
    slug: 'silver-carved-fork',
    name: '银色雕花主叉',
    tagline: '雕花细节，日常用叉。',
    category: 'single',
    collection: 'silver-carved',
    material: '304 不锈钢，银色调表面',
    pieces: ['1× 主叉'],
    description:
      '银色雕花系列单支主叉，带有中式雕花灵感的手柄纹样，适合用来搭配日常西餐、甜点或家用餐桌陈列。整体采用 304 不锈钢制作，强调耐用、安心、不过度浮夸。',
    features: [
      '304 不锈钢主体',
      '银色雕花手柄细节',
      '适合日常家用与轻礼赠场景',
      '平衡感和握感更适合长期使用',
      '建议手洗以保持表面细节状态',
    ],
    careNotes: '建议手洗，避免钢丝球和强腐蚀清洁剂，清洗后及时擦干。',
    priceNote: '当前批次 — 具体价格与库存以咨询或淘宝页面为准。',
    specs: [
        {
            "label": "材质",
            "value": "304 不锈钢，银色调表面"
        },
        {
            "label": "组成",
            "value": "1 支主叉"
        },
        {
            "label": "适合",
            "value": "单支试用、甜点搭配、日常餐桌补充"
        },
        {
            "label": "护理",
            "value": "建议手洗，清洗后及时擦干"
        },
    { "label": "尺寸", "value": "主叉：20.5 cm" },
    ],
    designNote: "银色雕花主叉适合先感受银食记的雕花语言：有纹样、有细节，但不把餐桌压得太重。它也适合作为五件套前的低门槛试用款。",
    useCases: [
        {
            "title": "先试一支",
            "description": "用较低门槛感受重量、握感、雕花和表面状态。"
        },
        {
            "title": "日常餐桌",
            "description": "适合搭配素色餐盘和简单桌布，不需要复杂摆拍。"
        },
        {
            "title": "内容拍摄",
            "description": "适合做甜点、咖啡、餐桌细节等近景画面。"
        }
    ],
    orderSteps: [
        "先查看本页的产品组成、材质和护理说明。",
        "联系银食记确认当前批次、库存、价格和拿样情况。",
        "国内用户可在商品可售时通过淘宝店完成购买。",
        "如需批发、礼赠或合作，请先说明数量、用途和期望交付时间。"
    ],
    imagePlaceholder: '/images/products/silver-carved-fork-single.webp',
  },
  {
    slug: 'silver-carved-5-piece-set',
    name: '银色雕花五件套',
    tagline: '五件成套，雕花统一。',
    category: 'set',
    collection: 'silver-carved',
    material: '主叉/主勺/小叉/小勺为 304 不锈钢，餐刀为 410 不锈钢，银色调表面',
    pieces: piecesSilverGoldZh,
    description:
      '银色雕花五件套包含餐刀、主叉、主勺、小叉、小勺，五件统一雕花语言，适合作为完整西式餐桌基础配置。适合喜欢中式细节但不想过度装饰的人。',
    features: [
      '五件完整席位配置',
      '餐刀、主叉、主勺、小叉、小勺真实组成',
      '主叉、主勺、小叉、小勺为 304 不锈钢；餐刀为 410 不锈钢',
      '雕花语言统一，适合成套使用',
      '适合作为家用或礼赠起步套装',
    ],
    careNotes: '建议手洗，避免强腐蚀清洁剂和粗糙刷具，洗净后及时擦干。',
    priceNote: '当前批次 — 具体价格与库存以咨询或淘宝页面为准。',
    specs: [
        {
            "label": "材质",
            "value": "餐刀：410 不锈钢；主叉、主勺、小叉、小勺：304 不锈钢；银色调表面"
        },
        {
            "label": "组成",
            "value": "餐刀、主叉、主勺、小叉、小勺"
        },
        {
            "label": "适合",
            "value": "日常完整席位、小型聚餐、基础礼赠"
        },
        {
            "label": "护理",
            "value": "建议手洗，避免粗糙刷具和强腐蚀清洁剂"
        },
    { "label": "各件尺寸", "value": "餐刀 23.8 cm / 主叉 20.5 cm / 主勺 20 cm / 小叉 16.5 cm / 小勺 16.5 cm" },
    ],
    designNote: "银色雕花五件套是银食记最均衡的一条线：有雕花细节，但整体仍然干净克制。它适合想要“有点精致感”，但不想让餐桌显得过度装饰的用户。",
    useCases: [
        {
            "title": "日常精致餐桌",
            "description": "一人一套，刀叉勺完整，适合把日常吃饭变得更有秩序。"
        },
        {
            "title": "小型聚餐",
            "description": "统一雕花手柄可以让餐桌更整齐，不需要额外复杂装饰。"
        },
        {
            "title": "入门礼赠",
            "description": "对方偏好银色和克制风格时，比金色更稳妥。"
        }
    ],
    orderSteps: [
        "先查看本页的产品组成、材质和护理说明。",
        "联系银食记确认当前批次、库存、价格和拿样情况。",
        "国内用户可在商品可售时通过淘宝店完成购买。",
        "如需批发、礼赠或合作，请先说明数量、用途和期望交付时间。"
    ],
    imagePlaceholder: '/images/products/silver-carved-5-piece-set-final.webp',
  },
  {
    slug: 'gold-carved-fork',
    name: '金色雕花主叉',
    tagline: '暖金色调，雕花细节。',
    category: 'single',
    collection: 'gold-carved',
    material: '304 不锈钢，暖金色表面处理',
    pieces: ['1× 主叉'],
    description:
      '金色雕花主叉以 304 不锈钢为基础，做暖金色外观处理，用来营造更温暖、更偏礼赠感的桌面视觉。这里的金色为装饰性表面色调，非真金或贵金属。',
    features: [
      '304 不锈钢主体',
      '暖金色调表面效果',
      '中式雕花细节',
      '更适合偏精致、偏礼赠的搭配场景',
      '建议手洗以延长表面状态',
    ],
    careNotes: '建议手洗，避免长时间浸泡、漂白剂和硬质摩擦工具。',
    priceNote: '当前批次 — 具体价格与库存以咨询或淘宝页面为准。',
    specs: [
        {
            "label": "材质",
            "value": "304 不锈钢，暖金色表面处理"
        },
        {
            "label": "组成",
            "value": "1 支主叉"
        },
        {
            "label": "金色说明",
            "value": "金色是表面色调，不是真金或贵金属"
        },
        {
            "label": "护理",
            "value": "建议手洗，避免漂白剂和硬质摩擦"
        },
    { "label": "尺寸", "value": "主叉：20.5 cm" },
    ],
    designNote: "金色雕花主叉比银色更醒目，更适合作为氛围点缀。它的价值来自设计、色调和使用场景，而不是贵金属属性。",
    useCases: [
        {
            "title": "桌面点缀",
            "description": "少量金色餐具就能让简单餐桌变暖。"
        },
        {
            "title": "礼赠前试用",
            "description": "先用单支判断金色是否适合目标礼赠场景。"
        },
        {
            "title": "节日餐桌",
            "description": "适合暖光、木质桌面和更有仪式感的用餐场景。"
        }
    ],
    orderSteps: [
        "先查看本页的产品组成、材质和护理说明。",
        "联系银食记确认当前批次、库存、价格和拿样情况。",
        "国内用户可在商品可售时通过淘宝店完成购买。",
        "如需批发、礼赠或合作，请先说明数量、用途和期望交付时间。"
    ],
    imagePlaceholder: '/images/products/gold-carved-fork.webp',
  },
  {
    slug: 'gold-carved-5-piece-set',
    name: '金色雕花五件套',
    tagline: '暖金雕花五件套。',
    category: 'set',
    collection: 'gold-carved',
    material: '主叉/主勺/小叉/小勺为 304 不锈钢，餐刀为 410 不锈钢，暖金色表面处理',
    pieces: piecesSilverGoldZh,
    description:
      '金色雕花五件套包含餐刀、主叉、主勺、小叉、小勺，和银色系列组成一致，但呈现更温暖的金色氛围。金色为装饰性表面色调，非真金或贵金属。',
    features: [
      '五件完整席位配置',
      '餐刀、主叉、主勺、小叉、小勺真实组成',
      '主叉、主勺、小叉、小勺为 304 不锈钢；餐刀为 410 不锈钢',
      '雕花细节统一',
      '建议手洗保养',
    ],
    careNotes: '建议手洗并及时擦干，避免粗糙刷具、强酸碱清洁剂和长时间浸泡。',
    priceNote: '当前批次 — 具体价格与库存以咨询或淘宝页面为准。',
    specs: [
        {
            "label": "材质",
            "value": "餐刀：410 不锈钢；主叉、主勺、小叉、小勺：304 不锈钢；暖金色表面处理"
        },
        {
            "label": "组成",
            "value": "餐刀、主叉、主勺、小叉、小勺"
        },
        {
            "label": "金色说明",
            "value": "金色是表面色调，不是真金或贵金属"
        },
        {
            "label": "适合",
            "value": "礼赠、节日餐桌、小型聚餐"
        },
    { "label": "各件尺寸", "value": "餐刀 23.8 cm / 主叉 20.5 cm / 主勺 20 cm / 小叉 16.5 cm / 小勺 16.5 cm" },
    ],
    designNote: "金色雕花五件套是三条线里视觉最有氛围感的一款。它适合需要更强桌面存在感的场景，但页面会明确说明金色只是表面色调，不做不真实的贵金属暗示。",
    useCases: [
        {
            "title": "聚餐餐桌",
            "description": "成套金色更有仪式感，适合招待和节日餐。"
        },
        {
            "title": "礼赠场景",
            "description": "完整五件套比单支更像一份成型礼物。"
        },
        {
            "title": "暖色陈列",
            "description": "适合木桌、暖光、深色桌布和节日摆盘。"
        }
    ],
    orderSteps: [
        "先查看本页的产品组成、材质和护理说明。",
        "联系银食记确认当前批次、库存、价格和拿样情况。",
        "国内用户可在商品可售时通过淘宝店完成购买。",
        "如需批发、礼赠或合作，请先说明数量、用途和期望交付时间。"
    ],
    imagePlaceholder: '/images/products/gold-carved-5-piece-set.webp',
  },
  {
    slug: 'rosewood-handle-fork',
    name: '鸡翅木主叉',
    tagline: '鸡翅木主叉，日常使用。',
    category: 'single',
    collection: 'rosewood-handle',
    material: '304 不锈钢叉头，鸡翅木手柄',
    pieces: ['1× 主叉'],
    description:
      '鸡翅木主叉以不锈钢功能端搭配鸡翅木手柄，兼顾金属耐用性和木质触感。适合想要在日常餐桌中增加一些新中式气质的人。',
    features: [
      '304 不锈钢叉头',
      '鸡翅木手柄，纹理存在自然差异',
      '更适合家用和内容展示场景',
      '兼具中式温度与西式餐具功能',
      '建议手洗与定期基础养护',
    ],
    careNotes: '木柄部分建议手洗，不要长时间浸泡；清洗后及时擦干，必要时可少量使用食品级木器保养油。',
    priceNote: '当前批次 — 具体价格与库存以咨询或淘宝页面为准。',
    specs: [
        {
            "label": "材质",
            "value": "304 不锈钢叉头，鸡翅木手柄"
        },
        {
            "label": "组成",
            "value": "1 支主叉"
        },
        {
            "label": "木纹说明",
            "value": "天然木纹每支会存在差异"
        },
        {
            "label": "护理",
            "value": "建议手洗，不要长时间浸泡"
        },
    { "label": "尺寸", "value": "主叉：20.5 cm（不锈钢叉头与雕花相同，手柄为鸡翅木）" },
    ],
    designNote: "鸡翅木主叉比全金属系列更温润，也更日常。木柄纹理让每支餐具有自然差异，更适合生活感和新中式餐桌，而不是高亮度的正式餐桌。",
    useCases: [
        {
            "title": "一人食",
            "description": "适合办公室带饭、租房餐桌和简单家庭餐。"
        },
        {
            "title": "中西混合餐桌",
            "description": "可以和碗、筷子、米饭、面食和西式餐盘一起使用。"
        },
        {
            "title": "木纹细节图",
            "description": "木柄纹理更适合做近景和内容种草。"
        }
    ],
    orderSteps: [
        "先查看本页的产品组成、材质和护理说明。",
        "联系银食记确认当前批次、库存、价格和拿样情况。",
        "国内用户可在商品可售时通过淘宝店完成购买。",
        "如需批发、礼赠或合作，请先说明数量、用途和期望交付时间。"
    ],
    imagePlaceholder: '/images/products/rosewood-handle-fork-single-clean.webp',
  },
  {
    slug: 'rosewood-5-piece-set',
    name: '鸡翅木五件套',
    tagline: '木柄五件套，中西混合餐桌。',
    category: 'set',
    collection: 'rosewood-handle',
    material: '304 不锈钢功能端，鸡翅木手柄',
    pieces: piecesRosewoodZh,
    description:
      '鸡翅木五件套包含餐刀、主叉、主勺、筷子、小勺，强调木柄带来的手感与餐桌温度。注意该五件套不包含小叉，真实组成以当前页面为准。',
    features: [
      '五件真实组成：餐刀、主叉、主勺、筷子、小勺',
      '不包含小叉',
      '鸡翅木手柄带来自然纹理和温度感',
      '适合新中式、家用、礼赠与内容展示',
      '建议手洗保养',
    ],
    careNotes: '木柄与筷子均建议手洗，不要长时间浸泡，不建议洗碗机清洗，使用后及时擦干。',
    priceNote: '当前批次 — 具体价格与库存以咨询或淘宝页面为准。',
    specs: [
        {
            "label": "材质",
            "value": "304 不锈钢功能端，鸡翅木手柄"
        },
        {
            "label": "组成",
            "value": "餐刀、主叉、主勺、筷子、小勺"
        },
        {
            "label": "组成说明",
            "value": "本套包含筷子，不包含小叉"
        },
        {
            "label": "护理",
            "value": "建议手洗，不要长时间浸泡木柄"
        },
    { "label": "各件尺寸", "value": "餐刀 23.8 cm / 主叉 20.5 cm / 主勺 20 cm / 筷子 23 cm / 小勺 16.5 cm" },
    ],
    designNote: "鸡翅木五件套是三条线里最适合中式日常餐桌的一款，因为它包含筷子。它不是单纯的西式刀叉勺套装，更适合米饭、面食、汤品和一人食等真实日常场景。",
    useCases: [
        {
            "title": "日常家庭餐",
            "description": "适合米饭、面条、汤品和简单西式菜一起出现的餐桌。"
        },
        {
            "title": "办公室/租房",
            "description": "有筷子，更适合国内日常用餐习惯。"
        },
        {
            "title": "温润餐桌风格",
            "description": "木柄能弱化金属冷感，适合搭配陶瓷碗盘。"
        }
    ],
    orderSteps: [
        "先查看本页的产品组成、材质和护理说明。",
        "联系银食记确认当前批次、库存、价格和拿样情况。",
        "国内用户可在商品可售时通过淘宝店完成购买。",
        "如需批发、礼赠或合作，请先说明数量、用途和期望交付时间。"
    ],
    imagePlaceholder: '/images/products/rosewood-5-piece-set.webp',
  },
];

export const collectionsZh = [
  {
    id: 'silver-carved',
    name: '银色雕花系列',
    image: '/images/products/collection-silver-carved.webp',
    description: '以银色调和中式雕花细节为核心，适合日常餐桌与基础成套配置。',
  },
  {
    id: 'gold-carved',
    name: '金色雕花系列',
    image: '/images/products/collection-gold-carved.webp',
    description: '在雕花语言基础上增加暖金氛围，更适合偏礼赠、偏节日感的餐桌表达。',
  },
  {
    id: 'rosewood-handle',
    name: '鸡翅木系列',
    image: '/images/products/collection-rosewood-handle.webp',
    description: '鸡翅木手柄与不锈钢结合，偏温润、偏生活感，也更适合新中式气质。',
  },
];
