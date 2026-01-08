# GitHub Pages 部署指南

## 解決 404 問題的步驟

### 1. 確認倉庫名稱
- 如果您的 GitHub 倉庫名稱是 `burger-oclock`，則 base path 為 `/burger-oclock/`
- 如果您的倉庫名稱不同，請修改 `vite.config.js` 中的 `base` 值

### 2. 修改 base path（如果需要）
編輯 `vite.config.js`：
```javascript
base: '/your-repository-name/',  // 改為您的倉庫名稱
```

同時修改 `public/404.html` 中的 `basePath` 變數：
```javascript
var basePath = '/your-repository-name';  // 改為您的倉庫名稱
```

### 3. GitHub 倉庫設置
1. 前往 **Settings** > **Pages**
2. **Source** 選擇 **Deploy from a branch**
3. **Branch** 選擇 `gh-pages`
4. **Folder** 選擇 `/ (root)`
5. 點擊 **Save**

### 4. 部署
推送代碼到 `main` 分支：
```bash
git add .
git commit -m "Fix 404 issue"
git push origin main
```

### 5. 檢查部署
- 前往 **Actions** 標籤頁查看部署狀態
- 等待部署完成後，訪問：`https://[您的用戶名].github.io/burger-oclock/`

## 常見問題

### 問題：仍然顯示 404
**解決方案：**
1. 確認 GitHub Pages 設置中選擇的是 `gh-pages` 分支
2. 確認 `vite.config.js` 中的 `base` 路徑與倉庫名稱一致
3. 清除瀏覽器緩存後重新訪問

### 問題：資源文件（CSS/JS）無法載入
**解決方案：**
- 確認 `vite.config.js` 中的 `base` 路徑正確
- 重新構建並部署

### 問題：路由無法正常工作
**解決方案：**
- 確認 `public/404.html` 文件存在且內容正確
- 確認 `.nojekyll` 文件存在於 `public` 目錄

## 驗證清單

- [ ] `vite.config.js` 中的 `base` 路徑正確
- [ ] `public/404.html` 存在且 `basePath` 正確
- [ ] `public/.nojekyll` 文件存在
- [ ] GitHub Pages 設置中選擇了 `gh-pages` 分支
- [ ] 部署 workflow 成功執行
- [ ] 網站可以正常訪問
