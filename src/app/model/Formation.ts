
export class Formation{

    public nom:string;

    public description:string;

    constructor(nom:string,description:string){
       
        this.nom=nom;
        this.description=description;
    }

   

    toString(){
        return `${this.nom} ${this.description}`;
    }
   
}