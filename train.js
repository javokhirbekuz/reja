// // console.log("train task ishga tushdi");
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
// ];

// // callback functionlarda setInterval ishlaydi
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a < 40) callback(null, list[2]);
//     else if (a > 40 && a < 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 1000);
//         // setInterval(function () {
//         //     callback(null, list[5]);
//         // }, 1000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");

// // // Async function
// // async function maslahatBering(a, callback) {
// //     if (typeof a !== "number") throw new Error("Insert an only number!");
// //     else if (a <= 20) return list[0];
// //     else if (a > 20 && a <= 30) return list[1];
// //     else if (a > 30 && a <= 40) return list[2];
// //     else if (a > 40 && a <= 50) return list[3];
// //     else if (a > 50 && a <= 60) return list[4];
// //     else {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(function () {
// //                 // ---> setInterval async functionda va Promise functionda ishlamaydi
// //                 resolve(list[5]);
// //             }, 1000);
// //         });
// //         // return list[5];
// //         // setTimeout(function () {
// //         //     callback(null, list[5]);
// //         // }, 5000);
// //     }
// // }
// // // call async func vis then/catch
// // console.log("passed here 0");
// // maslahatBering(65)
// //     .then((data) => {
// //         console.log("Data:", data);
// //     })
// //     .catch((err) => {
// //         console.log("Error:", err);
// //     });
// // console.log("passed here 1");

// // // call async func async/await
// // async function run() {
// //     let javob = await maslahatBering(50);
// //     console.log(javob);
// //     javob = await maslahatBering(30);
// //     console.log(javob);
// //     javob = await maslahatBering(42);
// //     console.log(javob);
// // }

// // run();

// // // // // MITask-A
// const countLetter = (letter, word) => {
//     let count = 0;
//     for (i in word.split("")) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// };

// const countLetter2 = (letter, word) => {
//     const count = word.split("").reduce((total, curIn) => {
//         if (curIn === letter) {
//             total++;
//         }
//         return total;
//     }, 0);
//     return count;
// };
// console.log(
//     countLetter2(
//         "a",
//         "salom dunyo men sizlarga salom berish uchun Amerikadan etib keldim."
//     )
// );

// // // // // MITask-B
// countDigits("ad2a54y79wet0sfgb9") return 7

// const countDigits = (string) => {
//     let count = 0;
//     for (let i = 0; i <= string.length; i++) {
//         if (parseInt(string[i]) || string[i] == "0") {
//             count += 1;
//         }
//     }
//     return count;
// };

// console.log(countDigits("ad2a54y79wkl12j312039109283-2et0sfgb9"));

// const countDigits2 = (string) => {
//     const nList = string.split("").filter((ele) => parseInt(ele) || ele == "0");
//     const result = nList.length;
//     return result;
// };
// console.log(countDigits2("ad2a54y79wkl12j312039109283-2et0sfgb9"));

// // MITask-C
// // checkContent("mitgroup", "gmtiprou") return true;

// const checkContent = (string1, string2) => {
//     return (
//         string1.trim().split("").sort().join() ===
//         string2.trim().split("").sort().join()
//     );
// };
// console.log(checkContent("mitgroup", "gmtiprou"));

// MITask-D
// const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require("moment");
class Shop {
    constructor(product1Qnty, product2Qnty, product3Qnty) {
        this.stock = {
            non: product1Qnty,
            lagmon: product2Qnty,
            cola: product3Qnty,
        };
    }
    qoldiq() {
        const time = moment().format("HH:mm");
        return `hozir ${time} da ${this.stock.non} ta non, ${this.stock.lagmon} ta lagmon va ${this.stock.cola} ta cola mavjud!`;
    }
    sotish(product, quantity) {
        if (this.stock[product] - quantity >= 0) {
            this.stock[product] -= quantity;
            return;
        } else console.log(`${quantity} ta ${product} mavjud emas!`);
    }
    qabul(product, quantity) {
        this.stock[product] += quantity;
        return;
    }
}

const shop = new Shop(3, 5, 7);

console.log(shop.qoldiq());

shop.sotish("non", 2);
shop.sotish("cola", 12);
console.log(shop.qoldiq());
