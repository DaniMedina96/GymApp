# GymApp

POST /api/auth/login
Content-Type: application/json

{
  "username": "usuario",
  "password": "contraseña"
}

POST /api/auth/register
Content-Type: application/json

{
  "username": "nuevoUsuario",
  "email": "email@dominio.com",
  "password": "contraseña",
  "confirmPassword": "contraseña"
}
