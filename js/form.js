const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    const nameError = document.getElementById('nameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const name = document.getElementById('name');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');

    if (name.value === '' || name.value === null) {
        e.preventDefault();
        name.classList.remove("border-0")
        name.classList.add("border-2", "border-red-500");
        nameError.classList.add("text-xs", "text-red-500");
        nameError.innerHTML = "Por favor ingresar el nombre";
    }

    if (lastName.value === '' || lastName.value === null) {
        e.preventDefault();
        lastName.classList.remove("border-0")
        lastName.classList.add("border-2", "border-red-500");
        lastNameError.classList.add("text-xs", "text-red-500");
        lastNameError.innerHTML = "Por favor ingresar el apellido";
    }

    if (email.value === '' || email.value === null) {
        e.preventDefault();
        email.classList.remove("border-0")
        email.classList.add("border-2", "border-red-500");
        emailError.classList.add("text-xs", "text-red-500");
        emailError.innerHTML = "Por favor ingresar el email";
    }

});