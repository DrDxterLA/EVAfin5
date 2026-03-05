# Evaluación Práctica – Módulo 5
## Consumo y Gestión de Datos con fetch

### 🎯 Objetivo
Consumir datos desde un servicio web utilizando fetch con async/await,
almacenarlos en una clase y exponer métodos que permitan organizar
y presentar la información.

---

## 📡 Endpoint utilizado

https://jsonplaceholder.typicode.com/users

---


---

## 🏗️ Clase Implementada

### UsersService

**Propiedades**
- this.users → almacena el array de usuarios.

**Método init()**
- Realiza la petición con fetch.
- Convierte la respuesta a JSON.
- Guarda los datos en this.users.
- Maneja errores con try/catch.

---

## 📌 Métodos implementados

a) listarNombres()  
b) mostrarInfoBasicaPorNombre()  
c) mostrarDireccionPorNombre()  
d) mostrarInfoAvanzadaPorNombre()  
e) listarCompaniasYCatchphrase()  
f) listarNombresOrdenados()

---

## 🖥️ Interfaz

El archivo index.html contiene botones que ejecutan
cada método y muestran los resultados en un contenedor <pre>.

---

## ▶️ Cómo ejecutar

1. Descargar el proyecto.
2. Abrir el archivo index.html en el navegador.
3. Utilizar los botones para interactuar con los datos.
