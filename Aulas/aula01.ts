type User = {
    firstName: 'Gustavo',
    lastName: 'Maia'
}

const fullName = (user: User): string => {
    return `${user.firstName} ${user.lastName}`
}