# 数学建模协会招新网站

面向高校数学建模协会的宣传与招新页面，使用 Next.js、React、TypeScript 与 Tailwind CSS。页面按介绍、能力成长、赛事、部门与加入入口组织内容，并提供滚动展示、计数动画和弹窗交互。

## 建议阅读

- 页面组织：`app/page.tsx`。
- 数学视觉：`components/math-visuals.tsx`。
- 成长与竞赛模块：`components/path-section.tsx`、`components/competitions-section.tsx`。
- 动画与交互：`components/reveal.tsx`、`components/count-up.tsx`、`components/join-section.tsx`。
- 页面资源检查：`scripts/audit-page-weight.mjs`。

## 开发

安装相应 Node.js 与 pnpm 后运行 `pnpm install --frozen-lockfile`、`pnpm dev`。项目以 v0 生成的 Next.js 基础开始迭代，依赖与版本见 `package.json`。

## 展示范围

真实招新群号、二维码和原始海报已移除或替换为占位图。本仓库展示页面设计与交互代码，不提供实际招生报名渠道。公开副本未重新进行完整构建与上线验收。
