// USERNAME

// el nombre de usuario tiene que ser un email (explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.
// PASSWORD

// la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.

export default function validate({ username, password }) {
    let errors = {}
    if (username.length <= 0) {
        errors.username = 'El nombre de usuario no puede estar vacío'
    }
    if (username.length > 34) {
        errors.username = 'El nombre de usuario no puede tener más de 35 caracteres'
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
        errors.username = 'Nombre de usuario tiene que ser un email'
    }
    if (password.length < 6 || password.length > 10) {
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    }
    if (!/\d/.test(password)) {
        errors.password = 'La contraseña tiene que tener al menos un número'
    }
    return errors;
}
