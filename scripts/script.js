const especiesDeTigres = [
    'Tigre de Bengala (Panthera tigris tigris)',
    'Tigre da Indochina (Panthera tigris corbetti)',
    'Tigre Malaio (Panthera tigris jacksoni)',
    'Tigre de Amur (Panthera tigris altaica)',
    'Tigre de Sumatra (Panthera tigris sumatrae)',
    'Tigre do Sul da China (Panthera tigris amoyensis)',
    'Tigre de Malayan (Panthera tigris jacksoni)',
    'Tigre de Indonésia (Panthera tigris sondaica)',
    'Tigre do Cáspio (Panthera tigris virgata)',
    'Tigre da Coreia (Panthera tigris altaica)'
  ];


const btnFoto1 = document.querySelector("#btnFoto1")
const btnFoto2 = document.querySelector("#btnFoto2")
const btnFoto3 = document.querySelector("#btnFoto3")
const btnFoto4 = document.querySelector("#btnFoto4")

const card1 = document.querySelector("#card1")
const textoCard1 = document.querySelector("#texto-card1")



const listaTigres = () => {
    textoCard1.innerHTML = ""
    for (tigre of especiesDeTigres) {
        textoCard1.innerHTML += `<p>${tigre}</p>`

    }
}

btnFoto1.addEventListener("click", listaTigres)