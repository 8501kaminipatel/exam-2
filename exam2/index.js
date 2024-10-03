// 1) declare and use variable
// que-1
// var name = "kamini";
// var age = 22;
// var color = "black";

// console.log("name;",name);
// console.log("age;",age);
// console.log("color;",color);




// 2)basic arithmetic operations
// que-1
// var a =parseFloat(prompt("first number"))
// var b=parseFloat(prompt("second number"))
// console.log("a+b;",a+b);
// console.log("a-b;",a-b);
// console.log("a/b;",a/b);
// console.log("a*b;",a*b);
// console.log("b%a",b%a);
// console.log("a**b",a**b);


// 3)string concatenation
// que-1
// var name = "kamini";
// var greeting = "Hello,";
// console.log(   greeting ," My Name is " ,name  );



// 4)logical operator
// que-1
// let count=10;
// for(var i=1; i<=11; i++)
// {
//     console.log(count);
//     count++
// }



// 5)conditional statement
// que-1
// let age1 = 20

// if(age1<25)
// {
//     console.log("valid age");
// }
//  else
// {
//     console.log("invaild age");
// }



// 6)tenary operator
// que-1
// let number = 10;

// (number%2==0)?console.log("even number"):console.log("odd number");



// 7)switch statement
//  que-1

// var day = 3;

// switch(day)
// {
//     case 1:
//     {
//         console.log("MONDAY");
//         break;
//     }
//     case 2:
//     {
//         console.log("TUESDAY");
//         break;
//     }
//     case 3:
//     {
//         console.log("WEDNESDAY");
//         break;
//     }
//     case 4:
//     {
//         console.log("THURSDAY");
//         break;
//     }
// }



// 8)for loop
// que-1
// var count=1;

// for(var i=1; i<=10; i++)
// {
//     console.log(count);
//     count++
// }



// 9)while loop
// var num = 1
// while(num<=5)
// {
//     if(num%2==0)
//     {
//         console.log(num);
     
//     }
//     num++
// }


// 10)nested loop
// 11)array creation
// var fruits = ["apple","kiwi","orange","banana","mango"]
// console.log(fruits[2]);
// console.log(fruits[4]);


// 12)array method(push,pop)
// PUSH
// var fruits = ["apple","kiwi","orange","banana"]
// fruits.push("mango")
// console.log(fruits);
// POP
// var fruits = ["apple","kiwi","orange","banana"]
// fruits.pop();
// console.log(fruits);


// 13)array method(slice,splice)
//  var fruits = [10,20,30,40,50]
//  var newarr =fruits.slice(2,4);
//  console.log(newarr)


//  var fruits = ["apple","kiwi","orange","banana"]
//  var newarr = fruits.splice(1,2);
//  console.log(fruits);
//  var fruits = ["apple","kiwi","orange","banana"]
//  var newarr =fruits.splice(1,2,"kiwi","orange");
//  console.log(fruits);
 

// 14)object Creation

// let student=[
//     {
//         name:"aryan",
//         grade:"A",
//     },
//     {
//         name:"nidhi",
//         grade:"b",
//     },
//     {
//         name:"hani",
//         grade:"c",
//     },
// ]

// console.log(student);

// 16)function creation

// let number=4
// function fun()
// {
//    let ans= Math.sqrt(number);
//    console.log(ans);
// }
// fun()


// 17)function with parameters

// function sum(a,b)
// {
//     return a+b;
// }
// let ans= sum(10,20);
// console.log(ans);


// 18)return value

// let number = 10
// function fun()
// {
//      if(number>0)
//      {
//         return "Positive";
//      }
//      else
//         {
//             return "negative";
//         }
// }
// let ans = fun();
// console.log(ans);


// 19)anonymouse function


// let fun = function()
// {
//     console.log("hello")
// }
// fun()


// 20)arrow function


// let num1 = 10;
// let num2 = 20;

// let fun =()=>
// {
//     console.log("multiply;", num1*num2)
// }
// fun()


// 21)map method
// var arr = [1,2,3,4,5]
// var newarr=arr.map(num=>num*2);
// console.log(newarr);


// 22)array filter method

// var number = [1,2,3,4,5];

// let fun = number.filter((num) => {
//     return num%2 == 0
// });
// console.log(fun);


// 26)object properties

// let car = [
//     {
//         name:"bmw",
//         make:"black",
//         year:2010,
//     },
// ]
// console.log(car);


// 27)loop through object

// let student=[
//         {
//             name:"aryan",
//             grade:"A",
//         },
//         {
//             name:"nidhi",
//             grade:"b",
//         },
//         {
//             name:"hani",
//             grade:"c",
//         },
//     ]

// for(let key in student)
// {
//     console.log(student[key]);
// }

// 28)function returning object
// function fun ()
// {
//     let book = [
//         {
//             title:"business of management",
//             author:"R.ram",
//             year:2010
//         },
//     ]
//     console.log(book);
// }
// fun()

// 29)object with array

// 30)find method
 
// var arr = [10,20,30,40]
// arr.find((value)=>{
//     if(value>=20)
//     {
//         console.log(value);
//     }
// })

// 31)math function
// que-1

// var number2= Math.max(10,20,30,50,80,20,10);
// console.log(number2)

// que-2
// var num = Math.min(50,60,80,10,100,150)
// console.log(num);

// que-3
// var random = Math.floor(Math.random(6.5)*100);
// console.log(random);

// que-4
// var round = Math.round(6.3);
// console.log(round);


// 32)age calculation

// let birthdate = new Date('2003-01-17');
// let currdate = new Date();

// let totalMilliseconds = currdate - birthdate;

// let totalSeconds = Math.floor(totalMilliseconds / 1000);
// console.log(totalSeconds);

// let totalMinutes = Math.floor(totalSeconds / 60);
// console.log(totalMinutes);

// let totalHours = Math.floor(totalMinutes / 60);
// console.log(totalHours);

// let totalDays = Math.floor(totalHours / 24);
// console.log(totalDays);

// let currentYear = currdate.getFullYear() - birthdate.getFullYear();
// console.log(currentYear);

// let totalMonths = (currentYear * 12) + (currdate.getMonth() - birthdate.getMonth());
// console.log(totalMonths);
