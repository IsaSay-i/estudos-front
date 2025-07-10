const cubo = document.getElementById("cubo")
const goal = document.getElementById("goal")
const arena = document.getElementById("arena")
const msg = document.getElementById("mensagem")

let posicaoX = 0;
let posicaoY = 0;
let colidindo = false;

const mensagens = [
    "Muito bem <3",
    "Parabenos",
    "Não esqueça de beber água",
    "Continue vivendo ;)",
    "Meh, dá para fazer melhor, isso foi majoritariamente feito pelo ChatGPT.."
];

function mensagemAleatoria() {
    const index = Math.floor(Math.random() * mensagens.length);
    return mensagens[index];
}

document.addEventListener("keydown", (event) => {
    const arenaRect = arena.getBoundingClientRect();
    const cuboRect = cubo.getBoundingClientRect();

    if (event.key === "ArrowRight" && posicaoX + 10 <= 450) {
        posicaoX += 10;
    } else if (event.key === "ArrowLeft" && posicaoX - 10 >= 0) {
        posicaoX -= 10;
    } else if (event.key === "ArrowDown" && posicaoY + 10 <= 450) {
        posicaoY += 10;
    } else if (event.key === "ArrowUp" && posicaoY - 10 >= 0) {
        posicaoY -= 10;
    }


    cubo.style.left = posicaoX + "px";
    cubo.style.top = posicaoY + "px";

    checarColisao();
});

function checarColisao() {
    const cuboRect = cubo.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();

    const colidiu =
        cuboRect.left < goalRect.right &&
        cuboRect.right > goalRect.left &&
        cuboRect.top < goalRect.bottom &&
        cuboRect.bottom > goalRect.top;

    if (colidiu && !colidindo) {
        colidindo = true;
        cubo.style.backgroundColor = "green";
        msg.innerText = mensagemAleatoria();
        msg.style.display = "block";
    } else if (!colidiu && colidindo) {
        colidindo = false;
        cubo.style.backgroundColor = "red";
        msg.style.display = "none";
    }
}