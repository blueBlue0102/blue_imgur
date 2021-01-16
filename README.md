# 私人 Imgur 服務  
https://hackmd.io/@vegetableBird/HJqzn5ehw  
## 環境套件  
Node.js v14.15.1  
express v4.17.1  
formidable v1.2.2 
Joi v17.3.0  
## 功能   
### 基本需求：  
- 拖拉複製至瀏覽器就可以上傳圖片(不用登入)  
- 圖片上傳之後，各個圖片產生出一個網址  
- 把圖片網址貼在 HackMD 或其他地方上能直接顯示成一個圖片  

### 進階需求：  
- 帳號系統，必須登入才能上傳圖片，並且可以管理上傳過的圖片  

### 特殊需求：  
- Line BOT，在 Line 上丟圖片給機器人就能自動上傳圖片，機器人回傳圖片網址  
