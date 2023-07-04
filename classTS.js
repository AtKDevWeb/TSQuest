"use strict";
//-----------------------Les CLASS
//Les class sont toujours nommer par une var commençant par une MaJ.
//>>> methodes : 
// la méthode est une fonction definit à l'interieur du scope d'une classe
// sa declaration se fait sans la declaration function. 
// >>> attribut private / public en JS : 
//  - permet de securisé l acces aux attributs && methode de la class 
// afin d'eviter de mauvaise manipulation en dehors des scope voulus. 
// par default/convention : les attributs d'une class sont DE BASE PRIVATE . 
// !! : par defaut les attribut && methodes sont PUBLIC 
//(vs KOTLIN qui fonctionne à l'inverse pour JAVA  >> language de ref de Androïd) 
//>> getter/setter
// Afin de faire un affichage ou manipuler les VarPrivate dans la class ou à l'ext de celui celle ci 
// La mise en place de methode getNameMethode (  guetteur) est necessaire. 
// exp : public getName():string {return this.name}
//
// par convention les attricbut de class prenne ununderscor en premier caract afin de pouvoir 
//créer les metodes getters comme si nous appelions des methode JS cassique (Cf code) 
//
// Afin de modifier les attributs privé d'une class nous devons déclarer des méthode "SET" au sein de la class
// Pouir le meme raison que les Gette
// exp: set Name (name: string) : void { this.name = name ;}
class Player {
    constructor(name, lvl) {
        this._name = name;
        this.lvl = lvl;
    }
    get name() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    // public getName(): string {
    //     return this._name
    // }
    getLvl() {
        return this.lvl;
    }
    attaque() {
        console.log(`${this.name} attaque !`);
    }
}
const p1 = new Player('Ryu', 100);
const p2 = new Player('Ken', 99);
const p3 = new Player('Chun Lee', 80);
p2.attaque();
console.log(p1.name);
console.log(p1.getLvl());
p1.attaque();
