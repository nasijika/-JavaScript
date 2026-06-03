// ============================================
// บทที่ 1 — Array
// เขียนคำตอบตรงที่เขียนว่า  👉 เขียนโค้ดตรงนี้
// ห้ามแก้ชื่อฟังก์ชัน และอย่าลืม return
// ============================================

// โจทย์ 1: รับอาเรย์ตัวเลข คืนค่าผลบวกของทุกตัว
// ตัวอย่าง: sumAll([1, 2, 3]) ต้องได้ 6
function sumAll(numbers) {
  // 👉 เขียนโค้ดตรงนี้
  let sum = 0
  numbers.forEach(element => {
    sum = element+sum
  });
  return sum
}

// โจทย์ 2: รับอาเรย์ตัวเลข คืนค่าตัวที่มากที่สุด
// ตัวอย่าง: findMax([3, 9, 2]) ต้องได้ 9
// (เริ่มจากสมมติตัวแรกมากสุด แล้ว loop เทียบทีละตัว)
function findMax(numbers) {
  // 👉 เขียนโค้ดตรงนี้
  let max = numbers[0]; //เริ่มจากสมมติตัวแรกมากสุด
  for (let i = 1; i < numbers.length; i++) { //เอาทุกตัวเทียบกับตัวแรก
    if (numbers[i] > max) { //ได้ตัวอื่นที่มากกว่าตัวแรก
      max = numbers[i];  //ให้เอามาแทน
    }
  }
  return max;
}

// โจทย์ 3: รับอาเรย์ตัวเลข คืนเฉพาะเลขคู่
// ตัวอย่าง: onlyEven([1, 2, 3, 4]) ต้องได้ [2, 4]
function onlyEven(numbers) {
  // 👉 เขียนโค้ดตรงนี้  (ใช้ .filter())
  return numbers.filter(number => number%2 === 0);
}

// โจทย์ 4: รับอาเรย์ตัวเลข คืนอาเรย์ที่ทุกตัวคูณ 2
// ตัวอย่าง: doubleAll([1, 2, 3]) ต้องได้ [2, 4, 6]
function doubleAll(numbers) {
  // 👉 เขียนโค้ดตรงนี้  (ใช้ .map())
  return numbers.map(number => number * 2);
}

// โจทย์ 5: รับอาเรย์คะแนน (passingScore = 50)
//          คืน "จำนวน" คนที่สอบผ่าน (คะแนน >= 50)
// ตัวอย่าง: countPassed([40, 50, 80, 30]) ต้องได้ 2
function countPassed(scores) {
  // 👉 เขียนโค้ดตรงนี้  (filter แล้วดู .length ก็ได้
  return scores.filter(score => score >= 50).length;
}

// ⬇️ บรรทัดนี้ห้ามแก้ (ไว้ให้ตัวตรวจเรียกใช้)
module.exports = { sumAll, findMax, onlyEven, doubleAll, countPassed };
