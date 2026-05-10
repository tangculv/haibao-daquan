import type { FunctionConfig } from '../types'

// Visual config per function for the card UI
export const cardVisuals: Record<string, { gradient: string; emoji: string; accent: string }> = {
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
]

export function getFunctionById(id: string): FunctionConfig | undefined {
  return functions.find(f => f.id === id)
}

export const categories = [
  { id: 'text' as const, name: '文字创作', description: '输入文字，AI 生成海报' },
  { id: 'photo' as const, name: '照片玩法', description: '上传照片，AI 创意改造' },
  { id: 'pro' as const, name: '商业工具', description: '广告图、电商图等' },
]
