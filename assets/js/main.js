/* ============================================================
   main.js — Viaje de Egresados 2026
   Colegio Santa Teresita del Niño Jesús — San Rafael, Mendoza
   ============================================================

   Contiene:
   1. Contador regresivo al 2 de agosto de 2026
   2. Navbar que se opaca al hacer scroll
   3. Animaciones fade-in al entrar en el viewport
   ============================================================ */


/* ============================
   1. CONTADOR REGRESIVO
   ============================
   Actualiza cada 1 segundo los elementos:
   #cnt-dias, #cnt-horas, #cnt-min, #cnt-seg
   
   EDITAR: si la fecha de salida cambia,
   modificá la variable FECHA_SALIDA abajo.
   ============================ */

// ← EDITAR: fecha y hora de salida del viaje (formato: 'YYYY-MM-DDTHH:MM:SS-03:00')
const FECHA_SALIDA = new Date('2026-08-02T06:00:00-03:00');

function actualizarContador() {
  const ahora   = new Date();
  const diff    = FECHA_SALIDA - ahora;   // diferencia en milisegundos

  // Elementos del DOM
  const elDias  = document.getElementById('cnt-dias');
  const elHoras = document.getElementById('cnt-horas');
  const elMin   = document.getElementById('cnt-min');
  const elSeg   = document.getElementById('cnt-seg');

  // Si el viaje ya empezó (diff negativo), mostramos ceros
  if (diff <= 0) {
    elDias.textContent  = '00';
    elHoras.textContent = '00';
    elMin.textContent   = '00';
    elSeg.textContent   = '00';
    return;
  }

  // Cálculo de unidades
  const dias  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min   = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seg   = Math.floor((diff % (1000 * 60)) / 1000);

  // padStart(2, '0') asegura que siempre haya dos dígitos (ej: "05" en vez de "5")
  elDias.textContent  = String(dias).padStart(2, '0');
  elHoras.textContent = String(horas).padStart(2, '0');
  elMin.textContent   = String(min).padStart(2, '0');
  elSeg.textContent   = String(seg).padStart(2, '0');
}

// Ejecutar de inmediato y después cada 1 segundo
actualizarContador();
setInterval(actualizarContador, 1000);


/* ============================
   2. NAVBAR — se opaca al scrollear
   ============================
   Agrega/quita la clase .scrolled en .navbar
   según si el usuario scrolleó más de 60px.
   El estilo de .navbar.scrolled está en style.css.
   ============================ */

const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });  // passive: true mejora performance del scroll
}


/* ============================
   3. ANIMACIONES FADE-IN AL SCROLL
   ============================
   IntersectionObserver observa todos los elementos
   con la clase .fade-in.
   
   Cuando un elemento entra en el viewport,
   se le agrega la clase .visible que activa
   la transición definida en style.css.
   
   Los elementos con .fade-in parten ocultos
   (opacity: 0, translateY: 24px) y aparecen
   suavemente al hacer scroll.
   ============================ */

// Configuración del observer:
// threshold: 0.12 = se activa cuando el 12% del elemento es visible
const observerConfig = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'  // se activa un poco antes de llegar al borde
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Pequeño delay escalonado para grupos de elementos (se ven mejor)
      const delay = (i % 4) * 80;   // 0ms, 80ms, 160ms, 240ms...
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      // Una vez visible, dejamos de observar ese elemento
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerConfig);

// Seleccionar todos los elementos que deben animarse
// Si agregás nuevas secciones, sumá el selector acá
const elementosAnimados = document.querySelectorAll(
  '.dia-item, .categoria-card, .paso-item, .foto-item, .total-card, .stat-item, .alerta-fecha'
);

elementosAnimados.forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});


/* ============================
   FIN DE ARCHIVO
   ============================ */
