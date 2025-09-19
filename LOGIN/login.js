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

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailGroup = emailInput.parentElement;
  const passwordGroup = passwordInput.parentElement;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Limpiar errores previos
  emailGroup.classList.remove("error");
  passwordGroup.classList.remove("error");
  emailGroup.removeAttribute("data-error");
  passwordGroup.removeAttribute("data-error");

  // Validación básica
  if (!email) {
    emailGroup.classList.add("error");
    emailGroup.setAttribute("data-error", "Correo requerido");
    return;
  }
  if (!password) {
    passwordGroup.classList.add("error");
    passwordGroup.setAttribute("data-error", "Contraseña requerida");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const user = usuarios.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("rol", user.rol);
    localStorage.setItem("nombre", user.nombre);
    if (user.rol === "cliente") {
      window.location.href = "../CLIENTE/HTML/perfil.html";
    } else if (user.rol === "usuario") {
      window.location.href = "../USUARIO/HTML/perfil.html";
    } else if (user.rol === "admin") {
      window.location.href = "../ADMIN/HTML/panel-admin.html";
    }
  } else {
    emailGroup.classList.add("error");
    passwordGroup.classList.add("error");
    emailGroup.setAttribute("data-error", "Credenciales incorrectas");
    passwordGroup.setAttribute("data-error", "Credenciales incorrectas");
    alert("❌ Credenciales incorrectas.");
  }
});