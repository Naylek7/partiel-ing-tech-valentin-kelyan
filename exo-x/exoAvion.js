//exo 1 :

class Avion {
    constructor (marque, modele, longueur, nbPlace, Reservoir, vitesse){
        this.marque = marque;
        this.modele = modele;
        this.longueur = longueur;
        this.nbPlace = nbPlace;
        this.Reservoir = Reservoir;
        this.vitesse = vitesse;
    }
//exo 2 :

    get marque () {
        return this.marque;
    }
    set marque (marque){
        this.marque = marque;
    }

    get modele () {
        return this.modele;
    }
    set modele (modele){
        this.modele = modele;
    }

    get longueur () {
        return this.longueur;
    }
    set longueur (longueur){
        this.longueur = longueur;
    }

    get nbPlace () {
        return this.nbPlace;
    }
    set nbPlace (nbPlace){
        this.nbPlace = nbPlace;
    }

    get Reservoir () {
        return this.Reservoir;
    }
    set Reservoir (Reservoir){
        this.Reservoir = Reservoir;
    }

    get vitesse () {
        return this.vitesse;
    }
    set vitesse (vitesse){
        this.vitesse = vitesse;
    }
}

//exo 3:

const tableau = [
    new Avion ("Azimut", "777", 20, 50, 870, 1100),
    new Avion ("Jerico", "230", 30, 70, 900, 1000),
    new Avion ("Flash", "9", 15, 40, 800, 1200),
    new Avion ("Mcqueen", "2", 7, 20, 500, 980),
    new Avion ("Vole", "809", 80, 120, 1300, 1200),
]

// exo 4 :

function sommePlaces (avions) {
    let total = 0;
    tableau.forEach((avion) => (total += avion.nbPlace));
    return total;    
}



console.log(sommePlaces);