//Normal function
const sayHello = (name, callback) => {
    console.log(`Hi this is ${name}`);

    //Invoking the callback function
    setTimeout(()=>{callback()},2000);
};

//Initialize the callback function
function sayBye(){
    for (let i = 0; i < 2e9; i++) {}
    console.log("End callback");
    
};

console.log("Start program");
//Invoking sayHello function
sayHello("1 Billion Tech", sayBye);
console.log("End synchronous program");
