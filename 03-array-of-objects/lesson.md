# บทที่ 3 — Array of Objects (อาเรย์ของออบเจกต์)

นี่คือรูปแบบข้อมูลที่ automation tester เจอ **บ่อยที่สุด** — เช่น รายชื่อ user,
รายการสินค้า, ผลลัพธ์จาก API ที่เป็น list

```js
const users = [
  { id: 1, name: "Som", active: true },
  { id: 2, name: "Ann", active: false },
  { id: 3, name: "Kit", active: true },
];
```

มันคือ Array (บทที่ 1) ที่ข้างในแต่ละช่องเป็น Object (บทที่ 2) — เอา 2 บทมารวมกัน!

---

## ท่าที่ใช้บ่อย

### `.map()` — ดึง field เดียวออกมาจากทุกตัว
```js
const names = users.map((u) => u.name);   // ["Som", "Ann", "Kit"]
```

### `.filter()` — คัดเฉพาะตัวที่เข้าเงื่อนไข
```js
const activeUsers = users.filter((u) => u.active === true);
// [{ id: 1, ... }, { id: 3, ... }]
```

### `.find()` — หาตัวแรกที่ตรงเงื่อนไข (ได้ object ตัวเดียว ไม่ใช่ array)
```js
const user = users.find((u) => u.id === 2);   // { id: 2, name: "Ann", active: false }
```
> ถ้าหาไม่เจอ `.find()` จะคืน `undefined`

### `.filter().length` — นับจำนวนที่เข้าเงื่อนไข
```js
const activeCount = users.filter((u) => u.active).length;   // 2
```

---

## 💡 เทียบ `.find()` vs `.filter()`
| | คืนค่าอะไร | ใช้ตอนไหน |
|---|---|---|
| `.find()` | object ตัวเดียว (ตัวแรกที่เจอ) | อยากได้ "คนนั้น" |
| `.filter()` | array (ทุกตัวที่เข้าเงื่อนไข) | อยากได้ "ทุกคนที่..." |

---

## ⚠️ จุดที่มือใหม่พลาดบ่อย
- ใช้ `.find()` ทั้งที่อยากได้หลายตัว (ควรใช้ `.filter()`)
- ลืมว่า `.find()` คืน object → เผลอไปอ่าน `.length`

ไปลุย `exercises.js` ได้เลย — ใช้ความรู้บท 1+2 รวมกัน!
