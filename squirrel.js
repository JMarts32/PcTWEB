const URL = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";

fetch(URL).then(res=>res.json()).then(res=>{
    organize(res);
});

let correlation = {};
let finalcorralation = [];

function organize (res){
    for (eventos of res){
        for (evento of eventos["events"]){
            // [tp,tn,fp,fn]
            correlation[evento] = [0,0,0,0];
        }
    }

    for (eventos of res){
        for (evento of eventos["events"]){

            if (!eventos["squirrel"]){
                correlation[evento][3] += 1;
            }else{
                correlation[evento][0]+= 1;
            }
        }
    }

    for (evento in correlation){
        for (eventos of res){
            const eventostemp = eventos["events"];
            if (eventostemp.includes(evento) === false){
                if (eventos["squirrel"] == true){
                    correlation[evento][2] += 1;
                }else{
                    correlation[evento][1]+= 1;
                }
            }
        }
    }

    for (calculete in correlation){
        let s = correlation[calculete];

        let numerador = ((s[0]*s[1])-(s[2]*s[3]));
        let denominador = Math.sqrt((s[0]+s[2])*(s[0]+s[3])*(s[1]+s[3])*(s[1]+s[2]));
        let result = 0;
        if (numerador != 0 || denominador != 0){
            result = numerador/denominador;
        }
    
        finalcorralation.push({"event":calculete,"correlation":result});
    }

    finalcorralation.sort((a, b) => {
        return a.correlation - b.correlation;
    });

    console.log(finalcorralation.reverse());


}
