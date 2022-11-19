// agregar funciones que lean y escriban json de la carpeta data.
// Esto sirve para prototipar si es que el backend no funciona.

import usuarios from "../data/usuarios.json"
import carreras from "../data/carreras.json"

export function loginUser(usuario) {
  console.log(usuarios)
  return usuarios.find(u => u.email === usuario.email && u.password === usuario.password)
}

export function registerUser(usuario) {
  usuarios.push(usuario)
  console.log(usuarios)
}

export function getCarreraByID(id) {
  return carreras.find(c => c.id === id)
}