
$('#formularioContacto').validate({ 
    "rules": {
        "txtEmail": {
            required: true,
            email: true,
        }
    },
    messages: {
        "txtEmail": {
            required: 'El email es un campo requerido',
            email: 'El email no cumple el formato de un correo'
        }
    },
})
