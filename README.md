# GymApp

| METHOD | ENDPOINT                | TOKEN          | ROLE    | DESCRIPTION                  | POST PARAMS                               | RETURNS                                     |
|--------|-------------------------|----------------|---------|------------------------------|-------------------------------------------|---------------------------------------------|
| POST   | /auth/signup            | -              | user    | User Signup                  | name, email, password                     | { message: string, result: token }          |
| POST   | /auth/login             | -              | user    | User Login                   | email, password                           | { message: string, result: token }          |
| GET    | /users/{userId}         | Bearer {token} | user    | Obtener información de usuario | -                                         | { user: object }                            |
| PUT    | /users/{userId}         | Bearer {token} | user    | Actualizar información de usuario | username, email, bio                      | { message: string, user: object }           |
| GET    | /exercises              | Bearer {token} | user    | Listar todos los ejercicios  | -                                         | { exercises: [array of exercises] }         |
| POST   | /exercises              | Bearer {token} | user    | Crear un nuevo ejercicio     | name, description, category, difficulty   | { message: string, exercise: object }       |
| PUT    | /exercises/{exerciseId} | Bearer {token} | user    | Actualizar un ejercicio      | name, description, category, difficulty   | { message: string, exercise: object }       |
| DELETE | /exercises/{exerciseId} | Bearer {token} | user    | Eliminar un ejercicio        | -                                         | { message: string }                         |
| GET    | /routines               | Bearer {token} | user    | Listar todas las rutinas     | -                                         | { routines: [array of routines] }           |
| POST   | /routines               | Bearer {token} | user    | Crear una nueva rutina       | name, description, exercises (array)      | { message: string, routine: object }        |
| PUT    | /routines/{routineId}   | Bearer {token} | user    | Actualizar una rutina        | name, description, exercises (array)      | { message: string, routine: object }        |
| DELETE | /routines/{routineId}   | Bearer {token} | user    | Eliminar una rutina          | -                                         | { message: string }                         |


## API Endpoints para Gym App

### Usuarios
- **GET `/usuarios`**: Devuelve una lista de todos los usuarios.
- **GET `/usuarios/{id}`**: Devuelve los detalles de un usuario específico.
- **POST `/usuarios`**: Crea un nuevo usuario.
- **PUT `/usuarios/{id}`**: Actualiza los datos de un usuario.
- **DELETE `/usuarios/{id}`**: Elimina un usuario.

### Ejercicios
- **GET `/ejercicios`**: Devuelve todos los ejercicios.
- **GET `/ejercicios/{id}`**: Detalles de un ejercicio específico.
- **POST `/ejercicios`**: Agrega un nuevo ejercicio.
- **PUT `/ejercicios/{id}`**: Actualiza un ejercicio existente.
- **DELETE `/ejercicios/{id}`**: Elimina un ejercicio.

### Rutinas
- **GET `/rutinas`**: Lista todas las rutinas.
- **GET `/rutinas/{id}`**: Devuelve detalles de una rutina específica.
- **POST `/rutinas`**: Crea una nueva rutina.
- **PUT `/rutinas/{id}`**: Modifica una rutina existente.
- **DELETE `/rutinas/{id}`**: Borra una rutina.

### Grupos Musculares
- **GET `/grupos_musculares`**: Lista todos los grupos musculares.
- **GET `/grupos_musculares/{id}`**: Información de un grupo muscular específico.

### Planificación
- **GET `/planing`**: Lista todas las planificaciones.
- **GET `/planing/{id}`**: Detalles de una planificación específica.
- **POST `/planing`**: Crea una nueva planificación.
- **PUT `/planing/{id}`**: Actualiza una planificación existente.
- **DELETE `/planing/{id}`**: Elimina una planificación.

### Autenticación
- **POST `/login`**: Inicia sesión de un usuario.
- **POST `/logout`**: Cierra sesión de un usuario.
