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

        },
        getAge() {
            const currentDate = new Date();
            const dateOfBirthArray = this.dateOfBirth.split('.');
            const dateOfBirthFormatted = new Date(dateOfBirthArray[2],dateOfBirthArray[1]-1, dateOfBirthArray[0]);
            return Math.trunc(((currentDate - dateOfBirthFormatted)/1000/60/60/24/365));
        },
        getPassword() {
            const dateOfBirthArray = this.dateOfBirth.split('.');
            return this.firstName[0].toUpperCase()+this.lastName.toLowerCase()+dateOfBirthArray[2];
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

    Object.defineProperty(newUser, 'dateOfBirth', {
        value: prompt('Введите дату вашего рождения в формате - dd.mm.yyyy'),
        enumerable: true,
        configurable: true
    })

    return newUser;
}

let newUser = createNewUser();

console.log(newUser);
console.log(newUser.getAge());
console.log(newUser.getPassword());









