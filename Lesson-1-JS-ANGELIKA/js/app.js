// 1. Вывести в консоль свое имя
console.log("Angelika Semrau");

// 2. Вывести в консоль число, месяц и год своего рождения
console.log ("21.04.1997");

// 3. Вывести в консоль - Добро пожаловать в мир Java Script
console.log ("Добро пожаловать в мир Java Script");

// 4. Вывести в alert сегодняшний год. После код следует закоментировать.
//alert("2023");

// 5. C помощью alert вывести результат операции 888 - 345. Закоментировать.
let alert = 888;
let alert2 = 345;
let res = 888-345.
console.log (res);


// 6. Создать на странице div с id=one. С помощью document.getElementById запишите в данный элемент текст 'Hello World'.
// Изучить способ получения нашего дива. Изучить команду вывода.
//$ONE = document.getElementById ("one");
console.log("Hello World");



// Раскоментировать этот код
//let one = document.getElementById("one");
// $ONE.innerHTML = "Мой первый вывод на страницу"; textContent, innerText;

// 7. Создайте на странице div с id=two. С помощью document.getElementById запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки.
const $TWO =  document.getElementById("two");
$TWO.innerHTML= 12 * 12;

// 8. Создайте div с классом one. С помощью document.querySelector запишите в данный элемент текст 'Вывод элемента по классу'.
// Изучить способ получения нашего дива. Изучить команду вывода.

//Раскоментировать этот код
 let oneClass = document.querySelector(".one");
 oneClass.innerHTML = "Вывод элемента по классу";

// 9. Создайте следующую верстку на странице:
//<h2>Hello <span>everyone</span></h2>
// Замените с помощью querySelector текст everyone на world.
// Изучить способ получения нашего дива. Изучить команду вывода.

// Раскоментировать этот код
let span = document.querySelector("span");
 span.innerHTML = "world";

// 10. Создайте пустой div c классом three. С помощью querySelector запишите внутрь div заголовок h3 с произвольным текстом.
// Убедиться, что тег добавился в тнспекторе кода.
// Выходит, что при помощи innerHTML  в строке мы можем выводить теги. JS пониает такую запись.

// Раскоментировать этот код
 let three = document.querySelector(".three");
 three.innerHTML = "<h3>Произвольный текст</h3>";

// 11. Создайте пустой div c классом four. С помощью querySelector запишите внутрь div заголовок h4 с произвольным текстом и параграф p с произвольным текстом. Подсказка, чтобы дописывать внутрь элемента используейте не innerHTML = , а innerHTML += (плюс равно без пробела).
// Записать без += и с +=. Понять разницу.
// Убедиться, что тег добавился в тнспекторе кода.

// Раскоментировать этот код
let four = document.querySelector(".four");
four.innerHTML += "<h4>Произвольный заголовок</h4>";
four.innerHTML += "<p>Произвольный текст</p>";

// 12. Создайте div с классом five. Получите его в переменную five. С помощью innerHTML запишите внутрь переменной five число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!
let five = document.querySelector(".five");
five.innerHTML = ("3.1415");
// 13. Создайте div с классом six. Получите его в переменную six. С помощью innerHTML запишите в него строку:
// <img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt="">
//Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки. Главное чтобы кавычки чередовались. Поэтому при вставке оберните данную строку одинарными кавычками.
//const $SIX = document.querySelector(".six");
//$SIX.innerHTML = '<img src="https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2843&q=80" alt="">'

// 14. Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
let zahlen  = document.querySelector("zahlen");
let alert3 = 6;
let aler4= 3;
let res2 = 6 * 3;
console.log (res2);



// 15. Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2.
let delenie  = document.querySelector("delenie");
let alert5 = 6 ;
let aler6= 3 ;
let res3 = 6 / 3;
console.log (res3);

// 16. Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.
let x1 = 'Hello';
let x2 = 5;
let res4 = x1 + 'Hello';
console.log(res4);
// 17. Создайте div с классом test-1. Получите его в переменную d1. Выведите эту переменную в консоль. Изучите вывод.
let test_1 = document.querySelector("test_1");
//test_1.innerHTML = ("d1");
console.log("d1");


// 18. Создайте div.test-2. Получите его в переменную d2. Выведите эту переменную в консоль. Присвойте d2 значение 5 (d2 = 5). Выведите переменную в консоль. Изучите вывод.
let test_2 = document.querySelector("test_2");
let d2 = 5;
//test_2.textContent = ("d2");
console.log("d2");
// 19. Создайте div c классом s3 и div с классом s4. Получите div.s3 в переменную divS3. Выведите в консоль divS3. Теперь получите в эту же переменную divS3 блок div c классом s4. Выведите переменную divS3 в консоль. Изучите что изменилось.

// 20. Получите c помощью querySelector тег body. С помощью innerHTML присвойте ему пустую строку (...innerHTML = ''). Изучите что произошло. Закомментируйте этот код.

 //document.querySelector("body").innerHTML = "";




















