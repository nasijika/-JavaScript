# บทที่ 1 — Array (อาเรย์)

## Array คืออะไร?
Array คือ "กล่องเรียงกัน" ที่เก็บค่าหลายตัวไว้ในตัวแปรเดียว แต่ละช่องมีลำดับ (index) เริ่มจาก **0**

```js
const fruits = ["apple", "banana", "cherry"];
//                 0         1         2      <- index

fruits[0];        // "apple"
fruits.length;    // 3  (จำนวนสมาชิก)
```

## วน loop ดูทุกตัว
```js
const nums = [10, 20, 30];

for (const n of nums) {
  console.log(n);   // 10, 20, 30
}
```

## ท่าที่ automation tester ใช้บ่อยมาก 🔥

### 1. `.map()` — แปลงทุกตัวให้เป็นค่าใหม่ (ได้ array ใหม่ขนาดเท่าเดิม)
```js
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);   // [2, 4, 6]
```

### 2. `.filter()` — คัดเฉพาะตัวที่เข้าเงื่อนไข (ได้ array ที่อาจสั้นลง)
```js
const nums = [1, 2, 3, 4];
const even = nums.filter((n) => n % 2 === 0);   // [2, 4]
```
> `n % 2 === 0` แปลว่า "หารด้วย 2 แล้วเหลือเศษ 0" = เลขคู่

### 3. `.reduce()` — ยุบทุกตัวเหลือค่าเดียว (เช่น ผลรวม)
```js
const nums = [1, 2, 3];
const sum = nums.reduce((total, n) => total + n, 0);   // 6
//                       ^ค่าสะสม  ^ตัวปัจจุบัน      ^ค่าเริ่มต้น
```

### 4. `.includes()` — เช็คว่ามีค่านี้ไหม (true/false)
```js
[1, 2, 3].includes(2);   // true
```

---

## ⚠️ จุดที่มือใหม่พลาดบ่อย
- **ลืม `return`** — ฟังก์ชันที่ไม่ return จะคืน `undefined`
- ใช้ `=` (กำหนดค่า) แทน `===` (เปรียบเทียบ) ในเงื่อนไข
- index เริ่มที่ 0 ไม่ใช่ 1

ไปเปิด `exercises.js` แล้วลุยกันเลย!
