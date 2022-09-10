document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Formulario").addEventListener('submit', ValidarFormulario)
});

//Función encargada de hacer aparecer o desaparecer el div de gustos

function Mostrar() {
    element = document.getElementById("Part3");
    check = document.getElementById("Checkbox1");
    if (check.checked) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
};

/*----------------------------------------*/

/*Función encargada de controlar el valor del range*/

function range() {
    let range = document.getElementById('Valor');
    let respuesta = document.getElementById('Resultado');
    respuesta.value = numberWithCommas(range.value)
};

/*Esta función se encarga de poner punto o coma a los números*/

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

/*----------------------------------------*/

//Función encargada de validar cada una de las partes del formulario

function ValidarFormulario(evento) {
    evento.preventDefault();

    //----------Nombre----------

    var nombre = document.getElementById('Nombre').value;
    if (nombre.length == 0) {
        alert('El campo nombre está vacío')
    } else {
        if (nombre.length > 25) {
            alert('El campo Nombre debe tener máximo 25 caracteres')
        }
    };

    //----------Apellido----------

    var apellido = document.getElementById('Apellido').value;
    if (apellido.length == 0) {
        alert('El campo Apellido está vacío')
    } else {
        if (apellido.length > 25) {
            alert('El campo Apellido debe tener máximo 25 caracteres')
        }
    };

    //----------Direccion----------

    var direc = document.getElementById('Direccion').value;
    if (direc.length == 0) {
        alert('El campo Direccion está vacío')
    } else {
        if (direc.includes("cll")) {
        } else {
            if (direc.includes("cra")) {
            } else {
                if (direc.includes("av")) {
                } else {
                    if (direc.includes("anv")) {
                    } else {
                        if (direc.includes("trans")) {
                        } else {
                            alert('El campo dirección debe contener alguno de las siguientes palabras cll, cra, av, anv, trans')
                        }
                    }
                }
            }
        }
    }

    //----------Usuario----------

    var usuario = document.getElementById('CcUsuario').value;
    if (usuario.length == 0) {
        alert('El campo Usuario está vacío')
    } else {
        if (usuario.length > 20) {
            alert('El campo usuario debe tener maximo 20 caracteres')
        } else {
            if (usuario.length < 10) {
                alert('El campo usuario debe tener más de 10 caracteres')
            }
        }
    };

    //Función encargada de encontrar elementos extraños en el usuario

    var extranos = "!¡<>«#$%&‘()*+,-_@:;./'¿?[]{}";

    function tiene_extranos(texto) {
        for (i = 0; i < texto.length; i++) {
            if (extranos.indexOf(texto.charAt(i), 0) != -1) {
                return 1
            }
        }
        return 0
    };

    if (tiene_extranos(usuario) != 0) {
        alert('El usuario no puede tener caracteres extraños')
    };

    //----------Contraseña----------

    var password = document.getElementById('CcPaswd').value;
    if (password.length == 0) {
        alert('El campo Contraseña está vacío')
    } else {
        if (password.length > 20) {
            alert('El campo Contraseña debe tener maximo 20 caracteres')
        } else {
            if (password.length < 15) {
                alert('El campo Contraseña debe tener más de 15 caracteres')
            }
        }
    };

    //La siguiente parte se encarga de revisar y notificar si la contraseña ingresada por el usuario no cumple con alguno de los requisitos solicitados

    let datos = [{
        'dato': "0123456789",
        "texto": "La contraseña debe contener por lo menos un numero"
    },
    {
        'dato': "abcdefghyjklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZ",
        "texto": "La contraseña debe contener por lo menos una letra"
    },
    {
        'dato': "abcdefghyjklmnñopqrstuvwxyz",
        "texto": "La contraseña debe contener minúsculas"
    },
    {
        'dato': "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ",
        "texto": "La contraseña debe contener mayúsculas"
    },
    {
        'dato': "#%/&",
        "texto": "La contraseña debe contener por lo menos un carácter especial [#,%,/,&]"
    }
    ];

    function General(texto, ubi) {

        for (i = 0; i < texto.length; i++) {
            if (datos[ubi].dato.indexOf(texto.charAt(i), 0) != -1) {
                return 1
            }
        }
        return 0
    };

    for (let i = 0; i < 5; i++) {
        if (General(password, i) == 0) {
            alert(datos[i].texto)
        }
    };

    //----------Comprobar Contraseña----------

    var password2 = document.getElementById('CcPaswd2').value;
    if (password != password2) {
        alert('Las contraseñas no coinciden')
    };

    //----------Email----------

    var email = document.getElementById('Email').value;
    if (email.length == 0) {
        alert('El campo Email está vacío')
    } else {
        if (email.length > 120) {
            alert('El campo Email solo puede contener 120 caracteres')
        }
    };

    this.submit();

}
