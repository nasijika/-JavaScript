// ============================================
// บทที่ 2 — Object
// เขียนคำตอบตรงที่เขียนว่า  👉 เขียนโค้ดตรงนี้
// ============================================

// โจทย์ 1: สร้าง object user จากชื่อและอายุ
// ตัวอย่าง: makeUser("Som", 25) ต้องได้ { name: "Som", age: 25 }
function makeUser(name, age) {
  // 👉 เขียนโค้ดตรงนี้
  return {
    name: name,
    age: age,
  };
}


// โจทย์ 2: รับ object user คืนชื่อเต็ม (firstName + เว้นวรรค + lastName)
// ตัวอย่าง: getFullName({ firstName: "Som", lastName: "Chai" }) ต้องได้ "Som Chai"
function getFullName(user) {
  // 👉 เขียนโค้ดตรงนี้
  return user.firstName + " " + user.lastName;
  };


// โจทย์ 3: รับ object user คืน true ถ้าอายุ >= 18, ไม่งั้น false
// ตัวอย่าง: isAdult({ name: "Som", age: 20 }) ต้องได้ true
function isAdult(user) {
  // 👉 เขียนโค้ดตรงนี้
  return user.age >= 18;   // คืน true/false
}

// โจทย์ 4: รับ object user คืน object "ใหม่" ที่อายุ +1 (ฉลองวันเกิด)
//          *ห้ามแก้ object เดิม* ให้สร้างอันใหม่
// ตัวอย่าง: haveBirthday({ name: "Som", age: 25 }) ต้องได้ { name: "Som", age: 26 }
// 💡 ทริค: ใช้ { ...user, age: user.age + 1 }  (... คือ spread = ก๊อปทุก key มา)
function haveBirthday(user) {
  // 👉 เขียนโค้ดตรงนี้
  return {...user, age: user.age + 1}; //ก็อปค่าเดิมมา , ดูว่ามี age ในอันเดิมมั้ย แล้ว +1
}

// โจทย์ 5: รับ object response (มี data ซ้อนอยู่ข้างใน)
//          คืนค่า username ที่อยู่ลึกข้างใน
// ตัวอย่าง: getUsername({ status: 200, data: { username: "tester" } }) ต้องได้ "tester"
function getUsername(response) {
  // 👉 เขียนโค้ดตรงนี้
  return response.data.username;
};

// ⬇️ ห้ามแก้
module.exports = { makeUser, getFullName, isAdult, haveBirthday, getUsername };
