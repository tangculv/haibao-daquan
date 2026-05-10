import type { FunctionConfig } from '../types'

// Visual config per function for the card UI
export const cardVisuals: Record<string, { gradient: string; emoji: string; accent: string }> = {

  'poster-01': { gradient: 'from-fuchsia-500/20 to-violet-500/10', emoji: '🔳', accent: '#d946ef' },
  'poster-03': { gradient: 'from-indigo-500/20 to-violet-500/10', emoji: '🏛️', accent: '#818cf8' },
  'poster-04': { gradient: 'from-emerald-500/20 to-cyan-500/10', emoji: '🏢', accent: '#10b981' },
  'poster-05': { gradient: 'from-amber-500/20 to-orange-500/10', emoji: '🧱', accent: '#f59e0b' },
  'poster-06': { gradient: 'from-rose-500/20 to-red-500/10', emoji: '🧭', accent: '#fb7185' },
  'poster-07': { gradient: 'from-sky-500/20 to-cyan-500/10', emoji: '🌀', accent: '#0ea5e9' },
  'poster-09': { gradient: 'from-slate-500/20 to-blue-500/10', emoji: '📐', accent: '#64748b' },
  'poster-10': { gradient: 'from-cyan-500/20 to-blue-500/10', emoji: '📈', accent: '#06b6d4' },
  'poster-12': { gradient: 'from-yellow-500/20 to-amber-500/10', emoji: '🔠', accent: '#eab308' },
  'poster-13': { gradient: 'from-orange-400/20 to-rose-400/10', emoji: '🪄', accent: '#fb923c' },
  'poster-14': { gradient: 'from-red-600/20 to-rose-500/10', emoji: '🖋️', accent: '#ef4444' },
  'poster-15': { gradient: 'from-green-500/20 to-emerald-500/10', emoji: '🌿', accent: '#22c55e' },
  'poster-18': { gradient: 'from-blue-600/20 to-indigo-500/10', emoji: '📱', accent: '#2563eb' },
  'poster-19': { gradient: 'from-pink-500/20 to-rose-500/10', emoji: '⭐', accent: '#ec4899' },
  'poster-21': { gradient: 'from-zinc-500/20 to-slate-600/10', emoji: '📏', accent: '#71717a' },
  'poster-23': { gradient: 'from-purple-600/20 to-fuchsia-500/10', emoji: '🧠', accent: '#9333ea' },
  'portrait-02': { gradient: 'from-blue-500/20 to-slate-500/10', emoji: '💼', accent: '#3b82f6' },
  'portrait-03': { gradient: 'from-pink-500/20 to-violet-500/10', emoji: '🎨', accent: '#ec4899' },
  'portrait-04': { gradient: 'from-amber-400/20 to-yellow-500/10', emoji: '💇', accent: '#fbbf24' },
  'portrait-05': { gradient: 'from-stone-500/20 to-neutral-500/10', emoji: '📷', accent: '#78716c' },
  'portrait-06': { gradient: 'from-neutral-600/20 to-zinc-500/10', emoji: '🚶', accent: '#52525b' },
  'culture-02': { gradient: 'from-orange-500/20 to-amber-400/10', emoji: '🪟', accent: '#f97316' },
  'culture-03': { gradient: 'from-yellow-600/20 to-amber-500/10', emoji: '🏺', accent: '#ca8a04' },
  'ip-sticker-01': { gradient: 'from-lime-400/20 to-emerald-400/10', emoji: '😂', accent: '#84cc16' },
  'ip-sticker-02': { gradient: 'from-red-500/20 to-orange-400/10', emoji: '🍜', accent: '#ef4444' },
  'ip-sticker-03': { gradient: 'from-pink-300/20 to-orange-300/10', emoji: '🧸', accent: '#f9a8d4' },
  'ip-sticker-04': { gradient: 'from-cyan-400/20 to-sky-500/10', emoji: '✍️', accent: '#22d3ee' },
  'ip-sticker-05': { gradient: 'from-violet-400/20 to-purple-500/10', emoji: '🧪', accent: '#a78bfa' },
  'illustration-01': { gradient: 'from-teal-500/20 to-sky-400/10', emoji: '🖼️', accent: '#14b8a6' },
  'illustration-02': { gradient: 'from-rose-300/20 to-orange-200/10', emoji: '📔', accent: '#fda4af' },
  'illustration-03': { gradient: 'from-purple-400/20 to-pink-300/10', emoji: '📚', accent: '#c084fc' },
  'logo-01': { gradient: 'from-stone-400/20 to-amber-700/10', emoji: '🈶', accent: '#a16207' },
  'avatar-01': { gradient: 'from-cyan-500/20 to-blue-500/10', emoji: '💞', accent: '#06b6d4' },
  'ecommerce-01': { gradient: 'from-orange-600/20 to-yellow-500/10', emoji: '🛍️', accent: '#ea580c' },
  'infographic-01': { gradient: 'from-slate-600/20 to-cyan-600/10', emoji: '🗺️', accent: '#0891b2' },
  'science-card-01': { gradient: 'from-green-600/20 to-lime-500/10', emoji: '🌱', accent: '#65a30d' },
  'poster-20':  { gradient: 'from-rose-500/20 to-orange-500/10', emoji: '💎', accent: '#fb7185' },
  'poster-22':  { gradient: 'from-blue-500/20 to-cyan-500/10', emoji: '📑', accent: '#60a5fa' },
  'poster-17':  { gradient: 'from-purple-500/20 to-pink-500/10', emoji: '🌸', accent: '#c084fc' },
  'poster-11':  { gradient: 'from-amber-500/20 to-yellow-500/10', emoji: '💡', accent: '#fbbf24' },
  'portrait-01': { gradient: 'from-emerald-500/20 to-teal-500/10', emoji: '🐾', accent: '#34d399' },
  'avatar-02':  { gradient: 'from-slate-400/20 to-zinc-500/10', emoji: '✏️', accent: '#94a3b8' },
  'culture-01': { gradient: 'from-red-500/15 to-orange-500/10', emoji: '🏮', accent: '#f87171' },
  'poster-16':  { gradient: 'from-orange-500/20 to-amber-500/10', emoji: '📢', accent: '#fb923c' },
  'poster-08':  { gradient: 'from-sky-500/20 to-indigo-500/10', emoji: '🌤', accent: '#38bdf8' },
  'poster-02':  { gradient: 'from-lime-500/20 to-green-500/10', emoji: '📊', accent: '#a3e635' },
}

export const functions: FunctionConfig[] = [
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

画面必须优先保证手机端可读性。信息要少而准，文字要大而清楚，层级要干净，留白要有呼吸感。

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

整体视觉风格：苹果式克制 / 高级极简 / 职场生存手册美学 / 强调留白层级节奏 / 橙色强调色 / 硬朗无衬线字体。

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

整体风格为：平面插画、白色文字背景、印象派与后印象派气质的笔触、近景、线条抽象简约、柔焦效果、空气感、光斑笔刷，整体氛围梦幻、空灵、明亮、鲜艳但不脏乱。

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

第一步：对这个词进行多角度理解——它的字面义、引申义、文化联想、情感色谱、哲学隐喻。
第二步：选择一个最值得被画出来的切入点，非显而易见的、有张力的。
第三步：将这个切入点转译为一个完整的视觉画面。

用户输入：{{word}}
语言：{{language}}
情绪倾向：{{mood}}
比例：{{ratio}}`,
  },

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
    promptTemplate: `请基于我提供的人像照片，完成一张"人像 vs 生物物种推测"对照图。先真正观察人物的五官结构、面部骨相与整体神态，再把这些线索映射到地球上一种真实存在、明确可识别、且最有说服力的生物。

版式为完整成图：左边保留原始人物照片，右边生成对应生物照片；上方写出物种名称；右下角标注推测年龄。画面下方设置信息带。

整体气质简洁克制。右侧生物必须以国家地理杂志级别的摄影质感呈现。`,
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
    promptTemplate: `把输入图片转换成一张极简主义单线条头像插画。只保留人物最具辨识度的外轮廓特征，用流畅、干净、尽量连续的黑色细线勾勒人物头部与面部轮廓。大幅简化五官和细节。整体像极简 logo 式肖像，留白充足，背景为纯净的米白色或浅暖色纸张质感。`,
  },

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
    promptTemplate: `你要生成的不是普通国风海报，而是一张以"中式窗景"为美学磁场的高级东方海报。先深度理解用户输入的诗词、金句或主题，再转译成一幅有"道场感"的画面：克制、寂静、空灵、含蓄，却自带抓人和震撼的气息。

以中式窗户为视觉骨架与取景器。整体必须大量留白。排版必须达到获奖级质感。

用户输入：{{content}}`,
  },

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
      { key: 'date', type: 'text', label: '日期', placeholder: '例如：2026年5月10日', required: false },
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
    promptTemplate: `请生成一张以用户输入的城市为主题的「城市天气日签」海报。整体风格为软陶微缩场景。

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
    promptTemplate: `生成一张"如何做（How-to）信息图设计稿"。

请根据用户输入的主题，自动策划内容（拆解为 5-8 个步骤或要点），然后生成信息图。

主题：{{topic}}
比例：{{ratio}}`,
  },

  {
    id: 'poster-01',
    name: '二维码海报',
    description: '上传二维码，生成可扫码的主题视觉海报',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['1:1', '3:4', '4:3', '9:16', '16:9'],
    estimatedSeconds: 50,
    inputs: [
      { key: 'qrCode', type: 'photo', label: '上传二维码', placeholder: '上传清晰、完整的二维码图片', required: true },
      { key: 'theme', type: 'text', label: '主题', placeholder: '例如：春日咖啡节报名入口', required: true },
      { key: 'copy', type: 'textarea', label: '文案', placeholder: '例如：扫码预约，解锁限时买一送一', required: false },
      { key: 'style', type: 'select', label: '风格', placeholder: '', required: false, options: [
        { value: '极简', label: '极简' },
        { value: '可爱', label: '可爱' },
        { value: '商务', label: '商务' },
        { value: '科技', label: '科技' },
        { value: '国风', label: '国风' },
        { value: '复古', label: '复古' },
      ]},
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '1:1', label: '1:1' },
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '9:16', label: '9:16' },
        { value: '16:9', label: '16:9' },
      ]},
    ],
    promptTemplate: `请根据用户最后输入的【主题、文案和风格要求】，基于我上传的二维码，创作一张主题化二维码视觉图。

二维码是功能核心，必须保持可扫描。请保留二维码的核心编码结构、定位点、模块关系和静区。二维码必须保持正面、平面、方形、清晰、高对比度。不要透视，不要旋转，不要弯曲，不要液化，不要让人物、装饰、文字、阴影或背景纹理覆盖二维码模块和静区。可以进行风格化处理，但只能在不影响扫码的范围内进行，例如调整深色模块颜色、轻微统一边缘质感、设计容器、融入场景，但不能破坏识别逻辑。

请不要把二维码简单粘贴到画面上。请把二维码设计成画面世界中的一个自然图形对象，例如屏幕、卡片、标签、票据、招牌、包装、窗户、入口、印章、布标、菜单、海报、门牌、徽章、展板、装置、页面、设备界面或其他与主题相关的承载物。二维码要与画面构图、材质、色彩、光影、留白、文字和道具统一，像它本来就属于这个设计。

请根据用户最后输入的主题、文案和风格要求，自动选择最合适的视觉方向。如果用户明确说了风格，例如极简、干净、高级、商务、科技、复古、手绘、国风、赛博、潮流、可爱、清新、奢华、儿童、品牌感，请优先服从该风格。如果用户没有明确说风格，请根据主题语气自动判断适合的风格，而不是默认卡通风。

如果用户要求背景更干净，请使用简洁留白、低噪声背景、克制装饰、清晰层级、少量点缀和高识别度构图。画面可以更像品牌海报、产品卡片、桌面立牌、应用界面、名片、邀请函或简洁提示牌。不要强行添加大量卡通角色、气泡、贴纸或装饰。只保留与主题有关的最少元素，让二维码和文案成为主角。

如果用户要求可爱或治愈，可以使用柔和配色、圆润角色、贴纸感装饰、手写文字、柔软纸张质感和轻量小图形。角色必须与二维码互动，而不是站在旁边陪衬。

如果用户要求高级或商务，请使用干净背景、理性网格、低饱和配色、精致排版、克制图形、品牌感留白和清晰材质。二维码可以融入卡片、玻璃牌、金属铭牌、App界面、桌牌、邀请函、产品包装或空间导视中。避免幼稚卡通、过多装饰和强烈表情。

如果用户要求科技或未来感，请使用深色或浅色科技界面、发光边缘、数据网格、HUD元素、玻璃拟态、霓虹线条、芯片纹理或数字入口概念。二维码仍需保持清晰平面，不要变成透视屏幕或发光到无法识别。

如果用户要求自然、清新或生活方式，请使用植物、纸张、阳光、布料、木质、咖啡、餐桌、花束、日常物件等元素，让二维码成为标签、菜单、卡片、书页、票据或包装贴纸。背景保持舒适、温柔、不过度拥挤。

如果用户要求复古或怀旧，请使用旧纸张、票根、邮票、唱片、打字机、老照片、复古包装、低饱和色彩和轻微颗粒。二维码可以成为票据、邮戳、贴纸或老式标签的一部分，但必须保持足够清晰。

如果用户要求国风、水墨、东方或节气感，请使用宣纸、留白、淡墨、印章、团扇、窗棂、花枝、山水、节气意象或传统纹样。二维码可以融入印章牌、纸笺、窗格、卷轴标签或雅致卡片中。不要把二维码做成水墨扩散，不要影响扫码。

文字部分请根据用户输入处理。如果用户提供了文案，请尽量准确保留，并根据风格选择合适字体感和排版方式。中文要清晰准确，不要写错字。如果用户只提供主题，请自动生成少量贴合主题的短文案。文字不要压到二维码上，不要破坏二维码静区。

画面要先统一，再创意。所有元素的笔触、材质、色彩、光影、边缘和排版都要服务同一个风格。二维码既要是功能中心，也要是视觉中心。不要出现"漂亮背景上贴一块黑白二维码"的割裂感。

最终目标是：主题明确、风格匹配、构图完整、二维码自然融入、扫码可靠。

用户最后输入的主题、文案或风格要求是：
主题：{{theme}}
文案：{{copy}}
风格：{{style}}
比例：{{ratio}}`,
  },
  {
    id: 'poster-03',
    name: '超现实海报',
    description: '输入一句主题词，生成纪念碑谷气质 3D 海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '2:1',
    canCustomizeRatio: false,
    estimatedSeconds: 40,
    inputs: [
      { key: 'theme', type: 'textarea', label: '主题', placeholder: '例如：千金散尽还复来', required: true },
    ],
    promptTemplate: `请根据用户最后输入的【主题 / 单词 / 短句】，生成一张「纪念碑谷气质」的极简超现实主义 3D 艺术海报。

核心逻辑（关键）：
不要将中文文字强行转成立体建筑。
先理解主题语义，用"空间结构"表达情绪与隐喻；再用"中文排版"作为视觉主标题，两者协同，而不是融合变形。

空间设计：
构建纪念碑谷式几何空间（平台 / 台阶 / 门洞 / 通道 / 悬浮结构），采用等距视角。
空间必须服务主题表达，例如通过高低差、路径、遮挡、孤立、连接等关系隐喻情绪，而不是纯造型堆叠。

中文设计（重点）：
中文必须作为清晰、可读的主标题出现，并成为版面视觉核心之一。
采用"平面设计化处理"，而不是立体化：
- 可使用极简无衬线 / 细黑体 / 几何结构字形
- 可做轻微拉伸、切割、错位、留白设计
- 可与空间产生遮挡、穿插或叠加关系（而不是变成建筑）
- 保持高级、克制、可读

辅助文字：
可加入少量英文或数字信息（如 vol. / 年份 / 编号），作为版式平衡元素，但权重明显低于中文主标题。

色彩系统（优化重点）：
采用"纪念碑谷式动态配色"，但适配印刷：
- 以明亮、柔和、低饱和为基础（奶白、雾粉、浅蓝、薄荷绿、砂岩、浅灰等）
- 避免大面积深色与死黑
- 使用同色系明度变化建立空间层级（前 / 中 / 后）
- 点缀1–2处高纯度色，用于引导视觉焦点（门洞 / 边缘 / 转折处）

整体色彩需"通透、有空气感、有层次"，而不是固定配色方案。

构图与层次：
主体明确，但画面不能空：
- 在四周加入少量"同源结构的弱化延展"
- 使用重复几何、远处体块、边缘切片等方式形成构图闭环
- 建立前景 / 中景 / 后景关系，让画面有深度但不过度复杂

氛围控制：
仅允许极少量意境元素（如淡月、微光、细枝、轻雾或几何符号），点到为止，不堆砌。

人物：
可选极小比例人物（≤8%），作为尺度与情绪锚点，动作安静克制。

最终效果：
一张"空间表达主题 + 中文主导版式"的高端设计海报，具有纪念碑谷式空间语言、清晰视觉层级、克制配色与强设计感，可直接用于艺术展或设计年鉴。

用户输入主题：
{{theme}}

比例2:1`,
  },
  {
    id: 'poster-04',
    name: '建筑模型',
    description: '输入品牌或上传门店图，生成等距微缩建筑海报',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '1:1',
    canCustomizeRatio: false,
    estimatedSeconds: 50,
    inputs: [
      { key: 'theme', type: 'text', label: '主题 / 品牌名', placeholder: '例如：星巴克咖啡', required: true },
      { key: 'photo', type: 'photo', label: '参考建筑图', placeholder: '可上传店铺、建筑或空间照片', required: false },
    ],
    promptTemplate: `请根据用户最后输入的【主题 / 品牌 / 模型名称】，生成一张高完成度的「45°俯视等距视角（isometric）微缩 3D 建筑模型海报」。

核心任务：
将用户提供的主题，智能转化为对应的品牌门店 / 建筑 / 展示空间 / 概念模型，并呈现为一个干净、精致、可商用展示的 miniature diorama（微缩立体场景）。

输入适配规则：
1. 如果用户只输入品牌、模型或主题名称：自动提炼其最具辨识度的建筑特征、门头元素、空间语言与品牌气质，转化为微缩建筑模型。
2. 如果用户上传了自己的建筑物 / 店铺 / 咖啡馆照片：以该图片为主要参考，保留建筑外观、门头、窗户、空间结构等关键特征，并将其统一转化为这种风格的等距 3D 微缩模型。
3. 如果同时有图片和文字：以图片建筑为主体，以文字作为标题与风格补充。

视觉要求：
- 45° top-down isometric / axonometric
- 微缩模型感、玩具感、清晰干净、居中构图
- 小型抬升式底座，包含建筑本体及少量周边环境
- 可加入极简小人物、绿植、桌椅、路牌、街道、台阶等辅助元素
- 小人物可爱简化，无需面部细节
- 整体高级、克制、整洁，像精品品牌展示图或设计提案图

配色逻辑（重点）：
- 背景默认使用纯白或极浅暖白，不要彩色大背景，不要复杂渐变背景
- 重点优化"建筑本体"的配色，而不是背景配色
- 建筑配色参考"纪念碑谷"气质：低饱和、柔和、梦幻、克制
- 推荐使用奶油白、浅沙色、雾粉、珊瑚粉、蜜桃色、浅陶土、鼠尾草绿、薄荷青、灰蓝绿等组合
- 颜色关系要有统一的大色调与少量点缀色，避免杂乱、高饱和、商业俗艳配色
- 背景保持干净，建筑颜色才是视觉重点

文字排版：
- 画面顶部居中放置主题名称 / 品牌名称，大号粗体，简洁有力
- 下方可放对应 logo / 标识 / 简化品牌符号
- 所有文字颜色根据背景自动适配；白色背景下默认使用黑色或深灰色文字
- 排版整齐克制，不抢建筑主体

画面要求：
- 正方形构图，1080×1080
- perfectly centered layout
- 高清、明亮、柔和真实光照
- 材质细腻，带轻微 PBR 质感，但整体仍偏柔和与艺术化
- 不要复杂背景，不要杂乱装饰，不要过度写实，不要脏乱街景

输出目标：
生成一张"白色背景 + 纪念碑谷式建筑配色 + 微缩等距建筑模型"的高质感视觉图，适合品牌展示、概念提案、社交媒体封面或系列化创作。

用户输入主题：
{{theme}}`,
  },
  {
    id: 'poster-05',
    name: '积木字海报',
    description: '输入一句话，生成乐高积木字体概念海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '2:1',
    canCustomizeRatio: false,
    estimatedSeconds: 40,
    inputs: [
      { key: 'theme', type: 'text', label: '主题文字', placeholder: '例如：旺铺出租', required: true },
    ],
    promptTemplate: `请根据用户输入的主题文字，生成一张乐高字体概念海报。以乐高积木为核心视觉语言，把文字系统、图形模块和版面组织成一张高级、清晰、有收藏感的设计海报。

概念图形与字体互相呼应。
底部或侧边展示字体样本与模块系统。
整体排版清晰、有秩序、有收藏级海报感。

文字处理：
如果主题是中文，重点字可以做成积木字体，其余文字可用现代黑体辅助。
如果主题较长，自动提炼核心关键词，突出最有画面张力的部分。
海报中文字要少而准，不要堆满。

【主题】
这里输入：{{theme}}
比例2:1`,
  },
  {
    id: 'poster-06',
    name: '面相分析',
    description: '上传人像，生成现代面相学证据分析信息图',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 50,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传人像', placeholder: '正面清晰人像效果更好', required: true },
      { key: 'question', type: 'textarea', label: '想问什么', placeholder: '例如：这个人事业运如何？', required: true },
    ],
    promptTemplate: `请基于我上传的人像照片，生成一张现代面相学证据分析信息图。你必须围绕用户问题展开判断，让每个结论都能回到具体面部证据与传统宫位含义，而不是泛泛算命。

最终作品必须让用户感觉：
1. 不是泛泛形容气质，而是真的从面相部位里看出了东西。
2. 每个结论都有对应的面部证据。
3. 每个证据都能回到中国面相学的宫位和传统含义。
4. 整张图围绕用户的问题展开，而不是泛泛算命。
5. 文案简洁但有命中感。
6. 画面现代、优雅、清楚、好读。

【八、用户输入区】

用户问题：
{{question}}`,
  },
  {
    id: 'poster-07',
    name: '线条概念图',
    description: '输入主题与风格，生成抽象几何线条视觉',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['1:1', '3:4', '4:3', '9:16', '16:9'],
    estimatedSeconds: 50,
    inputs: [
      { key: 'theme', type: 'text', label: '主题文字', placeholder: '例如：系统思维', required: true },
      { key: 'copy', type: 'textarea', label: '补充文案', placeholder: '例如：复杂世界里寻找清晰路径', required: false },
      { key: 'scene', type: 'text', label: '使用场景', placeholder: '例如：公众号头图', required: false },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '1:1', label: '1:1' },
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '9:16', label: '9:16' },
        { value: '16:9', label: '16:9' },
      ]},
      { key: 'style', type: 'select', label: '风格倾向', placeholder: '', required: false, options: [
        { value: '理性几何风', label: '理性几何风' },
        { value: '光学抽象风', label: '光学抽象风' },
        { value: '生物形态抽象风', label: '生物形态抽象风' },
        { value: '手绘线稿风', label: '手绘线稿风' },
        { value: '观念海报风', label: '观念海报风' },
      ]},
      { key: 'palette', type: 'text', label: '配色要求', placeholder: '例如：冷白灰 + 一点荧光蓝', required: false },
      { key: 'background', type: 'select', label: '背景深浅', placeholder: '', required: false, options: [
        { value: '浅色', label: '浅色' },
        { value: '深色', label: '深色' },
        { value: '自动判断', label: '自动判断' },
      ]},
      { key: 'decoration', type: 'select', label: '四周装饰', placeholder: '', required: false, options: [
        { value: '需要', label: '需要' },
        { value: '不要', label: '不要' },
      ]},
      { key: 'layers', type: 'select', label: '层次感增强', placeholder: '', required: false, options: [
        { value: '需要', label: '需要' },
        { value: '普通', label: '普通' },
      ]},
      { key: 'extra', type: 'textarea', label: '其他要求', placeholder: '例如：适合科技发布会 KV', required: false },
    ],
    promptTemplate: `请生成一张高完成度的「抽象几何线条概念视觉 / Abstract Linear Concept Artwork」。

这不是普通文字海报，不是简单给标题配一个背景，也不是随意堆叠抽象图形。
你要生成的是一张能够将"用户输入的主题文字或文案大意"转化为视觉语言的高质量设计作品。

整张图的核心逻辑是：
通过线条、几何、结构、插画化图形、参数化形态、光学感图案、手绘痕迹或其他抽象视觉元素，把用户输入的主题内容转译成一种"可被感受、可被解释、可被阅读"的图像结构。

最终效果应具备：
高级审美
强视觉识别度
抽象但有逻辑
诗意但不空洞
可解释但不直白
适合封面、海报、文章头图、视频封面、插画封面等多种用途

一、核心任务

请围绕用户输入的【主题文字 / 文案大意 / 使用场景 / 风格要求 / 比例要求】，自动完成以下过程：

1. 先理解主题
不是直接把文字放上去，而是先分析：
- 主题的表层含义
- 情绪气质
- 内在张力
- 语义关系
- 抽象结构
- 可转译的视觉隐喻

2. 再决定视觉表达方式
根据主题内容，自动选择最适合的图形语言、线条气质、结构方式、色彩策略、装饰系统与版面节奏。

3. 让背景"回应主题"
背景不应只是空泛的线条纹样，而应成为主题意义的延伸。
抽象图形、路径、节点、结构、流动、碰撞、裂变、聚合、回路、波纹、网格、粒子、层叠形态等，都应服务于主题表达。

二、视觉表达原则

1. 主题驱动
所有图形都必须围绕主题生成，不能是随机装饰。

2. 线条气质必须智能变化
- 若主题偏理性、系统、科技、秩序：使用克制、精密、参数化、几何化、网格化、模块化的线条与结构。
- 若主题偏感性、记忆、诗意、情绪、哲思：使用柔和、流动、呼吸感强、带有韵律的线条与抽象图形。
- 若主题偏冲突、撕裂、博弈、困境、失衡：使用拉扯、碰撞、断裂、扭曲、偏移、交错、压迫感更强的线条和结构。
- 若主题偏生长、生命、自然、潜意识、玄学、神秘感：可采用生物形态、脉络、羽化、能量场、波纹、神经网络般的线条系统。
- 若主题偏手作感、插画感、作者性表达：可使用更松动、手绘、试探性、富有笔触感的线条和图形语言。

3. 图形语言必须具有层次
- 主视觉层：最核心、最强识别度的图形结构。
- 辅助结构层：用于连接、引导、扩展主题的次级图形。
- 氛围装饰层：用于增强高级感与完整度的细节元素。
- 质感层：可根据需要加入微弱纸感、轻颗粒、薄雾、印刷肌理等。

三、图片装饰与应用系统

画面四周可以 intelligently 加入适量装饰系统，但必须与主题统一：
角标、边线、微型文字标签、小型几何图标、竖排边注、顶部或底部导航式短词、坐标线、十字准星、圆点与节点、符号化刻度、网格分区、档案编号、展陈式标签、章节短句、小型辅助说明等。

四、风格灵活性系统

1. 理性几何风：克制、清晰、参数化、模块化、网格感
2. 光学抽象风：黑白或高对比、波纹、错觉、重复、同心、放射
3. 生物形态抽象风：流动、脉络、细胞、羽化、共振、生长
4. 手绘线稿风：自由、松动、作者性、草图感、柔韧、诗意
5. 观念海报风：图文一体、设计展气质、思想性、哲学感、文化感

五、配色系统

颜色必须支持高度自定义，并且默认情况下智能响应主题。
- 用户若指定颜色：必须优先遵循。
- 用户若未指定：根据主题自动选择（黑白极简、冷白灰、米白纸感、深底浅线、浅底深线、低饱和莫兰迪、高对比概念色等）。

六、标题与文字系统

1. 主标题必须清晰可读，是整张图的重要识别核心。
2. 标题应与背景图形形成呼应，不可孤立悬浮。
3. 可以加入副标题、英文辅助标题、短句标语、关键词标签等，但文字不能过多。
4. 文案与图形应是一体化关系。

七、构图与版式要求

画面应具备清晰的视觉层级、呼吸感与强识别度：
中心聚合式、边缘扩散式、对称平衡式、非对称张力式、中轴仪式感、回路漩涡式、路径推进式、节点网络式、模块拼接式、画面四周包裹式等。

要求：有主次、有留白、有节奏、有疏密变化、有视觉起点与终点。

九、避免事项

- 背景图形只是随机线条，和主题无关
- 图形过度花哨但无法解释主题
- 装饰过多导致杂乱
- 风格廉价、模板化、社媒感过强
- 文字排版普通、缺乏设计感
- 线条语言单一
- 配色僵化，不能响应主题

用户的输入：
主题文字：{{theme}}
补充文案：{{copy}}
使用场景：{{scene}}
图片比例：{{ratio}}
整体风格倾向：{{style}}
配色要求：{{palette}}
背景深浅要求：{{background}}
是否需要四周装饰：{{decoration}}
是否需要层次感增强：{{layers}}
其他特殊要求：{{extra}}`,
  },
  {
    id: 'poster-09',
    name: '蓝图叠照',
    description: '输入主题，生成技术蓝图叠加照片',
    category: 'pro',
    requiresImage: false,
    defaultRatio: '1:1',
    canCustomizeRatio: false,
    estimatedSeconds: 30,
    inputs: [
      { key: 'subject', type: 'text', label: '主题 / 对象', placeholder: '例如：太和殿', required: true },
      { key: 'extra', type: 'textarea', label: '其他要求', placeholder: '例如：强调榫卯结构', required: false },
    ],
    promptTemplate: `创建一张专业且极具真实性的照片，展示[主题/对象]，画面应干净、明亮，背景简洁且美观。确保所有物体展现为真实照片风格，而非插图。画面应加入技术蓝图叠加图，包含清晰的白色线条、箭头、尺寸标注、标签，以及展示零件、材料、尺寸与功能的小型示意图。整体布局需优雅、结构清晰，且信息丰富。左上角应有带有"OBJECT"字样的草图框。画面比例为1:1，比例精准。整体视觉效果应保持生动且充满活力，避免死板的暗部，体现出现代感与精致感。

输入内容：

主题/对象：{{subject}}
其他要求：{{extra}}`,
  },
  {
    id: 'poster-10',
    name: '演化图鉴',
    description: '输入一个主题，自动梳理为进程演化信息图',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['3:4', '4:3', '16:9', '9:16'],
    estimatedSeconds: 50,
    inputs: [
      { key: 'topic', type: 'text', label: '演化主题', placeholder: '例如：智能手机演化', required: true },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '16:9', label: '16:9' },
        { value: '9:16', label: '9:16' },
      ]},
    ],
    promptTemplate: `你要生成的不是普通插画，也不是把信息机械排成一列的时间轴，而是一张"高完成度、强组织性、强阅读价值、兼具知识含量与高级审美的进程演化信息图海报"。

核心任务：
用户只会提供一个主题、概念、命题、对象、类别，或一个需要被梳理的方向。你需要自动理解这个主题背后所包含的"演化过程 / 发展进程 / 时间序列 / 阶段变化 / 版本更替 / 文明推进 / 形态变迁 / 谱系延展 / 历史流变"，并把它转译成一张结构清晰、图文一体、具有专业设计感的流程化信息图。

适用范围：
可以用于文明史、产品演化史、技术发展史、朝代更替、帝王谱系、物种进化、器物演变、服饰演变、饮食演变、品牌发展、某一物件的形态变迁、某一制度或思想的发展过程、某一行业的阶段性变化，或任何可以被整理成"阶段推进"的主题。

第一原则：先理解主题，再决定进程结构
在开始生成前，你必须先智能判断这个主题最适合被梳理成什么样的"演进结构"。总之，你必须自动找到这个主题最适合被呈现为"进程"的逻辑，而不是机械套模板。

第二原则：画面不是简单时间轴，而是"被空间化的进程"
整体构图优先采用具有强烈秩序感和视觉记忆点的"递进式台阶 / 阶梯式平台 / 斜向推进路径 / 分层式结构 / 展陈式轨迹 / 版块式进化路径"。路径不应只是画一条线，而应具有平台感、层级感、空间感。

第三原则：信息图必须兼具知识性与审美性
观者看完应该有"学到了东西"的满足感，同时也被优雅的组织方式打动。

第四原则：整体视觉语言要高级、克制、优雅、专业
画面审美参考高端展览信息设计、博物馆展板、视觉百科、现代知识型海报、编辑设计系统、精致图录。整体风格必须简洁、沉稳、理性、克制，不要网红化，不要廉价卡通化，不要花哨拼贴。

第五原则：视觉方案必须根据主题智能变化，不能千篇一律
你需要根据用户输入的主题，智能决定：应该强调年代还是强调结构变化；应该突出实物还是突出人物、器官、服装、工具；应该更偏博物馆考古感、现代工业设计感、自然科学图鉴感还是时尚编辑感。每次都要重新建立视觉规则，不允许形成固定套路。

第六原则：配色必须真正跟随主题，不允许固定色板
绝对不要默认永远使用同一种暖棕、米白、博物馆色调。你必须为每个主题重新思考：这个主题更适合浅色模式还是深色模式、背景应该是什么质感、主色应该传达什么气质、辅助色如何区分阶段、强调色应该突出哪些关键节点。

第十一原则：版式结构必须非常强
整张图必须有清晰、成熟、专业的排版组织，包含：顶部主标题、副标题、主体路径、阶段节点、注释系统、底部或末端收束。

第十二原则：时间与阶段必须清楚
阶段数量通常控制在 5 到 12 个左右，具体根据主题复杂度智能调整。不要太少而显得空洞，也不要过多而拥挤失控。

第十三原则：每个阶段都要有"代表性视觉对象"
每个阶段应配一个或多个最具辨识度、最能说明该阶段特征的视觉对象。对象必须足够典型，能让观众通过图像直观感知"这个阶段的差异是什么"。

第十四原则：文本说明要少而准
文字不是越多越好，而是要精准、简洁、清晰、有知识点。说明内容优先提炼"该阶段最本质的变化、代表意义、标志特征、关键突破、社会用途、审美转折、技术变化"等。

第十七原则：重点避免的问题
不要生成普通 PPT 感；不要做成廉价百科图；不要把所有主题都做成相同的米白棕色模板；不要让阶段之间差异不明显；不要让信息图失去"优雅""可信度""可读性"。

现在请基于用户输入的主题：
"{{topic}}"
自动完成内容梳理、视觉策略、配色策略、字体排版策略与信息图设计，生成一张高完成度、高美学水准、高信息组织能力、真正因主题而异的"进程演化信息图"。
如果用户没有特别指定语言，则默认使用与用户输入一致的语言来呈现全部标题、注释与说明。
如果用户没有特别指定画幅，则优先采用适合信息图阅读的纵向海报比例。
比例：{{ratio}}`,
  },
  {
    id: 'poster-12',
    name: '词义海报A',
    description: '输入词语与情绪，生成简洁版概念海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 45,
    inputs: [
      { key: 'text', type: 'text', label: '核心文字', placeholder: '例如：回声', required: true },
      { key: 'language', type: 'select', label: '语言', placeholder: '', required: false, options: [
        { value: '中文', label: '中文' },
        { value: 'English', label: 'English' },
        { value: '日本語', label: '日本語' },
      ]},
      { key: 'context', type: 'textarea', label: '补充语境', placeholder: '例如：关于失去后的自我回应', required: false },
      { key: 'mood', type: 'select', label: '情绪倾向', placeholder: '', required: false, options: [
        { value: '温暖', label: '温暖' },
        { value: '冷峻', label: '冷峻' },
        { value: '忧郁', label: '忧郁' },
        { value: '希望', label: '希望' },
      ]},
      { key: 'forbidden', type: 'textarea', label: '禁用元素', placeholder: '例如：不要海浪、不要月亮', required: false },
    ],
    promptTemplate: `请基于以上原则，生成一张围绕用户输入内容展开的高级概念海报。

3. 图与字之间存在强关联，形成一种聪明、准确、耐看的视觉表达。
4. 具有传播性、海报感、收藏感、展览感。
5. 不能只是"把词画出来"，而是要"把词的精神状态视觉化"。

用户输入内容：
核心文字 / 单词 / 词组 / 字母：{{text}}
文字语言：{{language}}
可选补充语境：{{context}}
可选情绪倾向：{{mood}}
可选禁用元素：{{forbidden}}`,
  },
  {
    id: 'poster-13',
    name: '词义海报B',
    description: '输入词语与语境，生成扩展版概念海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 50,
    inputs: [
      { key: 'text', type: 'text', label: '核心文字', placeholder: '例如：勇气', required: true },
      { key: 'language', type: 'select', label: '语言', placeholder: '', required: false, options: [
        { value: '中文', label: '中文' },
        { value: 'English', label: 'English' },
        { value: '日本語', label: '日本語' },
      ]},
      { key: 'context', type: 'textarea', label: '补充语境', placeholder: '例如：明知道会输也要向前', required: false },
      { key: 'mood', type: 'select', label: '情绪倾向', placeholder: '', required: false, options: [
        { value: '温暖', label: '温暖' },
        { value: '冷峻', label: '冷峻' },
        { value: '忧郁', label: '忧郁' },
        { value: '希望', label: '希望' },
      ]},
      { key: 'forbidden', type: 'textarea', label: '禁用元素', placeholder: '例如：不要人物脸部特写', required: false },
    ],
    promptTemplate: `请基于以上原则，生成一张围绕用户输入内容展开的高级概念海报。

3. 构图要合理，画面要克制，表达要巧妙。
4. 不要过度解释，不要加入多余元素，不要让画面显得拥挤。
5. 任何视觉元素都必须服务于词语表达，不能为了好看而偏离主题。

用户输入内容：
核心文字 / 单词 / 词组 / 字母：{{text}}
文字语言：{{language}}
可选补充语境：{{context}}
可选情绪倾向：{{mood}}
可选禁用元素：{{forbidden}}`,
  },
  {
    id: 'poster-14',
    name: '诗歌解析',
    description: '输入诗句或主题，生成红色视觉解析海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '2:1',
    canCustomizeRatio: false,
    estimatedSeconds: 45,
    inputs: [
      { key: 'theme', type: 'textarea', label: '主题 / 诗句', placeholder: '例如：鸿门宴', required: true },
    ],
    promptTemplate: `严格禁止：
- 不要固定使用山脉、建筑物等元素；
- 不要过于死板的红色块；
- 不要杂乱无章的文字堆砌；
- 不要让排版显得生硬、没有层次感；
- 不要给文字和画面设限，失去创意和表现力。

请根据用户最后输入的主题或诗句，智能生成与之匹配的视觉海报，同时保持创意自由度和视觉精致感。

主题：{{theme}}
比例：2:1`,
  },
  {
    id: 'poster-15',
    name: '植物图解',
    description: '输入植物主题，生成高级植物学图解海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '2:1',
    canCustomizeRatio: false,
    estimatedSeconds: 40,
    inputs: [
      { key: 'theme', type: 'text', label: '主题植物', placeholder: '例如：冬虫夏草', required: true },
      { key: 'knowledge', type: 'textarea', label: '知识要求', placeholder: '例如：至少10个中医相关知识，知识点至少5个层级', required: false },
    ],
    promptTemplate: `你要生成一张高级植物学图解海报，而不是普通插画或模板化信息图。先深度理解用户输入的植物或自然对象，自动梳理其最值得呈现的知识，并把知识与图像融合成一个完整的视觉整体。画面必须先建立一个极大的主体插画，巨大到可以被裁切、越界、只显示局部，形成强烈张力与生命力；它不必完整，但必须成为整张图的母体。其余知识节点、局部拆解、剖面、细节放大、观察笔记、结构说明、生长线索，都像从主体周围自然生长出来，形成一种克制、安静、带“道场感”的美学磁场，而不是僵硬排版。

风格应接近顶级植物学插画：真实、松弛、细腻、可信，有清楚的笔触、自然的勾线、通透克制的水彩罩染、真实纸感与可触摸的手工气息；拒绝脏噪点、假肌理、廉价滤镜和过度数码感。信息要准确、有层级、有阅读收获，自动决定哪些内容该重点呈现，哪些适合拆解、对照、标注或收束。配色、字体、留白、节奏、知识密度都需依据主题气质智能生成，既高级又自然，像一本博物图鉴中的展览级专题页。

主题：{{theme}}
要求：{{knowledge}}
比例：2:1`,
  },
  {
    id: 'poster-18',
    name: 'App种草图',
    description: '输入 App 名称和推荐理由，生成高质感推荐海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['1:1', '3:4', '4:3', '9:16'],
    estimatedSeconds: 40,
    inputs: [
      { key: 'app', type: 'text', label: 'App 名称', placeholder: '例如：Notion', required: true },
      { key: 'reason', type: 'textarea', label: '推荐理由', placeholder: '例如：适合知识管理和团队协作', required: true },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '1:1', label: '1:1' },
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '9:16', label: '9:16' },
      ]},
    ],
    promptTemplate: `请根据用户最后输入的 App 名称、链接、推荐语、评价或参考图片，生成一张高质感 App 推荐海报。先主动理解这款产品真正值得被推荐的地方，再联网查询它的图标、官网气质、核心能力、真实口碑与适用边界，但不要机械搬运资料，而要提炼成少量真正有价值的信息。若用户提供推荐语或评价，请吸收其语气与判断，把它们自然融入文案与版面，成为可信又有温度的表达。

海报应以苹果式克制、顶级海报设计的判断力与高桥流的凝练表达来完成。重点不是罗列功能，而是让人一眼明白：这是什么，它解决什么问题，为什么值得下载。画面必须优先服务手机阅读，信息不能过载，文字不能拥挤，字体要清楚，层级要分明，留白要有呼吸感。整体内容应被压缩成一个强主标题、一句点明价值的副标题、少量核心卖点，以及若隐若现的口碑证据或使用场景。不要做成说明书，不要满屏小字，不要套模板，不要把结构写死。版式、节奏、图形关系、信息出现方式，都应根据 App 本身的气质自然生长。让图标、界面语言、品牌色与产品性格共同形成统一视觉。最终海报应高级、清晰、抓人、可信，让人看完立刻产生尝试或推荐给别人的冲动。

——
App 名称：{{app}}
推荐理由：{{reason}}
比例：{{ratio}}`,
  },
  {
    id: 'poster-19',
    name: '推荐卡',
    description: '输入推荐对象和理由，生成结构化推荐卡片',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['1:1', '3:4', '4:3', '9:16'],
    estimatedSeconds: 40,
    inputs: [
      { key: 'target', type: 'text', label: '推荐什么', placeholder: '例如：一本书《悉达多》', required: true },
      { key: 'reason', type: 'textarea', label: '推荐理由', placeholder: '例如：短小但后劲极强，适合迷茫期反复读', required: true },
      { key: 'extra', type: 'textarea', label: '补充说明', placeholder: '例如：适合 25 岁以后再读', required: false },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '1:1', label: '1:1' },
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '9:16', label: '9:16' },
      ]},
    ],
    promptTemplate: `画面必须优先保证手机端可读性。信息要少而准，文字要大而清楚，层级要干净，留白要有呼吸感。最终内容应自然收束为一个强主标题、一句点明价值的副标题、少量核心看点，以及若隐若现的证据、场景、评价或情绪余韵。不要把结构写死，也不要套模板。版式、图形、颜色、节奏、文字出现方式，都应从推荐对象本身的气质中自然生长。

如果对象有图标、封面、截图、菜品形态、项目视觉、品牌色或文本气质，请提取它的视觉 DNA 并延展成统一画面。若用户提供推荐语或评价，请吸收其中真实的判断与语气，不要生硬引用，而要让它成为画面里可信、温暖、有分量的一部分。

最终生成的卡片应高级、清晰、抓人、可信，有一种被认真筛选、认真理解、认真推荐过的感觉。它不是信息搬运，而是一次有审美、有判断、有升华的内容再创作。

——————
你要推荐：{{target}}
推荐理由：{{reason}}
补充说明：{{extra}}
比例：{{ratio}}`,
  },
  {
    id: 'poster-21',
    name: '图纸排版',
    description: '输入文本内容，生成建筑图纸美学海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['1:1', '3:4', '4:3', '16:9'],
    estimatedSeconds: 40,
    inputs: [
      { key: 'content', type: 'textarea', label: '文本内容', placeholder: '例如：把复杂问题拆成 3 层结构来思考', required: true },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '1:1', label: '1:1' },
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '16:9', label: '16:9' },
      ]},
    ],
    promptTemplate: `请根据用户最后输入的文本内容，生成一张建筑图纸美学风格的版面设计海报。

风格关键词：建筑图纸美学 + 空间秩序 + 中轴网格排版 + 细密注释小字 + 冷静极简 + 工程感字体设计 + 结构化插画 + 镜头推移感 + 石墨灰强调色 + 把文字拆成可观看的空间关系

画面要求：
- 整体如同一张精准的建筑制图，有测量线、坐标轴、标注箭头、细线分隔、网格暗纹
- 文字不是普通排版，而是被当作建筑元素处理：有主体结构、有辅助说明、有注释层、有尺寸标注感
- 主要文字使用工程感无衬线字体，有明显的大小层级
- 背景为极浅的冷灰或米白，图纸底色质感
- 强调色为石墨灰或深炭色，点缀极少量蓝黑线条
- 整体克制、精准、有冷静的智识气质

用户输入文本：{{content}}

比例：{{ratio}}`,
  },
  {
    id: 'poster-23',
    name: '建议卡片',
    description: '输入建议条数和气质，生成多张 AI 建议概念卡片',
    category: 'text',
    requiresImage: false,
    defaultRatio: '9:10',
    canCustomizeRatio: false,
    estimatedSeconds: 60,
    inputs: [
      { key: 'count', type: 'text', label: '建议条数', placeholder: '例如：4', required: false },
      { key: 'tone', type: 'text', label: '卡片气质', placeholder: '例如：高级、克制、清晰、有余味', required: false },
      { key: 'visual', type: 'text', label: '视觉偏好', placeholder: '例如：极简概念卡片、强排版、纸张肌理', required: false },
    ],
    promptTemplate: `请基于你对我过往聊天记录的整体观察，提炼出 N 条真正属于我的建议；若我未说明，默认 4 条。建议不要像通用结论，而要像从长期观察中自然浮现的提醒：准确、克制、有余味，能照见我的倾向、盲区、能量分配与成长方向。

随后，将每条建议转译为一张卡片画面。不要做普通插画，也不要把一句话直接排上去，而是先理解建议背后的情绪、张力、隐喻、未说尽之意，再为它找到一个最贴切的视觉关系。画面元素不预设、不固定，应从建议本身自然发生；任何人物、物体、动物、空间、符号、光影或材质，都必须因为"它适合表达这条建议"才出现。

整体风格应是高级、克制、清晰的概念卡片：以大字或核心短句形成视觉骨架，图像与文字彼此牵引，构图留白聪明，元素精简但有力量；可有印刷感、纸张肌理、拼贴感、图形艺术感或其他更贴合主题的视觉气质，但不要模板化、装饰化、广告化。每张卡片既要好读，也要有记忆点，像一个没有被说透的视觉判断。

输出结构：先给出建议，再给出每条建议的画面构想，最后给出可直接用于生成图片的完整卡片提示词。

建议条数：{{count}}
卡片气质：{{tone}}
视觉偏好：{{visual}}
画幅：9:10`,
  },
  {
    id: 'portrait-02',
    name: '职业头像',
    description: '上传照片，生成专业职业形象照',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['3:4', '1:1', '4:3'],
    estimatedSeconds: 30,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传照片', placeholder: '清晰正脸照效果更好', required: true },
      { key: 'scene', type: 'text', label: '适用场景', placeholder: '例如：腾讯 / MCN 部门', required: false },
      { key: 'background', type: 'text', label: '背景色', placeholder: '例如：蓝色', required: false },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '3:4', label: '3:4' },
        { value: '1:1', label: '1:1' },
        { value: '4:3', label: '4:3' },
      ]},
    ],
    promptTemplate: `生成一张基于输入照片的专业职业头像
正脸、直视镜头、自然自信表情，保留适当headroom
优化发型与面部细节，符合专业HR审美，提升职业感与亲和力
使用高端影棚布光，光线柔和、均匀、突出轮廓
商务正装造型，风格参考高端商业摄影/好莱坞团队


适用于 {{scene}}
背景简洁专业
背景：{{background}}
画幅：{{ratio}}比例`,
  },
  {
    id: 'portrait-03',
    name: '涂鸦写真',
    description: '上传照片，生成智能修图加涂鸦互动创意照',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 50,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传照片', placeholder: '上传一张想改造成创意写真的人像或生活照', required: true },
      { key: 'retouch', type: 'text', label: '修图风格', placeholder: '例如：清透日系', required: false },
      { key: 'creature', type: 'text', label: '互动生物', placeholder: '例如：一只会飞的小鲸鱼', required: false },
      { key: 'elements', type: 'textarea', label: '小元素 / 物品', placeholder: '例如：星星、贴纸、耳机', required: false },
      { key: 'slogan', type: 'text', label: '文字 / 口号', placeholder: '例如：stay weird', required: false },
      { key: 'style', type: 'text', label: '整体气质', placeholder: '例如：街头、少女、温柔日常', required: false },
    ],
    promptTemplate: `基于我上传的原图，生成一张"智能修图 + 涂鸦互动叠加"的创意照片成图。

默认先对原图进行适度美化优化，让画面在光线、色彩、氛围和质感上更适合后续创作；用户也可以关闭修图，或指定自己想要的修图风格。

在此基础上，叠加具有设计感和互动感的手绘涂鸦、文字、角色、小物件、喷绘色块、笔刷痕迹或其他自由元素，让整张图既保留真实照片的生活感，又拥有潮流、趣味、杂乱但有节奏的视觉表现。

请智能识别原图中的人物、动作、视线、场景、情绪和整体气质，再自动匹配最适合这张图的创作风格，包括：
- 修图方向
- 涂鸦方式
- 文字内容
- 字体风格
- 色彩倾向
- 互动元素
- 装饰节奏

这些风格不应固定，而应根据画面自动变化。
例如：儿童主题可以更童趣、活泼、跳跃；少女主题可以更轻盈、清新、精致；街头主题可以更大胆、夸张、喷涂感更强；温馨日常主题可以更自然、柔和、生活化。
如果用户有明确要求，则优先按用户要求执行；如果没有，则系统自动判断最适合的方向。

涂鸦元素需要与人物动作、手势、视线和场景物件形成自然互动，不是简单贴在空白处，而是像真的参与了画面。
可以加入一个核心互动生物，也可以加入一些小物件、小角色、贴纸感元素、边角图形、动作线、光环、喷漆云团、拟声词或随场景变化的小型视觉语言。

同时，请智能识别画面中杂乱、不够好看、或不宜直接公开的区域，并通过自然、巧妙、风格一致的方式进行修饰或弱化处理。可使用小贴纸、手绘笔刷、色块、角落元素、小图形、小角色或其他合适方式进行遮挡和美化，让处理后的区域融入整体画面，而不是生硬遮盖。

文字部分不要固定死板，可根据场景智能生成，允许中文、英文或中英混合，形式灵活，可大可小，可主标题也可边角短句，但要少而有力，并与整体气质匹配。
字体风格也应智能匹配画面，不固定一种形式，而是根据人物属性、主题气质和整体美学自动选择最合适的表现方式。

色彩也不要机械套用固定配色，而是根据环境、光线、内容、情绪和角色设定智能匹配，让画面既统一又有亮点，既符合场景，又保留创意表达和视觉冲击力。

整体效果应是：真实照片被智能修饰后，再被创意化、风格化、互动化地升级，最终形成一张适合直接发布、具有设计感、潮流感和传播感的创意照片海报。

用户可选补充：
- 想要的修图风格：{{retouch}}
- 想加入的核心互动生物：{{creature}}
- 想加入的小元素或物品：{{elements}}
- 想要的文字或口号：{{slogan}}
- 想要的整体气质或风格方向：{{style}}`,
  },
  {
    id: 'portrait-04',
    name: '发型报告',
    description: '上传照片，生成 12 款发型分析推荐海报',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['3:4', '4:3', '16:9'],
    estimatedSeconds: 60,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传人像', placeholder: '正面、半侧面、自拍都可以，但头型轮廓要清楚', required: true },
      { key: 'profile', type: 'textarea', label: '补充信息', placeholder: '例如：女，28岁，互联网运营，偏知性风', required: false },
      { key: 'outfit', type: 'select', label: '是否换装', placeholder: '', required: false, options: [
        { value: '是', label: '是' },
        { value: '否', label: '否' },
      ]},
      { key: 'direction', type: 'textarea', label: '想尝试 / 避开的发型', placeholder: '例如：想尝试短发，不要羊毛卷', required: false },
      { key: 'priority', type: 'select', label: '你更看重', placeholder: '', required: false, options: [
        { value: '日常好打理', label: '日常好打理' },
        { value: '提升气质', label: '提升气质' },
        { value: '显年轻', label: '显年轻' },
        { value: '显成熟', label: '显成熟' },
        { value: '正式感', label: '正式感' },
        { value: '时尚感', label: '时尚感' },
        { value: '个性表达', label: '个性表达' },
      ]},
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '16:9', label: '16:9' },
      ]},
    ],
    promptTemplate: `你是一位兼具国际审美、发型专业知识、人物形象诊断能力、版式设计能力与高情商表达能力的顶级发型顾问兼视觉总监。请基于用户上传的人像照片，生成一张高端发型分析海报、发型咨询报告、发型诊断提案。

这不是普通拼图，也不是廉价模板，而是一张可以直接用于咨询展示、打印传单、社交媒体分享、门店服务展示的海报级作品。整张图必须让人一眼觉得专业、现代、明亮、可信、科学，并且推荐逻辑必须真正成立，不能为了凑数量而乱推荐。

核心任务

请基于用户上传的人像照片，做一份"十二个推荐发型"的专业分析报告。不要设置黑榜，不要做带冒犯感的否定性内容。整套推荐必须建立在真实可行、审美先进、理论充分、因人而异的基础上。推荐的十二个发型不是简单罗列，而是结合人物的脸型、头型、五官、骨相、发量、发质、年龄感、气质、身份场景、文化背景、日常维护能力，以及现代发型理论与经典设计体系，综合推导出来的个性化结果。

最重要的优化原则

准确性优先于数量装饰。每一个推荐都必须有明确依据。
不要为了显得时髦而强行给出夸张、先锋、实验性、极难驾驭的发型，除非人物本身条件与风格真的非常适合。
不要只看脸型，要综合"轮廓结构、头型结构、发质条件、气质风格、实操可行性、维护成本"。
如果某类发型理论上成立，但对当前人物的发量、发际线、头型、年龄气质、生活场景并不友好，就不要作为优先推荐。
推荐逻辑必须像真正的资深发型师和形象顾问，而不是像网络模板文章。
十二个推荐发型之间必须有清晰差异，但都要保持"适合本人"这个大前提，不能出现明显不靠谱的尝试项。
整张报告既要有审美，也要有科学性，还要有现实可执行性。

人物理解原则

用户上传的人可能是男性、女性、儿童、青少年、成年人、中老年人，也可能来自不同国家、民族与文化背景。请根据具体照片智能判断，不可套用单一模板，不可一概而论。不要把任何一类人群粗暴归纳为固定发型结论。必须做到"这个人就是这个人"，针对具体人物做具体分析。

高情商表达要求

整张报告不能冷冰冰，也不能像在挑毛病。请先基于照片中的人物特点，给出一段简短但真诚、专业、有分寸、有情商的优点解读。要让对方感受到被理解、被尊重、被欣赏。可以夸赞对方的五官协调度、轮廓辨识度、精神面貌、气质方向、风格可塑性、亲和感、利落感、成熟魅力、年轻感等。语言必须自然、真诚、专业，不油腻，不夸张，不虚假。后续发型建议必须建立在"放大优点、进一步优化"的逻辑上，而不是否定对方。

最终输出要求

输出为一张高完成度的大图海报。整张图必须同时具备科学分析价值、发型推荐价值、形象顾问报告价值、海报展示价值，以及可阅读、可分享、可印刷、可传单分发的商业品质。

请在开始生成前，先基于用户上传的照片进行智能判断，然后输出完整结果。

用户输入内容

补充信息：{{profile}}
是否希望服装跟随不同发型变化：{{outfit}}
想尝试或不想要的方向：{{direction}}
更重视：{{priority}}
比例：{{ratio}}`,
  },
  {
    id: 'portrait-05',
    name: '旁观街拍',
    description: '输入拍摄主题，生成纪实旁观感街拍摄影',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 50,
    inputs: [
      { key: 'theme', type: 'text', label: '拍摄主题', placeholder: '例如：雨夜下班的人', required: true },
      { key: 'elements', type: 'textarea', label: '要求元素', placeholder: '例如：地铁口、透明雨伞、路边灯箱', required: false },
    ],
    promptTemplate: `请生成一张纪实旁观感街拍摄影作品，围绕用户输入主题自动建立真实城市生活场景与摄影叙事。要求：
- 具有自然构图
- 像真实摄影抓拍
- 不摆拍
- 不广告化
- 不油腻
- 不刻意猎奇
- 无文字
- 无水印

【用户输入区】
拍摄主题：{{theme}}
要求元素：{{elements}}`,
  },
  {
    id: 'portrait-06',
    name: '街拍写真',
    description: '输入主题与元素，生成街拍纪实摄影',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 50,
    inputs: [
      { key: 'theme', type: 'text', label: '拍摄主题', placeholder: '例如：凌晨便利店门口的年轻人', required: true },
      { key: 'elements', type: 'textarea', label: '要求元素', placeholder: '例如：霓虹招牌、塑料袋、逆光', required: false },
    ],
    promptTemplate: `请生成一张街拍纪实摄影作品，围绕用户输入主题自动建立真实城市生活场景与摄影叙事。要求：
- 具有自然构图
- 像真实摄影抓拍
- 不摆拍
- 不广告化
- 不油腻
- 不刻意猎奇
- 无文字
- 无水印

【用户输入区】
拍摄主题：{{theme}}
要求元素：{{elements}}`,
  },
  {
    id: 'culture-02',
    name: '窗意海报',
    description: '输入诗句和风格，生成更自由的东方窗意海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 40,
    inputs: [
      { key: 'content', type: 'textarea', label: '诗句 / 主题', placeholder: '例如：橘子洲头 看万山红遍', required: true },
      { key: 'style', type: 'text', label: '风格补充', placeholder: '例如：摄影美学 + 黄金时刻 + 震撼人心 + 蓝天', required: false },
    ],
    promptTemplate: `核心不是机械表现"某一种窗"或"某几样景物"，而是生成一种中式窗景的观看方式：边界、取景、框景、借景、留白、内外关系、虚实呼应。所谓"窗"，可以是实体，也可以是影、洞、廊、檐、墙、框、空缺、天光形成的视觉界面；所谓"景"，也应自然生长，不预设固定物品，不套模板，不偷懒，不僵化，一切都由主题气质智能生发。

整体必须大量留白，让留白成为气口、回音与余韵。构图需有大师级水准，形成强烈而高级的视觉张力。画面不默认出现人物，除非主题确有必要。

排版需达到获奖级质感。核心文本需做巧妙字体设计，字形、大小、位置、疏密、方向、断连、藏露关系都应因题而变，做到"字即气氛，字即画面"。除主句外，默认补充至少五种不同层级的信息，如意象解读、情绪注脚、出处背景、时间/节气、哲思延伸，并克制而巧妙地分布在四周，形成环绕式阅读秩序。

最终输出应是一张兼具中式美学 DNA、强意境、强留白、强版式、强智能性与自然发生感的东方海报。

用户输入：{{content}}

风格：{{style}}`,
  },
  {
    id: 'culture-03',
    name: '文物海报',
    description: '输入文物名称，生成联网核实后的展览级知识海报',
    category: 'text',
    requiresImage: false,
    defaultRatio: '2:1',
    canCustomizeRatio: true,
    ratioOptions: ['2:1', '3:4', '4:3', '16:9'],
    estimatedSeconds: 60,
    inputs: [
      { key: 'artifact', type: 'text', label: '文物名称', placeholder: '例如：马踏飞燕', required: true },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '2:1', label: '2:1' },
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '16:9', label: '16:9' },
      ]},
    ],
    promptTemplate: `本次不是文本任务， 是生成图片任务，要求如下：
生成图片任务：
你要生成的不是普通插画，也不是标准化的信息板，而是一张“经过联网核实、知识准确、图文一体、兼具国际级海报设计水准、博物馆出版物气质、东方审美、研究感与强视觉记忆点的文物知识海报 / 文物美学卡片 / 展览级单页”。

你的目标不是把资料堆上去，而是把一件文物真正“设计出来、讲透出来、研究出来”。它必须同时满足以下标准：知识准确，不凭空编造；视觉大气，有留白，有巧思；排版灵动，不僵硬，不套路化；图文关系高级，不是图片加说明；第一眼就抓人，越看越有内容；既像顶级展览海报，也像一页被精心设计过的博物馆研究图录。

在正式生成之前，必须先执行联网检索与事实核验。优先检索博物馆官网、文博机构官网、官方展览资料、权威百科、考古报告、学术文章、出版图录等高可信来源。重点核实正式名称、别名、年代、朝代或时期、器类、材质、工艺、尺寸、重量、出土地、发现背景、现藏机构、用途、造型特征、纹饰特征、铭文信息、文化寓意、历史价值、艺术价值、工艺价值、学术意义、代表性细节、相关典故或文献出处、归属与流传等信息。若不同来源存在差异，应优先采用更权威、更广泛认可的说法，并对存疑内容谨慎表述，不得凭空编造。最终画面中的所有知识文字都必须建立在检索与判断基础上，而不是靠想象补写。

整张海报的信息量必须明显强于普通博物馆展签，至少包含十个不同层级的信息点，而且每个层级都要有真实的信息增量。除基础数据外，应尽量涵盖挖掘背景、考古过程、流传与修复经历、文献典故或出处、器物归属、时代背景、礼制与社会意义、工艺与结构分析、纹饰与造型解读、与同类器物的比较、地域文化特征、学术研究价值、展览与收藏意义、公众传播影响、历史趋势与文明脉络、价值总结等维度。观者读完后要有一种“比听讲解更透、更准、更有收获”的感觉。

整体版式必须彻底摆脱教科书式、表格式、规则分栏式的信息图逻辑。画面要更有灵气、更有节奏、更有松弛感，更像国际知名海报设计师为一件文物量身打造的视觉作品。必须具备强烈的整体构图意识、前景与后景的穿插关系、几何图形的设计感、留白的控制力，以及图文之间的巧妙遮挡与共生关系。

最终生成目标不是把资料罗列出来，而是产出一张真正具备以下特质的高水平作品：知识准确，信息丰厚，至少十个层级的信息点清晰可见；文物名称的最大文字不在顶部，而是围绕文物嵌入几何背景之中，并以部分显露、部分遮挡的方式形成“可猜测”的高级视觉效果；所有背景大字一个都不能丢，必须保持整体可理解性；完整文物名称必须在次一级文字中被巧妙而清楚地再次体现；画面可浅可深，但配色必须智能而高级；几何图形与笔刷共同参与构图；字体选择根据文物气质灵活变化，不再千篇一律；排版大气、留白充足、非常有巧思；整体具备国际知名海报设计师级别的美学素质与排版素质，既震撼、又耐看、又有文化温度。

请严格围绕用户最终输入的对象，先检索，后判断，再提炼，再设计，确保内容准确，排版顶级，配色聪明，字体与文物气质匹配，几何背景与嵌入式大字逻辑清晰，所有大字都可被理解且不会缺字，完整文物名称在次一级文字中清楚出现，笔刷自然流动，留白大气，整体不套路、不重复、不僵硬，真正做到高级、灵动、聪明、有国际级完成度。

用户输入对象： {{artifact}}  
比例{{ratio}}`,
  },
  {
    id: 'ip-sticker-01',
    name: '聊天贴纸',
    description: '上传角色参考，生成 16 枚鼠标乱画风表情包',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '1:1',
    canCustomizeRatio: false,
    estimatedSeconds: 60,
    inputs: [
      { key: 'characterRef', type: 'photo', label: '角色参考图', placeholder: '上传人物、宠物或组合角色图', required: true },
      { key: 'layoutRef', type: 'photo', label: '版式参考图', placeholder: '上传 4x4 表情包版式参考', required: false },
      { key: 'captions', type: 'textarea', label: '文案内容', placeholder: `例如：困死了
别烦我
今天不想上班`, required: true },
    ],
    promptTemplate: `任务目标：
基于参考图生成一套"聊天贴纸表情包合集"。整体需具备强情绪表达、传播性，以及统一但极具个性的视觉风格。最终效果应像：一个人用鼠标在电脑上胡乱画画并顺手乱写文字，低质量但非常真实、有趣、好笑。

————————
输入结构：

图片1：角色参考（可能包含一个或多个角色，如人物、宠物等）
图片2：版式参考（仅用于理解16格结构，不限制风格）
用户输入变量：
- 文案内容（多行文本，可少于或多于16条）

————————
角色识别与使用规则：

- 识别所有角色（人/动物/组合）
- 每个角色都可作为贴纸主角
- 不同贴纸可使用不同角色
- 可出现多角色互动（贴贴、争抢、对视等）
- 分配需自然，符合聊天语境

————————
一致性要求（核心重定义）：

本任务采用"错误一致性"，而非"写实一致性"。

同一角色在不同贴纸中：
不需要长得一样，但必须"画得像同一个人乱画的"。

必须统一：
- 相同的笨拙画法
- 相同的简化方式（符号脸/火柴人）
- 相同的错误习惯（比例歪、线条抖）
- 相同的混乱程度

允许：
- 五官错位
- 比例变化
- 结构错误
- 细节缺失

必须：
- 保留最低识别特征（如发型轮廓、颜色、标志物）

总结：
一致性 = 错得一致，而不是像得一致

————————
版式与结构：

- 共16个贴纸，4x4排列
- 每个贴纸为独立画面
- 可单角色或多角色
- 单个贴纸内部可以混乱
- 整体排布必须清晰

————————
文案系统（表达核心）：

用户输入多行中文文案：
{{captions}}

数量处理：
- 少于16条 → 自动补全
- 多于16条 → 自然筛选最有表达力的16条

补全原则：
- 保持语气一致（嘴臭 / 摆烂 / 打工人 / 崩溃 / 撒娇等）
- 具备互联网语言感
- 优先短句，但允许长句增强张力
- 避免重复表达

表达目标：
- 一眼能懂
- 情绪强烈
- 有传播感（像真实表情包）

语气优先：
- 吐槽
- 自言自语
- 情绪爆发
- 敷衍 / 不耐烦 / 荒谬

避免：
- 礼貌表达
- 标准回复句式

————————
文字与画面融合（关键）：

文字必须"画出来"，而不是"排版出来"。

必须做到：
- 字像鼠标手写：歪、抖、大小不一
- 排版混乱：倾斜、错位、挤压、重叠
- 行距不均匀
- 可贴在角色上、旁边或边缘

允许：
- 重复字（啊啊啊啊）
- 拉长音（烦——死——了）
- 标点乱用（？？？？！！）
- 不工整甚至略丑

必须：
- 保持可读性
- 不影响理解

————————
表达生成机制（最核心）：

整套贴纸必须模拟这个过程：

"一个不会画画的人，用鼠标在电脑上，一边乱画，一边顺手乱写。"

关键要求：

- 图像和文字属于同一次行为
- 不是先设计图再加文字
- 而是同时发生

每个贴纸应像：
- 随手画完
- 临时想到一句话写上去
- 有点敷衍甚至随意

————————
图文关系：

图与文字必须形成：

- 吐槽关系
- 情绪强化
- 自言自语
- 或轻微不匹配（增强荒诞）

允许：
- 文案和表情不完全对应
- 出现"跑题幽默"

目标：
不是精准，而是好笑

————————
美学风格DNA（核心驱动）：

风格来源：极差手绘 + MS Paint鼠标乱画 + 失败模仿

视觉特征：

线条：
- 抖动、不稳定、锯齿明显
- 像鼠标画

形态：
- 比例失衡
- 火柴人或极简结构
- 可变形

细节：
- 极少细节
- 呈现"不会画"

质感：
- 像素感
- 边缘粗糙

构图：
- 单个贴纸允许混乱
- 整体结构清晰

情绪：
- 笨拙、直接、荒诞、好笑

还原：
- 模糊像原图
- 允许错误和误解
- 类似失败临摹

————————
风格执行约束（极重要）：

当冲突发生时：

真实感 vs 风格 → 必须优先风格

允许破坏：
- 精细度
- 比例
- 结构
- 干净程度

禁止：
- 精致画面
- 正常比例
- 干净线条
- 强设计感

判断标准：

如果画面开始"好看"，说明失败
必须回到粗糙、混乱状态

————————
贴纸要求：

- 每个贴纸清晰独立
- 表情明确
- 可用于聊天
- 情绪强烈`,
  },
  {
    id: 'ip-sticker-02',
    name: '饭店Logo集',
    description: '输入饭店名，生成 16 个创意 Logo 网格',
    category: 'pro',
    requiresImage: false,
    defaultRatio: '1:1',
    canCustomizeRatio: false,
    estimatedSeconds: 60,
    inputs: [
      { key: 'restaurant', type: 'text', label: '饭店名称', placeholder: '例如：强记粉店', required: true },
      { key: 'style', type: 'text', label: '风格偏好', placeholder: '例如：鲁迅感、黑白、冷静犀利', required: false },
    ],
    promptTemplate: `我有一个饭店，中国的饭店， 我的饭店名字叫做：
{{restaurant}}

按照全球顶级ui和logo设计师，还有顶级美学专家的水平、甚至你很懂字体艺术、图形艺术、小众文化、颜色心理学....字体风格和气质的设计。 图形心理学。

给我提供16个logo创意
这种创意，要能被世界500强企业所欣赏。这种创意，要被顾客轻松铭记、印象深刻。

要求4x4 网格输出， 一个cell中一个logo创意。

特别强调：
类似鲁迅先生的logo作品。
风格补充：{{style}}`,
  },
  {
    id: 'ip-sticker-03',
    name: '绘本转绘',
    description: '上传图片，改造成童趣手绘绘本插画',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '1:1',
    canCustomizeRatio: false,
    estimatedSeconds: 45,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传参考图', placeholder: '可以是人物、宠物或任意场景图', required: true },
      { key: 'theme', type: 'textarea', label: '主题补充', placeholder: '例如：森林野餐的小熊和小女孩', required: false },
    ],
    promptTemplate: `保留用户输入图片或需求中的核心主体、动作和主题，但完全重绘为该童趣手绘绘本风格。
减少复杂元素，只保留最有辨识度的特征。
画面要像一张完成度高的儿童绘本插画，而不是草稿。

禁止出现：
写实摄影风、3D渲染、厚重油画、赛博朋克、暗黑恐怖、复杂阴影、真实皮肤纹理、过度精致五官、复杂背景、强烈透视、商业矢量logo感、AI塑料感、锐利边缘、霓虹色、高饱和渐变。

输出画面关键词：
whimsical children's book illustration, hand-drawn black outlines, soft pastel colors, flat color blocks, simple rounded shapes, cute characters, minimal facial features, playful doodle decorations, cream background, abstract pastel shapes, gentle nursery art, cozy storybook aesthetic, naive drawing style, warm and innocent mood.

最终生成：
请根据用户输入的主题，生成一张方形构图的童趣手绘绘本插画，画面简洁、温暖、柔和、可爱，具有黑色手绘线条、扁平柔和色块、抽象背景装饰和儿童故事书般的梦幻氛围。
主题：{{theme}}`,
  },
  {
    id: 'ip-sticker-04',
    name: '线稿叙事照',
    description: '上传照片，叠加白色线稿叙事插画',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 40,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传照片', placeholder: '上传一张人物或场景照片', required: true },
      { key: 'theme', type: 'textarea', label: '主题 / 情绪 / 角色', placeholder: '例如：角色是恐龙，天空像 iPhone 随手拍', required: false },
    ],
    promptTemplate: `让这个线稿主体与图片中的关键元素发生明确互动，例如：拥抱、托起、指向、编织、修补、守护、牵引、从某个物体中浮现、沿着轮廓生长，或与人物动作产生呼应。

线稿风格需要粗而精致：轮廓有力量，细节有纹理，可加入花朵、星尘、云纹、光线、波纹、叶片、符号、小动物、手部细节等装饰元素，但整体保持干净、有秩序、不杂乱。

画面应具有梦幻、可爱、诗意、温柔、故事感和轻微超现实气质。
真实背景保持照片级质感，线稿插画保持高存在感，两者要自然融合，形成统一完整的艺术作品。

不要添加 UI 元素、按钮、边框、信息卡片、水印或无关文字。

用户可在此补充主题、情绪、角色或特殊要求：
{{theme}}`,
  },
  {
    id: 'ip-sticker-05',
    name: '人格瓶子图',
    description: '根据个性特质生成小瓶子配比图',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 40,
    inputs: [
      { key: 'traits', type: 'textarea', label: '你的特质描述', placeholder: '例如：理性、嘴硬、容易内耗，但行动力强', required: true },
    ],
    promptTemplate: `你要生成的不是普通插画，而是一张"上帝在创造你时加了什么"的人格特质可视化图表。
这张图要模仿网络上流行的"小瓶子 / 小药瓶 / 小容器装配比"的游戏形式：每个瓶子代表一种特质，瓶中填充的容量代表"上帝在创造这个人时加入了多少这种特质"。

你的核心任务是：
**必须根据用户的记忆智能分析提取他们的个性特征**，而不是预设特质列表。
每个用户的特征不同，你需要从系统中提取和判断出适合这个用户的特质，并通过瓶子容量进行可视化表达。
不要使用任何固定的特征，所有特质的选择和比例都必须基于用户的个人数据和行为分析来动态决定。

用户自述特质：{{traits}}`,
  },
  {
    id: 'illustration-01',
    name: '艺术壁纸',
    description: '输入主题或上传参考图，生成孤独气质艺术绘画壁纸',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['1:1', '3:4', '4:3', '9:16', '16:9'],
    estimatedSeconds: 40,
    inputs: [
      { key: 'theme', type: 'textarea', label: '主题 / 关键词', placeholder: '例如：窗边发呆的人', required: false },
      { key: 'photo', type: 'photo', label: '参考图片', placeholder: '可上传一张参考图辅助创作', required: false },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '1:1', label: '1:1' },
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '9:16', label: '9:16' },
        { value: '16:9', label: '16:9' },
      ]},
    ],
    promptTemplate: `请根据用户最后输入的【主题 / 关键词 / 短句 / 概念】，生成一张具有强艺术家气质、强审美判断、强风格表达的单幅艺术绘画图像。

你需要先判断输入类型，并执行对应逻辑：
- 如果用户输入的是【主题 / 关键词 / 短句 / 概念】：先理解其气质、情绪、象征、联想与隐藏张力，再从"艺术家的视角"进行视觉转译，而不是直接图解主题。
- 如果用户提供的是【一张或多张参考图片】：不要直接复制原图，而是提炼其中最有价值的主体、姿态、构图重心、物象关系与情绪气息，再以更有艺术判断的方式重新创作。
- 如果用户同时提供【主题 + 图片】：以图片内容为视觉基础，以主题作为情绪和表达方向，让最终画面既保留原图核心识别度，又完成真正有灵气的风格化重构。

【核心气质】整体应轻、柔、静、透、旧、雾、松，带有明显的孤独感、安静感与凝视感。带有粉彩、油画棒、干湿混合颜料、粗纹画布、磨砂玻璃般的朦胧质感。不要高清，不要锐利，不要塑料感，不要数码感。

【大量留白 / 孤独气质】画面必须具备高质量留白，不要塞满。留白不是空，而是情绪的一部分。整体气质应有轻微的孤独感、疏离感、静默感。

【顶级艺术家构图逻辑】构图必须是一张完整的单幅画面，不要分区，不要四宫格，不要拼贴。灵活使用：大量留白 / 非对称平衡 / 偏置重心 / 边缘裁切 / 局部放大 / 暧昧焦点 / 主体偏角落或偏一侧的克制处理。

【壁纸适配要求】最终图像必须达到适合做桌面壁纸和手机壁纸的水平。画面整体要干净、耐看、统一。预留适合壁纸使用的呼吸区与空域。

【配色逻辑】
1. 以安静、偏冷、偏灰的底色统摄全画面：灰蓝、蓝绿、湖水绿、雾青、浅青灰、冷灰白、淡奶灰等。
2. 在局部突然出现少量非常巧妙的彩色亮点，像艺术家"突然加进去的一笔妙色"。
3. 这些彩色只出现在局部关键位置，不是为了装饰，而是为了让画面突然活一下、亮一下、灵一下。

【笔触与材质】使用粉彩、油画棒、干刷、厚薄不均的颜料痕迹、柔软的色粉感、略带粗糙的布面纹理。

【光线】柔和漫射光，像清晨窗边、阴天室内、旧画室里的自然光。

【禁止】不要水印、logo、网址、署名 / 不要真实摄影感 / 不要平滑数字插画感 / 不要明显AI塑料感 / 不要画面拥挤 / 不要失去留白与孤独感

用户输入内容：{{theme}}
比例：{{ratio}}`,
  },
  {
    id: 'illustration-02',
    name: '水彩手账',
    description: '输入主题和场景，生成复古治愈水彩手账插画',
    category: 'text',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['3:4', '1:1', '9:16'],
    estimatedSeconds: 40,
    inputs: [
      { key: 'theme', type: 'textarea', label: '主题 / 场景', placeholder: '例如：雨天咖啡馆的一角', required: true },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '3:4', label: '3:4' },
        { value: '1:1', label: '1:1' },
        { value: '9:16', label: '9:16' },
      ]},
    ],
    promptTemplate: `颜色逻辑：根据用户输入自动建立一套低饱和复古水彩色板。主色约60%，辅助色约30%，点缀色约10%。整体色彩柔和、透明、复古、温暖、治愈。

文字逻辑：只允许短标题和少量装饰性手写注释，不要生成大段清晰正文。

整体气质：温柔、安静、复古、诗意、治愈、精致、松弛、咖啡馆氛围、艺术家速写本、生活美学。

画面规格：竖版构图，真实纸面扫描质感，强烈手工绘制感。

【禁止】不要照片写实 / 不要矢量图 / 不要扁平设计 / 不要动漫风 / 不要主体单一居中 / 不要画面过满 / 不要明显AI数字插画感

用户输入：{{theme}}
比例：{{ratio}}`,
  },
  {
    id: 'illustration-03',
    name: '漫画日记',
    description: '输入日记内容或上传照片，生成治愈系漫画日记',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 60,
    inputs: [
      { key: 'photo', type: 'photo', label: '辅助照片', placeholder: '可上传当天照片辅助分镜', required: false },
      { key: 'date', type: 'text', label: '日期', placeholder: '例如：2026-05-10', required: true },
      { key: 'diary', type: 'textarea', label: '日记内容', placeholder: '例如：今天终于把方案做完，晚上吃了拉面，心情慢慢回来了', required: true },
      { key: 'style', type: 'textarea', label: '风格偏好', placeholder: '例如：韩系、柔和色彩、主角戴圆框眼镜', required: false },
    ],
    promptTemplate: `你是一个智能漫画日记生成助手，你的任务是将用户提供的素材（照片、文字日记、口述内容）生成"调格漫画"风格的漫画日记作品。

排版逻辑：默认漫画为"调格漫画"形式：每一行一个面板，上下顺序呈现，每个面板对应一个事件、情绪或思考片段。面板数量与用户提供的素材、日记内容匹配；若内容过多，自动拆分为多页，每页保持逻辑完整。

文本内容处理：对文本进行理解与提炼，抽取当天事件、关键行动、情绪和深层思考，用漫画风格语言重述，语言自然、简洁、可读，保留用户核心信息，使其符合漫画叙事逻辑。

风格与角色：默认角色为治愈系肉包肉风格，形象可根据用户输入微调。默认风格为线条手绘、柔和色彩、韩系插画感。用户可自定义风格或角色特征。

日期与标注：每页漫画应在显眼位置标注日期。日期格式自然、整洁，与漫画风格协调，不抢主体内容注意力。

整体生成规则：每个面板呈现一个事件或思考片段，按时间或逻辑顺序排列。文字与画面协调，不堆砌杂乱元素。

用户输入（日记内容、可附加风格偏好和角色特征）：
日期：{{date}}
日记内容：{{diary}}
风格偏好：{{style}}`,
  },
  {
    id: 'logo-01',
    name: '汉字标志',
    description: '输入品牌名或一个字，生成中式品牌标志展示页',
    category: 'pro',
    requiresImage: false,
    defaultRatio: '3:4',
    canCustomizeRatio: false,
    estimatedSeconds: 50,
    inputs: [
      { key: 'brand', type: 'text', label: '品牌名 / 文字', placeholder: '例如：松风', required: true },
    ],
    promptTemplate: `每张作品只需要一个真正成立的主隐喻，必要时最多允许一个辅助呼应。不要把巧思做成拼盘。最好的结果应该是：第一眼先读到字，第二眼感到气质，第三眼才发现其中的巧妙之处，并自然地产生"原来如此"的感受。

请让标志具有真实品牌系统的可能性。它应像文创、茶酒、民宿、餐饮、地方风物、东方生活方式品牌或文化项目中可以长期使用的视觉母体，而不是一次性画面。标志本身应具有压缩后的力量，局部应可自然延展为印章、纹样、包装元素、社媒头像或辅助图形。

画面应以"标志展示页"的逻辑组织，而不是广告海报逻辑。整体以中轴感、留白感、纸本感与作品集提案感为核心。主标志是绝对视觉中心，可以自然生长出品牌名、拼音、小字释义、细线、小章、编号、局部拆解或极少量辅助图形，但不要为了完整而填满版面。

视觉气质应中式、简约、温润、克制、雅致，带有文人感、印章感、收藏感和品牌感。东方感不要依赖龙纹、祥云、灯笼、红金堆叠或廉价国潮元素，而应来自比例、虚实、疏密、图底关系、笔画节奏与一处精准的点睛。

色彩以低饱和、耐看、有时间感的色系为主。背景宜采用宣纸白、米白纸、浅灰手工纸、暖灰纸面或细腻纸张肌理。

用户最后输入如下：
{{brand}}`,
  },
  {
    id: 'avatar-01',
    name: '情侣头像',
    description: '上传参考图，生成可拆分的情侣抽象头像',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '2:1',
    canCustomizeRatio: false,
    estimatedSeconds: 45,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传参考图', placeholder: '上传一张双人或有关系感的参考图', required: true },
      { key: 'subject', type: 'textarea', label: '主角要求', placeholder: '例如：一方更克制，一方更可爱', required: false },
      { key: 'material', type: 'select', label: '材质风格', placeholder: '', required: false, options: [
        { value: '低饱和淡彩', label: '低饱和淡彩' },
        { value: '毛绒', label: '毛绒' },
        { value: '冰块', label: '冰块' },
        { value: '乐高', label: '乐高' },
        { value: '像素', label: '像素' },
        { value: '气球', label: '气球' },
        { value: '青花瓷', label: '青花瓷' },
        { value: '玻璃', label: '玻璃' },
        { value: '软糖', label: '软糖' },
        { value: '果冻', label: '果冻' },
      ]},
    ],
    promptTemplate: `只借用原图的构图骨架：主体位置、大小关系、前后层级、动作方向、视觉节奏与情绪张力。删除一切可识别信息，包括文字、UI、logo、水印、五官、表情、服装、纹理、背景细节与身份线索。将人物、动物、物体统一转译为圆、椭圆、圆角块、胶囊形、软剪影与少量点状符号，只保留关系，不保留原貌。

默认输出为低饱和淡彩、浅灰辅助、大量留白、圆润、无描边、无写实细节的扁平抽象图标。

若用户追加材质要求，则不改变上述抽象化原则，而是在同一骨架与同一简化语言之上，让整体自然生长为该材质的视觉形态。材质优先于默认扁平风格，但不得破坏抽象性、去身份化与结构关系。材质应统一作用于整体，并自然带出适合的体积、光感、表面特征与空间气息；画面仍需克制、干净、留白充足，不回到写实，不堆砌细节。最终效果应像：原图的结构，被转译成一种高度凝练、材质明确的抽象视觉实体。

可选风格/材质参数：低饱和淡彩、浅灰辅助、大留白、扁平抽象、圆润无描边、极简3D、毛绒、冰块、乐高、像素、气球、青花瓷、玻璃、陶瓷、金属、木质、纸雕、羊毛毡、橡皮泥、软糖、石膏、泡沫、果冻、亚克力等。

——————

【情侣头像专用配置】

任务：生成一组可用于情侣头像的图片

结构要求（必须满足）：
- 整体为横向 2:1 构图（宽:高 = 2:1）
- 左右分别对应两个 1:1 区域，可被用户直接裁剪为两个头像
- 每一侧在单独裁剪后必须构图完整、视觉成立

角色要求：
- 左右两侧分别代表情侣中的两方
- 两者在气质上需要有明显区分（一方更柔和/可爱，另一方更克制/简洁）
- 不要让两侧呈现相同性别气质

关系与设计要求：
- 两侧必须存在视觉或情绪上的对应关系（视线方向、身体朝向、动作暗示或情绪呼应）
- 合在一起时要有互动感或默契感
- 分开看各自成立，合在一起有额外意义

创作自由：
- 不要依赖固定套路（如强制粉色/蓝色、蝴蝶结/领结）
- 呼应方式可以来自任何维度（构图、材质、动作、氛围等）
- 鼓励有巧思，而不是简单"同款换色"

本次画面主角要求：{{subject}}
材质要求（可选）：{{material}}
比例：2:1`,
  },
  {
    id: 'ecommerce-01',
    name: '电商展示图',
    description: '上传产品图或输入卖点，生成主图、场景图或 A+ 图',
    category: 'pro',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['1:1', '3:4', '4:3', '16:9', '9:16'],
    estimatedSeconds: 50,
    inputs: [
      { key: 'productName', type: 'text', label: '产品名称', placeholder: '例如：便携榨汁杯', required: true },
      { key: 'productImage', type: 'photo', label: '产品图片', placeholder: '可上传低质产品图或拍摄照', required: false },
      { key: 'points', type: 'textarea', label: '信息点 / 亮点', placeholder: '例如：无线充电、轻量、便于清洗', required: true },
      { key: 'imageType', type: 'select', label: '图像类型', placeholder: '', required: true, options: [
        { value: '主图', label: '主图' },
        { value: '场景图', label: '场景图' },
        { value: 'A+图', label: 'A+图' },
        { value: '信息图', label: '信息图' },
      ]},
      { key: 'count', type: 'text', label: '数量要求', placeholder: '例如：3', required: false },
      { key: 'style', type: 'text', label: '风格要求', placeholder: '例如：科技感、高级灰', required: false },
      { key: 'extra', type: 'textarea', label: '补充说明', placeholder: '例如：重点突出防水卖点', required: false },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '1:1', label: '1:1' },
        { value: '3:4', label: '3:4' },
        { value: '4:3', label: '4:3' },
        { value: '16:9', label: '16:9' },
        { value: '9:16', label: '9:16' },
      ]},
    ],
    promptTemplate: `你是一名顶级电商视觉设计师，专注于将任何产品图片或产品信息点转化为高质量的电商展示图。你的任务是根据用户提供的内容生成专业、吸引人的电商图片，可用于主图、场景图、A+图或信息图。

要求：
1. 自动兼容任何输入：无论用户提供低质产品图、拍摄照片，还是仅提供商品信息点、特点、亮点等文字描述。
2. 输出图像风格分层：
   a. 白底主图：突出商品细节，干净背景，居中呈现，适合电商平台主图。
   b. 场景图：将商品放入生活或使用场景中，突出使用方式、环境和氛围。
   c. 高级A+图/信息图：可使用分割拼贴、多场景展示、产品特点说明、亮点强调、图文结合，高级电商视觉风格。
3. 风格指导：专业、清晰、商业化 / 高质感、光影自然、布局合理 / 色彩和谐，与产品调性一致 / 包含必要文字信息，但不影响整体美观
4. 用户仅需提供：
   - 产品图片（可选低质或非专业图）
   - 或者商品名称、特点、亮点、用途等文字信息
   - 可指定需要的图像类型（主图 / 场景图 / A+图 / 信息图）
5. 你需要智能补全缺失信息，例如：
   - 若仅提供文字，你能生成符合描述的产品渲染图
   - 若提供低质图片，你能优化展示效果，使其适合电商平台使用

最终目标：无论输入质量如何，生成的电商图片都应达到平台可用标准，信息清晰、视觉吸引、风格统一、专业感强。

——————
产品名称：{{productName}}
产品图片：（可附图）
信息点 / 亮点：{{points}}
图像类型：{{imageType}}
数量要求：{{count}}
风格要求：{{style}}
补充说明：{{extra}}
比例：{{ratio}}`,
  },
  {
    id: 'infographic-01',
    name: '流程图重构',
    description: '上传 Mermaid 源码或流程图图片，重构为专业信息图',
    category: 'pro',
    requiresImage: true,
    defaultRatio: '16:10',
    canCustomizeRatio: false,
    estimatedSeconds: 50,
    inputs: [
      { key: 'diagram', type: 'photo', label: '流程图图片', placeholder: '可上传现有流程图、架构图截图', required: false },
      { key: 'mermaid', type: 'textarea', label: 'Mermaid 源码', placeholder: `例如：graph TD
A-->B`, required: false },
    ],
    promptTemplate: `你是高级信息图重构生成器，兼具信息架构师、视觉设计总监、技术机制图设计师能力。

任务：将用户提供的 Mermaid / C4 / Flowchart / Sequence / State / ER / Timeline 源码，或其渲染图片，重新设计为一张高保真、高审美、专业级信息图。

目标不是美化原图，不是复刻 Mermaid，不是普通流程图换皮。你必须先理解其语义结构，再重新编译为新的信息架构图。

Output: 生成一张最终高保真信息图。不要输出分析过程、解释、Markdown、源码或设计说明。

Input truth rules:
1. 如果输入是源码，源码是语义真相。忽略 Mermaid 原始布局、颜色、classDef、节点样式。
2. 如果输入是图片，图片只作为语义提取材料。不得临摹原图布局、配色、节点形状或箭头路径。
3. 图片文字模糊时，只保留可确认信息，不要编造业务逻辑。

Primary mechanism: 必须识别唯一主机制，并让它在 3 秒内可见。

Design tokens:
- background: #F7F5F0 / surface: #FFFFFF
- primary: #1C2E4A / secondary: #2C7A7B / accent: #B7791F
- text_primary: #1F2937 / text_secondary: #667085

Visual hierarchy:
- controller / orchestrator / core object 权重最高
- main path 最连续、最醒目
- output / terminal 必须有明确收束感
- decision / gate 必须像关键判断点
- storage 稳定低调
- observer / tracing 使用低对比虚线
- tools 像可调用能力，不与主流程平级
- annotation 收纳为侧栏、底栏或微型说明

节点形式：
- event = compact pill
- process = calm rectangle
- decision / gate = logic block or split gate
- output = terminal capsule
- storage = grounded subtle container
不要所有节点同尺寸，不要所有节点都画成白色矩形卡片。

连接规则：
- 主流程线最清楚，辅助线降噪
- 禁止所有线同色同粗同风格
- 箭头头部小而精确

Canvas defaults:
- aspect ratio: 16:10
- canvas target: 1600×1000
- outer padding: 72

Hard bans:
- 不要漂亮版 Mermaid
- 不要普通流程图换皮
- 不要每个节点加圆形图标
- 不要图标喧宾夺主
- 不要彩虹配色
- 不要大面积高饱和色块
- 不要重阴影、不要发光、不要3D、不要玻璃拟态
- 不要编造不存在的信息

输入 Mermaid Code 或图片：
{{mermaid}}`,
  },
  {
    id: 'science-card-01',
    name: '植物识别卡',
    description: '上传植物照片，生成植物百科识别卡片',
    category: 'photo',
    requiresImage: true,
    defaultRatio: '3:4',
    canCustomizeRatio: true,
    ratioOptions: ['3:4', '1:1', '4:3', '9:16'],
    estimatedSeconds: 50,
    inputs: [
      { key: 'photo', type: 'photo', label: '上传植物照片', placeholder: '拍清楚花、叶、茎会更容易识别', required: true },
      { key: 'extra', type: 'textarea', label: '额外要求', placeholder: '例如：重点提醒是否对猫有毒', required: false },
      { key: 'ratio', type: 'select', label: '比例', placeholder: '', required: false, options: [
        { value: '3:4', label: '3:4' },
        { value: '1:1', label: '1:1' },
        { value: '4:3', label: '4:3' },
        { value: '9:16', label: '9:16' },
      ]},
    ],
    promptTemplate: `你是一位兼具植物分类学、园艺经验、博物观察力与视觉叙事能力的植物信息设计师。

我会上传一张植物照片。请你先安静观察，不要只凭第一印象下结论。请从植物学特征逐层推导：先判断它的生活型，再观察花、叶、茎、果、刺、绒毛、汁液、叶序、花序、生境与季节线索；最后结合常见分布、园艺品种和联网资料，推测它最可能属于哪个科、属或种。

识别时请采用"先大类，后细分"的方式。如果证据不足，不要强行给出唯一答案。只有当花、叶、整体形态、分布和资料核验都较一致时，才确认到具体物种。若只能识别到属或科，请诚实停在那里，并告诉我还需要补拍哪些部位来确认。

请调用联网能力核验关键信息，包括中文名、学名、科属、原产地、花期、生长习性、毒性、宠物风险、药用或食用争议。优先参考植物志、植物园、大学、科研机构、权威植物百科和可靠园艺资料。若资料存在差异，请采用谨慎表达，不编造，不夸大，不把俗名、园艺品种和近缘种混为一谈。

最终请生成一张默认长宽比为 3:4 的竖版「植物百科卡片信息图」。如用户另行指定尺寸、比例或平台适配方式，请优先按照用户要求调整。

这张卡片不应像机械模板，而应像植物自身慢慢展开：有清晰的知识骨架，也有自然的阅读流动。内容可以根据这株植物的气质、信息价值和识别难度自由组织，不必每次塞满所有栏目。

在视觉呈现上，请把用户提供照片中的植物主体作为最核心的视觉元素。优先对主体进行干净、自然的抠图处理，让花、叶、枝条或果实从原背景中被清晰提取出来，成为画面的主视觉中心。若照片背景杂乱，请弱化、简化或去除原背景。

抠出的植物主体周围，请搭配简洁、克制、具有设计感的背景处理。背景以从植物本身提取出的颜色为基础，生成柔和、抽象、自然的色块、渐层、留白或轻图形结构。整体应呈现"主体清晰、背景克制、层次柔和、信息有呼吸感"的效果。

卡片中请自然呈现植物名称、学名、别名、识别置信度、分类判断、关键识别依据、相似植物区别、基础档案、生长习性、养护建议、花期或生长节奏、适合场景、风险提示与趣味知识。

视觉风格请保持极简、扁平、现代、清新、优雅，具有植物图鉴和轻科普杂志的气质。主色从植物自身提取，版式随植物气质变化。

请先输出简短的识别推导摘要（大类、候选、置信度、关键证据和不确定点），再生成卡片信息图。

用户额外要求：{{extra}}
比例：{{ratio}}`,
  },
]

export function getFunctionById(id: string): FunctionConfig | undefined {
  return functions.find(f => f.id === id)
}

export const categories = [
  { id: 'text' as const, name: '文字创作', description: '输入文字，AI 生成海报' },
  { id: 'photo' as const, name: '照片玩法', description: '上传照片，AI 创意改造' },
  { id: 'pro' as const, name: '商业工具', description: '广告图、电商图等' },
]
