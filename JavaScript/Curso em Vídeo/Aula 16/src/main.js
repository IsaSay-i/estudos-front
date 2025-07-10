let tabuada = document.getElementById("tabuada")
let temp = document.createElement("option")
temp.text = "A Tabuada aparecerá aqui!"
tabuada.appendChild(temp)

document.getElementsByTagName("button")[0].addEventListener("click", function clicou(){
    let num = Number.parseFloat(document.getElementById("num").value)

    if (isNaN(num)){
        window.alert("Insira um número!")
    } else{
        tabuada.innerHTML = "";
        tabuada.setAttribute("size", "10")
        for (let i = 1; i <= 10; i++){
            let item = document.createElement("option")
            item.text = `${num.toLocaleString("pt-br")} x ${i} = ${(num * i).toLocaleString("pt-br")}`
            tabuada.appendChild(item)
        }
    }
});