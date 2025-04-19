// Type

type Order = {
    productId: string;
    price: number;
}

type User = {
    firstName: string
    age: number
    email: string
    password?: string // Propriedade opcional
    orders: Order[]
    register(): string
}

const user: User = {
    firstName: "Gustavo",
    age: 18,
    email: "gustavo@gmail.com",
    orders: [{productId: '1', price: 200}],
    register() {
        return "a"
    },
}

// Pode ser uma string ou não
const printlog = (message?: string) => {}

printlog(user.password!) // Colocando ! é pra dizer que tem certeza que existe

// Unions
type Author = {
    books: string[]
}

const author : Author & User = {
    age: 2,
    books: ['1'],
    email: 'aaaaaa',
    firstName: "Gustavo",
    orders: [],
    register() {
        return "b";
    },
}



// Interface
interface UserInterface {
    readonly firstName: string; // Não se altera após criar o objeto
    email: string;
    login() : string;
}

const emailUser: UserInterface = {
    email: 'felipe@gmail.com',
    firstName: "Gustavo",
    login() {
        return "a"
    }
}

interface AuthorInterface {
    books: string[]
}

const newAuthor: AuthorInterface & UserInterface = {
    email: "joao@gmail",
    firstName: "felipee",
    books: [],
    login() {
        return "a"
    },
}