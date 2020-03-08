document.getElementById("colorGenerator").addEventListener('keypress', e => {
    if (e.code == 'Enter') {
        blocks()
    }
})

document.getElementById("newColor").addEventListener("click", blocks)

function gerarCor() {
    const hexadecimais = "0123456789ABCDEF";

    let color = "#";
    let num;

    // Vai escolher se vai ser rgb 1 ou rgb 2

    switch (Math.floor(Math.random() * 2)) {
        case 0:
            num = 3;
            break;
        case 1:
            num = 6;
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

        // vai verificar se tem alguma cor repitida
        arrayColor.indexOf(color) != -1 ? i-- : arrayColor.push(color)
    }

    // organizar a cores

    arrayColor.sort(colorSort)

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

// Organizar cores por decimal
function colorSort(a, b) {
    let decimalA = 0
    let decimalB = 0
    let num

    // Inverter o codigo da cor
    a = a.replace(`#`, ``).trim().split(``).reverse().join(``)
    b = b.replace(`#`, ``).trim().split(``).reverse().join(``)

    // Para cada parametro, vai substituir o hexadecimal para decimal
    for (let i in arguments) {
        // Para cada valor, vai verificar se é ou não uma letra
        for (let a in arguments[i]) {
            // Substituindo a letra pelo seu valor decimal
            switch (arguments[i][a]) {
                case `A`:
                    num = 10
                    break
                case `B`:
                    num = 11
                    break;
                case `C`:
                    num = 12
                    break;
                case `D`:
                    num = 13
                    break
                case `E`:
                    num = 14
                    break
                case `F`:
                    num = 15
                    break
                default:
                    // caso não seja uma letra
                    num = arguments[i][a]
            }

            // Hexadecimal para Decimal
            if (i == 0) {
                decimalA += num * 16 ** a++
            } else {
                decimalB += num * 16 ** a++
            }
        }
    }

    return decimalA - decimalB
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

// Enviando a mensagem de texto copiado!
function copiedText() {
    const copieds = document.querySelector('div.copied-text')
    const copiedText = document.createElement('div')

    copiedText.innerText = "Copiado!"
    copiedText.setAttribute('class', 'copied')
    copieds.appendChild(copiedText)

    // A mensagem ficará visivel por 2s
    setTimeout(() => {
        return copieds.removeChild(copiedText)
    }, 2000)
}