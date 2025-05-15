//carga de drive
document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".bg-gray-800");
    if (content) {
        content.style.opacity = "0";
        content.style.transform = "translateY(20px)";
        setTimeout(() => {
            content.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
            content.style.opacity = "1";
            content.style.transform = "translateY(0)";
        }, 500);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const modules = [
        { id: 1, name: "Clase 1 (Marco Histórico)", infoElementId: "info-clase-1" },
        { id: 2, name: "Clase 2 (Organización Bomberil)", infoElementId: "info-clase-2" },
        { id: 3, name: "Clase 3 (Leyes y Decretos)", infoElementId: "info-clase-3" },
        { id: 5, name: "Clase 5 (Guardia, Instrucción, Servicios)", infoElementId: "info-clase-5" },
        { id: 6, name: "Clase 6 (Aptitud, Estados, Ética, Órdenes)", infoElementId: "info-clase-6" },
        { id: 7, name: "Clase 7 (Parte de Servicios)", infoElementId: "info-clase-7" },
        { id: 9, name: "Clase 9 (Comunicaciones - Input)", infoElementId: "info-clase-9" },
        { id: 99, name: "Clase 9 (Códigos - Opción Múltiple)", infoElementId: "info-clase-99" },
        { id: 10, name: "Clase 10 (Seguridad del Bombero)", infoElementId: "info-clase-10" },
        { id: 11, name: "Clase 11 (Psicología de la Emergencia)", infoElementId: "info-clase-11" }
    ];

    const allQuestions = [
        // Clase 1: Marco Histórico
        { classId: 1, question: "¿Cuál es el año fundacional que marca el inicio de la trayectoria de los Cuerpos de Bomberos Voluntarios en Argentina?", answer: { keywords: ["1884"], match: "all" }, displayAnswer: "1884", type: "input", tip:"Referido al establecimiento formal." },
        { classId: 1, question: "Identifique al principal promotor y figura clave en la creación del primer Cuerpo de Bomberos Voluntarios de Argentina.", answer: { keywords: ["tomas", "liberti"], match: "all" }, displayAnswer: "Tomás Liberti", type: "input" },
        { classId: 1, question: "Precise la fecha exacta que conmemora la constitución del primer Cuerpo de Bomberos Voluntarios en territorio argentino.", answer: { keywords: ["2", "junio", "1884"], match: "all" }, displayAnswer: "2 de junio de 1884", type: "input", tip:"Día, mes y año." },
        { classId: 1, question: "¿Bajo qué denominación original en idioma italiano se estableció el primer Cuerpo de Bomberos Voluntarios en el barrio de La Boca?", answer: "Societa di Pompieri Italiani Volontari di La Boca", displayAnswer: "Societa di Pompieri Italiani Volontari di La Boca", type: "input" },
        { classId: 1, question: "Describa el suceso crítico ocurrido en diciembre de 1883 que actuó como catalizador para la organización bomberil en La Boca.", answer: { keywords: ["incendio"], match: "all" }, displayAnswer: "Un incendio", type: "input", tip:"Tipo de evento." },
        { classId: 1, question: "¿En qué fecha se concretó la fundación de la Asociación de Bomberos Voluntarios de Malvinas Argentinas?", answer: { keywords: ["3", "marzo", "1984"], match: "all" }, displayAnswer: "3 de marzo de 1984", type: "input" },
        { classId: 1, question: "Mencione la nominación oficial del Cuartel Central perteneciente a los Bomberos Voluntarios de Malvinas Argentinas.", answer: { keywords: ["juan", "espina"], match: "all" }, displayAnswer: "Juan Espina", type: "input" },
        { classId: 1, question: "Indique la dirección postal del Cuartel Central de BV Malvinas Argentinas.", answer: "Dr Baroni 2684", displayAnswer: "Dr Baroni 2684", type: "input" },
        { classId: 1, question: "¿Cuál es el número telefónico de emergencias del Cuartel Central de BV Malvinas Argentinas?", answer: "46602222", displayAnswer: "4660-2222", type: "input" },
        { classId: 1, question: "¿Quién ejerció como Primer Presidente del Honorable Consejo Directivo de BV Malvinas Argentinas?", answer: { keywords: ["mendez", "bernardo"], match: "all" }, displayAnswer: "Mendez Bernardo", type: "input" },
        { classId: 1, question: "¿Quién fue designado como Primer Jefe del Cuerpo Activo de BV Malvinas Argentinas?", answer: { keywords: ["garcia", "jose"], match: "all" }, displayAnswer: "Garcia Jose", type: "input" },
        { classId: 1, question: "Según la documentación de la Clase 1, ¿qué Oficial ostenta actualmente la Jefatura del Cuerpo Activo de BV Malvinas Argentinas?", answer: { keywords: ["herrera", "andres"], match: "all" }, displayAnswer: "Oficial Herrera Andrés", type: "input", tip:"Grado y apellido." },

        // Clase 2: Organización Bomberil
        { classId: 2, question: "¿Cuál es la denominación formal y completa de la institución de Bomberos Voluntarios del partido de Malvinas Argentinas?", answer: { keywords: ["asociacion", "bomberos", "voluntarios", "malvinas", "argentinas"], match: "all" }, displayAnswer: "Asociación de Bomberos Voluntarios de Malvinas Argentinas", type: "input" },
        { classId: 2, question: "Defina la naturaleza jurídica de la Asociación de Bomberos Voluntarios.", answer: { keywords: ["asociacion", "civil", "fines", "lucro", "bien", "publico"], match: "all" }, displayAnswer: "Asociación civil sin fines de lucro y de bien público", type: "input", tip:"Características legales y sociales." },
        { classId: 2, question: "Indique el número de Identificación Numérica de Organismos de BV (INOBV) correspondiente a BV Malvinas Argentinas.", answer: { keywords: ["166"], match: "all" }, displayAnswer: "166", type: "input" },
        { classId: 2, question: "Enumere las dos categorías principales en las que se clasifican los socios de la institución.", answer: { keywords: ["activos", "protectores"], match: "all" }, displayAnswer: "Activos y Protectores", type: "input" },
        { classId: 2, question: "Según el estatuto social, ¿cuál es el órgano que representa la máxima autoridad en una asociación de bomberos?", answer: { keywords: ["asamblea", "socios"], match: "all" }, displayAnswer: "La asamblea de los socios", type: "input" },
        { classId: 2, question: "Identifique las dos estructuras de autoridad fundamentales dentro de la Asociación Civil de bomberos.", answer: { keywords: ["consejo", "directivo", "cuerpo", "activo"], match: "all" }, displayAnswer: "El Consejo Directivo y el Cuerpo Activo", type: "input" },
        { classId: 2, question: "¿Qué órgano institucional posee la facultad de designar al Jefe de Cuerpo?", answer: { keywords: ["consejo", "directivo"], match: "all" }, displayAnswer: "El Consejo Directivo", type: "input" },
        { classId: 2, question: "Describa la configuración estructural que caracteriza la organización jerárquica del Cuerpo Activo.", answer: { keywords: ["piramidal"], match: "all" }, displayAnswer: "Piramidal", type: "input", tip:"Forma de la jerarquía." },
        { classId: 2, question: "¿Quién ostenta la máxima jerarquía y responsabilidad de mando dentro del Cuerpo Activo?", answer: { keywords: ["jefe", "cuerpo"], match: "all"}, displayAnswer: "Jefe de Cuerpo", type: "input"},
        { classId: 2, question: "Explique cómo se segmentan las actividades generales de un Cuerpo de Bomberos para su funcionamiento.", answer: { keywords: ["orden", "interno", "servicios"], match: "all"}, displayAnswer: "Orden Interno y Servicios", type: "input", tip:"Dos grandes áreas de operación." },
        { classId: 2, question: "Mencione las cuatro secciones ejecutivas primordiales que operan bajo la supervisión directa del Segundo Jefe de Cuerpo.", answer: { keywords: ["ayudantia", "materiales", "equipos", "automotores", "capacitacion"], match: "all"}, displayAnswer: "Ayudantía, Materiales y Equipos, Automotores, Capacitación", type: "input" },
        { classId: 2, question: "¿Cuál es el grado de mayor escalafón entre los Oficiales Superiores?", answer: { keywords: ["comandante", "general"], match: "all"}, displayAnswer: "Comandante General", type: "input" },
        { classId: 2, question: "¿Cuál es el grado inicial o de menor rango en la categoría de Suboficiales Subalternos?", answer: { keywords: ["cabo"], match: "all"}, displayAnswer: "Cabo", type: "input" },
        { classId: 2, question: "Enumere tres factores actitudinales y de compromiso que constituyen obligaciones fundamentales para los Bomberos de tropa.", answer: { keywords: ["amor", "servicio", "capacitacion", "permanente", "obediencia"], match: "all"}, displayAnswer: "Amor al servicio, capacitación permanente y obediencia", type: "input" },
        { classId: 2, question: "¿Qué legislación provincial (número y denominación si es posible) establece el marco regulatorio para las asociaciones de Bomberos Voluntarios en la Provincia de Buenos Aires?", answer: { keywords: ["ley", "10917"], match: "all"}, displayAnswer: "Ley 10.917", type: "input" },

        // Clase 3: Leyes y Decretos
        { classId: 3, question: "¿Qué número identifica a la Ley Nacional que establece el marco de organización y la misión de los bomberos voluntarios en la República Argentina?", answer: { keywords: ["ley", "25054"], match: "all" }, displayAnswer: "Ley 25.054", tip:"Ley 25.054", type: "input" },
        { classId: 3, question: "Indique el año en que fue promulgada la Ley Nacional 25.054.", answer: { keywords: ["1998"], match: "all" }, displayAnswer: "1998", type: "input" },
        { classId: 3, question: "Mencione un propósito fundamental de la Ley Nacional 25.054, además del reconocimiento como servicio público.", answer: { keywords: ["subsidio", "nacional"], match: "all" }, displayAnswer: "Establecer un subsidio nacional", tip: "Puede ser también brindar apoyo económico para equipamiento o capacitación.", type: "input" },
        { classId: 3, question: "Conforme a la Ley 25.054, ¿qué tipo de consideración especial se otorga a los bomberos voluntarios en los planes de vivienda implementados por el Estado?", answer: { keywords: ["puntaje", "especial"], match: "all" }, displayAnswer: "Puntaje especial", type: "input" },

        // Clase 5
        { classId: 5, question: "¿Cuál es la finalidad primordial del establecimiento de 'La Guardia' en un cuartel de bomberos?", answer: { keywords: ["personal", "aprestamiento", "inmediato"], match: "all" }, displayAnswer: "Contar con personal para aprestamiento inmediato 24/7", tip: "Disponibilidad constante y respuesta rápida.", type: "input" },
        { classId: 5, question: "Enumere una de las misiones fundamentales encomendadas al Cuerpo Activo, según lo estipulado en el Artículo 23 de la Ley 10.917.", answer: { keywords: ["prevencion", "extincion", "incendios"], match: "all" }, displayAnswer: "Prevención y extinción de incendios", tip: "O rescate, conservación de equipos, etc.", type: "input" },

        // Clase 6
        { classId: 6, question: "Defina con precisión el término 'Aptitud' en el contexto de la preparación y desempeño bomberil.", answer: { keywords: ["capacidad", "disposicion", "ejercicio", "profesion"], match: "all" }, displayAnswer: "Capacidad y disposición para el buen ejercicio de la profesión", tip: "Implica idoneidad, habilidad y preparación.", type: "input" },
        { classId: 6, question: "En el contexto jerárquico bomberil, ¿qué se entiende por una 'Orden'?", answer: { keywords: ["modo", "expresion", "superior", "indica", "subalterno", "ejecucion", "mandato"], match: "all" }, displayAnswer: "Modo de expresión con que un superior indica a un subalterno la ejecución de un mandato", type: "input" },

        // Clase 9 (Input)
        { classId: 9, question: "Dentro del código Q utilizado en radiocomunicaciones, ¿cuál es el significado preciso de la señal 'QAP'?", answer: { keywords: ["quedo", "escucha"], match: "all" }, displayAnswer: "Quedo en escucha", type: "input", tip:"Indica estar atento y a la espera." },
        { classId: 9, question: "En el lenguaje de códigos radiales, ¿qué se comunica al transmitir 'QSL'?", answer: { keywords: ["comprendido"], match: "all" }, displayAnswer: "Comprendido", type: "input", tip:"Confirmación de recepción y entendimiento." },

        // Clase 99: Códigos - Opción Múltiple
        { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Cuál es la interpretación correcta de 'QAP' en una comunicación radial?", options: ["Mantenerse a la espera y atento a nuevas directivas", "Solicitar la ubicación exacta del incidente", "Reportar fallas en el equipamiento de comunicación", "Confirmar la recepción de un mensaje previo"], answer: "Mantenerse a la espera y atento a nuevas directivas" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Qué significa la expresión 'QSL'?", options: ["Proceder a anular el mensaje transmitido con anterioridad", "Mensaje recibido y entendido en su totalidad", "Transmitir la información de manera más pausada y clara", "¿Podría identificar la estación que está llamando?"], answer: "Mensaje recibido y entendido en su totalidad" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: La señal 'QTH' se utiliza para inquirir o declarar:", options: ["La hora oficial para la coordinación de maniobras", "La necesidad de establecer un puente de comunicación con otra estación", "La localización geográfica desde donde se origina la transmisión", "La imposibilidad de continuar con el tráfico radial por estar ocupado"], answer: "La localización geográfica desde donde se origina la transmisión" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: Para indicar la presencia de interferencia debida a otras estaciones o fuentes humanas, se emplea:", options: ["QRN (Estática o ruido natural)", "QRJ (Señales débiles o inaudibles)", "QRM (Interferencia de otras estaciones)", "QAZ (Riesgo de tormenta eléctrica)"], answer: "QRM (Interferencia de otras estaciones)" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Qué código se utiliza para solicitar la cancelación o anulación de un mensaje transmitido previamente?", options: ["QSY (Cambiar a otra frecuencia)", "QTA (Anular mensaje)", "QRX (Esperar un momento)", "QTC (Tengo un mensaje para usted)"], answer: "QTA (Anular mensaje)" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: La letra 'B' se pronuncia:", options: ["Beta", "Bravo", "Boston", "Buque"], answer: "Bravo" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: ¿Cómo se vocaliza la letra 'M'?", options: ["Metro", "Moon", "Mike", "Mamá"], answer: "Mike" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: La letra 'S' se transmite como:", options: ["Sigma", "Sierra", "Sugar", "Santiago"], answer: "Sierra" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: Para deletrear la letra 'V', se utiliza:", options: ["Víbora", "Violeta", "Victor", "Venus"], answer: "Victor" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: ¿Cuál es la palabra código para la letra 'Z'?", options: ["Zeta", "Zebra", "Zero", "Zulu"], answer: "Zulu" },
        { classId: 99, type: 'multiple-choice', question: "Código Numérico Específico: El número '0' se verbaliza como:", options: ["Cero", "Nada", "Cero de nada", "Nulo"], answer: "Cero de nada" },
        { classId: 99, type: 'multiple-choice', question: "Código Numérico Específico: ¿Cómo se enuncia el número '1'?", options: ["Uno", "Primero", "Unidad", "Principal"], answer: "Primero" },
        { classId: 99, type: 'multiple-choice', question: "Código Numérico Específico: La verbalización correcta para el número '5' es:", options: ["Cinco", "Quinta", "Quintal", "Quinto"], answer: "Quinto" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: La señal 'QRV' transmite la idea de:", options: ["¿Posee alguna información o mensaje para mi estación?", "Estar listo, preparado y en disposición para actuar o recibir", "Experimentar dificultades para decodificar la transmisión actual", "Interrumpir temporalmente la transmisión en curso"], answer: "Estar listo, preparado y en disposición para actuar o recibir" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: Para interrogar sobre la identidad de la estación que está transmitiendo ('¿Quién llama?'), se emplea:", options: ["QRA (¿Cuál es el nombre de su estación?)", "QRZ (¿Quién me llama?)", "QSO (¿Puede comunicarse con...?)", "QRU (¿Tiene algo para mí?)"], answer: "QRZ (¿Quién me llama?)" },

        // Clase 10: Seguridad del Bombero
        { classId: 10, question: "Identifique un riesgo profesional inherente a la actividad bomberil que pueda resultar en traumatismos severos o atrapamientos.", answer: { keywords: ["colapsos", "estructuras"], match: "all" }, displayAnswer: "Colapsos de estructuras", type: "input" },
        { classId: 10, question: "Explique la distinción conceptual fundamental entre 'Peligro' y 'Riesgo' en el análisis de la seguridad.", answer: { keywords: ["peligro", "fuente", "daño", "riesgo", "probabilidad", "gravedad"], match: "all" }, displayAnswer: "Peligro es la fuente de daño, Riesgo es la probabilidad por la gravedad", type: "input", tip:"Peligro es potencial, Riesgo es probabilidad y consecuencia." },

        // Clase 11: Psicología de la Emergencia
        { classId: 11, type: "input", question: "¿Cuál es el propósito fundamental de la psicología como disciplina científica?", answer: { keywords: ["analizar", "procesos", "mentales", "comportamiento", "humano"], match: "all" }, displayAnswer: "Analizar los procesos mentales y del comportamiento humano", tip: "En interacción con su entorno." },
        { classId: 11, type: "input", question: "Según la conceptualización de Hans Selye, ¿cómo se define el 'estrés' en términos de reacción del organismo?", answer: { keywords: ["reaccion", "fisica", "mental", "emocional", "circunstancias", "perturban", "equilibrio"], match: "all" }, displayAnswer: "Reacción física, mental y emocional ante circunstancias que perturban el equilibrio normal", tip:"Respuesta adaptativa del organismo." }
    ];

    let currentPlayQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    const MAX_QUESTIONS_PER_GAME = 10;
    let currentSelectedClassId = modules.length > 0 ? modules[0].id : null;

    const THEME_KEY = 'bomberosAppTheme';
    const TOTAL_CORRECT_KEY = 'bomberosTotalCorrect';
    const COMPLETED_MODULES_KEY = 'bomberosCompletedModules';

    // DOM Elements
    const splashScreenEl = document.getElementById('splash-screen');
    const enterAppButtonEl = document.getElementById('enter-app-button');
    const mainContainerEl = document.querySelector('.main-container');
    const themeSwitchEl = document.getElementById('theme-switch');
    const themeLabelEl = document.getElementById('theme-label');
    const classSelectorButtonEl = document.getElementById('class-selector-button');
    const classOptionsEl = document.getElementById('class-options');
    const statsSectionEl = document.querySelector('.stats-section');
    const totalCorrectAnswersStatEl = document.getElementById('total-correct-answers-stat');
    const modulesCompletedStatEl = document.getElementById('modules-completed-stat');
    const infoSectionContainerEl = document.querySelector('.info-section');
    const startEvaluationButtonEl = document.getElementById('start-evaluation-button');
    const gameAreaEl = document.getElementById('game-area');
    const backToMenuButtonEl = document.getElementById('back-to-menu-button'); // For evaluation game
    const scoreAreaEl = document.getElementById('score-area');
    const questionNumberEl = document.getElementById('question-number');
    const questionTextEl = document.getElementById('question-text');
    const answerInputEl = document.getElementById('answer-input');
    const multipleChoiceOptionsEl = document.getElementById('multiple-choice-options');
    const submitButtonEl = document.getElementById('submit-button');
    const feedbackAreaEl = document.getElementById('feedback-area');
    const feedbackTextEl = document.getElementById('feedback-text');
    const correctAnswerTextEl = document.getElementById('correct-answer-text');
    const nextButtonEl = document.getElementById('next-button');
    const resultsAreaEl = document.getElementById('results-area');
    const finalScoreEl = document.getElementById('final-score');
    const totalQuestionsPlayedEl = document.getElementById('total-questions-played');
    const restartButtonEl = document.getElementById('restart-button'); // For evaluation game
    const scoreDisplayEl = document.getElementById('score');

    // New Button
    const backToSplashButtonEl = document.getElementById('backToSplashButton');

    // Iframe toggle buttons and containers
    const toggleRolesServicioBtn = document.getElementById('toggleRolesServicioBtn');
    const rolesServicioContainer = document.getElementById('rolesServicioContainer');
    const togglePracticaCodigosBtn = document.getElementById('togglePracticaCodigosBtn');
    const practicaCodigosContainer = document.getElementById('practicaCodigosContainer');
    const toggleClasificadorBtn = document.getElementById('toggleClasificadorBtn');
    const clasificadorServiciosContainer = document.getElementById('clasificadorServiciosContainer');

    const iframeContainers = [rolesServicioContainer, practicaCodigosContainer, clasificadorServiciosContainer];


    function applyTheme(theme) {
        if (themeSwitchEl && themeLabelEl) {
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
                themeSwitchEl.checked = true;
                themeLabelEl.textContent = "Modo Claro";
            } else {
                document.body.classList.remove('dark-mode');
                themeSwitchEl.checked = false;
                themeLabelEl.textContent = "Modo Oscuro";
            }
        }
    }
    if (themeSwitchEl) {
        themeSwitchEl.addEventListener('change', () => {
            const newTheme = themeSwitchEl.checked ? 'dark' : 'light';
            localStorage.setItem(THEME_KEY, newTheme);
            applyTheme(newTheme);
        });
    }

    let totalCorrectAnswers = 0;
    let completedModules = new Set();

    function loadStats() {
        totalCorrectAnswers = parseInt(localStorage.getItem(TOTAL_CORRECT_KEY)) || 0;
        const completedModulesArray = JSON.parse(localStorage.getItem(COMPLETED_MODULES_KEY)) || [];
        completedModules = new Set(completedModulesArray);
        updateStatsDisplay();
    }
    function updateStatsDisplay() {
        if (totalCorrectAnswersStatEl && modulesCompletedStatEl) {
            totalCorrectAnswersStatEl.textContent = totalCorrectAnswers;
            modulesCompletedStatEl.textContent = completedModules.size;
        }
    }
    function incrementTotalCorrect() {
        totalCorrectAnswers++;
        localStorage.setItem(TOTAL_CORRECT_KEY, totalCorrectAnswers);
        updateStatsDisplay();
    }
    function markModuleCompleted(moduleId) {
        if (moduleId !== null && !completedModules.has(moduleId)) {
            completedModules.add(moduleId);
            localStorage.setItem(COMPLETED_MODULES_KEY, JSON.stringify(Array.from(completedModules)));
            updateStatsDisplay();
            populateModuleDropdown();
        }
    }

    function populateModuleDropdown() {
        if (!classOptionsEl || !classSelectorButtonEl) return;
        classOptionsEl.innerHTML = '';
        modules.forEach(module => {
            const link = document.createElement('a');
            link.href = "#";
            link.dataset.classid = module.id;
            link.dataset.classname = module.name;
            link.textContent = module.name;
            if (completedModules.has(module.id)) {
                const checkmark = document.createElement('span');
                checkmark.className = 'completed-check';
                checkmark.textContent = ' ✔️';
                link.appendChild(checkmark);
            }
            classOptionsEl.appendChild(link);
        });
        const defaultModule = modules.find(m => m.id === currentSelectedClassId) || (modules.length > 0 ? modules[0] : null);
        if (defaultModule && classSelectorButtonEl.firstChild) {
            classSelectorButtonEl.firstChild.textContent = defaultModule.name.replace(' ✔️', '') + " ";
        }
    }

    function updateInfoDisplay(selectedClassId) {
        if (selectedClassId === null && infoSectionContainerEl) {
            // Hide all info sections if no class is selected or if returning to a neutral main view
            modules.forEach(module => {
                const infoEl = document.getElementById(module.infoElementId);
                if (infoEl) infoEl.style.display = 'none';
            });
            return;
        }
        if (infoSectionContainerEl){ // Ensure this container is visible if we are showing specific info
             infoSectionContainerEl.style.display = 'block';
        }
        modules.forEach(module => {
            const infoEl = document.getElementById(module.infoElementId);
            if (infoEl) {
                infoEl.style.display = (module.id === selectedClassId) ? 'block' : 'none';
                if (module.id === selectedClassId) infoEl.open = true; // Open the selected one
            }
        });
    }
    
    // Function to show specific views
    function showView(viewName, targetIframeContainer = null) {
        // Hide all primary content sections
        if (splashScreenEl) splashScreenEl.style.display = 'none';
        if (mainContainerEl) mainContainerEl.style.display = 'none';
        iframeContainers.forEach(container => {
            if (container) container.style.display = 'none';
        });
         // Also ensure game/evaluation areas are hidden when switching main views
        if (gameAreaEl) gameAreaEl.style.display = 'none';
        if (resultsAreaEl) resultsAreaEl.style.display = 'none';
        if (scoreAreaEl) scoreAreaEl.style.display = 'none';


        // Show requested view
        switch (viewName) {
            case 'splash':
                if (splashScreenEl) splashScreenEl.style.display = 'flex'; // Assuming flex for splash
                if (backToSplashButtonEl) backToSplashButtonEl.style.display = 'none';
                // Reset iframe toggle button texts
                if (toggleRolesServicioBtn) toggleRolesServicioBtn.textContent = 'Ver Roles en un Servicio (Mostrar)';
                if (togglePracticaCodigosBtn) togglePracticaCodigosBtn.textContent = 'Practicar Códigos de Comunicación (Mostrar)';
                if (toggleClasificadorBtn) toggleClasificadorBtn.textContent = 'Clasificador de Servicios (Mostrar Juego)';
                break;
            case 'mainApp':
                if (mainContainerEl) {
                    mainContainerEl.style.display = 'block';
                    // Setup main app view (module selection view)
                    if (statsSectionEl) statsSectionEl.style.display = 'block';
                    updateInfoDisplay(currentSelectedClassId); // This also shows infoSectionContainerEl
                    if (startEvaluationButtonEl) startEvaluationButtonEl.style.display = 'inline-block';
                    if (gameAreaEl) gameAreaEl.style.display = 'none'; // Ensure game is hidden
                    if (resultsAreaEl) resultsAreaEl.style.display = 'none'; // Ensure results are hidden
                }
                if (backToSplashButtonEl) backToSplashButtonEl.style.display = 'inline-block';
                break;
            case 'iframeTool':
                if (targetIframeContainer) {
                    targetIframeContainer.style.display = 'block';
                }
                if (backToSplashButtonEl) backToSplashButtonEl.style.display = 'inline-block';
                break;
        }
    }


    if (enterAppButtonEl && splashScreenEl) {
        enterAppButtonEl.addEventListener('click', () => {
            loadStats(); // Load stats when entering app
            populateModuleDropdown(); // Populate dropdown
            showView('mainApp');
        });
    } else if (!splashScreenEl && mainContainerEl) { // Fallback if splash is not present for some reason
         loadStats();
         populateModuleDropdown();
         showView('mainApp');
    }


    if (classSelectorButtonEl && classOptionsEl) {
        classSelectorButtonEl.addEventListener('click', (event) => {
            event.stopPropagation();
            classOptionsEl.style.display = classOptionsEl.style.display === 'none' || classOptionsEl.style.display === '' ? 'block' : 'none';
        });
        document.addEventListener('click', (event) => { // Close dropdown if clicking outside
            if (classOptionsEl.style.display === 'block' && !classSelectorButtonEl.contains(event.target) && !classOptionsEl.contains(event.target)) {
                classOptionsEl.style.display = 'none';
            }
        });
        classOptionsEl.addEventListener('click', (event) => {
            let targetLink = event.target;
            if (targetLink.tagName !== 'A') {
                targetLink = targetLink.closest('a');
            }
            if (targetLink && targetLink.tagName === 'A') {
                event.preventDefault();
                currentSelectedClassId = parseInt(targetLink.dataset.classid);
                if (classSelectorButtonEl.firstChild) { // Update button text
                    classSelectorButtonEl.firstChild.textContent = targetLink.dataset.classname.replace(' ✔️', '') + " ";
                }
                classOptionsEl.style.display = 'none';
                updateInfoDisplay(currentSelectedClassId); // Update the displayed info based on selection
                // Ensure the main app view components are correctly shown
                if(mainContainerEl) mainContainerEl.style.display = 'block';
                if(statsSectionEl) statsSectionEl.style.display = 'block';
                if(infoSectionContainerEl) infoSectionContainerEl.style.display = 'block';
                if(startEvaluationButtonEl) startEvaluationButtonEl.style.display = 'inline-block';
                if (gameAreaEl) gameAreaEl.style.display = 'none';
                if (resultsAreaEl) resultsAreaEl.style.display = 'none';
            }
        });
    }
    
    // Event listener for "Volver al Inicio" button
    if (backToSplashButtonEl) {
        backToSplashButtonEl.addEventListener('click', () => {
            showView('splash');
        });
    }

    // Function to setup iframe toggle buttons
    function setupIframeToggle(buttonEl, iframeContainerEl, showText, hideText) {
        if (buttonEl && iframeContainerEl) {
            buttonEl.addEventListener('click', function() {
                const isHidden = iframeContainerEl.style.display === 'none' || iframeContainerEl.style.display === '';
                
                // Hide all other iframe containers first
                iframeContainers.forEach(container => {
                    if (container && container !== iframeContainerEl) {
                        container.style.display = 'none';
                        // Reset other buttons' text if needed (optional, can make it complex)
                        if (container === rolesServicioContainer && toggleRolesServicioBtn) toggleRolesServicioBtn.textContent = 'Ver Roles en un Servicio (Mostrar)';
                        if (container === practicaCodigosContainer && togglePracticaCodigosBtn) togglePracticaCodigosBtn.textContent = 'Practicar Códigos de Comunicación (Mostrar)';
                        if (container === clasificadorServiciosContainer && toggleClasificadorBtn) toggleClasificadorBtn.textContent = 'Clasificador de Servicios (Mostrar Juego)';
                    }
                });

                if (isHidden) {
                    showView('iframeTool', iframeContainerEl);
                    this.textContent = hideText;
                } else {
                    // If clicking to hide, go back to splash might be too abrupt.
                    // Better to just hide the current iframe and the user can click "Volver al Inicio" if they want.
                    iframeContainerEl.style.display = 'none';
                    this.textContent = showText;
                    // If all iframes are hidden, and mainApp is also hidden, then maybe show splash?
                    // For now, let "Volver al Inicio" handle returning to splash.
                }
            });
        }
    }

    // Setup iframe toggles
    setupIframeToggle(toggleRolesServicioBtn, rolesServicioContainer, 'Ver Roles en un Servicio (Mostrar)', 'Ver Roles en un Servicio (Ocultar)');
    setupIframeToggle(togglePracticaCodigosBtn, practicaCodigosContainer, 'Practicar Códigos de Comunicación (Mostrar)', 'Practicar Códigos de Comunicación (Ocultar)');
    setupIframeToggle(toggleClasificadorBtn, clasificadorServiciosContainer, 'Clasificador de Servicios (Mostrar Juego)', 'Clasificador de Servicios (Ocultar Juego)');


    function prepareAndStartGameQuestions() {
        if (currentSelectedClassId === null) {
            if(questionTextEl) questionTextEl.textContent = "Por favor, seleccione un módulo primero.";
            return;
        }
        // Hide info section when starting evaluation for the selected module
        if (infoSectionContainerEl) infoSectionContainerEl.style.display = 'none';
        if (statsSectionEl) statsSectionEl.style.display = 'none'; // Also hide stats

        let questionsForSelectedClass = allQuestions.filter(q => q.classId === currentSelectedClassId);
        if (typeof shuffleArray === "function") {
            shuffleArray(questionsForSelectedClass);
        }
        currentPlayQuestions = questionsForSelectedClass.slice(0, MAX_QUESTIONS_PER_GAME);
        currentQuestionIndex = 0;
        score = 0;
        if(scoreDisplayEl) scoreDisplayEl.textContent = score;

        if (currentPlayQuestions.length > 0) {
            if (gameAreaEl) gameAreaEl.style.display = 'block';
            if (scoreAreaEl) scoreAreaEl.style.display = 'block';
            if (startEvaluationButtonEl) startEvaluationButtonEl.style.display = 'none'; // Hide start button again
            loadQuestion();
        } else {
            if(questionTextEl) questionTextEl.textContent = "No hay preguntas disponibles para este módulo.";
            if(questionNumberEl) questionNumberEl.textContent = "";
            if(answerInputEl) answerInputEl.style.display = 'none';
            if(submitButtonEl) submitButtonEl.style.display = 'none';
            if(multipleChoiceOptionsEl) multipleChoiceOptionsEl.style.display = 'none';
            if(startEvaluationButtonEl) startEvaluationButtonEl.style.display = 'inline-block'; // Show start button if no questions
        }
    }

    if (startEvaluationButtonEl && mainContainerEl) { // Check mainContainerEl as it implies the main app view is active
        startEvaluationButtonEl.addEventListener('click', () => {
            // Ensure main app sections are hidden, game area shown
            if (infoSectionContainerEl) infoSectionContainerEl.style.display = 'none';
            if (statsSectionEl) statsSectionEl.style.display = 'none';
            if (classSelectorButtonEl) classSelectorButtonEl.parentElement.style.display = 'none'; // Hide dropdown

            prepareAndStartGameQuestions();
        });
    }
    
    // Back to Menu from Evaluation Game
    if (backToMenuButtonEl && gameAreaEl && mainContainerEl) {
        backToMenuButtonEl.addEventListener('click', () => {
             showView('mainApp'); //This will hide gameArea, show mainContainer and its relevant parts
             if (classSelectorButtonEl) classSelectorButtonEl.parentElement.style.display = 'block'; // Show dropdown again
        });
    }


    function loadQuestion() {
        if (!questionNumberEl || !questionTextEl || !feedbackTextEl || !correctAnswerTextEl || !feedbackAreaEl || !nextButtonEl || !multipleChoiceOptionsEl || !answerInputEl || !submitButtonEl) return;
        
        if (currentQuestionIndex < currentPlayQuestions.length && currentPlayQuestions[currentQuestionIndex]) {
            const currentQuestion = currentPlayQuestions[currentQuestionIndex];
            questionNumberEl.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentPlayQuestions.length}`;
            questionTextEl.textContent = currentQuestion.question;
            feedbackTextEl.textContent = '';
            correctAnswerTextEl.textContent = '';
            feedbackAreaEl.className = ''; // Clear feedback style
            nextButtonEl.style.display = 'none';
            multipleChoiceOptionsEl.innerHTML = ''; // Clear previous options

            if (currentQuestion.type === 'multiple-choice' && currentQuestion.options) {
                answerInputEl.style.display = 'none';
                submitButtonEl.style.display = 'none';
                multipleChoiceOptionsEl.style.display = 'flex'; // Assuming flex for layout
                currentQuestion.options.forEach(optionText => {
                    const optionButton = document.createElement('button');
                    optionButton.className = 'option-button';
                    optionButton.textContent = optionText;
                    optionButton.addEventListener('click', () => handleMultipleChoiceAnswer(optionButton, optionText, currentQuestion.answer));
                    multipleChoiceOptionsEl.appendChild(optionButton);
                });
            } else { // Input type
                answerInputEl.style.display = 'block';
                submitButtonEl.style.display = 'inline-block';
                multipleChoiceOptionsEl.style.display = 'none';
                answerInputEl.value = '';
                answerInputEl.disabled = false;
                answerInputEl.focus();
            }
        } else {
            showResults();
        }
    }
    
    function getNormalizedKeywordsFromString(text) {
        if (typeof text !== 'string' || text.trim() === '') {
            return [];
        }
        const basicNormalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const stopWords = new Set([
            "y", "e", "o", "u", "a", "ante", "bajo", "cabe", "con", "contra", "de", "desde",
            "en", "entre", "hacia", "hasta", "para", "por", "segun", "sin", "so", "sobre", "tras",
            "el", "la", "lo", "los", "las", "un", "una", "unos", "unas", "que", "qué", "cual", "cuál",
            "del", "al", "como", "cómo", "fue", "es", "son", "del", "al",
            "su", "sus", "mi", "mis", "tu", "tus", "mas", "más", "si", "sí", "no", "pero", "aunque",
            "tambien", "también", "muy", "mucho", "poco", "todo", "ya", "casi", "dentro", "fuera",
            "primer", "primero", "segundo", "tercero", "mil"
        ]);
        const words = basicNormalized.split(/\s+/)
            .map(word => word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))
            .filter(word => word.length > 0 && !stopWords.has(word));
        return [...new Set(words)].sort();
    }
    
    function normalizeAndSortWords(answerString) { // Fallback for string answers
        if (typeof answerString !== 'string' || answerString.trim() === '') return '';
        return answerString.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                           .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                           .split(/\s+/).filter(Boolean).sort().join('');
    }


    function handleSubmit() {
        if (!answerInputEl || answerInputEl.disabled) return;
        const userAnswerRaw = answerInputEl.value;

        if (currentQuestionIndex >= currentPlayQuestions.length || !currentPlayQuestions[currentQuestionIndex]) return;
        
        const currentQuestion = currentPlayQuestions[currentQuestionIndex];
        let isCorrect = false;
        const userKeywords = getNormalizedKeywordsFromString(userAnswerRaw);

        if (typeof currentQuestion.answer === 'object' && currentQuestion.answer.keywords) {
            const definedKeywords = currentQuestion.answer.keywords.map(kw =>
                kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            ).sort();
            const matchType = currentQuestion.answer.match || "all";

            if (matchType === "all") {
                isCorrect = definedKeywords.every(dkw => userKeywords.includes(dkw)) && 
                            userKeywords.every(ukw => definedKeywords.includes(ukw) || userKeywords.length <= definedKeywords.length + 2); // Allow some flexibility
                 // More precise check: user must have all keywords and not too many extra if definedKeywords is small
                if (definedKeywords.length > 0 && userKeywords.length > definedKeywords.length + Math.max(2, Math.floor(definedKeywords.length * 0.5))) {
                     // If user provides many more words than necessary, even if all keywords are present.
                     // This is a heuristic, adjust as needed.
                     // isCorrect = false; // Uncomment to make it stricter for very verbose answers
                }
            }
        } else if (typeof currentQuestion.answer === 'string') { // Fallback for simple string answers
            const normUserAnswerSorted = normalizeAndSortWords(userAnswerRaw);
            const normCorrectAnswerSorted = normalizeAndSortWords(currentQuestion.answer);
            isCorrect = normUserAnswerSorted && normCorrectAnswerSorted && normUserAnswerSorted === normCorrectAnswerSorted;
        }

        answerInputEl.disabled = true;
        if(submitButtonEl) submitButtonEl.style.display = 'none';
        if(nextButtonEl) nextButtonEl.style.display = 'inline-block';

        if (isCorrect) {
            score++;
            incrementTotalCorrect();
            if(feedbackTextEl) feedbackTextEl.textContent = '¡Correcto!';
            if(feedbackAreaEl) feedbackAreaEl.className = 'correct';
        } else {
            if(feedbackTextEl) feedbackTextEl.textContent = 'Incorrecto.';
            if(feedbackAreaEl) feedbackAreaEl.className = 'incorrect';
            if(correctAnswerTextEl) {
                const displayAnswer = currentQuestion.displayAnswer ||
                                    (typeof currentQuestion.answer === 'string' ? currentQuestion.answer :
                                    (currentQuestion.answer && currentQuestion.answer.keywords ? currentQuestion.answer.keywords.join(', ') : "No disponible"));
                correctAnswerTextEl.textContent = `Respuesta: ${displayAnswer}`;
                if (currentQuestion.tip) { correctAnswerTextEl.textContent += ` (${currentQuestion.tip})`; }
            }
        }
        if(scoreDisplayEl) scoreDisplayEl.textContent = score;
    }

    function handleMultipleChoiceAnswer(selectedButton, selectedOptionText, correctAnswerText) {
        if (!multipleChoiceOptionsEl || !nextButtonEl || !feedbackTextEl || !feedbackAreaEl || !correctAnswerTextEl || !scoreDisplayEl) return;
        
        const optionButtons = multipleChoiceOptionsEl.querySelectorAll('.option-button');
        optionButtons.forEach(btn => btn.disabled = true); // Disable all options

        nextButtonEl.style.display = 'inline-block';

        if (selectedOptionText === correctAnswerText) {
            score++;
            incrementTotalCorrect();
            feedbackTextEl.textContent = '¡Correcto!';
            feedbackAreaEl.className = 'correct';
            selectedButton.classList.add('correct-option');
        } else {
            feedbackTextEl.textContent = 'Incorrecto.';
            feedbackAreaEl.className = 'incorrect';
            correctAnswerTextEl.textContent = `Respuesta correcta: ${correctAnswerText}`;
            selectedButton.classList.add('incorrect-option-selected');
            // Highlight the correct option
            optionButtons.forEach(btn => {
                if (btn.textContent === correctAnswerText) {
                    btn.classList.add('correct-option');
                }
            });
        }
        scoreDisplayEl.textContent = score;
    }

    if (submitButtonEl) submitButtonEl.addEventListener('click', handleSubmit);
    if (answerInputEl) {
        answerInputEl.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && !answerInputEl.disabled) {
                 if (currentQuestionIndex < currentPlayQuestions.length && currentPlayQuestions[currentQuestionIndex]) {
                    const currentQuestion = currentPlayQuestions[currentQuestionIndex];
                    if (currentQuestion && (currentQuestion.type === 'input' || !currentQuestion.type)) {
                         handleSubmit();
                    }
                }
            }
        });
    }
    if (nextButtonEl) {
        nextButtonEl.addEventListener('click', () => {
            currentQuestionIndex++;
            loadQuestion();
        });
    }

    function showResults() {
        if(!gameAreaEl || !scoreAreaEl || !resultsAreaEl || !finalScoreEl || !totalQuestionsPlayedEl) return;
        gameAreaEl.style.display = 'none';
        scoreAreaEl.style.display = 'none'; // Hide score during results
        resultsAreaEl.style.display = 'block';
        finalScoreEl.textContent = score;
        totalQuestionsPlayedEl.textContent = currentPlayQuestions.length;
        
        if (currentSelectedClassId !== null) {
            markModuleCompleted(currentSelectedClassId);
        }
        // Show the main module selection button again
        if (classSelectorButtonEl) classSelectorButtonEl.parentElement.style.display = 'block';
    }

    // Restart Evaluation (from results screen)
    if (restartButtonEl && resultsAreaEl && mainContainerEl) {
        restartButtonEl.addEventListener('click', () => {
            resultsAreaEl.style.display = 'none'; // Hide results
            showView('mainApp'); // Go back to module selection view
            if (classSelectorButtonEl) classSelectorButtonEl.parentElement.style.display = 'block'; // Ensure dropdown is visible
        });
    }
    

    // Initial Setup
    const storedTheme = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(storedTheme);

    // Initialize view based on whether splash screen should be shown or not.
    // If splashScreenEl exists, it means it should be shown by default.
    if (splashScreenEl) {
        showView('splash'); // Start with splash screen
        // The 'enterAppButtonEl' listener will then call showView('mainApp')
    } else { // If no splash screen, directly show main app
        loadStats();
        populateModuleDropdown();
        showView('mainApp');
    }
    
    // Ensure currentSelectedClassId is initialized for updateInfoDisplay if showing mainApp directly
     if (modules.length > 0 && (!splashScreenEl || splashScreenEl.style.display === 'none')) {
        if(currentSelectedClassId === null) currentSelectedClassId = modules[0].id;
        populateModuleDropdown(); // Ensure dropdown is populated
        updateInfoDisplay(currentSelectedClassId); // Display info for the default/current module
    }

}); // End DOMContentLoaded for main app logic

// Separate DOMContentLoaded for motivational phrases and clock, or move to the end of the one above.
// For simplicity, keeping them as they were, assuming they run after elements are available.
// Or, better, ensure they are also within a DOMContentLoaded or window.onload.

const phrases = [
    "Servir es un honor, proteger es nuestra misión. ❤️",
    "La perseverancia es el camino hacia el éxito.",
    "Cada día es una nueva oportunidad para mejorar.",
    "Nunca subestimes el poder de tus sueños.",
    "El esfuerzo de hoy será la recompensa de mañana."
];

function showRandomPhrase() {
    const phraseElement = document.getElementById("motivational-phrase");
    if (phraseElement) {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        phraseElement.textContent = phrases[randomIndex];
    }
}

function updateClock() {
    const dateTimeElement = document.getElementById("date-time");
    if (dateTimeElement) {
        const now = new Date();
        try {
            const formattedTime = now.toLocaleString("es-AR", {
                weekday: "long", year: "numeric", month: "long", day: "numeric",
                hour: "2-digit", minute: "2-digit", second: "2-digit"
            });
            dateTimeElement.textContent = formattedTime;
        } catch (e) {
            // Fallback for environments that might not support es-AR fully or options
            dateTimeElement.textContent = now.toLocaleDateString() + " " + now.toLocaleTimeString();
            console.warn("toLocaleString with es-AR options failed, using fallback. Error:", e);
        }
    }
}

// Ensure these run after DOM is ready
window.addEventListener('load', function() { // 'load' ensures everything including images is loaded
    showRandomPhrase();
    updateClock();
    setInterval(updateClock, 1000);
});


