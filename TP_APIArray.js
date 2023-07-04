//Rcode l'API ARRAY partiellement avec l aide de la documentation Mozilla 
var Tableau = /** @class */ (function () {
    function Tableau(tab) {
        this.tab = tab;
    }
    Tableau.prototype.forEach = function (callback) {
        for (var i = 0; i < this.tab.length; i++) {
            callback(this.tab[i], i, this.tab);
        }
    };
    Tableau.prototype.find = function (callback) {
        for (var i = 0; i < this.tab.length; i++) {
            if (callback(this.tab[i], i, this.tab)) {
                return this.tab[i];
            }
        }
        return undefined;
    };
    Tableau.prototype.findIndex = function (callback) {
        for (var i = 0; i < this.tab.length; i++) {
            if (callback(this.tab[i], i, this.tab)) {
                return i;
            }
        }
        return undefined;
    };
    Tableau.prototype.filter = function () { };
    Tableau.prototype.map = function () { };
    Tableau.prototype.reduce = function () { };
    return Tableau;
}());
var tabString = new Tableau(['bob', 'robert', 'jean', 'etc ..']);
tabString.forEach(function (item) {
    console.log(item);
});
tabString.forEach(function (item, index) {
    console.log(item + '.' + index);
});
//tabString.forEach(value => console.log(value))
//const tabNumber = new Tableau<number>([1,2,3,4,5,6])
//tabNumber.forEach((value, index) => console.log(`${index} : ${value}`))
