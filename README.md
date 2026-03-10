# OFFICIAL_WEBSITE_FRONTEND

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

- [ℹ️ 關於（About）](#-%E9%97%9C%E6%96%BCabout)
  - [📦 技術架構（Tech Stack）](#-%E6%8A%80%E8%A1%93%E6%9E%B6%E6%A7%8Btech-stack)
  - [📁 專案結構說明](#-%E5%B0%88%E6%A1%88%E7%B5%90%E6%A7%8B%E8%AA%AA%E6%98%8E)
- [👩‍💻 開發 👨‍💻 (Development)](#-%E9%96%8B%E7%99%BC--development)
  - [版本需求 (Version Requirements)](#%E7%89%88%E6%9C%AC%E9%9C%80%E6%B1%82-version-requirements)
  - [前置作業 (Pre-Install)](#%E5%89%8D%E7%BD%AE%E4%BD%9C%E6%A5%AD-pre-install)
  - [設置開發環境 (Setup Development Environment)](#%E8%A8%AD%E7%BD%AE%E9%96%8B%E7%99%BC%E7%92%B0%E5%A2%83-setup-development-environment)
  - [🚀 啟動開發伺服器（Launch Local Dev Server）](#-%E5%95%9F%E5%8B%95%E9%96%8B%E7%99%BC%E4%BC%BA%E6%9C%8D%E5%99%A8launch-local-dev-server)
  - [🏗️ 打包建置 (Build)](#-%E6%89%93%E5%8C%85%E5%BB%BA%E7%BD%AE-build)
  - [👀 預覽建置結果（Preview）](#-%E9%A0%90%E8%A6%BD%E5%BB%BA%E7%BD%AE%E7%B5%90%E6%9E%9Cpreview)
- [程式碼風格 (Coding Style)](#%E7%A8%8B%E5%BC%8F%E7%A2%BC%E9%A2%A8%E6%A0%BC-coding-style)
  - [🧹 程式碼規範（Lint & Format）](#-%E7%A8%8B%E5%BC%8F%E7%A2%BC%E8%A6%8F%E7%AF%84lint--format)
  - [🌱 Git 開發流程（Git Flow）](#-git-%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8Bgit-flow)
  - [⚠️ 開發注意事項](#-%E9%96%8B%E7%99%BC%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85)
  - [📄 備註](#-%E5%82%99%E8%A8%BB)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## ℹ️ 關於（About）

公司官方網站前端專案，採用 **React + Vite** 架構，負責官方網站的 UI 與前端互動邏輯。  
本專案為前後端分離架構，前端獨立開發與部署。

---

### 📦 技術架構（Tech Stack）

- **Framework**：React
- **Build Tool**：Vite
- **Language**：JavaScript（ES Module）
- **Lint**：ESLint（Flat Config）
- **Formatter**：Prettier
- **Version Control**：Git（Git Flow）
- **Package Manager**：npm

---

### 📁 專案結構說明

```txt
official_website_frontend/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ hooks/
│  ├─ services/
│  └─ main.jsx
├─ eslint.config.js
├─ vite.config.js
├─ index.html
├─ package.json
└─ README.md
```

---

## 👩‍💻 開發 👨‍💻 (Development)

### 版本需求 (Version Requirements)

- 最低需求版本，使用 `check-node-version` 檢查

```bash
$ check-node-version --print
yarn: not found
pnpm: not found
node: 16.13.0
npm: 8.1.0
npx: 8.1.0
```

- 考慮 `vite`  
  <https://vite.dev/guide/#scaffolding-your-first-vite-project>

### 前置作業 (Pre-Install)

1. 參考版本需求
1. (選用)安裝 `nvm`  
   <https://github.com/nvm-sh/nvm>
1. 安裝 `node`  
   <https://nodejs.org/en/download>

### 設置開發環境 (Setup Development Environment)

安裝套件

```bash
npm install
```

### 🚀 啟動開發伺服器（Launch Local Dev Server）

啟動本地開發伺服器並在瀏覽器打開頁面

```bash
npm run dev
```

### 🏗️ 打包建置 (Build)

```bash
npm run build
```

打包後會輸出到預設路徑：  
<https://vite.dev/config/build-options#build-outdir>

### 👀 預覽建置結果（Preview）

```bash
npm run preview
```

---

## 程式碼風格 (Coding Style)

### 🧹 程式碼規範（Lint & Format）

ESLint 檢查

```bash
npm run lint
```

- 請在 提交程式碼前確保 lint 無 error
- ESLint 規則統一管理於 `eslint.config.js`
- Prettier 格式化
- 專案建議搭配 VSCode + Prettier Extension
- 儲存時會自動格式化程式碼（format on save）

---

### 🌱 Git 開發流程（Git Flow）

本專案使用的 Git Flow：

main # 正式上線分支
dev # 開發整合分支
feat/_ # 功能開發分支
fix/_ # Bug 修復分支

開發流程範例

```bash
git switch dev
git switch -c feat/homepage
```

完成後：

```bash
git switch dev
git merge feat/homepage
```

❗ 請勿直接在 `main` 分支進行開發

---

### ⚠️ 開發注意事項

- 所有新功能請從 dev 開分支
- 提交前請確認：
  - npm run lint 無錯誤
  - 功能可正常啟動與操作
- 共用元件請放置於 `src/components`
- API 請集中於 `src/services` 管理，避免散落於頁面中

---

### 📄 備註

-
