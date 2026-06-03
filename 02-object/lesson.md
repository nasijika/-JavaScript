# บทที่ 2 — Object (ออบเจกต์)

## Object คืออะไร?
ถ้า Array คือ "กล่องเรียงกันตามลำดับ" → Object คือ "กล่องที่มีป้ายชื่อกำกับแต่ละช่อง"
เราเก็บข้อมูลเป็นคู่ `key: value`

```js
const user = {
  name: "Som",      // key คือ name, value คือ "Som"
  age: 25,
  isActive: true,
};
```

## อ่านค่าจาก object
```js
user.name;        // "Som"   (แบบจุด — ใช้บ่อยสุด)
user["age"];      // 25      (แบบวงเล็บ — ใช้ตอน key เป็นตัวแปร)
```

## แก้ค่า / เพิ่ม key ใหม่
```js
user.age = 26;          // แก้ค่าเดิม
user.email = "a@b.com"; // เพิ่ม key ใหม่
```

## สร้าง object ใหม่จากฟังก์ชัน
```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
makeUser("Som", 25);   // { name: "Som", age: 25 }
```

## เช็คเงื่อนไขจากค่าใน object
```js
function isAdult(user) {
  return user.age >= 18;   // คืน true/false
}
```

---

## 🧩 ของจริงในงาน automation
ข้อมูลที่ส่งให้ API หรือที่ได้กลับมา มักเป็น object ทั้งนั้น เช่น:
```js
const response = {
  status: 200,
  data: { id: 1, username: "tester" },
};

response.status;          // 200
response.data.username;   // "tester"  (object ซ้อน object — ไล่จุดเข้าไป)
```

---

## ⚠️ จุดที่มือใหม่พลาดบ่อย
- พิมพ์ key ผิด เช่น `user.nmae` → ได้ `undefined` (ไม่ error แต่ค่าหาย)
- สับสนระหว่าง `.` (เข้าถึง key) กับการเรียกฟังก์ชัน

ไปเปิด `exercises.js` ได้เลย!
