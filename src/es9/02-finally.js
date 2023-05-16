// El método finally permite ejecutar código después de que una promesa haya sido resuelta o rechazada.

const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey!");
        } else {
            reject ( "Whooops!");
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log("Finally"));