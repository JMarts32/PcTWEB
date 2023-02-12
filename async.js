function asyncfunction (i, callback) {
    setTimeout(()=>callback("Evaluando " + i),Math.random() * 500);
}

for (let i = 0; i <10; i++){
    asyncfunction(i, (value) => console.log(value));
}

const promise = new Promise((resolve,reject)=>{
    //resolve se ejecuta cuando todo se hace bien :D
    if (true){
        resolve("Exito en la promesa");
    } else {
        // reject se hace cuando hay fallos
        reject("Fallo en la promesa");
    }
});

promise.then((value)=> console.log(value));