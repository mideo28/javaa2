// ===== Уровень A — Простые задания =====

// Задание 11. Определение температуры
console.log("--- Задание 11 ---");
function weather(temperature) {
  if (temperature < 0) {
    return "Очень холодно";
  } else if (temperature <= 15) {
    return "Прохладно";
  } else if (temperature <= 25) {
    return "Тепло";
  } else {
    return "Жарко";
  }
}
let temperature = 18;
console.log(temperature + "°C -> " + weather(temperature)); // Тепло
[-10, 5, 20, 35].forEach(function (t) {
  console.log(t + "°C -> " + weather(t));
});

// Задание 12. Проверка логина
console.log("--- Задание 12 ---");
let login = "student";
if (login === "admin") {
  console.log("Добро пожаловать!");
} else {
  console.log("Неверный логин"); // для "student"
}

// Задание 13. Максимальное число
console.log("--- Задание 13 ---");
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
let a = 12, b = 25, c = 18;
console.log("Максимум из " + a + ", " + b + ", " + c + ": " + maxOfThree(a, b, c)); // 25
console.log("Максимум из 20, 20, 5: " + maxOfThree(20, 20, 5));   // 20 (два равны)
console.log("Максимум из 7, 30, 30: " + maxOfThree(7, 30, 30));   // 30 (два равны)

// Задание 14. Стоимость билета
console.log("--- Задание 14 ---");
function ticketPrice(age) {
  if (age < 0) {
    return "Некорректный возраст";
  } else if (age < 7) {
    return "Бесплатно";
  } else if (age <= 17) {
    return "500 ₸";
  } else if (age <= 59) {
    return "1 000 ₸";
  } else {
    return "600 ₸";
  }
}
[5, 10, 30, 65].forEach(function (age) {
  console.log("Возраст " + age + " -> " + ticketPrice(age));
});

// Задание 15. День недели
console.log("--- Задание 15 ---");
let day = 3;
function dayName(day) {
  switch (day) {
    case 1: return "Понедельник";
    case 2: return "Вторник";
    case 3: return "Среда";
    case 4: return "Четверг";
    case 5: return "Пятница";
    case 6: return "Суббота";
    case 7: return "Воскресенье";
    default: return "Неверный номер дня";
  }
}
console.log("День " + day + ": " + dayName(day)); // Среда
console.log("День 9: " + dayName(9));              // Неверный номер дня

// ===== Уровень B — Циклы и массивы =====

// Задание 16. Сумма чисел от 1 до 100
console.log("--- Задание 16 ---");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Сумма от 1 до 100: " + sum); // 5050

// Задание 17. Чётные числа
console.log("--- Задание 17 ---");
let evens = [];
let evenCount = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    evens.push(i);
    evenCount++;
  }
}
console.log("Чётные числа: " + evens.join(", "));
console.log("Количество: " + evenCount); // 15

// Задание 18. Средний балл студента
console.log("--- Задание 18 ---");
let grades = [85, 90, 78, 92, 88];
let gradesSum = 0;
for (let i = 0; i < grades.length; i++) {
  gradesSum += grades[i];
}
let average = gradesSum / grades.length;
console.log("Средний балл: " + average); // 86.6
console.log(average > 80 ? "Средний балл превышает 80: да" : "Средний балл превышает 80: нет");

// Задание 19. Поиск самого дорогого товара
console.log("--- Задание 19 ---");
let prices = [1500, 3500, 2200, 7000, 4100];
let maxPrice = prices[0];
for (let i = 1; i < prices.length; i++) {
  if (prices[i] > maxPrice) {
    maxPrice = prices[i];
  }
}
console.log("Максимальная цена: " + maxPrice + " ₸"); // 7000

// Задание 20. Обратный отсчёт
console.log("--- Задание 20 ---");
let countdown = 10;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}
console.log("Старт!");

// ===== Уровень C — Практические мини-проекты =====

// Задание 21. Электронная очередь
console.log("--- Задание 21 ---");
let queue = [101, 102, 103, 104, 105];
for (let i = 0; i < queue.length; i++) {
  console.log("Приглашается студент №" + queue[i]);
}
console.log("Очередь завершена");

// Задание 22. Проверка доступа в компьютерный кабинет
console.log("--- Задание 22 ---");
function checkAccess(role, hasPass) {
  if (role === "преподаватель") {
    return "Доступ разрешён";
  } else if (role === "студент" && hasPass) {
    return "Доступ разрешён";
  } else if (role === "студент" && !hasPass) {
    return "Доступ запрещён";
  } else {
    return "Обратитесь к администратору";
  }
}
console.log("Преподаватель: " + checkAccess("преподаватель", false));
console.log("Студент с пропуском: " + checkAccess("студент", true));
console.log("Студент без пропуска: " + checkAccess("студент", false));
console.log("Гость: " + checkAccess("гость", false));

// Задание 23. Расчёт заработной платы
console.log("--- Задание 23 ---");
let salary = 200000;
let bonusPercent;
if (salary < 150000) {
  bonusPercent = 20;
} else if (salary < 300000) {
  bonusPercent = 15;
} else {
  bonusPercent = 10;
}
let bonus = salary * bonusPercent / 100;
let totalSalary = salary + bonus;
console.log("Базовая зарплата: " + salary + " ₸");            // 200000
console.log("Премия (" + bonusPercent + "%): " + bonus + " ₸"); // 30000
console.log("Итого: " + totalSalary + " ₸");                    // 230000

// Задание 24. Учёт посещаемости
console.log("--- Задание 24 ---");
let attendance = [true, true, false, true, false, true, true, true];
let present = 0;
let absent = 0;
for (let i = 0; i < attendance.length; i++) {
  if (attendance[i]) {
    present++;
  } else {
    absent++;
  }
}
let percent = present / attendance.length * 100;
console.log("Присутствуют: " + present);   // 6
console.log("Отсутствуют: " + absent);     // 2
console.log("Посещаемость: " + percent + "%"); // 75%

// Задание 25. Мини-банкомат
console.log("--- Задание 25 ---");
let balance = 100000;
let pin = 1234;
let enteredPin = 1234;
let amount = 25000;
if (enteredPin !== pin) {
  console.log("Ошибка: неверный PIN-код");
} else if (amount <= 0) {
  console.log("Ошибка: сумма снятия должна быть больше нуля");
} else if (amount > balance) {
  console.log("Ошибка: недостаточно средств");
} else {
  balance = balance - amount;
  console.log("Операция успешна. Снято: " + amount + " ₸. Новый баланс: " + balance + " ₸"); // 75000
}

// ===== Дополнительное задание №26. Интерактивный калькулятор =====
// Запускается кнопкой на странице (используются prompt() и alert()).
function runCalculator() {
  let a = Number(prompt("Введите первое число:"));
  let b = Number(prompt("Введите второе число:"));
  let operation = prompt("Выберите: +, -, *, /");
  let result;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        alert("Ошибка: деление на ноль!");
        return;
      }
      result = a / b;
      break;
    default:
      alert("Неизвестная операция");
      return;
  }
  alert("Результат: " + a + " " + operation + " " + b + " = " + result);
}