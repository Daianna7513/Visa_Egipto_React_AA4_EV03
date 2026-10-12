
import { useState } from 'react'
import './App.css'

// Componente que muestra el encabezado de la aplicación.
function Encabezado() {
  return (
    <header>
      <h1>Visa a Egipto</h1>
      <p>Sistema de información y solicitud de visas</p>
    </header>
  )
}

// Componente de navegación entre las secciones.
function Navegacion() {
  return (
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#requisitos">Requisitos</a>
      <a href="#solicitud">Solicitar visa</a>
    </nav>
  )
}

// Componente que presenta los requisitos generales.
function Requisitos() {
  return (
    <section id="requisitos">
      <h2>Requisitos para solicitar una visa</h2>
      <p>
        Consulta los documentos y condiciones necesarios
        para iniciar tu solicitud de visa a Egipto.
      </p>
      <ul>
        <li>Pasaporte vigente.</li>
        <li>Formulario de solicitud diligenciado.</li>
        <li>Fotografía reciente.</li>
        <li>Documentación adicional según el tipo de visa.</li>
      </ul>
      <p>
        Los requisitos definitivos deben verificarse
        con las autoridades consulares correspondientes.
      </p>
    </section>
  )
}

// Formulario interactivo con validación de campos.
function FormularioSolicitud() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [tipoVisa, setTipoVisa] = useState('')
  const [mensaje, setMensaje] = useState('')

  function enviarSolicitud(evento) {
    evento.preventDefault()

    if (!nombre.trim() || !correo.trim() || !tipoVisa) {
      setMensaje('Por favor, completa todos los campos.')
      return
    }

    // Demostración front-end: no se envían datos al servidor.
    setMensaje('Formulario validado correctamente (demostración).')
  }

  return (
    <section id="solicitud">
      <h2>Formulario de solicitud</h2>

      <form onSubmit={enviarSolicitud}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
        />

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
        />

        <label htmlFor="tipoVisa">Tipo de visa</label>
        <select
          id="tipoVisa"
          value={tipoVisa}
          onChange={(evento) => setTipoVisa(evento.target.value)}
        >
          <option value="">Selecciona una opción</option>
          <option value="turismo">Turismo</option>
          <option value="negocios">Negocios</option>
          <option value="estudios">Estudios</option>
        </select>

        <button type="submit">Validar solicitud</button>
      </form>

      <p role="status">{mensaje}</p>
    </section>
  )
}

// Componente principal que integra los demás componentes.
function App() {
  return (
    <>
      <Encabezado />
      <Navegacion />

      <main>
        <section id="inicio">
          <h2>Bienvenido a Visa a Egipto</h2>
          <p>
            Explora información sobre visas y utiliza
            nuestro formulario de demostración.
          </p>
        </section>

        <Requisitos />
        <FormularioSolicitud />
      </main>

      <footer>
        <p>Proyecto formativo SENA - Visa a Egipto</p>
      </footer>
    </>
  )
}

export default App
