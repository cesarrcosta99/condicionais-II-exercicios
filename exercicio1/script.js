const numero=Number(prompt("Insira um Numero"))
  if(numero % 2 === 0){
    if(numero % 3 === 0){
        console.log("Esse numero é divisivel por 2 e por 3")
    }else{
        console.log("Esse numero é divisivel por 2,mas não é por 3")
    }
 }else{
    console.log("Esse numero não é divisivel por 2 e nem por 3")
 } 
 
 if(numero % 2 === 0 && numero % 3 === 0){
    console.log("Esse numero é divisivel por 2 e por 3")
 }else if(numero % 2 === 0){
    console.log("Esse numero é divisivel por 2,mas não é por 3")
 }else{
    console.log("Esse numero não é divisivel por 2 e nem por 3")
 }

