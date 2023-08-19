Sistema de Registro de Asistencia Estudiantil
Este proyecto tiene como objetivo procesar registros de estudiantes y sus asistencias para generar un reporte de presencia total por estudiante.

Decisiones de diseño e implementación
1. Representación de Datos
Objetos Estudiante: Decidimos representar a cada estudiante como un objeto. Esto permite una fácil extensión en el futuro si se requiere almacenar más información sobre cada estudiante. Cada estudiante tiene un nombre, totalMinutes (para acumular el tiempo total de asistencia) y un Set llamado days que almacena los días en los que el estudiante ha estado presente.

Usar un Set para los días es eficiente ya que garantiza unicidad, evitando que un estudiante sea contabilizado más de una vez por día.

2. Modularización
Estructura modular: El código se ha dividido en varios módulos:

timeUtils: Funciones relacionadas con el manejo del tiempo.
dataProcessing: Funciones para procesar la entrada de datos y generar el reporte.
fileHandler: Funciones para leer y escribir en archivos.
La decisión de modularizar permite un mejor mantenimiento, legibilidad y facilita la extensión del código en el futuro.

3. Validaciones
Hemos agregado validaciones en diferentes niveles:

Validación de formato de tiempo.
Validación de duración de la asistencia.
Validación de datos de entrada.
Estas validaciones aseguran que los datos procesados sean coherentes y relevantes.

4. Pruebas Unitarias
Las pruebas unitarias se implementaron usando mocha y chai. Estas herramientas son estándares en la comunidad de Node.js y ofrecen una amplia gama de funciones para escribir y ejecutar pruebas. Cada función principal cuenta con su conjunto de pruebas para garantizar su correcto funcionamiento.

5. Gestión de archivos y estructura de directorios
Para mantener un proyecto ordenado, hemos colocado el código fuente en una carpeta src/. Esto separa claramente el código fuente de otros archivos y directorios en el proyecto, como node_modules/.

6. Razonamiento detrás de las elecciones
Eficiencia y legibilidad: Se eligieron estructuras de datos (como el Set para días) no solo por eficiencia, sino también por legibilidad. Esta combinación garantiza que el código sea fácilmente comprensible y eficiente en términos de rendimiento.

Modularización por funcionalidad: La decisión de dividir el código en módulos se tomó para separar las responsabilidades. Esto facilita la comprensión del código, y hace que las futuras modificaciones o adiciones sean más sencillas.

Enfoque en validaciones: Las validaciones son cruciales en cualquier sistema de procesamiento de datos. Garantizan que los datos ingresados sean coherentes y reducen la probabilidad de errores durante el procesamiento.