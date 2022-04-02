let num = +prompt("Введите число")
let i
let count

// if (num < 1) {
//     console.log("NaN")
// } else if (num === 1) {
//     console.log("Число простое")
// } else {
//     for (i = 2; i <= num; i++) {
//         for (count = 2; count < num; count++) {
//             if (i % count === 0) {
//                 break;
//             }
//         }
//         if (count === num) {
//             console.log("Число простое")
//         }
//     }
//     console.log("Найменьший делитель: " + count)
// }

if (num < 1) {
    console.log("NaN")
} else {
    for (i = 2; i <= num; i++) {
        for (count = 2; count < num; count++) {
            if (i % count === 0) {
                break;
            }
        }
    }
}

if (count === num || num === 1) {
    console.log ("Число простое")
}   else {
    console.log("Наименьшей делитель числа " + num + " являеться " + count)
}