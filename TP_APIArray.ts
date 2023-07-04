//Rcode l'API ARRAY partiellement avec l aide de la documentation Mozilla 


class Tableau<T> {

    private tab: Array<T>

    constructor(tab: Array<T> = new Array<T>()) {
        this.tab = tab
    }

    forEach (callback: (value: T, index: number, array: Array<T>) => void) {
        for (let i :number = 0; i < this.tab.length; i++) {
            callback(this.tab[i], i, this.tab);
        }
    }
    
    find(callback: (value: T, index: number, array: Array<T>) => boolean): T | undefined{
        for (let i :number = 0; i < this.tab.length; i++) {
            if (callback(this.tab[i], i, this.tab)) {
                return this.tab[i];
            }
        }
        return undefined
    }

    findIndex(callback: (value: T, index:number, array: Array<T>)=>boolean): number {
        for ( let i = 0; i < this.tab.length; i++){
            if (callback(this.tab[i], i, this.tab)) {
                return i; 
            }
        }
        return -1; 
    }

    filter(callback: (value: T, index:number, array: Array<T>)=>boolean): Tableau<T> | undefined {
        const tab : Tableau<T> = new Tableau <T> ();

        for ( let i = 0; i < this.tab.length; i++){
            if (callback(this.tab[i], i, this.tab)) {
                tab.push(this.tab[i]);
           
            }
        return tab;
    }
    }

    map(callback: (value: T, index:number, array: Array<T>) => T | void) : Tableau<T> {
        const tab :Tableau<T> = new Tableau<T>;

        for (let i : number = 0; i<this.tab.length; i++){
            const result:void|T = callback(this.tab[i], i, this.tab);
            tab.push(result); 
        }
        return tab;
    }

    reduce(callback: (accumulator: T | undefined, currentValue: T ) => T | undefined ) : T {
        if (this.tab.length === 0 ){
            throw TypeError ('Reduce of empty array with no initial value');
        } else if (this.tab.length === 1){
            return this.tab[0];        
        }
        let acc:T = this.tab[0];
        for(let i:number = 1; i < this.tab.length; i++) {
            acc == callback (acc, this.tab[i]); 
        }
        return acc; 
    }
    
    push(value: T | undefined | void): void {
        // @ts-ignore
        this.tab.push(value);
    }
}

//const tabString = new Tableau<string>(['bob', 'robert', 'jean', 'etc ..'])
//tabString.forEach(function(item ){
//    console.log(item);
    
//});

//tabString.forEach(function(item, index){
//    console.log(item +'.'+ index);
    
//});

//tabString.forEach(value => console.log(value))

//const tabNumber = new Tableau<number>([1,2,3,4,5,6])
//tabNumber.forEach((value, index) => console.log(`${index} : ${value}`))