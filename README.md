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


