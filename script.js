const notas = document.querySelectorAll(".nota");
const medias = document.querySelectorAll(".media");
const situacao = document.querySelectorAll(".situacao")


for (let n = 0; n < notas.length; n++) {
    notas[n].addEventListener("input", calcularMedia);
}
function calcularMedia() {
    for (let n = 0; n < notas.length; n += 3) {
        const nota1 = parseFloat(notas[n].value) || 0;
        const nota2 = parseFloat(notas[n + 1].value) || 0;
        const nota3 = parseFloat(notas[n + 2].value) || 0;
        const media = (nota1 + nota2 + nota3) / 3;

        medias[n / 3].textContent = media.toFixed(2);

        if (media >= 6){
            situacao[n/3].textContent = "Aprovado";
        } else {
            situacao[n/3].textContent = "Reprovado";
        }
    }
}

