interface IPerson{
    id : number;    
    sayMyname(): string;
}

class Person implements IPerson{
    readonly id : number;
    protected name: string; //acessivel pela classe mae e subclasses
    private age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyname(): string {
        return this.name;
    }
}

// Mesma coisa que acima
class PersonRefact{
    constructor(
        readonly id : number,
        protected name: string, //acessivel pela classe mae e subclasses
        private age: number,
    ){}
}

class employee extends Person {
    constructor(id:number, name:string, age:number){
        super(id, name, age)
    }
    whoAmI(){
        return this.name //subclasses
    }
}

const gusta = new Person(1, "Gustavo", 18);
//gusta.id = "32"
