function createNewUser() {

    const newUser = {
        getLogin() {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase()
        },
        setFirstName() {
            Object.defineProperty(newUser, 'firstName', {
                value: prompt('Введите имя пользователя')
            });
        },
        setLastName() {
            Object.defineProperty(newUser, 'lastName', {
                value: prompt('Введите фамилию пользователя')
            })

        }
    }

    Object.defineProperty(newUser, 'firstName', {
        value: prompt('Введите имя пользователя'),
        enumerable: true,
        configurable: true
    })

    Object.defineProperty(newUser, 'lastName', {
        value: prompt('Введите фамилию пользователя'),
        enumerable: true,
        configurable: true
    })

    return newUser;
}

let newUser = createNewUser();

console.log(newUser);









