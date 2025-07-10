let contador = document.getElementById("contador");
let aviso = document.getElementById("aviso");
let log = document.getElementById("log");
let res = document.getElementById("res");
let i = 0;
let num = null
let maiorValor = 0
let menorValor = 0
let lista = []
let soma = 0

function comparar(num) {
    if (lista.length === 0) return;

    if (lista.length === 1 || maiorValor === menorValor) {
        maiorValor = menorValor = num;
    } else {
        maiorValor = Math.max(maiorValor, num);
        menorValor = Math.min(menorValor, num);
    }
}

document.getElementsByTagName("button")[0].addEventListener("click", () => {
    num = Number.parseFloat(document.getElementById("num").value);
    if (isNaN(num)){
        aviso.innerHTML = "Insira algum número para adicionar";
        return
    }
    aviso.innerHTML = "Você pode adicionar quantos números quiser!";
    i++;
    contador.innerHTML = `${i} número(s) adicionado(s)`;

    const item = document.createElement("option");
    item.innerHTML = `${num} foi adicionado!`;

    comparar(num)
    log.appendChild(item);
    lista.push(num);
    soma += num;

    res.innerHTML = ""
});

document.getElementsByTagName("button")[1].addEventListener("click", () => {
    if (lista.length == 0){
        res.innerHTML = "Nada foi adicionado!"
    } else{
        let media = soma / lista.length
        res.innerHTML = `
            <p>Temos ${lista.length} número(s) cadastrado(s) ao todo.</p>
            <p>Maior número: ${maiorValor}</p>
            <p>Menor número: ${menorValor}</p>
            <p>Somando tudo, temos ${soma}</p>
            <p>Média dos valores: ${media.toFixed(2)}</p> 

            

        `;
    }
});