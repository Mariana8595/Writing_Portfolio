// main.js

// Función para cargar el contenido de las páginas
function loadPage(page) {
    fetch(page)
      .then(response => {
        // Verifica que la respuesta sea exitosa
        if (!response.ok) {
          throw new Error('Página no encontrada');
        }
        return response.text();
      })
      .then(data => {
        // Inserta el contenido de la página en el contenedor
        document.getElementById("content").innerHTML = data;
      })
      .catch(error => console.error("Error al cargar la página:", error));
  }
  
  // Agregar eventos de clic a los enlaces del menú
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.dropdown-item');
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        const page = link.getAttribute('href'); // Obtiene la URL de la página
        loadPage(page); // Carga la página en el contenedor
      });
    });
  });
  