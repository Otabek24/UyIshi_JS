let string = prompt("Lyuboy so'z yoki gap yozing", "Unli harf qatnashsin")
let con = alert("Yozgan unli harflaringizning hammasi o'chib ketdi. Konsolni tekshiring")
let array = string.split("")
for (let i = 0; i < array.length; i++) {
    if (array[i] == "o") {
        array.splice(i, 1)
    }
    if (array[i] == "e") {
        array.splice(i, 1)
    }
    if (array[i] == "u") {
        array.splice(i, 1)
    }
    if (array[i] == "a") {
        array.splice(i, 1)
    }
    if (array[i] == "i") {
        array.splice(i, 1)
    }
}
let str = array.join('')
console.log(str);