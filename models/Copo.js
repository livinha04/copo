class Copo {

    constructor(raioMaior, raioMenor, altura) {
        this.raioMaior = raioMaior;
        this.raioMenor = raioMenor;
        this.altura = altura;
    }

    // g = √(h² + (R - r)²)
    calcularGeratriz() {
        return Math.sqrt(
            (this.altura ** 2) +
            ((this.raioMaior - this.raioMenor) ** 2)
        );
    }

    // Ab = π · r²
    calcularAreaBaseMenor() {
        return Math.PI * (this.raioMenor ** 2);
    }

    // AB = π · R²
    calcularAreaBaseMaior() {
        return Math.PI * (this.raioMaior ** 2);
    }

    // Al = π · g · (R + r)
    calcularAreaLateral() {
        let g = this.calcularGeratriz();

        return Math.PI * g *
            (this.raioMaior + this.raioMenor);
    }

    // V = (π · h / 3) · (R² + R · r + r²)
    calcularVolume() {
        return (
            (Math.PI * this.altura) / 3
        ) * (
            (this.raioMaior ** 2) +
            (this.raioMaior * this.raioMenor) +
            (this.raioMenor ** 2)
        );
    }
}

module.exports = Copo;