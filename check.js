// ============================================================
// ตัวตรวจการบ้าน (แบบเรียบง่าย) — ❌ ห้ามแก้ไฟล์นี้
//
//   node check.js 01     ตรวจบท 1
//   node check.js 02     ตรวจบท 2
//   node check.js 03     ตรวจบท 3
//   node check.js 04     ตรวจบท 4
//   node check.js        ตรวจทุกบท
//
// console.log อะไรในโจทย์ จะปริ้นออกมาตรงๆ เหมือนรัน node ปกติ
// ============================================================

const assert = require("node:assert");

let pass = 0;
let fail = 0;

function show(v) {
  return JSON.stringify(v);
}

// เทียบคำตอบ: ถ้าตรง = ✅ , ถ้าไม่ตรง = ❌ พร้อมบอกว่าคาดอะไร/ได้อะไร
function check(label, got, expected) {
  let ok = false;
  try {
    assert.deepStrictEqual(got, expected);
    ok = true;
  } catch (_) {
    ok = false;
  }
  if (ok) {
    console.log("  ✅ " + label);
    pass++;
  } else {
    console.log("  ❌ " + label);
    console.log("      อยากได้ : " + show(expected));
    console.log("      แต่ได้  : " + show(got));
    fail++;
  }
}

// -------------------- บท 1 : Array --------------------
function lesson01() {
  console.log("\n📘 บท 1 — Array");
  const { sumAll, findMax, onlyEven, doubleAll, countPassed } = require("./01-array/exercises");
  check("sumAll([1,2,3]) = 6", sumAll([1, 2, 3]), 6);
  check("sumAll([]) = 0", sumAll([]), 0);
  check("findMax([3,9,2]) = 9", findMax([3, 9, 2]), 9);
  check("findMax([-1,-5,-3]) = -1", findMax([-1, -5, -3]), -1);
  check("onlyEven([1,2,3,4]) = [2,4]", onlyEven([1, 2, 3, 4]), [2, 4]);
  check("doubleAll([1,2,3]) = [2,4,6]", doubleAll([1, 2, 3]), [2, 4, 6]);
  check("countPassed([40,50,80,30]) = 2", countPassed([40, 50, 80, 30]), 2);
}

// -------------------- บท 2 : Object --------------------
function lesson02() {
  console.log("\n📘 บท 2 — Object");
  const { makeUser, getFullName, isAdult, haveBirthday, getUsername } = require("./02-object/exercises");
  check('makeUser("Som",25)', makeUser("Som", 25), { name: "Som", age: 25 });
  check("getFullName = 'Som Chai'", getFullName({ firstName: "Som", lastName: "Chai" }), "Som Chai");
  check("isAdult(age 20) = true", isAdult({ name: "Som", age: 20 }), true);
  check("isAdult(age 10) = false", isAdult({ name: "Kid", age: 10 }), false);
  check("haveBirthday(25) = age 26", haveBirthday({ name: "Som", age: 25 }), { name: "Som", age: 26 });
  // เช็คว่าไม่แก้ object เดิม
  const original = { name: "Som", age: 25 };
  haveBirthday(original);
  check("haveBirthday ไม่แก้ของเดิม", original.age, 25);
  check("getUsername = 'tester'", getUsername({ status: 200, data: { username: "tester" } }), "tester");
}

// -------------------- บท 3 : Array of Objects --------------------
function lesson03() {
  console.log("\n📘 บท 3 — Array of Objects");
  const { getAllNames, findById, getActiveUsers, countActive, totalPrice } = require("./03-array-of-objects/exercises");
  check("getAllNames = ['Som','Ann']", getAllNames([{ name: "Som" }, { name: "Ann" }]), ["Som", "Ann"]);
  check("findById id=2", findById([{ id: 1, name: "Som" }, { id: 2, name: "Ann" }], 2), { id: 2, name: "Ann" });
  check("findById ไม่เจอ = undefined", findById([{ id: 1, name: "Som" }], 99), undefined);
  check(
    "getActiveUsers",
    getActiveUsers([{ name: "Som", active: true }, { name: "Ann", active: false }, { name: "Kit", active: true }]),
    [{ name: "Som", active: true }, { name: "Kit", active: true }]
  );
  check("countActive = 2", countActive([{ active: true }, { active: false }, { active: true }]), 2);
  check("totalPrice = 35", totalPrice([{ name: "A", price: 10 }, { name: "B", price: 25 }]), 35);
}

// -------------------- บท 4 : Async --------------------
async function lesson04() {
  console.log("\n📘 บท 4 — Async / Await / Promise");
  const { delay, greet, greetBoth, safeCall, waitThenGreet } = require("./04-async/exercises");

  const d = delay(20);
  check("delay คืน Promise", d instanceof Promise, true);
  if (d instanceof Promise) await d;

  check('greet("Som") = "Hello, Som"', await greet("Som"), "Hello, Som");
  check("greetBoth = 2 ผลลัพธ์", await greetBoth("Som", "Ann"), ["Hello, Som", "Hello, Ann"]);
  check('safeCall ดัก error = "failed"', await safeCall(), "failed");
  check('waitThenGreet("Kit") = "Hello, Kit"', await waitThenGreet("Kit"), "Hello, Kit");
}

// -------------------- ตัวรัน --------------------
async function main() {
  const which = process.argv[2]; // "01" / "02" / "03" / "04" / undefined

  try {
    if (!which || which === "01") lesson01();
    if (!which || which === "02") lesson02();
    if (!which || which === "03") lesson03();
    if (!which || which === "04") await lesson04();
  } catch (err) {
    console.log("\n💥 โค้ดมี error (ไม่ใช่แค่คำตอบผิด) — อ่านข้อความข้างล่าง:");
    console.log("   " + err.message);
  }

  console.log("\n────────────────────────────");
  console.log(`สรุป: ✅ ผ่าน ${pass} ข้อ   ❌ ยังไม่ผ่าน ${fail} ข้อ`);
  if (fail === 0 && pass > 0) console.log("🎉 ผ่านหมดเลย เก่งมาก!");
  console.log("");
}

main();
