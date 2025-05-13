        // carga de drive
        document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".bg-gray-800");
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        content.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 500);
});


        document.addEventListener('DOMContentLoaded', () => {
            // Función para barajar un array (Fisher-Yates shuffle)
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
                }
            }

            // Definición de los módulos de estudio
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
                { id: 11, name: "Clase 11 (Psicología de la Emergencia)", infoElementId: "info-clase-11" } // Nuevo módulo
            ];

            // Banco de todas las preguntas
            const allQuestions = [
                // Clase 1
                { classId: 1, question: "¿En qué año comienza la historia de los Bomberos Voluntarios Argentinos?", answer: "1884", type: "input" },
                { classId: 1, question: "¿Principal impulsor del primer Cuerpo de Bomberos Voluntarios de Argentina?", answer: "Tomás Liberti", type: "input" },
                { classId: 1, question: "¿Fecha exacta de formación del primer Cuerpo de BV de Argentina?", answer: "2 de junio de 1884", type: "input" },
                { classId: 1, question: "¿Nombre original en italiano del primer Cuerpo de BV en La Boca?", answer: "Societa di Pompieri Italiani Volontari di La Boca", type: "input" },
                { classId: 1, question: "¿Evento en dic. 1883 que impulsó la organización de bomberos en La Boca?", answer: "Un incendio", type: "input" },
                { classId: 1, question: "¿Fundación de BV Malvinas Argentinas?", answer: "3 de marzo de 1984", type: "input" },
                { classId: 1, question: "¿Nombre del Cuartel Central de BV Malvinas Argentinas?", answer: "Juan Espina", type: "input" },
                { classId: 1, question: "¿Dirección del Cuartel Central de BV Malvinas Argentinas?", answer: "Dr Baroni 2684", type: "input" },
                { classId: 1, question: "¿Teléfono del Cuartel Central de BV Malvinas Argentinas?", answer: "46602222", type: "input" },
                { classId: 1, question: "¿Primer Presidente H.C.D. de BV Malvinas Argentinas?", answer: "Mendez Bernardo", type: "input" },
                { classId: 1, question: "¿Primer Jefe C.A. de BV Malvinas Argentinas?", answer: "Garcia Jose", type: "input" },
                { classId: 1, question: "¿Jefe C.A. actual de BV Malvinas Argentinas (según PDF Clase 1)?", answer: "Oficial Herrera Andrés", type: "input" },
                { classId: 1, question: "¿Inauguración del Destacamento N° 1 de Grand Bourg?", answer: "23 de Febrero de 1993", type: "input" },
                { classId: 1, question: "¿Nombre del Destacamento N° 1 de Grand Bourg?", answer: "Dionicio García", type: "input" },
                { classId: 1, question: "¿Dirección del Destacamento N° 1 de Grand Bourg?", answer: "Paso de los Andes 951", type: "input" },
                { classId: 1, question: "¿Teléfono del Destacamento N° 1 de Grand Bourg?", answer: "02320481777", type: "input" },
                { classId: 1, question: "¿Encargado actual del Destacamento N° 1 (según PDF Clase 1)?", answer: "Oficial Paz", type: "input" },
                // Clase 2
                { classId: 2, question: "¿Denominación de la institución de BV de Malvinas Argentinas?", answer: "Asociación de Bomberos Voluntarios de Malvinas Argentinas", type: "input" },
                { classId: 2, question: "¿Tipo de entidad de la Asociación de BV?", answer: "Asociación civil sin fines de lucro y de bien público", type: "input" },
                { classId: 2, question: "¿Número INOBV de BV Malvinas Argentinas?", answer: "166", type: "input" },
                { classId: 2, question: "Nombra los dos tipos principales de socios.", answer: "Activos y Protectores", type: "input" },
                { classId: 2, question: "¿Máxima autoridad en una asociación de bomberos según estatuto?", answer: "La asamblea de los socios", type: "input" },
                { classId: 2, question: "Nombra las dos autoridades principales en la Asociación Civil de bomberos.", answer: "El Consejo Directivo y el Cuerpo Activo", type: "input" },
                { classId: 2, question: "¿Quién designa al Jefe de Cuerpo?", answer: "El Consejo Directivo", type: "input" },
                { classId: 2, question: "¿Tipo de estructura del Cuerpo Activo?", answer: "Piramidal", type: "input" },
                { classId: 2, question: "¿Máxima autoridad dentro del Cuerpo Activo?", answer: "Jefe de Cuerpo", type: "input" },
                { classId: 2, question: "¿Cómo se dividen las actividades de un Cuerpo de Bomberos?", answer: "Orden Interno y Servicios", type: "input" },
                { classId: 2, question: "Nombra las 4 secciones ejecutivas principales supervisadas por el 2do Jefe.", answer: "Ayudantía, Materiales y Equipos, Automotores, Capacitación", type: "input" },
                { classId: 2, question: "¿Grado más alto en Oficiales Superiores?", answer: "Comandante General", type: "input" },
                { classId: 2, question: "¿Grado más bajo en Suboficiales Subalternos?", answer: "Cabo", type: "input" },
                { classId: 2, question: "Tres factores de las obligaciones de los Bomberos (tropa).", answer: "Amor al servicio, capacitación permanente y obediencia", type: "input" },
                { classId: 2, question: "¿Ley provincial que regula asociaciones de BV en Bs.As.?", answer: "Ley 10917", type: "input" },
                { classId: 2, question: "¿Documento que establece reglas de organización de una asociación?", answer: "El Estatuto", type: "input" },
                { classId: 2, question: "¿Depto. de Ayudantía que maneja Legajos Personales?", answer: "Departamento de Personal", type: "input" },
                { classId: 2, question: "¿Sección encargada de Autobombas y vehículos de rescate?", answer: "Sección Automotores", type: "input" },
                { classId: 2, question: "¿Qué es 'Orden Interno' en un cuartel?", answer: "Actividades de la puerta para adentro", type: "input" },
                { classId: 2, question: "¿Único que puede aplicar castigos por faltas en el Cuerpo Activo?", answer: "El Jefe de Cuerpo", type: "input" },
                // Clase 3
                { classId: 3, question: "¿Qué número de Ley Nacional regula la organización y misión de los bomberos voluntarios en Argentina?", answer: "25054", tip:"Ley 25.054", type: "input" },
                { classId: 3, question: "¿En qué año fue sancionada la Ley Nacional 25.054?", answer: "1998", type: "input" },
                { classId: 3, question: "Menciona un objetivo de la Ley Nacional 25.054.", answer: "Establecer un subsidio nacional", tip: "O reconocer servicio público, o brindar apoyo económico.", type: "input" },
                { classId: 3, question: "Según la Ley 25.054, ¿qué beneficio tienen los bomberos en planes de viviendas del Estado?", answer: "Puntaje especial", type: "input" },
                { classId: 3, question: "Bajo la Ley 25.054, ¿cómo son considerados los bomberos voluntarios en caso de emergencias respecto a su situación laboral?", answer: "Movilizados y carga pública para empleadores", tip:"Movilizados o carga pública.", type: "input" },
                { classId: 3, question: "¿De qué están exentos los bomberos voluntarios según la Ley 25.054?", answer: "Impuestos nacionales, derechos y tasas aduaneras", tip: "Mencionar impuestos nacionales es clave.", type: "input" },
                { classId: 3, question: "¿Qué característica tienen los fondos y bienes de los bomberos voluntarios según la Ley 25.054?", answer: "Inembargables e inejecutables", type: "input" },
                { classId: 3, question: "¿Qué organismo administra el fondo del subsidio nacional según la Ley 25.054?", answer: "Dirección Nacional de Defensa Civil", type: "input" },
                { classId: 3, question: "¿Qué Ley Nacional (número) otorga beneficios a las Sociedades de Bomberos Voluntarios eximiéndolas de impuestos nacionales?", answer: "23139", tip:"Ley 23.139", type: "input" },
                { classId: 3, question: "¿En qué año fue sancionada la Ley Nacional 23.139?", answer: "1984", type: "input" },
                { classId: 3, question: "¿Qué número de Ley Provincial regula la organización de bomberos voluntarios en Buenos Aires?", answer: "10917", tip:"Ley 10.917", type: "input" },
                { classId: 3, question: "¿En qué año fue sancionada la Ley Provincial 10.917?", answer: "1990", type: "input" },
                { classId: 3, question: "Según la Ley 10.917, ¿cómo deben constituirse las asociaciones de bomberos voluntarios?", answer: "Personas jurídicas de bien público sin fines de lucro", type: "input" },
                { classId: 3, question: "¿Quién autoriza el funcionamiento de las asociaciones de bomberos en la Prov. de Bs.As. según la Ley 10.917?", answer: "Coordinador General de Defensa Civil de la Provincia", type: "input" },
                { classId: 3, question: "Menciona una función de los bomberos voluntarios según la Ley Provincial 10.917.", answer: "Prevención, extinción e investigación de incendios", tip: "O rescate y salvamento, o acción educativa.", type: "input" },
                // Clase 5
                { classId: 5, question: "¿Cuál es el propósito principal de 'La Guardia' en un cuartel de bomberos?", answer: "Contar con personal para aprestamiento inmediato 24/7", tip: "Respuesta debe incluir disponibilidad constante.", type: "input" },
                { classId: 5, question: "¿Qué se define como 'La Instrucción' para el Cuerpo Activo?", answer: "Día y hora preestablecida para capacitación y entrenamiento", tip: "Clases prácticas y teóricas.", type: "input" },
                { classId: 5, question: "¿Qué artículo de la Ley Provincial 10.917 reconoce el carácter de servicio público a las actividades de los Bomberos Voluntarios?", answer: "Artículo 3", type: "input" },
                { classId: 5, question: "Menciona una de las misiones del Cuerpo Activo según el Art. 23 de la Ley 10.917.", answer: "Prevención y extinción de incendios", tip: "O rescate, conservación de equipos, educación comunitaria, intervención general.", type: "input" },
                { classId: 5, question: "¿Cómo se clasifican los servicios en una primera parte, según la prontitud o urgencia?", answer: "Servicios de Emergencia y Servicios Autorizados", type: "input" },
                { classId: 5, question: "Nombra un tipo de 'Servicio de Emergencia'.", answer: "Incendios en General", tip: "O Forestales, Auxilios, Desastres, MATPEL, Colaboración en emergencias.", type: "input" },
                { classId: 5, question: "Nombra un tipo de 'Servicio Autorizado'.", answer: "Especiales", tip: "O Guardias, Comando, Técnico, Ceremonial.", type: "input" },
                { classId: 5, question: "¿Quién es el 'Jefe de Servicio' en un siniestro?", answer: "El de mayor jerarquía presente en el lugar", type: "input" },
                { classId: 5, question: "¿Cómo se denomina al superior que viaja sobre una unidad que sale a prestar servicio?", answer: "Jefe de Dotación", type: "input" },
                { classId: 5, question: "Si salen dos o más unidades a un siniestro, ¿cómo se denomina al de mayor jerarquía presente?", answer: "Jefe de Fuerzas", type: "input" },
                { classId: 5, question: "¿Qué código numérico se usa para clasificar un servicio de 'Auxilio'?", answer: "02", type: "input" },
                { classId: 5, question: "¿Qué tipo de servicio corresponde a la colocación de drizas o desagotes, que no es obligatorio?", answer: "Especiales", tip: "Código 03.", type: "input" },
                { classId: 5, question: "¿Cuándo se presta un servicio de 'Colaboración' (código 05)?", answer: "Fuera de la jurisdicción propia, a requerimiento de un Cuerpo vecino", type: "input" },
                { classId: 5, question: "¿Qué implica un servicio de 'Comando' (código 07)?", answer: "Representación de la institución ante el Poder Público, Federaciones, etc.", type: "input" },
                { classId: 5, question: "¿Qué tipo de servicio es la verificación de planos de sistemas contra incendios?", answer: "Técnico", tip: "Código 08.", type: "input" },
                // Clase 6
                { classId: 6, question: "Define 'Aptitud' en el contexto bomberil.", answer: "Capacidad y disposición para el buen ejercicio de la profesión", tip: "Idoneidad, habilidad.", type: "input" },
                { classId: 6, question: "Menciona una de las 4 cualidades que requiere la aptitud bomberil.", answer: "Capaz", tip: "O Idóneo, Hábil, Dispuesto.", type: "input" },
                { classId: 6, question: "¿Qué significa ser 'Idóneo' como bombero?", answer: "Tener conocimiento teórico-práctico para actuar con eficacia", type: "input" },
                { classId: 6, question: "¿Cómo se consigue la aptitud para ser Bombero?", answer: "Estudiando, capacitándose, compañerismo, cumpliendo obligaciones, superación", type: "input" },
                { classId: 6, question: "Según la OMS (1946), ¿qué es la salud?", answer: "Estado de completo bienestar físico, mental, espiritual, emocional y social", type: "input" },
                { classId: 6, question: "¿Es suficiente un excelente estado físico para desempeñarse como bombero si no hay equilibrio psíquico?", answer: "No", type: "input" },
                { classId: 6, question: "¿Qué debe hacer un bombero si se siente indispuesto psíquicamente para una tarea?", answer: "Reconocerlo y no realizarla bajo presión o en condiciones inconvenientes", tip: "Pedir ayuda también es válido.", type: "input" },
                { classId: 6, question: "¿Cuál es la obligación primera del bombero en su función, además de salvar vidas y bienes?", answer: "Guardar por su propia vida y seguridad", type: "input" },
                { classId: 6, question: "¿A qué se refiere la 'Ética Bomberil'?", answer: "Normas y principios morales que guían el comportamiento de los bomberos", type: "input" },
                { classId: 6, question: "Menciona un principio de la Ética Bomberil.", answer: "Ser buena persona antes de ser bombero", tip: "O respetar verdad, conducta ética, respetar jerarquía, pulcritud, etc.", type: "input" },
                { classId: 6, question: "¿Qué es una 'Orden' en el ámbito bomberil?", answer: "Modo de expresión con que un superior indica a un subalterno la ejecución de un mandato", type: "input" },
                { classId: 6, question: "Nombra un tipo de orden según a quién va dirigida.", answer: "Individuales", tip: "O Colectivas.", type: "input" },
                { classId: 6, question: "Nombra un tipo de orden según su forma de expresión.", answer: "Verbales", tip: "O Escritas.", type: "input" },
                { classId: 6, question: "¿Qué es una orden 'Global'?", answer: "Mandato para poner en marcha un plan de trabajo o rol preestablecido", type: "input" },
                { classId: 6, question: "¿Qué implica la desobediencia o incumplimiento de una orden?", answer: "Una falta de disciplina que debe ser sancionada", type: "input" },
                { classId: 6, question: "¿Quién es la única autoridad que puede sancionar las 'Faltas' previstas en el Reglamento al Régimen Disciplinario?", answer: "El Jefe de Cuerpo", type: "input" },
                { classId: 6, question: "¿Qué es 'Mandar' según el contexto bomberil?", answer: "Ejercer la autoridad para educar, instruir, gobernar y conducir al personal", type: "input" },
                { classId: 6, question: "¿Es transferible la responsabilidad del mando?", answer: "No", type: "input" },
                { classId: 6, question: "¿Cuántas horas de guardia mensuales asume como obligación el integrante del Cuerpo Activo al ingresar?", answer: "24 horas", type: "input" },
                { classId: 6, question: "En el sistema de Grupos de Guardia, ¿quién es el responsable de cada grupo?", answer: "Un Oficial de Servicio", type: "input" },
                // Clase 7
                { classId: 7, question: "¿Qué es el 'Parte de Servicio'?", answer: "Una planilla que documenta cronológicamente lo acontecido en un servicio", type: "input" },
                { classId: 7, question: "¿Quién confecciona el Parte de Servicio una vez finalizado el mismo?", answer: "El personal a cargo de la dotación", type: "input" },
                { classId: 7, question: "Menciona un dato que debe incluir el Parte de Servicio.", answer: "Horarios", tip: "O personal interviniente, móviles, víctimas, autor llamada, estado situación, disposiciones, desarrollo.", type: "input" },
                { classId: 7, question: "¿Para qué fines son necesarios los datos del Parte de Servicio?", answer: "Legales, administrativos y de seguros", tip: "Y estadísticas.", type: "input" },
                { classId: 7, question: "¿Es obligatoria la confección del Parte de Servicio?", answer: "Sí", type: "input" },
                { classId: 7, question: "Además de la gestión de recursos, ¿para qué se utiliza la información de los servicios prestados a nivel federaciones y Consejo Nacional?", answer: "Para representar a los bomberos ante los poderes públicos", type: "input" },
                { classId: 7, question: "¿Qué personal suministra datos al encargado de la dotación para confeccionar el Parte de Servicio?", answer: "El furriel y el cuartelero", type: "input" },
                { classId: 7, question: "El listado de qué personal contiene la planilla del Parte de Servicio?", answer: "De todo el cuerpo activo", type: "input" },
                { classId: 7, question: "Verdadero o Falso: Cada institución puede crear otros documentos relacionados con los servicios además del Parte tipo.", answer: "Verdadero", type: "input" },
                { classId: 7, question: "Según la Clase 7, ¿cuántos grupos principales de clasificación de servicios existen?", answer: "Once", tip: "Del 01 al 11.", type: "input" },
                
                // Clase 9 (Input)
                { classId: 9, question: "¿Cuál es la importancia de las comunicaciones en las tareas de Bomberos?", answer: "Vital para el buen logro de los servicios", type: "input" },
                { classId: 9, question: "Nombra los dos tipos principales de clasificación de las comunicaciones.", answer: "Alámbricas e Inalámbricas", type: "input" },
                { classId: 9, question: "¿Qué tipo de medio utilizan las comunicaciones alámbricas?", answer: "Medio sólido", type: "input" },
                { classId: 9, question: "¿Qué utilizan las comunicaciones inalámbricas para comunicarse?", answer: "Ondas radioeléctricas", type: "input" },
                { classId: 9, question: "¿Cuál es el organismo internacional que distribuye bandas de frecuencias?", answer: "UIT", type: "input" },
                { classId: 9, question: "¿Cuál es el ente regulador de frecuencias en Argentina?", answer: "ENACOM", type: "input" },
                { classId: 9, question: "¿En qué unidad se mide la frecuencia?", answer: "Hertzio", type: "input" },
                { classId: 9, question: "Menciona un componente de una 'Estación Radioeléctrica'.", answer: "Transceptor", type: "input" },
                { classId: 9, question: "¿Qué significa QAP?", answer: "Quedo en escucha", type: "input" },
                { classId: 9, question: "¿Qué significa QSL?", answer: "Comprendido", type: "input" },

                // Clase 99: Códigos - Opción Múltiple
                { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Qué significa QAP?", options: ["Quedo en escucha", "Ubicación del siniestro", "Problemas de equipo", "Comprendido"], answer: "Quedo en escucha" },
                { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Qué significa QSL?", options: ["Anular mensaje", "Comprendido", "Transmitir más pausado", "¿Quién llama?"], answer: "Comprendido" },
                { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Qué significa QTH?", options: ["La hora exacta", "Hacer puente con...", "Ubicación de la estación", "Estoy ocupado"], answer: "Ubicación de la estación" },
                { classId: 99, type: 'multiple-choice', question: "Código Q: Si hay interferencia por ruidos atmosféricos, se usa:", options: ["QRN", "QRJ", "QRM", "QAZ"], answer: "QRM" },
                { classId: 99, type: 'multiple-choice', question: "Código Q: Para pedir que se anule un mensaje anterior, se usa:", options: ["QSY", "QTA", "QRX", "QTC"], answer: "QTA" },
                { classId: 99, type: 'multiple-choice', question: "Código Alfa: La letra 'B' se dice:", options: ["Beta", "Bravo", "Boston", "Buque"], answer: "Bravo" },
                { classId: 99, type: 'multiple-choice', question: "Código Alfa: La letra 'M' se dice:", options: ["Metro", "Moon", "Mike", "Mamá"], answer: "Mike" },
                { classId: 99, type: 'multiple-choice', question: "Código Alfa: La letra 'S' se dice:", options: ["Sigma", "Sierra", "Sugar", "Santiago"], answer: "Sierra" },
                { classId: 99, type: 'multiple-choice', question: "Código Alfa: La letra 'V' se dice:", options: ["Víbora", "Violeta", "Victor", "Venus"], answer: "Victor" },
                { classId: 99, type: 'multiple-choice', question: "Código Alfa: La letra 'Z' se dice:", options: ["Zeta", "Zebra", "Zero", "Zulu"], answer: "Zulu" },
                { classId: 99, type: 'multiple-choice', question: "Código Numérico: El número '0' se dice:", options: ["Cero", "Nada", "Cero de nada", "Nulo"], answer: "Cero de nada" },
                { classId: 99, type: 'multiple-choice', question: "Código Numérico: El número '1' se dice:", options: ["Uno", "Primero", "Unidad", "Principal"], answer: "Primero" },
                { classId: 99, type: 'multiple-choice', question: "Código Numérico: El número '5' se dice:", options: ["Cinco", "Quinta", "Quintal", "Quinto"], answer: "Quinto" },
                { classId: 99, type: 'multiple-choice', question: "Código Q: 'QRV' significa:", options: ["¿Tiene algo para mí?", "Estoy atento / Preparado", "No puedo copiarlo", "Interrumpa transmisión"], answer: "Estoy atento / Preparado" },
                { classId: 99, type: 'multiple-choice', question: "Código Q: Para preguntar '¿Quién llama?', se usa:", options: ["QRA", "QRZ", "QSO", "QRU"], answer: "QRZ" },

                // Clase 10
                { classId: 10, question: "Menciona un riesgo profesional al que están expuestos los bomberos.", answer: "Colapsos de estructuras", type: "input" },
                { classId: 10, question: "¿Qué es un 'Accidente' en el contexto laboral?", answer: "Acontecimiento no deseado que interrumpe tareas causando lesiones o daños", type: "input" },
                { classId: 10, question: "¿Cuál es la diferencia entre 'Peligro' y 'Riesgo'?", answer: "Peligro es la fuente de daño, Riesgo es la probabilidad por la gravedad", type: "input" },
                { classId: 10, question: "Define 'Enfermedad Profesional'.", answer: "Enfermedad contraída por exposición a factores de riesgo laborales", type: "input" },
                { classId: 10, question: "¿Cuáles son las dos categorías principales de causas de accidentes?", answer: "Causas Básicas y Causas Inmediatas", type: "input" },
                { classId: 10, question: "Da un ejemplo de una 'Causa Inmediata' de un accidente.", answer: "Ausencia de EPP", tip: "O condición insegura, acto inseguro.", type: "input" },
                { classId: 10, question: "Nombra una lesión típica padecida por bomberos.", answer: "Traumatismos", tip: "O esguinces, heridas, asfixia, quemaduras, etc.", type: "input" },
                { classId: 10, question: "Menciona una enfermedad profesional común en bomberos.", answer: "Accidentes cardiovasculares", tip: "O stress psicológico, afecciones músculo-esqueléticas, cáncer, etc.", type: "input" },
                { classId: 10, question: "¿Cuál es el propósito del Equipo de Protección Personal (EPP)?", answer: "Reducir y proteger de los accidentes", tip: "No los evita, pero mitiga consecuencias.", type: "input" },
                { classId: 10, question: "Nombra un componente del EPP para incendios estructurales.", answer: "Casco", tip: "O monjita, chaquetón, pantalón, guantes, botas, ERA, PASS.", type: "input" },
                { classId: 10, question: "¿Cuántas capas principales componen el chaquetón y pantalón estructural?", answer: "Tres" , tip: "Capa exterior, barrera de humedad, barrera térmica.", type: "input" },
                { classId: 10, question: "¿Qué norma NFPA especifica la confección de Equipos Estructurales para bomberos?", answer: "NFPA 1971", type: "input" },
                { classId: 10, question: "¿Cuál es el primer paso en el proceso de limpieza de equipos estructurales según NFPA 1851?", answer: "Descontaminación Primaria", tip: "O Reducción de Exposición Preliminar (REP).", type: "input" },
                { classId: 10, question: "¿Qué es un dispositivo PASS?", answer: "Sistema de seguridad de alerta personal que suena si el bombero está inmóvil", type: "input" },
                { classId: 10, question: "Si no se usa máscara de ERA, ¿qué protección ocular adicional se debe emplear según NFPA 1500?", answer: "Antiparras y protector facial", type: "input" },
                { classId: 10, question: "Nombra una situación donde es fundamental el uso del ERA.", answer: "Deficiencia de Oxígeno", tip: "O temperaturas elevadas, humo, gases tóxicos.", type: "input" },
                { classId: 10, question: "¿Cuál es el tipo de ERA más utilizado por bomberos, donde se exhala directamente a la atmósfera?", answer: "ERA de Circuito Abierto", type: "input" },
                { classId: 10, question: "Menciona una parte principal de un ERA de circuito abierto.", answer: "Máscara", tip: "O Arnés, Cilindro.", type: "input" },
                { classId: 10, question: "¿Cuál es la función de la válvula de demanda en un ERA?", answer: "Suministrar aire según necesidades y mantener presión positiva en máscara", type: "input" },
                { classId: 10, question: "¿Qué presión mínima (aproximada) debería tener un cilindro de ERA antes de su uso?", answer: "2000 psi", tip: "O 2200 psi, según el contexto del PDF.", type: "input" },

                // Clase 11: Psicología de la Emergencia
                { classId: 11, type: "input", question: "¿Cuál es el objetivo de la psicología como disciplina?", answer: "Analizar los procesos mentales y del comportamiento humano" },
                { classId: 11, type: "multiple-choice", question: "La Psicología de la Emergencia estudia los cambios y reacciones de individuos y grupos:", options: ["Solo durante una emergencia", "Solo después de una emergencia", "Antes, durante y después de una emergencia", "Principalmente antes de una emergencia"], answer: "Antes, durante y después de una emergencia" },
                { classId: 11, type: "input", question: "¿En qué año se conformó el Departamento de Psicología de la Emergencia de la Academia Nacional de Bomberos Voluntarios en Argentina?", answer: "2008" },
                { classId: 11, type: "input", question: "Según Hans Selye, ¿qué es el estrés?", answer: "Reacción física, mental y emocional ante circunstancias que perturban el equilibrio normal" },
                { classId: 11, type: "multiple-choice", question: "Un ejemplo de estresor ocupacional inherente al HECHO en sí mismo es:", options: ["Conflictos institucionales", "Muerte de niños", "Sobrecarga de responsabilidades", "Presencia de medios masivos"], answer: "Muerte de niños" },
                { classId: 11, type: "input", question: "¿Cómo se denomina la respuesta adaptativa y automática durante una intervención, donde aumenta la activación fisiológica y cognitiva?", answer: "Estrés Operativo" },
                { classId: 11, type: "multiple-choice", question: "La 'anestesia emocional' durante el estrés operativo está ligada a la concentración de:", options: ["Adrenalina", "Cortisol", "Endorfinas", "Serotonina"], answer: "Endorfinas" },
                { classId: 11, type: "input", question: "Nombra una de las reacciones específicas post-intervención.", answer: "Hiperexitación", tip: "También son válidas: Recuerdos Intrusivos, Evitación" },
                { classId: 11, type: "input", question: "¿Cuánto tiempo se estima que pueden durar las reacciones normales en primeros respondientes antes de recomendar consulta profesional?", answer: "Hasta 1 mes" },
                { classId: 11, type: "multiple-choice", question: "¿Cuál es uno de los objetivos principales del ejercicio de respiración consciente?", options: ["Aumentar la fuerza física", "Agudizar los sentidos temporalmente", "Calmar estados de agitación y recuperar el ritmo cardíaco", "Generar recuerdos intrusivos"], answer: "Calmar estados de agitación y recuperar el ritmo cardíaco" },
                { classId: 11, type: "input", question: "¿Cuántas horas de sueño se recomiendan en el plan de manejo del estrés?", answer: "8 horas" },
                { classId: 11, type: "input", question: "¿Qué es el Defusing?", answer: "Técnica psicológica de desmovilización y descompresión emocional" },
                { classId: 11, type: "multiple-choice", question: "¿Cuándo se realiza generalmente el Defusing?", options: ["Una semana después de la intervención", "Solo si hay síntomas graves", "Tan pronto sea posible o en las primeras 24 horas post-intervención", "Una vez al mes como rutina"], answer: "Tan pronto sea posible o en las primeras 24 horas post-intervención" },
                { classId: 11, type: "input", question: "Menciona una de las 5 C del trabajo en equipo.", answer: "Complementariedad", tip: "También: Coordinación, Comunicación, Confianza, Compromiso" },
                { classId: 11, type: "multiple-choice", question: "¿Qué rol de equipo se caracteriza por denunciar el acontecer grupal y hablar por todos?", options: ["Líder", "Chivo Emisario", "Portavoz", "Saboteador"], answer: "Portavoz" },
                { classId: 11, type: "input", question: "El rol del 'Referente' en un equipo sigue la lógica: CONOCER - ? - HACERSE CONOCIDO. Completa la palabra faltante.", answer: "COMPARTIR" },
                { classId: 11, type: "multiple-choice", question: "En la fase de adaptación al estrés, ¿qué sucede con la sensibilidad física?", options: ["Aumenta significativamente", "Disminuye", "No se ve afectada", "Se vuelve intermitente"], answer: "Disminuye" },
                { classId: 11, type: "input", question: "¿Cómo se llama la corriente psicológica que estudia la cognición o los procesos de adquisición de conocimiento?", answer: "Psicología cognitiva", tip: "O Cognitivismo" },
                { classId: 11, type: "multiple-choice", question: "El Defusing busca reconciliar lo emocional y lo:", options: ["Físico", "Espiritual", "Racional", "Social"], answer: "Racional" },
                { classId: 11, type: "input", question: "¿Qué tipo de visión caracteriza a un 'grupo' en contraposición a un 'equipo'?", answer: "Individualista" }
            ];

            // Variables globales del juego
            let currentPlayQuestions = []; 
            let currentQuestionIndex = 0;
            let score = 0;
            const MAX_QUESTIONS_PER_GAME = 10; // Máximo de preguntas por evaluación
            let currentSelectedClassId = modules[0].id; 

            // Claves para LocalStorage
            const THEME_KEY = 'bomberosAppTheme';
            const TOTAL_CORRECT_KEY = 'bomberosTotalCorrect';
            const COMPLETED_MODULES_KEY = 'bomberosCompletedModules';

            // Elementos del DOM
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
            const backToMenuButtonEl = document.getElementById('back-to-menu-button');
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
            const restartButtonEl = document.getElementById('restart-button');
            const scoreDisplayEl = document.getElementById('score');

            // Aplica el tema (claro/oscuro)
            function applyTheme(theme) {
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
            // Event listener para el cambio de tema
            themeSwitchEl.addEventListener('change', () => {
                const newTheme = themeSwitchEl.checked ? 'dark' : 'light';
                localStorage.setItem(THEME_KEY, newTheme);
                applyTheme(newTheme);
            });

            // Variables para estadísticas
            let totalCorrectAnswers = 0;
            let completedModules = new Set();

            // Carga estadísticas desde LocalStorage
            function loadStats() {
                totalCorrectAnswers = parseInt(localStorage.getItem(TOTAL_CORRECT_KEY)) || 0;
                const completedModulesArray = JSON.parse(localStorage.getItem(COMPLETED_MODULES_KEY)) || [];
                completedModules = new Set(completedModulesArray);
                updateStatsDisplay();
            }
            // Actualiza la visualización de estadísticas
            function updateStatsDisplay() {
                totalCorrectAnswersStatEl.textContent = totalCorrectAnswers;
                modulesCompletedStatEl.textContent = completedModules.size;
            }
            // Incrementa el contador de respuestas correctas totales
            function incrementTotalCorrect() {
                totalCorrectAnswers++;
                localStorage.setItem(TOTAL_CORRECT_KEY, totalCorrectAnswers);
                updateStatsDisplay();
            }
            // Marca un módulo como completado
            function markModuleCompleted(moduleId) {
                if (!completedModules.has(moduleId)) {
                    completedModules.add(moduleId);
                    localStorage.setItem(COMPLETED_MODULES_KEY, JSON.stringify(Array.from(completedModules)));
                    updateStatsDisplay();
                    populateModuleDropdown(); // Actualiza el dropdown para mostrar el checkmark
                }
            }

            // Rellena el dropdown de selección de módulos
            function populateModuleDropdown() {
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
                const defaultModule = modules.find(m => m.id === currentSelectedClassId) || modules[0];
                if (defaultModule) {
                    classSelectorButtonEl.firstChild.textContent = defaultModule.name.replace(' ✔️', '') + " ";
                }
            }

            // Actualiza la visualización de la información del módulo seleccionado
            function updateInfoDisplay(selectedClassId) {
                modules.forEach(module => {
                    const infoEl = document.getElementById(module.infoElementId);
                    if (infoEl) {
                        infoEl.style.display = (module.id === selectedClassId) ? 'block' : 'none';
                        infoEl.open = (module.id === selectedClassId); 
                    }
                });
                // Manejo específico para la info de la clase 99 y 11 si están seleccionadas
                ['info-clase-99', 'info-clase-11'].forEach(infoId => {
                    const specificInfoEl = document.getElementById(infoId);
                    const specificModule = modules.find(m => m.infoElementId === infoId);
                    if (specificInfoEl && specificModule) {
                         specificInfoEl.style.display = (selectedClassId === specificModule.id) ? 'block' : 'none';
                         specificInfoEl.open = (selectedClassId === specificModule.id);
                    }
                });
            }

            // Muestra la interfaz principal (selección de módulo, estadísticas, info)
            function showMainUI() {
                mainContainerEl.style.display = 'block';
                statsSectionEl.style.display = 'block';
                updateInfoDisplay(currentSelectedClassId);
                infoSectionContainerEl.style.display = 'block';
                startEvaluationButtonEl.style.display = 'inline-block';
                
                gameAreaEl.style.display = 'none';
                scoreAreaEl.style.display = 'none';
                resultsAreaEl.style.display = 'none';
            }

            // Event listener para el botón de ingresar a la app (después del splash)
            enterAppButtonEl.addEventListener('click', () => {
                splashScreenEl.style.display = 'none';
                loadStats(); 
                populateModuleDropdown(); 
                showMainUI();
            });
            
            // Event listeners para el dropdown de selección de módulos
            classSelectorButtonEl.addEventListener('click', (event) => {
                event.stopPropagation(); 
                classOptionsEl.style.display = classOptionsEl.style.display === 'none' ? 'block' : 'none';
            });
            document.addEventListener('click', (event) => { // Cierra el dropdown si se hace clic fuera
                if (!classSelectorButtonEl.contains(event.target) && !classOptionsEl.contains(event.target)) {
                    classOptionsEl.style.display = 'none';
                }
            });
            classOptionsEl.addEventListener('click', (event) => { // Maneja la selección de un módulo
                let targetLink = event.target;
                if (targetLink.tagName !== 'A') { 
                    targetLink = targetLink.closest('a');
                }
                if (targetLink && targetLink.tagName === 'A') {
                    event.preventDefault();
                    currentSelectedClassId = parseInt(targetLink.dataset.classid);
                    classSelectorButtonEl.firstChild.textContent = targetLink.dataset.classname.replace(' ✔️', '') + " "; 
                    classOptionsEl.style.display = 'none';
                    showMainUI(); 
                }
            });

            // Prepara e inicia las preguntas para la evaluación
            function prepareAndStartGameQuestions() {
                let questionsForSelectedClass = allQuestions.filter(q => q.classId === currentSelectedClassId);
                
                if (typeof shuffleArray === "function") { 
                    shuffleArray(questionsForSelectedClass); 
                }
                
                currentPlayQuestions = questionsForSelectedClass.slice(0, MAX_QUESTIONS_PER_GAME);

                currentQuestionIndex = 0;
                score = 0;
                scoreDisplayEl.textContent = score;
                
                if (currentPlayQuestions.length > 0) {
                    loadQuestion();
                } else { // Si no hay preguntas para el módulo
                    questionTextEl.textContent = "No hay preguntas disponibles para este módulo.";
                    questionNumberEl.textContent = "";
                    answerInputEl.style.display = 'none';
                    submitButtonEl.style.display = 'none';
                    multipleChoiceOptionsEl.style.display = 'none';
                }
            }
            
            // Event listener para el botón de comenzar evaluación
            startEvaluationButtonEl.addEventListener('click', () => {
                startEvaluationButtonEl.style.display = 'none';
                infoSectionContainerEl.style.display = 'none';
                statsSectionEl.style.display = 'none';
                
                gameAreaEl.style.display = 'block';
                scoreAreaEl.style.display = 'block';
                prepareAndStartGameQuestions();
            });
            // Event listener para el botón de volver al menú desde el juego
            backToMenuButtonEl.addEventListener('click', showMainUI);

            // Carga la pregunta actual en la interfaz del juego
            function loadQuestion() {
                if (currentQuestionIndex < currentPlayQuestions.length && currentPlayQuestions[currentQuestionIndex]) { 
                    const currentQuestion = currentPlayQuestions[currentQuestionIndex];
                    questionNumberEl.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentPlayQuestions.length}`;
                    questionTextEl.textContent = currentQuestion.question;
                    
                    // Resetea el área de feedback y botones
                    feedbackTextEl.textContent = ''; 
                    correctAnswerTextEl.textContent = '';
                    feedbackAreaEl.className = ''; 
                    nextButtonEl.style.display = 'none';
                    multipleChoiceOptionsEl.innerHTML = ''; // Limpiar opciones anteriores

                    // Determina el tipo de pregunta y configura la interfaz
                    if (currentQuestion.type === 'multiple-choice' && currentQuestion.options) {
                        answerInputEl.style.display = 'none';
                        submitButtonEl.style.display = 'none';
                        multipleChoiceOptionsEl.style.display = 'flex';

                        // Crea botones para cada opción de respuesta
                        currentQuestion.options.forEach(optionText => {
                            const optionButton = document.createElement('button');
                            optionButton.className = 'option-button';
                            optionButton.textContent = optionText;
                            optionButton.addEventListener('click', () => handleMultipleChoiceAnswer(optionButton, optionText, currentQuestion.answer));
                            multipleChoiceOptionsEl.appendChild(optionButton);
                        });

                    } else { // Pregunta de tipo input (o por defecto si no se especifica tipo)
                        answerInputEl.style.display = 'block';
                        submitButtonEl.style.display = 'inline-block';
                        multipleChoiceOptionsEl.style.display = 'none';
                        answerInputEl.value = '';
                        answerInputEl.disabled = false; 
                        answerInputEl.focus(); 
                    }
                } else { // Si no hay más preguntas, muestra los resultados
                    showResults(); 
                }
            }

            // Normaliza una respuesta (quita acentos, espacios, convierte a minúsculas, etc.)
            function normalizeAnswer(answer) {
                if (typeof answer !== 'string') return '';
                return answer.trim().toLowerCase()
                             .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
                             .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,""); 
            }
            
            // Maneja el envío de respuestas para preguntas de tipo input
            function handleSubmit() { 
                if (answerInputEl.disabled) return; 
                const userAnswer = answerInputEl.value;
                
                if (currentQuestionIndex >= currentPlayQuestions.length || !currentPlayQuestions[currentQuestionIndex]) {
                    return; 
                }
                const currentQuestion = currentPlayQuestions[currentQuestionIndex];
                const correctAnswer = currentQuestion.answer; 

                answerInputEl.disabled = true; 
                submitButtonEl.style.display = 'none'; 
                nextButtonEl.style.display = 'inline-block';

                const normUserAnswer = normalizeAnswer(userAnswer);
                const normCorrectAnswer = normalizeAnswer(correctAnswer);

                // Compara la respuesta normalizada del usuario con la correcta
                if (normUserAnswer && normUserAnswer === normCorrectAnswer) { 
                    score++;
                    incrementTotalCorrect(); 
                    feedbackTextEl.textContent = '¡Correcto!'; feedbackAreaEl.className = 'correct'; 
                } else {
                    feedbackTextEl.textContent = 'Incorrecto.'; feedbackAreaEl.className = 'incorrect'; 
                    correctAnswerTextEl.textContent = `La respuesta correcta es: ${correctAnswer}`;
                    if (currentQuestion.tip) { correctAnswerTextEl.textContent += ` (${currentQuestion.tip})`; }
                }
                scoreDisplayEl.textContent = score; 
            }

            // Maneja el envío de respuestas para preguntas de opción múltiple
            function handleMultipleChoiceAnswer(selectedButton, selectedOptionText, correctAnswerText) {
                const optionButtons = multipleChoiceOptionsEl.querySelectorAll('.option-button');
                optionButtons.forEach(btn => btn.disabled = true); // Deshabilita todos los botones de opción

                nextButtonEl.style.display = 'inline-block'; // Muestra el botón de siguiente

                // Compara la opción seleccionada con la respuesta correcta
                if (selectedOptionText === correctAnswerText) {
                    score++;
                    incrementTotalCorrect();
                    feedbackTextEl.textContent = '¡Correcto!';
                    feedbackAreaEl.className = 'correct';
                    selectedButton.classList.add('correct-option'); // Marca la opción seleccionada como correcta
                } else {
                    feedbackTextEl.textContent = 'Incorrecto.';
                    feedbackAreaEl.className = 'incorrect';
                    correctAnswerTextEl.textContent = `La respuesta correcta es: ${correctAnswerText}`;
                    selectedButton.classList.add('incorrect-option-selected'); // Marca la opción seleccionada como incorrecta
                    // Resalta la opción que era correcta
                    optionButtons.forEach(btn => {
                        if (btn.textContent === correctAnswerText) {
                            btn.classList.add('correct-option');
                        }
                    });
                }
                scoreDisplayEl.textContent = score;
            }

            // Event listener para el botón de enviar (preguntas input)
            submitButtonEl.addEventListener('click', handleSubmit);
            // Event listener para la tecla Enter en el campo de input
            answerInputEl.addEventListener('keypress', (event) => {
                if (event.key === 'Enter' && !answerInputEl.disabled) {
                    const currentQuestion = currentPlayQuestions[currentQuestionIndex];
                    // Asegura que handleSubmit solo se llame para preguntas tipo input
                    if (currentQuestion && (currentQuestion.type === 'input' || !currentQuestion.type)) {
                         handleSubmit();
                    }
                }
            });
            // Event listener para el botón de siguiente pregunta
            nextButtonEl.addEventListener('click', () => {
                currentQuestionIndex++; 
                loadQuestion();
            });

            // Muestra la pantalla de resultados finales
            function showResults() {
                gameAreaEl.style.display = 'none'; 
                scoreAreaEl.style.display = 'none'; 
                resultsAreaEl.style.display = 'block';
                finalScoreEl.textContent = score;
                totalQuestionsPlayedEl.textContent = currentPlayQuestions.length; 
                markModuleCompleted(currentSelectedClassId); 
            }
            // Event listener para el botón de reiniciar (volver al menú principal)
            restartButtonEl.addEventListener('click', showMainUI);
            
            // Carga el tema guardado o usa el tema claro por defecto
            const storedTheme = localStorage.getItem(THEME_KEY) || 'light';
            applyTheme(storedTheme);

            // Inicialización al cargar la página
            populateModuleDropdown();
            if (modules.length > 0) {
                 currentSelectedClassId = modules[0].id; 
                 const defaultModule = modules.find(m => m.id === currentSelectedClassId);
                 if (defaultModule) {
                    classSelectorButtonEl.firstChild.textContent = defaultModule.name.replace(' ✔️', '') + " ";
                 }
                 updateInfoDisplay(currentSelectedClassId);
            }
        });

        // Lista de frases motivadoras
const phrases = [
    "Servir es un honor, proteger es nuestra misión. ❤️",
    "La perseverancia es el camino hacia el éxito.",
    "Cada día es una nueva oportunidad para mejorar.",
    "Nunca subestimes el poder de tus sueños.",
    "El esfuerzo de hoy será la recompensa de mañana."
];

// Función para mostrar una frase aleatoria
function showRandomPhrase() {
    const phraseElement = document.getElementById("motivational-phrase");
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.textContent = phrases[randomIndex];
}

// Función para actualizar el reloj en tiempo real
function updateClock() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();
    const formattedTime = now.toLocaleString("es-AR", { 
        weekday: "long", year: "numeric", month: "long", day: "numeric",
        hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
    dateTimeElement.textContent = formattedTime;
}

// Ejecutar funciones al cargar la página
window.onload = function() {
    showRandomPhrase();
    updateClock();
    setInterval(updateClock, 1000); // Actualiza el reloj cada segundo
};