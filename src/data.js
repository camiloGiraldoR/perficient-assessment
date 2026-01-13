/**
 * Senior Developer Assessment Data
 * Contiene 16 temas, 109 preguntas con respuestas.
 */

export const questions = [
  {
    topic: "Java",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000001",
        type: "THEORY",
        question: "¿Cuál es el beneficio principal de las Sealed Classes?",
        options: ["Sustituye completamente a las clases abstractas en Java", "Restringir qué clases pueden extender una superclase", "Permite herencia múltiple entre clases y registros"],
        answer: 1,
        descripcion: "Las Sealed Classes en Java permiten restringir qué clases pueden heredar de una superclase, mejorando la seguridad y el control sobre la jerarquía de clases. Esto facilita el mantenimiento y la evolución del código, ya que el desarrollador puede definir explícitamente las subclases permitidas.",
        recomendacion: "Estudia la sintaxis y los casos de uso de las Sealed Classes en Java 17+ y revisa ejemplos prácticos de jerarquías selladas."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000003",
        type: "THEORY",
        question: "¿Para qué se introdujo el concepto de Scoped Values?",
        options: ["Permite herencia múltiple entre clases y registros", "Como alternativa ligera y segura a ThreadLocal", "Sustituye completamente a las clases abstractas en Java"],
        answer: 1,
        descripcion: "Scoped Values es una nueva API que ofrece una alternativa más segura y eficiente a ThreadLocal para compartir datos inmutables entre hilos, especialmente en entornos con virtual threads.",
        recomendacion: "Investiga la diferencia entre ThreadLocal y Scoped Values, y revisa ejemplos de uso en código concurrente moderno."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000004",
        type: "THEORY",
        question: "¿Qué nos permite el Pattern Matching para switch?",
        options: ["Permite herencia múltiple entre clases y registros", "Evaluar tipos y condiciones (guarded patterns) en las ramas del switch", "Sustituye completamente a las clases abstractas en Java"],
        answer: 1,
        descripcion: "El Pattern Matching for switch permite evaluar tipos y condiciones dentro de las ramas del switch, haciendo el código más expresivo y seguro al evitar castings manuales y errores de tipo.",
        recomendacion: "Estudia cómo funciona el pattern matching en switch y practica con ejemplos que incluyan guarded patterns y múltiples tipos."
      },
      {
        id: 'b1a7c2e0-1a11-4f56-9abc-000000000005',
        type: 'CHALLENGE',
        question: '¿Qué snippet define correctamente un Record y descompone sus componentes en un switch?',
        options: [
          `record Punto(int x, int y) {}
Object o = new Punto(3, 4);
switch (o) {
  case Punto(int x, int y) -> System.out.println(x + y);
  default -> {}
}`,
          `class Punto { int x; int y; }
Object o = new Punto();
switch (o) {
  case Punto p -> System.out.println(p.x + p.y); // sin record patterns
  default -> {}
}`
        ],
        answer: 0,
        descripcion: 'Los Records son portadores de datos inmutables y pueden descomponerse con Record Patterns en switch.',
        recomendacion: 'Usa Records para datos y apóyate en pattern matching para descomposición.'
      },
      {
        id: "250e39d6-8a7d-41f9-821a-b75698f2ff62",
        type: "THEORY",
        question: "¿Qué clase usarías para representar una fecha sin zona horaria?",
        options: ["java.util.Date", "java.time.LocalDate", "java.time.ZonedDateTime"],
        answer: 1,
        descripcion: "LocalDate representa una fecha sin hora ni zona horaria.",
        recomendacion: "Revisa la API java.time y diferencias entre LocalDate/LocalDateTime/ZonedDateTime."
      },
      {
        id: "73213ce0-d3e5-4388-8bab-32a4e691800f",
        type: "THEORY",
        question: "¿Cómo obtienes la diferencia en días entre dos LocalDate?",
        options: ["Period.between(a,b).getDays()", "Duration.between(a,b).toDays()", "ChronoUnit.DAYS.between(a,b)"],
        answer: 2,
        descripcion: "ChronoUnit.DAYS.between(a,b) calcula el número total de días.",
        recomendacion: "Practica con ChronoUnit y Period."
      },
      {
        id: "d9938cfe-1b8d-42df-a564-d74554d6299b",
        type: "THEORY",
        question: "¿Qué requiere una interfaz para usarse con una lambda?",
        options: ["Ser una interfaz funcional con un único método abstracto", "Extender Callable", "Anotarse con @Lambda"],
        answer: 0,
        descripcion: "Las lambdas requieren interfaces funcionales.",
        recomendacion: "Usa @FunctionalInterface para señalarlas."
      },
      {
        id: 'd4f5e2b3-3c4e-4f7a- ninth- 9c6e-2f4e5d6a7b8c',
        type: 'THEORY',
        question: '¿Cuál es la diferencia principal entre una excepción chequeada y una no chequeada en Java?',
        options: [
          'Las chequeadas deben declararse o manejarse explícitamente, las no chequeadas son opcionales',
          'Las no chequeadas no pueden heredarse, las chequeadas sí',
          'Las chequeadas nunca pueden lanzarse en tiempo de ejecución'
        ],
        answer: 0,
        descripcion: 'Las excepciones chequeadas (como IOException) deben declararse con throws o manejarse en un bloque try/catch, mientras que las no chequeadas (RuntimeException) no requieren declaración explícita.',
        recomendacion: 'Revisa la jerarquía de Exception en Java y cuándo usar cada tipo para un manejo adecuado de errores.'
      },
      {
        id: "801b6697-8b7e-439d-8ed5-844339476f4a",
        type: "THEORY",
        question: "¿Qué bloque se ejecuta siempre?",
        options: ["catch", "finally", "synchronized"],
        answer: 1,
        descripcion: "finally se ejecuta incluso si hay return o excepción.",
        recomendacion: "Practica try/finally y try-with-resources."
      },
      {
        id: "94fbb6a2-4323-49a1-a2a0-6fd2ae6877ea",
        type: "THEORY",
        question: "¿Qué principio en POO promueve exponer comportamiento y ocultar estado?",
        options: ["Encapsulamiento", "Herencia", "Polimorfismo"],
        answer: 0,
        descripcion: "El encapsulamiento oculta estado interno y expone operaciones controladas.",
        recomendacion: "Repasa encapsulación vs composición."
      },
      {
        id: "91ee9675-7a25-47ff-8a4d-cfb6aea76d19",
        type: "THEORY",
        question: "Para reutilización, ¿qué se recomienda?",
        options: ["Composición sobre herencia", "Herencia múltiple de clases", "Campos públicos compartidos"],
        answer: 0,
        descripcion: "La composición favorece bajo acoplamiento.",
        recomendacion: "Prefiere composición y patrones como Strategy."
      },
      {
        id: "84f8ac86-c1fe-48f0-9e7e-ce8d9c7c7593",
        type: "THEORY",
        question: "En QueryDSL, ¿qué es una clase QEntidad?",
        options: ["Metaclase generada para consultas type-safe", "Entidad gestionada en runtime", "Un DTO automático"],
        answer: 0,
        descripcion: "Q* son metamodelos generados para construir predicados.",
        recomendacion: "Configura APT y usa JPAQueryFactory."
      },
      {
        id: "58eb8147-e9bc-4ce9-929b-2468b4a7d453",
        type: "THEORY",
        question: "Ventaja de TypedQuery/Criteria frente a JPQL con strings?",
        options: ["Chequeo de tipos en compilación y refactors más seguros", "Mayor rendimiento garantizado", "Evitar transacciones"],
        answer: 0,
        descripcion: "Las APIs tipadas aportan seguridad y mejor soporte a refactors.",
        recomendacion: "Compara JPQL, Criteria, QueryDSL."
      },
      {
        id: "cc422feb-abc8-43df-8dec-66ea76b25019",
        type: "THEORY",
        question: "Riesgo común de LAZY al serializar entidades?",
        options: ["LazyInitializationException y cargas N+1 fuera del contexto", "Bloqueo pesimista por defecto", "Pérdida de caché de segundo nivel"],
        answer: 0,
        descripcion: "Acceso LAZY fuera del contexto provoca excepciones y N+1.",
        recomendacion: "Usa fetch join y DTOs."
      },
      {
        id: "5c1cc32d-d7fd-4b15-aa72-ef59e830229e",
        type: "THEORY",
        question: "¿Cuándo usar EAGER?",
        options: ["Cuando el dato se usa casi siempre con la entidad", "Siempre en colecciones grandes", "Para evitar transacciones"],
        answer: 0,
        descripcion: "EAGER es razonable cuando el dato es necesario casi siempre.",
        recomendacion: "Evalúa carga y rendimiento."
      },
    ]
  },
  {
    topic: "hilos y concurrencia moderna en java",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000006",
        type: "THEORY",
        question: "¿Cómo se crea un Virtual Thread de forma directa?",
        options: ["Completa operaciones de I/O de forma no bloqueante por defecto sin librerías", "Thread.ofVirtual().start(runnable)", "Structured Concurrency evita la necesidad de manejar excepciones"],
        answer: 1,
        descripcion: "Un Virtual Thread se crea directamente usando Thread.ofVirtual().start(runnable), lo que permite lanzar hilos ligeros gestionados por la JVM, ideales para tareas concurrentes y escalables.",
        recomendacion: "Estudia la API de Virtual Threads en Java 19+ y revisa ejemplos de creación y uso en aplicaciones concurrentes."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000007",
        type: "THEORY",
        question: "¿Qué ocurre cuando un Virtual Thread realiza una operación de I/O bloqueante?",
        options: ["Los virtual threads ejecutan siempre en un único núcleo físico", "La JVM suspende el hilo virtual y libera el hilo de plataforma (carrier)", "Completa operaciones de I/O de forma no bloqueante por defecto sin librerías"],
        answer: 1,
        descripcion: "Cuando un Virtual Thread realiza una operación de I/O bloqueante, la JVM lo suspende y libera el hilo de plataforma (carrier), permitiendo que otros hilos virtuales usen ese recurso.",
        recomendacion: "Revisa cómo la JVM gestiona los Virtual Threads y el impacto de operaciones bloqueantes en la concurrencia moderna."
      },
      /*{
        id: "b1a7c2e0-1a11-4f56-9abc-000000000008",
        type: "THEORY",
        question: "¿Cuál es el objetivo de la Structured Concurrency?",
        options: ["Los virtual threads ejecutan siempre en un único núcleo físico", "Tratar múltiples tareas en distintos hilos como una sola unidad de trabajo", "Completa operaciones de I/O de forma no bloqueante por defecto sin librerías"],
        answer: 1,
        descripcion: "Structured Concurrency busca tratar múltiples tareas concurrentes como una sola unidad de trabajo, facilitando la gestión de errores y la cancelación de tareas hijas.",
        recomendacion: "Investiga el concepto de Structured Concurrency y cómo mejora la legibilidad y robustez del código concurrente."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000009",
        type: "THEORY",
        question: "¿Qué clase se usa para orquestar Structured Concurrency?",
        options: ["Los virtual threads ejecutan siempre en un único núcleo físico", "StructuredTaskScope", "Completa operaciones de I/O de forma no bloqueante por defecto sin librerías"],
        answer: 1,
        descripcion: "StructuredTaskScope es la clase principal para orquestar Structured Concurrency en Java, permitiendo gestionar y supervisar grupos de tareas concurrentes de forma estructurada.",
        recomendacion: "Revisa la documentación y ejemplos de StructuredTaskScope para entender su uso en la gestión de tareas concurrentes."
      },
      /*{
        id: "b1a7c2e0-1a11-4f56-9abc-000000000010",
        type: "THEORY",
        question: "¿Cuál es la principal ventaja de rendimiento de los Virtual Threads?",
        options: ["Completa operaciones de I/O de forma no bloqueante por defecto sin librerías", "Permiten manejar masivamente tareas que esperan por I/O con poca memoria", "Los virtual threads ejecutan siempre en un único núcleo físico"],
        answer: 1,
        descripcion: "La principal ventaja de los Virtual Threads es que permiten manejar una gran cantidad de tareas que esperan por I/O usando muy poca memoria, facilitando la escalabilidad.",
        recomendacion: "Estudia casos de uso donde los Virtual Threads mejoran la escalabilidad y el consumo de recursos en aplicaciones Java."
      },*/
    ]
  },
  {
    topic: "sincrono vs asincrono",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000011",
        type: "THEORY",
        question: "¿Cuál es la principal desventaja del modelo síncrono en sistemas de alta carga?",
        options: ["Las APIs non-blocking nunca devuelven errores al cliente", "Cada solicitud ocupa un hilo, agotando recursos rápidamente por espera de I/O", "CompletableFuture garantiza orden estricto de ejecución entre tareas encadenadas"],
        answer: 1,
        descripcion: "En el modelo síncrono, cada solicitud ocupa un hilo hasta que termina, lo que puede agotar rápidamente los recursos del sistema cuando hay muchas operaciones de I/O bloqueante.",
        recomendacion: "Estudia la diferencia entre modelos síncronos y asíncronos, y cómo el manejo de hilos afecta la escalabilidad."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000012",
        type: "THEORY",
        question: "En Java, ¿qué interfaz representa un resultado asíncrono que puede completarse manualmente?",
        options: ["El modelo asíncrono reduce el consumo de CPU en tareas intensivas de cálculo por sí mismo", "CompletableFuture", "VirtualPoolFutureExecution"],
        answer: 1,
        descripcion: "CompletableFuture es una interfaz en Java que permite representar y completar manualmente resultados asíncronos, facilitando la composición de tareas y el manejo de callbacks.",
        recomendacion: "Revisa la API de CompletableFuture y practica su uso para componer tareas asíncronas en Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000013",
        type: "THEORY",
        question: "¿Qué significa que una API sea 'Non-blocking'?",
        options: ["Las APIs non-blocking nunca devuelven errores al cliente", "Que devuelve el control al hilo llamador antes de terminar la tarea", "CompletableFuture garantiza orden estricto de ejecución entre tareas encadenadas"],
        answer: 1,
        descripcion: "Una API 'Non-blocking' devuelve el control al hilo llamador inmediatamente, permitiendo que otras tareas se ejecuten mientras la operación se completa en segundo plano.",
        recomendacion: "Investiga el concepto de non-blocking I/O y cómo se implementa en frameworks modernos de Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000014",
        type: "THEORY",
        question: "¿Para qué sirve el método .thenCompose() en un CompletableFuture?",
        options: ["El modelo asíncrono reduce el consumo de CPU en tareas intensivas de cálculo por sí mismo", "Para encadenar dos futuros donde el segundo depende del resultado del primero", "Las APIs non-blocking nunca devuelven errores al cliente"],
        answer: 1,
        descripcion: "El método .thenCompose() permite encadenar dos CompletableFuture donde el segundo depende del resultado del primero, facilitando flujos asíncronos dependientes.",
        recomendacion: "Practica el uso de thenCompose y la composición de flujos asíncronos en Java."
      },
      /* {
         id: "b1a7c2e0-1a11-4f56-9abc-000000000015",
         type: "THEORY",
         question: "¿Qué es el 'Context Switching' y por qué afecta más al modelo síncrono?",
         options: ["Las APIs non-blocking nunca devuelven errores al cliente", "Es el costo del SO al alternar entre hilos pesados; el modelo asíncrono/virtual lo minimiza", "CompletableFuture garantiza orden estricto de ejecución entre tareas encadenadas"],
         answer: 1,
         descripcion: "El 'Context Switching' es el costo que incurre el sistema operativo al alternar entre hilos pesados, lo que afecta el rendimiento en modelos síncronos. Los modelos asíncronos o con virtual threads minimizan este costo.",
         recomendacion: "Estudia cómo funciona el context switching y por qué los modelos asíncronos y virtual threads son más eficientes en escenarios de alta concurrencia."
       },*/
    ]
  },
  {
    topic: "spring framework (boot, cloud, data)",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000016",
        type: "THEORY",
        question: "¿Cuál es la ventaja de la inyección de dependencias por constructor sobre la de campo (@Autowired)?",
        options: ["Spring Cloud Gateway almacena configuración de aplicaciones de forma centralizada", "Permite inmutabilidad y facilita pruebas unitarias", "Hibernate solo sincroniza cambios si se invoca flush en cada operación"],
        answer: 1,
        descripcion: "La inyección por constructor permite que los objetos sean inmutables y facilita la escritura de pruebas unitarias, ya que las dependencias se definen explícitamente en el constructor.",
        recomendacion: "Revisa ejemplos de inyección por constructor en Spring y compara con la inyección por campo para entender sus ventajas."
      },

      {
        id: 'b1a7c2e0-1a11-4f56-9abc-00000000A017',
        type: 'THEORY',
        question: 'Un banco necesita procesar más de 3 millones de archivos a cierta hora, gestionar su contenido y guardarlo en una base de datos. ¿Qué módulo de Spring recomendarías?',
        options: [
          'Spring Cloud',
          'Spring Batch',
          'Spring Integration'
        ],
        answer: 1,
        descripcion: 'Spring Batch está diseñado para procesamiento masivo de datos en lotes, con soporte para transacciones, reintentos, particionamiento y programación, ideal para tareas como procesar millones de archivos y persistir datos.',
        recomendacion: 'Revisa la arquitectura de Spring Batch, sus componentes (Job, Step, ItemReader, ItemProcessor, ItemWriter) y cómo integrarlo con bases de datos y planificadores.'
      },

      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000017",
        type: "THEORY",
        question: "¿Qué anotación de Spring Boot se usa para cargar propiedades externas en un objeto POJO?",
        options: ["La inyección por campo es requerida para crear beans singleton", "@ConfigurationProperties", "Hibernate solo sincroniza cambios si se invoca flush en cada operación"],
        answer: 1,
        descripcion: "@ConfigurationProperties permite mapear propiedades externas a un POJO, facilitando la configuración y el mantenimiento de aplicaciones Spring Boot.",
        recomendacion: "Estudia el uso de @ConfigurationProperties y cómo se configura en Spring Boot para cargar propiedades externas."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000018",
        type: "THEORY",
        question: "¿En Spring Cloud, qué componente se encarga de la configuración centralizada?",
        options: ["Spring Cloud Gateway almacena configuración de aplicaciones de forma centralizada", "Spring Cloud Config", "La inyección por campo es requerida para crear beans singleton"],
        answer: 1,
        descripcion: "Spring Cloud Config es el componente encargado de la configuración centralizada, permitiendo gestionar propiedades de múltiples servicios desde un solo lugar.",
        recomendacion: "Revisa la arquitectura de Spring Cloud Config y cómo se integra con microservicios."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000019",
        type: "THEORY",
        question: "¿Para qué sirve el patrón Circuit Breaker (Resilience4j) en microservicios?",
        options: ["La inyección por campo es requerida para crear beans singleton", "Para evitar fallos en cascada cuando un servicio no responde", "Spring Cloud Gateway almacena configuración de aplicaciones de forma centralizada"],
        answer: 1,
        descripcion: "El patrón Circuit Breaker evita fallos en cascada en sistemas distribuidos, bloqueando llamadas a servicios que no responden y permitiendo la recuperación automática.",
        recomendacion: "Estudia el patrón Circuit Breaker y su implementación con Resilience4j en microservicios Spring."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000020",
        type: "THEORY",
        question: "¿Qué hace Hibernate en background con las entidades modificadas en una transacción?",
        options: ["Dirty Checking: detecta cambios y sincroniza al hacer commit", "La inyección por campo es requerida para crear beans singleton", "Spring Cloud Gateway almacena configuración de aplicaciones de forma centralizada"],
        answer: 0,
        descripcion: "Hibernate utiliza el mecanismo de Dirty Checking para detectar cambios en las entidades y sincronizarlos automáticamente con la base de datos al hacer commit.",
        recomendacion: "Investiga cómo funciona el Dirty Checking en Hibernate y cómo optimiza la persistencia de datos."
      },
      {
        id: "f363e152-37e7-4092-ab58-4ebe27b5db49",
        type: "THEORY",
        question: "¿Qué hace @Component en Spring?",
        options: ["Marca una clase como candidata a escaneo y registro en el contenedor", "Obliga a la clase a ser singleton final", "Expone automáticamente un endpoint HTTP"],
        answer: 0,
        descripcion: "@Component indica que Spring debe detectar y registrar el bean.",
        recomendacion: "Revisa estereotipos y component scan."
      },
      {
        id: "ccf8b331-24a2-4190-854e-077aae61e34a",
        type: "THEORY",
        question: "¿Cuándo usarías @Service en lugar de @Component?",
        options: ["Para semántica de capa de negocio y claridad arquitectónica", "Para habilitar transacciones por defecto", "Para crear repositorios CRUD"],
        answer: 0,
        descripcion: "@Service es un estereotipo semántico de negocio; funcionalmente es @Component.",
        recomendacion: "Usa estereotipos para comunicar intención."
      },
      {
        id: "c398fe8b-8d4c-4904-88dd-50f1db625d94",
        type: "THEORY",
        question: "¿Qué aporta @Repository además de ser un componente?",
        options: ["Traducción de excepciones a DataAccessException", "Generación automática de SQL", "Habilita cacheo por anotación"],
        answer: 0,
        descripcion: "@Repository traduce excepciones del proveedor a una jerarquía unificada.",
        recomendacion: "Revisa @Repository y DataAccessException."
      },
    ]
  },
  {
    topic: "SSO y como podriamos implementarlo con java",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000021",
        type: "THEORY",
        question: "¿Qué protocolo es el estándar para Autenticación (identidad) sobre OAuth2?",
        options: ["El Authorization Code es un token JWT utilizable directamente por el recurso", "OpenID Connect (OIDC)", "Keycloak actúa únicamente como servidor de recursos, no como IdP"],
        answer: 1,
        descripcion: "OpenID Connect (OIDC) es el protocolo estándar para autenticación sobre OAuth2, permitiendo la verificación de identidad y el intercambio seguro de información entre aplicaciones.",
        recomendacion: "Estudia la diferencia entre OAuth2 y OIDC, y revisa ejemplos de implementación de SSO con OIDC en Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000022",
        type: "THEORY",
        question: "En un flujo de OAuth2, ¿cuál es la función del 'Authorization Code'?",
        options: ["OIDC funciona sin OAuth2 y no necesita tokens", "Intercambiarse por un Access Token en un canal seguro", "El Authorization Code es un token JWT utilizable directamente por el recurso"],
        answer: 1,
        descripcion: "El 'Authorization Code' se intercambia por un Access Token en un canal seguro, evitando la exposición directa de credenciales y mejorando la seguridad del flujo de autenticación.",
        recomendacion: "Revisa el flujo Authorization Code en OAuth2 y cómo se implementa en aplicaciones Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000023",
        type: "THEORY",
        question: "¿Qué herramienta es comúnmente usada como Identity Provider (IdP) Open Source con Java?",
        options: ["Keycloak actúa únicamente como servidor de recursos, no como IdP", "Keycloak", "OIDC funciona sin OAuth2 y no necesita tokens"],
        answer: 1,
        descripcion: "Keycloak es una herramienta open source ampliamente utilizada como Identity Provider (IdP) en entornos Java, ofreciendo autenticación, autorización y gestión de usuarios.",
        recomendacion: "Investiga la arquitectura y configuración básica de Keycloak como IdP en proyectos Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000024",
        type: "THEORY",
        question: "¿Qué contiene la sección 'Payload' de un JWT?",
        options: ["El Authorization Code es un token JWT utilizable directamente por el recurso", "Claims o afirmaciones sobre el usuario y metadatos", "OIDC funciona sin OAuth2 y no necesita tokens"],
        answer: 1,
        descripcion: "La sección 'Payload' de un JWT contiene los claims, que son afirmaciones sobre el usuario y metadatos relevantes para la autenticación y autorización.",
        recomendacion: "Estudia la estructura de los JWT y el significado de sus secciones: header, payload y signature."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000025",
        type: "THEORY",
        question: "¿Por qué se recomienda usar PKCE en implementaciones de SSO modernas?",
        options: ["Keycloak actúa únicamente como servidor de recursos, no como IdP", "Para mitigar ataques de interceptación del código de autorización", "El Authorization Code es un token JWT utilizable directamente por el recurso"],
        answer: 1,
        descripcion: "PKCE (Proof Key for Code Exchange) mitiga ataques de interceptación del código de autorización en flujos OAuth2, añadiendo una capa extra de seguridad especialmente en aplicaciones públicas.",
        recomendacion: "Revisa cómo funciona PKCE y cómo se implementa en flujos OAuth2 y OIDC modernos."
      },
    ]
  },
  {
    topic: "cloud computing & modelos",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000026",
        type: "THEORY",
        question: "¿Qué modelo de servicio ofrece al usuario control sobre el SO y la infraestructura virtual?",
        options: ["Una Región es un único data center ubicado en una ciudad específica", "Serverless requiere instancias siempre encendidas para evitar latencia fría", "IaaS"],
        answer: 2,
        descripcion: "IaaS (Infrastructure as a Service) permite al usuario controlar el sistema operativo y la infraestructura virtual, brindando flexibilidad y control total sobre los recursos.",
        recomendacion: "Estudia los modelos de servicio en la nube (IaaS, PaaS, SaaS) y sus diferencias clave."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000027",
        type: "THEORY",
        question: "¿Cuál es una característica fundamental de 'Serverless' (FaaS)?",
        options: ["Una Región es un único data center ubicado en una ciudad específica", "Escalado automático y pago por uso exacto", "PaaS ofrece acceso root al sistema operativo del contenedor"],
        answer: 1,
        descripcion: "Serverless (FaaS) se caracteriza por el escalado automático y el pago exacto por uso, eliminando la necesidad de gestionar servidores manualmente.",
        recomendacion: "Revisa cómo funciona el modelo serverless y sus ventajas en términos de costos y escalabilidad."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000028",
        type: "THEORY",
        question: "¿Qué significa 'Alta Disponibilidad' (High Availability)?",
        options: ["Una Región es un único data center ubicado en una ciudad específica", "Que el sistema está operativo la mayor parte del tiempo contratado", "PaaS ofrece acceso root al sistema operativo del contenedor"],
        answer: 1,
        descripcion: "Alta Disponibilidad significa que el sistema está operativo la mayor parte del tiempo acordado, minimizando el tiempo de inactividad.",
        recomendacion: "Investiga estrategias para lograr alta disponibilidad en arquitecturas cloud."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000029",
        type: "THEORY",
        question: "En AWS/Azure, ¿qué es una 'Región'?",
        options: ["PaaS ofrece acceso root al sistema operativo del contenedor", "Un área geográfica que contiene múltiples zonas de disponibilidad", "Una Región es un único data center ubicado en una ciudad específica"],
        answer: 1,
        descripcion: "Una 'Región' en AWS/Azure es un área geográfica que contiene múltiples zonas de disponibilidad, permitiendo redundancia y tolerancia a fallos.",
        recomendacion: "Revisa la organización de regiones y zonas de disponibilidad en los principales proveedores cloud."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000030",
        type: "THEORY",
        question: "¿Qué es el 'Vendor Lock-in'?",
        options: ["Serverless requiere instancias siempre encendidas para evitar latencia fría", "La dependencia excesiva de los servicios de un solo proveedor", "PaaS ofrece acceso root al sistema operativo del contenedor"],
        answer: 1,
        descripcion: "El 'Vendor Lock-in' es la dependencia excesiva de los servicios de un solo proveedor cloud, dificultando la migración a otras plataformas.",
        recomendacion: "Estudia estrategias para evitar el vendor lock-in y promover la portabilidad en la nube."
      },
      {
        id: "97472840-bfbf-4bec-8b40-aab8950d1dc8",
        type: "THEORY",
        question: "¿Qué aísla principalmente un contenedor?",
        options: ["Procesos y filesystem mediante namespaces y cgroups", "Una VM completa con hipervisor propio", "Solo la red, no el FS"],
        answer: 0,
        descripcion: "Contenedores aíslan procesos/recursos usando namespaces/cgroups.",
        recomendacion: "Compara contenedores vs VMs."
      },
      {
        id: "736ec340-4c04-4a8b-bae4-e8638d81be7a",
        type: "THEORY",
        question: "¿Qué caracteriza a un servicio Lambda en la nube (FaaS)?",
        options: ["Ejecución bajo demanda con escalado automático por evento", "Servidores dedicados con asignación fija", "Procesamiento batch exclusivamente nocturno"],
        answer: 0,
        descripcion: "FaaS ejecuta funciones por evento y escala automáticamente.",
        recomendacion: "Compara FaaS vs PaaS/containers."
      },
      {
        id: "a65d3f95-b94d-4184-b375-19361ecb9ef1",
        type: "THEORY",
        question: "Para escalar lecturas de BD en la nube, ¿qué táctica es común?",
        options: ["Réplicas de solo lectura con balanceo", "Desactivar índices para acelerar inserts", "Evitar cachés por consistencia"],
        answer: 0,
        descripcion: "Las réplicas distribuyen la carga de consultas.",
        recomendacion: "Revisa replicación, particionado y cachés."
      },
      {
        id: "f9dad161-f28b-4a15-89e1-3465a33321c4",
        type: "THEORY",
        question: "Práctica clave de monitoreo en la nube:",
        options: ["Recolectar métricas, logs y trazas con alertas basadas en SLOs", "Revisar logs solo tras incidentes", "Usar printf en producción"],
        answer: 0,
        descripcion: "Observabilidad integra métricas, logs y trazas con umbrales/SLOs.",
        recomendacion: "Guías de observabilidad y herramientas."
      },
    ]
  },
  {
    topic: "programación funcional con java",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-0000000CHALLENGE",
        type: "CHALLENGE",
        question: "¿Cuál de las siguientes opciones representa la estructura inicial de una interfaz funcional en Java?",
        options: [
          `@FunctionalInterface
public interface Operacion {
    int operar(int a, int b);
}`,
          `@FunctionalInterface
public interface Operacion {
    int operar(int a, int b);
    int otroMetodo();
}`
        ],
        answer: 0,
        descripcion: "La opción 1 es correcta porque una interfaz funcional debe tener exactamente un método abstracto. La opción 2 no es válida como interfaz funcional porque define dos métodos abstractos.",
        recomendacion: "Repasa la definición de interfaces funcionales en Java y su uso con expresiones lambda."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000031",
        type: "THEORY",
        question: "¿Cuál es la principal característica de una Interfaz Funcional?",
        options: ["Una interfaz funcional puede tener múltiples métodos abstractos si están sobrecargados", "Tener exactamente un método abstracto", "La inmutabilidad impide crear nuevos objetos a partir de existentes"],
        answer: 1,
        descripcion: "Una interfaz funcional en Java tiene exactamente un método abstracto, lo que permite su uso con expresiones lambda y referencias a métodos.",
        recomendacion: "Estudia la definición y ejemplos de interfaces funcionales y su relación con las lambdas en Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000032",
        type: "THEORY",
        question: "¿Qué hace el operador 'flatMap' en un Stream?",
        options: ["flatMap ordena los elementos y elimina duplicados al aplanar", "Aplana estructuras anidadas transformándolas en un solo stream", "La inmutabilidad impide crear nuevos objetos a partir de existentes"],
        answer: 1,
        descripcion: "El operador flatMap transforma y aplana estructuras anidadas en un solo stream, facilitando el procesamiento de colecciones complejas.",
        recomendacion: "Practica el uso de flatMap en streams y revisa ejemplos de transformación de datos anidados."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000033",
        type: "THEORY",
        question: "¿Qué es la 'Inmutabilidad' en programación funcional?",
        options: ["Inmutabilidad ordena los elementos y elimina duplicados al aplanar", "Un estado que no puede ser modificado después de su creación", "La inmutabilidad impide crear nuevos objetos a partir de existentes"],
        answer: 1,
        descripcion: "La inmutabilidad implica que el estado de un objeto no puede ser modificado después de su creación, lo que reduce errores y facilita la concurrencia.",
        recomendacion: "Estudia los beneficios de la inmutabilidad y cómo implementarla en Java."
      },

      {
        id: 'b1a7c2e0-1a11-4f56-9abc-000000000036',
        type: 'THEORY',
        question: 'Si tengo un Optional<String> y necesito devolver un valor por defecto cuando está vacío, ¿qué método de Optional me podría ayudar?',
        options: [
          'map()',
          'orElse()',
          'filter()'
        ],
        answer: 1,
        descripcion: 'El método orElse() devuelve el valor contenido si está presente, o el valor por defecto especificado si el Optional está vacío.',
        recomendacion: 'Revisa los métodos orElse(), orElseGet() y orElseThrow() para manejar valores opcionales de forma segura.'
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000034",
        type: "THEORY",
        question: "¿Cuál es la diferencia entre un Stream y una Collection?",
        options: ["Una interfaz Collection puede tener múltiples métodos abstractos si están sobrecargados", "El Stream es una vista de datos que no altera la fuente original", "Collection ordena los elementos y almacena solo los duplicados"],
        answer: 1,
        descripcion: "Un Stream es una vista de datos que permite procesar elementos de forma funcional sin modificar la fuente original, mientras que una Collection almacena los datos.",
        recomendacion: "Revisa ejemplos de uso de streams y colecciones, y sus diferencias clave en Java."
      },

{
  id: 'b1a7c2e0-1a11-4f56-9abc-000000000037',
  type: 'THEORY',
  question: 'Si tengo un Optional<String> y quiero ejecutar una acción cuando hay valor y otra cuando está vacío, ¿qué método de Optional me podría ayudar?',
  options: [
    'orElse()',
    'ifPresentOrElse()',
    'map()'
  ],
  answer: 1,
  descripcion: 'El método ifPresentOrElse() permite ejecutar una acción si el valor está presente y otra acción alternativa si el Optional está vacío.',
  recomendacion: 'Revisa la API de Optional en Java 9+, especialmente ifPresentOrElse() para manejar flujos condicionales sin usar if tradicionales.'
},

      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000035",
        type: "THEORY",
        question: "¿Qué interfaz funcional usarías para una función que recibe un valor y devuelve un booleano?",
        options: ["flatMap ordena los elementos y elimina duplicados al aplanar", "Una interfaz funcional Collection puede tener múltiples métodos abstractos si están sobrecargados", "Predicate"],
        answer: 2,
        descripcion: "Predicate es la interfaz funcional utilizada para funciones que reciben un valor y devuelven un booleano, común en operaciones de filtrado.",
        recomendacion: "Estudia la interfaz Predicate y su uso en métodos como filter en streams de Java."
      },
      {
        id: "6e760523-849c-40ea-86d6-c70494a3d2b8",
        type: "THEORY",
        question: "¿Diferencia clave entre Programacion Funcional y POO?",
        options: ["PF favorece inmutabilidad/funciones puras; POO modela objetos con estado", "POO no permite composición de funciones", "PF requiere threads dedicados"],
        answer: 0,
        descripcion: "PF evita efectos secundarios e inmutabilidad; POO gestiona estado/behaviour.",
        recomendacion: "Compara objetos vs funciones puras."
      },
      {
        id: "6c3302a5-ace1-44c7-ab68-b534ef41c64f",
        type: "THEORY",
        question: "¿Qué es una Higher-Order Function?",
        options: ["Función que recibe y/o devuelve funciones", "Función con prioridad alta de ejecución", "Método estático del cargador de clases"],
        answer: 0,
        descripcion: "HOF trata funciones como valores, habilita composición y abstracción.",
        recomendacion: "Practica con Function y Predicate."
      },
    ]
  },
  {
    topic: "programación reactiva",
    items: [
      {
        id: "a56c92f7-f633-4675-9208-967c3ebe95f2",
        type: "THEORY",
        question: "¿Diferencia principal entre programación reactiva y POO tradicional?",
        options: ["Reactiva se centra en flujos asíncronos y propagación no bloqueante", "POO no permite concurrencia", "Reactiva exige herencia múltiple"],
        answer: 0,
        descripcion: "Reactiva modela flujos asíncronos con backpressure; POO modela objetos/estado.",
        recomendacion: "Revisa Reactive Streams y Project Reactor."
      },
      {
        id: "be4f767f-afaf-4775-837f-5361c1e3dcd3",
        type: "THEORY",
        question: "¿Qué es backpressure?",
        options: ["Mecanismo para que el consumidor regule la velocidad del productor", "Patrón de reintento con jitter", "Técnica de serialización binaria"],
        answer: 0,
        descripcion: "Evita sobrecarga señalando demanda del consumidor.",
        recomendacion: "Estudia protocolo Reactive Streams."
      },
      {
        id: "1ca3c854-b580-4397-87bf-8b96fb83d3cf",
        type: "THEORY",
        question: "En Reactor, ¿diferencia Mono vs Flux?",
        options: ["Mono produce 0..1 elementos; Flux 0..N", "Mono es síncrono; Flux asíncrono", "Flux solo emite errores"],
        answer: 0,
        descripcion: "Mono representa un resultado único opcional; Flux secuencias múltiples.",
        recomendacion: "Elige Mono vs Flux según cardinalidad."
      },
    ]
  },
  {
    topic: "patrones de diseño (gof)",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000036",
        type: "THEORY",
        question: "¿Qué patrón usarías para permitir que un objeto notifique a otros sobre cambios en su estado?",
        options: ["Facade modifica el comportamiento interno del subsistema sin cambiar la interfaz", "Observer", "Strategy crea una instancia única compartida por toda la aplicación"],
        answer: 1,
        descripcion: "El patrón Observer permite que un objeto (sujeto) notifique a otros (observadores) sobre cambios en su estado, facilitando la comunicación desacoplada.",
        recomendacion: "Estudia el patrón Observer y revisa ejemplos de implementación en Java y otros lenguajes orientados a objetos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000037",
        type: "THEORY",
        question: "El patrón 'Strategy' es útil para:",
        options: ["Facade modifica el comportamiento interno del subsistema sin cambiar la interfaz", "Intercambiar algoritmos en tiempo de ejecución", "Observer garantiza entrega exactamente una vez sin mecanismos adicionales"],
        answer: 1,
        descripcion: "El patrón Strategy permite intercambiar algoritmos en tiempo de ejecución, encapsulando cada uno en una clase separada y facilitando la extensión del comportamiento.",
        recomendacion: "Revisa ejemplos del patrón Strategy y cómo se usa para separar la lógica de algoritmos en Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000038",
        type: "THEORY",
        question: "¿Cuál es el propósito del patrón 'Builder'?",
        options: ["Construir objetos complejos paso a paso", "Modifica el comportamiento interno del subsistema sin cambiar la interfaz", "garantiza entrega exactamente una vez sin mecanismos adicionales"],
        answer: 0,
        descripcion: "El patrón Builder permite construir objetos complejos paso a paso, separando la construcción de la representación final.",
        recomendacion: "Estudia el patrón Builder y su uso para crear objetos inmutables o con muchas opciones de configuración."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000039",
        type: "THEORY",
        question: "¿Qué patrón actúa como un envoltorio que oculta la complejidad de un subsistema?",
        options: ["Facade", "Factory modifica el comportamiento interno del subsistema sin cambiar la interfaz", "Builder garantiza entrega exactamente una vez sin mecanismos adicionales"],
        answer: 0,
        descripcion: "El patrón Facade actúa como un envoltorio que oculta la complejidad de un subsistema, proporcionando una interfaz simple y unificada.",
        recomendacion: "Revisa ejemplos del patrón Facade y cómo simplifica la interacción con sistemas complejos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000040",
        type: "THEORY",
        question: "¿Cuál es la diferencia entre Decorator y Proxy?",
        options: ["Decorator garantiza entrega exactamente una vez sin mecanismos adicionales", "Decorator añade responsabilidades dinámicamente; Proxy controla el acceso", "Proxy crea una instancia única compartida por toda la aplicación"],
        answer: 1,
        descripcion: "Decorator añade responsabilidades dinámicamente a un objeto, mientras que Proxy controla el acceso o añade lógica adicional al interactuar con el objeto real.",
        recomendacion: "Estudia los patrones Decorator y Proxy, y revisa ejemplos para entender sus diferencias y aplicaciones."
      },
    ]
  },
  {
    topic: "patrones de arquitectura en la nube",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000041",
        type: "THEORY",
        question: "¿Qué permite el patrón 'Sidecar'?",
        options: ["Impide lecturas en consistencia eventual por diseño", "Añadir capacidades (logging, proxy) a un contenedor sin alterar el código", "Ejecuta una transacción distribuida única y atómica"],
        answer: 1,
        descripcion: "El patrón Sidecar permite añadir capacidades como logging o proxy a un contenedor sin modificar el código del microservicio, facilitando la extensión y mantenimiento.",
        recomendacion: "Estudia el patrón Sidecar y revisa ejemplos de su uso en arquitecturas de microservicios y Kubernetes."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000042",
        type: "THEORY",
        question: "¿Para qué sirve el patrón 'CQRS'?",
        options: ["Ejecuta una transacción distribuida única y atómica", "Separar las operaciones de lectura de las de escritura", "Reemplaza el microservicio principal durante fallos"],
        answer: 1,
        descripcion: "El patrón CQRS separa las operaciones de lectura y escritura, permitiendo optimizar y escalar cada una de forma independiente.",
        recomendacion: "Revisa ejemplos de CQRS y cómo se implementa en sistemas distribuidos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000043",
        type: "THEORY",
        question: "¿Qué es el patrón 'Saga'?",
        options: ["Saga ejecuta una transacción distribuida única y atómica", "Una secuencia de transacciones locales para gestionar la consistencia distribuida", "CQRS impide lecturas en consistencia eventual por diseño"],
        answer: 1,
        descripcion: "El patrón Saga es una secuencia de transacciones locales coordinadas para mantener la consistencia en sistemas distribuidos, especialmente en microservicios.",
        recomendacion: "Estudia el patrón Saga y revisa ejemplos de orquestación y coreografía de transacciones."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000044",
        type: "THEORY",
        question: "¿Qué problema resuelve el patrón 'API Gateway'?",
        options: ["Gateway reemplaza el microservicio principal durante fallos", "Punto único de entrada, ruteo y agregación para microservicios", "Gateway es sincorno y ejecuta una transacción distribuida única y atómica"],
        answer: 1,
        descripcion: "El patrón API Gateway proporciona un punto único de entrada, ruteo y agregación para microservicios, simplificando la gestión y seguridad.",
        recomendacion: "Revisa la arquitectura de API Gateway y su uso en sistemas de microservicios."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000045",
        type: "THEORY",
        question: "¿Qué es el 'Event Sourcing'?",
        options: ["Reemplaza el microservicio principal durante fallos", "Persistir el estado de un objeto como una secuencia de eventos inmutables", "Event Sourcing impide lecturas en consistencia eventual por diseño"],
        answer: 1,
        descripcion: "Event Sourcing persiste el estado de un objeto como una secuencia de eventos inmutables, permitiendo reconstruir el estado y auditar cambios.",
        recomendacion: "Estudia el patrón Event Sourcing y revisa ejemplos de su implementación en sistemas distribuidos."
      },
      {
        id: "cd5794bd-75fa-433e-ab05-d41856f8e449",
        type: "THEORY",
        question: "¿Qué ventaja aporta la mensajería en microservicios?",
        options: ["Desacoplamiento temporal y suavizado de picos con colas/topics", "Menor latencia que memoria compartida", "Elimina la necesidad de idempotencia"],
        answer: 0,
        descripcion: "La mensajería desacopla productores/consumidores y nivelan picos.",
        recomendacion: "Compara colas, topics y publish/subscribe."
      },
      {
        id: "6a0f4ef5-e7ce-428e-8220-72de0d1175ba",
        type: "THEORY",
        question: "Un API Gateway con routing por reglas permite…",
        options: ["Dirigir tráfico por versión/ruta/cabeceras hacia distintos servicios", "Evitar TLS en los servicios", "Compilar clientes nativos automáticamente"],
        answer: 0,
        descripcion: "Aplica políticas y enruta peticiones según reglas.",
        recomendacion: "Revisa canary y blue/green con gateways."
      },
    ]
  },
  {
    topic: "monolito vs microservicios vs otros",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000046",
        type: "THEORY",
        question: "¿Qué es un Monolito Modular?",
        options: ["Microservicios eliminan la latencia de red mediante colas internas", "Un monolito con fronteras lógicas bien definidas entre módulos", "El Teorema CAP garantiza las tres propiedades cuando hay replicación síncrona"],
        answer: 1,
        descripcion: "Un Monolito Modular es una aplicación monolítica con fronteras lógicas bien definidas entre módulos, facilitando el mantenimiento y la evolución.",
        recomendacion: "Estudia la diferencia entre monolitos tradicionales y modulares, y revisa ejemplos de modularización."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000047",
        type: "THEORY",
        question: "¿Cuál es la principal complejidad de los Microservicios?",
        options: ["Requiere desplegar cada módulo por separado", "La gestión de la red, latencia y consistencia distribuida", "El Teorema CAP garantiza las tres propiedades cuando hay replicación síncrona"],
        answer: 1,
        descripcion: "La principal complejidad de los microservicios radica en la gestión de la red, la latencia y la consistencia distribuida entre servicios independientes.",
        recomendacion: "Revisa los retos de la arquitectura de microservicios y estrategias para gestionar la complejidad distribuida."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000048",
        type: "THEORY",
        question: "¿Qué establece el Teorema CAP?",
        options: ["Garantizar 2 de 3: Consistencia, Disponibilidad y Partición", "El Teorema CAP garantiza las tres propiedades cuando hay replicación síncrona", "Microservicios eliminan la latencia de red mediante colas internas"],
        answer: 0,
        descripcion: "El Teorema CAP establece que en un sistema distribuido solo se pueden garantizar dos de tres propiedades: Consistencia, Disponibilidad y Tolerancia a Particiones.",
        recomendacion: "Estudia el Teorema CAP y cómo afecta el diseño de sistemas distribuidos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000049",
        type: "THEORY",
        question: "¿Cuándo es preferible un Monolito?",
        options: ["Un Monolito Modular requiere desplegar cada módulo por separado", "En etapas tempranas (MVP) o cuando el equipo/dominio son pequeños", "Microservicios eliminan la latencia de red mediante colas internas"],
        answer: 1,
        descripcion: "Un monolito es preferible en etapas tempranas (MVP) o cuando el equipo y el dominio son pequeños, ya que simplifica el desarrollo y despliegue.",
        recomendacion: "Revisa casos de uso donde un monolito es más eficiente que una arquitectura de microservicios."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000050",
        type: "THEORY",
        question: "¿Qué es la 'Arquitectura Hexagonal' (Ports & Adapters)?",
        options: ["Arquitectura que eliminan la latencia de red mediante colas internas", "Desacoplar el núcleo de negocio de las tecnologías externas", "Arquitectura que facilita la replicación síncrona sobre la asincrona"],
        answer: 1,
        descripcion: "La Arquitectura Hexagonal desacopla el núcleo de negocio de las tecnologías externas, facilitando la prueba y evolución del sistema.",
        recomendacion: "Estudia la Arquitectura Hexagonal y revisa ejemplos de implementación en proyectos Java."
      },
    ]
  },
  {
    topic: "restful vs otros",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000051",
        type: "THEORY",
        question: "¿Qué significa que REST sea 'Stateless'?",
        options: ["REST mantiene sesión del cliente en memoria del servidor para escalar mejor", "Que el servidor no guarda información del cliente entre peticiones", "gRPC funciona nativamente en navegadores sin ningún proxy o pasarela"],
        answer: 1,
        descripcion: "REST es 'stateless' porque el servidor no guarda información del cliente entre peticiones, lo que simplifica la escalabilidad y el mantenimiento.",
        recomendacion: "Estudia los principios de REST y cómo el statelessness afecta el diseño de APIs."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000052",
        type: "THEORY",
        question: "¿Cuál es una ventaja de gRPC sobre REST?",
        options: ["REST mantiene sesión del cliente en memoria del servidor para escalar mejor", "Usa HTTP/2 y serialización binaria (Protobuf)", "GraphQL sustituye completamente a SQL en la capa de persistencia"],
        answer: 1,
        descripcion: "gRPC utiliza HTTP/2 y serialización binaria (Protobuf), lo que mejora el rendimiento y la eficiencia en la comunicación entre servicios.",
        recomendacion: "Revisa las diferencias entre REST y gRPC, y cuándo conviene usar cada uno."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000053",
        type: "THEORY",
        question: "¿Para qué se usa GraphQL principalmente?",
        options: ["GraphQL sustituye completamente a SQL en la capa de persistencia", "Para permitir que el cliente pida exactamente los datos que necesita", "gRPC funciona nativamente en navegadores sin ningún proxy o pasarela"],
        answer: 1,
        descripcion: "GraphQL permite que el cliente solicite exactamente los datos que necesita, optimizando el consumo de recursos y la flexibilidad de las APIs.",
        recomendacion: "Estudia la sintaxis y ventajas de GraphQL frente a REST."
      },
      /*{
        id: "b1a7c2e0-1a11-4f56-9abc-000000000054",
        type: "THEORY",
        question: "¿Qué son los niveles del 'Richardson Maturity Model'?",
        options: ["GraphQL sustituye completamente a SQL en la capa de persistencia", "Una escala para medir qué tan fiel es una API a los principios REST", "gRPC funciona nativamente en navegadores sin ningún proxy o pasarela"],
        answer: 1,
        descripcion: "El Richardson Maturity Model es una escala para medir qué tan fiel es una API a los principios REST, desde recursos simples hasta HATEOAS.",
        recomendacion: "Revisa los niveles del Richardson Maturity Model y ejemplos de cada uno."
      },*/
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000055",
        type: "THEORY",
        question: "¿Qué es un WebHook?",
        options: ["Sustituye completamente a SQL en la capa de persistencia", "Comunicación asíncrona donde el servidor notifica eventos al cliente", "Funcion nativa en navegadores sin ningún proxy o pasarela"],
        answer: 1,
        descripcion: "Un WebHook es una comunicación asíncrona donde el servidor notifica eventos al cliente mediante peticiones HTTP, facilitando la integración entre sistemas.",
        recomendacion: "Estudia casos de uso de WebHooks y cómo implementarlos de forma segura."
      },
      {
        id: "820e39d4-b339-485e-bed6-e7e16477cf7d",
        type: "THEORY",
        question: "Estrategia recomendada de versionado de APIs:",
        options: ["Versionar en URL o cabecera y evitar romper contratos", "Cambiar el host por versión", "Evitar versionado y forzar actualización inmediata"],
        answer: 0,
        descripcion: "Versionar por ruta (v1) o cabeceras y mantener compatibilidad.",
        recomendacion: "Revisa negociación de contenido y deprecaciones."
      },
      {
        id: "e07b2155-8c5d-4d39-955b-da3795648cc0",
        type: "THEORY",
        question: "Código HTTP para petición mal formada del cliente:",
        options: ["400 Bad Request", "409 Conflict", "422 Unprocessable Entity indica éxito parcial"],
        answer: 0,
        descripcion: "400 indica errores de sintaxis/validación del cliente.",
        recomendacion: "Consulta 4xx y cuándo usar 422/409."
      },
      {
        id: "c9b9402c-43dd-43ed-b728-9c9212096061",
        type: "THEORY",
        question: "¿Qué indica 202 Accepted?",
        options: ["Solicitud aceptada para procesamiento asíncrono", "Recurso creado correctamente", "Debe invalidarse la caché del cliente"],
        answer: 0,
        descripcion: "202 Accepted: aceptada pero aún no procesada.",
        recomendacion: "Útil para jobs asíncronos."
      },
      {
        id: "85b6e38e-fb36-438c-a693-9967b0be291a",
        type: "THEORY",
        question: "¿Qué es CORS?",
        options: ["Mecanismo que controla solicitudes cross-origin con cabeceras", "Método HTTP para compartir recursos", "Técnica de cacheo en proxies"],
        answer: 0,
        descripcion: "CORS usa cabeceras Origin y Access-Control-* para permitir/restringir orígenes.",
        recomendacion: "Configura CORS en gateway/servicio."
      },
      {
        id: "18daf4ec-22a8-456a-97dd-76c56b1df7a6",
        type: "THEORY",
        question: "Herramienta común en Java para documentar APIs REST:",
        options: ["OpenAPI/Swagger con springdoc-openapi", "Thymeleaf", "JUnit/Mockito/Postman"],
        answer: 0,
        descripcion: "OpenAPI define contrato; springdoc genera docs/Swagger UI.",
        recomendacion: "Integra springdoc-openapi en Spring Boot."
      },
    ]
  },
  {
    topic: "Métodos HTTP",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000056",
        type: "THEORY",
        question: "¿Cuál es la diferencia entre PUT y PATCH?",
        options: ["Un método idempotente nunca modifica estado del servidor bajo ninguna condición", "PUT reemplaza el recurso completo, PATCH hace cambios parciales", "PATCH crea recursos si no existen y siempre es idempotente"],
        answer: 1,
        descripcion: "PUT reemplaza el recurso completo, mientras que PATCH realiza cambios parciales sobre el recurso existente.",
        recomendacion: "Estudia los métodos HTTP y sus diferencias, especialmente PUT vs PATCH."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000057",
        type: "THEORY",
        question: "¿Qué significa que un método sea 'Idempotente'?",
        options: ["PATCH crea recursos si no existen y siempre es idempotente", "Que repetir la petición produce el mismo efecto en el servidor", "Un método idempotente nunca modifica estado del servidor bajo ninguna condición"],
        answer: 1,
        descripcion: "Un método idempotente produce el mismo efecto en el servidor sin importar cuántas veces se repita la petición.",
        recomendacion: "Revisa la definición de idempotencia y qué métodos HTTP la cumplen."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000058",
        type: "THEORY",
        question: "¿Cuál de estos métodos NO es seguro (modifica estado)?",
        options: ["PATCH crea recursos si no existen y siempre es idempotente", "HEAD devuelve el mismo cuerpo que GET pero sin cabeceras", "POST"],
        answer: 2,
        descripcion: "POST no es seguro porque puede modificar el estado del servidor, a diferencia de GET y OPTIONS que solo consultan información.",
        recomendacion: "Estudia la diferencia entre métodos seguros y no seguros en HTTP."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000059",
        type: "THEORY",
        question: "¿Para qué sirve el método HEAD?",
        options: ["PATCH crea recursos si no existen y siempre es idempotente", "Para obtener solo los headers sin el cuerpo de la respuesta", "HEAD devuelve el mismo cuerpo que GET pero sin cabeceras"],
        answer: 1,
        descripcion: "HEAD permite obtener solo los headers de la respuesta sin el cuerpo, útil para comprobar recursos o cachés.",
        recomendacion: "Revisa ejemplos de uso del método HEAD en APIs y validación de recursos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000060",
        type: "THEORY",
        question: "¿Qué código HTTP indica que un recurso ha sido creado exitosamente?",
        options: ["HEAD devuelve el mismo cuerpo que GET pero sin cabeceras", "201 Created", "PATCH crea recursos si no existen y siempre es idempotente"],
        answer: 1,
        descripcion: "El código 201 Created indica que un recurso ha sido creado exitosamente en el servidor.",
        recomendacion: "Estudia los códigos de estado HTTP y su significado, especialmente los relacionados con creación de recursos."
      },
    ]
  },
  {
    topic: "Principios de diseño",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000061",
        type: "THEORY",
        question: "¿Qué dice el principio de Responsabilidad Única (S)?",
        options: ["Una clase debe tener una sola razón para cambiar", "Durabilidad garantiza rendimiento estable independientemente del hardware", "Interface Segregation obliga a usar una sola interfaz por módulo"],
        answer: 0,
        descripcion: "El principio de Responsabilidad Única establece que una clase debe tener una sola razón para cambiar, promoviendo el diseño limpio y mantenible.",
        recomendacion: "Estudia los principios SOLID y revisa ejemplos de aplicación del principio S."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000062",
        type: "THEORY",
        question: "¿Qué es la 'I' en SOLID (Interface Segregation)?",
        options: ["Durabilidad garantiza rendimiento estable independientemente del hardware", "No obligar a los clientes a depender de métodos que no usan", "Responsabilidad Única implica tener un único método público en la clase"],
        answer: 1,
        descripcion: "El principio de Segregación de Interfaces indica que los clientes no deben depender de métodos que no usan, promoviendo interfaces específicas y pequeñas.",
        recomendacion: "Revisa ejemplos de segregación de interfaces y cómo mejora la mantenibilidad del código."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000063",
        type: "THEORY",
        question: "En ACID, ¿qué garantiza la 'Atomicidad'?",
        options: ["Que la transacción se ejecute totalmente o nada", "Interface Segregation obliga a usar una sola interfaz por módulo", "Durabilidad garantiza rendimiento estable independientemente del hardware"],
        answer: 0,
        descripcion: "La Atomicidad en ACID garantiza que una transacción se ejecute completamente o no se ejecute en absoluto, evitando estados intermedios.",
        recomendacion: "Estudia los principios ACID y cómo se implementan en bases de datos relacionales."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000064",
        type: "THEORY",
        question: "En ACID, ¿qué significa 'Durabilidad'?",
        options: ["Durabilidad garantiza rendimiento estable independientemente del hardware", "Los cambios persisten incluso ante fallos del sistema", "Interface Segregation obliga a usar una sola interfaz por módulo"],
        answer: 1,
        descripcion: "La Durabilidad en ACID significa que los cambios realizados por una transacción persisten incluso ante fallos del sistema.",
        recomendacion: "Revisa cómo las bases de datos aseguran la durabilidad de los datos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000065",
        type: "THEORY",
        question: "¿Qué promueve el Principio de Inversión de Dependencias (D)?",
        options: ["Durabilidad garantiza rendimiento estable independientemente del hardware", "Depender de abstracciones, no de concreciones", "Interface Segregation obliga a usar una sola interfaz por módulo"],
        answer: 1,
        descripcion: "El principio de Inversión de Dependencias promueve depender de abstracciones y no de implementaciones concretas, facilitando la extensibilidad y el testing.",
        recomendacion: "Estudia la inversión de dependencias y su impacto en la arquitectura de software."
      },
      {
        id: "98db9b05-5d54-476e-badc-cb52d9f5c049",
        type: "THEORY",
        question: "¿Qué persigue el principio DRY?",
        options: ["Evitar duplicación de conocimiento en el sistema", "Reducir tamaño de binarios", "Eliminar documentación"],
        answer: 0,
        descripcion: "DRY busca una única fuente de verdad para cada pieza de conocimiento.",
        recomendacion: "Detecta duplicación y extrae abstracciones."
      },
      {
        id: "1885deb6-86db-4b85-9515-3e2b04041571",
        type: "THEORY",
        question: "En DDD, ¿qué define mejor un Bounded Context?",
        options: ["Un límite explícito donde un modelo mantiene significado consistente", "Una tabla por microservicio", "Un módulo de UI"],
        answer: 0,
        descripcion: "Delimita lenguaje ubicuo y reglas de un modelo específico.",
        recomendacion: "Revisa context map y agregados."
      },
      {
        id: "fb38f490-ecea-4fbe-a789-23c3bf619899",
        type: "THEORY",
        question: "En EDD (event-driven design), ¿qué rol tienen los eventos de dominio?",
        options: ["Comunican cambios de estado como hechos inmutables", "Transportan comandos ejecutables", "Sincronizan bases en 2PC"],
        answer: 0,
        descripcion: "Los eventos representan hechos pasados e inmutables.",
        recomendacion: "Distingue comandos, eventos y consultas."
      },
    ]
  },
  {
    topic: "Sql vs NoSQL",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000066",
        type: "THEORY",
        question: "¿Cuál es la principal característica de las bases de datos SQL?",
        options: ["Se usa principalmente para almacenar archivos binarios grandes", "Esquema rígido y transacciones ACID robustas", "SQL no soporta transacciones distribuidas entre tablas"],
        answer: 1,
        descripcion: "Las bases de datos SQL se caracterizan por tener un esquema rígido y soportar transacciones ACID robustas, garantizando integridad y consistencia.",
        recomendacion: "Estudia los conceptos de esquema y transacciones ACID en bases de datos relacionales."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000067",
        type: "THEORY",
        question: "¿Qué significa que NoSQL sea 'Schemaless'?",
        options: ["Caracteristica principal para almacenar archivos binarios grandes", "Que no requiere un esquema fijo previo a la inserción", "SQL no soporta transacciones distribuidas entre tablas"],
        answer: 1,
        descripcion: "NoSQL es 'schemaless' porque no requiere un esquema fijo antes de insertar datos, permitiendo flexibilidad en la estructura de la información.",
        recomendacion: "Revisa ejemplos de bases de datos NoSQL y cómo gestionan la flexibilidad de los datos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000068",
        type: "THEORY",
        question: "¿Para qué usarías Redis (NoSQL clave-valor)?",
        options: ["Redis se usa principalmente para almacenar archivos binarios grandes", "Caché de alta velocidad y manejo de sesiones", "NoSQL requiere esquema rígido para lecturas eficientes"],
        answer: 1,
        descripcion: "Redis es una base de datos NoSQL clave-valor ideal para caché de alta velocidad y manejo de sesiones por su rapidez y eficiencia.",
        recomendacion: "Estudia los casos de uso de Redis y cómo se integra en arquitecturas modernas."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000069",
        type: "THEORY",
        question: "¿Qué base de datos NoSQL es orientada a Documentos?",
        options: ["Redis", "MongoDB", "Cassandra"],
        answer: 1,
        descripcion: "MongoDB es una base de datos NoSQL orientada a documentos, permitiendo almacenar y consultar datos en formato JSON flexible.",
        recomendacion: "Revisa la estructura y ventajas de las bases de datos orientadas a documentos como MongoDB."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000070",
        type: "THEORY",
        question: "¿Cuál es una desventaja común de SQL al escalar masivamente?",
        options: ["La dificultad de escalar horizontalmente (sharding)", "SQL no soporta transacciones distribuidas entre tablas", "NoSQL requiere esquema rígido para lecturas eficientes"],
        answer: 0,
        descripcion: "Una desventaja común de SQL al escalar masivamente es la dificultad de escalar horizontalmente (sharding) debido a su esquema rígido y relaciones.",
        recomendacion: "Estudia técnicas de escalabilidad en bases de datos SQL y alternativas NoSQL para grandes volúmenes de datos."
      },
    ]
  },
  {
    topic: "testing",
    items: [
      {
        id: "51920de4-4471-4fd1-b3ea-1ef482bf5f2b",
        type: "THEORY",
        question: "¿Cuál es el ciclo clásico de TDD?",
        options: ["Red, Green, Refactor", "Design, Build, Deploy", "Plan, Do, Check"],
        answer: 0,
        descripcion: "Primero la prueba (roja), luego implementación mínima (verde) y refactor.",
        recomendacion: "Practica TDD con unit tests y refactors pequeños."
      },
      {
        id: "bf4f2cd4-eb20-4bc1-b2b2-ac69fb374fcd",
        type: "THEORY",
        question: "¿Para qué sirve el mocking?",
        options: ["Aislar la unidad reemplazando dependencias externas con dobles de prueba", "Acelerar compilación", "Evitar escribir aserciones"],
        answer: 0,
        descripcion: "Mocks simulan colaboraciones sin efectos externos.",
        recomendacion: "Usa Mockito para crear/verificar mocks."
      },
      {
        id: "dd88f8fd-dcdb-43dd-9394-4d5f1fd6962e",
        type: "THEORY",
        question: "Ventaja de integration testing con contenedores frente a bases en memoria:",
        options: ["Se aproxima más al entorno real del proveedor de datos", "Siempre ejecuta más rápido", "Elimina necesidad de migraciones"],
        answer: 0,
        descripcion: "Contenedores del proveedor real reducen diferencias frente a memoria.",
        recomendacion: "Evalúa Testcontainers y estrategias de datos."
      },
    ]
  }
];