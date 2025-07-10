document.querySelector("button").addEventListener("click" , () => {
    const anoAtual = new Date().getFullYear();
    const res = document.getElementById("res");
    const ano = document.getElementById("ano");
    const especieCampo = document.getElementsByName("especieRad");

    if (ano.value.length == 0 || ano > anoAtual || (!especieCampo[0].checked && !especieCampo[1].checked)) {
        window.alert(`ERRO:l Verifique os campos e tente novamente`);
    } else {
        const idade = anoAtual - Number.parseInt(ano.value);
        const especie = especieCampo[0].checked ? "gato" : "cao";
        const img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (especie == "gato") {
            if (idade <= 1) {
                res.innerHTML = `<p>É um filhotinho <3</p>`;
                img.setAttribute("src", "src/img/filhoteGato.jpeg");
            } else if (idade <= 2) {
                res.innerHTML = `<p>Já ta crescidinho!</p>`;
                img.setAttribute("src", "src/img/jovemGato.avif");
            } else if (idade <= 10) {
                res.innerHTML = `<p>Um adulto!</p>`;
                img.setAttribute("src", "src/img/adultoGato.jpg");
            } else {
                res.innerHTML = `<p>Agora é um idoso</p>`;
                img.setAttribute("src", "src/img/idosoGato.jpeg");
            }
        } else if (especie == "cao") {
            if (idade <= 1) {
                res.innerHTML = `<p>É um filhotinho <3</p>`;
                img.setAttribute("src", "src/img/filhoteCao.jpg");
            } else if (idade <= 2) {
                res.innerHTML = `<p>Já ta crescidinho!</p>`;
                img.setAttribute("src", "src/img/jovemCao.avif");
            } else if (idade <= 9) {
                res.innerHTML = `<p>Um adulto!</p>`;
                img.setAttribute("src", "src/img/adultoCao.jpg");
            } else {
                res.innerHTML = `<p>Agora é um idoso</p>`;
                img.setAttribute("src", "src/img/idosoCao.jpeg");
            }
        }
        res.appendChild(img);
        res.innerHTML += `<p>Idade: ${idade == 0 ? `Alguns meses` : idade}</p>`;

    }

    
});