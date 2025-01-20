// 題目 - 樂呵呵健身房
// 樂呵呵健身房目前有 8 位會員

const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

// 第一階段：新增課程購買記錄（優惠定價）
// 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：

// 購買數量 / 單價 (每堂課)

// 1-10 堂 / 1500 元
// 11-20 堂 / 1300 元
// 21 堂以上 / 1100 元

function addPurchaseRecord(member, courses) {
    if ((!member || typeof member !== 'string') || (!courses || typeof courses !== 'number')){
        console.log('輸入錯誤，請輸入有效的會員名稱和課程數量');
        return;
    }
    let purchaseRecords = [];
    const currentRecord = {
        member,
        courses,
        totalprice: 0
    }
    if (courses >= 1 && courses <= 10) {
        currentRecord.totalprice = 1500 * courses;
    }
     else if (courses > 10 && courses <= 20) {
        currentRecord.totalprice = 1300 * courses;
    }
     else {
        currentRecord.totalprice = 1100 * courses;
    }
    purchaseRecords.push(currentRecord);
    console.log(`新增購買記錄成功！會員 ${member} 購買 ${courses} 堂課，總金額為 ${currentRecord.totalprice} 元`);
}
addPurchaseRecord("Alice", 4); //>> 印出 console.log 文字為 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
addPurchaseRecord("Bob", 12); //>> 印出 console.log 文字為 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
addPurchaseRecord("Charlie", 25); //>> 印出 console.log 文字為 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
addPurchaseRecord("Hannah", 50); //>> 印出 console.log 文字為 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
addPurchaseRecord("名稱", "課程數量"); //>> 印出 console.log 文字為 輸入錯誤，請輸入有效的會員名稱和課程數量。