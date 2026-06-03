// ============================================
// บทที่ 4 — Async / Await / Promise
// เขียนคำตอบตรงที่เขียนว่า  👉 เขียนโค้ดตรงนี้
// อย่าลืม async และ await !
// ============================================

// ---------- ของให้มาใช้ (ห้ามแก้) ----------
// fakeApi(name): จำลองการเรียก API, รอ 50ms แล้วคืน "Hello, <name>"
function fakeApi(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, " + name), 50);
  });
}
// fakeError(): จำลอง API ที่ล้มเหลวเสมอ
function fakeError() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("API ล่ม")), 50);
  });
}
// -------------------------------------------

// โจทย์ 1: เขียนฟังก์ชัน delay(ms) ที่คืน Promise ซึ่ง resolve หลังเวลา ms
// (ใช้ในการ "รอ" — copy ท่าจาก lesson.md ได้)
// ตัวอย่างการใช้: await delay(100)  จะหยุดรอ 100ms
function delay(ms) {
  // 👉 เขียนโค้ดตรงนี้
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function demo() {
  console.log("เริ่ม");
  await delay(1000); 
  console.log("ผ่านไป 1 วิ");
}

// โจทย์ 2: เรียก fakeApi แล้วคืนผลลัพธ์ (อย่าลืม await!)
// ตัวอย่าง: await greet("Som") ต้องได้ "Hello, Som"
async function greet(name) {
  // 👉 เขียนโค้ดตรงนี้  (ใช้ await fakeApi(name))
  const results = await fakeApi(name);
  return results;
}

// โจทย์ 3: เรียก fakeApi กับ 2 ชื่อ "พร้อมกัน" แล้วคืนผลเป็น array
// ตัวอย่าง: await greetBoth("Som", "Ann") ต้องได้ ["Hello, Som", "Hello, Ann"]
// 💡 ใช้ Promise.all([...])
async function greetBoth(name1, name2) {
  // 👉 เขียนโค้ดตรงนี้
  const results = await Promise.all([fakeApi(name1), fakeApi(name2)]);
  return results;
}

// โจทย์ 4: เรียก fakeError แต่ถ้าล้มเหลว ให้คืนข้อความ "failed" แทนการ error
// ตัวอย่าง: await safeCall() ต้องได้ "failed"
// 💡 ใช้ try / catch
async function safeCall() {
  // 👉 เขียนโค้ดตรงนี้
  try {
    return await fakeError();
  }
  catch (error) {
    return "failed";
  }
}

// โจทย์ 5: เขียน async function ที่
//   1) รอ delay 30ms ก่อน
//   2) แล้วค่อยเรียก fakeApi(name)
//   3) คืนผลลัพธ์
// ตัวอย่าง: await waitThenGreet("Kit") ต้องได้ "Hello, Kit"
async function waitThenGreet(name) {
  // 👉 เขียนโค้ดตรงนี้  (await delay ก่อน แล้วค่อย await fakeApi)
  await delay (30);
  const results = await fakeApi(name);
  return results;
}

// ⬇️ ห้ามแก้
module.exports = { delay, greet, greetBoth, safeCall, waitThenGreet };
