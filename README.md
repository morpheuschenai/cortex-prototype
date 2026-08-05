# Cortex Prototype

Mlytics Cortex Senior PM take-home prototype (Morpheus Chen).

## Structure

```
/
├── index.html          # 面試 walkthrough 目錄
├── styles.css          # 全站設計系統 tokens + 共用樣式
└── screens/
    ├── 01-landing.html      # Stage 0 · URL input + social proof
    ├── 02-media-fit.html    # Stage 0 · 12 選 4 Media Fit Preview
    ├── 03-chat.html         # Stage 1 · ChatBot 5 題訪談
    └── ... (more coming)
```

## Design System

- Font: Plus Jakarta Sans + JetBrains Mono
- Primary: `#2563eb` (blue)
- Secondary / AI: `#7c3aed` (purple)
- Status: success green / warning orange / danger red
- 8-step neutral grayscale
- Source: Claude Design skeleton

## Local dev

```bash
# 直接開 index.html 即可,無 build
open index.html
```

## Deploy

Cloudflare Pages via GitHub push.

## Scenarios (v2.2 spec)

- **A** 正常流程 · Landing → Media Fit → ChatBot → 建帳號 → 完整分析 → Basic/Premium tier → 送審
- **B** AI 不確定 · Sorted Confidence List + Hover 顯示來源
- **C** 人工介入 · Timeline Now / Waiting / Next
- **D** 等待期是價值窗口 · Simulated forecast + First-mover 品牌權益
