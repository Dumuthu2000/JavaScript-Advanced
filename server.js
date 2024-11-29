function blockFunc(){
    setTimeout(()=>{
        for (let i = 0; i < 2e9; i++) {};
        console.log("Bloking task end");
    }, 2000)
}

console.log("Start");
blockFunc();
console.log("End");
