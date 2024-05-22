import React from 'react'

export const MyComponent = () => {
    const name = "ines"
    const repositorio = "https://github.com/inesmariao/component-practice"
    const student = {
        name: "brigitte",
        lastname: "bolaños",
        correo: "brigittebedo@...",
        linkeind: "http/Brigittebolanos"
    }
  return (
    <div>
        <hr />
        <p>este es mi primer componenete</p>
        <h2>temas de react</h2>
        <ul>
            <li>componeentes</li>
            <li>estados- hooks</li>
            <li>eventos </li>
            <li>comunicacion</li>
        </ul>
        <hr />
        <h1>datos del docente</h1>
        <p>nombre {name} </p>
        <p>repositorio</p>
        <p>{repositorio} </p>
        <hr />
        <h2>datos del estudiante</h2>
        <p>nombre: {student.name} </p>
        <p>apellido: {student.lastname} </p>
        <p>correo: {student.correo} </p>
        <p>linkeind: {student.linkeind} </p>
    </div>
  )
}
