// //zad2
// function task2() {
//     for (let i = 2; i < 15; i+=2) {
//         console.log(i*i);
//     }
// }

// // task2()
// //посчитать сумму всех чисел от 1 до 100
// function task2_1(n) {
//     return ((1+n)/2)*(n)
// }

// console.log(task2_1())


//на вход приходит строка. Нужно сформировать строку из символов которые встречаются в начальной строке нечетное количество раз
const task3 = (input) => 
    input.split("").filter((cur) => 
        input.split("").reduce((acc, cur) => {
            acc[cur] ? acc[cur]++ : acc[cur] = 1;
            return acc;
        }, {})[cur] % 2).join("")


const input = 'memofuhgy feiluworhgkuveh jwfhviuhejfg oeitusg iflhdfijdwpeoigfykdu shjweiou ghiserk jnfkdoyuidgh';

const task3_1 = (input) => Array.from(new Set(input.split(""))).join("")