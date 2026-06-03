# บทที่ 4 — Async / Await / Promise ⭐ (สำคัญสุดสำหรับ automation)

## ทำไมต้องมีเรื่องนี้?
บางงานในโลกจริง **ไม่เสร็จทันที** ต้องรอ เช่น:
- เรียก API แล้วรอ server ตอบ
- รอหน้าเว็บโหลด
- รอ element โผล่ขึ้นมา (Playwright/Cypress ทำเรื่องนี้ตลอด!)

JavaScript ไม่ยอมหยุดรอเฉยๆ มันจะทำงานต่อ → เลยต้องมีเครื่องมือบอกว่า "อันนี้รอนะ"

---

## Promise คืออะไร?
Promise = "สัญญา" ว่าจะมีค่าให้ **ในอนาคต** (อาจสำเร็จหรือล้มเหลว)

```js
// ฟังก์ชันที่ return Promise = ฟังก์ชัน async
async function getData() {
  return 42;   // จริงๆ แล้วคืน Promise ที่ห่อ 42 ไว้
}
```

## `await` = "รอให้เสร็จก่อน แล้วค่อยเอาค่าออกมา"
```js
async function main() {
  const value = await getData();   // รอจน getData เสร็จ แล้ว value = 42
  console.log(value);              // 42
}
```
> ⚠️ ใช้ `await` ได้ **เฉพาะในฟังก์ชันที่เป็น `async`** เท่านั้น

---

## เทียบ "ไม่ await" vs "await"
```js
const p = getData();          // p คือ Promise (ยังไม่ใช่ค่า!) -> Promise { 42 }
const v = await getData();    // v คือค่าจริง -> 42
```
นี่คือจุดที่มือใหม่งงสุด: **ลืม await แล้วได้ Promise มาแทนค่าจริง**

---

## หน่วงเวลา (delay) — ท่ามาตรฐาน
```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  console.log("เริ่ม");
  await delay(1000);     // รอ 1 วินาที
  console.log("ผ่านไป 1 วิ");
}
```

## รอหลายอย่างพร้อมกัน — `Promise.all`
```js
const results = await Promise.all([getA(), getB(), getC()]);
// รอให้ครบทั้ง 3 อันแล้วได้ผลเป็น array: [ค่าA, ค่าB, ค่าC]
```

## ดักerror — `try / catch`
```js
async function safe() {
  try {
    const data = await mightFail();
    return data;
  } catch (error) {
    return "เกิดข้อผิดพลาด";   // ถ้า await ข้างบนล้มเหลว จะเข้ามาตรงนี้
  }
}
```

---

## ⚠️ จุดที่มือใหม่พลาดบ่อย (อ่านให้ดี!)
1. **ลืม `await`** → ได้ `Promise { ... }` แทนค่าจริง
2. ใช้ `await` ในฟังก์ชันที่ไม่ได้เป็น `async` → error
3. ลืม `return` ในฟังก์ชัน async

ไปลุย `exercises.js` — ข้อนี้ยากสุด ค่อยๆ ทำนะ 💪
