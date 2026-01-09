/**
 * Senior Developer Assessment Data
 * Contiene 14 temas, 71 preguntas con respuestas.
 */

export const questions = [
  {
    topic: "conceptos java 21 +",
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
        id: "b1a7c2e0-1a11-4f56-9abc-000000000002",
        type: "THEORY",
        question: "¿Qué característica de Java 21 permite extraer componentes de un Record en un switch?",
        options: ["Record Patterns", "Permite herencia múltiple entre clases y registros", "Habilita reflexión privada sin restricciones en tiempo de ejecución"],
        answer: 0,
        descripcion: "Record Patterns es una característica que permite descomponer y extraer los componentes de un Record directamente en una expresión switch, facilitando el pattern matching y el manejo de datos inmutables.",
        recomendacion: "Repasa el uso de Records y Pattern Matching en Java 21, especialmente cómo se integran en las sentencias switch."
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
        question: "¿Qué permite el Pattern Matching for switch?",
        options: ["Permite herencia múltiple entre clases y registros", "Evaluar tipos y condiciones (guarded patterns) en las ramas del switch", "Sustituye completamente a las clases abstractas en Java"],
        answer: 1,
        descripcion: "El Pattern Matching for switch permite evaluar tipos y condiciones dentro de las ramas del switch, haciendo el código más expresivo y seguro al evitar castings manuales y errores de tipo.",
        recomendacion: "Estudia cómo funciona el pattern matching en switch y practica con ejemplos que incluyan guarded patterns y múltiples tipos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000005",
        type: "THEORY",
        question: "¿Qué es un Record en Java?",
        options: ["Sustituye completamente a las clases abstractas en Java", "Una clase inmutable transparente que actúa como portadora de datos", "Permite herencia múltiple entre clases y registros"],
        answer: 1,
        descripcion: "Un Record en Java es una clase inmutable y transparente que actúa como portadora de datos, generando automáticamente métodos como equals, hashCode y toString.",
        recomendacion: "Revisa la sintaxis de los Records, sus ventajas y limitaciones, y cómo se diferencian de las clases tradicionales."
      }
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
      {
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
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000010",
        type: "THEORY",
        question: "¿Cuál es la principal ventaja de rendimiento de los Virtual Threads?",
        options: ["Completa operaciones de I/O de forma no bloqueante por defecto sin librerías", "Permiten manejar masivamente tareas que esperan por I/O con poca memoria", "Los virtual threads ejecutan siempre en un único núcleo físico"],
        answer: 1,
        descripcion: "La principal ventaja de los Virtual Threads es que permiten manejar una gran cantidad de tareas que esperan por I/O usando muy poca memoria, facilitando la escalabilidad.",
        recomendacion: "Estudia casos de uso donde los Virtual Threads mejoran la escalabilidad y el consumo de recursos en aplicaciones Java."
      }
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
        options: ["El modelo asíncrono reduce el consumo de CPU en tareas intensivas de cálculo por sí mismo", "CompletableFuture", "CompletableFuture garantiza orden estricto de ejecución entre tareas encadenadas"],
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
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000015",
        type: "THEORY",
        question: "¿Qué es el 'Context Switching' y por qué afecta más al modelo síncrono?",
        options: ["Las APIs non-blocking nunca devuelven errores al cliente", "Es el costo del SO al alternar entre hilos pesados; el modelo asíncrono/virtual lo minimiza", "CompletableFuture garantiza orden estricto de ejecución entre tareas encadenadas"],
        answer: 1,
        descripcion: "El 'Context Switching' es el costo que incurre el sistema operativo al alternar entre hilos pesados, lo que afecta el rendimiento en modelos síncronos. Los modelos asíncronos o con virtual threads minimizan este costo.",
        recomendacion: "Estudia cómo funciona el context switching y por qué los modelos asíncronos y virtual threads son más eficientes en escenarios de alta concurrencia."
      }
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
      }
    ]
  },
  {
    topic: "sso y como podriamos implementarlo con java",
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
      }
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
      }
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
        options: ["flatMap ordena los elementos y elimina duplicados al aplanar", "Un estado que no puede ser modificado después de su creación", "La inmutabilidad impide crear nuevos objetos a partir de existentes"],
        answer: 1,
        descripcion: "La inmutabilidad implica que el estado de un objeto no puede ser modificado después de su creación, lo que reduce errores y facilita la concurrencia.",
        recomendacion: "Estudia los beneficios de la inmutabilidad y cómo implementarla en Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000034",
        type: "THEORY",
        question: "¿Cuál es la diferencia entre un Stream y una Collection?",
        options: ["Una interfaz funcional puede tener múltiples métodos abstractos si están sobrecargados", "El Stream es una vista de datos que no altera la fuente original", "flatMap ordena los elementos y elimina duplicados al aplanar"],
        answer: 1,
        descripcion: "Un Stream es una vista de datos que permite procesar elementos de forma funcional sin modificar la fuente original, mientras que una Collection almacena los datos.",
        recomendacion: "Revisa ejemplos de uso de streams y colecciones, y sus diferencias clave en Java."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000035",
        type: "THEORY",
        question: "¿Qué interfaz funcional usarías para una función que recibe un valor y devuelve un booleano?",
        options: ["flatMap ordena los elementos y elimina duplicados al aplanar", "Una interfaz funcional puede tener múltiples métodos abstractos si están sobrecargados", "Predicate"],
        answer: 2,
        descripcion: "Predicate es la interfaz funcional utilizada para funciones que reciben un valor y devuelven un booleano, común en operaciones de filtrado.",
        recomendacion: "Estudia la interfaz Predicate y su uso en métodos como filter en streams de Java."
      }
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
        options: ["Construir objetos complejos paso a paso", "Facade modifica el comportamiento interno del subsistema sin cambiar la interfaz", "Observer garantiza entrega exactamente una vez sin mecanismos adicionales"],
        answer: 0,
        descripcion: "El patrón Builder permite construir objetos complejos paso a paso, separando la construcción de la representación final.",
        recomendacion: "Estudia el patrón Builder y su uso para crear objetos inmutables o con muchas opciones de configuración."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000039",
        type: "THEORY",
        question: "¿Qué patrón actúa como un envoltorio que oculta la complejidad de un subsistema?",
        options: ["Facade", "Facade modifica el comportamiento interno del subsistema sin cambiar la interfaz", "Observer garantiza entrega exactamente una vez sin mecanismos adicionales"],
        answer: 0,
        descripcion: "El patrón Facade actúa como un envoltorio que oculta la complejidad de un subsistema, proporcionando una interfaz simple y unificada.",
        recomendacion: "Revisa ejemplos del patrón Facade y cómo simplifica la interacción con sistemas complejos."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000040",
        type: "THEORY",
        question: "¿Cuál es la diferencia entre Decorator y Proxy?",
        options: ["Observer garantiza entrega exactamente una vez sin mecanismos adicionales", "Decorator añade responsabilidades dinámicamente; Proxy controla el acceso", "Strategy crea una instancia única compartida por toda la aplicación"],
        answer: 1,
        descripcion: "Decorator añade responsabilidades dinámicamente a un objeto, mientras que Proxy controla el acceso o añade lógica adicional al interactuar con el objeto real.",
        recomendacion: "Estudia los patrones Decorator y Proxy, y revisa ejemplos para entender sus diferencias y aplicaciones."
      }
    ]
  },
  {
    topic: "patrones de arquitectura en la nube",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000041",
        type: "THEORY",
        question: "¿Qué permite el patrón 'Sidecar'?",
        options: ["CQRS impide lecturas en consistencia eventual por diseño", "Añadir capacidades (logging, proxy) a un contenedor sin alterar el código", "Saga ejecuta una transacción distribuida única y atómica"],
        answer: 1,
        descripcion: "El patrón Sidecar permite añadir capacidades como logging o proxy a un contenedor sin modificar el código del microservicio, facilitando la extensión y mantenimiento.",
        recomendacion: "Estudia el patrón Sidecar y revisa ejemplos de su uso en arquitecturas de microservicios y Kubernetes."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000042",
        type: "THEORY",
        question: "¿Para qué sirve el patrón 'CQRS'?",
        options: ["Saga ejecuta una transacción distribuida única y atómica", "Separar las operaciones de lectura de las de escritura", "Sidecar reemplaza el microservicio principal durante fallos"],
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
        options: ["Sidecar reemplaza el microservicio principal durante fallos", "Punto único de entrada, ruteo y agregación para microservicios", "Saga ejecuta una transacción distribuida única y atómica"],
        answer: 1,
        descripcion: "El patrón API Gateway proporciona un punto único de entrada, ruteo y agregación para microservicios, simplificando la gestión y seguridad.",
        recomendacion: "Revisa la arquitectura de API Gateway y su uso en sistemas de microservicios."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000045",
        type: "THEORY",
        question: "¿Qué es el 'Event Sourcing'?",
        options: ["Sidecar reemplaza el microservicio principal durante fallos", "Persistir el estado de un objeto como una secuencia de eventos inmutables", "CQRS impide lecturas en consistencia eventual por diseño"],
        answer: 1,
        descripcion: "Event Sourcing persiste el estado de un objeto como una secuencia de eventos inmutables, permitiendo reconstruir el estado y auditar cambios.",
        recomendacion: "Estudia el patrón Event Sourcing y revisa ejemplos de su implementación en sistemas distribuidos."
      }
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
        options: ["Un Monolito Modular requiere desplegar cada módulo por separado", "La gestión de la red, latencia y consistencia distribuida", "El Teorema CAP garantiza las tres propiedades cuando hay replicación síncrona"],
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
        options: ["Microservicios eliminan la latencia de red mediante colas internas", "Desacoplar el núcleo de negocio de las tecnologías externas", "El Teorema CAP garantiza las tres propiedades cuando hay replicación síncrona"],
        answer: 1,
        descripcion: "La Arquitectura Hexagonal desacopla el núcleo de negocio de las tecnologías externas, facilitando la prueba y evolución del sistema.",
        recomendacion: "Estudia la Arquitectura Hexagonal y revisa ejemplos de implementación en proyectos Java."
      }
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
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000054",
        type: "THEORY",
        question: "¿Qué son los niveles del 'Richardson Maturity Model'?",
        options: ["GraphQL sustituye completamente a SQL en la capa de persistencia", "Una escala para medir qué tan fiel es una API a los principios REST", "gRPC funciona nativamente en navegadores sin ningún proxy o pasarela"],
        answer: 1,
        descripcion: "El Richardson Maturity Model es una escala para medir qué tan fiel es una API a los principios REST, desde recursos simples hasta HATEOAS.",
        recomendacion: "Revisa los niveles del Richardson Maturity Model y ejemplos de cada uno."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000055",
        type: "THEORY",
        question: "¿Qué es un WebHook?",
        options: ["GraphQL sustituye completamente a SQL en la capa de persistencia", "Comunicación asíncrona donde el servidor notifica eventos al cliente", "gRPC funciona nativamente en navegadores sin ningún proxy o pasarela"],
        answer: 1,
        descripcion: "Un WebHook es una comunicación asíncrona donde el servidor notifica eventos al cliente mediante peticiones HTTP, facilitando la integración entre sistemas.",
        recomendacion: "Estudia casos de uso de WebHooks y cómo implementarlos de forma segura."
      }
    ]
  },
  {
    topic: "métodos http",
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
      }
    ]
  },
  {
    topic: "solid y acid",
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
      }
    ]
  },
  {
    topic: "sql vs nosql",
    items: [
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000066",
        type: "THEORY",
        question: "¿Cuál es la principal característica de las bases de datos SQL?",
        options: ["Redis se usa principalmente para almacenar archivos binarios grandes", "Esquema rígido y transacciones ACID robustas", "SQL no soporta transacciones distribuidas entre tablas"],
        answer: 1,
        descripcion: "Las bases de datos SQL se caracterizan por tener un esquema rígido y soportar transacciones ACID robustas, garantizando integridad y consistencia.",
        recomendacion: "Estudia los conceptos de esquema y transacciones ACID en bases de datos relacionales."
      },
      {
        id: "b1a7c2e0-1a11-4f56-9abc-000000000067",
        type: "THEORY",
        question: "¿Qué significa que NoSQL sea 'Schemaless'?",
        options: ["Redis se usa principalmente para almacenar archivos binarios grandes", "Que no requiere un esquema fijo previo a la inserción", "SQL no soporta transacciones distribuidas entre tablas"],
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
        options: ["Redis se usa principalmente para almacenar archivos binarios grandes", "MongoDB", "NoSQL requiere esquema rígido para lecturas eficientes"],
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
      }
    ]
  }
];