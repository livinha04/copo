class Copo {
    constructor(raioMaior, raioMenor, altura){
        this.raioMaior = raioMaior;
        this.raioMenor = raioMenor;
        this.altura = altura;
    }


    calcularGeratriz(){
        return Math.sqrt(
            this.altura ** 2 +
            (this.raioMaior - this.raioMenor) ** 2
        );
    }


    calcularAreaBaseMenor(){
        return Math.PI * this.raioMenor ** 2;
    }


    calcularAreaBaseMaior(){
        return Math.PI * this.raioMaior ** 2;
    }


    calcularAreaLateral(){
        const geratriz = this.calcularGeratriz();

        return Math.PI *
            geratriz *
            (this.raioMaior + this.raioMenor);
    }


    calcularVolume(){
        return (
            Math.PI * this.altura / 3
        ) * (
            this.raioMaior ** 2 +
            this.raioMaior * this.raioMenor +
            this.raioMenor ** 2
        );
    }


    classificarVolume(){
        const volume = this.calcularVolume();

        if (volume < 180) {
            return "Copo dose (cafezinho)";
        } else if (volume < 350) {
            return "Copo padrão (Água/Chá)";
        } else {
            return "Copo grande (Suco/Refrigerante)";
        }
    }


    calcularAreaTotal(){
        const areaBaseMaior = this.calcularAreaBaseMaior();
        const areaBaseMenor = this.calcularAreaBaseMenor();
        const areaLateral = this.calcularAreaLateral();
        
        return areaBaseMaior + areaBaseMenor + areaLateral;
    }
}

module.exports = Copo;