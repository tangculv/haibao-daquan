import type { FunctionConfig } from '../types'

export const functions: FunctionConfig[] = [
  // ── 文字输入类 ──
  {
    id: 'poster-20',
    name: '种草卡',
    description: '一句话推荐任何东西，生成高质感推荐卡片',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['1:1', '3:4', '4:3', '9:16'],
    estimatedSeconds: 40,
    inputs: [
      { key: 'content', type: 'textarea', label: '推荐什么？', placeholder: '一本书、一个App、一部电影、一家店、一句话……\n例如：《百年孤独》', required: true },
    ],
    promptTemplate: `请根据用户最后输入的任何推荐对象，生成一张高质感推荐卡片或海报。对象可以是 App、软件、网站、GitHub 项目、一本书、一篇文章、一句话、一段文案、一道人物观点、一套菜、一份食谱、一个品牌、一个工具、一个方法，或任何值得介绍给别人的东西。

你要做的不是把用户给的信息简单排版，而是先理解它为什么值得被看见。若它属于现实存在的对象，请主动联网调查它的背景、来源、真实特点、核心价值、口碑、适用人群与边界；若它是用户提供的原创内容、观点或文案，请进行理解、提炼、重组与升华，让它变得更有营养、更有判断力、更适合被传播。

整体以苹果式克制、顶级海报设计判断力、高桥流凝练表达完成。不要罗列资料，不要写成说明书，不要堆满小字。重点是把复杂信息转化为一个清晰、有力、耐看的推荐理由，让普通人在手机上 3 秒内看懂：这是什么，为什么值得关注，适合谁，它真正打动人的地方在哪里。

画面必须优先保证手机端可读性。信息要少而准，文字要大而清楚，层级要干净，留白要有呼吸感。最终内容应自然收束为一个强主标题、一句点明价值的副标题、少量核心看点，以及若隐若现的证据、场景、评价或情绪余韵。不要把结构写死，也不要套模板。版式、图形、颜色、节奏、文字出现方式，都应从推荐对象本身的气质中自然生长。

如果对象有图标、封面、截图、菜品形态、项目视觉、品牌色或文本气质，请提取它的视觉 DNA 并延展成统一画面。若用户提供推荐语或评价，请吸收其中真实的判断与语气，不要生硬引用，而要让它成为画面里可信、温暖、有分量的一部分。

最终生成的卡片应高级、清晰、抓人、可信，有一种被认真筛选、认真理解、认真推荐过的感觉。它不是信息搬运，而是一次有审美、有判断、有升华的内容再创作。

用户输入：{{content}}
比例：{{ratio}}`,
  },

  {
    id: 'poster-22',
    name: '系列图',
    description: '输入一个主题，AI 自动拆解为 6 张系列海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 60,
    inputs: [
      { key: 'title', type: 'text', label: '主题标题', placeholder: '例如：如何每天早起', required: true },
    ],
    promptTemplate: `请根据用户输入的标题，自动完成内容策划与视觉设计，生成一组 6 张图片（比例为3:4）的系列海报，适合手机端浏览与传播。

执行顺序：先完成内容策划（理解标题 → 拆解5个核心条目 → 补充内容说明 → 生成封面引导文案），再完成视觉生成。

输出结构：第1张封面 + 第2~6张内容页（01~05）。

内容页每页包含：条目编号 / 条目标题 / 条目解释（凝练、清晰、有信息密度）。

整体视觉风格：苹果式克制 / 高级极简 / 职场生存手册美学 / 强调留白层级节奏 / 橙色强调色 / 硬朗无衬线字体。

封面：标题最大 + 一句引导文案，视觉冲击 > 信息承载，像系列开篇。
内容页：信息传达 > 视觉冲击，条列清晰，3秒读懂重点，每页可单独传播。

文案风格：凝练 / 清醒 / 有判断力 / 有洞察 / 不鸡汤 / 不空话。

用户输入标题：{{title}}`,
  },

  {
    id: 'poster-17',
    name: '诗意海报',
    description: '输入一句话或诗句，生成杂志感编辑型海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['3:4', '1:1', '9:16'],
    estimatedSeconds: 40,
    inputs: [
      { key: 'content', type: 'textarea', label: '主题 / 诗句 / 短句', placeholder: '例如：人间忽晚，山河已秋', required: true },
    ],
    promptTemplate: `请根据用户最后输入的【主题 / 关键词 / 短句 / 诗句】，生成一张兼具艺术气质与信息图排版感的编辑型海报。

整体风格为：平面插画、白色文字背景、印象派与后印象派气质的笔触、近景、线条抽象简约、柔焦效果、空气感、光斑笔刷，整体氛围梦幻、空灵、明亮、鲜艳但不脏乱。插画元素应覆盖画面的大部分区域，形成强烈的整体美感，色彩根据主题灵活变化，但始终保持高级、清透、柔和、有呼吸感。

这不是普通配图海报，也不是满页杂乱文字，更不是左右均分版式。请保留"信息图海报"的排版逻辑：画面主体由满版或大面积插画构成，文字主要集中在左侧，并明确分布为三个层级区域，而不是缩成一坨。

第一，左侧顶部必须形成一个清晰的信息簇，包含小字眉题、年份、英文小标题、中文主标题或副标题等，整体左对齐，字号有大有小，彼此拉开距离，形成上方的视觉起点。
第二，左侧中段或左侧侧边，分布若干组小型信息内容或知识点，可做成短段落、边注、提示语、微型说明、关键词组等，数量约 4–6 组，要求高低错落、疏密变化、长短不一，像信息图海报中的辅助阅读区域，不能整齐堆成同一种文本块。
第三，左侧底部要有收束性的文字区，可放一句中文短句、诗意总结、引导语，以及一小段英文说明或极小字注释，形成版面下方的落点，同样保持左对齐，并与顶部、中段形成明显区分。

所有文字都必须像"被设计过的信息图排版"，具有上下呼应、大小变化、位置分层和节奏感。

用户输入内容：{{content}}
比例：{{ratio}}`,
  },

  {
    id: 'poster-11',
    name: '一词一画',
    description: '输入一个词，生成深度概念视觉海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['3:4', '1:1', '9:16', '16:9'],
    estimatedSeconds: 45,
    inputs: [
      { key: 'word', type: 'text', label: '输入一个词', placeholder: '例如：自由、孤独、春天', required: true },
      { key: 'language', type: 'select', label: '语言', placeholder: '', required: false, options: [
        { value: '中文', label: '中文' },
        { value: 'English', label: 'English' },
        { value: '日本語', label: '日本語' },
      ]},
      { key: 'mood', type: 'select', label: '情绪倾向', placeholder: '', required: false, options: [
        { value: '不限', label: '不限（AI判断）' },
        { value: '温暖', label: '温暖' },
        { value: '冷峻', label: '冷峻' },
        { value: '忧郁', label: '忧郁' },
        { value: '希望', label: '希望' },
        { value: '荒诞', label: '荒诞' },
      ]},
    ],
    promptTemplate: `请根据用户输入的【文字/词语/短语】，创作一张对该词进行深度视觉诠释的概念海报。

第一步：对这个词进行多角度理解——它的字面义、引申义、文化联想、情感色谱、哲学隐喻、日常场景、极端场景、反面含义、身体感受、空间感受。不要停留在第一层联想。

第二步：从这些角度中，选择一个最值得被画出来的切入点。它应该是非显而易见的、有张力的、能引发"原来这个词还有这一层意思"的反应的。

第三步：将这个切入点转译为一个完整的视觉画面。画面要具有强烈的视觉冲击力、概念密度和艺术完成度。可以使用任何视觉手法——写实、超现实、极简、解构、拼贴、象征、隐喻、对比、矛盾、留白、失焦——只要它真正服务于对这个词的深度表达。

文字排版要求：
- 用户输入的文字必须出现在画面中，作为视觉元素的一部分
- 必须同时出现该词的英文翻译（或中文翻译，如果输入是英文）
- 文字可以大可以小，可以清晰可以若隐若现，但必须被精心设计过
- 可加入该词的注释、出处、延伸解读、诗句、格言等文字层

画面必须兼具概念深度和商业品质。像一张可以挂在画廊的概念作品，同时也可以作为杂志封面、品牌视觉或艺术版海报使用。

用户输入：{{word}}
语言：{{language}}
情绪倾向：{{mood}}
比例：{{ratio}}`,
  },

  // ── 照片输入类 ──
  {
    id: 'portrait-01',
    name: '你像什么动物',
    description: '上传照片，AI 分析你最像哪种生物',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '4:3',
    canCustomizeRatio: false,
    estimatedSeconds: 45,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传你的照片', placeholder: '正面照效果最好', required: true },
    ],
    promptTemplate: `请基于我提供的人像照片，完成一张"人像 vs 生物物种推测"对照图。先真正观察人物的五官结构、面部骨相与整体神态：脸型轮廓、眼型眼距、鼻口比例、嘴部线条、耳部联想，以及冷静、克制、警觉、倔强、沉稳、疏离、温和、锐利等气质，再把这些线索映射到地球上一种真实存在、明确可识别、且最有说服力的生物。物种范围不要只限于狗，可以自然扩展到哺乳动物、鸟类、爬行类、海洋生物、昆虫或其他真实物种，但不要为了夸张而猎奇，重点是找到那个真正"神似"的答案。

版式为完整成图：左边保留原始人物照片，右边生成对应生物照片；上方写出最终判断出的物种名称；右下角标注推测年龄。画面下方设置一整条全宽的信息带，作为统一介绍区域，自然承接整张图。这里写几条读者真正想知道、读完有收获的内容，如该物种的典型性格或行为特征、生存方式、习性、环境适应、冷知识或容易被误解之处。内容应短小、可信、耐读，像自然生长出来的知识，而不是生硬罗列。

整体气质简洁克制，有一种安静但有判断力的"道场感"，像一个自然形成的结论。右侧生物必须以国家地理杂志级别的摄影质感呈现：真实、高清、细节强，眼神与质感有说服力，光线自然克制，构图高级，背景干净。整张图要让人一眼觉得：这个人，确实像这种生物。`,
  },

  {
    id: 'avatar-02',
    name: '线条头像',
    description: '上传照片，生成极简单线条头像插画',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '1:1',
    canCustomizeRatio: false,
    estimatedSeconds: 30,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传你的照片', placeholder: '清晰正面照效果最好', required: true },
    ],
    promptTemplate: `把输入图片转换成一张极简主义单线条头像插画。只保留人物最具辨识度的外轮廓特征，用流畅、干净、尽量连续的黑色细线勾勒人物头部与面部轮廓。大幅简化五官和细节，只保留少量关键特征，如额头、鼻梁、嘴部转折、下巴、耳朵、发型外轮廓。不要写实，不要阴影，不要明暗，不要纹理，不要复杂背景，不要上色。整体像极简 logo 式肖像，留白充足，线条稀少但有辨识度，背景为纯净的米白色或浅暖色纸张质感。`,
  },

  // ── 国风 ──
  {
    id: 'culture-01',
    name: '国风海报',
    description: '输入诗句或主题，生成中式窗景东方海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 45,
    inputs: [
      { key: 'content', type: 'textarea', label: '诗句 / 主题', placeholder: '例如：晴川历历汉阳树，芳草萋萋鹦鹉洲', required: true },
    ],
    promptTemplate: `你要生成的不是普通国风海报，而是一张以"中式窗景"为美学磁场的高级东方海报。先深度理解用户输入的诗词、金句或主题，不只抓表意，还要挖出其潜台词、情绪暗流、人生况味、时间感、季节感与精神张力，再转译成一幅有"道场感"的画面：克制、寂静、空灵、含蓄，却自带抓人和震撼的气息。

以中式窗户为视觉骨架与取景器。窗形需因题而变，可为梅花窗、海棠窗、圆窗、六角窗、八角窗、漏窗、格栅窗等；窗外景亦需因意而生，可为花枝、月色、雨雾、山影、竹影、雪意、晴空、白墙、瓦檐、微光。不要堆砌元素，而要借窗成境，以少胜多，让窗、景、白、影彼此生发。

整体必须大量留白，形成气口、回音与余韵。构图要有大师级水准，善用框景、借景、偏景、仰视、斜取、远近虚实与局部裁切，避免模板化与对称僵硬。画面中不默认出现人物，除非主题确有必要。

排版必须达到获奖级质感。主文本是视觉核心，要根据内容做巧妙字体设计，可拉伸、断裂、藏入窗框、沿边生长、与枝影呼应，形成"字即画面"的效果。除核心主句外，默认补充至少五种不同层级的知识或信息：意象解析、情绪注脚、出处背景、时间/节气、延伸短句或哲思提示，并合理分布在四周，像题跋、批注、印记般克制存在。文字层级、大小、疏密、方向要灵活变化，整体清雅、通透、现代东方、富有纸面感与收藏感。

最终输出：一张兼具中式窗景 DNA、强意境、强留白、强版式、强字体巧思与强精神磁场的东方海报。

用户输入：{{content}}`,
  },

  // ── 商业/专业类 ──
  {
    id: 'poster-16',
    name: '广告图',
    description: '输入产品信息和文案，生成商业 Banner',
    category: 'pro',
    requiresImage: false,
    defaultRatio: '16:9',
    canCustomizeRatio: true,
    ratioOptions: ['16:9', '1:1', '4:3', '3:4', '9:16'],
    estimatedSeconds: 45,
    inputs: [
      { key: 'product', type: 'text', label: '产品名称', placeholder: '例如：冰丝防晒衣', required: true },
      { key: 'copy', type: 'textarea', label: '广告文案', placeholder: '例如：618 限时特惠，买二送一', required: true },
      { key: 'style', type: 'select', label: '风格', placeholder: '', required: false, options: [
        { value: '不限', label: '不限（AI判断）' },
        { value: '清爽活力', label: '清爽活力' },
        { value: '高端质感', label: '高端质感' },
        { value: '温馨生活', label: '温馨生活' },
        { value: '科技未来', label: '科技未来' },
        { value: '国潮文化', label: '国潮文化' },
      ]},
    ],
    promptTemplate: `你是一位兼具顶级商业摄影审美与转化意识的广告设计师。请根据我提供的产品、文案，生成一张真实投放级的商业 Banner。

让产品成为画面真正的中心。它应该被更好地呈现：更有质感、体积感、光泽、层次、诱惑力与存在感。文字不是附着物，而应与画面共同生长：主标题有抓力，利益点有记忆点，优惠信息有冲击力，CTA 清晰直接。可根据需要自然加入花字、贴纸、图形、光效、轨迹或小型装饰，但不强求，不滥用，一切以增强节奏、情绪与转化为准。

风格与配色不要机械套用，请依据产品气质、文案语义与受众情绪自行判断，让视线自然完成从吸引、理解、心动到行动的过程。整体必须清晰、准确、易读、完成度高，有明确销售意图与高级审美，不要模板感，不要堆砌感。

产品：{{product}}
文案：{{copy}}
风格要求：{{style}}
比例：{{ratio}}`,
  },

  {
    id: 'poster-08',
    name: '天气日签',
    description: '输入城市和日期，生成软陶微缩天气海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 40,
    inputs: [
      { key: 'city', type: 'text', label: '城市', placeholder: '例如：上海', required: true },
      { key: 'date', type: 'text', label: '日期', placeholder: '例如：2026年5月9日', required: false },
      { key: 'weather', type: 'select', label: '天气', placeholder: '', required: true, options: [
        { value: '晴天', label: '晴天' },
        { value: '多云', label: '多云' },
        { value: '阴天', label: '阴天' },
        { value: '小雨', label: '小雨' },
        { value: '大雨', label: '大雨' },
        { value: '雪', label: '雪' },
        { value: '雾', label: '雾' },
      ]},
      { key: 'temperature', type: 'text', label: '温度', placeholder: '例如：28°C', required: false },
    ],
    promptTemplate: `请生成一张以用户输入的城市为主题的「城市天气日签」海报。整体风格为软陶微缩场景：画面中的建筑、街道、天空、车辆、行人、植物等均以精致的软陶/黏土质感呈现，像一座被精心制作的微缩城市模型。

画面要求：
- 场景为该城市最具辨识度的地标或街景微缩版
- 天气效果真实融入场景（阳光照射 / 雨滴落在软陶表面 / 雪覆盖屋顶 / 云雾弥漫等）
- 色彩温暖柔和，有手工感和治愈感
- 画面中自然融入日期、城市名、天气信息、温度
- 文字设计精致，像被刻在软陶牌匾上或印在微型路牌上

整体像一件值得收藏的软陶艺术品，温暖、精致、有细节、有故事感。

城市：{{city}}
日期：{{date}}
天气：{{weather}}
温度：{{temperature}}
比例：3:4`,
  },

  {
    id: 'poster-02',
    name: '教程图',
    description: '输入主题，生成 How-to 信息图设计稿',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['3:4', '9:16', '1:1'],
    estimatedSeconds: 45,
    inputs: [
      { key: 'topic', type: 'text', label: '教程主题', placeholder: '例如：如何说话滴水不漏', required: true },
    ],
    promptTemplate: `本任务是：生成一张"如何做（How-to）信息图设计稿"。

⚠️ 严格要求：
输出必须是一张"信息图成品的设计描述"，而不是解释、分析或教学文字。

请根据用户输入的主题，自动策划内容（拆解为 5-8 个步骤或要点），然后生成一张具有以下特点的信息图设计稿：

1. 标题区：主标题大而醒目，副标题简洁说明
2. 内容区：每个步骤/要点有编号、标题、简短说明和配图图标
3. 整体风格：现代、清爽、信息层级清晰、适合手机阅读
4. 配色：从主题中自然延伸，不要彩虹配色
5. 排版：纵向流式布局，每个步骤占一行或一块，有清晰的视觉流引导

最终输出：一张完整的、可直接发布的 How-to 信息图设计稿

主题：{{topic}}
比例：{{ratio}}`,
  },
]

export function getFunctionById(id: string): FunctionConfig | undefined {
  return functions.find(f => f.id === id)
}

export const categories = [
  { id: 'text' as const, name: '文字生成', description: '输入文字，AI 生成海报' },
  { id: 'photo' as const, name: '照片创作', description: '上传照片，AI 创意改造' },
  { id: 'pro' as const, name: '商业工具', description: '广告图、电商图等专业场景' },
]
