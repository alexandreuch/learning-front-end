function decifra(){
    var entrada = window.document.getElementById("entrada")
    var desloc= window.document.getElementById("desloc")
    var encr = window.document.getElementsByName("ecript")
    
    let deslocamento;
    const caractVal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(entrada.value.length > 0 && verifica(caractVal,entrada.value)){
        if(desloc.value > 30 || desloc.value<0){
            window.alert("Deslocamento tem que ser maior que 0 ou menor que 31")
        }else{
            if (desloc.value == null) { deslocamento = 0 }
            else{deslocamento = desloc.value}
            
            deslocamento = Number(deslocamento)
            let valores = entrada.value 
            let bff = ""
            let buffer = 0

            if(encr[0].checked){
                    for(i in valores){
                        buffer = caractVal.indexOf(valores[i])
                        console.log(buffer)
                        buffer += deslocamento
                        if(buffer > caractVal.length){ buffer -= caractVal.length }
                        bff+=caractVal[buffer]
                    }

            }else{
                for(i in valores){
                    buffer = caractVal.indexOf(valores[i])
                    buffer -= deslocamento
                    if(buffer < 0){ buffer = caractVal.length - buffer }
                    bff+=caractVal[buffer]
                    }
                }

            var res = window.document.getElementById("res")
            let resultado = window.document.createElement("output")
            resultado.value = bff
            res.innerHTML = ""
            res.appendChild(resultado)        
        }
    }else{
        window.alert("Digite uma entrada valida!!")
    }
}

function verifica(validos,str){
    for(i in str){
        if(validos.includes(str[i]) == false){return false}
    }return true
}