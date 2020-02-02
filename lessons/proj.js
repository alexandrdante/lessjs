'use strict';


let money, time;

money = Number(prompt("Ваш бюджет на месяц?"));
time = prompt("Введите дату в формате YYYY-MM-DD");

let qu1, qu2, an1, an2;
qu1 = prompt("Введите обязательную статью расходов в этом месяце");
an1 = Number(prompt("Во сколько обойдется?"));
qu2 = prompt("Введите обязательную статью расходов в этом месяце");
an2 = Number(prompt("Во сколько обойдется?"));

let appData;
let expenses;

appData = {
    budget: money,
    timeData: time,
    expenses: {
        [qu1]: an1,
        [qu2]: an2
    },
    optionalExpenses: "",
    income: [],
    savings: false
}
console.log(qu1);
console.log(qu2);
console.log(appData);

let budg = money/30;
alert("Бюджет на 1 день" + " " + budg + "уев");