const slider = document.querySelector('.slider-container');

document.querySelectorAll('.top-nav li').forEach(boton => {
  boton.addEventListener('click', () => {
    const target = boton.getAttribute('data-target');
    const seccion = document.getElementById(target);

    // Calcula la posición exacta en pixeles
    const posicion = seccion.offsetLeft;

    // Hace el scroll perfectamente alineado
    slider.scrollTo({
      left: posicion,
      behavior: "smooth"
    });
  });
});
// Carrito lateral
const carritoPanel = document.getElementById("carrito-panel");
const carritoLista = document.getElementById("carrito-lista");
const carritoTotal = document.getElementById("carrito-total");

let total = 0;

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-agregar")) {

    const productoCard = event.target.closest(".producto");
    const precioTexto = productoCard.querySelector("span").textContent;
    const precioNum = parseInt(precioTexto.replace("$", "").replace(".", ""));

    const productoNombre = productoCard.querySelector("p")?.textContent || "Producto";

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${productoNombre} - ${precioTexto}</span>
      <button class="btn-eliminar">❌</button>
    `;
    carritoLista.appendChild(li);

    // Botón eliminar
    li.querySelector(".btn-eliminar").addEventListener("click", () => {
      carritoLista.removeChild(li);
      total -= precioNum;
      carritoTotal.textContent = total.toLocaleString("es-CO");
    });

    total += precioNum;
    carritoTotal.textContent = total.toLocaleString("es-CO");

    carritoPanel.classList.add("visible");
  }
});

const btnCerrarCarrito = document.getElementById("cerrar-carrito");

btnCerrarCarrito.addEventListener("click", () => {
  carritoPanel.classList.remove("visible");
});

const btnAbrirCarrito = document.getElementById("btn-abrir-carrito");

btnAbrirCarrito.addEventListener("click", () => {
  carritoPanel.classList.add("visible");
});

// Pantalla de bienvenida
const pantallaBienvenida = document.getElementById("pantalla-bienvenida");
const btnContinuar = document.getElementById("btn-continuar");

btnContinuar.addEventListener("click", () => {
  pantallaBienvenida.classList.add("oculto");

  // Activar animaciones una vez que desaparezca la bienvenida
  setTimeout(() => {
    document.body.classList.remove("animaciones-activa");
    document.body.classList.add("animaciones-lista");
  }, 400); // Espera la transición de la bienvenida
});