# 任务：将剩余 37 个 prompt 补充到 functions.ts

## 背景

海报大全 H5 项目当前在 `src/data/functions.ts` 中已有 9 个功能配置。
prompt 库共有 46 条 prompt 分布在 10 个 markdown 文件中。需要把剩余 37 条全部补上。

## 输入

### 已存在的 9 个功能 ID（跳过不要重复添加）：
- poster-20 (万能推荐卡片自由版 → 种草卡)
- poster-22 (6张系列海报 → 系列图)
- poster-17 (编辑型海报 → 诗意海报)
- poster-11 (词义深度理解概念海报 → 一词一画)
- portrait-01 (人像vs物种推测 → 你像什么动物)
- avatar-02 (极简单线头像 → 线条头像)
- culture-01 (中式窗景东方海报 → 国风海报)
- poster-16 (商业Banner → 广告图)
- poster-08 (城市天气日签 → 天气日签)
- poster-02 (How-to信息图 → 教程图)

### Prompt 源文件路径（绝对路径）：
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/poster.md (23条)
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/portrait.md (5条)
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/culture.md (3条)  
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/ip_sticker.md (5条)
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/illustration.md (3条)
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/logo.md (1条)
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/avatar.md (2条，avatar-02 已存在)
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/ecommerce.md (1条)
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/infographic.md (1条)
- /Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/science-card.md (1条)

### 现有 functions.ts 文件路径：
/Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/h5/src/data/functions.ts

### 参考 PROMPT_GUIDE.md（包含每条 prompt 的能力分析）：
/Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/prompts/PROMPT_GUIDE.md

## 处理逻辑

1. 读取所有 prompt markdown 文件
2. 每个文件中，找到所有 `## N. 标题` 开头的段落，每个段落包含一个 ``` 代码块里的 prompt 文本
3. 为每条 prompt 生成一个 FunctionConfig 对象，规则如下：

### ID 命名规则：
- poster.md 里的第 N 条 → `poster-{两位数编号}`，如 poster-01
- portrait.md 里的第 N 条 → `portrait-{两位数编号}`
- culture.md → `culture-{两位数编号}`
- ip_sticker.md → `ip-sticker-{两位数编号}`
- illustration.md → `illustration-{两位数编号}`
- logo.md → `logo-01`
- avatar.md → `avatar-{两位数编号}`
- ecommerce.md → `ecommerce-01`
- infographic.md → `infographic-01`
- science-card.md → `science-card-01`

### 产品名命名规则（name 字段）：
用简短的中文产品名，2-5 个字，要让普通用户一眼看懂。参考已有的风格：
- "种草卡"、"系列图"、"诗意海报"、"一词一画"、"你像什么动物"、"线条头像"

### category 判断规则：
- 需要上传照片才能用的 → 'photo'
- 纯文字输入的 → 'text'
- 商业/专业场景的（电商、广告、Logo）→ 'pro'

### inputs 字段生成规则：
- 读 prompt 文本末尾的"用户输入区"/"用户输入"部分，识别有哪些字段
- 每个字段判断类型：
  - 需要上传图片的 → type: 'photo'
  - 有明确选项（如风格选择）的 → type: 'select'，并列出 options
  - 短文本（一个词/一个名字）→ type: 'text'
  - 长文本（描述/内容）→ type: 'textarea'
- placeholder 写一个具体的例子，让用户知道该填什么
- required: 主要输入字段为 true，附加配置为 false

### requiresImage 判断规则：
- prompt 中提到"上传照片"/"提供照片"/"提供图片"/"用户上传" → true
- 否则 → false

### canCustomizeRatio 和 ratioOptions：
- prompt 末尾有"比例："字样且没有写死值 → canCustomizeRatio: true
- 有写死值（如"比例为3:4"）→ canCustomizeRatio: false
- ratioOptions 常用值：['1:1', '3:4', '4:3', '9:16', '16:9']

### defaultRatio：
- 从 prompt 文本中提取默认比例
- 如果没有明确说明，默认 '3:4'

### estimatedSeconds：
- 简单 prompt（<200字）→ 30
- 中等 prompt（200-1000字）→ 40
- 复杂 prompt（>1000字）→ 50
- 多图输出（如16个表情包）→ 60

### promptTemplate：
- 直接从 markdown 的 ``` 代码块中提取完整 prompt 文本
- 将末尾的用户输入字段替换为 {{变量名}} 占位符
- 变量名要和 inputs 数组中的 key 对应

### cardVisuals 配置：
- 为每个新增功能在 cardVisuals 对象中添加一个条目
- gradient: 使用 Tailwind 的渐变色，每个功能的颜色要不同，要好看
- emoji: 选一个最能代表这个功能的 emoji
- accent: 选一个与 gradient 搭配的 hex 颜色

4. 将生成的所有 FunctionConfig 对象追加到 functions 数组中（在已有 9 个之后）
5. 将新的 cardVisuals 条目追加到 cardVisuals 对象中
6. 确保 TypeScript 类型正确，所有字符串用反引号包裹 prompt 模板

## 输出

直接修改文件：
/Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/h5/src/data/functions.ts

## 验收标准（必须机检）

- [ ] 文件存在：`test -f "/Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/h5/src/data/functions.ts"`
- [ ] functions 数组总数 >= 40：`grep -c "id: '" "/Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/h5/src/data/functions.ts"` >= 40
- [ ] cardVisuals 条目数 >= 40：`grep -c "gradient:" "/Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/h5/src/data/functions.ts"` >= 40
- [ ] TypeScript 编译通过：`cd "/Users/chengxiaoming/Documents/ClaudeCode/memory-work/03 Projects/🏭 小程序工厂/海报大全/h5" && npx tsc -b`（无输出 = 成功）
- [ ] 不包含已存在的 ID 重复：只有一个 poster-20、一个 poster-22 等
