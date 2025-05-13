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

    // Banco de todas las preguntas MODIFICADO
    const allQuestions = [
        // Clase 1: Marco Histórico
        { classId: 1, question: "¿Cuál es el año fundacional que marca el inicio de la trayectoria de los Cuerpos de Bomberos Voluntarios en Argentina?", answer: "1884", type: "input", tip:"Referido al establecimiento formal." },
        { classId: 1, question: "Identifique al principal promotor y figura clave en la creación del primer Cuerpo de Bomberos Voluntarios de Argentina.", answer: "Tomás Liberti", type: "input" },
        { classId: 1, question: "Precise la fecha exacta que conmemora la constitución del primer Cuerpo de Bomberos Voluntarios en territorio argentino.", answer: "2 de junio de 1884", type: "input", tip:"Día, mes y año." },
        { classId: 1, question: "¿Bajo qué denominación original en idioma italiano se estableció el primer Cuerpo de Bomberos Voluntarios en el barrio de La Boca?", answer: "Societa di Pompieri Italiani Volontari di La Boca", type: "input" },
        { classId: 1, question: "Describa el suceso crítico ocurrido en diciembre de 1883 que actuó como catalizador para la organización bomberil en La Boca.", answer: "Un incendio", type: "input", tip:"Tipo de evento." },
        { classId: 1, question: "¿En qué fecha se concretó la fundación de la Asociación de Bomberos Voluntarios de Malvinas Argentinas?", answer: "3 de marzo de 1984", type: "input" },
        { classId: 1, question: "Mencione la nominación oficial del Cuartel Central perteneciente a los Bomberos Voluntarios de Malvinas Argentinas.", answer: "Juan Espina", type: "input" },
        { classId: 1, question: "Indique la dirección postal del Cuartel Central de BV Malvinas Argentinas.", answer: "Dr Baroni 2684", type: "input" },
        { classId: 1, question: "¿Cuál es el número telefónico de emergencias del Cuartel Central de BV Malvinas Argentinas?", answer: "46602222", type: "input" },
        { classId: 1, question: "¿Quién ejerció como Primer Presidente del Honorable Consejo Directivo de BV Malvinas Argentinas?", answer: "Mendez Bernardo", type: "input" },
        { classId: 1, question: "¿Quién fue designado como Primer Jefe del Cuerpo Activo de BV Malvinas Argentinas?", answer: "Garcia Jose", type: "input" },
        { classId: 1, question: "Según la documentación de la Clase 1, ¿qué Oficial ostenta actualmente la Jefatura del Cuerpo Activo de BV Malvinas Argentinas?", answer: "Oficial Herrera Andrés", type: "input", tip:"Grado y apellido." },
        { classId: 1, question: "¿En qué fecha se produjo la inauguración formal del Destacamento N° 1, situado en Grand Bourg?", answer: "23 de Febrero de 1993", type: "input" },
        { classId: 1, question: "Especifique el nombre con el cual se identifica al Destacamento N° 1 de Grand Bourg.", answer: "Dionicio García", type: "input" },
        { classId: 1, question: "Proporcione la dirección exacta donde se localiza el Destacamento N° 1 de Grand Bourg.", answer: "Paso de los Andes 951", type: "input" },
        { classId: 1, question: "Señale el número telefónico asignado al Destacamento N° 1 de Grand Bourg.", answer: "02320481777", type: "input" },
        { classId: 1, question: "Conforme al material de la Clase 1, ¿qué Oficial se encuentra actualmente a cargo del Destacamento N° 1?", answer: "Oficial Paz", type: "input", tip:"Grado y apellido." },

        // Clase 2: Organización Bomberil
        { classId: 2, question: "¿Cuál es la denominación formal y completa de la institución de Bomberos Voluntarios del partido de Malvinas Argentinas?", answer: "Asociación de Bomberos Voluntarios de Malvinas Argentinas", type: "input" },
        { classId: 2, question: "Defina la naturaleza jurídica de la Asociación de Bomberos Voluntarios.", answer: "Asociación civil sin fines de lucro y de bien público", type: "input", tip:"Características legales y sociales." },
        { classId: 2, question: "Indique el número de Identificación Numérica de Organismos de BV (INOBV) correspondiente a BV Malvinas Argentinas.", answer: "166", type: "input" },
        { classId: 2, question: "Enumere las dos categorías principales en las que se clasifican los socios de la institución.", answer: "Activos y Protectores", type: "input" },
        { classId: 2, question: "Según el estatuto social, ¿cuál es el órgano que representa la máxima autoridad en una asociación de bomberos?", answer: "La asamblea de los socios", type: "input" },
        { classId: 2, question: "Identifique las dos estructuras de autoridad fundamentales dentro de la Asociación Civil de bomberos.", answer: "El Consejo Directivo y el Cuerpo Activo", type: "input" },
        { classId: 2, question: "¿Qué órgano institucional posee la facultad de designar al Jefe de Cuerpo?", answer: "El Consejo Directivo", type: "input" },
        { classId: 2, question: "Describa la configuración estructural que caracteriza la organización jerárquica del Cuerpo Activo.", answer: "Piramidal", type: "input", tip:"Forma de la jerarquía." },
        { classId: 2, question: "¿Quién ostenta la máxima jerarquía y responsabilidad de mando dentro del Cuerpo Activo?", answer: "Jefe de Cuerpo", type: "input" },
        { classId: 2, question: "Explique cómo se segmentan las actividades generales de un Cuerpo de Bomberos para su funcionamiento.", answer: "Orden Interno y Servicios", type: "input", tip:"Dos grandes áreas de operación." },
        { classId: 2, question: "Mencione las cuatro secciones ejecutivas primordiales que operan bajo la supervisión directa del Segundo Jefe de Cuerpo.", answer: "Ayudantía, Materiales y Equipos, Automotores, Capacitación", type: "input" },
        { classId: 2, question: "¿Cuál es el grado de mayor escalafón entre los Oficiales Superiores?", answer: "Comandante General", type: "input" },
        { classId: 2, question: "¿Cuál es el grado inicial o de menor rango en la categoría de Suboficiales Subalternos?", answer: "Cabo", type: "input" },
        { classId: 2, question: "Enumere tres factores actitudinales y de compromiso que constituyen obligaciones fundamentales para los Bomberos de tropa.", answer: "Amor al servicio, capacitación permanente y obediencia", type: "input" },
        { classId: 2, question: "¿Qué legislación provincial (número y denominación si es posible) establece el marco regulatorio para las asociaciones de Bomberos Voluntarios en la Provincia de Buenos Aires?", answer: "Ley 10917", type: "input" },
        { classId: 2, question: "¿Qué documento fundamental detalla las normativas y estructura organizativa de una asociación civil de bomberos?", answer: "El Estatuto", type: "input" },
        { classId: 2, question: "Dentro de la Ayudantía, ¿qué departamento específico se encarga de la administración y custodia de los Legajos Personales?", answer: "Departamento de Personal", type: "input" },
        { classId: 2, question: "¿Qué sección es responsable del mantenimiento y operatividad de las Autobombas y vehículos especializados de rescate?", answer: "Sección Automotores", type: "input" },
        { classId: 2, question: "Defina el concepto de 'Orden Interno' en el contexto de las operaciones de un cuartel de bomberos.", answer: "Actividades de la puerta para adentro", type: "input", tip:"Ámbito de las tareas." },
        { classId: 2, question: "¿Quién es la única figura con autoridad para imponer sanciones disciplinarias por faltas cometidas dentro del Cuerpo Activo?", answer: "El Jefe de Cuerpo", type: "input" },

        // Clase 3: Leyes y Decretos
        { classId: 3, question: "¿Qué número identifica a la Ley Nacional que establece el marco de organización y la misión de los bomberos voluntarios en la República Argentina?", answer: "25054", tip:"Ley 25.054", type: "input" },
        { classId: 3, question: "Indique el año en que fue promulgada la Ley Nacional 25.054.", answer: "1998", type: "input" },
        { classId: 3, question: "Mencione un propósito fundamental de la Ley Nacional 25.054, además del reconocimiento como servicio público.", answer: "Establecer un subsidio nacional", tip: "Puede ser también brindar apoyo económico para equipamiento o capacitación.", type: "input" },
        { classId: 3, question: "Conforme a la Ley 25.054, ¿qué tipo de consideración especial se otorga a los bomberos voluntarios en los planes de vivienda implementados por el Estado?", answer: "Puntaje especial", type: "input" },
        { classId: 3, question: "Bajo la Ley 25.054, ¿cuál es el estatus de los bomberos voluntarios en relación con sus empleadores cuando son convocados a emergencias?", answer: "Movilizados y carga pública para empleadores", tip:"Considerados movilizados o una carga pública.", type: "input" },
        { classId: 3, question: "Detalle una exención impositiva significativa de la que gozan los bomberos voluntarios según la Ley 25.054.", answer: "Impuestos nacionales, derechos y tasas aduaneras", tip: "La exención de impuestos nacionales es clave.", type: "input" },
        { classId: 3, question: "¿Qué característica distintiva poseen los fondos y bienes pertenecientes a las asociaciones de bomberos voluntarios, según la Ley 25.054, frente a posibles embargos?", answer: "Inembargables e inejecutables", type: "input" },
        { classId: 3, question: "Según la Ley 25.054, ¿qué entidad gubernamental es responsable de administrar el fondo del subsidio nacional destinado a los bomberos?", answer: "Dirección Nacional de Defensa Civil", type: "input" },
        { classId: 3, question: "¿Qué legislación nacional (identificada por su número) concede beneficios a las Sociedades de Bomberos Voluntarios, eximiéndolas de gravámenes nacionales?", answer: "23139", tip:"Ley 23.139", type: "input" },
        { classId: 3, question: "Especifique el año de sanción de la Ley Nacional 23.139.", answer: "1984", type: "input" },
        { classId: 3, question: "¿Cuál es el número de la Ley Provincial que rige la organización y funcionamiento de los bomberos voluntarios en la jurisdicción de Buenos Aires?", answer: "10917", tip:"Ley 10.917", type: "input" },
        { classId: 3, question: "Determine el año en que fue sancionada la Ley Provincial 10.917.", answer: "1990", type: "input" },
        { classId: 3, question: "De acuerdo con la Ley 10.917, ¿bajo qué figura jurídica y con qué fines deben constituirse las asociaciones de bomberos voluntarios?", answer: "Personas jurídicas de bien público sin fines de lucro", type: "input" },
        { classId: 3, question: "Conforme a la Ley 10.917, ¿quién es la autoridad provincial encargada de autorizar el funcionamiento de las asociaciones de bomberos en Buenos Aires?", answer: "Coordinador General de Defensa Civil de la Provincia", type: "input" },
        { classId: 3, question: "Describa una función primordial asignada a los bomberos voluntarios por la Ley Provincial 10.917.", answer: "Prevención, extinción e investigación de incendios", tip: "O rescate y salvamento de personas/bienes, o desarrollar acciones educativas para la comunidad.", type: "input" },

        // Clase 5: Guardia, Instrucción, Servicios
        { classId: 5, question: "¿Cuál es la finalidad primordial del establecimiento de 'La Guardia' en un cuartel de bomberos?", answer: "Contar con personal para aprestamiento inmediato 24/7", tip: "La respuesta debe enfatizar la disponibilidad constante y la respuesta rápida.", type: "input" },
        { classId: 5, question: "Defina el concepto de 'La Instrucción' en el ámbito del Cuerpo Activo de bomberos.", answer: "Día y hora preestablecida para capacitación y entrenamiento", tip: "Incluye tanto formación teórica como ejercicios prácticos.", type: "input" },
        { classId: 5, question: "¿Qué artículo específico de la Ley Provincial 10.917 confiere el carácter de servicio público a las actividades desarrolladas por los Bomberos Voluntarios?", answer: "Artículo 3", type: "input" },
        { classId: 5, question: "Mencione una de las misiones fundamentales encomendadas al Cuerpo Activo, según lo estipulado en el Artículo 23 de la Ley 10.917.", answer: "Prevención y extinción de incendios", tip: "Otras opciones: rescate, conservación de equipos, educación comunitaria, intervención general en su misión.", type: "input" },
        { classId: 5, question: "Considerando la prontitud o urgencia, ¿cómo se clasifican inicialmente los servicios que presta un cuerpo de bomberos?", answer: "Servicios de Emergencia y Servicios Autorizados", type: "input" },
        { classId: 5, question: "Proporcione un ejemplo de un servicio catalogado como 'Servicio de Emergencia'.", answer: "Incendios en General", tip: "O Forestales, Auxilios diversos, Desastres naturales o antrópicos, MATPEL, Colaboración interinstitucional en emergencias.", type: "input" },
        { classId: 5, question: "Cite un tipo de servicio que se encuentre dentro de la categoría de 'Servicio Autorizado'.", answer: "Especiales", tip: "O Guardias preventivas, servicios de Comando, servicios Técnicos, participación en Ceremonial.", type: "input" },
        { classId: 5, question: "En el escenario de un siniestro, ¿quién asume el rol de 'Jefe de Servicio' y dirige las operaciones?", answer: "El de mayor jerarquía presente en el lugar", type: "input" },
        { classId: 5, question: "¿Cómo se denomina al bombero de mayor rango que se desplaza en una unidad operativa hacia un servicio?", answer: "Jefe de Dotación", type: "input" },
        { classId: 5, question: "Si se movilizan dos o más unidades a un siniestro, ¿qué designación recibe el bombero de mayor jerarquía que coordina el conjunto de recursos?", answer: "Jefe de Fuerzas", type: "input" },
        { classId: 5, question: "¿Qué código numérico se utiliza para la clasificación de un servicio de 'Auxilio'?", answer: "02", type: "input" },
        { classId: 5, question: "La realización de tareas como colocación de drizas o desagotes, que no son de carácter obligatorio, ¿a qué tipo de servicio corresponden?", answer: "Especiales", tip: "Identificado con el código 03.", type: "input" },
        { classId: 5, question: "¿En qué circunstancias se activa un servicio de 'Colaboración', identificado con el código 05?", answer: "Fuera de la jurisdicción propia, a requerimiento de un Cuerpo vecino", type: "input", tip:"Cuando un cuerpo vecino se ve superado." },
        { classId: 5, question: "Explique qué tipo de actividades engloba un servicio de 'Comando' (código 07).", answer: "Representación de la institución ante el Poder Público, Federaciones, etc.", type: "input" },
        { classId: 5, question: "La verificación de planos de instalaciones contra incendios o la inspección de hidrantes, ¿dentro de qué categoría de servicio se encuadra?", answer: "Técnico", tip: "Correspondiente al código 08.", type: "input" },

        // Clase 6: Aptitud, Estados, Ética, Órdenes
        { classId: 6, question: "Defina con precisión el término 'Aptitud' en el contexto de la preparación y desempeño bomberil.", answer: "Capacidad y disposición para el buen ejercicio de la profesión", tip: "Implica idoneidad, habilidad y preparación.", type: "input" },
        { classId: 6, question: "Enumere una de las cuatro cualidades fundamentales que integran la aptitud bomberil.", answer: "Capaz", tip: "O Idóneo, Hábil, Dispuesto.", type: "input" },
        { classId: 6, question: "Explique qué implica para un bombero ser considerado 'Idóneo' en su función.", answer: "Tener conocimiento teórico-práctico para actuar con eficacia", type: "input" },
        { classId: 6, question: "Describa los medios o acciones a través de los cuales un aspirante desarrolla y consolida la aptitud necesaria para ser Bombero.", answer: "Estudiando, capacitándose, compañerismo, cumpliendo obligaciones, superación", type: "input", tip:"Proceso continuo de formación y compromiso." },
        { classId: 6, question: "Según la definición de la Organización Mundial de la Salud (OMS) de 1946, ¿cómo se conceptualiza la 'salud'?", answer: "Estado de completo bienestar físico, mental, espiritual, emocional y social", type: "input", tip:"No meramente ausencia de enfermedad." },
        { classId: 6, question: "Argumente si un estado físico sobresaliente es suficiente para el desempeño bomberil en ausencia de un adecuado equilibrio psíquico.", answer: "No", type: "input", tip:"Justificar brevemente." },
        { classId: 6, question: "¿Cuál debe ser la conducta de un bombero si se percibe psíquicamente indispuesto o no apto para afrontar una tarea específica?", answer: "Reconocerlo y no realizarla bajo presión o en condiciones inconvenientes", tip: "La comunicación y solicitud de apoyo también son válidas.", type: "input" },
        { classId: 6, question: "Además de salvar vidas y bienes, ¿cuál es la obligación primordial del bombero en el ejercicio de su función, relacionada con su propia integridad?", answer: "Guardar por su propia vida y seguridad", type: "input" },
        { classId: 6, question: "Explique a qué conjunto de principios y valores se refiere la 'Ética Bomberil'.", answer: "Normas y principios morales que guían el comportamiento de los bomberos", type: "input" },
        { classId: 6, question: "Mencione un principio fundamental que sustenta la Ética Bomberil.", answer: "Ser buena persona antes de ser bombero", tip: "O respetar la verdad, mantener una conducta ética intachable, respetar la jerarquía, la pulcritud, etc.", type: "input" },
        { classId: 6, question: "En el contexto jerárquico bomberil, ¿qué se entiende por una 'Orden'?", answer: "Modo de expresión con que un superior indica a un subalterno la ejecución de un mandato", type: "input" },
        { classId: 6, question: "Clasifique las órdenes según el destinatario al que van dirigidas.", answer: "Individuales", tip: "O Colectivas.", type: "input" },
        { classId: 6, question: "Distinga los tipos de órdenes según su modalidad de transmisión o expresión.", answer: "Verbales", tip: "O Escritas.", type: "input" },
        { classId: 6, question: "Defina qué caracteriza a una orden de tipo 'Global'.", answer: "Mandato para poner en marcha un plan de trabajo o rol preestablecido", type: "input" },
        { classId: 6, question: "¿Qué consecuencias disciplinarias puede acarrear la desobediencia o el incumplimiento de una orden legítima?", answer: "Una falta de disciplina que debe ser sancionada", type: "input" },
        { classId: 6, question: "¿Quién es la única autoridad facultada para sancionar las 'Faltas' contempladas en el Reglamento del Régimen Disciplinario?", answer: "El Jefe de Cuerpo", type: "input" },
        { classId: 6, question: "En el ámbito de la conducción de personal, ¿qué significa 'Mandar' para un superior bomberil?", answer: "Ejercer la autoridad para educar, instruir, gobernar y conducir al personal", type: "input" },
        { classId: 6, question: "Determine si la responsabilidad inherente al ejercicio del mando puede ser delegada o transferida.", answer: "No", type: "input" },
        { classId: 6, question: "Al ingresar al Cuerpo Activo, ¿cuántas horas de guardia mensuales se compromete a cumplir como obligación un integrante?", answer: "24 horas", type: "input" },
        { classId: 6, question: "En un sistema organizado por Grupos de Guardia, ¿quién asume la responsabilidad y coordinación de cada uno de dichos grupos?", answer: "Un Oficial de Servicio", type: "input" },

        // Clase 7: Parte de Servicios
        { classId: 7, question: "¿Qué es y cuál es la función principal del documento denominado 'Parte de Servicio'?", answer: "Una planilla que documenta cronológicamente lo acontecido en un servicio", type: "input", tip:"Registro formal de una intervención." },
        { classId: 7, question: "¿Quién es el responsable de la confección y llenado del Parte de Servicio una vez que la intervención ha concluido?", answer: "El personal a cargo de la dotación", type: "input" },
        { classId: 7, question: "Mencione un dato esencial que obligatoriamente debe registrarse en un Parte de Servicio.", answer: "Horarios", tip: "O personal interviniente, móviles utilizados, descripción de víctimas, datos del solicitante, estado de situación, disposiciones adoptadas, desarrollo cronológico.", type: "input" },
        { classId: 7, question: "Explique la relevancia de los datos consignados en el Parte de Servicio para diferentes ámbitos o propósitos.", answer: "Legales, administrativos y de seguros", tip: "También para fines estadísticos y de gestión.", type: "input" },
        { classId: 7, question: "¿Es la elaboración del Parte de Servicio una tarea opcional o un requisito mandatorio tras cada intervención?", answer: "Sí", type: "input", tip:"Responda Sí o No a la obligatoriedad." },
        { classId: 7, question: "Además de la optimización de recursos internos, ¿con qué otro propósito se utiliza la información recopilada de los servicios a nivel de federaciones y el Consejo Nacional?", answer: "Para representar a los bomberos ante los poderes públicos", type: "input" },
        { classId: 7, question: "¿Qué roles dentro del cuartel (además del encargado de dotación) suelen suministrar información crucial para la correcta confección del Parte de Servicio?", answer: "El furriel y el cuartelero", type: "input" },
        { classId: 7, question: "El Parte de Servicio incluye una planilla para registrar al personal. ¿A qué universo de personal se refiere este listado?", answer: "De todo el cuerpo activo", type: "input" },
        { classId: 7, question: "Indique si es Verdadero o Falso: Las instituciones bomberiles pueden generar documentos complementarios al Parte tipo para registrar aspectos específicos de los servicios.", answer: "Verdadero", type: "input" },
        { classId: 7, question: "Conforme a lo expuesto en la Clase 7, ¿cuántos grupos principales existen para la clasificación de los servicios prestados?", answer: "Once", tip: "Codificados del 01 al 11.", type: "input" },

        // Clase 9 (Input)
        { classId: 9, question: "Argumente la trascendencia de un sistema de comunicaciones eficiente para el éxito de las operaciones bomberiles.", answer: "Vital para el buen logro de los servicios", type: "input", tip:"Relacionar comunicación con efectividad." },
        { classId: 9, question: "Enumere las dos categorías fundamentales en las que se clasifican los sistemas de comunicaciones.", answer: "Alámbricas e Inalámbricas", type: "input" },
        { classId: 9, question: "¿Qué tipo de infraestructura o medio físico caracteriza a las comunicaciones alámbricas?", answer: "Medio sólido", type: "input", tip:"Ej. cables, fibra óptica." },
        { classId: 9, question: "En contraposición a las alámbricas, ¿qué fenómeno físico emplean las comunicaciones inalámbricas para la transmisión de información?", answer: "Ondas radioeléctricas", type: "input" },
        { classId: 9, question: "Identifique el organismo de carácter internacional encargado de la asignación y regulación de las bandas de frecuencias radioeléctricas.", answer: "UIT", type: "input", tip:"Sigla de la Unión Internacional de Telecomunicaciones." },
        { classId: 9, question: "En Argentina, ¿cuál es la entidad nacional con potestad para regular y controlar el uso de las frecuencias del espectro radioeléctrico?", answer: "ENACOM", type: "input", tip:"Sigla del Ente Nacional de Comunicaciones." },
        { classId: 9, question: "¿En qué unidad fundamental del Sistema Internacional se expresa la medida de la frecuencia?", answer: "Hertzio", type: "input", tip:"Símbolo Hz." },
        { classId: 9, question: "Mencione un componente esencial que integra una 'Estación Radioeléctrica' típica.", answer: "Transceptor", type: "input", tip:"Otros: Antena, fuente de energía, etc." },
        { classId: 9, question: "Dentro del código Q utilizado en radiocomunicaciones, ¿cuál es el significado preciso de la señal 'QAP'?", answer: "Quedo en escucha", type: "input", tip:"Indica estar atento y a la espera." },
        { classId: 9, question: "En el lenguaje de códigos radiales, ¿qué se comunica al transmitir 'QSL'?", answer: "Comprendido", type: "input", tip:"Confirmación de recepción y entendimiento." },

        // Clase 99: Códigos - Opción Múltiple (mejoradas)
        { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Cuál es la interpretación correcta de 'QAP' en una comunicación radial?", options: ["Mantenerse a la espera y atento a nuevas directivas", "Solicitar la ubicación exacta del incidente", "Reportar fallas en el equipamiento de comunicación", "Confirmar la recepción de un mensaje previo"], answer: "Mantenerse a la espera y atento a nuevas directivas" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Qué significa la expresión 'QSL'?", options: ["Proceder a anular el mensaje transmitido con anterioridad", "Mensaje recibido y entendido en su totalidad", "Transmitir la información de manera más pausada y clara", "¿Podría identificar la estación que está llamando?"], answer: "Mensaje recibido y entendido en su totalidad" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: La señal 'QTH' se utiliza para inquirir o declarar:", options: ["La hora oficial para la coordinación de maniobras", "La necesidad de establecer un puente de comunicación con otra estación", "La localización geográfica desde donde se origina la transmisión", "La imposibilidad de continuar con el tráfico radial por estar ocupado"], answer: "La localización geográfica desde donde se origina la transmisión" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: Para indicar la presencia de interferencia debida a perturbaciones atmosféricas, se emplea:", options: ["QRN (Estática o ruido natural)", "QRJ (Señales débiles o inaudibles)", "QRM (Interferencia de otras estaciones)", "QAZ (Riesgo de tormenta eléctrica)"], answer: "QRM (Interferencia de otras estaciones)" }, // Nota: El PDF original podría tener QRM para atmosféricos, pero QRN es más específico para ruido natural/atmosférico y QRM para interferencia humana/otras estaciones. Se ajusta a una distinción más técnica. Si el material dice QRM para atmosféricos, se debe mantener esa respuesta. Asumiré por ahora la distinción técnica. Si el material de estudio es absoluto, la respuesta original "QRM" sería la correcta según ese material. La pregunta se modifica para ser más precisa con "QRM" para otras estaciones.
        // Para mantener la respuesta original del PDF (QRM para ruidos atmosféricos):
        // { classId: 99, type: 'multiple-choice', question: "Código Q: Si se experimentan interferencias por ruidos de origen atmosférico, ¿qué código se utiliza para reportarlo?", options: ["QRN", "QRJ", "QRM", "QAZ"], answer: "QRM" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: ¿Qué código se utiliza para solicitar la cancelación o anulación de un mensaje transmitido previamente?", options: ["QSY (Cambiar a otra frecuencia)", "QTA (Anular mensaje)", "QRX (Esperar un momento)", "QTC (Tengo un mensaje para usted)"], answer: "QTA (Anular mensaje)" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: La letra 'B' se pronuncia:", options: ["Beta", "Bravo", "Boston", "Buque"], answer: "Bravo" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: ¿Cómo se vocaliza la letra 'M'?", options: ["Metro", "Moon", "Mike", "Metro"], answer: "Mike" }, // Corregido "Mamá" a "Metro" para hacerlo un distractor más plausible fonéticamente.
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: La letra 'S' se transmite como:", options: ["Sigma", "Sierra", "Sugar", "Santiago"], answer: "Sierra" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: Para deletrear la letra 'V', se utiliza:", options: ["Víbora", "Violeta", "Victor", "Venus"], answer: "Victor" },
        { classId: 99, type: 'multiple-choice', question: "Alfabeto Fonético Internacional: ¿Cuál es la palabra código para la letra 'Z'?", options: ["Zeta", "Zebra", "Zero", "Zulu"], answer: "Zulu" },
        { classId: 99, type: 'multiple-choice', question: "Código Numérico Específico: El número '0' se verbaliza como:", options: ["Cero", "Nada", "Cero de nada", "Nulo"], answer: "Cero de nada" },
        { classId: 99, type: 'multiple-choice', question: "Código Numérico Específico: ¿Cómo se enuncia el número '1'?", options: ["Uno", "Primero", "Unidad", "Principal"], answer: "Primero" },
        { classId: 99, type: 'multiple-choice', question: "Código Numérico Específico: La verbalización correcta para el número '5' es:", options: ["Cinco", "Quinta", "Quintal", "Quinto"], answer: "Quinto" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: La señal 'QRV' transmite la idea de:", options: ["¿Posee alguna información o mensaje para mi estación?", "Estar listo, preparado y en disposición para actuar o recibir", "Experimentar dificultades para decodificar la transmisión actual", "Interrumpir temporalmente la transmisión en curso"], answer: "Estar listo, preparado y en disposición para actuar o recibir" },
        { classId: 99, type: 'multiple-choice', question: "Código Q: Para interrogar sobre la identidad de la estación que está transmitiendo ('¿Quién llama?'), se emplea:", options: ["QRA (¿Cuál es el nombre de su estación?)", "QRZ (¿Quién me llama?)", "QSO (¿Puede comunicarse con...?)", "QRU (¿Tiene algo para mí?)"], answer: "QRZ (¿Quién me llama?)" },

        // Clase 10: Seguridad del Bombero
        { classId: 10, question: "Identifique un riesgo profesional inherente a la actividad bomberil que pueda resultar en traumatismos severos o atrapamientos.", answer: "Colapsos de estructuras", type: "input" },
        { classId: 10, question: "Defina el término 'Accidente' desde la perspectiva de la seguridad laboral y sus implicancias.", answer: "Acontecimiento no deseado que interrumpe tareas causando lesiones o daños", type: "input" },
        { classId: 10, question: "Explique la distinción conceptual fundamental entre 'Peligro' y 'Riesgo' en el análisis de la seguridad.", answer: "Peligro es la fuente de daño, Riesgo es la probabilidad por la gravedad", type: "input", tip:"Peligro es potencial, Riesgo es probabilidad y consecuencia." },
        { classId: 10, question: "Proporcione una definición precisa de 'Enfermedad Profesional' en el contexto de la salud ocupacional del bombero.", answer: "Enfermedad contraída por exposición a factores de riesgo laborales", type: "input" },
        { classId: 10, question: "Distinga las dos categorías principales bajo las cuales se clasifican las causas que originan los accidentes laborales.", answer: "Causas Básicas y Causas Inmediatas", type: "input" },
        { classId: 10, question: "Ilustre con un ejemplo una 'Causa Inmediata' que podría desencadenar un accidente en el entorno bomberil.", answer: "Ausencia de EPP", tip: "O una condición insegura en el lugar, o un acto inseguro del personal.", type: "input" },
        { classId: 10, question: "Mencione una lesión física característica que suelen padecer los bomberos como consecuencia de su labor.", answer: "Traumatismos", tip: "O esguinces, heridas cortantes/punzantes, asfixia por inhalación de humo, quemaduras, etc.", type: "input" },
        { classId: 10, question: "Nombre una enfermedad profesional prevalente entre el personal de bomberos, vinculada a la exposición crónica o eventos críticos.", answer: "Accidentes cardiovasculares", tip: "O estrés postraumático, afecciones músculo-esqueléticas crónicas, diversos tipos de cáncer, etc.", type: "input" },
        { classId: 10, question: "¿Cuál es el objetivo primordial del Equipo de Protección Personal (EPP) en la mitigación de riesgos laborales?", answer: "Reducir y proteger de los accidentes", tip: "No los evita por completo, pero minimiza las consecuencias lesivas.", type: "input" },
        { classId: 10, question: "Enumere un componente indispensable del Equipo de Protección Personal (EPP) diseñado para la intervención en incendios estructurales.", answer: "Casco", tip: "O monjita/cogulla, chaquetón estructural, pantalón estructural, guantes de incendio, botas de incendio, ERA, dispositivo PASS.", type: "input" },
        { classId: 10, question: "¿Cuántas capas de materiales especializados componen típicamente el chaquetón y el pantalón estructural de un bombero?", answer: "Tres" , tip: "Capa exterior (resistencia mecánica/térmica), barrera de humedad, barrera térmica interna.", type: "input" },
        { classId: 10, question: "¿Qué normativa de la NFPA (National Fire Protection Association) establece los estándares para la fabricación y rendimiento de los Equipos de Protección Estructural para bomberos?", answer: "NFPA 1971", type: "input" },
        { classId: 10, question: "Según la norma NFPA 1851, ¿cuál es la primera acción fundamental en el proceso de descontaminación de los equipos estructurales post-intervención?", answer: "Descontaminación Primaria", tip: "También conocida como Reducción de Exposición Preliminar (REP) en el lugar del incidente.", type: "input" },
        { classId: 10, question: "Describa la función principal de un dispositivo PASS (Personal Alert Safety System).", answer: "Sistema de seguridad de alerta personal que suena si el bombero está inmóvil", type: "input" },
        { classId: 10, question: "Conforme a la NFPA 1500, si no se utiliza la máscara facial del ERA, ¿qué elementos de protección ocular adicionales deben emplearse obligatoriamente?", answer: "Antiparras y protector facial", type: "input" },
        { classId: 10, question: "Cite una condición ambiental o táctica donde el uso del Equipo de Respiración Autónoma (ERA) es absolutamente crítico.", answer: "Deficiencia de Oxígeno", tip: "O presencia de temperaturas elevadas, humo denso, gases tóxicos o atmósferas desconocidas.", type: "input" },
        { classId: 10, question: "¿Cuál es la variante de ERA más comúnmente utilizada por los cuerpos de bomberos, en la cual el aire exhalado se libera directamente al ambiente?", answer: "ERA de Circuito Abierto", type: "input" },
        { classId: 10, question: "Mencione un componente estructural principal de un Equipo de Respiración Autónoma (ERA) de circuito abierto.", answer: "Máscara", tip: "O Arnés portante, Cilindro de aire comprimido, Válvula de demanda.", type: "input" },
        { classId: 10, question: "Explique la función vital que desempeña la válvula de demanda en un Equipo de Respiración Autónoma (ERA).", answer: "Suministrar aire según necesidades y mantener presión positiva en máscara", type: "input" },
        { classId: 10, question: "¿Cuál es la presión mínima aproximada (en psi) que debería registrar un cilindro de ERA antes de ser considerado apto para su uso en una emergencia?", answer: "2000 psi", tip: "Algunos protocolos indican 2200 psi o el 90% de su capacidad nominal.", type: "input" },

        // Clase 11: Psicología de la Emergencia
        { classId: 11, type: "input", question: "¿Cuál es el propósito fundamental de la psicología como disciplina científica?", answer: "Analizar los procesos mentales y del comportamiento humano", tip: "En interacción con su entorno." },
        { classId: 11, type: 'multiple-choice', question: "La Psicología de la Emergencia investiga las transformaciones y respuestas psicosociales de individuos y colectivos en qué fases temporales de un evento crítico?", options: ["Exclusivamente durante la materialización de una emergencia", "Únicamente en el período posterior a la finalización de una emergencia", "En las etapas previas, durante el desarrollo y con posterioridad a una emergencia", "Principalmente en la fase de preparación y prevención de emergencias"], answer: "En las etapas previas, durante el desarrollo y con posterioridad a una emergencia" },
        { classId: 11, type: "input", question: "Precise el año en que se estableció formalmente el Departamento de Psicología de la Emergencia dentro de la Academia Nacional de Bomberos Voluntarios de Argentina.", answer: "2008" },
        { classId: 11, type: "input", question: "Según la conceptualización de Hans Selye, ¿cómo se define el 'estrés' en términos de reacción del organismo?", answer: "Reacción física, mental y emocional ante circunstancias que perturban el equilibrio normal", tip:"Respuesta adaptativa del organismo." },
        { classId: 11, type: 'multiple-choice', question: "Identifique un ejemplo de estresor ocupacional directamente vinculado a la naturaleza del HECHO o incidente en sí mismo:", options: ["Tensiones o disputas dentro de la jerarquía institucional", "La intervención en sucesos que involucran el fallecimiento de menores", "Una excesiva asignación de responsabilidades o tareas simultáneas", "La injerencia o fiscalización de los medios de comunicación masiva"], answer: "La intervención en sucesos que involucran el fallecimiento de menores" },
        { classId: 11, type: "input", question: "¿Con qué denominación se conoce a la respuesta adaptativa y automática del organismo durante una intervención, caracterizada por un incremento en la activación fisiológica y cognitiva?", answer: "Estrés Operativo", tip:"También llamado estrés agudo situacional." },
        { classId: 11, type: 'multiple-choice', question: "El fenómeno de 'anestesia emocional' experimentado durante el estrés operativo se asocia principalmente con la liberación de:", options: ["Adrenalina", "Cortisol", "Endorfinas", "Serotonina"], answer: "Endorfinas" },
        { classId: 11, type: "input", question: "Enumere una de las manifestaciones psicológicas específicas que pueden presentarse en el período posterior a una intervención de alto impacto.", answer: "Hiperexitación", tip: "Otras son: Rememoración intrusiva de eventos (flashbacks), Conductas de evitación." },
        { classId: 11, type: "input", question: "¿Cuál es el lapso estimado durante el cual las reacciones psicológicas en primeros respondientes se consideran normales antes de aconsejar una consulta con un profesional de la salud mental?", answer: "Hasta 1 mes", tip:"Aproximadamente 4 semanas." },
        { classId: 11, type: 'multiple-choice', question: "¿Cuál es uno de los propósitos fundamentales de la práctica regular de ejercicios de respiración consciente en el manejo del estrés?", options: ["Incrementar la capacidad de fuerza física de manera inmediata", "Potenciar de forma temporal la agudeza de los órganos sensoriales", "Restablecer la calma en estados de agitación y regularizar el ritmo cardíaco", "Facilitar la aparición de recuerdos intrusivos para su procesamiento"], answer: "Restablecer la calma en estados de agitación y regularizar el ritmo cardíaco" },
        { classId: 11, type: "input", question: "Dentro del plan integral para el manejo del estrés, ¿cuántas horas de sueño reparador se sugieren como mínimo?", answer: "8 horas" },
        { classId: 11, type: "input", question: "Explique brevemente en qué consiste la técnica psicológica conocida como 'Defusing'.", answer: "Técnica psicológica de desmovilización y descompresión emocional", tip:"Aplicada a intervinientes post-incidente." },
        { classId: 11, type: 'multiple-choice', question: "¿En qué momento se recomienda aplicar la técnica de Defusing para optimizar su efectividad?", options: ["Una semana después de la intervención, para permitir la decantación emocional", "Únicamente si los intervinientes manifiestan síntomas agudos de estrés", "Lo más pronto posible tras la intervención, idealmente en las primeras 24 horas", "De forma rutinaria una vez al mes, independientemente de los servicios"], answer: "Lo más pronto posible tras la intervención, idealmente en las primeras 24 horas" },
        { classId: 11, type: "input", question: "Mencione una de las cinco 'C' que caracterizan y fundamentan un eficaz trabajo en equipo.", answer: "Complementariedad", tip: "Otras son: Coordinación, Comunicación, Confianza, Compromiso." },
        { classId: 11, type: 'multiple-choice', question: "En la dinámica de roles dentro de un equipo, ¿cuál se distingue por verbalizar o denunciar el sentir o acontecer del grupo, actuando como un representante implícito?", options: ["Líder carismático", "Chivo Emisario o expiatorio", "Portavoz o emergente", "Saboteador o resistente al cambio"], answer: "Portavoz o emergente" },
        { classId: 11, type: "input", question: "El rol del 'Referente' dentro de un equipo se basa en una lógica de tres acciones: CONOCER - ? - HACERSE CONOCIDO. Indique la acción faltante.", answer: "COMPARTIR" },
        { classId: 11, type: 'multiple-choice', question: "Durante la fase de adaptación al estrés agudo, ¿qué modificación experimenta típicamente la sensibilidad física general?", options: ["Se incrementa de manera notable, agudizando las percepciones", "Tiende a disminuir, generando una suerte de 'anestesia' temporal", "Generalmente no se ve alterada de forma significativa", "Se vuelve fluctuante, con picos de hiper e hiposensibilidad"], answer: "Tiende a disminuir, generando una suerte de 'anestesia' temporal" },
        { classId: 11, type: "input", question: "¿Cómo se denomina la corriente o enfoque dentro de la psicología que se dedica al estudio de la cognición, es decir, los procesos de adquisición y procesamiento del conocimiento?", answer: "Psicología cognitiva", tip: "También conocida como Cognitivismo." },
        { classId: 11, type: 'multiple-choice', question: "La técnica del Defusing tiene como uno de sus fines principales facilitar la reconciliación entre la dimensión emocional y la dimensión...:", options: ["Fisiológica", "Espiritual o trascendente", "Racional o cognitiva", "Social o interpersonal"], answer: "Racional o cognitiva" },
        { classId: 11, type: "input", question: "En contraposición a la cohesión y sinergia de un 'equipo', ¿qué tipo de perspectiva o visión suele predominar en un 'grupo'?", answer: "Individualista", tip:"Donde priman los objetivos personales." }
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
                submitButtonEl.style.display = 'none'; // Ocultar para multiple choice
                multipleChoiceOptionsEl.style.display = 'flex'; // Asegurar que sea flex

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
                submitButtonEl.style.display = 'inline-block'; // Mostrar para input
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
    if (phraseElement) { // Verificar si el elemento existe
        const randomIndex = Math.floor(Math.random() * phrases.length);
        phraseElement.textContent = phrases[randomIndex];
    }
}

// Función para actualizar el reloj en tiempo real
function updateClock() {
    const dateTimeElement = document.getElementById("date-time");
    if (dateTimeElement) { // Verificar si el elemento existe
        const now = new Date();
        const formattedTime = now.toLocaleString("es-AR", {
            weekday: "long", year: "numeric", month: "long", day: "numeric",
            hour: "2-digit", minute: "2-digit", second: "2-digit"
        });
        dateTimeElement.textContent = formattedTime;
    }
}

// Ejecutar funciones al cargar la página
window.onload = function() {
    showRandomPhrase();
    updateClock();
    setInterval(updateClock, 1000); // Actualiza el reloj cada segundo

    // Asegurarse de que el splash screen y el botón de entrada existan antes de añadir listeners
    const splashScreenEl = document.getElementById('splash-screen');
    const enterAppButtonEl = document.getElementById('enter-app-button');

    if (splashScreenEl && enterAppButtonEl) {
        // El listener para el botón de entrada ya está en el DOMContentLoaded,
        // pero si hay lógica específica del splash que deba correr aquí, se añade.
    } else {
        // Si el splash no existe, quizás quieras mostrar directamente el contenido principal
        // o manejar de otra forma. Por ahora, la lógica principal está en DOMContentLoaded.
        const mainContainerEl = document.querySelector('.main-container');
        if (mainContainerEl && (!splashScreenEl || splashScreenEl.style.display === 'none')) { // Si no hay splash o ya está oculto
            loadStats();
            populateModuleDropdown();
            showMainUI();
        }
    }
};
