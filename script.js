const notas = document.querySelectorAll(".nota");
const medias = document.querySelectorAll(".media");
const situacao = document.querySelectorAll(".situacao");

document.addEventListener("DOMContentLoaded", () => {
    for (let n = 0; n < notas.length; n++) {
        const savedValue = localStorage.getItem(`nota_${n}`);
        if (savedValue !== null) {
            notas[n].value = savedValue;
        }
    }

    calcularMedia();
});

for (let n = 0; n < notas.length; n++) {
    notas[n].addEventListener("input", () => {
        localStorage.setItem(`nota_${n}`, notas[n].value);
        calcularMedia();
    });
}

function calcularMedia() {
    for (let n = 0; n < notas.length; n += 3) {
        const nota1 = parseFloat(notas[n].value) || 0;
        const nota2 = parseFloat(notas[n + 1].value) || 0;
        const nota3 = parseFloat(notas[n + 2].value) || 0;
        const media = (nota1 + nota2 + nota3) / 3;

        if (!media) continue;

        medias[n / 3].textContent = media.toFixed(2);

        if (media >= 6) {
            situacao[n / 3].textContent = "Aprovado";
            situacao[n / 3].style.color = "white";
            situacao[n / 3].style.backgroundColor = "green";
        } else {
            situacao[n / 3].textContent = "Reprovado";
            situacao[n / 3].style.color = "white";
            situacao[n / 3].style.backgroundColor = "red";
        }
    }
}

const limparButton = document.createElement("button");
limparButton.textContent = "Limpar";
limparButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload(); 
});

document.body.appendChild(limparButton);
