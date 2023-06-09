class Personne {

    private _name : string; 
    private _age : number;

    constructor (name : string, age : number){
        this._name = name ;
        this._age = age ;
    }
    
    public getName():string{
        return this._name; 
    }

    get age () :number {
        return this._age; 
    }

    public tellMyName(): void {
        console.log(`My name is :` + this._name);
        
    }

    public tellMyAge(): void{
        console.log(`I'm `+this._age +`years old.`);
        
    }
  
}

const John = new Personne("John",40); 
const Mary = new Personne("Mary",35);

console.log( John.tellMyName() );
console.log( John.tellMyAge() ); 
console.log( Mary.tellMyName() );
console.log( Mary.tellMyAge() );


