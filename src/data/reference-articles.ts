export interface SourceRef {
  id: string;
  organization: string;
  title: string;
  url: string;
  tier: string;
  sense: string;
  note?: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ReferenceArticle {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  eyebrow: string;
  eyebrowZh: string;
  intro: string;
  introZh: string;
  sections: ArticleSection[];
  sectionsZh: ArticleSection[];
  sources: SourceRef[];
  related: string[];
}

export const sourcesMap: Record<string, SourceRef> = {
  'iso-8442': { id: 'iso-8442', organization: 'ISO', title: 'ISO 8442-2:1997 public record', url: 'https://www.iso.org/standard/23095.html', tier: 'official-standard', sense: 'Cutlery-specific standard name, scope, and status.' },
  'fda-117': { id: 'fda-117', organization: 'FDA (eCFR)', title: '21 CFR 117.40 — Equipment and utensils', url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-117/subpart-B/section-117.40', tier: 'official-regulation', sense: 'General food-contact surface principles for food manufacturing equipment and utensils.' },
  'eu-1935': { id: 'eu-1935', organization: 'European Union', title: 'Regulation (EC) No 1935/2004', url: 'https://eur-lex.europa.eu/eli/reg/2004/1935/oj/eng', tier: 'official-regulation', sense: 'EU framework regulation for food-contact materials.' },
  'eu-2023-2006': { id: 'eu-2023-2006', organization: 'European Commission', title: 'Regulation (EC) No 2023/2006 — GMP for food-contact materials', url: 'https://eur-lex.europa.eu/eli/reg/2006/2023/oj/eng', tier: 'official-regulation', sense: 'Good manufacturing practice rules for food-contact material production.' },
  'edqm-metals': { id: 'edqm-metals', organization: 'EDQM / Council of Europe', title: 'Metals and alloys used in food contact materials and articles', url: 'https://www.edqm.eu/en/metals-and-alloys-used-in-food-contact-materials-and-articles', tier: 'official-regulation', sense: 'European technical guide with specific release limits for metals in food contact.' },
  'nhc-gb-4806': { id: 'nhc-gb-4806', organization: 'National Health Commission of PRC', title: 'NHC announcement of GB 4806.9-2023', url: 'https://www.nhc.gov.cn/wjw/c100175/202309/bb7158019984496ca14e51e41cc2d1c2.shtml', tier: 'official-regulation', sense: 'China metal food-contact standard with dedicated release limits and raw material requirements.', note: 'Use official Chinese text for clause-level claims. English summaries are not the legal text.' },
  'bssa-cutlery-grades': { id: 'bssa-cutlery-grades', organization: 'BSSA', title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0', url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades', tier: 'industry-association', sense: 'Direct mapping of 18/8, 18/10, 18/0 to standard grades; 304/430 attributes; knife blade grade context.' },
  'nickel-institute-fcm': { id: 'nickel-institute-fcm', organization: 'Nickel Institute', title: 'The role of nickel in Food Contact Materials', url: 'https://nickelinstitute.org/en/nickel-applications/food-contact-materials', tier: 'industry-association', sense: '304/316L food-contact context; nickel-containing stainless steel use in food applications.' },
  'nickel-fact-sheet-4': { id: 'nickel-fact-sheet-4', organization: 'Nickel Institute', title: 'Human Health Fact Sheet 4: Nickel and Metallic Food Contact Material', url: 'https://nickelinstitute.org/en/science/human-health-fact-sheets/fact-sheet-4-nickel-and-metallic-food-contact-material', tier: 'industry-association', sense: 'Standardized test protocols and metal release context; importance of food simulant and test conditions.' },
  'worldstainless-food-beverage': { id: 'worldstainless-food-beverage', organization: 'Worldstainless / Euro Inox', title: 'Stainless Steel in the Food and Beverage Industry', url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf', tier: 'industry-association', sense: 'Stainless steel families, passive layer, grade selection, and food/beverage application context.' },
  'nsf-ansi-51': { id: 'nsf-ansi-51', organization: 'NSF International / ANSI', title: 'NSF/ANSI 51 — Food Equipment Materials', url: 'https://www.nsf.org/knowledge-library/nsf-ansi-51-food-equipment-materials-update-implications-for-your-products', tier: 'official-standard', sense: 'Material acceptance criteria for food zone, splash zone, and non-food zone surfaces in food equipment.', note: 'Commercially referenced by US food equipment manufacturers but not mandatory for domestic tableware.' },
  'ehedg-hygienic-design': { id: 'ehedg-hygienic-design', organization: 'EHEDG', title: 'EHEDG Guideline — Hygienic Design Principles', url: 'https://www.ehedg.org/guidelines-working-groups/guidelines/guidelines/detail/hygienic-design-principles', tier: 'industry-association', sense: 'Hygienic design concepts for food processing equipment: surface finish, cleanability, seam design.' },
};

export const referenceArticles: ReferenceArticle[] = [
  {
    slug: 'stainless-steel-cutlery-standards',
    title: 'Who Decides What Makes a Safe Stainless Steel Fork?',
    titleZh: '一把不锈钢叉子到底谁说了算？',
    description: 'A plain-language map of the standards and regulations that apply to stainless steel cutlery — ISO, FDA, EU, and China — with real context for each one.',
    descriptionZh: '用大白话讲清楚不锈钢餐具到底受哪些标准和法规管：ISO、美国、欧洲、中国，各管到什么程度。',
    eyebrow: 'Standards explained',
    eyebrowZh: '标准怎么管餐具',
    intro:
      'Nobody certifies your fork. No agency stamps it safe before it reaches your hand. Here is what actually applies — and what doesn\'t.',
    introZh:
      '没人给你的叉子发认证。没有任何机构在你拿到它之前盖过安全章。这篇告诉你哪些标准实际管用——哪些不管用。',
    sections: [
      {
        heading: 'ISO 8442: the only standard with "cutlery" in its name',
        paragraphs: [
          'ISO 8442-2:1997 is the closest thing to a dedicated cutlery standard on the planet. It was written specifically for the fork in your hand — not for industrial equipment or food packaging.',
          'There is a catch: ISO owns the copyright, so the full text costs money to access. But for everyday purposes, knowing this standard exists is enough. It sets a benchmark for cutlery materials and design, created by people who actually thought about spoons.',
        ],
      },
      {
        heading: 'The FDA does not approve your fork — here is what it actually does',
        paragraphs: [
          'Spoiler: no federal agency has ever inspected and approved your dinner fork. The relevant rule — FDA\'s 21 CFR 117.40 — says food-contact surfaces must be cleanable, corrosion-resistant, and nontoxic.',
          'That is a principle, not a product inspection. It means the metal should survive normal dishwashing. It does not mean a specific fork passed FDA review.',
          'If you see "FDA approved" on a fork, that is marketing, not regulation.',
        ],
      },
      {
        heading: 'Europe: a framework rule plus a technical guide with real numbers',
        paragraphs: [
          'The EU approach: Regulation (EC) No 1935/2004 sets the umbrella principle — materials cannot transfer harmful substances to food. Then the Council of Europe (via EDQM) publishes a Technical Guide with specific release limits for nickel, chromium, and other elements.',
          'Here is the catch: unlike plastics, there is no EU-wide list of approved metal alloys. Compliance works through the framework plus lab tests with food simulants. It is a system — just not a simple checklist.',
        ],
      },
      {
        heading: 'China has its own dedicated metal standard — and it is surprisingly good',
        paragraphs: [
          'GB 4806.9-2023 is China\'s national food safety standard specifically for metal materials that touch food. The National Health Commission sets release limits for alloying elements, defines migration testing methods, and restricts raw materials.',
          'If you need one standard written specifically for metal food contact, this is it. Caveat: the authoritative version is the Chinese original. English summaries exist but are not the legal text.',
        ],
      },
      {
        heading: 'Quick answers: what you actually need to know',
        paragraphs: [
          'Q: Is there a global "food-grade" stamp for stainless steel cutlery?',
          'A: No. Safety is determined by testing against whichever standard applies in your country. No single stamp covers all jurisdictions.',
          'Q: Does "FDA approved" on cutlery mean anything real?',
          'A: Almost never. The FDA does not certify individual forks. That stamp is marketing, not a safety guarantee.',
          'Q: What is the one cutlery-specific standard?',
          'A: ISO 8442-2:1997. But the full text costs money to access.',
          'Q: What about China\'s GB 4806.9-2023?',
          'A: It is one of the most targeted metal food-contact standards globally, with specific migration limits for nickel, chromium, and other elements.',
          'Q: So what should I look for when buying cutlery?',
          'A: Stick with 304 (18/8) stainless steel from a reputable manufacturer. A smooth, well-polished surface matters more than any stamp on the handle.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: 'ISO 8442：世界上唯一名字里带"餐具"的标准',
        paragraphs: [
          'ISO 8442-2:1997 是这个星球上最接近"餐具专用标准"的东西。它是专门为你手里的叉子写的——不是工业设备，不是食品包装。',
          '但有个坑：ISO 有版权，全文需要花钱买。对日常使用来说，知道存在这本标准就够了。它给餐具材料和设计定了基准——由一群真的考虑过勺子怎么写的人弄出来的。',
        ],
      },
      {
        heading: 'FDA 不给你家的叉子发证——那它管什么',
        paragraphs: [
          '防剧透：没有任何联邦机构检查过你餐叉并给它盖了章。相关的 FDA 规则是 21 CFR 117.40——它说食品接触表面必须可清洁、耐腐蚀、无毒害。',
          '这是一个原则，不是产品检验。它意味着金属应该扛得住日常洗碗。不代表某把具体的叉子通过了 FDA 审查。',
          '如果你看到叉子上印着"FDA 批准"——那是营销，不是法规认证。',
        ],
      },
      {
        heading: '欧洲：一把大伞加一本带具体数字的技术导则',
        paragraphs: [
          '欧盟的做法：法规 (EC) No 1935/2004 定下大原则——材料不能往食物里释放有害物质。然后欧洲委员会（通过 EDQM）发布技术导则，给镍、铬和其他元素的释放量定出具体上限。',
          '但有个区别：和塑料不一样，欧盟没有一份统一的金属合金允许清单。合规靠的是框架法规+技术导则+用食品模拟液做的实验室测试。这是一个体系——但不是一张简单的检查表。',
        ],
      },
      {
        heading: '中国有专门的金属食品接触国标——而且写得不错',
        paragraphs: [
          'GB 4806.9-2023 是中国专门针对接触食品的金属材料制定的食品安全国家标准。国家卫健委对合金元素和杂质设了迁移限量，规定了检验方法，还限制了原料使用。',
          '如果你需要一本专门为金属食品接触写的标准，就是它了。注意：权威版本是中文简体原文。英文翻译不是法律文本。',
        ],
      },
      {
        heading: '快速问答：你真正需要知道的',
        paragraphs: [
          '问：存在全球通用的"食品级"不锈钢认证吗？',
          '答：不存在。安全性是看你所在国家适用什么标准来测的。没有一张标签能通行所有地方。',
          '问：叉子上标"FDA 批准"有用吗？',
          '答：几乎没用。FDA 不给单个叉子发证。那个标签是营销手段。',
          '问：和餐具最相关的标准是哪个？',
          '答：ISO 8442-2:1997。但全文需要花钱才能看。',
          '问：中国的 GB 4806.9-2023 怎么样？',
          '答：它是全球对金属食品接触最有针对性的标准之一，明确规定了镍、铬等元素的迁移限量。',
          '问：那买餐具到底该看什么？',
          '答：认准 304（18/8）不锈钢，找靠谱品牌。光滑的抛光表面比手柄上印的任何字都有用。',
        ],
      },
    ],
    sources: [
      { id: 'iso-8442', organization: 'ISO', title: 'ISO 8442-2:1997 public record', url: 'https://www.iso.org/standard/23095.html', tier: 'official-standard', sense: 'Cutlery-specific standard name, scope, and status.' },
      { id: 'fda-117', organization: 'FDA (eCFR)', title: '21 CFR 117.40 — Equipment and utensils', url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-117/subpart-B/section-117.40', tier: 'official-regulation', sense: 'General food-contact surface principles for food manufacturing equipment and utensils.' },
      { id: 'eu-1935', organization: 'European Union', title: 'Regulation (EC) No 1935/2004', url: 'https://eur-lex.europa.eu/eli/reg/2004/1935/oj/eng', tier: 'official-regulation', sense: 'EU framework regulation for food-contact materials.' },
      { id: 'edqm-metals', organization: 'EDQM / Council of Europe', title: 'Metals and alloys used in food contact materials and articles', url: 'https://www.edqm.eu/en/metals-and-alloys-used-in-food-contact-materials-and-articles', tier: 'official-regulation', sense: 'European technical guide context for metals and alloys in food-contact materials.' },
      { id: 'nhc-gb-4806', organization: 'National Health Commission of PRC', title: 'NHC announcement of GB 4806.9-2023', url: 'https://www.nhc.gov.cn/wjw/c100175/202309/bb7158019984496ca14e51e41cc2d1c2.shtml', tier: 'official-regulation', sense: 'Confirms the Chinese title, release date, and scope of GB 4806.9-2023.', note: 'Use the official Chinese text for clause-level claims. English summaries are not the legal text.' },
    ],
    related: ['stainless-steel-grades-cutlery', 'food-contact-safety-migration'],
  },
  {
    slug: 'stainless-steel-grades-cutlery',
    title: '304 vs 410 vs 430: The Stainless Steel Grades You Actually See in Cutlery',
    titleZh: '304、410、430：你餐具上那些数字到底代表什么',
    description: 'A practical guide to the steel grades commonly used in forks, spoons, knife blades, and cutlery — where they come from, what they mean, and which ones you should care about.',
    descriptionZh: '餐具上标的 18/8、18/10、18/0 到底是什么意思，304、410、430 各管什么用途，一篇讲清楚。',
    eyebrow: 'Grade walkthrough',
    eyebrowZh: '钢种说明',
    intro:
      '18/10 is a marketing trick. Here is what those numbers on your fork actually mean — and which grade you should actually care about.',
    introZh:
      '18/10 是营销话术。你叉子上的数字到底代表什么——哪个钢种你该真正关心——这篇说清楚。',
    sections: [
      {
        heading: '18/8, 18/10, and 18/0: the numbers game — and the lie',
        paragraphs: [
          'You have seen these stamped on the back of a spoon. 18/8. 18/10. 18/0. They look official. They mostly are — just not the way you think.',
          'The British Stainless Steel Association (BSSA) maps them cleanly. 18/8 (roughly 18% chromium, 8% nickel) is AISI 304. It is the workhorse of cutlery. Austenitic structure, good corrosion resistance, barely magnetic.',
          '18/0 maps to AISI 430 — about 17–18% chromium, essentially zero nickel. It is magnetic, costs less, and resists corrosion less well. BSSA says it is for "less demanding conditions." Translation: budget cutlery.',
          'And 18/10? Here is the truth the industry does not advertise: BSSA calls 18/10 a marketing alternative to 18/8. The "10" does not mean a different, higher-nickel alloy. It is a way to make the same 304-grade material sound better. 18/10 is not a premium metallurgical category — it is 304 with better PR.',
        ],
        bullets: [
          '18/10 = AISI 304 (same as 18/8). Marketing rename. Do not pay extra for it.',
          '18/8 = AISI 304. The real workhorse. What you should actually look for.',
          '18/0 = AISI 430. Budget option. Magnetic, less corrosion resistant. Fine for basic use.',
        ],
      },
      {
        heading: 'Why your knife is made of different steel than your fork',
        paragraphs: [
          'Forks and spoons need to resist rust and clean up easily. Knives need to do all that — plus hold a sharp edge. That is a completely different materials problem.',
          'That is where martensitic stainless steels come in — grades like 410 (about 12% chromium, no nickel, heat-hardenable). You will find 410 in knife blades because it can be hardened to stay sharp. Your fork does not need that, so it stays in 304.',
          'This matters: some cutlery sets use 304 for forks and spoons and 410 for the knives. That is not a downgrade on the knife — it is the right material for the job. Knowing this saves you from the "why is the knife magnetic?" panic.',
        ],
      },
      {
        heading: '304 vs 316: does the extra nickel matter for dinner?',
        paragraphs: [
          'Both the Nickel Institute and Worldstainless agree: 304 (18/8, 1.4301) is the standard food-contact stainless steel. It is what most of your kitchen is made of.',
          '316 adds molybdenum for extra corrosion resistance in salty or acidic environments — think commercial kitchens, canning, or high-chloride conditions.',
          'For a regular dinner fork at home? 304 is totally fine. Paying extra for 316 tableware is usually a waste of money unless you live on a boat or run a professional kitchen. The "316 is always better" line oversells the point for everyday use.',
        ],
      },
      {
        heading: 'Quick answers: what you actually need to know about cutlery grades',
        paragraphs: [
          'Q: Can a magnet tell if my fork is good quality?',
          'A: Not really. 304 (18/8) is barely magnetic. 430 (18/0) is fully magnetic. But so are knife blades made of 410 — and that is intentional. A magnet tells you the steel family, not the quality.',
          'Q: Is 18/10 worth paying extra for?',
          'A: No. BSSA calls it a marketing alternative to 18/8. You are paying more for the same material.',
          'Q: What grade should I look for in cutlery?',
          'A: 304 (18/8) is the sweet spot. It is corrosion-resistant, durable, and affordable. Skip the premium marketing labels.',
          'Q: Why is my knife magnetic but my fork is not?',
          'A: Your knife is probably 410 or similar martensitic stainless steel — designed to be hard and hold an edge. Your fork is 304 (austenitic, barely magnetic). This is normal and correct.',
          'Q: What about 316 for home use?',
          'A: Overkill for almost everyone. 304 handles everything a home kitchen throws at it.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '18/8、18/10、18/0：数字游戏——以及那个谎言',
        paragraphs: [
          '你一定在勺背上看过这些数字。18/8。18/10。18/0。看起来挺官方的。确实有来头——但和你想的不太一样。',
          '英国不锈钢协会（BSSA）的映射很清楚：18/8（约 18% 铬、8% 镍）就是 AISI 304。餐具界的劳模。奥氏体结构，耐蚀性好，几乎不带磁。',
          '18/0 对应 AISI 430——约 17–18% 铬，基本不含镍。带磁，成本低，耐蚀性差。BSSA 的原话是"用于要求不高的场景"。说白了：便宜货。',
          '那 18/10 呢？实话实说：BSSA 直接说 18/10 是 18/8 的营销替代表述。"10"并不代表用了更高镍含量的合金。纯粹是让同一个 304 听起来更高级。18/10 不是什么高级冶金分类——它就是用更好的文案包装的 304。',
        ],
        bullets: [
          '18/10 = AISI 304（和 18/8 一样）。营销改名的。别为它多花钱。',
          '18/8 = AISI 304。真正的主力。买餐具看这个就够了。',
          '18/0 = AISI 430。便宜款。带磁，耐蚀性差一些。日常用没问题。',
        ],
      },
      {
        heading: '为什么餐刀和餐叉用的钢不一样',
        paragraphs: [
          '叉子和勺子需要耐锈、好清洗。餐刀除了这些，还得能磨出锋刃保持住。这完全是不同的材料问题。',
          '所以马氏体不锈钢上场了——比如 410（约 12% 铬，无镍，可热处理硬化）。你在刀刃上找到的就是它，因为它能淬火变硬保持锋利。你的叉子不需要这个能力，所以老老实实待在 304。',
          '这意味着：你买的一套餐具有可能叉勺用 304，餐刀用 410。这不是餐刀被减配了——这是为每件餐具选对了材料。知道这个，你看到餐刀带磁就不会慌了。',
        ],
      },
      {
        heading: '304 还是 316：多出来的镍对吃饭真的有影响吗',
        paragraphs: [
          'Nickel Institute 和 Worldstainless 都一致认为：304（18/8）是食品接触不锈钢的主力。你厨房里大部分东西都是它做的。',
          '316 加了钼，在更咸更酸的环境里有更好的耐蚀性——商用厨房、罐头加工、高氯化物场景用得上。',
          '但就你家吃饭用的叉子？304 绰绰有余。为日常餐具多花钱买 316，基本是智商税——除非你住船上或者开餐馆。"316 总是更好"这个说法，对家用来说真的过头了。',
        ],
      },
      {
        heading: '快速问答：餐具钢种你要知道的',
        paragraphs: [
          '问：用磁铁能判断叉子好不好吗？',
          '答：不能。304（18/8）几乎不带磁。430（18/0）完全带磁。但 410 做的刀片也带磁——那是故意的。磁铁告诉你的是钢种类型，不是质量好坏。',
          '问：18/10 值得多花钱吗？',
          '答：不值得。BSSA 说它只是 18/8 的营销替代表述。你在为同一种材料付更多钱。',
          '问：买餐具到底该看什么钢种？',
          '答：304（18/8）是黄金标准。耐蚀、耐用、价格合适。跳过那些营销标签。',
          '问：为什么我家的餐刀带磁，叉子却不带？',
          '答：餐刀大概率是 410 马氏体不锈钢——为了硬度和保持锋利。叉子是 304（奥氏体，几乎不带磁）。这完全正常。',
          '问：316 家用有必要吗？',
          '答：对绝大多数人来说是浪费。304 能轻松应对家厨房的一切。',
        ],
      },
    ],
    sources: [
      { id: 'bssa-cutlery-grades', organization: 'BSSA', title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0', url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades', tier: 'industry-association', sense: 'Direct mapping of 18/8, 18/10, 18/0 to standard grades; 304/430 attributes; knife blade grade context.' },
      { id: 'nickel-institute-fcm', organization: 'Nickel Institute', title: 'The role of nickel in Food Contact Materials', url: 'https://nickelinstitute.org/en/nickel-applications/food-contact-materials', tier: 'industry-association', sense: '304/316L food-contact context; cutlery markings and quality interpretation.' },
      { id: 'worldstainless-food-beverage', organization: 'Worldstainless / Euro Inox', title: 'Stainless Steel in the Food and Beverage Industry', url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf', tier: 'industry-association', sense: 'Stainless steel families, grade selection for food and beverage applications.' },
    ],
    related: ['stainless-steel-cutlery-standards', 'food-contact-safety-migration'],
  },
  {
    slug: 'food-contact-safety-migration',
    title: 'Does "Food Grade" Stainless Steel Actually Mean Something Specific?',
    titleZh: '"食品级"不锈钢到底是不是一个明确的概念',
    description: 'The phrase "food-grade stainless steel" is widely used but rarely defined. This page explains what it can and cannot mean, where the real safety requirements live, and how to avoid misleading claims.',
    descriptionZh: '"食品级不锈钢"这个说法随处都在用，但很少有人真去定义它。这篇解释它到底意味着什么（和不意味着什么），真正的安全要求在哪里，以及怎么避免误导性说法。',
    eyebrow: 'Safety boundaries',
    eyebrowZh: '安全边界',
    intro:
      'There is no such thing as food-grade stainless steel. Not as a certification, not as a global stamp, not in any real regulatory sense. Here is what the phrase actually covers — and what it hides.',
    introZh:
      '根本不存在"食品级不锈钢"这种认证。不是证书、不是全球统一标签、不是任何法规里的明确定义。这篇说清楚这个说法到底能代表什么——和不能代表什么。',
    sections: [
      {
        heading: 'There is no global "food-grade" stamp — and there never was',
        paragraphs: [
          'Here is the truth: "food-grade stainless steel" is not a real certification. There is no international office that inspects forks and stamps them food-grade. The concept does not exist in regulation the way most people think it does.',
          'What actually happens: safety is determined by testing material properties — corrosion resistance, surface condition, metal migration — against whatever standard applies in your country.',
          'In the US, FDA\'s 21 CFR 117.40 says surfaces must be corrosion-resistant and nontoxic. In Europe, Regulation (EC) No 1935/2004 sets the general rule, and the Council of Europe Technical Guide gives actual metal release limits. In China, GB 4806.9-2023 does the same with specific numbers.',
          'Three different frameworks. None of them issues a single "food-grade" pass. When someone says "this is food-grade stainless steel," the honest response is: "By which standard, tested how?"',
        ],
      },
      {
        heading: 'What actually makes a fork safe is not what you think',
        paragraphs: [
          'Spoiler: it is not just the steel grade. The surface finish matters just as much. A rough surface traps food particles. A bad seam — even in premium 304 — is a bacteria hotel. How you clean it and what you put on it also matter.',
          'Think about it this way: you could have the best stainless steel in the world, but if the surface has microscopic scratches from poor polishing, it might clean up worse than a cheaper grade with a proper finish. The material is part of the answer. Only part.',
        ],
      },
      {
        heading: 'Metal release: how you test matters more than what you test',
        paragraphs: [
          'The Nickel Institute publishes a health fact sheet on this, and they make a point worth repeating: test results change drastically depending on what food simulant you use, what temperature, how long, and whether you tested a real fork or a lab coupon.',
          'Studies that claim high metal release? They often used non-standard methods. That means "no metal migration" is a hollow claim unless it comes with a specific test protocol attached.',
          'The honest approach: describe the material, acknowledge that migration testing exists and has limits, and skip the blanket safety guarantees.',
        ],
      },
      {
        heading: 'Quick answers: food-grade stainless steel, debunked',
        paragraphs: [
          'Q: Is "food-grade stainless steel" a real certification?',
          'A: No. It is a marketing term, not a regulatory one. No official body issues a "food-grade" stamp for stainless steel.',
          'Q: What does "food-grade" usually mean in practice?',
          'A: It almost always refers to 304 (18/8) stainless steel. But the phrase tells you nothing about surface finish, design quality, or how it was tested.',
          'Q: Does Europe have a list of approved "food-grade" alloys?',
          'A: No. The EU framework regulation (EC) No 1935/2004 sets principles, and the EDQM Technical Guide gives release limits. But there is no approved-alloy list like there is for plastics.',
          'Q: Does China\'s GB 4806.9-2023 define "food grade"?',
          'A: Effectively, yes — but it does not use that phrase. It sets specific migration limits and raw material requirements for metal food-contact materials.',
          'Q: So what should I actually look for?',
          'A: Buy 304 (18/8) stainless steel from a known brand. Check the surface finish — it should be smooth and mirror-like. That is worth more than any "food-grade" label.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '根本不存在全球通用的"食品级"认证——从来就没有',
        paragraphs: [
          '实话实说："食品级不锈钢"根本不是真正的认证。没有哪个国际机构会检查你的叉子然后盖个"食品级"的章。这个概念在法规里就不存在——至少不像大多数人想的那样。',
          '实际情况：安全性是靠对照适用标准测试材料特性来判定的——耐腐蚀性、表面状态、金属迁移量。',
          '美国 FDA 21 CFR 117.40 要求表面耐腐蚀、无毒害。欧洲 (EC) No 1935/2004 定下通用原则，欧洲委员会技术导则给出具体的金属释放限量。中国 GB 4806.9-2023 也一样，带着具体数字。',
          '三套不同的体系。没有哪一套能发一张"食品级通行证"。所以下次有人跟你说"这是食品级不锈钢"，你应该追问：按哪个标准、怎么测出来的？',
        ],
      },
      {
        heading: '叉子安不安全，关键不在你想的那个地方',
        paragraphs: [
          '防剧透：不只是钢种的事。表面处理同样重要。粗糙的表面藏食物残渣。一条设计不佳的接缝——就算在 304 上——也是细菌酒店。你怎么洗、用它吃什么，都有影响。',
          '打个比方：你可以有全世界最好的不锈钢，但如果表面抛光不到位布满微小划痕，它的可清洁性可能还不如一个表面处理得当的低端钢种。材料只是答案的一部分——而且只是一部分。',
        ],
      },
      {
        heading: '迁移测试的关键是怎么测，而不是测什么',
        paragraphs: [
          'Nickel Institute 有一份健康资料页，里面的一个观点值得记住：测试结果很大程度上取决于你用什么食品模拟液、多少温度、多长时间，以及你测的是一把真叉子还是实验室样品。',
          '那些声称检测出高金属释放的研究？往往用了非标方法。这意味着"无金属迁移"这种声明，如果不附带具体的检测标准和方法，基本是空话。',
          '更诚实的做法：描述清楚材料，承认迁移测试确实存在但也有局限性，然后跳过那些笼统的安全承诺。',
        ],
      },
      {
        heading: '快速问答："食品级"不锈钢，真相是什么',
        paragraphs: [
          '问："食品级不锈钢"是真正的认证吗？',
          '答：不是。它是营销术语，不是法规术语。没有任何官方机构给不锈钢颁发"食品级"认证。',
          '问：那"食品级"在实际中通常指什么？',
          '答：几乎总是 304（18/8）不锈钢。但这个说法一点都没告诉你表面处理怎么样、设计好不好、怎么测的。',
          '问：欧洲有没有一份"食品级"合金清单？',
          '答：没有。欧盟框架法规 (EC) No 1935/2004 定了原则，EDQM 技术导则给了释放限量。但不像塑料，金属没有统一的允许清单。',
          '问：中国的 GB 4806.9-2023 定义了"食品级"吗？',
          '答：实际上是的——但它没用这个词。它直接规定了金属食品接触材料的迁移限量和原料要求。',
          '问：那我买餐具到底该看什么？',
          '答：买 304（18/8）不锈钢，找靠谱品牌。检查表面——应该光滑如镜。这比任何"食品级"标签都管用。',
        ],
      },
    ],
    sources: [
      { id: 'fda-117', organization: 'FDA (eCFR)', title: '21 CFR 117.40', url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-117/subpart-B/section-117.40', tier: 'official-regulation', sense: 'General food-contact surface principles for food manufacturing equipment and utensils.' },
      { id: 'eu-1935', organization: 'European Union', title: 'Regulation (EC) No 1935/2004', url: 'https://eur-lex.europa.eu/eli/reg/2004/1935/oj/eng', tier: 'official-regulation', sense: 'EU framework regulation for food-contact materials.' },
      { id: 'edqm-metals', organization: 'EDQM / Council of Europe', title: 'Metals and alloys used in food contact materials and articles', url: 'https://www.edqm.eu/en/metals-and-alloys-used-in-food-contact-materials-and-articles', tier: 'official-regulation', sense: 'European technical guide with specific release limits for metals.' },
      { id: 'nickel-fact-sheet-4', organization: 'Nickel Institute', title: 'Human Health Fact Sheet 4: Nickel and Metallic Food Contact Material', url: 'https://nickelinstitute.org/en/science/human-health-fact-sheets/fact-sheet-4-nickel-and-metallic-food-contact-material', tier: 'industry-association', sense: 'Importance of standardized test protocols in metal release studies.' },
      { id: 'nhc-gb-4806', organization: 'National Health Commission of PRC', title: 'GB 4806.9-2023', url: 'https://www.nhc.gov.cn/wjw/c100175/202309/bb7158019984496ca14e51e41cc2d1c2.shtml', tier: 'official-regulation', sense: 'China metal food-contact standard with dedicated release limits and raw material requirements.', note: 'Use official Chinese text for clause-level claims.' },
    ],
    related: ['stainless-steel-cutlery-standards', 'stainless-steel-grades-cutlery'],
  },
  
  // ============================================================
  // Article 1: passive-layer-explained
  // ============================================================
  {
    slug: 'passive-layer-explained',
    title: 'The Passive Layer: Why Stainless Steel Doesn\'t Rust (Usually)',
    titleZh: '钝化膜：不锈钢为什么通常不生锈（但也会出问题）',
    description: 'A 3-nanometer chromium oxide film is why your stainless steel fork stays shiny — and here is exactly what breaks it.',
    descriptionZh: '一层 3 纳米厚的氧化铬薄膜，是你家不锈钢叉子保持光亮的原因——以及什么情况会把它搞坏。',
    eyebrow: 'Passive layer / 钝化膜',
    eyebrowZh: 'Passive layer / 钝化膜',
    intro:
      'If stainless steel is supposed to be stainless, why does your fork sometimes get spots? The answer is a 3-nanometer film you have never seen — and the conditions that break it.',
    introZh:
      '说不锈钢是不锈钢，那你叉子上的锈点是哪来的？答案是一层你看不见的纳米级薄膜，以及哪些情况会让它失效。',
    sections: [
      {
        heading: 'What is the passive layer?',
        paragraphs: [
          'Stainless steel is not actually stainless. What makes it resistant to rust is a nearly invisible film — the passive layer — that forms spontaneously on the surface when the metal is exposed to air.',
          'This film is chromium oxide (Cr₂O₃), roughly 3 nanometers thick. That is about 30 atoms. When you scratch a stainless steel surface in normal air, the passive layer reforms in a fraction of a second — the metal literally heals itself.',
          'Worldstainless puts it plainly: the passive layer is what gives stainless steel its corrosion resistance. Without it, stainless steel would rust just like any other iron-based alloy.',
        ],
      },
      {
        heading: 'What damages the passive layer?',
        paragraphs: [
          'The passive layer is tough — but it has enemies. Chloride ions (from salt, bleach, or salty food residues) can penetrate and break through the film locally. Once breached, the underlying steel corrodes, forming a small pit. You see this as a dark spot with rust-colored staining around it.',
          'Mechanical damage matters too. Deep scratches that gouge the metal can take longer to self-heal. And in low-oxygen environments — like a tight crevice or under a food deposit — the layer may not reform at all because it needs oxygen to rebuild.',
          'This is also where grade differences show up. Worldstainless notes that 304 (18/8) has higher chromium and nickel content, giving it a more stable passive layer. Grade 430 (18/0), with lower chromium and no nickel, has a thinner, less robust film — which is why BSSA recommends 430 only for \"less demanding conditions.\"',
        ],
      },
      {
        heading: 'Self-healing and limits',
        paragraphs: [
          'The self-healing property is real — but conditional. A scratch on a dry surface in fresh air heals almost instantly. But if that scratch happens under water, or if the surface stays wet for hours (like in a dishwasher cycle), the passive layer may not reform in time.',
          'That is why dishwasher cycles are the most common cause of visible spotting on stainless steel cutlery: high heat, aggressive detergents, chlorides from food residues, and prolonged wet conditions all attack the passive layer at once. The film can only heal once the surface dries and gets fresh oxygen.',
          'Worldstainless confirms: the passive layer needs oxygen. Continuous wet conditions — submerged, buried in food residue, or trapped in a dishwasher\'s damp environment — prevent it from doing its job.',
        ],
      },
      {
        heading: 'Quick answers',
        paragraphs: [
          'Q: Can you see the passive layer?',
          'A: No. It is about 3 nanometers thick — roughly 1/30,000th of a human hair. You will never see it.',
          'Q: Does polishing damage the passive layer?',
          'A: No. Polishing removes surface contaminants, and the passive layer reforms instantly on the freshly exposed surface in air.',
          'Q: Is 304 passivation the same as the passive layer?',
          'A: No. \"Passivation\" as a chemical treatment uses acid to remove free iron from the surface and accelerate passive layer formation. The passive layer itself forms naturally on any clean stainless steel surface exposed to air.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '什么是钝化膜',
        paragraphs: [
          '不锈并不是真不锈。不锈钢不生锈的秘密，是表面一层几乎看不见的薄膜——钝化膜——它在金属接触空气时会自发形成。',
          '这层膜是氧化铬（Cr₂O₃），大约 3 纳米厚。差不多 30 个原子那么厚。当你在空气中刮擦不锈钢表面时，钝化膜在不到一秒内就会重新形成——这层膜会自我修复。',
          'Worldstainless 说得直白：钝化膜是不锈钢耐腐蚀性的根本。没了它，不锈钢和普通铁合金一样会生锈。',
        ],
      },
      {
        heading: '什么会破坏钝化膜',
        paragraphs: [
          '钝化膜很结实——但它有敌人。氯离子（来自盐、漂白水或者含盐的食物残留）会穿透并局部击穿这层膜。一旦被攻破，下面的钢就会开始腐蚀，形成一个小坑。你看到的就是一个暗点，周围带着锈色的黄斑。',
          '机械损伤也一样。深的划痕会伤及金属本体，自愈的时间更长。而在低氧环境里——比如狭缝里或者食物残渣下面——膜可能根本无法重新形成，因为它需要氧气才能重建。',
          '不同钢种的差距也体现在这里。Worldstainless 指出，304（18/8）的铬和镍含量更高，钝化膜更稳定。而 430（18/0）铬含量更低、不含镍，膜更薄、更脆弱——这也是 BSSA 只推荐 430 用于\"要求不高的场景\"的原因。',
        ],
      },
      {
        heading: '自修复与局限',
        paragraphs: [
          '自修复能力是真实存在的——但有条件。干燥表面在新鲜空气中刮一下，几乎瞬间愈合。但如果是在水下刮的，或者表面连续几小时保持湿润（比如洗碗机程序里），钝化膜可能来不及修复。',
          '这就是洗碗机程序成为不锈钢餐具可见锈斑最常见原因的原因：高温、强碱性洗涤剂、食物残留里的氯化物、以及长时间的潮湿环境——一起攻击钝化膜。膜只有等表面干了、接触到新鲜氧气才能修复。',
          'Worldstainless 确认了这一点：钝化膜需要氧气。连续潮湿的环境——泡在水里、埋在食物残渣下、或者卡在洗碗机的湿热舱里——都会让它失效。',
        ],
      },
      {
        heading: '快速问答',
        paragraphs: [
          '问：钝化膜用肉眼能看到吗？',
          '答：看不到。它大约 3 纳米厚——大概是一根头发丝的 1/30,000。你永远看不到它。',
          '问：抛光会破坏钝化膜吗？',
          '答：不会。抛光只去除表面污染物，新鲜暴露的表面在空气中会立刻重新形成钝化膜。',
          '问：304 的\"钝化处理\"和钝化膜是一回事吗？',
          '答：不是。作为化学处理的\"钝化（passivation）\"是用酸去除表面游离铁、加速钝化膜形成。而钝化膜本身是任何干净的不锈钢表面在空气中自然形成的。',
        ],
      },
    ],
    sources: [
      { id: 'worldstainless-food-beverage', organization: 'Worldstainless / Euro Inox', title: 'Stainless Steel in the Food and Beverage Industry', url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf', tier: 'industry-association', sense: 'Passive layer mechanism, chloride attack, self-healing, and grade selection context.' },
      { id: 'bssa-cutlery-grades', organization: 'BSSA', title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0', url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades', tier: 'industry-association', sense: 'Grade comparison: 304 vs 430 passive layer robustness.' },
    ],
    related: ['why-stainless-steel-can-rust', 'stainless-steel-grades-cutlery'],
  },

  // ============================================================
  // Article 2: why-stainless-steel-can-rust
  // ============================================================
  {
    slug: 'why-stainless-steel-can-rust',
    title: 'Why Stainless Steel Can Still Rust — and How to Prevent It',
    titleZh: '不锈钢为什么也会生锈——以及怎么预防',
    description: 'Stainless does not mean stain-proof. Here is exactly what causes rust spots, brown stains, and what you can do about it.',
    descriptionZh: '\"不锈\"不是\"绝不生锈\"。这里说清楚那些锈点、黄斑到底怎么来的，以及你能做什么。',
    eyebrow: 'Corrosion causes / 生锈原因',
    eyebrowZh: 'Corrosion causes / 生锈原因',
    intro:
      'Stainless does not mean stain-proof. Here is exactly what causes the rust spots, the brown stains, and what you can do about it.',
    introZh:
      '\'不锈\'不是\'绝不生锈\'。这里说清楚那些锈点、黄斑到底怎么来的，以及你能做什么。',
    sections: [
      {
        heading: 'Pitting corrosion from chlorides',
        paragraphs: [
          'The most common reason stainless steel rusts is pitting corrosion caused by chlorides. Chloride ions — found in table salt, bleach, and many food residues — are small enough to penetrate the passive layer at isolated spots.',
          'Once through, they trigger localized corrosion. The result is a small, dark pit with rust-colored staining around it. It looks like a tiny crater with brown runoff. This is not the steel rusting uniformly — it is a pinpoint attack that grew.',
          'Worldstainless explains that this is the dominant corrosion mechanism for stainless steel in food environments. Salt on a counter, dried food on a fork left overnight, or bleach-based cleaners — all deliver chlorides right where the passive layer is weakest.',
        ],
      },
      {
        heading: 'Surface contamination rust',
        paragraphs: [
          'Here is a twist: sometimes the rust you see is not even your stainless steel rusting. Carbon steel particles from other tools — a knife block, a fridge shelf, or a steel wool pad — can embed themselves into the surface of your stainless steel fork.',
          'Those embedded particles rust. And they stain the stainless steel around them, making it look like the fork itself is corroding. It is not. It is contamination.',
          'How to tell the difference? A magnet test helps: if the rusty spot attracts a magnet strongly, you probably have embedded particles. A citric acid soak will often dissolve the contamination rust without damaging the underlying stainless steel.',
        ],
      },
      {
        heading: 'Care differences by grade',
        paragraphs: [
          'Not all stainless steels handle abuse the same way. 304 (18/8) — the standard for cutlery — handles normal home conditions, dishwashers, and most foods without issue. Its passive layer is stable enough for daily life.',
          'Grade 430 (18/0) needs more care. BSSA states it is for \"less demanding conditions\" — which means more careful drying, less exposure to salt, and avoiding harsh cleaners. It will rust faster if neglected.',
          'And knife blades — typically 410 or other martensitic grades — are the most susceptible. They trade some corrosion resistance for hardness and edge retention. Rinse and dry them promptly. Do not leave them wet in the sink.',
        ],
      },
      {
        heading: 'Quick answers',
        paragraphs: [
          'Q: Why did my fork get rust spots after the dishwasher?',
          'A: Chloride ions from food residues + high heat + a long wet cycle. The passive layer could not self-heal in the damp environment.',
          'Q: Can I remove rust from stainless steel?',
          'A: Yes. Try citric acid (soak 15–30 minutes), a baking soda paste (scrub gently), or a dedicated stainless steel cleaner.',
          'Q: Is the rust affecting food safety?',
          'A: Surface rust is cosmetic. Deep pitting — where the metal has actually corroded — can trap bacteria and may be harder to clean. If you see real pits, replace the item.',
          'Q: Does 304 ever rust?',
          'A: Yes — under extreme conditions like prolonged salt water exposure, bleach contact, or repeated dishwasher cycles without drying. But in normal home use, it is rare.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '氯化物引发的点蚀',
        paragraphs: [
          '不锈钢生锈最常见的原因是氯化物引起的点蚀。氯离子——来自食盐、漂白水和许多食物残渣——小到足以在钝化膜上找到薄弱点并穿透过去。',
          '一旦穿过，它们就会引发局部腐蚀。结果就是一个小暗坑，周围带着锈色黄斑。看起来像微型火山口，锈水往外渗。这不是不锈钢整体生锈——是针尖大的攻击点扩大了。',
          'Worldstainless 解释说，这是不锈钢在食品环境下最主要的腐蚀机制。台面上的盐粒、过夜叉子上的干食物、含漂白剂的清洁剂——全部把氯化物送到了钝化膜最脆弱的地方。',
        ],
      },
      {
        heading: '表面污染生锈',
        paragraphs: [
          '有个你可能没想到的情况：有时候你看到的锈，根本不是你家不锈钢在生锈。是其他工具上的碳钢颗粒——刀架、冰箱搁架、钢丝球——嵌入了不锈钢表面。',
          '那些嵌入的颗粒自己生锈。锈迹染到了周围的不锈钢上，看起来就像叉子本身在腐蚀。其实不是。是污染。',
          '怎么区分？用磁铁试试：如果锈点能被磁铁牢牢吸住，大概率是嵌入的颗粒。用柠檬酸泡一下，通常能把污染锈溶解掉，而不会伤害下面的不锈钢。',
        ],
      },
      {
        heading: '不同钢种的护理差异',
        paragraphs: [
          '不是所有不锈钢都经得起同样的折腾。304（18/8）——餐具的标准钢种——能轻松应对家里正常环境、洗碗机和绝大多数食物。它的钝化膜足够稳定，经得起日常生活。',
          '430（18/0）需要更多关照。BSSA 说它适用于\"要求不高的场景\"——这意味着要更仔细地擦干、少接触盐、避免使用强清洁剂。不管它的话，它会锈得更快。',
          '而餐刀刃——通常用 410 或其他马氏体钢种——是最容易出问题的。它们牺牲了一部分耐蚀性来换取硬度和锋利度的保持。用完马上冲洗擦干，别泡在水池里。',
        ],
      },
      {
        heading: '快速问答',
        paragraphs: [
          '问：为什么我的叉子洗了洗碗机就长锈点了？',
          '答：食物残渣里的氯离子 + 高温 + 长时间的潮湿程序。钝化膜在湿环境下无法自愈。',
          '问：不锈钢上的锈能除掉吗？',
          '答：能。试试柠檬酸（泡 15–30 分钟）、小苏打糊（轻轻擦）、或者专用不锈钢清洁剂。',
          '问：生锈了会不会影响食品安全？',
          '答：表面浮锈只是外观问题。深度点蚀——金属真的被腐蚀出了坑——可能藏细菌，清洁难度大。如果真的看到凹坑，建议换掉。',
          '问：304 也会生锈吗？',
          '答：会——在极端条件下：长期接触盐水、碰到漂白水、或者反复进洗碗机不擦干。但正常家用环境下很少见。',
        ],
      },
    ],
    sources: [
      { id: 'worldstainless-food-beverage', organization: 'Worldstainless / Euro Inox', title: 'Stainless Steel in the Food and Beverage Industry', url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf', tier: 'industry-association', sense: 'Pitting corrosion mechanism, chloride attack, surface contamination, and care recommendations.' },
      { id: 'bssa-cutlery-grades', organization: 'BSSA', title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0', url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades', tier: 'industry-association', sense: 'Grade-specific corrosion resistance and care guidance for 304, 430, and 410.' },
    ],
    related: ['passive-layer-explained', 'stainless-steel-grades-cutlery', 'dishwasher-and-cutlery'],
  },

  // ============================================================
  // Article 3: magnetism-in-stainless-steel
  // ============================================================
  {
    slug: 'magnetism-in-stainless-steel',
    title: 'Is Your Fork Magnetic? What Magnetism Does and Does Not Tell You About Stainless Steel',
    titleZh: '叉子带磁正常吗？磁性到底能不能判断不锈钢好坏',
    description: 'Your 304 fork barely attracts a magnet. Your 430 fork does. Your knife definitely does. So which one is \"correct\"? All of them.',
    descriptionZh: '你的 304 叉子几乎不带磁。你的 430 叉子吸得住。你的餐刀肯定吸得住。哪个是\"正确\"的？全部都是。',
    eyebrow: 'Magnetism / 磁性',
    eyebrowZh: 'Magnetism / 磁性',
    intro:
      'Your 304 fork barely attracts a magnet. Your 430 fork does. Your knife definitely does. So which one is \'correct\'? All of them.',
    introZh:
      '你的 304 叉子几乎不带磁。你的 430 叉子吸得住。你的餐刀肯定吸得住。哪个是"正确"的？全部都是。',
    sections: [
      {
        heading: 'Why some stainless is magnetic and some isn\'t',
        paragraphs: [
          'Magnetism in stainless steel comes down to crystal structure — specifically, how the atoms are arranged inside the metal. The three main families used in cutlery have completely different structures.',
          'Austenitic grades (304, 316): face-centered cubic structure. The atoms are arranged in a way that cancels out magnetic fields. These are non-magnetic or only weakly magnetic. This is what most forks and spoons are made of.',
          'Ferritic grades (430): body-centered cubic structure. This structure is magnetic. Your 430 fork or pan will stick to a magnet like plain steel.',
          'Martensitic grades (410): also body-centered cubic, also magnetic — but with the added ability to be hardened through heat treatment. This is why knife blades are martensitic: they need to get hard and stay sharp.',
        ],
      },
      {
        heading: 'Work hardening magnetism',
        paragraphs: [
          'Here is the detail that trips people up: even a 304 fork can become slightly magnetic. Cold working — the bending, stamping, and forming processes used to shape cutlery — can transform some of the austenitic structure into a magnetic phase called martensite.',
          'This is completely normal. It is not a defect. It does not mean your 304 fork is actually 430. Worldstainless confirms that cold-formed austenitic stainless steel can develop measurable magnetic response, and it does not affect performance or corrosion resistance.',
          'If your 304 fork barely holds a paperclip to a magnet, that is manufacturing-induced work hardening magnetism. Nothing to worry about.',
        ],
      },
      {
        heading: 'What a magnet test actually tells you',
        paragraphs: [
          'A magnet test tells you one thing: the steel family. It does not tell you quality. It does not tell you whether the steel is food-safe. It tells you the crystal structure — and that is useful information, but only if you know how to read it.',
          'Strongly magnetic (430 or 410) = lower corrosion resistance, lower cost in the case of 430, designed for hardness in the case of 410. BSSA maps both of these clearly.',
          'Weakly or non-magnetic (304 or 316) = higher corrosion resistance, the standard for forks and spoons. This is what you want for most cutlery.',
          'But here is the balancing act: a knife blade that is non-magnetic would be too soft to hold an edge. The 410 blade in your cutlery set is supposed to be magnetic. The 304 spoon is supposed to be barely magnetic. Both are correct for their job.',
        ],
      },
      {
        heading: 'Quick answers',
        paragraphs: [
          'Q: Is magnetic stainless steel bad?',
          'A: No. It means it is ferritic (430) or martensitic (410) — different tools for different jobs. A magnetic knife blade is normal.',
          'Q: My 304 fork is slightly magnetic — is it defective?',
          'A: No. Cold working during manufacturing can induce weak magnetism. This is normal and does not affect performance.',
          'Q: Can I use a magnet to identify 304 vs 430?',
          'A: Roughly, yes — 430 is strongly magnetic, 304 barely or not at all. But it is not a reliable test for quality. Use it as a clue, not a verdict.',
          'Q: Why is my knife magnetic but my spoon isn\'t?',
          'A: Your knife is probably 410 (martensitic, designed for hardness). Your spoon is 304 (austenitic, designed for corrosion resistance). Both are correct choices.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '为什么有的不锈钢带磁有的不带',
        paragraphs: [
          '不锈钢是否带磁，归根结底是晶体结构的问题——具体说，就是金属内部的原子怎么排列。餐具上用到的三大类不锈钢，结构完全不同。',
          '奥氏体（304、316）：面心立方结构。原子排列方式使磁场相互抵消。所以不带磁或只有微弱磁性。你家大部分叉子和勺子都是这个。',
          '铁素体（430）：体心立方结构。这个结构带磁。你的 430 叉子或锅能被磁铁吸住，就像普通碳钢一样。',
          '马氏体（410）：同样是体心立方，也带磁——但多了一个通过热处理变硬的能力。这就是餐刀刃用马氏体的原因：它们需要硬起来才能保持锋利。',
        ],
      },
      {
        heading: '冷加工产生的磁性',
        paragraphs: [
          '有个细节经常让人困惑：就连 304 叉子也可能变成微微带磁。冷加工——餐具成型过程中的弯折、冲压、模压——会把一部分奥氏体结构转变成一种叫马氏体的磁性相。',
          '这完全正常。不是缺陷。不意味着你的 304 叉子其实是 430。Worldstainless 确认：经过冷加工的奥氏体不锈钢确实会产生可检测的磁性反应，但不影响性能也不影响耐蚀性。',
          '如果你的 304 叉子能勉强吸住一枚回形针——那是制造过程中产生的加工磁性。完全不用担心。',
        ],
      },
      {
        heading: '磁铁测试的真正意义',
        paragraphs: [
          '磁铁测试只告诉你一件事：钢种类型。它不告诉你质量好坏。不告诉你这个钢是不是食品安全的。它告诉你的是晶体结构——这是有用的信息，但前提是你知道怎么看。',
          '强磁性（430 或 410） = 耐蚀性较低。对 430 来说意味着成本低，对 410 来说意味着被设计成够硬。BSSA 清楚地标注了这两类。',
          '弱磁性或无磁性（304 或 316） = 耐蚀性更高，叉子和勺子的标准选择。这是你买大部分餐具时想要的。',
          '但别忘了平衡：一把不带磁的刀刃，会因为太软而没法保持锋利。你家餐具套装里的 410 餐刀本来就该带磁。304 勺子本来就应该不太带磁。两把都对——只是各自做不同的工作。',
        ],
      },
      {
        heading: '快速问答',
        paragraphs: [
          '问：带磁的不锈钢是不是不好？',
          '答：不是。它只是铁素体（430）或马氏体（410）——不同用途用不同材料。餐刀带磁是正常的。',
          '问：我的 304 叉子轻微带磁——是次品吗？',
          '答：不是。冷加工过程中可能产生微弱磁性，这是正常现象，不影响使用。',
          '问：能用磁铁区分 304 和 430 吗？',
          '答：大致可以——430 强磁性、304 几乎不带磁。但不是可靠的质量判断方法。做个参考可以，别当结论。',
          '问：为什么我的餐刀带磁、勺子却不带？',
          '答：餐刀大概率是 410（马氏体，为了硬度）。勺子通常是 304（奥氏体，为了耐蚀性）。两个选的都是对的。',
        ],
      },
    ],
    sources: [
      { id: 'bssa-cutlery-grades', organization: 'BSSA', title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0', url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades', tier: 'industry-association', sense: 'Austenitic, ferritic, martensitic classification and magnetic properties by grade.' },
      { id: 'worldstainless-food-beverage', organization: 'Worldstainless / Euro Inox', title: 'Stainless Steel in the Food and Beverage Industry', url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf', tier: 'industry-association', sense: 'Work hardening magnetism in cold-formed austenitic stainless steel.' },
    ],
    related: ['stainless-steel-grades-cutlery', 'cutlery-surface-finishes'],
  },
  {
    slug: 'cutlery-surface-finishes',
    title: 'Mirror Polish, Brushed, PVD: How Surface Finish Affects Your Cutlery',
    titleZh: '镜面、拉丝、PVD：表面处理怎么影响你的餐具',
    description: 'Why surface finish matters as much as steel grade — mirror polish, brushed/satin, and PVD coating explained for cutlery buyers and users.',
    descriptionZh: '表面处理和钢种一样重要——镜面、拉丝/缎面、PVD 镀层对餐具的影响，买家和用户需要知道的。',
    eyebrow: 'Surface explanation',
    eyebrowZh: '表面工艺',
    intro:
      "The steel grade gets all the attention, but the surface finish matters just as much. A bad finish on good steel is worse than a good finish on average steel.",
    introZh:
      '钢种吸引了所有人的注意力，但表面处理同样重要。好钢配烂表面，还不如一般钢配好表面。',
    sections: [
      {
        heading: 'Mirror polish: the gold standard for hygienic cutlery',
        paragraphs: [
          'Mirror polish is exactly what it sounds like — a surface so smooth it reflects like glass. It is achieved through mechanical polishing with progressively finer abrasives, going from coarse grit (say 120) all the way up to 800 or even 1000 grit, then buffing with compounds until the micro-scratches become invisible to the naked eye.',
          'Why does this matter for your fork? Because smoothness is the enemy of bacteria. EHEDG hygienic design guidelines are clear: the smoother the surface, the harder it is for microorganisms to cling, and the less food debris gets trapped in microscopic crevices. A mirror finish has the lowest surface roughness (Ra) of any common cutlery finish — typically below 0.5 µm. Worldstainless confirms that smooth surfaces are intrinsically easier to clean and sanitize in food contact applications.',
          'The practical takeaway: mirror-polished cutlery is the most hygienic choice. It is also the most prone to showing fingerprints and micro-scratches over time. If that tradeoff bothers you, read the next section.',
        ],
      },
      {
        heading: 'Brushed / satin finish: practical for daily use, slightly less hygienic',
        paragraphs: [
          'A brushed or satin finish has visible directional scratches — usually created by running the metal against an abrasive belt or pad in one direction. It looks like a matte surface with fine parallel lines running along the handle.',
          'The big advantage: fingerprints do not show. That makes brushed cutlery a favorite for restaurants and daily home use where mirror polish would look smudged after one meal. The tradeoff is surface area. Those directional scratches create microscopic peaks and valleys that increase the effective surface area, which means more places for food particles to lodge. EHEDG guidelines note that rougher surfaces (higher Ra values) require more aggressive cleaning to achieve the same level of hygiene as a mirror finish.',
          'Is the difference meaningful for a home kitchen? Usually not — as long as you clean it properly. But for anyone serving vulnerable populations or working in commercial food prep, mirror polish is the safer bet.',
        ],
      },
      {
        heading: 'PVD coating (gold tone): looks premium, wears like a coating',
        paragraphs: [
          'Physical Vapor Deposition — PVD — is not paint. It is a thin, hard ceramic-like layer (typically titanium nitride or similar) deposited onto the steel surface in a vacuum chamber. The result is that iconic gold, rose gold, or gunmetal finish that catches your eye in a cutlery set.',
          'Here is what nobody tells you: PVD is a coating on top of the steel, not the steel itself. Worldstainless notes that while PVD coatings are highly durable for a coating — harder than traditional plating — they can chip, scratch, or wear over time, especially at contact points like fork tines and knife edges. Once the coating is compromised, the underlying steel is exposed, and the visual consistency is gone.',
          'For food safety: the coating itself is generally inert and food-safe when intact. But chipped PVD exposes raw steel, which may not be the same grade (or finish quality) you expect underneath. If you buy PVD-coated cutlery, treat the coating as a cosmetic layer, not a lifetime finish. And yes, the dishwasher accelerates the wear — more on that in the dishwasher article.',
        ],
      },
      {
        heading: 'Quick answers: surface finishes, straight up',
        paragraphs: [
          'Q: Mirror vs brushed — which is better?',
          'A: For hygiene, mirror wins every time. The smoother surface is harder for bacteria to cling to and easier to clean. For daily aesthetics, brushed wins — no fingerprint drama. Choose based on your priority: cleanability or appearance maintenance.',
          'Q: Does PVD coating affect food safety?',
          'A: When intact, the coating is inert and food-safe. The risk is chipping — once it chips, you are eating off exposed steel of unknown surface quality. Keep the coating intact, and you are fine.',
          'Q: Can PVD coated cutlery go in dishwasher?',
          'A: It can, but it will not look good forever. Dishwasher detergents and heat accelerate micro-abrasion and fading. If you want the gold finish to last, hand wash. Period.',
          'Q: How to tell if a finish is mirror vs brushed?',
          'A: Tilt the cutlery under a light. If you see a clear reflection of your face or the room — mirror. If you see hazy directional lines with no clear reflection — brushed. If you see a colored surface (gold, rose, black) that does not look like bare metal — PVD coated.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '镜面抛光：餐具卫生的黄金标准',
        paragraphs: [
          '镜面就是字面意思——表面光滑到能像玻璃一样反光。它是通过机械抛光实现的：从粗磨料（比如 120 目）一路到 800 目甚至 1000 目，再用抛光膏研磨到微观划痕肉眼不可见为止。',
          '这对你的叉子意味着什么？光滑是细菌的天敌。EHEDG 卫生设计指南说得清楚：表面越光滑，微生物越难附着，食物残渣越难卡在微观缝隙里。在所有常见餐具表面处理中，镜面的表面粗糙度（Ra）最低——通常低于 0.5 µm。Worldstainless 也确认光滑表面在食品接触应用中本质上更容易清洁和消毒。',
          '实际结论：镜面抛光餐具是最卫生的选择。但它也是最容易留指纹和细微划痕的。如果这个取舍让你纠结，往下看下一节。',
        ],
      },
      {
        heading: '拉丝/缎面：日常实用，卫生性略逊一筹',
        paragraphs: [
          '拉丝或缎面处理有肉眼可见的单向划痕——通常是用砂带或磨垫沿一个方向摩擦金属表面形成的。最终效果是哑光表面配上沿手柄方向的平行细纹。',
          '最大优势：不显指纹。这让拉丝餐具成为餐厅和日常家用的宠儿——镜面处理可能一顿饭功夫就花掉了。代价是表面积。那些单向划痕形成了微观的峰谷，增加了有效表面积，也就是说食物残渣有更多地方可藏。EHEDG 指南指出，较粗糙的表面（Ra 值更高）需要更用力地清洗才能达到和镜面相同的卫生水平。',
          '对家庭厨房来说，这个差距有意义吗？通常没有——只要你好好清洗就没问题。但如果你要给宝宝、老人或者做商业配餐用，镜面是更安全的选择。',
        ],
      },
      {
        heading: 'PVD 镀层（金色）：看起来高级，用起来是涂层',
        paragraphs: [
          '物理气相沉积——PVD——不是喷漆。它是在真空环境下沉积到钢材表面的一层薄而硬的陶瓷状镀层（通常是氮化钛或类似材料）。结果就是你在餐具套装里看到的那种标志性的金色、玫瑰金或枪色质感。',
          '没人告诉你的事：PVD 是覆盖在钢材表面的涂层，不是钢材本身。Worldstainless 指出，虽然 PVD 涂层作为涂层来说非常耐用（比传统电镀硬得多），但长期使用中它会崩口、刮花或磨损——尤其是在叉尖和刀刃这些接触点上。涂层一旦破损，下面的钢材就暴露出来，视觉效果也就完了。',
          '食品安全方面：完整的涂层本身是惰性且食品安全的。但崩了口的 PVD 暴露出来的可能是和你期望的完全不同等级（或表面质量）的钢材。如果你买 PVD 镀层餐具，把它当作一层装饰，而不是永久表面。另外，洗碗机会加速磨损——这在洗碗机那篇文章里会细说。',
        ],
      },
      {
        heading: '快速问答：表面处理，直说',
        paragraphs: [
          '问：镜面和拉丝，哪个更好？',
          '答：论卫生，镜面完胜。表面越光滑，细菌越难附着，越容易清洗。论日常美观，拉丝胜——不显指纹。按你的优先级选：清洁能力还是外观维护。',
          '问：PVD 镀层影响食品安全吗？',
          '答：完整的涂层是惰性且食品安全无毒的。风险在于崩口——一旦破了，你就直接接触下面暴露的钢材了。保持涂层完整就没问题。',
          '问：PVD 镀层餐具能进洗碗机吗？',
          '答：能进，但别指望它能一直好看。洗碗机洗涤剂和高温会加速微观磨损和褪色。想让金色持续如新？手洗。没有商量余地。',
          '问：怎么区分镜面和拉丝？',
          '答：把餐具放在灯下倾斜看。能清晰看到自己或房间的倒影——镜面。看到模糊的平行线条，没有清晰倒影——拉丝。看到金色、玫红、黑色等颜色，不像裸金属——PVD 镀层。',
        ],
      },
    ],
    sources: [
      {
        id: 'ehedg-hygienic-design',
        organization: 'EHEDG',
        title: 'EHEDG Guideline — Hygienic Design Principles',
        url: 'https://www.ehedg.org/guidelines-working-groups/guidelines/guidelines/detail/hygienic-design-principles',
        tier: 'industry-association',
        sense: 'Hygienic design concepts for food processing equipment: surface finish, cleanability, seam design.',
      },
      {
        id: 'worldstainless-food-beverage',
        organization: 'Worldstainless / Euro Inox',
        title: 'Stainless Steel in the Food and Beverage Industry',
        url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf',
        tier: 'industry-association',
        sense: 'Stainless steel families, passive layer, grade selection, and food/beverage application context.',
      },
    ],
    related: ['stainless-steel-grades-cutlery', 'dishwasher-and-cutlery'],
  },
  {
    slug: 'jieyang-stainless-industry',
    title: "Jieyang: The City Behind Much of the World's Stainless Steel Cutlery",
    titleZh: '揭阳：全球大量不锈钢餐具背后的城市',
    description: 'How one city in Guangdong came to produce a third of China\'s stainless steel tableware — and what that means for buyers around the world.',
    descriptionZh: '一个广东城市如何生产了全国近三分之一的不锈钢餐具——以及这对全球买家意味着什么。',
    eyebrow: 'Industry context',
    eyebrowZh: '产业背景',
    intro:
      "Chances are your last set of stainless steel forks came from one city in southern China. Not because that city is famous — but because it produces a third of the country's stainless steel tableware.",
    introZh:
      '你上一套不锈钢叉子，大概率来自中国南方的一座城市。不是因为这座城市很有名——而是因为它生产了全国近三分之一的不锈钢餐具。',
    sections: [
      {
        heading: 'Why Jieyang? A cluster that happened for a reason',
        paragraphs: [
          'Jieyang, in Guangdong province, did not wake up one day and decide to become the cutlery capital of the country. The industry cluster emerged over decades — driven by proximity to raw material supply chains, a deep pool of skilled labor (die and mold makers, polishers, platers), and a manufacturing ecosystem that lets dozens of specialized workshops coexist under one industrial roof.',
          'Today, Jieyang is home to hundreds of cutlery factories ranging from tiny family-run workshops churning out budget supermarket sets to export-grade facilities supplying major brands in Europe, Japan, and North America. The concentration is so dense that you can source raw steel stampings, molds, polishing, electroplating, and packaging all within a 20-kilometer radius.',
          'For regulatory context: cutlery produced in Jieyang (and anywhere in China) must comply with GB 4806.9-2023 for metal food-contact materials, overseen by the National Health Commission. The standard is real and enforceable — but compliance varies by factory.',
        ],
      },
      {
        heading: 'Quality range: from bargain bin to premium export',
        paragraphs: [
          'Here is the honest picture: Jieyang produces cutlery at every conceivable quality level. The same city that stamps out 430-grade forks for discount supermarket house brands also runs factories that hit 304 specifications precisely, maintain tight quality control, and deliver smooth mirror finishes that pass serious inspection.',
          'The big variable is not the city — it is the factory. What determines quality in Jieyang-made cutlery comes down to three things: grade verification (is it really 304 or did they substitute 430?), surface finish quality (rough polish vs proper mirror finish), and QC rigor (how many pieces get rejected before they leave the factory). BSSA\'s cutlery grade mapping gives you the reference — 304 means something, 430 means something else — but only if the factory actually uses what they claim.',
        ],
      },
      {
        heading: 'What this means for buyers: "Made in Jieyang" is not a verdict',
        paragraphs: [
          'If you see "Made in Jieyang" on a cutlery set, it tells you one thing: this fork was manufactured in Guangdong, China. It does not tell you the steel grade, the surface finish quality, the QC standard, or whether it meets food-contact regulations. Those are separate questions.',
          'Good factories exist in Jieyang. So do cheap ones that will use the thinnest gauge metal and the roughest polish they can get away with. The Worldstainless and BSSA references apply equally here: look for 304 (18/8) stainless, check the finish smoothness, buy from a brand that has a reputation to protect. Do not judge the fork by its passport — judge it by the material and craftsmanship in your hand.',
        ],
      },
      {
        heading: 'Quick answers: Jieyang cutlery, straight up',
        paragraphs: [
          'Q: Is cutlery from Jieyang good quality?',
          'A: It can be — and it can be terrible. Jieyang is a city of factories, not a brand. The quality depends entirely on which factory made it and what specifications the buyer ordered. "From Jieyang" alone tells you nothing useful.',
          'Q: How can I check if Jieyang-made cutlery is 304 or 430?',
          'A: If the set is not stamped 18/8 or 304 on the blade or handle, you cannot tell by looking. A reputable brand will state the grade clearly. If the packaging says nothing, or uses vague terms like "stainless steel" with no number, assume 430 (budget grade). A magnet test helps: 430 is strongly magnetic, 304 barely is.',
          'Q: Does all Jieyang cutlery use the same factories?',
          'A: Absolutely not. Jieyang has hundreds of independent factories operating at wildly different quality levels. A 50-piece set at the supermarket and a premium Japanese-brand set might both say "Made in Jieyang" — made by completely different factories with completely different QC.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '为什么是揭阳？产业集群不是一天形成的',
        paragraphs: [
          '揭阳，广东的一个地级市，没有哪天一觉醒来决心成为全国餐具之都。这个产业集群是几十年自然形成的——靠近原料供应链、拥有大量熟练技工（模具师傅、抛光工、电镀工）、制造生态让几十家专业作坊可以在一个工业园区内共存。',
          '今天，揭阳有几百家餐具工厂——从家庭式小作坊（生产超市便宜套装）到给欧洲、日本、北美品牌代工的高端出口级工厂。产业集群密度大到：钢材冲压、模具、抛光、电镀、包装——全都能在方圆 20 公里内解决。',
          '法规方面：揭阳（以及全中国）生产的餐具必须符合 GB 4806.9-2023 金属食品接触材料标准，由国家卫健委监管。标准是真实存在的且可执行——但每家工厂的执行程度不一样。',
        ],
      },
      {
        heading: '质量层次：从地摊货到高端出口',
        paragraphs: [
          '说实话：揭阳能生产任何你能想到的质量等级的餐具。同一个城市，一边在冲压 430 级叉子给超市自有品牌用，另一边也有工厂精准达标 304 规格、严格控制质量、做出经得起严格检验的平滑镜面。',
          '关键变量不是城市——是工厂。揭阳产餐具的质量取决于三个东西：钢种验证（真的是 304 还是偷换成 430？）、表面处理质量（粗磨还是标准镜面抛光？）、品控严格度（出厂前砍掉多少件次品？）。BSSA 的餐具钢种对照表给你参考——304 有 304 的标准，430 有 430 的——但前提是工厂真的用了他们号称的材料。',
        ],
      },
      {
        heading: '对买家的意义：\"揭阳制造\"不是质量判决',
        paragraphs: [
          '如果你在餐具上看到"Made in Jieyang"，它只说明一件事：这个叉子是中国广东生产的。它没有告诉你钢种、表面处理质量、品控标准、或者是否符合食品接触法规。这些是独立的问题。',
          '揭阳有好工厂。也有只管用最薄的料、应付最粗糙的抛光就出货的廉价厂。Worldstainless 和 BSSA 的参考在这里同样适用：认准 304（18/8）不锈钢，检查表面光滑度，买有品牌声誉可维护的产品。别以护照产地论叉子——以你手里的材料和做工为准。',
        ],
      },
      {
        heading: '快速问答：揭阳餐具，直说',
        paragraphs: [
          '问：揭阳产的餐具质量好吗？',
          '答：可以很好——也可以很差。揭阳是城市名，不是品牌。质量完全取决于哪家工厂做的、买家下了什么规格。\"来自揭阳\"这四个字本身什么都说明不了。',
          '问：怎么判断揭阳产的餐具是 304 还是 430？',
          '答：如果刀身或手柄上没有印 18/8 或 304，你光靠看是看不出来的。靠谱品牌会明确标注钢种。如果包装上什么都没写，或者只含糊地写"不锈钢"不写数字，默认是 430（廉价级）。磁铁测试有帮助：430 强磁性，304 几乎不带磁。',
          '问：揭阳的餐具都是同一批工厂做的吗？',
          '答：绝对不是。揭阳有几百家独立工厂，质量水平天差地别。超市里 50 件套装和某个日本高端品牌套装可能都写着"Made in Jieyang"——但完全是不同工厂、不同品控标准做的。',
        ],
      },
    ],
    sources: [
      {
        id: 'nhc-gb-4806',
        organization: 'National Health Commission of PRC',
        title: 'NHC announcement of GB 4806.9-2023',
        url: 'https://www.nhc.gov.cn/wjw/c100175/202309/bb7158019984496ca14e51e41cc2d1c2.shtml',
        tier: 'official-regulation',
        sense: 'China metal food-contact standard with dedicated release limits and raw material requirements.',
        note: 'Use official Chinese text for clause-level claims. English summaries are not the legal text.',
      },
      {
        id: 'bssa-cutlery-grades',
        organization: 'BSSA',
        title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0',
        url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades',
        tier: 'industry-association',
        sense: 'Direct mapping of 18/8, 18/10, 18/0 to standard grades; 304/430 attributes; knife blade grade context.',
      },
      {
        id: 'worldstainless-food-beverage',
        organization: 'Worldstainless / Euro Inox',
        title: 'Stainless Steel in the Food and Beverage Industry',
        url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf',
        tier: 'industry-association',
        sense: 'Stainless steel families, passive layer, grade selection, and food/beverage application context.',
      },
    ],
    related: ['stainless-steel-grades-cutlery', 'cutlery-surface-finishes'],
  },
  {
    slug: 'dishwasher-and-cutlery',
    title: 'Can Your Stainless Steel Cutlery Go in the Dishwasher? What Actually Happens',
    titleZh: '不锈钢餐具能进洗碗机吗？实际会发生什么',
    description: 'What dishwasher cycles do to stainless steel surfaces, why grade matters, and how to avoid pitting, spotting, and coating damage.',
    descriptionZh: '洗碗机程序对不锈钢表面做什么、为什么钢种有区别、以及如何避免蚀点、水斑和涂层损伤。',
    eyebrow: 'Care guide',
    eyebrowZh: '护理指南',
    intro:
      "Yes, you can put stainless steel cutlery in the dishwasher. But the answer is not as simple as a yes or no — and the 'yes' comes with conditions that matter.",
    introZh:
      '能，不锈钢餐具确实可以进洗碗机。但答案没那么简单——这个"能"是有条件的，而且条件还挺重要。',
    sections: [
      {
        heading: 'What the dishwasher does to stainless steel',
        paragraphs: [
          'The dishwasher is an aggressive environment for any metal. High heat (55–75°C), caustic detergents, chlorides from both food residue and detergent formulations, and prolonged wet cycles — all of these attack the passive layer that makes stainless steel "stainless."',
          'Here is the mechanism: during the wash, chlorides and heat can temporarily weaken the passive layer (the thin chromium oxide film on the surface). If the cycle ends and the cutlery stays wet in a dark, enclosed dishwasher — where the passive layer cannot "heal" by exposure to oxygen — the attack continues. Worldstainless explains this clearly: the passive layer needs oxygen to reform, and that requires air. A closed dishwasher door, especially overnight with wet metal inside, is the worst environment for rapid re-passivation.',
          'The result? You might see pitting (tiny rust spots), water spotting (mineral deposits), or a dulling of the surface over time. None of these mean the cutlery is destroyed — but they are signals that the conditions were less than ideal.',
        ],
      },
      {
        heading: 'Grade matters: not all stainless steel handles the dishwasher equally',
        paragraphs: [
          '304 (18/8) stainless steel is the most dishwasher-tolerant grade for cutlery. Its higher nickel and chromium content gives it a robust passive layer that can handle the heat and detergent assault better than the alternatives.',
          '430 (18/0) will show spotting and dulling faster. And martensitic grades like 410 — commonly used for knife blades — are the most vulnerable. BSSA notes that 410 knife blades can develop edge corrosion and surface staining if left wet in the dishwasher. That "dull knife" problem after dishwashing? It is often not the edge going blunt — it is the surface of the blade being chemically etched by heat and detergent.',
          'PVD-coated cutlery (gold, rose gold, gunmetal) faces a different issue. The coating is hard, but it is thin. Dishwasher detergents — especially those with high alkalinity or abrasive particles — will gradually micro-abrade the coating, leading to fading, dulling, and eventually chipping at vulnerable edges. If you paid extra for a colored finish, the dishwasher will make sure you pay again in shortened lifespan.',
        ],
      },
      {
        heading: 'Best practices: how to keep your cutlery looking good',
        paragraphs: [
          'You can still use the dishwasher. Just follow these rules to minimize the damage.',
          'First, rinse cutlery before loading. Chlorides from food residue (salt, sauce, tomato) are a major contributor to pitting. A quick rinse removes the worst of it before the high-heat cycle locks it onto the metal.',
          'Second, do not mix metals in the same load. Stainless steel in contact with silver or carbon steel in a dishwasher creates a galvanic cell — the less noble metal corrodes faster. Keep stainless with stainless.',
          'Third, use low-temperature cycles when possible. The lower the heat, the less aggressive the chemical attack on the passive layer. Most modern dishwashers have a "light wash" or "eco" setting that still cleans effectively.',
          'Fourth and most important: open the dishwasher door as soon as the cycle finishes. Let air circulate. This lets the passive layer heal by re-exposing the metal to oxygen. Worldstainless emphasizes that air-drying with ventilation is significantly better for stainless steel than heat-dry cycles that keep the metal wet and hot in a sealed chamber.',
        ],
      },
      {
        heading: 'Quick answers: dishwasher and cutlery, real talk',
        paragraphs: [
          'Q: Will the dishwasher ruin my 304 fork?',
          'A: No — 304 is built for this. It will survive hundreds of cycles. You might see some spotting over years of use, but that is cosmetic, not structural.',
          'Q: Why does my knife look dull after dishwasher?',
          'A: Two possibilities. (1) The blade is 410 martensitic stainless — it gets chemically etched by heat and detergent. (2) The edge is physically bumping against other utensils. In either case: hand drying and separate placement help. But the real fix is hand washing for nicer knives.',
          'Q: Can I put PVD gold cutlery in dishwasher?',
          'A: You can. But the coating will eventually fade, dull, or chip. The dishwasher accelerates that process. If you care about the gold finish, hand wash. If you do not care, dishwash away — just know what to expect.',
          'Q: How to fix spotting after dishwasher?',
          'A: White spots are usually mineral deposits (hard water). Wipe with a dilute vinegar solution and dry immediately. Orange/brown spots are early pitting — rub with a baking soda paste and a soft cloth. If the pitting is deep, it is permanent, but it usually stops spreading if you dry the cutlery promptly after future washes.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '洗碗机对不锈钢做了什么',
        paragraphs: [
          '洗碗机对任何金属来说都是个恶劣环境。高温（55–75°C）、强碱洗涤剂、来自食物残渣和洗涤剂双方的氯化物、长时间的湿润循环——所有这些都在攻击让不锈钢"不锈"的钝化层。',
          '机制是这样的：洗涤过程中，氯化物和高温会暂时削弱钝化层（表面那层薄薄的氧化铬膜）。如果程序结束后餐具在黑暗封闭的洗碗机里保持湿润——钝化层无法通过接触氧气"自我修复"——破坏就会继续。Worldstainless 说得很清楚：钝化层需要氧气才能重新形成，这需要空气。关着的洗碗机门，特别是过夜不取出来，是快速再钝化的最差环境。',
          '结果是什么？你可能看到点蚀（微小的锈点）、水斑（矿物质沉积）、或表面变暗。这些都不意味着餐具废了——但它们说明条件不太理想。',
        ],
      },
      {
        heading: '钢种有区别：不是所有不锈钢都扛得住洗碗机',
        paragraphs: [
          '304（18/8）不锈钢是餐具中最耐洗碗机的钢种。更高的镍和铬含量提供了更坚固的钝化层，比替代品更扛得住高温和洗涤剂的攻击。',
          '430（18/0）会更早出现水斑和变暗。马氏体不锈钢如 410——常用于刀刃——是最脆弱的。BSSA 指出，410 刀片如果放在洗碗机里保持湿润，可能会出现边缘腐蚀和表面变色。洗碗后感觉刀子变"钝"了？往往不是刃口真的变钝——而是刀片表面被高温和洗涤剂化学腐蚀了。',
          'PVD 镀层餐具（金色、玫瑰金、枪色）面临不同的问题。涂层很硬，但很薄。洗碗机洗涤剂——特别是高碱性或含研磨颗粒的种类——会逐渐对涂层造成微观磨损，导致褪色、变暗、最终在脆弱边缘崩口。如果你为了彩色表面多付了钱，洗碗机会帮你以缩短寿命的形式再付一次。',
        ],
      },
      {
        heading: '最佳做法：如何让餐具保持好看',
        paragraphs: [
          '你仍然可以用洗碗机。但遵守以下规则来减少损伤。',
          '第一，装碗前先冲洗餐具。食物残渣里的氯化物（盐、酱汁、番茄）是点蚀的主要元凶。快速冲一下水，在高温循环把这些东西固定到金属表面之前，把最严重的部分去掉。',
          '第二，同一批里不要混放不同金属。不锈钢和银器或碳钢厨具在洗碗机里接触会形成原电池——电位较低的金属腐蚀更快。不锈钢和不锈钢放一起。',
          '第三，尽量用低温程序。温度越低，化学攻击对钝化层的破坏越小。大多数现代洗碗机有"轻洗"或"节能"模式，清洗效果依然够好。',
          '第四，也是最重要的一点：程序结束后立即打开洗碗机门。让空气流通。这能让钝化层通过重新接触氧气来修复。Worldstainless 强调，通风晾干对不锈钢的好处明显大于封闭烘干——后者让金属在密封舱里保持温热湿润。',
        ],
      },
      {
        heading: '快速问答：洗碗机和餐具，实话实说',
        paragraphs: [
          '问：洗碗机会毁了我的 304 叉子吗？',
          '答：不会——304 就是为这个设计的。它扛得住几百次循环。几年后你可能会看到一些水斑，但那只是外观问题，不是结构问题。',
          '问：为什么我家的餐刀洗完后看起来很暗？',
          '答：两种可能。（1）刀片是 410 马氏体不锈钢——被高温和洗涤剂化学腐蚀了。（2）刀刃在洗碗机里和其他餐具互相磕碰。不管哪种情况：手擦干、分开摆放都有帮助。但真想解决问题——好刀手洗。',
          '问：PVD 金色餐具能进洗碗机吗？',
          '答：能进。但镀层最终会褪色、变暗或崩口。洗碗机会加速这个过程。如果你在乎金色外观——手洗。不在乎的话——用洗碗机洗吧——但心里有数就行。',
          '问：洗碗后的水斑怎么去除？',
          '答：白斑通常是矿物质沉积（硬水）。用稀释白醋擦拭，立刻擦干。橙/褐色斑点是早期点蚀——用小苏打糊加软布擦拭。如果点蚀已经较深，那是永久性的，但只要你以后洗完立刻擦干，通常不会再扩大。',
        ],
      },
    ],
    sources: [
      {
        id: 'worldstainless-food-beverage',
        organization: 'Worldstainless / Euro Inox',
        title: 'Stainless Steel in the Food and Beverage Industry',
        url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf',
        tier: 'industry-association',
        sense: 'Stainless steel families, passive layer, grade selection, and food/beverage application context.',
      },
      {
        id: 'bssa-cutlery-grades',
        organization: 'BSSA',
        title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0',
        url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades',
        tier: 'industry-association',
        sense: 'Direct mapping of 18/8, 18/10, 18/0 to standard grades; 304/430 attributes; knife blade grade context.',
      },
    ],
    related: ['passive-layer-explained', 'why-stainless-steel-can-rust', 'stainless-steel-grades-cutlery'],
  },

  {
    slug: 'surgical-grade-stainless',
    title: 'What Does "Surgical Grade Stainless Steel" Actually Mean?',
    titleZh: '"手术级不锈钢"到底是什么',
    description:
      'Surgical grade stainless steel" sounds official. It sells cutlery sets. But does it mean anything real for your fork? Usually, no.',
    descriptionZh:
      '"手术级不锈钢"听起来特别专业。餐具广告里经常用它来抬高身价。但这个词对你手里的叉子到底意味着什么？通常——什么也不意味着。',
    eyebrow: 'Marketing myth',
    eyebrowZh: '营销迷思',
    intro:
      '"Surgical grade" is not a real metallurgical grade. There is no ISO or ASTM standard that says "this is surgical." What it actually refers to is not what the marketing tells you.',
    introZh:
      '"手术级"不是真正的冶金等级。没有哪个 ISO 或 ASTM 标准里定义过"手术级不锈钢"。这个词实际所指的，和广告告诉你的不一样。',
    sections: [
      {
        heading: 'Where "surgical grade" comes from',
        paragraphs: [
          'The term "surgical grade stainless steel" originates from one specific alloy: 316L. It is called surgical because 316L is actually used in real surgical implants — plates, screws, and instruments that go inside the human body.',
          '316L means 316 Low Carbon. The L stands for extra-low carbon content (max 0.03%), which prevents sensitization — a process where chromium carbides form at grain boundaries, reducing corrosion resistance. In surgery, that matters. A corroding implant inside your body is a disaster.',
          'But here is the key: "surgical grade" is not an official standard. No ISO committee sat down and defined it. No ASTM document lists it as a recognized term. It is a market-driven label borrowed from the medical world and applied to products that will never go near an operating room.',
        ],
      },
      {
        heading: 'What cutlery marketers do with it',
        paragraphs: [
          'Walk into any home goods store or browse Amazon for cutlery sets. "Surgical grade stainless steel" is everywhere. It sounds clinical, precise, trustworthy — like the fork was designed by a team of surgeons.',
          'Reality check: there is no regulated definition. Any stainless steel can be called "surgical grade." That $20 set of 12? The stamp is marketing gold applied to the cheapest 304 or even 430 they could source.',
          'The trick works because the phrase triggers an association with medical quality. But the actual steel in your drawer is not medical-grade anything. It is standard 18/8 or 18/0. Which is fine — for a fork. But the label creates a quality illusion that the product does not earn.',
          'And here is the punch line: the only stainless that genuinely qualifies as "surgical" is 316L. And you absolutely do not need 316L for your dinner fork. It is overkill for home use, costs more, and adds no practical benefit at the dinner table.',
        ],
      },
      {
        heading: 'What actually matters for cutlery',
        paragraphs: [
          'If every "surgical grade" stamp disappeared tomorrow, would your cutlery get worse? No. Because what actually determines cutlery quality has nothing to do with labels.',
          '304 (18/8) stainless steel is the real workhorse. It is what professional restaurant kitchens use every day — and those forks survive commercial dishwashers, acidic foods, and constant use. BSSA confirms 304 is more than adequate for virtually all cutlery applications.',
          'What matters more than the label: surface finish. A well-polished 304 fork with a smooth, mirror-like surface is more hygienic, more corrosion-resistant, and feels better in the hand than any rough "surgical grade" stamp on a cheap blank. Manufacturing quality — seamlessness, edge smoothness, handle-to-blank attachment — matters far more than a marketing phrase.',
          '"Surgical grade" on a fork is like "racing grade" on a family sedan. It sounds impressive. It means next to nothing.',
        ],
        bullets: [
          '304 (18/8) is the standard for restaurant-grade cutlery. Good enough for Chez Panisse, good enough for your kitchen.',
          'Surface finish and construction quality beat any label. Smooth, seamless, well-polished = actually good.',
          '"Surgical grade" is a marketing transfer from medical instruments. Your fork is not a scalpel.',
        ],
      },
      {
        heading: 'Quick answers: surgical grade stainless steel, debunked',
        paragraphs: [
          'Q: Is there a real definition of surgical grade stainless steel?',
          'A: No. No regulatory body or standards organization officially defines "surgical grade" as a metallurgical category. It is an informal market term.',
          'Q: Should I buy cutlery labeled "surgical grade"?',
          'A: Ignore the label. Look for 304 (18/8) stainless steel from a reputable manufacturer. The "surgical" stamp adds nothing to the fork\'s performance.',
          'Q: What grade is actually used for surgical instruments?',
          'A: 316L (low carbon, molybdenum-containing) is the standard for surgical implants and instruments. It offers maximum corrosion resistance in biological environments.',
          'Q: Is 304 better than "surgical grade"?',
          'A: 304 is equivalent to what most "surgical grade" labels actually deliver. 304 is a well-defined standard (AISI 304, EN 1.4301). "Surgical grade" is not. So yes — 304 tells you more than the marketing label ever will.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '"手术级"的来源',
        paragraphs: [
          '"手术级不锈钢"这个词来自一种特定的合金：316L。它被称为手术级，是因为 316L 确实被用在真正的手术器械里——进入人体的骨板、螺钉和手术工具。',
          '316L 的意思是 316 Low Carbon（低碳）。L 代表超低碳含量（max 0.03%），防止敏化——也就是碳化铬在晶界析出，降低耐腐蚀性。在手术中，这一点至关重要。体内植入物腐蚀是灾难。',
          '但关键在于："手术级"不是官方标准。没有哪个 ISO 委员会坐下来定义过它。ASTM 文件里也搜不到这个术语。它是一个借用医疗领域的营销标签，贴在了永远不会进手术室的产品上。',
        ],
      },
      {
        heading: '餐具营销怎么做文章',
        paragraphs: [
          '去任何家居店或翻看电商平台的餐具套装。"手术级不锈钢"随处可见。听起来专业、精准、可信——好像这套叉子是一群外科医生设计的。',
          '实际情况：这个词没有规范定义。任何不锈钢都可以叫"手术级"。你花几十块买的 12 件套？那个标签是最便宜的 304 甚至 430 上的营销金漆。',
          '这个套路之所以管用，是因为它触发了人们对医疗品质的联想。但你抽屉里的那把叉子跟医疗级没有任何关系。它就是标准的 18/8 或 18/0。对叉子来说这完全够用——但标签给它制造了一个产品本身配不上的品质幻觉。',
          '点睛之笔：唯一真正算得上"手术级"的不锈钢是 316L。而你吃饭的叉子绝对不需要 316L。家用纯属过剩，更贵，而且在实际餐桌上没有任何额外好处。',
        ],
      },
      {
        heading: '餐具真正该看什么',
        paragraphs: [
          '如果明天所有"手术级"标签都消失了，你的餐具会变差吗？不会。因为决定餐具品质的从来不是标签。',
          '304（18/8）不锈钢是真正的劳模。专业餐厅厨房每天都在用——那些叉子扛得住商用洗碗机、酸性食物和持续使用。BSSA 确认 304 几乎满足所有餐具场景的需求。',
          '比标签重要得多的：表面处理。一把抛光良好、表面如镜的 304 叉子，比任何印着粗糙的"手术级"标签的廉价坯体更卫生、更耐腐蚀、手感更好。制造品质——无缝衔接、边缘光滑、柄片接合质量——比一句营销话术重要得多。',
          '"手术级"贴在叉子上，就像"赛车级"贴在家庭轿车上。听起来很厉害。实际上几乎什么也不代表。',
        ],
        bullets: [
          '304（18/8）是餐厅级餐具的标准。能经得起摘星厨房的考验，就能经得起你家。',
          '表面处理和做工质量胜过任何标签。光滑无缝抛光好=真好的餐具。',
          '"手术级"是从医疗器械借来的营销概念。你的叉子不是手术刀。',
        ],
      },
      {
        heading: '快速问答："手术级"不锈钢，真相大白',
        paragraphs: [
          '问：有"手术级不锈钢"的真正定义吗？',
          '答：没有。没有监管机构或标准组织把"手术级"定义为冶金分类。它是非正式的市场用语。',
          '问：该不该买标着"手术级"的餐具？',
          '答：忽略标签。认准 304（18/8）不锈钢和靠谱品牌。"手术级"标签对叉子的性能没有任何加成。',
          '问：手术器械实际用的是什么钢种？',
          '答：316L（低碳、含钼）。它在生物环境中有最好的耐腐蚀性能，是外科植入物和器械的标准材料。',
          '问：304 比"手术级"好吗？',
          '答：304 和大多数"手术级"标签实际提供的材料是一样的。304 有明确定义的标准（AISI 304, EN 1.4301）。"手术级"没有。所以是的——304 告诉你的是实打实的东西，营销标签不能。',
        ],
      },
    ],
    sources: [
      { id: 'worldstainless-food-beverage', organization: 'Worldstainless / Euro Inox', title: 'Stainless Steel in the Food and Beverage Industry', url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf', tier: 'industry-association', sense: 'Stainless steel families, grade selection for food and beverage applications; 304/316 context.' },
      { id: 'nickel-institute-fcm', organization: 'Nickel Institute', title: 'The role of nickel in Food Contact Materials', url: 'https://nickelinstitute.org/en/nickel-applications/food-contact-materials', tier: 'industry-association', sense: 'Food-contact stainless context; 316L medical-grade vs marketing use.' },
      { id: 'bssa-cutlery-grades', organization: 'BSSA', title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0', url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades', tier: 'industry-association', sense: '304/430 cutlery grade mapping; practical adequacy of 304 for cutlery.' },
    ],
    related: ['stainless-steel-grades-cutlery', 'food-contact-safety-migration'],
  },
  {
    slug: 'nickel-allergy-cutlery',
    title: 'Nickel Allergy, Nickel Release, and Stainless Steel Cutlery',
    titleZh: '镍过敏、镍释放与不锈钢餐具——你需要知道什么',
    description:
      'Nickel is in 304 stainless steel. Nickel is a common allergen. Does your fork matter? The answer depends on how much nickel actually comes out — and whether your body notices.',
    descriptionZh:
      '304 不锈钢里含镍。镍是常见的过敏原。你手里的叉子要不要紧？答案取决于多少镍会实际释放出来——以及你的身体会不会注意到。',
    eyebrow: 'Health context',
    eyebrowZh: '健康相关',
    intro:
      'Nickel allergy affects roughly 10-20% of adults. And stainless steel contains nickel. The connection sounds obvious — but the real story of nickel release from cutlery is not what headlines suggest.',
    introZh:
      '大约 10-20% 的成年人有镍过敏。不锈钢里含镍。这个联系听起来很直接——但餐具中镍释放的真实情况，和标题党说的不太一样。',
    sections: [
      {
        heading: 'How much nickel is in stainless steel cutlery',
        paragraphs: [
          'Let us start with the numbers. AISI 304 (18/8) — the most common cutlery grade — contains roughly 8% nickel. AISI 316 has 10-14%. AISI 430 (18/0) has essentially zero.',
          'If you only look at the bulk composition, 304 looks alarming: 8% nickel is a lot. But that number describes the whole fork, not what touches your food. Bulk composition is a starting point, not a finish line.',
          'Worldstainless and BSSA both emphasize: the amount of nickel that actually releases from intact stainless steel under normal use is orders of magnitude lower than the bulk percentage would suggest. The steel holds onto its nickel tightly — the passive layer is what matters.',
        ],
      },
      {
        heading: 'Nickel release: it is about the surface, not the whole fork',
        paragraphs: [
          'The Nickel Institute\'s Human Health Fact Sheet 4 is explicit: nickel release from stainless steel depends on surface finish, the food simulant used, temperature, contact time, and pH. Change any one of those variables and your test results shift dramatically.',
          'A well-polished 304 surface has a stable passive layer — a microscopically thin chromium oxide film that protects the steel underneath. Under normal eating conditions (room temperature, neutral pH, short contact time), well-polished 304 releases barely detectable levels of nickel.',
          'But damage that passive layer — scratches from abrasive cleaning, pitting from harsh dishwasher chemicals, rough surface finish from poor manufacturing — and release rates go up. The same grade can behave very differently depending on how its surface was treated.',
          'This is why the Nickel Institute emphasizes: the test protocol matters more than the bulk composition. A study that shows high nickel release from stainless steel is often using unrealistic conditions — grinding the surface, using extreme pH, or heating far beyond normal use.',
        ],
        bullets: [
          'Surface condition dominates release behavior. Mirror-polished 304 is very different from rough-ground 304.',
          'Normal use (short contact, room temp, neutral pH) = minimal release from intact 304.',
          'Aggressive conditions (scratched surface, dishwasher damage, acidic food + long contact) = higher release potential.',
        ],
      },
      {
        heading: 'Who should care',
        paragraphs: [
          'For most people: your fork is not a problem. Nickel release from intact 304 cutlery under normal conditions is extremely low. The headlines that scream "nickel in your food" are oversimplifying the science.',
          'For people with diagnosed nickel allergy: the situation deserves a closer look. A 2013 study (summarized in the Nickel Institute fact sheet) found that nickel-allergic individuals consuming acidic foods with stainless steel cookware showed no significant increase in nickel levels compared to controls. But individual sensitivity varies widely.',
          'The practical alternative: 430 (18/0) stainless steel contains essentially no nickel. BSSA confirms 430 is a budget-friendly option that avoids nickel entirely in the alloy. But two caveats: (1) even 430 can pick up trace nickel from manufacturing contaminants, and (2) the main dietary nickel exposure route is food itself — nuts, legumes, chocolate, and whole grains contain far more nickel than any cutlery will release.',
          'Also worth noting: acidic foods (tomato sauce, citrus vinaigrette, pickled vegetables) can increase release rates from any stainless steel. If you are highly sensitive, reducing contact time between acidic foods and stainless — or using glass, ceramic, or wood — is a reasonable precaution.',
        ],
        bullets: [
          'Most people: zero concern. Intact 304 cutlery is safe.',
          'Nickel-allergic: 430 (nickel-free) is a valid option, but food itself is the bigger source.',
          'Acidic foods + long contact = highest release scenario. Short contact = negligible.',
        ],
      },
      {
        heading: 'Quick answers: nickel allergy and cutlery',
        paragraphs: [
          'Q: Can 304 stainless steel cutlery cause nickel allergy reactions?',
          'A: It is unlikely for most people. Under normal use, well-polished 304 releases very little nickel. However, individuals with severe nickel allergy may want to take precautions — especially with rough-surface cutlery or acidic foods.',
          'Q: Is 430 a good alternative for nickel-allergic people?',
          'A: Yes. 430 (18/0) contains essentially zero nickel in the alloy. It is affordable and widely available. However, be aware that trace contamination during manufacturing is possible, and food itself is the dominant nickel exposure source.',
          'Q: Does dishwasher use increase nickel release?',
          'A: Harsh dishwasher detergents can damage the passive layer over time, especially on lower-quality stainless. Hand washing preserves the surface finish longer. If you are concerned, hand wash your cutlery.',
          'Q: Should I switch to wooden or plastic utensils?',
          'A: If you have confirmed severe nickel allergy and want zero risk, wooden or plastic utensils are an option. But for most people, the evidence does not support ditching stainless steel. The real dietary nickel is in your food, not your fork.',
        ],
      },
    ],
    sectionsZh: [
      {
        heading: '不锈钢餐具里有多少镍',
        paragraphs: [
          '先看数字。AISI 304（18/8）——最常用的餐具钢种——含约 8% 的镍。AISI 316 含 10-14%。AISI 430（18/0）基本为零。',
          '如果只看整体成分，304 看起来有点吓人：8% 的镍确实不少。但这个数字描述的是整把叉子，不是接触食物的那部分。整体成分是起点，不是终点。',
          'Worldstainless 和 BSSA 都强调：正常情况下从完整的不锈钢表面实际释放出来的镍量，比整体百分比低好几个数量级。钢牢牢地锁住镍——真正起作用的是一层看不见的钝化膜。',
        ],
      },
      {
        heading: '镍释放：关键在表面，不在整把叉子',
        paragraphs: [
          'Nickel Institute 的《人类健康资料页第 4 号》说得很清楚：不锈钢的镍释放量取决于表面处理、食品模拟液、温度、接触时间和 pH 值。这些变量中的任何一个改变，测试结果都会大幅变化。',
          '抛光良好的 304 表面有一层稳定的钝化膜——一层极薄的氧化铬膜，保护着下面的钢材。在正常进食条件下（室温、中性 pH、短时间接触），抛光良好的 304 释放的镍几乎检测不到。',
          '但一旦钝化膜受损——研磨性清洁造成的划痕、洗碗机用化学剂引起的点蚀、制造不良导致的粗糙表面——释放量就上去了。同一种钢种，表面的处理方式不一样，表现可以天差地别。',
          '这就是为什么 Nickel Institute 强调：测试方法比整体成分更重要。那些宣称不锈钢大量释放镍的研究，往往使用了不切实际的条件——打磨表面、极端 pH、或者远超正常使用的高温。',
        ],
        bullets: [
          '表面状况决定释放行为。镜面抛光 304 和粗磨 304 完全不是一回事。',
          '正常使用（短接触、室温、中性 pH）=完整 304 几乎不释放。',
          '极端条件（刮伤表面、洗碗机损伤、酸性食物+长时间接触）=更高的释放可能。',
        ],
      },
      {
        heading: '谁该关注',
        paragraphs: [
          '对大多数人来说：你的叉子不是问题。正常条件下完整 304 餐具的镍释放量极低。那些标题党喊的"你餐具里有镍"是在过度简化科学事实。',
          '对于确诊镍过敏的人：确实值得关注。Nickel Institute 资料页引用的一项 2013 年研究发现，镍过敏者用不锈钢餐具吃酸性食物后，体内镍水平相比对照组并无显著升高。但个体敏感度差异很大。',
          '实用的替代方案：430（18/0）不锈钢基本不含镍。BSSA 确认 430 是避开镍的省钱选择。但有两个提醒：(1) 即使 430 也可能因制造过程中的污染而带有微量镍；(2) 饮食中的镍主要来源是食物本身——坚果、豆类、巧克力和全谷物中的镍含量远比任何餐具释放的多得多。',
          '另外注意：酸性食物（番茄酱、柑橘醋汁、泡菜）会增加任何不锈钢的镍释放率。如果你特别敏感，减少酸性食物与不锈钢接触的时间——或者用玻璃、陶瓷、木质餐具——是合理的预防措施。',
        ],
        bullets: [
          '大多数人：零担忧。完整 304 餐具很安全。',
          '镍过敏者：430（无镍）是不错的选择，但食物本身才是更大的镍来源。',
          '酸性食物+长时间接触=最高释放场景。短时间接触=可忽略。',
        ],
      },
      {
        heading: '快速问答：镍过敏与餐具',
        paragraphs: [
          '问：304 不锈钢餐具会引起镍过敏反应吗？',
          '答：对绝大多数人不太可能。正常使用下，抛光良好的 304 释放的镍很少。但严重镍过敏的人可能需要预防措施——特别是表面粗糙的餐具或接触酸性食物时。',
          '问：430 是镍过敏人群的好替代品吗？',
          '答：是的。430（18/0）合金中基本不含镍。价格便宜且广泛可购。但要注意制造过程中可能存在微量污染，而且食物本身才是镍暴露的主要来源。',
          '问：洗碗机会增加镍释放吗？',
          '答：长期来看，强碱性洗碗机洗涤剂可能损伤钝化膜，尤其对低品质不锈钢。手洗能更好地保护表面。如果你担心，建议手洗餐具。',
          '问：该不该换成木质或塑料餐具？',
          '答：如果你确诊严重镍过敏且希望零风险，木质或塑料餐具是选项之一。但对大多数人来说，证据不支持你抛弃不锈钢。你真正的饮食镍来源是食物，不是叉子。',
        ],
      },
    ],
    sources: [
      { id: 'nickel-fact-sheet-4', organization: 'Nickel Institute', title: 'Human Health Fact Sheet 4: Nickel and Metallic Food Contact Material', url: 'https://nickelinstitute.org/en/science/human-health-fact-sheets/fact-sheet-4-nickel-and-metallic-food-contact-material', tier: 'industry-association', sense: 'Standardized test protocols for nickel release; release depends on surface finish, simulant, temperature, time, pH.' },
      { id: 'bssa-cutlery-grades', organization: 'BSSA', title: 'Cutlery stainless steel grades — 18/8, 18/10, 18/0', url: 'https://bssa.org.uk/bssa_articles/cutlery-stainless-steel-grades', tier: 'industry-association', sense: '304 vs 430 composition; 430 as nickel-free alternative for cutlery.' },
      { id: 'worldstainless-food-beverage', organization: 'Worldstainless / Euro Inox', title: 'Stainless Steel in the Food and Beverage Industry', url: 'https://worldstainless.org/wp-content/uploads/2025/02/StSt_in_FoodandBeverage_EN.pdf', tier: 'industry-association', sense: 'Passive layer, surface finish effects; bulk composition vs release rate.' },
    ],
    related: ['stainless-steel-grades-cutlery', 'food-contact-safety-migration', 'cutlery-surface-finishes'],
  },
];
