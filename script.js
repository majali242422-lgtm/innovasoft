document.getElementById("formContacto").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;

  document.getElementById("resultado").innerHTML = `
    <p>Mensaje enviado correctamente.</p>
    <p>Gracias, <strong>${nombre}</strong>. Nos pondremos en contacto contigo en <strong>${correo}</strong>.</p>
  `;

  document.getElementById("formContacto").reset();
});