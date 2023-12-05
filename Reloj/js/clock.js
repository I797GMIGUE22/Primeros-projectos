const PAGINA_PRINCIPAL = document.getElementById("pagina-principal");
const BOTON_RELOJ = document.getElementById("boton-reloj");
const BOTON_CRONO = document.getElementById("boton-cronometro");
const BOTON_INICIAR_CRONO = document.getElementById("boton-iniciar-crono");
const BOTON_PAUSAR = document.getElementById("boton-pausar");
const BOTON_CONTINUAR = document.getElementById("boton-continuar");
const BOTON_REINICIAR = document.getElementById("boton-reiniciar");
const BOTON_LAPS = document.getElementById("boton-mostrar-laps");
const BOTON_RETROCEDER = document.getElementById("boton-retroceder");
const SECTION_RELOJ_CRONO = document.getElementById("reloj-cronometro");
const CONTADOR = document.getElementById("contador");
const LAPS = document.getElementById("laps");
const LISTA_LAPS = document.getElementById("lista-laps");
const BOTON_OCULTAR_LISTA = document.getElementById("boton-ocultar-lista");
const BOTON_MOSTRAR_LISTA = document.getElementById("boton-mostrar-lista")

//TODO: SEGUNDOS

const SEGUNDOS_UNIDADES = document.getElementById("u-seg");
let uSeg = 0;

const SEGUNDOS_DECENAS = document.getElementById("d-seg");
let dSeg = 0;


//TODO: MINUTOS

const MINUTOS_UNIDADES = document.getElementById("u-min");
let uMin = 0;

const MINUTOS_DECENAS = document.getElementById("d-min");
let dMin = 0;


//TODO: HORAS

const HORAS_UNIDADES = document.getElementById("u-hrs");
let uHrs = 0;

const HORAS_DECENAS = document.getElementById("d-hrs");
let dHrs = 0;


let contador;
let reloj;
let paused = false;
let laps = [];

function mostrarContador() {
    SEGUNDOS_UNIDADES.innerHTML = uSeg
    SEGUNDOS_DECENAS.innerHTML = dSeg
    MINUTOS_UNIDADES.innerHTML = uMin
    MINUTOS_DECENAS.innerHTML = dMin
    HORAS_UNIDADES.innerHTML = uHrs
    HORAS_DECENAS.innerHTML = dHrs
}

function reiniciarContador() {
    clearInterval(contador)
    uSeg = 0
    dSeg = 0
    uMin = 0
    dMin = 0
    uHrs = 0
    dHrs = 0
    mostrarContador()
}

mostrarContador();

function contadorFuncionamiento () {
    if (uSeg < 9) uSeg++;
    else {
        uSeg = 0;
        dSeg++;
    }
    if (dSeg === 6) {
        dSeg = 0;
        uMin++;
    }

    if (uMin > 9) {
        uMin = 0;
        dMin++;
    }
    if (dMin === 6) {
        dMin = 0;
        uHrs++;
    }

    if (uHrs > 9) {
        uHrs = 0;
        dHrs++;
    }
    if (dHrs === 1 && uHrs === 3) {
        dHrs = 0;
        uHrs = 1;
    }
    mostrarContador();
}

function iniciarContador () {
    contador = setInterval(() => {
        if (!paused) contadorFuncionamiento()
    }, 1000);
}

function cargarSectionContador () {
    PAGINA_PRINCIPAL.style.display = "none"
    SECTION_RELOJ_CRONO.style.display = "block"
    BOTON_RETROCEDER.style.display = "inline-block"
}

BOTON_RELOJ.addEventListener("click", () => {
    cargarSectionContador()
    reloj = true;
    iniciarContador()
});

BOTON_CRONO.addEventListener("click", () => {
    cargarSectionContador()
    reloj = false
    BOTON_INICIAR_CRONO.style.display = "inline-block"
});

BOTON_LAPS.addEventListener("click", () => {
    LAPS.style.display = "block"
    BOTON_OCULTAR_LISTA.style.display = "inline-block"
    LISTA_LAPS.replaceChildren()
    laps.push(CONTADOR.innerText)
    for (let i = 0; i < laps.length; i++) {
        let li = document.createElement("li")
        li.innerHTML = `${i + 1} \t - \t ${laps[i]}`
        LISTA_LAPS.appendChild(li)
    }
})

BOTON_MOSTRAR_LISTA.addEventListener("click", () => {
    LAPS.style.display = "block"
    BOTON_OCULTAR_LISTA.style.display = "inline-block"
    BOTON_MOSTRAR_LISTA.style.display = "none"
})

BOTON_OCULTAR_LISTA.addEventListener("click", () => {
    LAPS.style.display = "none"
    BOTON_OCULTAR_LISTA.style.display = "none"
    BOTON_MOSTRAR_LISTA.style.display = "inline-block"
})

BOTON_RETROCEDER.addEventListener("click", () => {
    PAGINA_PRINCIPAL.style.display = "block"
    SECTION_RELOJ_CRONO.style.display = "none"
    BOTON_REINICIAR.style.display = "none"
    BOTON_RETROCEDER.style.display = "none"
    BOTON_INICIAR_CRONO.style.display = "none"
    BOTON_CONTINUAR.style.display = "none"
    BOTON_PAUSAR.style.display = "none"
    LAPS.style.display = "none"
    BOTON_LAPS.style.display = "none"
    BOTON_OCULTAR_LISTA.style.display = "none"
    BOTON_MOSTRAR_LISTA.style.display = "none"
    paused = false
    laps = []
    reiniciarContador()
})

BOTON_PAUSAR.addEventListener("click", () => {
    paused = true
    BOTON_CONTINUAR.style.display = "inline-block"
    BOTON_PAUSAR.style.display = "none"
})

BOTON_CONTINUAR.addEventListener("click", () => {
    paused = false
    BOTON_CONTINUAR.style.display = "none"
    BOTON_PAUSAR.style.display = "inline-block"
})

BOTON_REINICIAR.addEventListener("click", () => {
    reiniciarContador()
    if (!reloj) {
        BOTON_INICIAR_CRONO.style.display = "inline-block"
        BOTON_REINICIAR.style.display = "none"
        BOTON_LAPS.style.display = "none"
        BOTON_PAUSAR.style.display = "none"
        BOTON_CONTINUAR.style.display = "none"
        BOTON_MOSTRAR_LISTA.style.display = "none"
        paused = false
        laps = []
    }
})

BOTON_INICIAR_CRONO.addEventListener("click", () => {
    iniciarContador()
    BOTON_PAUSAR.style.display = "inline-block"
    BOTON_REINICIAR.style.display = "inline-block"
    BOTON_LAPS.style.display = "inline-block"
    BOTON_INICIAR_CRONO.style.display = "none"
})