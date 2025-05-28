// inicio.js - Lógica para la Página de Inicio Moderna

document.addEventListener("DOMContentLoaded", () => {
    const mainHeaderInicio = document.querySelector('.main-header-inicio');
    const motivationalPhraseEl = document.getElementById("motivational-phrase");
    const dateTimeEl = document.getElementById("date-time");

    // Modal y sus componentes
    const iframeModalContainer = document.getElementById('iframe-modal-container');
    const iframeModalContent = iframeModalContainer ? iframeModalContainer.querySelector('.iframe-modal-content') : null;
    const closeIframeModalBtn = document.getElementById('closeIframeModalBtn');
    const iframeModalTitle = document.getElementById('iframe-modal-title');
    const iframeWrapper = document.getElementById('iframe-wrapper');

    // Definición de los botones de herramientas y sus iframes
    // ¡¡¡ASEGÚRATE DE QUE LOS NOMBRES DE ARCHIVO (src) SEAN CORRECTOS!!!
    const toolButtons = [
        {
            btnId: 'toggleSeguridadBomberoBtn',
            title: 'Juego: Seguridad del Bombero',
            src: 'Seguridad_del_bombero', // CUIDADO con los espacios en nombres de archivo
            iframeHeight: '700px' // Ajusta la altura según necesites
        },
        {
            btnId: 'togglePracticaCodigosBtn',
            title: 'Juego: Práctica de Códigos (Torre Radial)',
            src: 'torreradial.html',
            iframeHeight: '800px'
        },
        {
            btnId: 'toggleClasificadorBtn',
            title: 'Juego: Clasificador de Servicios',
            src: 'rolesenunservicio.html',
            iframeHeight: '750px'
        }
        // Si añades más botones en el HTML, agrégalos aquí también
    ];

    function openIframeModal(title, src, height) {
        if (!iframeModalContainer || !iframeModalTitle || !iframeWrapper) {
            console.error("Elementos del modal no encontrados.");
            return;
        }

        iframeModalTitle.textContent = title;
        // Crear el iframe dinámicamente para asegurar que se recargue si es necesario
        // y para evitar problemas con iframes ocultos que puedan seguir consumiendo recursos.
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.width = "100%";
        iframe.height = height; // La altura se puede pasar como argumento
        iframe.style.border = "none";
        iframe.style.borderRadius = "6px"; // Coincidir con el wrapper si es necesario
        iframe.title = title;
        iframe.textContent = "Tu navegador no soporta iframes. Por favor, actualízalo o usa uno diferente.";

        iframeWrapper.innerHTML = ''; // Limpiar cualquier iframe anterior
        iframeWrapper.appendChild(iframe);

        iframeModalContainer.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Evitar scroll del fondo de la página
    }

    function closeIframe() {
        if (!iframeModalContainer || !iframeWrapper) return;
        iframeModalContainer.classList.remove('visible');
        iframeWrapper.innerHTML = ''; // Importante: Limpiar el iframe para detener cualquier script o audio del juego
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }

    // Asignar listeners a los botones de herramientas
    toolButtons.forEach(tool => {
        const buttonEl = document.getElementById(tool.btnId);
        if (buttonEl) {
            buttonEl.addEventListener('click', () => {
                openIframeModal(tool.title, tool.src, tool.iframeHeight);
            });
        } else {
            console.warn(`Botón con ID '${tool.btnId}' no encontrado.`);
        }
    });

    // Listener para el botón de cerrar el modal
    if (closeIframeModalBtn) {
        closeIframeModalBtn.addEventListener('click', closeIframe);
    }

    // Listener para cerrar el modal si se hace clic en el overlay (fuera del contenido del modal)
    if (iframeModalContainer) {
        iframeModalContainer.addEventListener('click', (event) => {
            if (event.target === iframeModalContainer) { 
                closeIframe();
            }
        });
    }

    // Frases motivacionales
    const phrases = [
        "Servir es un honor, proteger es nuestra misión.",
        "La perseverancia es el camino hacia el éxito.",
        "Cada día es una nueva oportunidad para mejorar.",
        "El valor no es la ausencia de miedo, sino la conquista del mismo.",
        "El esfuerzo de hoy será la recompensa de mañana.",
        "Ubi dolor ibi vigiles. (Donde hay dolor, están los vigilantes)",
        "Volere è Potere. (Querer es Poder)"
    ];

    function showRandomPhrase() {
        if (motivationalPhraseEl) {
            const randomIndex = Math.floor(Math.random() * phrases.length);
            motivationalPhraseEl.textContent = phrases[randomIndex];
        }
    }

    // Reloj
    function updateClock() {
        if (dateTimeEl) {
            const now = new Date();
            try {
                const options = {
                    // weekday: 'long', // Opcional: día de la semana
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                    // No incluimos segundos para un look más limpio
                };
                let formattedTime = now.toLocaleString("es-AR", options);
                // Capitalizar la primera letra
                dateTimeEl.textContent = formattedTime.charAt(0).toUpperCase() + formattedTime.slice(1);
            } catch (e) {
                // Fallback simple si toLocaleString con opciones falla
                dateTimeEl.textContent = now.toLocaleDateString("es-AR") + " " + now.toLocaleTimeString("es-AR", {hour: '2-digit', minute:'2-digit'});
                console.warn("toLocaleString con opciones personalizadas falló, usando fallback. Error:", e);
            }
        }
    }

    // Ejecutar funciones al cargar la página
    showRandomPhrase();
    updateClock();
    setInterval(updateClock, 60000); // Actualizar el reloj cada minuto

    // Efecto sutil en el header al hacer scroll (opcional)
    window.addEventListener('scroll', () => {
        if (mainHeaderInicio) {
            if (window.scrollY > 20) { // Activar con menos scroll
                mainHeaderInicio.style.backgroundColor = 'rgba(20, 20, 20, 0.95)'; // Un poco más opaco
                mainHeaderInicio.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            } else {
                mainHeaderInicio.style.backgroundColor = 'rgba(30, 30, 30, 0.85)';
                mainHeaderInicio.style.boxShadow = 'none';
            }
        }
    });

    console.log("inicio.js cargado y ejecutado.");
});