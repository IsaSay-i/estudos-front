const botao = document.querySelector("button").addEventListener("click", () => {

let i = Number.parseInt(document.getElementById("i").value)
let j = Number.parseInt(document.getElementById("j").value)
let k = Number.parseInt(document.getElementById("k").value)
let res = document.getElementById("res")

if ((isNaN(i)) || (isNaN(j)) || (isNaN(k))){
    res.innerHTML = "Preencha todos os campos!"
} else if (k > Math.abs(j)){
    res.innerHTML = "O intervalo não pode ser maior que o final!"
} else{
    if (k == 0){
        window.alert("Passo Inválido!\nO passo foi considerado sendo igual à 1.");
        k = 1
    }
    res.innerHTML = "Contando:<br>"
    if (i < j){
        for (; i <= j; i += k){
            res.innerHTML += `${i} 👉 `
        }
    } else{
        for (; j <= i; i -= k){
            res.innerHTML += `${i} 👉 `
        }
    }
    res.innerHTML += `🏁!`
}

});