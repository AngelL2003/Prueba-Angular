CRUD de Pacientes — Angular

Aplicación web desarrollada con Angular como proyecto de práctica para aprender a consumir una API REST y construir las operaciones básicas de un CRUD.

El proyecto utiliza como entidad principal Paciente y permite trabajar con operaciones de creación, consulta, actualización y eliminación de registros.


Tecnologías utilizadas
Angular
TypeScript
HTML5
CSS3
HttpClient
Signals
Forms / ngModel
API REST
Git y GitHub

Funcionalidades

La aplicación implementa las operaciones principales de un CRUD:

GET → Listar pacientes
GET /id → Consultar un paciente por su ID
POST → Crear un paciente
PUT /id → Actualizar un paciente
DELETE /id → Eliminar un paciente
🧩 Estructura del proyecto
src/
├── app/
│   ├── components/
│   │   ├── paciente-lista/
│   │   ├── paciente-form/
│   │   ├── paciente-editar/
│   │   └── paciente-eliminar/
│   │
│   ├── interfaces/
│   │   └── paciente.ts
│   │
│   └── service/
│       └── paciente.service.ts

La estructura puede variar dependiendo de la organización utilizada durante el desarrollo.

Consumo de la API

La comunicación con la API se realiza mediante HttpClient.

El servicio de pacientes centraliza las peticiones HTTP:

PacienteComponent
       ↓
PacienteService
       ↓
HTTP Request
       ↓
API REST
Ejemplo de operaciones
GET       /api/Paciente
GET       /api/Paciente/{id}
POST      /api/Paciente
PUT       /api/Paciente/{id}
DELETE    /api/Paciente/{id}


Modelo

La entidad principal del proyecto es Paciente.

Ejemplo de estructura:

export interface Paciente {
  id: number;
  nombre: string;
  edad: number;
}

Los campos pueden variar dependiendo de la versión utilizada durante el desarrollo.


Formularios

Para la captura de información se utiliza ngModel, permitiendo conectar los campos del formulario con las propiedades del objeto Paciente.

Input
  ↓
ngModel
  ↓
Objeto Paciente
  ↓
PacienteService
  ↓
API

Signals

Se utilizan Signals para mantener el estado de los pacientes y permitir que la interfaz se actualice cuando cambian los datos.

Ejemplo conceptual:

pacientes = signal<Paciente[]>([]);

Después de recibir información de la API:

this.pacientes.set(data);

En la plantilla se puede acceder al valor mediante:

pacientes()



Objetivo del proyecto

Este proyecto fue desarrollado principalmente como práctica de Angular y consumo de APIs REST, trabajando conceptos fundamentales para el desarrollo frontend:

Componentes
Servicios
Interfaces
Inyección de dependencias
HttpClient
Observables y subscribe
Formularios
ngModel
Signals
Operaciones CRUD
Comunicación entre componentes



Aprendizajes

Durante el desarrollo se practicó especialmente el flujo:

API
 ↓
Controller / Endpoints
 ↓
Interface
 ↓
Angular Service
 ↓
Component
 ↓
HTML

Este flujo permite analizar una API existente y construir en Angular la estructura necesaria para consumirla.

Ejecución del proyecto

Instalar las dependencias:

npm install

Ejecutar el proyecto:

ng serve

Después abrir en el navegador la dirección indicada por Angular CLI.
