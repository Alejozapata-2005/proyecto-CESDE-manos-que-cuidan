if (!localStorage.getItem("usuarios")) {
  const demo = [
    {
      email: "cliente@correo.com",
      password: "123",
      rol: "cliente",
      nombre: "Cliente Demo",
    },
    {
      email: "usuario@correo.com",
      password: "123",
      rol: "usuario",
      nombre: "Trabajador Demo",
    },
    {
      email: "admin@correo.com",
      password: "123",
      rol: "admin",
      nombre: "Administrador Demo",
    },
  ];
  localStorage.setItem("usuarios", JSON.stringify(demo));
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = {
    nombre: document.getElementById("nombre"),
    email: document.getElementById("email"),
    telefono: document.getElementById("telefono"),
    direccion: document.getElementById("direccion"),
    password: document.getElementById("password"),
    rol: document.getElementById("rol"),
  };

  // Limpiar errores previos
  Object.values(inputs).forEach((input) => {
    input.parentElement.classList.remove("error");
    input.parentElement.removeAttribute("data-error");
  });

  // Validación básica
  let hasError = false;
  if (!inputs.nombre.value) {
    inputs.nombre.parentElement.classList.add("error");
    inputs.nombre.parentElement.setAttribute("data-error", "Nombre requerido");
    hasError = true;
  }
  if (!inputs.email.value) {
    inputs.email.parentElement.classList.add("error");
    inputs.email.parentElement.setAttribute("data-error", "Correo requerido");
    hasError = true;
  }
  if (!inputs.telefono.value) {
    inputs.telefono.parentElement.classList.add("error");
    inputs.telefono.parentElement.setAttribute("data-error", "Teléfono requerido");
    hasError = true;
  }
  if (!inputs.direccion.value) {
    inputs.direccion.parentElement.classList.add("error");
    inputs.direccion.parentElement.setAttribute("data-error", "Dirección requerida");
    hasError = true;
  }
  if (!inputs.password.value) {
    inputs.password.parentElement.classList.add("error");
    inputs.password.parentElement.setAttribute("data-error", "Contraseña requerida");
    hasError = true;
  }
  if (!inputs.rol.value) {
    inputs.rol.parentElement.classList.add("error");
    inputs.rol.parentElement.setAttribute("data-error", "Tipo de cuenta requerido");
    hasError = true;
  }

  if (hasError) return;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (usuarios.find((u) => u.email === inputs.email.value)) {
    inputs.email.parentElement.classList.add("error");
    inputs.email.parentElement.setAttribute("data-error", "Ya existe una cuenta con este correo");
    alert("❌ Ya existe una cuenta con este correo.");
    return;
  }

  const nuevoUsuario = {
    nombre: inputs.nombre.value,
    email: inputs.email.value,
    telefono: inputs.telefono.value,
    direccion: inputs.direccion.value,
    password: inputs.password.value,
    rol: inputs.rol.value,
  };

  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("✅ Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
  window.location.href = "login.html";
});

// Social logins simulados
document.querySelector(".google").addEventListener("click", () => {
  alert("🔗 Registro con Google no implementado. Usa el formulario.");
});
document.querySelector(".apple").addEventListener("click", () => {
  alert("🔗 Registro con Apple no implementado. Usa el formulario.");
});
document.querySelector(".facebook").addEventListener("click", () => {
  alert("🔗 Registro con Facebook no implementado. Usa el formulario.");
});