// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve()       
//     })
// }, 1000)

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// new Promise (function(resolve, reject) {
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     })
// }).then(function(){
//     console.log("Async 2 resolved")
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName:"Foysal", email:"chai@example.com"})
//     },1000)
// })    

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error) {
//             resolve({username:"Foysal Hossain", password:"123"})
//         } else {
//             reject('Error: Something went wrong')
//         }
//     },1000)
// })


// ************promise practice2*********************//
// const state = true;

// console.log('Task 1');

// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if(state) {
//             resolve('Task 2')
//         }else {
//             reject('failed');
//         }
//     },2000)
// });

// promise 
// 	.then(function(value){
//         console.log(value);
//     })
//     .catch(function(error){
//         console.log(error);
//     });

// console.log('Task 3')




// ************Promise || Asynchronous Implement*****************\\

const paymentSuccess = true;
const marks = 80;

function enroll(){
    console.log('course enrollment is in progress');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            } else {
                reject('Payment failed');
            }
       },2000)
    })

    return promise;
}

function progress(){
    console.log('Course on progress...')

    const promise = new Promise(function(resolve, reject){
        
    setTimeout(function(){
        if(marks >=80){
            resolve();
        } else {
            reject("You could not get enough marks to get certificate");
        }
    },3000)
    })

    return promise;
}

function getCertificate(){
    console.log('Preparing your certificate');

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Congrats! You got the certificate');
        },1000)
    })

    return promise;
}
