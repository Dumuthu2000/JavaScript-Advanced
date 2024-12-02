//Promise is an Object that represents the completion or failure of a asynchronous operation
//Promise avoid callback hell when work with asynchronous opeartions
//Promises are provide methods to handle asynchronouse opeartions

const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise is worked success");
    }else{
        reject("Promise is failed");
    }
});

myPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err); 
});