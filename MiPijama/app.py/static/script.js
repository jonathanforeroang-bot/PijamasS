document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const dots = document.querySelectorAll(".dot");

  if (!slides.length || !nextBtn || !prevBtn) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", function () {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", function () {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

});
function filtrarContenido() {
    // 1. Obtener lo que el usuario escribe
    let input = document.getElementById('busqueda');
    let filtro = input.value.toLowerCase();
    
    // 2. Obtener todos los elementos que queremos filtrar
    let items = document.getElementsByClassName('item-busqueda');

    // 3. Recorrer los elementos y ocultar los que no coincidan
    for (let i = 0; i < items.length; i++) {
        let texto = items[i].textContent || items[i].innerText;
        
        if (texto.toLowerCase().indexOf(filtro) > -1) {
            items[i].style.display = ""; // Mostrar
        } else {
            items[i].style.display = "none"; // Ocultar
        }
    }
}