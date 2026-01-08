export const restaurantData = {
  brand: {
    name: "Burger O'clock",
    slogan: ["人生就是吃堡睡，睡飽吃", "What time is it? It's Burger O'clock!"],
    story: "貼心老闆是個在台灣過美國時間的人，更因為老闆是道地美國人的朋友，因此對於美式食物有著語言都無法表達的熱愛。由於天母的宵夜選擇不多，在一次飢寒交迫下腦中出現了一個想法：『那就賭上男子漢的性命與榮耀，開一間深夜美式漢堡店吧！』",
    mission: "美式的精神，日式的態度，台灣小吃的價格。"
  },
  menu: {
    BEEF_BeefBurgers: [
      { name: "經典原味漢堡", price: 100, ingredients: "漢堡肉、生菜、牛番茄、洋蔥、酸黃瓜" },
      { name: "熔岩起司漢堡", price: 149, ingredients: "漢堡肉、美國切達起司醬、生菜、牛番茄、洋蔥、酸黃瓜" },
      { name: "起司雙重奏", price: 179, is_best_seller: true },
      { name: "花生醬培根起司堡", price: 199, is_best_seller: true },
      { name: "招牌三層起司堡", price: 369, ingredients: "漢堡肉x3、美國切達起司醬、瑞士起司、馬茲瑞拉起司、培根x3" },
      { name: "義大利松露起司漢堡", price: 249 }
    ],
    CHICKEN_Veg: [
      { name: "素食堡", price: 130, ingredients: "薯餅、烤鳳梨片、美國切達起司醬..." },
      { name: "原味雞腿堡", price: 179 },
      { name: "BBQ起司雞腿堡", price: 199, is_best_seller: true },
      { name: "辣味噴火雞腿堡", price: 219 }
    ],
    HOTDOG: [
      { name: "經典原味熱狗堡", price: 89 },
      { name: "混蛋熱狗堡", price: 169, note: "太陽蛋" },
      { name: "招牌香辣肉醬熱狗堡", price: 169, is_best_seller: true }
    ],
    FINGER_FOOD: [
      { name: "BOC特製通心粉", price: 150, is_best_seller: true },
      { name: "特醃水牛城辣雞翅", price: 170, is_best_seller: true },
      { name: "海裡的炸物拼盤", price: 390, desc: "酥炸薯條、酥炸花枝圈、酥炸魚條" }
    ],
    DRINK_DESSERT: {
      beverages: ["無糖紅茶", "可樂", "氣泡水", "精釀啤酒"],
      dessert: "每日限量甜點：冰淇淋黑糖麻糬鬆餅 ($250)",
      special: "老闆的心情 BOSS MOOD ($???)"
    }
  },
  rules: {
    steps: ["請至櫃檯點餐", "自取餐具水杯及醬料", "放鬆咀嚼肌，放感情享用餐點", "如果沒吃飽，請跳回第一步步驟重來一次", "離開前幫個忙，拿取餐盤至回收台"],
    notes: ["禁止攜帶外食", "低消新台幣100元", "嘔吐需酌收清潔費2000元", "僅收現金"]
  },
  footer: {
    address: "台北市士林區中山北路七段36號",
    google_maps: "https://maps.app.goo.gl/YourMapLink",
    business_hours: "打烊時間與最後點餐時間請參考官方IG",
    contact: { phone: "0900-777-093", ig: "burgeroclocktaipei" }
  }
}
