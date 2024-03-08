const texto_encriptado = document.querySelector(".texto-encriptado");
const texto_mensaje = document.querySelector(".texto-mensaje");
const btn_copiar = document.querySelector(".btnCopiar");
const advertencia = document.getElementById("advertencia");
const btn_encriptar = document.querySelector(".btnEncriptar");
const btn_desencriptar = document.querySelector(".btnDesencriptar");

// para cerrar el mensaje
document.addEventListener("click", function (event) {
    // Verificar: 1)Si esta abierto/block // 2)Si el click fue dentro del cuadro //
    if (advertencia.style.display === "block" && !advertencia.contains(event.target) &&
        // 3) 4) Si el click fue en el boton de encriptar o el de desencriptar
        !btn_encriptar.contains(event.target) && !btn_desencriptar.contains(event.target)) {
        closeWarning();
    }
});

const matrix_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
    encriptar(texto_encriptado.value);
}

function btnDesencriptar() {
    desencriptar(texto_encriptado.value);
}

function encriptar(frase) {
    if (isEmpty()) {
        advertencia.style.display = "block";
    } else {
        checkWidth();
        for (let i = 0; i < matrix_code.length; i++) {
            if (frase.includes(matrix_code[i][0])) {
                frase = frase.replaceAll(matrix_code[i][0], matrix_code[i][1]);
            }
        }
        clean();
        texto_mensaje.value = frase;
    }
}

function desencriptar(frase) {
    if (isEmpty()) {
        advertencia.style.display = "block";
    } else {
        checkWidth();
        for (let i = 0; i < matrix_code.length; i++) {
            if (frase.includes(matrix_code[i][1])) {
                frase = frase.replaceAll(matrix_code[i][1], matrix_code[i][0]);
            }
        }
        clean();
        texto_mensaje.value = frase;
    }
}

function copiar() {
    navigator.clipboard.writeText(texto_mensaje.value);
}

function checkWidth() {
    let windowWidth = window.innerWidth;
    if (windowWidth < 800) {
        let campo_desencriptado = document.querySelector(".campo-desencriptado");
        campo_desencriptado.style.height = "35vh";
    }
}

function isEmpty() {
    return texto_encriptado.value === "";
}

function closeWarning() {
    var advertencia = document.getElementById("advertencia");
    advertencia.style.display = "none";
}

function clean() {
    texto_encriptado.value = "";
    texto_mensaje.style.backgroundImage = "none";
    btn_copiar.style.display = "inline-block";
}
