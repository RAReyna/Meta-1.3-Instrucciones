// Módulo de operaciones matemáticas básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
}

// Exportación múltiple
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    potencia: (a, b) => Math.pow(a, b),
    raiz: (a) => Math.sqrt(a),
    version: "1.0.0"
}; //Se tuvo que agregar potencia y raiz en module exports.

