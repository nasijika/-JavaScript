// ============================================
// บทที่ 3 — Array of Objects
// เขียนคำตอบตรงที่เขียนว่า  👉 เขียนโค้ดตรงนี้
// ============================================

// โจทย์ 1: รับอาเรย์ users คืนอาเรย์ของ "ชื่อ" ทุกคน
// ตัวอย่าง: getAllNames([{name:"Som"},{name:"Ann"}]) ต้องได้ ["Som", "Ann"]
function getAllNames(users) {
  // 👉 เขียนโค้ดตรงนี้  (ใช้ .map())
  const names = users.map((u) => u.name); //users.map ลูปทีละตัว
  return names;
}

// โจทย์ 2: รับอาเรย์ users และ id คืน object ของคนที่ id ตรงกัน
// ตัวอย่าง: findById([{id:1,name:"Som"},{id:2,name:"Ann"}], 2) ต้องได้ {id:2, name:"Ann"}
function findById(users, id) {
  // 👉 เขียนโค้ดตรงนี้  (ใช้ .find())
  const user = users.find((u) => u.id === 2);
  return user;
}

// โจทย์ 3: รับอาเรย์ users คืนเฉพาะคนที่ active === true
// ตัวอย่าง: getActiveUsers([{name:"Som",active:true},{name:"Ann",active:false}])
//          ต้องได้ [{name:"Som", active:true}]
function getActiveUsers(users) {
  // 👉 เขียนโค้ดตรงนี้  (ใช้ .filter())
  const user = users.filter((u) => u.active === true);
  return user;
}

// โจทย์ 4: รับอาเรย์ users คืน "จำนวน" คนที่ active
// ตัวอย่าง: countActive([{active:true},{active:false},{active:true}]) ต้องได้ 2
function countActive(users) {
  // 👉 เขียนโค้ดตรงนี้
  const user = users.filter((u) => u.active === true).length;
  return user;
}

// โจทย์ 5: รับอาเรย์ products คืนผลรวมราคา (field ชื่อ price)
// ตัวอย่าง: totalPrice([{name:"A",price:10},{name:"B",price:25}]) ต้องได้ 35
// 💡 ใช้ .reduce() หรือ loop บวกเองก็ได้
function totalPrice(products) {
  const totalPrice = products.reduce((sum , p) => sum + p.price , 0);
  return totalPrice;
  // 👉 เขียนโค้ดตรงนี้
}

// ⬇️ ห้ามแก้
module.exports = { getAllNames, findById, getActiveUsers, countActive, totalPrice };
