export type SourceTier = 'official-standard' | 'official-regulation' | 'industry-association' | 'secondary-translation';

export interface ReferenceSource {
  id: string;
  title: string;
  organization: string;
  url: string;
  tier: SourceTier;
  region: string;
  sourceType: string;
  usedFor: string;
  caveat?: string;
}

export interface ReferenceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  sourceIds?: string[];
}

export interface ReferenceArticle {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  eyebrow: string;
  eyebrowZh: string;
  quickAnswer: string;
  quickAnswerZh: string;
  sections: ReferenceSection[];
  sectionsZh: ReferenceSection[];
  sourceIds: string[];
  related: string[];
}

export const referenceSources: ReferenceSource[] = [
  {
    id: 'iso-8442-2',
    title: 'ISO 8442-2:1997 — Materials and articles in contact with foodstuffs — Cutlery and table holloware — Part 2: Requirements for stainless steel and silver-plated cutlery',
    organization: 'International Organization for Standardization (ISO)',
    url: 'https://www.iso.org/standard/23095.html',
    tier: 'official-standard',
    region: 'International',
    sourceType: 'Cutlery-specific standard record',
    usedFor: 'Scope and naming of the cutlery-specific ISO 8442-2 standard.',
    caveat: 'ISO standards are copyrighted. This site cites the public ISO record and does not reproduce the protected standard text.'
  },
  {
    id: 'fda-21-cfr-117-40',
    title: '21 CFR § 117.40 — Equipment and utensils',
    organization: 'U.S. eCFR / Food and Drug Administration regulation text',
    url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-117/subpart-B/section-117.40',
    tier: 'official-regulation',
    region: 'United States',
    sourceType: 'Food manufacturing CGMP regulation',
    usedFor: 'General food-contact surface principles: cleanable, corrosion-resistant, nontoxic, and suitable for intended use.',
    caveat: 'This regulation is about food manufacturing equipment and utensils generally; it is not a consumer cutlery grade table.'
  },
  {
    id: 'bssa-cutlery-grades',
    title: "Cutlery stainless steel grades '18/8', '18/10' and '18/0'",
    organization: 'British Stainless Steel Association (BSSA)',
    url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades',
    tier: 'industry-association',
    region: 'United Kingdom / Technical association',
    sourceType: 'Technical explainer for cutlery grades',
    usedFor: 'Meaning of 18/8, 18/10, 18/0; 304 and 430 mapping; martensitic knife blade context.',
    caveat: 'Association explainer, not a law or product certification.'
  },
  {
    id: 'worldstainless-food-beverage',
    title: 'Stainless Steel in the Food and Beverage Industry',
    organization: 'Worldstainless / Euro Inox',
    url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf',
    tier: 'industry-association',
    region: 'International',
    sourceType: 'Industry technical PDF',
    usedFor: 'Passive layer, stainless steel families, food and beverage application context, hygienic design concepts.',
    caveat: 'Industry guidance; use for technical background rather than legal compliance claims.'
  },
  {
    id: 'nickel-institute-fcm',
    title: 'The role of nickel in Food Contact Materials',
    organization: 'Nickel Institute',
    url: 'https://nickelinstitute.org/en/nickel-applications/food-contact-materials',
    tier: 'industry-association',
    region: 'International',
    sourceType: 'Food-contact materials explainer',
    usedFor: '304/316L food-contact context, nickel-containing stainless steel use in food applications, cutlery markings context.',
    caveat: 'Industry source focused on nickel-containing stainless steels; balance with independent or regulatory sources where needed.'
  },
  {
    id: 'nickel-institute-health-fact-sheet-4',
    title: 'Human Health Fact Sheet 4: Nickel and Metallic Food Contact Material',
    organization: 'Nickel Institute',
    url: 'https://nickelinstitute.org/en/science/human-health-fact-sheets/fact-sheet-4-nickel-and-metallic-food-contact-material',
    tier: 'industry-association',
    region: 'International',
    sourceType: 'Human health fact sheet',
    usedFor: 'Metal release / migration framing and the importance of standardized test protocols.',
    caveat: 'Industry source. Use for explanation, not as a substitute for official migration testing.'
  },
  {
    id: 'edqm-metals-alloys-fcm',
    title: 'Metals and alloys used in food contact materials and articles',
    organization: 'European Directorate for the Quality of Medicines & HealthCare (EDQM), Council of Europe',
    url: 'https://www.edqm.eu/en/metals-and-alloys-used-in-food-contact-materials-and-articles',
    tier: 'official-regulation',
    region: 'Europe / Council of Europe',
    sourceType: 'Official technical guide landing page',
    usedFor: 'European technical guide context for metals and alloys in food-contact materials and articles.',
    caveat: 'The landing page points to the technical guide; exact release limits should be checked against the current guide text.'
  },
  {
    id: 'nhc-gb-4806-9-announcement',
    title: 'NHC announcement listing GB 4806.9-2023 食品安全国家标准 食品接触用金属材料及制品',
    organization: 'National Health Commission of the PRC',
    url: 'https://www.nhc.gov.cn/wjw/c100175/202309/bb7158019984496ca14e51e41cc2d1c2.shtml',
    tier: 'official-regulation',
    region: 'China',
    sourceType: 'Official release announcement',
    usedFor: 'Confirming the existence, Chinese title, and release context of GB 4806.9-2023.',
    caveat: 'This source confirms the standard listing. Full standard clauses should be checked against the official standard text.'
  },
  {
    id: 'cirs-gb-4806-9-translation',
    title: 'GB 4806.9-2023 National Food Safety Standard Food Contact Metal Materials and Articles — unofficial translation PDF',
    organization: 'CIRS Group',
    url: 'https://www.cirs-group.com/files/av4sjmn3bojk/content/2023/11/d4ewxvz2a3uo.pdf',
    tier: 'secondary-translation',
    region: 'China / English reference',
    sourceType: 'Unofficial English translation',
    usedFor: 'Secondary orientation for English readers about GB 4806.9-2023 scope and terms.',
    caveat: 'Not official. Do not cite as the legal text when making compliance claims.'
  },
  {
    id: 'schema-citation',
    title: 'Schema.org citation property',
    organization: 'Schema.org',
    url: 'https://schema.org/citation',
    tier: 'official-standard',
    region: 'Web structured data',
    sourceType: 'Structured data vocabulary',
    usedFor: 'JSON-LD citation property for reference articles.'
  },
  {
    id: 'schema-defined-term',
    title: 'Schema.org DefinedTerm type',
    organization: 'Schema.org',
    url: 'https://schema.org/DefinedTerm',
    tier: 'official-standard',
    region: 'Web structured data',
    sourceType: 'Structured data vocabulary',
    usedFor: 'Glossary / controlled term pages for grades such as 304, 316, 430, and 410.'
  }
];

export const referenceArticles: ReferenceArticle[] = [
  {
    slug: 'stainless-steel-cutlery-standards',
    title: 'Stainless Steel Cutlery Standards: ISO, FDA, EU and China Sources',
    titleZh: '不锈钢餐具标准资料：ISO、FDA、欧洲与中国来源',
    description: 'A source-backed map of the standards and regulatory references most useful when writing about stainless steel cutlery and food-contact metal articles.',
    descriptionZh: '一份可溯源的不锈钢餐具标准资料地图，覆盖 ISO、美国 FDA/eCFR、欧洲 EDQM 与中国 GB 4806.9。',
    eyebrow: 'Standards map',
    eyebrowZh: '标准资料地图',
    quickAnswer: 'For cutlery-specific wording, start with ISO 8442-2. For general food-contact surface principles, use 21 CFR 117.40 in the U.S. context and EDQM / Council of Europe guidance in Europe. For China, GB 4806.9-2023 is the relevant metal food-contact standard, but English summaries should be treated as secondary unless checked against the official Chinese text.',
    quickAnswerZh: '写“不锈钢餐具”时，餐具专门标准优先看 ISO 8442-2；美国语境看 21 CFR 117.40 的食品接触表面原则；欧洲语境看 EDQM / 欧洲委员会关于金属和合金食品接触材料的技术资料；中国语境看 GB 4806.9-2023，但英文译文只能作辅助，不能代替官方中文标准。',
    sourceIds: ['iso-8442-2', 'fda-21-cfr-117-40', 'edqm-metals-alloys-fcm', 'nhc-gb-4806-9-announcement', 'cirs-gb-4806-9-translation'],
    related: ['stainless-steel-grades-cutlery', 'food-contact-safety-migration', 'source-library'],
    sections: [
      {
        heading: 'Use standards as boundaries, not decoration',
        paragraphs: [
          'A reference site should not quote standards just to look serious. Each source needs a job: ISO for cutlery-specific scope, FDA/eCFR for food-contact surface principles, EDQM for European metal-and-alloy food-contact context, and GB 4806.9 for China-specific metal food-contact requirements.',
          'The safest writing pattern is: state what the source can support, state what it cannot support, then connect it back to the actual product fact.'
        ],
        sourceIds: ['iso-8442-2', 'fda-21-cfr-117-40', 'edqm-metals-alloys-fcm', 'nhc-gb-4806-9-announcement']
      },
      {
        heading: 'ISO 8442-2 is the cutlery-specific anchor',
        paragraphs: [
          'ISO’s public record identifies ISO 8442-2:1997 as “Materials and articles in contact with foodstuffs — Cutlery and table holloware — Part 2: Requirements for stainless steel and silver-plated cutlery.” That makes it the best high-level anchor for stainless steel cutlery wording.',
          'Because ISO standards are copyrighted, Tableorie should cite the public record and avoid reproducing protected clauses.'
        ],
        sourceIds: ['iso-8442-2']
      },
      {
        heading: 'FDA/eCFR gives general food-contact surface principles',
        paragraphs: [
          '21 CFR 117.40 does not tell a consumer which fork grade to buy. It says food-contact surfaces in food manufacturing equipment and utensils must be cleanable, corrosion-resistant, nontoxic, and able to withstand intended use and cleaning conditions.',
          'For a cutlery reference page, this is useful as a general principle: food-contact metal should resist corrosion under intended use and cleaning. It is not a shortcut to claim a particular product is FDA-approved.'
        ],
        sourceIds: ['fda-21-cfr-117-40']
      },
      {
        heading: 'China GB 4806.9 needs careful citation',
        paragraphs: [
          'The NHC announcement lists GB 4806.9-2023 食品安全国家标准 食品接触用金属材料及制品. That is enough to identify the standard and its official release context.',
          'For clause-level claims, use the official Chinese standard text. Third-party English translations are useful for orientation but should be labeled as unofficial.'
        ],
        sourceIds: ['nhc-gb-4806-9-announcement', 'cirs-gb-4806-9-translation']
      }
    ],
    sectionsZh: [
      {
        heading: '标准是边界，不是装饰',
        paragraphs: [
          '资料站不能为了显得专业而随便堆标准。每个来源都要有明确用途：ISO 负责餐具专门标准边界，FDA/eCFR 负责食品接触表面原则，EDQM 负责欧洲金属/合金食品接触材料语境，GB 4806.9 负责中国食品接触用金属材料要求。',
          '最稳的写法是：先说明资料能支撑什么，再说明不能支撑什么，最后回到具体产品事实。'
        ],
        sourceIds: ['iso-8442-2', 'fda-21-cfr-117-40', 'edqm-metals-alloys-fcm', 'nhc-gb-4806-9-announcement']
      },
      {
        heading: 'ISO 8442-2 是餐具专门标准锚点',
        paragraphs: [
          'ISO 公共记录显示，ISO 8442-2:1997 的标题是“与食品接触的材料和制品——餐具和餐桌空心器皿——第 2 部分：不锈钢和镀银餐具要求”。因此它适合作为不锈钢餐具内容的高层级标准锚点。',
          '但 ISO 标准正文受版权保护。Tableorie 可以引用 ISO 公共记录，不应复制受保护条款。'
        ],
        sourceIds: ['iso-8442-2']
      },
      {
        heading: 'FDA/eCFR 适合支撑食品接触表面原则',
        paragraphs: [
          '21 CFR 117.40 不是消费者餐叉选购表。它说的是食品制造设备和器具的食品接触表面应当可清洁、耐腐蚀、无毒，并能承受预期使用环境和清洁条件。',
          '因此它适合支撑“食品接触金属表面应耐腐蚀、适合预期用途”这类原则，但不能被拿来宣称某个具体餐具产品“FDA 认证”。'
        ],
        sourceIds: ['fda-21-cfr-117-40']
      },
      {
        heading: '中国 GB 4806.9 要谨慎引用',
        paragraphs: [
          '国家卫健委公告列出了 GB 4806.9-2023《食品安全国家标准 食品接触用金属材料及制品》。这可以确认标准名称和发布背景。',
          '如果要写具体条款，应以官方中文标准文本为准。第三方英文译文只能作为英文读者的辅助材料，并且必须标明“非官方”。'
        ],
        sourceIds: ['nhc-gb-4806-9-announcement', 'cirs-gb-4806-9-translation']
      }
    ]
  },
  {
    slug: 'stainless-steel-grades-cutlery',
    title: '304, 316, 430 and 410 Stainless Steel in Cutlery',
    titleZh: '餐具里的 304、316、430 和 410 不锈钢',
    description: 'A practical, source-backed explanation of common stainless steel grades used in cutlery: forks, spoons, handles and knife blades.',
    descriptionZh: '一篇有来源支撑的不锈钢餐具钢种说明，覆盖 304、316、430、410 在叉、勺、手柄和餐刀中的常见角色。',
    eyebrow: 'Grade guide',
    eyebrowZh: '钢种资料',
    quickAnswer: 'For forks and spoons, 304 / 18-8 is the mainstream high-corrosion-resistance choice. 430 / 18-0 is a lower-cost ferritic alternative. 316 is used when higher corrosion resistance is needed. 410 and related martensitic grades matter for knife blades because hardness and edge performance matter more there.',
    quickAnswerZh: '叉勺常见主力是 304 / 18-8，耐蚀性更稳；430 / 18-0 是成本更低的铁素体选择；316 用在更高耐蚀需求场景；410 这类马氏体不锈钢更常见于餐刀刀刃，因为餐刀需要硬度和刃口表现。',
    sourceIds: ['bssa-cutlery-grades', 'worldstainless-food-beverage', 'nickel-institute-fcm'],
    related: ['stainless-steel-cutlery-standards', 'food-contact-safety-migration', 'source-library'],
    sections: [
      {
        heading: 'What 18/8, 18/10 and 18/0 usually mean',
        paragraphs: [
          'BSSA maps 18/8 to AISI 304 / EN 1.4301 and describes it as probably the most commonly used stainless steel for cutlery. It also explains that 18/0 maps to ferritic AISI 430 / EN 1.4016 and is magnetic.',
          'The same BSSA article warns that 18/10 can be used as a marketing alternative to 18/8 and should not automatically be treated as proof of a separate, higher-nickel grade.'
        ],
        bullets: [
          '18/8: roughly 18% chromium and 8% nickel; commonly associated with 304.',
          '18/10: often used in cutlery marketing; verify actual grade rather than assuming.',
          '18/0: ferritic, nickel-free or low-nickel cutlery category commonly associated with 430.'
        ],
        sourceIds: ['bssa-cutlery-grades']
      },
      {
        heading: 'Why knife blades are different',
        paragraphs: [
          'Forks and spoons mainly need corrosion resistance, formability, and cleanability. Knife blades also need hardness and edge behavior. That is why martensitic stainless steels appear in knife-blade discussions.',
          'For Tableorie product pages, this supports a piece-by-piece material statement: a set can use 304 for fork and spoon pieces while using 410 for the knife.'
        ],
        sourceIds: ['bssa-cutlery-grades', 'worldstainless-food-beverage']
      },
      {
        heading: '304 vs 316 vs 430 in plain terms',
        paragraphs: [
          'Nickel Institute describes Type 304 as the common food and beverage stainless steel and Type 316L as a higher-corrosion-resistance option. Worldstainless uses 304 and 316 as food and beverage workhorse examples while also placing 430 in the ferritic family.',
          'For consumer cutlery writing, avoid saying “316 is always better.” The more accurate answer is that 316 helps in more aggressive corrosion environments, while 304 is the mainstream practical choice for many tableware pieces.'
        ],
        sourceIds: ['worldstainless-food-beverage', 'nickel-institute-fcm']
      }
    ],
    sectionsZh: [
      {
        heading: '18/8、18/10、18/0 通常是什么意思',
        paragraphs: [
          'BSSA 将 18/8 对应到 AISI 304 / EN 1.4301，并称其可能是餐具中最常用的不锈钢；它也说明 18/0 对应铁素体 AISI 430 / EN 1.4016，具有磁性。',
          '同一篇 BSSA 文章也提醒，18/10 在餐具营销中可能只是 18/8 的营销替代表述，不应直接当成“更高镍含量”的证明。'
        ],
        bullets: [
          '18/8：约 18% 铬、8% 镍，通常对应 304。',
          '18/10：餐具营销中常见，仍需看实际钢种。',
          '18/0：铁素体、低镍或无镍餐具类别，常对应 430。'
        ],
        sourceIds: ['bssa-cutlery-grades']
      },
      {
        heading: '为什么餐刀要单独看',
        paragraphs: [
          '叉勺主要看耐蚀性、成形性和清洁性；餐刀还要看硬度和刃口表现。因此马氏体不锈钢经常出现在刀刃材料讨论里。',
          '这也支撑 Tableorie 产品页的“按件标材质”：一套餐具可以叉勺用 304，而餐刀用 410。'
        ],
        sourceIds: ['bssa-cutlery-grades', 'worldstainless-food-beverage']
      },
      {
        heading: '304、316、430 的普通人解释',
        paragraphs: [
          'Nickel Institute 将 304 描述为食品和饮料应用中常见的不锈钢，将 316L 描述为更高耐蚀性的选择。Worldstainless 也把 304、316 放在食品饮料应用语境中，同时把 430 归入铁素体不锈钢。',
          '写消费者餐具内容时，不要说“316 永远更好”。更准确的说法是：316 适合更强腐蚀环境，304 则是很多餐具件的主流实用选择。'
        ],
        sourceIds: ['worldstainless-food-beverage', 'nickel-institute-fcm']
      }
    ]
  },
  {
    slug: 'food-contact-safety-migration',
    title: 'Food-Contact Safety, Metal Release and Stainless Steel Cutlery',
    titleZh: '食品接触安全、金属迁移与不锈钢餐具',
    description: 'A careful explanation of what stainless steel food-contact safety can and cannot mean without pretending that a product has certifications it does not have.',
    descriptionZh: '解释不锈钢餐具的食品接触安全、金属迁移和合规边界，同时避免伪造认证或过度承诺。',
    eyebrow: 'Safety evidence',
    eyebrowZh: '安全证据',
    quickAnswer: 'Food-contact safety is not the same as saying “this grade is magically safe.” It depends on material, surface condition, intended use, cleaning, and migration/release testing where required. A product page should not invent certifications, but it can clearly state material, care conditions, and source-backed general principles.',
    quickAnswerZh: '食品接触安全不是一句“这个钢种天然安全”就能解决。它和材料、表面状态、使用场景、清洁方式，以及必要时的迁移/释放测试有关。产品页不能编造认证，但可以清楚写明材质、护理条件和有资料支撑的一般原则。',
    sourceIds: ['fda-21-cfr-117-40', 'edqm-metals-alloys-fcm', 'nickel-institute-health-fact-sheet-4', 'worldstainless-food-beverage'],
    related: ['stainless-steel-cutlery-standards', 'stainless-steel-grades-cutlery', 'source-library'],
    sections: [
      {
        heading: 'Food-contact claims need boundaries',
        paragraphs: [
          'A useful reference page should distinguish three things: general material principles, regulatory requirements, and actual product certification. The first two can be explained with sources. The third should only be claimed when the product has the document to prove it.',
          'For Tableorie, the current safe pattern is to say what material each piece uses, how it should be cleaned, and what the general food-contact material principles are. Do not invent FDA approval, EU declaration, GB test reports, stock, ratings, or certifications.'
        ],
        sourceIds: ['fda-21-cfr-117-40']
      },
      {
        heading: 'Corrosion resistance and cleanability matter',
        paragraphs: [
          '21 CFR 117.40 requires food-contact surfaces to be corrosion-resistant when in contact with food, made from nontoxic materials, and designed to withstand their intended use and cleaning conditions. That general principle is directly useful for explaining why tableware material and care instructions matter.',
          'Worldstainless explains stainless steel’s value in food and beverage settings through corrosion resistance, cleanability, and a passive chromium-rich oxide layer. This is background evidence, not a substitute for product testing.'
        ],
        sourceIds: ['fda-21-cfr-117-40', 'worldstainless-food-beverage']
      },
      {
        heading: 'Migration and release testing are test-specific',
        paragraphs: [
          'Nickel Institute’s health fact sheet emphasizes that standardized test protocols matter when discussing metal release from metallic food-contact materials. This is important for writing honestly: the result depends on the actual article, test medium, time, temperature, and protocol.',
          'So the site should avoid broad claims like “no metal migration.” A better claim is: recognized food-contact frameworks evaluate whether constituents transfer to food under defined conditions, and products that need compliance evidence should be tested under the applicable protocol.'
        ],
        sourceIds: ['nickel-institute-health-fact-sheet-4', 'edqm-metals-alloys-fcm']
      }
    ],
    sectionsZh: [
      {
        heading: '食品接触安全要有边界',
        paragraphs: [
          '一个有用的资料页应该区分三件事：一般材料原则、法规要求、具体产品认证。前两者可以用资料解释，第三个必须有产品文件才能说。',
          '对 Tableorie 来说，目前安全写法是：写清每个部件材质、护理方式，以及一般食品接触材料原则。不要编造 FDA 认证、欧盟符合性声明、GB 检测报告、库存、评分或认证。'
        ],
        sourceIds: ['fda-21-cfr-117-40']
      },
      {
        heading: '耐腐蚀和可清洁很重要',
        paragraphs: [
          '21 CFR 117.40 要求食品接触表面在接触食品时耐腐蚀、由无毒材料制成，并能承受预期使用和清洁条件。这个原则可以直接用来解释为什么餐具材质和护理说明重要。',
          'Worldstainless 从耐腐蚀、可清洁和富铬钝化膜角度解释不锈钢在食品饮料环境中的价值。这是背景证据，不等于具体产品测试。'
        ],
        sourceIds: ['fda-21-cfr-117-40', 'worldstainless-food-beverage']
      },
      {
        heading: '迁移和释放测试必须看测试条件',
        paragraphs: [
          'Nickel Institute 的健康资料强调，讨论金属食品接触材料释放量时，标准化测试方法很重要。也就是说，结果取决于具体制品、模拟液、时间、温度和测试协议。',
          '所以站点不应该写“完全无金属迁移”。更稳的说法是：食品接触法规会在特定条件下评估成分向食品迁移的风险；需要合规证据的产品应按适用协议检测。'
        ],
        sourceIds: ['nickel-institute-health-fact-sheet-4', 'edqm-metals-alloys-fcm']
      }
    ]
  },
  {
    slug: 'source-library',
    title: 'Stainless Steel Cutlery Source Library',
    titleZh: '不锈钢餐具资料源库',
    description: 'The living source library behind Tableorie reference pages: standards, regulations, technical associations, and secondary translations with caveats.',
    descriptionZh: 'Tableorie 资料页背后的来源库：标准、法规、技术协会资料和带边界说明的二级译文。',
    eyebrow: 'Source library',
    eyebrowZh: '来源库',
    quickAnswer: 'This page lists the sources Tableorie uses for stainless steel cutlery reference content. Sources are tiered so readers and AI systems can tell official standards from industry explainers and secondary translations.',
    quickAnswerZh: '这个页面列出 Tableorie 不锈钢餐具资料内容使用的来源，并按层级标注，方便读者和 AI 区分官方标准、行业协会解释和二级译文。',
    sourceIds: referenceSources.map((source) => source.id),
    related: ['stainless-steel-cutlery-standards', 'stainless-steel-grades-cutlery', 'food-contact-safety-migration'],
    sections: [
      {
        heading: 'How to read the source tiers',
        paragraphs: [
          'Official standards and regulations are used for boundaries and terminology. Industry association sources are used for practical explanations of stainless steel behavior and grade families. Secondary translations help with orientation but should never replace official text for legal claims.',
          'This is a living source library. New pages should add their source IDs here before publication.'
        ]
      }
    ],
    sectionsZh: [
      {
        heading: '如何理解来源层级',
        paragraphs: [
          '官方标准和法规用于确定边界和术语；行业协会资料用于解释不锈钢行为和钢种体系；二级译文只用于辅助理解，不能替代官方文本作合规声明。',
          '这是一个持续更新的来源库。后续新页面发布前，应先把资料源补到这里。'
        ]
      }
    ]
  }
];

export function getReferenceSource(id: string): ReferenceSource {
  const source = referenceSources.find((item) => item.id === id);
  if (!source) throw new Error(`Unknown reference source: ${id}`);
  return source;
}

export function getReferenceArticle(slug: string): ReferenceArticle | undefined {
  return referenceArticles.find((article) => article.slug === slug);
}
