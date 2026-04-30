# C2S 产出物追踪器

> 用 Notion 追踪 C2S Challenge 四件产物进度的模板

## 文件结构

```
c2s-tracker/
├── notion-template/          # Notion 数据库结构定义
│   ├── 01-understanding.json
│   ├── 02-kstar.json
│   ├── 03-personal-grounding.json
│   └── 04-aar.json
├── prompts/                 # AI 检查清单生成 prompt
│   └── checklist-generator.md
└── README.md
```

## 四件产物

| 产物 | 名称 | 最低标准 |
|------|------|---------|
| ① | 论文理解 | 看过产物的人能区分哪里是论文讲的、哪里是你讲的 |
| ② | KSTAR 行动方案 | 评审教师读完后能说"下学期可以试着跑一下" |
| ③ | 个人联结 | 必须有具体的"你"——专业、名字、真实生活事实 |
| ④ | AAR 复盘 | AI 不知道你这 4 天具体发生了什么 |

## 使用方法

### 1. 创建 Notion 数据库

根据 `notion-template/` 中的 JSON 定义，在 Notion 中创建对应的数据库。

### 2. 生成检查清单

使用 `prompts/checklist-generator.md` 中的 prompt，让 AI 生成质量检查清单。

### 3. 追踪进度

在 Notion 中更新每个产物的状态，完成后 commit 到本仓库。

---

*创建于：2026年4月30日*
*版本：v0.1 实验版*
