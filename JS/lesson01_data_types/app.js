
/* JS ' de 5 farklı data tipi vardır. 
1.String
2.Number
3.Boolean
4. null
5. undefined */
console.clear();
//1. String ifadelerde '' veya "" kullanabilirsiniz. 
var myName = 'Didem'
var yourName ="Ayşe"
console.log(myName);//Didem
console.log(typeof(yourName));//String
console.log(yourName);//Ayşe
console.log(typeof(myName));//String
//2.number: integer, double veya decimal gibi data tipleri yoktur, tamamı number olarak belirlenir. 
var myAge1 = 'ayse';
console.log(typeof(myAge1));//number
var myHeight = 67.5;
console.log(myHeight);//67.5
console.log(typeof(myHeight));//number
let myAge = '34';// let can not be redeclared
myAge = 56;
myAge = 45;
console.log('benim yaşım ' + myAge);//benim yaşım 45
let number = '76';
console.log(typeof(number));//"string"

//3. Boolean: değeri true veya false dönen değişkenlerdir.
var isMarried = true;
var no1 = 0;
var isActive = false;
var jobName = 'doctor';
let car = null;
let myPhone;
console.log(typeof(isMarried));//"boolean"
console.log(Boolean(no1));//true
console.log(Boolean(jobName));//true
console.log(Boolean(car));//false
console.log(Boolean(myPhone));//false
// Eğer Boolean içerisinde bir değer varsa True doner. 
// 0, null, undefined, '', "" false döner
//4.null: içi boş object, değer atanabilir.
var carModel = null;
console.log(carModel);//null
console.log(typeof(carModel));//object

//5.undefined: nothing, değer atanmamış,
// undefined herhangi bir data içermez. 
var selectedCar;
console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//"undefined"

/* var, let, const keywords
**var: heryerden ulaşılabilir, kapsamı en geniş olan identifier(tanımyaıcı) dır. 
var ile bir değişkeni tekrar tekrar declare edebilirsiniz.
*/
var myCar = 'VW';
var myCar = 'Polo';
console.log(myCar);//Polo
var others = 'Mercedes';
console.log(others);//Mercedes

//let: let ile bir variable'ı aynı isimle tekrar declare edemezsiniz. 
//Kapsamı 
let num = 30/0;
console.log(num);//infinity
//let num = 56;
//console.log(num);//Identifier 'num' has already been declared. 

let num2 = 78;
let num3 = '2';
console.log(num2 + num3);// burada concatination veya toplama şeklinde iki ihtimal olduğu için ikiside number ise toplar,
// biri string ise concat yapar. 
console.log(num2  / num3); //39
// + kullanmadığımızda Concat yapamadığı için değerini kullanır ve number olarak kullanır.
console.log(num2  * num3);//156

//const: degeri değiştirilemez, sabit degerlerde kullanılır. 
const pi = 3.14;
const r = 5;
const alan = pi*r**2; 
//pi = pi + 10;//Error:Assignment to constant variable.
console.log(alan);
//r = 6;
//console.log(alan);//Error: Assignment to constant variable.