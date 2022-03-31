//...............................................event loop.................................................

// function cb(){
//     console.log("after timeout");
// }
// console.log("me first");
// function print(){
//     console.log("me second");
// }
// setTimeout (cb,2000);
// print();
// console.log("me thired");
//in the callback function the settimeout function does not run immegiately
//settimout not a part of javascript it just label. settimeout function is part of web api. it is independent .
// when timer is held on 0s then callback is push on queue.
//settimeout when come the javascript become a asynchronouns 

// function printalpha(letter){
//     setTimeout(()=>{
//         console.log(letter)
//     },delay)
// }
// printalpha('a',1000);





//......................promises................======>>>>>>>>>>>
//it is constructor function (it call then it automatically run ).
//promises when come back if the callback hell is occurse. that is setttimeout function look like triangle(pyramid)
//  it is difficult to debugging so call back hell is occurs then promises come inside javascript.
//insted of callback
//promises make asynchronous to synchronous the javascript.

//when we assign a new promises object to pr=>
// let pr= new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log('me first');
//         resolve(1);  
//     }, 2000)        //here first execute the 'me second' and then 'me first'so here promises are come and thier is a power to exexute first 'me first' and then 'me second useing .then and .catch
// })
// console.log('me second');



// let pr= new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log('me first');
//             resolve(1); 
//             reject(1);
//         }, 2000)
    
//     })
    
//     pr.then(()=>{console.log('me second')}).catch(()=>{console.log("promises rejected")})


//................................................

// let pr= new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log('random');
//         //resolve('here is your pizza'); 
//         reject('no pizza');
        
//     }, 2000)

// })
// console.log('order the pizza')
//   pr.then((data)=>{
//     console.log(data);
//     console.log('me second')
//   })
// pr.catch((data)=>{
//     console.log(data);
//     console.log('no pizza, i am sad');
// })

//.....................................
// function printNum(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(num%2==0){
//                 resolve("condition satisfied");
//             }
//             else{
//                 reject('number not even');
//             }
//         },1000)
       
//     })

// }
// printNum(3).then((result)=>{
//     console.log('result');
// }).catch((result)=>{
//     console.log('result');
// })


//................................promise chaining...................

function callpromise(alphabet){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(alphabet);
            resolve('promise done');
        },1000)
    })
}
callpromise("A").then(()=>callpromise("B")).then(()=>callpromise("C")).then(()=>callpromise("D"))


