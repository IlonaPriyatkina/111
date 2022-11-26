//task one 

let number = 10;

let number2 = 10;

if (number == number2) {
    console.log("Вірно");
}
else {
    console.log("Неправильно");
}

//task two
let min = 100;

if (min >= 0 && min <= 14) {
    alert('Перша чверть');
}
else if (min >= 15 && min <= 30) {
    alert('Друга чверть');
}
else if (min >= 31 && min <= 45) {
    alert('Третя чверть');
}
else if (min >= 45 && min <= 59) {
    alert('Четверта чверть');
}

//task three
let a = 0;

if (a == 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = 1;

if (a == 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = -3;

if (a == 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}



//Якщо змінна а більша за нуль, то введіть "Вірно", інакше виведіть "Невірно". Перевірте роботу скрипта при а, що дорівнює 1,0,-3

a = 1;
if (a > 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = 0;
if (a > 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = -3;
if (a > 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

//Якщо змінна а менша за нуль, то введіть "Вірно", інакше виведіть "Невірно". Перевірте роботу скрипта при а, що дорівнює 1,0,-3

a = 1;
if (a < 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = 0;
if (a < 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = -3;
if (a < 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

//Якщо змінна а більша або дорівнює нулю, то введіть "Вірно", інакше виведіть "Невірно". Перевірте роботу скрипта при а, що дорівнює 1,0,-3

a = 1;
if (a >= 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = 0;
if (a >= 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = -3;
if (a >= 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

//Якщо змінна а менша або дорівнює нулю, то введіть "Вірно", інакше виведіть "Невірно". Перевірте роботу скрипта при а, що дорівнює 1,0,-3
a = 1;
if (a <= 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = 0;
if (a <= 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = -3;
if (a <= 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

//Якщо змінна а не дорівнює нулю, то введіть "Вірно", інакше виведіть "Невірно". Перевірте роботу скрипта при а, що дорівнює 1,0,-3
a = 1;
if (a != 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = 0;
if (a != 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = -3;
if (a != 0) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

//Якщо змінна а дорівнює "test", то введіть "Вірно", інакше виведіть "Невірно". Перевірте роботу скрипта при а, що дорівнює "test", "тест",3
a = "test";
if (a == "test") {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = "тест";
if (a == "test") {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = 3;
if (a == "test") {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

//Якщо змінна а дорівнює "1" за значенням і типом, то введіть "Вірно", інакше виведіть "Невірно". Перевірте роботу скрипта при а, що дорівнює "1", 1,3

a = "1";
if (a === "1") {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = "1"
if (a === 1) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

a = "1";
if (a === 3) {
    console.log("Вірно");
} else {
    console.log("Не вірно");
}

//Якщо змінна а дорівнює нулю або дорівнює двом, додайте до неї сім, інакше поділіть її на 10 за
//значенням і типом, то введіть "Вірно", інакше виведіть "Невірно". Перевірте роботу скрипта при а, що дорівнює 5,0, -3,2

a = 5;
if (a == 0 || a == 2) {
    a = a + 7;
} else {
    a = a / 10;
}
console.log(a);

a = 0;
if (a == 0 || a == 2) {
    a = a + 7;
} else {
    a = a / 10;
}
console.log(a);

a = -3;
if (a == 0 || a == 2) {
    a = a + 7;
} else {
    a = a / 10;
}
console.log(a);

a = 2;
if (a == 0 || a == 2) {
    a = a + 7;
} else {
    a = a / 10;
}
console.log(a);


//Якщо змінна а дорівнює або менше 1, а змінна b більша або дорівнює 3 , то виведіть суму цих зінних,
//інакше виведіть їх різницю (результат віднімання)
// Перевірте роботу скрипта при a та b, що дорівнює 1 і 3, 0 і 6, 3 і 5


a = 1;
b = 3;
if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

a = 0;
b = 6;
if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

a = 3;
b = 5;
if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}



//Змінна num може приймати 4 значення: 1, 2, 3 чи 4. Якщо вона має значення '1', то змінну result запишемо 'зима',
//якщо має значення '2' - 'весна' тощо. Розв'яжіть завдання через switch-case.

let num = 4;
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;

    case 2:
        result = 'весна';
        break;

    case 3:
        result = 'осінь';
        break;

    case 4:
        result = 'літо';
        break;
}

console.log(result);

