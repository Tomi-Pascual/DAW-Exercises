document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nombre = document.getElementById("nameid");
    const email = document.getElementById("emailid");
    const clave = document.getElementById("claveid");
    const repetirClave = document.getElementById("repetirclaveid");
    const edad = document.getElementById("edadid");
    const telefono = document.getElementById("telefonoid");
    const direccion = document.getElementById("direccionid");
    const ciudad = document.getElementById("ciudadid");
    const codigo = document.getElementById("codigoid");
    const dni = document.getElementById("dniid");
    const enviar = form.querySelector("input[type='submit']");
    const formTitle = document.createElement("h1");
    
    form.insertBefore(formTitle, form.firstChild);
    
    const validateNombre = () => {
        const value = nombre.value.trim();
        const valid = value.length > 6 && value.includes(" ");
        return valid ? "" : "El nombre completo debe tener más de 6 letras y al menos un espacio.";
    };
    
    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email.value.trim()) ? "" : "El email debe tener un formato válido.";
    };
    
    const validateClave = () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(clave.value.trim()) ? "" : "La contraseña debe tener al menos 8 caracteres, con letras y números.";
    };
    
    const validateRepetirClave = () => {
        return clave.value.trim() === repetirClave.value.trim() ? "" : "Las contraseñas no coinciden.";
    };
    
    const validateEdad = () => {
        const value = parseInt(edad.value.trim(), 10);
        return value >= 18 ? "" : "La edad debe ser un número entero mayor o igual a 18.";
    };
    
    const validateTelefono = () => {
        const regex = /^\d{7,}$/;
        return regex.test(telefono.value.trim()) ? "" : "El teléfono debe tener al menos 7 dígitos y no puede tener espacios, guiones ni paréntesis.";
    };
    
    const validateDireccion = () => {
        const value = direccion.value.trim();
        const valid = value.length >= 5 && value.includes(" ");
        return valid ? "" : "La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.";
    };
    
    const validateCiudad = () => {
        return ciudad.value.trim().length >= 3 ? "" : "La ciudad debe tener al menos 3 caracteres.";
    };
    
    const validateCodigo = () => {
        return codigo.value.trim().length >= 3 ? "" : "El código postal debe tener al menos 3 caracteres.";
    };
    
    const validateDNI = () => {
        const regex = /^\d{7,8}$/;
        return regex.test(dni.value.trim()) ? "" : "El DNI debe ser un número de 7 u 8 dígitos.";
    };

    const validators = {
        "nameid": validateNombre,
        "emailid": validateEmail,
        "claveid": validateClave,
        "repetirclaveid": validateRepetirClave,
        "edadid": validateEdad,
        "telefonoid": validateTelefono,
        "direccionid": validateDireccion,
        "ciudadid": validateCiudad,
        "codigoid": validateCodigo,
        "dniid": validateDNI
    };

    const showError = (input, message) => {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("div");
            error.className = "error-message";
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        error.textContent = message;
    };

    const clearError = (input) => {
        const error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
            error.textContent = "";
        }
    };

    form.addEventListener("blur", (event) => {
        if (validators[event.target.id]) {
            const errorMessage = validators[event.target.id]();
            if (errorMessage) {
                showError(event.target, errorMessage);
            } else {
                clearError(event.target);
            }
        }
    }, true);

    form.addEventListener("focus", (event) => {
        if (validators[event.target.id]) {
            clearError(event.target);
        }
    }, true);

    nombre.addEventListener("keydown", () => {
        formTitle.textContent = "HOLA " + nombre.value;
    });

    enviar.addEventListener("click", (event) => {
        event.preventDefault();
        let formIsValid = true;
        const messages = [];

        Object.keys(validators).forEach(id => {
            const input = document.getElementById(id);
            const errorMessage = validators[id]();
            if (errorMessage) {
                showError(input, errorMessage);
                messages.push(errorMessage);
                formIsValid = false;
            } else {
                clearError(input);
            }
        });

        if (formIsValid) {
            alert("Formulario enviado correctamente:\n" + new FormData(form).entries().map(entry => `${entry[0]}: ${entry[1]}`).join("\n"));
        } else {
            alert("Errores en el formulario:\n" + messages.join("\n"));
        }
    });
});
