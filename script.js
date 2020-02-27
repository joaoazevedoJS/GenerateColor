function gerarCor() {
    const hexadecimais = "0123456789ABCDEF";

    let color = "#";
    let num;

    // Vai escolher se vai ser rgb 1 ou rgb 2 ou rgba

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            num = 3;
            break;
        case 1:
            num = 6;
            break;
        case 2:
            num = 8;
            break;
    }

    // vai criar uma nova cor 

    for (let i = 0; i < num; i++) {
        color += hexadecimais[Math.floor(Math.random() * 16)];
    }

    return color
}

function blocks() {
    const num = document.getElementById("colorGenerator")
    const container = document.querySelector('main.container');
    const arrayColor = []

    if (num.value > 5000) {
        alert(`Ultrapassou o número maximo! '${num.value}' agora é 5000! `)
        num.value = 5000
    }

    container.innerHTML = "";

    // vai gerar uma nova cor e adiconar no array

    for (let i = 0; i < num.value; i++) {
        const color = gerarCor()

        colorRepeated(color, arrayColor) == true ? i-- : arrayColor.push(color)
    }

    // organizar a cores

    arrayColor.sort()

    // vai criar uma div com a cor gerada, para cada elemento do array

    arrayColor.forEach(color => {
        const blocks = document.createElement('div');
        blocks.setAttribute("class", 'blocks');

        blocks.style.background = color;
        blocks.innerText = color;

        blocks.onclick = () => copyText(color);
        container.appendChild(blocks)
    })
}

// vai verificar se tem alguma cor repitida

function colorRepeated(color, array) {
    for (let i in array) {
        if (color == array[i]) {
            return true
        }
    }
}

function copyText(color) {
    // vai criar um input
    const element = document.createElement('input');

    // o input vai receber o valor hexadecimal da div
    element.value = color;

    // vai adicionar o input no body
    document.body.appendChild(element);

    // vai selecionar o conteúdo do input (a cor)
    element.select();

    // vai copiar o conteúdo do input (esse comando só funciona com o input, textarea, ...)
    document.execCommand('copy');

    // vai remover o input no body
    document.body.removeChild(element);

    // vai enviar um mensagem falando que o conteúdo foi copiado
    return copiedText()
}

// enviando a mensagem de texto copiado!

function copiedText() {
    const copieds = document.querySelector('div.container-copied-text')

    const copiedText = document.createElement('div')

    copiedText.innerText = "Copiado!"
    copiedText.setAttribute('class', 'copied')
    copieds.appendChild(copiedText)

    // a mensagem ficará visivel por 1.5s
    setTimeout(function () {
        return copieds.removeChild(copiedText)
    }, 1500)
}