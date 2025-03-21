type User = {
    firstName: 'Gustavo',
    lastName: 'Maia'
}

const fullName = (user: User): string => {
    return `${user.firstName} ${user.lastName}`
}

const sum = (value1: number, value2: number): number => {
    return value1 + value2;
}

const total = sum(2, 2);