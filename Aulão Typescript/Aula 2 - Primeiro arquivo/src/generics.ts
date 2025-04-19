const returnValue = <T>(value: T):T => value
// Declarou um generic , e passou o generic como um value

const message = returnValue<string>("Hello world")
const count = returnValue<number>(5)

function getFirstValueFromArray<Tipo>(array: Tipo[]){
    return array[0]
}

const FirstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"])
const FirstValueFromNumberArray = getFirstValueFromArray<number>([10, 20])

// Promises
const returnPromise = async (): Promise<number> =>{
    return 5
}

//Classes
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x:T, y:T) => T){
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x:number, y:number) => {
    return x+y;
})