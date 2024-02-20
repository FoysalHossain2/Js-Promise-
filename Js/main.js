// // for loop

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element === 5){
//        // console.log("5 is the best");
//     }

//    // console.log(element);
    
// }

// for(let i = 1; i<= 10; i++){
//     //  console.log(`outer loop value: ${i}`);
//      for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and inner loop ${i}`);
//         // console.log(i + '*' + j + '=' + i+j);
        
//      }
// }



// // Break

// // for (let index = 0; index <= 20; index++) {
// //     if (index === 5) {
// //         console.log('Detected 5');
// //         break
// //     }

// //     console.log('value of is ', index);
    
// // }

// for (let index = 0; index <= 20; index++) {
//     if (index === 5) {
//         // console.log('Detected 5');
//         continue 
//     }

//     // console.log('value of is ', index);
    
// }




// /**** While loop *****/

// let index = 0
// while (index <= 10) {
//     // console.log(`value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ['flash', 'batman' , 'supperMan']

// let arr = 0
// while (arr < myArray.length){
//     // console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }





// /* for of loop */
// // ["","",""]
// // [{},{},{}]

// const myArr = [1,2,3,4,5]

// for (const num of myArr) {
//         // console.log(num);
// }

// const greetings = 'Hello world'
// for (const greet of greetings) {
//     // console.log(`Each char of ${greet}`);
// }



// // object
// const myObject = {
//     js: 'javaScript',
//     cpp: 'C++',
//     rb: 'ruby',
//     py: 'python'
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }






const arr = [1,2,3,4,5]

for (const num of arr) {    
    // console.log(num);
}


const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



const map = new Map()
map.set('In', 'India')
map.set('USA', 'United States of America')
map.set('BN' , 'Bangladesh')

for (const [key, value] of map) {
    // console.log(key, ':-' , value);
}


const myObject = {
    'js':"javascript",
    'cpp': "C++",
    'py': "Python",
    "ruby": "ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is ${myObject[key]}`);
}

const coding = ['js','ruby', 'java', 'çpp', 'python']

// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach((val) =>{
//     console.log(val);
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Cpp",
        languageFileName: "C++"
    }
]


myCoding.forEach((items)=>{
    console.log(items.languageName);
})