//Blocking task
function blockFunc(){
    for (let i = 0; i < 5e9; i++) {};
    console.log("Finished long task");
};

console.log("Start");
blockFunc();
console.log("End");
