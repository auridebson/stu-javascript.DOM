const especiesDeTigres = [
    'Tigre de Bengala',
    'Tigre da Indochina',
    'Tigre Malaio',
    'Tigre de Amur',
    'Tigre de Sumatra',
    'Tigre do Sul da China',
    'Tigre de Malayan',
    'Tigre de Indonésia',
    'Tigre do Cáspio',
    'Tigre da Coreia'
  ];


const btnFoto1 = document.querySelector("#btnFoto1")
const btnFoto2 = document.querySelector("#btnFoto2")
const btnFoto3 = document.querySelector("#btnFoto3")
const btnFoto4 = document.querySelector("#btnFoto4")

const card1 = document.querySelector("#card1")
const textoCard1 = document.querySelector("#texto-card1")

const pictureLarge = document.querySelector(".picture-large")



const listaTigres = () => {
    textoCard1.innerHTML = ""
    for (tigre of especiesDeTigres) {
        textoCard1.innerHTML += `<p>${tigre}</p>`

    }
    pictureLarge.innerHTML = `<img src="../images/tigre_de_bengala.jpg">`
}

btnFoto1.addEventListener("click", listaTigres)