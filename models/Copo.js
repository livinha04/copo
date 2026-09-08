class Copo {
    constructor(raioMaior, raioMenor, altura) {
        this.raioMaior = raioMaior; // R
        this.raioMenor = raioMenor; // r
        this.altura = altura;       // h
    }

    // g = √(h² + (R - r)²)
    calcularGeratriz() {
        return Math.sqrt(
            this.altura ** 2 +
            (this.raioMaior - this.raioMenor) ** 2
        );
    }

    // Ab = π · r²
    calcularAreaBaseMenor() {
        return Math.PI * this.raioMenor ** 2;
    }

    // AB = π · R²
    calcularAreaBaseMaior() {
        return Math.PI * this.raioMaior ** 2;
    }

    // Al = π · g · (R + r)
    calcularAreaLateral() {
        const g = this.calcularGeratriz();

        return Math.PI * g *
            (this.raioMaior + this.raioMenor);
    }

    // V = (π · h / 3) · (R² + R · r + r²)
    calcularVolume() {
        return (
            Math.PI * this.altura / 3
        ) * (
            this.raioMaior ** 2 +
            this.raioMaior * this.raioMenor +
            this.raioMenor ** 2
        );
    }

    // Classificação do copo pelo volume
    classificarVolume() {
        const volume = this.calcularVolume();

        if (volume < 180) {
            return "Copo dose (cafezinho)";
        } else if (volume < 350) {
            return "Copo padrão (Água/Chá)";
        } else {
            return "Copo grande (Suco/Refrigerante)";
        }
    }

    // Área total = AB + Ab + Al
    calcularAreaTotal() {
        const areaBaseMaior = this.calcularAreaBaseMaior();
        const areaBaseMenor = this.calcularAreaBaseMenor();
        const areaLateral = this.calcularAreaLateral();

        return areaBaseMaior +
               areaBaseMenor +
               areaLateral;
    }
}

module.exports = Copo;