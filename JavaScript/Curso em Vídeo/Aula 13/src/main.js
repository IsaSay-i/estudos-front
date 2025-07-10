
function carregar() {
    // const data = new Date();
    // const hora = data.getHours();
    const hora = 18;
    const msg = document.getElementById("msg");
    const img = document.getElementById("img");

    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora >= 5 && hora < 12){
        img.src = "src/img/manha.jpg";
        document.body.style.backgroundColor = "#FDC374";
    } else if (hora >= 12 && hora < 18){
        img.src = "src/img/tarde.jpg";
        document.body.style.backgroundColor = "#9DAABA";
    } else if (hora >= 0 && hora < 5){
        img.src = "src/img/madruga.jpg";
        document.body.style.backgroundColor = "#050D1E";
        // Madrugada\nA mimir zzz...
    } else {
        img.src = "src/img/noite.jpg";
        document.body.style.backgroundColor = "#27183D";
    }
}