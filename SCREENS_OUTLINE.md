# Cortex Prototype — Screens Outline v2

> v2 changes: 整合 Morpheus review 10 個決策
> 架構：**一長串主線流程 + 3 個 exception 支線**（不是分場景切割）
> 視覺：中性 layout（白底、灰邊框、標準 SaaS 元素），focus 在流程與文字

---

## 全站設計原則（新增）

### 1. 補充資訊 = dashed underline + tooltip
- 需要解釋的字/數字/名稱，底下加 `border-bottom: 1px dashed neutral-300`
- Hover / click 展開 tooltip
- 手機自動 tap 觸發
- **目的**：主畫面資訊乾淨，補充留給有意識查看的人

### 2. Nav = 右上角 hamburger menu
- 拿掉常駐的 proto-nav horizontal bar
- 右上角 hamburger icon，展開才顯示所有 screens + Exception scenarios
- **目的**：擬產品感、不當常駐 walkthrough 條

### 3. 主線 = Continue → 串接
- 每頁底部 primary CTA 直接進下一頁
- 面試 walkthrough 一路點下去
- Exception 頁面從 hamburger menu 或特定觸發點進入

### 4. 真 logo
- 已存 `assets/logos/`：Bella.webp、cmoney.svg、now.svg、today.png
- 內部面試使用，不用擔心版權

---

## 主線流程（8 screens · 情境 A 為主 + 部分 C/D 整合進主線）

```
01 Landing → 02 Media Fit Preview → 03 ChatBot (含 inline 建帳號) →
04 Full Analysis (Cortex 推薦 3 平台組合 + AI 模擬讀者 + Perception Gap + Tier + 送審) →
08 Timeline Review Status → 09 Parallel Actions →
10 Simulated Forecast → 11 First-mover offer
```

### Exception 支線（3 screens）

- **06 Sorted Confidence List**（從 02 或 04 觸發：發現低把握項目時）
- **07 Correction Feedback**（06 修正後）
- **12 Zero-match Waitlist**（從 02 觸發：分析結果 = 0 match）

---

## 01 · Landing — URL Input

**目標句**：品牌方輸入網址,零成本開始

**主要元素**：
- **標題**：「輸入品牌網址，讓 Cortex 用媒體的語言介紹你的品牌。」
- **副標**：「不是插入的廣告，是讀者會想讀完的延伸閱讀。」
- URL 輸入欄 + 「開始分析」按鈕
- **合作媒體 logo row**（真 logo）：Bella / CMoney / NOWnews / Business Today / + 11 家
- **快速分析說明**：「快速掃描 · 不動用 AI 深度分析」（暗示有進階模式，不用「免費」廉價感）

**下一步**：點「開始分析」→ 02

---

## 02 · Media Fit Preview — 12 選 4

**目標句**：Cortex 分析完成、給你首批 4 個匹配平台（先建立信任、再問更多資訊解鎖剩下）

**Page 結構**：
- **上方 Brand Profile 摘要**（可展開/收合，預設收合）
  - Header：「Cortex 對你的理解 · [+ 展開]」
  - 展開後顯示：品類、定位、TA、語氣、關鍵字（Cortex 網站分析結果）
- **主焦點**：「12 個平台正在等待你的內容」
- **4 張 Media Fit Cards**（並排 grid），每張含：
  - **媒體 logo**（真 logo）+ 名稱 + 類型
  - Fit Score（92% / 87% / 81% / 76%）
  - 標題「該媒體近期 native content 範例」→ 用 **dashed underline** 標記、hover tooltip 說明「這不是為你生成、是該媒體本來就在寫的類似文章、證明有機會自然嵌入」
  - Fit drivers（受眾重疊 XX%、語氣、CTR）→ 每個 driver 有 **dashed underline**，hover tooltip 顯示估算方式
    - 受眾重疊：Cortex 內部 audience overlap 分析
    - 語氣相符：AI embedding 相似度比對
    - CTR 高於均值：Cortex 系統歷史數據（v1 用產業 benchmark）
  - **預估 CPL** → dashed underline，hover tooltip：「基於該媒體 CPM × 品類轉換率、加入 fit score 加權」
  - **「查看細節」按鈕**（不是「加入方案」）→ 點開 modal 顯示更多資訊，不進入決策 flow
- **Unlock band**：「解鎖剩下 8 個平台前，Cortex 需要更了解你的品牌 · [開始 5 題訪談 →]」

**下一步**：點「開始 5 題訪談」→ 03

---

## 03 · ChatBot 5 題訪談

**目標句**：用訪談換擴展、5 題後解鎖完整名單 + 建帳號

**Page 結構**：
- **左側 Brand Profile + Media Fit 縮圖清單**（他們現有設計）
  - Brand Profile 摘要（Cortex 目前的理解）
  - Media Fit 縮圖清單（4 亮 + 8 霧化，讓用戶知道訪談是為了什麼）
  - 訪談進度 5 題
- **右側 Chat window**（他們現有設計）
  - AI 助理主動對話
  - 進度條 Q2/5
  - **Quick reply chips**（動態滾動式調整）
    - 答第 1 題「品牌知名度 + lead」→ 第 2 題 chips 變成 TA 相關
    - 答第 2 題「30+ 女性」→ 第 3 題 chips 變成健康相關
    - 技術：JS 預寫 3 條分支，面試時 walkthrough 這個動態切換
  - 文字輸入 + 語音輸入 button
  - **第 5 題答完 → 建帳號 inline**
    - Chat window 出現「留 email 讓我記住你的需求（免密碼、magic link 登入）」
    - 用戶輸入 email → 觸發 magic link 模擬 → 進入 04

**下一步**：訪談完成 + 建帳號 → 04

---

## 04 · Full Analysis — Cortex 推薦的投資組合

**目標句**：訪談完成，Cortex 幫你組了首發投資組合、選 tier 送審

**核心設計**：**不是給用戶勾選 12 個平台，是給 Cortex 推薦的 3 平台組合 + 一鍵送審**
- 避免用戶全選導致成本失控
- Framing：「投資組合建議」而非「選項清單」
- 硬規則：單次送審上限 3 個
- 底下小字：「Cortex 首次建議 1-3 個平台，累積成效後再擴大 · 想調整組合？→」
- 「調整組合」按鈕存在但不做展開互動（面試口頭補：「這裡點開會有完整清單、加減有成本告知」）

**Page 結構**：

**Section A - Cortex 推薦組合**
- Header：「Cortex 為你組了首發投資組合 · 3 個平台」
- 3 張 Media Fit Cards（Bella / CMoney / NOWnews 前 3 高 fit score）
  - 每張已 pre-selected（打勾狀態，強調「這是 Cortex 建議」）
  - 顯示：logo、fit score、預估月 lead 區間、預估月花費
- 總計：「投資組合總覽 · 預估月 lead 60-80 · 預估月花費 $XX-YY」
- 「調整組合 →」次要 button（不展開互動）

**Section B - AI 模擬讀者（aha moment）**
- 3 個 persona 卡片（小資族、專業人士、家庭決策者）
- 每個 persona 顯示「他讀完你的網站會說什麼」引言式呈現
- 每個 persona 對應 fit 分數

**Section C - Brand Perception Gap**
- 「你以為你的品牌是」vs「AI 讀出來的品牌是」對比
- 2-3 個關鍵字對比（例：你以為「Premium」→ 讀者感受「功能導向」）

**Section D - Tier 選擇 + 送審**
- Basic tier 卡片
  - 明顯置入 · 有 Sponsored label
  - CPL 單價低
  - 「適合 volume-driven 品牌先測試需求」
- Premium tier 卡片
  - AI 轉譯為平台原生風格
  - CPL 單價高
  - 「適合 quality-driven 品牌追求內容可信度」
- 兩 tier 都顯示：預估月 lead、預估總花費（依 tier 不同計算）
- CTA「生成第一則 AI Answer 送審」

**下一步**：選 tier + 送審 → 08

---

## 08 · Timeline Review Status

**目標句**：等待期間、狀態始終可見、下一步明確

**主要元素**：
- 大頭 Timeline 三段式：
  - **Now**：Mlytics 正在審核 claim accuracy 和 media fit
  - **Waiting**：預計 1-2 個工作天
  - **Next**：你會收到 approval / edit request / publish-ready confirmation
- 送審資料摘要（3 個平台 × 各一則 AI Answer 的媒體 + 內容摘要）
- 「送審時間 · 預計完成時間」時間戳
- Contact us button

**下一步**：Continue → 09（進入等待期）

---

## 09 · Parallel Actions Available

**目標句**：等待期不阻塞、繼續完善其他設定

**主要元素**：
- 頂部橫向 banner：「你的第一批 AI Answer 正在審核 · [連結到 08]」
- 主內容區：等待期可做的事清單
  - 設定 billing contact（收發票用）
  - 定義 qualified lead 條件
  - 指定 review owner
  - 補充品牌資料（讓下一批 AI Answer 更準）
- 每項顯示：完成度 checkmark 或「未完成」

**下一步**：Continue → 10

---

## 10 · Simulated Forecast + Category Benchmark

**目標句**：雖然沒歷史數據,但可以看到預估效果

**主要元素**：
- Header：「Cortex 是新產品,尚無歷史成效曲線 · 我們用這三個方式給你估算」

**Section A - Simulated Forecast**
- 基於當前 media fit 分數的 lead 預估
- 顯示區間（例：「每週預估 12-20 leads」）
- 明講「這是模型預測、非實測」

**Section B - Category Benchmark**
- 同品類品牌在類似媒體的公開表現區間
- 用產業 baseline 數據
- 顯示「你的品牌在 category 中的相對位置」

**Section C - Pre-launch Quality Score**
- Cortex 對你這批 AI Answer 的品質評分
- 從送審前 → 送審後的評分變化趨勢

**下一步**：Continue → 11

---

## 11 · First-mover 品牌權益

**目標句**：把「產品新」翻轉成「first-mover 稀缺獨家」

**主要元素**：
- Hero：「你會成為 first-mover 案例,享有 first-mover 品牌權益」
- 3 個權益卡片：
  - **優先版位**：合作媒體優先分配、獲得該 vertical 首發位置
  - **CPL 前 3 個月折扣**：早鳥定價、鎖定優惠期
  - **案例研究掛名合作**：Cortex 官方案例研究、跨平台品牌曝光
- 底部：接受 first-mover offer CTA / 略過

**下一步**：主線結束（回到 dashboard 或 walkthrough end）

---

## Exception 支線

### 06 · Sorted Confidence List（獨立展示）

**觸發**：從 02 頁「Cortex 對你的理解」展開時，若有低把握項目 → 進入這頁專門處理；或從 hamburger menu 直接看

**目標句**：讓 AI 不確定的地方可見、可修正

**主要元素**：
- Header：「Cortex 對你的品牌有以下理解 · 依把握度排序」
- 排序列表，每項包含：
  - Confidence 標籤（高把握 / 中 / 待確認）
  - 理解內容（例：「品牌定位：Premium 保健食品」）
  - **Hover 顯示來源**（擷取自網站哪一段文字、URL、更新時間）
  - 若低把握：「需確認」badge + 三選一或空白填寫
- 排序：最高把握在上、待確認在下

**下一步**：修正完 → 07

---

### 07 · Correction Feedback

**觸發**：從 06 修正後

**目標句**：修正後即時反饋,讓品牌成為 AI 的老師

**主要元素**：
- 剛才修正的項目變成綠色 checkmark
- 系統訊息：「已學習你的偏好 · 這個規則會套用到後續分析」
- 修正前 → 修正後對比呈現
- 「這次修正會影響後續 X 個判斷」提示

**下一步**：Return to 02 or 04

---

### 12 · Zero-match Waitlist

**觸發**：從 02 頁面顯示 0 個匹配平台時進入

**目標句**：0 match 不是失敗、是稀缺（waitlist framing）

**主要元素**：
- Hero：「你的品牌類型稀有 · Cortex 正在為你尋找合適平台」
- Section A - Waitlist status
  - 預計等待時間
  - 目前排隊位置
- Section B - Gap Analysis（自助改善）
  - Cortex 分析你網站的建議
  - 「調整這 3 件事、平台匹配度可提升」
- Section C - Educational Path
  - 「這類品牌通常適合 X 類媒體（未來會拓展）」

**下一步**：留 email 進 waitlist / 看 Gap Analysis 建議 / 回首頁

---

## Index 頁重新設計

Index 頁分兩區：

**主線流程**（8 screens with Continue → chain）
- 01 Landing
- 02 Media Fit Preview
- 03 ChatBot 訪談
- 04 Full Analysis (Cortex 推薦組合)
- 08 Timeline Review
- 09 Parallel Actions
- 10 Simulated Forecast
- 11 First-mover offer

**Exception 支線**（3 screens）
- 06 Sorted Confidence List
- 07 Correction Feedback
- 12 Zero-match Waitlist

---

## Nav = Right Hamburger Menu

- 拿掉常駐 proto-nav horizontal bar
- 右上角 hamburger icon
- 展開 drawer 顯示：
  - **主線流程** section：01-11 with active state
  - **Exception 支線** section：06/07/12
  - **回目錄** link

---

## 中性樣式檔案

- 現有 hallmark 版 01-03 → 覆寫為中性樣式
- 建 `styles-neutral.css` 或直接更新 `styles.css`
- 樣式規則：
  - 白底、灰邊框 `1px solid var(--color-neutral-200)`
  - Card：白底、圓角 `--radius-md`、`--shadow-sm`
  - Button：primary 藍實心 / secondary 白底藍字灰邊框
  - Form input：標準 padding、focus border 藍
  - Typography：Plus Jakarta Sans、標準 size scale
- 目標：讓 Morpheus review 時 focus 在流程 / 文案，不被視覺分心

---

## 實作順序（下一步）

1. 更新 `styles.css` 中性版本
2. 覆寫 01-03（現有 hallmark 版）為中性 + 加新元素（Brand Profile 摘要、dashed underline、chips 動態、inline 建帳號）
3. 建立 04（Cortex 推薦組合 + AI 模擬 + Tier + 送審）
4. 建立 08-11 主線後半
5. 建立 06 / 07 / 12 支線
6. 更新 index.html 分兩區
7. 建立 hamburger menu 共用元件
8. 串接 Continue → chain
9. Push → Cloudflare Pages auto-deploy

---

## Review 重點

Focus：
1. 這份 v2 大綱有沒有 miss 你的 !! 修正？
2. 主線串接順序合理嗎？
3. 04 的「Cortex 推薦 3 平台組合」framing 你 buy 嗎？
4. Exception 3 支線的觸發位置合理嗎？

Review 通過我開始實作。

---

*文件版本*：v2
*對應 assignment spec*：v2.2
*對應 review*：Morpheus 10 個 !! 決策
*建立時間*：2026-08-06
