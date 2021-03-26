function decifra(){
    var entrada = window.document.getElementById("entrada")
    var res = window.document.getElementById("res")
    res.innerHTML = ""
    if(entrada.value.length <= 0){
        window.alert("Digite uma entrada!!")
    }
    let resultado = window.document.createElement("output")
    resultado.value = entrada.value
    res.appendChild(resultado)
}