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

function blocks() {
    const num = document.getElementById("colorGenerator")
    const container = document.querySelector('main.container');
    const arrayColor = []
    
    if(num.value > 250) {
        alert(`Ultrapassou o número maximo! '${num.value}' agora é 250! `)
        num.value = 250
    }
    
    
    container.innerHTML = "";

    for (let i = 0; i < num.value; i++) {

        arrayColor.push(gerarCor(0), gerarCor(1), gerarCor(2))
    }

    arrayColor.sort()

    for (let i in arrayColor) {
        container.innerHTML += `<div class="blocks" onclick="copyText(this)" style="background: ${arrayColor[i]}">${arrayColor[i]}</div>`;
    }
}

function copyText(copyDiv) {
    const element = document.createElement('input');

    element.value = copyDiv.textContent;
    document.body.appendChild(element);

    element.select();
    document.execCommand('copy');

    document.body.removeChild(element);

    copiedText()
}

function copiedText() {
    const copieds = document.querySelector('div.container-copied-text')
    
    const copiedText = document.createElement('div')
    
    copiedText.innerText = "Copiado!"
    copiedText.setAttribute('class', 'copied')
    copieds.appendChild(copiedText)

    setTimeout(function() {
        return copieds.removeChild(copiedText)
    }, 1500)
}