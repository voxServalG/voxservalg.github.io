# 站点规范

## 不可变

- 纯语义 HTML，不使用外部 CSS 文件
- 无构建工具，全部为静态 `.html`
- 所有文章文件位于一级子目录（`inverse/`、`systems/` 等）
- 文章模板：`<!DOCTYPE html>` → `<head>`（MathJax 脚本）→ `<body>` → 面包屑 → 内容 → `<hr>` + footer-nav → `</body>`
- 页脚导航由 `nav.js` 统一生成，每篇文章硬编码 `<div id="footer-nav">` + `<script src="../nav.js">`
- 导航链接以 `&nbsp;&middot;&nbsp;` 分隔
- 首页 `index.html` 为手工维护的文章目录，分 8 章

## 技术与人文文章额外约定

- 标题格式：`<title>文章名 —— 技术与人文</title>`
- 必须包含润色版本切换组件（checkbox + `raw-version` / `polished-version` 双 div + `togglePolish()` 脚本）
- 小节标题使用中文数字（一、二、三……）

## 技术文章约定

- 数学公式使用 `$...$`（行内）和 `$$...$$`（块），由 MathJax 渲染
- 标题格式：`<title>文章名 —— 分类名</title>`，分类名对应首页章节名

## 加文章的流程

1. 在对应子目录创建 `.html` 文件
2. 在 `nav.js` 对应数组插入文件名和标题
3. 在 `index.html` 对应章节添加链接
