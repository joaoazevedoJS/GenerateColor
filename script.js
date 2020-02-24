function gerarCor(indice) {
    if(indice > 2) {
        indice = 2
    }

    const hexadecimais = "0123456789ABCDEF";

    let color6 = "#";
    let color3 = "#";
    let colorRba = "#";

    for (let i = 0; i < 6; i++) {
        color6 += hexadecimais[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 3; i++) {
        color3 += hexadecimais[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
        colorRba += hexadecimais[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 2; i++) {
        colorRba += hexadecimais[Math.floor(Math.random() * 15)];
    }

    const arrayColor = [color3, color6, colorRba]

    return arrayColor[indice]
}

(function () {
    const arrayColor = []
    
    const container = document.querySelector('div.container');

    for (let i = 0; i < 100; i++) {

        arrayColor.push(gerarCor(0), gerarCor(1), gerarCor(2))
    }

    arrayColor.sort()

    for (let i in arrayColor) {
        container.innerHTML += `<div class="blocks" style="background: ${arrayColor[i]}">${arrayColor[i]}</div>`;
    }
})()