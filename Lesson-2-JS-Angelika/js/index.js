console.log("1");
//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.
let out_1 = document.querySelector(".out-1");
let b_1 = document.querySelector(".b-1");
//b_1.addEventListener("click",)
      function t1(){
        for(let i = 1; i<= 50; i++){
        out_1.textContent += i + ' '
        }
}
//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.
let out_2 = document.querySelector(".out-2");
let b_2 = document.querySelector(".b-2");
b_2.addEventListener("click",t2);
function t2 (){
for(let i = 2;i <= 122; i+=2){
  out_2.textContent += i + ' '
}

}

//let b_2 = document.querySelector(".b-2");
//let out_2 = document.querySelector(".out-2");
//b_2.addEventListener("click",t2);
//function t2(){
 //let temp =""  
//for(let i = 2; i <= 122; i+=2){
//temp += i + ' '
//}
//console.log(temp)
//out_2.textContent = temp
//}
//let temp = 0 
//console.log(temp)

//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
//let out_3 = document.querySelector(".out-3");
let out_3 = document.querySelector(".out-3");
let b_3 = document.querySelector("b-3");
//b_3.addEventListener("click", t3);
function t3 (){
    for(let i = 25 ; i >= 7; i--){
  out_2.textContent += i + ' '
    }
    }



//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

let out_4 = document.querySelector("out-4");
let b_4 = document.querySelector("b-4");
function t4 (){
    for(let i = 77 ; i >= 35; i-=3 ){
     // out_4.textContent += i + _
    }
    
    }
document.querySelector(".b-4").onclick = t4



 // Task 5
//Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
   // 1_*2_**3_*4_** ... 17_*
//от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.let b_5 = document.querySelector(".b-5");
let out_5 = document.querySelector(".out-5");
let b_5 = document.querySelector(".b-5");
 function t5() {
  let result = '';
  for (let i = 1; i <= 17; i++) {
    if (i % 2 === 0) {
      result += i + '_**';
    } else {
      result += i + '_*';
    }
  }
  document.querySelector(".out-5").textContent = result;
}
b_5.addEventListener("click",t5);


//  Task 6
//Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:

 //******<br>
 //******<br>
 //******<br>

//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
const $OUT_6 = document.querySelector(".out-6");
const $B_6 = document.querySelector(".b-6");
function t6() {
  // получаем значение i-6 от пользователя
  let i = +document.querySelector('#i-6').value;

  // получаем элемент out-6, куда будем выводить результат
  let out = document.querySelector('#out-6');

  // очищаем содержимое out-6 перед выводом результата
  out.innerHTML = '';

  // запускаем цикл for, который повторится i раз
  for (let j = 0; j < i; j++) {
    // в каждой итерации выводим строку из шести звездочек и тега <br>
    out.innerHTML += '******<br>';
  }
}
$B_6.onclick = t6;

//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.

const $OUT_7 = document.querySelector(".out-7");
const $B_7 = document.querySelector(".b-7");

function t7() {
for(let i = 1; i<=4 ; i--){
  $OUT_7.textContent += i + ' '
}
}
$B_7.onclick = t7;

//  Task 8
 //Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
 //Считаем, что второе число всегда больше первого.
 //По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
 //Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
     //4 5 6 7 8
//Задача решается с помощью цикла.
const $B_8 = document.querySelector(".b-8");
const $OUT_8 = document.querySelector(".out-8");
function t8() {
  var input1 = parseInt(document.getElementById("i-81").value); // получаем первое число
  var input2 = parseInt(document.getElementById("i-82").value); // получаем второе число
  var result = ""; // создаем пустую строку для вывода результата
  
  for (var i = input1; i <= input2; i++) { // перебираем числа от первого до второго включительно
    result += i + " "; // добавляем текущее число и пробел к строке результата
  }
  
  document.getElementById("out-8").innerHTML = result; // выводим результат в соответствующий элемент страницы
}
$B_8.onclick = t8;

//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один

//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
b_10 = document.querySelector(".b-10");
out_10 = document.querySelector(".out-10");
 function t10 () {
  var result = "";
  for (var year = 1950; year <= 2000; year += 2) { 
    result += year + " "; 
  }
}
b_10.addEventListener("click",t10);

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two
const $B_11 = document.querySelector(".b-11");

function t11() {}
$B_11.onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
let b_12 = document.querySelector(".b-12");
function t12() {
  var elems = document.getElementsByClassName("div-12"); 
  
  for (var i = 0; i < elems.length; i++) { 
    elems[i].style.background = "orange"; 
  }
}
b_12.addEventListener("click", t12);
//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let $I_13 = document.querySelectorAll(".i-13");

function t13() {}

document.querySelector(".b-13").onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
function t14() {}

document.querySelector(".b-14").onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i
let out_15 = document.querySelector(".out-15");
let b_15 = document.querySelector(".b-15");
function t1(){
  var result = ""; 
  var n = 11;
  for (var i = 0; i < n; i++) { 
    if (i <= n / 2) {
      result += (n - i - 1) + " "; 
    } else {
      result += (i - n / 2) + " "; 
    }
  }
  
  document.getElementById("out-15").innerHTML = result; 
}
b_15.addEventListener("click",t15);

