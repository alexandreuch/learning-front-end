function load(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var edu = window.document.getElementById("educacao")
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são <strong>${horas}</strong> horas.`
    if(horas >=0 && horas < 12){
        edu.innerHTML = "Bom dia!!! =)"
        img.src = "manha.png"
        document.body.style.background = "#e2cd9f"
    }else if(horas >=12 && horas <= 18){ 
        edu.innerHTML = "Boa tarde!!! =)"
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"
    }else{
        edu.innerHTML = "Boa noite!!! =)"
        img.src = "noite.png"
        document.body.style.background = "#515154"
    }
}
